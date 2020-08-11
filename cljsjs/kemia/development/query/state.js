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

goog.provide('kemia.query.State');

/**
 * State to represent the current mapped state.
 * @param {kemia.query.DFSMapper.Type} type 
 * @param {kemia.query.IQuery} query to search for
 * @param {kemia.model.Molecule} queried the queried Molecule
 * @constructor
 */
kemia.query.State = function(type, query, queried) {
	/** 
	 * @type {kemia.query.DFSMapper.Type}
	 */
	this.type = type;
	/**
	 * @type {kemia.query.IQuery}
	 */
	this.query = query; 
	/**
	 * @type {kemia.model.Molecule}
	 */
	this.queried = queried; // the queried molecule
	/**
	 * @type {Array.<kemia.ring.Ring>}
	 */
	this.sssr = queried.getRings(); 
	
	this.queryPath = []; // the path in the query
	this.queriedPath = []; // the path in the queried molecule
	this.candidates = []; // the candidates to check
}