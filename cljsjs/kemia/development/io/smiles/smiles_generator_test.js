goog.provide('kemia.io.smiles.SmilesGeneratorTest');
goog.require('goog.testing.jsunit');
goog.require('kemia.model.Molecule');
goog.require('kemia.model.Atom');
goog.require('kemia.model.Bond');
goog.require('kemia.io.smiles.SmilesGenerator'); 

// mangle test name so it is not autorun
function test01SmilesGeneration() {
	var mol = new kemia.model.Molecule();
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

	var smiles = kemia.io.smiles.SmilesGenerator.generate(mol, false);
	assertTrue('not implemented', false);
}