/**
 * @license Copyright 2010 Paul Novak (paul@wingu.com)
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
 * @author paul@wingu.com (Paul Novak)
 */
goog.provide("kemia.controller.ReactionEditor");
goog.provide("kemia.controller.ReactionEditor.EventType");
goog.require("kemia.view.ReactionRenderer");
goog.require("kemia.view.MoleculeRenderer");
goog.require("goog.graphics");
goog.require('goog.events');
goog.require('goog.fx.Dragger');
goog.require('goog.fx.Dragger.EventType');
goog.require('goog.editor.BrowserFeature');
goog.require('goog.async.Delay');
goog.require('kemia.controller.Plugin');
goog.require('kemia.model.NeighborList');
goog.require('goog.ui.Prompt');
goog.require('goog.debug.Console');
goog.require('goog.ui.KeyboardShortcutHandler');
goog.require('kemia.io.json');

/**
 * A graphical editor for reactions
 * 
 * 
 * @constructor
 * @extends {goog.events.EventTarget}
 */
kemia.controller.ReactionEditor = function(element, opt_config) {
	goog.events.EventTarget.call(this);
	this.originalElement = element;
	this.id = element.id;
	this.editableDomHelper = goog.dom.getDomHelper(element);
	this.models = [];
	/**
	 * Map of class id to registered plugin.
	 * 
	 * @type {Object}
	 * @private
	 */
	this.plugins_ = {};

	/**
	 * Plugins registered on this editor, indexed by the
	 * kemia.controller.Plugin.Op that they support.
	 * 
	 * @type {Object.<Array>}
	 * @private
	 */
	this.indexedPlugins_ = {};

	for ( var op in kemia.controller.Plugin.OPCODE) {
		this.indexedPlugins_[op] = [];
	}
	this.config = new goog.structs.Map(
			kemia.controller.ReactionEditor.defaultConfig);
	if (opt_config) {
		this.config.addAll(opt_config); // merge optional config into
		// defaults
	}

	this.graphics = goog.graphics.createGraphics(element.clientWidth,
			element.clientHeight);

	this.graphics.render(this.originalElement);

	this.reactionRenderer = new kemia.view.ReactionRenderer(this.graphics,
			this.config);
	this.isModified_ = false;
	this.isEverModified_ = false;

	/**
	 * @type {goog.events.EventHandler}
	 * @protected
	 */
	this.eventRegister = new goog.events.EventHandler(this);
	 this.shortcutHandler = new goog.ui.KeyboardShortcutHandler(document);

	// Wrappers around this editor, to be disposed when the editor is disposed.
	this.wrappers_ = [];

	this.handleEditorLoad();

	this.loadState_ = kemia.controller.ReactionEditor.LoadState_.EDITABLE;

	this.isModified_ = false;
	this.isEverModified_ = false;

	// currently selected model objects
	this.selected = [];

	this.neighborList = [];

};
goog.inherits(kemia.controller.ReactionEditor, goog.events.EventTarget);


/**
 * Sets the active editor id.
 * 
 * @param {?string}
 *            editorId The active editor id.
 */
kemia.controller.ReactionEditor.setActiveEditorId = function(editorId) {
	kemia.controller.ReactionEditor.activeEditorId_ = editorId;
};

kemia.controller.ReactionEditor.prototype.clearSelected = function() {
	this.selected.length = 0;
}

kemia.controller.ReactionEditor.prototype.getSelected = function(){
	return this.selected;	
}

kemia.controller.ReactionEditor.prototype.addSelected = function(obj){
	this.selected.push(obj);
}

/**
 * @return {goog.dom.DomHelper?} The dom helper for the editable node.
 */
kemia.controller.ReactionEditor.prototype.getEditableDomHelper = function() {
	return this.editableDomHelper;
};

/**
 * @return {?string} The id of the active editor.
 */
kemia.controller.ReactionEditor.getActiveEditorId = function() {
	return kemia.controller.ReactionEditor.activeEditorId_;
};

kemia.controller.ReactionEditor.prototype.clear = function() {
	
	this.graphics.clear();
	this.models = [new kemia.model.Reaction()];

	this.neighborList = new kemia.model.NeighborList( [], 1, .5);
	var fill = new goog.graphics.SolidFill(this.config.get("background").color);

	this.graphics.drawRect(0, 0, this.graphics.getSize().width, this.graphics
			.getSize().height, null, fill);
}

kemia.controller.ReactionEditor.prototype.getScaleFactor = function() {
	return this.reactionRenderer.scale_factor;
}

kemia.controller.ReactionEditor.prototype.setScaleFactor = function(scale) {
	this.reactionRenderer.transform = undefined; // to force new transform
	this.reactionRenderer.setScaleFactor( scale);
}

kemia.controller.ReactionEditor.prototype.setModelsSilently = function(models) {
	this.clear();
	this.models = [];
	goog.array.forEach(models, function(model){
		var reaction;
		if(model instanceof kemia.model.Reaction){
			reaction = model;
		}
		if(model instanceof kemia.model.Molecule){
			// wrap in a single-reactant reaction
			reaction = new kemia.model.Reaction();
			reaction.addReactant(model);
		}
		this.models.push(reaction);
	}, this);
	var objects = goog.array.flatten(goog.array.map(models, function(model) {
		if (model instanceof kemia.model.Molecule) {
			return kemia.model.NeighborList.moleculesToNeighbors( [ model ]);
		}
		if (model instanceof kemia.model.Reaction) {
			return kemia.model.NeighborList.reactionsToNeighbors( [ model ]);
		}
	}));

	if (objects.length > 0) {
		this.neighborList = new kemia.model.NeighborList(objects, 1, .5);
	}
	this.render();
};

kemia.controller.ReactionEditor.prototype.setModels = function(models){
	this.dispatchBeforeChange();
	this.setModelsSilently(models);
}

kemia.controller.ReactionEditor.prototype.render = function() {
	goog.array.forEach(this.models, function(model) {

		if (model instanceof kemia.model.Reaction) {
			this.reactionRenderer.render(model);
		}
		if (model instanceof kemia.model.Molecule) {
			this.reactionRenderer.moleculeRenderer.render(model);
		}
	}, this);
};

/**
 * gets model
 * 
 * @return{Array.<kemia.model.Reaction | kemia.model.Molecule>}
 */
kemia.controller.ReactionEditor.prototype.getModels = function() {
	return this.models;
};

/**
 * This dispatches the beforechange event on the editable reaction editor
 */
kemia.controller.ReactionEditor.prototype.dispatchBeforeChange = function() {
//	this.logger.info('dispatchBeforeChange');
	this._serialized = goog.json.serialize(goog.array.map(this.getModels(), function(model){
		if (model instanceof kemia.model.Reaction){
			return kemia.io.json.reactionToJson(model);
		} else if (model instanceof kemia.model.Molecule){
			return kemia.io.json.moleculeToJson(model);
		}
	}));
	this.dispatchEvent(kemia.controller.ReactionEditor.EventType.BEFORECHANGE);
//	this.logger.info('_end_dispatchBeforeChange');
};

/**
 * Calls all the plugins of the given operation, in sequence, with the given
 * arguments. This is short-circuiting: once one plugin cancels the event, no
 * more plugins will be invoked.
 * 
 * @param {kemia.controller.Plugin.Op}
 *            op A plugin op.
 * @param {...*}
 *            var_args The arguments to the plugin.
 * @return {boolean} True if one of the plugins cancel the event, false
 *         otherwise.
 * @private
 */
kemia.controller.ReactionEditor.prototype.invokeShortCircuitingOp_ = function(
		op, var_args) {
	var plugins = this.indexedPlugins_[op];
	var argList = goog.array.slice(arguments, 1);
	for ( var i = 0; i < plugins.length; ++i) {
		// If the plugin returns true, that means it handled the event and
		// we shouldn't propagate to the other plugins.
		var plugin = plugins[i];
		if ((plugin.isEnabled(this) || kemia.controller.Plugin.IRREPRESSIBLE_OPS[op])
				&& plugin[kemia.controller.Plugin.OPCODE[op]].apply(plugin,
						argList)) {
			// Only one plugin is allowed to handle the event. If for some
			// reason
			// a plugin wants to handle it and still allow other plugins to
			// handle
			// it, it shouldn't return true.
			return true;
		}
	}

	return false;
};

kemia.controller.ReactionEditor.prototype.disablePlugins = function (){
	this.logger.info('disablePlugins');
	for ( var key in this.plugins_) {
		var plugin = this.plugins_[key];
		plugin.disable(this);
	}
}

kemia.controller.ReactionEditor.prototype.enablePlugins = function (){
	this.logger.info('enablePlugins');
	for ( var key in this.plugins_) {
		var plugin = this.plugins_[key];
		plugin.enable(this);
	}
}

/**
 * Handle a change in the Editor. Marks the editor as modified, dispatches the
 * change event on the editable field
 */
kemia.controller.ReactionEditor.prototype.handleChange = function() {
	this.isModified_ = true;
	this.isEverModified_ = true;

};

// /**
// * Handles keydown on the editor.
// *
// * @param {goog.events.BrowserEvent}
// * e The browser event.
// * @private
// */
//kemia.controller.ReactionEditor.prototype.handleKeyDown_ = function(e) {
//	this.logger.info('handleKeyDown_');
//	if (!goog.editor.BrowserFeature.USE_MUTATION_EVENTS) {
//	if (!this.handleBeforeChangeKeyEvent_(e)) {
//	return;
//	}
//	}

//	if (!this.invokeShortCircuitingOp_(kemia.controller.Plugin.Op.KEYDOWN, e)
//			&& goog.editor.BrowserFeature.USES_KEYDOWN) {
//		this.handleKeyboardShortcut_(e);
//	}
//};

// /**
//	 * Handles keypress on the field.
//	 * 
//	 * @param {goog.events.BrowserEvent}
//	 *            e The browser event.
//	 * @private
//	 */
//kemia.controller.ReactionEditor.prototype.handleKeyPress_ = function(e) {
//	this.logger.info('handleKeyPress_');
//	if (goog.editor.BrowserFeature.USE_MUTATION_EVENTS) {
//	if (!this.handleBeforeChangeKeyEvent_(e)) {
//	return;
//	}
//	} else {
//	// In IE only keys that generate output trigger keypress
//	// In Mozilla charCode is set for keys generating content.
//	this.gotGeneratingKey_ = true;
//	this.dispatchBeforeChange();
//	}

//	if (!this.invokeShortCircuitingOp_(goog.editor.Plugin.Op.KEYPRESS, e)
//			&& !goog.editor.BrowserFeature.USES_KEYDOWN) {
//		this.handleKeyboardShortcut_(e);
//	}
//};

// /**
// * Handles keyup on the editor.
// *
// * @param {goog.events.BrowserEvent}
// * e The browser event.
// * @private
// */
// kemia.controller.ReactionEditor.prototype.handleKeyUp_ = function(e) {
// this.logger.info('handleKeyUp_');
// if (!goog.editor.BrowserFeature.USE_MUTATION_EVENTS
// && (this.gotGeneratingKey_ || goog.editor.Field
// .isSpecialGeneratingKey_(e))) {
// // The special keys won't have set the gotGeneratingKey flag, so we
// // check
// // for them explicitly
// this.handleChange();
// }
//
// this.invokeShortCircuitingOp_(kemia.controller.Plugin.Op.KEYUP, e);
//
// };

/**
 * returns first target within tolerance in preferential order first Atom, then
 * Bond, then Molecule, then Arrow, then Plus In other words, if a Bond and
 * Molecule are both returned by findTargetList, then the Bond will be preferred
 * and returned.
 * @param {goog.events.Event} e mouse event used to locate target
 * @param {!goog.math.Coordinate} opt_coord used to locate target
 * @return {kemia.model.Atom|kemia.model.Bond|kemia.model.Molecule|kemia.model.Arrow|kemia.model.Plus}
 */
kemia.controller.ReactionEditor.prototype.findTarget = function(e, opt_coord) {
	var targets = this.findTargetList(e, opt_coord);
//	this.logger.fine('targets ' + targets.length + " at " + e.clientX + ", " + e.clientY);

	var atom_targets = goog.array.filter(targets, function(t) {
		return t instanceof kemia.model.Atom;
	}, this);
	if (atom_targets.length > 0) {
		return atom_targets[0];
	}

	var bond_targets = goog.array.filter(targets, function(t) {
		return t instanceof kemia.model.Bond;
	});
	if (bond_targets.length > 0) {
		return bond_targets[0];
	}

	var molecule_targets = goog.array.filter(targets, function(t) {
		return t instanceof kemia.model.Molecule;
	});
	if (molecule_targets.length > 0) {
		return molecule_targets[0];
	}

	var arrow_targets = goog.array.filter(targets, function(t) {
		return t instanceof kemia.model.Arrow;
	});
	if (arrow_targets.length > 0) {
		return arrow_targets[0];
	}

	var plus_targets = goog.array.filter(targets, function(t) {
		return t instanceof kemia.model.Plus;
	});
	if (plus_targets.length > 0) {
		return plus_targets[0];
	}

}

kemia.controller.ReactionEditor.prototype.getAtomicCoords = function(
		graphicsCoord) {	
	var trans;
	if (this.reactionRenderer.transform){
		trans = this.reactionRenderer.transform
		.createInverse();
	} else {
		trans = this.reactionRenderer.moleculeRenderer.transform.createInverse();
	}
	return trans.transformCoords( [ graphicsCoord ])[0];
}

kemia.controller.ReactionEditor.prototype.getGraphicsCoords = function(
		atomicCoords) {
	var trans;
	if (this.reactionRenderer.transform){
		trans = this.reactionRenderer.transform
		.createInverse();
	} else {
		trans = this.reactionRenderer.moleculeRenderer.transform.createInverse();
	}
	return trans.transformCoords( [ atomicCoords ])[0];
}

kemia.controller.ReactionEditor.getMouseCoords = function(e) {
	// kemia.controller.ReactionEditor.prototype.logger.info('getMouseCoords');
	var elem = e.currentTarget;
	var posx = e.clientX + document.body.scrollLeft
			+ document.documentElement.scrollLeft;
	var posy = e.clientY + document.body.scrollTop
			+ document.documentElement.scrollTop;
	return kemia.controller.ReactionEditor.getOffsetCoords(elem, posx, posy);
}

kemia.controller.ReactionEditor.getOffsetCoords = function(elem, posx, posy) {
	posx -= elem.offsetLeft;
	posy -= elem.offsetTop;
	while (elem = elem.offsetParent) {
		posx -= elem.offsetLeft;
		posy -= elem.offsetTop;
	}
	return new goog.math.Coordinate(posx, posy);
}

/**
* @param {goog.events.Event} e mouse event used to locate target, ignored if opt_coord is provided
* @param {!goog.math.Coordinate} opt_coord used to locate target
* @return {Array.<kemia.model.Atom|kemia.model.Bond|kemia.model.Molecule|kemia.model.Arrow|kemia.model.Plus>}
*/
kemia.controller.ReactionEditor.prototype.findTargetList = function(e, opt_coord) {
	if(!goog.isDef(opt_coord)){
		opt_coord = kemia.controller.ReactionEditor.getMouseCoords(e);
	}
	
	var trans;
	if (this.reactionRenderer.transform){
		trans = this.reactionRenderer.transform
		.createInverse();
	} else {
		trans = this.reactionRenderer.moleculeRenderer.transform.createInverse();
	}

	var target = trans.transformCoords( [ opt_coord ])[0];
	return this.neighborList.getNearestList( {
		x : target.x,
		y : target.y
	});
}

kemia.controller.ReactionEditor.prototype.findAtomMergePairs = function(atoms,
		opt_exclusions) {
	if (!goog.isDef(opt_exclusions)) {
		opt_exclusions = [];
	}
	return goog.array.filter(goog.array.map(atoms, function(atom) {
		var nearest = this.neighborList.getNearestList({
			x : atom.coord.x,
			y : atom.coord.y
		}, this);

		var nearest_atoms = goog.array.filter(nearest, function(a) {
			if (a instanceof kemia.model.Atom) {
				return !goog.array.contains(opt_exclusions, a);
			};
		});

		if (nearest_atoms.length > 0) {
			return [ atom, nearest_atoms[0] ];
		} else {
			return false;
		}
	}, this), function(pair) {
		return pair != false;
	}, this);
};

kemia.controller.ReactionEditor.prototype.handleMouseOver_ = function(e) {
	this.invokeShortCircuitingOp_(kemia.controller.Plugin.Op.MOUSEOVER, e);
};

kemia.controller.ReactionEditor.prototype.handleMouseOut_ = function(e) {
	this.invokeShortCircuitingOp_(kemia.controller.Plugin.Op.MOUSEOUT, e);
};

kemia.controller.ReactionEditor.prototype.handleMouseMove_ = function(e) {
	try{
		this.invokeShortCircuitingOp_(kemia.controller.Plugin.Op.MOUSEMOVE, e);
	} catch (e) {
		this.logger.info(e);
	}
};

kemia.controller.ReactionEditor.prototype.handleMouseUp_ = function(e) {
	this.invokeShortCircuitingOp_(kemia.controller.Plugin.Op.MOUSEUP, e);
}

kemia.controller.ReactionEditor.prototype.handleMouseDown_ = function(e) {
	// this.logger.info('handleMouseDown_');
	try{
	this.invokeShortCircuitingOp_(kemia.controller.Plugin.Op.MOUSEDOWN, e);
	}catch (e) {
		this.logger.info(e);
		this.logger.info('reverting state');
		this.setModels(goog.array.map(
				goog.json.unsafeParse(this._serialized), kemia.io.json.readReaction));
	}
};

kemia.controller.ReactionEditor.prototype.handleMouseUp_ = function(e) {
	this.invokeShortCircuitingOp_(kemia.controller.Plugin.Op.MOUSEUP, e);
};

// kemia.controller.ReactionEditor.prototype.handleDblclick_ = function(e) {
// this.invokeShortCircuitingOp_(kemia.controller.Plugin.Op.DBLCLICK, e);
// };

kemia.controller.ReactionEditor.prototype.handleKeyboardShortcut_ = function(e) {
//	this.logger.info('handelKeyboardShortcut_ ' + e.identifier);
	this.invokeShortCircuitingOp_(kemia.controller.Plugin.Op.SHORTCUT, e);
}

kemia.controller.ReactionEditor.prototype.handlePaste_ = function(e) {
	this.invokeShortCircuitingOp_(kemia.controller.Plugin.Op.PASTE, e);
};

/**
 * Gets the value of this command.
 * 
 * @param {string}
 *            command The command to check.
 * @param {boolean}
 *            isEditable Whether the field is currently editable.
 * @return {string|boolean|null} The state of this command. Null if not handled.
 *         False if the field is uneditable and there are no handlers for
 *         uneditable commands.
 * @private
 */
kemia.controller.ReactionEditor.prototype.queryCommandValueInternal_ = function(
		command, isEditable) {
	var plugins = this.indexedPlugins_[kemia.controller.Plugin.Op.QUERY_COMMAND];
	for ( var i = 0; i < plugins.length; ++i) {
		var plugin = plugins[i];
		if (plugin.isEnabled(this) && plugin.isSupportedCommand(command)
				&& (isEditable || plugin.activeOnUneditableEditors())) {
			return plugin.queryCommandValue(command);
		}
	}
	return isEditable ? null : false;
};

/**
 * resets state of queryable plugins used to make plugins exclusive
 */
kemia.controller.ReactionEditor.prototype.resetQueryablePlugins = function() {
	var plugins = this.indexedPlugins_[kemia.controller.Plugin.Op.QUERY_COMMAND];
	goog.array.forEach(plugins, function(p) {
		if (p.resetState) {
			p.resetState();
		}
	});
}

/**
 * Gets the value of command(s).
 * 
 * @param {string|Array.<string>} commands 
 * 	String name(s) of the command.
 * @return {*} Value of each command. Returns false (or array of falses) if
 *         designMode is off or the editor is otherwise uneditable, and there
 *         are no activeOnUneditable plugins for the command.
 */
kemia.controller.ReactionEditor.prototype.queryCommandValue = function(commands) {
	var isEditable = this.isLoaded();
	if (goog.isString(commands)) {
		return this.queryCommandValueInternal_(commands, isEditable);
	} else {
		var state = {};
		for ( var i = 0; i < commands.length; i++) {
			state[commands[i]] = this.queryCommandValueInternal_(commands[i],
					isEditable);
		}
		return state;
	}
};

/**
 * Dispatches the appropriate set of change events.
 * 
 */
kemia.controller.ReactionEditor.prototype.dispatchChange = function() {
	this.handleChange();
};

/**
 * Dispatches a command value change event.
 * 
 * @param {Array.<string>=} opt_commands 
 * Commands whose state has changed.
 */
kemia.controller.ReactionEditor.prototype.dispatchCommandValueChange = function(
		opt_commands) {
	if (opt_commands) {
		this
				.dispatchEvent( {
					type : kemia.controller.ReactionEditor.EventType.COMMAND_VALUE_CHANGE,
					commands : opt_commands
				});
	} else {
		this
				.dispatchEvent(kemia.controller.ReactionEditor.EventType.COMMAND_VALUE_CHANGE);
	}
};

/**
 * Executes an editing command as per the registered plugins.
 * 
 * @param {string}
 *            command The command to execute.
 * @param {...*}
 *            var_args Any additional parameters needed to execute the command.
 * @return {Object|boolean} False if the command wasn't handled, otherwise, the
 *         result of the command.
 */
kemia.controller.ReactionEditor.prototype.execCommand = function(command,
		var_args) {
	var args = arguments;
	var result;

	var plugins = this.indexedPlugins_[kemia.controller.Plugin.Op.EXEC_COMMAND];
	for ( var i = 0; i < plugins.length; ++i) {
		// If the plugin supports the command, that means it handled the
		// event and we shouldn't propagate to the other plugins.
		var plugin = plugins[i];
		if (plugin.isEnabled(this) && plugin.isSupportedCommand(command)) {
			result = plugin.execCommand.apply(plugin, args);
			break;
		}
	}

	return result;
};

/**
 * Registers the plugin with the editor.
 * 
 * @param {kemia.controller.Plugin}
 *            plugin The plugin to register.
 */
kemia.controller.ReactionEditor.prototype.registerPlugin = function(plugin) {
	var classId = plugin.getTrogClassId();

	if (this.plugins_[classId]) {
		this.logger
				.severe('Cannot register the same class of plugin twice [' + classId + ']');
	}
	this.plugins_[classId] = plugin;

	// Only key events and execute should have these has* functions with a
	// custom
	// handler array since they need to be very careful about performance.
	// The rest of the plugin hooks should be event-based.
	for ( var op in kemia.controller.Plugin.OPCODE) {
		var opcode = kemia.controller.Plugin.OPCODE[op];
		if (plugin[opcode]) {
			this.indexedPlugins_[op].push(plugin);
		}
	}
	plugin.registerEditorObject(this);

	// By default we enable all plugins for editors that are currently loaded.
	if (this.isLoaded()) {
		plugin.enable(this);
	}
};

/**
 * Unregisters the plugin with this editor.
 * 
 * @param {kemia.controller.Plugin}
 *            plugin The plugin to unregister.
 */
kemia.controller.ReactionEditor.prototype.unregisterPlugin = function(plugin) {
	var classId = plugin.getTrogClassId();
	if (!this.plugins_[classId]) {
		this.logger
				.severe('Cannot unregister a plugin that isn\'t registered.');
	}
	delete this.plugins_[classId];

	for ( var op in kemia.controller.Plugin.OPCODE) {
		var opcode = kemia.controller.Plugin.OPCODE[op];
		if (plugin[opcode]) {
			goog.array.remove(this.indexedPlugins_[op], plugin);
		}
	}

	plugin.unregisterEditorObject(this);
};

/**
 * @return {boolean} Whether the editor has finished loading.
 */
kemia.controller.ReactionEditor.prototype.isLoaded = function() {
	return this.loadState_ == kemia.controller.ReactionEditor.LoadState_.EDITABLE;
};

/**
 * The load state of the editor.
 * 
 * @enum {number}
 * @private
 */
kemia.controller.ReactionEditor.LoadState_ = {
	UNEDITABLE : 0,
	LOADING : 1,
	EDITABLE : 2
};

/**
 * Logging object.
 * 
 * @type {goog.debug.Logger}
 * @protected
 */
kemia.controller.ReactionEditor.prototype.logger = goog.debug.Logger
		.getLogger('kemia.controller.ReactionEditor');

/**
 * Event types that can be stopped/started.
 * 
 * @enum {string}
 */
kemia.controller.ReactionEditor.EventType = {
	/**
	 * Dispatched when the command state of the selection may have changed. This
	 * event should be listened to for updating toolbar state.
	 */
	COMMAND_VALUE_CHANGE : 'cvc',
	/**
	 * Dispatched when the editor is loaded and ready to use.
	 */
	LOAD : 'load',
	/**
	 * Dispatched when the editor is fully unloaded and uneditable.
	 */
	UNLOAD : 'unload',
	/**
	 * Dispatched before the editor contents are changed.
	 */
	BEFORECHANGE : 'beforechange',
	/**
	 * Dispatched when the editor contents change, in FF only. Used for internal
	 * resizing, please do not use.
	 */
	CHANGE : 'change'
};

/**
 * Removes all listeners and destroys the eventhandler object.
 * 
 * @override
 */
kemia.controller.ReactionEditor.prototype.disposeInternal = function() {
	if (this.isLoading() || this.isLoaded()) {
		this.logger.warning('Disposing an editor that is in use.');
	}

	if (this.getOriginalElement()) {
		this.execCommand(kemia.controller.Command.CLEAR);
	}

	this.tearDownEditorObject_();
	this.clearListeners_();
	this.originalDomHelper = null;

	if (this.eventRegister) {
		this.eventRegister.dispose();
		this.eventRegister = null;
	}

	this.removeAllWrappers();

	if (kemia.controller.ReactionEditor.getActiveEditorId() == this.id) {
		kemia.controller.ReactionEditor.setActiveEditorId(null);
	}

	for ( var classId in this.plugins_) {
		var plugin = this.plugins_[classId];
		if (plugin.isAutoDispose()) {
			plugin.dispose();
		}
	}
	delete (this.plugins_);

	kemia.controller.ReactionEditor.superClass_.disposeInternal.call(this);
};

/**
 * Returns the registered plugin with the given classId.
 * 
 * @param {string}
 *            classId classId of the plugin.
 * @return {kemia.controller.Plugin} Registered plugin with the given classId.
 */
kemia.controller.ReactionEditor.prototype.getPluginByClassId = function(classId) {
	return this.plugins_[classId];
};

/**
 * Help make the editor not editable by setting internal data structures to
 * null, and disabling this editor with all registered plugins.
 * 
 * @private
 */
kemia.controller.ReactionEditor.prototype.tearDownEditorObject_ = function() {
	for ( var classId in this.plugins_) {
		var plugin = this.plugins_[classId];
		if (!plugin.activeOnUneditableEditors()) {
			plugin.disable(this);
		}
	}

	this.loadState_ = kemia.controller.ReactionEditor.LoadState_.UNEDITABLE;

};

/**
 * @return {boolean} Whether the editor has finished loading.
 */
kemia.controller.ReactionEditor.prototype.isLoaded = function() {
	return this.loadState_ == kemia.controller.ReactionEditor.LoadState_.EDITABLE;
};

/**
 * @return {boolean} Whether the editor is in the process of loading.
 */
kemia.controller.ReactionEditor.prototype.isLoading = function() {
	return this.loadState_ == kemia.controller.ReactionEditor.LoadState_.LOADING;
};

/**
 * Returns original DOM element for the Editor null if that element has not yet
 * been found in the appropriate document.
 * 
 * @return {Element} The original element.
 */
kemia.controller.ReactionEditor.prototype.getOriginalElement = function() {
	return this.originalElement;
};

/**
 * Stops all listeners and timers.
 * 
 * @private
 */
kemia.controller.ReactionEditor.prototype.clearListeners_ = function() {
	if (this.eventRegister) {
		this.eventRegister.removeAll();
	}

};

/**
 * Removes all wrappers and destroys them.
 */
kemia.controller.ReactionEditor.prototype.removeAllWrappers = function() {
	var wrapper;
	while (wrapper = this.wrappers_.pop()) {
		wrapper.dispose();
	}
};

/**
 * Handle the loading of the editor (e.g. once the editor is ready to setup).
 * 
 * @protected
 */
kemia.controller.ReactionEditor.prototype.handleEditorLoad = function() {

	if (kemia.controller.ReactionEditor.getActiveEditorId() != this.id) {
		// this.execCommand(kemia.controller.Command.CLEAR_EDITOR);
	}

	this.setupChangeListeners_();
	this.dispatchLoadEvent_();

	// Enabling plugins after we fire the load event so that clients have a
	// chance to set initial field contents before we start mucking with
	// everything.
	for ( var classId in this.plugins_) {
		this.plugins_[classId].enable(this);
	}
};

/**
 * Signal that the editor is loaded and ready to use. Change events now are in
 * effect.
 * 
 * @private
 */
kemia.controller.ReactionEditor.prototype.dispatchLoadEvent_ = function() {
	this.installStyles();

	this.dispatchEvent(kemia.controller.ReactionEditor.EventType.LOAD);
};

/**
 * Registers a keyboard event listener on the editor. This is necessary for
 * Gecko since the fields are contained in an iFrame and there is no way to
 * auto-propagate key events up to the main window.
 * 
 * @param {string|Array.<string>} type 
 * Event type to listen for or array of event types,
 *            for example goog.events.EventType.KEYDOWN.
 * @param {Function}
 *            listener Function to be used as the listener.
 * @param {boolean=}
 *            opt_capture Whether to use capture phase (optional, defaults to
 *            false).
 * @param {Object=}
 *            opt_handler Object in whose scope to call the listener.
 */
kemia.controller.ReactionEditor.prototype.addListener = function(type,
		listener, opt_capture, opt_handler) {
	var elem = this.getOriginalElement();
	// Opera won't fire events on <body> in whitebox mode because we make
	// <html> contentEditable to work around some visual issues.
	// So, if the parent node is contentEditable, listen to events on it
	// instead.
	// if (!goog.editor.BrowserFeature.FOCUSES_EDITABLE_BODY_ON_HTML_CLICK
	// && elem.parentNode.contentEditable) {
	// elem = elem.parentNode;
	// }
	// On Gecko, keyboard events only reliably fire on the document element.
	// if (elem && goog.editor.BrowserFeature.USE_DOCUMENT_FOR_KEY_EVENTS) {
	// elem = elem.ownerDocument;
	// }

	this.eventRegister.listen(elem, type, listener, opt_capture, opt_handler);
};

/**
 * Initialize listeners on the editor.
 * 
 * @private
 */
kemia.controller.ReactionEditor.prototype.setupChangeListeners_ = function() {

	 this.addListener(goog.events.EventType.KEYDOWN, this.handleKeyDown_);
	 this.addListener(goog.events.EventType.KEYPRESS, this.handleKeyPress_);
	 this.addListener(goog.events.EventType.KEYUP, this.handleKeyUp_);
	this.addListener(goog.events.EventType.MOUSEDOWN, this.handleMouseDown_);
	this.addListener(goog.events.EventType.MOUSEMOVE, this.handleMouseMove_);
	this.addListener(goog.events.EventType.MOUSEUP, this.handleMouseUp_);
	// this.addListener(goog.events.EventType.DBLCLICK, this.handleDblclick_);
	this.addListener('paste', this.handlePaste_);

	 goog.events.listen(this.shortcutHandler,
	 goog.ui.KeyboardShortcutHandler.EventType.SHORTCUT_TRIGGERED,
	 this.handleKeyboardShortcut_, undefined, this);

};
/*
 * Registers a keyboard shortcut. @param {string} identifier Identifier for the
 * task performed by the keyboard combination. Multiple shortcuts can be
 * provided for the same task by specifying the same identifier. @param
 * {...(number|string|Array.<number>)} var_args See below.
 * 
 * param {number} keyCode Numeric code for key param {number=} opt_modifiers
 * Bitmap indicating required modifier keys.
 * goog.ui.KeyboardShortcutHandler.Modifiers.SHIFT, CONTROL, ALT, or META.
 */
kemia.controller.ReactionEditor.prototype.registerShortcut = function(id, key) {
	 this.shortcutHandler.registerShortcut(id, key);
};

/**
 * Installs styles if needed. Only writes styles when they can't be written
 * inline directly into the field.
 * 
 * @protected
 */
kemia.controller.ReactionEditor.prototype.installStyles = function() {
	if (this.cssStyles && this.shouldLoadAsynchronously()) {
		goog.style.installStyles(this.cssStyles, this.getElement());
	}
};

/**
 * A default configuration for the reaction editor.
 */
kemia.controller.ReactionEditor.defaultConfig = {
	background : {
		color : '#F0FFF0'
	},
	margin : {
		left : 1,
		right : 1,
		top : 1,
		bottom : 1
	}
};
