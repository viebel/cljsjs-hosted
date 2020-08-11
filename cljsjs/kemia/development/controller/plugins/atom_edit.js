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
goog.provide('kemia.controller.plugins.AtomEdit');
goog.require('kemia.controller.Plugin');
goog.require('goog.debug.Logger');
goog.require('goog.ui.KeyboardShortcutHandler');
goog.require('goog.events.KeyCodes');

/**
 * @constructor
 * @extends{kemian.controller.Plugin}s
 */
kemia.controller.plugins.AtomEdit = function() {
	kemia.controller.Plugin.call(this);

}
goog.inherits(kemia.controller.plugins.AtomEdit, kemia.controller.Plugin);

/**
 * Command implemented by this plugin.
 */
kemia.controller.plugins.AtomEdit.COMMAND = 'selectSymbol';

/** @inheritDoc */
kemia.controller.plugins.AtomEdit.prototype.isSupportedCommand = function(
		command) {
	return command == kemia.controller.plugins.AtomEdit.COMMAND;
};

/** @inheritDoc */
kemia.controller.plugins.AtomEdit.prototype.getTrogClassId = goog.functions
		.constant(kemia.controller.plugins.AtomEdit.COMMAND);

kemia.controller.plugins.AtomEdit.SHORTCUTS = [
		{
			id : 'H',
			key : 'h'
		},
		{
			id : 'C',
			key : 'c'
		},
		{
			id : 'N',
			key : 'n'
		},
		{
			id : 'S',
			key : 's'
		},
		{
			id : 'P',
			key : 'p'
		},
		{
			id : 'O',
			key : 'o'
		},
		{
			id : 'F',
			key : 'f'
		},
		{
			id : 'I',
			key : 'i'
		},
		{
			id : '+',
			key : [ goog.events.KeyCodes.EQUALS,
					goog.ui.KeyboardShortcutHandler.Modifiers.SHIFT ]
		}, {
			id : '-',
			key : goog.events.KeyCodes.DASH
		} ];

kemia.controller.plugins.AtomEdit.prototype.getKeyboardShortcuts = function() {
	return kemia.controller.plugins.AtomEdit.SHORTCUTS;
}

/**
 * reset to default state called when another plugin is made active
 */
kemia.controller.plugins.AtomEdit.prototype.resetState = function() {
	this.symbol = undefined;
}

/**
 * sets atom symbol.
 * 
 * @param {string}
 *            command Command to execute.
 * @return {Object|undefined} The result of the command.
 */
kemia.controller.plugins.AtomEdit.prototype.execCommandInternal = function(
		command, var_args) {
	this.symbol = arguments[1];
};

/**
 * The logger for this class.
 * 
 * @type {goog.debug.Logger}
 * @protected
 */
kemia.controller.plugins.AtomEdit.prototype.logger = goog.debug.Logger
		.getLogger('kemia.controller.plugins.AtomEdit');

kemia.controller.plugins.AtomEdit.prototype.handleKeyboardShortcut = function(e) {
	// this.logger.info('handleKeyboardShortcut ' + e.identifier);
	try {
		var id = e.identifier;
		var shortcut = goog.array.find(
				kemia.controller.plugins.AtomEdit.SHORTCUTS, function(obj) {
					return obj.id == id;
				});
		if (shortcut) {
			// this.logger.info('shortcut ' + shortcut.id);
			goog.array.forEach(this.editorObject.getSelected(),
					function(target) {
						if (target instanceof kemia.model.Atom) {
							var atom = target;
							if ('+' == shortcut.id) {
								this.editorObject.dispatchBeforeChange();
								atom.charge++;
								this.editorObject.setModels(this.editorObject
										.getModels());
								this.editorObject.dispatchChange();
							} else if ('-' == shortcut.id) {
								this.editorObject.dispatchBeforeChange();
								atom.charge--;
								this.editorObject.setModels(this.editorObject
										.getModels());
								this.editorObject.dispatchChange();
							} else {
								var symbol = shortcut.id
								// this.logger.info('symbol ' + symbol);
					if (symbol != atom.symbol) {
						this.editorObject.dispatchBeforeChange();
						this.setAtomSymbol(symbol, atom);
						this.editorObject.setModels(this.editorObject
								.getModels());
						this.editorObject.dispatchChange();
						return true;
					}
				}
			}
		}, this);
			return true;
		}
	} catch (e) {
		this.logger.info(e);
	}
}

kemia.controller.plugins.AtomEdit.prototype.handleMouseMove = function(e) {
	if (this.symbol) {
		this.editorObject.clearSelected();
		this.editorObject.getOriginalElement().style.cursor = 'default';
		var target = this.editorObject.findTarget(e);
		if (e.currentTarget.highlightGroup) {
			e.currentTarget.highlightGroup.clear();
		}

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
		}
	}
	return false;
}

kemia.controller.plugins.AtomEdit.prototype.handleMouseDown = function(e) {
	

	if (this.symbol) {
		var selected = this.editorObject.getSelected();
		if (selected.length) {
			if (selected.length==1 && e.shiftKey) {
                var existingAtom = selected[0];
				var molecule = existingAtom.molecule;
                molecule.sproutBond(existingAtom, kemia.model.Bond.ORDER.SINGLE,kemia.model.Bond.STEREO.NOT_STEREO, this.symbol);
                this.editorObject.setModels(this.editorObject.getModels());
                this.editorObject.dispatchChange();
				return true;
            }
			else
				goog.array.forEach(selected, function(target) {
					if (target instanceof kemia.model.Atom) {
						var atom = target;
						if (this.symbol && (this.symbol != atom.symbol)) {
							this.editorObject.dispatchBeforeChange();
							this.setAtomSymbol(this.symbol, atom);
							this.editorObject.setModels(this.editorObject
									.getModels());
							this.editorObject.dispatchChange();
							return true;
						}
					}
				}, this)
		} else {
			this.createMolecule(kemia.controller.ReactionEditor
					.getMouseCoords(e));
			this.editorObject.setModels(this.editorObject.getModels());
			this.editorObject.dispatchChange();
			return true;
		}
	}
	return false;
};

kemia.controller.plugins.AtomEdit.prototype.highlightAtom = function(atom,
		opt_group) {
	// this.logger.info('highlightAtom');
	return this.editorObject.reactionRenderer.moleculeRenderer.atomRenderer
			.highlightOn(atom, 'purple', opt_group);
};

kemia.controller.plugins.AtomEdit.prototype.setAtomSymbol = function(symbol,
		atom) {
	var new_atom = new kemia.model.Atom(symbol, atom.coord.x, atom.coord.y);
	var molecule = atom.molecule
	goog.array.forEach(atom.bonds.getValues(), function(bond) {
		var new_bond = bond.clone();
		new_bond.molecule = undefined;
		atom == new_bond.source ? new_bond.source = new_atom
				: new_bond.target = new_atom;
		molecule.addBond(new_bond);
		molecule.removeBond(bond);
	});
	molecule.removeAtom(atom);
	molecule.addAtom(new_atom);
};

kemia.controller.plugins.AtomEdit.prototype.createMolecule = function(pos) {
	var coord = this.editorObject.reactionRenderer.transform.createInverse()
			.transformCoords( [ pos ])[0];
	var atom = new kemia.model.Atom(this.symbol, coord.x, coord.y);
	var molecule = new kemia.model.Molecule();
	molecule.addAtom(atom);

	var reaction;
	if (this.editorObject.getModels().length > 0) {
		reaction = this.editorObject.getModels()[0];
		reaction.addMolecule(molecule);
	}
};

/** @inheritDoc */
kemia.controller.plugins.AtomEdit.prototype.queryCommandValue = function(
		command) {
	if (command == kemia.controller.plugins.AtomEdit.COMMAND) {
		return this.symbol;
	}
};
