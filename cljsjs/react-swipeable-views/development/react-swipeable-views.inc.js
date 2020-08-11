!function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = factory(require("react")) : "function" == typeof define && define.amd ? define([ "react" ], factory) : global.SwipeableViews = factory(global.React);
}(this, function(React) {
    "use strict";
    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
            "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _extends() {
        return (_extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }).apply(this, arguments);
    }
    function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        })(o);
    }
    function _setPrototypeOf(o, p) {
        return (_setPrototypeOf = Object.setPrototypeOf || function(o, p) {
            return o.__proto__ = p, o;
        })(o, p);
    }
    function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key, i, target = function(source, excluded) {
            if (null == source) return {};
            var key, i, target = {}, sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) key = sourceKeys[i], excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
        }(source, excluded);
        if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) key = sourceSymbolKeys[i], excluded.indexOf(key) >= 0 || Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]);
        }
        return target;
    }
    function _possibleConstructorReturn(self, call) {
        return !call || "object" != typeof call && "function" != typeof call ? function(self) {
            if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return self;
        }(self) : call;
    }
    function unwrapExports(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
    }
    function createCommonjsModule(fn, module) {
        return fn(module = {
            exports: {}
        }, module.exports), module.exports
        /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
        /* eslint-disable no-unused-vars */;
    }
    React = React && React.hasOwnProperty("default") ? React.default : React;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols, hasOwnProperty = Object.prototype.hasOwnProperty, propIsEnumerable = Object.prototype.propertyIsEnumerable;
    var objectAssign = function() {
        try {
            if (!Object.assign) return !1;
            // Detect buggy property enumeration order in older V8 versions.
            // https://bugs.chromium.org/p/v8/issues/detail?id=4118
                        var test1 = new String("abc");
 // eslint-disable-line no-new-wrappers
                        if (test1[5] = "de", "5" === Object.getOwnPropertyNames(test1)[0]) return !1;
            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                        for (var test2 = {}, i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(test2).map(function(n) {
                return test2[n];
            }).join("")) return !1;
            // https://bugs.chromium.org/p/v8/issues/detail?id=3056
                        var test3 = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(letter) {
                test3[letter] = letter;
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, test3)).join("");
        } catch (err) {
            // We don't expect any of the above to throw, but better to be safe.
            return !1;
        }
    }() ? Object.assign : function(target, source) {
        for (var from, symbols, to = function(val) {
            if (null === val || void 0 === val) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(val);
        }(target), s = 1; s < arguments.length; s++) {
            for (var key in from = Object(arguments[s])) hasOwnProperty.call(from, key) && (to[key] = from[key]);
            if (getOwnPropertySymbols) {
                symbols = getOwnPropertySymbols(from);
                for (var i = 0; i < symbols.length; i++) propIsEnumerable.call(from, symbols[i]) && (to[symbols[i]] = from[symbols[i]]);
            }
        }
        return to;
    }, ReactPropTypesSecret_1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", printWarning = function() {}, ReactPropTypesSecret$1 = ReactPropTypesSecret_1, loggedTypeFailures = {};
    /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */    printWarning = function(text) {
        var message = "Warning: " + text;
        "undefined" != typeof console && console.error(message);
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    var checkPropTypes_1 = 
    /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
    function(typeSpecs, values, location, componentName, getStack) {
        for (var typeSpecName in typeSpecs) if (typeSpecs.hasOwnProperty(typeSpecName)) {
            var error;
            // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
                        try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if ("function" != typeof typeSpecs[typeSpecName]) {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.");
                    throw err.name = "Invariant Violation", err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
            } catch (ex) {
                error = ex;
            }
            if (!error || error instanceof Error || printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), 
            error instanceof Error && !(error.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error.message] = !0;
                var stack = getStack ? getStack() : "";
                printWarning("Failed " + location + " type: " + error.message + (null != stack ? stack : ""));
            }
        }
    }, printWarning$1 = function() {};
    function emptyFunctionThatReturnsNull() {
        return null;
    }
    printWarning$1 = function(text) {
        var message = "Warning: " + text;
        "undefined" != typeof console && console.error(message);
        try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
        } catch (x) {}
    };
    var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
        /* global Symbol */
        var ITERATOR_SYMBOL = "function" == typeof Symbol && Symbol.iterator, FAUX_ITERATOR_SYMBOL = "@@iterator";
        /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */
        var ANONYMOUS = "<<anonymous>>", ReactPropTypes = {
            array: createPrimitiveTypeChecker("array"),
            bool: createPrimitiveTypeChecker("boolean"),
            func: createPrimitiveTypeChecker("function"),
            number: createPrimitiveTypeChecker("number"),
            object: createPrimitiveTypeChecker("object"),
            string: createPrimitiveTypeChecker("string"),
            symbol: createPrimitiveTypeChecker("symbol"),
            any: createChainableTypeChecker(emptyFunctionThatReturnsNull),
            arrayOf: function(typeChecker) {
                return createChainableTypeChecker(function(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                    var propValue = props[propName];
                    if (!Array.isArray(propValue)) {
                        var propType = getPropType(propValue);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an array.");
                    }
                    for (var i = 0; i < propValue.length; i++) {
                        var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret_1);
                        if (error instanceof Error) return error;
                    }
                    return null;
                });
            },
            element: function() {
                return createChainableTypeChecker(function(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName];
                    if (!isValidElement(propValue)) {
                        var propType = getPropType(propValue);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement.");
                    }
                    return null;
                });
            }(),
            instanceOf: function(expectedClass) {
                return createChainableTypeChecker(function(props, propName, componentName, location, propFullName) {
                    if (!(props[propName] instanceof expectedClass)) {
                        var expectedClassName = expectedClass.name || ANONYMOUS, actualClassName = 
                        // Returns class name of the object, if any.
                        function(propValue) {
                            if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
                            return propValue.constructor.name;
                        }(props[propName]);
                        return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + actualClassName + "` supplied to `" + componentName + "`, expected instance of `" + expectedClassName + "`.");
                    }
                    return null;
                });
            },
            node: function() {
                return createChainableTypeChecker(function(props, propName, componentName, location, propFullName) {
                    if (!isNode(props[propName])) return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`, expected a ReactNode.");
                    return null;
                });
            }(),
            objectOf: function(typeChecker) {
                return createChainableTypeChecker(function(props, propName, componentName, location, propFullName) {
                    if ("function" != typeof typeChecker) return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected an object.");
                    for (var key in propValue) if (propValue.hasOwnProperty(key)) {
                        var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret_1);
                        if (error instanceof Error) return error;
                    }
                    return null;
                });
            },
            oneOf: function(expectedValues) {
                if (!Array.isArray(expectedValues)) return printWarning$1("Invalid argument supplied to oneOf, expected an instance of array."), 
                emptyFunctionThatReturnsNull;
                return createChainableTypeChecker(function(props, propName, componentName, location, propFullName) {
                    for (var propValue = props[propName], i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
                    var valuesString = JSON.stringify(expectedValues);
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + propValue + "` supplied to `" + componentName + "`, expected one of " + valuesString + ".");
                });
            },
            oneOfType: function(arrayOfTypeCheckers) {
                if (!Array.isArray(arrayOfTypeCheckers)) return printWarning$1("Invalid argument supplied to oneOfType, expected an instance of array."), 
                emptyFunctionThatReturnsNull;
                for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                    var checker = arrayOfTypeCheckers[i];
                    if ("function" != typeof checker) return printWarning$1("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."), 
                    emptyFunctionThatReturnsNull;
                }
                return createChainableTypeChecker(function(props, propName, componentName, location, propFullName) {
                    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                        var checker = arrayOfTypeCheckers[i];
                        if (null == checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1)) return null;
                    }
                    return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to `" + componentName + "`.");
                });
            },
            shape: function(shapeTypes) {
                return createChainableTypeChecker(function(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    for (var key in shapeTypes) {
                        var checker = shapeTypes[key];
                        if (checker) {
                            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret_1);
                            if (error) return error;
                        }
                    }
                    return null;
                });
            },
            exact: function(shapeTypes) {
                return createChainableTypeChecker(function(props, propName, componentName, location, propFullName) {
                    var propValue = props[propName], propType = getPropType(propValue);
                    if ("object" !== propType) return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` supplied to `" + componentName + "`, expected `object`.");
                    // We need to check all keys in case some are required but missing from
                    // props.
                                        var allKeys = objectAssign({}, props[propName], shapeTypes);
                    for (var key in allKeys) {
                        var checker = shapeTypes[key];
                        if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
                        var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret_1);
                        if (error) return error;
                    }
                    return null;
                });
            }
        };
        // Important!
        // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
                /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
        /*eslint-disable no-self-compare*/
        function is(x, y) {
            // SameValue algorithm
            return x === y ? 0 !== x || 1 / x == 1 / y : x != x && y != y;
        }
        /*eslint-enable no-self-compare*/
        /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */        function PropTypeError(message) {
            this.message = message, this.stack = "";
        }
        // Make `instanceof Error` still work for returned errors.
                function createChainableTypeChecker(validate) {
            var manualPropTypeCallCache = {}, manualPropTypeWarningCount = 0;
            function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
                if (componentName = componentName || ANONYMOUS, propFullName = propFullName || propName, 
                secret !== ReactPropTypesSecret_1) {
                    if (throwOnDirectAccess) {
                        // New behavior only for users of `prop-types` package
                        var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                        throw err.name = "Invariant Violation", err;
                    }
                    if ("undefined" != typeof console) {
                        // Old behavior for people using React.PropTypes
                        var cacheKey = componentName + ":" + propName;
                        !manualPropTypeCallCache[cacheKey] && 
                        // Avoid spamming the console because they are often not actionable except for lib authors
                        manualPropTypeWarningCount < 3 && (printWarning$1("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), 
                        manualPropTypeCallCache[cacheKey] = !0, manualPropTypeWarningCount++);
                    }
                }
                return null == props[propName] ? isRequired ? null === props[propName] ? new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `null`.") : new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in `" + componentName + "`, but its value is `undefined`.") : null : validate(props, propName, componentName, location, propFullName);
            }
            var chainedCheckType = checkType.bind(null, !1);
            return chainedCheckType.isRequired = checkType.bind(null, !0), chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
            return createChainableTypeChecker(function(props, propName, componentName, location, propFullName, secret) {
                var propValue = props[propName];
                return getPropType(propValue) !== expectedType ? new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + getPreciseType(propValue) + "` supplied to `" + componentName + "`, expected `" + expectedType + "`.") : null;
            });
        }
        function isNode(propValue) {
            switch (typeof propValue) {
              case "number":
              case "string":
              case "undefined":
                return !0;

              case "boolean":
                return !propValue;

              case "object":
                if (Array.isArray(propValue)) return propValue.every(isNode);
                if (null === propValue || isValidElement(propValue)) return !0;
                var iteratorFn = // Before Symbol spec.
                /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
                function(maybeIterable) {
                    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
                    if ("function" == typeof iteratorFn) return iteratorFn;
                }(propValue);
                if (!iteratorFn) return !1;
                var step, iterator = iteratorFn.call(propValue);
                if (iteratorFn !== propValue.entries) {
                    for (;!(step = iterator.next()).done; ) if (!isNode(step.value)) return !1;
                } else 
                // Iterator will provide entry [k,v] tuples rather than values.
                for (;!(step = iterator.next()).done; ) {
                    var entry = step.value;
                    if (entry && !isNode(entry[1])) return !1;
                }
                return !0;

              default:
                return !1;
            }
        }
        // Equivalent of `typeof` but with special handling for array and regexp.
        function getPropType(propValue) {
            var propType = typeof propValue;
            return Array.isArray(propValue) ? "array" : propValue instanceof RegExp ? "object" : function(propType, propValue) {
                // Native Symbol.
                return "symbol" === propType || "Symbol" === propValue["@@toStringTag"] || "function" == typeof Symbol && propValue instanceof Symbol;
                // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
                        }(propType, propValue) ? "symbol" : propType;
        }
        // This handles more types than `getPropType`. Only used for error messages.
        // See `createPrimitiveTypeChecker`.
                function getPreciseType(propValue) {
            if (void 0 === propValue || null === propValue) return "" + propValue;
            var propType = getPropType(propValue);
            if ("object" === propType) {
                if (propValue instanceof Date) return "date";
                if (propValue instanceof RegExp) return "regexp";
            }
            return propType;
        }
        // Returns a string that is postfixed to a warning about an invalid type.
        // For example, "undefined" or "of type array"
                function getPostfixForTypeWarning(value) {
            var type = getPreciseType(value);
            switch (type) {
              case "array":
              case "object":
                return "an " + type;

              case "boolean":
              case "date":
              case "regexp":
                return "a " + type;

              default:
                return type;
            }
        }
        return PropTypeError.prototype = Error.prototype, ReactPropTypes.checkPropTypes = checkPropTypes_1, 
        ReactPropTypes.PropTypes = ReactPropTypes, ReactPropTypes;
    }, propTypes = createCommonjsModule(function(module) {
        var REACT_ELEMENT_TYPE = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
        module.exports = factoryWithTypeCheckers(function(object) {
            return "object" == typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
        }, !0);
    }), warning_1 = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) args[key - 2] = arguments[key];
        if (void 0 === format) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        condition || function(format, args) {
            var len = arguments.length;
            args = new Array(len > 2 ? len - 2 : 0);
            for (var key = 2; key < len; key++) args[key - 2] = arguments[key];
            var argIndex = 0, message = "Warning: " + format.replace(/%s/g, function() {
                return args[argIndex++];
            });
            "undefined" != typeof console && console.error(message);
            try {
                // --- Welcome to debugging React ---
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
            } catch (x) {}
        }.apply(null, [ format ].concat(args));
    }, inDOM = createCommonjsModule(function(module, exports) {
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = !("undefined" == typeof window || !window.document || !window.document.createElement), 
        module.exports = exports.default;
    });
    unwrapExports(inDOM);
    var properties = createCommonjsModule(function(module, exports) {
        var obj;
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;
        var transform = "transform", prefix = void 0, transitionEnd = void 0, animationEnd = void 0, transitionProperty = void 0, transitionDuration = void 0, transitionTiming = void 0, transitionDelay = void 0, animationName = void 0, animationDuration = void 0, animationTiming = void 0, animationDelay = void 0;
        if (((obj = inDOM) && obj.__esModule ? obj : {
            default: obj
        }).default) {
            var _getTransitionPropert = function() {
                for (var style = document.createElement("div").style, vendorMap = {
                    O: function(e) {
                        return "o" + e.toLowerCase();
                    },
                    Moz: function(e) {
                        return e.toLowerCase();
                    },
                    Webkit: function(e) {
                        return "webkit" + e;
                    },
                    ms: function(e) {
                        return "MS" + e;
                    }
                }, vendors = Object.keys(vendorMap), transitionEnd = void 0, animationEnd = void 0, prefix = "", i = 0; i < vendors.length; i++) {
                    var vendor = vendors[i];
                    if (vendor + "TransitionProperty" in style) {
                        prefix = "-" + vendor.toLowerCase(), transitionEnd = vendorMap[vendor]("TransitionEnd"), 
                        animationEnd = vendorMap[vendor]("AnimationEnd");
                        break;
                    }
                }
                !transitionEnd && "transitionProperty" in style && (transitionEnd = "transitionend");
                !animationEnd && "animationName" in style && (animationEnd = "animationend");
                return style = null, {
                    animationEnd: animationEnd,
                    transitionEnd: transitionEnd,
                    prefix: prefix
                };
            }();
            prefix = _getTransitionPropert.prefix, exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd, 
            exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd, exports.transform = transform = prefix + "-" + transform, 
            exports.transitionProperty = transitionProperty = prefix + "-transition-property", 
            exports.transitionDuration = transitionDuration = prefix + "-transition-duration", 
            exports.transitionDelay = transitionDelay = prefix + "-transition-delay", exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function", 
            exports.animationName = animationName = prefix + "-animation-name", exports.animationDuration = animationDuration = prefix + "-animation-duration", 
            exports.animationTiming = animationTiming = prefix + "-animation-delay", exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
        }
        exports.transform = transform, exports.transitionProperty = transitionProperty, 
        exports.transitionTiming = transitionTiming, exports.transitionDelay = transitionDelay, 
        exports.transitionDuration = transitionDuration, exports.transitionEnd = transitionEnd, 
        exports.animationName = animationName, exports.animationDuration = animationDuration, 
        exports.animationTiming = animationTiming, exports.animationDelay = animationDelay, 
        exports.animationEnd = animationEnd, exports.default = {
            transform: transform,
            end: transitionEnd,
            property: transitionProperty,
            timing: transitionTiming,
            delay: transitionDelay,
            duration: transitionDuration
        };
    }), transitionInfo = unwrapExports(properties), addEventListener = (properties.animationEnd, 
    properties.animationDelay, properties.animationTiming, properties.animationDuration, 
    properties.animationName, properties.transitionEnd, properties.transitionDuration, 
    properties.transitionDelay, properties.transitionTiming, properties.transitionProperty, 
    properties.transform, unwrapExports(createCommonjsModule(function(module, exports) {
        var obj;
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var on = function() {};
        ((obj = inDOM) && obj.__esModule ? obj : {
            default: obj
        }).default && (on = document.addEventListener ? function(node, eventName, handler, capture) {
            return node.addEventListener(eventName, handler, capture || !1);
        } : document.attachEvent ? function(node, eventName, handler) {
            return node.attachEvent("on" + eventName, function(e) {
                (e = e || window.event).target = e.target || e.srcElement, e.currentTarget = node, 
                handler.call(node, e);
            });
        } : void 0), exports.default = on, module.exports = exports.default;
    }))), removeEventListener = unwrapExports(createCommonjsModule(function(module, exports) {
        var obj;
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var off = function() {};
        ((obj = inDOM) && obj.__esModule ? obj : {
            default: obj
        }).default && (off = document.addEventListener ? function(node, eventName, handler, capture) {
            return node.removeEventListener(eventName, handler, capture || !1);
        } : document.attachEvent ? function(node, eventName, handler) {
            return node.detachEvent("on" + eventName, handler);
        } : void 0), exports.default = off, module.exports = exports.default;
    })), checkIndexBounds = function(props) {
        var index = props.index, children = props.children, childrenCount = React.Children.count(children);
        warning_1(index >= 0 && index <= childrenCount, "react-swipeable-view: the new index: ".concat(index, " is out of bounds: [0-").concat(childrenCount, "]."));
    }, constant = {
        RESISTANCE_COEF: .6,
        // This value is closed to what browsers are using internally to
        // trigger a native scroll.
        UNCERTAINTY_THRESHOLD: 3
    };
    // Extended version of % with negative integer support.
    function addEventListenerEnhanced(node, event, handler, options) {
        return addEventListener(node, event, handler, options), {
            remove: function() {
                removeEventListener(node, event, handler, options);
            }
        };
    }
    var styleInjected = !1;
 // Support old version of iOS and IE 10.
    // To be deleted in 2019.
        var styles_container = {
        direction: "ltr",
        display: "flex",
        willChange: "transform"
    }, styles_slide = {
        width: "100%",
        WebkitFlexShrink: 0,
        flexShrink: 0,
        overflow: "auto"
    }, axisProperties = {
        root: {
            x: {
                overflowX: "hidden"
            },
            "x-reverse": {
                overflowX: "hidden"
            },
            y: {
                overflowY: "hidden"
            },
            "y-reverse": {
                overflowY: "hidden"
            }
        },
        flexDirection: {
            x: "row",
            "x-reverse": "row-reverse",
            y: "column",
            "y-reverse": "column-reverse"
        },
        transform: {
            x: function(translate) {
                return "translate(".concat(-translate, "%, 0)");
            },
            "x-reverse": function(translate) {
                return "translate(".concat(translate, "%, 0)");
            },
            y: function(translate) {
                return "translate(0, ".concat(-translate, "%)");
            },
            "y-reverse": function(translate) {
                return "translate(0, ".concat(translate, "%)");
            }
        },
        length: {
            x: "width",
            "x-reverse": "width",
            y: "height",
            "y-reverse": "height"
        },
        rotationMatrix: {
            x: {
                x: [ 1, 0 ],
                y: [ 0, 1 ]
            },
            "x-reverse": {
                x: [ -1, 0 ],
                y: [ 0, 1 ]
            },
            y: {
                x: [ 0, 1 ],
                y: [ 1, 0 ]
            },
            "y-reverse": {
                x: [ 0, -1 ],
                y: [ 1, 0 ]
            }
        },
        scrollPosition: {
            x: "scrollLeft",
            "x-reverse": "scrollLeft",
            y: "scrollTop",
            "y-reverse": "scrollTop"
        },
        scrollLength: {
            x: "scrollWidth",
            "x-reverse": "scrollWidth",
            y: "scrollHeight",
            "y-reverse": "scrollHeight"
        },
        clientLength: {
            x: "clientWidth",
            "x-reverse": "clientWidth",
            y: "clientHeight",
            "y-reverse": "clientHeight"
        }
    };
    function createTransition(property, options) {
        var duration = options.duration, easeFunction = options.easeFunction, delay = options.delay;
        return "".concat(property, " ").concat(duration, " ").concat(easeFunction, " ").concat(delay);
    }
 // We are using a 2x2 rotation matrix.
        function applyRotationMatrix(touch, axis) {
        var rotationMatrix = axisProperties.rotationMatrix[axis];
        return {
            pageX: rotationMatrix.x[0] * touch.pageX + rotationMatrix.x[1] * touch.pageY,
            pageY: rotationMatrix.y[0] * touch.pageX + rotationMatrix.y[1] * touch.pageY
        };
    }
    function adaptMouse(event) {
        return event.touches = [ {
            pageX: event.pageX,
            pageY: event.pageY
        } ], event;
    }
    // We can only have one node at the time claiming ownership for handling the swipe.
    // Otherwise, the UX would be confusing.
    // That's why we use a singleton here.
    var nodeWhoClaimedTheScroll = null;
    var SwipeableViews = 
    /* */
    function(_React$Component) {
        function SwipeableViews(props) {
            var _this;
            return function(instance, Constructor) {
                if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
            }(this, SwipeableViews), (_this = _possibleConstructorReturn(this, _getPrototypeOf(SwipeableViews).call(this, props))).rootNode = null, 
            _this.containerNode = null, _this.ignoreNextScrollEvents = !1, _this.viewLength = 0, 
            _this.startX = 0, _this.lastX = 0, _this.vx = 0, _this.startY = 0, _this.isSwiping = void 0, 
            _this.started = !1, _this.startIndex = 0, _this.transitionListener = null, _this.touchMoveListener = null, 
            _this.activeSlide = null, _this.indexCurrent = null, _this.firstRenderTimeout = null, 
            _this.setRootNode = function(node) {
                _this.rootNode = node;
            }, _this.setContainerNode = function(node) {
                _this.containerNode = node;
            }, _this.setActiveSlide = function(node) {
                _this.activeSlide = node, _this.updateHeight();
            }, _this.handleSwipeStart = function(event) {
                var axis = _this.props.axis, touch = applyRotationMatrix(event.touches[0], axis);
                _this.viewLength = _this.rootNode.getBoundingClientRect()[axisProperties.length[axis]], 
                _this.startX = touch.pageX, _this.lastX = touch.pageX, _this.vx = 0, _this.startY = touch.pageY, 
                _this.isSwiping = void 0, _this.started = !0;
                var computedStyle = window.getComputedStyle(_this.containerNode), transform = computedStyle.getPropertyValue("-webkit-transform") || computedStyle.getPropertyValue("transform");
                if (transform && "none" !== transform) {
                    var transformValues = transform.split("(")[1].split(")")[0].split(","), rootStyle = window.getComputedStyle(_this.rootNode), tranformNormalized = applyRotationMatrix({
                        pageX: parseInt(transformValues[4], 10),
                        pageY: parseInt(transformValues[5], 10)
                    }, axis);
                    _this.startIndex = -tranformNormalized.pageX / (_this.viewLength - parseInt(rootStyle.paddingLeft, 10) - parseInt(rootStyle.paddingRight, 10)) || 0;
                }
            }, _this.handleSwipeMove = function(event) {
                // The touch start event can be cancel.
                // Makes sure we set a starting point.
                if (_this.started) {
                    // We are not supposed to hanlde this touch move.
                    if (null === nodeWhoClaimedTheScroll || nodeWhoClaimedTheScroll === _this.rootNode) {
                        var _this$props = _this.props, axis = _this$props.axis, children = _this$props.children, ignoreNativeScroll = _this$props.ignoreNativeScroll, onSwitching = _this$props.onSwitching, resistance = _this$props.resistance, touch = applyRotationMatrix(event.touches[0], axis);
                        // We don't know yet.
                        if (void 0 === _this.isSwiping) {
                            var dx = Math.abs(touch.pageX - _this.startX), dy = Math.abs(touch.pageY - _this.startY), isSwiping = dx > dy && dx > constant.UNCERTAINTY_THRESHOLD;
                            // We let the parent handle the scroll.
                            if (!resistance && ("y" === axis || "y-reverse" === axis) && (0 === _this.indexCurrent && _this.startX < touch.pageX || _this.indexCurrent === React.Children.count(_this.props.children) - 1 && _this.startX > touch.pageX)) return void (_this.isSwiping = !1);
 // We are likely to be swiping, let's prevent the scroll event.
                                                        if (dx > dy && event.preventDefault(), !0 === isSwiping || dy > constant.UNCERTAINTY_THRESHOLD) // Shift the starting point.
                            return _this.isSwiping = isSwiping, void (_this.startX = touch.pageX);
 // Let's wait the next touch event to move something.
                                                }
                        if (!0 === _this.isSwiping) {
                            // We are swiping, let's prevent the scroll event.
                            event.preventDefault(), // Low Pass filter.
                            _this.vx = .5 * _this.vx + .5 * (touch.pageX - _this.lastX), _this.lastX = touch.pageX;
                            var _computeIndex = function(params) {
                                var newStartX, children = params.children, startIndex = params.startIndex, startX = params.startX, pageX = params.pageX, viewLength = params.viewLength, resistance = params.resistance, indexMax = React.Children.count(children) - 1, index = startIndex + (startX - pageX) / viewLength;
                                return resistance ? index < 0 ? index = Math.exp(index * constant.RESISTANCE_COEF) - 1 : index > indexMax && (index = indexMax + 1 - Math.exp((indexMax - index) * constant.RESISTANCE_COEF)) : 
                                // Reset the starting point
                                index < 0 ? newStartX = ((index = 0) - startIndex) * viewLength + pageX : index > indexMax && (newStartX = ((index = indexMax) - startIndex) * viewLength + pageX), 
                                {
                                    index: index,
                                    startX: newStartX
                                };
                            }({
                                children: children,
                                resistance: resistance,
                                pageX: touch.pageX,
                                startIndex: _this.startIndex,
                                startX: _this.startX,
                                viewLength: _this.viewLength
                            }), index = _computeIndex.index, startX = _computeIndex.startX;
 // Add support for native scroll elements.
                                                        if (null === nodeWhoClaimedTheScroll && !ignoreNativeScroll) // We abort the touch move handler.
                            if (function(params) {
                                var domTreeShapes = params.domTreeShapes, pageX = params.pageX, startX = params.startX, axis = params.axis;
                                return domTreeShapes.some(function(shape) {
                                    // Determine if we are going backward or forward.
                                    var goingForward = pageX >= startX;
                                    "x" !== axis && "y" !== axis || (goingForward = !goingForward);
                                    var scrollPosition = shape[axisProperties.scrollPosition[axis]], areNotAtStart = scrollPosition > 0, areNotAtEnd = scrollPosition + shape[axisProperties.clientLength[axis]] < shape[axisProperties.scrollLength[axis]];
                                    return !!(goingForward && areNotAtEnd || !goingForward && areNotAtStart) && (nodeWhoClaimedTheScroll = shape.element, 
                                    !0);
                                });
                            }({
                                domTreeShapes: function(element, rootNode) {
                                    for (var domTreeShapes = []; element && element !== rootNode && !element.hasAttribute("data-swipeable"); ) {
                                        var style = window.getComputedStyle(element);
                                        // Ignore the scroll children if the element is absolute positioned.
                                        "absolute" === style.getPropertyValue("position") || // Ignore the scroll children if the element has an overflowX hidden
                                        "hidden" === style.getPropertyValue("overflow-x") ? domTreeShapes = [] : (element.clientWidth > 0 && element.scrollWidth > element.clientWidth || element.clientHeight > 0 && element.scrollHeight > element.clientHeight) && 
                                        // Ignore the nodes that have no width.
                                        // Keep elements with a scroll
                                        domTreeShapes.push({
                                            element: element,
                                            scrollWidth: element.scrollWidth,
                                            scrollHeight: element.scrollHeight,
                                            clientWidth: element.clientWidth,
                                            clientHeight: element.clientHeight,
                                            scrollLeft: element.scrollLeft,
                                            scrollTop: element.scrollTop
                                        }), element = element.parentNode;
                                    }
                                    return domTreeShapes;
                                }(event.target, _this.rootNode),
                                startX: _this.startX,
                                pageX: touch.pageX,
                                axis: axis
                            })) return;
 // We are moving toward the edges.
                                                        startX ? _this.startX = startX : null === nodeWhoClaimedTheScroll && (nodeWhoClaimedTheScroll = _this.rootNode), 
                            _this.setIndexCurrent(index);
                            var callback = function() {
                                onSwitching && onSwitching(index, "move");
                            };
                            !_this.state.displaySameSlide && _this.state.isDragging || _this.setState({
                                displaySameSlide: !1,
                                isDragging: !0
                            }, callback), callback();
                        }
                    }
                } else _this.handleTouchStart(event);
            }, _this.handleSwipeEnd = function() {
                // The touch start event can be cancel.
                // Makes sure that a starting point is set.
                if (nodeWhoClaimedTheScroll = null, _this.started && (_this.started = !1, !0 === _this.isSwiping)) {
                    var indexNew, indexLatest = _this.state.indexLatest, indexCurrent = _this.indexCurrent, delta = indexLatest - indexCurrent;
                    // Quick movement
                    indexNew = Math.abs(_this.vx) > _this.props.threshold ? _this.vx > 0 ? Math.floor(indexCurrent) : Math.ceil(indexCurrent) : Math.abs(delta) > _this.props.hysteresis ? delta > 0 ? Math.floor(indexCurrent) : Math.ceil(indexCurrent) : indexLatest;
                    var indexMax = React.Children.count(_this.props.children) - 1;
                    indexNew < 0 ? indexNew = 0 : indexNew > indexMax && (indexNew = indexMax), _this.setIndexCurrent(indexNew), 
                    _this.setState({
                        indexLatest: indexNew,
                        isDragging: !1
                    }, function() {
                        _this.props.onSwitching && _this.props.onSwitching(indexNew, "end"), _this.props.onChangeIndex && indexNew !== indexLatest && _this.props.onChangeIndex(indexNew, indexLatest, {
                            reason: "swipe"
                        }), // Manually calling handleTransitionEnd in that case as isn't otherwise.
                        indexCurrent === indexLatest && _this.handleTransitionEnd();
                    });
                }
            }, _this.handleTouchStart = function(event) {
                _this.props.onTouchStart && _this.props.onTouchStart(event), _this.handleSwipeStart(event);
            }, _this.handleTouchEnd = function(event) {
                _this.props.onTouchEnd && _this.props.onTouchEnd(event), _this.handleSwipeEnd(event);
            }, _this.handleMouseDown = function(event) {
                _this.props.onMouseDown && _this.props.onMouseDown(event), event.persist(), _this.handleSwipeStart(adaptMouse(event));
            }, _this.handleMouseUp = function(event) {
                _this.props.onMouseUp && _this.props.onMouseUp(event), _this.handleSwipeEnd(adaptMouse(event));
            }, _this.handleMouseLeave = function(event) {
                _this.props.onMouseLeave && _this.props.onMouseLeave(event), // Filter out events
                _this.started && _this.handleSwipeEnd(adaptMouse(event));
            }, _this.handleMouseMove = function(event) {
                _this.props.onMouseMove && _this.props.onMouseMove(event), // Filter out events
                _this.started && _this.handleSwipeMove(adaptMouse(event));
            }, _this.handleScroll = function(event) {
                // Ignore events bubbling up.
                if (_this.props.onScroll && _this.props.onScroll(event), event.target === _this.rootNode) if (_this.ignoreNextScrollEvents) _this.ignoreNextScrollEvents = !1; else {
                    var indexLatest = _this.state.indexLatest, indexNew = Math.ceil(event.target.scrollLeft / event.target.clientWidth) + indexLatest;
                    _this.ignoreNextScrollEvents = !0, // Reset the scroll position.
                    event.target.scrollLeft = 0, _this.props.onChangeIndex && indexNew !== indexLatest && _this.props.onChangeIndex(indexNew, indexLatest, {
                        reason: "focus"
                    });
                }
            }, _this.updateHeight = function() {
                if (null !== _this.activeSlide) {
                    var child = _this.activeSlide.children[0];
                    void 0 !== child && void 0 !== child.offsetHeight && _this.state.heightLatest !== child.offsetHeight && _this.setState({
                        heightLatest: child.offsetHeight
                    });
                }
            }, checkIndexBounds(props), _this.state = {
                indexLatest: props.index,
                // Set to true as soon as the component is swiping.
                // It's the state counter part of this.isSwiping.
                isDragging: !1,
                // Help with SSR logic and lazy loading logic.
                renderOnlyActive: !props.disableLazyLoading,
                heightLatest: 0,
                // Let the render method that we are going to display the same slide than previously.
                displaySameSlide: !0
            }, _this.setIndexCurrent(props.index), _this;
        }
        var Constructor, protoProps, staticProps;
        return function(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && _setPrototypeOf(subClass, superClass);
        }(SwipeableViews, React.Component), Constructor = SwipeableViews, (protoProps = [ {
            key: "getChildContext",
            value: function() {
                var _this2 = this;
                return {
                    swipeableViews: {
                        slideUpdateHeight: function() {
                            _this2.updateHeight();
                        }
                    }
                };
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var _this3 = this;
                // Subscribe to transition end events.
                                this.transitionListener = addEventListenerEnhanced(this.containerNode, transitionInfo.end, function(event) {
                    event.target === _this3.containerNode && _this3.handleTransitionEnd();
                }), // Block the thread to handle that event.
                this.touchMoveListener = addEventListenerEnhanced(this.rootNode, "touchmove", function(event) {
                    // Handling touch events is disabled.
                    _this3.props.disabled || _this3.handleSwipeMove(event);
                }, {
                    passive: !1
                }), this.props.disableLazyLoading || (this.firstRenderTimeout = setTimeout(function() {
                    _this3.setState({
                        renderOnlyActive: !1
                    });
                }, 0)), function() {
                    // Inject once for all the instances
                    if (!styleInjected) {
                        var style = document.createElement("style");
                        style.innerHTML = "\n      .react-swipeable-view-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n      }\n      .react-swipeable-view-container > div {\n        -ms-flex-negative: 0;\n      }\n    ", 
                        document.body && document.body.appendChild(style), styleInjected = !0;
                    }
                }(), // Send all functions in an object if action param is set.
                this.props.action && this.props.action({
                    updateHeight: this.updateHeight
                });
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(nextProps) {
                var index = nextProps.index;
                "number" == typeof index && index !== this.props.index && (checkIndexBounds(nextProps), 
                this.setIndexCurrent(index), this.setState({
                    // If true, we are going to change the children. We shoudn't animate it.
                    displaySameSlide: function(props, nextProps) {
                        var displaySameSlide = !1;
                        if (props.children.length && nextProps.children.length) {
                            var oldChildren = props.children[props.index], oldKey = oldChildren ? oldChildren.key : "empty";
                            if (null !== oldKey) {
                                var newChildren = nextProps.children[nextProps.index];
                                oldKey === (newChildren ? newChildren.key : "empty") && (displaySameSlide = !0);
                            }
                        }
                        return displaySameSlide;
                    }(this.props, nextProps),
                    indexLatest: index
                }));
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.transitionListener.remove(), this.touchMoveListener.remove(), clearTimeout(this.firstRenderTimeout);
            }
        }, {
            key: "setIndexCurrent",
            value: function(indexCurrent) {
                if (this.props.animateTransitions || this.indexCurrent === indexCurrent || this.handleTransitionEnd(), 
                this.indexCurrent = indexCurrent, this.containerNode) {
                    var axis = this.props.axis, transform = axisProperties.transform[axis](100 * indexCurrent);
                    this.containerNode.style.WebkitTransform = transform, this.containerNode.style.transform = transform;
                }
            }
        }, {
            key: "handleTransitionEnd",
            value: function() {
                this.props.onTransitionEnd && (// Filters out when changing the children
                this.state.displaySameSlide || this.state.isDragging || this.props.onTransitionEnd());
            }
        }, {
            key: "render",
            value: function() {
                var _this4 = this, _this$props2 = this.props, animateHeight = (_this$props2.action, 
                _this$props2.animateHeight), animateTransitions = _this$props2.animateTransitions, axis = _this$props2.axis, children = _this$props2.children, containerStyleProp = _this$props2.containerStyle, disabled = _this$props2.disabled, enableMouseEvents = (_this$props2.disableLazyLoading, 
                _this$props2.enableMouseEvents), slideStyleProp = (_this$props2.hysteresis, _this$props2.ignoreNativeScroll, 
                _this$props2.index, _this$props2.onChangeIndex, _this$props2.onSwitching, _this$props2.onTransitionEnd, 
                _this$props2.resistance, _this$props2.slideStyle), slideClassName = _this$props2.slideClassName, springConfig = _this$props2.springConfig, style = _this$props2.style, other = (_this$props2.threshold, 
                _objectWithoutProperties(_this$props2, [ "action", "animateHeight", "animateTransitions", "axis", "children", "containerStyle", "disabled", "disableLazyLoading", "enableMouseEvents", "hysteresis", "ignoreNativeScroll", "index", "onChangeIndex", "onSwitching", "onTransitionEnd", "resistance", "slideStyle", "slideClassName", "springConfig", "style", "threshold" ])), _this$state = this.state, displaySameSlide = _this$state.displaySameSlide, heightLatest = _this$state.heightLatest, indexLatest = _this$state.indexLatest, isDragging = _this$state.isDragging, renderOnlyActive = _this$state.renderOnlyActive, touchEvents = disabled ? {} : {
                    onTouchStart: this.handleTouchStart,
                    onTouchEnd: this.handleTouchEnd
                }, mouseEvents = !disabled && enableMouseEvents ? {
                    onMouseDown: this.handleMouseDown,
                    onMouseUp: this.handleMouseUp,
                    onMouseLeave: this.handleMouseLeave,
                    onMouseMove: this.handleMouseMove
                } : {};
                // There is no point to animate if we are already providing a height.
                warning_1(!animateHeight || !containerStyleProp || !containerStyleProp.height, "react-swipeable-view: You are setting animateHeight to true but you are\nalso providing a custom height.\nThe custom height has a higher priority than the animateHeight property.\nSo animateHeight is most likely having no effect at all.");
                var transition, WebkitTransition, slideStyle = _extends({}, styles_slide, slideStyleProp);
                if (isDragging || !animateTransitions || displaySameSlide) transition = "all 0s ease 0s", 
                WebkitTransition = "all 0s ease 0s"; else if (transition = createTransition("transform", springConfig), 
                WebkitTransition = createTransition("-webkit-transform", springConfig), 0 !== heightLatest) {
                    var additionalTranstion = ", ".concat(createTransition("height", springConfig));
                    transition += additionalTranstion, WebkitTransition += additionalTranstion;
                }
                var containerStyle = {
                    height: null,
                    WebkitFlexDirection: axisProperties.flexDirection[axis],
                    flexDirection: axisProperties.flexDirection[axis],
                    WebkitTransition: WebkitTransition,
                    transition: transition
                };
 // Apply the styles for SSR considerations
                                if (!renderOnlyActive) {
                    var transform = axisProperties.transform[axis](100 * this.indexCurrent);
                    containerStyle.WebkitTransform = transform, containerStyle.transform = transform;
                }
                return animateHeight && (containerStyle.height = heightLatest), React.createElement("div", _extends({
                    ref: this.setRootNode,
                    style: _extends({}, axisProperties.root[axis], style)
                }, other, touchEvents, mouseEvents, {
                    onScroll: this.handleScroll
                }), React.createElement("div", {
                    ref: this.setContainerNode,
                    style: _extends({}, containerStyle, styles_container, containerStyleProp),
                    className: "react-swipeable-view-container"
                }, React.Children.map(children, function(child, indexChild) {
                    if (renderOnlyActive && indexChild !== indexLatest) return null;
                    var ref;
                    warning_1(React.isValidElement(child), "react-swipeable-view: one of the children provided is invalid: ".concat(child, ".\nWe are expecting a valid React Element"));
                    var hidden = !0;
                    return indexChild === indexLatest && (hidden = !1, animateHeight && (ref = _this4.setActiveSlide, 
                    slideStyle.overflowY = "hidden")), React.createElement("div", {
                        ref: ref,
                        style: slideStyle,
                        className: slideClassName,
                        "aria-hidden": hidden,
                        "data-swipeable": "true"
                    }, child);
                })));
            }
        } ]) && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), 
        SwipeableViews;
    }();
 // Added as an ads for people using the React dev tools in production.
    // So they know, the tool used to build the awesome UI they
    // are looking at/retro engineering.
        return SwipeableViews.displayName = "ReactSwipableView", SwipeableViews.propTypes = {
        /**
     * This is callback property. It's called by the component on mount.
     * This is useful when you want to trigger an action programmatically.
     * It currently only supports updateHeight() action.
     *
     * @param {object} actions This object contains all posible actions
     * that can be triggered programmatically.
     */
        action: propTypes.func,
        /**
     * If `true`, the height of the container will be animated to match the current slide height.
     * Animating another style property has a negative impact regarding performance.
     */
        animateHeight: propTypes.bool,
        /**
     * If `false`, changes to the index prop will not cause an animated transition.
     */
        animateTransitions: propTypes.bool,
        /**
     * The axis on which the slides will slide.
     */
        axis: propTypes.oneOf([ "x", "x-reverse", "y", "y-reverse" ]),
        /**
     * Use this property to provide your slides.
     */
        children: propTypes.node.isRequired,
        /**
     * This is the inlined style that will be applied
     * to each slide container.
     */
        containerStyle: propTypes.object,
        /**
     * If `true`, it will disable touch events.
     * This is useful when you want to prohibit the user from changing slides.
     */
        disabled: propTypes.bool,
        /**
     * This is the config used to disable lazyloding,
     * if `true` will render all the views in first rendering.
     */
        disableLazyLoading: propTypes.bool,
        /**
     * If `true`, it will enable mouse events.
     * This will allow the user to perform the relevant swipe actions with a mouse.
     */
        enableMouseEvents: propTypes.bool,
        /**
     * Configure hysteresis between slides. This value determines how far
     * should user swipe to switch slide.
     */
        hysteresis: propTypes.number,
        /**
     * If `true`, it will ignore native scroll container.
     * It can be used to filter out false positive that blocks the swipe.
     */
        ignoreNativeScroll: propTypes.bool,
        /**
     * This is the index of the slide to show.
     * This is useful when you want to change the default slide shown.
     * Or when you have tabs linked to each slide.
     */
        index: propTypes.number,
        /**
     * This is callback prop. It's call by the
     * component when the shown slide change after a swipe made by the user.
     * This is useful when you have tabs linked to each slide.
     *
     * @param {integer} index This is the current index of the slide.
     * @param {integer} indexLatest This is the oldest index of the slide.
     * @param {object} meta Meta data containing more information about the event.
     */
        onChangeIndex: propTypes.func,
        /**
     * @ignore
     */
        onMouseDown: propTypes.func,
        /**
     * @ignore
     */
        onMouseLeave: propTypes.func,
        /**
     * @ignore
     */
        onMouseMove: propTypes.func,
        /**
     * @ignore
     */
        onMouseUp: propTypes.func,
        /**
     * @ignore
     */
        onScroll: propTypes.func,
        /**
     * This is callback prop. It's called by the
     * component when the slide switching.
     * This is useful when you want to implement something corresponding
     * to the current slide position.
     *
     * @param {integer} index This is the current index of the slide.
     * @param {string} type Can be either `move` or `end`.
     */
        onSwitching: propTypes.func,
        /**
     * @ignore
     */
        onTouchEnd: propTypes.func,
        /**
     * @ignore
     */
        onTouchMove: propTypes.func,
        /**
     * @ignore
     */
        onTouchStart: propTypes.func,
        /**
     * The callback that fires when the animation comes to a rest.
     * This is useful to defer CPU intensive task.
     */
        onTransitionEnd: propTypes.func,
        /**
     * If `true`, it will add bounds effect on the edges.
     */
        resistance: propTypes.bool,
        /**
     * This is the className that will be applied
     * on the slide component.
     */
        slideClassName: propTypes.string,
        /**
     * This is the inlined style that will be applied
     * on the slide component.
     */
        slideStyle: propTypes.object,
        /**
     * This is the config used to create CSS transitions.
     * This is useful to change the dynamic of the transition.
     */
        springConfig: propTypes.shape({
            delay: propTypes.string,
            duration: propTypes.string,
            easeFunction: propTypes.string
        }),
        /**
     * This is the inlined style that will be applied
     * on the root component.
     */
        style: propTypes.object,
        /**
     * This is the threshold used for detecting a quick swipe.
     * If the computed speed is above this value, the index change.
     */
        threshold: propTypes.number
    }, SwipeableViews.defaultProps = {
        animateHeight: !1,
        animateTransitions: !0,
        axis: "x",
        disabled: !1,
        disableLazyLoading: !1,
        enableMouseEvents: !1,
        hysteresis: .6,
        ignoreNativeScroll: !1,
        index: 0,
        threshold: 5,
        springConfig: {
            duration: "0.35s",
            easeFunction: "cubic-bezier(0.15, 0.3, 0.25, 1)",
            delay: "0s"
        },
        resistance: !1
    }, SwipeableViews.childContextTypes = {
        swipeableViews: propTypes.shape({
            slideUpdateHeight: propTypes.func
        })
    }, SwipeableViews;
});
