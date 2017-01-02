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
 * @author paul@wingu.com (Paul Novak)
 */
goog.provide('kemia.view.BondRenderer');
goog.require('kemia.view.Renderer');
goog.require('kemia.math.Line');

/**
 * Class to render an bond object to a graphics representation
 * 
 * 
 * @param {goog.graphics.AbstractGraphics}
 *            graphics to draw on.
 * @param {Object=}
 *            opt_config override default configuration
 * @constructor
 * @extends {kemia.view.Renderer}
 */
kemia.view.BondRenderer = function(graphics, opt_config ) {
	kemia.view.Renderer.call(
			this,
			graphics, 
			kemia.view.BondRenderer.defaultConfig, 
			opt_config);
}
goog.inherits(kemia.view.BondRenderer, kemia.view.Renderer);

/**
 * @param {kemia.model.Bond}
 *            bond
 * @param {string}
 *            opt_color
 * @param {goog.graphics.Group=}
 *            opt_group
 */
kemia.view.BondRenderer.prototype.highlightOn = function(bond, opt_color, opt_group) {
	
	if(!opt_color){
		opt_color = this.config.get("highlight")['color'];
	}
	if (!opt_group) {
		opt_group = this.graphics.createGroup();
	}

	var stroke = null;
	var angle = goog.math.angle(bond.source.coord.x, bond.source.coord.y, bond.target.coord.x,
			bond.target.coord.y);
	var angle_up = goog.math.standardAngle(angle + 90);
	var angle_down = goog.math.standardAngle(angle - 90);
	

	var angle_up_rads = goog.math.toRadians(angle_up);
	var angle_down_rads = goog.math.toRadians(angle_down);
	
	var scale = this.transform.getScaleX();
	var radius = this.config.get("highlight")['radius']
			* scale ;
	
	
	var coords = this.transform.transformCoords( [ bond.source.coord,
			bond.target.coord ]);

	var source_up = goog.math.Coordinate.sum(new goog.math.Coordinate(
			radius * Math.cos(angle_up_rads), -radius
					* Math.sin(angle_up_rads)), coords[0]);

	var target_up = goog.math.Coordinate.sum(new goog.math.Coordinate(
			radius * Math.cos(angle_up_rads), -radius
					* Math.sin(angle_up_rads)), coords[1]);

	var source_down = goog.math.Coordinate.sum(new goog.math.Coordinate(
			radius * Math.cos(angle_down_rads), -radius
					* Math.sin(angle_down_rads)), coords[0]);
	var target_down = goog.math.Coordinate.sum(new goog.math.Coordinate(
			radius * Math.cos(angle_down_rads), -radius
					* Math.sin(angle_down_rads)), coords[1]);

	var path_up = new goog.graphics.Path();
	path_up.moveTo(coords[0].x, coords[0].y);
	path_up.lineTo(source_up.x, source_up.y);
	path_up.lineTo(target_up.x, target_up.y);
	path_up.lineTo(coords[1].x, coords[1].y);
	path_up.close();
// var fill = new goog.graphics.LinearGradient(coords[0].x, coords[0].y,
// source_up.x, source_up.y, opt_color, 'white');
	var fill = new goog.graphics.SolidFill(opt_color, .15);
	this.graphics.drawPath(path_up, stroke, fill, opt_group);
	
	var path_down = new goog.graphics.Path();
	path_down.moveTo(coords[0].x, coords[0].y);
	path_down.lineTo(source_down.x, source_down.y);
	path_down.lineTo(target_down.x, target_down.y);
	path_down.lineTo(coords[1].x, coords[1].y);
	path_down.close();
// var fill = new goog.graphics.LinearGradient(coords[0].x, coords[0].y,
// source_down.x, source_down.y, opt_color, 'white');
	this.graphics.drawPath(path_down, stroke, fill, opt_group);
	
	
	return opt_group;
}

/**
 * 
 * @return{number} bond angle of elevation
 */
kemia.view.BondRenderer.getTheta = function(bond) {
	return new kemia.math.Line(bond.source.coord, bond.target.coord)
			.getTheta();
}


kemia.view.BondRenderer.hasSymbol = function(atom) {
    return (atom.symbol != "C" || atom.countBonds() == 1);
}


/**
 * A default configuration for renderer
 */
kemia.view.BondRenderer.defaultConfig = {
	'bond' : {
		'stroke' : {
			'width' : 1.5,
			'color' : 'black'
		},
		'fill' : {
			'color' : 'black'
		}, 
		'width-ratio' : 6,
		'symbol-space' : 0.3,
		'triple-dist' : 0.15,
		'quad-dist' : 0.13

	},
	'highlight' : {
		'radius' : .3,
		'color' : 'blue'
	}
};



