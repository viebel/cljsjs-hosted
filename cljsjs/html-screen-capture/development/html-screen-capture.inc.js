(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("htmlScreenCaptureJs", [], factory);
	else if(typeof exports === 'object')
		exports["htmlScreenCaptureJs"] = factory();
	else
		root["htmlScreenCaptureJs"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OutputTypeEnum = function OutputTypeEnum() {
	_classCallCheck(this, OutputTypeEnum);

	this.OBJECT = 'OBJECT';
	this.STRING = 'STRING';
	this.URI = 'URI';
	this.BASE64 = 'BASE64';
};

exports.default = OutputTypeEnum;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.OutputType = undefined;
exports.capture = capture;

var _outputTypeEnum = __webpack_require__(0);

var _outputTypeEnum2 = _interopRequireDefault(_outputTypeEnum);

var _capturer = __webpack_require__(2);

var _capturer2 = _interopRequireDefault(_capturer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OutputType = exports.OutputType = new _outputTypeEnum2.default();

function capture(outputType, htmlDocument, options) {
	return new _capturer2.default().capture(outputType, htmlDocument, options);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = __webpack_require__(3);

var _logger2 = _interopRequireDefault(_logger);

var _encoder = __webpack_require__(4);

var _encoder2 = _interopRequireDefault(_encoder);

var _outputTypeEnum = __webpack_require__(0);

var _outputTypeEnum2 = _interopRequireDefault(_outputTypeEnum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Capturer = function () {
	function Capturer() {
		_classCallCheck(this, Capturer);

		this._logger = new _logger2.default();
		this._isHead = true;
		this._classMap = {};
		this._classCount = 0;
		this._shouldHandleImgDataUrl = true;
		this._canvas = null;
		this._ctx = null;
		this._doc = null;
		this._options = {
			tagsOfIgnoredDocHeadElements: ['script', 'link', 'style'],
			tagsOfIgnoredDocBodyElements: ['script'],
			classesOfIgnoredDocBodyElements: [],
			attrKeyValuePairsOfIgnoredElements: {},
			tagsOfSkippedElementsForChildTreeCssHandling: ['svg'],
			attrKeyForSavingElementOrigClass: '_class',
			attrKeyForSavingElementOrigStyle: '_style',
			prefixForNewGeneratedClasses: 'c',
			imageFormatForDataUrl: 'image/png',
			imageQualityForDataUrl: 0.92,
			rulesToAddToDocStyle: ['*{font-family:"Arial Narrow" !important;}']
		};
	}

	_createClass(Capturer, [{
		key: '_overrideOptions',
		value: function _overrideOptions(options) {
			if (options) {
				for (var def in options) {
					if (options.hasOwnProperty(def)) {
						this._options[def] = options[def];
					}
				}
			}
		}
	}, {
		key: '_getImgDataUrl',
		value: function _getImgDataUrl(imgElm) {
			var imgDataUrl = '';
			try {
				if (!this._canvas) {
					this._canvas = this._doc.createElement('canvas');
					this._ctx = this._canvas.getContext('2d');
				}
				this._canvas.width = imgElm.clientWidth;
				this._canvas.height = imgElm.clientHeight;
				this._ctx.drawImage(imgElm, 0, 0);
				imgDataUrl = this._canvas.toDataURL(this._options.imageFormatForDataUrl, this._options.imageQualityForDataUrl);
			} catch (ex) {
				this._logger.warn('getImgDataUrl() - ' + ex.message);
				this._shouldHandleImgDataUrl = false;
			}
			return imgDataUrl;
		}
	}, {
		key: '_getClasses',
		value: function _getClasses(domElm) {
			var classes = [];
			var className = domElm.className instanceof SVGAnimatedString ? domElm.className.baseVal : domElm.className;
			if (className) {
				var classNames = className.split(' ');
				classNames.forEach(function (c) {
					if (c) {
						classes.push(c);
					}
				});
			}
			return classes;
		}
	}, {
		key: '_getClassName',
		value: function _getClassName(domElm) {
			var classes = domElm.className;
			return classes instanceof SVGAnimatedString ? classes.baseVal : classes;
		}
	}, {
		key: '_handleElmCss',
		value: function _handleElmCss(domElm, newElm) {
			if (this._getClasses(newElm).length > 0) {
				if (this._options.attrKeyForSavingElementOrigClass) {
					newElm.setAttribute(this._options.attrKeyForSavingElementOrigClass, this._getClassName(newElm));
				}
				newElm.removeAttribute('class');
			}
			if (newElm.getAttribute('style')) {
				if (this._options.attrKeyForSavingElementOrigStyle) {
					newElm.setAttribute(this._options.attrKeyForSavingElementOrigStyle, newElm.getAttribute('style'));
				}
				newElm.removeAttribute('style');
			}
			var computedStyle = getComputedStyle(domElm);
			var classStr = '';
			for (var i = 0; i < computedStyle.length; i++) {
				var property = computedStyle.item(i);
				var value = computedStyle.getPropertyValue(property);
				var mapKey = property + ':' + value;
				var className = this._classMap[mapKey];
				if (!className) {
					this._classCount++;
					className = (this._options.prefixForNewGeneratedClasses ? this._options.prefixForNewGeneratedClasses : 'c') + this._classCount;
					this._classMap[mapKey] = className;
				}
				classStr += className + ' ';
			}
			if (classStr) {
				newElm.setAttribute('class', classStr.trim());
			}
		}
	}, {
		key: '_appendNewStyle',
		value: function _appendNewStyle(newHtml) {
			var style = this._doc.createElement('style');
			style.type = 'text/css';
			var cssText = this._options.rulesToAddToDocStyle ? this._options.rulesToAddToDocStyle.join('') : '';
			for (var def in this._classMap) {
				if (this._classMap.hasOwnProperty(def)) {
					cssText += '.' + this._classMap[def] + '{' + def + '}';
				}
			}
			if (style.styleSheet) {
				style.styleSheet.cssText = cssText;
			} else {
				style.appendChild(this._doc.createTextNode(cssText));
			}
			newHtml.children[0].appendChild(style);
		}
	}, {
		key: '_shouldIgnoreElm',
		value: function _shouldIgnoreElm(domElm) {
			var _this = this;

			var shouldRemoveElm = false;
			if (this._isHead && this._options.tagsOfIgnoredDocHeadElements && this._options.tagsOfIgnoredDocHeadElements.indexOf(domElm.tagName.toLowerCase()) > -1 || !this._isHead && this._options.tagsOfIgnoredDocBodyElements && this._options.tagsOfIgnoredDocBodyElements.indexOf(domElm.tagName.toLowerCase()) > -1) {
				shouldRemoveElm = true;
			}
			if (!shouldRemoveElm && this._options.attrKeyValuePairsOfIgnoredElements) {
				for (var attrKey in this._options.attrKeyValuePairsOfIgnoredElements) {
					if (this._options.attrKeyValuePairsOfIgnoredElements.hasOwnProperty(attrKey)) {
						for (var i = 0; i < domElm.attributes.length; i++) {
							if (domElm.attributes[i].specified && domElm.attributes[i].value === this._options.attrKeyValuePairsOfIgnoredElements[attrKey]) {
								shouldRemoveElm = true;
							}
						}
					}
				}
			}
			if (!shouldRemoveElm && !this._isHead && this._options.classesOfIgnoredDocBodyElements) {
				var domElmClasses = this._getClasses(domElm);
				domElmClasses.forEach(function (c) {
					if (!shouldRemoveElm && _this._options.classesOfIgnoredDocBodyElements.indexOf(c) > -1) {
						shouldRemoveElm = true;
					}
				});
			}
			return shouldRemoveElm;
		}
	}, {
		key: '_recursiveWalk',
		value: function _recursiveWalk(domElm, newElm, handleCss) {
			if (this._shouldHandleImgDataUrl && !this._isHead && domElm.tagName.toLowerCase() === 'img') {
				var imgDataUrl = this._getImgDataUrl(domElm);
				if (imgDataUrl) {
					newElm.setAttribute('src', imgDataUrl);
				}
			}
			if (handleCss) {
				this._handleElmCss(domElm, newElm);
				if (this._options.tagsOfSkippedElementsForChildTreeCssHandling && this._options.tagsOfSkippedElementsForChildTreeCssHandling.indexOf(domElm.tagName.toLowerCase()) > -1) {
					handleCss = false;
				}
			}
			if (domElm.children) {
				for (var i = domElm.children.length - 1; i >= 0; i--) {
					if (this._shouldIgnoreElm(domElm.children[i])) {
						newElm.removeChild(newElm.children[i]);
					} else {
						this._recursiveWalk(domElm.children[i], newElm.children[i], handleCss);
					}
				}
			}
		}
	}, {
		key: '_createNewHtml',
		value: function _createNewHtml() {
			var newHtml = this._doc.documentElement.cloneNode(false);
			this._handleElmCss(this._doc.documentElement, newHtml);
			return newHtml;
		}
	}, {
		key: '_appendNewHead',
		value: function _appendNewHead(newHtml) {
			var newHead = this._doc.head.cloneNode(true);
			this._isHead = true;
			this._recursiveWalk(this._doc.head, newHead, false);
			newHtml.appendChild(newHead);
		}
	}, {
		key: '_appendNewBody',
		value: function _appendNewBody(newHtml) {
			var newBody = this._doc.body.cloneNode(true);
			this._isHead = false;
			this._recursiveWalk(this._doc.body, newBody, true);
			newHtml.appendChild(newBody);
		}
	}, {
		key: '_getHtmlObject',
		value: function _getHtmlObject() {
			var newHtml = this._createNewHtml();
			this._appendNewHead(newHtml);
			this._appendNewBody(newHtml);
			this._appendNewStyle(newHtml);
			return newHtml;
		}
	}, {
		key: '_prepareOutput',
		value: function _prepareOutput(newHtmlObject, outputType) {
			var output = null;
			var outputTypeEnum = new _outputTypeEnum2.default();
			if (!outputType || outputType === outputTypeEnum.OBJECT) {
				output = newHtmlObject;
			} else {
				var outerHtml = (newHtmlObject ? newHtmlObject.outerHTML : '') || '';
				if (outerHtml) {
					if (outputType === outputTypeEnum.STRING) {
						output = outerHtml;
					} else if (outputType === outputTypeEnum.URI) {
						output = _encoder2.default.uriEncode(outerHtml);
					} else if (outputType === outputTypeEnum.BASE64) {
						output = _encoder2.default.base64Encode(outerHtml);
					}
				}
				output = output || '';
			}
			if (this._logger.isDebug()) {
				this._logger.debug('output: ' + (output.outerHTML ? output.outerHTML : output));
			}
			return output;
		}
	}, {
		key: 'capture',
		value: function capture(outputType, htmlDocument, options) {
			var output = null;
			var startTime = new Date().getTime();
			try {
				this._overrideOptions(options);
				this._doc = htmlDocument || document;
				this._logger.setLogLevel(this._options.logLevel);
				this._logger.info('capture() outputType: ' + outputType + ' - start');
				var newHtmlObject = this._getHtmlObject();
				output = this._prepareOutput(newHtmlObject, outputType);
			} catch (ex) {
				this._logger.error('capture() - error - ' + ex.message);
			} finally {
				this._logger.info('capture() - end - ' + (new Date().getTime() - startTime) + 'ms');
			}
			return output;
		}
	}]);

	return Capturer;
}();

exports.default = Capturer;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
	function Logger() {
		_classCallCheck(this, Logger);

		this._logLevelNames = ['debug', 'info', 'warn', 'error', 'fatal', 'off'];
		this.init();
	}

	_createClass(Logger, [{
		key: 'init',
		value: function init() {
			this._logLevel = this._logLevelNames.indexOf('warn');
		}
	}, {
		key: 'setLogLevel',
		value: function setLogLevel(levelName) {
			if (levelName && this._logLevelNames.indexOf(levelName.toLowerCase()) !== -1) {
				this._logLevel = this._logLevelNames.indexOf(levelName.toLowerCase());
			}
		}
	}, {
		key: '_log',
		value: function _log(msg, levelName) {
			if (this._logLevel <= this._logLevelNames.indexOf(levelName)) {
				console.log('|html-screen-capture-js|' + levelName + '| ' + msg);
			}
		}
	}, {
		key: 'isDebug',
		value: function isDebug() {
			return this._logLevel === this._logLevelNames.indexOf('debug');
		}
	}, {
		key: 'debug',
		value: function debug(msg) {
			this._log(msg, 'debug');
		}
	}, {
		key: 'info',
		value: function info(msg) {
			this._log(msg, 'info');
		}
	}, {
		key: 'warn',
		value: function warn(msg) {
			this._log(msg, 'warn');
		}
	}, {
		key: 'error',
		value: function error(msg) {
			this._log(msg, 'error');
		}
	}, {
		key: 'fatal',
		value: function fatal(msg) {
			this._log(msg, 'fatal');
		}
	}]);

	return Logger;
}();

exports.default = Logger;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Encoder = function () {
	function Encoder() {
		_classCallCheck(this, Encoder);
	}

	_createClass(Encoder, null, [{
		key: '_utf8_encode',
		value: function _utf8_encode(str) {
			str = str.replace(/\r\n/g, '\n');
			var utfText = '';
			for (var n = 0; n < str.length; n++) {
				var c = str.charCodeAt(n);
				if (c < 128) {
					utfText += String.fromCharCode(c);
				} else if (c > 127 && c < 2048) {
					utfText += String.fromCharCode(c >> 6 | 192);
					utfText += String.fromCharCode(c & 63 | 128);
				} else {
					utfText += String.fromCharCode(c >> 12 | 224);
					utfText += String.fromCharCode(c >> 6 & 63 | 128);
					utfText += String.fromCharCode(c & 63 | 128);
				}
			}
			return utfText;
		}
	}, {
		key: 'base64Encode',
		value: function base64Encode(str) {
			var output = '';
			var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
			var chr1 = void 0,
			    chr2 = void 0,
			    chr3 = void 0,
			    enc1 = void 0,
			    enc2 = void 0,
			    enc3 = void 0,
			    enc4 = void 0;
			var i = 0;
			str = Encoder._utf8_encode(str);
			while (i < str.length) {
				chr1 = str.charCodeAt(i++);
				chr2 = str.charCodeAt(i++);
				chr3 = str.charCodeAt(i++);
				enc1 = chr1 >> 2;
				enc2 = (chr1 & 3) << 4 | chr2 >> 4;
				enc3 = (chr2 & 15) << 2 | chr3 >> 6;
				enc4 = chr3 & 63;
				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}
				output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
			}
			return output;
		}
	}, {
		key: 'uriEncode',
		value: function uriEncode(str) {
			return (str ? encodeURI(str) : '') || '';
		}
	}]);

	return Encoder;
}();

exports.default = Encoder;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=html-screen-capture.js.map