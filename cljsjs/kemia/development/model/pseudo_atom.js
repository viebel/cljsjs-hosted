
goog.provide('kemia.model.PseudoAtom');
goog.require('kemia.model.Atom');

/**
 * Class representing a pseudo atom (*, RGroup etc) 
 * 
 * @param {string}
 *            _label text label for the PseudoAtom (like R1, R10 or what u like) 
 * @param {number}
 *            x X-coordinate of atom.
 * @param {number}
 *            y Y-coordinate of atom.
 * @constructor
 * @extends {kemia.model.Atom}
 */

kemia.model.PseudoAtom=function(_label, x, y) {

	kemia.model.Atom.call(this,"R",x,y); //?

    this.label="";
    if (_label==null)
	   this.label="*";
	else
	   this.label = _label;
}

goog.inherits(kemia.model.PseudoAtom, kemia.model.Atom);  

