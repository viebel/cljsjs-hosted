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

goog.require('goog.dom.Range');
goog.require('kemia.controller.ReactionEditor');
goog.require('kemia.controller.Plugin');
goog.require('goog.events');
goog.require('goog.events.KeyCodes');
goog.require('goog.functions');
goog.require('goog.testing.LooseMock');
goog.require('goog.testing.MockClock');
goog.require('goog.testing.dom');
goog.require('goog.testing.jsunit');
goog.require('goog.testing.recordFunction');
goog.require('goog.userAgent');

var HTML;

function setUp() {
	HTML = goog.dom.getElement('parent').innerHTML;
}

function tearDown() {
	goog.dom.getElement('parent').innerHTML = HTML;

	try {
		goog.events.removeAll();
	} catch (e) {
	}
}

// Tests for the plugin interface.

/**
 * Dummy plugin for test usage.
 * 
 * @constructor
 * @extends {kemia.controller.Plugin}
 */
function TestPlugin() {
	this.getTrogClassId = function() {
		return 'TestPlugin';
	};

	this.handleKeyDown = goog.nullFunction;
	this.handleKeyPress = goog.nullFunction;
	this.handleKeyUp = goog.nullFunction;
	this.handleKeyboardShortcut = goog.nullFunction;
	this.isSupportedCommand = goog.nullFunction;
	this.execCommandInternal = goog.nullFunction;
	this.queryCommandValue = goog.nullFunction;
	this.activeOnUneditableFields = goog.nullFunction;
	this.handleSelectionChange = goog.nullFunction;
}
goog.inherits(TestPlugin, kemia.controller.Plugin);

/**
 * Tests that calling registerPlugin will add the plugin to the plugin map.
 */

function testRegisterPlugin() {
	var editor = new kemia.controller.ReactionEditor(goog.dom
			.getElement('testEditor'));
	var plugin = new TestPlugin();

	editor.registerPlugin(plugin);

	assertEquals('Registered plugin must be in protected plugin map.', plugin,
			editor.plugins_[plugin.getTrogClassId()]);
	assertEquals('Plugin has a keydown handler, should be in keydown map',
			plugin,
			editor.indexedPlugins_[kemia.controller.Plugin.Op.KEYDOWN][0]);
	assertEquals('Plugin has a keypress handler, should be in keypress map',
			plugin,
			editor.indexedPlugins_[kemia.controller.Plugin.Op.KEYPRESS][0]);
	assertEquals('Plugin has a keyup handler, should be in keuup map', plugin,
			editor.indexedPlugins_[kemia.controller.Plugin.Op.KEYUP][0]);
	assertEquals(
			'Plugin has a selectionchange handler, should be in selectionchange map',
			plugin,
			editor.indexedPlugins_[kemia.controller.Plugin.Op.SELECTION][0]);
	assertEquals('Plugin has a shortcut handler, should be in shortcut map',
			plugin,
			editor.indexedPlugins_[kemia.controller.Plugin.Op.SHORTCUT][0]);
	assertEquals('Plugin has a execCommand, should be in execCommand map',
			plugin,
			editor.indexedPlugins_[kemia.controller.Plugin.Op.EXEC_COMMAND][0]);
	assertEquals('Plugin has a queryCommand, should be in queryCommand map',
			plugin,
			editor.indexedPlugins_[kemia.controller.Plugin.Op.QUERY_COMMAND][0]);

	editor.dispose();
}

/**
 * Tests that calling unregisterPlugin will remove the plugin from the map.
 */
function testUnregisterPlugin() {
	var editor = new kemia.controller.ReactionEditor(goog.dom
			.getElement('testEditor'));
	var plugin = new TestPlugin();

	editor.registerPlugin(plugin);
	editor.unregisterPlugin(plugin);

	assertUndefined('Unregistered plugin must not be in protected plugin map.',
			editor.plugins_[plugin.getTrogClassId()]);

	editor.dispose();
}

/**
 * Tests that registered plugins can be fetched by their id.
 */
function testGetPluginByClassId() {
	var editor = new kemia.controller.ReactionEditor(goog.dom
			.getElement('testEditor'));
	var plugin = new TestPlugin();

	assertUndefined(
			'Must not be able to get unregistered plugins by class id.', editor
					.getPluginByClassId(plugin.getTrogClassId()));

	editor.registerPlugin(plugin);
	assertEquals('Must be able to get registered plugins by class id.', plugin,
			editor.getPluginByClassId(plugin.getTrogClassId()));
	editor.dispose();
}

/**
 * Tests that plugins get auto disposed by default when the field is disposed.
 * Tests that plugins with setAutoDispose(false) do not get disposed when the
 * field is disposed.
 */
function testDisposed_PluginAutoDispose() {
	var editor = new kemia.controller.ReactionEditor(goog.dom
			.getElement('testEditor'));
	var plugin = new TestPlugin();

	var noDisposePlugin = new kemia.controller.Plugin();
	noDisposePlugin.getTrogClassId = function() {
		return 'noDisposeId';
	};
	noDisposePlugin.setAutoDispose(false);

	editor.registerPlugin(plugin);
	editor.registerPlugin(noDisposePlugin);
	editor.dispose();
	assert(editor.isDisposed());
	assertTrue(plugin.isDisposed());
	assertFalse(noDisposePlugin.isDisposed());
}

var STRING_KEY = String.fromCharCode(goog.events.KeyCodes.A).toLowerCase();

/**
 * @return {goog.events.Event} Returns an event for a keyboard shortcut for the
 *         letter 'a'
 */
function getBrowserEvent() {
	var e = new goog.events.BrowserEvent();
	e.ctrlKey = true;
	e.metaKey = true;
	e.charCode = goog.events.KeyCodes.A;
	return e;
}

/**
 * Test that if a plugin has an execCommand function, it gets called but only
 * for supported commands.
 */
function testPluginExecCommand() {
	var plugin = new TestPlugin();
	var passedCommand, passedArg;
	plugin.execCommand = function(command, arg) {
		passedCommand = command;
		passedArg = arg;
	}

	var editor = new kemia.controller.ReactionEditor(goog.dom
			.getElement('testEditor'));
	editor.registerPlugin(plugin);
	plugin.enable(editor);
	plugin.isSupportedCommand = goog.functions.constant(true);

	editor.execCommand('+indent', true);
	// Verify that the plugin's execCommand was called with the correct
	// args.
	assertEquals('+indent', passedCommand);
	assertTrue(passedArg);

	passedCommand = null;
	passedArg = null;
	plugin.isSupportedCommand = goog.functions.constant(false);

	editor.execCommand('+outdent', false);
	// Verify that a plugin's execCommand is not called if it isn't a supported
	// command.
	assertNull(passedCommand);
	assertNull(passedArg);

	editor.dispose();
	plugin.dispose();
}

/**
 * Test that if one plugin supports execCommand, no other plugins get a chance
 * to handle the execComand.
 */
function testSupportedExecCommand() {
	var editor = new kemia.controller.ReactionEditor(goog.dom
			.getElement('testEditor'));
	var plugin = new TestPlugin();

	var mockPlugin1 = new goog.testing.LooseMock(plugin);
	mockPlugin1.getTrogClassId().$returns('mockPlugin1');
	mockPlugin1.registerEditorObject(editor);
	mockPlugin1.enable(editor);
	mockPlugin1.isEnabled(editor).$anyTimes().$returns(true);
	mockPlugin1.isSupportedCommand('+indent').$returns(true);
	mockPlugin1.execCommandInternal('+indent').$returns(true);
	mockPlugin1.execCommand('+indent').$does(function() {
		mockPlugin1.execCommandInternal('+indent');
	});
	mockPlugin1.$replay();

	var mockPlugin2 = new goog.testing.LooseMock(plugin);
	mockPlugin2.getTrogClassId().$returns('mockPlugin2');
	mockPlugin2.registerEditorObject(editor);
	mockPlugin2.enable(editor);
	mockPlugin2.isEnabled(editor).$anyTimes().$returns(true);
	mockPlugin2.$replay();

	editor.registerPlugin(mockPlugin1);
	editor.registerPlugin(mockPlugin2);

	editor.execCommand('+indent');

	mockPlugin1.$verify();
	mockPlugin2.$verify();
}

/**
 * Test that if the first plugin does not support execCommand, the other plugins
 * get a chance to handle the execCommand.
 */
function testNotSupportedExecCommand() {
	var editor = new kemia.controller.ReactionEditor(goog.dom
			.getElement('testEditor'));
	var plugin = new TestPlugin();

	var mockPlugin1 = new goog.testing.LooseMock(plugin);
	mockPlugin1.getTrogClassId().$returns('mockPlugin1');
	mockPlugin1.registerEditorObject(editor);
	mockPlugin1.enable(editor);
	mockPlugin1.isEnabled(editor).$anyTimes().$returns(true);
	mockPlugin1.isSupportedCommand('+indent').$returns(false);
	mockPlugin1.$replay();

	var mockPlugin2 = new goog.testing.LooseMock(plugin);
	mockPlugin2.getTrogClassId().$returns('mockPlugin2');
	mockPlugin2.registerEditorObject(editor);
	mockPlugin2.enable(editor);
	mockPlugin2.isEnabled(editor).$anyTimes().$returns(true);
	mockPlugin2.isSupportedCommand('+indent').$returns(true);
	mockPlugin2.execCommandInternal('+indent').$returns(true);
	mockPlugin2.execCommand('+indent').$does(function() {
		mockPlugin2.execCommandInternal('+indent');
	});
	mockPlugin2.$replay();

	editor.registerPlugin(mockPlugin1);
	editor.registerPlugin(mockPlugin2);

	editor.execCommand('+indent');

	mockPlugin1.$verify();
	mockPlugin2.$verify();
}

/**
 * Tests that if a plugin supports a command that its queryCommandValue gets
 * called and no further plugins can handle the queryCommandValue.
 */
function testSupportedQueryCommand() {
	var editor = new kemia.controller.ReactionEditor(goog.dom
			.getElement('testEditor'));
	var plugin = new TestPlugin();

	var mockPlugin1 = new goog.testing.LooseMock(plugin);
	mockPlugin1.getTrogClassId().$returns('mockPlugin1');
	mockPlugin1.registerEditorObject(editor);
	mockPlugin1.enable(editor);
	mockPlugin1.isEnabled(editor).$anyTimes().$returns(true);
	mockPlugin1.isSupportedCommand('+indent').$returns(true);
	mockPlugin1.queryCommandValue('+indent').$returns(true);

	mockPlugin1.$replay();

	var mockPlugin2 = new goog.testing.LooseMock(plugin);
	mockPlugin2.getTrogClassId().$returns('mockPlugin2');
	mockPlugin2.registerEditorObject(editor);
	mockPlugin2.enable(editor);
	mockPlugin2.isEnabled(editor).$anyTimes().$returns(true);
	mockPlugin2.$replay();

	editor.registerPlugin(mockPlugin1);
	editor.registerPlugin(mockPlugin2);

	editor.queryCommandValue('+indent');

	mockPlugin1.$verify();
	mockPlugin2.$verify();
}

/**
 * Tests that if a plugin handles selectionChange that it gets called and no
 * further plugins can handle the selectionChange.
 */
function testHandledSelectionChange() {
	var editor = new kemia.controller.ReactionEditor(goog.dom
			.getElement('testEditor'));
	var plugin = new TestPlugin();
	var e = getBrowserEvent();

	var mockPlugin1 = new goog.testing.LooseMock(plugin);
	mockPlugin1.getTrogClassId().$returns('mockPlugin1');
	mockPlugin1.registerEditorObject(editor);
	mockPlugin1.enable(editor);
	mockPlugin1.isEnabled(editor).$anyTimes().$returns(true);
	mockPlugin1.handleSelectionChange(e).$returns(true);
	mockPlugin1.$replay();

	var mockPlugin2 = new goog.testing.LooseMock(plugin);
	mockPlugin2.getTrogClassId().$returns('mockPlugin2');
	mockPlugin2.registerEditorObject(editor);
	mockPlugin2.enable(editor);
	mockPlugin2.isEnabled(editor).$anyTimes().$returns(true);
	mockPlugin2.$replay();

	editor.registerPlugin(mockPlugin1);
	editor.registerPlugin(mockPlugin2);

	editor.dispatchSelectionChangeEvent(e);

	mockPlugin1.$verify();
	mockPlugin2.$verify();
}

/**
 * Tests that if the first plugin does not handle selectionChange that the next
 * plugin gets a chance to handle it.
 */
function testNotHandledSelectionChange() {
	var editor = new kemia.controller.ReactionEditor(goog.dom
			.getElement('testEditor'));
	var plugin = new TestPlugin();
	var e = getBrowserEvent();

	var mockPlugin1 = new goog.testing.LooseMock(plugin);
	mockPlugin1.getTrogClassId().$returns('mockPlugin1');
	mockPlugin1.registerEditorObject(editor);
	mockPlugin1.enable(editor);
	mockPlugin1.isEnabled(editor).$anyTimes().$returns(true);
	mockPlugin1.handleSelectionChange(e).$returns(false);
	mockPlugin1.$replay();

	var mockPlugin2 = new goog.testing.LooseMock(plugin);
	mockPlugin2.getTrogClassId().$returns('mockPlugin2');
	mockPlugin2.registerEditorObject(editor);
	mockPlugin2.enable(editor);
	mockPlugin2.isEnabled(editor).$anyTimes().$returns(true);
	mockPlugin2.handleSelectionChange(e).$returns(true);
	mockPlugin2.$replay();

	editor.registerPlugin(mockPlugin1);
	editor.registerPlugin(mockPlugin2);

	editor.dispatchSelectionChangeEvent(e);

	mockPlugin1.$verify();
	mockPlugin2.$verify();
}
