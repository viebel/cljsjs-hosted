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

goog.provide('kemia.query.QueryBond');
goog.require('kemia.query.IQueryBond');

/**
 * Class representing a bond in a query
 * @see kemia.query.Query
 * @see kemia.query.QueryAtom
 * @constructor
 * @param {kemia.query.IQueryAtom}
 *            source atom
 * @param {kemia.query.IQueryAtom}
 *            target atom
 * @implements {kemia.query.IQueryBond}
 */
kemia.query.QueryBond = function( source, target) {
	// query properties
	this.orders = [];
	// topology properties
	this.source = source;
	this.target = target;
};

/** @inheritDoc */
kemia.query.QueryBond.prototype.matches = function(bond, opt_molecule, opt_sssr) {
	if (!this.orders.length) {
		return true; // match any bond order
	}
	if (goog.array.indexOf(this.orders, bond.order) !== -1) {
		return true;
	}
	return false;
};
