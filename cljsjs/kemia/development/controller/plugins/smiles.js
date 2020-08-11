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
goog.provide('kemia.controller.plugins.Smiles');

goog.require('kemia.controller.Plugin');
goog.require('goog.functions');
goog.require('goog.debug.Logger');
goog.require('kemia.controller.plugins.AbstractDialogPlugin');

/**
 * plugin for entering SMILES
 * 
 * @constructor
 * @extends {kemia.controller.Plugin}
 */
kemia.controller.plugins.Smiles = function() {
	kemia.controller.Plugin.call(this);
};
goog.inherits(kemia.controller.plugins.Smiles, kemia.controller.plugins.AbstractDialogPlugin);
 
/** @inheritDoc */
kemia.controller.plugins.Smiles.prototype.getTrogClassId = goog.functions
		.constant('kemia.controller.plugins.Smiles');

/**
 * Logging object.
 * 
 * @type {goog.debug.Logger}
 * @protected
 */
kemia.controller.plugins.Smiles.prototype.logger = goog.debug.Logger
		.getLogger('kemia.controller.plugins.Smiles');

/**
 * Command implemented by this plugin.
 */
kemia.controller.plugins.Smiles.COMMAND = 'paste_smiles';


