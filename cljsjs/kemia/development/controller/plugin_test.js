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
goog.provide('kemia.controller.PluginTest');
goog.require('kemia.controller.ReactionEditor');
goog.require('kemia.controller.Plugin');
goog.require('goog.functions');
goog.require('goog.userAgent');
goog.require('goog.testing.StrictMock');
goog.require('goog.testing.jsunit');

var plugin;
var editorObject;

function setUp() {
	plugin = new kemia.controller.Plugin();
	editorObject = {};
}

function tearDown() {
	plugin.dispose();
}

function testRegistereditorObject() {
	plugin.registerEditorObject(editorObject);
	assertEquals('Register field object must be stored in protected field.',
			editorObject, plugin.editorObject);

	assertFalse('Newly registered plugin must not be enabled.', plugin
			.isEnabled(editorObject));
}

function testUnregistereditorObject() {
	plugin.registerEditorObject(editorObject);
	plugin.enable(editorObject);
	plugin.unregisterEditorObject(editorObject);

	assertNull('editorObject property must be undefined after '
			+ 'unregistering a field object.', plugin.editorObject);
	assertFalse('Unregistered field object must not be enabled', plugin
			.isEnabled(editorObject));
}

function testEnable() {
	plugin.registerEditorObject(editorObject);
	plugin.enable(editorObject);

	assertTrue(
			'Enabled field object must be enabled according to isEnabled().',
			plugin.isEnabled(editorObject));
}

function testDisable() {
	plugin.registerEditorObject(editorObject);
	plugin.enable(editorObject);
	plugin.disable(editorObject);

	assertFalse('Disabled field object must be disabled according to '
			+ 'isEnabled().', plugin.isEnabled(editorObject));
}

function testIsEnabled() {
	// Other base cases covered while testing enable() and disable().

	assertFalse('Unregistered field object must be disabled according '
			+ 'to isEnabled().', plugin.isEnabled(editorObject));
}

function testIsSupportedCommand() {
	assertFalse('Base plugin class must not support any commands.', plugin
			.isSupportedCommand('+indent'))
}

// function testExecCommand() {
// var mockField = new goog.testing.StrictMock(kemia.controller.ReactionEditor);
// plugin.registerEditorObject(mockField);
//
// mockField.dispatchBeforeChange();
// // NOTE: dispatch change turns back on (delayed) change events.
// mockField.dispatchChange();
// // mockField.dispatchSelectionChangeEvent();
// mockField.$replay();
//
// var passedCommand, passedArg;
// plugin.execCommandInternal = function(command, arg){
// passedCommand = command;
// passedArg = arg;
// };
// plugin.execCommand('clearEditor', true);
//
// // Verify that execCommand dispatched the expected events.
// mockField.$verify();
// mockField.$reset();
// // Verify that execCommandInternal was called with the correct arguments.
// assertEquals('clearEditor', passedCommand);
// assertTrue(passedArg);
//
// plugin.isSilentCommand = goog.functions.constant(true);
// mockField.$replay();
// plugin.execCommand('clearEditor', false);
// // Verify that execCommand on a silent plugin dispatched no events.
// mockField.$verify();
// // Verify that execCommandInternal was called with the correct arguments.
// assertEquals('clearEditor', passedCommand);
// assertFalse(passedArg);
// }

// function testExecCommandException() {
// var mockField = new goog.testing.StrictMock(kemia.controller.ReactionEditor);
// plugin.registerEditorObject(mockField);
// plugin.execCommandInternal = function() {
// throw 1;
// };

// 
// mockField.dispatchBeforeChange();
// // NOTE: dispatch change turns back on (delayed) change events.
// mockField.dispatchChange();
// // mockField.dispatchSelectionChangeEvent();
// mockField.$replay();
//
// assertThrows('Exception should not be swallowed', function() {
// plugin.execCommand();
// });
//
// // Verifies that cleanup is done despite the exception.
// mockField.$verify();
// }

function testDisposed() {
	plugin.registerEditorObject(editorObject);
	plugin.dispose();
	assert(plugin.getDisposed());
	assertNull('Disposed plugin must not have a field object.',
			plugin.editorObject);
	assertFalse('Disposed plugin must not have an enabled field object.',
			plugin.isEnabled(editorObject));
}

function testIsAndSetAutoDispose() {
	assertTrue('Plugin must start auto-disposable', plugin.isAutoDispose());

	plugin.setAutoDispose(false);
	assertFalse(plugin.isAutoDispose());

	plugin.setAutoDispose(true);
	assertTrue(plugin.isAutoDispose());
}
