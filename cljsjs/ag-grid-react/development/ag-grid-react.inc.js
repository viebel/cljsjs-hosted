var agGridReact =
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
/***/ (function(module, exports, __webpack_require__) {

	exports.AgGridReact = __webpack_require__(1).AgGridReact;
	exports.AgGridColumn = __webpack_require__(15).AgGridColumn;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// ag-grid-react v21.0.1
	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	var PropTypes = __webpack_require__(4);
	var AgGrid = __webpack_require__(14);
	var ag_grid_community_1 = __webpack_require__(14);
	var agGridColumn_1 = __webpack_require__(15);
	var reactComponent_1 = __webpack_require__(16);
	var changeDetectionService_1 = __webpack_require__(18);
	var legacyReactComponent_1 = __webpack_require__(19);
	var AgGridReact = /** @class */ (function (_super) {
	    __extends(AgGridReact, _super);
	    function AgGridReact(props, state) {
	        var _this = _super.call(this, props, state) || this;
	        _this.props = props;
	        _this.state = state;
	        _this.destroyed = false;
	        _this.changeDetectionService = new changeDetectionService_1.ChangeDetectionService();
	        _this.api = null;
	        _this.portals = [];
	        _this.hasPendingPortalUpdate = false;
	        return _this;
	    }
	    AgGridReact.prototype.render = function () {
	        var _this = this;
	        return React.createElement("div", {
	            style: this.createStyleForDiv(),
	            ref: function (e) {
	                _this.eGridDiv = e;
	            }
	        }, this.portals);
	    };
	    AgGridReact.prototype.createStyleForDiv = function () {
	        var style = { height: "100%" };
	        // allow user to override styles
	        var containerStyle = this.props.containerStyle;
	        if (containerStyle) {
	            Object.keys(containerStyle).forEach(function (key) {
	                style[key] = containerStyle[key];
	            });
	        }
	        return style;
	    };
	    AgGridReact.prototype.componentDidMount = function () {
	        var gridParams = {
	            seedBeanInstances: {
	                agGridReact: this
	            }
	        };
	        var gridOptions = this.props.gridOptions || {};
	        if (agGridColumn_1.AgGridColumn.hasChildColumns(this.props)) {
	            gridOptions.columnDefs = agGridColumn_1.AgGridColumn.mapChildColumnDefs(this.props);
	        }
	        this.gridOptions = AgGrid.ComponentUtil.copyAttributesToGridOptions(gridOptions, this.props);
	        // don't need the return value
	        new AgGrid.Grid(this.eGridDiv, this.gridOptions, gridParams);
	        this.api = this.gridOptions.api;
	        this.columnApi = this.gridOptions.columnApi;
	    };
	    AgGridReact.prototype.shouldComponentUpdate = function () {
	        // we want full control of the dom, as ag-Grid doesn't use React internally,
	        // so for performance reasons we tell React we don't need render called after
	        // property changes.
	        return false;
	    };
	    AgGridReact.prototype.waitForInstance = function (reactComponent, resolve, runningTime) {
	        var _this = this;
	        if (runningTime === void 0) { runningTime = 0; }
	        if (reactComponent.isStatelesComponent() && reactComponent.statelessComponentRendered()) {
	            resolve(null);
	        }
	        else if (!reactComponent.isStatelesComponent() && reactComponent.getFrameworkComponentInstance()) {
	            resolve(null);
	        }
	        else {
	            if (runningTime >= AgGridReact.MAX_COMPONENT_CREATION_TIME) {
	                console.error("ag-Grid: React Component '" + reactComponent.getReactComponentName() + "' not created within " + AgGridReact.MAX_COMPONENT_CREATION_TIME + "ms");
	                return;
	            }
	            window.setTimeout(function () { return _this.waitForInstance(reactComponent, resolve, runningTime + 5); }, 5);
	        }
	    };
	    /**
	     * Mounts a react portal for components registered under the componentFramework.
	     * We do this because we want all portals to be in the same tree - in order to get
	     * Context to work properly.
	     */
	    AgGridReact.prototype.mountReactPortal = function (portal, reactComponent, resolve) {
	        this.portals = this.portals.concat([portal]);
	        this.batchUpdate(this.waitForInstance(reactComponent, resolve));
	    };
	    AgGridReact.prototype.batchUpdate = function (callback) {
	        var _this = this;
	        if (this.hasPendingPortalUpdate) {
	            return callback && callback();
	        }
	        setTimeout(function () {
	            if (_this.api) { // destroyed?
	                _this.forceUpdate(function () {
	                    callback && callback();
	                    _this.hasPendingPortalUpdate = false;
	                });
	            }
	        });
	        this.hasPendingPortalUpdate = true;
	    };
	    AgGridReact.prototype.destroyPortal = function (portal) {
	        this.portals = this.portals.filter(function (curPortal) { return curPortal !== portal; });
	        this.batchUpdate();
	    };
	    AgGridReact.prototype.getStrategyTypeForProp = function (propKey) {
	        if (propKey === 'rowData') {
	            // for row data we either return the supplied strategy, or:
	            // if deltaRowDataMode we default to IdentityChecks,
	            // if not we default to DeepValueChecks (with the rest of the properties)
	            if (!!this.props.rowDataChangeDetectionStrategy) {
	                return this.props.rowDataChangeDetectionStrategy;
	            }
	            else if (this.props['deltaRowDataMode']) {
	                return changeDetectionService_1.ChangeDetectionStrategyType.IdentityCheck;
	            }
	        }
	        // all non row data properties will default to DeepValueCheck
	        return changeDetectionService_1.ChangeDetectionStrategyType.DeepValueCheck;
	    };
	    AgGridReact.prototype.componentWillReceiveProps = function (nextProps) {
	        var changes = {};
	        this.extractGridPropertyChanges(nextProps, changes);
	        this.extractDeclarativeColDefChanges(nextProps, changes);
	        AgGrid.ComponentUtil.processOnChange(changes, this.gridOptions, this.api, this.columnApi);
	    };
	    AgGridReact.prototype.extractDeclarativeColDefChanges = function (nextProps, changes) {
	        var debugLogging = !!nextProps.debug;
	        if (agGridColumn_1.AgGridColumn.hasChildColumns(nextProps)) {
	            var detectionStrategy = this.changeDetectionService.getStrategy(changeDetectionService_1.ChangeDetectionStrategyType.DeepValueCheck);
	            var currentColDefs = this.gridOptions.columnDefs;
	            var newColDefs = agGridColumn_1.AgGridColumn.mapChildColumnDefs(nextProps);
	            if (!detectionStrategy.areEqual(currentColDefs, newColDefs)) {
	                if (debugLogging) {
	                    console.log("agGridReact: colDefs definitions changed");
	                }
	                changes['columnDefs'] =
	                    {
	                        previousValue: this.gridOptions.columnDefs,
	                        currentValue: agGridColumn_1.AgGridColumn.mapChildColumnDefs(nextProps)
	                    };
	            }
	        }
	    };
	    AgGridReact.prototype.extractGridPropertyChanges = function (nextProps, changes) {
	        var _this = this;
	        var debugLogging = !!nextProps.debug;
	        var changedKeys = Object.keys(nextProps);
	        changedKeys.forEach(function (propKey) {
	            if (AgGrid.ComponentUtil.ALL_PROPERTIES.indexOf(propKey) !== -1) {
	                var changeDetectionStrategy = _this.changeDetectionService.getStrategy(_this.getStrategyTypeForProp(propKey));
	                if (!changeDetectionStrategy.areEqual(_this.props[propKey], nextProps[propKey])) {
	                    if (debugLogging) {
	                        console.log("agGridReact: [" + propKey + "] property changed");
	                    }
	                    changes[propKey] = {
	                        previousValue: _this.props[propKey],
	                        currentValue: nextProps[propKey]
	                    };
	                }
	            }
	        });
	        AgGrid.ComponentUtil.getEventCallbacks().forEach(function (funcName) {
	            if (_this.props[funcName] !== nextProps[funcName]) {
	                if (debugLogging) {
	                    console.log("agGridReact: [" + funcName + "] event callback changed");
	                }
	                changes[funcName] = {
	                    previousValue: _this.props[funcName],
	                    currentValue: nextProps[funcName]
	                };
	            }
	        });
	    };
	    AgGridReact.prototype.componentWillUnmount = function () {
	        if (this.api) {
	            this.api.destroy();
	            this.api = null;
	        }
	    };
	    AgGridReact.MAX_COMPONENT_CREATION_TIME = 1000; // a second should be more than enough to instantiate a component
	    return AgGridReact;
	}(React.Component));
	exports.AgGridReact = AgGridReact;
	AgGridReact.propTypes = {
	    gridOptions: PropTypes.object
	};
	addProperties(AgGrid.ComponentUtil.getEventCallbacks(), PropTypes.func);
	addProperties(AgGrid.ComponentUtil.BOOLEAN_PROPERTIES, PropTypes.bool);
	addProperties(AgGrid.ComponentUtil.STRING_PROPERTIES, PropTypes.string);
	addProperties(AgGrid.ComponentUtil.OBJECT_PROPERTIES, PropTypes.object);
	addProperties(AgGrid.ComponentUtil.ARRAY_PROPERTIES, PropTypes.array);
	addProperties(AgGrid.ComponentUtil.NUMBER_PROPERTIES, PropTypes.number);
	addProperties(AgGrid.ComponentUtil.FUNCTION_PROPERTIES, PropTypes.func);
	function addProperties(listOfProps, propType) {
	    listOfProps.forEach(function (propKey) {
	        AgGridReact[propKey] = propType;
	    });
	}
	var ReactFrameworkComponentWrapper = /** @class */ (function (_super) {
	    __extends(ReactFrameworkComponentWrapper, _super);
	    function ReactFrameworkComponentWrapper() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    ReactFrameworkComponentWrapper.prototype.createWrapper = function (UserReactComponent) {
	        // at some point soon unstable_renderSubtreeIntoContainer is going to be dropped (and in a minor release at that)
	        // this uses the existing mechanism as long as possible, but switches over to using Portals when
	        // unstable_renderSubtreeIntoContainer is no longer an option
	        return this.useLegacyReact() ?
	            new legacyReactComponent_1.LegacyReactComponent(UserReactComponent, this.agGridReact) :
	            new reactComponent_1.ReactComponent(UserReactComponent, this.agGridReact);
	    };
	    ReactFrameworkComponentWrapper.prototype.useLegacyReact = function () {
	        // force use of react next (ie portals) if unstable_renderSubtreeIntoContainer is no longer present
	        // or if the user elects to try it
	        return (typeof ReactDOM.unstable_renderSubtreeIntoContainer !== "function")
	            || (this.agGridReact && this.agGridReact.gridOptions && !this.agGridReact.gridOptions.reactNext);
	    };
	    __decorate([
	        ag_grid_community_1.Autowired("agGridReact"),
	        __metadata("design:type", AgGridReact)
	    ], ReactFrameworkComponentWrapper.prototype, "agGridReact", void 0);
	    ReactFrameworkComponentWrapper = __decorate([
	        ag_grid_community_1.Bean("frameworkComponentWrapper")
	    ], ReactFrameworkComponentWrapper);
	    return ReactFrameworkComponentWrapper;
	}(ag_grid_community_1.BaseComponentWrapper));
	AgGrid.Grid.setFrameworkBeans([ReactFrameworkComponentWrapper]);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = __webpack_require__(6);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(9)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(13)();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;

	process.listeners = function (name) { return [] }

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	if (process.env.NODE_ENV === 'production') {
	  module.exports = __webpack_require__(7);
	} else {
	  module.exports = __webpack_require__(8);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/** @license React v16.8.6
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
	60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
	exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
	exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
	exports.isSuspense=function(a){return t(a)===p};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.8.6
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (process.env.NODE_ENV !== "production") {
	  (function() {
	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning$1 = lowPriorityWarning;

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_LAZY_TYPE:
	      case REACT_MEMO_TYPE:
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}

	// AsyncMode is deprecated along with isAsyncMode
	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;

	var hasWarnedAboutDeprecatedIsAsyncMode = false;

	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	  })();
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactIs = __webpack_require__(6);
	var assign = __webpack_require__(10);

	var ReactPropTypesSecret = __webpack_require__(11);
	var checkPropTypes = __webpack_require__(12);

	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

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
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

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

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (process.env.NODE_ENV !== 'production') {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
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
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
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
		} catch (err) {
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

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  var ReactPropTypesSecret = __webpack_require__(11);
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

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
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (process.env.NODE_ENV !== 'production') {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (process.env.NODE_ENV !== 'production') {
	    loggedTypeFailures = {};
	  }
	}

	module.exports = checkPropTypes;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(11);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = agGrid;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	// ag-grid-react v21.0.1
	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var react_1 = __webpack_require__(2);
	var PropTypes = __webpack_require__(4);
	var AgGrid = __webpack_require__(14);
	var AgGridColumn = /** @class */ (function (_super) {
	    __extends(AgGridColumn, _super);
	    function AgGridColumn(props, state) {
	        var _this = _super.call(this, props, state) || this;
	        _this.props = props;
	        _this.state = state;
	        return _this;
	    }
	    AgGridColumn.prototype.render = function () {
	        return null;
	    };
	    AgGridColumn.mapChildColumnDefs = function (columnProps) {
	        return React.Children.map(columnProps.children, function (child) {
	            return AgGridColumn.toColDef(child.props);
	        });
	    };
	    AgGridColumn.toColDef = function (columnProps) {
	        var colDef = AgGridColumn.createColDefFromGridColumn(columnProps);
	        if (AgGridColumn.hasChildColumns(columnProps)) {
	            colDef["children"] = AgGridColumn.getChildColDefs(columnProps.children);
	        }
	        return colDef;
	    };
	    AgGridColumn.hasChildColumns = function (columnProps) {
	        return React.Children.count(columnProps.children) > 0;
	    };
	    AgGridColumn.getChildColDefs = function (columnChildren) {
	        return React.Children.map(columnChildren, function (child) {
	            return AgGridColumn.createColDefFromGridColumn(child.props);
	        });
	    };
	    ;
	    AgGridColumn.createColDefFromGridColumn = function (columnProps) {
	        var colDef = {};
	        AgGridColumn.assign(colDef, columnProps);
	        delete colDef.children;
	        return colDef;
	    };
	    ;
	    AgGridColumn.assign = function (colDef, from) {
	        // effectively Object.assign - here for IE compatibility
	        return [from].reduce(function (r, o) {
	            Object.keys(o).forEach(function (k) {
	                r[k] = o[k];
	            });
	            return r;
	        }, colDef);
	    };
	    return AgGridColumn;
	}(react_1.Component));
	exports.AgGridColumn = AgGridColumn;
	addProperties(AgGrid.ColDefUtil.BOOLEAN_PROPERTIES, PropTypes.bool);
	addProperties(AgGrid.ColDefUtil.STRING_PROPERTIES, PropTypes.string);
	addProperties(AgGrid.ColDefUtil.OBJECT_PROPERTIES, PropTypes.object);
	addProperties(AgGrid.ColDefUtil.ARRAY_PROPERTIES, PropTypes.array);
	addProperties(AgGrid.ColDefUtil.NUMBER_PROPERTIES, PropTypes.number);
	addProperties(AgGrid.ColDefUtil.FUNCTION_PROPERTIES, PropTypes.func);
	function addProperties(listOfProps, propType) {
	    listOfProps.forEach(function (propKey) {
	        AgGridColumn[propKey] = propType;
	    });
	}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	// ag-grid-react v21.0.1
	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	var AgGrid = __webpack_require__(14);
	var ag_grid_community_1 = __webpack_require__(14);
	var baseReactComponent_1 = __webpack_require__(17);
	var ReactComponent = /** @class */ (function (_super) {
	    __extends(ReactComponent, _super);
	    function ReactComponent(reactComponent, parentComponent) {
	        var _this = _super.call(this) || this;
	        _this.portal = null;
	        _this.componentWrappingElement = 'div';
	        _this.unwrapComponent = true;
	        _this.reactComponent = reactComponent;
	        _this.parentComponent = parentComponent;
	        _this.orphans = [];
	        _this.statelessComponent = ReactComponent.isStateless(_this.reactComponent);
	        return _this;
	    }
	    ReactComponent.prototype.getFrameworkComponentInstance = function () {
	        return this.componentInstance;
	    };
	    ReactComponent.prototype.isStatelesComponent = function () {
	        return this.statelessComponent;
	    };
	    ReactComponent.prototype.getReactComponentName = function () {
	        return this.reactComponent.name;
	    };
	    ReactComponent.prototype.init = function (params) {
	        var _this = this;
	        return new ag_grid_community_1.Promise(function (resolve) {
	            _this.unwrapComponent = false;
	            _this.eParentElement = _this.createParentElement(params);
	            _this.createReactComponent(params, resolve);
	        });
	    };
	    ReactComponent.prototype.getGui = function () {
	        if (this.unwrapComponent) {
	            var fragment = document.createDocumentFragment();
	            if (this.orphans.length > 0) {
	                for (var _i = 0, _a = this.orphans; _i < _a.length; _i++) {
	                    var orphan = _a[_i];
	                    fragment.appendChild(orphan);
	                }
	            }
	            else {
	                while (this.eParentElement.firstChild) {
	                    this.orphans.push(this.eParentElement.firstChild);
	                    fragment.appendChild(this.eParentElement.firstChild);
	                }
	            }
	            return fragment;
	        }
	        else {
	            return this.eParentElement;
	        }
	    };
	    ReactComponent.prototype.destroy = function () {
	        if (this.unwrapComponent) {
	            for (var _i = 0, _a = this.orphans; _i < _a.length; _i++) {
	                var orphan = _a[_i];
	                this.eParentElement.appendChild(orphan);
	            }
	        }
	        return this.parentComponent.destroyPortal(this.portal);
	    };
	    ReactComponent.prototype.createReactComponent = function (params, resolve) {
	        var _this = this;
	        if (!this.statelessComponent) {
	            // grab hold of the actual instance created - we use a react ref for this as there is no other mechanism to
	            // retrieve the created instance from either createPortal or render
	            params.ref = function (element) {
	                _this.componentInstance = element;
	            };
	        }
	        var ReactComponent = React.createElement(this.reactComponent, params);
	        var portal = ReactDOM.createPortal(ReactComponent, this.eParentElement);
	        this.portal = portal;
	        this.parentComponent.mountReactPortal(portal, this, resolve);
	    };
	    ReactComponent.prototype.createParentElement = function (params) {
	        var eParentElement = document.createElement(this.parentComponent.props.componentWrappingElement || 'div');
	        if (!this.unwrapComponent) {
	            AgGrid.Utils.addCssClass(eParentElement, 'ag-react-container');
	            // so user can have access to the react container,
	            // to add css class or style
	            params.reactContainer = this.eParentElement;
	        }
	        return eParentElement;
	    };
	    ReactComponent.prototype.statelessComponentRendered = function () {
	        return this.eParentElement.childElementCount > 0;
	    };
	    ReactComponent.isStateless = function (Component) {
	        return (typeof Component === 'function' &&
	            !(Component.prototype && Component.prototype.isReactComponent));
	    };
	    return ReactComponent;
	}(baseReactComponent_1.BaseReactComponent));
	exports.ReactComponent = ReactComponent;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	// ag-grid-react v21.0.1
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var BaseReactComponent = /** @class */ (function () {
	    function BaseReactComponent() {
	    }
	    BaseReactComponent.prototype.hasMethod = function (name) {
	        var frameworkComponentInstance = this.getFrameworkComponentInstance();
	        if (frameworkComponentInstance == null) {
	            return false;
	        }
	        return frameworkComponentInstance[name] != null;
	    };
	    BaseReactComponent.prototype.callMethod = function (name, args) {
	        var _this = this;
	        var frameworkComponentInstance = this.getFrameworkComponentInstance();
	        // this should never happen now that AgGridReact.waitForInstance is in use
	        if (frameworkComponentInstance == null) {
	            window.setTimeout(function () { return _this.callMethod(name, args); }, 100);
	        }
	        else {
	            var method = this.getFrameworkComponentInstance()[name];
	            if (method == null)
	                return;
	            return method.apply(frameworkComponentInstance, args);
	        }
	    };
	    BaseReactComponent.prototype.addMethod = function (name, callback) {
	        this[name] = callback;
	    };
	    return BaseReactComponent;
	}());
	exports.BaseReactComponent = BaseReactComponent;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	// ag-grid-react v21.0.1
	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ChangeDetectionStrategyType;
	(function (ChangeDetectionStrategyType) {
	    ChangeDetectionStrategyType["IdentityCheck"] = "IdentityCheck";
	    ChangeDetectionStrategyType["DeepValueCheck"] = "DeepValueCheck";
	    ChangeDetectionStrategyType["NoCheck"] = "NoCheck";
	})(ChangeDetectionStrategyType = exports.ChangeDetectionStrategyType || (exports.ChangeDetectionStrategyType = {}));
	var ChangeDetectionService = /** @class */ (function () {
	    function ChangeDetectionService() {
	        var _a;
	        this.strategyMap = (_a = {},
	            _a[ChangeDetectionStrategyType.DeepValueCheck] = new DeepValueStrategy(),
	            _a[ChangeDetectionStrategyType.IdentityCheck] = new SimpleFunctionalStrategy(function (a, b) { return a === b; }),
	            _a[ChangeDetectionStrategyType.NoCheck] = new SimpleFunctionalStrategy(function (a, b) { return true; }),
	            _a);
	    }
	    ChangeDetectionService.prototype.getStrategy = function (changeDetectionStrategy) {
	        return this.strategyMap[changeDetectionStrategy];
	    };
	    return ChangeDetectionService;
	}());
	exports.ChangeDetectionService = ChangeDetectionService;
	var SimpleFunctionalStrategy = /** @class */ (function () {
	    function SimpleFunctionalStrategy(strategy) {
	        this.strategy = strategy;
	    }
	    SimpleFunctionalStrategy.prototype.areEqual = function (a, b) {
	        return this.strategy(a, b);
	    };
	    return SimpleFunctionalStrategy;
	}());
	var DeepValueStrategy = /** @class */ (function () {
	    function DeepValueStrategy() {
	    }
	    DeepValueStrategy.prototype.areEqual = function (a, b) {
	        return DeepValueStrategy.areEquivalent(DeepValueStrategy.copy(a), DeepValueStrategy.copy(b));
	    };
	    /*
	     * deeper object comparison - taken from https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
	     */
	    DeepValueStrategy.unwrapStringOrNumber = function (obj) {
	        return obj instanceof Number || obj instanceof String ? obj.valueOf() : obj;
	    };
	    // sigh, here for ie compatibility
	    DeepValueStrategy.copy = function (value) {
	        if (!value) {
	            return value;
	        }
	        if (Array.isArray(value)) {
	            // shallow copy the array - this will typically be either rowData or columnDefs
	            var arrayCopy = [];
	            for (var i = 0; i < value.length; i++) {
	                arrayCopy.push(this.copy(value[i]));
	            }
	            return arrayCopy;
	        }
	        // for anything without keys (boolean, string etc).
	        // Object.keys - chrome will swallow them, IE will fail (correctly, imho)
	        if (typeof value !== "object") {
	            return value;
	        }
	        return [{}, value].reduce(function (r, o) {
	            Object.keys(o).forEach(function (k) {
	                r[k] = o[k];
	            });
	            return r;
	        }, {});
	    };
	    /*
	     * slightly modified, but taken from https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
	     *
	     * What we're trying to do here is determine if the property being checked has changed in _value_, not just in reference
	     *
	     * For eg, if a user updates the columnDefs via property binding, but the actual columns defs are the same before and
	     * after, then we don't want the grid to re-render
	     */
	    DeepValueStrategy.areEquivalent = function (a, b) {
	        a = DeepValueStrategy.unwrapStringOrNumber(a);
	        b = DeepValueStrategy.unwrapStringOrNumber(b);
	        if (a === b)
	            return true; //e.g. a and b both null
	        if (a === null || b === null || typeof a !== typeof b)
	            return false;
	        if (a instanceof Date) {
	            return b instanceof Date && a.valueOf() === b.valueOf();
	        }
	        if (typeof a === "function") {
	            return a.toString() === b.toString();
	        }
	        if (typeof a !== "object") {
	            return a == b; //for boolean, number, string, function, xml
	        }
	        var newA = a.areEquivPropertyTracking === undefined, newB = b.areEquivPropertyTracking === undefined;
	        try {
	            var prop = void 0;
	            if (newA) {
	                a.areEquivPropertyTracking = [];
	            }
	            else if (a.areEquivPropertyTracking.some(function (other) {
	                return other === b;
	            }))
	                return true;
	            if (newB) {
	                b.areEquivPropertyTracking = [];
	            }
	            else if (b.areEquivPropertyTracking.some(function (other) { return other === a; })) {
	                return true;
	            }
	            a.areEquivPropertyTracking.push(b);
	            b.areEquivPropertyTracking.push(a);
	            var tmp = {};
	            for (prop in a)
	                if (prop != "areEquivPropertyTracking") {
	                    tmp[prop] = null;
	                }
	            for (prop in b)
	                if (prop != "areEquivPropertyTracking") {
	                    tmp[prop] = null;
	                }
	            for (prop in tmp) {
	                if (!this.areEquivalent(a[prop], b[prop])) {
	                    return false;
	                }
	            }
	            return true;
	        }
	        finally {
	            if (newA)
	                delete a.areEquivPropertyTracking;
	            if (newB)
	                delete b.areEquivPropertyTracking;
	        }
	    };
	    return DeepValueStrategy;
	}());


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// ag-grid-react v21.0.1
	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	Object.defineProperty(exports, "__esModule", { value: true });
	var React = __webpack_require__(2);
	var ReactDOM = __webpack_require__(3);
	var AgGrid = __webpack_require__(14);
	var ag_grid_community_1 = __webpack_require__(14);
	var baseReactComponent_1 = __webpack_require__(17);
	var LegacyReactComponent = /** @class */ (function (_super) {
	    __extends(LegacyReactComponent, _super);
	    function LegacyReactComponent(reactComponent, parentComponent) {
	        var _this = _super.call(this) || this;
	        _this.reactComponent = reactComponent;
	        _this.parentComponent = parentComponent;
	        return _this;
	    }
	    LegacyReactComponent.prototype.getFrameworkComponentInstance = function () {
	        return this.componentInstance;
	    };
	    LegacyReactComponent.prototype.getReactComponentName = function () {
	        return this.reactComponent.name;
	    };
	    LegacyReactComponent.prototype.init = function (params) {
	        var _this = this;
	        return new ag_grid_community_1.Promise(function (resolve) {
	            _this.eParentElement = document.createElement(_this.parentComponent.props.componentWrappingElement || 'div');
	            AgGrid.Utils.addCssClass(_this.eParentElement, 'ag-react-container');
	            // so user can have access to the react container,
	            // to add css class or style
	            params.reactContainer = _this.eParentElement;
	            _this.createReactComponentLegacy(params, resolve);
	        });
	    };
	    LegacyReactComponent.prototype.getGui = function () {
	        return this.eParentElement;
	    };
	    LegacyReactComponent.prototype.destroy = function () {
	        // only attempt to unmount if not using a doc fragment
	        ReactDOM.unmountComponentAtNode(this.eParentElement);
	    };
	    LegacyReactComponent.prototype.createReactComponentLegacy = function (params, resolve) {
	        var self = this;
	        var ReactComponent = React.createElement(this.reactComponent, params);
	        if (!this.parentComponent) {
	            // MUST be a function, not an arrow function
	            ReactDOM.render(ReactComponent, this.eParentElement, function () {
	                self.componentInstance = this;
	                resolve(null);
	            });
	        }
	        else {
	            // MUST be a function, not an arrow function
	            ReactDOM.unstable_renderSubtreeIntoContainer(this.parentComponent, ReactComponent, this.eParentElement, function () {
	                self.componentInstance = this;
	                resolve(null);
	            });
	        }
	    };
	    return LegacyReactComponent;
	}(baseReactComponent_1.BaseReactComponent));
	exports.LegacyReactComponent = LegacyReactComponent;


/***/ })
/******/ ]);