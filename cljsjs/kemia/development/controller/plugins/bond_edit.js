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
goog.provide('kemia.controller.plugins.BondEdit');
goog.require('kemia.controller.Plugin');
goog.require('goog.debug.Logger');
goog.require('kemia.model.Bond');

/**
 * @constructor
 * @extends{kemia.controller.Plugin}
 */
kemia.controller.plugins.BondEdit = function() {
	kemia.controller.Plugin.call(this);
	this._dragging = false;
}
goog.inherits(kemia.controller.plugins.BondEdit, kemia.controller.Plugin);

/**
 * Command implemented by this plugin.
 */
kemia.controller.plugins.BondEdit.COMMAND = 'selectBond';

/** @inheritDoc */
kemia.controller.plugins.BondEdit.prototype.isSupportedCommand = function(
		command) {
	return command == kemia.controller.plugins.BondEdit.COMMAND;
};

/** @inheritDoc */
kemia.controller.plugins.BondEdit.prototype.getTrogClassId = goog.functions
		.constant(kemia.controller.plugins.BondEdit.COMMAND);

/**
 * sets bond order and stereo.
 * 
 * @param {string}
 *            command Command to execute.
 * @return {Object|undefined} The result of the command.
 */
kemia.controller.plugins.BondEdit.prototype.execCommandInternal = function(
		command, var_args) {
	this.bond_type = arguments[1];
};

kemia.controller.plugins.BondEdit.SHORTCUTS = [ {
	id : '1',
	key : '1'
}, {
	id : '2',
	key : '2'
}, {
	id : '3',
	key : '3'
}, {
	id : '4',
	key : '4'
}, {
	id : '5',
	key : '5'
}, {
	id : '6',
	key : '6'
}, {
	id : '7',
	key : '7'
}, {
	id : '8',
	key : '8'
}, {
	id : '9',
	key : '9'
} ];

kemia.controller.plugins.BondEdit.prototype.getKeyboardShortcuts = function() {
	return kemia.controller.plugins.BondEdit.SHORTCUTS;
}

/**
 * @enum {Object}
 */
kemia.controller.plugins.BondEdit.BOND_TYPES = [ {
	caption : "Single",
	order : kemia.model.Bond.ORDER.SINGLE,
	stereo : kemia.model.Bond.STEREO.NOT_STEREO
}, {
	caption : "Double",
	order : kemia.model.Bond.ORDER.DOUBLE,
	stereo : kemia.model.Bond.STEREO.NOT_STEREO
}, {
	caption : "Triple",
	order : kemia.model.Bond.ORDER.TRIPLE,
	stereo : kemia.model.Bond.STEREO.NOT_STEREO
}, {
	caption : "Quadruple",
	order : kemia.model.Bond.ORDER.QUADRUPLE,
	stereo : kemia.model.Bond.STEREO.NOT_STEREO
}, {
	caption : "Single Up",
	order : kemia.model.Bond.ORDER.SINGLE,
	stereo : kemia.model.Bond.STEREO.UP
}, {
	caption : "Single Down",
	order : kemia.model.Bond.ORDER.SINGLE,
	stereo : kemia.model.Bond.STEREO.DOWN
}, {
	caption : "Single Up or Down",
	order : kemia.model.Bond.ORDER.SINGLE,
	stereo : kemia.model.Bond.STEREO.UP_OR_DOWN
} ]

/**
 * The logger for this class.
 * 
 * @type {goog.debug.Logger}
 * @protected
 */
kemia.controller.plugins.BondEdit.prototype.logger = goog.debug.Logger
		.getLogger('kemia.controller.plugins.BondEdit');

// kemia.controller.plugins.BondEdit.prototype.handleDoubleClick = function(e) {
// this.logger.info('handleDoubleClick');
// }

kemia.controller.plugins.BondEdit.prototype.handleKeyboardShortcut = function(e) {
	// this.logger.info('handleKeyboardShortcut');
	var id = e.identifier;
	var shortcut = goog.array.find(kemia.controller.plugins.BondEdit.SHORTCUTS,
			function(obj) {
				return obj.id == e.identifier
			});
	if (shortcut) {
		// this.logger.info('getSelected ' +
		// this.editorObject.getSelected().toString());
		goog.array.forEach(this.editorObject.getSelected(), function(target) {
			// this.logger.info('target ' + target.toString());
			var repeat = parseInt(shortcut.id);
			if (target instanceof kemia.model.Atom) {
				var attachment_atom = target;
				this.editorObject.dispatchBeforeChange();
				for ( var i = 0; i < repeat; i++) {
					var new_bond = attachment_atom.molecule.sproutBond(
							attachment_atom, kemia.model.Bond.ORDER.SINGLE,
							kemia.model.Bond.STEREO.NOT_STEREO);
					if (new_bond) {
						attachment_atom = new_bond.otherAtom(attachment_atom);
					}
				}
				this.editorObject.setModelsSilently(this.editorObject
						.getModels());
				this.editorObject.dispatchChange();
				return true;
			}
			return true;
		}, this);
	}
}

kemia.controller.plugins.BondEdit.prototype.handleMouseMove = function(e) {
//	this.logger.fine('handleMouseMove');
	if (this.bond_type && !this._dragging) {
		var target = this.editorObject.findTarget(e);
		this.editorObject.clearSelected();
		this.editorObject.getOriginalElement().style.cursor = 'default';
		if (e.currentTarget.highlightGroup) {
			e.currentTarget.highlightGroup.clear();
		}
		e.currentTarget.highlightGroup = undefined;

		if (target instanceof kemia.model.Atom) {
			this.editorObject.addSelected(target);
			this.editorObject.getOriginalElement().style.cursor = 'pointer';
			if (!e.currentTarget.highlightGroup) {
				e.currentTarget.highlightGroup = this.highlightAtom(target);
			} else {
				e.currentTarget.highlightGroup = this.highlightAtom(target,
						e.currentTarget.highlightGroup);
			}
			return true;
		} else if (target instanceof kemia.model.Bond) {
			this.editorObject.addSelected(target);
			this.editorObject.getOriginalElement().style.cursor = 'pointer';
			if (!e.currentTarget.highlightGroup) {
				e.currentTarget.highlightGroup = this.highlightBond(target);
			} else {
				e.currentTarget.highlightGroup = this.highlightBond(target,
						e.currentTarget.highlightGroup);
			}
			return true;
		}
	}
	return false;
};

kemia.controller.plugins.BondEdit.prototype.handleMouseDown = function(e) {
//	this.logger.fine('handleMouseDown');
	try {
		var selected = this.editorObject.getSelected();
		if (selected.length) {
			goog.array
					.forEach(
							selected,
							function(target) {
								if (target instanceof kemia.model.Atom) {
									if (this.bond_type) {
										this.editorObject
												.dispatchBeforeChange();
										var new_bond = target.molecule
												.sproutBond(target,
														this.bond_type.order,
														this.bond_type.stereo);
										this.editorObject.clearSelected();
										this.editorObject.addSelected(new_bond);
										this.editorObject
												.setModelsSilently(this.editorObject
														.getModels());
										this.editorObject.dispatchChange();
										return true;
									}
								}
								if (target instanceof kemia.model.Bond) {
									var bond = target;
									if (this.bond_type) {
										if (this.bond_type.order != bond.order
												|| this.bond_type.stereo != bond.stereo
												|| bond.stereo != kemia.model.Bond.STEREO.NOT_STEREO) {
											this.editorObject
													.dispatchBeforeChange();
											this.replaceBond(target);
											this.editorObject
													.setModelsSilently(this.editorObject
															.getModels());
											this.editorObject.dispatchChange();
											return true;
										}
									} 

									// else {
									// if (target._last_click) {
									// if ((goog.now() - target._last_click) <
									// 1000)
									// {
									// this.editorObject.dispatchBeforeChange();
									// this.toggleBondType(target);
									// this.editorObject
									// .setModelsSilently(this.editorObject
									// .getModels());
									// this.editorObject.dispatchChange();
									// return true;
									// }
									// }
									// target._last_click = goog.now();
									// }
								}
							}, this);
		} else {
			if (this.bond_type) {
				this.editorObject.dispatchBeforeChange();
				this.createMolecule(kemia.controller.ReactionEditor
						.getMouseCoords(e));
				this.editorObject.setModelsSilently(this.editorObject
						.getModels());
				this.editorObject.dispatchChange();
				return true;
			}
		}
	} catch (e) {
		this.logger.severe(e);
	}
};


kemia.controller.plugins.BondEdit.prototype.createMolecule = function(pos) {
	var trans;
	if (this.editorObject.reactionRenderer.transform) {
		trans = this.editorObject.reactionRenderer.transform;
	} else {
		trans = this.editorObject.reactionRenderer.moleculeRenderer.transform;
	}
	var coord = trans.createInverse().transformCoords([ pos ])[0];
	var atom = new kemia.model.Atom("C", coord.x, coord.y);
	var molecule = new kemia.model.Molecule();
	molecule.addAtom(atom);
	molecule.sproutBond(atom, this.bond_type.order, this.bond_type.stereo);

	if (this.editorObject.getModels().length > 0) {
		var model = this.editorObject.getModels()[0];
		if (model instanceof kemia.model.Reaction) {
			model.addMolecule(molecule);
		} 
	} else {
		this.editorObject.setModels([molecule]);
	}
};

kemia.controller.plugins.BondEdit.prototype.toggleBondType = function(bond) {
	if (bond.stereo == kemia.model.Bond.STEREO.NOT_STEREO) {
		var order = kemia.model.Bond.ORDER.SINGLE;
		if (bond.order == kemia.model.Bond.ORDER.SINGLE) {
			order = kemia.model.Bond.ORDER.DOUBLE;
		} else if (bond.order == kemia.model.Bond.ORDER.DOUBLE) {
			order = kemia.model.Bond.ORDER.TRIPLE;
		}
		var new_bond = new kemia.model.Bond(bond.target, bond.source, order,
				bond.stereo);
		var molecule = bond.molecule;
		molecule.removeBond(bond);
		molecule.addBond(new_bond);
	}
};

kemia.controller.plugins.BondEdit.prototype.replaceBond = function(bond) {
	if (this.bond_type.stereo != kemia.model.Bond.STEREO.NOT_STEREO
			&& bond.stereo == this.bond_type.stereo) {
		// flip ends if replacing with the same stereo

		var new_bond = new kemia.model.Bond(bond.target, bond.source,
				this.bond_type.order, this.bond_type.stereo);
	} else {
		var new_bond = new kemia.model.Bond(bond.source, bond.target,
				this.bond_type.order, this.bond_type.stereo);
	}
	var molecule = bond.molecule;
	molecule.removeBond(bond);
	molecule.addBond(new_bond);
};

kemia.controller.plugins.BondEdit.prototype.highlightAtom = function(atom,
		opt_group) {

	return this.editorObject.reactionRenderer.moleculeRenderer.atomRenderer
			.highlightOn(atom, 'green', opt_group);
};

kemia.controller.plugins.BondEdit.prototype.highlightBond = function(bond,
		opt_group) {
	return this.editorObject.reactionRenderer.moleculeRenderer.bondRendererFactory
			.get(bond).highlightOn(bond, 'green', opt_group);
};

/**
 * reset to default state called when another plugin is made active
 */
kemia.controller.plugins.BondEdit.prototype.resetState = function() {
	this.bond_type = undefined;
}

/** @inheritDoc */
kemia.controller.plugins.BondEdit.prototype.queryCommandValue = function(
		command) {
	if (command == kemia.controller.plugins.BondEdit.COMMAND) {
		return this.bond_type;
	}
};
