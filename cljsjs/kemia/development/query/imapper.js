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
goog.provide('kemia.query.IMapper');

/**
 * Mappers are used to do substructure searching. The input is a query and
 * molecule. Interface defining Substructure Mappers
 * 
 * @interface
 * @param {kemia.query.IQuery}
 *            query
 */
kemia.query.IMapper = function(query) {
};
/**
 * Find the first mapping of the query onto the molecule.
 * 
 * @param {kemia.model.Molecule}
 *            molecule The molecule to search.
 * @return {goog.structs.Map} The mapping, can be empty if none found.
 */
kemia.query.IMapper.prototype.mapFirst = function(molecule) {
};
/**
 * Find all unique mappings of the query onto the molecule.
 * 
 * @param {kemia.model.Molecule}
 *            molecule The molecule to search.
 * @return {Array.<goog.structs.Map>} The mappings, can be an empty array if
 *         none found.
 */
kemia.query.IMapper.prototype.mapUnique = function(molecule) {
};
/**
 * Find all unique mappings of the query onto the molecule. Unlike mapUnique,
 * this method doesn't return the result directly. The specified callback
 * function is called when the results are ready. At intervals, control is
 * released to the browser to process events. This allows large molecules to be
 * searched without creating a bad (i.e. unresponsive) user experience.
 * 
 * @param {kemia.model.Molecule}
 *            molecule The molecule to search.
 * @param {function(Array.<goog.structs.Map>)} callback function to call when results are ready
 * @return {Array.<goog.structs.Map>} The mappings, can be an empty array if
 *         none found.
 */
kemia.query.IMapper.prototype.mapUniqueCallback = function(molecule, callback) {
};
