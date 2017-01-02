goog.provide('kemia.view.BondRendererFactory');
goog.require('kemia.view.SingleBondRenderer');
goog.require('kemia.view.DoubleBondRenderer');
goog.require('kemia.view.TripleBondRenderer');
goog.require('kemia.view.QuadrupleBondRenderer');
goog.require('kemia.view.SingleUpBondRenderer');
goog.require('kemia.view.SingleDownBondRenderer');
goog.require('kemia.view.SingleUpOrDownBondRenderer');
goog.require('kemia.model.Bond');
goog.require('goog.object');
goog.require('goog.reflect');

/**
 * factory class for BondRenderers
 * 
 * @param {goog.graphics.AbstractGraphics}
 *            graphics
 * @param {Object=}
 *            opt_config
 * @constructor
 */
kemia.view.BondRendererFactory = function( graphics, opt_config) {

	this.graphics = graphics;
	this.config = new goog.structs.Map();
	if (opt_config) {
		this.config.addAll(opt_config); // merge optional config
	}
};

/**
 * The logger for this class.
 * 
 * @type {goog.debug.Logger}
 * @protected
 */
kemia.view.BondRendererFactory.prototype.logger = goog.debug.Logger
		.getLogger('kemia.view.BondRendererFactory');

/**
 * a map from bond order to renderer getter method
 */
kemia.view.BondRendererFactory.ORDER_RENDERER = goog.object
		.transpose(goog.reflect
				.object(
						kemia.view.BondRendererFactory,
						{
			getSingleBondRenderer : kemia.model.Bond.ORDER.SINGLE,
			getDoubleBondRenderer : kemia.model.Bond.ORDER.DOUBLE,
			getTripleBondRenderer : kemia.model.Bond.ORDER.TRIPLE,
			getQuadrupleBondRenderer : kemia.model.Bond.ORDER.QUADRUPLE
		}));

/**
 * a map from bond stereo type to renderer getter method
 */
kemia.view.BondRendererFactory.STEREO_RENDERER = goog.object
		.transpose(goog.reflect
				.object(
						kemia.view.BondRendererFactory,
						{
							getSingleBondNotStereoRenderer : kemia.model.Bond.STEREO.NOT_STEREO,
							getSingleBondUpRenderer : kemia.model.Bond.STEREO.UP,
							getSingleBondDownRenderer : kemia.model.Bond.STEREO.DOWN,
							getSingleBondUpOrDownRenderer : kemia.model.Bond.STEREO.UP_OR_DOWN
						}));

/**
 * factory method to get appropriate renderer for a bond based on its order and
 * stereo type
 * 
 * @param {kemia.model.Bond}
 *            bond, the bond in need of a renderer
 * 
 * @return {kemia.view.BondRenderer}
 */
kemia.view.BondRendererFactory.prototype.get = function(bond) {
	return this[kemia.view.BondRendererFactory.ORDER_RENDERER[bond.order]].apply(this, [bond.stereo]);
};

/**
 * helper method to factory to get appropriate renderer based on stereo type
 * 
 * @param {kemia.model.Bond.STEREO}
 *            stereo type of bond in need of a renderer
 * 
 * @return {kemia.view.BondRenderer}
 */
kemia.view.BondRendererFactory.prototype.getSingleBondRenderer = function(
		stereo) {
	return this[kemia.view.BondRendererFactory.STEREO_RENDERER[stereo]].apply(this);
};

kemia.view.BondRendererFactory.prototype.getSingleBondNotStereoRenderer = function()
{
	if (!this.singleNotStereoBondRenderer) {
		this.singleNotStereoBondRenderer = new kemia.view.SingleBondRenderer(
				this.graphics, this.config);
	}
	return this.singleNotStereoBondRenderer;
};

kemia.view.BondRendererFactory.prototype.getSingleBondUpRenderer = function()
{
	if (!this.singleUpBondRenderer) {
		this.singleUpBondRenderer = new kemia.view.SingleUpBondRenderer(
				this.graphics, this.config);
	}
	return this.singleUpBondRenderer;
};

kemia.view.BondRendererFactory.prototype.getSingleBondDownRenderer = function()
{
	if (!this.singleDownBondRenderer) {
		this.singleDownBondRenderer = new kemia.view.SingleDownBondRenderer(
				this.graphics, this.config);
	}
	return this.singleDownBondRenderer;
};

kemia.view.BondRendererFactory.prototype.getSingleBondUpOrDownRenderer = function()
{
	if (!this.singleUpOrDownBondRenderer) {
		this.singleUpOrDownBondRenderer = new kemia.view.SingleUpOrDownBondRenderer(
				this.graphics, this.config);
	}
	return this.singleUpOrDownBondRenderer;
};

kemia.view.BondRendererFactory.prototype.getDoubleBondRenderer = function()
{
	if (!this.doubleBondRenderer) {
		this.doubleBondRenderer = new kemia.view.DoubleBondRenderer(
				this.graphics, this.config);
	}
	return this.doubleBondRenderer;
};

kemia.view.BondRendererFactory.prototype.getTripleBondRenderer = function()
{
	if (!this.tripleBondRenderer) {
		this.tripleBondRenderer = new kemia.view.TripleBondRenderer(
				this.graphics, this.config);
	}
	return this.tripleBondRenderer;
};

kemia.view.BondRendererFactory.prototype.getQuadrupleBondRenderer = function()
{
	if (!this.quadrupleBondRenderer) {
		this.quadrupleBondRenderer = new kemia.view.QuadrupleBondRenderer(
				this.graphics, this.config);
	}
	return this.quadrupleBondRenderer;
};

