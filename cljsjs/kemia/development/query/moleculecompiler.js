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

goog.provide('kemia.query.MoleculeCompiler');

goog.require('kemia.query.Query');
goog.require('kemia.query.QueryAtom');
goog.require('kemia.query.QueryBond');

/**
 * The Molecule Query Compiler compiles existing molecules into queries. This
 * class implements {@link kemia.query.IQueryCompiler}. See the <a
 * href="../Substructure Search.html">Substructure Search</a> page for more
 * information.
 * 
 * @constructor
 * @implements kemia.query.IQueryCompiler
 */
kemia.query.MoleculeCompiler = function() {
};

/** @inheritDoc */
kemia.query.MoleculeCompiler.prototype.compile = function(molecule) {
	var query = new kemia.query.Query();

	for ( var i = 0, li = molecule.countAtoms(); i < li; i++) {
		var qatom = new kemia.query.QueryAtom();
		qatom.symbols.push(molecule.getAtom(i).symbol);
		query.addAtom(qatom);
	}

	for (i = 0, li = molecule.countBonds(); i < li; i++) {
		var bond = molecule.bonds[i];
		var source = query.getAtom(molecule.indexOfAtom(bond.source));
		var target = query.getAtom(molecule.indexOfAtom(bond.target));
		var qbond = new kemia.query.QueryBond(source, target);
		qbond.orders.push(bond.order);
		query.addBond(qbond);
	}

	return query;
};
