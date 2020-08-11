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
goog.provide('kemia.controller.plugins.Erase');

goog.require('kemia.controller.Plugin');
goog.require('goog.debug.Logger');
goog.require('goog.functions');

/**
 * Plugin to provide functionality to erase drawing elements
 * 
 * @constructor
 * @extends{kemian.controller.Plugin}s
 */
kemia.controller.plugins.Erase = function() {
	kemia.controller.Plugin.call(this);
}
goog.inherits(kemia.controller.plugins.Erase, kemia.controller.Plugin);


/**
 * Command implemented by this plugin.
 */
kemia.controller.plugins.Erase.COMMAND = 'erase';

/** @inheritDoc */
kemia.controller.plugins.Erase.prototype.isSupportedCommand = function(command) {
	return command == kemia.controller.plugins.Erase.COMMAND;
};

/** @inheritDoc */
kemia.controller.plugins.Erase.prototype.getTrogClassId = goog.functions
		.constant(kemia.controller.plugins.Erase.COMMAND);

/**
 * The logger for this class.
 * 
 * @type {goog.debug.Logger}
 * @protected
 */
kemia.controller.plugins.Erase.prototype.logger = goog.debug.Logger
		.getLogger('kemia.controller.plugins.Erase');

/**
 * 
 * @param {string}
 *            command Command to execute.
 * @return {Object|undefined} The result of the command.
 */
kemia.controller.plugins.Erase.prototype.execCommandInternal = function(
		command, value, active) {
	// this.logger.info("active: " + active);
	this.isActive = active;
};

kemia.controller.plugins.Erase.CURSOR_STYLE = 'url("../../elements/images/erase-cursor-32.png") 0 32,  hand';

kemia.controller.plugins.Erase.prototype.handleMouseMove = function(e) {

	if (this.isActive) {
		var target = this.editorObject.findTarget(e);
		this.editorObject.getOriginalElement().style.cursor = 'default';
		if (e.currentTarget.highlightGroup) {
			e.currentTarget.highlightGroup.clear();
		}

		if (target instanceof kemia.model.Atom) {
			this.editorObject.getOriginalElement().style.cursor = kemia.controller.plugins.Erase.CURSOR_STYLE;
			if (!e.currentTarget.highlightGroup) {
				e.currentTarget.highlightGroup = this.highlightAtom(target);
			} else {
				e.currentTarget.highlightGroup = this.highlightAtom(target,
						e.currentTarget.highlightGroup);
			}
			return true;
		} else if (target instanceof kemia.model.Bond) {
			this.editorObject.getOriginalElement().style.cursor = kemia.controller.plugins.Erase.CURSOR_STYLE;
			if (!e.currentTarget.highlightGroup) {
				e.currentTarget.highlightGroup = this.highlightBond(target);
			} else {
				e.currentTarget.highlightGroup = this.highlightBond(target,
						e.currentTarget.highlightGroup);
			}
			return true;
		} else if (target instanceof kemia.model.Molecule) {
			this.editorObject.getOriginalElement().style.cursor = kemia.controller.plugins.Erase.CURSOR_STYLE;
			if (!e.currentTarget.highlightGroup) {
				e.currentTarget.highlightGroup = this.highlightMolecule(target);
			} else {
				e.currentTarget.highlightGroup = this.highlightMolecule(target,
						e.currentTarget.highlightGroup);
			}
			return true;
		} else if (target instanceof kemia.model.Plus) {
			this.editorObject.getOriginalElement().style.cursor = kemia.controller.plugins.Erase.CURSOR_STYLE;
			if (!e.currentTarget.highlightGroup) {
				e.currentTarget.highlightGroup = this.highlightPlus(target);
			} else {
				e.currentTarget.highlightGroup = this.highlightPlus(target,
						e.currentTarget.highlightGroup);
			}
			return true;
		} else if (target instanceof kemia.model.Arrow){
			this.editorObject.getOriginalElement().style.cursor = kemia.controller.plugins.Erase.CURSOR_STYLE;
			if (!e.currentTarget.hightlightGroup) {
				e.currentTarget.hightlightGroup = this.highlightArrow(target);
			} else {
				e.currentTarget.highlightGroup = this.highlightArrow(target, 
						e.currentTarget.highlightGroup);
			}
		} else {
			e.currentTarget.highlightGroup = undefined;
			return false;
		}
	}
	return false;

}

kemia.controller.plugins.Erase.prototype.handleMouseDown = function(e) {
	var result = false;
	if (this.isActive) {
		this.editorObject.dispatchBeforeChange();
		var target = this.editorObject.findTarget(e);
		if (target instanceof kemia.model.Atom) {
			this.eraseAtom(target);
			result = true;
		}
		if (target instanceof kemia.model.Bond) {
			this.eraseBond(target);
			result = true;
		}
		if (target instanceof kemia.model.Molecule) {
			this.eraseMolecule(target);
			result = true;
		}
		if (target instanceof kemia.model.Plus) {
			this.erasePlus(target);
			result = true;
		}
		if (target instanceof kemia.model.Arrow){
			this.eraseArrow(target);
			result = true;
		}
		this.editorObject.dispatchChange();
	}
	return result;
};

kemia.controller.plugins.Erase.prototype.eraseAtom = function(atom) {
	var molecule = atom.molecule;

	goog.array.forEach(atom.bonds.getValues(), function(bond) {
		molecule.removeBond(bond);
	});
	molecule.removeAtom(atom);
	if (molecule.atoms.length == 0) {
		molecule.reaction.removeMolecule(molecule);
	}
	this.editorObject.setModelsSilently(this.editorObject.getModels());
};

kemia.controller.plugins.Erase.prototype.eraseBond = function(bond) {
	var models = this.editorObject.getModels();
	var molecule = bond.molecule;
	molecule.removeBond(bond);
	var fragments = molecule.getFragments();
	this.logger.fine('fragements.length: ' + fragments.length);
	var reaction = molecule.reaction;
	if (reaction){
		reaction.removeMolecule(molecule);
		goog.array.forEach(fragments, function(mol) {
			reaction.addMolecule(mol);
		});
	} 
	this.editorObject.setModelsSilently(models);
};

kemia.controller.plugins.Erase.prototype.eraseMolecule = function(molecule) {
	var reaction = molecule.reaction;
	if(reaction){
		reaction.removeMolecule(molecule);
	} else {
		goog.array.remove(this.editorObject.getModels(), molecule);
	}
	this.editorObject.setModelsSilently(this.editorObject.getModels());
}

kemia.controller.plugins.Erase.prototype.erasePlus = function(plus) {
	var reaction = plus.reaction;
	reaction.removePlus(plus);
	this.editorObject.setModelsSilently(this.editorObject.getModels());
};

kemia.controller.plugins.Erase.prototype.eraseArrow = function(arrow) {
	var reaction = arrow.reaction;
	reaction.removeArrow(arrow);
	this.editorObject.setModelsSilently(this.editorObject.getModels());
};

/**
 * reset to default state called when another plugin is made active
 */
kemia.controller.plugins.Erase.prototype.resetState = function() {
	this.isActive = false;
	this.editorObject.getOriginalElement().style.cursor = "default";
}

/** @inheritDoc */
kemia.controller.plugins.Erase.prototype.queryCommandValue = function(command) {
	var state = null;
	if (command == kemia.controller.plugins.Erase.COMMAND) {
		state = this.isActive;
	}
	return state;
};

kemia.controller.plugins.Erase.prototype.highlightAtom = function(atom,
		opt_group) {
	// this.logger.info('highlightAtom');
	return this.editorObject.reactionRenderer.moleculeRenderer.atomRenderer
			.highlightOn(atom, '#ff6666', opt_group);
};

kemia.controller.plugins.Erase.prototype.highlightBond = function(bond,
		opt_group) {
	return this.editorObject.reactionRenderer.moleculeRenderer.bondRendererFactory
			.get(bond).highlightOn(bond, '#ff6666', opt_group);
};

kemia.controller.plugins.Erase.prototype.highlightPlus = function(plus,
		opt_group) {
	// this.logger.info('highlightPlus');
	return this.editorObject.reactionRenderer.plusRenderer.highlightOn(plus,
			'#ff6666', opt_group);
};

kemia.controller.plugins.Erase.prototype.highlightArrow = function(arrow, 
		opt_group) {
	return this.editorObject.reactionRenderer.arrowRenderer.highlightOn(arrow, 
			'#ff6666', opt_group);
};

kemia.controller.plugins.Erase.prototype.highlightMolecule = function(molecule,
		opt_group) {
	// this.logger.info('highlightPlus');
	return this.editorObject.reactionRenderer.moleculeRenderer.highlightOn(
			molecule, '#ff6666', opt_group);
}
