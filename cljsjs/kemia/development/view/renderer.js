goog.provide("kemia.view.Renderer");
goog.require("goog.structs.Map");
goog.require("goog.debug.Logger");

/**
 * Abstract Class to render a model object to a graphics representation
 * 
 * @param graphics
 *            {goog.graphics.AbstractGraphics} graphics to draw on.
 * @param {Object=} opt_default_config holding default values
 * @param opt_config
 *            {Object=} opt_config to override defaults
 * @constructor
 */
kemia.view.Renderer = function(graphics, opt_default_config, opt_config) {

	this.graphics = graphics;
	var default_config = goog.isDef(opt_default_config) ? opt_default_config : {};
	this.config = new goog.structs.Map(default_config);
	
	if (goog.isDef(opt_config)) {
		// merge optional config into defaults
		this.config.addAll(opt_config); 
	}
	
}

kemia.view.Renderer.prototype.render = goog.abstractMethod;

/**
 * The logger for this class.
 * 
 * @type {goog.debug.Logger}
 * @protected
 */
kemia.view.Renderer.prototype.logger = goog.debug.Logger
		.getLogger('kemia.view.Renderer');

/**
 * 
 * @param {goog.math.Box}
 *            fromRect
 * @return {kemia.graphics.AffineTransform}
 */
kemia.view.Renderer.prototype.buildTransform = function(fromBox) {

	var size = goog.math.Rect.createFromBox(fromBox).getSize();
	var fromWidth = size.width;
	size.scaleToFit(this.graphics.getSize());
	var toWidth = size.width;

	var scale = this.scale_factor * toWidth / fromWidth;
	var top = Math.max(fromBox.top, fromBox.bottom);
	var left = Math.min(fromBox.left, fromBox.right);	
	var transform = new kemia.graphics.AffineTransform(scale, 0, 0, -scale,
			-left * scale, top * scale);

	return transform;
};

/**
 * @param {kemia.graphics.AffineTransform} transform
 */
kemia.view.Renderer.prototype.setTransform = function(transform){
	this.transform = transform;
};
