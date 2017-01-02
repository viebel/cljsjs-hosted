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
goog.provide('kemia.model.Reaction');
goog.require('kemia.model.Molecule');
goog.require('goog.math.Box');
goog.require('goog.math.Rect');
goog.require('goog.debug.Logger');
goog.require('kemia.graphics.AffineTransform');
goog.require('kemia.model.Arrow');
goog.require('goog.asserts');

/**
 * Creates a new Reaction.
 * 
 * @constructor
 */
kemia.model.Reaction = function() {
	/** @type {string} */
	this.header = "";

	/** @type {Array.<kemia.model.Molecule>} */
	this.molecules = [];

	/** @type {Array.<kemia.model.Arrow>} */
	this.arrows = [];

	/** @type {Array.<kemia.model.Pluse>} */
	this.pluses = [];

};

/**
 * @const
 */
kemia.model.Reaction.MOLECULE_MARGIN = 3;


/**
 * The logger for this class.
 * 
 * @type {goog.debug.Logger}
 * @protected
 */
kemia.model.Reaction.prototype.logger = goog.debug.Logger
		.getLogger('kemia.model.Reaction');

/**
 * @return {string} the reaction header
 */
kemia.model.Reaction.prototype.getHeader = function() {
	return this.header;
}

/**
 * adds a molecule to reaction, changing layout if necessary to keep reactants
 * behind arrow and products ahead of arrow
 * 
 * @param {kemia.model.Molecule}
 *            mol reactant to add
 */
kemia.model.Reaction.prototype.addReactant = function(mol) {
	
		// may have to change layout to make room for a new reactant
		var reactants = this.getReactants();
		var r_diff = new goog.math.Vec2(0,0);
		var mol_box = mol.getBoundingBox();
		if(reactants.length>0){
			var reactant_box = kemia.model.Reaction.boundingBox(reactants);
			if(goog.math.Box.intersects(mol_box, reactant_box)){
				r_diff = new goog.math.Vec2(reactant_box.right - mol_box.left + kemia.model.Reaction.MOLECULE_MARGIN, 0);
			}
		} 
		// move new reactant to the right of existing reactants, if any
		mol.translate(r_diff);
		if(!this.isReactant(mol)){
			// have to move the arrow and any products too
			var products = this.getProducts();
			var x = mol.getBoundingBox().right  + kemia.model.Reaction.MOLECULE_MARGIN;
			if(this.arrows.length>0){
				x = x - this.arrows[0].source.x;
			}
			var diff = new goog.math.Vec2(x, 0);
			goog.array.forEach(this.arrows, function(arrow){
				arrow.translate(diff);
			});
			goog.array.forEach(this.pluses, function(plus){
				plus.translate(diff);
			})
			// move products, since arrow moved
			goog.array.forEach(products, function(mol){
				mol.translate(diff);
			})
		}
		goog.asserts.assert(this.isReactant(mol));
		this.pluses.length = 0;  // force plus generation, since we've moved the components
 
	this.addMolecule(mol);
// kemia.model.Reaction.removeOverlap(this.getReactants());
};

kemia.model.Reaction.prototype.getReactants = function() {
	return goog.array.filter(this.molecules, this.isReactant, this);
}

kemia.model.Reaction.prototype.getProducts = function() {
	return goog.array.filter(this.molecules, this.isProduct, this);
}

/**
 * @param {kemia.model.Molecule}
 *            mol
 */
kemia.model.Reaction.prototype.addMolecule = function(mol) {
	this.molecules.push(mol);
	mol.reaction = this;
}

/**
 * adds a molecule as a product rearranging layout as necessary to keep
 * reactants behind arrow and products ahead of arrow
 * 
 * @param {kemia.model.Molecule}
 *            mol product to add
 * @param {boolean=}
 *            opt_permit_overlap if true will not adjust layout to avoid overlap
 */
kemia.model.Reaction.prototype.addProduct = function(mol, opt_permit_overlap) {
	
	if (this.arrows.length==0){
		// need to add arrow after reactants
		var reactants = this.getReactants();
		if(reactants.length>0){
			var reactant_box = kemia.model.Reaction.boundingBox(reactants);
			var arrow = new kemia.model.Arrow(
					new goog.math.Coordinate(
							reactant_box.right + kemia.model.Reaction.MOLECULE_MARGIN, 
							(reactant_box.top + reactant_box.bottom)/2));
		} else {
			arrow = new kemia.model.Arrow(new goog.math.Coordinate( kemia.model.Reaction.MOLECULE_MARGIN, 0));
		}
		this.setArrow(arrow);
	}
	
	// translate molecule to the right of existing products, or of arrow, if no
	// products
	var mol_box = mol.getBoundingBox();
	var products = this.getProducts();
	var x_diff = 0;
	if(products.length==0 || opt_permit_overlap){
		x_diff += this.arrows[0].target.x 
	} else {
		var prod_box = kemia.model.Reaction.boundingBox(products);
		x_diff +=  prod_box.right;
	} 

	x_diff += kemia.model.Reaction.MOLECULE_MARGIN 
	x_diff -= mol_box.left;
	if(x_diff!=0){
		mol.translate(new goog.math.Vec2(x_diff, 0));
		this.pluses.length= 0;  // force plus generation, since we've moved the components
	}
	goog.asserts.assert(this.isProduct(mol));
	this.addMolecule(mol);
};

/**
 * @param {kemia.model.Molecule}
 *            mol
 */
kemia.model.Reaction.prototype.isReactant = function(mol) {
	if(this.arrows.length> 0){
		return this.arrows[0].getOrientation(mol.getCenter())==kemia.model.Arrow.ORIENTATION.BEHIND;
	} else {
		return true
	}
}

/**
 * @param {kemia.model.Molecule}
 *            mol
 */
kemia.model.Reaction.prototype.isProduct = function(mol) {
	if(this.arrows.length > 0){
		return this.arrows[0].getOrientation(mol.getCenter())==kemia.model.Arrow.ORIENTATION.AHEAD;
	} else {
		return false
	}
}

/**
 * @param {kemia.model.Molecule}
 *            mol
 */
kemia.model.Reaction.prototype.removeMolecule = function(mol) {
		goog.array.remove(this.molecules, mol);
		mol.reaction = undefined;
}

/**
 * @param {kemia.model.Arrow}
 *            arrow
 */
kemia.model.Reaction.prototype.setArrow = function(arrow) {
	
	if(this.arrows.length){
		this.arrows[0].reaction = undefined;
	}
	this.arrows.length = 0;
	/** @type {kemia.model.Arrow} */
	this.arrows[0] = arrow;
	arrow.reaction = this;
};

/**
 * setter delegates to arrow
 * 
 * @param{string} text
 */
kemia.model.Reaction.prototype.setReagentsText = function(text){
	if(this.arrows.length>0){
		this.arrows[0].setReagentsText(text);
	}
};

/**
 * getter delegates to arrow
 * 
 * @return{string}
 */
kemia.model.Reaction.prototype.getReagentsText = function(){
	if(this.arrows.length>0){
		return this.arrows[0].reagents_text;
	}
}

/**
 * getter delegates to arrow
 * 
 * @return{string}
 */
kemia.model.Reaction.prototype.getConditionsText = function(){
	if(this.arrows.length>0){
		return this.arrows[0].conditions_text;
	}
}

/**
 * setter delegates to arrow
 * 
 * @param{string} text
 */
kemia.model.Reaction.prototype.setConditionsText = function(text){
	if (this.arrows.length>0){
		this.arrows[0].setConditionsText(text);
	}
}

/**
 * @param {kemia.model.Arrow}
 *            arrow
 * 
 */
kemia.model.Reaction.prototype.removeArrow = function(arrow) {
	goog.array.remove(this.arrows, arrow);
	arrow.reaction = undefined;
}


/**
 * @param {kemia.model.Plus}
 *            plus
 */
kemia.model.Reaction.prototype.addPlus = function(plus) {
	this.pluses.push(plus);
	plus.reaction = this;
};

/**
 * @param {kemia.model.Plus}
 *            plus
 */
kemia.model.Reaction.prototype.removePlus = function(plus) {
// this.logger.info('removePlus');
	goog.array.remove(this.pluses, plus);
	plus.reaction = undefined;
}


/**
 * inserts plus at midpoint between molecules
 * 
 * @param {Array.
 *            <kemia.model.Molecule>} molecules
 */
kemia.model.Reaction.prototype.generatePluses = function(molecules) {
	var previousMol;
	goog.array.sort(
			molecules, function(m1, m2){
				return goog.array.defaultCompare(
						m1.getBoundingBox().left, 
						m2.getBoundingBox().left)});
	goog.array.forEach(molecules, function(mol) {
		if (previousMol) {	
			this.addPlus(
					new kemia.model.Plus(
							kemia.model.Reaction.midpoint( previousMol, mol)));
		}
		previousMol = mol;
	}, this);

};

/**
 * bounding box of an array of molecules
 * 
 * @param {Array.
 *            <kemia.model.Molecule>} molecules
 * @return {goog.math.Box}
 */
kemia.model.Reaction.boundingBox = function(molecules) {
	var atoms = goog.array.flatten(goog.array.map(molecules, function(mol) {
		return mol.atoms;
	}));
	var coords = goog.array.map(atoms, function(a) {
		return a.coord;
	})
	if(coords.length>0){
		return goog.math.Box.boundingBox.apply(null, coords);
	} else {
		return null
	}
};

/**
 * finds center of an array of molecules
 * 
 * @param {Array.
 *            <kemia.model.Molecule>} molecules
 * @return {goog.math.Coordinate}
 */
kemia.model.Reaction.prototype.center = function(molecules) {
	var bbox = kemia.model.Reaction.boundingBox(molecules);
	return new goog.math.Coordinate((bbox.left + bbox.right) / 2,
			(bbox.top + bbox.bottom) / 2);
};

/**
 * finds midpoint in space between two molecules
 * 
 * @param {kemia.model.Molecule}
 *            mol1
 * @param {kemia.model.Molecule}
 *            mol2
 * @return {goog.math.Coordinate}
 */
kemia.model.Reaction.midpoint = function (mol1, mol2){
	var box1 = mol1.getBoundingBox();
	var box2 = mol2.getBoundingBox();
	var right_top = new goog.math.Vec2(box1.right, box1.top);
	var left_bottom = new goog.math.Vec2(box2.left, box2.bottom);
	return right_top.add(left_bottom.subtract(right_top).scale(0.5));
}

/**
 * layout molecules to eliminate any molecule overlap plus a margin
 */
kemia.model.Reaction.removeOverlap = function(molecules) {
	var accumulated_rect;
	// order molecules left-to-right
	goog.array.sort(
			molecules, function(m1, m2){
				return goog.array.defaultCompare(
						m1.getBoundingBox().left, 
						m2.getBoundingBox().left)});
	goog.array.forEach(molecules,
			function(mol) {
		var mol_rect = goog.math.Rect.createFromBox(kemia.model.Reaction
				.boundingBox( [ mol ]));
		if (accumulated_rect) {
			if (goog.math.Rect.intersection(accumulated_rect,
					mol_rect)) {
				mol.translate(
						new goog.math.Coordinate(kemia.model.Reaction.MOLECULE_MARGIN 
								+ accumulated_rect.left
								+ accumulated_rect.width
								- mol_rect.left, 0));
			}
			// expand to include this molecule location
			accumulated_rect.boundingRect(goog.math.Rect
					.createFromBox(kemia.model.Reaction.boundingBox( [ mol ])));
		} else {
			accumulated_rect = mol_rect;
		}
	}, this);
	return molecules;
};

/**
 * centers arrow between last reactant and first product
 */
kemia.model.Reaction.prototype.centerArrow = function(){	
// this.logger.fine('centerArrow');
	if(this.arrows.length>0){
		var arrow = this.arrows[0];
		var box1 = kemia.model.Reaction.boundingBox(this.getReactants());
		var box2 = kemia.model.Reaction.boundingBox(this.getProducts());
		if (!box1 && !box2){
			// cannot find center
			return;
		}
		if (!box1) {
			box1 = new goog.math.Box(box2.top, box2.left - 1, box2.bottom, box2.left - 1);
		}
		if (!box2) {
			box2 = new goog.math.Box(box1.top, box1.right + 1, box1.bottom, box1.right + 1);
		}

		var right_top = new goog.math.Vec2(box1.right, box1.top);
		var left_bottom = new goog.math.Vec2(box2.left, box2.bottom);
		var midpoint = right_top.add(left_bottom.subtract(right_top).scale(0.5));

		var diff = goog.math.Vec2.fromCoordinate(midpoint).subtract (goog.math.Vec2.fromCoordinate(arrow.getCenter()));
		arrow.translate(diff);
	}
}

/**
 * translate reaction coordinates
 * 
 * @param {goog.math.Vec2}
 *            vector, x and y change amounts
 * 
 */
kemia.model.Reaction.prototype.translate = function(vector) {
	goog.array.forEach(this.molecules, function(mol) {
		mol.translate(vector);
	});
	goog.array.forEach(this.pluses, function(plus){
		plus.translate(vector);
	})
	goog.array.forEach(this.arrows, function(arrow){
		arrow.translate(vector);
	})
};




