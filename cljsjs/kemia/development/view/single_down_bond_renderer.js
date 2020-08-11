/** 
 * Copyright 2010 Paul Novak (paul@wingu.com)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 * limitations under the License.
 * @author paul@wingu.com (Paul Novak)
 */
goog.provide('kemia.view.SingleDownBondRenderer');
goog.require('kemia.view.BondRenderer');

/**
 * Class to render an single down bond object to a graphics representation
 * 
 *
 * @param {goog.graphics.AbstractGraphics} graphics to draw on.
 * @param {Object=} opt_config override default configuration
 * @constructor
 * @extends {kemia.view.BondRenderer}
 */
kemia.view.SingleDownBondRenderer = function(graphics, opt_config) {
	kemia.view.BondRenderer.call(this,
			graphics, 
			kemia.view.SingleDownBondRenderer.defaultConfig, 
			opt_config);
}
goog.inherits(kemia.view.SingleDownBondRenderer, kemia.view.BondRenderer);

kemia.view.SingleDownBondRenderer.prototype.render = function(bond, transform, path) {

	this.setTransform(transform);
	var width = this.config.get("bond")['stroke']['width'] / 10;
	var theta = kemia.view.BondRenderer.getTheta(bond);

	var angle_left = theta + (Math.PI / 2);
	var angle_right = theta - (Math.PI / 2);
	var transleft = new kemia.graphics.AffineTransform(1, 0, 0, 1, Math
			.cos(angle_left)
			* width, Math.sin(angle_left) * width);

	var transright = new kemia.graphics.AffineTransform(1, 0, 0, 1,Math
			.cos(angle_right)
			* width, Math.sin(angle_right) * width);

	var leftside = transleft.transformCoords([bond.source.coord, bond.target.coord]);
	var rightside = transright.transformCoords([bond.source.coord, bond.target.coord]);

    var coords = transform.transformCoords( [ leftside[0],leftside[1], rightside[0], rightside[1], bond.source.coord ]);

    var lines=7;
	var correct=0;
	if( bond.target.symbol!="C")
	   correct=1;
    for ( var j = 0; j < (lines-correct); j++) {
        path.moveTo( (((lines-j)*coords[4].x)+(j*coords[1].x))/lines, 
                     (((lines-j)*coords[4].y)+(j*coords[1].y))/lines);

        path.lineTo( (((lines-j)*coords[4].x)+(j*coords[3].x))/lines, 
                     (((lines-j)*coords[4].y)+(j*coords[3].y))/lines);
    }
}
