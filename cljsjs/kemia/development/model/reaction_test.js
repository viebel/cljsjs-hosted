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
goog.provide('kemia.model.ReactionTest');
goog.require('kemia.model.Reaction');
goog.require('kemia.model.Bond');
goog.require('kemia.model.Plus');
goog.require('goog.math.Coordinate');
goog.require('goog.testing.jsunit');

function buildTestMolecule(x1, x2) {
	// defaults y-coords
	var mol = new kemia.model.Molecule();
	var a1 = new kemia.model.Atom('C', x1, -1);
	var a2 = new kemia.model.Atom('C', x2, 1);
	var b1 = new kemia.model.Bond(a1, a2);
	mol.addAtom(a1);
	mol.addAtom(a2);
	mol.addBond(b1);
	mol._orig_min_x = Math.min(x1, x2);
	mol._orig_max_x = Math.max(x1, x2);
	return mol;
}

function buildReactionWithRoomForArrow() {
	var rxn = new kemia.model.Reaction();
	rxn.addReactant(buildTestMolecule(1, 2));
	rxn.addReactant(buildTestMolecule(3, 4));
	rxn.addProduct(buildTestMolecule(17, 18));
	rxn.addProduct(buildTestMolecule(19, 20));
	rxn.addProduct(buildTestMolecule(21, 22));
	return rxn;
}

function buildReaction() {
	var rxn1 = new kemia.model.Reaction();
	rxn1.header = 'my header';
	rxn1.reagentsText = 'my reagents';
	rxn1.conditionsText = 'my conditions';
	var mol1 = new kemia.model.Molecule('mol1');
	var a1a = new kemia.model.Atom('C', 0, 1);
	var a1b = new kemia.model.Atom('C', 0, 2);
	var b1 = new kemia.model.Bond(a1a, a1b);
	mol1.addAtom(a1a);
	mol1.addAtom(a1a);
	mol1.addBond(b1);
	rxn1.addMolecule(mol1);

	rxn1.addPlus(new kemia.model.Plus(new goog.math.Coordinate(1, 1.5)));

	var mol2 = new kemia.model.Molecule('mol2');
	var a2a = new kemia.model.Atom('C', 2, 1);
	var a2b = new kemia.model.Atom('C', 2, 2);
	var b2 = new kemia.model.Bond(a2a, a2b);
	mol2.addAtom(a2a);
	mol2.addAtom(a2b);
	mol2.addBond(b2);
	rxn1.addMolecule(mol2);

	rxn1.setArrow(new kemia.model.Arrow(new goog.math.Coordinate(3, 1.5),
			new goog.math.Coordinate(4, 1.5)));

	var mol3 = new kemia.model.Molecule('mol3');
	var a3a = new kemia.model.Atom('C', 4, 1);
	var a3b = new kemia.model.Atom('C', 4, 2);
	var b3 = new kemia.model.Bond(a3a, a3b);
	mol3.addAtom(a3a);
	mol3.addAtom(a3b);
	mol3.addBond(b3);
	rxn1.addMolecule(mol3);
	return rxn1;
}

function buildReaction2() {
	// same as above with reactants in reverse order
	var rxn1 = new kemia.model.Reaction();

	var mol2 = new kemia.model.Molecule('mol2');
	var a2a = new kemia.model.Atom('C', 2, 1);
	var a2b = new kemia.model.Atom('C', 2, 2);
	var b2 = new kemia.model.Bond(a2a, a2b);
	mol2.addAtom(a2a);
	mol2.addAtom(a2b);
	mol2.addBond(b2);
	rxn1.addMolecule(mol2);
	rxn1.header = 'my header';
	rxn1.reagentsText = 'my reagents';
	rxn1.conditionsText = 'my conditions';
	var mol1 = new kemia.model.Molecule('mol1');
	var a1a = new kemia.model.Atom('C', 0, 1);
	var a1b = new kemia.model.Atom('C', 0, 2);
	var b1 = new kemia.model.Bond(a1a, a1b);
	mol1.addAtom(a1a);
	mol1.addAtom(a1a);
	mol1.addBond(b1);
	rxn1.addMolecule(mol1);

	rxn1.addPlus(new kemia.model.Plus(new goog.math.Coordinate(1, 1.5)));

	rxn1.setArrow(new kemia.model.Arrow(new goog.math.Coordinate(3, 1.5),
			new goog.math.Coordinate(4, 1.5)));

	var mol3 = new kemia.model.Molecule('mol3');
	var a3a = new kemia.model.Atom('C', 4, 1);
	var a3b = new kemia.model.Atom('C', 4, 2);
	var b3 = new kemia.model.Bond(a3a, a3b);
	mol3.addAtom(a3a);
	mol3.addAtom(a3b);
	mol3.addBond(b3);
	rxn1.addMolecule(mol3);
	return rxn1;
}

function testAddReactantLeftOfArrow() {
	var r = buildReaction();
	var mol_left = new kemia.model.Molecule('mol_left');
	var a1a = new kemia.model.Atom('C', 0, 1);
	var a1b = new kemia.model.Atom('C', 0, 2);
	var b1 = new kemia.model.Bond(a1a, a1b);
	mol_left.addAtom(a1a);
	mol_left.addAtom(a1a);
	mol_left.addBond(b1);
	r.addReactant(mol_left);
	assertEquals(3, r.getReactants().length);
}

function testAddReactantRightOfArrow() {
	var r = buildReaction();
	var mol_right = new kemia.model.Molecule('mol_right');
	var a3a = new kemia.model.Atom('C', 4, 1);
	var a3b = new kemia.model.Atom('C', 4, 2);
	var b3 = new kemia.model.Bond(a3a, a3b);
	mol_right.addAtom(a3a);
	mol_right.addAtom(a3b);
	mol_right.addBond(b3);
	r.addReactant(mol_right);
	assertEquals(3, r.getReactants().length);
}

function testAddProductLeftOfArrow() {
	var r = buildReaction();
	var mol_left = new kemia.model.Molecule('mol_left');
	var a1a = new kemia.model.Atom('C', 0, 1);
	var a1b = new kemia.model.Atom('C', 0, 2);
	var b1 = new kemia.model.Bond(a1a, a1b);
	mol_left.addAtom(a1a);
	mol_left.addAtom(a1a);
	mol_left.addBond(b1);
	r.addProduct(mol_left);
	assertEquals(2, r.getProducts().length);
}

function testAddProductRightOfArrow() {
	var r = buildReaction();
	var mol_right = new kemia.model.Molecule('mol_right');
	var a3a = new kemia.model.Atom('C', 4, 1);
	var a3b = new kemia.model.Atom('C', 4, 2);
	var b3 = new kemia.model.Bond(a3a, a3b);
	mol_right.addAtom(a3a);
	mol_right.addAtom(a3b);
	mol_right.addBond(b3);
	r.addProduct(mol_right);
	assertEquals(2, r.getProducts().length);
}

function testAddProductWithRoomForArrow() {
	var rxn = new kemia.model.Reaction();

	rxn.addReactant(buildTestMolecule(1, 2));
	rxn.addReactant(buildTestMolecule(3, 4));
	rxn.addProduct(buildTestMolecule(12, 15));
	rxn.addProduct(buildTestMolecule(18, 20));
	rxn.addProduct(buildTestMolecule(23, 25));

	goog.array.forEach(rxn.molecules, function(mol) {
		// this.logger.info(mol.toString());
		assertEquals('should not change coord', mol._orig_min_x,
				kemia.model.Reaction.boundingBox([ mol ]).left)
		assertEquals('should not change coord', mol._orig_max_x,
				kemia.model.Reaction.boundingBox([ mol ]).right)
	})
}

function testAddProductWithNoRoomForArrow() {
	var rxn = new kemia.model.Reaction();

	rxn.addReactant(buildTestMolecule(1, 2));
	rxn.addReactant(buildTestMolecule(3, 4));
	rxn.addProduct(buildTestMolecule(12, 13));
	rxn.addProduct(buildTestMolecule(14, 15));
	rxn.addProduct(buildTestMolecule(16, 17));

	goog.array.forEach(rxn.molecules, function(mol) {
		// this.logger.info(mol.toString());
		goog.array.forEach(rxn.molecules, function(other) {
			if (mol != other) {
				assertFalse('should not overlap with ' + other.toString(),
						goog.math.Box.intersects(mol.getBoundingBox(), other
								.getBoundingBox()));
			}
		})
	})
}

function testGetReactants() {
	var r = buildReaction();
	assertEquals(2, r.getReactants().length);
}

function testGetProducts() {
	var r = buildReaction();
	assertEquals(1, r.getProducts().length);
}

function testRemoveOverlap() {
	var mol1 = new kemia.model.Molecule('mol1');
	mol1.addAtom(new kemia.model.Atom("C", -1, -1));
	mol1.addAtom(new kemia.model.Atom("C", 1, 1));
	// logger.info('mol1 ' + mol1.getBoundingBox().toString());

	var mol2 = new kemia.model.Molecule('mol2');
	mol2.addAtom(new kemia.model.Atom("O", -2, -2));
	mol2.addAtom(new kemia.model.Atom("O", 0, 0));
	// logger.info('mol2 ' + mol2.getBoundingBox().toString());

	var rxn = new kemia.model.Reaction();
	rxn.addMolecule(mol1);
	rxn.addMolecule(mol2);

	var bbox = kemia.model.Reaction.boundingBox(rxn.molecules);
	// logger.info('rxn bbox ' + bbox.toString());
	assertEquals(3, bbox.right - bbox.left);
	kemia.model.Reaction.removeOverlap(rxn.molecules);
	bbox = kemia.model.Reaction.boundingBox(rxn.molecules);
	// logger.info('rxn bbox after remove overlap ' + bbox.toString());
	// logger.info('mol1 ' + mol1.getBoundingBox().toString());
	// logger.info('mol2 ' + mol2.getBoundingBox().toString());

	var bbox = kemia.model.Reaction.boundingBox(rxn.molecules);
	assertEquals(2 + 2 + 3, bbox.right - bbox.left);
};

function testMidpoint() {
	var rxn = buildReaction();
	var r = rxn.getReactants()[1];
	var p = rxn.getProducts()[0];
	var m = kemia.model.Reaction.midpoint(r, p);
	assertEquals(3, m.x);
	assertEquals(1.5, m.y);
}

function testCenterArrow() {
	var rxn = buildReaction();
	rxn.centerArrow();
	var c = rxn.arrows[0].getCenter();
	assertEquals(3, c.x);
	assertEquals(1.5, c.y);
}

function testCenterArrow2() {
	var rxn = buildReaction2();
	rxn.centerArrow();
	var c = rxn.arrows[0].getCenter();
	assertEquals(3, c.x);
	assertEquals(1.5, c.y);
}