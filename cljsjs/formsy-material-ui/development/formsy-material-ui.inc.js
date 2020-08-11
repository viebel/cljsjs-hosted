var FormsyMaterialUI =
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
/******/ 	__webpack_require__.p = "/build/";

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
	exports.FormsyAutoComplete = exports.FormsyToggle = exports.FormsyTime = exports.FormsyText = exports.FormsySelect = exports.FormsyRadioGroup = exports.FormsyRadio = exports.FormsyDate = exports.FormsyCheckbox = undefined;

	var _FormsyCheckbox2 = __webpack_require__(1);

	var _FormsyCheckbox3 = _interopRequireDefault(_FormsyCheckbox2);

	var _FormsyDate2 = __webpack_require__(6);

	var _FormsyDate3 = _interopRequireDefault(_FormsyDate2);

	var _FormsyRadio2 = __webpack_require__(8);

	var _FormsyRadio3 = _interopRequireDefault(_FormsyRadio2);

	var _FormsyRadioGroup2 = __webpack_require__(9);

	var _FormsyRadioGroup3 = _interopRequireDefault(_FormsyRadioGroup2);

	var _FormsySelect2 = __webpack_require__(11);

	var _FormsySelect3 = _interopRequireDefault(_FormsySelect2);

	var _FormsyText2 = __webpack_require__(13);

	var _FormsyText3 = _interopRequireDefault(_FormsyText2);

	var _FormsyTime2 = __webpack_require__(16);

	var _FormsyTime3 = _interopRequireDefault(_FormsyTime2);

	var _FormsyToggle2 = __webpack_require__(18);

	var _FormsyToggle3 = _interopRequireDefault(_FormsyToggle2);

	var _FormsyAutoComplete2 = __webpack_require__(20);

	var _FormsyAutoComplete3 = _interopRequireDefault(_FormsyAutoComplete2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.FormsyCheckbox = _FormsyCheckbox3.default;
	exports.FormsyDate = _FormsyDate3.default;
	exports.FormsyRadio = _FormsyRadio3.default;
	exports.FormsyRadioGroup = _FormsyRadioGroup3.default;
	exports.FormsySelect = _FormsySelect3.default;
	exports.FormsyText = _FormsyText3.default;
	exports.FormsyTime = _FormsyTime3.default;
	exports.FormsyToggle = _FormsyToggle3.default;
	exports.FormsyAutoComplete = _FormsyAutoComplete3.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formsyReact = __webpack_require__(3);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _Checkbox = __webpack_require__(4);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var FormsyCheckbox = _react2.default.createClass({
	  displayName: 'FormsyCheckbox',


	  propTypes: {
	    defaultChecked: _react2.default.PropTypes.bool,
	    name: _react2.default.PropTypes.string.isRequired,
	    onChange: _react2.default.PropTypes.func,
	    validationError: _react2.default.PropTypes.string,
	    validationErrors: _react2.default.PropTypes.object,
	    validations: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object])
	  },

	  mixins: [_formsyReact2.default.Mixin],

	  componentDidMount: function componentDidMount() {
	    this.setValue(this.muiComponent.isChecked());
	  },
	  handleChange: function handleChange(event, value) {
	    this.setValue(value);
	    if (this.props.onChange) this.props.onChange(event, value);
	  },


	  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

	  render: function render() {
	    var _props = this.props,
	        defaultChecked = _props.defaultChecked,
	        validations = _props.validations,
	        validationErrors = _props.validationErrors,
	        validationError = _props.validationError,
	        rest = _objectWithoutProperties(_props, ['defaultChecked', 'validations', 'validationErrors', 'validationError']);

	    var value = this.getValue();

	    if (typeof value === 'undefined') {
	      value = typeof defaultChecked !== 'undefined' ? defaultChecked : false;
	    }
	    return _react2.default.createElement(_Checkbox2.default, _extends({}, rest, {
	      checked: value,
	      onCheck: this.handleChange,
	      ref: this.setMuiComponentAndMaybeFocus
	    }));
	  }
	});

	exports.default = FormsyCheckbox;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Formsy;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = MaterialUI.Checkbox;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setMuiComponentAndMaybeFocus = setMuiComponentAndMaybeFocus;
	exports.debounce = debounce;
	function setMuiComponentAndMaybeFocus(c) {
	  if (c === this.muiComponent) return;

	  this.muiComponent = c;

	  if (c && typeof c.focus === 'function') {
	    this.focus = function () {
	      return c.focus();
	    };
	  } else if (this.hasOwnProperty('focus')) {
	    delete this.focus;
	  }
	}

	function debounce(fn, delay) {
	  var timeout = void 0;
	  return function () {
	    var _this = this;

	    var args = arguments;
	    clearTimeout(timeout);
	    timeout = setTimeout(function () {
	      fn.apply(_this, args);
	    }, delay);
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formsyReact = __webpack_require__(3);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _DatePicker = __webpack_require__(7);

	var _DatePicker2 = _interopRequireDefault(_DatePicker);

	var _utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var FormsyDate = _react2.default.createClass({
	  displayName: 'FormsyDate',


	  propTypes: {
	    defaultDate: _react2.default.PropTypes.object,
	    name: _react2.default.PropTypes.string.isRequired,
	    onChange: _react2.default.PropTypes.func,
	    validationError: _react2.default.PropTypes.string,
	    validationErrors: _react2.default.PropTypes.object,
	    validations: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),
	    value: _react2.default.PropTypes.object
	  },

	  mixins: [_formsyReact2.default.Mixin],

	  componentDidMount: function componentDidMount() {
	    var defaultDate = this.props.defaultDate;

	    var value = this.getValue();

	    if (typeof value === 'undefined' && typeof defaultDate !== 'undefined') {
	      this.setValue(defaultDate);
	    }
	  },
	  handleChange: function handleChange(event, value) {
	    this.setValue(value);
	    if (this.props.onChange) this.props.onChange(event, value);
	  },


	  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

	  render: function render() {
	    var _props = this.props,
	        defaultDate = _props.defaultDate,
	        validations = _props.validations,
	        validationErrors = _props.validationErrors,
	        validationError = _props.validationError,
	        rest = _objectWithoutProperties(_props, ['defaultDate', 'validations', 'validationErrors', 'validationError']);

	    return _react2.default.createElement(_DatePicker2.default, _extends({}, rest, {
	      errorText: this.getErrorMessage(),
	      onChange: this.handleChange,
	      ref: this.setMuiComponentAndMaybeFocus,
	      value: this.getValue()
	    }));
	  }
	});

	exports.default = FormsyDate;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = MaterialUI.DatePicker;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formsyReact = __webpack_require__(3);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FormsyRadio = _react2.default.createClass({
	  displayName: 'FormsyRadio',


	  mixins: [_formsyReact2.default.Mixin],

	  // Material-UI replaces any component inside RadioButtonGroup with RadioButton, so no need to render it here
	  render: function render() {}
	});

	exports.default = FormsyRadio;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formsyReact = __webpack_require__(3);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _RadioButton = __webpack_require__(10);

	var _utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var FormsyRadioGroup = _react2.default.createClass({
	  displayName: 'FormsyRadioGroup',


	  propTypes: {
	    children: _react2.default.PropTypes.node,
	    defaultSelected: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	    name: _react2.default.PropTypes.string.isRequired,
	    onChange: _react2.default.PropTypes.func,
	    validationError: _react2.default.PropTypes.string,
	    validationErrors: _react2.default.PropTypes.object,
	    validations: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool])
	  },

	  mixins: [_formsyReact2.default.Mixin],

	  componentDidMount: function componentDidMount() {
	    this.setValue(this.muiComponent.getSelectedValue());
	  },
	  handleValueChange: function handleValueChange(event, value) {
	    this.setValue(value);
	    if (this.props.onChange) this.props.onChange(event, value);
	  },


	  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

	  render: function render() {
	    var _props = this.props,
	        validations = _props.validations,
	        validationError = _props.validationError,
	        validationErrors = _props.validationErrors,
	        defaultSelected = _props.defaultSelected,
	        value = _props.value,
	        rest = _objectWithoutProperties(_props, ['validations', 'validationError', 'validationErrors', 'defaultSelected', 'value']);

	    // remove unknown props from children


	    var children = _react2.default.Children.map(this.props.children, function (radio) {
	      var _radio$props = radio.props,
	          validations = _radio$props.validations,
	          validationError = _radio$props.validationError,
	          validationErrors = _radio$props.validationErrors,
	          rest = _objectWithoutProperties(_radio$props, ['validations', 'validationError', 'validationErrors']);

	      return _react2.default.createElement(_RadioButton.RadioButton, rest);
	    });

	    // For backward compatibility or for
	    // users used to MaterialUI, use the "defaultSelected"
	    // attribute for the "value" if the value was not
	    // explicitly set.
	    if (typeof value === 'undefined') {
	      value = defaultSelected;
	    }

	    return _react2.default.createElement(
	      _RadioButton.RadioButtonGroup,
	      _extends({}, rest, {
	        ref: this.setMuiComponentAndMaybeFocus,
	        onChange: this.handleValueChange,
	        valueSelected: this.getValue(),
	        defaultSelected: value
	      }),
	      children
	    );
	  }
	});

	exports.default = FormsyRadioGroup;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = MaterialUI.RadioButton;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formsyReact = __webpack_require__(3);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _SelectField = __webpack_require__(12);

	var _SelectField2 = _interopRequireDefault(_SelectField);

	var _utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var FormsySelect = _react2.default.createClass({
	  displayName: 'FormsySelect',


	  propTypes: {
	    children: _react2.default.PropTypes.node,
	    name: _react2.default.PropTypes.string.isRequired,
	    onChange: _react2.default.PropTypes.func,
	    validationError: _react2.default.PropTypes.string,
	    validationErrors: _react2.default.PropTypes.object,
	    validations: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),
	    value: _react2.default.PropTypes.any
	  },

	  mixins: [_formsyReact2.default.Mixin],

	  getInitialState: function getInitialState() {
	    return {
	      hasChanged: false
	    };
	  },
	  handleChange: function handleChange(event, index, value) {
	    this.setValue(value);

	    this.setState({
	      hasChanged: value !== ''
	    });

	    if (this.props.onChange) this.props.onChange(event, value, index);
	  },


	  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

	  render: function render() {
	    var value = this.props.value;

	    var _props = this.props,
	        validations = _props.validations,
	        validationError = _props.validationError,
	        validationErrors = _props.validationErrors,
	        rest = _objectWithoutProperties(_props, ['validations', 'validationError', 'validationErrors']);

	    value = this.state.hasChanged ? this.getValue() : value;

	    return _react2.default.createElement(
	      _SelectField2.default,
	      _extends({}, rest, {
	        errorText: this.getErrorMessage(),
	        onChange: this.handleChange,
	        ref: this.setMuiComponentAndMaybeFocus,
	        value: value
	      }),
	      this.props.children
	    );
	  }
	});

	exports.default = FormsySelect;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = MaterialUI.SelectField;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _keycode = __webpack_require__(14);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _formsyReact = __webpack_require__(3);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _TextField = __webpack_require__(15);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var FormsyText = _react2.default.createClass({
	  displayName: 'FormsyText',


	  propTypes: {
	    defaultValue: _react2.default.PropTypes.any,
	    name: _react2.default.PropTypes.string.isRequired,
	    onBlur: _react2.default.PropTypes.func,
	    onChange: _react2.default.PropTypes.func,
	    onKeyDown: _react2.default.PropTypes.func,
	    updateImmediately: _react2.default.PropTypes.bool,
	    validationColor: _react2.default.PropTypes.string,
	    validationError: _react2.default.PropTypes.string,
	    validationErrors: _react2.default.PropTypes.object,
	    validations: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),
	    value: _react2.default.PropTypes.any
	  },

	  mixins: [_formsyReact2.default.Mixin],

	  getInitialState: function getInitialState() {
	    var value = this.controlledValue();
	    return { value: value };
	  },
	  componentWillMount: function componentWillMount() {
	    this.setValue(this.controlledValue());
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var isValueChanging = nextProps.value !== this.props.value;
	    if (isValueChanging || nextProps.defaultValue !== this.props.defaultValue) {
	      var value = this.controlledValue(nextProps);
	      var isValid = this.isValidValue(value);

	      if (isValueChanging || this.props.defaultValue === this.getValue()) {
	        this.setState({ value: value, isValid: isValid });
	        this.setValue(value);
	      }
	    }
	  },
	  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	    if (nextState._isPristine && // eslint-disable-line no-underscore-dangle
	    nextState._isPristine !== this.state._isPristine) {
	      // eslint-disable-line no-underscore-dangle
	      // Calling state here is valid, as it cannot cause infinite recursion.
	      var value = this.controlledValue(nextProps);
	      var isValid = this.isValidValue(value);
	      this.setValue(value);
	      this.setState({ value: value, isValid: isValid });
	    }
	  },
	  controlledValue: function controlledValue() {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

	    return props.value || props.defaultValue || '';
	  },
	  validationColor: function validationColor() {
	    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

	    return props.validationColor || '#4CAF50';
	  },
	  handleBlur: function handleBlur(event) {
	    this.setValue(event.currentTarget.value);
	    delete this.changeValue;
	    if (this.props.onBlur) this.props.onBlur(event);
	  },
	  handleChange: function handleChange(event) {
	    // Update the value (and so display any error) after a timeout.
	    if (this.props.updateImmediately) {
	      if (!this.changeValue) {
	        this.changeValue = (0, _utils.debounce)(this.setValue, 400);
	      }
	      this.changeValue(event.currentTarget.value);
	    } else {
	      // If there was an error (on loss of focus) update on each keypress to resolve same.
	      if (this.getErrorMessage() != null) {
	        this.setValue(event.currentTarget.value);
	      } else {
	        // Only update on valid values, so as to not generate an error until focus is lost.
	        if (this.isValidValue(event.target.value)) {
	          this.setValue(event.currentTarget.value);
	          // If it becomes invalid, and there isn't an error message, invalidate without error.
	        }
	      }
	    }

	    // Controlled component
	    this.setState({ value: event.currentTarget.value, isValid: this.isValidValue(event.currentTarget.value) });
	    if (this.props.onChange) this.props.onChange(event, event.currentTarget.value);
	  },
	  handleKeyDown: function handleKeyDown(event) {
	    if ((0, _keycode2.default)(event) === 'enter') this.setValue(event.currentTarget.value);
	    if (this.props.onKeyDown) this.props.onKeyDown(event, event.currentTarget.value);
	  },


	  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

	  render: function render() {
	    var _props = this.props,
	        defaultValue = _props.defaultValue,
	        updateImmediately = _props.updateImmediately,
	        validations = _props.validations,
	        validationError = _props.validationError,
	        validationErrors = _props.validationErrors,
	        value = _props.value,
	        rest = _objectWithoutProperties(_props, ['defaultValue', 'updateImmediately', 'validations', 'validationError', 'validationErrors', 'value']);

	    return _react2.default.createElement(_TextField2.default, _extends({}, rest, {
	      errorText: this.getErrorMessage(),
	      onBlur: this.handleBlur,
	      onChange: this.handleChange,
	      onKeyDown: this.handleKeyDown,
	      ref: this.setMuiComponentAndMaybeFocus,
	      value: this.state.value,
	      underlineStyle: this.state.isValid ? { color: this.validationColor() } : {},
	      underlineFocusStyle: this.state.isValid ? { color: this.validationColor() } : {}
	    }));
	  }
	});

	exports.default = FormsyText;

/***/ },
/* 14 */
/***/ function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */

	exports = module.exports = function(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
	    if (hasKeyCode) searchInput = hasKeyCode
	  }

	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]

	  // Everything else (cast to string)
	  var search = String(searchInput)

	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey

	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey

	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)

	  return undefined
	}

	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */

	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	}

	// Helper aliases

	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	}


	/*!
	 * Programatically add the following
	 */

	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i

	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111

	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */

	var names = exports.names = exports.title = {} // title for backward compat

	// Create reverse mapping
	for (i in codes) names[codes[i]] = i

	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias]
	}


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = MaterialUI.TextField;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formsyReact = __webpack_require__(3);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _TimePicker = __webpack_require__(17);

	var _TimePicker2 = _interopRequireDefault(_TimePicker);

	var _utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var FormsyTime = _react2.default.createClass({
	  displayName: 'FormsyTime',


	  propTypes: {
	    defaultTime: _react2.default.PropTypes.object,
	    name: _react2.default.PropTypes.string.isRequired,
	    onChange: _react2.default.PropTypes.func,
	    validationError: _react2.default.PropTypes.string,
	    validationErrors: _react2.default.PropTypes.object,
	    validations: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object]),
	    value: _react2.default.PropTypes.object
	  },

	  mixins: [_formsyReact2.default.Mixin],

	  componentDidMount: function componentDidMount() {
	    var defaultTime = this.props.defaultTime;

	    var value = this.getValue();

	    if (typeof value === 'undefined' && typeof defaultTime !== 'undefined') {
	      this.setValue(defaultTime);
	    }
	  },
	  handleChange: function handleChange(event, value) {
	    this.setValue(value);
	    if (this.props.onChange) this.props.onChange(event, value);
	  },


	  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

	  render: function render() {
	    var _props = this.props,
	        defaultTime = _props.defaultTime,
	        validations = _props.validations,
	        validationError = _props.validationError,
	        validationErrors = _props.validationErrors,
	        rest = _objectWithoutProperties(_props, ['defaultTime', 'validations', 'validationError', 'validationErrors']);

	    return _react2.default.createElement(_TimePicker2.default, _extends({}, rest, {
	      errorText: this.getErrorMessage(),
	      onChange: this.handleChange,
	      ref: this.setMuiComponentAndMaybeFocus,
	      value: this.getValue()
	    }));
	  }
	});

	exports.default = FormsyTime;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = MaterialUI.TimePicker;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _formsyReact = __webpack_require__(3);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _Toggle = __webpack_require__(19);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _utils = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var FormsyToggle = _react2.default.createClass({
	  displayName: 'FormsyToggle',


	  propTypes: {
	    defaultToggled: _react2.default.PropTypes.bool,
	    name: _react2.default.PropTypes.string.isRequired,
	    onChange: _react2.default.PropTypes.func,
	    validationError: _react2.default.PropTypes.string,
	    validationErrors: _react2.default.PropTypes.object,
	    validations: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object])
	  },

	  mixins: [_formsyReact2.default.Mixin],

	  componentDidMount: function componentDidMount() {
	    this.setValue(this.muiComponent.isToggled());
	  },
	  handleChange: function handleChange(event, value) {
	    this.setValue(value);
	    if (this.props.onChange) this.props.onChange(event, value);
	  },


	  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

	  render: function render() {
	    var _props = this.props,
	        defaultToggled = _props.defaultToggled,
	        validations = _props.validations,
	        validationError = _props.validationError,
	        validationErrors = _props.validationErrors,
	        rest = _objectWithoutProperties(_props, ['defaultToggled', 'validations', 'validationError', 'validationErrors']);

	    var value = this.getValue();

	    if (typeof value === 'undefined') {
	      value = typeof defaultToggled !== 'undefined' ? defaultToggled : false;
	    }

	    return _react2.default.createElement(_Toggle2.default, _extends({}, rest, {
	      onToggle: this.handleChange,
	      ref: this.setMuiComponentAndMaybeFocus,
	      toggled: value
	    }));
	  }
	});

	exports.default = FormsyToggle;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = MaterialUI.Toggle;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _keycode = __webpack_require__(14);

	var _keycode2 = _interopRequireDefault(_keycode);

	var _formsyReact = __webpack_require__(3);

	var _formsyReact2 = _interopRequireDefault(_formsyReact);

	var _AutoComplete = __webpack_require__(21);

	var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

	var _utils = __webpack_require__(22);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var FormsyAutoComplete = _react2.default.createClass({
	  displayName: 'FormsyAutoComplete',


	  propTypes: {
	    defaultValue: _react2.default.PropTypes.any,
	    name: _react2.default.PropTypes.string.isRequired,
	    onBlur: _react2.default.PropTypes.func,
	    onChange: _react2.default.PropTypes.func,
	    onFocus: _react2.default.PropTypes.func,
	    onKeyDown: _react2.default.PropTypes.func,
	    value: _react2.default.PropTypes.any
	  },

	  mixins: [_formsyReact2.default.Mixin],

	  getInitialState: function getInitialState() {
	    return {
	      value: this.props.defaultValue || this.props.value || ''
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    this.setValue(this.props.defaultValue || this.props.value || '');
	  },


	  handleBlur: function handleBlur(event) {
	    this.setValue(event.currentTarget.value);
	    if (this.props.onBlur) this.props.onBlur(event);
	  },

	  handleChange: function handleChange(event) {
	    this.setState({
	      value: event.currentTarget.value
	    });
	    if (this.props.onChange) this.props.onChange(event);
	  },

	  handleKeyDown: function handleKeyDown(event) {
	    if ((0, _keycode2.default)(event) === 'enter') this.setValue(event.currentTarget.value);
	    if (this.props.onKeyDown) this.props.onKeyDown(event, event.currentTarget.value);
	  },

	  setMuiComponentAndMaybeFocus: _utils.setMuiComponentAndMaybeFocus,

	  render: function render() {
	    var _props = this.props,
	        defaultValue = _props.defaultValue,
	        onFocus = _props.onFocus,
	        value = _props.value,
	        rest = _objectWithoutProperties(_props, ['defaultValue', 'onFocus', 'value']);

	    return _react2.default.createElement(_AutoComplete2.default, _extends({}, rest, {
	      errorText: this.getErrorMessage(),
	      onBlur: this.handleBlur,
	      onChange: this.handleChange,
	      onFocus: onFocus,
	      onKeyDown: this.handleKeyDown,
	      ref: this.setMuiComponentAndMaybeFocus,
	      value: this.state.value
	    }));
	  }
	});

	exports.default = FormsyAutoComplete;

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = MaterialUI.AutoComplete;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = {
	  arraysDiffer: function (a, b) {
	    var isDifferent = false;
	    if (a.length !== b.length) {
	      isDifferent = true;
	    } else {
	      a.forEach(function (item, index) {
	        if (!this.isSame(item, b[index])) {
	          isDifferent = true;
	        }
	      }, this);
	    }
	    return isDifferent;
	  },

	  objectsDiffer: function (a, b) {
	    var isDifferent = false;
	    if (Object.keys(a).length !== Object.keys(b).length) {
	      isDifferent = true;
	    } else {
	      Object.keys(a).forEach(function (key) {
	        if (!this.isSame(a[key], b[key])) {
	          isDifferent = true;
	        }
	      }, this);
	    }
	    return isDifferent;
	  },

	  isSame: function (a, b) {
	    if (typeof a !== typeof b) {
	      return false;
	    } else if (Array.isArray(a)) {
	      return !this.arraysDiffer(a, b);
	    } else if (typeof a === 'function') {
	      return a.toString() === b.toString();
	    } else if (typeof a === 'object' && a !== null && b !== null) {
	      return !this.objectsDiffer(a, b);
	    }

	    return a === b;
	  },

	  find: function (collection, fn) {
	    for (var i = 0, l = collection.length; i < l; i++) {
	      var item = collection[i];
	      if (fn(item)) {
	        return item;
	      }
	    }
	    return null;
	  }
	};


/***/ }
/******/ ]);