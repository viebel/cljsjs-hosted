/** 
 * Copyright 2010 Paul Novak (paul@wingu.com)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview io utility functions and factory methods for MDL formats
 */

goog.provide('kemia.io.mdl');

goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('kemia.model.Reaction');
goog.require('kemia.model.Molecule');
goog.require('kemia.model.Bond');
goog.require('kemia.model.Atom');

/** @const */ kemia.io.mdl.SINGLE_BOND = 1;
/** @const */ kemia.io.mdl.DOUBLE_BOND = 2;
/** @const */ kemia.io.mdl.TRIPLE_BOND = 3;
/** @const */ kemia.io.mdl.AROMATIC_BOND = 4;
/** @const */ kemia.io.mdl.SINGLE_OR_DOUBLE = 5;
/** @const */ kemia.io.mdl.SINGLE_OR_AROMATIC = 6;
/** @const */ kemia.io.mdl.DOUBLE_OR_AROMATIC = 7;
/** @const */ kemia.io.mdl.ANY = 8;
/** @const */ kemia.io.mdl.TRIPLE_BOND = 3;

/** @const */ kemia.io.mdl.NOT_STEREO = 0;
/** @const */ kemia.io.mdl.SINGLE_BOND_UP = 1;
/** @const */ kemia.io.mdl.SINGLE_BOND_UP_OR_DOWN = 4;
/** @const */ kemia.io.mdl.SINGLE_BOND_DOWN = 6;

/**
 * maps bond class to mdl molfile bond type code
 * @param{kemia.model.Bond} bond
 * @return{number}
 */
kemia.io.mdl.getTypeCode = function(bond){
	if (bond.aromatic){
		return kemia.io.mdl.AROMATIC_BOND;
	}
	if (bond.order == kemia.model.Bond.ORDER.SINGLE){
		return kemia.io.mdl.SINGLE_BOND;
	}
	if (bond.order == kemia.model.Bond.ORDER.DOUBLE){
		return kemia.io.mdl.DOUBLE_BOND;
	}
	if (bond.order == kemia.model.Bond.ORDER.TRIPLE){
		return kemia.io.mdl.TRIPLE_BOND;
	}
        throw new Error("Invalid bond type [" + bond + "]");
};

/**
 * maps bond class to mdl molfile stereo type code
 * @param {kemia.model.Bond} bond
 * @return {number}
 */
kemia.io.mdl.getStereoCode = function(bond){
	if (bond.stereo == kemia.model.Bond.STEREO.UP){
		return kemia.io.mdl.SINGLE_BOND_UP;
	}
	if (bond.stereo == kemia.model.Bond.STEREO.DOWN){
		return kemia.io.mdl.SINGLE_BOND_DOWN;
	}
	if (bond.stereo == kemia.model.Bond.STEREO.UP_OR_DOWN){
		return kemia.io.mdl.SINGLE_BOND_UP_OR_DOWN;
	}
	return kemia.io.mdl.NOT_STEREO;
}

/**
 * factory method for bonds
 * 
 * @param{number}type mdl type code
 * @param{number}stereo mdl stereo type code
 * @param{kemia.model.Atom} source atom at source end of bond
 * @param{kemia.model.Atom} target atom at target end of bond
 * 
 * @return{kemia.model.Bond}
 */
kemia.io.mdl.createBond = function(type, stereo, source, target) {
	switch (type) {
	case kemia.io.mdl.SINGLE_BOND:
		switch (stereo) {
		case kemia.io.mdl.NOT_STEREO:
			return new kemia.model.Bond(source, target);
		case kemia.io.mdl.SINGLE_BOND_UP:
			return new kemia.model.Bond(source, target, kemia.model.Bond.ORDER.SINGLE, kemia.model.Bond.STEREO.UP);
		case kemia.io.mdl.SINGLE_BOND_UP_OR_DOWN:
			return new kemia.model.Bond(source, target, kemia.model.Bond.ORDER.SINGLE, kemia.model.Bond.STEREO.UP_OR_DOWN);
		case kemia.io.mdl.SINGLE_BOND_DOWN:
			return new kemia.model.Bond(source, target, kemia.model.Bond.ORDER.SINGLE, kemia.model.Bond.STEREO.DOWN);
		default:
			throw new Error("invalid bond type/stereo [" + type + "]/["
					+ stereo + "]");
		};
	case kemia.io.mdl.DOUBLE_BOND:
		return new kemia.model.Bond(source, target, kemia.model.Bond.ORDER.DOUBLE);
	case kemia.io.mdl.TRIPLE_BOND:
		return new kemia.model.Bond(source, target, kemia.model.Bond.ORDER.TRIPLE);
	case kemia.io.mdl.AROMATIC_BOND:
		var bond = new kemia.model.Bond(source, target);
                bond.aromatic = true;
                return bond;
	case kemia.io.mdl.SINGLE_OR_DOUBLE:
		throw new Error("type not implemented [" + type + "]");
	case kemia.io.mdl.SINGLE_OR_AROMATIC:
		throw new Error("type not implemented [" + type + "]");
	case kemia.io.mdl.DOUBLE_OR_AROMATIC: 
		throw new Error("type not implemented [" + type + "]");
	case kemia.io.mdl.ANY: 
		throw new Error("type not implemented [" + type + "]");
	default:
		throw new Error("invalid bond type/stereo [" + type + "]/[" + stereo
				+ "]");
	};
};

/**
 * convert a mdl block string to a molecule
 *  
 * @param {string} molfile string to convert
 * @return {kemia.model.Molecule}
 */
kemia.io.mdl.readMolfile = function(molfile) {

	var lineDelimiter = molfile.indexOf("\r\n") > 0 ? "\r\n" : "\n";
	var mol_lines = molfile.split(lineDelimiter);
	var name = mol_lines[0]
	var mol = new kemia.model.Molecule(name);
	var reg_num = mol_lines[1].slice(46,52).trim();
	mol.id = reg_num;
	/**format of second line of header
	 * IIPPPPPPPPMMDDYYHHmmddSSssssssssssEEEEEEEEEEEERRRRRR 
	 * User's first and last initials (l), program name (P), date/time (M/D/Y,H:m), dimensional codes (d), 
	 * scaling factors (S, s), energy (E) if modeling program input, internal registry number (R) if input 
	 * through MDL form. 
	 * **/
	var atom_count = parseInt(mol_lines[3].substr(0, 3), 10);
	var bond_count = parseInt(mol_lines[3].substr(3, 3), 10);

	for ( var i = 1; i <= atom_count; i++) {
		var line = mol_lines[i + 3];
		var symbol = line.substr(30, 4).replace(/(^\s*)|(\s*$)/g, "");

		var x = parseFloat(line.substr(0, 10));
		var y = parseFloat(line.substr(10, 10));
		// atom.z = parseFloat(line.substr(20, 10));

		// see page 15 of ctfile for details
		// http://www.symyx.com/downloads/public/ctfile/ctfile.pdf
		var ctfile_dd = parseInt(line.substr(34, 2), 10); // TODO implement
		// isotopic support
		var ctfile_ccc = parseInt(line.substr(36, 3), 10);
		// TODO support old-fashioned M ISO

		var charge = 0;

		if (ctfile_ccc == 0) {
		} else if (ctfile_ccc == 1) {
			charge = 3;
		} else if (ctfile_ccc == 2) {
			charge = 2;
		} else if (ctfile_ccc == 3) {
			charge = 1;
		} else if (ctfile_ccc == 4) {
			// TODO support doublet radical
		} else if (ctfile_ccc == 5) {
			charge = -1;
		} else if (ctfile_ccc == 6) {
			charge = -2;
		} else if (ctfile_ccc == 7) {
			charge = -3;
		}
		var atom = new kemia.model.Atom(symbol, x, y, charge);
		mol.addAtom(atom);
	}

	for ( var i = 1; i <= bond_count; i++) {
		var line = mol_lines[i + 3 + atom_count];
		// Don't forget to -1 because molfile numbering from 1 instead of 0

		var sourceAtom = mol.getAtom(parseInt(line.substr(0, 3), 10) - 1);

		var targetAtom = mol.getAtom(parseInt(line.substr(3, 3), 10) - 1);

		var bondType = parseInt(line.substr(6, 3), 10);
		var bondStereoType = parseInt(line.substr(9, 3), 10);
		var bond = kemia.io.mdl.createBond(bondType, bondStereoType,
				sourceAtom, targetAtom);

		mol.addBond(bond);

	}

	// Read M CHG
	var i = 4 + atom_count + bond_count, il = mol_lines.length;
	var superseded = false;
	while (true) {
		var line = mol_lines[i++];
		if (i == il || line.indexOf("M  END") >= 0) {
			break;
		}
		if (line.indexOf("M  CHG") >= 0) {
			/*
			 * TODO Charge [Generic] M CHGnn8 aaa vvv ... vvv: -15 to +15.
			 * Default of 0 = uncharged atom. When present, this property
			 * supersedes all charge and radical values in the atom block,
			 * forcing a 0 charge on all atoms not listed in an M CHG or M RAD
			 * line.
			 * 
			 */
			if (!superseded) {
				for ( var j = 0, jl = mol.countAtoms(); j < jl; j++) {
					mol.getAtom(j).charge = 0;
				}
				superseded = true;
			}
			var nn = parseInt(line.substr(6, 3), 10);
			for ( var k = 0; k < nn; k++) {
				var atomNum = parseInt(line.substr(10 + 8 * k, 3), 10);
				// console.debug(atomNum);
				var charge = parseInt(line.substr(14 + 8 * k, 3), 10);
				// console.debug(charge);
				mol.getAtom(atomNum - 1).charge = charge;
			}

		}
		// console.debug(line);
	}

	// TODO parse Charge, SuperAtom groups, Properties....

	return mol;

};

/**
 * convert Reaction to mdl RXN string
 * 
 * @param {kemia.model.Reaction} reaction, reaction to write
 * 
 * @return {string}
 */

kemia.io.mdl.writeRxnfile = function(reaction) {
	var result = "";
	result+= "$RXN\n\n\n\n"; //minimal empty header
	result+= (goog.string.repeat(" ", 3) + reaction.getReactants().length).slice(-3); // reactant 
	result+= (goog.string.repeat(" ", 3) + reaction.getProducts().length).slice(-3);  // and product counts
	result+="\n";
	
	goog.array.forEach(reaction.getReactants(), function(mol){
		result+="$MOL\n";
		result+=kemia.io.mdl.writeMolfile(mol);
	});
	
	goog.array.forEach(reaction.getProducts(), function(mol){
		result+="$MOL\n";
		result+=kemia.io.mdl.writeMolfile(mol);
	});
	return result;
}

/**
 * convert Molecule to molfile string
 * 
 * @param {kemia.model.Molecule} mol molecule to write
 * 
 * @return{string}
 */
kemia.io.mdl.writeMolfile = function(mol) {
	var molFile = "";
	var headerBlock = "";
	var countsLine = "";
	var atomBlock = "";
	var bondBlock = "";

	// Header block
	// Line 1: Molecule name
	// Line 2: This line has the format:
	// IIPPPPPPPPMMDDYYHHmmddSSssssssssssEEEEEEEEEEEERRRRRR
	// APtclcactv11051012262D 0   0.00000     0.00000
	// Line 3: A line for comments. If no comment is entered, a blank line must
	// be present.
	var now = new Date();
	var line1 = mol.name + "\n";
	var fmt = new goog.i18n.DateTimeFormat('MMddyyHHmm');
	var line2 = new goog.string.StringBuffer("  " , "Kemia   " , fmt.format(now));
	line2.append("2D 0   0.00000     0.00000");
	line2.append((goog.string.repeat(" ", 6) + goog.string.makeSafe(mol.id)).slice(-6)); 
	line2.append("\n");
	var line3 = "\n";
	var headerBlock = line1 + line2.toString() + line3;

	// Counts line
	var atomCount = (goog.string.repeat(" ", 3) + mol.countAtoms()).slice(-3);
	var bondCount = (goog.string.repeat(" ", 3) + mol.countBonds()).slice(-3);

	// TODO complete lll, fff, ccc, sss
	countsLine = atomCount + bondCount + "  0  0  0  0            999 V2000\n";

	// Atom block
	for (var i = 0; i < mol.countAtoms(); i++) {
		var atom = mol.getAtom(i);
		var xPos = (goog.string.repeat(" ", 10) + atom.coord.x.toFixed(4)).slice(-10);
		var yPos = (goog.string.repeat(" ", 10) + atom.coord.y.toFixed(4)).slice(-10);
		var zPos = (goog.string.repeat(" ", 10) + (0).toFixed(4)).slice(-10);
		var atomSymbol = (goog.string.repeat(" ", 3) + atom.symbol).slice(-3);

		// TODO: fill in more details on rest of atom line
		var filler = "  0  0  0  0  0  0  0  0  0  0  0  0";
		atomBlock += xPos + yPos + zPos + atomSymbol + "\n";
	}

	// Bond Block
	for (i = 0; i < mol.countBonds(); i++) {
		var bond = mol.getBond(i);
		var firstAtomNumber = mol.indexOfAtom(bond.source) + 1;
		var firstAtomString = (goog.string.repeat(" ", 3) + firstAtomNumber)
				.slice(-3);
		var secondAtomNumber = mol.indexOfAtom(bond.target) + 1;
		var secondAtomString = (goog.string.repeat(" ", 3) + secondAtomNumber)
				.slice(-3);
		var bondTypeString = (goog.string.repeat(" ", 3) + kemia.io.mdl.getTypeCode(bond))
				.slice(-3);
		var stereoTypeString = (goog.string.repeat(" ", 3) + kemia.io.mdl.getStereoCode(bond))
				.slice(-3);
		bondBlock += firstAtomString + secondAtomString + bondTypeString
				+ stereoTypeString + "\n";
	}

	molFile = headerBlock + countsLine + atomBlock + bondBlock + "M  END\n";;
	// alert(molFile);
	return molFile;

};


/**
 * convert rxnfile format string to reaction
 * 
 * @param {string} rxnfile to parse
 * @return{kemia.model.Reaction}
 */
kemia.io.mdl.readRxnfile = function(rxnfile) {
	var lineDelimiter = rxnfile.indexOf("\r\n") > 0 ? "\r\n" : "\n";
	var rxn_lines = rxnfile.split(lineDelimiter, 5);// only need first 5 lines
	if (rxn_lines[0].indexOf("$RXN") < 0) {
		throw "not a RXN file";
	}
	var reaction = new kemia.model.Reaction();
	reaction.header = rxn_lines[2] + lineDelimiter + rxn_lines[3];
	var reactant_count = parseInt(rxn_lines[4].substr(0, 3), 10);
	var product_count = parseInt(rxn_lines[4].substr(3, 3), 10);
	var rxn_blocks = rxnfile.split("$MOL" + lineDelimiter);
	for ( var i = 1, il = reactant_count; i <= il; i++) {
		var mol = kemia.io.mdl.readMolfile(rxn_blocks[i]);
		reaction.addReactant(mol);
	}
	for ( var i = 1, il = product_count; i <= il; i++) {
		var mol = kemia.io.mdl.readMolfile(rxn_blocks[i + reactant_count]);
		reaction.addProduct(mol);
	}
	return reaction;

};

