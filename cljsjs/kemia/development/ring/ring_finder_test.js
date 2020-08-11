goog.provide("kemia.ring.RingFinderTest");
goog.require('kemia.ring.RingFinder');
goog.require('goog.testing.jsunit');
goog.require('kemia.io.smiles.SmilesParser');
goog.require('kemia.io.mdl');
goog.require('kemia.ring.Testdata.azulene');
goog.require('kemia.ring.Testdata.alpha_pinene');
goog.require('kemia.ring.Testdata.biphenyl');
goog.require('kemia.ring.Testdata.spiro_decane');

var testFindAzulene = function() {
//	var mol = kemia.io.smiles.parse('c1cccc2cccc2c1');
	var mol = kemia.io.mdl.readMolfile(kemia.ring.Testdata.azulene);
	var rings = kemia.ring.RingFinder.findRings(mol);
	assertEquals('should find 2 rings', 2, rings.length);	
}

var testFindAlphaPinene = function() {
//	var mol = kemia.io.smiles.SmilesParser.parse('CC1=CCC2CC1C2(C)C');
	var mol=kemia.io.mdl.readMolfile(kemia.ring.Testdata.alpha_pinene);
	var rings = kemia.ring.RingFinder.findRings(mol);
	assertEquals('should find 2 rings', 2, rings.length);
}

function testFindBiphenyl(){
//	var mol = kemia.io.smiles.SmilesParser.parse('c1ccccc1(c2ccccc2)');
	var mol = kemia.io.mdl.readMolfile(kemia.ring.Testdata.biphenyl);
	var rings = kemia.ring.RingFinder.findRings(mol);
	assertEquals('should find 2 rings', 2, rings.length);
}

function testFindSpiro45Decane(){
//	var mol = kemia.io.smiles.SmilesParser.parse('O=C1CCC(=O)C12CCCCC2');
	var mol=kemia.io.mdl.readMolfile(kemia.ring.Testdata.spiro_decane);
	var rings = kemia.ring.RingFinder.findRings(mol);
	assertEquals('should find 2 rings', 2, rings.length);
}

function testFindIsopropylcyclopentane(){
	var mol = kemia.io.smiles.SmilesParser.parse('CC(C)C1CCCC1');
	var rings = kemia.ring.RingFinder.findRings(mol);
	assertEquals('should find 1 ring', 1, rings.length);
}

function testMergeTwoRings(){
	var molecule = kemia.io.smiles.SmilesParser.parse('C1CCCC1');
	var fragment = kemia.io.smiles.SmilesParser.parse('C1CCCCC1');
	var atom = molecule.atoms[0];
	var sprout_bond = molecule.sproutBond(atom,kemia.model.Bond.ORDER.SINGLE, kemia.model.Bond.STEREO.NOT_STEREO);
	var sprout_atom = sprout_bond.otherAtom(atom);
	var attachment_atom = fragment.atoms[0];
	var attachment_bond = fragment.sproutBond(attachment_atom,kemia.model.Bond.ORDER.SINGLE, kemia.model.Bond.STEREO.NOT_STEREO);
	molecule.merge(fragment, attachment_bond, sprout_bond,
			attachment_atom, sprout_atom);
	assertEquals('should find 2 rings', 2, kemia.ring.RingFinder.findRings(molecule).length);
}

function testFuseTwoRings(){
	var molecule = kemia.io.smiles.SmilesParser.parse('C1CCCCC1');
	var fragment = kemia.io.smiles.SmilesParser.parse('C1CCCCC1');
	var bond = molecule.bonds[0];
	molecule.merge(fragment, fragment.bonds[0], bond,
			fragment.bonds[0].target, bond.source);
	assertEquals('should find 2 rings', 2, kemia.ring.RingFinder.findRings(molecule).length);
}