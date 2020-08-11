goog.provide('kemia.controller.ToolbarFactory');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('goog.string.Unicode');
goog.require('goog.style');
goog.require('goog.ui.Component.State');
goog.require('goog.ui.Container.Orientation');
goog.require('goog.ui.ControlContent');
goog.require('goog.ui.Option');
goog.require('goog.ui.Toolbar');
goog.require('goog.ui.ToolbarButton');
goog.require('goog.ui.ToolbarColorMenuButton');
goog.require('goog.ui.ToolbarMenuButton');
goog.require('goog.ui.ToolbarRenderer');
goog.require('goog.ui.ToolbarSelect');
goog.require('goog.userAgent');
goog.require('goog.ui.LabelInput');

/**
 * Creates a {@link goog.ui.Toolbar} containing the specified set of toolbar
 * buttons, and renders it into the given parent element. Each item in the
 * {@code items} array must a {@link goog.ui.Control}.
 * 
 * @param {!Array.
 *            <goog.ui.Control>} items Toolbar items; each must be a
 *            {@link goog.ui.Control}.
 * @param {!Element}
 *            elem Toolbar parent element.
 * @param {boolean=}
 *            opt_isRightToLeft Whether the editor chrome is right-to-left;
 *            defaults to the directionality of the toolbar parent element.
 * @return {!goog.ui.Toolbar} Editor toolbar, rendered into the given parent
 *         element.
 */
kemia.controller.ToolbarFactory.makeToolbar = function(items, elem,
		opt_isRightToLeft) {
	var domHelper = goog.dom.getDomHelper(elem);

	// Create an empty horizontal toolbar using the default renderer.
	var toolbar = new goog.ui.Toolbar(goog.ui.ToolbarRenderer.getInstance(),
			goog.ui.Container.Orientation.HORIZONTAL, domHelper);

	// Optimization: Explicitly test for the directionality of the parent
	// element here, so we can set it for both the toolbar and its children,
	// saving a lot of expensive calls to goog.style.isRightToLeft() during
	// rendering.
	var isRightToLeft = opt_isRightToLeft || goog.style.isRightToLeft(elem);
	toolbar.setRightToLeft(isRightToLeft);

	// Optimization: Set the toolbar to non-focusable before it is rendered,
	// to avoid creating unnecessary keyboard event handler objects.
	toolbar.setFocusable(false);

	for ( var i = 0, button; button = items[i]; i++) {
		// Optimization: Set the button to non-focusable before it is rendered,
		// to avoid creating unnecessary keyboard event handler objects. Also
		// set
		// the directionality of the button explicitly, to avoid expensive calls
		// to goog.style.isRightToLeft() during rendering.
		button.setSupportedState(goog.ui.Component.State.FOCUSED, false);
		button.setRightToLeft(isRightToLeft);
		toolbar.addChild(button, true);
	}

	toolbar.render(elem);
	return toolbar;
};

/**
 * Creates a toolbar button with the given ID, tooltip, and caption. Applies any
 * custom CSS class names to the button's caption element.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link goog.editor.Command} for
 *            built-in buttons, anything else for custom buttons.
 * @param {string}
 *            tooltip Tooltip to be shown on hover.
 * @param {goog.ui.ControlContent}
 *            caption Button caption.
 * @param {string=}
 *            opt_classNames CSS class name(s) to apply to the caption element.
 * @param {goog.ui.ButtonRenderer=}
 *            opt_renderer Button renderer; defaults to
 *            {@link goog.ui.ToolbarButtonRenderer} if unspecified.
 * @param {goog.dom.DomHelper=}
 *            opt_domHelper DOM helper, used for DOM creation; defaults to the
 *            current document if unspecified.
 * @return {!goog.ui.Button} A toolbar button.
 */
kemia.controller.ToolbarFactory.makeButton = function(id, tooltip, caption,
		opt_classNames, opt_renderer, opt_domHelper) {
	var button = new goog.ui.ToolbarButton(kemia.controller.ToolbarFactory
			.createContent_(caption, opt_classNames, opt_domHelper),
			opt_renderer, opt_domHelper);
	button.setId(id);
	button.setTooltip(tooltip);
	return button;
};

/**
 * Creates a toggle button with the given ID, tooltip, and caption. Applies any
 * custom CSS class names to the button's caption element. The button returned
 * has checkbox-like toggle semantics.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link goog.editor.Command} for
 *            built-in buttons, anything else for custom buttons.
 * @param {string}
 *            tooltip Tooltip to be shown on hover.
 * @param {goog.ui.ControlContent}
 *            caption Button caption.
 * @param {string=}
 *            opt_classNames CSS class name(s) to apply to the caption element.
 * @param {goog.ui.ButtonRenderer=}
 *            opt_renderer Button renderer; defaults to
 *            {@link goog.ui.ToolbarButtonRenderer} if unspecified.
 * @param {goog.dom.DomHelper=}
 *            opt_domHelper DOM helper, used for DOM creation; defaults to the
 *            current document if unspecified.
 * @return {!goog.ui.Button} A toggle button.
 */
kemia.controller.ToolbarFactory.makeToggleButton = function(id, tooltip,
		caption, opt_classNames, opt_renderer, opt_domHelper) {
	var button = kemia.controller.ToolbarFactory.makeButton(id, tooltip,
			caption, opt_classNames, opt_renderer, opt_domHelper);
	button.setSupportedState(goog.ui.Component.State.CHECKED, true);
	return button;
};

/**
 * Creates a menu button with the given ID, tooltip, and caption. Applies any
 * custom CSS class names to the button's caption element. The button returned
 * doesn't have an actual menu attached; use {@link goog.ui.MenuButton#setMenu}
 * to attach a {@link goog.ui.Menu} to the button.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link goog.editor.Command} for
 *            built-in buttons, anything else for custom buttons.
 * @param {string}
 *            tooltip Tooltip to be shown on hover.
 * @param {goog.ui.ControlContent}
 *            caption Button caption.
 * @param {string=}
 *            opt_classNames CSS class name(s) to apply to the caption element.
 * @param {goog.ui.ButtonRenderer=}
 *            opt_renderer Button renderer; defaults to
 *            {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
 * @param {goog.dom.DomHelper=}
 *            opt_domHelper DOM helper, used for DOM creation; defaults to the
 *            current document if unspecified.
 * @return {!goog.ui.MenuButton} A menu button.
 */
kemia.controller.ToolbarFactory.makeMenuButton = function(id, tooltip, caption,
		opt_classNames, opt_renderer, opt_domHelper) {
	var button = new goog.ui.ToolbarMenuButton(kemia.controller.ToolbarFactory
			.createContent_(caption, opt_classNames, opt_domHelper), null,
			opt_renderer, opt_domHelper);
	button.setId(id);
	button.setTooltip(tooltip);
	return button;
};

/**
 * Creates a select button with the given ID, tooltip, and caption. Applies any
 * custom CSS class names to the button's root element. The button returned
 * doesn't have an actual menu attached; use {@link goog.ui.Select#setMenu} to
 * attach a {@link goog.ui.Menu} containing {@link goog.ui.Option}s to the
 * select button.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link goog.editor.Command} for
 *            built-in buttons, anything else for custom buttons.
 * @param {string}
 *            tooltip Tooltip to be shown on hover.
 * @param {goog.ui.ControlContent}
 *            caption Button caption; used as the default caption when nothing
 *            is selected.
 * @param {string=}
 *            opt_classNames CSS class name(s) to apply to the button's root
 *            element.
 * @param {goog.ui.MenuButtonRenderer=}
 *            opt_renderer Button renderer; defaults to
 *            {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
 * @param {goog.dom.DomHelper=}
 *            opt_domHelper DOM helper, used for DOM creation; defaults to the
 *            current document if unspecified.
 * @return {!goog.ui.Select} A select button.
 */
kemia.controller.ToolbarFactory.makeSelectButton = function(id, tooltip,
		caption, opt_classNames, opt_renderer, opt_domHelper) {
	var button = new goog.ui.ToolbarSelect(null, null, opt_renderer,
			opt_domHelper);
	if (opt_classNames) {
		// Unlike the other button types, for goog.ui.Select buttons we apply
		// the
		// extra class names to the root element, because for select buttons the
		// caption isn't stable (as it changes each time the selection changes).
		goog.array.forEach(opt_classNames.split(/\s+/), button.addClassName,
				button);
	}
	button.addClassName(goog.getCssName('goog-toolbar-select'));
	button.setDefaultCaption(caption);
	button.setId(id);
	button.setTooltip(tooltip);
	return button;
};

/**
 * Creates a color menu button with the given ID, tooltip, and caption. Applies
 * any custom CSS class names to the button's caption element. The button is
 * created with a default color menu containing standard color palettes.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link goog.editor.Command} for
 *            built-in toolbar buttons, but can be anything else for custom
 *            buttons.
 * @param {string}
 *            tooltip Tooltip to be shown on hover.
 * @param {goog.ui.ControlContent}
 *            caption Button caption.
 * @param {string=}
 *            opt_classNames CSS class name(s) to apply to the caption element.
 * @param {goog.ui.ColorMenuButtonRenderer=}
 *            opt_renderer Button renderer; defaults to
 *            {@link goog.ui.ToolbarColorMenuButtonRenderer} if unspecified.
 * @param {goog.dom.DomHelper=}
 *            opt_domHelper DOM helper, used for DOM creation; defaults to the
 *            current document if unspecified.
 * @return {!goog.ui.ColorMenuButton} A color menu button.
 */
kemia.controller.ToolbarFactory.makeColorMenuButton = function(id, tooltip,
		caption, opt_classNames, opt_renderer, opt_domHelper) {
	var button = new goog.ui.ToolbarColorMenuButton(
			kemia.controller.ToolbarFactory.createContent_(caption,
					opt_classNames, opt_domHelper), null, opt_renderer,
			opt_domHelper);
	button.setId(id);
	button.setTooltip(tooltip);
	return button;
};

/**
 * Creates a new DIV that wraps a button caption, optionally applying CSS class
 * names to it. Used as a helper function in button factory methods.
 * 
 * @param {goog.ui.ControlContent}
 *            caption Button caption.
 * @param {string=}
 *            opt_classNames CSS class name(s) to apply to the DIV that wraps
 *            the caption (if any).
 * @param {goog.dom.DomHelper=}
 *            opt_domHelper DOM helper, used for DOM creation; defaults to the
 *            current document if unspecified.
 * @return {!Element} DIV that wraps the caption.
 * @private
 */
kemia.controller.ToolbarFactory.createContent_ = function(caption,
		opt_classNames, opt_domHelper) {
	// FF2 doesn't like empty DIVs, especially when rendered right-to-left.
	if ((!caption || caption == '') && goog.userAgent.GECKO
			&& !goog.userAgent.isVersion('1.9a')) {
		caption = goog.string.Unicode.NBSP;
	}
	return (opt_domHelper || goog.dom.getDomHelper()).createDom(
			goog.dom.TagName.DIV, opt_classNames ? {
				'class' : opt_classNames
			} : null, caption);
};
