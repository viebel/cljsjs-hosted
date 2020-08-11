/**
 * Copyright 2010 Paul Novak (paul@wingu.com)
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
 * 
 * @author paul@wingu.com (Paul Novak)
 */
goog.provide('kemia.view.AtomRenderer');
goog.require('kemia.view.Renderer');
goog.require('goog.debug.Logger');

/**
 * Class to render an Atom object to a graphics representation
 * 
 * @param {goog.graphics.AbstractGraphics}
 *            graphics to draw on
 * @param {Object=}
 *            opt_config override default configuration
 * @constructor
 * @extends {kemia.view.Renderer}
 */
kemia.view.AtomRenderer = function(graphics, opt_config) {
	kemia.view.Renderer.call(this, graphics,
			kemia.view.AtomRenderer.defaultConfig, opt_config);
}
goog.inherits(kemia.view.AtomRenderer, kemia.view.Renderer);

/**
 * 
 * @param {kemia.model.Atom}
 *            atom
 * @param {kemia.graphics.AffineTransform}
 *            transform
 * @return {goog.graphics.GroupElement}
 */
kemia.view.AtomRenderer.prototype.render = function(atom, transform, opt_group) {

	this.setTransform(transform);

	var atom_config = this.config.get("atom");
	var color = this.config.get(atom.symbol) ? this.config.get(atom.symbol)['color']
			: atom_config['color'];

	var scale = transform.getScaleX();

	var fontSize = (scale / 1.8) > 12 ? 15 : (scale / 1.8);
	var font = new goog.graphics.Font(fontSize, atom_config['fontName']);
	var stroke = new goog.graphics.Stroke(atom_config['stroke']['width'],
			"black");

	var fill = new goog.graphics.SolidFill(color);

	var point = transform.transformCoords( [ atom.coord ])[0];
	var symbol = this.compoundSymbol(atom);
	var graphics = this.graphics;
	var w = symbol.text.length * 0.55 * font.size;
	var h = font.size;

	if (symbol.text) {
		graphics.drawText(symbol.text, point.x - w / 2, point.y - h / 2, w, h,
				symbol.justification, null, font, stroke, fill, opt_group);
		if (symbol.justification == 'left') {
			if (symbol.subscript || symbol.superscript) {
				var subSize = this.config.get("subscriptSize");
				if (symbol.subscript) {
					graphics.drawText(symbol.subscript, point.x + w * 0.9,
							point.y, subSize, subSize, 'center', null, font,
							stroke, fill, opt_group);
				}
				if (symbol.superscript) {
					graphics.drawText(symbol.superscript, point.x + w, point.y
							- h * 0.8, subSize, subSize, 'center', null, font,
							stroke, fill, opt_group);
				}
			}
		} else if (symbol.justification == 'right') {
			if (symbol.subscript || symbol.superscript) {
				var subSize = this.config.get("subscriptSize");
				if (symbol.subscript) {
					graphics.drawText('H', point.x - w * 3, point.y - h / 2, w,
							h, 'center', null, font, stroke, fill, opt_group);
					graphics.drawText(symbol.subscript, point.x - w * 1.8,
							point.y, subSize, subSize, 'center', null, font,
							stroke, fill, opt_group);
				}
				if (symbol.superscript) {
					graphics.drawText(symbol.superscript, point.x + w, point.y
							- h * 0.8, subSize, subSize, 'center', null, font,
							stroke, fill, opt_group);
				}
			}
		}
	}
};

/**
 * @param {kemia.model.Atom}
 *            atom
 * @param {string=}
 *            opt_color
 * @param {goog.graphics.Group=}
 *            opt_group
 */
kemia.view.AtomRenderer.prototype.highlightOn = function(atom, opt_color,
		opt_group) {
//	this.logger.fine('hightlightOn');
	var atom_config = this.config.get("atom");
	var strokeWidth = atom_config['stroke']['width'] * 24;
	if (!opt_color) {
		opt_color = this.config.get(atom.symbol) ? 
				this.config.get(atom.symbol)['color']: 
				atom_config['color'];
	}

	var stroke = null
	var fill = new goog.graphics.SolidFill(opt_color, .3);
	var radius = atom_config['highlight']['radius']
			* this.transform.getScaleX();
	var coords = this.transform.transformCoords( [ atom.coord ])[0];

	if (!opt_group) {
		opt_group = this.graphics.createGroup();
	}
	this.graphics.drawCircle(coords.x, coords.y, radius, stroke, fill,
			opt_group);

	return opt_group;
};

/**
 * return a compound symbol (e.g. NH, CH3), the plain symbol, or ""
 * 
 * @param{jchemhun.model.Atom} atom
 * @return {Object}
 */
kemia.view.AtomRenderer.prototype.compoundSymbol = function(atom) {
	var retval = {
		text : "",
		justification : 'center',
		superscript : '',
		subscript : ''
	};
	if (atom.symbol != "C" || 
			atom.countBonds() < 1 || 
			atom.charge || 
			(atom.countBonds()==1 && this.config.get("showTerminalCarbons"))) {
		
		// terminal atom may need compound atom name
		var hydrogen_count = atom.hydrogenCount();
		if (hydrogen_count == 0) {
			retval.text = atom.symbol;
			// could have H on left, depending on bond slope
		} else {
			var bond_direction = kemia.view.AtomRenderer.bondDirection(atom);
			var justification = 'center';
			if (bond_direction == "SW" || bond_direction == "W"
					|| bond_direction == "NW") {
				justification = 'right';
				if (hydrogen_count == 1)
					retval.text = 'H';
				retval.text += atom.symbol;
			} else {
				justification = 'left';
				retval.text = atom.symbol + 'H';
			}
			if (hydrogen_count > 1)
				retval.subscript = String(hydrogen_count);
		}
		if (atom.charge) {
			if (atom.charge > 1) {
				retval.superscript += '+' + atom.charge;
			} else if (atom.charge < -1) {
				retval.superscript += atom.charge;
			} else if (atom.charge == -1) {
				retval.superscript = '-';
			} else if (atom.charge == 1) {
				retval.superscript = '+';
			}
		}

	} else {
		retval.text = "";
	}
	retval.justification = justification;
	return retval;
};

/**
 * return an angle between 0 and 360 at which the i-th bond to this atom is
 * drawn
 * 
 * @param{integer} i-th bond to this atom
 * @return number
 */
kemia.view.AtomRenderer.bondOrientation = function(atom, i) {
	if (atom.bonds.getValues().length == 0) {
		return 0;
	}
	var bond = atom.bonds.getValues()[i];
	var target = bond.target.coord;
	var source = bond.source.coord;

	var dy = target.y - source.y;
	var dx = target.x - source.x;
	if (atom == bond.source) {
		dx = -dx;
		dy = -dy;
	}
	var angle = Math.atan2(dy, dx) * 180 / Math.PI;
	if (angle < 0)
		angle = 360 + angle; // now angle is 0 - 360
	return angle;
};

/**
 * returns the compass direction toward which to draw H atoms N NW NE W E SW SE
 * S
 * 
 * @param{kemia.model.Atom} atom
 * @return{String}
 */
kemia.view.AtomRenderer.bondDirection = function(atom) {
	var nbonds = atom.bonds.getCount();
	var angle = kemia.view.AtomRenderer.bondOrientation(atom, 0); // suffices
	// for
	// terminal
	// atoms
	if (nbonds > 1) {
		// find most open direction to show H atom
		for ( var i = 1; i < nbonds; ++i) {
			angle += kemia.view.AtomRenderer.bondOrientation(atom, i);
		}
		angle = (angle / nbonds) % 360;
	}

	if (angle > 350 || angle <= 10) {
		return "E";
	} else if (angle > 10 && angle <= 80) {
		return "SE";
	} else if (angle > 80 && angle <= 100) {
		return "S";
	} else if (angle > 100 && angle <= 170) {
		return "SW";
	} else if (angle > 170 && angle <= 190) {
		return "W";
	} else if (angle > 190 && angle <= 260) {
		return "NW";
	} else if (angle > 260 && angle <= 280) {
		return "N";
	} else {
		return "NE";
	}

};

/**
 * Logging object.
 * 
 * @type {goog.debug.Logger}
 * @protected
 */
kemia.view.AtomRenderer.prototype.logger = goog.debug.Logger
		.getLogger('kemia.view.AtomRenderer');

/**
 * A default configuration for renderer
 */
kemia.view.AtomRenderer.defaultConfig = {
	'atom' : {
		'color' : '#FF9999',
		'diameter' : .05,
		'highlight' : {
			'radius' : .3
		},
		'stroke' : {
			'width' : .15
		},
		'fontName' : "Arial"
	},
	'showTerminalCarbons' : true,
	'margin' : 20,
	'subscriptSize' : 5,
	'N' : {
		'color' : 'blue'
	},
	'O' : {

		'color' : 'red'

	},
	'S' : {

		'color' : 'yellow'

	},
	'P' : {

		'color' : 'orange'

	},
	'Cl' : {

		'color' : 'green'

	},
	'F' : {

		'color' : 'green'

	},
	'Br' : {

		'color' : 'DarkRed'

	},
	'I' : {

		'color' : 'purple'

	},
	'C' : {

		'color' : 'black'

	},
	'R1' : {

		'color' : 'black'

	},
	'R2' : {

		'color' : 'black'

	},
	'H' : {

		'color' : 'white'
	}
};
