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
goog.provide('kemia.query.IQueryCompiler');

/**
 * Interface defining Query Compilers.
 * 
 * Query compilers are used to convert various input sources to queries. To
 * implement a query compiler, a single static "compile" member function is
 * needed. The method should return an object implementing
 * @see kemia.query.IQuery
 * 
 * @interface
 */
kemia.query.IQueryCompiler = function() {};
/**
 * Compile a query.
 * 
 * @param {(kemia.model.Molecule|string)}
 *            variable The source for query compilation, this can be a molecule,
 *            smiles or smarts string, ...
 * @return {kemia.query.IQuery}
 */
kemia.query.IQueryCompiler.prototype.compile = function(variable) {
};
