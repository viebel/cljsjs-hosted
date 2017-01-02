goog.provide('kemia.layout.CoordinateGeneratorTest');
goog.require('goog.testing.jsunit');
goog.require('kemia.model.Molecule');
goog.require('kemia.model.Bond');
goog.require('kemia.layout.CoordinateGenerator');
goog.require('kemia.ring.RingPartitioner');

function testSingleAtom_00() {
	var mol = new kemia.model.Molecule;
	mol.addAtom(new kemia.model.Atom("C"));
	mol = kemia.layout.CoordinateGenerator.generate(mol);

	assertEquals(mol.getAtom(0).coords.x, 0);
	assertEquals(mol.getAtom(0).coords.y, 0);
}

function testChain() {
	var mol = new kemia.model.Molecule;
	var atom1 = new kemia.model.Atom("A");
	mol.addAtom(atom1);
	var atom2 = new kemia.model.Atom("B");
	mol.addAtom(atom2);
	var atom3 = new kemia.model.Atom("C");
	mol.addAtom(atom3);
	var atom4 = new kemia.model.Atom("D");
	mol.addAtom(atom4);
	var atom5 = new kemia.model.Atom("E");
	mol.addAtom(atom5);
	var atom6 = new kemia.model.Atom("F");
	mol.addAtom(atom6);
	var atom7 = new kemia.model.Atom("G");
	mol.addAtom(atom7);
	var atom8 = new kemia.model.Atom("H");
	mol.addAtom(atom8);
	var atom9 = new kemia.model.Atom("I");
	mol.addAtom(atom9);
	var atom10 = new kemia.model.Atom("J");
	mol.addAtom(atom10);

	mol.addBond(new kemia.model.Bond(atom1, atom2));
	mol.addBond(new kemia.model.Bond(atom2, atom3));
	mol.addBond(new kemia.model.Bond(atom2, atom4));
	mol.addBond(new kemia.model.Bond(atom4, atom5));
	mol.addBond(new kemia.model.Bond(atom4, atom6));
	mol.addBond(new kemia.model.Bond(atom6, atom7));
	mol.addBond(new kemia.model.Bond(atom3, atom8));
	mol.addBond(new kemia.model.Bond(atom7, atom9));
	mol.addBond(new kemia.model.Bond(atom5, atom10));

	mol = kemia.layout.CoordinateGenerator.generate(mol);

	// assert something

}
