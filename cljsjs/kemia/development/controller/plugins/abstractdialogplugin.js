// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * @fileoverview An abstract superclass for TrogEdit dialog plugins. Each
 * Trogedit dialog has its own plugin.
 *
 */

goog.provide('kemia.controller.plugins.AbstractDialogPlugin');
goog.provide('kemia.controller.plugins.AbstractDialogPlugin.EventType');

goog.require('goog.dom');
goog.require('goog.dom.Range');
goog.require('goog.editor.Field.EventType');
goog.require('goog.editor.Plugin');
goog.require('goog.editor.range');
goog.require('goog.events');
goog.require('goog.ui.editor.AbstractDialog.EventType');


// *** Public interface ***************************************************** //

/**
 * An abstract superclass for a reaction editor plugin that creates exactly one
 * dialog. By default dialogs are not reused -- each time execCommand is called,
 * a new instance of the dialog object is created (and the old one disposed of).
 * To enable reusing of the dialog object, subclasses should call
 * setReuseDialog() after calling the superclass constructor.
 * @param {string} command The command that this plugin handles.
 * @constructor
 * @extends {goog.editor.Plugin}
 */
kemia.controller.plugins.AbstractDialogPlugin = function(command) {
  goog.editor.Plugin.call(this);
  this.command_ = command;
};
goog.inherits(kemia.controller.plugins.AbstractDialogPlugin, kemia.controller.Plugin);


/** @inheritDoc */
kemia.controller.plugins.AbstractDialogPlugin.prototype.isSupportedCommand =
    function(command) {
  return command == this.command_;
};


/**
 * Handles execCommand. Dialog plugins don't make any changes when they open a
 * dialog, just when the dialog closes (because only modal dialogs are
 * supported). Hence this method does not dispatch the change events that the
 * superclass method does.
 * @param {string} command The command to execute.
 * @param {..*} var_args Any additional parameters needed to
 *     execute the command.
 * @return {*} The result of the execCommand, if any.
 * @override
 */
kemia.controller.plugins.AbstractDialogPlugin.prototype.execCommand = function(
    command, var_args) {
  return this.execCommandInternal.apply(this, arguments);
};


// *** Events *************************************************************** //

/**
 * Event type constants for events the dialog plugins fire.
 * @enum {string}
 */
kemia.controller.plugins.AbstractDialogPlugin.EventType = {
  // This event is fired when a dialog has been opened.
  OPENED: 'dialogOpened',
  // This event is fired when a dialog has been closed.
  CLOSED: 'dialogClosed'
};


// *** Protected interface ************************************************** //

/**
 * Creates a new instance of this plugin's dialog. Must be overridden by
 * subclasses.
 * @param {!goog.dom.DomHelper} dialogDomHelper The dom helper to be used to
 *     create the dialog.
 * @param {*=} opt_arg The dialog specific argument. Concrete subclasses should
 *     declare a specific type.
 * @return {goog.ui.editor.AbstractDialog} The newly created dialog.
 * @protected
 */
kemia.controller.plugins.AbstractDialogPlugin.prototype.createDialog =
    goog.abstractMethod;

/**
 * Returns the current dialog that was created and opened by this plugin.
 * @return {goog.ui.editor.AbstractDialog} The current dialog that was created
 *     and opened by this plugin.
 * @protected
 */
kemia.controller.plugins.AbstractDialogPlugin.prototype.getDialog = function() {
  return this.dialog_;
};

/**
 * Sets whether this plugin should reuse the same instance of the dialog each
 * time execCommand is called or create a new one. This is intended for use by
 * subclasses only, hence protected.
 * @param {boolean} reuse Whether to reuse the dialog.
 * @protected
 */
kemia.controller.plugins.AbstractDialogPlugin.prototype.setReuseDialog =
    function(reuse) {
  this.reuseDialog_ = reuse;
};


/**
 * Handles execCommand by opening the dialog. Dispatches
 * {@link kemia.controller.plugins.AbstractDialogPlugin.EventType.OPENED} after the
 * dialog is shown.
 * @param {string} command The command to execute.
 * @param {*=} opt_arg The dialog specific argument. Should be the same as
 *     {@link createDialog}.
 * @return {*} Always returns true, indicating the dialog was shown.
 * @protected
 * @override
 */
kemia.controller.plugins.AbstractDialogPlugin.prototype.execCommandInternal =
    function(command, opt_arg) {
  // If this plugin should not reuse dialog instances, first dispose of the
  // previous dialog.
  if (!this.reuseDialog_) {
    this.disposeDialog_();
  }
  // If there is no dialog yet (or we aren't reusing the previous one), create
  // one.
  if (!this.dialog_) {
    this.dialog_ = this.createDialog(
        // TODO: Add Field.getAppDomHelper. (Note dom helper will
        // need to be updated if setAppWindow is called by clients.)
        goog.dom.getDomHelper(this.fieldObject.getAppWindow()),
        opt_arg);
  }

  // Listen for the dialog closing so we can clean up.
  goog.events.listenOnce(this.dialog_,
      goog.ui.editor.AbstractDialog.EventType.AFTER_HIDE,
      this.handleAfterHide,
      false,
      this);

  this.editorObject.setModalMode(true);
  this.dialog_.show();
  this.dispatchEvent(kemia.controller.plugins.AbstractDialogPlugin.EventType.OPENED);

  return true;
};


/**
 * Cleans up after the dialog has closed, including restoring the selection to
 * what it was before the dialog was opened. If a subclass modifies the editable
 * field's content such that the original selection is no longer valid (usually
 * the case when the user clicks OK, and sometimes also on Cancel), it is that
 * subclass' responsibility to place the selection in the desired place during
 * the OK or Cancel (or other) handler. In that case, this method will leave the
 * selection in place.
 * @param {goog.events.Event} e The AFTER_HIDE event object.
 * @protected
 */
kemia.controller.plugins.AbstractDialogPlugin.prototype.handleAfterHide = function(
    e) {
  this.editorObject.setModalMode(false);

  if (!this.reuseDialog_) {
    this.disposeDialog_();
  }

  this.dispatchEvent(kemia.controller.plugins.AbstractDialogPlugin.EventType.CLOSED);
};


/** @inheritDoc */
kemia.controller.plugins.AbstractDialogPlugin.prototype.disposeInternal =
    function() {
  this.disposeDialog_();
  goog.base(this, 'disposeInternal');
};


// *** Private implementation *********************************************** //

/**
 * The command that this plugin handles.
 * @type {string}
 * @private
 */
kemia.controller.plugins.AbstractDialogPlugin.prototype.command_;

/**
 * The current dialog that was created and opened by this plugin.
 * @type {goog.ui.editor.AbstractDialog}
 * @private
 */
kemia.controller.plugins.AbstractDialogPlugin.prototype.dialog_;

/**
 * Whether this plugin should reuse the same instance of the dialog each time
 * execCommand is called or create a new one.
 * @type {boolean}
 * @private
 */
kemia.controller.plugins.AbstractDialogPlugin.prototype.reuseDialog_ = false;

/**
 * Mutex to prevent recursive calls to disposeDialog_.
 * @type {boolean}
 * @private
 */
kemia.controller.plugins.AbstractDialogPlugin.prototype.isDisposingDialog_ = false;

/**
 * Disposes of the dialog if needed. It is this abstract class' responsibility
 * to dispose of the dialog. The "if needed" refers to the fact this method
 * might be called twice (nested calls, not sequential) in the dispose flow, so
 * if the dialog was already disposed once it should not be disposed again.
 * @private
 */
kemia.controller.plugins.AbstractDialogPlugin.prototype.disposeDialog_ = function() {
  // Wrap disposing the dialog in a mutex. Otherwise disposing it would cause it
  // to get hidden (if it is still open) and fire AFTER_HIDE, which in
  // turn would cause the dialog to be disposed again (closure only flags an
  // object as disposed after the dispose call chain completes, so it doesn't
  // prevent recursive dispose calls).
  if (this.dialog_ && !this.isDisposingDialog_) {
    this.isDisposingDialog_ = true;
    this.dialog_.dispose();
    this.dialog_ = null;
    this.isDisposingDialog_ = false;
  }
};
