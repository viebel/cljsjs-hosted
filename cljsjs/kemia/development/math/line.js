/**
 * Copyright 2010 Paul Novak (paul@wingu.com)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 * 
 */

goog.provide('kemia.math.Line');
goog.require('kemia.math.Triangle');
goog.require('goog.math.Coordinate');

/**
 * representation of a line segment
 * 
 * @param {goog.math.Coordinate}
 *            source start point
 * @param {goog.math.Coordinate}
 *            target end point
 * 
 * @constructor
 */
kemia.math.Line = function(source, target) {
	/** @type {goog.math.Coordinate} **/
	this.source = source;
	/** @type {goog.math.Coordinate} **/
	this.target = target;
};

/**
 * 
 * @return angle of elevation between this line and the x-axis in radians
 */
kemia.math.Line.prototype.getTheta = function() {
	var diff = goog.math.Coordinate.difference(this.target, this.source);
	return Math.atan2(diff.y, diff.x);
}
/**
 * returns true if two points are on same side of line returns false if they are
 * on opposite sides, or at least one is one the line
 * 
 * @param {goog.math.Coordinate}
 *            point1
 * @param {goog.math.Coordinate}
 *            point2
 * @return {boolean}
 */
kemia.math.Line.prototype.isSameSide = function(point1, point2){
	return kemia.math.Triangle.signedArea(this.source, this.target, point1) * 
		kemia.math.Triangle.signedArea(this.source, this.target, point2) > 0;
}
