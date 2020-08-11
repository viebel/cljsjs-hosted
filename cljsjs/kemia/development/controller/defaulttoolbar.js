goog.provide('kemia.controller.DefaultToolbar');

goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.dom.classes');
goog.require('goog.string.StringBuffer');
goog.require('goog.style');
goog.require('goog.ui.ControlContent');
goog.require('kemia.controller.ToolbarFactory');
goog.require('kemia.controller.Command');
goog.require('kemia.controller.plugins.Move');
goog.require('kemia.controller.plugins.Erase');
goog.require('kemia.controller.plugins.ClearEditor');
goog.require('kemia.controller.plugins.Zoom');
goog.require('kemia.controller.plugins.BondEdit');
goog.require('kemia.controller.plugins.AtomEdit');
goog.require('kemia.controller.plugins.UndoRedo');
goog.require('kemia.controller.plugins.ArrowPlusEdit');
goog.require('kemia.controller.plugins.MoleculeEdit');
//goog.require('kemia.controller.plugins.Cleanup');
goog.require('kemia.controller.TemplateMenuButtonRenderer');
goog.require('goog.ui.ToolbarSeparator');


kemia.controller.DefaultToolbar.makeActionButtons = function(buttons) {

	var file_select = kemia.controller.ToolbarFactory.makeSelectButton(
			kemia.controller.plugins.ClearEditor.COMMAND ,'File',
			'File');
	var file_menu = new goog.ui.Menu();
	var erase_all = new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, undefined , 'New'));
	file_menu.addChild(erase_all, true);
	file_select.setMenu(file_menu);
	file_select.queryable = true;
	buttons.push(file_select);

	buttons.push(new goog.ui.ToolbarSeparator());
	
	var undo = kemia.controller.DefaultToolbar.undoRedoButtonFactory_(
			kemia.controller.plugins.UndoRedo.COMMAND.UNDO, 'Undo', '', goog
					.getCssName('tr-icon')
					+ ' ' + goog.getCssName('tr-undo'));
	undo.queryable = true;
	buttons.push(undo);
	
	var redo = kemia.controller.DefaultToolbar.undoRedoButtonFactory_(
			kemia.controller.plugins.UndoRedo.COMMAND.REDO, 'Redo', '', goog
					.getCssName('tr-icon')
					+ ' ' + goog.getCssName('tr-redo'));
	redo.queryable = true;
	buttons.push(redo);
	
	buttons.push(new goog.ui.ToolbarSeparator());
	
	var move = kemia.controller.ToolbarFactory.makeToggleButton(
			kemia.controller.plugins.Move.COMMAND.MOVE, 'Move', '', goog
					.getCssName('tr-icon')
					+ ' ' + goog.getCssName('tr-move'));
	move.queryable = true;
	buttons.push(move);
	
	var rotate = kemia.controller.ToolbarFactory.makeToggleButton(
			kemia.controller.plugins.Move.COMMAND.ROTATE, 'Rotate', '', goog
					.getCssName('tr-icon')
					+ ' ' + goog.getCssName('tr-rotate'));
	rotate.queryable = true;
	buttons.push(rotate);
	
	var erase = kemia.controller.ToolbarFactory.makeToggleButton(
			kemia.controller.plugins.Erase.COMMAND, 'Erase', '', goog
					.getCssName('tr-icon')
					+ ' ' + goog.getCssName('tr-erase'));
	erase.queryable = true;
	buttons.push(erase);
	
//	buttons.push(kemia.controller.ToolbarFactory.makeButton(
//			kemia.controller.plugins.Cleanup.COMMAND, 'Cleanup', '', goog
//					.getCssName('tr-icon')
//					+ ' ' + goog.getCssName('tr-cleanup')));

	buttons.push(new goog.ui.ToolbarSeparator());
	
	return buttons;
}

kemia.controller.DefaultToolbar.makeArrowPlusButtons = function(buttons){
	var plus_button = kemia.controller.ToolbarFactory.makeToggleButton(
			kemia.controller.plugins.ArrowPlusEdit.COMMAND.EDIT_PLUS, 'Plus',
			'', goog.getCssName('tr-icon') + ' ' + goog.getCssName('tr-plus'));
	plus_button.queryable = true;

	buttons.push(plus_button);
	var arrow_button = kemia.controller.ToolbarFactory.makeToggleButton(
			kemia.controller.plugins.ArrowPlusEdit.COMMAND.EDIT_ARROW, 'Arrow',
			'', goog.getCssName('tr-icon') + ' ' + goog.getCssName('tr-arrow'));
	arrow_button.queryable = true;
	buttons.push(arrow_button);

	buttons.push(new goog.ui.ToolbarSeparator());
	return buttons;
}

kemia.controller.DefaultToolbar.makeZoomButtons = function(buttons){
	buttons.push(kemia.controller.ToolbarFactory.makeButton(
			kemia.controller.plugins.Zoom.COMMAND.ZOOM_IN, 'Zoom In', '', goog
					.getCssName('tr-icon')
					+ ' ' + goog.getCssName('tr-zoom-in')));
	buttons.push(kemia.controller.ToolbarFactory.makeButton(
			kemia.controller.plugins.Zoom.COMMAND.ZOOM_OUT, 'Zoom Out', '',
			goog.getCssName('tr-icon') + ' ' + goog.getCssName('tr-zoom-out')));

	buttons.push(new goog.ui.ToolbarSeparator());
	return buttons;
}

kemia.controller.DefaultToolbar.makeAtomBondTemplateButtons = function(buttons){
	var atom_select = kemia.controller.ToolbarFactory.makeSelectButton(
			kemia.controller.plugins.AtomEdit.COMMAND, 'Atomic Symbol',
			'Symbol');// ,goog.getCssName('tr-icon') + ' ' +
						// goog.getCssName('tr-symbol'));
	atom_select.queryable = true;
	// How to update this button.
	atom_select.updateFromValue = function(value) {
		// Normalize value to null or a nonempty string (sometimes we get
		// the empty string, sometimes we get false...)
		value = value && value.length > 0 ? value : null;
		if (value != atom_select.getValue()) {
			atom_select.setValue(value);
		}
	}
	var atom_menu = new goog.ui.Menu();	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {
				style : "color:grey"
			}, 'H')), true);
	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {
				style : "color:black"
			}, 'C')), true);
	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {
				style : "color:blue"
			}, 'N')),true);
	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {
				style : "color:red"
			}, 'O')),true);
	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {
				style : "color:yellow"
			}, 'S')),true);
	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {
				style : "color:orange"
			}, 'P')),true);
	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {
				style : "color:green"
			}, 'F')), true);
	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {
				style : "color:green"
			}, 'Cl')), true);
	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {
				style : "color:DarkRed"
			}, 'Br')), true);
	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {
				style : "color:purple"
			}, 'I')), true);
	atom_menu.addChild(new goog.ui.MenuSeparator(), true);
	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {style : "color:black"
			}, "R1")), true);
	atom_menu.addChild(new goog.ui.Option(goog.dom.createDom(
			goog.dom.TagName.DIV, {style : "color:black"
			}, "R2")), true);
	// atom_menu.addChild(new goog.ui.Option('...'), true);//TTD periodic table
	atom_select.setMenu(atom_menu);
	buttons.push(atom_select);

	var bond_select = kemia.controller.ToolbarFactory.makeSelectButton(
			kemia.controller.plugins.BondEdit.COMMAND, 'Bond Type', 'Bond');// ,
																			// goog.getCssName('tr-icon')
																			// + '
																			// ' +
																			// goog.getCssName('tr-bond'));
	bond_select.queryable = true;
	// How to update this button.
	bond_select.updateFromValue = function(value) {
		if (value != bond_select.getValue()) {
			bond_select.setValue(value);
		}
	}
	var bond_menu = new goog.ui.Menu();
	goog.array.forEach(kemia.controller.plugins.BondEdit.BOND_TYPES, function(
			entry) {
		bond_menu.addChild(new goog.ui.Option(entry.caption, entry), true);
	});
	bond_select.setMenu(bond_menu);
	buttons.push(bond_select);
	
	// var renderer = kemia.controller.TemplateMenuButtonRenderer.getInstance();
	var renderer = undefined;
	var template_select = kemia.controller.ToolbarFactory.makeSelectButton(
			kemia.controller.plugins.MoleculeEdit.COMMAND, 'Template',
			'Template');// , goog.getCssName('tr-icon') + ' ' +
						// goog.getCssName('tr-template'), renderer);

	template_select.queryable = true;
	// How to update this button.
	template_select.updateFromValue = function(value) {
		if (value != template_select.getValue()) {
			template_select.setValue(value);
		}
	}
	var template_menu = new goog.ui.Menu();
	goog.array.forEach(kemia.controller.plugins.MoleculeEdit.TEMPLATES,
			function(template) {
				template_menu.addChild(new goog.ui.Option(template.name,
						template), true);
			});
	template_select.setMenu(template_menu);
	buttons.push(template_select);
	
	// buttons.push(kemia.controller.ToolbarFactory.makeButton(kemia.controller.plugins.Smiles.COMMAND,
	// 'SMILES', 'paste SMILES'));


	return buttons;
}

kemia.controller.DefaultToolbar.makeDefaultMoleculeToolbar = function(elem) {
	var buttons = kemia.controller.DefaultToolbar.makeActionButtons([]);
	var buttons = kemia.controller.DefaultToolbar.makeZoomButtons(buttons);
	var buttons = kemia.controller.DefaultToolbar.makeAtomBondTemplateButtons(buttons);
	return kemia.controller.DefaultToolbar.makeToolbar(buttons, elem);
}

/**
 * Creates a {@link goog.ui.Toolbar} containing a default set of editor toolbar
 * buttons, and renders it into the given parent element.
 * 
 * @param {!Element}
 *            elem Toolbar parent element.
 * @param {boolean=}
 *            opt_isRightToLeft Whether the editor chrome is right-to-left;
 *            defaults to the directionality of the toolbar parent element.
 * @return {!goog.ui.Toolbar} Default editor toolbar, rendered into the given
 *         parent element.
 * @see kemia.controller.DefaultToolbar.DEFAULT_BUTTONS
 */
kemia.controller.DefaultToolbar.makeDefaultReactionToolbar = function(elem) {

	var buttons = kemia.controller.DefaultToolbar.makeActionButtons([]);
	var buttons = kemia.controller.DefaultToolbar.makeArrowPlusButtons(buttons);
	var buttons = kemia.controller.DefaultToolbar.makeZoomButtons(buttons);
	var buttons = kemia.controller.DefaultToolbar.makeAtomBondTemplateButtons(buttons);
	return kemia.controller.DefaultToolbar.makeToolbar(buttons, elem);

};

/**
 * Creates a {@link goog.ui.Toolbar} containing the specified set of toolbar
 * buttons, and renders it into the given parent element. Each item in the
 * {@code items} array must either be a {@link goog.editor.Command} (to create a
 * built-in button) or a subclass of {@link goog.ui.Control} (to create a custom
 * control).
 * 
 * @param {!Array.<string|goog.ui.Control>} items Toolbar items; each must be a
 *            {@link goog.editor.Command} or a {@link goog.ui.Control}.
 * @param {!Element}
 *            elem Toolbar parent element.
 * @param {boolean=}
 *            opt_isRightToLeft Whether the editor chrome is right-to-left;
 *            defaults to the directionality of the toolbar parent element.
 * @return {!goog.ui.Toolbar} Editor toolbar, rendered into the given parent
 *         element.
 */
kemia.controller.DefaultToolbar.makeToolbar = function(items, elem) {
	var domHelper = goog.dom.getDomHelper(elem);
	var controls = [];

	for ( var i = 0, button; button = items[i]; i++) {
		if (goog.isString(button)) {
			button = kemia.controller.DefaultToolbar.makeBuiltInToolbarButton(
					button, domHelper);
		}
		if (button) {
			controls.push(button);
		}
	}

	return kemia.controller.ToolbarFactory.makeToolbar(controls, elem);
};

/**
 * Creates an instance of a subclass of {@link goog.ui.Button} for the given
 * {@link goog.editor.Command}, or null if no built-in button exists for the
 * command. Note that this function is only intended to create built-in buttons;
 * please don't try to hack it!
 * 
 * @param {string}
 *            command Editor command ID.
 * @param {goog.dom.DomHelper=}
 *            opt_domHelper DOM helper, used for DOM creation; defaults to the
 *            current document if unspecified.
 * @return {goog.ui.Button} Toolbar button (null if no built-in button exists
 *         for the command).
 */
kemia.controller.DefaultToolbar.makeBuiltInToolbarButton = function(command,
		opt_domHelper) {
	var button;
	var descriptor = kemia.controller.DefaultToolbar.buttons_[command];
	if (descriptor) {
		// Default the factory method to makeToggleButton, since most built-in
		// toolbar buttons are toggle buttons. See also
		// kemia.controller.DefaultToolbar.BUTTONS_.
		var factory = descriptor.factory
				|| kemia.controller.ToolbarFactory.makeToggleButton;
		var id = descriptor.command;
		var tooltip = descriptor.tooltip;
		var caption = descriptor.caption;
		var classNames = descriptor.classes;
		// Default the DOM helper to the one for the current document.
		var domHelper = opt_domHelper || goog.dom.getDomHelper();
		// Instantiate the button based on the descriptor.
		button = factory(id, tooltip, caption, classNames, null, domHelper);
		// If this button's state should be queried when updating the toolbar,
		// set the button object's queryable property to true.
		if (descriptor.queryable) {
			button.queryable = true;
		}
	}
	return button;
};

/**
 * A set of built-in buttons to display in the default editor toolbar.
 * 
 * @type {!Array.<string>}
 */
kemia.controller.DefaultToolbar.DEFAULT_BUTTONS = [ kemia.controller.Command.INSERT_ATOM ];

/**
 * A set of built-in buttons to display in the default editor toolbar when the
 * editor chrome is right-to-left (BiDi mode only).
 * 
 * @type {!Array.<string>}
 */
kemia.controller.DefaultToolbar.DEFAULT_BUTTONS_RTL = [];

/**
 * Creates a toolbar button with the given ID, tooltip, and caption. Applies any
 * custom CSS class names to the button's caption element. This button is
 * designed to be used as the RTL button.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link kemia.controller.Command} for
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
 * @private
 */
kemia.controller.DefaultToolbar.rtlButtonFactory_ = function(id, tooltip,
		caption, opt_classNames, opt_renderer, opt_domHelper) {
	var button = kemia.controller.ToolbarFactory.makeToggleButton(id, tooltip,
			caption, opt_classNames, opt_renderer, opt_domHelper);
	button.updateFromValue = function(value) {
		// Enable/disable right-to-left text editing mode in the toolbar.
		var isRtl = !!value;
		// Enable/disable a marker class on the toolbar's root element; the rest
		// is
		// done using CSS scoping in editortoolbar.css. This changes
		// direction-senitive toolbar icons (like indent/outdent)
		goog.dom.classes.enable(button.getParent().getElement(), goog
				.getCssName('tr-rtl-mode'), isRtl);
		button.setChecked(isRtl);
	}
	return button;
};

/**
 * Creates a toolbar button with the given ID, tooltip, and caption. Applies any
 * custom CSS class names to the button's caption element. Designed to be used
 * to create undo and redo buttons.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link kemia.controller.Command} for
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
 * @private
 */
kemia.controller.DefaultToolbar.undoRedoButtonFactory_ = function(id, tooltip,
		caption, opt_classNames, opt_renderer, opt_domHelper) {
	var button = kemia.controller.ToolbarFactory.makeButton(id, tooltip,
			caption, opt_classNames, opt_renderer, opt_domHelper);
	button.updateFromValue = function(value) {
		button.setEnabled(value);
	}
	return button;
};

/**
 * Creates a toolbar button with the given ID, tooltip, and caption. Applies any
 * custom CSS class names to the button's caption element. Used to create a font
 * face button, filled with default fonts.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link kemia.controller.Command} for
 *            built-in buttons, anything else for custom buttons.
 * @param {string}
 *            tooltip Tooltip to be shown on hover.
 * @param {goog.ui.ControlContent}
 *            caption Button caption.
 * @param {string=}
 *            opt_classNames CSS class name(s) to apply to the caption element.
 * @param {goog.ui.MenuButtonRenderer=}
 *            opt_renderer Button renderer; defaults to
 *            {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
 * @param {goog.dom.DomHelper=}
 *            opt_domHelper DOM helper, used for DOM creation; defaults to the
 *            current document if unspecified.
 * @return {!goog.ui.Button} A toolbar button.
 * @private
 */
kemia.controller.DefaultToolbar.fontFaceFactory_ = function(id, tooltip,
		caption, opt_classNames, opt_renderer, opt_domHelper) {
	var button = kemia.controller.ToolbarFactory.makeSelectButton(id, tooltip,
			caption, opt_classNames, opt_renderer, opt_domHelper);
	kemia.controller.DefaultToolbar.addDefaultFonts(button);
	button.setDefaultCaption(kemia.controller.DefaultToolbar.MSG_FONT_NORMAL);
	// Font options don't have keyboard accelerators.
	goog.dom.classes.add(button.getMenu().getContentElement(), goog
			.getCssName('goog-menu-noaccel'));

	// How to update this button's state.
	button.updateFromValue = function(value) {
		// Normalize value to null or a non-empty string (sometimes we get
		// the empty string, sometimes we get false...), extract the substring
		// up to the first comma to get the primary font name, and normalize
		// to lowercase. This allows us to map a font spec like "Arial,
		// Helvetica, sans-serif" to a font menu item.
		// TODO (attila): Try to make this more robust.
		var item = null;
		if (value && value.length > 0) {
			item = /** @type {goog.ui.MenuItem} */
			(button.getMenu().getChild(kemia.controller.ToolbarFactory
					.getPrimaryFont(value)));
		}
		var selectedItem = button.getSelectedItem();
		if (item != selectedItem) {
			button.setSelectedItem(item);
		}
	}
	return button;
};

/**
 * Creates a toolbar button with the given ID, tooltip, and caption. Applies any
 * custom CSS class names to the button's caption element. Use to create a font
 * size button, filled with default font sizes.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link kemia.controller.Command} for
 *            built-in buttons, anything else for custom buttons.
 * @param {string}
 *            tooltip Tooltip to be shown on hover.
 * @param {goog.ui.ControlContent}
 *            caption Button caption.
 * @param {string=}
 *            opt_classNames CSS class name(s) to apply to the caption element.
 * @param {goog.ui.MenuButtonRenderer=}
 *            opt_renderer Button renderer; defaults to
 *            {@link goog.ui.ToolbarMebuButtonRenderer} if unspecified.
 * @param {goog.dom.DomHelper=}
 *            opt_domHelper DOM helper, used for DOM creation; defaults to the
 *            current document if unspecified.
 * @return {!goog.ui.Button} A toolbar button.
 * @private
 */
kemia.controller.DefaultToolbar.fontSizeFactory_ = function(id, tooltip,
		caption, opt_classNames, opt_renderer, opt_domHelper) {
	var button = kemia.controller.ToolbarFactory.makeSelectButton(id, tooltip,
			caption, opt_classNames, opt_renderer, opt_domHelper);
	kemia.controller.DefaultToolbar.addDefaultFontSizes(button);
	button
			.setDefaultCaption(kemia.controller.DefaultToolbar.MSG_FONT_SIZE_NORMAL);
	// Font size options don't have keyboard accelerators.
	goog.dom.classes.add(button.getMenu().getContentElement(), goog
			.getCssName('goog-menu-noaccel'));
	// How to update this button's state.
	button.updateFromValue = function(value) {
		// Webkit returns a string like '32px' instead of the equivalent
		// integer, so normalize that first.
		// NOTE: Gecko returns "6" so can't just normalize all
		// strings, only ones ending in "px".
		if (goog.isString(value) && goog.style.getLengthUnits(value) == 'px') {
			value = kemia.controller.ToolbarFactory
					.getLegacySizeFromPx(parseInt(value, 10));
		}
		// Normalize value to null or a positive integer (sometimes we get
		// the empty string, sometimes we get false, or -1 if the above
		// normalization didn't match to a particular 0-7 size)
		value = value > 0 ? value : null;
		if (value != button.getValue()) {
			button.setValue(value);
		}
	}
	return button;
};

/**
 * Function to update the state of a color menu button.
 * 
 * @param {goog.ui.ToolbarColorMenuButton}
 *            button The button to which the color menu is attached.
 * @param {number}
 *            value Color value to update to.
 * @private
 */
kemia.controller.DefaultToolbar.colorUpdateFromValue_ = function(button, value) {
	/** @preserveTry */
	try {
		if (goog.userAgent.IE) {
			// IE returns a number that, converted to hex, is a BGR color.
			// Convert from decimal to BGR to RGB.
			var hex = '000000' + value.toString(16);
			var bgr = hex.substr(hex.length - 6, 6);
			value = new goog.string.StringBuffer('#', bgr.substring(4, 6), bgr
					.substring(2, 4), bgr.substring(0, 2)).toString();
		}
		if (value != button.getValue()) {
			button.setValue(/** @type {string} */
			(value));
		}
	} catch (ex) {
		// TODO: Find out when/why this happens.
	}
};

/**
 * Creates a toolbar button with the given ID, tooltip, and caption. Applies any
 * custom CSS class names to the button's caption element. Use to create a font
 * color button.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link kemia.controller.Command} for
 *            built-in buttons, anything else for custom buttons.
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
 * @return {!goog.ui.Button} A toolbar button.
 * @private
 */
kemia.controller.DefaultToolbar.fontColorFactory_ = function(id, tooltip,
		caption, opt_classNames, opt_renderer, opt_domHelper) {
	var button = kemia.controller.ToolbarFactory.makeColorMenuButton(id,
			tooltip, caption, opt_classNames, opt_renderer, opt_domHelper);
	// Initialize default foreground color.
	button.setSelectedColor('#000');
	button.updateFromValue = goog.partial(
			kemia.controller.DefaultToolbar.colorUpdateFromValue_, button);
	return button;
};

/**
 * Creates a toolbar button with the given ID, tooltip, and caption. Applies any
 * custom CSS class names to the button's caption element. Use to create a font
 * background color button.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link kemia.controller.Command} for
 *            built-in buttons, anything else for custom buttons.
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
 * @return {!goog.ui.Button} A toolbar button.
 * @private
 */
kemia.controller.DefaultToolbar.backgroundColorFactory_ = function(id, tooltip,
		caption, opt_classNames, opt_renderer, opt_domHelper) {
	var button = kemia.controller.ToolbarFactory.makeColorMenuButton(id,
			tooltip, caption, opt_classNames, opt_renderer, opt_domHelper);
	// Initialize default background color.
	button.setSelectedColor('#FFF');
	button.updateFromValue = goog.partial(
			kemia.controller.DefaultToolbar.colorUpdateFromValue_, button);
	return button;
};

/**
 * Creates a toolbar button with the given ID, tooltip, and caption. Applies any
 * custom CSS class names to the button's caption element. Use to create the
 * format menu, prefilled with default formats.
 * 
 * @param {string}
 *            id Button ID; must equal a {@link kemia.controller.Command} for
 *            built-in buttons, anything else for custom buttons.
 * @param {string}
 *            tooltip Tooltip to be shown on hover.
 * @param {goog.ui.ControlContent}
 *            caption Button caption.
 * @param {string=}
 *            opt_classNames CSS class name(s) to apply to the caption element.
 * @param {goog.ui.MenuButtonRenderer=}
 *            opt_renderer Button renderer; defaults to
 *            {@link goog.ui.ToolbarMenuButtonRenderer} if unspecified.
 * @param {goog.dom.DomHelper=}
 *            opt_domHelper DOM helper, used for DOM creation; defaults to the
 *            current document if unspecified.
 * @return {!goog.ui.Button} A toolbar button.
 * @private
 */
kemia.controller.DefaultToolbar.formatBlockFactory_ = function(id, tooltip,
		caption, opt_classNames, opt_renderer, opt_domHelper) {
	var button = kemia.controller.ToolbarFactory.makeSelectButton(id, tooltip,
			caption, opt_classNames, opt_renderer, opt_domHelper);
	kemia.controller.DefaultToolbar.addDefaultFormatOptions(button);
	button.setDefaultCaption(kemia.controller.DefaultToolbar.MSG_FORMAT_NORMAL);
	// Format options don't have keyboard accelerators.
	goog.dom.classes.add(button.getMenu().getContentElement(), goog
			.getCssName('goog-menu-noaccel'));
	// How to update this button.
	button.updateFromValue = function(value) {
		// Normalize value to null or a nonempty string (sometimes we get
		// the empty string, sometimes we get false...)
		value = value && value.length > 0 ? value : null;
		if (value != button.getValue()) {
			button.setValue(value);
		}
	}
	return button;
};

// Messages used for tooltips and captions.

/** @desc Format menu tooltip. */
kemia.controller.DefaultToolbar.MSG_FORMAT_BLOCK_TITLE = goog.getMsg('Format');

/** @desc Format menu caption. */
kemia.controller.DefaultToolbar.MSG_FORMAT_BLOCK_CAPTION = goog
		.getMsg('Format');

/** @desc Undo button tooltip. */
kemia.controller.DefaultToolbar.MSG_UNDO_TITLE = goog.getMsg('Undo');

/** @desc Redo button tooltip. */
kemia.controller.DefaultToolbar.MSG_REDO_TITLE = goog.getMsg('Redo');

/** @desc Font menu tooltip. */
kemia.controller.DefaultToolbar.MSG_FONT_FACE_TITLE = goog.getMsg('Font');

/** @desc Font size menu tooltip. */
kemia.controller.DefaultToolbar.MSG_FONT_SIZE_TITLE = goog.getMsg('Font size');

/** @desc Text foreground color menu tooltip. */
kemia.controller.DefaultToolbar.MSG_FONT_COLOR_TITLE = goog
		.getMsg('Text color');

/** @desc Bold button tooltip. */
kemia.controller.DefaultToolbar.MSG_BOLD_TITLE = goog.getMsg('Bold');

/** @desc Italic button tooltip. */
kemia.controller.DefaultToolbar.MSG_ITALIC_TITLE = goog.getMsg('Italic');

/** @desc Underline button tooltip. */
kemia.controller.DefaultToolbar.MSG_UNDERLINE_TITLE = goog.getMsg('Underline');

/** @desc Text background color menu tooltip. */
kemia.controller.DefaultToolbar.MSG_BACKGROUND_COLOR_TITLE = goog
		.getMsg('Text background color');

/** @desc Link button tooltip. */
kemia.controller.DefaultToolbar.MSG_LINK_TITLE = goog
		.getMsg('Add or remove link');

/** @desc Numbered list button tooltip. */
kemia.controller.DefaultToolbar.MSG_ORDERED_LIST_TITLE = goog
		.getMsg('Numbered list');

/** @desc Bullet list button tooltip. */
kemia.controller.DefaultToolbar.MSG_UNORDERED_LIST_TITLE = goog
		.getMsg('Bullet list');

/** @desc Outdent button tooltip. */
kemia.controller.DefaultToolbar.MSG_OUTDENT_TITLE = goog
		.getMsg('Decrease indent');

/** @desc Indent button tooltip. */
kemia.controller.DefaultToolbar.MSG_INDENT_TITLE = goog
		.getMsg('Increase indent');

/** @desc Align left button tooltip. */
kemia.controller.DefaultToolbar.MSG_ALIGN_LEFT_TITLE = goog
		.getMsg('Align left');

/** @desc Align center button tooltip. */
kemia.controller.DefaultToolbar.MSG_ALIGN_CENTER_TITLE = goog
		.getMsg('Align center');

/** @desc Align right button tooltip. */
kemia.controller.DefaultToolbar.MSG_ALIGN_RIGHT_TITLE = goog
		.getMsg('Align right');

/** @desc Justify button tooltip. */
kemia.controller.DefaultToolbar.MSG_JUSTIFY_TITLE = goog.getMsg('Justify');

/** @desc Remove formatting button tooltip. */
kemia.controller.DefaultToolbar.MSG_REMOVE_FORMAT_TITLE = goog
		.getMsg('Remove formatting');

/** @desc Insert image button tooltip. */
kemia.controller.DefaultToolbar.MSG_IMAGE_TITLE = goog.getMsg('Insert image');

/** @desc Strike through button tooltip. */
kemia.controller.DefaultToolbar.MSG_STRIKE_THROUGH_TITLE = goog
		.getMsg('Strikethrough');

/** @desc Left-to-right button tooltip. */
kemia.controller.DefaultToolbar.MSG_DIR_LTR_TITLE = goog
		.getMsg('Left-to-right');

/** @desc Right-to-left button tooltip. */
kemia.controller.DefaultToolbar.MSG_DIR_RTL_TITLE = goog
		.getMsg('Right-to-left');

/** @desc Blockquote button tooltip. */
kemia.controller.DefaultToolbar.MSG_BLOCKQUOTE_TITLE = goog.getMsg('Quote');

/** @desc Edit HTML button tooltip. */
kemia.controller.DefaultToolbar.MSG_EDIT_HTML_TITLE = goog
		.getMsg('Edit HTML source');

/** @desc Link button caption. */
kemia.controller.DefaultToolbar.MSG_LINK_CAPTION = goog.getMsg('Link');

/** @desc Subscript button tooltip. */
kemia.controller.DefaultToolbar.MSG_SUBSCRIPT = goog.getMsg('Subscript');

/** @desc Superscript button tooltip. */
kemia.controller.DefaultToolbar.MSG_SUPERSCRIPT = goog.getMsg('Superscript');

/** @desc Edit HTML button caption. */
kemia.controller.DefaultToolbar.MSG_EDIT_HTML_CAPTION = goog
		.getMsg('Edit HTML');

/**
 * Map of {@code kemia.controller.Command}s to toolbar button descriptor
 * objects, each of which has the following attributes:
 * <ul>
 * <li>{@code command} - The command corresponding to the button (mandatory)
 * <li>{@code tooltip} - Tooltip text (optional); if unspecified, the button
 * has no hover text
 * <li>{@code caption} - Caption to display on the button (optional); if
 * unspecified, the button has no text caption
 * <li>{@code classes} - CSS class name(s) to be applied to the button's
 * element when rendered (optional); if unspecified, defaults to 'tr-icon' plus
 * 'tr-' followed by the command ID, but without any leading '+' character (e.g.
 * if the command ID is '+undo', then {@code classes} defaults to 'tr-icon
 * tr-undo')
 * <li>{@code factory} - factory function used to create the button, which must
 * accept {@code id}, {@code tooltip}, {@code caption}, and {@code classes}
 * as arguments, and must return an instance of {@link goog.ui.Button} or an
 * appropriate subclass (optional); if unspecified, defaults to
 * {@link kemia.controller.DefaultToolbar.makeToggleButton}, since most
 * built-in toolbar buttons are toggle buttons
 * <li>(@code queryable} - Whether the button's state should be queried when
 * updating the toolbar (optional).
 * </ul>
 * Note that this object is only used for creating toolbar buttons for built-in
 * editor commands; custom buttons aren't listed here. Please don't try to hack
 * this!
 * 
 * @type {Object.<!kemia.controller.ReactionEditor.ButtonDescriptor>}.
 * @private
 */
kemia.controller.DefaultToolbar.buttons_ = {};

/**
 * @type {{command: string, tooltip: ?string, caption: ?goog.ui.ControlContent,
 *       classes: ?string, factory: ?function(string, string,
 *       goog.ui.ControlContent, ?string, goog.ui.ButtonRenderer,
 *       goog.dom.DomHelper):goog.ui.Button, queryable:?boolean}}
 */
kemia.controller.DefaultToolbar.ButtonDescriptor = goog.typedef;

/**
 * Built-in toolbar button descriptors. See
 * {@link kemia.controller.DefaultToolbar.buttons_} for details on button
 * descriptor objects. This array is processed at JS parse time; each item is
 * inserted into {@link kemia.controller.DefaultToolbar.buttons_}, and the
 * array itself is deleted and (hopefully) garbage-collected.
 * 
 * @type {Array.<!kemia.controller.ReactionEditor.ButtonDescriptor>}.
 * @private
 */
kemia.controller.DefaultToolbar.BUTTONS_ = [];

(function() {
	// Create the kemia.controller.DefaultToolbar.buttons_ map from
	// kemia.controller.DefaultToolbar.BUTTONS_.
	for ( var i = 0, button; button = kemia.controller.DefaultToolbar.BUTTONS_[i]; i++) {
		kemia.controller.DefaultToolbar.buttons_[button.command] = button;
	}

	// kemia.controller.DefaultToolbar.BUTTONS_ is no longer needed
	// once the map is ready.
	delete kemia.controller.DefaultToolbar.BUTTONS_;

})();
