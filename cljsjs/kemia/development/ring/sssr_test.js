goog.provide('kemia.ring.SssrTest')
goog.require('goog.testing.jsunit');
goog.require('goog.debug.Console');
goog.require('goog.debug.Logger');
goog.require('kemia.io.mdl');
goog.require('kemia.model.Molecule');
goog.require('kemia.model.Atom');
goog.require('kemia.model.Bond');
goog.require('kemia.ring.SSSR');

function testFig1() {
	// fig. 1 from the paper
	var atom1 = new kemia.model.Atom("C", 0, 0);
	var atom2 = new kemia.model.Atom("C", 0, 0);
	var atom3 = new kemia.model.Atom("C", 0, 0);
	var atom4 = new kemia.model.Atom("C", 0, 0);
	var atom5 = new kemia.model.Atom("C", 0, 0);
	var atom6 = new kemia.model.Atom("C", 0, 0);
	var atom7 = new kemia.model.Atom("C", 0, 0);
	var bond1 = new kemia.model.Bond(atom1, atom2);
	var bond2 = new kemia.model.Bond(atom2, atom3);
	var bond3 = new kemia.model.Bond(atom3, atom4);
	var bond4 = new kemia.model.Bond(atom4, atom5);
	var bond5 = new kemia.model.Bond(atom5, atom6);
	var bond6 = new kemia.model.Bond(atom6, atom7);
	var bond7 = new kemia.model.Bond(atom7, atom1);
	var bond8 = new kemia.model.Bond(atom6, atom2);

	var molecule = new kemia.model.Molecule();
	molecule.addAtom(atom1);
	molecule.addAtom(atom2);
	molecule.addAtom(atom3);
	molecule.addAtom(atom4);
	molecule.addAtom(atom5);
	molecule.addAtom(atom6);
	molecule.addAtom(atom7);
	molecule.addBond(bond1);
	molecule.addBond(bond2);
	molecule.addBond(bond3);
	molecule.addBond(bond4);
	molecule.addBond(bond5);
	molecule.addBond(bond6);
	molecule.addBond(bond7);
	molecule.addBond(bond8);

	// matrices from the paper
	var D = [ [ 0, 1, 2, 3, 3, 2, 1 ], [ 1, 0, 1, 2, 2, 1, 2 ],
			[ 2, 1, 0, 1, 2, 2, 3 ], [ 3, 2, 1, 0, 1, 2, 3 ],
			[ 3, 2, 2, 1, 0, 1, 2 ], [ 2, 1, 2, 2, 1, 0, 1 ],
			[ 1, 2, 3, 3, 2, 1, 0 ] ];

	var Pe1 = [
			[ [], [ [ 0 ] ], [ [ 0, 1 ] ], [ [ 0, 1, 2 ] ],
					[ [ 0, 7, 4 ], [ 6, 5, 4 ] ], [ [ 0, 7 ], [ 6, 5 ] ],
					[ [ 6 ] ] ],
			[ [ [ 0 ] ], [], [ [ 1 ] ], [ [ 1, 2 ] ], [ [ 7, 4 ] ], [ [ 7 ] ],
					[ [ 0, 6 ], [ 7, 5 ] ] ],
			[ [ [ 1, 0 ] ], [ [ 1 ] ], [], [ [ 2 ] ], [ [ 2, 3 ] ],
					[ [ 1, 7 ] ], [ [ 1, 0, 6 ], [ 1, 7, 5 ] ] ],
			[ [ [ 2, 1, 0 ] ], [ [ 2, 1 ] ], [ [ 2 ] ], [], [ [ 3 ] ],
					[ [ 3, 4 ] ], [ [ 3, 4, 5 ] ] ],
			[ [ [ 4, 7, 0 ], [ 4, 5, 6 ] ], [ [ 4, 7 ] ], [ [ 3, 2 ] ],
					[ [ 3 ] ], [], [ [ 4 ] ], [ [ 4, 5 ] ] ],
			[ [ [ 7, 0 ], [ 5, 6 ] ], [ [ 7 ] ], [ [ 7, 1 ] ], [ [ 4, 3 ] ],
					[ [ 4 ] ], [], [ [ 5 ] ] ],
			[ [ [ 6 ] ], [ [ 6, 0 ], [ 5, 7 ] ], [ [ 6, 0, 1 ], [ 5, 7, 1 ] ],
					[ [ 5, 4, 3 ] ], [ [ 5, 4 ] ], [ [ 5 ] ], [] ] ];

	var Pe2 = [
			[ [], [], [], [ [ 0, 7, 4, 3 ], [ 6, 5, 4, 3 ] ],
					[ [ 0, 1, 2, 3 ] ], [], [] ],
			[ [], [], [], [ [ 7, 4, 3 ] ], [ [ 1, 2, 3 ] ], [], [] ],
			[ [], [], [], [], [ [ 1, 7, 4 ] ], [ [ 2, 3, 4 ] ],
					[ [ 2, 3, 4, 5 ] ] ],
			[ [ [ 3, 4, 7, 0 ], [ 3, 4, 5, 6 ] ], [ [ 3, 4, 7 ] ], [], [], [],
					[ [ 2, 1, 7 ] ], [ [ 5, 7, 1, 2 ], [ 6, 0, 2, 1 ] ] ],
			[ [ [ 3, 2, 1, 0 ] ], [ [ 3, 2, 1 ] ], [ [ 4, 7, 1 ] ], [], [], [],
					[] ],
			[ [], [], [ [ 4, 3, 2 ] ], [ [ 7, 1, 2 ] ], [], [], [] ],
			[ [], [], [ [ 5, 4, 3, 2 ] ], [ [ 2, 1, 0, 6 ], [ 2, 1, 7, 5 ] ],
					[], [], [] ] ];

	// var rings = kemia.ring._makePIDMatrixes(molecule);
	// var rings = kemia.ring._makeCandidateSet(D, Pe1, Pe2);

	var rings = kemia.ring.SSSR.findRings(molecule);

	// print the rings
	// for (var i = 0; i < rings.length; i++) {
	// var C = rings[i];
	// debug("ring: " + JSON.stringify(C));
	// }

	assertEquals(2, rings.length);
	assertEquals(4, rings[0].length);
	assertEquals(5, rings[1].length);
}

function testSssrBenzene() {
	var benzene = "\n  xxx     10310613082D          \n\n  6  6  0  0  0  0            999 V2000\n    0.7145   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0000   -0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.7145    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0000    0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7145   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7145    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  2  1  2  0  0  0  0\n  3  1  1  0  0  0  0\n  4  3  2  0  0  0  0\n  5  2  1  0  0  0  0\n  6  4  1  0  0  0  0\n  5  6  2  0  0  0  0\nM  END\n";
	findSssrRings("benzene", benzene, [ 6 ]);
}

function testSssrCubane() {
	var cubane = "\n  xxx     02140917482D          \n\n  8 12  0  0  0  0            999 V2000\n    0.0001    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0000   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.8250    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.8250   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.4628    0.0050    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.3623    0.0052    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.4627   -0.8200    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.3623   -0.8200    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  4  7  1  0  0  0  0\n  4  3  1  0  0  0  0\n  3  5  1  0  0  0  0\n  1  3  1  0  0  0  0\n  1  6  1  0  0  0  0\n  2  4  1  0  0  0  0\n  2  8  1  0  0  0  0\n  8  6  1  0  0  0  0\n  5  7  1  0  0  0  0\n  7  8  1  0  0  0  0\n  1  2  1  0  0  0  0\n  6  5  1  0  0  0  0\nM  END\n";
	findSssrRings("cubane", cubane, [ 4, 4, 4, 4, 4 ]);

}

function testSssrTetraPhosporus() {
	var tetraPhosporus = "\n  xxx     03240923362D          \n\n  4  6  0  0  0  0            999 V2000\n    0.4357   -0.0257    0.0000 P   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.5702   -0.1152    0.0000 P   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.0772    0.5826    0.0000 P   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0632   -0.5046    0.0000 P   0  0  0  0  0  0  0  0  0  0  0  0\n  3  1  1  0  0  0  0\n  3  2  1  0  0  0  0\n  1  2  1  0  0  0  0\n  3  4  1  0  0  0  0\n  4  2  1  0  0  0  0\n  4  1  1  0  0  0  0\nM  END\n";
	findSssrRings("tetraPhosporus", tetraPhosporus, [ 3, 3, 3 ]);
}

function testSssrNaphthalene() {
	var naphtalene = "\n  xxx     09160622362D          \n\n 10 11  0  0  0  0            999 V2000\n   -1.4289    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -1.4289   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7145    0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0000    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.0000   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n   -0.7145   -0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.4289   -0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.7145   -0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    0.7145    0.8250    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n    1.4289    0.4125    0.0000 C   0  0  0  0  0  0  0  0  0  0  0  0\n  2  1  2  0  0  0  0\n  3  1  1  0  0  0  0\n  4  3  2  0  0  0  0\n  5  4  1  0  0  0  0\n  6  2  1  0  0  0  0\n  6  5  2  0  0  0  0\n  8  5  1  0  0  0  0\n  8  7  2  0  0  0  0\n  9  4  1  0  0  0  0\n 10  7  1  0  0  0  0\n 10  9  2  0  0  0  0\nM  END\n";
	findSssrRings("naphtalene", naphtalene, [ 6, 6 ]);
}

function findSssrRings(name, mdlString, ringSizes) {
	var mol = kemia.io.mdl.readMolfile(mdlString);
	var rings = kemia.ring.SSSR.findRings(mol);
	assertEquals(ringSizes.length, rings.length);
	for ( var i = 0; i < ringSizes.length; i++) {
		assertEquals(ringSizes[i], rings[i].length);
	}
}
