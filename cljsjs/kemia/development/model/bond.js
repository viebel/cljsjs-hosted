goog.provide('kemia.model.Bond');
goog.require('kemia.model.Atom');

/**
 * Base class representing a Bond
 * 
 * @param {kemia.model.Atom}
 *            source, Atom at one end of bond.
 * @param {kemia.model.Atom}
 *            target, Atom at other end of bond.
 * @param {kemia.model.Bond.ORDER=}
 *            opt_order, order of bond
 * 
 * @param {kemia.model.Bond.STEREO=}
 *            opt_stereo, stereochemistry of bond
 * 
 * @param {boolean=}
 *            opt_aromatic, true if aromatic
 * @param {kemia.model.Molecule=} opt_molecule, parent molecule            
 * 
 * @constructor
 */
kemia.model.Bond = function(source, target, opt_order, opt_stereo,
		opt_aromatic, opt_molecule) {
	/**
	 * source Atom
	 * 
	 * @type {kemia.model.Atom}
	 */
	this.source = source;
	/**
	 * target Atom
	 * 
	 * @type{kemia.model.Atom}
	 */
	this.target = target;

	/**
	 * The bond order.
	 * 
	 * @type {kemia.model.Bond.ORDER}
	 */
	this.order = goog.isDef(opt_order) ? opt_order : kemia.model.Bond.ORDER.SINGLE;

	/**
	 * Stereochemistry
	 * 
	 * @type {kemia.model.Bond.STEREO}
	 */
	this.stereo = goog.isDef(opt_stereo) ? opt_stereo : kemia.model.Bond.STEREO.NOT_STEREO;

	/**
	 * Aromatic flag.
	 * 
	 * @type {boolean}
	 */
	this.aromatic = goog.isDef(opt_aromatic) ? opt_aromatic : false;

	/**
	 * parent molecule
	 * 
	 * @type {kemia.model.Molecule}
	 */
	this.molecule = goog.isDef(opt_molecule) ? opt_molecule : null;
};

/**
 * Get the atom at the other end of the bond from the subject atom
 * 
 * @param {kemia.model.Atom}
 *            atom, the subject atom
 * 
 * @return {kemia.model.Atom} The other bond atom or null if the specified atom
 *         is not part of the bond.
 */
kemia.model.Bond.prototype.otherAtom = function(atom) {
	if (atom === this.source) {
		return this.target;
	}
	if (atom === this.target) {
		return this.source
	}
	return null;
};

kemia.model.Bond.prototype.getLength = function(){
	return goog.math.Coordinate.distance(this.source.coord, this.target.coord);
}

/**
 * clones this bond
 * 
 * @return {kemia.model.Bond}
 */
kemia.model.Bond.prototype.clone = function() {
	return new kemia.model.Bond(this.source, this.target, this.order,
			this.stereo, this.aromatic, this.molecule);
}

kemia.model.Bond.prototype.deepClone = function(){
	return new kemia.model.Bond(this.source.clone(), this.target.clone(), this.order,
			this.stereo, this.aromatic, this.molecule);
	
}

/**
 * enum for bond order
 * 
 * @enum {number}
 */
kemia.model.Bond.ORDER = {
	SINGLE : 1,
	DOUBLE : 2,
	TRIPLE : 3,
	QUADRUPLE : 4
}

/**
 * enum for bond stereochemistry
 * 
 * @enum {number}
 */
kemia.model.Bond.STEREO = {
	NOT_STEREO : 10,
	UP : 11,
	UP_OR_DOWN : 12,
	DOWN : 13
}

kemia.model.Bond.prototype.toString = function(){
	var molname = this.molecule ? this.molecule.name : "no molecule"
	return "kemia.model.Bond[" + 
		this.order + ", " + 
		this.stereo + "]  " + 
		this.source.toString() + " -- " + 
		this.target.toString() + " mol: " + 
		molname;
		
};
