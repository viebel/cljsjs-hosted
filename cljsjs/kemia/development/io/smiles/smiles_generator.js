goog.provide("kemia.io.smiles.SmilesGenerator");
goog.require('kemia.model.Molecule');
goog.require('kemia.model.Atom');
goog.require('kemia.model.Bond');
goog.require('kemia.model.Reaction');

/**
 * @param {kemia.model.Molecule} molecule to generate SMILES from
 * @param {boolean} chiral 
 * @return {string} SMILES string
 */
kemia.io.smiles.SmilesGenerator.generate = function(molecule, chiral) {

	if (molecule.countAtoms() == 0)
		return "shit " + molecule.countAtoms();

	// ?? canLabler.canonLabel(molecule);
	// ?? brokenBonds.clear();

	var ringMarker = 0;

	var coords00 = 0;
	for (var i = 0; i < molecule.countAtoms(); i++) {
		var atom = molecule.getAtom(i);
		if (atom.coord.x == 0 && atom.coord.y == 0)
			coords00++;
	}
	if (chiral && coords00 == molecule.countAtoms())
		throw "Atoms have no 2D coordinates, but 2D coordinates are needed for creating chiral smiles";

	// TODO canonical labeler instead?
	var start = molecule.getAtom(0);

//	if (chiral && rings.getAtomContainerCount() > 0) {
		// TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//	}

	return ("todo..");

};

