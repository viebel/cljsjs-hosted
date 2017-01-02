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

goog.provide('kemia.controller.plugins.SelectorRectangle');
goog.require('kemia.controller.Plugin');
goog.require('goog.functions');
goog.require('goog.debug.Logger');


/**
 * simple Plugin for highlighting bonds and atoms
 *
 * @constructor
 * @extends {kemia.controller.Plugin}
 */
kemia.controller.plugins.SelectorRectangle = function() {
  kemia.controller.Plugin.call(this);
};
goog.inherits(kemia.controller.plugins.SelectorRectangle, kemia.controller.Plugin);
/**
 * Commands supported 
 * @enum {string}
 */
kemia.controller.plugins.SelectorRectangle.COMMAND = {
		MOUSEDOWN: 'mousedown',
		MOUSEUP: 'mouseup'
};

/**
 * Inverse map of execCommand strings to
 * {@link kemia.controller.plugins.SelectorRectangle.COMMAND} constants. Used to
 * determine whether a string corresponds to a command this plugin handles
 * @type {Object}
 * @private
 */
kemia.controller.plugins.SelectorRectangle.SUPPORTED_COMMANDS_ =
    goog.object.transpose(kemia.controller.plugins.SelectorRectangle.COMMAND);


/**
 * Whether the string corresponds to a command this plugin handles.
 * @param {string} command Command string to check.
 * @return {boolean} Whether the string corresponds to a command
 *     this plugin handles.
 */
kemia.controller.plugins.SelectorRectangle.prototype.isSupportedCommand =
    function(command) {
  return command in kemia.controller.plugins.SelectorRectangle.SUPPORTED_COMMANDS_;
};

/** @inheritDoc */
kemia.controller.plugins.SelectorRectangle.prototype.getTrogClassId =
    goog.functions.constant('kemia.controller.plugins.SelectorRectangle');

/**
 * Logging object.
 * 
 * @type {goog.debug.Logger}
 * @protected
 */
kemia.controller.plugins.SelectorRectangle.prototype.logger = goog.debug.Logger
		.getLogger('kemia.controller.plugins.SelectorRectangle');


kemia.controller.plugins.SelectorRectangle.prototype.handleMouseDown = function(e) {
	this.logger.info('handleMouseDown');
};


