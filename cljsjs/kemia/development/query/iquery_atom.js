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
goog.provide('kemia.query.IQueryAtom');
/**
 * @interface An interface defining query atoms.
 * @see kemia.query.IQuery
 * @see kemia.query.IQueryBond
 */
kemia.query.IQueryAtom = function() {};

	/**
	 * Compare an atom with this query atom.
	 * 
	 * @param {kemia.model.Atom} atom
	 *            The atom to be compared with this query atom.
	 * @param {kemia.model.Molecule=} opt_molecule
	 *            The molecule containing atom.
	 * @param {Array.<kemia.ring.Ring>=} opt_sssr
	 *            The SSSR for the molecule.
	 * @return {boolean} True if the specified atom matches this query atom.
	 */
kemia.query.IQueryAtom.prototype.matches = function(atom, opt_molecule, opt_sssr) {};

	/**
	 * Get the neighbors for this query atom.
	 * 
	 * @return {Array.<kemia.query.QueryAtom>} The neighbors for this query
	 *         atom.
	 */
kemia.query.IQueryAtom.prototype.getNeighbors = function() {};

