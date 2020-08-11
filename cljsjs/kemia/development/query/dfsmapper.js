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

goog.provide('kemia.query.DFSMapper');
goog.provide('kemia.query.DFSMapper.Type');
goog.require('kemia.query.IMapper');
goog.require('kemia.ring.RingFinder');
goog.require('goog.structs.Map');
goog.require('kemia.query.State');

/**
 * This class implements the {@link kemia.query.IMapper} interface and can be
 * used for substructure searching. The algorithm compares each query atom with
 * the molecule atoms in a depth-first order. As long as the atom pairs match,
 * the path is extended. When the path contains the same number of elements as
 * there are atoms in the query, a match is found. See the <a
 * href="../Substructure Search.html">Substructure Search</a> page for more
 * details.
 * 
 * @param {kemia.query.IQuery}
 *            query the query to search
 * @constructor
 * @implements {kemia.query.IMapper}
 */
kemia.query.DFSMapper = function(query) {
	this.query = query;
}

/**
 * @enum {number}
 */
kemia.query.DFSMapper.Type = {
	MAP_FIRST : 0,
	MAP_UNIQUE : 1,
	MAP_ALL : 2
};

/**
 * Select a start atom. TODO: select the most unique query atom, this avoids
 * checking many paths that will never lead to a match.
 * 
 * @param {kemia.query.IQuery}
 *            query
 * @return {kemia.query.IQueryAtom}
 * 
 */
kemia.query.DFSMapper.getStartAtom = function(query) {
	return query.getAtom(0);
};

/**
 * Check if the current state is a full mapping of the query.
 * 
 * @param {kemia.query.State}
 *            state
 * @param {Array.<goog.structs.Map>} maps
 */
kemia.query.DFSMapper.checkForMap = function(state, maps) {
	// store the mapping if all atoms are mapped
	if (state.queryPath.length === state.query.countAtoms()) {
		// create the map
		var map = new goog.structs.Map();
		for ( var k = 0, kl = state.queryPath.length; k < kl; k++) {
			map.set(state.query.indexOfAtom(state.queryPath[k]), state.queried
					.indexOfAtom(state.queriedPath[k]));
		}
		if (state.type === kemia.query.DFSMapper.Type.MAP_UNIQUE) {
			var values = map.getValues();
			values.sort(function(a, b) {
				return a - b
			});
			var isUnique = true;
			for (k = 0, kl = maps.length; k < kl; k++) {
				var kValues = maps[k].getValues();
				kValues.sort(function(a, b) {
					return a - b
				});
				if (goog.array.equals(values, kValues)) {
					isUnique = false;
				}
			}
			if (isUnique) {
				maps.push(map);
			}
		} else {
			maps.push(map);
		}

		if (state.type === kemia.query.DFSMapper.Type.MAP_FIRST) {
			return;
		}
	}
};

/**
 * tests candidate atoms and bonds for match
 * 
 * @param {kemia.query.State}
 *            state
 * @param {kemia.query.IQueryAtom}
 *            queryAtom
 * @param {kemia.model.Atom}
 *            queriedAtom
 * @param {kemia.query.IQueryAtom}
 *            queryNbr
 * @param {kemia.model.Atom}
 *            queriedNbr
 * @param {Array.<goog.structs.Map>} maps
 * @return {boolean}
 */
kemia.query.DFSMapper.matchCandidate = function(state, queryAtom, queriedAtom,
		queryNbr, queriedNbr, maps) {
	// make sure the neighbor atom isn't in the paths already
	if (goog.array.indexOf(state.queryPath, queryNbr) !== -1) {
		return false;
	}
	if (goog.array.indexOf(state.queriedPath, queriedNbr) !== -1) {
		return false;
	}

	// check if the atoms match
	if (!queryNbr.matches(queriedNbr, state.queried, state.sssr)) {
		return false;
	}

	var queryBond = state.query.findBond(queryAtom, queryNbr);
	var queriedBond = state.queried.findBond(queriedAtom, queriedNbr);

	// check if the bonds match
	if (!queryBond.matches(queriedBond, state.queried)){//, state.sssr)) {
		return false;
	}

	// add the neighbors to the paths
	state.queryPath.push(queryNbr);
	state.queriedPath.push(queriedNbr);

	// check if this is a full match
	kemia.query.DFSMapper.checkForMap(state, maps);

	return true;
};

/**
 * The depth-first isomorphism algorithm.
 * 
 * @param {kemia.query.State}
 *            state
 * @param {kemia.query.IQueryAtom}
 *            queryAtom
 * @param {kemia.model.Atom}
 *            queriedAtom
 * @param {Array.<goog.structs.Map>} maps
 */
kemia.query.DFSMapper.depthFirstSearch = function(state, queryAtom,
		queriedAtom, maps) {
	var queryNbrs = queryAtom.getNeighbors();
	var queriedNbrs = queriedAtom.getNeighbors();

	// load the possible candidates
	var candidates = [];
	for ( var i = 0, li = queryNbrs.length; i < li; i++) {
		var queryNbr = queryNbrs[i];
		for ( var j = 0, lj = queriedNbrs.length; j < lj; j++) {
			var queriedNbr = queriedNbrs[j];
			candidates.push( {
				queryAtom : queryAtom,
				queryNbr : queryNbr,
				queriedAtom : queriedAtom,
				queriedNbr : queriedNbr
			});
		}
	}
	// save the candidates for later (used to explore branches)
	if (state.candidates.length) {
		state.candidates.push(state.candidates[state.candidates.length - 1]
				.concat(candidates));
	} else {
		state.candidates.push(candidates);
	}

	// do the mapping by checking the candidates
	while (state.candidates[state.candidates.length - 1].length) {
		var candidate = state.candidates[state.candidates.length - 1].pop();
		if (kemia.query.DFSMapper.matchCandidate(state, candidate.queryAtom,
				candidate.queriedAtom, candidate.queryNbr,
				candidate.queriedNbr, maps)) {
			kemia.query.DFSMapper.depthFirstSearch(state, candidate.queryNbr,
					candidate.queriedNbr, maps);

			// backtrack
			state.queryPath.pop();
			state.queriedPath.pop();
			state.candidates.pop();
		}
	}
};

/**
 * Helper function for mapAllCallback, mapUniqueCallback and MapFirstCallback
 * 
 * @param {number}
 *            i
 * @param {kemia.query.DFSMapper.Type}
 *            type
 * @param {kemia.query.IQuery}
 *            query
 * @param {kemia.query.IQueryAtom}
 *            queryAtom
 * @param {kemia.model.Molecule}
 *            queried
 * @param {Array.<goog.structs.Map>} maps
 * @param {function(Array.<goog.structs.Map>)} callback
 */
kemia.query.DFSMapper.mapNext = function(i, type, query, queryAtom, queried,
		maps, callback) {
	var state = new kemia.query.State(type, query, queried);
	var queriedAtom = queried.getAtom(i);

	if (queryAtom.matches(queriedAtom)) {
		state.queryPath.push(queryAtom);
		state.queriedPath.push(queriedAtom);
		kemia.query.DFSMapper.depthFirstSearch(state, queryAtom, queriedAtom,
				maps);
	}

	i++;
	if (i < queried.countAtoms()) {
		var nextBitOfWork = function() {
			kemia.query.DFSMapper.mapNext(i, type, query, queryAtom, queried,
					maps, callback);
		};
		setTimeout(nextBitOfWork, 0);
	} else {
		callback(maps);
	}
};

/**
 * Get all mappings of the query on the queried molecule.
 * 
 * @param {kemia.model.Molecule}
 *            queried The queried molecule.
 * @return {Array.<goog.structs.Map>} The mappings
 */
kemia.query.DFSMapper.prototype.mapAll = function(queried) {
	var maps = [];
	var queryAtom = kemia.query.DFSMapper.getStartAtom(this.query);
	for ( var i = 0, li = queried.countAtoms(); i < li; i++) {
		var state = new kemia.query.State(kemia.query.DFSMapper.Type.MAP_ALL,
				this.query, queried);
		var queriedAtom = queried.getAtom(i);
		if (!queryAtom.matches(queriedAtom)) {
			continue;
		}
		if (this.query.countAtoms() > 1) {
			state.queryPath.push(queryAtom);
			state.queriedPath.push(queriedAtom);
			kemia.query.DFSMapper.depthFirstSearch(state, queryAtom,
					queriedAtom, maps);
		} else {
			var map = new goog.structs.Map();
			map.set(state.query.indexOfAtom(queryAtom), state.queried
					.indexOfAtom(queriedAtom));
			maps.push(map);
		}
	}
	return maps;
};

/**
 * Get all mappings of the query on the queried molecule. The specified callback
 * function will be called with the found maps as argument. Unlike mapAll, this
 * function regulary gives control back to the browser, preventing the GUI to
 * lock up.
 * 
 * @param {kemia.model.Molecule}
 *            queried The queried molecule.
 * @param {function(Array.<goog.structs.Map>)} callback The callback function to report
 *            results.
 */
kemia.query.DFSMapper.prototype.mapAllCallback = function(queried, callback) {
	var maps = [];
	var queryAtom = kemia.query.DFSMapper.getStartAtom(this.query);
	var i = 0;
	kemia.query.DFSMapper.mapNext(i, kemia.query.DFSMapper.Type.MAP_ALL, this.query, queryAtom,
			queried, maps, callback);
};

/** @inheritDoc */
kemia.query.DFSMapper.prototype.mapUnique = function(queried) {
	var maps = [];
	var queryAtom = kemia.query.DFSMapper.getStartAtom(this.query);
	for ( var i = 0, li = queried.countAtoms(); i < li; i++) {
		var state = new kemia.query.State(
				kemia.query.DFSMapper.Type.MAP_UNIQUE, this.query, queried);
		var queriedAtom = queried.getAtom(i);
		if (!queryAtom.matches(queriedAtom)) {
			continue;
		}
		if (this.query.countAtoms() > 1) {
			state.queryPath.push(queryAtom);
			state.queriedPath.push(queriedAtom);
			kemia.query.DFSMapper.depthFirstSearch(state, queryAtom,
					queriedAtom, maps);
		} else {
			var map = new goog.structs.Map();
			map.set(state.query.indexOfAtom(queryAtom), state.queried
					.indexOfAtom(queriedAtom));
			maps.push(map);
		}
	}

	return maps;
};


/** @inheritDoc */
kemia.query.DFSMapper.prototype.mapUniqueCallback = function(queried, callback) {
	var maps = [];
	var queryAtom = kemia.query.DFSMapper.getStartAtom(this.query);
	var i = 0;
	kemia.query.DFSMapper.mapNext(i, kemia.query.DFSMapper.Type.MAP_UNIQUE, this.query, queryAtom,
			queried, maps, callback);
};

/** @inheritDoc */
kemia.query.DFSMapper.prototype.mapFirst = function(queried) {
	var maps = [];
	var queryAtom = kemia.query.DFSMapper.getStartAtom(this.query);
	for ( var i = 0, li = queried.countAtoms(); i < li; i++) {
		var state = new kemia.query.State(kemia.query.DFSMapper.Type.MAP_FIRST,
				this.query, queried);
		var queriedAtom = queried.getAtom(i);
		if (!queryAtom.matches(queriedAtom)) {
			continue;
		}

		if (this.query.countAtoms() > 1) {
			state.queryPath.push(queryAtom);
			state.queriedPath.push(queriedAtom);
			kemia.query.DFSMapper.depthFirstSearch(state, queryAtom,
					queriedAtom, maps);
		} else {
			var map = new goog.structs.Map();
			map.set(state.query.indexOfAtom(queryAtom), state.queried
					.indexOfAtom(queriedAtom));
			return map;
		}

		if (maps.length) {
			return maps[0];
		}
	}

	return new goog.structs.Map();
};

