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
 * @fileoverview class to describe an plus sign in a reaction
 * @author paul@wingu (Paul Novak)
 */

goog.provide('kemia.model.Plus');
/**
 * @param {goog.math.Coordinate=} coord center of plus sign in atomic coordinates
 * @constructor
 */
kemia.model.Plus = function(coord) {
	this.coord = goog.isDef(coord) ? coord : new goog.math.Coordinate(0, 0);
}

/**
 * translates Plus coordinates
 * 
 * @param{goog.math.Vec2} vector translation amount
 */
kemia.model.Plus.prototype.translate = function(vector){
	this.coord = goog.math.Coordinate.sum(this.coord, vector);

};
