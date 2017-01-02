var MaterialUIChipInput =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	(function () {
	  var MaterialUIChipInput = __webpack_require__(1);
	  module.exports = MaterialUIChipInput.default;
	})();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TextFieldUnderline = __webpack_require__(3);
	
	var _TextFieldUnderline2 = _interopRequireDefault(_TextFieldUnderline);
	
	var _TextFieldHint = __webpack_require__(7);
	
	var _TextFieldHint2 = _interopRequireDefault(_TextFieldHint);
	
	var _TextFieldLabel = __webpack_require__(8);
	
	var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);
	
	var _AutoComplete = __webpack_require__(9);
	
	var _AutoComplete2 = _interopRequireDefault(_AutoComplete);
	
	var _transitions = __webpack_require__(10);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	var _Chip = __webpack_require__(11);
	
	var _Chip2 = _interopRequireDefault(_Chip);
	
	var _colors = __webpack_require__(12);
	
	var _colorManipulator = __webpack_require__(13);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Notice: Some code was adapted from Material-UI's text field.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *         Copyright (c) 2014 Call-Em-All (https://github.com/callemall/material-ui)
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var getStyles = function getStyles(props, context, state) {
	  var _context$muiTheme = context.muiTheme,
	      baseTheme = _context$muiTheme.baseTheme,
	      _context$muiTheme$tex = _context$muiTheme.textField,
	      floatingLabelColor = _context$muiTheme$tex.floatingLabelColor,
	      focusColor = _context$muiTheme$tex.focusColor,
	      textColor = _context$muiTheme$tex.textColor,
	      disabledTextColor = _context$muiTheme$tex.disabledTextColor,
	      backgroundColor = _context$muiTheme$tex.backgroundColor,
	      errorColor = _context$muiTheme$tex.errorColor;
	
	
	  var styles = {
	    root: {
	      fontSize: 16,
	      lineHeight: '24px',
	      width: props.fullWidth ? '100%' : 256,
	      display: 'inline-block',
	      position: 'relative',
	      backgroundColor: backgroundColor,
	      fontFamily: baseTheme.fontFamily,
	      transition: _transitions2.default.easeOut('200ms', 'height'),
	      cursor: 'text'
	    },
	    input: {
	      padding: 0,
	      marginTop: 0,
	      marginBottom: 24,
	      lineHeight: '32px',
	      height: 32,
	      position: 'relative',
	      display: 'inline-block',
	      border: 'none',
	      outline: 'none',
	      backgroundColor: 'rgba(0,0,0,0)',
	      color: props.disabled ? disabledTextColor : textColor,
	      cursor: props.disabled ? 'not-allowed' : 'initial',
	      font: 'inherit',
	      appearance: 'none', // Remove border in Safari, doesn't seem to break anything in other browsers
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)', // Remove mobile color flashing (deprecated style).
	      float: 'left'
	    },
	    error: {
	      position: 'absolute',
	      bottom: -10,
	      fontSize: 12,
	      lineHeight: '12px',
	      color: errorColor,
	      transition: _transitions2.default.easeOut()
	    },
	    floatingLabel: {
	      color: props.disabled ? disabledTextColor : floatingLabelColor,
	      pointerEvents: 'none',
	      top: 28
	    },
	    floatingLabelFocusStyle: {
	      transform: 'scale(0.75) translate(0, -36px)'
	    }
	  };
	
	  if (state.isFocused) {
	    styles.floatingLabel.color = focusColor;
	  }
	
	  if (props.floatingLabelText) {
	    styles.input.boxSizing = 'border-box';
	  }
	
	  if (state.errorText) {
	    if (state.isFocused) {
	      styles.floatingLabel.color = styles.error.color;
	    }
	  }
	
	  return styles;
	};
	
	var defaultChipRenderer = function defaultChipRenderer(_ref, key) {
	  var value = _ref.value,
	      text = _ref.text,
	      isFocused = _ref.isFocused,
	      isDisabled = _ref.isDisabled,
	      handleClick = _ref.handleClick,
	      handleRequestDelete = _ref.handleRequestDelete;
	  return _react2.default.createElement(
	    _Chip2.default,
	    {
	      key: key,
	      style: { margin: '8px 8px 0 0', float: 'left', pointerEvents: isDisabled ? 'none' : undefined },
	      backgroundColor: isFocused ? _colors.blue300 : null,
	      onTouchTap: handleClick,
	      onRequestDelete: handleRequestDelete
	    },
	    text
	  );
	};
	
	var ChipInput = function (_React$Component) {
	  _inherits(ChipInput, _React$Component);
	
	  function ChipInput(props) {
	    _classCallCheck(this, ChipInput);
	
	    var _this = _possibleConstructorReturn(this, (ChipInput.__proto__ || Object.getPrototypeOf(ChipInput)).call(this, props));
	
	    _this.state = {
	      isFocused: false,
	      errorText: undefined,
	      isClean: true,
	      chips: [],
	      focusedChip: null,
	      inputValue: ''
	    };
	
	    _this.handleInputBlur = function (event) {
	      if (!_this.autoComplete || !_this.autoComplete.refs.menu) {
	        if (_this.props.clearOnBlur) {
	          _this.setState({ inputValue: '' });
	        }
	
	        _this.setState({ isFocused: false });
	
	        if (_this.props.onBlur) _this.props.onBlur(event);
	      }
	    };
	
	    _this.handleInputFocus = function (event) {
	      if (_this.props.disabled) {
	        return;
	      }
	      _this.setState({ isFocused: true });
	      if (_this.props.onFocus) {
	        _this.props.onFocus(event);
	      }
	    };
	
	    _this.handleKeyDown = function (event) {
	      if (_this.props.newChipKeyCodes.indexOf(event.keyCode) >= 0) {
	        _this.handleAddChip(event.target.value);
	      } else if (event.keyCode === 8 || event.keyCode === 46) {
	        if (event.target.value === '') {
	          var chips = _this.props.value || _this.state.chips;
	          if (_this.state.focusedChip == null && event.keyCode === 8) {
	            _this.setState({ focusedChip: chips[chips.length - 1] });
	          } else if (_this.state.focusedChip) {
	            var index = chips.indexOf(_this.state.focusedChip);
	            var value = _this.props.dataSourceConfig ? _this.state.focusedChip[_this.props.dataSourceConfig.value] : _this.state.focusedChip;
	            _this.handleDeleteChip(value);
	            if (event.keyCode === 8 && index > 0) {
	              _this.setState({ focusedChip: chips[index - 1] });
	            } else if (event.keyCode === 46 && index < chips.length - 1) {
	              _this.setState({ focusedChip: chips[index + 1] });
	            }
	          }
	        }
	      } else if (event.keyCode === 37) {
	        var _chips = _this.props.value || _this.state.chips;
	        var _index = _chips.indexOf(_this.state.focusedChip);
	        if (_index > 0) {
	          _this.setState({ focusedChip: _chips[_index - 1] });
	        }
	      } else if (event.keyCode === 39) {
	        var _chips2 = _this.props.value || _this.state.chips;
	        var _index2 = _chips2.indexOf(_this.state.focusedChip);
	        if (_index2 >= 0 && _index2 < _chips2.length - 1) {
	          _this.setState({ focusedChip: _chips2[_index2 + 1] });
	        } else {
	          _this.setState({ focusedChip: null });
	        }
	      } else {
	        _this.setState({ focusedChip: null });
	      }
	    };
	
	    _this.handleKeyUp = function (event) {
	      if (_this.props.newChipKeyCodes.indexOf(event.keyCode) < 0) {
	        _this.setState({ inputValue: event.target.value });
	      } else {
	        _this.setState({ inputValue: '' });
	      }
	    };
	
	    if (props.defaultValue) {
	      _this.state.chips = props.defaultValue;
	    }
	    return _this;
	  }
	
	  _createClass(ChipInput, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props,
	          name = _props.name,
	          hintText = _props.hintText,
	          floatingLabelText = _props.floatingLabelText;
	
	
	      this.setState({
	        errorText: this.props.errorText
	      });
	
	      var uniqueId = name + '-' + hintText + '-' + floatingLabelText + '-' + Math.floor(Math.random() * 0xFFFF);
	      this.uniqueId = uniqueId.replace(/[^A-Za-z0-9-]/gi, '');
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      var handleKeyDown = this.autoComplete.handleKeyDown;
	      this.autoComplete.handleKeyDown = function (event) {
	        if (_this2.props.newChipKeyCodes.indexOf(event.keyCode) >= 0) {
	          _this2.handleAddChip(event.target.value);
	          _this2.autoComplete.setState({ searchText: '' });
	          _this2.autoComplete.forceUpdate();
	        } else {
	          handleKeyDown(event);
	        }
	      };
	
	      this.autoComplete.handleItemTouchTap = function (event, child) {
	        var dataSource = _this2.autoComplete.props.dataSource;
	
	        var index = parseInt(child.key, 10);
	        var chosenRequest = dataSource[index];
	        _this2.handleAddChip(chosenRequest);
	
	        _this2.autoComplete.setState({
	          searchText: ''
	        });
	        _this2.autoComplete.forceUpdate();
	        _this2.autoComplete.close();
	
	        setTimeout(function () {
	          return _this2.focus();
	        }, 1);
	      };
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.disabled) {
	        this.setState({ focusedChip: null });
	      }
	      if (nextProps.errorText !== this.props.errorText) {
	        this.setState({
	          errorText: nextProps.errorText
	        });
	      }
	    }
	  }, {
	    key: 'blur',
	    value: function blur() {
	      if (this.input) this.getInputNode().blur();
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      if (this.autoComplete) this.getInputNode().focus();
	      if (this.state.focusedChip) {
	        this.setState({ focusedChip: null });
	      }
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      if (this.input) this.getInputNode().select();
	    }
	  }, {
	    key: 'getValue',
	    value: function getValue() {
	      return this.input ? this.getInputNode().value : undefined;
	    }
	  }, {
	    key: 'getInputNode',
	    value: function getInputNode() {
	      return this.autoComplete.refs.searchTextField.getInputNode();
	    }
	  }, {
	    key: 'handleAddChip',
	    value: function handleAddChip(chip) {
	      var _this3 = this;
	
	      this.autoComplete.setState({ searchText: '' });
	      var chips = this.props.value || this.state.chips;
	
	      if (this.props.dataSourceConfig) {
	        if (typeof chip === 'string') {
	          var _chip;
	
	          chip = (_chip = {}, _defineProperty(_chip, this.props.dataSourceConfig.text, chip), _defineProperty(_chip, this.props.dataSourceConfig.value, chip), _chip);
	        }
	
	        if (!chips.find(function (c) {
	          return c[_this3.props.dataSourceConfig.value] === chip[_this3.props.dataSourceConfig.value];
	        })) {
	          if (this.props.value) {
	            if (this.props.onRequestAdd) {
	              this.props.onRequestAdd(chip);
	            }
	          } else {
	            this.setState({ chips: [].concat(_toConsumableArray(this.state.chips), [chip]) });
	            if (this.props.onChange) {
	              this.props.onChange([].concat(_toConsumableArray(this.state.chips), [chip]));
	            }
	          }
	        }
	      } else {
	        if (chip.trim().length > 0) {
	          if (chips.indexOf(chip) === -1) {
	            if (this.props.value) {
	              if (this.props.onRequestAdd) {
	                this.props.onRequestAdd(chip);
	              }
	            } else {
	              this.setState({ chips: [].concat(_toConsumableArray(this.state.chips), [chip]) });
	              if (this.props.onChange) {
	                this.props.onChange([].concat(_toConsumableArray(this.state.chips), [chip]));
	              }
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: 'handleDeleteChip',
	    value: function handleDeleteChip(chip) {
	      var _this4 = this;
	
	      if (this.props.value) {
	        if (this.props.onRequestDelete) {
	          this.props.onRequestDelete(chip);
	        }
	      } else {
	        if (this.props.dataSourceConfig) {
	          var chips = this.state.chips.filter(function (c) {
	            return c[_this4.props.dataSourceConfig.value] !== chip;
	          });
	          if (chips.length !== this.state.chips.length) {
	            this.setState({
	              chips: chips,
	              focusedChip: this.state.focusedChip && this.state.focusedChip[this.props.dataSourceConfig.value] === chip ? null : this.state.focusedChip
	            });
	            if (this.props.onChange) {
	              this.props.onChange(chips);
	            }
	          }
	        } else {
	          var _chips3 = this.state.chips.filter(function (c) {
	            return c !== chip;
	          });
	          if (_chips3.length !== this.state.chips.length) {
	            this.setState({
	              chips: _chips3,
	              focusedChip: this.state.focusedChip === chip ? null : this.state.focusedChip
	            });
	            if (this.props.onChange) {
	              this.props.onChange(_chips3);
	            }
	          }
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
	      var _props2 = this.props,
	          children = _props2.children,
	          className = _props2.className,
	          dataSourceConfig = _props2.dataSourceConfig,
	          disabled = _props2.disabled,
	          errorStyle = _props2.errorStyle,
	          errorText = _props2.errorText,
	          fullWidth = _props2.fullWidth,
	          fullWidthInput = _props2.fullWidthInput,
	          hintText = _props2.hintText,
	          hintStyle = _props2.hintStyle,
	          inputStyle = _props2.inputStyle,
	          clearOnBlur = _props2.clearOnBlur,
	          onBlur = _props2.onBlur,
	          onChange = _props2.onChange,
	          onFocus = _props2.onFocus,
	          style = _props2.style,
	          underlineDisabledStyle = _props2.underlineDisabledStyle,
	          underlineFocusStyle = _props2.underlineFocusStyle,
	          underlineShow = _props2.underlineShow,
	          underlineStyle = _props2.underlineStyle,
	          _props2$defaultValue = _props2.defaultValue,
	          defaultValue = _props2$defaultValue === undefined ? [] : _props2$defaultValue,
	          filter = _props2.filter,
	          value = _props2.value,
	          dataSource = _props2.dataSource,
	          floatingLabelFixed = _props2.floatingLabelFixed,
	          floatingLabelFocusStyle = _props2.floatingLabelFocusStyle,
	          floatingLabelStyle = _props2.floatingLabelStyle,
	          floatingLabelText = _props2.floatingLabelText,
	          onRequestAdd = _props2.onRequestAdd,
	          onRequestDelete = _props2.onRequestDelete,
	          _props2$chipRenderer = _props2.chipRenderer,
	          chipRenderer = _props2$chipRenderer === undefined ? defaultChipRenderer : _props2$chipRenderer,
	          newChipKeyCodes = _props2.newChipKeyCodes,
	          other = _objectWithoutProperties(_props2, ['children', 'className', 'dataSourceConfig', 'disabled', 'errorStyle', 'errorText', 'fullWidth', 'fullWidthInput', 'hintText', 'hintStyle', 'inputStyle', 'clearOnBlur', 'onBlur', 'onChange', 'onFocus', 'style', 'underlineDisabledStyle', 'underlineFocusStyle', 'underlineShow', 'underlineStyle', 'defaultValue', 'filter', 'value', 'dataSource', 'floatingLabelFixed', 'floatingLabelFocusStyle', 'floatingLabelStyle', 'floatingLabelText', 'onRequestAdd', 'onRequestDelete', 'chipRenderer', 'newChipKeyCodes']);
	
	      var prepareStyles = this.context.muiTheme.prepareStyles;
	
	      var styles = getStyles(this.props, this.context, this.state);
	      var inputId = this.uniqueId;
	
	      var inputProps = {
	        id: inputId,
	        ref: function ref(elem) {
	          return _this5.input = elem;
	        },
	        disabled: !!this.props.disabled,
	        onBlur: this.handleInputBlur,
	        onFocus: this.handleInputFocus,
	        onKeyDown: this.handleKeyDown,
	        fullWidth: !!fullWidthInput
	      };
	
	      var inputStyleMerged = _extends(styles.input, inputStyle);
	
	      var hasInput = (this.props.value || this.state.chips).length > 0 || this.state.inputValue.length > 0;
	      var showHintText = hintText && !hasInput;
	      var shrinkFloatingLabel = floatingLabelText && (hasInput || this.state.isFocused || floatingLabelFixed);
	
	      var errorTextElement = this.state.errorText && _react2.default.createElement(
	        'div',
	        { style: prepareStyles(styles.error) },
	        this.state.errorText
	      );
	
	      var floatingLabelTextElement = floatingLabelText && _react2.default.createElement(
	        _TextFieldLabel2.default,
	        {
	          muiTheme: this.context.muiTheme,
	          style: _extends(styles.floatingLabel, this.props.floatingLabelStyle),
	          shrinkStyle: _extends(styles.floatingLabelFocusStyle, this.props.floatingLabelFocusStyle),
	          htmlFor: inputId,
	          shrink: shrinkFloatingLabel,
	          disabled: disabled
	        },
	        floatingLabelText
	      );
	
	      var overrideRootStyles = {};
	      if (floatingLabelText) {
	        overrideRootStyles.marginTop = 14;
	      }
	      if (fullWidth) {
	        overrideRootStyles.width = '100%';
	      }
	      if (disabled) {
	        overrideRootStyles.cursor = 'not-allowed';
	      }
	
	      var chips = this.props.value || this.state.chips;
	      var autoCompleteData = dataSourceConfig ? (dataSource || []).filter(function (value) {
	        return !chips.some(function (c) {
	          return c[dataSourceConfig.value] === value[dataSourceConfig.value];
	        });
	      }) : (dataSource || []).filter(function (value) {
	        return chips.indexOf(value) < 0;
	      });
	
	      var actualFilter = other.openOnFocus ? function (search, key) {
	        return search === '' || filter(search, key);
	      } : filter;
	
	      return _react2.default.createElement(
	        'div',
	        {
	          className: className,
	          style: prepareStyles(_extends(styles.root, style, overrideRootStyles)),
	          onTouchTap: function onTouchTap() {
	            return _this5.focus();
	          }
	        },
	        _react2.default.createElement(
	          'div',
	          null,
	          floatingLabelTextElement,
	          _react2.default.createElement(
	            'div',
	            { style: { marginTop: floatingLabelText ? 12 : 0 } },
	            chips.map(function (tag, i) {
	              var value = dataSourceConfig ? tag[dataSourceConfig.value] : tag;
	              return chipRenderer({
	                value: value,
	                text: dataSourceConfig ? tag[dataSourceConfig.text] : tag,
	                isDisabled: disabled,
	                isFocused: _this5.state.focusedChip === value,
	                handleClick: function handleClick() {
	                  return _this5.setState({ focusedChip: value });
	                },
	                handleRequestDelete: function handleRequestDelete() {
	                  return _this5.handleDeleteChip(value);
	                }
	              }, i);
	            })
	          )
	        ),
	        hintText ? _react2.default.createElement(_TextFieldHint2.default, {
	          muiTheme: this.context.muiTheme,
	          show: showHintText && !(floatingLabelText && !floatingLabelFixed && !this.state.isFocused),
	          style: _extends({ bottom: 20, pointerEvents: 'none' }, hintStyle),
	          text: hintText
	        }) : null,
	        _react2.default.createElement(_AutoComplete2.default, _extends({}, other, inputProps, {
	          filter: actualFilter,
	          style: inputStyleMerged,
	          dataSource: autoCompleteData,
	          dataSourceConfig: dataSourceConfig,
	          searchText: this.state.inputValue,
	          underlineShow: false,
	          onKeyUp: this.handleKeyUp,
	          ref: function ref(_ref2) {
	            return _this5.autoComplete = _ref2;
	          }
	        })),
	        underlineShow ? _react2.default.createElement(_TextFieldUnderline2.default, {
	          disabled: disabled,
	          disabledStyle: underlineDisabledStyle,
	          error: !!this.state.errorText,
	          errorStyle: errorStyle,
	          focus: this.state.isFocused,
	          focusStyle: underlineFocusStyle,
	          muiTheme: this.context.muiTheme,
	          style: underlineStyle
	        }) : null,
	        errorTextElement
	      );
	    }
	  }]);
	
	  return ChipInput;
	}(_react2.default.Component);
	
	ChipInput.contextTypes = {
	  muiTheme: _react2.default.PropTypes.object.isRequired
	};
	
	
	ChipInput.propTypes = {
	  style: _react.PropTypes.object,
	  floatingLabelText: _react.PropTypes.node,
	  hintText: _react.PropTypes.node,
	  dataSourceConfig: _react.PropTypes.shape({
	    text: _react.PropTypes.string.isRequired,
	    value: _react.PropTypes.string.isRequired
	  }),
	  disabled: _react.PropTypes.bool,
	  defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.arrayOf(_react.PropTypes.object)]),
	  onChange: _react.PropTypes.func,
	  value: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.arrayOf(_react.PropTypes.object)]),
	  onRequestAdd: _react.PropTypes.func,
	  onRequestDelete: _react.PropTypes.func,
	  dataSource: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.string), _react.PropTypes.arrayOf(_react.PropTypes.object)]),
	  onUpdateInput: _react.PropTypes.func,
	  openOnFocus: _react.PropTypes.bool,
	  chipRenderer: _react.PropTypes.func,
	  newChipKeyCodes: _react.PropTypes.arrayOf(_react.PropTypes.number),
	  clearOnBlur: _react.PropTypes.bool
	};
	
	ChipInput.defaultProps = {
	  filter: _AutoComplete2.default.caseInsensitiveFilter,
	  newChipKeyCodes: [13],
	  clearOnBlur: true,
	  underlineShow: true
	};
	
	exports.default = ChipInput;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(5);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(6);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var propTypes = {
	  /**
	   * True if the parent `TextField` is disabled.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is disabled.
	   */
	  disabledStyle: _react.PropTypes.object,
	  /**
	   * True if the parent `TextField` has an error.
	   */
	  error: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` has an error.
	   */
	  errorStyle: _react.PropTypes.object,
	  /**
	   * True if the parent `TextField` is focused.
	   */
	  focus: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the underline when parent `TextField` is focused.
	   */
	  focusStyle: _react.PropTypes.object,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react.PropTypes.object.isRequired,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	};
	
	var defaultProps = {
	  disabled: false,
	  disabledStyle: {},
	  error: false,
	  errorStyle: {},
	  focus: false,
	  focusStyle: {},
	  style: {}
	};
	
	var TextFieldUnderline = function TextFieldUnderline(props) {
	  var disabled = props.disabled,
	      disabledStyle = props.disabledStyle,
	      error = props.error,
	      errorStyle = props.errorStyle,
	      focus = props.focus,
	      focusStyle = props.focusStyle,
	      muiTheme = props.muiTheme,
	      style = props.style;
	  var errorStyleColor = errorStyle.color;
	  var prepareStyles = muiTheme.prepareStyles,
	      _muiTheme$textField = muiTheme.textField,
	      borderColor = _muiTheme$textField.borderColor,
	      disabledTextColor = _muiTheme$textField.disabledTextColor,
	      errorColor = _muiTheme$textField.errorColor,
	      focusColor = _muiTheme$textField.focusColor;
	
	
	  var styles = {
	    root: {
	      borderTop: 'none',
	      borderLeft: 'none',
	      borderRight: 'none',
	      borderBottom: 'solid 1px',
	      borderColor: borderColor,
	      bottom: 8,
	      boxSizing: 'content-box',
	      margin: 0,
	      position: 'absolute',
	      width: '100%'
	    },
	    disabled: {
	      borderBottom: 'dotted 2px',
	      borderColor: disabledTextColor
	    },
	    focus: {
	      borderBottom: 'solid 2px',
	      borderColor: focusColor,
	      transform: 'scaleX(0)',
	      transition: _transitions2.default.easeOut()
	    },
	    error: {
	      borderColor: errorStyleColor ? errorStyleColor : errorColor,
	      transform: 'scaleX(1)'
	    }
	  };
	
	  var underline = (0, _simpleAssign2.default)({}, styles.root, style);
	  var focusedUnderline = (0, _simpleAssign2.default)({}, underline, styles.focus, focusStyle);
	
	  if (disabled) underline = (0, _simpleAssign2.default)({}, underline, styles.disabled, disabledStyle);
	  if (focus) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, { transform: 'scaleX(1)' });
	  if (error) focusedUnderline = (0, _simpleAssign2.default)({}, focusedUnderline, styles.error);
	
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement('hr', { style: prepareStyles(underline) }),
	    _react2.default.createElement('hr', { style: prepareStyles(focusedUnderline) })
	  );
	};
	
	process.env.NODE_ENV !== "production" ? TextFieldUnderline.propTypes = propTypes : void 0;
	TextFieldUnderline.defaultProps = defaultProps;
	
	exports.default = TextFieldUnderline;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */
/***/ function(module, exports) {

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
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	  return target;
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	
	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
	
	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;
	
	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }
	
	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';
	
	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(5);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(6);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props) {
	  var hintColor = props.muiTheme.textField.hintColor,
	      show = props.show;
	
	
	  return {
	    root: {
	      position: 'absolute',
	      opacity: show ? 1 : 0,
	      color: hintColor,
	      transition: _transitions2.default.easeOut(),
	      bottom: 12
	    }
	  };
	}
	
	var TextFieldHint = function TextFieldHint(props) {
	  var prepareStyles = props.muiTheme.prepareStyles,
	      style = props.style,
	      text = props.text;
	
	
	  var styles = getStyles(props);
	
	  return _react2.default.createElement(
	    'div',
	    { style: prepareStyles((0, _simpleAssign2.default)(styles.root, style)) },
	    text
	  );
	};
	
	process.env.NODE_ENV !== "production" ? TextFieldHint.propTypes = {
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react.PropTypes.object.isRequired,
	  /**
	   * True if the hint text should be visible.
	   */
	  show: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * The hint text displayed.
	   */
	  text: _react.PropTypes.node
	} : void 0;
	
	TextFieldHint.defaultProps = {
	  show: true
	};
	
	exports.default = TextFieldHint;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _simpleAssign = __webpack_require__(5);
	
	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _transitions = __webpack_require__(6);
	
	var _transitions2 = _interopRequireDefault(_transitions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getStyles(props) {
	  var defaultStyles = {
	    position: 'absolute',
	    lineHeight: '22px',
	    top: 38,
	    transition: _transitions2.default.easeOut(),
	    zIndex: 1, // Needed to display label above Chrome's autocomplete field background
	    transform: 'scale(1) translate(0, 0)',
	    transformOrigin: 'left top',
	    pointerEvents: 'auto',
	    userSelect: 'none'
	  };
	
	  var shrinkStyles = props.shrink ? (0, _simpleAssign2.default)({
	    transform: 'scale(0.75) translate(0, -28px)',
	    pointerEvents: 'none'
	  }, props.shrinkStyle) : null;
	
	  return {
	    root: (0, _simpleAssign2.default)(defaultStyles, props.style, shrinkStyles)
	  };
	}
	
	var TextFieldLabel = function TextFieldLabel(props) {
	  var muiTheme = props.muiTheme,
	      className = props.className,
	      children = props.children,
	      htmlFor = props.htmlFor,
	      onTouchTap = props.onTouchTap;
	  var prepareStyles = muiTheme.prepareStyles;
	
	  var styles = getStyles(props);
	
	  return _react2.default.createElement(
	    'label',
	    {
	      className: className,
	      style: prepareStyles(styles.root),
	      htmlFor: htmlFor,
	      onTouchTap: onTouchTap
	    },
	    children
	  );
	};
	
	process.env.NODE_ENV !== "production" ? TextFieldLabel.propTypes = {
	  /**
	   * The label contents.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * The css class name of the root element.
	   */
	  className: _react.PropTypes.string,
	  /**
	   * Disables the label if set to true.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * The id of the target element that this label should refer to.
	   */
	  htmlFor: _react.PropTypes.string,
	  /**
	   * @ignore
	   * The material-ui theme applied to this component.
	   */
	  muiTheme: _react.PropTypes.object.isRequired,
	  /**
	   * Callback function for when the label is selected via a touch tap.
	   */
	  onTouchTap: _react.PropTypes.func,
	  /**
	   * True if the floating label should shrink.
	   */
	  shrink: _react.PropTypes.bool,
	  /**
	   * Override the inline-styles of the root element when shrunk.
	   */
	  shrinkStyle: _react.PropTypes.object,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object
	} : void 0;
	
	TextFieldLabel.defaultProps = {
	  disabled: false,
	  shrink: false
	};
	
	exports.default = TextFieldLabel;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = MaterialUI.AutoComplete;

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = MaterialUIStyles.transitions;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = MaterialUI.Chip;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = MaterialUIStyles.colors;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = MaterialUIUtils.colorManipulator;

/***/ }
/******/ ]);
//# sourceMappingURL=material-ui-chip-input.inc.js.map