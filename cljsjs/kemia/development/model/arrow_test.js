goog.provide('kemia.model.ArrowTest');
goog.require('kemia.model.Arrow');
goog.require('goog.math.Coordinate');
goog.require('goog.testing.jsunit');


function testGetOrientation() {
	var arrow = new kemia.model.Arrow(
			new goog.math.Coordinate(0, 0),
			new goog.math.Coordinate(1, 0));
	var product_center = new goog.math.Coordinate(2, 0);
	assertEquals(kemia.model.Arrow.ORIENTATION.AHEAD, arrow
			.getOrientation(product_center));
	var reactant_center = new goog.math.Coordinate(-2, 0);
	assertEquals(kemia.model.Arrow.ORIENTATION.BEHIND, arrow.getOrientation(reactant_center));
}

function testGetCenter() {
	var arrow = new kemia.model.Arrow(
			new goog.math.Coordinate(0, 0),
			new goog.math.Coordinate(1, 0));
	var c = arrow.getCenter();
	assertEquals(0.5, c.x);
	assertEquals(0, c.y);
}