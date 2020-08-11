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
 */
goog.provide("kemia.math.TriangleTest");
goog.require('kemia.math.Triangle');
goog.require('kemia.math.Line');
goog.require('goog.testing.jsunit');
goog.require('goog.debug.Logger');
goog.require('goog.debug.Console');
goog.require('goog.math.Vec2');


var testTriangleSignClockwise = function () {
	var a = new goog.math.Coordinate(0, 0);
	var b = new goog.math.Coordinate(0, 1);
	var c = new goog.math.Coordinate(1, 0);
	assertTrue(kemia.math.Triangle.signedArea(a, b, c) < 0);
}
var testTriangleSignCounterClockwise = function () {
	var a = new goog.math.Coordinate(0, 0);
	var b = new goog.math.Coordinate(0, 1);
	var c = new goog.math.Coordinate(1, 0);
	assertTrue(kemia.math.Triangle.signedArea(c, b, a) > 0);
}
var testTriangleSignColinear = function () {
	var a = new goog.math.Coordinate(1, 1);
	var b = new goog.math.Coordinate(2, 2);
	var c = new goog.math.Coordinate(3, 3);
	assertTrue(kemia.math.Triangle.signedArea(a, b, c) == 0);
}
