// Copyright (c) 2016 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactVisForce"] = factory(require("react"));
	else
		root["ReactVisForce"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/react-vis-force/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	module.exports = __webpack_require__(13);


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _reactAddonsShallowCompare = __webpack_require__(29);
	
	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }var PureRenderComponent = function (_Component) {
	  _inherits(PureRenderComponent, _Component);
	
	  function PureRenderComponent() {
	    _classCallCheck(this, PureRenderComponent);
	
	    return _possibleConstructorReturn(this, (PureRenderComponent.__proto__ || Object.getPrototypeOf(PureRenderComponent)).apply(this, arguments));
	  }
	
	  _createClass(PureRenderComponent, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }]);
	
	  return PureRenderComponent;
	}(_react.Component);
	
	exports.default = PureRenderComponent;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PureRenderComponent2 = __webpack_require__(2);
	
	var _PureRenderComponent3 = _interopRequireDefault(_PureRenderComponent2);
	
	var _link = __webpack_require__(14);
	
	var _link2 = _interopRequireDefault(_link);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }var ForceGraphLink = function (_PureRenderComponent) {
	  _inherits(ForceGraphLink, _PureRenderComponent);
	
	  function ForceGraphLink() {
	    _classCallCheck(this, ForceGraphLink);
	
	    return _possibleConstructorReturn(this, (ForceGraphLink.__proto__ || Object.getPrototypeOf(ForceGraphLink)).apply(this, arguments));
	  }
	
	  _createClass(ForceGraphLink, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var link = _props.link;
	      var strokeWidth = _props.strokeWidth;
	      var className = _props.className;
	
	      var spreadable = _objectWithoutProperties(_props, ['link', 'strokeWidth', 'className']);
	
	      return _react2.default.createElement('line', _extends({
	        className: 'rv-force__link ' + className,
	        strokeWidth: strokeWidth || Math.sqrt(link.value)
	      }, spreadable));
	    }
	  }], [{
	    key: 'propTypes',
	    get: function get() {
	      return {
	        link: _link2.default.isRequired
	      };
	    }
	  }, {
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        className: '',
	        opacity: 0.6,
	        stroke: '#999'
	      };
	    }
	  }]);
	
	  return ForceGraphLink;
	}(_PureRenderComponent3.default);
	
	exports.default = ForceGraphLink;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PureRenderComponent2 = __webpack_require__(2);
	
	var _PureRenderComponent3 = _interopRequireDefault(_PureRenderComponent2);
	
	var _node = __webpack_require__(15);
	
	var _node2 = _interopRequireDefault(_node);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }var ForceGraphNode = function (_PureRenderComponent) {
	  _inherits(ForceGraphNode, _PureRenderComponent);
	
	  function ForceGraphNode() {
	    _classCallCheck(this, ForceGraphNode);
	
	    return _possibleConstructorReturn(this, (ForceGraphNode.__proto__ || Object.getPrototypeOf(ForceGraphNode)).apply(this, arguments));
	  }
	
	  _createClass(ForceGraphNode, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var node = _props.node;
	      var className = _props.className;
	      var r = _props.r;
	      var labelStyle = _props.labelStyle;
	      var labelClass = _props.labelClass;
	      var showLabel = _props.showLabel;
	
	      var spreadable = _objectWithoutProperties(_props, ['node', 'className', 'r', 'labelStyle', 'labelClass', 'showLabel']);
	
	      var _node$radius = node.radius;
	      var radius = _node$radius === undefined ? 5 : _node$radius;
	
	
	      return _react2.default.createElement('circle', _extends({
	        className: 'rv-force__node ' + className,
	        r: r || radius
	      }, spreadable));
	    }
	  }], [{
	    key: 'propTypes',
	    get: function get() {
	      return {
	        node: _node2.default.isRequired,
	        cx: _react.PropTypes.number,
	        cy: _react.PropTypes.number,
	        // these props only have an impact on the parent.
	        labelStyle: _react.PropTypes.object,
	        labelClass: _react.PropTypes.string,
	        showLabel: _react.PropTypes.bool
	      };
	    }
	  }, {
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        className: '',
	        fill: '#333',
	        opacity: 1,
	        stroke: '#FFF',
	        strokeWidth: 1.5
	      };
	    }
	  }]);
	
	  return ForceGraphNode;
	}(_PureRenderComponent3.default);
	
	exports.default = ForceGraphNode;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.asStrengthFn = asStrengthFn;
	exports.nodeId = nodeId;
	exports.linkId = linkId;
	exports.runSimulation = runSimulation;
	exports.createSimulation = createSimulation;
	exports.updateSimulation = updateSimulation;
	
	var _d3Force = __webpack_require__(21);
	
	var _setsEqual = __webpack_require__(18);
	
	var _setsEqual2 = _interopRequireDefault(_setsEqual);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }var ALPHA_FACTORS = ['alpha', 'alphaDecay', 'alphaMin', 'alphaTarget', 'velocityDecay'];
	
	// ---- PRIVATE METHODS ----
	/**
	 * return a mapped list of objects where only the attrNames provided
	 * remain on the objects in the collection.
	 * @param {array} list - array of objects
	 * @param {...array} attrNames - keys, spread over the rest of the arguments
	 * @return {array} mapped list of new objects with only the attrNames on them
	 */
	function pick(list) {
	  for (var _len = arguments.length, attrNames = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    attrNames[_key - 1] = arguments[_key];
	  }
	
	  return list.map(function (item) {
	    return attrNames.reduce(function (obj, attrName) {
	      return Object.assign(obj, _defineProperty({}, attrName, item[attrName]));
	    }, {});
	  });
	}
	
	/**
	 * take a function or a value to return as a strength and set it
	 * @param {mixed} target
	 * @return {function} a strength function
	 */
	function asStrengthFn(target) {
	  switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
	    case 'function':
	      return target;
	    default:
	      return function () {
	        return target;
	      };
	  }
	}
	
	function applyAlphaFactors(simulation, options) {
	  ALPHA_FACTORS.forEach(function (alphaFactorName) {
	    if ({}.hasOwnProperty.call(options, alphaFactorName)) {
	      simulation[alphaFactorName](options[alphaFactorName]);
	    }
	  });
	
	  return simulation;
	}
	
	function applyCenterForce(simulation, _ref) {
	  var height = _ref.height;
	  var width = _ref.width;
	
	  // setup a new center force if it doesn't exist.
	  if (!simulation.force('center')) {
	    simulation.force('center', (0, _d3Force.forceCenter)());
	  }
	
	  // set the center force to the center of the graph. only update
	  // the value if it is not the same as the previous value.
	  var centerX = width ? width / 2 : 0;
	  if (width > 0 && simulation.force('center').x() !== centerX) {
	    simulation.shouldRun = true;
	    simulation.force('center').x(centerX);
	  }
	
	  var centerY = height ? height / 2 : 0;
	  if (height > 0 && simulation.force('center').y() !== centerY) {
	    simulation.shouldRun = true;
	    simulation.force('center').y(centerY);
	  }
	
	  return simulation;
	}
	
	function applyManyBodyChargeForce(simulation, _ref2) {
	  var _ref2$strength = _ref2.strength;
	  var strength = _ref2$strength === undefined ? {} : _ref2$strength;
	
	  if (!simulation.force('charge')) {
	    simulation.force('charge', (0, _d3Force.forceManyBody)());
	  }
	
	  if (strength.charge !== simulation.strength.charge) {
	    simulation.strength.charge = strength.charge;
	    simulation.shouldRun = true;
	    simulation.force('charge').strength(asStrengthFn(strength.charge));
	  }
	}
	
	function applyCollisionForce(simulation, _ref3) {
	  var _ref3$radiusMargin = _ref3.radiusMargin;
	  var radiusMargin = _ref3$radiusMargin === undefined ? 3 : _ref3$radiusMargin;
	  var _ref3$strength = _ref3.strength;
	  var strength = _ref3$strength === undefined ? {} : _ref3$strength;
	
	  if (!simulation.force('collide')) {
	    simulation.force('collide', (0, _d3Force.forceCollide)());
	  }
	
	  if (simulation.radiusMargin !== radiusMargin) {
	    simulation.radiusMargin = radiusMargin;
	    simulation.shouldRun = true;
	    simulation.force('collide').radius(function (_ref4) {
	      var radius = _ref4.radius;
	      return radius + radiusMargin;
	    });
	  }
	
	  if (strength.collide !== simulation.strength.collide) {
	    simulation.strength.collide = strength.collide;
	    simulation.shouldRun = true;
	    simulation.force('collide').strength(asStrengthFn(strength.collide)());
	  }
	}
	
	function applyLinkForce(simulation, _ref5) {
	  var _ref5$data = _ref5.data;
	  var nodes = _ref5$data.nodes;
	  var links = _ref5$data.links;
	  var _ref5$linkAttrs = _ref5.linkAttrs;
	  var linkAttrs = _ref5$linkAttrs === undefined ? [] : _ref5$linkAttrs;
	  var _ref5$nodeAttrs = _ref5.nodeAttrs;
	  var nodeAttrs = _ref5$nodeAttrs === undefined ? [] : _ref5$nodeAttrs;
	
	  // setup the link force if it isn't already set up
	  if (!simulation.force('link')) {
	    simulation.force('link', (0, _d3Force.forceLink)().id(nodeId));
	  }
	
	  // set the nodes and links for this simulation. provide
	  // new instances to avoid mutating the underlying values.
	  // only update if there are changes.
	  var prevNodesSet = new Set(simulation.nodes().map(nodeId));
	  var newNodesSet = new Set(nodes.map(nodeId));
	  if (!(0, _setsEqual2.default)(prevNodesSet, newNodesSet)) {
	    simulation.shouldRun = true;
	    simulation.nodes(pick.apply(undefined, [nodes, 'id', 'radius', 'fx', 'fy'].concat(_toConsumableArray(nodeAttrs))));
	  }
	
	  var prevLinksSet = new Set(simulation.force('link').links().map(linkId));
	  var newLinksSet = new Set(links.map(linkId));
	  if (!(0, _setsEqual2.default)(prevLinksSet, newLinksSet)) {
	    simulation.shouldRun = true;
	    simulation.force('link').links(pick.apply(undefined, [links, 'source', 'target', 'value'].concat(_toConsumableArray(linkAttrs))));
	  }
	}
	
	function applyAxisForce(simulation, _ref6) {
	  var _ref6$strength = _ref6.strength;
	  var strength = _ref6$strength === undefined ? {} : _ref6$strength;
	
	  if (!simulation.force('x')) {
	    simulation.force('x', (0, _d3Force.forceX)());
	  }
	
	  if (!simulation.force('y')) {
	    simulation.force('y', (0, _d3Force.forceY)());
	  }
	
	  if (strength.x !== simulation.strength.x) {
	    simulation.strength.x = strength.x;
	    simulation.shouldRun = true;
	    simulation.force('x').strength(asStrengthFn(strength.x));
	  }
	
	  if (strength.y !== simulation.strength.y) {
	    simulation.strength.y = strength.y;
	    simulation.shouldRun = true;
	    simulation.force('y').strength(asStrengthFn(strength.y));
	  }
	}
	
	// ---- PUBLIC METHODS ----
	/**
	 * given a force-directed graph node, return its id.
	 * @param {object} node
	 * @returns {string} id
	 */
	function nodeId(node) {
	  return node.id;
	}
	
	/**
	 * given a force-directed graph link, return its id.
	 * @param {object} link
	 * @returns {string} id
	 */
	function linkId(link) {
	  return (link.source.id || link.source) + '=>' + (link.target.id || link.target);
	}
	
	/**
	 * run the simulation and stop it after the appropriate number of steps.
	 * @param {object} simulation - a d3-force simulation ready to be run
	 * @param {number} steps - the number of times to call tick
	 * @returns {object} the run simulation
	 */
	function runSimulation(simulation) {
	  simulation.restart();
	
	  // run the simulation to fruition and stop it.
	  while (simulation.alpha() > simulation.alphaMin()) {
	    simulation.tick();
	  }
	
	  simulation.stop();
	
	  return simulation;
	}
	
	/**
	 * given the options, update a simulation
	 * @param {object} options
	 * @returns {object} d3-force simulation
	 */
	function createSimulation(options) {
	  // update center force
	  var simulation = (0, _d3Force.forceSimulation)();
	  simulation.strength = {};
	  return updateSimulation(simulation, options);
	}
	
	/**
	 * given the options, update a simulation.
	 * @param {object} simulation - a d3-force simulation
	 * @param {object} options
	 * @param {number} options.height
	 * @param {number} options.width
	 * @param {object} options.data
	 * @param {array} options.data.nodes
	 * @param {array} options.data.links
	 * @param {object} [options.strength]
	 * @param {function|number} [options.strength.charge]
	 * @param {function|number} [options.strength.collide]
	 * @param {function|number} [options.strength.x]
	 * @param {function|number} [options.strength.y]
	 * @param {boolean} [options.animate]
	 * @param {number} [options.alpha]
	 * @param {number} [options.alphaDecay]
	 * @param {number} [options.alphaMin]
	 * @param {number} [options.alphaTarget]
	 * @param {number} [options.velocityDecay]
	 * @param {number} [options.radiusMargin]
	 * @returns {object} d3-force simulation
	 */
	function updateSimulation(simulation, options) {
	  applyAlphaFactors(simulation, options);
	  applyCenterForce(simulation, options);
	  applyManyBodyChargeForce(simulation, options);
	  applyCollisionForce(simulation, options);
	  applyLinkForce(simulation, options);
	  applyAxisForce(simulation, options);
	
	  if (!options.animate && simulation.shouldRun) {
	    runSimulation(simulation);
	  }
	
	  simulation.shouldRun = null;
	
	  return simulation;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(24);
	
	var _PureRenderComponent2 = __webpack_require__(2);
	
	var _PureRenderComponent3 = _interopRequireDefault(_PureRenderComponent2);
	
	var _d3Force = __webpack_require__(5);
	
	var forceUtils = _interopRequireWildcard(_d3Force);
	
	var _raf = __webpack_require__(17);
	
	var rafUtils = _interopRequireWildcard(_raf);
	
	var _ForceGraphNode = __webpack_require__(4);
	
	var _ForceGraphNode2 = _interopRequireDefault(_ForceGraphNode);
	
	var _ForceGraphLink = __webpack_require__(3);
	
	var _ForceGraphLink2 = _interopRequireDefault(_ForceGraphLink);
	
	var _ZoomableSVGGroup = __webpack_require__(12);
	
	var _ZoomableSVGGroup2 = _interopRequireDefault(_ZoomableSVGGroup);
	
	var _simulation = __webpack_require__(16);
	
	var _simulation2 = _interopRequireDefault(_simulation);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }var ForceGraph = function (_PureRenderComponent) {
	  _inherits(ForceGraph, _PureRenderComponent);
	
	  _createClass(ForceGraph, null, [{
	    key: 'getDataFromChildren',
	    value: function getDataFromChildren(children) {
	      var data = { nodes: [], links: [] };
	
	      _react.Children.forEach(children, function (child) {
	        switch (child.type) {
	          case _ForceGraphNode2.default:
	            data.nodes.push(child.props.node);
	            break;
	          case _ForceGraphLink2.default:
	            data.links.push(child.props.link);
	            break;
	          default:
	            break;
	        }
	      });
	
	      return data;
	    }
	
	    /**
	     * return a map of nodeIds to node positions.
	     * @param {object} simulation - d3-force simulation
	     * @return {object} map of nodeIds to positions
	     */
	
	  }, {
	    key: 'getNodePositions',
	    value: function getNodePositions(simulation) {
	      return simulation.nodes().reduce(function (obj, node) {
	        return Object.assign(obj, _defineProperty({}, forceUtils.nodeId(node), {
	          cx: node.fx || node.x,
	          cy: node.fy || node.y
	        }));
	      }, {});
	    }
	
	    /**
	     * return a map of nodeIds to node positions.
	     * @param {object} simulation - d3-force simulation
	     * @return {object} map of linkIds to positions
	     */
	
	  }, {
	    key: 'getLinkPositions',
	    value: function getLinkPositions(simulation) {
	      return simulation.force('link').links().reduce(function (obj, link) {
	        return Object.assign(obj, _defineProperty({}, forceUtils.linkId(link), {
	          x1: link.source.x,
	          y1: link.source.y,
	          x2: link.target.x,
	          y2: link.target.y
	        }));
	      }, {});
	    }
	  }, {
	    key: 'propTypes',
	    get: function get() {
	      return {
	        children: _react.PropTypes.any,
	
	        // zoom and pan
	        zoom: _react.PropTypes.bool,
	        minScale: _react.PropTypes.number,
	        maxScale: _react.PropTypes.number,
	        onZoom: _react.PropTypes.func,
	        onPan: _react.PropTypes.func,
	
	        // create custom simulations
	        createSimulation: _react.PropTypes.func,
	        updateSimulation: _react.PropTypes.func,
	        simulationOptions: _simulation2.default,
	
	        // adjust label display
	        labelAttr: _react.PropTypes.string,
	        labelOffset: _react.PropTypes.objectOf(_react.PropTypes.func),
	        showLabels: _react.PropTypes.bool
	      };
	    }
	  }, {
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        createSimulation: forceUtils.createSimulation,
	        updateSimulation: forceUtils.updateSimulation,
	        zoom: false,
	        labelAttr: 'id',
	        simulationOptions: _simulation.DEFAULT_SIMULATION_PROPS,
	        labelOffset: {
	          x: function x(_ref) {
	            var _ref$radius = _ref.radius;
	            var radius = _ref$radius === undefined ? 5 : _ref$radius;
	            return radius / 2;
	          },
	          y: function y(_ref2) {
	            var _ref2$radius = _ref2.radius;
	            var radius = _ref2$radius === undefined ? 5 : _ref2$radius;
	            return -radius / 4;
	          }
	        },
	        showLabels: false,
	        onZoom: function onZoom() {},
	        onPan: function onPan() {}
	      };
	    }
	  }]);
	
	  function ForceGraph(props) {
	    _classCallCheck(this, ForceGraph);
	
	    var _this = _possibleConstructorReturn(this, (ForceGraph.__proto__ || Object.getPrototypeOf(ForceGraph)).call(this, props));
	
	    var createSimulation = props.createSimulation;
	    var simulationOptions = props.simulationOptions;
	
	
	    var data = _this.getDataFromChildren();
	
	    _this.simulation = createSimulation(_extends({}, _simulation.DEFAULT_SIMULATION_PROPS, simulationOptions, {
	      data: data
	    }));
	
	    _this.state = {
	      linkPositions: {},
	      nodePositions: {},
	      scale: 1
	    };
	
	    _this.bindSimulationTick();
	    return _this;
	  }
	
	  _createClass(ForceGraph, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.updateSimulation();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.lastUpdated = new Date();
	      this.updateSimulation(nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.unbindSimulationTick();
	    }
	  }, {
	    key: 'onSimulationTick',
	    value: function onSimulationTick() {
	      this.frame = rafUtils.requestAnimationFrame(this.updatePositions.bind(this));
	    }
	  }, {
	    key: 'onZoom',
	    value: function onZoom(event, scale) {
	      var _props;
	
	      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	      }
	
	      (_props = this.props).onZoom.apply(_props, [event, scale].concat(args));
	      this.setState({ scale: scale });
	    }
	  }, {
	    key: 'onPan',
	    value: function onPan() {
	      var _props2;
	
	      (_props2 = this.props).onPan.apply(_props2, arguments);
	    }
	  }, {
	    key: 'getDataFromChildren',
	    value: function getDataFromChildren() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	      if (!force && this.cachedData && new Date() > this.lastUpdated) {
	        return this.cachedData;
	      }
	
	      var data = ForceGraph.getDataFromChildren(props.children);
	
	      Object.assign(this, { cachedData: data, lastUpdated: new Date() });
	
	      return data;
	    }
	  }, {
	    key: 'bindSimulationTick',
	    value: function bindSimulationTick() {
	      this.simulation.on('tick', this.updateSimulation.bind(this));
	    }
	  }, {
	    key: 'unbindSimulationTick',
	    value: function unbindSimulationTick() {
	      this.simulation.on('tick', null);
	      this.frame = this.frame && rafUtils.cancelAnimationFrame(this.frame);
	    }
	  }, {
	    key: 'updateSimulation',
	    value: function updateSimulation() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	      var simulation = this.simulation;
	      var updateSimulation = props.updateSimulation;
	      var simulationOptions = props.simulationOptions;
	
	
	      this.simulation = updateSimulation(simulation, _extends({}, _simulation.DEFAULT_SIMULATION_PROPS, simulationOptions, {
	        data: this.getDataFromChildren(props, true)
	      }));
	
	      this.onSimulationTick();
	    }
	  }, {
	    key: 'updatePositions',
	    value: function updatePositions() {
	      this.setState({
	        linkPositions: ForceGraph.getLinkPositions(this.simulation),
	        nodePositions: ForceGraph.getNodePositions(this.simulation)
	      });
	    }
	  }, {
	    key: 'scale',
	    value: function scale(number) {
	      return typeof number === 'number' ? number / this.state.scale : number;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props3 = this.props;
	      var children = _props3.children;
	      var className = _props3.className;
	      var labelAttr = _props3.labelAttr;
	      var labelOffset = _props3.labelOffset;
	      var showLabels = _props3.showLabels;
	      var simulationOptions = _props3.simulationOptions;
	      var zoom = _props3.zoom;
	      var minScale = _props3.minScale;
	      var maxScale = _props3.maxScale;
	      var _state = this.state;
	      var linkPositions = _state.linkPositions;
	      var nodePositions = _state.nodePositions;
	      var _simulationOptions$he = simulationOptions.height;
	      var height = _simulationOptions$he === undefined ? _simulation.DEFAULT_SIMULATION_PROPS.height : _simulationOptions$he;
	      var _simulationOptions$wi = simulationOptions.width;
	      var width = _simulationOptions$wi === undefined ? _simulation.DEFAULT_SIMULATION_PROPS.width : _simulationOptions$wi;
	
	
	      var nodeElements = [];
	      var labelElements = [];
	      var linkElements = [];
	      var zoomableChildren = [];
	      var staticChildren = [];
	
	      // build up the real children to render by iterating through the provided children
	      _react.Children.forEach(children, function (child, idx) {
	        var type = child.type;
	
	
	        switch (type) {
	          case _ForceGraphNode2.default:
	            {
	              var _child$props = child.props;
	              var node = _child$props.node;
	              var showLabel = _child$props.showLabel;
	              var labelClass = _child$props.labelClass;
	              var _child$props$labelSty = _child$props.labelStyle;
	              var labelStyle = _child$props$labelSty === undefined ? {} : _child$props$labelSty;
	              var strokeWidth = _child$props.strokeWidth;
	
	              var nodePosition = nodePositions[forceUtils.nodeId(node)];
	
	              nodeElements.push((0, _react.cloneElement)(child, _extends({}, nodePosition, {
	                strokeWidth: _this2.scale(strokeWidth)
	              })));
	
	              if ((showLabels || showLabel) && nodePosition) {
	                var fontSize = labelStyle.fontSize;
	
	                var spreadableLabelStyle = _objectWithoutProperties(labelStyle, ['fontSize']);
	
	                labelElements.push(_react2.default.createElement(
	                  'text',
	                  {
	                    className: 'rv-force__label ' + labelClass,
	                    key: forceUtils.nodeId(node) + '-label',
	                    x: nodePosition.cx + labelOffset.x(node),
	                    y: nodePosition.cy + labelOffset.y(node),
	                    fontSize: _this2.scale(fontSize),
	                    style: spreadableLabelStyle
	                  },
	                  node[labelAttr]
	                ));
	              }
	
	              break;
	            }
	
	          case _ForceGraphLink2.default:
	            {
	              var link = child.props.link;
	              var _strokeWidth = link.strokeWidth;
	
	              var linkPosition = linkPositions[forceUtils.linkId(link)];
	
	              linkElements.push((0, _react.cloneElement)(child, _extends({}, linkPosition, {
	                strokeWidth: _this2.scale(_strokeWidth)
	              })));
	
	              break;
	            }
	
	          default:
	            {
	              var zoomable = child.props.zoomable;
	
	              if (zoom && zoomable) {
	                zoomableChildren.push((0, _react.cloneElement)(child, { key: child.key || 'zoomable-' + idx }));
	              } else {
	                staticChildren.push((0, _react.cloneElement)(child, { key: child.key || 'static-' + idx }));
	              }
	
	              break;
	            }
	        }
	      });
	
	      return _react2.default.createElement(
	        'svg',
	        { className: 'rv-force__svg ' + className, width: width, height: height },
	        _react2.default.createElement(
	          'g',
	          { className: 'rv-force__static-elements' },
	          staticChildren
	        ),
	        _react2.default.createElement(
	          _ZoomableSVGGroup2.default,
	          {
	            disabled: !zoom,
	            height: height,
	            width: width,
	            minScale: minScale,
	            maxScale: maxScale,
	            onZoom: function onZoom() {
	              return _this2.onZoom.apply(_this2, arguments);
	            },
	            onPan: function onPan() {
	              return _this2.onPan.apply(_this2, arguments);
	            }
	          },
	          _react2.default.createElement(
	            'g',
	            { className: 'rv-force__zoomable-elements' },
	            zoomableChildren
	          ),
	          _react2.default.createElement(
	            'g',
	            { className: 'rv-force__links' },
	            linkElements
	          ),
	          _react2.default.createElement(
	            'g',
	            { className: 'rv-force__nodes' },
	            nodeElements
	          ),
	          _react2.default.createElement(
	            'g',
	            { className: 'rv-force__labels' },
	            labelElements
	          )
	        )
	      );
	    }
	  }]);
	
	  return ForceGraph;
	}(_PureRenderComponent3.default);
	
	exports.default = ForceGraph;

/***/ },
/* 7 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {if (typeof window !== "undefined") {
	    module.exports = window;
	} else if (typeof global !== "undefined") {
	    module.exports = global;
	} else if (typeof self !== "undefined"){
	    module.exports = self;
	} else {
	    module.exports = {};
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var asap = __webpack_require__(10);
	
	function noop() {}
	
	// States:
	//
	// 0 - pending
	// 1 - fulfilled with _value
	// 2 - rejected with _value
	// 3 - adopted the state of another promise, _value
	//
	// once the state is no longer pending (0) it is immutable
	
	// All `_` prefixed properties will be reduced to `_{random number}`
	// at build time to obfuscate them and discourage their use.
	// We don't use symbols or Object.defineProperty to fully hide them
	// because the performance isn't good enough.
	
	
	// to avoid using try/catch inside critical functions, we
	// extract them to here.
	var LAST_ERROR = null;
	var IS_ERROR = {};
	function getThen(obj) {
	  try {
	    return obj.then;
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	function tryCallOne(fn, a) {
	  try {
	    return fn(a);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	function tryCallTwo(fn, a, b) {
	  try {
	    fn(a, b);
	  } catch (ex) {
	    LAST_ERROR = ex;
	    return IS_ERROR;
	  }
	}
	
	module.exports = Promise;
	
	function Promise(fn) {
	  if (typeof this !== 'object') {
	    throw new TypeError('Promises must be constructed via new');
	  }
	  if (typeof fn !== 'function') {
	    throw new TypeError('not a function');
	  }
	  this._45 = 0;
	  this._81 = 0;
	  this._65 = null;
	  this._54 = null;
	  if (fn === noop) return;
	  doResolve(fn, this);
	}
	Promise._10 = null;
	Promise._97 = null;
	Promise._61 = noop;
	
	Promise.prototype.then = function(onFulfilled, onRejected) {
	  if (this.constructor !== Promise) {
	    return safeThen(this, onFulfilled, onRejected);
	  }
	  var res = new Promise(noop);
	  handle(this, new Handler(onFulfilled, onRejected, res));
	  return res;
	};
	
	function safeThen(self, onFulfilled, onRejected) {
	  return new self.constructor(function (resolve, reject) {
	    var res = new Promise(noop);
	    res.then(resolve, reject);
	    handle(self, new Handler(onFulfilled, onRejected, res));
	  });
	};
	function handle(self, deferred) {
	  while (self._81 === 3) {
	    self = self._65;
	  }
	  if (Promise._10) {
	    Promise._10(self);
	  }
	  if (self._81 === 0) {
	    if (self._45 === 0) {
	      self._45 = 1;
	      self._54 = deferred;
	      return;
	    }
	    if (self._45 === 1) {
	      self._45 = 2;
	      self._54 = [self._54, deferred];
	      return;
	    }
	    self._54.push(deferred);
	    return;
	  }
	  handleResolved(self, deferred);
	}
	
	function handleResolved(self, deferred) {
	  asap(function() {
	    var cb = self._81 === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      if (self._81 === 1) {
	        resolve(deferred.promise, self._65);
	      } else {
	        reject(deferred.promise, self._65);
	      }
	      return;
	    }
	    var ret = tryCallOne(cb, self._65);
	    if (ret === IS_ERROR) {
	      reject(deferred.promise, LAST_ERROR);
	    } else {
	      resolve(deferred.promise, ret);
	    }
	  });
	}
	function resolve(self, newValue) {
	  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	  if (newValue === self) {
	    return reject(
	      self,
	      new TypeError('A promise cannot be resolved with itself.')
	    );
	  }
	  if (
	    newValue &&
	    (typeof newValue === 'object' || typeof newValue === 'function')
	  ) {
	    var then = getThen(newValue);
	    if (then === IS_ERROR) {
	      return reject(self, LAST_ERROR);
	    }
	    if (
	      then === self.then &&
	      newValue instanceof Promise
	    ) {
	      self._81 = 3;
	      self._65 = newValue;
	      finale(self);
	      return;
	    } else if (typeof then === 'function') {
	      doResolve(then.bind(newValue), self);
	      return;
	    }
	  }
	  self._81 = 1;
	  self._65 = newValue;
	  finale(self);
	}
	
	function reject(self, newValue) {
	  self._81 = 2;
	  self._65 = newValue;
	  if (Promise._97) {
	    Promise._97(self, newValue);
	  }
	  finale(self);
	}
	function finale(self) {
	  if (self._45 === 1) {
	    handle(self, self._54);
	    self._54 = null;
	  }
	  if (self._45 === 2) {
	    for (var i = 0; i < self._54.length; i++) {
	      handle(self, self._54[i]);
	    }
	    self._54 = null;
	  }
	}
	
	function Handler(onFulfilled, onRejected, promise){
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}
	
	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, promise) {
	  var done = false;
	  var res = tryCallTwo(fn, function (value) {
	    if (done) return;
	    done = true;
	    resolve(promise, value);
	  }, function (reason) {
	    if (done) return;
	    done = true;
	    reject(promise, reason);
	  })
	  if (!done && res === IS_ERROR) {
	    done = true;
	    reject(promise, LAST_ERROR);
	  }
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {(/* istanbul ignore next */ function() {
	  /* istanbul ignore if */
	  if (typeof Promise === 'undefined') {
	    // Rejection tracking prevents a common issue where React gets into an
	    // inconsistent state due to an error, but it gets swallowed by a Promise,
	    // and the user has no idea what causes React's erratic future behavior.
	    __webpack_require__(28).enable();
	    window.Promise = __webpack_require__(27);
	  }
	
	  // fetch() polyfill for making API calls.
	
	  __webpack_require__(31);
	
	  // Object.assign() is commonly used with React.
	  // It will use the native implementation if it's present and isn't buggy.
	  Object.assign = __webpack_require__(26);
	}());


/***/ },
/* 10 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}
	
	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;
	
	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}
	
	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
	
	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` or `self` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	
	/* globals self */
	var scope = typeof global !== "undefined" ? global : self;
	var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
	
	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);
	
	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.
	
	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396
	
	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}
	
	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;
	
	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}
	
	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html
	
	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.
	
	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }
	
	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.
	
	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }
	
	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.
	
	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.
	
	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);
	
	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}
	
	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;
	
	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _global = __webpack_require__(7);
	
	var _PureRenderComponent2 = __webpack_require__(2);
	
	var _PureRenderComponent3 = _interopRequireDefault(_PureRenderComponent2);
	
	var _ForceGraph = __webpack_require__(6);
	
	var _ForceGraph2 = _interopRequireDefault(_ForceGraph);
	
	var _ForceGraphNode = __webpack_require__(4);
	
	var _ForceGraphNode2 = _interopRequireDefault(_ForceGraphNode);
	
	var _ForceGraphLink = __webpack_require__(3);
	
	var _ForceGraphLink2 = _interopRequireDefault(_ForceGraphLink);
	
	var _d3Force = __webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }var isTouch = _global.window && 'ontouchstart' in _global.window;
	
	var InteractiveForceGraph = function (_PureRenderComponent) {
	  _inherits(InteractiveForceGraph, _PureRenderComponent);
	
	  _createClass(InteractiveForceGraph, null, [{
	    key: 'propTypes',
	    get: function get() {
	      return Object.assign({
	        defaultSelectedNode: _react.PropTypes.shape({
	          id: _react.PropTypes.string
	        }),
	        highlightDependencies: _react.PropTypes.bool,
	        opacityFactor: _react.PropTypes.number,
	        onSelectNode: _react.PropTypes.func,
	        onDeselectNode: _react.PropTypes.func
	      }, _ForceGraph2.default.propTypes);
	    }
	  }, {
	    key: 'defaultProps',
	    get: function get() {
	      return {
	        className: '',
	        defaultSelectedNode: null,
	        opacityFactor: 4,
	        onSelectNode: function onSelectNode() {},
	        onDeselectNode: function onDeselectNode() {}
	      };
	    }
	  }]);
	
	  function InteractiveForceGraph(props) {
	    _classCallCheck(this, InteractiveForceGraph);
	
	    var _this = _possibleConstructorReturn(this, (InteractiveForceGraph.__proto__ || Object.getPrototypeOf(InteractiveForceGraph)).call(this, props));
	
	    _this.state = {
	      hoveredNode: null,
	      selectedNode: props.defaultSelectedNode
	    };
	    return _this;
	  }
	
	  _createClass(InteractiveForceGraph, [{
	    key: 'onHoverNode',
	    value: function onHoverNode(event, hoveredNode) {
	      if (!isTouch) {
	        this.setState({ hoveredNode: hoveredNode });
	      }
	    }
	  }, {
	    key: 'onBlurNode',
	    value: function onBlurNode() {
	      this.setState({ hoveredNode: null });
	    }
	  }, {
	    key: 'onClickNode',
	    value: function onClickNode(event, selectedNode) {
	      var _props = this.props;
	      var onDeselectNode = _props.onDeselectNode;
	      var onSelectNode = _props.onSelectNode;
	
	      var previousNode = this.state.selectedNode;
	
	      // if the user clicked the same node that was already
	      // selected, deselect it.
	      if (previousNode && (0, _d3Force.nodeId)(previousNode) === (0, _d3Force.nodeId)(selectedNode)) {
	        this.setState({ selectedNode: null });
	        onDeselectNode(event, selectedNode);
	      } else {
	        this.setState({ selectedNode: selectedNode });
	        onSelectNode(event, selectedNode);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props2 = this.props;
	      var highlightDependencies = _props2.highlightDependencies;
	      var opacityFactor = _props2.opacityFactor;
	      var children = _props2.children;
	      var className = _props2.className;
	
	      var spreadableProps = _objectWithoutProperties(_props2, ['highlightDependencies', 'opacityFactor', 'children', 'className']);
	
	      var _state = this.state;
	      var hoveredNode = _state.hoveredNode;
	      var selectedNode = _state.selectedNode;
	
	      var _ForceGraph$getDataFr = _ForceGraph2.default.getDataFromChildren(children);
	
	      var links = _ForceGraph$getDataFr.links;
	
	
	      var applyOpacity = function applyOpacity() {
	        var opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	        return opacity / opacityFactor;
	      };
	
	      var createEventHandler = function createEventHandler(name, node, fn) {
	        return function (event) {
	          _this2[name](event, node);
	          if (fn) {
	            fn(event);
	          }
	        };
	      };
	
	      var areNodesRelatives = function areNodesRelatives(node1, node2) {
	        return node1 && node2 && links.findIndex(function (link) {
	          return link.value > 0 && (link.source === (0, _d3Force.nodeId)(node1) && link.target === (0, _d3Force.nodeId)(node2) || link.source === (0, _d3Force.nodeId)(node2) && link.target === (0, _d3Force.nodeId)(node1));
	        }) > -1;
	      };
	
	      var isNodeHighlighted = function isNodeHighlighted(focusedNode, node) {
	        return focusedNode && ((0, _d3Force.nodeId)(focusedNode) === (0, _d3Force.nodeId)(node) || highlightDependencies && areNodesRelatives(node, focusedNode));
	      };
	
	      var isLinkHighlighted = function isLinkHighlighted(focusedNode, link) {
	        return focusedNode && highlightDependencies && link.value > 0 && ((0, _d3Force.nodeId)(focusedNode) === link.source || (0, _d3Force.nodeId)(focusedNode) === link.target);
	      };
	
	      var fontSizeForNode = function fontSizeForNode(node) {
	        return selectedNode && (0, _d3Force.nodeId)(node) === (0, _d3Force.nodeId)(selectedNode) ? 14 : 10;
	      };
	      var fontWeightForNode = function fontWeightForNode(node) {
	        return selectedNode && (0, _d3Force.nodeId)(node) === (0, _d3Force.nodeId)(selectedNode) ? 700 : null;
	      };
	
	      var showLabelForNode = function showLabelForNode(node) {
	        return isNodeHighlighted(selectedNode, node) || isNodeHighlighted(hoveredNode, node);
	      };
	
	      var opacityForNode = function opacityForNode(node) {
	        var origOpacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	        if (highlightDependencies && selectedNode && !isNodeHighlighted(selectedNode, node) && !isNodeHighlighted(hoveredNode, node)) {
	          return applyOpacity(origOpacity / 4);
	        } else if (selectedNode && !isNodeHighlighted(selectedNode, node) && !isNodeHighlighted(hoveredNode, node) || hoveredNode && !isNodeHighlighted(hoveredNode, node)) {
	          return applyOpacity(origOpacity);
	        }
	
	        return origOpacity;
	      };
	
	      var opacityForLink = function opacityForLink(link) {
	        var origOpacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	
	        if (highlightDependencies ? hoveredNode && !isLinkHighlighted(hoveredNode, link) || selectedNode && !isLinkHighlighted(selectedNode, link) : hoveredNode || selectedNode) {
	          return applyOpacity(origOpacity / 4);
	        }
	
	        if (hoveredNode && !isLinkHighlighted(hoveredNode, link) && selectedNode && !isLinkHighlighted(selectedNode, link)) {
	          return applyOpacity(origOpacity);
	        }
	
	        return origOpacity;
	      };
	
	      return _react2.default.createElement(
	        _ForceGraph2.default,
	        _extends({ className: 'rv-force__interactive ' + className }, spreadableProps),
	        _react.Children.map(children, function (child) {
	          switch (child.type) {
	            case _ForceGraphNode2.default:
	              {
	                var _child$props = child.props;
	                var node = _child$props.node;
	                var labelStyle = _child$props.labelStyle;
	                var _child$props$fontSize = _child$props.fontSize;
	                var fontSize = _child$props$fontSize === undefined ? fontSizeForNode(node) : _child$props$fontSize;
	                var _child$props$fontWeig = _child$props.fontWeight;
	                var fontWeight = _child$props$fontWeig === undefined ? fontWeightForNode(node) : _child$props$fontWeig;
	                var _child$props$showLabe = _child$props.showLabel;
	                var showLabel = _child$props$showLabe === undefined ? showLabelForNode(node) : _child$props$showLabe;
	                var onMouseEnter = _child$props.onMouseEnter;
	                var onMouseLeave = _child$props.onMouseLeave;
	                var onClick = _child$props.onClick;
	                var opacity = child.props.opacity;
	
	                opacity = opacityForNode(node, opacity);
	
	                return (0, _react.cloneElement)(child, {
	                  showLabel: showLabel,
	                  opacity: opacity,
	                  labelStyle: _extends({
	                    fontSize: fontSize,
	                    fontWeight: fontWeight,
	                    opacity: opacity
	                  }, labelStyle),
	                  onMouseEnter: createEventHandler('onHoverNode', node, onMouseEnter),
	                  onMouseLeave: createEventHandler('onBlurNode', node, onMouseLeave),
	                  onClick: createEventHandler('onClickNode', node, onClick)
	                });
	              }
	
	            case _ForceGraphLink2.default:
	              {
	                var link = child.props.link;
	                var _opacity = child.props.opacity;
	
	                _opacity = opacityForLink(link, _opacity);
	
	                return (0, _react.cloneElement)(child, { opacity: _opacity });
	              }
	
	            default:
	              return child;
	          }
	        })
	      );
	    }
	  }]);
	
	  return InteractiveForceGraph;
	}(_PureRenderComponent3.default);
	
	exports.default = InteractiveForceGraph;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ZOOMABLE_SVG_GROUP_EVENT_NAMES = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _PureRenderComponent2 = __webpack_require__(2);
	
	var _PureRenderComponent3 = _interopRequireDefault(_PureRenderComponent2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }var ZOOMABLE_SVG_GROUP_EVENT_NAMES = exports.ZOOMABLE_SVG_GROUP_EVENT_NAMES = ['onMouseDown', 'onMouseMove', 'onMouseUp', 'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onWheel'];
	
	/**
	 * This component draws upon the patterns in https://github.com/anvaka/panzoom
	 * and applies them to a simple React component that can wrap SVG children.
	 */
	
	var ZoomableSVGGroup = function (_PureRenderComponent) {
	  _inherits(ZoomableSVGGroup, _PureRenderComponent);
	
	  _createClass(ZoomableSVGGroup, null, [{
	    key: 'isValidMatrix',
	
	
	    /**
	     * given a matrix, return a boolean to indicate if it's valid for
	     * use as a transform.
	     * @param {array} matrix
	     * @return {boolean} is a valid matrix
	     */
	    value: function isValidMatrix(matrix) {
	      return matrix.length === 6 && matrix.findIndex(function (item) {
	        return typeof item !== 'number';
	      }) === -1;
	    }
	
	    // based on the method of the same name from panzoom
	    // https://github.com/anvaka/panzoom/blob/master/index.js/#L201-L204
	    /* eslint-disable no-mixed-operators */
	
	  }, {
	    key: 'getPinchZoomLength',
	    value: function getPinchZoomLength(finger1, finger2) {
	      return (finger1.clientX - finger2.clientX) * (finger1.clientX - finger2.clientX) + (finger1.clientY - finger2.clientY) * (finger1.clientY - finger2.clientY);
	    }
	    /* eslint-enable no-mixed-operators */
	
	  }, {
	    key: 'getTouchClientValues',
	    value: function getTouchClientValues(event) {
	      if (event.touches.length >= 2) {
	        return {
	          clientX: (event.touches[0].clientX + event.touches[1].clientX) / 2,
	          clientY: (event.touches[0].clientY + event.touches[1].clientY) / 2
	        };
	      }
	
	      return event.touches[0];
	    }
	  }, {
	    key: 'propTypes',
	    get: function get() {
	      return _extends({
	        width: _react.PropTypes.number.isRequired,
	        height: _react.PropTypes.number.isRequired,
	        disabled: _react.PropTypes.bool,
	        zoomSpeed: _react.PropTypes.number,
	        minScale: _react.PropTypes.number,
	        maxScale: _react.PropTypes.number,
	        panLimit: _react.PropTypes.number,
	        onZoom: _react.PropTypes.func,
	        onPan: _react.PropTypes.func
	      }, ZOOMABLE_SVG_GROUP_EVENT_NAMES.reduce(function (obj, eventName) {
	        return _extends({}, obj, _defineProperty({}, eventName, _react.PropTypes.func));
	      }, {}));
	    }
	  }, {
	    key: 'defaultProps',
	    get: function get() {
	      return _extends({
	        disabled: false,
	        // scale up or down at 6.5% of the previous size
	        zoomSpeed: 0.065,
	        // only pan to 75% of the width or height
	        panLimit: 0.75,
	        // no limit to scale
	        minScale: 0,
	        maxScale: Infinity,
	        onZoom: function onZoom() {},
	        onPan: function onPan() {}
	      }, ZOOMABLE_SVG_GROUP_EVENT_NAMES.reduce(function (obj, eventName) {
	        return _extends({}, obj, _defineProperty({}, eventName, function () {}));
	      }, {}));
	    }
	  }]);
	
	  function ZoomableSVGGroup(props) {
	    _classCallCheck(this, ZoomableSVGGroup);
	
	    var _this = _possibleConstructorReturn(this, (ZoomableSVGGroup.__proto__ || Object.getPrototypeOf(ZoomableSVGGroup)).call(this, props));
	
	    _this.state = {
	      matrix: [1, 0, 0, 1, 0, 0],
	      scale: 1
	    };
	    return _this;
	  }
	
	  _createClass(ZoomableSVGGroup, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.setInitialMatrix();
	    }
	  }, {
	    key: 'setInitialMatrix',
	    value: function setInitialMatrix() {
	      var parentSvg = this.el.ownerSVGElement;
	      var transform = parentSvg.createSVGTransform();
	
	      this.setState({
	        scale: 1,
	        matrix: [transform.matrix.a, transform.matrix.b, transform.matrix.c, transform.matrix.d, transform.matrix.e, transform.matrix.f]
	      });
	    }
	
	    // based on the method of the same name from panzoom
	    // https://github.com/anvaka/panzoom/blob/master/index.js
	
	  }, {
	    key: 'getScaleMultiplier',
	    value: function getScaleMultiplier(delta) {
	      var zoomSpeed = this.props.zoomSpeed;
	
	
	      if (delta > 0) {
	        return 1 - zoomSpeed;
	      } else if (delta < 0) {
	        return 1 + zoomSpeed;
	      }
	
	      return 1;
	    }
	
	    // based on the zoomTo method from the panzoom project
	    // https://github.com/anvaka/panzoom/blob/master/lib/zoomTo.js
	
	  }, {
	    key: 'zoomTo',
	    value: function zoomTo(clientX, clientY, scaleMultiplier, event) {
	      var _this2 = this;
	
	      var prevMatrix = this.state.matrix;
	      var prevScale = this.state.scale;
	      var scale = prevScale * scaleMultiplier;
	      var clientMatrix = this.el.ownerSVGElement.getScreenCTM();
	
	      var x = clientX * clientMatrix.a - clientMatrix.e;
	      var y = clientY * clientMatrix.d - clientMatrix.f;
	
	      // guardrails for scale max and min
	      if (scale > this.props.maxScale || scale < this.props.minScale) {
	        return;
	      }
	
	      this.setState({
	        scale: scale,
	        matrix: [scale, prevMatrix[1], prevMatrix[2], scale, x - scaleMultiplier * (x - prevMatrix[4]), y - scaleMultiplier * (y - prevMatrix[5])]
	      }, function () {
	        return _this2.props.onZoom(event, scale);
	      });
	    }
	  }, {
	    key: 'panBy',
	    value: function panBy(clientX, clientY, event) {
	      var _this3 = this;
	
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var panLimit = _props.panLimit;
	      var _state = this.state;
	      var prevMatrix = _state.matrix;
	      var prevDragX = _state.dragX;
	      var prevDragY = _state.dragY;
	      var scale = _state.scale;
	
	
	      var dx = clientX - prevDragX;
	      var dy = clientY - prevDragY;
	      var newX = prevMatrix[4] + dx;
	      var newY = prevMatrix[5] + dy;
	
	      // check that we aren't passing the panLimit
	      // TODO this feels a little janky in practice
	      if (Math.abs(newX / scale) > width * panLimit || Math.abs(newY / scale) > height * panLimit) {
	        return;
	      }
	
	      this.setState({
	        dragX: clientX,
	        dragY: clientY,
	        matrix: [prevMatrix[0], prevMatrix[1], prevMatrix[2], prevMatrix[3], newX, newY]
	      }, function () {
	        return _this3.props.onPan(event, newX, newY);
	      });
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown(event) {
	      if (this.state.touching) {
	        event.stopPropagation();
	        return null;
	      }
	
	      // ignore non-left buttons.
	      if (event.button !== 0) {
	        return null;
	      }
	
	      return this.setState({
	        dragging: true,
	        dragX: event.clientX,
	        dragY: event.clientY
	      });
	    }
	  }, {
	    key: 'onMouseMove',
	    value: function onMouseMove(event) {
	      if (this.state.touching) {
	        event.stopPropagation();
	        return null;
	      }
	
	      if (!this.state.dragging) {
	        return event;
	      }
	
	      return this.panBy(event.clientX, event.clientY);
	    }
	  }, {
	    key: 'onMouseUp',
	    value: function onMouseUp(event) {
	      if (this.state.touching) {
	        event.stopPropagation();
	        return null;
	      }
	
	      return this.setState({
	        dragging: false,
	        dragX: null,
	        dragY: null
	      });
	    }
	  }, {
	    key: 'onTouchCancel',
	    value: function onTouchCancel() {
	      this.setState({
	        touching: false,
	        dragging: false,
	        pinchLength: null,
	        dragX: null,
	        dragY: null
	      });
	    }
	  }, {
	    key: 'onTouchEnd',
	    value: function onTouchEnd() {
	      this.onTouchCancel();
	    }
	  }, {
	    key: 'onTouchMove',
	    value: function onTouchMove(event) {
	      event.preventDefault();
	
	      if (event.touches.length >= 2) {
	        var finger1 = event.touches[0];
	        var finger2 = event.touches[1];
	        var pinchLength = ZoomableSVGGroup.getPinchZoomLength(finger1, finger2);
	        var prevPinchLength = this.state.pinchLength;
	
	        var delta = 0;
	        if (pinchLength < prevPinchLength) {
	          delta = 1;
	        } else if (pinchLength > prevPinchLength) {
	          delta = -1;
	        }
	
	        // use the midpoint between the fingers as the zoom origin
	
	        var _ZoomableSVGGroup$get = ZoomableSVGGroup.getTouchClientValues(event);
	
	        var clientX = _ZoomableSVGGroup$get.clientX;
	        var clientY = _ZoomableSVGGroup$get.clientY;
	
	        var scaleMultiplier = this.getScaleMultiplier(delta);
	
	        this.zoomTo(clientX, clientY, scaleMultiplier, event);
	        this.setState({ pinchLength: pinchLength });
	      } else {
	        this.panBy(event.touches[0].clientX, event.touches[0].clientY);
	      }
	    }
	  }, {
	    key: 'onTouchStart',
	    value: function onTouchStart(event) {
	      var _ZoomableSVGGroup$get2 = ZoomableSVGGroup.getTouchClientValues(event);
	
	      var dragX = _ZoomableSVGGroup$get2.clientX;
	      var dragY = _ZoomableSVGGroup$get2.clientY;
	
	
	      this.setState({
	        touching: true,
	        pinchLength: 0,
	        dragX: dragX,
	        dragY: dragY
	      });
	    }
	  }, {
	    key: 'onWheel',
	    value: function onWheel(event) {
	      var clientX = event.clientX;
	      var clientY = event.clientY;
	      var deltaY = event.deltaY;
	
	      var scaleMultiplier = this.getScaleMultiplier(deltaY);
	
	      if (scaleMultiplier !== 1) {
	        event.preventDefault();
	        this.zoomTo(clientX, clientY, scaleMultiplier, event);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;
	
	      var _props2 = this.props;
	      var width = _props2.width;
	      var height = _props2.height;
	      var children = _props2.children;
	      var disabled = _props2.disabled;
	      var _props2$style = _props2.style;
	      var style = _props2$style === undefined ? {} : _props2$style;
	      var _props2$transform = _props2.transform;
	      var transform = _props2$transform === undefined ? '' : _props2$transform;
	      var canvasHeight = _props2.canvasHeight;
	      var canvasWidth = _props2.canvasWidth;
	      var minScale = _props2.minScale;
	      var maxScale = _props2.maxScale;
	      var panLimit = _props2.panLimit;
	      var onZoom = _props2.onZoom;
	      var onPan = _props2.onPan;
	      var zoomSpeed = _props2.zoomSpeed;
	
	      var passthrough = _objectWithoutProperties(_props2, ['width', 'height', 'children', 'disabled', 'style', 'transform', 'canvasHeight', 'canvasWidth', 'minScale', 'maxScale', 'panLimit', 'onZoom', 'onPan', 'zoomSpeed']);
	
	      var _state2 = this.state;
	      var matrix = _state2.matrix;
	      var scale = _state2.scale;
	
	
	      var eventHandler = function eventHandler(eventName) {
	        return function () {
	          var _props3;
	
	          _this4[eventName].apply(_this4, arguments);
	          (_props3 = _this4.props)[eventName].apply(_props3, arguments);
	        };
	      };
	
	      var zoomProps = { transform: transform };
	
	      if (!disabled && ZoomableSVGGroup.isValidMatrix(matrix)) {
	        Object.assign(zoomProps, _extends({}, ZOOMABLE_SVG_GROUP_EVENT_NAMES.reduce(function (obj, eventName) {
	          return _extends({}, obj, _defineProperty({}, eventName, eventHandler(eventName)));
	        }, {}), {
	          style: Object.assign({}, style, {
	            transformOrigin: '0 0 0',
	            cursor: 'default',
	            pointerEvents: 'all'
	          }),
	          transform: 'matrix(' + matrix.join(' ') + ') ' + transform
	        }));
	      }
	
	      return _react2.default.createElement(
	        'g',
	        _extends({ ref: /* istanbul ignore next */function ref(c) {
	            _this4.el = c;
	          } }, passthrough, zoomProps),
	        _react2.default.createElement('rect', {
	          x: -1 * matrix[4],
	          y: -1 * matrix[5],
	          transform: 'scale(' + 1 / scale + ')',
	          fillOpacity: 0,
	          height: height,
	          width: width
	        }),
	        children
	      );
	    }
	  }]);
	
	  return ZoomableSVGGroup;
	}(_PureRenderComponent3.default);
	
	exports.default = ZoomableSVGGroup;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _d3Force = __webpack_require__(5);
	
	Object.defineProperty(exports, 'createSimulation', {
	  enumerable: true,
	  get: function get() {
	    return _d3Force.createSimulation;
	  }
	});
	Object.defineProperty(exports, 'updateSimulation', {
	  enumerable: true,
	  get: function get() {
	    return _d3Force.updateSimulation;
	  }
	});
	
	var _ForceGraph = __webpack_require__(6);
	
	Object.defineProperty(exports, 'ForceGraph', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ForceGraph).default;
	  }
	});
	
	var _ForceGraphLink = __webpack_require__(3);
	
	Object.defineProperty(exports, 'ForceGraphLink', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ForceGraphLink).default;
	  }
	});
	
	var _ForceGraphNode = __webpack_require__(4);
	
	Object.defineProperty(exports, 'ForceGraphNode', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ForceGraphNode).default;
	  }
	});
	
	var _InteractiveForceGraph = __webpack_require__(11);
	
	Object.defineProperty(exports, 'InteractiveForceGraph', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InteractiveForceGraph).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	exports.default = _react.PropTypes.shape({
	  source: _react.PropTypes.string.isRequired,
	  target: _react.PropTypes.string.isRequired,
	  value: _react.PropTypes.number
	});/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	exports.default = _react.PropTypes.shape({
	  id: _react.PropTypes.string.isRequired,
	  radius: _react.PropTypes.number
	}); // Copyright (c) 2016 Uber Technologies, Inc.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the "Software"), to deal
	// in the Software without restriction, including without limitation the rights
	// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	// THE SOFTWARE.

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DEFAULT_SIMULATION_PROPS = undefined;
	
	var _react = __webpack_require__(1);
	
	var DEFAULT_SIMULATION_PROPS = exports.DEFAULT_SIMULATION_PROPS = {
	  animate: false,
	  width: 900,
	  height: 600,
	  strength: {}
	};exports.default = _react.PropTypes.shape({
	  data: _react.PropTypes.object,
	  animate: _react.PropTypes.bool,
	  alpha: _react.PropTypes.number,
	  alphaDecay: _react.PropTypes.number,
	  alphaMin: _react.PropTypes.number,
	  alphaTarget: _react.PropTypes.number,
	  velocityDecay: _react.PropTypes.number,
	  radiusMargin: _react.PropTypes.number,
	  linkAttrs: _react.PropTypes.array,
	  nodeAttrs: _react.PropTypes.array,
	
	  // strengths
	  strength: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.number]))
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.cancelAnimationFrame = exports.requestAnimationFrame = undefined;
	
	var _global = __webpack_require__(7);
	
	var requestAnimationFrame = exports.requestAnimationFrame = function requestAnimationFrame(fn) {
	  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    rest[_key - 1] = arguments[_key];
	  }
	
	  if (_global.window && {}.hasOwnProperty.call(_global.window, 'cancelAnimationFrame')) {
	    _global.window.requestAnimationFrame.apply(_global.window, [fn].concat(rest));
	  } else {
	    fn.apply(undefined, rest);
	  }
	};var cancelAnimationFrame = exports.cancelAnimationFrame = function cancelAnimationFrame() {
	  if (_global.window && {}.hasOwnProperty.call(_global.window, 'cancelAnimationFrame')) {
	    _global.window.cancelAnimationFrame.apply(_global.window, arguments);
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = setsEqual;
	// Copyright (c) 2016 Uber Technologies, Inc.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the "Software"), to deal
	// in the Software without restriction, including without limitation the rights
	// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	// THE SOFTWARE.
	
	/**
	 * check ES2015 Sets for equality.
	 * http://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality
	 * @param {Set} setA
	 * @param {Set} setB
	 * @returns {boolean} are the sets equal
	 */
	function setsEqual(setA, setB) {
	  if (setA.size !== setB.size) {
	    return false;
	  }
	
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = setA[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var a = _step.value;
	
	      if (!setB.has(a)) {
	        return false;
	      }
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return true;
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-collection/ Version 1.0.1. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, function (exports) { 'use strict';
	
	  var prefix = "$";
	
	  function Map() {}
	
	  Map.prototype = map.prototype = {
	    constructor: Map,
	    has: function(key) {
	      return (prefix + key) in this;
	    },
	    get: function(key) {
	      return this[prefix + key];
	    },
	    set: function(key, value) {
	      this[prefix + key] = value;
	      return this;
	    },
	    remove: function(key) {
	      var property = prefix + key;
	      return property in this && delete this[property];
	    },
	    clear: function() {
	      for (var property in this) if (property[0] === prefix) delete this[property];
	    },
	    keys: function() {
	      var keys = [];
	      for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
	      return keys;
	    },
	    values: function() {
	      var values = [];
	      for (var property in this) if (property[0] === prefix) values.push(this[property]);
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
	      return entries;
	    },
	    size: function() {
	      var size = 0;
	      for (var property in this) if (property[0] === prefix) ++size;
	      return size;
	    },
	    empty: function() {
	      for (var property in this) if (property[0] === prefix) return false;
	      return true;
	    },
	    each: function(f) {
	      for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
	    }
	  };
	
	  function map(object, f) {
	    var map = new Map;
	
	    // Copy constructor.
	    if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });
	
	    // Index array by numeric index or specified key function.
	    else if (Array.isArray(object)) {
	      var i = -1,
	          n = object.length,
	          o;
	
	      if (f == null) while (++i < n) map.set(i, object[i]);
	      else while (++i < n) map.set(f(o = object[i], i, object), o);
	    }
	
	    // Convert object to map.
	    else if (object) for (var key in object) map.set(key, object[key]);
	
	    return map;
	  }
	
	  function nest() {
	    var keys = [],
	        sortKeys = [],
	        sortValues,
	        rollup,
	        nest;
	
	    function apply(array, depth, createResult, setResult) {
	      if (depth >= keys.length) return rollup != null
	          ? rollup(array) : (sortValues != null
	          ? array.sort(sortValues)
	          : array);
	
	      var i = -1,
	          n = array.length,
	          key = keys[depth++],
	          keyValue,
	          value,
	          valuesByKey = map(),
	          values,
	          result = createResult();
	
	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
	          values.push(value);
	        } else {
	          valuesByKey.set(keyValue, [value]);
	        }
	      }
	
	      valuesByKey.each(function(values, key) {
	        setResult(result, key, apply(values, depth, createResult, setResult));
	      });
	
	      return result;
	    }
	
	    function entries(map, depth) {
	      if (++depth > keys.length) return map;
	      var array, sortKey = sortKeys[depth - 1];
	      if (rollup != null && depth >= keys.length) array = map.entries();
	      else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
	      return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
	    }
	
	    return nest = {
	      object: function(array) { return apply(array, 0, createObject, setObject); },
	      map: function(array) { return apply(array, 0, createMap, setMap); },
	      entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
	      key: function(d) { keys.push(d); return nest; },
	      sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
	      sortValues: function(order) { sortValues = order; return nest; },
	      rollup: function(f) { rollup = f; return nest; }
	    };
	  }
	
	  function createObject() {
	    return {};
	  }
	
	  function setObject(object, key, value) {
	    object[key] = value;
	  }
	
	  function createMap() {
	    return map();
	  }
	
	  function setMap(map, key, value) {
	    map.set(key, value);
	  }
	
	  function Set() {}
	
	  var proto = map.prototype;
	
	  Set.prototype = set.prototype = {
	    constructor: Set,
	    has: proto.has,
	    add: function(value) {
	      value += "";
	      this[prefix + value] = value;
	      return this;
	    },
	    remove: proto.remove,
	    clear: proto.clear,
	    values: proto.keys,
	    size: proto.size,
	    empty: proto.empty,
	    each: proto.each
	  };
	
	  function set(object, f) {
	    var set = new Set;
	
	    // Copy constructor.
	    if (object instanceof Set) object.each(function(value) { set.add(value); });
	
	    // Otherwise, assume it’s an array.
	    else if (object) {
	      var i = -1, n = object.length;
	      if (f == null) while (++i < n) set.add(object[i]);
	      else while (++i < n) set.add(f(object[i], i, object));
	    }
	
	    return set;
	  }
	
	  function keys(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  }
	
	  function values(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  }
	
	  function entries(map) {
	    var entries = [];
	    for (var key in map) entries.push({key: key, value: map[key]});
	    return entries;
	  }
	
	  exports.nest = nest;
	  exports.set = set;
	  exports.map = map;
	  exports.keys = keys;
	  exports.values = values;
	  exports.entries = entries;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-dispatch/ Version 1.0.1. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, function (exports) { 'use strict';
	
	  var noop = {value: function() {}};
	
	  function dispatch() {
	    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
	      if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
	      _[t] = [];
	    }
	    return new Dispatch(_);
	  }
	
	  function Dispatch(_) {
	    this._ = _;
	  }
	
	  function parseTypenames(typenames, types) {
	    return typenames.trim().split(/^|\s+/).map(function(t) {
	      var name = "", i = t.indexOf(".");
	      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
	      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
	      return {type: t, name: name};
	    });
	  }
	
	  Dispatch.prototype = dispatch.prototype = {
	    constructor: Dispatch,
	    on: function(typename, callback) {
	      var _ = this._,
	          T = parseTypenames(typename + "", _),
	          t,
	          i = -1,
	          n = T.length;
	
	      // If no callback was specified, return the callback of the given type and name.
	      if (arguments.length < 2) {
	        while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
	        return;
	      }
	
	      // If a type was specified, set the callback for the given type and name.
	      // Otherwise, if a null callback was specified, remove callbacks of the given name.
	      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
	      while (++i < n) {
	        if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
	        else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
	      }
	
	      return this;
	    },
	    copy: function() {
	      var copy = {}, _ = this._;
	      for (var t in _) copy[t] = _[t].slice();
	      return new Dispatch(copy);
	    },
	    call: function(type, that) {
	      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
	      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	      for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	    },
	    apply: function(type, that, args) {
	      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
	      for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	    }
	  };
	
	  function get(type, name) {
	    for (var i = 0, n = type.length, c; i < n; ++i) {
	      if ((c = type[i]).name === name) {
	        return c.value;
	      }
	    }
	  }
	
	  function set(type, name, callback) {
	    for (var i = 0, n = type.length; i < n; ++i) {
	      if (type[i].name === name) {
	        type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
	        break;
	      }
	    }
	    if (callback != null) type.push({name: name, value: callback});
	    return type;
	  }
	
	  exports.dispatch = dispatch;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-force/ Version 1.0.2. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(22), __webpack_require__(19), __webpack_require__(20), __webpack_require__(23)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-quadtree', 'd3-collection', 'd3-dispatch', 'd3-timer'], factory) :
	  (factory((global.d3 = global.d3 || {}),global.d3,global.d3,global.d3,global.d3));
	}(this, function (exports,d3Quadtree,d3Collection,d3Dispatch,d3Timer) { 'use strict';
	
	  function center(x, y) {
	    var nodes;
	
	    if (x == null) x = 0;
	    if (y == null) y = 0;
	
	    function force() {
	      var i,
	          n = nodes.length,
	          node,
	          sx = 0,
	          sy = 0;
	
	      for (i = 0; i < n; ++i) {
	        node = nodes[i], sx += node.x, sy += node.y;
	      }
	
	      for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
	        node = nodes[i], node.x -= sx, node.y -= sy;
	      }
	    }
	
	    force.initialize = function(_) {
	      nodes = _;
	    };
	
	    force.x = function(_) {
	      return arguments.length ? (x = +_, force) : x;
	    };
	
	    force.y = function(_) {
	      return arguments.length ? (y = +_, force) : y;
	    };
	
	    return force;
	  }
	
	  function constant(x) {
	    return function() {
	      return x;
	    };
	  }
	
	  function jiggle() {
	    return (Math.random() - 0.5) * 1e-6;
	  }
	
	  function x(d) {
	    return d.x + d.vx;
	  }
	
	  function y(d) {
	    return d.y + d.vy;
	  }
	
	  function collide(radius) {
	    var nodes,
	        radii,
	        strength = 1,
	        iterations = 1;
	
	    if (typeof radius !== "function") radius = constant(radius == null ? 1 : +radius);
	
	    function force() {
	      var i, n = nodes.length,
	          tree,
	          node,
	          xi,
	          yi,
	          ri,
	          ri2;
	
	      for (var k = 0; k < iterations; ++k) {
	        tree = d3Quadtree.quadtree(nodes, x, y).visitAfter(prepare);
	        for (i = 0; i < n; ++i) {
	          node = nodes[i];
	          ri = radii[i], ri2 = ri * ri;
	          xi = node.x + node.vx;
	          yi = node.y + node.vy;
	          tree.visit(apply);
	        }
	      }
	
	      function apply(quad, x0, y0, x1, y1) {
	        var data = quad.data, rj = quad.r, r = ri + rj;
	        if (data) {
	          if (data.index > i) {
	            var x = xi - data.x - data.vx,
	                y = yi - data.y - data.vy,
	                l = x * x + y * y;
	            if (l < r * r) {
	              if (x === 0) x = jiggle(), l += x * x;
	              if (y === 0) y = jiggle(), l += y * y;
	              l = (r - (l = Math.sqrt(l))) / l * strength;
	              node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
	              node.vy += (y *= l) * r;
	              data.vx -= x * (r = 1 - r);
	              data.vy -= y * r;
	            }
	          }
	          return;
	        }
	        return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
	      }
	    }
	
	    function prepare(quad) {
	      if (quad.data) return quad.r = radii[quad.data.index];
	      for (var i = quad.r = 0; i < 4; ++i) {
	        if (quad[i] && quad[i].r > quad.r) {
	          quad.r = quad[i].r;
	        }
	      }
	    }
	
	    force.initialize = function(_) {
	      var i, n = (nodes = _).length; radii = new Array(n);
	      for (i = 0; i < n; ++i) radii[i] = +radius(nodes[i], i, nodes);
	    };
	
	    force.iterations = function(_) {
	      return arguments.length ? (iterations = +_, force) : iterations;
	    };
	
	    force.strength = function(_) {
	      return arguments.length ? (strength = +_, force) : strength;
	    };
	
	    force.radius = function(_) {
	      return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), force) : radius;
	    };
	
	    return force;
	  }
	
	  function index(d, i) {
	    return i;
	  }
	
	  function link(links) {
	    var id = index,
	        strength = defaultStrength,
	        strengths,
	        distance = constant(30),
	        distances,
	        nodes,
	        count,
	        bias,
	        iterations = 1;
	
	    if (links == null) links = [];
	
	    function defaultStrength(link) {
	      return 1 / Math.min(count[link.source.index], count[link.target.index]);
	    }
	
	    function force(alpha) {
	      for (var k = 0, n = links.length; k < iterations; ++k) {
	        for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
	          link = links[i], source = link.source, target = link.target;
	          x = target.x + target.vx - source.x - source.vx || jiggle();
	          y = target.y + target.vy - source.y - source.vy || jiggle();
	          l = Math.sqrt(x * x + y * y);
	          l = (l - distances[i]) / l * alpha * strengths[i];
	          x *= l, y *= l;
	          target.vx -= x * (b = bias[i]);
	          target.vy -= y * b;
	          source.vx += x * (b = 1 - b);
	          source.vy += y * b;
	        }
	      }
	    }
	
	    function initialize() {
	      if (!nodes) return;
	
	      var i,
	          n = nodes.length,
	          m = links.length,
	          nodeById = d3Collection.map(nodes, id),
	          link;
	
	      for (i = 0, count = new Array(n); i < n; ++i) {
	        count[i] = 0;
	      }
	
	      for (i = 0; i < m; ++i) {
	        link = links[i], link.index = i;
	        if (typeof link.source !== "object") link.source = nodeById.get(link.source);
	        if (typeof link.target !== "object") link.target = nodeById.get(link.target);
	        ++count[link.source.index], ++count[link.target.index];
	      }
	
	      for (i = 0, bias = new Array(m); i < m; ++i) {
	        link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
	      }
	
	      strengths = new Array(m), initializeStrength();
	      distances = new Array(m), initializeDistance();
	    }
	
	    function initializeStrength() {
	      if (!nodes) return;
	
	      for (var i = 0, n = links.length; i < n; ++i) {
	        strengths[i] = +strength(links[i], i, links);
	      }
	    }
	
	    function initializeDistance() {
	      if (!nodes) return;
	
	      for (var i = 0, n = links.length; i < n; ++i) {
	        distances[i] = +distance(links[i], i, links);
	      }
	    }
	
	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };
	
	    force.links = function(_) {
	      return arguments.length ? (links = _, initialize(), force) : links;
	    };
	
	    force.id = function(_) {
	      return arguments.length ? (id = _, force) : id;
	    };
	
	    force.iterations = function(_) {
	      return arguments.length ? (iterations = +_, force) : iterations;
	    };
	
	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initializeStrength(), force) : strength;
	    };
	
	    force.distance = function(_) {
	      return arguments.length ? (distance = typeof _ === "function" ? _ : constant(+_), initializeDistance(), force) : distance;
	    };
	
	    return force;
	  }
	
	  function x$1(d) {
	    return d.x;
	  }
	
	  function y$1(d) {
	    return d.y;
	  }
	
	  var initialRadius = 10;
	  var initialAngle = Math.PI * (3 - Math.sqrt(5));
	  function simulation(nodes) {
	    var simulation,
	        alpha = 1,
	        alphaMin = 0.001,
	        alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
	        alphaTarget = 0,
	        velocityDecay = 0.6,
	        forces = d3Collection.map(),
	        stepper = d3Timer.timer(step),
	        event = d3Dispatch.dispatch("tick", "end");
	
	    if (nodes == null) nodes = [];
	
	    function step() {
	      tick();
	      event.call("tick", simulation);
	      if (alpha < alphaMin) {
	        stepper.stop();
	        event.call("end", simulation);
	      }
	    }
	
	    function tick() {
	      var i, n = nodes.length, node;
	
	      alpha += (alphaTarget - alpha) * alphaDecay;
	
	      forces.each(function(force) {
	        force(alpha);
	      });
	
	      for (i = 0; i < n; ++i) {
	        node = nodes[i];
	        if (node.fx == null) node.x += node.vx *= velocityDecay;
	        else node.x = node.fx, node.vx = 0;
	        if (node.fy == null) node.y += node.vy *= velocityDecay;
	        else node.y = node.fy, node.vy = 0;
	      }
	    }
	
	    function initializeNodes() {
	      for (var i = 0, n = nodes.length, node; i < n; ++i) {
	        node = nodes[i], node.index = i;
	        if (isNaN(node.x) || isNaN(node.y)) {
	          var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
	          node.x = radius * Math.cos(angle);
	          node.y = radius * Math.sin(angle);
	        }
	        if (isNaN(node.vx) || isNaN(node.vy)) {
	          node.vx = node.vy = 0;
	        }
	      }
	    }
	
	    function initializeForce(force) {
	      if (force.initialize) force.initialize(nodes);
	      return force;
	    }
	
	    initializeNodes();
	
	    return simulation = {
	      tick: tick,
	
	      restart: function() {
	        return stepper.restart(step), simulation;
	      },
	
	      stop: function() {
	        return stepper.stop(), simulation;
	      },
	
	      nodes: function(_) {
	        return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
	      },
	
	      alpha: function(_) {
	        return arguments.length ? (alpha = +_, simulation) : alpha;
	      },
	
	      alphaMin: function(_) {
	        return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
	      },
	
	      alphaDecay: function(_) {
	        return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
	      },
	
	      alphaTarget: function(_) {
	        return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
	      },
	
	      velocityDecay: function(_) {
	        return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
	      },
	
	      force: function(name, _) {
	        return arguments.length > 1 ? ((_ == null ? forces.remove(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
	      },
	
	      find: function(x, y, radius) {
	        var i = 0,
	            n = nodes.length,
	            dx,
	            dy,
	            d2,
	            node,
	            closest;
	
	        if (radius == null) radius = Infinity;
	        else radius *= radius;
	
	        for (i = 0; i < n; ++i) {
	          node = nodes[i];
	          dx = x - node.x;
	          dy = y - node.y;
	          d2 = dx * dx + dy * dy;
	          if (d2 < radius) closest = node, radius = d2;
	        }
	
	        return closest;
	      },
	
	      on: function(name, _) {
	        return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
	      }
	    };
	  }
	
	  function manyBody() {
	    var nodes,
	        node,
	        alpha,
	        strength = constant(-30),
	        strengths,
	        distanceMin2 = 1,
	        distanceMax2 = Infinity,
	        theta2 = 0.81;
	
	    function force(_) {
	      var i, n = nodes.length, tree = d3Quadtree.quadtree(nodes, x$1, y$1).visitAfter(accumulate);
	      for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
	    }
	
	    function initialize() {
	      if (!nodes) return;
	      var i, n = nodes.length;
	      strengths = new Array(n);
	      for (i = 0; i < n; ++i) strengths[i] = +strength(nodes[i], i, nodes);
	    }
	
	    function accumulate(quad) {
	      var strength = 0, q, c, x, y, i;
	
	      // For internal nodes, accumulate forces from child quadrants.
	      if (quad.length) {
	        for (x = y = i = 0; i < 4; ++i) {
	          if ((q = quad[i]) && (c = q.value)) {
	            strength += c, x += c * q.x, y += c * q.y;
	          }
	        }
	        quad.x = x / strength;
	        quad.y = y / strength;
	      }
	
	      // For leaf nodes, accumulate forces from coincident quadrants.
	      else {
	        q = quad;
	        q.x = q.data.x;
	        q.y = q.data.y;
	        do strength += strengths[q.data.index];
	        while (q = q.next);
	      }
	
	      quad.value = strength;
	    }
	
	    function apply(quad, x1, _, x2) {
	      if (!quad.value) return true;
	
	      var x = quad.x - node.x,
	          y = quad.y - node.y,
	          w = x2 - x1,
	          l = x * x + y * y;
	
	      // Apply the Barnes-Hut approximation if possible.
	      // Limit forces for very close nodes; randomize direction if coincident.
	      if (w * w / theta2 < l) {
	        if (l < distanceMax2) {
	          if (x === 0) x = jiggle(), l += x * x;
	          if (y === 0) y = jiggle(), l += y * y;
	          if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
	          node.vx += x * quad.value * alpha / l;
	          node.vy += y * quad.value * alpha / l;
	        }
	        return true;
	      }
	
	      // Otherwise, process points directly.
	      else if (quad.length || l >= distanceMax2) return;
	
	      // Limit forces for very close nodes; randomize direction if coincident.
	      if (quad.data !== node || quad.next) {
	        if (x === 0) x = jiggle(), l += x * x;
	        if (y === 0) y = jiggle(), l += y * y;
	        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
	      }
	
	      do if (quad.data !== node) {
	        w = strengths[quad.data.index] * alpha / l;
	        node.vx += x * w;
	        node.vy += y * w;
	      } while (quad = quad.next);
	    }
	
	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };
	
	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
	    };
	
	    force.distanceMin = function(_) {
	      return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
	    };
	
	    force.distanceMax = function(_) {
	      return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
	    };
	
	    force.theta = function(_) {
	      return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
	    };
	
	    return force;
	  }
	
	  function x$2(x) {
	    var strength = constant(0.1),
	        nodes,
	        strengths,
	        xz;
	
	    if (typeof x !== "function") x = constant(x == null ? 0 : +x);
	
	    function force(alpha) {
	      for (var i = 0, n = nodes.length, node; i < n; ++i) {
	        node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
	      }
	    }
	
	    function initialize() {
	      if (!nodes) return;
	      var i, n = nodes.length;
	      strengths = new Array(n);
	      xz = new Array(n);
	      for (i = 0; i < n; ++i) {
	        strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
	      }
	    }
	
	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };
	
	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
	    };
	
	    force.x = function(_) {
	      return arguments.length ? (x = typeof _ === "function" ? _ : constant(+_), initialize(), force) : x;
	    };
	
	    return force;
	  }
	
	  function y$2(y) {
	    var strength = constant(0.1),
	        nodes,
	        strengths,
	        yz;
	
	    if (typeof y !== "function") y = constant(y == null ? 0 : +y);
	
	    function force(alpha) {
	      for (var i = 0, n = nodes.length, node; i < n; ++i) {
	        node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
	      }
	    }
	
	    function initialize() {
	      if (!nodes) return;
	      var i, n = nodes.length;
	      strengths = new Array(n);
	      yz = new Array(n);
	      for (i = 0; i < n; ++i) {
	        strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
	      }
	    }
	
	    force.initialize = function(_) {
	      nodes = _;
	      initialize();
	    };
	
	    force.strength = function(_) {
	      return arguments.length ? (strength = typeof _ === "function" ? _ : constant(+_), initialize(), force) : strength;
	    };
	
	    force.y = function(_) {
	      return arguments.length ? (y = typeof _ === "function" ? _ : constant(+_), initialize(), force) : y;
	    };
	
	    return force;
	  }
	
	  exports.forceCenter = center;
	  exports.forceCollide = collide;
	  exports.forceLink = link;
	  exports.forceManyBody = manyBody;
	  exports.forceSimulation = simulation;
	  exports.forceX = x$2;
	  exports.forceY = y$2;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-quadtree/ Version 1.0.1. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, function (exports) { 'use strict';
	
	  function tree_add(d) {
	    var x = +this._x.call(null, d),
	        y = +this._y.call(null, d);
	    return add(this.cover(x, y), x, y, d);
	  }
	
	  function add(tree, x, y, d) {
	    if (isNaN(x) || isNaN(y)) return tree; // ignore invalid points
	
	    var parent,
	        node = tree._root,
	        leaf = {data: d},
	        x0 = tree._x0,
	        y0 = tree._y0,
	        x1 = tree._x1,
	        y1 = tree._y1,
	        xm,
	        ym,
	        xp,
	        yp,
	        right,
	        bottom,
	        i,
	        j;
	
	    // If the tree is empty, initialize the root as a leaf.
	    if (!node) return tree._root = leaf, tree;
	
	    // Find the existing leaf for the new point, or add it.
	    while (node.length) {
	      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	      if (parent = node, !(node = node[i = bottom << 1 | right])) return parent[i] = leaf, tree;
	    }
	
	    // Is the new point is exactly coincident with the existing point?
	    xp = +tree._x.call(null, node.data);
	    yp = +tree._y.call(null, node.data);
	    if (x === xp && y === yp) return leaf.next = node, parent ? parent[i] = leaf : tree._root = leaf, tree;
	
	    // Otherwise, split the leaf node until the old and new point are separated.
	    do {
	      parent = parent ? parent[i] = new Array(4) : tree._root = new Array(4);
	      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	    } while ((i = bottom << 1 | right) === (j = (yp >= ym) << 1 | (xp >= xm)));
	    return parent[j] = node, parent[i] = leaf, tree;
	  }
	
	  function addAll(data) {
	    var d, i, n = data.length,
	        x,
	        y,
	        xz = new Array(n),
	        yz = new Array(n),
	        x0 = Infinity,
	        y0 = Infinity,
	        x1 = -Infinity,
	        y1 = -Infinity;
	
	    // Compute the points and their extent.
	    for (i = 0; i < n; ++i) {
	      if (isNaN(x = +this._x.call(null, d = data[i])) || isNaN(y = +this._y.call(null, d))) continue;
	      xz[i] = x;
	      yz[i] = y;
	      if (x < x0) x0 = x;
	      if (x > x1) x1 = x;
	      if (y < y0) y0 = y;
	      if (y > y1) y1 = y;
	    }
	
	    // If there were no (valid) points, inherit the existing extent.
	    if (x1 < x0) x0 = this._x0, x1 = this._x1;
	    if (y1 < y0) y0 = this._y0, y1 = this._y1;
	
	    // Expand the tree to cover the new points.
	    this.cover(x0, y0).cover(x1, y1);
	
	    // Add the new points.
	    for (i = 0; i < n; ++i) {
	      add(this, xz[i], yz[i], data[i]);
	    }
	
	    return this;
	  }
	
	  function tree_cover(x, y) {
	    if (isNaN(x = +x) || isNaN(y = +y)) return this; // ignore invalid points
	
	    var x0 = this._x0,
	        y0 = this._y0,
	        x1 = this._x1,
	        y1 = this._y1;
	
	    // If the quadtree has no extent, initialize them.
	    // Integer extent are necessary so that if we later double the extent,
	    // the existing quadrant boundaries don’t change due to floating point error!
	    if (isNaN(x0)) {
	      x1 = (x0 = Math.floor(x)) + 1;
	      y1 = (y0 = Math.floor(y)) + 1;
	    }
	
	    // Otherwise, double repeatedly to cover.
	    else if (x0 > x || x > x1 || y0 > y || y > y1) {
	      var z = x1 - x0,
	          node = this._root,
	          parent,
	          i;
	
	      switch (i = (y < (y0 + y1) / 2) << 1 | (x < (x0 + x1) / 2)) {
	        case 0: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x1 = x0 + z, y1 = y0 + z, x > x1 || y > y1);
	          break;
	        }
	        case 1: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x0 = x1 - z, y1 = y0 + z, x0 > x || y > y1);
	          break;
	        }
	        case 2: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x1 = x0 + z, y0 = y1 - z, x > x1 || y0 > y);
	          break;
	        }
	        case 3: {
	          do parent = new Array(4), parent[i] = node, node = parent;
	          while (z *= 2, x0 = x1 - z, y0 = y1 - z, x0 > x || y0 > y);
	          break;
	        }
	      }
	
	      if (this._root && this._root.length) this._root = node;
	    }
	
	    // If the quadtree covers the point already, just return.
	    else return this;
	
	    this._x0 = x0;
	    this._y0 = y0;
	    this._x1 = x1;
	    this._y1 = y1;
	    return this;
	  }
	
	  function tree_data() {
	    var data = [];
	    this.visit(function(node) {
	      if (!node.length) do data.push(node.data); while (node = node.next)
	    });
	    return data;
	  }
	
	  function tree_extent(_) {
	    return arguments.length
	        ? this.cover(+_[0][0], +_[0][1]).cover(+_[1][0], +_[1][1])
	        : isNaN(this._x0) ? undefined : [[this._x0, this._y0], [this._x1, this._y1]];
	  }
	
	  function Quad(node, x0, y0, x1, y1) {
	    this.node = node;
	    this.x0 = x0;
	    this.y0 = y0;
	    this.x1 = x1;
	    this.y1 = y1;
	  }
	
	  function tree_find(x, y, radius) {
	    var data,
	        x0 = this._x0,
	        y0 = this._y0,
	        x1,
	        y1,
	        x2,
	        y2,
	        x3 = this._x1,
	        y3 = this._y1,
	        quads = [],
	        node = this._root,
	        q,
	        i;
	
	    if (node) quads.push(new Quad(node, x0, y0, x3, y3));
	    if (radius == null) radius = Infinity;
	    else {
	      x0 = x - radius, y0 = y - radius;
	      x3 = x + radius, y3 = y + radius;
	      radius *= radius;
	    }
	
	    while (q = quads.pop()) {
	
	      // Stop searching if this quadrant can’t contain a closer node.
	      if (!(node = q.node)
	          || (x1 = q.x0) > x3
	          || (y1 = q.y0) > y3
	          || (x2 = q.x1) < x0
	          || (y2 = q.y1) < y0) continue;
	
	      // Bisect the current quadrant.
	      if (node.length) {
	        var xm = (x1 + x2) / 2,
	            ym = (y1 + y2) / 2;
	
	        quads.push(
	          new Quad(node[3], xm, ym, x2, y2),
	          new Quad(node[2], x1, ym, xm, y2),
	          new Quad(node[1], xm, y1, x2, ym),
	          new Quad(node[0], x1, y1, xm, ym)
	        );
	
	        // Visit the closest quadrant first.
	        if (i = (y >= ym) << 1 | (x >= xm)) {
	          q = quads[quads.length - 1];
	          quads[quads.length - 1] = quads[quads.length - 1 - i];
	          quads[quads.length - 1 - i] = q;
	        }
	      }
	
	      // Visit this point. (Visiting coincident points isn’t necessary!)
	      else {
	        var dx = x - +this._x.call(null, node.data),
	            dy = y - +this._y.call(null, node.data),
	            d2 = dx * dx + dy * dy;
	        if (d2 < radius) {
	          var d = Math.sqrt(radius = d2);
	          x0 = x - d, y0 = y - d;
	          x3 = x + d, y3 = y + d;
	          data = node.data;
	        }
	      }
	    }
	
	    return data;
	  }
	
	  function tree_remove(d) {
	    if (isNaN(x = +this._x.call(null, d)) || isNaN(y = +this._y.call(null, d))) return this; // ignore invalid points
	
	    var parent,
	        node = this._root,
	        retainer,
	        previous,
	        next,
	        x0 = this._x0,
	        y0 = this._y0,
	        x1 = this._x1,
	        y1 = this._y1,
	        x,
	        y,
	        xm,
	        ym,
	        right,
	        bottom,
	        i,
	        j;
	
	    // If the tree is empty, initialize the root as a leaf.
	    if (!node) return this;
	
	    // Find the leaf node for the point.
	    // While descending, also retain the deepest parent with a non-removed sibling.
	    if (node.length) while (true) {
	      if (right = x >= (xm = (x0 + x1) / 2)) x0 = xm; else x1 = xm;
	      if (bottom = y >= (ym = (y0 + y1) / 2)) y0 = ym; else y1 = ym;
	      if (!(parent = node, node = node[i = bottom << 1 | right])) return this;
	      if (!node.length) break;
	      if (parent[(i + 1) & 3] || parent[(i + 2) & 3] || parent[(i + 3) & 3]) retainer = parent, j = i;
	    }
	
	    // Find the point to remove.
	    while (node.data !== d) if (!(previous = node, node = node.next)) return this;
	    if (next = node.next) delete node.next;
	
	    // If there are multiple coincident points, remove just the point.
	    if (previous) return (next ? previous.next = next : delete previous.next), this;
	
	    // If this is the root point, remove it.
	    if (!parent) return this._root = next, this;
	
	    // Remove this leaf.
	    next ? parent[i] = next : delete parent[i];
	
	    // If the parent now contains exactly one leaf, collapse superfluous parents.
	    if ((node = parent[0] || parent[1] || parent[2] || parent[3])
	        && node === (parent[3] || parent[2] || parent[1] || parent[0])
	        && !node.length) {
	      if (retainer) retainer[j] = node;
	      else this._root = node;
	    }
	
	    return this;
	  }
	
	  function removeAll(data) {
	    for (var i = 0, n = data.length; i < n; ++i) this.remove(data[i]);
	    return this;
	  }
	
	  function tree_root() {
	    return this._root;
	  }
	
	  function tree_size() {
	    var size = 0;
	    this.visit(function(node) {
	      if (!node.length) do ++size; while (node = node.next)
	    });
	    return size;
	  }
	
	  function tree_visit(callback) {
	    var quads = [], q, node = this._root, child, x0, y0, x1, y1;
	    if (node) quads.push(new Quad(node, this._x0, this._y0, this._x1, this._y1));
	    while (q = quads.pop()) {
	      if (!callback(node = q.node, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1) && node.length) {
	        var xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
	        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
	        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
	        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
	        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
	      }
	    }
	    return this;
	  }
	
	  function tree_visitAfter(callback) {
	    var quads = [], next = [], q;
	    if (this._root) quads.push(new Quad(this._root, this._x0, this._y0, this._x1, this._y1));
	    while (q = quads.pop()) {
	      var node = q.node;
	      if (node.length) {
	        var child, x0 = q.x0, y0 = q.y0, x1 = q.x1, y1 = q.y1, xm = (x0 + x1) / 2, ym = (y0 + y1) / 2;
	        if (child = node[0]) quads.push(new Quad(child, x0, y0, xm, ym));
	        if (child = node[1]) quads.push(new Quad(child, xm, y0, x1, ym));
	        if (child = node[2]) quads.push(new Quad(child, x0, ym, xm, y1));
	        if (child = node[3]) quads.push(new Quad(child, xm, ym, x1, y1));
	      }
	      next.push(q);
	    }
	    while (q = next.pop()) {
	      callback(q.node, q.x0, q.y0, q.x1, q.y1);
	    }
	    return this;
	  }
	
	  function defaultX(d) {
	    return d[0];
	  }
	
	  function tree_x(_) {
	    return arguments.length ? (this._x = _, this) : this._x;
	  }
	
	  function defaultY(d) {
	    return d[1];
	  }
	
	  function tree_y(_) {
	    return arguments.length ? (this._y = _, this) : this._y;
	  }
	
	  function quadtree(nodes, x, y) {
	    var tree = new Quadtree(x == null ? defaultX : x, y == null ? defaultY : y, NaN, NaN, NaN, NaN);
	    return nodes == null ? tree : tree.addAll(nodes);
	  }
	
	  function Quadtree(x, y, x0, y0, x1, y1) {
	    this._x = x;
	    this._y = y;
	    this._x0 = x0;
	    this._y0 = y0;
	    this._x1 = x1;
	    this._y1 = y1;
	    this._root = undefined;
	  }
	
	  function leaf_copy(leaf) {
	    var copy = {data: leaf.data}, next = copy;
	    while (leaf = leaf.next) next = next.next = {data: leaf.data};
	    return copy;
	  }
	
	  var treeProto = quadtree.prototype = Quadtree.prototype;
	
	  treeProto.copy = function() {
	    var copy = new Quadtree(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
	        node = this._root,
	        nodes,
	        child;
	
	    if (!node) return copy;
	
	    if (!node.length) return copy._root = leaf_copy(node), copy;
	
	    nodes = [{source: node, target: copy._root = new Array(4)}];
	    while (node = nodes.pop()) {
	      for (var i = 0; i < 4; ++i) {
	        if (child = node.source[i]) {
	          if (child.length) nodes.push({source: child, target: node.target[i] = new Array(4)});
	          else node.target[i] = leaf_copy(child);
	        }
	      }
	    }
	
	    return copy;
	  };
	
	  treeProto.add = tree_add;
	  treeProto.addAll = addAll;
	  treeProto.cover = tree_cover;
	  treeProto.data = tree_data;
	  treeProto.extent = tree_extent;
	  treeProto.find = tree_find;
	  treeProto.remove = tree_remove;
	  treeProto.removeAll = removeAll;
	  treeProto.root = tree_root;
	  treeProto.size = tree_size;
	  treeProto.visit = tree_visit;
	  treeProto.visitAfter = tree_visitAfter;
	  treeProto.x = tree_x;
	  treeProto.y = tree_y;
	
	  exports.quadtree = quadtree;
	
	  Object.defineProperty(exports, '__esModule', { value: true });
	
	}));

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// https://d3js.org/d3-timer/ Version 1.0.3. Copyright 2016 Mike Bostock.
	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3 = global.d3 || {})));
	}(this, (function (exports) { 'use strict';
	
	var frame = 0;
	var timeout = 0;
	var interval = 0;
	var pokeDelay = 1000;
	var taskHead;
	var taskTail;
	var clockLast = 0;
	var clockNow = 0;
	var clockSkew = 0;
	var clock = typeof performance === "object" && performance.now ? performance : Date;
	var setFrame = typeof requestAnimationFrame === "function" ? requestAnimationFrame : function(f) { setTimeout(f, 17); };
	function now() {
	  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
	}
	
	function clearNow() {
	  clockNow = 0;
	}
	
	function Timer() {
	  this._call =
	  this._time =
	  this._next = null;
	}
	
	Timer.prototype = timer.prototype = {
	  constructor: Timer,
	  restart: function(callback, delay, time) {
	    if (typeof callback !== "function") throw new TypeError("callback is not a function");
	    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
	    if (!this._next && taskTail !== this) {
	      if (taskTail) taskTail._next = this;
	      else taskHead = this;
	      taskTail = this;
	    }
	    this._call = callback;
	    this._time = time;
	    sleep();
	  },
	  stop: function() {
	    if (this._call) {
	      this._call = null;
	      this._time = Infinity;
	      sleep();
	    }
	  }
	};
	
	function timer(callback, delay, time) {
	  var t = new Timer;
	  t.restart(callback, delay, time);
	  return t;
	}
	
	function timerFlush() {
	  now(); // Get the current time, if not already set.
	  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
	  var t = taskHead, e;
	  while (t) {
	    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
	    t = t._next;
	  }
	  --frame;
	}
	
	function wake() {
	  clockNow = (clockLast = clock.now()) + clockSkew;
	  frame = timeout = 0;
	  try {
	    timerFlush();
	  } finally {
	    frame = 0;
	    nap();
	    clockNow = 0;
	  }
	}
	
	function poke() {
	  var now = clock.now(), delay = now - clockLast;
	  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
	}
	
	function nap() {
	  var t0, t1 = taskHead, t2, time = Infinity;
	  while (t1) {
	    if (t1._call) {
	      if (time > t1._time) time = t1._time;
	      t0 = t1, t1 = t1._next;
	    } else {
	      t2 = t1._next, t1._next = null;
	      t1 = t0 ? t0._next = t2 : taskHead = t2;
	    }
	  }
	  taskTail = t0;
	  sleep(time);
	}
	
	function sleep(time) {
	  if (frame) return; // Soonest alarm already set, or will be.
	  if (timeout) timeout = clearTimeout(timeout);
	  var delay = time - clockNow;
	  if (delay > 24) {
	    if (time < Infinity) timeout = setTimeout(wake, delay);
	    if (interval) interval = clearInterval(interval);
	  } else {
	    if (!interval) interval = setInterval(poke, pokeDelay);
	    frame = 1, setFrame(wake);
	  }
	}
	
	function timeout$1(callback, delay, time) {
	  var t = new Timer;
	  delay = delay == null ? 0 : +delay;
	  t.restart(function(elapsed) {
	    t.stop();
	    callback(elapsed + delay);
	  }, delay, time);
	  return t;
	}
	
	function interval$1(callback, delay, time) {
	  var t = new Timer, total = delay;
	  if (delay == null) return t.restart(callback, delay, time), t;
	  delay = +delay, time = time == null ? now() : +time;
	  t.restart(function tick(elapsed) {
	    elapsed += total;
	    t.restart(tick, total += delay, time);
	    callback(elapsed);
	  }, delay, time);
	  return t;
	}
	
	exports.now = now;
	exports.timer = timer;
	exports.timerFlush = timerFlush;
	exports.timeout = timeout$1;
	exports.interval = interval$1;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));

/***/ },
/* 24 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//This file contains the ES6 extensions to the core Promises/A+ API
	
	var Promise = __webpack_require__(8);
	
	module.exports = Promise;
	
	/* Static Functions */
	
	var TRUE = valuePromise(true);
	var FALSE = valuePromise(false);
	var NULL = valuePromise(null);
	var UNDEFINED = valuePromise(undefined);
	var ZERO = valuePromise(0);
	var EMPTYSTRING = valuePromise('');
	
	function valuePromise(value) {
	  var p = new Promise(Promise._61);
	  p._81 = 1;
	  p._65 = value;
	  return p;
	}
	Promise.resolve = function (value) {
	  if (value instanceof Promise) return value;
	
	  if (value === null) return NULL;
	  if (value === undefined) return UNDEFINED;
	  if (value === true) return TRUE;
	  if (value === false) return FALSE;
	  if (value === 0) return ZERO;
	  if (value === '') return EMPTYSTRING;
	
	  if (typeof value === 'object' || typeof value === 'function') {
	    try {
	      var then = value.then;
	      if (typeof then === 'function') {
	        return new Promise(then.bind(value));
	      }
	    } catch (ex) {
	      return new Promise(function (resolve, reject) {
	        reject(ex);
	      });
	    }
	  }
	  return valuePromise(value);
	};
	
	Promise.all = function (arr) {
	  var args = Array.prototype.slice.call(arr);
	
	  return new Promise(function (resolve, reject) {
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;
	    function res(i, val) {
	      if (val && (typeof val === 'object' || typeof val === 'function')) {
	        if (val instanceof Promise && val.then === Promise.prototype.then) {
	          while (val._81 === 3) {
	            val = val._65;
	          }
	          if (val._81 === 1) return res(i, val._65);
	          if (val._81 === 2) reject(val._65);
	          val.then(function (val) {
	            res(i, val);
	          }, reject);
	          return;
	        } else {
	          var then = val.then;
	          if (typeof then === 'function') {
	            var p = new Promise(then.bind(val));
	            p.then(function (val) {
	              res(i, val);
	            }, reject);
	            return;
	          }
	        }
	      }
	      args[i] = val;
	      if (--remaining === 0) {
	        resolve(args);
	      }
	    }
	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};
	
	Promise.reject = function (value) {
	  return new Promise(function (resolve, reject) {
	    reject(value);
	  });
	};
	
	Promise.race = function (values) {
	  return new Promise(function (resolve, reject) {
	    values.forEach(function(value){
	      Promise.resolve(value).then(resolve, reject);
	    });
	  });
	};
	
	/* Prototype Methods */
	
	Promise.prototype['catch'] = function (onRejected) {
	  return this.then(null, onRejected);
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Promise = __webpack_require__(8);
	
	var DEFAULT_WHITELIST = [
	  ReferenceError,
	  TypeError,
	  RangeError
	];
	
	var enabled = false;
	exports.disable = disable;
	function disable() {
	  enabled = false;
	  Promise._10 = null;
	  Promise._97 = null;
	}
	
	exports.enable = enable;
	function enable(options) {
	  options = options || {};
	  if (enabled) disable();
	  enabled = true;
	  var id = 0;
	  var displayId = 0;
	  var rejections = {};
	  Promise._10 = function (promise) {
	    if (
	      promise._81 === 2 && // IS REJECTED
	      rejections[promise._72]
	    ) {
	      if (rejections[promise._72].logged) {
	        onHandled(promise._72);
	      } else {
	        clearTimeout(rejections[promise._72].timeout);
	      }
	      delete rejections[promise._72];
	    }
	  };
	  Promise._97 = function (promise, err) {
	    if (promise._45 === 0) { // not yet handled
	      promise._72 = id++;
	      rejections[promise._72] = {
	        displayId: null,
	        error: err,
	        timeout: setTimeout(
	          onUnhandled.bind(null, promise._72),
	          // For reference errors and type errors, this almost always
	          // means the programmer made a mistake, so log them after just
	          // 100ms
	          // otherwise, wait 2 seconds to see if they get handled
	          matchWhitelist(err, DEFAULT_WHITELIST)
	            ? 100
	            : 2000
	        ),
	        logged: false
	      };
	    }
	  };
	  function onUnhandled(id) {
	    if (
	      options.allRejections ||
	      matchWhitelist(
	        rejections[id].error,
	        options.whitelist || DEFAULT_WHITELIST
	      )
	    ) {
	      rejections[id].displayId = displayId++;
	      if (options.onUnhandled) {
	        rejections[id].logged = true;
	        options.onUnhandled(
	          rejections[id].displayId,
	          rejections[id].error
	        );
	      } else {
	        rejections[id].logged = true;
	        logError(
	          rejections[id].displayId,
	          rejections[id].error
	        );
	      }
	    }
	  }
	  function onHandled(id) {
	    if (rejections[id].logged) {
	      if (options.onHandled) {
	        options.onHandled(rejections[id].displayId, rejections[id].error);
	      } else if (!rejections[id].onUnhandled) {
	        console.warn(
	          'Promise Rejection Handled (id: ' + rejections[id].displayId + '):'
	        );
	        console.warn(
	          '  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' +
	          rejections[id].displayId + '.'
	        );
	      }
	    }
	  }
	}
	
	function logError(id, error) {
	  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
	  var errStr = (error && (error.stack || error)) + '';
	  errStr.split('\n').forEach(function (line) {
	    console.warn('  ' + line);
	  });
	}
	
	function matchWhitelist(error, list) {
	  return list.some(function (cls) {
	    return error instanceof cls;
	  });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/
	
	'use strict';
	
	var shallowEqual = __webpack_require__(25);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },
/* 31 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }
	
	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }
	
	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this)
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }
	
	      var xhr = new XMLHttpRequest()
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }
	
	        return
	      }
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-vis-force.js.map