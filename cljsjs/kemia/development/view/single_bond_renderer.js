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
goog.provide('kemia.view.SingleBondRenderer');
goog.require('kemia.view.BondRenderer');
goog.require('goog.math.Vec2');
goog.require('goog.math.Coordinate');

/**
 * Class to render an single bond object to a graphics representation
 * 
 * 
 * @param {goog.graphics.AbstractGraphics}
 *            graphics to draw on.
 * @param {Object=}
 *            opt_config override default configuration
 * @constructor
 * @extends {kemia.view.BondRenderer}
 */
kemia.view.SingleBondRenderer = function(graphics, opt_config) {
	kemia.view.BondRenderer.call(this, graphics,
			kemia.view.SingleBondRenderer.defaultConfig, opt_config);
};
goog.inherits(kemia.view.SingleBondRenderer, kemia.view.BondRenderer);

kemia.view.SingleBondRenderer.prototype.render = function(bond, transform,
		bondPath) {
	this.setTransform(transform);

	// the bond coordinates
	var coords = [ bond.source.coord, bond.target.coord ];
	// bond vector
	var bv = goog.math.Vec2.fromCoordinate(goog.math.Coordinate.difference(
			coords[1], coords[0]));
	// normalize and scale vector to length 0.2
	bv.normalize();
	bv.scale(this.config.get('bond')['symbol-space']);

	// adjust source coord for symbol if needed
	if (kemia.view.BondRenderer.hasSymbol(bond.source)) {
		coords[0] = goog.math.Coordinate.sum(coords[0], bv);
	}
	// adjust target coord for symbol if needed
	if (kemia.view.BondRenderer.hasSymbol(bond.target)) {
		coords[1] = goog.math.Coordinate.difference(coords[1], bv);
	}

	// apply the transformation
	coords = transform.transformCoords( [ coords[0], coords[1] ]);

	// add the line to the bond path
	bondPath.moveTo(coords[0].x, coords[0].y);
	bondPath.lineTo(coords[1].x, coords[1].y);

}
