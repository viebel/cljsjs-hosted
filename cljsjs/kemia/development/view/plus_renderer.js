goog.provide('kemia.view.PlusRenderer');
goog.require('kemia.view.Renderer');

/**
 * Class to render a Plus object to a graphics representation
 * 
 *
 * @param {goog.graphics.AbstractGraphics} graphics to draw on.
 * @param {Object=} opt_config override default configuration
 * @constructor
 * @extends {kemia.view.Renderer}
 */
kemia.view.PlusRenderer = function(graphics, opt_config) {
	kemia.view.Renderer.call(this, graphics,
			kemia.view.PlusRenderer.defaultConfig, opt_config);
}
goog.inherits(kemia.view.PlusRenderer, kemia.view.Renderer);

/**
 * @param {kemia.model.Plus} plus
 * @param {kemia.graphics.AffineTransform} transform
 */
kemia.view.PlusRenderer.prototype.render = function(plus, transform) {
	this.setTransform(transform);
	plus.group = this.graphics.createGroup();
	var coord = plus.coord;
	var w = this.config.get('plus')['size'];
	var h0 = new goog.math.Coordinate(coord.x, coord.y - w);
	var h1 = new goog.math.Coordinate(coord.x, coord.y + w);
	var v0 = new goog.math.Coordinate(coord.x - w, coord.y);
	var v1 = new goog.math.Coordinate(coord.x + w, coord.y);

	var path = new goog.graphics.Path();
	var stroke = new goog.graphics.Stroke(
			this.config.get("plus")['stroke']['width'],
			this.config.get("plus")['stroke']['color']);

	var coords = transform.transformCoords( [ h0, h1, v0, v1 ]);

	path.moveTo(coords[0].x, coords[0].y);
	path.lineTo(coords[1].x, coords[1].y);
	path.moveTo(coords[2].x, coords[2].y);
	path.lineTo(coords[3].x, coords[3].y);

	// the visible plus sign
	this.graphics.drawPath(path, stroke, null, plus.group);

};

/**
 * @param {kemia.model.Plus}
 *            plus
 * @param {string=} opt_color
 * @param {goog.graphics.Group=}
 *            opt_group
 */
kemia.view.PlusRenderer.prototype.highlightOn = function(plus, opt_color, opt_group) {
	if(!opt_color){
		opt_color = this.config.get("plus")['highlight']["color"];
	}
	if (!opt_group) {
		opt_group = this.graphics.createGroup();
	}

	var stroke = null;
	var fill = new goog.graphics.SolidFill(opt_color, .3);
	var radius = this.config.get("plus")['highlight']['radius']
			* this.transform.getScaleX();
	var coords = this.transform.transformCoords( [ plus.coord ])[0];
	this.graphics.drawCircle(coords.x, coords.y, radius, stroke, fill,
			opt_group);

	return opt_group;
};

/**
 * A default configuration for renderer
 */
kemia.view.PlusRenderer.defaultConfig = {
	'plus' : {
		'highlight' : {
			'color' : 'blue',
			'radius' : .4
		},
		'size' : .25,
		'stroke' : {
			'width' : 2,
			'color' : "black"
		}
	}
}
