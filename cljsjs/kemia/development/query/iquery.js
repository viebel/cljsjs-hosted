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
goog.provide('kemia.query.IQuery');
goog.require('kemia.query.IQueryAtom');
goog.require('kemia.query.IQueryBond');

/**
 * <h2 class="fixedFont">Introduction</h2>
 * <p>
 * Substructure search is essentially searching for a mapping of a query on a
 * molecule. In kemia, a flexible set of classes are used for substructure
 * searching. These classes can be devied in three groups: queries, query
 * compilers and mappers.
 * </p>
 * <h2 class="fixedFont">Queries</h2>
 * <p>
 * Queries define the (sub)stucture to be searched for. Similar to a molecule, a
 * query contains atoms and bonds. The methods required for queries and their
 * atoms and bonds are defined by interfaces. These are
 * {@link kemia.query.IQuery}, {@link kemia.query.IQueryAtom} and
 * {@link kemia.query.IQueryBond}. Default implementations for these classes
 * are provided but any objects implementing the interfaces can be used. The
 * default implementations are {@link kemia.query.Query},
 * {@link kemia.query.QueryAtom} and {@link kemia.query.QueryBond}.
 * </p>
 * <p>
 * When doing a substructure search, queries are usually created using a query
 * compiler. Directly manipulating query objects is only needed when
 * implementing new query compilers.
 * </p>
 * <h2 class="fixedFont">Query Compilers</h2>
 * <p>
 * Query Compilers convert various query representations to query objects
 * implementing the query interfaces. The query compiler interface
 * {@link kemia.query.IQueryCompiler} only contains a static compile method.
 * </p>
 * <p>
 * The {@link kemia.query.MoleculeCompiler} takes a molecule and converts it to
 * a query. The resulting query is an exact (sub)structure search. Another
 * similar query compiler is the {@link kemia.query.SmilesCompiler} which
 * converts a smiles string to a query. Complex queries can be created using the
 * {@link kemia.query.SmartCompiler}. Smarts strings are complex queries with
 * logical operators for query atoms and/or query bonds.
 * </p>
 * 
 * The usage of various query compilers is the same:
 * 
 * <pre class="code">
 * goog.require('kemia.query.MoleculeCompiler')
 * goog.require('kemia.query.SmilesCompiler')
 * goog.require('kemia.query.SmartsCompiler')
 * ...
 * var query = kemia.query.MoleculeCompiler.compile(molecule);
 * var query = kemia.query.SmilesCompiler.compile(&quot;OCCC=N&quot;);
 * var query = kemia.query.SmartsCompiler.compile(&quot;[C,N]=&amp;@C&quot;);
 * </pre>
 * 
 * <h2 class="fixedFont">Mappers</h2>
 * <p>
 * Mappers search for a mapping of the query onto a molecule. The interface for
 * mappers is {@link kemia.query.IMapper}. The query is specified when
 * constructing the mapper object. Once constructed, one or more molecules can
 * be searched with the same query. Every mapper implements the mapFirst and
 * mapUnique methods to map only the first found match or map all unique
 * mappings.
 * </p>
 * <p>
 * Mapping all unique mappings can be time consuming for large molecules. To
 * solv this problem, the work of a substructure search can be divided in short
 * running time parts. To make use of this, the mapUniqueCallback method can be
 * used. Depending on the size of your molecule mapUnique will return within
 * 100ms. When searching a large number of molecules (e.g. a database) it is
 * recommended to frequently allow the browser to do gui updating. If this is
 * not done, the browser will "lock" and the user experiences the page as
 * unresponsive.
 * </p>
 * 
 * Example showing how to allow the browser to remain responsive:
 * 
 * <pre class="code">
 * var i = 0;
 * var smiles = ['CC(C)C', 'c1ccccc1CC', ...];
 * var query = kemia.query.SmilesCompiler.compile('c1ccccc1');
 * var mapper = new kemia.query.DFSMapper(query);
 * function doNext() {
 *       var molecule = kemia.io.smiles.parse(smiles[i]);
 *       var maps = mapper.mapUnique(molecule);
 *       debug(&quot;match &quot; + (i+1) + &quot;: &quot; + maps.length);
 *       i++;
 *       if (i &lt; smiles.length) {
 *           // a timeout of 0 means: process events (i.e. gui, mouse presses,
 *           // key presses, ...) and class doNext
 *           setTimeout(doNext, 0);
 *       }
 * }
 * </pre>
 * 
 * 
 * <h2 class="fixedFont">Example</h2>
 * 
 * <pre class="code">
 * &lt;html&gt;
 *     &lt;head&gt;
 *         &lt;script&gt;
 *             goog.require('kemia.query.SmartsCompiler')
 *             goog.require('kemia.query.DFSMapper')
 *   
 *             function doSubstructureSearch(molecule, smart) {
 *                  var query = kemia.query.SmartCompiler.compile(smart);
 *                  var mapper = kemia.query.DFSMapper(query);
 *                  var maps = mapper.mapUnique(molecule);
 *                  ...do something with found mappings...
 *             }
 *         &lt;/script&gt;
 *     &lt;/head&gt;
 *     &lt;body&gt;
 *     &lt;/body&gt;
 * &lt;/html&gt;
 * </pre>
 * 
 * 
 * page Substructure Search
 * @name needed to make sure jsdoc doesn't ignore the comment
 */

/**
 * <p>
 * The {@link kemia.query.IQuery} class defines an interface for Query objects.
 * Other classes in the Substructure Search framework rely on these interfaces
 * to ensure interoperability. The interface doesn't actually do anything. Since
 * javascript is a dynamic language, we can pass any object as parameter. As
 * long as the object has the correct methods and fields, no inheritance is
 * needed.
 * </p>
 * 
 * <p>
 * This interface makes use of two other interfaces:
 * {@link kemia.query.IQueryAtom} and {@link kemia.query.IQueryBond}. There is
 * a default implementation for these interfaces: {@link kemia.query.Query},
 * {@link kemia.query.QueryAtom} and {@link kemia.query.QueryBond}. However, in
 * practice the use of query compilers limit the need to directly manipulate
 * query objects. There are query compilers to convert a
 * {@link kemia.model.Molecule}, SMILES or SMARTS to a query.
 * </p>
 * 
 * 
 * Example showing the use of various query compilers:
 * 
 * <pre class="code">
 * goog.require('kemia.query.MoleculeCompiler')
 * goog.require('kemia.query.SmilesCompiler')
 * goog.require('kemia.query.SmartsCompiler')
 * ...
 * var query = kemia.query.MoleculeCompiler.compile(molecule);
 * var query = kemia.query.SmilesCompiler.compile(&quot;OCCC=N&quot;);
 * var query = kemia.query.SmartsCompiler.compile(&quot;[C,N]=&amp;@C&quot;);
 * </pre>
 * 
 * @author Tim Vandermeersch An Interface defining Query objects.
 * @interface
 */
kemia.query.IQuery = function() {};

/**
 * Add a query atom to this query.
 * 
 * @param {kemia.query.IQueryAtom}
 *            atom The query atom to add.
 */
kemia.query.IQuery.prototype.addAtom = function(atom) {};
/**
 * Add a query bond to this query.
 * 
 * @param {kemia.query.IQueryBond} bond
 *            The query bond to add
 */
kemia.query.IQuery.prototype.addBond = function(bond) {};
/**
 * Get the number of query atoms in this query.
 * 
 * @return {number} The number of query atoms in this query.
 */
kemia.query.IQuery.prototype.countAtoms = function() {};
/**
 * Get an atom by index.
 * 
 * @param {number} index
 *            The atom index.
 * @return {?kemia.query.IQueryAtom} The atom with the specified index or null
 *         if the atom is not in the query.
 */
kemia.query.IQuery.prototype.getAtom = function(index) {};

/**
 * Find the bond connecting atom1 with atom2.
 * 
 * @param {kemia.query.IQueryAtom} atom1
 *            The first atom.
 * @param {kemia.query.IQueryAtom} atom2
 *            The second atom.
 * @return {kemia.query.IQueryBond} The found bond or null if no such bond
 *         exists.
 */
kemia.query.IQuery.prototype.findBond = function(atom1, atom2) {};

/**
 * Get the index of the specified query atom.
 * 
 * @param {kemia.query.IQueryAtom} atom
 *            The query atom for which to get the index.
 * @return {number} The index of the specified atom or -1 if the atom is not
 *         part of this query.
 */
kemia.query.IQuery.prototype.indexOfAtom = function(atom) {};
