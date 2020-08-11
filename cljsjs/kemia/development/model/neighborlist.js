goog.provide('kemia.model.NeighborList');
goog.require('goog.math.Vec2');
goog.require('goog.array');
goog.require('goog.math.Line');

/**
 * @typedef {{obj:Object, getCenter:(function():goog.math.Coordinate),
 *          getDistance:function(goog.math.Coordinate):number}}
 */
kemia.model.Neighbor;

/**
 * Class for locating the objects nearest to a specified coordinate.
 * 
 * <pre class="code">
 * var neighborList = new kemia.model.NeighborList( [ neighbors ]);
 * neighborList.getNearest( {
 * 	x : 4,
 * 	y : 5
 * });
 * </pre>
 * 
 * @class Class for computing objects for a specified coordinate.
 * @param {Array.<kemia.model.Neighbor>} objects 
 * The objects to initialize the
 *            grid.
 * @param {number=}
 *            opt_cellSize The cell size, default is 2. This is in atomic units.
 * @param {number=}
 *            opt_tolerance The tolerance to consider an atom close enough to
 *            the specified coordinate. The default is 0.3. This is in atomic
 *            units.
 * @constructor
 */

kemia.model.NeighborList = function(objects, opt_cellSize, opt_tolerance) {
	this.cells = {};
	this.cellSize = opt_cellSize ? opt_cellSize : 2;
	this.tolerance = opt_tolerance ? opt_tolerance : 0.3;
	this.xMin = 100000;
	this.yMin = 100000;
	this.xMax = -100000;
	this.yMax = -100000;

	// find min/max values for the grid
	for ( var i = 0, li = objects.length; i < li; i++) {
		var o = objects[i];
		var center = o.getCenter();
		if (center.x < this.xMin) {
			this.xMin = center.x;
		}
		if (center.x > this.xMax) {
			this.xMax = center.x;
		}
		if (center.y < this.yMin) {
			this.yMin = center.y;
		}
		if (center.y > this.yMax) {
			this.yMax = center.y;
		}
	}

	this.xMin -= 1;
	this.yMin -= 1;
	this.xMax += 1;
	this.yMax += 1;

	// compute number of cells and create them
	this.width = this.xMax - this.xMin;
	this.height = this.yMax - this.yMin;
	this.xDim = Math.ceil(this.width / this.cellSize);
	this.yDim = Math.ceil(this.height / this.cellSize);
	// for ( var i = 0, li = this.xDim * this.yDim; i < li; i++) {
	// this.cells.push( []);
	// }

	// add the objects to the grid
	goog.array.forEach(objects, function(o) {

		var center = o.getCenter();
		var x = Math.floor((center.x - this.xMin) / this.cellSize);
		var y = Math.floor((center.y - this.yMin) / this.cellSize);
		var key = y * this.xDim + x;
		if (!this.cells[key]) {
			this.cells[key] = [];
		}
		this.cells[key].push(o);

	}, this);
};

/**
 * 
 * @param {goog.math.Coordinate} coord
 * @return {Array}
 */
kemia.model.NeighborList.prototype.cellsAroundCoord = function(coord) {
	var cells = [];
	var x = Math.floor((coord.x - this.xMin) / this.cellSize);
	var y = Math.floor((coord.y - this.yMin) / this.cellSize);

	for ( var i = x - 1, li = x + 2; i < li; i++) {
		if (i < 0 || i >= this.xDim) {
			continue;
		}
		for ( var j = y - 1, lj = y + 2; j < lj; j++) {
			if (j < 0 || j >= this.yDim) {
				continue;
			}
			cells.push(j * this.xDim + i);
		}
	}

	return cells;
};

/**
 * 
 */
kemia.model.NeighborList.prototype.triangleSign = function(a, b, c) {
	return (a.x - c.x) * (b.y - c.y) - (a.y - c.y) * (b.x - c.x);
};

// /**
// * calculate distance from a point to the nearest point on the bond line
// segment
// *
// * @param {kemia.model.Bond}
// * bond, the subject bond
// * @param {goog.math.Coordinate}
// * coord coordinate of the subject point
// * @return {number} distance from the point to the nearest point on the bond
// */
// kemia.model.NeighborList.prototype.bondDistance = function(bond, coord) {
// var line = new goog.math.Line(bond.source.coord.x, bond.source.coord.y,
// bond.target.coord.x, bond.target.coord.y);
// return goog.math.Coordinate.distance(line.getClosestSegmentPoint(coord.x,
// coord.y), coord);
// };

kemia.model.NeighborList.prototype.getNearest = function(coord) {
	var nearestList = this.getNearestList(coord);
	if (nearestList.length > 0) {
		return nearestList[0];
	}
};

/**
 * Returns a neighboring objects for the specified coordinate. Sorted by
 * distance from the coordinate. Atoms have higher priority than bonds since
 * bonds will overlap with atoms. For atoms, the distance from the specified
 * coordinate to the atom coordinate is checked. If this is within the used
 * tolerance, the atom is a candidate. The search goes on untill all near atoms
 * in the neighboring cells are checked and the nearest atom is returned. For
 * bonds, a bounding box with a 2 * tolerance width and length of the bond is
 * used to check is within the (rotated) box. Any bond matching the coordinate
 * are assigned the tolerance as distance resulting in atoms having a higher
 * priority (The atom will be closer than tolerance...).
 */

kemia.model.NeighborList.prototype.getNearestList = function(coord) {
	var nearest = [];
	var cells = this.cellsAroundCoord(coord);
	var rMin = this.tolerance;
	for (var i = 0, li = cells.length; i < li; i++) {
		var cell = this.cells[cells[i]];
		if (cell) {
			for (var j = 0, lj = cell.length; j < lj; j++) {
				var o = cell[j];
				var r = o.getDistance(coord);
				if (r < this.tolerance) {
					// console.log( [ o.obj.toString(), r ])
					nearest.push( {
						obj : o.obj,
						distance : r
					});
				}

			}
		}
	}

	nearest.sort(function(a, b) {
		return a.distance - b.distance;
	});

	return goog.array.map(nearest, function(n) {
		return n.obj;
	});
};

/**
 * @param {Array.<kemia.model.Reaction>} reactions
 * @return {Array.<kemia.model.Neighbor>}
 */
kemia.model.NeighborList.reactionsToNeighbors = function(reactions) {
	return goog.array.flatten(goog.array.map(reactions, function(reaction) {
		return goog.array.concat(
				kemia.model.NeighborList.moleculesToNeighbors(reaction.molecules), 
				goog.array.map(reaction.pluses, function(p) {
					return {
						obj : p,
						getCenter : function() {
						return p.coord;
					},
					getDistance : function(point) {
						return goog.math.Coordinate.distance(
								p.coord, point);
					}
					};
				}), 
				goog.array.map(reaction.arrows, function(a) {
					return {
						obj : a,
						getCenter : function() {
						return a.getCenter();
					},
					getDistance : function(point) {
						var line = new goog.math.Line(a.source.x,
								a.source.y, a.target.x,
								a.target.y);
						return goog.math.Coordinate.distance(line
								.getClosestSegmentPoint(point.x, point.y),
								point);
					}
					};
				})

		)
	}))
};

/**
 * @param {Array.<kemia.model.Molecule>} molecules
 * @return {Array.<kemia.model.Neighbor>}
 */
kemia.model.NeighborList.moleculesToNeighbors = function(molecules) {
	var neighbors = goog.array.map(molecules, function(mol) {
		return {
			obj : mol,
			getCenter : function() {
				return mol.getCenter();
			},
			getDistance : function(point) {

				return goog.math.Coordinate.distance(mol.getCenter(), point)/4;
			}
		};
	});
	goog.array.forEach(molecules, function(mol) {
		neighbors = goog.array.concat(neighbors, goog.array.map(mol.atoms,
				function(a) {
					return {
						obj : a,
						getCenter : function() {
							return a.coord;
						},
						getDistance : function(point) {
							return goog.math.Coordinate
									.distance(a.coord, point);
						}
					};
				}));

		neighbors = goog.array.concat(neighbors, goog.array.map(mol.bonds,
				function(b) {
					return {
						obj : b,
						getCenter : function() {
							var midPoint = goog.math.Vec2
									.fromCoordinate(goog.math.Coordinate.sum(
											b.source.coord, b.target.coord));
							return midPoint.scale(0.5);
						},
						getDistance : function(point) {
							var line = new goog.math.Line(b.source.coord.x,
									b.source.coord.y, b.target.coord.x,
									b.target.coord.y);
							return goog.math.Coordinate.distance(line
									.getClosestSegmentPoint(point.x, point.y),
									point);
						}
					};
				}));
	});
	return neighbors
};
