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
 * @fileoverview class to describe an arrow in a reaction
 * @author paul@wingu (Paul Novak)
 */

goog.provide('kemia.model.Arrow');
goog.require('kemia.math.Line');
goog.require('goog.math.Vec2');

/**
 * @param {goog.math.Coordinate=}
 *            opt_source source point coordinates for arrow
 * @param {goog.math.Coordinate=}
 *            opt_target target point coordinates for arrow
 * @param {kemia.model.Arrow.STYLE=}
 *            opt_style
 * @param {string=}
 *            opt_reagents_text
 * @param {string=}
 *            opt_conditions_text
 * @constructor
 */

kemia.model.Arrow = function(opt_source, opt_target, opt_style,
		opt_reagents_text, opt_conditions_text) {
	this.source = goog.isDef(opt_source) ? opt_source
			: new goog.math.Coordinate(10, 0);
	this.target = goog.isDef(opt_target) ? opt_target : goog.math.Coordinate
			.sum(this.source, new goog.math.Coordinate(2, 0));
	this.style = goog.isDef(opt_style) ? opt_style
			: kemia.model.Arrow.STYLES.FORWARD;
	this.reagents_text = goog.isDef(opt_reagents_text) ? opt_reagents_text : "";
	this.conditions_text = goog.isDef(opt_conditions_text) ? opt_conditions_text
			: "";
};

/**
 * translates Arrow coordinates
 * 
 * @param{goog.math.Vec2} vector translation amount
 */
kemia.model.Arrow.prototype.translate = function(vector){
	this.source = goog.math.Coordinate.sum(this.source, vector);
	this.target = goog.math.Coordinate.sum(this.target, vector);
};

/**
 * center of arrow
 * @return {goog.math.Coordinate}
 */
kemia.model.Arrow.prototype.getCenter = function(){
	var source = goog.math.Vec2.fromCoordinate(this.source);
	var target = goog.math.Vec2.fromCoordinate(this.target);
	return source.add(target.subtract(source).scale(0.5));
}

/**
 * returns enum describing orientation of point relative to Arrow
 * 
 * @param {goog.math.Coordinate}
 *            point
 * @return {kemia.model.Arrow.ORIENTATION}
 */
kemia.model.Arrow.prototype.getOrientation = function(point){
	
	var center = new goog.math.Coordinate(
			(this.source.x + this.target.x)/2, 
			(this.source.y + this.target.y)/2);

	var arrow_vector = new goog.math.Vec2.fromCoordinate(
			goog.math.Coordinate.difference(this.source, this.target));
	var ortho_vector = new goog.math.Vec2(-arrow_vector.y, arrow_vector.x);
	var ortho_line = new kemia.math.Line(
			center, 
			goog.math.Coordinate.sum(center, ortho_vector));
	
	if (ortho_line.isSameSide(point, this.target)){
		return kemia.model.Arrow.ORIENTATION.AHEAD;
	} else {
		return kemia.model.Arrow.ORIENTATION.BEHIND;
	}
}
/**
 * @param{string} text
 */
kemia.model.Arrow.prototype.setReagentsText = function (text){
	if(text){
		this.reagents_text = text;
	} else {
		this.reagents_text = ''
	}
}

/**
 * @param{string} text
 */
kemia.model.Arrow.prototype.setConditionsText = function(text) {
	if(text){
		this.conditions_text = text;
	} else {
		this.conditions_text = '';
	}
}

kemia.model.Arrow.prototype.toString = function() {
	return 'kemia.model.Arrow ' + this.source.toString() + " " + this.target.toString();
}

/**
 * @enum {number}
 */
kemia.model.Arrow.STYLES = {
	FORWARD : 1,
	BACKWARD : 2,
	BIDIRECTIONAL : 3
}

/**
 * description of position relative to Arrow used to determine if a molecule is
 * a reactant or product by its position
 * 
 * @enum {number}
 */
kemia.model.Arrow.ORIENTATION = {
	AHEAD : 1,
	BEHIND : 2
}