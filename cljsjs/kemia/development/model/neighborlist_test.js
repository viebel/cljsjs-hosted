/**
 * @license Copyright 2010 Paul Novak (paul@wingu.com)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 * @author paul@wingu.com (Paul Novak)
 */
goog.provide('kemia.model.NeighborListTest');
goog.require('goog.testing.jsunit');
goog.require('kemia.model.Reaction');
goog.require('kemia.model.Molecule');
goog.require('kemia.model.Atom');
goog.require('kemia.model.Bond');
goog.require('kemia.model.Plus');
goog.require('kemia.model.Arrow');
goog.require('kemia.model.NeighborList');
goog.require('goog.array');
goog.require('goog.debug.Trace');


function testEmptyList() {
	var neighborList = new kemia.model.NeighborList( [], 1, .5);
}

function testReaction() {
	var m1 = new kemia.model.Molecule();
	var a1 = new kemia.model.Atom("C", -1, 1);
	var a2 = new kemia.model.Atom("C", 0, 0);
	var a3 = new kemia.model.Atom("C", 1, 1);
	var b1 = new kemia.model.Bond(a1, a2);
	var b2 = new kemia.model.Bond(a2, a3);
	m1.addAtom(a1);
	m1.addAtom(a2);
	m1.addAtom(a3);
	m1.addBond(b1);
	m1.addBond(b2);

	var m2 = new kemia.model.Molecule();
	var aa1 = new kemia.model.Atom("C", 10, -1);
	var aa2 = new kemia.model.Atom("C", 11, 0);
	var aa3 = new kemia.model.Atom("C", 10, 1);
	var bb1 = new kemia.model.Bond(aa1, aa2);
	var bb2 = new kemia.model.Bond(aa2, aa3);
	m2.addAtom(aa1);
	m2.addAtom(aa2);
	m2.addAtom(aa3);
	m2.addBond(bb1);
	m2.addBond(bb2);
	var rxn = new kemia.model.Reaction();
	rxn.setArrow(new kemia.model.Arrow(
			new goog.math.Coordinate(5, 0),
			new goog.math.Coordinate(6, 0)));
	rxn.addReactant(m1);
	rxn.addProduct(m2);
	rxn.addPlus(new kemia.model.Plus());
	var neighbors = kemia.model.NeighborList.reactionsToNeighbors( [ rxn ]);
	var neighborList = new kemia.model.NeighborList(neighbors, 1, .5);

	var n = neighborList.getNearestList( {
		x : 11.4,
		y : 0
	});
	var nearest_atoms = goog.array.filter(n, function(o) {
		return o instanceof kemia.model.Atom
	});
	assertEquals(aa2, nearest_atoms[0]);
	assertEquals(rxn.arrows[0], neighborList.getNearestList({x: 5, y:0})[0]);

}

function testNeighborList1() {

	var molecule = new kemia.model.Molecule();

	var atom1 = new kemia.model.Atom("C", -5, -5);
	var atom2 = new kemia.model.Atom("C", 40, 13);
	var atom3 = new kemia.model.Atom("C", -4, 9);
	var atom4 = new kemia.model.Atom("C", 10, -8);
	var atom5 = new kemia.model.Atom("C", -6, 0);
	var atom6 = new kemia.model.Atom("C", 4, 13);

	molecule.addAtom(atom1);
	molecule.addAtom(atom2);
	molecule.addAtom(atom3);
	molecule.addAtom(atom4);
	molecule.addAtom(atom5);
	molecule.addAtom(atom6);

	var neighbors = kemia.model.NeighborList
			.moleculesToNeighbors( [ molecule ]);
	var neighborList = new kemia.model.NeighborList(neighbors);

	assertEquals(atom1, neighborList.getNearest( {
		x : -5,
		y : -5
	}));
	assertEquals(atom2, neighborList.getNearest( {
		x : 40,
		y : 13
	}));
	assertEquals(atom3, neighborList.getNearest( {
		x : -4,
		y : 9
	}));
	assertEquals(atom4, neighborList.getNearest( {
		x : 10,
		y : -8
	}));
	assertEquals(atom5, neighborList.getNearest( {
		x : -6,
		y : 0
	}));
	assertEquals(atom6, neighborList.getNearest( {
		x : 4,
		y : 13
	}));
}

function testNeighborList2() {

	var molecule = new kemia.model.Molecule();

	for ( var i = 0; i < 10; i++) {
		for ( var j = 0; j < 10; j++) {
			var atom = new kemia.model.Atom("C", i, j);
			molecule.addAtom(atom);

		}
	}
	var neighbors = kemia.model.NeighborList
			.moleculesToNeighbors( [ molecule ]);

	var neighborList = new kemia.model.NeighborList(neighbors);

	for ( var i = 0; i < 10; i++) {
		for ( var j = 0; j < 10; j++) {
			assertEquals(molecule.atoms[i * 10 + j], neighborList.getNearest( {
				x : i,
				y : j
			}));
		}
	}

}

function testNeighborList3() {

	var molecule = new kemia.model.Molecule();

	var atom1 = new kemia.model.Atom("C", 3, 0);
	var atom2 = new kemia.model.Atom("C", 2, 0);
	var atom3 = new kemia.model.Atom("C", 1, 0);

	molecule.addAtom(atom1);
	molecule.addAtom(atom2);
	molecule.addAtom(atom3);

	var neighbors = kemia.model.NeighborList
			.moleculesToNeighbors( [ molecule ]);

	var neighborList = new kemia.model.NeighborList(neighbors, 5, 5);

	var nearest = neighborList.getNearestList( {
		x : 0,
		y : 0
	});

	var nearest_atoms = goog.array.filter(nearest, function(o) {
		return o instanceof kemia.model.Atom;
	});

	assertEquals(3, nearest_atoms.length);
	assertEquals(atom3, nearest_atoms[0]);

	assertEquals(atom2, nearest_atoms[1]);

	assertEquals(atom1, nearest_atoms[2]);

}

function testTwoMolecules() {
	var m1 = new kemia.model.Molecule();
	var a1 = new kemia.model.Atom("C", -1, 1);
	var a2 = new kemia.model.Atom("C", 0, 0);
	var a3 = new kemia.model.Atom("C", 1, 1);
	var b1 = new kemia.model.Bond(a1, a2);
	var b2 = new kemia.model.Bond(a2, a3);
	m1.addAtom(a1);
	m1.addAtom(a2);
	m1.addAtom(a3);
	m1.addBond(b1);
	m1.addBond(b2);

	var m2 = new kemia.model.Molecule();
	var aa1 = new kemia.model.Atom("C", 10, -1);
	var aa2 = new kemia.model.Atom("C", 11, 0);
	var aa3 = new kemia.model.Atom("C", 10, 1);
	var bb1 = new kemia.model.Bond(aa1, aa2);
	var bb2 = new kemia.model.Bond(aa2, aa3);
	m2.addAtom(aa1);
	m2.addAtom(aa2);
	m2.addAtom(aa3);
	m2.addBond(bb1);
	m2.addBond(bb2);
	var mols = [ m1, m2 ];

	var neighbors = kemia.model.NeighborList.moleculesToNeighbors(mols);

	// console.log(['neighbors', neighbors]);
	// console.log(goog.array.map(neighbors, function(n){
	// return n.getCenter().toString();
	// }))
	var nl = new kemia.model.NeighborList(neighbors, 1, .5);
	var n = nl.getNearestList( {
		x : 11.4,
		y : 0
	});
	var nearest_atoms = goog.array.filter(n, function(o) {
		return o instanceof kemia.model.Atom
	});
	assertEquals(aa2, nearest_atoms[0]);
};

function testMoleculeWithBonds1() {
	var mol = new kemia.model.Molecule();
	var a1 = new kemia.model.Atom("C", -1, 1);
	var a2 = new kemia.model.Atom("C", 0, 0);
	var a3 = new kemia.model.Atom("C", 1, 1);
	var b1 = new kemia.model.Bond(a1, a2);
	var b2 = new kemia.model.Bond(a2, a3, kemia.model.Bond.ORDER.DOUBLE);
	mol.addAtom(a1);
	mol.addAtom(a2);
	mol.addAtom(a3);
	mol.addBond(b1);
	mol.addBond(b2);

	var neighbors = kemia.model.NeighborList.moleculesToNeighbors( [ mol ]);
	// console.log(['neighbors', neighbors]);
	// console.log(goog.array.map(neighbors, function(n){
	// return n.getCenter().toString();
	// }))
	var nl = new kemia.model.NeighborList(neighbors, 2, .71);
	// console.log(['nl', nl]);
	var n = nl.getNearestList( {
		x : 0.51,
		y : 0.51
	});

	// console.log(goog.array.map(n, function(o) {
	// return o.toString();
	// }))
	assertEquals('# nearest objects', 3, n.length);
	assertEquals('nearest object is bond b2', b2, n[0]);

	n = nl.getNearestList( {
		x : 0.89,
		y : 0.85
	});
	// console.log(goog.array.map(n, function(o) {
	// return o.toString();
	// }))
	assertEquals('# nearest objects', 3, n.length);
	assertEquals('nearest object is bond b2', b2, n[0]);
	var nearest_atoms = goog.array.filter(n, function(o) {
		return o instanceof kemia.model.Atom;
	});
	assertEquals('nearest atom is atom a3', a3, nearest_atoms[0]);

	n = nl.getNearestList( {
		x : 0.04,
		y : 0.11
	});
	assertEquals('# nearest objects', 4, n.length);
	nearest_atoms = goog.array.filter(n, function(o) {
		return o instanceof kemia.model.Atom;
	});
	assertEquals('nearest atom is atom a2', a2, nearest_atoms[0]);
	var nearest_bonds = goog.array.filter(n, function(o) {
		return o instanceof kemia.model.Bond;
	});
	assertEquals('nearest bond is bond b2', b2, nearest_bonds[0]);
	assertEquals('2nd nearest bond is bond b1', b1, nearest_bonds[1]);

	n = nl.getNearestList( {
		x : 2,
		y : 0
	});
	assertEquals('# nearest objects', 1, n.length);
	n = nl.getNearestList( {
		x : -2,
		y : 0
	});
	assertEquals('# nearest objects', 1, n.length);
}