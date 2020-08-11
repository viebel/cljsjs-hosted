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
goog.provide('kemia.controller.plugins.ClearEditor');

goog.require('kemia.controller.Plugin');
goog.require('goog.functions');

/**
 * simple Plugin for clearing editor.
 * 
 * @constructor
 * @extends {kemia.controller.Plugin}
 */
kemia.controller.plugins.ClearEditor = function() {
	kemia.controller.Plugin.call(this);
};
goog.inherits(kemia.controller.plugins.ClearEditor, kemia.controller.Plugin);


/** The clear command. */
kemia.controller.plugins.ClearEditor.COMMAND = 'clearEditor';

/** @inheritDoc */
kemia.controller.plugins.ClearEditor.prototype.getTrogClassId = goog.functions
		.constant(kemia.controller.plugins.ClearEditor.COMMAND);

/** @inheritDoc */
kemia.controller.plugins.ClearEditor.prototype.isSupportedCommand = function(
		command) {
	return command == kemia.controller.plugins.ClearEditor.COMMAND;
};

/**
 * clears the editor.
 * 
 * @param {string}
 *            command Command to execute.
 * @return {Object|undefined} The result of the command.
 */
kemia.controller.plugins.ClearEditor.prototype.execCommandInternal = function(
		command) {
	try {
		this.editorObject.dispatchBeforeChange();
		this.editorObject.clear();

	} catch (e) {
		this.logger.info(e);
	}
};

/** @inheritDoc */
kemia.controller.plugins.ClearEditor.prototype.isSilentCommand = goog.functions.FALSE;
