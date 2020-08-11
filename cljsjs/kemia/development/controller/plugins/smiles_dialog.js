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
goog.provide("kemia.controller.plugins.SmilesDialog");
goog.require("goog.ui.editor.AbstractDialog");

/**
 * Creates a dialog for the user to enter the SMILES of a compound to insert.
 * 
 * @param {goog.dom.DomHelper}
 *            dom DomHelper to be used to create the dialog's DOM structure.
 * @constructor
 * @extends {goog.ui.editor.AbstractDialog}
 */
kemia.controller.plugins.SmilesDialog = function(dom) {
	kemia.controller.plugins.AbstractDialog.call(this, dom);
};
goog.inherits(kemia.controller.plugins.SmilesDialog,
		kemia.controller.plugins.AbstractDialog);

/** @inheritDoc */
kemia.controller.plugins.SmilesDialog.prototype.createDialogControl = function() {
	var builder = new kemia.controller.plugins.AbstractDialog.Builder(this);
	/** @desc Title of the dialog. */
	var MSG_EXAMPLE_DIALOG_TITLE = goog.getMsg('Paste SMILES');
	// Add a custom title and content.
	builder.setTitle(MSG_EXAMPLE_DIALOG_TITLE)
			.setContent(this.createContent_());
	return builder.build();
};
/**
 * Input element where the user will type the image URL.
 * 
 * @type {Element}
 * @private
 */
kemia.controller.plugins.SmilesDialog.prototype.input_;
/**
 * Creates the DOM structure that makes up the dialog's content area.
 * 
 * @return {Element} The DOM structure that makes up the dialog's content area.
 * @private
 */
kemia.controller.plugins.SmilesDialog.prototype.createContent_ = function() {
	this.input_ = this.dom.$dom(goog.dom.TagName.INPUT, {
		size : 25,
		value : 'http://'
	});
	/** @desc Prompt telling the user to enter a url */
	var MSG_EXAMPLE_DIALOG_PROMPT = goog
			.getMsg('Enter the SMILES for the structure to paste into drawing');
	return this.dom.$dom(goog.dom.TagName.DIV, null, [
			MSG_EXAMPLE_DIALOG_PROMPT, this.input_ ]);
};

/**
 * Returns the image URL typed into the dialog's input.
 * 
 * @return {?string} The SMILES currently typed into the dialog's input.
 * @private
 */
kemia.controller.plugins.SmilesDialog.prototype.getSmiles_ = function() {
	return this.input_ && this.input_.value;
};

/**
 * Creates and returns the event object to be used when dispatching the OK event
 * to listeners, or returns null to prevent the dialog from closing.
 * 
 * @param {goog.events.Event}
 *            e The event object dispatched by the wrapped dialog.
 * @return {goog.events.Event} The event object to be used when dispatching the
 *         OK event to listeners.
 * @protected
 * @override
 */
kemia.controller.plugins.SmilesDialog.prototype.createOkEvent = function(e) {
	var smiles = this.getSmiles_();
	if (smiles) {
		var event = new goog.events.Event(
				kemia.controller.plugins.AbstractDialog.EventType.OK);
		// Add the SMILES to the event.
		event.smiles = smiles;
		return event;
	} else {
		/** @desc Error message telling the user why their input was rejected. */
		var MSG_EXAMPLE_DIALOG_ERROR = goog
				.getMsg('You must input a SMILES');
		this.dom.getWindow().alert(MSG_EXAMPLE_DIALOG_ERROR);
		return null; // Prevents the dialog from closing.
	}
};
