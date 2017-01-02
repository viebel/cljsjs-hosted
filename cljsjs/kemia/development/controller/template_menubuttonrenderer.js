goog.provide('kemia.controller.TemplateMenuButtonRenderer');
goog.require('goog.ui.FlatMenuButtonRenderer');
/**
 * @constructor
 * @extends {goog.ui.FlatButtonRenderer}
 */
kemia.controller.TemplateMenuButtonRenderer = function() {
	goog.ui.FlatMenuButtonRenderer.call(this);
};
goog.inherits(kemia.controller.TemplateMenuButtonRenderer, goog.ui.FlatMenuButtonRenderer);
goog.addSingletonGetter(kemia.controller.TemplateMenuButtonRenderer);


