var ReactTruncate =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Truncate = function (_Component) {
	    _inherits(Truncate, _Component);

	    function Truncate() {
	        var _ref;

	        _classCallCheck(this, Truncate);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_ref = Truncate.__proto__ || Object.getPrototypeOf(Truncate)).call.apply(_ref, [this].concat(args)));

	        _this.state = {};
	        _this.styles = {
	            ellipsis: {
	                position: 'fixed',
	                visibility: 'hidden',
	                top: 0,
	                left: 0
	            }
	        };


	        _this.onResize = _this.onResize.bind(_this);
	        _this.onTruncate = _this.onTruncate.bind(_this);
	        _this.calcTargetWidth = _this.calcTargetWidth.bind(_this);
	        _this.measureWidth = _this.measureWidth.bind(_this);
	        _this.getLines = _this.getLines.bind(_this);
	        _this.renderLine = _this.renderLine.bind(_this);
	        return _this;
	    }

	    _createClass(Truncate, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _refs = this.refs,
	                text = _refs.text,
	                ellipsis = _refs.ellipsis,
	                calcTargetWidth = this.calcTargetWidth,
	                onResize = this.onResize;


	            var canvas = document.createElement('canvas');
	            this.canvas = canvas.getContext('2d');

	            // Keep node in document body to read .offsetWidth
	            document.body.appendChild(ellipsis);

	            calcTargetWidth(function () {
	                // Node not needed in document tree to read its content
	                if (text) {
	                    text.parentNode.removeChild(text);
	                }
	            });

	            window.addEventListener('resize', onResize);
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate(prevProps) {
	            // Render was based on outdated refs and needs to be rerun
	            if (this.props.children !== prevProps.children) {
	                this.forceUpdate();
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var ellipsis = this.refs.ellipsis,
	                onResize = this.onResize,
	                timeout = this.timeout;


	            ellipsis.parentNode.removeChild(ellipsis);

	            window.removeEventListener('resize', onResize);

	            cancelAnimationFrame(timeout);
	        }

	        // Shim innerText to consistently break lines at <br/> but not at \n

	    }, {
	        key: 'innerText',
	        value: function innerText(node) {
	            var div = document.createElement('div');
	            div.innerHTML = node.innerHTML.replace(/\r\n|\r|\n/g, ' ');

	            var text = div.innerText;

	            var test = document.createElement('div');
	            test.innerHTML = 'foo<br/>bar';

	            if (test.innerText.replace(/\r\n|\r/g, '\n') !== 'foo\nbar') {
	                div.innerHTML = div.innerHTML.replace(/<br.*?[\/]?>/gi, '\n');
	                text = div.innerText;
	            }

	            return text;
	        }
	    }, {
	        key: 'onResize',
	        value: function onResize() {
	            this.calcTargetWidth();
	        }
	    }, {
	        key: 'onTruncate',
	        value: function onTruncate(didTruncate) {
	            var onTruncate = this.props.onTruncate;


	            if (typeof onTruncate === 'function') {
	                this.timeout = requestAnimationFrame(function () {
	                    onTruncate(didTruncate);
	                });
	            }
	        }
	    }, {
	        key: 'calcTargetWidth',
	        value: function calcTargetWidth(callback) {
	            var target = this.refs.target,
	                calcTargetWidth = this.calcTargetWidth,
	                canvas = this.canvas;

	            // Calculation is no longer relevant, since node has been removed

	            if (!target) {
	                return;
	            }

	            var targetWidth = target.parentNode.getBoundingClientRect().width;

	            // Delay calculation until parent node is inserted to the document
	            // Mounting order in React is ChildComponent, ParentComponent
	            if (!targetWidth) {
	                return requestAnimationFrame(function () {
	                    return calcTargetWidth(callback);
	                });
	            }

	            var style = window.getComputedStyle(target);

	            var font = [style['font-weight'], style['font-style'], style['font-size'], style['font-family']].join(' ');

	            canvas.font = font;

	            this.setState({
	                targetWidth: targetWidth
	            }, callback);
	        }
	    }, {
	        key: 'measureWidth',
	        value: function measureWidth(text) {
	            return this.canvas.measureText(text).width;
	        }
	    }, {
	        key: 'ellipsisWidth',
	        value: function ellipsisWidth(node) {
	            return node.offsetWidth;
	        }
	    }, {
	        key: 'getLines',
	        value: function getLines() {
	            var refs = this.refs,
	                _props = this.props,
	                numLines = _props.lines,
	                ellipsis = _props.ellipsis,
	                targetWidth = this.state.targetWidth,
	                innerText = this.innerText,
	                measureWidth = this.measureWidth,
	                onTruncate = this.onTruncate;


	            var lines = [];
	            var text = innerText(refs.text);
	            var textLines = text.split('\n').map(function (line) {
	                return line.split(' ');
	            });
	            var didTruncate = true;
	            var ellipsisWidth = this.ellipsisWidth(this.refs.ellipsis);

	            for (var line = 1; line <= numLines; line++) {
	                var textWords = textLines[0];

	                // Handle newline
	                if (textWords.length === 0) {
	                    lines.push();
	                    textLines.shift();
	                    line--;
	                    continue;
	                }

	                var resultLine = textWords.join(' ');

	                if (measureWidth(resultLine) <= targetWidth) {
	                    if (textLines.length === 1) {
	                        // Line is end of text and fits without truncating
	                        didTruncate = false;

	                        lines.push(resultLine);
	                        break;
	                    }
	                }

	                if (line === numLines) {
	                    // Binary search determining the longest possible line inluding truncate string
	                    var textRest = textWords.join(' ');

	                    var lower = 0;
	                    var upper = textRest.length - 1;

	                    while (lower <= upper) {
	                        var middle = Math.floor((lower + upper) / 2);

	                        var testLine = textRest.slice(0, middle + 1);

	                        if (measureWidth(testLine) + ellipsisWidth <= targetWidth) {
	                            lower = middle + 1;
	                        } else {
	                            upper = middle - 1;
	                        }
	                    }

	                    resultLine = _react2.default.createElement(
	                        'span',
	                        null,
	                        textRest.slice(0, lower),
	                        ellipsis
	                    );
	                } else {
	                    // Binary search determining when the line breaks
	                    var _lower = 0;
	                    var _upper = textWords.length - 1;

	                    while (_lower <= _upper) {
	                        var _middle = Math.floor((_lower + _upper) / 2);

	                        var _testLine = textWords.slice(0, _middle + 1).join(' ');

	                        if (measureWidth(_testLine) <= targetWidth) {
	                            _lower = _middle + 1;
	                        } else {
	                            _upper = _middle - 1;
	                        }
	                    }

	                    // The first word of this line is too long to fit it
	                    if (_lower === 0) {
	                        // Jump to processing of last line
	                        line = numLines - 1;
	                        continue;
	                    }

	                    resultLine = textWords.slice(0, _lower).join(' ');
	                    textLines[0].splice(0, _lower);
	                }

	                lines.push(resultLine);
	            }

	            onTruncate(didTruncate);

	            return lines;
	        }
	    }, {
	        key: 'renderLine',
	        value: function renderLine(line, i, arr) {
	            if (i === arr.length - 1) {
	                return _react2.default.createElement(
	                    'span',
	                    { key: i },
	                    line
	                );
	            } else {
	                var br = _react2.default.createElement('br', { key: i + 'br' });

	                if (line) {
	                    return [_react2.default.createElement(
	                        'span',
	                        { key: i },
	                        line
	                    ), br];
	                } else {
	                    return br;
	                }
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var target = this.refs.target,
	                _props2 = this.props,
	                children = _props2.children,
	                ellipsis = _props2.ellipsis,
	                lines = _props2.lines,
	                spanProps = _objectWithoutProperties(_props2, ['children', 'ellipsis', 'lines']),
	                targetWidth = this.state.targetWidth,
	                getLines = this.getLines,
	                renderLine = this.renderLine,
	                onTruncate = this.onTruncate;

	            var text = void 0;

	            var mounted = !!(target && targetWidth);

	            if (typeof window !== 'undefined' && mounted) {
	                if (lines > 0) {
	                    text = getLines().map(renderLine);
	                } else {
	                    text = children;

	                    onTruncate(false);
	                }
	            }

	            delete spanProps.onTruncate;

	            return _react2.default.createElement(
	                'span',
	                _extends({}, spanProps, { ref: 'target' }),
	                text,
	                _react2.default.createElement(
	                    'span',
	                    { ref: 'text' },
	                    children
	                ),
	                _react2.default.createElement(
	                    'span',
	                    { ref: 'ellipsis', style: this.styles.ellipsis },
	                    ellipsis
	                )
	            );
	        }
	    }]);

	    return Truncate;
	}(_react.Component);

	Truncate.propTypes = {
	    children: _react.PropTypes.node,
	    ellipsis: _react.PropTypes.node,
	    lines: _react.PropTypes.oneOfType([_react.PropTypes.oneOf([false]), _react.PropTypes.number]),
	    onTruncate: _react.PropTypes.func
	};
	Truncate.defaultProps = {
	    children: '',
	    ellipsis: '…',
	    lines: 1
	};
	exports.default = Truncate;
	;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ }
/******/ ]);