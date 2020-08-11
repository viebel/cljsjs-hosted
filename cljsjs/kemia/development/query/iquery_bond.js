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
goog.provide('kemia.query.IQueryBond');
/**
 * @interface Interface defining query bonds.
 * @see kemia.query.IQuery
 * @see kemia.query.IQueryAtom
 * @param {kemia.query.IQueryAtom}
 *            source atom
 * @param {kemia.query.IQueryAtom}
 *            target atom
 */
kemia.query.IQueryBond = function(source, target) {
}
/**
 * Compare an bond with this query bond.
 * 
 * @param {kemia.model.Bond} bond
 * @param {kemia.model.Molecule=} opt_molecule The molecule containing atom.
 * @param {Array.<kemia.ring.Ring>=} opt_sssr The SSSR for the molecule.
 * @return {boolean} True if the specified bond matches this query bond.
 */
kemia.query.IQueryBond.prototype.matches = function(bond, opt_molecule,
		opt_sssr) {
};
