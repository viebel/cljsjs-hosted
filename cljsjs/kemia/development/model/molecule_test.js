goog.provide('kemia.model.MoleculeTest');
goog.require('goog.testing.jsunit');
goog.require('kemia.model.Molecule');
goog.require('kemia.model.Atom');
goog.require('kemia.model.Bond');
goog.require('goog.debug.Trace');
goog.require('goog.debug.Logger');
goog.require('goog.debug.Console');
goog.require('kemia.model.Atom.Hybridizations');
goog.require('kemia.model.PseudoAtom');

var mol;



function testAddAtom() {
	var mol = new kemia.model.Molecule;
	mol.addAtom(new kemia.model.Atom("C"));
	mol.addAtom(new kemia.model.Atom("C"));
	mol.addAtom(new kemia.model.Atom("N"));
	mol.addAtom(new kemia.model.Atom("O"));
	mol.addAtom(new kemia.model.Atom("Cl"));

	assertEquals(5, mol.countAtoms());
	assertEquals("N", mol.getAtom(2).symbol);
	assertEquals("O", mol.getAtom(3).symbol);
	assertEquals("Cl", mol.getAtom(4).symbol);

	assertEquals(2, mol.indexOfAtom(mol.getAtom(2)));
	assertEquals(0, mol.indexOfAtom(mol.getAtom(0)));

}

function testAddBond() {
	var mol = new kemia.model.Molecule;
	var atom1 = new kemia.model.Atom("C");
	var atom2 = new kemia.model.Atom("C");
	var atom3 = new kemia.model.Atom("C");
	var atom4 = new kemia.model.Atom("O");

	mol.addBond(new kemia.model.Bond(atom1, atom2));
	mol.addBond(new kemia.model.Bond(atom2, atom3));
	mol.addBond(new kemia.model.Bond(atom3, atom4));

	assertEquals(2, atom2.countBonds());

	assertEquals(1, atom1.countBonds());

	assertEquals(3, mol.countBonds());
}

function testRemoveAtom() {
	var mol = new kemia.model.Molecule;
	var atom1 = new kemia.model.Atom("C");
	var atom2 = new kemia.model.Atom("C");
	var atom3 = new kemia.model.Atom("C");
	var atom4 = new kemia.model.Atom("O");

	mol.addAtom(atom1);
	mol.addAtom(atom2);
	mol.addAtom(atom3);
	mol.addAtom(atom4);

	var bond1 = new kemia.model.Bond(atom1, atom2);
	var bond2 = new kemia.model.Bond(atom2, atom3);
	var bond3 = new kemia.model.Bond(atom3, atom4);

	mol.addBond(bond1);
	mol.addBond(bond2);
	mol.addBond(bond3);

	assertEquals(4, mol.countAtoms());

	mol.removeAtom(atom2);

	assertEquals(1, mol.countBonds());

	assertEquals(3, mol.countAtoms());

	mol.removeAtom(0);

	assertEquals(2, mol.countAtoms());

}

function testRemoveBond() {
	var mol = new kemia.model.Molecule;
	var atom1 = new kemia.model.Atom("C");
	var atom2 = new kemia.model.Atom("C");
	var atom3 = new kemia.model.Atom("C");
	var atom4 = new kemia.model.Atom("O");

	mol.addAtom(atom1);
	mol.addAtom(atom2);
	mol.addAtom(atom3);
	mol.addAtom(atom4);

	var bond1 = new kemia.model.Bond(atom1, atom2);
	var bond2 = new kemia.model.Bond(atom2, atom3);
	var bond3 = new kemia.model.Bond(atom3, atom4);

	mol.addBond(bond1);
	mol.addBond(bond2);
	mol.addBond(bond3);

	assertEquals(3, mol.countBonds());

	mol.removeBond(bond3);
	assertEquals(false, atom3.bonds.contains(bond3));
	assertEquals(2, mol.countBonds());

	mol.removeBond(0);
	assertEquals(1, mol.countBonds());
}

function testPseudoAtom() {
	var mol = new kemia.model.Molecule;
	var pseudoAtom = new kemia.model.PseudoAtom();
	assertEquals("R", pseudoAtom.symbol);
	assertEquals("*", pseudoAtom.label);
}

function testHybridization() {
	var mol = new kemia.model.Molecule;
	var atom = new kemia.model.Atom("C");
	atom.hybridization = kemia.model.Atom.Hybridizations.SP2;
	assertEquals(kemia.model.Atom.Hybridizations.SP2, atom.hybridization);
}

//function testImplicitHydrogenCountAromatic() {
//
//	var mol = new kemia.model.Molecule;
//	var atom1 = new kemia.model.Atom("C");
//	var atom2 = new kemia.model.Atom("C");
//	var atom3 = new kemia.model.Atom("C");
//	var atom4 = new kemia.model.Atom("C");
//	var atom5 = new kemia.model.Atom("C");
//	var atom6 = new kemia.model.Atom("C");
//
//	mol.addBond(new kemia.model.Bond(atom1, atom2));
//	mol.addBond(new kemia.model.Bond(atom2, atom3));
//	mol.addBond(new kemia.model.Bond(atom3, atom4));
//	mol.addBond(new kemia.model.Bond(atom4, atom5));
//	mol.addBond(new kemia.model.Bond(atom5, atom6));
//	mol.addBond(new kemia.model.Bond(atom6, atom1));
//
//	mol.bonds[0].aromatic = true;
//	mol.bonds[1].aromatic = true;
//	mol.bonds[2].aromatic = true;
//	mol.bonds[3].aromatic = true;
//	mol.bonds[4].aromatic = true;
//	mol.bonds[5].aromatic = true;
//
//	assertEquals(1, atom1.hydrogenCount());
//	assertEquals(1, atom2.hydrogenCount());
//	assertEquals(1, atom3.hydrogenCount());
//}

function testImplicitHydrogenCount() {

	var mol = new kemia.model.Molecule;
	var atom1 = new kemia.model.Atom("C");
	var atom2 = new kemia.model.Atom("C");
	var atom3 = new kemia.model.Atom("C");
	var atom4 = new kemia.model.Atom("C");

	mol.addBond(new kemia.model.Bond(atom1, atom2));
	mol.addBond(new kemia.model.Bond(atom2, atom3));
	mol.bonds[mol.bonds.length - 1].stereo = 'up';
	mol.addBond(new kemia.model.Bond(atom3, atom4, 2));

	assertEquals(3, atom1.hydrogenCount());
	assertEquals(2, atom2.hydrogenCount());
	assertEquals(1, atom3.hydrogenCount());
}
	
function buildMolecule(){
	var mol1 = new kemia.model.Molecule('mol1');
	var a1a = new kemia.model.Atom('a', 0, 1);
	var a1b = new kemia.model.Atom('b', 0, 2);
	var a1c = new kemia.model.Atom('c', 0, 3);
	var a1d = new kemia.model.Atom('d', 0, 4);
	var a1e = new kemia.model.Atom('e', 0, 5);
	var a1f = new kemia.model.Atom('f', 0, 6);
	var a1g = new kemia.model.Atom('g', 0, 7);
	var a1h = new kemia.model.Atom('h', 0, 8);
	var b1a = new kemia.model.Bond(a1a, a1b);
	var b1b = new kemia.model.Bond(a1b, a1c);
	var b1c = new kemia.model.Bond(a1b, a1d);
	var b1d = new kemia.model.Bond(a1d, a1e);
	var b1e = new kemia.model.Bond(a1e, a1f);
	var b1f = new kemia.model.Bond(a1f, a1g);
	var b1g = new kemia.model.Bond(a1g, a1h);
	var b1h = new kemia.model.Bond(a1h, a1d);
	mol1.addAtom(a1a);
	mol1.addAtom(a1b);
	mol1.addAtom(a1c);
	mol1.addAtom(a1d);
	mol1.addAtom(a1e);
	mol1.addAtom(a1f);
	mol1.addAtom(a1g);
	mol1.addAtom(a1h);
	mol1.addBond(b1a);
	mol1.addBond(b1b);
	mol1.addBond(b1c);
	mol1.addBond(b1d);
	mol1.addBond(b1e);
	mol1.addBond(b1f);
	mol1.addBond(b1g);
	mol1.addBond(b1h);
	return mol1;
}

function testMerge() {
	var mol1 = new kemia.model.Molecule('mol1');
	var a1a = new kemia.model.Atom('a', 0, 1);
	var a1b = new kemia.model.Atom('b', 0, 2);
	var a1c = new kemia.model.Atom('c', 0, 3);
	var b1a = new kemia.model.Bond(a1a, a1b);
	var b1b = new kemia.model.Bond(a1b, a1c);
	mol1.addAtom(a1a);
	mol1.addAtom(a1b);
	mol1.addAtom(a1c);
	mol1.addBond(b1a);
	mol1.addBond(b1b);

	var mol2 = new kemia.model.Molecule('mol2');
	var a2d = new kemia.model.Atom('d', 2, 1);
	var a2e = new kemia.model.Atom('e', 2, 2);
	var a2f = new kemia.model.Atom('f', 2, 3);
	var b2a = new kemia.model.Bond(a2d, a2e);
	var b2b = new kemia.model.Bond(a2e, a2f);
	mol2.addAtom(a2d);
	mol2.addAtom(a2e);
	mol2.addAtom(a2f);
	mol2.addBond(b2a);
	mol2.addBond(b2b);
	
//	this.logger.info(mol1.toString());
//	this.logger.info(mol2.toString());
	mol1.merge(mol2, b2a, b1b, a2d, a1c);
//	this.logger.info(mol1.toString());
	
	assertEquals(4, mol1.atoms.length);
	assertEquals(3, mol1.bonds.length);
		goog.array.forEach(mol1.bonds, function(b){
			assertEquals(mol1, b.molecule);
		})
	goog.array.forEach(mol1.atoms, function(a){
//		logger.info(a.toString());
		assertEquals(mol1, a.molecule);
		goog.array.forEach(a.bonds.getValues(), function(b){
//			this.logger.info(b.toString());
			assert(goog.array.contains(mol1.bonds, b));
		})
	});
}