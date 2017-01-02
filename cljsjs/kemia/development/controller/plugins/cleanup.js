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
goog.provide('kemia.controller.plugins.Cleanup');
goog.require('goog.debug.Logger');
goog.require('kemia.layout.CoordinateGenerator');
goog.require('kemia.model.Reaction');
goog.require('goog.math.Vec2');
/**
 * @constructor
 * @extends{kemian.controller.Plugin}s
 */
kemia.controller.plugins.Cleanup = function() {
	kemia.controller.Plugin.call(this);
}
goog.inherits(kemia.controller.plugins.Cleanup, kemia.controller.Plugin);

/**
 * Commands implemented by this plugin.
 * 
 * @enum {string}
 */
kemia.controller.plugins.Cleanup.COMMAND = "cleanup";

/** @inheritDoc */
kemia.controller.plugins.Cleanup.prototype.getTrogClassId = goog.functions
		.constant(kemia.controller.plugins.Cleanup.COMMAND);

/** @inheritDoc */
kemia.controller.plugins.Cleanup.prototype.isSupportedCommand = function(
		command) {
	return command == kemia.controller.plugins.Cleanup.COMMAND;
};

/** @inheritDoc */
kemia.controller.plugins.Cleanup.prototype.execCommand = function(command,
		var_args) {
	try {
		this.editorObject.dispatchBeforeChange();
		var models = this.editorObject.getModels();
		goog.array.forEach(models, function(model) {
			if (model instanceof kemia.model.Molecule) {
				var molecule = model;
				kemia.layout.CoordinateGenerator.generate(molecule);
			} else if (model instanceof kemia.model.Reaction) {
				var reaction = model;
				goog.array.forEach(reaction.molecules, function(molecule) {
					// get position and orientation so we can restore it after coord gen
					var center = molecule.getCenter();
					var atom_coord = molecule.atoms[0].coord;
					var angle = goog.math.angle(center.x, center.y, atom_coord.x, atom_coord.y);

					kemia.layout.CoordinateGenerator.generate(molecule);
					
					// restore position an orientation
					var new_center = molecule.getCenter();
					atom_coord = molecule.atoms[0].coord;
					var new_angle  = goog.math.angle(new_center.x, new_center.y, atom_coord.x, atom_coord.y);
					molecule.rotate(goog.math.angleDifference(new_angle, angle));
					molecule.translate(goog.math.Vec2.difference(center, new_center));
					
					// force future ring recalc
					molecule.mustRecalcSSSR = true;
					
				}, this);

			}
		}, this);

		this.editorObject.setModels(this.editorObject.getModels());

	} catch (e) {
		this.logger.info(e);
	}
};

/**
 * The logger for this class.
 * 
 * @type {goog.debug.Logger}
 * @protected
 */
kemia.controller.plugins.Cleanup.prototype.logger = goog.debug.Logger
		.getLogger('kemia.controller.plugins.Cleanup');
