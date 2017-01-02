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

goog.provide('kemia.query.SmilesCompiler');
goog.require('kemia.query.IQueryCompiler');
goog.require('kemia.io.smiles.SmilesParser');
goog.require('kemia.query.MoleculeCompiler');

/**
 * The Smiles Query Compiler compiles SMILES strings into queries. This class
 * implements {@link kemia.query.IQueryCompiler}. See the <a
 * href="../Substructure Search.html">Substructure Search</a> page for more
 * information. Smiles Query Compiler
 * 
 * @see kemia.query.IQueryCompiler
 * @implements kemia.query.IQueryCompiler
 * @constructor
 */
kemia.query.SmilesCompiler = function() {
};

/** @inheritDoc */
kemia.query.SmilesCompiler.prototype.compile = function(smiles) {
	var molecule = kemia.io.smiles.SmilesParser.parse(smiles);
	var query = new kemia.query.MoleculeCompiler().compile(molecule);
	return query;
};
