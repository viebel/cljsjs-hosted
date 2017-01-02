goog.provide('kemia.layout.RingPlacerTest');
goog.require('kemia.ring.Testdata.biphenyl');
goog.require('kemia.ring.Testdata.azulene');
goog.require('goog.testing.jsunit');
goog.require('kemia.layout.RingPlacer');
goog.require('kemia.io.smiles.SmilesParser');
goog.require('kemia.io.mdl');
goog.require('kemia.layout.CoordinateGenerator');
goog.require('goog.debug.Console');
goog.require('goog.debug.Logger');



function testGetRingCenterOfFirstRing() {
	var mol = kemia.io.smiles.SmilesParser.parse('c1ccccc1');
	var center = kemia.layout.RingPlacer.getRingCenterOfFirstRing(mol
			.getRings()[0], new kemia.layout.Vector2D(1, 1), 1.25)
	assertEquals(-0.7654655446197434, center.x);
	assertEquals(0.7654655446197435, center.y);
}

//function testSpiroDecane() {
//	var mol = kemia.io.mdl.readMolfile(spiro_decane);
//	goog.array.forEach(mol.atoms, function(atom) {
//		atom.coord.x = 0.0;
//		atom.coord.y = 0.0;
//	});
//	mol = kemia.layout.CoordinateGenerator.generate(mol);
//
//	goog.array.forEach(mol.atoms, function(atom) {
//		assertNotNaN(atom.coord.x);
//		assertNotNaN(atom.coord.y);
//	});
//}

function testBiphenyl() {
	var mol = kemia.io.mdl.readMolfile(kemia.ring.Testdata.biphenyl);
	goog.array.forEach(mol.atoms, function(atom) {
		atom.coord.x = 0.0;
		atom.coord.y = 0.0;
	});
	mol = kemia.layout.CoordinateGenerator.generate(mol);

	goog.array.forEach(mol.atoms, function(atom) {
		assertNotNaN(atom.coord.x);
		assertNotNaN(atom.coord.y);
	});
}


//function testAlphaPinene() {
//	var mol = kemia.io.mdl.readMolfile(alpha_pinene);
//	goog.array.forEach(mol.atoms, function(atom) {
//		atom.coord.x = 0.0;
//		atom.coord.y = 0.0;
//	});
//	mol = kemia.layout.CoordinateGenerator.generate(mol);
//	console.log(mol.toString());
//	goog.array.forEach(mol.atoms, function(atom) {
//		assertNotNaN(atom.coord.x);
//		assertNotNaN(atom.coord.y);
//	});
//}


function testAzulene() {
	var mol = kemia.io.mdl.readMolfile(kemia.ring.Testdata.azulene);
	goog.array.forEach(mol.atoms, function(atom) {
		atom.coord.x = 0.0;
		atom.coord.y = 0.0;
	});
	mol = kemia.layout.CoordinateGenerator.generate(mol);
	goog.array.forEach(mol.atoms, function(atom) {
		assertNotNaN(atom.coord.x);
		assertNotNaN(atom.coord.y);
	});
}

function testBenzene(){
	var mol = kemia.io.smiles.SmilesParser.parse('c1ccccc1');
	goog.array.forEach(mol.atoms, function(atom) {
		atom.coord.x = 0.0;
		atom.coord.y = 0.0;
	});
	mol = kemia.layout.CoordinateGenerator.generate(mol);
	goog.array.forEach(mol.atoms, function(atom) {
		assertNotNaN(atom.coord.x);
		assertNotNaN(atom.coord.y);
	});
};

function testFindNextRingBondWithUnplacedRingAtom(){
	var atom1 = new kemia.model.Atom("C");
	var atom2 = new kemia.model.Atom("O");
	atom1.setFlag(kemia.model.Flags.ISPLACED, true);
	atom2.setFlag(kemia.model.Flags.ISINRING, true);
	var bond = new kemia.model.Bond(atom1, atom2);

	assertEquals(bond, kemia.layout.RingPlacer.findNextRingBondWithUnplacedRingAtom([bond]));
}
