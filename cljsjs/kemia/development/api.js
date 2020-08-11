goog.require('goog.dom');
goog.require('goog.ui.Prompt');
goog.require('goog.ui.Select');
goog.require('goog.ui.MenuItem');
goog.require('kemia.controller.DefaultToolbar');
goog.require('kemia.controller.ToolbarController');
goog.require('kemia.io.mdl');
goog.require('kemia.io.smiles.SmilesParser');
goog.require('goog.debug.Console');
goog.require('kemia.layout.CoordinateGenerator');

// utilities
goog.exportSymbol("goog.dom.getElement", goog.dom.getElement);
goog.exportSymbol("goog.dom.setTextContent", goog.dom.setTextContent);
goog.exportSymbol("goog.ui.Prompt", goog.ui.Prompt);
goog.exportSymbol("goog.ui.Prompt.prototype.setDefaultValue", goog.ui.Prompt.prototype.setDefaultValue);
goog.exportSymbol("goog.ui.Prompt.prototype.setVisible", goog.ui.Prompt.prototype.setVisible);
goog.exportSymbol("goog.now", goog.now);
goog.exportSymbol('goog.debug.Console', goog.debug.Console);
goog.exportSymbol('goog.debug.Console.prototype.setCapturing', goog.debug.Console.prototype.setCapturing);
goog.exportSymbol('goog.ui.Select', goog.ui.Select);
goog.exportSymbol('goog.ui.Select.prototype.addItem', goog.ui.Select.prototype.addItem);
goog.exportSymbol('goog.ui.Select.prototype.setSelectedIndex',goog.ui.Select.prototype.setSelectedIndex);
goog.exportSymbol('goog.ui.Select.prototype.render',goog.ui.Select.prototype.render);
goog.exportSymbol('goog.ui.Select.prototype.getValue',goog.ui.Select.prototype.getValue);
goog.exportSymbol('goog.ui.MenuItem', goog.ui.MenuItem);
goog.exportSymbol('goog.ui.Component.EventType.ACTION', goog.ui.Component.EventType.ACTION);
goog.exportSymbol('goog.events.EventType.LOAD', goog.events.EventType.LOAD);
goog.exportSymbol('goog.events.listen', goog.events.listen);

// io
goog.exportSymbol('kemia.io.json.readMolecule', kemia.io.json.readMolecule);
goog.exportSymbol('kemia.io.json.writeMolecule', kemia.io.json.writeMolecule);
goog.exportSymbol('kemia.io.json.readReaction', kemia.io.json.readReaction);
goog.exportSymbol('kemia.io.json.writeReaction', kemia.io.json.writeReaction);
goog.exportSymbol('kemia.io.mdl.readMolfile', kemia.io.mdl.readMolfile);
goog.exportSymbol('kemia.io.smiles.SmilesParser.parse',
		kemia.io.smiles.SmilesParser.parse);

//layout
goog.exportSymbol('kemia.layout.CoordinateGenerator.generate', kemia.layout.CoordinateGenerator.generate);


// editor
goog.exportSymbol('kemia.controller.ReactionEditor',
		kemia.controller.ReactionEditor);
goog.exportSymbol('kemia.controller.ReactionEditor.prototype.setModels',
		kemia.controller.ReactionEditor.prototype.setModels);
goog.exportSymbol('kemia.controller.ReactionEditor.prototype.render',
		kemia.controller.ReactionEditor.prototype.render);
goog.exportSymbol('kemia.controller.ReactionEditor.prototype.registerPlugin',
		kemia.controller.ReactionEditor.prototype.registerPlugin);

// toolbar
goog.exportSymbol("kemia.controller.ToolbarController", kemia.controller.ToolbarController);
goog.exportSymbol('kemia.controller.DefaultToolbar.makeDefaultMoleculeToolbar', kemia.controller.DefaultToolbar.makeDefaultMoleculeToolbar);

// plugins
goog.exportSymbol("kemia.controller.plugins.ArrowPlusEdit",
		kemia.controller.plugins.ArrowPlusEdit);
goog.exportSymbol("kemia.controller.DefaultToolbar.makeDefaultToolbar",
		kemia.controller.DefaultToolbar.makeDefaultToolbar);
goog.exportSymbol("kemia.controller.DefaultToolbar.makeDefaultReactionToolbar",
		kemia.controller.DefaultToolbar.makeDefaultReactionToolbar);
goog.exportSymbol('kemia.controller.plugins.AtomEdit',
		kemia.controller.plugins.AtomEdit);
goog.exportSymbol('kemia.controller.plugins.BondEdit',
		kemia.controller.plugins.BondEdit);
goog.exportSymbol('kemia.controller.plugins.Cleanup',
		kemia.controller.plugins.Cleanup);
goog.exportSymbol('kemia.controller.plugins.ClearEditor',
		kemia.controller.plugins.ClearEditor);
goog.exportSymbol('kemia.controller.plugins.Erase',
		kemia.controller.plugins.Erase);
goog.exportSymbol('kemia.controller.plugins.MoleculeEdit',
		kemia.controller.plugins.MoleculeEdit);
goog.exportSymbol('kemia.controller.plugins.Move',
		kemia.controller.plugins.Move);
goog.exportSymbol('kemia.controller.plugins.UndoRedo',
		kemia.controller.plugins.UndoRedo);
goog.exportSymbol('kemia.controller.plugins.Zoom',
		kemia.controller.plugins.Zoom);
