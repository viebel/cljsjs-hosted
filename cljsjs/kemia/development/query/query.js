/*
 * Copyright 2010 Tim Vandermeersch
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); 
 * you may not use this file except in compliance with the License. 
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 
 * 
 * Unless required by applicable law or agreed to in writing, software 
 * distributed under the License is distributed on an "AS IS" BASIS, 
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 * See the License for the specific language governing permissions and 
 * limitations under the License.
 */

goog.provide('kemia.query.Query');
goog.require('kemia.query.IQuery');

/**
 * Default query implementation.
 * 
 * @see kemia.query.QueryAtom
 * @see kemia.query.QueryBond
 * @implements {kemia.query.IQuery}
 * @constructor
 */
kemia.query.Query = function() {
	this.atoms = [];
	this.bonds = [];
	this.isSSSRRequired = false;
};

/** @inheritDoc */
kemia.query.Query.prototype.countAtoms = function() {
	return this.atoms.length;
};

/** @inheritDoc */
kemia.query.Query.prototype.indexOfAtom = function(/** kemia.query.IQueryAtom */
atom) {
	return goog.array.indexOf(this.atoms, atom);
};

/** @inheritDoc */
kemia.query.Query.prototype.getAtom = function(/** number */
index) {
	return this.atoms[index];
};

/** @inheritDoc */
kemia.query.Query.prototype.addAtom = function(atom) {
	this.atoms.push(atom);
};

/** @inheritDoc */
kemia.query.Query.prototype.addBond = function(bond) {
	bond.source.neighbors.push(bond.target);
	bond.target.neighbors.push(bond.source);
	this.bonds.push(bond);
};

/** @inheritDoc */
kemia.query.Query.prototype.findBond = function(atom1, atom2) {
	for ( var i = 0, il = this.bonds.length; i < il; i++) {
		var bond = this.bonds[i];
		if ((atom1 === bond.source && atom2 === bond.target)
				|| (atom2 === bond.source && atom1 === bond.target)) {
			return bond;
		}
	}
	return null;
};
