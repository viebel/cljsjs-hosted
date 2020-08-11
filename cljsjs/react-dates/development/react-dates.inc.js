var ReactDates =
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

	var DateRangePicker = __webpack_require__(1)['default'];
	var DateRangePickerInput = __webpack_require__(68)['default'];
	var SingleDatePicker = __webpack_require__(85)['default'];
	var SingleDatePickerInput = __webpack_require__(86)['default'];
	var DayPicker = __webpack_require__(70)['default'];
	var CalendarMonthGrid = __webpack_require__(75)['default'];
	var CalendarMonth = __webpack_require__(78)['default'];
	var CalendarDay = __webpack_require__(79)['default'];

	var DateRangePickerShape = __webpack_require__(82)['default'];
	var SingleDatePickerShape = __webpack_require__(87)['default'];

	var isInclusivelyAfterDay = __webpack_require__(64)['default'];
	var isInclusivelyBeforeDay = __webpack_require__(66)['default'];
	var isNextDay = __webpack_require__(67)['default'];
	var isSameDay = __webpack_require__(65)['default'];

	var toISODateString = __webpack_require__(88)['default'];
	var toLocalizedDateString = __webpack_require__(63)['default'];
	var toMomentObject = __webpack_require__(62)['default'];

	module.exports = {
	  DateRangePicker: DateRangePicker,
	  SingleDatePicker: SingleDatePicker,

	  DateRangePickerInput: DateRangePickerInput,
	  SingleDatePickerInput: SingleDatePickerInput,
	  DayPicker: DayPicker,
	  CalendarMonthGrid: CalendarMonthGrid,
	  CalendarMonth: CalendarMonth,
	  CalendarDay: CalendarDay,

	  DateRangePickerShape: DateRangePickerShape,
	  SingleDatePickerShape: SingleDatePickerShape,

	  isInclusivelyAfterDay: isInclusivelyAfterDay,
	  isInclusivelyBeforeDay: isInclusivelyBeforeDay,
	  isNextDay: isNextDay,
	  isSameDay: isSameDay,

	  toISODateString: toISODateString,
	  toLocalizedDateString: toLocalizedDateString,
	  toMomentObject: toMomentObject
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {

		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		var _reactDom = __webpack_require__(10);

		var _reactDom2 = _interopRequireDefault(_reactDom);

		var _moment = __webpack_require__(4);

		var _moment2 = _interopRequireDefault(_moment);

		var _classnames = __webpack_require__(5);

		var _classnames2 = _interopRequireDefault(_classnames);

		var _reactPortal = __webpack_require__(15);

		var _reactPortal2 = _interopRequireDefault(_reactPortal);

		var _arrayIncludes = __webpack_require__(16);

		var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);

		var _reactTether = __webpack_require__(17);

		var _reactTether2 = _interopRequireDefault(_reactTether);

		var _isTouchDevice = __webpack_require__(14);

		var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

		var _toMomentObject = __webpack_require__(18);

		var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

		var _toLocalizedDateString = __webpack_require__(19);

		var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

		var _isInclusivelyAfterDay = __webpack_require__(20);

		var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

		var _isInclusivelyBeforeDay = __webpack_require__(21);

		var _isInclusivelyBeforeDay2 = _interopRequireDefault(_isInclusivelyBeforeDay);

		var _isNextDay = __webpack_require__(22);

		var _isNextDay2 = _interopRequireDefault(_isNextDay);

		var _isSameDay = __webpack_require__(23);

		var _isSameDay2 = _interopRequireDefault(_isSameDay);

		var _DateRangePickerInput = __webpack_require__(24);

		var _DateRangePickerInput2 = _interopRequireDefault(_DateRangePickerInput);

		var _DayPicker = __webpack_require__(25);

		var _DayPicker2 = _interopRequireDefault(_DayPicker);

		var _close = __webpack_require__(26);

		var _close2 = _interopRequireDefault(_close);

		var _DateRangePickerShape = __webpack_require__(27);

		var _DateRangePickerShape2 = _interopRequireDefault(_DateRangePickerShape);

		var _constants = __webpack_require__(9);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { 'default': obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var propTypes = _DateRangePickerShape2['default'];

		var defaultProps = {
			startDateId: _constants.START_DATE,
			endDateId: _constants.END_DATE,
			focusedInput: null,
			minimumNights: 1,
			isDayBlocked: function () {
				function isDayBlocked() {
					return false;
				}

				return isDayBlocked;
			}(),
			disabledDays: [],
			isOutsideRange: function () {
				function isOutsideRange(day) {
					return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
				}

				return isOutsideRange;
			}(),
			enableOutsideDays: false,
			numberOfMonths: 2,
			showClearDates: false,
			disabled: false,
			required: false,
			reopenPickerOnClearDates: false,
			initialVisibleMonth: function () {
				function initialVisibleMonth() {
					return (0, _moment2['default'])();
				}

				return initialVisibleMonth;
			}(),

			orientation: _constants.HORIZONTAL_ORIENTATION,
			anchorDirection: _constants.ANCHOR_LEFT,
			withPortal: false,
			withFullScreenPortal: false,

			onDatesChange: function () {
				function onDatesChange() {}

				return onDatesChange;
			}(),
			onFocusChange: function () {
				function onFocusChange() {}

				return onFocusChange;
			}(),
			onPrevMonthClick: function () {
				function onPrevMonthClick() {}

				return onPrevMonthClick;
			}(),
			onNextMonthClick: function () {
				function onNextMonthClick() {}

				return onNextMonthClick;
			}(),

			// i18n
			displayFormat: function () {
				function displayFormat() {
					return _moment2['default'].localeData().longDateFormat('L');
				}

				return displayFormat;
			}(),
			monthFormat: 'MMMM YYYY',
			phrases: {
				closeDatePicker: 'Close',
				clearDates: 'Clear Dates'
			}
		};

		var DateRangePicker = function (_React$Component) {
			_inherits(DateRangePicker, _React$Component);

			function DateRangePicker(props) {
				_classCallCheck(this, DateRangePicker);

				var _this = _possibleConstructorReturn(this, (DateRangePicker.__proto__ || Object.getPrototypeOf(DateRangePicker)).call(this, props));

				_this.state = {
					hoverDate: null
				};

				_this.isTouchDevice = (0, _isTouchDevice2['default'])();

				_this.onOutsideClick = _this.onOutsideClick.bind(_this);
				_this.onDayMouseEnter = _this.onDayMouseEnter.bind(_this);
				_this.onDayMouseLeave = _this.onDayMouseLeave.bind(_this);
				_this.onDayClick = _this.onDayClick.bind(_this);

				_this.onClearFocus = _this.onClearFocus.bind(_this);
				_this.onStartDateChange = _this.onStartDateChange.bind(_this);
				_this.onStartDateFocus = _this.onStartDateFocus.bind(_this);
				_this.onEndDateChange = _this.onEndDateChange.bind(_this);
				_this.onEndDateFocus = _this.onEndDateFocus.bind(_this);
				_this.clearDates = _this.clearDates.bind(_this);
				return _this;
			}

			_createClass(DateRangePicker, [{
				key: 'onClearFocus',
				value: function () {
					function onClearFocus() {
						this.props.onFocusChange(null);
					}

					return onClearFocus;
				}()
			}, {
				key: 'onDayClick',
				value: function () {
					function onDayClick(day, modifiers, e) {
						var minimumNights = this.props.minimumNights;

						if (e) e.preventDefault();
						if ((0, _arrayIncludes2['default'])(modifiers, 'blocked')) return;

						var focusedInput = this.props.focusedInput;
						var _props = this.props;
						var startDate = _props.startDate;
						var endDate = _props.endDate;

						if (focusedInput === _constants.START_DATE) {
							this.props.onFocusChange(_constants.END_DATE);

							startDate = day;

							if ((0, _isInclusivelyAfterDay2['default'])(day, endDate)) {
								endDate = null;
							}
						} else if (focusedInput === _constants.END_DATE) {
							var firstAllowedEndDate = startDate && startDate.clone().add(minimumNights, 'days');

							if (!startDate) {
								endDate = day;
								this.props.onFocusChange(_constants.START_DATE);
							} else if ((0, _isInclusivelyAfterDay2['default'])(day, firstAllowedEndDate)) {
								endDate = day;
								this.props.onFocusChange(null);
							} else {
								startDate = day;
								endDate = null;
							}
						}

						this.props.onDatesChange({ startDate: startDate, endDate: endDate });
					}

					return onDayClick;
				}()
			}, {
				key: 'onDayMouseEnter',
				value: function () {
					function onDayMouseEnter(day) {
						if (this.isTouchDevice) return;

						this.setState({
							hoverDate: day
						});
					}

					return onDayMouseEnter;
				}()
			}, {
				key: 'onDayMouseLeave',
				value: function () {
					function onDayMouseLeave() {
						if (this.isTouchDevice) return;

						this.setState({
							hoverDate: null
						});
					}

					return onDayMouseLeave;
				}()
			}, {
				key: 'onEndDateChange',
				value: function () {
					function onEndDateChange(endDateString) {
						var _props2 = this.props;
						var startDate = _props2.startDate;
						var isOutsideRange = _props2.isOutsideRange;
						var onDatesChange = _props2.onDatesChange;
						var onFocusChange = _props2.onFocusChange;

						var endDate = (0, _toMomentObject2['default'])(endDateString, this.getDisplayFormat());

						var isEndDateValid = endDate && !isOutsideRange(endDate) && !(0, _isInclusivelyBeforeDay2['default'])(endDate, startDate);
						if (isEndDateValid) {
							onDatesChange({ startDate: startDate, endDate: endDate });
							onFocusChange(null);
						} else {
							onDatesChange({
								startDate: startDate,
								endDate: null
							});
						}
					}

					return onEndDateChange;
				}()
			}, {
				key: 'onEndDateFocus',
				value: function () {
					function onEndDateFocus() {
						var _props3 = this.props;
						var startDate = _props3.startDate;
						var onFocusChange = _props3.onFocusChange;
						var orientation = _props3.orientation;
						var disabled = _props3.disabled;

						if (!startDate && orientation === _constants.VERTICAL_ORIENTATION && !disabled) {
							// Since the vertical datepicker is full screen, we never want to focus the end date first
							// because there's no indication that that is the case once the datepicker is open and it
							// might confuse the user
							onFocusChange(_constants.START_DATE);
						} else if (!disabled) {
							onFocusChange(_constants.END_DATE);
						}
					}

					return onEndDateFocus;
				}()
			}, {
				key: 'onOutsideClick',
				value: function () {
					function onOutsideClick() {
						var _props4 = this.props;
						var focusedInput = _props4.focusedInput;
						var onFocusChange = _props4.onFocusChange;

						if (!focusedInput) return;

						onFocusChange(null);
					}

					return onOutsideClick;
				}()
			}, {
				key: 'onStartDateChange',
				value: function () {
					function onStartDateChange(startDateString) {
						var startDate = (0, _toMomentObject2['default'])(startDateString, this.getDisplayFormat());

						var endDate = this.props.endDate;
						var _props5 = this.props;
						var isOutsideRange = _props5.isOutsideRange;
						var onDatesChange = _props5.onDatesChange;
						var onFocusChange = _props5.onFocusChange;

						var isStartDateValid = startDate && !isOutsideRange(startDate);
						if (isStartDateValid) {
							if ((0, _isInclusivelyBeforeDay2['default'])(endDate, startDate)) {
								endDate = null;
							}

							onDatesChange({ startDate: startDate, endDate: endDate });
							onFocusChange(_constants.END_DATE);
						} else {
							onDatesChange({
								startDate: null,
								endDate: endDate
							});
						}
					}

					return onStartDateChange;
				}()
			}, {
				key: 'onStartDateFocus',
				value: function () {
					function onStartDateFocus() {
						if (!this.props.disabled) {
							this.props.onFocusChange(_constants.START_DATE);
						}
					}

					return onStartDateFocus;
				}()
			}, {
				key: 'getDateString',
				value: function () {
					function getDateString(date) {
						var displayFormat = this.getDisplayFormat();
						if (date && displayFormat) {
							return date && date.format(displayFormat);
						}
						return (0, _toLocalizedDateString2['default'])(date);
					}

					return getDateString;
				}()
			}, {
				key: 'getDayPickerContainerClasses',
				value: function () {
					function getDayPickerContainerClasses() {
						var _props6 = this.props;
						var orientation = _props6.orientation;
						var withPortal = _props6.withPortal;
						var withFullScreenPortal = _props6.withFullScreenPortal;
						var anchorDirection = _props6.anchorDirection;
						var hoverDate = this.state.hoverDate;

						var dayPickerClassName = (0, _classnames2['default'])('DateRangePicker__picker', {
							'DateRangePicker__picker--direction-left': anchorDirection === _constants.ANCHOR_LEFT,
							'DateRangePicker__picker--direction-right': anchorDirection === _constants.ANCHOR_RIGHT,
							'DateRangePicker__picker--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
							'DateRangePicker__picker--vertical': orientation === _constants.VERTICAL_ORIENTATION,
							'DateRangePicker__picker--portal': withPortal || withFullScreenPortal,
							'DateRangePicker__picker--full-screen-portal': withFullScreenPortal,
							'DateRangePicker__picker--valid-date-hovered': hoverDate && !this.isBlocked(hoverDate)
						});

						return dayPickerClassName;
					}

					return getDayPickerContainerClasses;
				}()
			}, {
				key: 'getDayPickerDOMNode',
				value: function () {
					function getDayPickerDOMNode() {
						return _reactDom2['default'].findDOMNode(this.dayPicker);
					}

					return getDayPickerDOMNode;
				}()
			}, {
				key: 'getDisplayFormat',
				value: function () {
					function getDisplayFormat() {
						var displayFormat = this.props.displayFormat;

						return typeof displayFormat === 'string' ? displayFormat : displayFormat();
					}

					return getDisplayFormat;
				}()
			}, {
				key: 'clearDates',
				value: function () {
					function clearDates() {
						var _props7 = this.props;
						var onDatesChange = _props7.onDatesChange;
						var reopenPickerOnClearDates = _props7.reopenPickerOnClearDates;
						var onFocusChange = _props7.onFocusChange;

						onDatesChange({ startDate: null, endDate: null });
						if (reopenPickerOnClearDates) {
							onFocusChange(_constants.START_DATE);
						}
					}

					return clearDates;
				}()
			}, {
				key: 'doesNotMeetMinimumNights',
				value: function () {
					function doesNotMeetMinimumNights(day) {
						var _props8 = this.props;
						var startDate = _props8.startDate;
						var isOutsideRange = _props8.isOutsideRange;
						var focusedInput = _props8.focusedInput;
						var minimumNights = _props8.minimumNights;

						if (focusedInput !== _constants.END_DATE) return false;

						if (startDate) {
							var dayDiff = day.diff(startDate, 'days');
							return dayDiff < minimumNights && dayDiff >= 0;
						}
						return isOutsideRange((0, _moment2['default'])(day).subtract(minimumNights, 'days'));
					}

					return doesNotMeetMinimumNights;
				}()
			}, {
				key: 'isDayAfterHoveredStartDate',
				value: function () {
					function isDayAfterHoveredStartDate(day) {
						var _props9 = this.props;
						var startDate = _props9.startDate;
						var endDate = _props9.endDate;
						var minimumNights = _props9.minimumNights;
						var hoverDate = this.state.hoverDate;

						return !!startDate && !endDate && (0, _isNextDay2['default'])(hoverDate, day) && minimumNights > 0 && (0, _isSameDay2['default'])(hoverDate, startDate);
					}

					return isDayAfterHoveredStartDate;
				}()
			}, {
				key: 'isEndDate',
				value: function () {
					function isEndDate(day) {
						return (0, _isSameDay2['default'])(day, this.props.endDate);
					}

					return isEndDate;
				}()
			}, {
				key: 'isHovered',
				value: function () {
					function isHovered(day) {
						return (0, _isSameDay2['default'])(day, this.state.hoverDate);
					}

					return isHovered;
				}()
			}, {
				key: 'isInHoveredSpan',
				value: function () {
					function isInHoveredSpan(day) {
						var _props10 = this.props;
						var startDate = _props10.startDate;
						var endDate = _props10.endDate;
						var hoverDate = this.state.hoverDate;

						var isForwardRange = !!startDate && !endDate && (day.isBetween(startDate, hoverDate) || (0, _isSameDay2['default'])(hoverDate, day));
						var isBackwardRange = !!endDate && !startDate && (day.isBetween(hoverDate, endDate) || (0, _isSameDay2['default'])(hoverDate, day));

						return isForwardRange || isBackwardRange;
					}

					return isInHoveredSpan;
				}()
			}, {
				key: 'isInSelectedSpan',
				value: function () {
					function isInSelectedSpan(day) {
						var _props11 = this.props;
						var startDate = _props11.startDate;
						var endDate = _props11.endDate;

						return day.isBetween(startDate, endDate);
					}

					return isInSelectedSpan;
				}()
			}, {
				key: 'isLastInRange',
				value: function () {
					function isLastInRange(day) {
						return this.isInSelectedSpan(day) && (0, _isNextDay2['default'])(day, this.props.endDate);
					}

					return isLastInRange;
				}()
			}, {
				key: 'isStartDate',
				value: function () {
					function isStartDate(day) {
						return (0, _isSameDay2['default'])(day, this.props.startDate);
					}

					return isStartDate;
				}()
			}, {
				key: 'isBlocked',
				value: function () {
					function isBlocked(day) {
						var _props12 = this.props;
						var isDayBlocked = _props12.isDayBlocked;
						var isOutsideRange = _props12.isOutsideRange;

						return isDayBlocked(day) || isOutsideRange(day) || this.doesNotMeetMinimumNights(day);
					}

					return isBlocked;
				}()
			}, {
				key: 'maybeRenderDayPickerWithPortal',
				value: function () {
					function maybeRenderDayPickerWithPortal() {
						var _props13 = this.props;
						var focusedInput = _props13.focusedInput;
						var withPortal = _props13.withPortal;
						var withFullScreenPortal = _props13.withFullScreenPortal;

						if (withPortal || withFullScreenPortal) {
							return _react2['default'].createElement(_reactPortal2['default'], { isOpened: focusedInput !== null }, this.renderDayPicker());
						}

						return this.renderDayPicker();
					}

					return maybeRenderDayPickerWithPortal;
				}()
			}, {
				key: 'renderDayPicker',
				value: function () {
					function renderDayPicker() {
						var _this2 = this;

						var _props14 = this.props;
						var isDayBlocked = _props14.isDayBlocked;
						var isOutsideRange = _props14.isOutsideRange;
						var numberOfMonths = _props14.numberOfMonths;
						var orientation = _props14.orientation;
						var monthFormat = _props14.monthFormat;
						var onPrevMonthClick = _props14.onPrevMonthClick;
						var onNextMonthClick = _props14.onNextMonthClick;
						var withPortal = _props14.withPortal;
						var withFullScreenPortal = _props14.withFullScreenPortal;
						var enableOutsideDays = _props14.enableOutsideDays;
						var initialVisibleMonth = _props14.initialVisibleMonth;
						var focusedInput = _props14.focusedInput;

						var modifiers = {
							blocked: function () {
								function blocked(day) {
									return _this2.isBlocked(day);
								}

								return blocked;
							}(),
							'blocked-calendar': function () {
								function blockedCalendar(day) {
									return isDayBlocked(day);
								}

								return blockedCalendar;
							}(),
							'blocked-out-of-range': function () {
								function blockedOutOfRange(day) {
									return isOutsideRange(day);
								}

								return blockedOutOfRange;
							}(),
							'blocked-minimum-nights': function () {
								function blockedMinimumNights(day) {
									return _this2.doesNotMeetMinimumNights(day);
								}

								return blockedMinimumNights;
							}(),
							valid: function () {
								function valid(day) {
									return !_this2.isBlocked(day);
								}

								return valid;
							}(),
							// before anything has been set or after both are set
							hovered: function () {
								function hovered(day) {
									return _this2.isHovered(day);
								}

								return hovered;
							}(),

							// while start date has been set, but end date has not been
							'hovered-span': function () {
								function hoveredSpan(day) {
									return _this2.isInHoveredSpan(day);
								}

								return hoveredSpan;
							}(),
							'after-hovered-start': function () {
								function afterHoveredStart(day) {
									return _this2.isDayAfterHoveredStartDate(day);
								}

								return afterHoveredStart;
							}(),
							'last-in-range': function () {
								function lastInRange(day) {
									return _this2.isLastInRange(day);
								}

								return lastInRange;
							}(),

							// once a start date and end date have been set
							'selected-start': function () {
								function selectedStart(day) {
									return _this2.isStartDate(day);
								}

								return selectedStart;
							}(),
							'selected-end': function () {
								function selectedEnd(day) {
									return _this2.isEndDate(day);
								}

								return selectedEnd;
							}(),
							'selected-span': function () {
								function selectedSpan(day) {
									return _this2.isInSelectedSpan(day);
								}

								return selectedSpan;
							}()
						};

						var onOutsideClick = !withFullScreenPortal ? this.onOutsideClick : undefined;

						return _react2['default'].createElement('div', { className: this.getDayPickerContainerClasses() }, _react2['default'].createElement(_DayPicker2['default'], {
							ref: function () {
								function ref(_ref) {
									_this2.dayPicker = _ref;
								}

								return ref;
							}(),
							orientation: orientation,
							enableOutsideDays: enableOutsideDays,
							modifiers: modifiers,
							numberOfMonths: numberOfMonths,
							onDayMouseEnter: this.onDayMouseEnter,
							onDayMouseLeave: this.onDayMouseLeave,
							onDayMouseDown: this.onDayClick,
							onDayTouchTap: this.onDayClick,
							onPrevMonthClick: onPrevMonthClick,
							onNextMonthClick: onNextMonthClick,
							monthFormat: monthFormat,
							withPortal: withPortal || withFullScreenPortal,
							hidden: !focusedInput,
							initialVisibleMonth: initialVisibleMonth,
							onOutsideClick: onOutsideClick
						}), withFullScreenPortal && _react2['default'].createElement('button', {
							className: 'DateRangePicker__close',
							type: 'button',
							onClick: this.onOutsideClick
						}, _react2['default'].createElement('span', { className: 'screen-reader-only' }, this.props.phrases.closeDatePicker), _react2['default'].createElement(_close2['default'], null)));
					}

					return renderDayPicker;
				}()
			}, {
				key: 'render',
				value: function () {
					function render() {
						var _this3 = this;

						var _props15 = this.props;
						var startDate = _props15.startDate;
						var endDate = _props15.endDate;
						var focusedInput = _props15.focusedInput;
						var showClearDates = _props15.showClearDates;
						var disabled = _props15.disabled;
						var required = _props15.required;
						var startDateId = _props15.startDateId;
						var endDateId = _props15.endDateId;
						var phrases = _props15.phrases;
						var anchorDirection = _props15.anchorDirection;
						var withPortal = _props15.withPortal;
						var withFullScreenPortal = _props15.withFullScreenPortal;

						var startDateString = this.getDateString(startDate);
						var endDateString = this.getDateString(endDate);

						var showDatepicker = focusedInput === _constants.START_DATE || focusedInput === _constants.END_DATE;
						var tetherPinDirection = anchorDirection === _constants.ANCHOR_LEFT ? _constants.ANCHOR_RIGHT : _constants.ANCHOR_LEFT;

						return _react2['default'].createElement('div', { className: 'DateRangePicker' }, _react2['default'].createElement(_reactTether2['default'], {
							classPrefix: 'DateRangePicker__tether',
							className: (0, _classnames2['default'])({
								'DateRangePicker__tether--show': showDatepicker,
								'DateRangePicker__tether--invisible': !showDatepicker
							}),
							attachment: 'top ' + String(anchorDirection),
							targetAttachment: 'bottom ' + String(anchorDirection),
							offset: '-23px 0',
							constraints: [{
								to: 'scrollParent',
								attachment: 'none',
								pin: [tetherPinDirection]
							}]
						}, _react2['default'].createElement(_DateRangePickerInput2['default'], {
							ref: function () {
								function ref(_ref2) {
									_this3.input = _ref2;
								}

								return ref;
							}(),
							startDateId: startDateId,
							startDatePlaceholderText: this.props.startDatePlaceholderText,
							isStartDateFocused: focusedInput === _constants.START_DATE,
							endDateId: endDateId,
							endDatePlaceholderText: this.props.endDatePlaceholderText,
							isEndDateFocused: focusedInput === _constants.END_DATE,
							onStartDateChange: this.onStartDateChange,
							onStartDateFocus: this.onStartDateFocus,
							onStartDateShiftTab: this.onClearFocus,
							onEndDateChange: this.onEndDateChange,
							onEndDateFocus: this.onEndDateFocus,
							onEndDateTab: this.onClearFocus,
							startDate: startDateString,
							endDate: endDateString,
							showClearDates: showClearDates,
							onClearDates: this.clearDates,
							disabled: disabled,
							required: required,
							showCaret: !withPortal && !withFullScreenPortal,
							phrases: phrases
						}), this.maybeRenderDayPickerWithPortal()));
					}

					return render;
				}()
			}]);

			return DateRangePicker;
		}(_react2['default'].Component);

		exports['default'] = DateRangePicker;

		DateRangePicker.propTypes = propTypes;
		DateRangePicker.defaultProps = defaultProps;

		/***/
	},
	/* 1 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(2);

		/***/
	},,,
	/* 2 */
	/* 3 */
	/* 4 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(3);

		/***/
	},
	/* 5 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(4);

		/***/
	},,,,
	/* 6 */
	/* 7 */
	/* 8 */
	/* 9 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(5);

		/***/
	},
	/* 10 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(6);

		/***/
	},,,,
	/* 11 */
	/* 12 */
	/* 13 */
	/* 14 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(7);

		/***/
	},
	/* 15 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(8);

		/***/
	},
	/* 16 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(34);

		/***/
	},
	/* 17 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(59);

		/***/
	},
	/* 18 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(62);

		/***/
	},
	/* 19 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(63);

		/***/
	},
	/* 20 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(64);

		/***/
	},
	/* 21 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(66);

		/***/
	},
	/* 22 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(67);

		/***/
	},
	/* 23 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(65);

		/***/
	},
	/* 24 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(68);

		/***/
	},
	/* 25 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(70);

		/***/
	},
	/* 26 */
	/***/function (module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { "default": obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var SVG = function (_React$Component) {
			_inherits(SVG, _React$Component);

			function SVG() {
				_classCallCheck(this, SVG);

				return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
			}

			_createClass(SVG, [{
				key: "render",
				value: function () {
					function render() {
						return _react2["default"].createElement("svg", _extends({ viewBox: "0 0 12 12" }, this.props), _react2["default"].createElement("path", { fillRule: "evenodd", d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" }));
					}

					return render;
				}()
			}]);

			return SVG;
		}(_react2["default"].Component);

		exports["default"] = SVG;

		/***/
	},
	/* 27 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(82);

		/***/
	}
	/******/]);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = moment;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  DISPLAY_FORMAT: 'L',
	  ISO_FORMAT: 'YYYY-MM-DD',

	  START_DATE: 'startDate',
	  END_DATE: 'endDate',

	  HORIZONTAL_ORIENTATION: 'horizontal',
	  VERTICAL_ORIENTATION: 'vertical',

	  ANCHOR_LEFT: 'left',
	  ANCHOR_RIGHT: 'right'
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 7 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isTouchDevice;
	function isTouchDevice() {
	  return !!(typeof window !== 'undefined' && 'ontouchstart' in window) || !!(typeof navigator !== 'undefined' && navigator.maxTouchPoints);
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _CSSPropertyOperations = __webpack_require__(9);

	var _CSSPropertyOperations2 = _interopRequireDefault(_CSSPropertyOperations);

	var _shallowCompare = __webpack_require__(32);

	var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var KEYCODES = {
	  ESCAPE: 27
	};

	var Portal = function (_React$Component) {
	  _inherits(Portal, _React$Component);

	  function Portal() {
	    _classCallCheck(this, Portal);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Portal).call(this));

	    _this.state = { active: false };
	    _this.handleWrapperClick = _this.handleWrapperClick.bind(_this);
	    _this.closePortal = _this.closePortal.bind(_this);
	    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
	    _this.handleKeydown = _this.handleKeydown.bind(_this);
	    _this.portal = null;
	    _this.node = null;
	    return _this;
	  }

	  _createClass(Portal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.closeOnEsc) {
	        document.addEventListener('keydown', this.handleKeydown);
	      }

	      if (this.props.closeOnOutsideClick) {
	        document.addEventListener('mouseup', this.handleOutsideMouseClick);
	        document.addEventListener('touchstart', this.handleOutsideMouseClick);
	      }

	      if (this.props.isOpened) {
	        this.openPortal();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      // portal's 'is open' state is handled through the prop isOpened
	      if (typeof newProps.isOpened !== 'undefined') {
	        if (newProps.isOpened) {
	          if (this.state.active) {
	            this.renderPortal(newProps);
	          } else {
	            this.openPortal(newProps);
	          }
	        }
	        if (!newProps.isOpened && this.state.active) {
	          this.closePortal();
	        }
	      }

	      // portal handles its own 'is open' state
	      if (typeof newProps.isOpened === 'undefined' && this.state.active) {
	        this.renderPortal(newProps);
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _shallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.closeOnEsc) {
	        document.removeEventListener('keydown', this.handleKeydown);
	      }

	      if (this.props.closeOnOutsideClick) {
	        document.removeEventListener('mouseup', this.handleOutsideMouseClick);
	        document.removeEventListener('touchstart', this.handleOutsideMouseClick);
	      }

	      this.closePortal(true);
	    }
	  }, {
	    key: 'handleWrapperClick',
	    value: function handleWrapperClick(e) {
	      e.preventDefault();
	      e.stopPropagation();
	      if (this.state.active) {
	        return;
	      }
	      this.openPortal();
	    }
	  }, {
	    key: 'openPortal',
	    value: function openPortal() {
	      var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	      this.setState({ active: true });
	      this.renderPortal(props);
	      this.props.onOpen(this.node);
	    }
	  }, {
	    key: 'closePortal',
	    value: function closePortal() {
	      var _this2 = this;

	      var isUnmounted = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	      var resetPortalState = function resetPortalState() {
	        if (_this2.node) {
	          _reactDom2.default.unmountComponentAtNode(_this2.node);
	          document.body.removeChild(_this2.node);
	        }
	        _this2.portal = null;
	        _this2.node = null;
	        if (isUnmounted !== true) {
	          _this2.setState({ active: false });
	        }
	      };

	      if (this.state.active) {
	        if (this.props.beforeClose) {
	          this.props.beforeClose(this.node, resetPortalState);
	        } else {
	          resetPortalState();
	        }

	        this.props.onClose();
	      }
	    }
	  }, {
	    key: 'handleOutsideMouseClick',
	    value: function handleOutsideMouseClick(e) {
	      if (!this.state.active) {
	        return;
	      }

	      var root = (0, _reactDom.findDOMNode)(this.portal);
	      if (root.contains(e.target) || e.button && e.button !== 0) {
	        return;
	      }

	      e.stopPropagation();
	      this.closePortal();
	    }
	  }, {
	    key: 'handleKeydown',
	    value: function handleKeydown(e) {
	      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
	        this.closePortal();
	      }
	    }
	  }, {
	    key: 'applyClassNameAndStyle',
	    value: function applyClassNameAndStyle(props) {
	      if (props.className) {
	        this.node.className = props.className;
	      }
	      if (props.style) {
	        // React 15.1.0+ requires third parameter in debug mode
	        /* eslint-disable no-underscore-dangle */
	        _CSSPropertyOperations2.default.setValueForStyles(this.node, props.style, this._reactInternalInstance);
	        /* eslint-enable no-underscore-dangle */
	      }
	    }
	  }, {
	    key: 'renderPortal',
	    value: function renderPortal(props) {
	      if (!this.node) {
	        this.node = document.createElement('div');
	        // apply CSS before the node is added to the DOM to avoid needless reflows
	        this.applyClassNameAndStyle(props);
	        document.body.appendChild(this.node);
	      } else {
	        // update CSS when new props arrive
	        this.applyClassNameAndStyle(props);
	      }

	      var children = props.children;
	      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
	      if (typeof props.children.type === 'function') {
	        children = _react2.default.cloneElement(props.children, { closePortal: this.closePortal });
	      }

	      this.portal = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, children, this.node, this.props.onUpdate);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.props.openByClickOn) {
	        return _react2.default.cloneElement(this.props.openByClickOn, { onClick: this.handleWrapperClick });
	      }
	      return null;
	    }
	  }]);

	  return Portal;
	}(_react2.default.Component);

	exports.default = Portal;


	Portal.propTypes = {
	  className: _react2.default.PropTypes.string,
	  style: _react2.default.PropTypes.object,
	  children: _react2.default.PropTypes.element.isRequired,
	  openByClickOn: _react2.default.PropTypes.element,
	  closeOnEsc: _react2.default.PropTypes.bool,
	  closeOnOutsideClick: _react2.default.PropTypes.bool,
	  isOpened: _react2.default.PropTypes.bool,
	  onOpen: _react2.default.PropTypes.func,
	  onClose: _react2.default.PropTypes.func,
	  beforeClose: _react2.default.PropTypes.func,
	  onUpdate: _react2.default.PropTypes.func
	};

	Portal.defaultProps = {
	  onOpen: function onOpen() {},
	  onClose: function onClose() {},
	  onUpdate: function onUpdate() {}
	};
	module.exports = exports['default'];


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 */

	'use strict';

	var CSSProperty = __webpack_require__(11);
	var ExecutionEnvironment = __webpack_require__(12);
	var ReactInstrumentation = __webpack_require__(13);

	var camelizeStyleName = __webpack_require__(26);
	var dangerousStyleValue = __webpack_require__(28);
	var hyphenateStyleName = __webpack_require__(29);
	var memoizeStringOnly = __webpack_require__(31);
	var warning = __webpack_require__(16);

	var processStyleName = memoizeStringOnly(function (styleName) {
	  return hyphenateStyleName(styleName);
	});

	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  var tempStyle = document.createElement('div').style;
	  try {
	    // IE8 throws "Invalid argument." if resetting shorthand style properties.
	    tempStyle.font = '';
	  } catch (e) {
	    hasShorthandPropertyBug = true;
	  }
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}

	if (process.env.NODE_ENV !== 'production') {
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;

	  var warnedStyleNames = {};
	  var warnedStyleValues = {};
	  var warnedForNaNValue = false;

	  var warnHyphenatedStyleName = function (name, owner) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
	  };

	  var warnBadVendoredStyleName = function (name, owner) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }

	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
	  };

	  var warnStyleValueWithSemicolon = function (name, value, owner) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }

	    warnedStyleValues[value] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
	  };

	  var warnStyleValueIsNaN = function (name, value, owner) {
	    if (warnedForNaNValue) {
	      return;
	    }

	    warnedForNaNValue = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
	  };

	  var checkRenderMessage = function (owner) {
	    if (owner) {
	      var name = owner.getName();
	      if (name) {
	        return ' Check the render method of `' + name + '`.';
	      }
	    }
	    return '';
	  };

	  /**
	   * @param {string} name
	   * @param {*} value
	   * @param {ReactDOMComponent} component
	   */
	  var warnValidStyle = function (name, value, component) {
	    var owner;
	    if (component) {
	      owner = component._currentElement._owner;
	    }
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name, owner);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name, owner);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value, owner);
	    }

	    if (typeof value === 'number' && isNaN(value)) {
	      warnStyleValueIsNaN(name, value, owner);
	    }
	  };
	}

	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {

	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   * @return {?string}
	   */
	  createMarkupForStyles: function (styles, component) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styleValue, component);
	      }
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
	      }
	    }
	    return serialized || null;
	  },

	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   * @param {ReactDOMComponent} component
	   */
	  setValueForStyles: function (node, styles, component) {
	    if (process.env.NODE_ENV !== 'production') {
	      ReactInstrumentation.debugTool.onHostOperation(component._debugID, 'update styles', styles);
	    }

	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styles[styleName], component);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
	      if (styleName === 'float' || styleName === 'cssFloat') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }

	};

	module.exports = CSSPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */

	'use strict';

	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */

	var isUnitlessNumber = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,

	  // SVG-related properties
	  fillOpacity: true,
	  floodOpacity: true,
	  stopOpacity: true,
	  strokeDasharray: true,
	  strokeDashoffset: true,
	  strokeMiterlimit: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};

	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}

	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});

	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};

	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};

	module.exports = CSSProperty;

/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {

	  canUseDOM: canUseDOM,

	  canUseWorkers: typeof Worker !== 'undefined',

	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

	  canUseViewport: canUseDOM && !!window.screen,

	  isInWorker: !canUseDOM // For now, this is true - might change in the future.

	};

	module.exports = ExecutionEnvironment;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstrumentation
	 */

	'use strict';

	var debugTool = null;

	if (process.env.NODE_ENV !== 'production') {
	  var ReactDebugTool = __webpack_require__(14);
	  debugTool = ReactDebugTool;
	}

	module.exports = { debugTool: debugTool };
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDebugTool
	 */

	'use strict';

	var ReactInvalidSetStateWarningHook = __webpack_require__(15);
	var ReactHostOperationHistoryHook = __webpack_require__(18);
	var ReactComponentTreeHook = __webpack_require__(19);
	var ReactChildrenMutationWarningHook = __webpack_require__(23);
	var ExecutionEnvironment = __webpack_require__(12);

	var performanceNow = __webpack_require__(24);
	var warning = __webpack_require__(16);

	var hooks = [];
	var didHookThrowForEvent = {};

	function callHook(event, fn, context, arg1, arg2, arg3, arg4, arg5) {
	  try {
	    fn.call(context, arg1, arg2, arg3, arg4, arg5);
	  } catch (e) {
	    process.env.NODE_ENV !== 'production' ? warning(didHookThrowForEvent[event], 'Exception thrown by hook while handling %s: %s', event, e + '\n' + e.stack) : void 0;
	    didHookThrowForEvent[event] = true;
	  }
	}

	function emitEvent(event, arg1, arg2, arg3, arg4, arg5) {
	  for (var i = 0; i < hooks.length; i++) {
	    var hook = hooks[i];
	    var fn = hook[event];
	    if (fn) {
	      callHook(event, fn, hook, arg1, arg2, arg3, arg4, arg5);
	    }
	  }
	}

	var isProfiling = false;
	var flushHistory = [];
	var lifeCycleTimerStack = [];
	var currentFlushNesting = 0;
	var currentFlushMeasurements = null;
	var currentFlushStartTime = null;
	var currentTimerDebugID = null;
	var currentTimerStartTime = null;
	var currentTimerNestedFlushDuration = null;
	var currentTimerType = null;

	var lifeCycleTimerHasWarned = false;

	function clearHistory() {
	  ReactComponentTreeHook.purgeUnmountedComponents();
	  ReactHostOperationHistoryHook.clearHistory();
	}

	function getTreeSnapshot(registeredIDs) {
	  return registeredIDs.reduce(function (tree, id) {
	    var ownerID = ReactComponentTreeHook.getOwnerID(id);
	    var parentID = ReactComponentTreeHook.getParentID(id);
	    tree[id] = {
	      displayName: ReactComponentTreeHook.getDisplayName(id),
	      text: ReactComponentTreeHook.getText(id),
	      updateCount: ReactComponentTreeHook.getUpdateCount(id),
	      childIDs: ReactComponentTreeHook.getChildIDs(id),
	      // Text nodes don't have owners but this is close enough.
	      ownerID: ownerID || ReactComponentTreeHook.getOwnerID(parentID),
	      parentID: parentID
	    };
	    return tree;
	  }, {});
	}

	function resetMeasurements() {
	  var previousStartTime = currentFlushStartTime;
	  var previousMeasurements = currentFlushMeasurements || [];
	  var previousOperations = ReactHostOperationHistoryHook.getHistory();

	  if (currentFlushNesting === 0) {
	    currentFlushStartTime = null;
	    currentFlushMeasurements = null;
	    clearHistory();
	    return;
	  }

	  if (previousMeasurements.length || previousOperations.length) {
	    var registeredIDs = ReactComponentTreeHook.getRegisteredIDs();
	    flushHistory.push({
	      duration: performanceNow() - previousStartTime,
	      measurements: previousMeasurements || [],
	      operations: previousOperations || [],
	      treeSnapshot: getTreeSnapshot(registeredIDs)
	    });
	  }

	  clearHistory();
	  currentFlushStartTime = performanceNow();
	  currentFlushMeasurements = [];
	}

	function checkDebugID(debugID) {
	  var allowRoot = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	  if (allowRoot && debugID === 0) {
	    return;
	  }
	  if (!debugID) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDebugTool: debugID may not be empty.') : void 0;
	  }
	}

	function beginLifeCycleTimer(debugID, timerType) {
	  if (currentFlushNesting === 0) {
	    return;
	  }
	  if (currentTimerType && !lifeCycleTimerHasWarned) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'Did not expect %s timer to start while %s timer is still in ' + 'progress for %s instance.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	    lifeCycleTimerHasWarned = true;
	  }
	  currentTimerStartTime = performanceNow();
	  currentTimerNestedFlushDuration = 0;
	  currentTimerDebugID = debugID;
	  currentTimerType = timerType;
	}

	function endLifeCycleTimer(debugID, timerType) {
	  if (currentFlushNesting === 0) {
	    return;
	  }
	  if (currentTimerType !== timerType && !lifeCycleTimerHasWarned) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'There is an internal error in the React performance measurement code. ' + 'We did not expect %s timer to stop while %s timer is still in ' + 'progress for %s instance. Please report this as a bug in React.', timerType, currentTimerType || 'no', debugID === currentTimerDebugID ? 'the same' : 'another') : void 0;
	    lifeCycleTimerHasWarned = true;
	  }
	  if (isProfiling) {
	    currentFlushMeasurements.push({
	      timerType: timerType,
	      instanceID: debugID,
	      duration: performanceNow() - currentTimerStartTime - currentTimerNestedFlushDuration
	    });
	  }
	  currentTimerStartTime = null;
	  currentTimerNestedFlushDuration = null;
	  currentTimerDebugID = null;
	  currentTimerType = null;
	}

	function pauseCurrentLifeCycleTimer() {
	  var currentTimer = {
	    startTime: currentTimerStartTime,
	    nestedFlushStartTime: performanceNow(),
	    debugID: currentTimerDebugID,
	    timerType: currentTimerType
	  };
	  lifeCycleTimerStack.push(currentTimer);
	  currentTimerStartTime = null;
	  currentTimerNestedFlushDuration = null;
	  currentTimerDebugID = null;
	  currentTimerType = null;
	}

	function resumeCurrentLifeCycleTimer() {
	  var _lifeCycleTimerStack$ = lifeCycleTimerStack.pop();

	  var startTime = _lifeCycleTimerStack$.startTime;
	  var nestedFlushStartTime = _lifeCycleTimerStack$.nestedFlushStartTime;
	  var debugID = _lifeCycleTimerStack$.debugID;
	  var timerType = _lifeCycleTimerStack$.timerType;

	  var nestedFlushDuration = performanceNow() - nestedFlushStartTime;
	  currentTimerStartTime = startTime;
	  currentTimerNestedFlushDuration += nestedFlushDuration;
	  currentTimerDebugID = debugID;
	  currentTimerType = timerType;
	}

	var ReactDebugTool = {
	  addHook: function (hook) {
	    hooks.push(hook);
	  },
	  removeHook: function (hook) {
	    for (var i = 0; i < hooks.length; i++) {
	      if (hooks[i] === hook) {
	        hooks.splice(i, 1);
	        i--;
	      }
	    }
	  },
	  isProfiling: function () {
	    return isProfiling;
	  },
	  beginProfiling: function () {
	    if (isProfiling) {
	      return;
	    }

	    isProfiling = true;
	    flushHistory.length = 0;
	    resetMeasurements();
	    ReactDebugTool.addHook(ReactHostOperationHistoryHook);
	  },
	  endProfiling: function () {
	    if (!isProfiling) {
	      return;
	    }

	    isProfiling = false;
	    resetMeasurements();
	    ReactDebugTool.removeHook(ReactHostOperationHistoryHook);
	  },
	  getFlushHistory: function () {
	    return flushHistory;
	  },
	  onBeginFlush: function () {
	    currentFlushNesting++;
	    resetMeasurements();
	    pauseCurrentLifeCycleTimer();
	    emitEvent('onBeginFlush');
	  },
	  onEndFlush: function () {
	    resetMeasurements();
	    currentFlushNesting--;
	    resumeCurrentLifeCycleTimer();
	    emitEvent('onEndFlush');
	  },
	  onBeginLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    emitEvent('onBeginLifeCycleTimer', debugID, timerType);
	    beginLifeCycleTimer(debugID, timerType);
	  },
	  onEndLifeCycleTimer: function (debugID, timerType) {
	    checkDebugID(debugID);
	    endLifeCycleTimer(debugID, timerType);
	    emitEvent('onEndLifeCycleTimer', debugID, timerType);
	  },
	  onBeginProcessingChildContext: function () {
	    emitEvent('onBeginProcessingChildContext');
	  },
	  onEndProcessingChildContext: function () {
	    emitEvent('onEndProcessingChildContext');
	  },
	  onHostOperation: function (debugID, type, payload) {
	    checkDebugID(debugID);
	    emitEvent('onHostOperation', debugID, type, payload);
	  },
	  onSetState: function () {
	    emitEvent('onSetState');
	  },
	  onSetChildren: function (debugID, childDebugIDs) {
	    checkDebugID(debugID);
	    childDebugIDs.forEach(checkDebugID);
	    emitEvent('onSetChildren', debugID, childDebugIDs);
	  },
	  onBeforeMountComponent: function (debugID, element, parentDebugID) {
	    checkDebugID(debugID);
	    checkDebugID(parentDebugID, true);
	    emitEvent('onBeforeMountComponent', debugID, element, parentDebugID);
	  },
	  onMountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onMountComponent', debugID);
	  },
	  onBeforeUpdateComponent: function (debugID, element) {
	    checkDebugID(debugID);
	    emitEvent('onBeforeUpdateComponent', debugID, element);
	  },
	  onUpdateComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUpdateComponent', debugID);
	  },
	  onBeforeUnmountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onBeforeUnmountComponent', debugID);
	  },
	  onUnmountComponent: function (debugID) {
	    checkDebugID(debugID);
	    emitEvent('onUnmountComponent', debugID);
	  },
	  onTestEvent: function () {
	    emitEvent('onTestEvent');
	  }
	};

	// TODO remove these when RN/www gets updated
	ReactDebugTool.addDevtool = ReactDebugTool.addHook;
	ReactDebugTool.removeDevtool = ReactDebugTool.removeHook;

	ReactDebugTool.addHook(ReactInvalidSetStateWarningHook);
	ReactDebugTool.addHook(ReactComponentTreeHook);
	ReactDebugTool.addHook(ReactChildrenMutationWarningHook);
	var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	if (/[?&]react_perf\b/.test(url)) {
	  ReactDebugTool.beginProfiling();
	}

	module.exports = ReactDebugTool;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInvalidSetStateWarningHook
	 */

	'use strict';

	var warning = __webpack_require__(16);

	if (process.env.NODE_ENV !== 'production') {
	  var processingChildContext = false;

	  var warnInvalidSetState = function () {
	    process.env.NODE_ENV !== 'production' ? warning(!processingChildContext, 'setState(...): Cannot call setState() inside getChildContext()') : void 0;
	  };
	}

	var ReactInvalidSetStateWarningHook = {
	  onBeginProcessingChildContext: function () {
	    processingChildContext = true;
	  },
	  onEndProcessingChildContext: function () {
	    processingChildContext = false;
	  },
	  onSetState: function () {
	    warnInvalidSetState();
	  }
	};

	module.exports = ReactInvalidSetStateWarningHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(17);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var printWarning = function printWarning(format) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
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

	    warning = function warning(condition, format) {
	      if (format === undefined) {
	        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	      }

	      if (format.indexOf('Failed Composite propType: ') === 0) {
	        return; // Ignore CompositeComponent proptype check.
	      }

	      if (!condition) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	          args[_key2 - 2] = arguments[_key2];
	        }

	        printWarning.apply(undefined, [format].concat(args));
	      }
	    };
	  })();
	}

	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactHostOperationHistoryHook
	 */

	'use strict';

	var history = [];

	var ReactHostOperationHistoryHook = {
	  onHostOperation: function (debugID, type, payload) {
	    history.push({
	      instanceID: debugID,
	      type: type,
	      payload: payload
	    });
	  },
	  clearHistory: function () {
	    if (ReactHostOperationHistoryHook._preventClearing) {
	      // Should only be used for tests.
	      return;
	    }

	    history = [];
	  },
	  getHistory: function () {
	    return history;
	  }
	};

	module.exports = ReactHostOperationHistoryHook;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2016-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentTreeHook
	 */

	'use strict';

	var _prodInvariant = __webpack_require__(20);

	var ReactCurrentOwner = __webpack_require__(21);

	var invariant = __webpack_require__(22);
	var warning = __webpack_require__(16);

	function isNative(fn) {
	  // Based on isNative() from Lodash
	  var funcToString = Function.prototype.toString;
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	  var reIsNative = RegExp('^' + funcToString
	  // Take an example native function source for comparison
	  .call(hasOwnProperty)
	  // Strip regex characters so we can use it for regex
	  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  // Remove hasOwnProperty from the template to make it generic
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	  try {
	    var source = funcToString.call(fn);
	    return reIsNative.test(source);
	  } catch (err) {
	    return false;
	  }
	}

	var canUseCollections =
	// Array.from
	typeof Array.from === 'function' &&
	// Map
	typeof Map === 'function' && isNative(Map) &&
	// Map.prototype.keys
	Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
	// Set
	typeof Set === 'function' && isNative(Set) &&
	// Set.prototype.keys
	Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

	var itemMap;
	var rootIDSet;

	var itemByKey;
	var rootByKey;

	if (canUseCollections) {
	  itemMap = new Map();
	  rootIDSet = new Set();
	} else {
	  itemByKey = {};
	  rootByKey = {};
	}

	var unmountedIDs = [];

	// Use non-numeric keys to prevent V8 performance issues:
	// https://github.com/facebook/react/pull/7232
	function getKeyFromID(id) {
	  return '.' + id;
	}
	function getIDFromKey(key) {
	  return parseInt(key.substr(1), 10);
	}

	function get(id) {
	  if (canUseCollections) {
	    return itemMap.get(id);
	  } else {
	    var key = getKeyFromID(id);
	    return itemByKey[key];
	  }
	}

	function remove(id) {
	  if (canUseCollections) {
	    itemMap['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete itemByKey[key];
	  }
	}

	function create(id, element, parentID) {
	  var item = {
	    element: element,
	    parentID: parentID,
	    text: null,
	    childIDs: [],
	    isMounted: false,
	    updateCount: 0
	  };

	  if (canUseCollections) {
	    itemMap.set(id, item);
	  } else {
	    var key = getKeyFromID(id);
	    itemByKey[key] = item;
	  }
	}

	function addRoot(id) {
	  if (canUseCollections) {
	    rootIDSet.add(id);
	  } else {
	    var key = getKeyFromID(id);
	    rootByKey[key] = true;
	  }
	}

	function removeRoot(id) {
	  if (canUseCollections) {
	    rootIDSet['delete'](id);
	  } else {
	    var key = getKeyFromID(id);
	    delete rootByKey[key];
	  }
	}

	function getRegisteredIDs() {
	  if (canUseCollections) {
	    return Array.from(itemMap.keys());
	  } else {
	    return Object.keys(itemByKey).map(getIDFromKey);
	  }
	}

	function getRootIDs() {
	  if (canUseCollections) {
	    return Array.from(rootIDSet.keys());
	  } else {
	    return Object.keys(rootByKey).map(getIDFromKey);
	  }
	}

	function purgeDeep(id) {
	  var item = get(id);
	  if (item) {
	    var childIDs = item.childIDs;

	    remove(id);
	    childIDs.forEach(purgeDeep);
	  }
	}

	function describeComponentFrame(name, source, ownerName) {
	  return '\n    in ' + name + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
	}

	function getDisplayName(element) {
	  if (element == null) {
	    return '#empty';
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    return '#text';
	  } else if (typeof element.type === 'string') {
	    return element.type;
	  } else {
	    return element.type.displayName || element.type.name || 'Unknown';
	  }
	}

	function describeID(id) {
	  var name = ReactComponentTreeHook.getDisplayName(id);
	  var element = ReactComponentTreeHook.getElement(id);
	  var ownerID = ReactComponentTreeHook.getOwnerID(id);
	  var ownerName;
	  if (ownerID) {
	    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
	  }
	  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
	  return describeComponentFrame(name, element && element._source, ownerName);
	}

	var ReactComponentTreeHook = {
	  onSetChildren: function (id, nextChildIDs) {
	    var item = get(id);
	    item.childIDs = nextChildIDs;

	    for (var i = 0; i < nextChildIDs.length; i++) {
	      var nextChildID = nextChildIDs[i];
	      var nextChild = get(nextChildID);
	      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
	      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
	      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
	      if (nextChild.parentID == null) {
	        nextChild.parentID = id;
	        // TODO: This shouldn't be necessary but mounting a new root during in
	        // componentWillMount currently causes not-yet-mounted components to
	        // be purged from our tree data so their parent ID is missing.
	      }
	      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
	    }
	  },
	  onBeforeMountComponent: function (id, element, parentID) {
	    create(id, element, parentID);
	  },
	  onBeforeUpdateComponent: function (id, element) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.element = element;
	  },
	  onMountComponent: function (id) {
	    var item = get(id);
	    item.isMounted = true;
	    var isRoot = item.parentID === 0;
	    if (isRoot) {
	      addRoot(id);
	    }
	  },
	  onUpdateComponent: function (id) {
	    var item = get(id);
	    if (!item || !item.isMounted) {
	      // We may end up here as a result of setState() in componentWillUnmount().
	      // In this case, ignore the element.
	      return;
	    }
	    item.updateCount++;
	  },
	  onUnmountComponent: function (id) {
	    var item = get(id);
	    if (item) {
	      // We need to check if it exists.
	      // `item` might not exist if it is inside an error boundary, and a sibling
	      // error boundary child threw while mounting. Then this instance never
	      // got a chance to mount, but it still gets an unmounting event during
	      // the error boundary cleanup.
	      item.isMounted = false;
	      var isRoot = item.parentID === 0;
	      if (isRoot) {
	        removeRoot(id);
	      }
	    }
	    unmountedIDs.push(id);
	  },
	  purgeUnmountedComponents: function () {
	    if (ReactComponentTreeHook._preventPurging) {
	      // Should only be used for testing.
	      return;
	    }

	    for (var i = 0; i < unmountedIDs.length; i++) {
	      var id = unmountedIDs[i];
	      purgeDeep(id);
	    }
	    unmountedIDs.length = 0;
	  },
	  isMounted: function (id) {
	    var item = get(id);
	    return item ? item.isMounted : false;
	  },
	  getCurrentStackAddendum: function (topElement) {
	    var info = '';
	    if (topElement) {
	      var type = topElement.type;
	      var name = typeof type === 'function' ? type.displayName || type.name : type;
	      var owner = topElement._owner;
	      info += describeComponentFrame(name || 'Unknown', topElement._source, owner && owner.getName());
	    }

	    var currentOwner = ReactCurrentOwner.current;
	    var id = currentOwner && currentOwner._debugID;

	    info += ReactComponentTreeHook.getStackAddendumByID(id);
	    return info;
	  },
	  getStackAddendumByID: function (id) {
	    var info = '';
	    while (id) {
	      info += describeID(id);
	      id = ReactComponentTreeHook.getParentID(id);
	    }
	    return info;
	  },
	  getChildIDs: function (id) {
	    var item = get(id);
	    return item ? item.childIDs : [];
	  },
	  getDisplayName: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element) {
	      return null;
	    }
	    return getDisplayName(element);
	  },
	  getElement: function (id) {
	    var item = get(id);
	    return item ? item.element : null;
	  },
	  getOwnerID: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (!element || !element._owner) {
	      return null;
	    }
	    return element._owner._debugID;
	  },
	  getParentID: function (id) {
	    var item = get(id);
	    return item ? item.parentID : null;
	  },
	  getSource: function (id) {
	    var item = get(id);
	    var element = item ? item.element : null;
	    var source = element != null ? element._source : null;
	    return source;
	  },
	  getText: function (id) {
	    var element = ReactComponentTreeHook.getElement(id);
	    if (typeof element === 'string') {
	      return element;
	    } else if (typeof element === 'number') {
	      return '' + element;
	    } else {
	      return null;
	    }
	  },
	  getUpdateCount: function (id) {
	    var item = get(id);
	    return item ? item.updateCount : 0;
	  },


	  getRegisteredIDs: getRegisteredIDs,

	  getRootIDs: getRootIDs
	};

	module.exports = ReactComponentTreeHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */

	'use strict';

	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */

	var ReactCurrentOwner = {

	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null

	};

	module.exports = ReactCurrentOwner;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildrenMutationWarningHook
	 */

	'use strict';

	var ReactComponentTreeHook = __webpack_require__(19);

	var warning = __webpack_require__(16);

	function handleElement(debugID, element) {
	  if (element == null) {
	    return;
	  }
	  if (element._shadowChildren === undefined) {
	    return;
	  }
	  if (element._shadowChildren === element.props.children) {
	    return;
	  }
	  var isMutated = false;
	  if (Array.isArray(element._shadowChildren)) {
	    if (element._shadowChildren.length === element.props.children.length) {
	      for (var i = 0; i < element._shadowChildren.length; i++) {
	        if (element._shadowChildren[i] !== element.props.children[i]) {
	          isMutated = true;
	        }
	      }
	    } else {
	      isMutated = true;
	    }
	  }
	  if (!Array.isArray(element._shadowChildren) || isMutated) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Component\'s children should not be mutated.%s', ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
	  }
	}

	var ReactChildrenMutationWarningHook = {
	  onMountComponent: function (debugID) {
	    handleElement(debugID, ReactComponentTreeHook.getElement(debugID));
	  },
	  onUpdateComponent: function (debugID) {
	    handleElement(debugID, ReactComponentTreeHook.getElement(debugID));
	  }
	};

	module.exports = ReactChildrenMutationWarningHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var performance = __webpack_require__(25);

	var performanceNow;

	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function performanceNow() {
	    return performance.now();
	  };
	} else {
	  performanceNow = function performanceNow() {
	    return Date.now();
	  };
	}

	module.exports = performanceNow;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var ExecutionEnvironment = __webpack_require__(12);

	var performance;

	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}

	module.exports = performance || {};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var camelize = __webpack_require__(27);

	var msPattern = /^-ms-/;

	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}

	module.exports = camelizeStyleName;

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _hyphenPattern = /-(.)/g;

	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}

	module.exports = camelize;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 */

	'use strict';

	var CSSProperty = __webpack_require__(11);
	var warning = __webpack_require__(16);

	var isUnitlessNumber = CSSProperty.isUnitlessNumber;
	var styleWarnings = {};

	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @param {ReactDOMComponent} component
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value, component) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901

	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }

	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }

	  if (typeof value === 'string') {
	    if (process.env.NODE_ENV !== 'production') {
	      // Allow '0' to pass through without warning. 0 is already special and
	      // doesn't require units, so we don't need to warn about it.
	      if (component && value !== '0') {
	        var owner = component._currentElement._owner;
	        var ownerName = owner ? owner.getName() : null;
	        if (ownerName && !styleWarnings[ownerName]) {
	          styleWarnings[ownerName] = {};
	        }
	        var warned = false;
	        if (ownerName) {
	          var warnings = styleWarnings[ownerName];
	          warned = warnings[name];
	          if (!warned) {
	            warnings[name] = true;
	          }
	        }
	        if (!warned) {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
	        }
	      }
	    }
	    value = value.trim();
	  }
	  return value + 'px';
	}

	module.exports = dangerousStyleValue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	'use strict';

	var hyphenate = __webpack_require__(30);

	var msPattern = /^ms-/;

	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}

	module.exports = hyphenateStyleName;

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 */

	var _uppercasePattern = /([A-Z])/g;

	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}

	module.exports = hyphenate;

/***/ },
/* 31 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * 
	 * @typechecks static-only
	 */

	'use strict';

	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 */

	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}

	module.exports = memoizeStringOnly;

/***/ },
/* 32 */
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

	var shallowEqual = __webpack_require__(33);

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
/* 33 */
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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var define = __webpack_require__(35);
	var ES = __webpack_require__(39);

	var implementation = __webpack_require__(56);
	var getPolyfill = __webpack_require__(57);
	var polyfill = getPolyfill();
	var shim = __webpack_require__(58);

	var slice = Array.prototype.slice;

	/* eslint-disable no-unused-vars */
	var boundIncludesShim = function includes(array, searchElement) {
	/* eslint-enable no-unused-vars */
		ES.RequireObjectCoercible(array);
		return polyfill.apply(array, slice.call(arguments, 1));
	};
	define(boundIncludesShim, {
		implementation: implementation,
		getPolyfill: getPolyfill,
		shim: shim
	});

	module.exports = boundIncludesShim;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var keys = __webpack_require__(36);
	var foreach = __webpack_require__(38);
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

	var toStr = Object.prototype.toString;

	var isFunction = function (fn) {
		return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
	};

	var arePropertyDescriptorsSupported = function () {
		var obj = {};
		try {
			Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
	        /* eslint-disable no-unused-vars, no-restricted-syntax */
	        for (var _ in obj) { return false; }
	        /* eslint-enable no-unused-vars, no-restricted-syntax */
			return obj.x === obj;
		} catch (e) { /* this is IE 8. */
			return false;
		}
	};
	var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

	var defineProperty = function (object, name, value, predicate) {
		if (name in object && (!isFunction(predicate) || !predicate())) {
			return;
		}
		if (supportsDescriptors) {
			Object.defineProperty(object, name, {
				configurable: true,
				enumerable: false,
				value: value,
				writable: true
			});
		} else {
			object[name] = value;
		}
	};

	var defineProperties = function (object, map) {
		var predicates = arguments.length > 2 ? arguments[2] : {};
		var props = keys(map);
		if (hasSymbols) {
			props = props.concat(Object.getOwnPropertySymbols(map));
		}
		foreach(props, function (name) {
			defineProperty(object, name, map[name], predicates[name]);
		});
	};

	defineProperties.supportsDescriptors = !!supportsDescriptors;

	module.exports = defineProperties;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var slice = Array.prototype.slice;
	var isArgs = __webpack_require__(37);
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	var keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};

	keysShim.shim = function shimObjectKeys() {
		if (Object.keys) {
			var keysWorksWithArguments = (function () {
				// Safari 5.0 bug
				return (Object.keys(arguments) || '').length === 2;
			}(1, 2));
			if (!keysWorksWithArguments) {
				var originalKeys = Object.keys;
				Object.keys = function keys(object) {
					if (isArgs(object)) {
						return originalKeys(slice.call(object));
					} else {
						return originalKeys(object);
					}
				};
			}
		} else {
			Object.keys = keysShim;
		}
		return Object.keys || keysShim;
	};

	module.exports = keysShim;


/***/ },
/* 37 */
/***/ function(module, exports) {

	'use strict';

	var toStr = Object.prototype.toString;

	module.exports = function isArguments(value) {
		var str = toStr.call(value);
		var isArgs = str === '[object Arguments]';
		if (!isArgs) {
			isArgs = str !== '[object Array]' &&
				value !== null &&
				typeof value === 'object' &&
				typeof value.length === 'number' &&
				value.length >= 0 &&
				toStr.call(value.callee) === '[object Function]';
		}
		return isArgs;
	};


/***/ },
/* 38 */
/***/ function(module, exports) {

	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;

	module.exports = function forEach (obj, fn, ctx) {
	    if (toString.call(fn) !== '[object Function]') {
	        throw new TypeError('iterator must be a function');
	    }
	    var l = obj.length;
	    if (l === +l) {
	        for (var i = 0; i < l; i++) {
	            fn.call(ctx, obj[i], i, obj);
	        }
	    } else {
	        for (var k in obj) {
	            if (hasOwn.call(obj, k)) {
	                fn.call(ctx, obj[k], k, obj);
	            }
	        }
	    }
	};



/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';
	var symbolToStr = hasSymbols ? Symbol.prototype.toString : toStr;

	var $isNaN = __webpack_require__(40);
	var $isFinite = __webpack_require__(41);
	var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1;

	var assign = __webpack_require__(42);
	var sign = __webpack_require__(43);
	var mod = __webpack_require__(44);
	var isPrimitive = __webpack_require__(45);
	var toPrimitive = __webpack_require__(46);
	var parseInteger = parseInt;
	var bind = __webpack_require__(51);
	var strSlice = bind.call(Function.call, String.prototype.slice);
	var isBinary = bind.call(Function.call, RegExp.prototype.test, /^0b[01]+$/i);
	var isOctal = bind.call(Function.call, RegExp.prototype.test, /^0o[0-7]+$/i);
	var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
	var nonWSregex = new RegExp('[' + nonWS + ']', 'g');
	var hasNonWS = bind.call(Function.call, RegExp.prototype.test, nonWSregex);
	var invalidHexLiteral = /^[\-\+]0x[0-9a-f]+$/i;
	var isInvalidHexLiteral = bind.call(Function.call, RegExp.prototype.test, invalidHexLiteral);

	// whitespace from: http://es5.github.io/#x15.5.4.20
	// implementation from https://github.com/es-shims/es5-shim/blob/v3.4.0/es5-shim.js#L1304-L1324
	var ws = [
		'\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003',
		'\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028',
		'\u2029\uFEFF'
	].join('');
	var trimRegex = new RegExp('(^[' + ws + ']+)|([' + ws + ']+$)', 'g');
	var replace = bind.call(Function.call, String.prototype.replace);
	var trim = function (value) {
		return replace(value, trimRegex, '');
	};

	var ES5 = __webpack_require__(53);

	var hasRegExpMatcher = __webpack_require__(55);

	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-abstract-operations
	var ES6 = assign(assign({}, ES5), {

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-call-f-v-args
		Call: function Call(F, V) {
			var args = arguments.length > 2 ? arguments[2] : [];
			if (!this.IsCallable(F)) {
				throw new TypeError(F + ' is not a function');
			}
			return F.apply(V, args);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
		ToPrimitive: toPrimitive,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toboolean
		// ToBoolean: ES5.ToBoolean,

		// http://www.ecma-international.org/ecma-262/6.0/#sec-tonumber
		ToNumber: function ToNumber(argument) {
			var value = isPrimitive(argument) ? argument : toPrimitive(argument, 'number');
			if (typeof value === 'symbol') {
				throw new TypeError('Cannot convert a Symbol value to a number');
			}
			if (typeof value === 'string') {
				if (isBinary(value)) {
					return this.ToNumber(parseInteger(strSlice(value, 2), 2));
				} else if (isOctal(value)) {
					return this.ToNumber(parseInteger(strSlice(value, 2), 8));
				} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {
					return NaN;
				} else {
					var trimmed = trim(value);
					if (trimmed !== value) {
						return this.ToNumber(trimmed);
					}
				}
			}
			return Number(value);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
		// ToInteger: ES5.ToNumber,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint32
		// ToInt32: ES5.ToInt32,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint32
		// ToUint32: ES5.ToUint32,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint16
		ToInt16: function ToInt16(argument) {
			var int16bit = this.ToUint16(argument);
			return int16bit >= 0x8000 ? int16bit - 0x10000 : int16bit;
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint16
		// ToUint16: ES5.ToUint16,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toint8
		ToInt8: function ToInt8(argument) {
			var int8bit = this.ToUint8(argument);
			return int8bit >= 0x80 ? int8bit - 0x100 : int8bit;
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8
		ToUint8: function ToUint8(argument) {
			var number = this.ToNumber(argument);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
			var posInt = sign(number) * Math.floor(Math.abs(number));
			return mod(posInt, 0x100);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-touint8clamp
		ToUint8Clamp: function ToUint8Clamp(argument) {
			var number = this.ToNumber(argument);
			if ($isNaN(number) || number <= 0) { return 0; }
			if (number >= 0xFF) { return 0xFF; }
			var f = Math.floor(argument);
			if (f + 0.5 < number) { return f + 1; }
			if (number < f + 0.5) { return f; }
			if (f % 2 !== 0) { return f + 1; }
			return f;
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
		ToString: function ToString(argument) {
			if (typeof argument === 'symbol') {
				throw new TypeError('Cannot convert a Symbol value to a string');
			}
			return String(argument);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toobject
		ToObject: function ToObject(value) {
			this.RequireObjectCoercible(value);
			return Object(value);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
		ToPropertyKey: function ToPropertyKey(argument) {
			var key = this.ToPrimitive(argument, String);
			return typeof key === 'symbol' ? symbolToStr.call(key) : this.ToString(key);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
		ToLength: function ToLength(argument) {
			var len = this.ToInteger(argument);
			if (len <= 0) { return 0; } // includes converting -0 to +0
			if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
			return len;
		},

		// http://www.ecma-international.org/ecma-262/6.0/#sec-canonicalnumericindexstring
		CanonicalNumericIndexString: function CanonicalNumericIndexString(argument) {
			if (toStr.call(argument) !== '[object String]') {
				throw new TypeError('must be a string');
			}
			if (argument === '-0') { return -0; }
			var n = this.ToNumber(argument);
			if (this.SameValue(this.ToString(n), argument)) { return n; }
			return void 0;
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
		RequireObjectCoercible: ES5.CheckObjectCoercible,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
		IsArray: Array.isArray || function IsArray(argument) {
			return toStr.call(argument) === '[object Array]';
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-iscallable
		// IsCallable: ES5.IsCallable,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
		IsConstructor: function IsConstructor(argument) {
			return typeof argument === 'function' && !!argument.prototype; // unfortunately there's no way to truly check this without try/catch `new argument`
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isextensible-o
		IsExtensible: function IsExtensible(obj) {
			if (!Object.preventExtensions) { return true; }
			if (isPrimitive(obj)) {
				return false;
			}
			return Object.isExtensible(obj);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isinteger
		IsInteger: function IsInteger(argument) {
			if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
				return false;
			}
			var abs = Math.abs(argument);
			return Math.floor(abs) === abs;
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ispropertykey
		IsPropertyKey: function IsPropertyKey(argument) {
			return typeof argument === 'string' || typeof argument === 'symbol';
		},

		// http://www.ecma-international.org/ecma-262/6.0/#sec-isregexp
		IsRegExp: function IsRegExp(argument) {
			if (!argument || typeof argument !== 'object') {
				return false;
			}
			if (hasSymbols) {
				var isRegExp = argument[Symbol.match];
				if (typeof isRegExp !== 'undefined') {
					return ES5.ToBoolean(isRegExp);
				}
			}
			return hasRegExpMatcher(argument);
		},

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevalue
		// SameValue: ES5.SameValue,

		// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero
		SameValueZero: function SameValueZero(x, y) {
			return (x === y) || ($isNaN(x) && $isNaN(y));
		},

		Type: function Type(x) {
			if (typeof x === 'symbol') {
				return 'Symbol';
			}
			return ES5.Type(x);
		},

		// http://www.ecma-international.org/ecma-262/6.0/#sec-speciesconstructor
		SpeciesConstructor: function SpeciesConstructor(O, defaultConstructor) {
			if (this.Type(O) !== 'Object') {
				throw new TypeError('Assertion failed: Type(O) is not Object');
			}
			var C = O.constructor;
			if (typeof C === 'undefined') {
				return defaultConstructor;
			}
			if (this.Type(C) !== 'Object') {
				throw new TypeError('O.constructor is not an Object');
			}
			var S = hasSymbols && Symbol.species ? C[Symbol.species] : undefined;
			if (S == null) {
				return defaultConstructor;
			}
			if (this.IsConstructor(S)) {
				return S;
			}
			throw new TypeError('no constructor found');
		}
	});

	delete ES6.CheckObjectCoercible; // renamed in ES6 to RequireObjectCoercible

	module.exports = ES6;


/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = Number.isNaN || function isNaN(a) {
		return a !== a;
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	var $isNaN = Number.isNaN || function (a) { return a !== a; };

	module.exports = Number.isFinite || function (x) { return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity; };


/***/ },
/* 42 */
/***/ function(module, exports) {

	var has = Object.prototype.hasOwnProperty;
	module.exports = Object.assign || function assign(target, source) {
		for (var key in source) {
			if (has.call(source, key)) {
				target[key] = source[key];
			}
		}
		return target;
	};


/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = function sign(number) {
		return number >= 0 ? 1 : -1;
	};


/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = function mod(number, modulo) {
		var remain = number % modulo;
		return Math.floor(remain >= 0 ? remain : remain + modulo);
	};


/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

	var isPrimitive = __webpack_require__(47);
	var isCallable = __webpack_require__(48);
	var isDate = __webpack_require__(49);
	var isSymbol = __webpack_require__(50);

	var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
		if (typeof O === 'undefined' || O === null) {
			throw new TypeError('Cannot call method on ' + O);
		}
		if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
			throw new TypeError('hint must be "string" or "number"');
		}
		var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
		var method, result, i;
		for (i = 0; i < methodNames.length; ++i) {
			method = O[methodNames[i]];
			if (isCallable(method)) {
				result = method.call(O);
				if (isPrimitive(result)) {
					return result;
				}
			}
		}
		throw new TypeError('No default value');
	};

	var GetMethod = function GetMethod(O, P) {
		var func = O[P];
		if (func !== null && typeof func !== 'undefined') {
			if (!isCallable(func)) {
				throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
			}
			return func;
		}
	};

	// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
	module.exports = function ToPrimitive(input, PreferredType) {
		if (isPrimitive(input)) {
			return input;
		}
		var hint = 'default';
		if (arguments.length > 1) {
			if (PreferredType === String) {
				hint = 'string';
			} else if (PreferredType === Number) {
				hint = 'number';
			}
		}

		var exoticToPrim;
		if (hasSymbols) {
			if (Symbol.toPrimitive) {
				exoticToPrim = GetMethod(input, Symbol.toPrimitive);
			} else if (isSymbol(input)) {
				exoticToPrim = Symbol.prototype.valueOf;
			}
		}
		if (typeof exoticToPrim !== 'undefined') {
			var result = exoticToPrim.call(input, hint);
			if (isPrimitive(result)) {
				return result;
			}
			throw new TypeError('unable to convert exotic object to primitive');
		}
		if (hint === 'default' && (isDate(input) || isSymbol(input))) {
			hint = 'string';
		}
		return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
	};


/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = function isPrimitive(value) {
		return value === null || (typeof value !== 'function' && typeof value !== 'object');
	};


/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	var fnToStr = Function.prototype.toString;

	var constructorRegex = /^\s*class /;
	var isES6ClassFn = function isES6ClassFn(value) {
		try {
			var fnStr = fnToStr.call(value);
			var singleStripped = fnStr.replace(/\/\/.*\n/g, '');
			var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, '');
			var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' ');
			return constructorRegex.test(spaceStripped);
		} catch (e) {
			return false; // not a function
		}
	};

	var tryFunctionObject = function tryFunctionObject(value) {
		try {
			if (isES6ClassFn(value)) { return false; }
			fnToStr.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var fnClass = '[object Function]';
	var genClass = '[object GeneratorFunction]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isCallable(value) {
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		return strClass === fnClass || strClass === genClass;
	};


/***/ },
/* 49 */
/***/ function(module, exports) {

	'use strict';

	var getDay = Date.prototype.getDay;
	var tryDateObject = function tryDateObject(value) {
		try {
			getDay.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};

	var toStr = Object.prototype.toString;
	var dateClass = '[object Date]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isDateObject(value) {
		if (typeof value !== 'object' || value === null) { return false; }
		return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
	};


/***/ },
/* 50 */
/***/ function(module, exports) {

	'use strict';

	var toStr = Object.prototype.toString;
	var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

	if (hasSymbols) {
		var symToStr = Symbol.prototype.toString;
		var symStringRegex = /^Symbol\(.*\)$/;
		var isSymbolObject = function isSymbolObject(value) {
			if (typeof value.valueOf() !== 'symbol') { return false; }
			return symStringRegex.test(symToStr.call(value));
		};
		module.exports = function isSymbol(value) {
			if (typeof value === 'symbol') { return true; }
			if (toStr.call(value) !== '[object Symbol]') { return false; }
			try {
				return isSymbolObject(value);
			} catch (e) {
				return false;
			}
		};
	} else {
		module.exports = function isSymbol(value) {
			// this environment does not support Symbols.
			return false;
		};
	}


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var implementation = __webpack_require__(52);

	module.exports = Function.prototype.bind || implementation;


/***/ },
/* 52 */
/***/ function(module, exports) {

	var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
	var slice = Array.prototype.slice;
	var toStr = Object.prototype.toString;
	var funcType = '[object Function]';

	module.exports = function bind(that) {
	    var target = this;
	    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
	        throw new TypeError(ERROR_MESSAGE + target);
	    }
	    var args = slice.call(arguments, 1);

	    var bound;
	    var binder = function () {
	        if (this instanceof bound) {
	            var result = target.apply(
	                this,
	                args.concat(slice.call(arguments))
	            );
	            if (Object(result) === result) {
	                return result;
	            }
	            return this;
	        } else {
	            return target.apply(
	                that,
	                args.concat(slice.call(arguments))
	            );
	        }
	    };

	    var boundLength = Math.max(0, target.length - args.length);
	    var boundArgs = [];
	    for (var i = 0; i < boundLength; i++) {
	        boundArgs.push('$' + i);
	    }

	    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

	    if (target.prototype) {
	        var Empty = function Empty() {};
	        Empty.prototype = target.prototype;
	        bound.prototype = new Empty();
	        Empty.prototype = null;
	    }

	    return bound;
	};


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $isNaN = __webpack_require__(40);
	var $isFinite = __webpack_require__(41);

	var sign = __webpack_require__(43);
	var mod = __webpack_require__(44);

	var IsCallable = __webpack_require__(48);
	var toPrimitive = __webpack_require__(54);

	// https://es5.github.io/#x9
	var ES5 = {
		ToPrimitive: toPrimitive,

		ToBoolean: function ToBoolean(value) {
			return Boolean(value);
		},
		ToNumber: function ToNumber(value) {
			return Number(value);
		},
		ToInteger: function ToInteger(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number)) { return 0; }
			if (number === 0 || !$isFinite(number)) { return number; }
			return sign(number) * Math.floor(Math.abs(number));
		},
		ToInt32: function ToInt32(x) {
			return this.ToNumber(x) >> 0;
		},
		ToUint32: function ToUint32(x) {
			return this.ToNumber(x) >>> 0;
		},
		ToUint16: function ToUint16(value) {
			var number = this.ToNumber(value);
			if ($isNaN(number) || number === 0 || !$isFinite(number)) { return 0; }
			var posInt = sign(number) * Math.floor(Math.abs(number));
			return mod(posInt, 0x10000);
		},
		ToString: function ToString(value) {
			return String(value);
		},
		ToObject: function ToObject(value) {
			this.CheckObjectCoercible(value);
			return Object(value);
		},
		CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
			/* jshint eqnull:true */
			if (value == null) {
				throw new TypeError(optMessage || 'Cannot call method on ' + value);
			}
			return value;
		},
		IsCallable: IsCallable,
		SameValue: function SameValue(x, y) {
			if (x === y) { // 0 === -0, but they are not identical.
				if (x === 0) { return 1 / x === 1 / y; }
				return true;
			}
			return $isNaN(x) && $isNaN(y);
		},

		// http://www.ecma-international.org/ecma-262/5.1/#sec-8
		Type: function Type(x) {
			if (x === null) {
				return 'Null';
			}
			if (typeof x === 'undefined') {
				return 'Undefined';
			}
			if (typeof x === 'function' || typeof x === 'object') {
				return 'Object';
			}
			if (typeof x === 'number') {
				return 'Number';
			}
			if (typeof x === 'boolean') {
				return 'Boolean';
			}
			if (typeof x === 'string') {
				return 'String';
			}
		}
	};

	module.exports = ES5;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var toStr = Object.prototype.toString;

	var isPrimitive = __webpack_require__(47);

	var isCallable = __webpack_require__(48);

	// https://es5.github.io/#x8.12
	var ES5internalSlots = {
		'[[DefaultValue]]': function (O, hint) {
			var actualHint = hint || (toStr.call(O) === '[object Date]' ? String : Number);

			if (actualHint === String || actualHint === Number) {
				var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
				var value, i;
				for (i = 0; i < methods.length; ++i) {
					if (isCallable(O[methods[i]])) {
						value = O[methods[i]]();
						if (isPrimitive(value)) {
							return value;
						}
					}
				}
				throw new TypeError('No default value');
			}
			throw new TypeError('invalid [[DefaultValue]] hint supplied');
		}
	};

	// https://es5.github.io/#x9
	module.exports = function ToPrimitive(input, PreferredType) {
		if (isPrimitive(input)) {
			return input;
		}
		return ES5internalSlots['[[DefaultValue]]'](input, PreferredType);
	};


/***/ },
/* 55 */
/***/ function(module, exports) {

	'use strict';

	var regexExec = RegExp.prototype.exec;
	var tryRegexExec = function tryRegexExec(value) {
		try {
			regexExec.call(value);
			return true;
		} catch (e) {
			return false;
		}
	};
	var toStr = Object.prototype.toString;
	var regexClass = '[object RegExp]';
	var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

	module.exports = function isRegex(value) {
		if (typeof value !== 'object') { return false; }
		return hasToStringTag ? tryRegexExec(value) : toStr.call(value) === regexClass;
	};


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var ES = __webpack_require__(39);
	var $isNaN = Number.isNaN || function (a) { return a !== a; };
	var $isFinite = Number.isFinite || function (n) { return typeof n === 'number' && global.isFinite(n); };
	var indexOf = Array.prototype.indexOf;

	module.exports = function includes(searchElement) {
		var fromIndex = arguments.length > 1 ? ES.ToInteger(arguments[1]) : 0;
		if (indexOf && !$isNaN(searchElement) && $isFinite(fromIndex) && typeof searchElement !== 'undefined') {
			return indexOf.apply(this, arguments) > -1;
		}

		var O = ES.ToObject(this);
		var length = ES.ToLength(O.length);
		if (length === 0) {
			return false;
		}
		var k = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex);
		while (k < length) {
			if (ES.SameValueZero(searchElement, O[k])) {
				return true;
			}
			k += 1;
		}
		return false;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var implementation = __webpack_require__(56);

	module.exports = function getPolyfill() {
		return Array.prototype.includes || implementation;
	};


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var define = __webpack_require__(35);
	var getPolyfill = __webpack_require__(57);

	module.exports = function shimArrayPrototypeIncludes() {
		var polyfill = getPolyfill();
		if (Array.prototype.includes !== polyfill) {
			define(Array.prototype, { includes: polyfill });
		}
		return polyfill;
	};


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _TetherComponent = __webpack_require__(60);

	var _TetherComponent2 = _interopRequireDefault(_TetherComponent);

	exports['default'] = _TetherComponent2['default'];
	module.exports = exports['default'];

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(6);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _tether = __webpack_require__(61);

	var _tether2 = _interopRequireDefault(_tether);

	if (!_tether2['default']) {
	  console.error('It looks like Tether has not been included. Please load this dependency first https://github.com/HubSpot/tether');
	}

	var renderElementToPropTypes = [_react.PropTypes.string, _react.PropTypes.shape({
	  appendChild: _react.PropTypes.func.isRequired
	})];

	var childrenPropType = function childrenPropType(_ref, propName, componentName) {
	  var children = _ref.children;

	  var childCount = _react.Children.count(children);
	  if (childCount <= 0) {
	    return new Error(componentName + ' expects at least one child to use as the target element.');
	  } else if (childCount > 2) {
	    return new Error('Only a max of two children allowed in ' + componentName + '.');
	  }
	};

	var attachmentPositions = ['top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

	var TetherComponent = (function (_Component) {
	  _inherits(TetherComponent, _Component);

	  function TetherComponent() {
	    _classCallCheck(this, TetherComponent);

	    _get(Object.getPrototypeOf(TetherComponent.prototype), 'constructor', this).apply(this, arguments);

	    this._targetNode = null;
	    this._elementParentNode = null;
	    this._tether = false;
	  }

	  _createClass(TetherComponent, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._targetNode = _reactDom2['default'].findDOMNode(this);
	      this._update();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      this._update();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._destroy();
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      this._tether.disable();
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      this._tether.enable();
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      this._tether.position();
	    }
	  }, {
	    key: '_destroy',
	    value: function _destroy() {
	      if (this._elementParentNode) {
	        _reactDom2['default'].unmountComponentAtNode(this._elementParentNode);
	        this._elementParentNode.parentNode.removeChild(this._elementParentNode);
	      }

	      if (this._tether) {
	        this._tether.destroy();
	      }

	      this._elementParentNode = null;
	      this._tether = null;
	    }
	  }, {
	    key: '_update',
	    value: function _update() {
	      var _this = this;

	      var _props = this.props;
	      var children = _props.children;
	      var renderElementTag = _props.renderElementTag;

	      var elementComponent = _react.Children.toArray(children)[1];

	      // if no element component provided, bail out
	      if (!elementComponent) {
	        // destroy Tether element if it has been created
	        if (this._tether) {
	          this._destroy();
	        }
	        return;
	      }

	      // create element node container if it hasn't been yet
	      if (!this._elementParentNode) {
	        // create a node that we can stick our content Component in
	        this._elementParentNode = document.createElement(renderElementTag);

	        // append node to the render node
	        this._renderNode.appendChild(this._elementParentNode);
	      }

	      // render element component into the DOM
	      _reactDom2['default'].unstable_renderSubtreeIntoContainer(this, elementComponent, this._elementParentNode, function () {
	        // don't update Tether until the subtree has finished rendering
	        _this._updateTether();
	      });
	    }
	  }, {
	    key: '_updateTether',
	    value: function _updateTether() {
	      var _this2 = this;

	      var _props2 = this.props;
	      var children = _props2.children;
	      var renderElementTag = _props2.renderElementTag;
	      var renderElementTo = _props2.renderElementTo;
	      var id = _props2.id;
	      var className = _props2.className;
	      var style = _props2.style;

	      var options = _objectWithoutProperties(_props2, ['children', 'renderElementTag', 'renderElementTo', 'id', 'className', 'style']);

	      var tetherOptions = _extends({
	        target: this._targetNode,
	        element: this._elementParentNode
	      }, options);

	      if (id) {
	        this._elementParentNode.id = id;
	      }

	      if (className) {
	        this._elementParentNode.className = className;
	      }

	      if (style) {
	        Object.keys(style).forEach(function (key) {
	          _this2._elementParentNode.style[key] = style[key];
	        });
	      }

	      if (!this._tether) {
	        this._tether = new _tether2['default'](tetherOptions);
	      } else {
	        this._tether.setOptions(tetherOptions);
	      }

	      this._tether.position();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react.Children.toArray(this.props.children)[0];
	    }
	  }, {
	    key: '_renderNode',
	    get: function get() {
	      var renderElementTo = this.props.renderElementTo;

	      if (typeof renderElementTo === 'string') {
	        return document.querySelector(renderElementTo);
	      } else {
	        return renderElementTo || document.body;
	      }
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      renderElementTag: _react.PropTypes.string,
	      renderElementTo: _react.PropTypes.oneOfType(renderElementToPropTypes),
	      attachment: _react.PropTypes.oneOf(attachmentPositions).isRequired,
	      targetAttachment: _react.PropTypes.oneOf(attachmentPositions),
	      offset: _react.PropTypes.string,
	      targetOffset: _react.PropTypes.string,
	      targetModifier: _react.PropTypes.string,
	      enabled: _react.PropTypes.bool,
	      classes: _react.PropTypes.object,
	      classPrefix: _react.PropTypes.string,
	      optimizations: _react.PropTypes.object,
	      constraints: _react.PropTypes.array,
	      id: _react.PropTypes.string,
	      className: _react.PropTypes.string,
	      style: _react.PropTypes.object,
	      children: childrenPropType
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      renderElementTag: 'div',
	      renderElementTo: null
	    },
	    enumerable: true
	  }]);

	  return TetherComponent;
	})(_react.Component);

	exports['default'] = TetherComponent;
	module.exports = exports['default'];

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.3.7 */

	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory(require, exports, module);
	  } else {
	    root.Tether = factory();
	  }
	}(this, function(require, exports, module) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var TetherBase = undefined;
	if (typeof TetherBase === 'undefined') {
	  TetherBase = { modules: [] };
	}

	var zeroElement = null;

	// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
	// if the element lies within a nested document (<frame> or <iframe>-like).
	function getActualBoundingClientRect(node) {
	  var boundingRect = node.getBoundingClientRect();

	  // The original object returned by getBoundingClientRect is immutable, so we clone it
	  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
	  var rect = {};
	  for (var k in boundingRect) {
	    rect[k] = boundingRect[k];
	  }

	  if (node.ownerDocument !== document) {
	    var _frameElement = node.ownerDocument.defaultView.frameElement;
	    if (_frameElement) {
	      var frameRect = getActualBoundingClientRect(_frameElement);
	      rect.top += frameRect.top;
	      rect.bottom += frameRect.top;
	      rect.left += frameRect.left;
	      rect.right += frameRect.left;
	    }
	  }

	  return rect;
	}

	function getScrollParents(el) {
	  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	  var computedStyle = getComputedStyle(el) || {};
	  var position = computedStyle.position;
	  var parents = [];

	  if (position === 'fixed') {
	    return [el];
	  }

	  var parent = el;
	  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
	    var style = undefined;
	    try {
	      style = getComputedStyle(parent);
	    } catch (err) {}

	    if (typeof style === 'undefined' || style === null) {
	      parents.push(parent);
	      return parents;
	    }

	    var _style = style;
	    var overflow = _style.overflow;
	    var overflowX = _style.overflowX;
	    var overflowY = _style.overflowY;

	    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
	      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	        parents.push(parent);
	      }
	    }
	  }

	  parents.push(el.ownerDocument.body);

	  // If the node is within a frame, account for the parent window scroll
	  if (el.ownerDocument !== document) {
	    parents.push(el.ownerDocument.defaultView);
	  }

	  return parents;
	}

	var uniqueId = (function () {
	  var id = 0;
	  return function () {
	    return ++id;
	  };
	})();

	var zeroPosCache = {};
	var getOrigin = function getOrigin() {
	  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	  // jitter as the user scrolls that messes with our ability to detect if two positions
	  // are equivilant or not.  We place an element at the top left of the page that will
	  // get the same jitter, so we can cancel the two out.
	  var node = zeroElement;
	  if (!node) {
	    node = document.createElement('div');
	    node.setAttribute('data-tether-id', uniqueId());
	    extend(node.style, {
	      top: 0,
	      left: 0,
	      position: 'absolute'
	    });

	    document.body.appendChild(node);

	    zeroElement = node;
	  }

	  var id = node.getAttribute('data-tether-id');
	  if (typeof zeroPosCache[id] === 'undefined') {
	    zeroPosCache[id] = getActualBoundingClientRect(node);

	    // Clear the cache when this position call is done
	    defer(function () {
	      delete zeroPosCache[id];
	    });
	  }

	  return zeroPosCache[id];
	};

	function removeUtilElements() {
	  if (zeroElement) {
	    document.body.removeChild(zeroElement);
	  }
	  zeroElement = null;
	};

	function getBounds(el) {
	  var doc = undefined;
	  if (el === document) {
	    doc = document;
	    el = document.documentElement;
	  } else {
	    doc = el.ownerDocument;
	  }

	  var docEl = doc.documentElement;

	  var box = getActualBoundingClientRect(el);

	  var origin = getOrigin();

	  box.top -= origin.top;
	  box.left -= origin.left;

	  if (typeof box.width === 'undefined') {
	    box.width = document.body.scrollWidth - box.left - box.right;
	  }
	  if (typeof box.height === 'undefined') {
	    box.height = document.body.scrollHeight - box.top - box.bottom;
	  }

	  box.top = box.top - docEl.clientTop;
	  box.left = box.left - docEl.clientLeft;
	  box.right = doc.body.clientWidth - box.width - box.left;
	  box.bottom = doc.body.clientHeight - box.height - box.top;

	  return box;
	}

	function getOffsetParent(el) {
	  return el.offsetParent || document.documentElement;
	}

	var _scrollBarSize = null;
	function getScrollBarSize() {
	  if (_scrollBarSize) {
	    return _scrollBarSize;
	  }
	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  inner.style.height = '200px';

	  var outer = document.createElement('div');
	  extend(outer.style, {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    pointerEvents: 'none',
	    visibility: 'hidden',
	    width: '200px',
	    height: '150px',
	    overflow: 'hidden'
	  });

	  outer.appendChild(inner);

	  document.body.appendChild(outer);

	  var widthContained = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var widthScroll = inner.offsetWidth;

	  if (widthContained === widthScroll) {
	    widthScroll = outer.clientWidth;
	  }

	  document.body.removeChild(outer);

	  var width = widthContained - widthScroll;

	  _scrollBarSize = { width: width, height: width };
	  return _scrollBarSize;
	}

	function extend() {
	  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var args = [];

	  Array.prototype.push.apply(args, arguments);

	  args.slice(1).forEach(function (obj) {
	    if (obj) {
	      for (var key in obj) {
	        if (({}).hasOwnProperty.call(obj, key)) {
	          out[key] = obj[key];
	        }
	      }
	    }
	  });

	  return out;
	}

	function removeClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.remove(cls);
	      }
	    });
	  } else {
	    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
	    var className = getClassName(el).replace(regex, ' ');
	    setClassName(el, className);
	  }
	}

	function addClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.add(cls);
	      }
	    });
	  } else {
	    removeClass(el, name);
	    var cls = getClassName(el) + (' ' + name);
	    setClassName(el, cls);
	  }
	}

	function hasClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    return el.classList.contains(name);
	  }
	  var className = getClassName(el);
	  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
	}

	function getClassName(el) {
	  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
	  // completely separately SVGAnimatedString base classes
	  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
	    return el.className.baseVal;
	  }
	  return el.className;
	}

	function setClassName(el, className) {
	  el.setAttribute('class', className);
	}

	function updateClasses(el, add, all) {
	  // Of the set of 'all' classes, we need the 'add' classes, and only the
	  // 'add' classes to be set.
	  all.forEach(function (cls) {
	    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
	      removeClass(el, cls);
	    }
	  });

	  add.forEach(function (cls) {
	    if (!hasClass(el, cls)) {
	      addClass(el, cls);
	    }
	  });
	}

	var deferred = [];

	var defer = function defer(fn) {
	  deferred.push(fn);
	};

	var flush = function flush() {
	  var fn = undefined;
	  while (fn = deferred.pop()) {
	    fn();
	  }
	};

	var Evented = (function () {
	  function Evented() {
	    _classCallCheck(this, Evented);
	  }

	  _createClass(Evented, [{
	    key: 'on',
	    value: function on(event, handler, ctx) {
	      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	      if (typeof this.bindings === 'undefined') {
	        this.bindings = {};
	      }
	      if (typeof this.bindings[event] === 'undefined') {
	        this.bindings[event] = [];
	      }
	      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
	    }
	  }, {
	    key: 'once',
	    value: function once(event, handler, ctx) {
	      this.on(event, handler, ctx, true);
	    }
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
	        return;
	      }

	      if (typeof handler === 'undefined') {
	        delete this.bindings[event];
	      } else {
	        var i = 0;
	        while (i < this.bindings[event].length) {
	          if (this.bindings[event][i].handler === handler) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'trigger',
	    value: function trigger(event) {
	      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
	        var i = 0;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        while (i < this.bindings[event].length) {
	          var _bindings$event$i = this.bindings[event][i];
	          var handler = _bindings$event$i.handler;
	          var ctx = _bindings$event$i.ctx;
	          var once = _bindings$event$i.once;

	          var context = ctx;
	          if (typeof context === 'undefined') {
	            context = this;
	          }

	          handler.apply(context, args);

	          if (once) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }]);

	  return Evented;
	})();

	TetherBase.Utils = {
	  getActualBoundingClientRect: getActualBoundingClientRect,
	  getScrollParents: getScrollParents,
	  getBounds: getBounds,
	  getOffsetParent: getOffsetParent,
	  extend: extend,
	  addClass: addClass,
	  removeClass: removeClass,
	  hasClass: hasClass,
	  updateClasses: updateClasses,
	  defer: defer,
	  flush: flush,
	  uniqueId: uniqueId,
	  Evented: Evented,
	  getScrollBarSize: getScrollBarSize,
	  removeUtilElements: removeUtilElements
	};
	/* globals TetherBase, performance */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	if (typeof TetherBase === 'undefined') {
	  throw new Error('You must include the utils.js file before tether.js');
	}

	var _TetherBase$Utils = TetherBase.Utils;
	var getScrollParents = _TetherBase$Utils.getScrollParents;
	var getBounds = _TetherBase$Utils.getBounds;
	var getOffsetParent = _TetherBase$Utils.getOffsetParent;
	var extend = _TetherBase$Utils.extend;
	var addClass = _TetherBase$Utils.addClass;
	var removeClass = _TetherBase$Utils.removeClass;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	var flush = _TetherBase$Utils.flush;
	var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
	var removeUtilElements = _TetherBase$Utils.removeUtilElements;

	function within(a, b) {
	  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

	  return a + diff >= b && b >= a - diff;
	}

	var transformKey = (function () {
	  if (typeof document === 'undefined') {
	    return '';
	  }
	  var el = document.createElement('div');

	  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
	  for (var i = 0; i < transforms.length; ++i) {
	    var key = transforms[i];
	    if (el.style[key] !== undefined) {
	      return key;
	    }
	  }
	})();

	var tethers = [];

	var position = function position() {
	  tethers.forEach(function (tether) {
	    tether.position(false);
	  });
	  flush();
	};

	function now() {
	  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
	    return performance.now();
	  }
	  return +new Date();
	}

	(function () {
	  var lastCall = null;
	  var lastDuration = null;
	  var pendingTimeout = null;

	  var tick = function tick() {
	    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
	      // We voluntarily throttle ourselves if we can't manage 60fps
	      lastDuration = Math.min(lastDuration - 16, 250);

	      // Just in case this is the last event, remember to position just once more
	      pendingTimeout = setTimeout(tick, 250);
	      return;
	    }

	    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
	      // Some browsers call events a little too frequently, refuse to run more than is reasonable
	      return;
	    }

	    if (pendingTimeout != null) {
	      clearTimeout(pendingTimeout);
	      pendingTimeout = null;
	    }

	    lastCall = now();
	    position();
	    lastDuration = now() - lastCall;
	  };

	  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
	    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
	      window.addEventListener(event, tick);
	    });
	  }
	})();

	var MIRROR_LR = {
	  center: 'center',
	  left: 'right',
	  right: 'left'
	};

	var MIRROR_TB = {
	  middle: 'middle',
	  top: 'bottom',
	  bottom: 'top'
	};

	var OFFSET_MAP = {
	  top: 0,
	  left: 0,
	  middle: '50%',
	  center: '50%',
	  bottom: '100%',
	  right: '100%'
	};

	var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
	  var left = attachment.left;
	  var top = attachment.top;

	  if (left === 'auto') {
	    left = MIRROR_LR[relativeToAttachment.left];
	  }

	  if (top === 'auto') {
	    top = MIRROR_TB[relativeToAttachment.top];
	  }

	  return { left: left, top: top };
	};

	var attachmentToOffset = function attachmentToOffset(attachment) {
	  var left = attachment.left;
	  var top = attachment.top;

	  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
	    left = OFFSET_MAP[attachment.left];
	  }

	  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
	    top = OFFSET_MAP[attachment.top];
	  }

	  return { left: left, top: top };
	};

	function addOffset() {
	  var out = { top: 0, left: 0 };

	  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
	    offsets[_key] = arguments[_key];
	  }

	  offsets.forEach(function (_ref) {
	    var top = _ref.top;
	    var left = _ref.left;

	    if (typeof top === 'string') {
	      top = parseFloat(top, 10);
	    }
	    if (typeof left === 'string') {
	      left = parseFloat(left, 10);
	    }

	    out.top += top;
	    out.left += left;
	  });

	  return out;
	}

	function offsetToPx(offset, size) {
	  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
	    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
	  }
	  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
	    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
	  }

	  return offset;
	}

	var parseOffset = function parseOffset(value) {
	  var _value$split = value.split(' ');

	  var _value$split2 = _slicedToArray(_value$split, 2);

	  var top = _value$split2[0];
	  var left = _value$split2[1];

	  return { top: top, left: left };
	};
	var parseAttachment = parseOffset;

	var TetherClass = (function (_Evented) {
	  _inherits(TetherClass, _Evented);

	  function TetherClass(options) {
	    var _this = this;

	    _classCallCheck(this, TetherClass);

	    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
	    this.position = this.position.bind(this);

	    tethers.push(this);

	    this.history = [];

	    this.setOptions(options, false);

	    TetherBase.modules.forEach(function (module) {
	      if (typeof module.initialize !== 'undefined') {
	        module.initialize.call(_this);
	      }
	    });

	    this.position();
	  }

	  _createClass(TetherClass, [{
	    key: 'getClass',
	    value: function getClass() {
	      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var classes = this.options.classes;

	      if (typeof classes !== 'undefined' && classes[key]) {
	        return this.options.classes[key];
	      } else if (this.options.classPrefix) {
	        return this.options.classPrefix + '-' + key;
	      } else {
	        return key;
	      }
	    }
	  }, {
	    key: 'setOptions',
	    value: function setOptions(options) {
	      var _this2 = this;

	      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      var defaults = {
	        offset: '0 0',
	        targetOffset: '0 0',
	        targetAttachment: 'auto auto',
	        classPrefix: 'tether'
	      };

	      this.options = extend(defaults, options);

	      var _options = this.options;
	      var element = _options.element;
	      var target = _options.target;
	      var targetModifier = _options.targetModifier;

	      this.element = element;
	      this.target = target;
	      this.targetModifier = targetModifier;

	      if (this.target === 'viewport') {
	        this.target = document.body;
	        this.targetModifier = 'visible';
	      } else if (this.target === 'scroll-handle') {
	        this.target = document.body;
	        this.targetModifier = 'scroll-handle';
	      }

	      ['element', 'target'].forEach(function (key) {
	        if (typeof _this2[key] === 'undefined') {
	          throw new Error('Tether Error: Both element and target must be defined');
	        }

	        if (typeof _this2[key].jquery !== 'undefined') {
	          _this2[key] = _this2[key][0];
	        } else if (typeof _this2[key] === 'string') {
	          _this2[key] = document.querySelector(_this2[key]);
	        }
	      });

	      addClass(this.element, this.getClass('element'));
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('target'));
	      }

	      if (!this.options.attachment) {
	        throw new Error('Tether Error: You must provide an attachment');
	      }

	      this.targetAttachment = parseAttachment(this.options.targetAttachment);
	      this.attachment = parseAttachment(this.options.attachment);
	      this.offset = parseOffset(this.options.offset);
	      this.targetOffset = parseOffset(this.options.targetOffset);

	      if (typeof this.scrollParents !== 'undefined') {
	        this.disable();
	      }

	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParents = [this.target];
	      } else {
	        this.scrollParents = getScrollParents(this.target);
	      }

	      if (!(this.options.enabled === false)) {
	        this.enable(pos);
	      }
	    }
	  }, {
	    key: 'getTargetBounds',
	    value: function getTargetBounds() {
	      if (typeof this.targetModifier !== 'undefined') {
	        if (this.targetModifier === 'visible') {
	          if (this.target === document.body) {
	            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
	          } else {
	            var bounds = getBounds(this.target);

	            var out = {
	              height: bounds.height,
	              width: bounds.width,
	              top: bounds.top,
	              left: bounds.left
	            };

	            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
	            out.height = Math.min(innerHeight, out.height);
	            out.height -= 2;

	            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
	            out.width = Math.min(innerWidth, out.width);
	            out.width -= 2;

	            if (out.top < pageYOffset) {
	              out.top = pageYOffset;
	            }
	            if (out.left < pageXOffset) {
	              out.left = pageXOffset;
	            }

	            return out;
	          }
	        } else if (this.targetModifier === 'scroll-handle') {
	          var bounds = undefined;
	          var target = this.target;
	          if (target === document.body) {
	            target = document.documentElement;

	            bounds = {
	              left: pageXOffset,
	              top: pageYOffset,
	              height: innerHeight,
	              width: innerWidth
	            };
	          } else {
	            bounds = getBounds(target);
	          }

	          var style = getComputedStyle(target);

	          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

	          var scrollBottom = 0;
	          if (hasBottomScroll) {
	            scrollBottom = 15;
	          }

	          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

	          var out = {
	            width: 15,
	            height: height * 0.975 * (height / target.scrollHeight),
	            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	          };

	          var fitAdj = 0;
	          if (height < 408 && this.target === document.body) {
	            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	          }

	          if (this.target !== document.body) {
	            out.height = Math.max(out.height, 24);
	          }

	          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
	          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

	          if (this.target === document.body) {
	            out.height = Math.max(out.height, 24);
	          }

	          return out;
	        }
	      } else {
	        return getBounds(this.target);
	      }
	    }
	  }, {
	    key: 'clearCache',
	    value: function clearCache() {
	      this._cache = {};
	    }
	  }, {
	    key: 'cache',
	    value: function cache(k, getter) {
	      // More than one module will often need the same DOM info, so
	      // we keep a cache which is cleared on each position call
	      if (typeof this._cache === 'undefined') {
	        this._cache = {};
	      }

	      if (typeof this._cache[k] === 'undefined') {
	        this._cache[k] = getter.call(this);
	      }

	      return this._cache[k];
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      var _this3 = this;

	      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('enabled'));
	      }
	      addClass(this.element, this.getClass('enabled'));
	      this.enabled = true;

	      this.scrollParents.forEach(function (parent) {
	        if (parent !== _this3.target.ownerDocument) {
	          parent.addEventListener('scroll', _this3.position);
	        }
	      });

	      if (pos) {
	        this.position();
	      }
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      var _this4 = this;

	      removeClass(this.target, this.getClass('enabled'));
	      removeClass(this.element, this.getClass('enabled'));
	      this.enabled = false;

	      if (typeof this.scrollParents !== 'undefined') {
	        this.scrollParents.forEach(function (parent) {
	          parent.removeEventListener('scroll', _this4.position);
	        });
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this5 = this;

	      this.disable();

	      tethers.forEach(function (tether, i) {
	        if (tether === _this5) {
	          tethers.splice(i, 1);
	        }
	      });

	      // Remove any elements we were using for convenience from the DOM
	      if (tethers.length === 0) {
	        removeUtilElements();
	      }
	    }
	  }, {
	    key: 'updateAttachClasses',
	    value: function updateAttachClasses(elementAttach, targetAttach) {
	      var _this6 = this;

	      elementAttach = elementAttach || this.attachment;
	      targetAttach = targetAttach || this.targetAttachment;
	      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

	      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
	        // updateAttachClasses can be called more than once in a position call, so
	        // we need to clean up after ourselves such that when the last defer gets
	        // ran it doesn't add any extra classes from previous calls.
	        this._addAttachClasses.splice(0, this._addAttachClasses.length);
	      }

	      if (typeof this._addAttachClasses === 'undefined') {
	        this._addAttachClasses = [];
	      }
	      var add = this._addAttachClasses;

	      if (elementAttach.top) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
	      }
	      if (elementAttach.left) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
	      }
	      if (targetAttach.top) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
	      }
	      if (targetAttach.left) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
	      }

	      var all = [];
	      sides.forEach(function (side) {
	        all.push(_this6.getClass('element-attached') + '-' + side);
	        all.push(_this6.getClass('target-attached') + '-' + side);
	      });

	      defer(function () {
	        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
	          return;
	        }

	        updateClasses(_this6.element, _this6._addAttachClasses, all);
	        if (!(_this6.options.addTargetClasses === false)) {
	          updateClasses(_this6.target, _this6._addAttachClasses, all);
	        }

	        delete _this6._addAttachClasses;
	      });
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      var _this7 = this;

	      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
	      // tethers (in which case call Tether.Utils.flush yourself when you're done)

	      if (!this.enabled) {
	        return;
	      }

	      this.clearCache();

	      // Turn 'auto' attachments into the appropriate corner or edge
	      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

	      this.updateAttachClasses(this.attachment, targetAttachment);

	      var elementPos = this.cache('element-bounds', function () {
	        return getBounds(_this7.element);
	      });

	      var width = elementPos.width;
	      var height = elementPos.height;

	      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	        var _lastSize = this.lastSize;

	        // We cache the height and width to make it possible to position elements that are
	        // getting hidden.
	        width = _lastSize.width;
	        height = _lastSize.height;
	      } else {
	        this.lastSize = { width: width, height: height };
	      }

	      var targetPos = this.cache('target-bounds', function () {
	        return _this7.getTargetBounds();
	      });
	      var targetSize = targetPos;

	      // Get an actual px offset from the attachment
	      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
	      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

	      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
	      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

	      // Add the manually provided offset
	      offset = addOffset(offset, manualOffset);
	      targetOffset = addOffset(targetOffset, manualTargetOffset);

	      // It's now our goal to make (element position + offset) == (target position + target offset)
	      var left = targetPos.left + targetOffset.left - offset.left;
	      var top = targetPos.top + targetOffset.top - offset.top;

	      for (var i = 0; i < TetherBase.modules.length; ++i) {
	        var _module2 = TetherBase.modules[i];
	        var ret = _module2.position.call(this, {
	          left: left,
	          top: top,
	          targetAttachment: targetAttachment,
	          targetPos: targetPos,
	          elementPos: elementPos,
	          offset: offset,
	          targetOffset: targetOffset,
	          manualOffset: manualOffset,
	          manualTargetOffset: manualTargetOffset,
	          scrollbarSize: scrollbarSize,
	          attachment: this.attachment
	        });

	        if (ret === false) {
	          return false;
	        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
	          continue;
	        } else {
	          top = ret.top;
	          left = ret.left;
	        }
	      }

	      // We describe the position three different ways to give the optimizer
	      // a chance to decide the best possible way to position the element
	      // with the fewest repaints.
	      var next = {
	        // It's position relative to the page (absolute positioning when
	        // the element is a child of the body)
	        page: {
	          top: top,
	          left: left
	        },

	        // It's position relative to the viewport (fixed positioning)
	        viewport: {
	          top: top - pageYOffset,
	          bottom: pageYOffset - top - height + innerHeight,
	          left: left - pageXOffset,
	          right: pageXOffset - left - width + innerWidth
	        }
	      };

	      var doc = this.target.ownerDocument;
	      var win = doc.defaultView;

	      var scrollbarSize = undefined;
	      if (win.innerHeight > doc.documentElement.clientHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }

	      if (win.innerWidth > doc.documentElement.clientWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }

	      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
	        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	        next.page.bottom = doc.body.scrollHeight - top - height;
	        next.page.right = doc.body.scrollWidth - left - width;
	      }

	      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
	        (function () {
	          var offsetParent = _this7.cache('target-offsetparent', function () {
	            return getOffsetParent(_this7.target);
	          });
	          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
	            return getBounds(offsetParent);
	          });
	          var offsetParentStyle = getComputedStyle(offsetParent);
	          var offsetParentSize = offsetPosition;

	          var offsetBorder = {};
	          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
	          });

	          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

	          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
	            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
	              // We're within the visible part of the target's scroll parent
	              var scrollTop = offsetParent.scrollTop;
	              var scrollLeft = offsetParent.scrollLeft;

	              // It's position relative to the target's offset parent (absolute positioning when
	              // the element is moved to be a child of the target's offset parent).
	              next.offset = {
	                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	              };
	            }
	          }
	        })();
	      }

	      // We could also travel up the DOM and try each containing context, rather than only
	      // looking at the body, but we're gonna get diminishing returns.

	      this.move(next);

	      this.history.unshift(next);

	      if (this.history.length > 3) {
	        this.history.pop();
	      }

	      if (flushChanges) {
	        flush();
	      }

	      return true;
	    }

	    // THE ISSUE
	  }, {
	    key: 'move',
	    value: function move(pos) {
	      var _this8 = this;

	      if (!(typeof this.element.parentNode !== 'undefined')) {
	        return;
	      }

	      var same = {};

	      for (var type in pos) {
	        same[type] = {};

	        for (var key in pos[type]) {
	          var found = false;

	          for (var i = 0; i < this.history.length; ++i) {
	            var point = this.history[i];
	            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
	              found = true;
	              break;
	            }
	          }

	          if (!found) {
	            same[type][key] = true;
	          }
	        }
	      }

	      var css = { top: '', left: '', right: '', bottom: '' };

	      var transcribe = function transcribe(_same, _pos) {
	        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
	        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
	        if (gpu !== false) {
	          var yPos = undefined,
	              xPos = undefined;
	          if (_same.top) {
	            css.top = 0;
	            yPos = _pos.top;
	          } else {
	            css.bottom = 0;
	            yPos = -_pos.bottom;
	          }

	          if (_same.left) {
	            css.left = 0;
	            xPos = _pos.left;
	          } else {
	            css.right = 0;
	            xPos = -_pos.right;
	          }

	          if (window.matchMedia) {
	            // HubSpot/tether#207
	            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
	            if (!retina) {
	              xPos = Math.round(xPos);
	              yPos = Math.round(yPos);
	            }
	          }

	          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

	          if (transformKey !== 'msTransform') {
	            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
	            // but IE9 doesn't support 3d transforms and will choke.
	            css[transformKey] += " translateZ(0)";
	          }
	        } else {
	          if (_same.top) {
	            css.top = _pos.top + 'px';
	          } else {
	            css.bottom = _pos.bottom + 'px';
	          }

	          if (_same.left) {
	            css.left = _pos.left + 'px';
	          } else {
	            css.right = _pos.right + 'px';
	          }
	        }
	      };

	      var moved = false;
	      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	        css.position = 'absolute';
	        transcribe(same.page, pos.page);
	      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	        css.position = 'fixed';
	        transcribe(same.viewport, pos.viewport);
	      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
	        (function () {
	          css.position = 'absolute';
	          var offsetParent = _this8.cache('target-offsetparent', function () {
	            return getOffsetParent(_this8.target);
	          });

	          if (getOffsetParent(_this8.element) !== offsetParent) {
	            defer(function () {
	              _this8.element.parentNode.removeChild(_this8.element);
	              offsetParent.appendChild(_this8.element);
	            });
	          }

	          transcribe(same.offset, pos.offset);
	          moved = true;
	        })();
	      } else {
	        css.position = 'absolute';
	        transcribe({ top: true, left: true }, pos.page);
	      }

	      if (!moved) {
	        var offsetParentIsBody = true;
	        var currentNode = this.element.parentNode;
	        while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
	          if (getComputedStyle(currentNode).position !== 'static') {
	            offsetParentIsBody = false;
	            break;
	          }

	          currentNode = currentNode.parentNode;
	        }

	        if (!offsetParentIsBody) {
	          this.element.parentNode.removeChild(this.element);
	          this.element.ownerDocument.body.appendChild(this.element);
	        }
	      }

	      // Any css change will trigger a repaint, so let's avoid one if nothing changed
	      var writeCSS = {};
	      var write = false;
	      for (var key in css) {
	        var val = css[key];
	        var elVal = this.element.style[key];

	        if (elVal !== val) {
	          write = true;
	          writeCSS[key] = val;
	        }
	      }

	      if (write) {
	        defer(function () {
	          extend(_this8.element.style, writeCSS);
	          _this8.trigger('repositioned');
	        });
	      }
	    }
	  }]);

	  return TetherClass;
	})(Evented);

	TetherClass.modules = [];

	TetherBase.position = position;

	var Tether = extend(TetherClass, TetherBase);
	/* globals TetherBase */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var extend = _TetherBase$Utils.extend;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;

	var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

	function getBoundingRect(tether, to) {
	  if (to === 'scrollParent') {
	    to = tether.scrollParents[0];
	  } else if (to === 'window') {
	    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	  }

	  if (to === document) {
	    to = to.documentElement;
	  }

	  if (typeof to.nodeType !== 'undefined') {
	    (function () {
	      var node = to;
	      var size = getBounds(to);
	      var pos = size;
	      var style = getComputedStyle(to);

	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

	      // Account any parent Frames scroll offset
	      if (node.ownerDocument !== document) {
	        var win = node.ownerDocument.defaultView;
	        to[0] += win.pageXOffset;
	        to[1] += win.pageYOffset;
	        to[2] += win.pageXOffset;
	        to[3] += win.pageYOffset;
	      }

	      BOUNDS_FORMAT.forEach(function (side, i) {
	        side = side[0].toUpperCase() + side.substr(1);
	        if (side === 'Top' || side === 'Left') {
	          to[i] += parseFloat(style['border' + side + 'Width']);
	        } else {
	          to[i] -= parseFloat(style['border' + side + 'Width']);
	        }
	      });
	    })();
	  }

	  return to;
	}

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;

	    var top = _ref.top;
	    var left = _ref.left;
	    var targetAttachment = _ref.targetAttachment;

	    if (!this.options.constraints) {
	      return true;
	    }

	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });

	    var height = _cache.height;
	    var width = _cache.width;

	    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	      var _lastSize = this.lastSize;

	      // Handle the item getting hidden as a result of our positioning without glitching
	      // the classes in and out
	      width = _lastSize.width;
	      height = _lastSize.height;
	    }

	    var targetSize = this.cache('target-bounds', function () {
	      return _this.getTargetBounds();
	    });

	    var targetHeight = targetSize.height;
	    var targetWidth = targetSize.width;

	    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

	    this.options.constraints.forEach(function (constraint) {
	      var outOfBoundsClass = constraint.outOfBoundsClass;
	      var pinnedClass = constraint.pinnedClass;

	      if (outOfBoundsClass) {
	        allClasses.push(outOfBoundsClass);
	      }
	      if (pinnedClass) {
	        allClasses.push(pinnedClass);
	      }
	    });

	    allClasses.forEach(function (cls) {
	      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
	        allClasses.push(cls + '-' + side);
	      });
	    });

	    var addClasses = [];

	    var tAttachment = extend({}, targetAttachment);
	    var eAttachment = extend({}, this.attachment);

	    this.options.constraints.forEach(function (constraint) {
	      var to = constraint.to;
	      var attachment = constraint.attachment;
	      var pin = constraint.pin;

	      if (typeof attachment === 'undefined') {
	        attachment = '';
	      }

	      var changeAttachX = undefined,
	          changeAttachY = undefined;
	      if (attachment.indexOf(' ') >= 0) {
	        var _attachment$split = attachment.split(' ');

	        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

	        changeAttachY = _attachment$split2[0];
	        changeAttachX = _attachment$split2[1];
	      } else {
	        changeAttachX = changeAttachY = attachment;
	      }

	      var bounds = getBoundingRect(_this, to);

	      if (changeAttachY === 'target' || changeAttachY === 'both') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          top += targetHeight;
	          tAttachment.top = 'bottom';
	        }

	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          top -= targetHeight;
	          tAttachment.top = 'top';
	        }
	      }

	      if (changeAttachY === 'together') {
	        if (tAttachment.top === 'top') {
	          if (eAttachment.top === 'bottom' && top < bounds[1]) {
	            top += targetHeight;
	            tAttachment.top = 'bottom';

	            top += height;
	            eAttachment.top = 'top';
	          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
	            top -= height - targetHeight;
	            tAttachment.top = 'bottom';

	            eAttachment.top = 'bottom';
	          }
	        }

	        if (tAttachment.top === 'bottom') {
	          if (eAttachment.top === 'top' && top + height > bounds[3]) {
	            top -= targetHeight;
	            tAttachment.top = 'top';

	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
	            top += height - targetHeight;
	            tAttachment.top = 'top';

	            eAttachment.top = 'top';
	          }
	        }

	        if (tAttachment.top === 'middle') {
	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }
	        }
	      }

	      if (changeAttachX === 'target' || changeAttachX === 'both') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          left += targetWidth;
	          tAttachment.left = 'right';
	        }

	        if (left + width > bounds[2] && tAttachment.left === 'right') {
	          left -= targetWidth;
	          tAttachment.left = 'left';
	        }
	      }

	      if (changeAttachX === 'together') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          if (eAttachment.left === 'right') {
	            left += targetWidth;
	            tAttachment.left = 'right';

	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';

	            left -= width;
	            eAttachment.left = 'right';
	          }
	        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	          if (eAttachment.left === 'left') {
	            left -= targetWidth;
	            tAttachment.left = 'left';

	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';

	            left += width;
	            eAttachment.left = 'left';
	          }
	        } else if (tAttachment.left === 'center') {
	          if (left + width > bounds[2] && eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (left < bounds[0] && eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          }
	        }
	      }

	      if (changeAttachY === 'element' || changeAttachY === 'both') {
	        if (top < bounds[1] && eAttachment.top === 'bottom') {
	          top += height;
	          eAttachment.top = 'top';
	        }

	        if (top + height > bounds[3] && eAttachment.top === 'top') {
	          top -= height;
	          eAttachment.top = 'bottom';
	        }
	      }

	      if (changeAttachX === 'element' || changeAttachX === 'both') {
	        if (left < bounds[0]) {
	          if (eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'center') {
	            left += width / 2;
	            eAttachment.left = 'left';
	          }
	        }

	        if (left + width > bounds[2]) {
	          if (eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'center') {
	            left -= width / 2;
	            eAttachment.left = 'right';
	          }
	        }
	      }

	      if (typeof pin === 'string') {
	        pin = pin.split(',').map(function (p) {
	          return p.trim();
	        });
	      } else if (pin === true) {
	        pin = ['top', 'left', 'right', 'bottom'];
	      }

	      pin = pin || [];

	      var pinned = [];
	      var oob = [];

	      if (top < bounds[1]) {
	        if (pin.indexOf('top') >= 0) {
	          top = bounds[1];
	          pinned.push('top');
	        } else {
	          oob.push('top');
	        }
	      }

	      if (top + height > bounds[3]) {
	        if (pin.indexOf('bottom') >= 0) {
	          top = bounds[3] - height;
	          pinned.push('bottom');
	        } else {
	          oob.push('bottom');
	        }
	      }

	      if (left < bounds[0]) {
	        if (pin.indexOf('left') >= 0) {
	          left = bounds[0];
	          pinned.push('left');
	        } else {
	          oob.push('left');
	        }
	      }

	      if (left + width > bounds[2]) {
	        if (pin.indexOf('right') >= 0) {
	          left = bounds[2] - width;
	          pinned.push('right');
	        } else {
	          oob.push('right');
	        }
	      }

	      if (pinned.length) {
	        (function () {
	          var pinnedClass = undefined;
	          if (typeof _this.options.pinnedClass !== 'undefined') {
	            pinnedClass = _this.options.pinnedClass;
	          } else {
	            pinnedClass = _this.getClass('pinned');
	          }

	          addClasses.push(pinnedClass);
	          pinned.forEach(function (side) {
	            addClasses.push(pinnedClass + '-' + side);
	          });
	        })();
	      }

	      if (oob.length) {
	        (function () {
	          var oobClass = undefined;
	          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
	            oobClass = _this.options.outOfBoundsClass;
	          } else {
	            oobClass = _this.getClass('out-of-bounds');
	          }

	          addClasses.push(oobClass);
	          oob.forEach(function (side) {
	            addClasses.push(oobClass + '-' + side);
	          });
	        })();
	      }

	      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
	        eAttachment.left = tAttachment.left = false;
	      }
	      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
	        eAttachment.top = tAttachment.top = false;
	      }

	      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
	        _this.updateAttachClasses(eAttachment, tAttachment);
	        _this.trigger('update', {
	          attachment: eAttachment,
	          targetAttachment: tAttachment
	        });
	      }
	    });

	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });

	    return { top: top, left: left };
	  }
	});
	/* globals TetherBase */

	'use strict';

	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;

	    var top = _ref.top;
	    var left = _ref.left;

	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });

	    var height = _cache.height;
	    var width = _cache.width;

	    var targetPos = this.getTargetBounds();

	    var bottom = top + height;
	    var right = left + width;

	    var abutted = [];
	    if (top <= targetPos.bottom && bottom >= targetPos.top) {
	      ['left', 'right'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === left || targetPosSide === right) {
	          abutted.push(side);
	        }
	      });
	    }

	    if (left <= targetPos.right && right >= targetPos.left) {
	      ['top', 'bottom'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === top || targetPosSide === bottom) {
	          abutted.push(side);
	        }
	      });
	    }

	    var allClasses = [];
	    var addClasses = [];

	    var sides = ['left', 'top', 'right', 'bottom'];
	    allClasses.push(this.getClass('abutted'));
	    sides.forEach(function (side) {
	      allClasses.push(_this.getClass('abutted') + '-' + side);
	    });

	    if (abutted.length) {
	      addClasses.push(this.getClass('abutted'));
	    }

	    abutted.forEach(function (side) {
	      addClasses.push(_this.getClass('abutted') + '-' + side);
	    });

	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });

	    return true;
	  }
	});
	/* globals TetherBase */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var top = _ref.top;
	    var left = _ref.left;

	    if (!this.options.shift) {
	      return;
	    }

	    var shift = this.options.shift;
	    if (typeof this.options.shift === 'function') {
	      shift = this.options.shift.call(this, { top: top, left: left });
	    }

	    var shiftTop = undefined,
	        shiftLeft = undefined;
	    if (typeof shift === 'string') {
	      shift = shift.split(' ');
	      shift[1] = shift[1] || shift[0];

	      var _shift = shift;

	      var _shift2 = _slicedToArray(_shift, 2);

	      shiftTop = _shift2[0];
	      shiftLeft = _shift2[1];

	      shiftTop = parseFloat(shiftTop, 10);
	      shiftLeft = parseFloat(shiftLeft, 10);
	    } else {
	      shiftTop = shift.top;
	      shiftLeft = shift.left;
	    }

	    top += shiftTop;
	    left += shiftLeft;

	    return { top: top, left: left };
	  }
	});
	return Tether;

	}));


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = toMomentObject;

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	var _constants = __webpack_require__(5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function toMomentObject(dateString, customFormat) {
	  var dateFormats = customFormat ? [customFormat, _constants.DISPLAY_FORMAT, _constants.ISO_FORMAT] : [_constants.DISPLAY_FORMAT, _constants.ISO_FORMAT];

	  var date = (0, _moment2['default'])(dateString, dateFormats, true);
	  return date.isValid() ? date.hour(12) : null;
	}

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = toLocalizedDateString;

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	var _toMomentObject = __webpack_require__(62);

	var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

	var _constants = __webpack_require__(5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function toLocalizedDateString(date, currentFormat) {
	  var dateObj = _moment2['default'].isMoment(date) ? date : (0, _toMomentObject2['default'])(date, currentFormat);
	  if (!dateObj) return null;

	  return dateObj.format(_constants.DISPLAY_FORMAT);
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isInclusivelyAfterDay;

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	var _isSameDay = __webpack_require__(65);

	var _isSameDay2 = _interopRequireDefault(_isSameDay);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function isInclusivelyAfterDay(a, b) {
	  if (!_moment2['default'].isMoment(a) || !_moment2['default'].isMoment(b)) return false;
	  return a.isAfter(b) || (0, _isSameDay2['default'])(a, b);
	}

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isSameDay;

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function isSameDay(a, b) {
	  if (!_moment2['default'].isMoment(a) || !_moment2['default'].isMoment(b)) return false;
	  return a.isSame(b, 'day');
	}

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isInclusivelyBeforeDay;

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	var _isSameDay = __webpack_require__(65);

	var _isSameDay2 = _interopRequireDefault(_isSameDay);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function isInclusivelyBeforeDay(a, b) {
	  if (!_moment2['default'].isMoment(a) || !_moment2['default'].isMoment(b)) return false;
	  return a.isBefore(b) || (0, _isSameDay2['default'])(a, b);
	}

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isNextDay;

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	var _isSameDay = __webpack_require__(65);

	var _isSameDay2 = _interopRequireDefault(_isSameDay);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function isNextDay(a, b) {
	  if (!_moment2['default'].isMoment(a) || !_moment2['default'].isMoment(b)) return false;
	  var nextDay = (0, _moment2['default'])(a).add(1, 'day');
	  return (0, _isSameDay2['default'])(nextDay, b);
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/{

		/***/0:
		/***/function () {
			function _(module, exports, __webpack_require__) {

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
				};

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _react = __webpack_require__(1);

				var _react2 = _interopRequireDefault(_react);

				var _classnames = __webpack_require__(5);

				var _classnames2 = _interopRequireDefault(_classnames);

				var _DateInput = __webpack_require__(28);

				var _DateInput2 = _interopRequireDefault(_DateInput);

				var _arrowRight = __webpack_require__(29);

				var _arrowRight2 = _interopRequireDefault(_arrowRight);

				var _close = __webpack_require__(26);

				var _close2 = _interopRequireDefault(_close);

				var _constants = __webpack_require__(9);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { 'default': obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var propTypes = {
					startDateId: _react.PropTypes.string,
					startDatePlaceholderText: _react.PropTypes.string,

					endDateId: _react.PropTypes.string,
					endDatePlaceholderText: _react.PropTypes.string,

					onStartDateFocus: _react.PropTypes.func,
					onEndDateFocus: _react.PropTypes.func,
					onStartDateChange: _react.PropTypes.func,
					onEndDateChange: _react.PropTypes.func,
					onStartDateShiftTab: _react.PropTypes.func,
					onEndDateTab: _react.PropTypes.func,
					onClearDates: _react.PropTypes.func,

					startDate: _react.PropTypes.string,
					endDate: _react.PropTypes.string,

					isStartDateFocused: _react.PropTypes.bool,
					isEndDateFocused: _react.PropTypes.bool,
					showClearDates: _react.PropTypes.bool,
					disabled: _react.PropTypes.bool,
					required: _react.PropTypes.bool,
					showCaret: _react.PropTypes.bool,

					// i18n
					phrases: _react.PropTypes.shape({
						clearDates: _react.PropTypes.node
					})
				};

				var defaultProps = {
					startDateId: _constants.START_DATE,
					endDateId: _constants.END_DATE,
					startDatePlaceholderText: 'Start Date',
					endDatePlaceholderText: 'End Date',
					onStartDateFocus: function () {
						function onStartDateFocus() {}

						return onStartDateFocus;
					}(),
					onEndDateFocus: function () {
						function onEndDateFocus() {}

						return onEndDateFocus;
					}(),
					onStartDateChange: function () {
						function onStartDateChange() {}

						return onStartDateChange;
					}(),
					onEndDateChange: function () {
						function onEndDateChange() {}

						return onEndDateChange;
					}(),
					onStartDateShiftTab: function () {
						function onStartDateShiftTab() {}

						return onStartDateShiftTab;
					}(),
					onEndDateTab: function () {
						function onEndDateTab() {}

						return onEndDateTab;
					}(),
					onClearDates: function () {
						function onClearDates() {}

						return onClearDates;
					}(),

					isStartDateFocused: false,
					isEndDateFocused: false,
					showClearDates: false,
					disabled: false,
					showCaret: false,

					// i18n
					phrases: {
						clearDates: 'Clear Dates'
					}
				};

				var DateRangePickerInput = function (_React$Component) {
					_inherits(DateRangePickerInput, _React$Component);

					function DateRangePickerInput(props) {
						_classCallCheck(this, DateRangePickerInput);

						var _this = _possibleConstructorReturn(this, (DateRangePickerInput.__proto__ || Object.getPrototypeOf(DateRangePickerInput)).call(this, props));

						_this.state = {
							isClearDatesHovered: false
						};

						_this.onClearDatesMouseEnter = _this.onClearDatesMouseEnter.bind(_this);
						_this.onClearDatesMouseLeave = _this.onClearDatesMouseLeave.bind(_this);
						return _this;
					}

					_createClass(DateRangePickerInput, [{
						key: 'onClearDatesMouseEnter',
						value: function () {
							function onClearDatesMouseEnter() {
								this.setState({
									isClearDatesHovered: true
								});
							}

							return onClearDatesMouseEnter;
						}()
					}, {
						key: 'onClearDatesMouseLeave',
						value: function () {
							function onClearDatesMouseLeave() {
								this.setState({
									isClearDatesHovered: false
								});
							}

							return onClearDatesMouseLeave;
						}()
					}, {
						key: 'render',
						value: function () {
							function render() {
								var _state = this.state;
								var startDateString = _state.startDateString;
								var endDateString = _state.endDateString;
								var isClearDatesHovered = _state.isClearDatesHovered;
								var _props = this.props;
								var startDate = _props.startDate;
								var startDateId = _props.startDateId;
								var startDatePlaceholderText = _props.startDatePlaceholderText;
								var isStartDateFocused = _props.isStartDateFocused;
								var onStartDateChange = _props.onStartDateChange;
								var onStartDateFocus = _props.onStartDateFocus;
								var onStartDateShiftTab = _props.onStartDateShiftTab;
								var endDate = _props.endDate;
								var endDateId = _props.endDateId;
								var endDatePlaceholderText = _props.endDatePlaceholderText;
								var isEndDateFocused = _props.isEndDateFocused;
								var onEndDateChange = _props.onEndDateChange;
								var onEndDateFocus = _props.onEndDateFocus;
								var onEndDateTab = _props.onEndDateTab;
								var onClearDates = _props.onClearDates;
								var showClearDates = _props.showClearDates;
								var disabled = _props.disabled;
								var required = _props.required;
								var showCaret = _props.showCaret;
								var phrases = _props.phrases;

								var startDateValue = startDate || startDateString;
								var endDateValue = endDate || endDateString;

								return _react2['default'].createElement('div', {
									className: (0, _classnames2['default'])('DateRangePickerInput', {
										'DateRangePickerInput--disabled': disabled
									})
								}, _react2['default'].createElement(_DateInput2['default'], {
									id: startDateId,
									placeholder: startDatePlaceholderText,
									dateValue: startDateValue,
									focused: isStartDateFocused,
									disabled: disabled,
									required: required,
									showCaret: showCaret,

									onChange: onStartDateChange,
									onFocus: onStartDateFocus,
									onKeyDownShiftTab: onStartDateShiftTab
								}), _react2['default'].createElement('div', { className: 'DateRangePickerInput__arrow' }, _react2['default'].createElement(_arrowRight2['default'], null)), _react2['default'].createElement(_DateInput2['default'], {
									id: endDateId,
									placeholder: endDatePlaceholderText,
									dateValue: endDateValue,
									focused: isEndDateFocused,
									disabled: disabled,
									required: required,
									showCaret: showCaret,

									onChange: onEndDateChange,
									onFocus: onEndDateFocus,
									onKeyDownTab: onEndDateTab
								}), showClearDates && _react2['default'].createElement('button', {
									type: 'button',
									className: (0, _classnames2['default'])('DateRangePickerInput__clear-dates', {
										'DateRangePickerInput__clear-dates--hide': !(startDateValue || endDateValue),
										'DateRangePickerInput__clear-dates--hover': isClearDatesHovered
									}),
									onMouseEnter: this.onClearDatesMouseEnter,
									onMouseLeave: this.onClearDatesMouseLeave,
									onClick: onClearDates
								}, _react2['default'].createElement('span', { className: 'screen-reader-only' }, phrases.clearDates), _react2['default'].createElement(_close2['default'], null)));
							}

							return render;
						}()
					}]);

					return DateRangePickerInput;
				}(_react2['default'].Component);

				exports['default'] = DateRangePickerInput;

				DateRangePickerInput.propTypes = propTypes;
				DateRangePickerInput.defaultProps = defaultProps;

				/***/
			}

			return _;
		}(),

		/***/1:
		/***/function () {
			function _(module, exports) {

				module.exports = __webpack_require__(2);

				/***/
			}

			return _;
		}(),

		/***/5:
		/***/function () {
			function _(module, exports) {

				module.exports = __webpack_require__(4);

				/***/
			}

			return _;
		}(),

		/***/9:
		/***/function () {
			function _(module, exports) {

				module.exports = __webpack_require__(5);

				/***/
			}

			return _;
		}(),

		/***/26:
		/***/function () {
			function _(module, exports, __webpack_require__) {

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _react = __webpack_require__(1);

				var _react2 = _interopRequireDefault(_react);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { "default": obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var SVG = function (_React$Component) {
					_inherits(SVG, _React$Component);

					function SVG() {
						_classCallCheck(this, SVG);

						return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
					}

					_createClass(SVG, [{
						key: "render",
						value: function () {
							function render() {
								return _react2["default"].createElement("svg", _extends({ viewBox: "0 0 12 12" }, this.props), _react2["default"].createElement("path", { fillRule: "evenodd", d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" }));
							}

							return render;
						}()
					}]);

					return SVG;
				}(_react2["default"].Component);

				exports["default"] = SVG;

				/***/
			}

			return _;
		}(),

		/***/28:
		/***/function () {
			function _(module, exports) {

				module.exports = __webpack_require__(69);

				/***/
			}

			return _;
		}(),

		/***/29:
		/***/function () {
			function _(module, exports, __webpack_require__) {

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _extends = Object.assign || function (target) {
					for (var i = 1; i < arguments.length; i++) {
						var source = arguments[i];for (var key in source) {
							if (Object.prototype.hasOwnProperty.call(source, key)) {
								target[key] = source[key];
							}
						}
					}return target;
				};

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _react = __webpack_require__(1);

				var _react2 = _interopRequireDefault(_react);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { "default": obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var SVG = function (_React$Component) {
					_inherits(SVG, _React$Component);

					function SVG() {
						_classCallCheck(this, SVG);

						return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
					}

					_createClass(SVG, [{
						key: "render",
						value: function () {
							function render() {
								return _react2["default"].createElement("svg", _extends({ viewBox: "0 0 1000 1000" }, this.props), _react2["default"].createElement("path", { d: "M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" }));
							}

							return render;
						}()
					}]);

					return SVG;
				}(_react2["default"].Component);

				exports["default"] = SVG;

				/***/
			}

			return _;
		}()

		/******/ });

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {

		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		var _reactDom = __webpack_require__(10);

		var _reactDom2 = _interopRequireDefault(_reactDom);

		var _classnames = __webpack_require__(5);

		var _classnames2 = _interopRequireDefault(_classnames);

		var _isTouchDevice = __webpack_require__(14);

		var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { 'default': obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var propTypes = {
			id: _react.PropTypes.string.isRequired,
			placeholder: _react.PropTypes.string, // also used as label
			dateValue: _react.PropTypes.string,
			focused: _react.PropTypes.bool,
			disabled: _react.PropTypes.bool,
			required: _react.PropTypes.bool,
			showCaret: _react.PropTypes.bool,

			onChange: _react.PropTypes.func,
			onFocus: _react.PropTypes.func,
			onKeyDownShiftTab: _react.PropTypes.func,
			onKeyDownTab: _react.PropTypes.func
		};

		var defaultProps = {
			placeholder: 'Select Date',
			dateValue: '',
			focused: false,
			disabled: false,
			required: false,
			showCaret: false,

			onChange: function () {
				function onChange() {}

				return onChange;
			}(),
			onFocus: function () {
				function onFocus() {}

				return onFocus;
			}(),
			onKeyDownShiftTab: function () {
				function onKeyDownShiftTab() {}

				return onKeyDownShiftTab;
			}(),
			onKeyDownTab: function () {
				function onKeyDownTab() {}

				return onKeyDownTab;
			}()
		};

		var DateInput = function (_React$Component) {
			_inherits(DateInput, _React$Component);

			function DateInput(props) {
				_classCallCheck(this, DateInput);

				var _this = _possibleConstructorReturn(this, (DateInput.__proto__ || Object.getPrototypeOf(DateInput)).call(this, props));

				_this.state = {
					dateString: ''
				};

				_this.onChange = _this.onChange.bind(_this);
				_this.onKeyDown = _this.onKeyDown.bind(_this);

				_this.isTouchDevice = (0, _isTouchDevice2['default'])();
				return _this;
			}

			_createClass(DateInput, [{
				key: 'componentWillReceiveProps',
				value: function () {
					function componentWillReceiveProps(nextProps) {
						if (!this.props.dateValue && nextProps.dateValue) {
							this.setState({
								dateString: ''
							});
						}
					}

					return componentWillReceiveProps;
				}()
			}, {
				key: 'componentDidUpdate',
				value: function () {
					function componentDidUpdate(prevProps) {
						var focused = this.props.focused;

						if (prevProps.focused !== focused && focused) {
							var startDateInput = _reactDom2['default'].findDOMNode(this.inputRef);
							startDateInput.focus();
							startDateInput.select();
						}
					}

					return componentDidUpdate;
				}()
			}, {
				key: 'onChange',
				value: function () {
					function onChange(e) {
						var dateString = e.target.value;

						this.setState({ dateString: dateString });
						this.props.onChange(dateString);
					}

					return onChange;
				}()
			}, {
				key: 'onKeyDown',
				value: function () {
					function onKeyDown(e) {
						var _props = this.props;
						var onKeyDownShiftTab = _props.onKeyDownShiftTab;
						var onKeyDownTab = _props.onKeyDownTab;

						if (e.key === 'Tab') {
							if (e.shiftKey) {
								onKeyDownShiftTab(e);
							} else {
								onKeyDownTab(e);
							}
						}
					}

					return onKeyDown;
				}()
			}, {
				key: 'render',
				value: function () {
					function render() {
						var _this2 = this;

						var dateString = this.state.dateString;
						var _props2 = this.props;
						var id = _props2.id;
						var placeholder = _props2.placeholder;
						var dateValue = _props2.dateValue;
						var focused = _props2.focused;
						var showCaret = _props2.showCaret;
						var onFocus = _props2.onFocus;
						var disabled = _props2.disabled;
						var required = _props2.required;

						var value = dateValue || dateString;

						return _react2['default'].createElement('div', {
							className: (0, _classnames2['default'])('DateInput', {
								'DateInput--with-caret': showCaret && focused,
								'DateInput--disabled': disabled
							}),
							onClick: onFocus
						}, _react2['default'].createElement('label', { className: 'DateInput__label', htmlFor: id }, placeholder), _react2['default'].createElement('input', {
							className: 'DateInput__input',
							type: 'text',
							id: id,
							name: id,
							ref: function () {
								function ref(_ref) {
									_this2.inputRef = _ref;
								}

								return ref;
							}(),
							value: value,
							onChange: this.onChange,
							onKeyDown: this.onKeyDown,
							onFocus: onFocus,
							placeholder: placeholder,
							autoComplete: 'off',
							maxLength: 10,
							disabled: disabled || this.isTouchDevice,
							required: required
						}), _react2['default'].createElement('div', {
							className: (0, _classnames2['default'])('DateInput__display-text', {
								'DateInput__display-text--has-input': !!value,
								'DateInput__display-text--focused': focused,
								'DateInput__display-text--disabled': disabled
							})
						}, value || placeholder));
					}

					return render;
				}()
			}]);

			return DateInput;
		}(_react2['default'].Component);

		exports['default'] = DateInput;

		DateInput.propTypes = propTypes;
		DateInput.defaultProps = defaultProps;

		/***/
	},
	/* 1 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(2);

		/***/
	},,,,
	/* 2 */
	/* 3 */
	/* 4 */
	/* 5 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(4);

		/***/
	},,,,,
	/* 6 */
	/* 7 */
	/* 8 */
	/* 9 */
	/* 10 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(6);

		/***/
	},,,,
	/* 11 */
	/* 12 */
	/* 13 */
	/* 14 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(7);

		/***/
	}
	/******/]);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {

		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		var _reactAddonsShallowCompare = __webpack_require__(2);

		var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

		var _reactDom = __webpack_require__(10);

		var _reactDom2 = _interopRequireDefault(_reactDom);

		var _moment = __webpack_require__(4);

		var _moment2 = _interopRequireDefault(_moment);

		var _classnames = __webpack_require__(5);

		var _classnames2 = _interopRequireDefault(_classnames);

		var _OutsideClickHandler = __webpack_require__(30);

		var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

		var _CalendarMonthGrid = __webpack_require__(31);

		var _CalendarMonthGrid2 = _interopRequireDefault(_CalendarMonthGrid);

		var _arrowLeft = __webpack_require__(32);

		var _arrowLeft2 = _interopRequireDefault(_arrowLeft);

		var _arrowRight = __webpack_require__(29);

		var _arrowRight2 = _interopRequireDefault(_arrowRight);

		var _chevronUp = __webpack_require__(33);

		var _chevronUp2 = _interopRequireDefault(_chevronUp);

		var _chevronDown = __webpack_require__(34);

		var _chevronDown2 = _interopRequireDefault(_chevronDown);

		var _getTransformStyles = __webpack_require__(13);

		var _getTransformStyles2 = _interopRequireDefault(_getTransformStyles);

		var _OrientationShape = __webpack_require__(8);

		var _OrientationShape2 = _interopRequireDefault(_OrientationShape);

		var _constants = __webpack_require__(9);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { 'default': obj };
		}

		function _toConsumableArray(arr) {
			if (Array.isArray(arr)) {
				for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
					arr2[i] = arr[i];
				}return arr2;
			} else {
				return Array.from(arr);
			}
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var CALENDAR_MONTH_WIDTH = 300;
		var DAY_PICKER_PADDING = 9;
		var MONTH_PADDING = 23;
		var PREV_TRANSITION = 'prev';
		var NEXT_TRANSITION = 'next';

		var propTypes = {
			enableOutsideDays: _react.PropTypes.bool,
			numberOfMonths: _react.PropTypes.number,
			modifiers: _react.PropTypes.object,
			orientation: _OrientationShape2['default'],
			withPortal: _react.PropTypes.bool,
			hidden: _react.PropTypes.bool,
			initialVisibleMonth: _react.PropTypes.func,
			onDayClick: _react.PropTypes.func,
			onDayMouseDown: _react.PropTypes.func,
			onDayMouseUp: _react.PropTypes.func,
			onDayMouseEnter: _react.PropTypes.func,
			onDayMouseLeave: _react.PropTypes.func,
			onDayTouchStart: _react.PropTypes.func,
			onDayTouchEnd: _react.PropTypes.func,
			onDayTouchTap: _react.PropTypes.func,
			onPrevMonthClick: _react.PropTypes.func,
			onNextMonthClick: _react.PropTypes.func,
			onOutsideClick: _react.PropTypes.func,

			// i18n
			monthFormat: _react.PropTypes.string
		};

		var defaultProps = {
			enableOutsideDays: false,
			numberOfMonths: 1,
			modifiers: {},
			orientation: _constants.HORIZONTAL_ORIENTATION,
			withPortal: false,
			hidden: false,
			initialVisibleMonth: function () {
				function initialVisibleMonth() {
					return (0, _moment2['default'])();
				}

				return initialVisibleMonth;
			}(),
			onDayClick: function () {
				function onDayClick() {}

				return onDayClick;
			}(),
			onDayMouseDown: function () {
				function onDayMouseDown() {}

				return onDayMouseDown;
			}(),
			onDayMouseUp: function () {
				function onDayMouseUp() {}

				return onDayMouseUp;
			}(),
			onDayMouseEnter: function () {
				function onDayMouseEnter() {}

				return onDayMouseEnter;
			}(),
			onDayMouseLeave: function () {
				function onDayMouseLeave() {}

				return onDayMouseLeave;
			}(),
			onDayTouchStart: function () {
				function onDayTouchStart() {}

				return onDayTouchStart;
			}(),
			onDayTouchTap: function () {
				function onDayTouchTap() {}

				return onDayTouchTap;
			}(),
			onDayTouchEnd: function () {
				function onDayTouchEnd() {}

				return onDayTouchEnd;
			}(),
			onPrevMonthClick: function () {
				function onPrevMonthClick() {}

				return onPrevMonthClick;
			}(),
			onNextMonthClick: function () {
				function onNextMonthClick() {}

				return onNextMonthClick;
			}(),
			onOutsideClick: function () {
				function onOutsideClick() {}

				return onOutsideClick;
			}(),

			// i18n
			monthFormat: 'MMMM YYYY'
		};

		var DayPicker = function (_React$Component) {
			_inherits(DayPicker, _React$Component);

			function DayPicker(props) {
				_classCallCheck(this, DayPicker);

				var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

				_this.hasSetInitialVisibleMonth = !props.hidden;
				_this.state = {
					currentMonth: props.hidden ? (0, _moment2['default'])() : props.initialVisibleMonth(),
					monthTransition: null,
					translationValue: 0
				};

				_this.handlePrevMonthClick = _this.handlePrevMonthClick.bind(_this);
				_this.handleNextMonthClick = _this.handleNextMonthClick.bind(_this);
				_this.updateStateAfterMonthTransition = _this.updateStateAfterMonthTransition.bind(_this);
				return _this;
			}

			_createClass(DayPicker, [{
				key: 'componentDidMount',
				value: function () {
					function componentDidMount() {
						if (this.isHorizontal()) {
							this.adjustDayPickerHeight();
							this.initializeDayPickerWidth();
						}
					}

					return componentDidMount;
				}()
			}, {
				key: 'componentWillReceiveProps',
				value: function () {
					function componentWillReceiveProps(nextProps) {
						if (!this.hasSetInitialVisibleMonth && !nextProps.hidden) {
							this.hasSetInitialVisibleMonth = true;
							this.setState({
								currentMonth: nextProps.initialVisibleMonth()
							});
						}
					}

					return componentWillReceiveProps;
				}()
			}, {
				key: 'shouldComponentUpdate',
				value: function () {
					function shouldComponentUpdate(nextProps, nextState) {
						return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
					}

					return shouldComponentUpdate;
				}()
			}, {
				key: 'componentDidUpdate',
				value: function () {
					function componentDidUpdate() {
						if (this.state.monthTransition) {
							if (this.isHorizontal()) {
								this.adjustDayPickerHeight();
							}
						}
					}

					return componentDidUpdate;
				}()
			}, {
				key: 'getMonthHeightByIndex',
				value: function () {
					function getMonthHeightByIndex(i) {
						return this.getMonthHeight(_reactDom2['default'].findDOMNode(this.refs.transitionContainer).querySelectorAll('.CalendarMonth')[i]);
					}

					return getMonthHeightByIndex;
				}()
			}, {
				key: 'getMonthHeight',
				value: function () {
					function getMonthHeight(el) {
						var caption = el.querySelector('.js-CalendarMonth__caption');
						var grid = el.querySelector('.js-CalendarMonth__grid');

						// Need to separate out table children for FF
						// Add an additional +1 for the border
						return this.calculateDimension(caption, 'height', true, true) + this.calculateDimension(grid, 'height') + 1;
					}

					return getMonthHeight;
				}()
			}, {
				key: 'applyTransformStyles',
				value: function () {
					function applyTransformStyles(el, transform) {
						var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

						var transformStyles = (0, _getTransformStyles2['default'])(transform);
						transformStyles.opacity = opacity;

						Object.keys(transformStyles).forEach(function (styleKey) {
							// eslint-disable-next-line no-param-reassign
							el.style[styleKey] = transformStyles[styleKey];
						});
					}

					return applyTransformStyles;
				}()
			}, {
				key: 'calculateDimension',
				value: function () {
					function calculateDimension(el, axis) {
						var borderBox = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
						var withMargin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

						if (!el) {
							return 0;
						}

						var axisStart = axis === 'width' ? 'Left' : 'Top';
						var axisEnd = axis === 'width' ? 'Right' : 'Bottom';

						// Only read styles if we need to
						var style = !borderBox || withMargin ? window.getComputedStyle(el) : {};

						// Offset includes border and padding
						var size = axis === 'width' ? el.offsetWidth : el.offsetHeight;

						// Get the inner size
						if (!borderBox) {
							size -= parseFloat(style['padding' + axisStart]) + parseFloat(style['padding' + axisEnd]) + parseFloat(style['border' + axisStart + 'Width']) + parseFloat(style['border' + axisEnd + 'Width']);
						}

						// Apply margin
						if (withMargin) {
							size += parseFloat(style['margin' + axisStart]) + parseFloat(style['margin' + axisEnd]);
						}

						return size;
					}

					return calculateDimension;
				}()
			}, {
				key: 'isHorizontal',
				value: function () {
					function isHorizontal() {
						return this.props.orientation === _constants.HORIZONTAL_ORIENTATION;
					}

					return isHorizontal;
				}()
			}, {
				key: 'isVertical',
				value: function () {
					function isVertical() {
						return this.props.orientation === _constants.VERTICAL_ORIENTATION;
					}

					return isVertical;
				}()
			}, {
				key: 'initializeDayPickerWidth',
				value: function () {
					function initializeDayPickerWidth() {
						this.dayPickerWidth = this.calculateDimension(_reactDom2['default'].findDOMNode(this.refs.calendarMonthGrid).querySelector('.CalendarMonth'), 'width', true);
					}

					return initializeDayPickerWidth;
				}()
			}, {
				key: 'updateStateAfterMonthTransition',
				value: function () {
					function updateStateAfterMonthTransition() {
						var _state = this.state;
						var currentMonth = _state.currentMonth;
						var monthTransition = _state.monthTransition;

						var newMonth = currentMonth;
						if (monthTransition === PREV_TRANSITION) {
							newMonth = currentMonth.clone().subtract(1, 'month');
						} else if (monthTransition === NEXT_TRANSITION) {
							newMonth = currentMonth.clone().add(1, 'month');
						}

						// clear the previous transforms
						this.applyTransformStyles(_reactDom2['default'].findDOMNode(this.refs.calendarMonthGrid).querySelector('.CalendarMonth'), 'none');

						this.setState({
							currentMonth: newMonth,
							monthTransition: null,
							translationValue: 0
						});
					}

					return updateStateAfterMonthTransition;
				}()
			}, {
				key: 'handlePrevMonthClick',
				value: function () {
					function handlePrevMonthClick(e) {
						if (e) e.preventDefault();

						if (this.props.onPrevMonthClick) {
							this.props.onPrevMonthClick(e);
						}

						var translationValue = this.isVertical() ? this.getMonthHeightByIndex(0) : this.dayPickerWidth;

						// The first CalendarMonth is always positioned absolute at top: 0 or left: 0
						// so we need to transform it to the appropriate location before the animation.
						// This behavior is because we would otherwise need a double-render in order to
						// adjust the container position once we had the height the first calendar
						// (ie first draw all the calendar, then in a second render, use the first calendar's
						// height to position the container). Variable calendar heights, amirite? <3 Maja
						this.translateFirstDayPickerForAnimation(translationValue);

						this.setState({
							monthTransition: PREV_TRANSITION,
							translationValue: translationValue
						});
					}

					return handlePrevMonthClick;
				}()
			}, {
				key: 'handleNextMonthClick',
				value: function () {
					function handleNextMonthClick(e) {
						if (e) e.preventDefault();
						if (this.props.onNextMonthClick) {
							this.props.onNextMonthClick(e);
						}

						var translationValue = this.isVertical() ? -this.getMonthHeightByIndex(1) : -this.dayPickerWidth;

						this.setState({
							monthTransition: NEXT_TRANSITION,
							translationValue: translationValue
						});
					}

					return handleNextMonthClick;
				}()
			}, {
				key: 'adjustDayPickerHeight',
				value: function () {
					function adjustDayPickerHeight() {
						var _this2 = this;

						var transitionContainer = _reactDom2['default'].findDOMNode(this.refs.transitionContainer);
						var heights = [];

						// convert node list to array
						[].concat(_toConsumableArray(transitionContainer.querySelectorAll('.CalendarMonth'))).forEach(function (el) {
							if (el.getAttribute('data-visible') === 'true') {
								heights.push(_this2.getMonthHeight(el));
							}
						});

						var newMonthHeight = Math.max.apply(Math, heights) + MONTH_PADDING;

						if (newMonthHeight !== this.calculateDimension(transitionContainer, 'height')) {
							this.monthHeight = newMonthHeight;
							transitionContainer.style.height = String(newMonthHeight) + 'px';
						}
					}

					return adjustDayPickerHeight;
				}()
			}, {
				key: 'translateFirstDayPickerForAnimation',
				value: function () {
					function translateFirstDayPickerForAnimation(translationValue) {
						var transformType = this.isVertical() ? 'translateY' : 'translateX';
						var transformValue = transformType + '(-' + String(translationValue) + 'px)';

						this.applyTransformStyles(_reactDom2['default'].findDOMNode(this.refs.transitionContainer).querySelector('.CalendarMonth'), transformValue, 1);
					}

					return translateFirstDayPickerForAnimation;
				}()
			}, {
				key: 'renderNavigation',
				value: function () {
					function renderNavigation() {
						var isVertical = this.isVertical();

						return _react2['default'].createElement('div', { className: 'DayPicker__nav' }, _react2['default'].createElement('span', {
							className: 'DayPicker__nav--prev',
							onClick: this.handlePrevMonthClick
						}, isVertical ? _react2['default'].createElement(_chevronUp2['default'], null) : _react2['default'].createElement(_arrowLeft2['default'], null)), _react2['default'].createElement('span', {
							className: 'DayPicker__nav--next',
							onClick: this.handleNextMonthClick
						}, isVertical ? _react2['default'].createElement(_chevronDown2['default'], null) : _react2['default'].createElement(_arrowRight2['default'], null)));
					}

					return renderNavigation;
				}()
			}, {
				key: 'renderWeekHeader',
				value: function () {
					function renderWeekHeader(index) {
						var numberOfMonths = this.props.numberOfMonths;

						var widthPercentage = 100 / numberOfMonths;
						var horizontalStyle = {
							width: widthPercentage + '%',
							left: widthPercentage * index + '%'
						};

						var style = this.isHorizontal() ? horizontalStyle : {};

						var header = [];
						for (var i = 0; i < 7; i++) {
							header.push(_react2['default'].createElement('li', { key: i }, _react2['default'].createElement('small', null, (0, _moment2['default'])().weekday(i).format('dd'))));
						}

						return _react2['default'].createElement('div', {
							className: 'DayPicker__week-header',
							key: 'week-' + String(index),
							style: style
						}, _react2['default'].createElement('ul', null, header));
					}

					return renderWeekHeader;
				}()
			}, {
				key: 'render',
				value: function () {
					function render() {
						var _state2 = this.state;
						var currentMonth = _state2.currentMonth;
						var monthTransition = _state2.monthTransition;
						var translationValue = _state2.translationValue;
						var _props = this.props;
						var enableOutsideDays = _props.enableOutsideDays;
						var numberOfMonths = _props.numberOfMonths;
						var orientation = _props.orientation;
						var modifiers = _props.modifiers;
						var withPortal = _props.withPortal;
						var onDayClick = _props.onDayClick;
						var onDayMouseDown = _props.onDayMouseDown;
						var onDayMouseUp = _props.onDayMouseUp;
						var onDayTouchStart = _props.onDayTouchStart;
						var onDayTouchEnd = _props.onDayTouchEnd;
						var onDayTouchTap = _props.onDayTouchTap;
						var onDayMouseEnter = _props.onDayMouseEnter;
						var onDayMouseLeave = _props.onDayMouseLeave;
						var onOutsideClick = _props.onOutsideClick;
						var monthFormat = _props.monthFormat;

						var numOfWeekHeaders = this.isVertical() ? 1 : numberOfMonths;
						var weekHeaders = [];
						for (var i = 0; i < numOfWeekHeaders; i++) {
							weekHeaders.push(this.renderWeekHeader(i));
						}

						var firstVisibleMonthIndex = 1;
						if (monthTransition === PREV_TRANSITION) {
							firstVisibleMonthIndex -= 1;
						} else if (monthTransition === NEXT_TRANSITION) {
							firstVisibleMonthIndex += 1;
						}

						var dayPickerClassNames = (0, _classnames2['default'])('DayPicker', {
							'DayPicker--horizontal': this.isHorizontal(),
							'DayPicker--vertical': this.isVertical(),
							'DayPicker--portal': withPortal
						});

						var transitionContainerClasses = (0, _classnames2['default'])('transition-container', {
							'transition-container--horizontal': this.isHorizontal(),
							'transition-container--vertical': this.isVertical()
						});

						var horizontalWidth = CALENDAR_MONTH_WIDTH * numberOfMonths + 2 * DAY_PICKER_PADDING;

						// this is a kind of made-up value that generally looks good. we'll
						// probably want to let the user set this explicitly.
						var verticalHeight = 1.75 * CALENDAR_MONTH_WIDTH;

						var dayPickerStyle = {
							width: this.isHorizontal() && horizontalWidth,

							// These values are to center the datepicker (approximately) on the page
							marginLeft: this.isHorizontal() && withPortal && -horizontalWidth / 2,
							marginTop: this.isHorizontal() && withPortal && -CALENDAR_MONTH_WIDTH / 2
						};

						var transitionContainerStyle = {
							width: this.isHorizontal() && horizontalWidth,
							height: this.isVertical() && !withPortal && verticalHeight
						};

						var isCalendarMonthGridAnimating = monthTransition !== null;
						var transformType = this.isVertical() ? 'translateY' : 'translateX';
						var transformValue = transformType + '(' + String(translationValue) + 'px)';

						return _react2['default'].createElement('div', { className: dayPickerClassNames, style: dayPickerStyle }, _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, this.renderNavigation(), _react2['default'].createElement('div', { className: 'DayPicker__week-headers' }, weekHeaders), _react2['default'].createElement('div', {
							className: transitionContainerClasses,
							ref: 'transitionContainer',
							style: transitionContainerStyle
						}, _react2['default'].createElement(_CalendarMonthGrid2['default'], {
							ref: 'calendarMonthGrid',
							transformValue: transformValue,
							enableOutsideDays: enableOutsideDays,
							firstVisibleMonthIndex: firstVisibleMonthIndex,
							initialMonth: currentMonth,
							isAnimating: isCalendarMonthGridAnimating,
							modifiers: modifiers,
							orientation: orientation,
							withPortal: withPortal,
							numberOfMonths: numberOfMonths,
							onDayClick: onDayClick,
							onDayMouseDown: onDayMouseDown,
							onDayMouseUp: onDayMouseUp,
							onDayTouchStart: onDayTouchStart,
							onDayTouchEnd: onDayTouchEnd,
							onDayTouchTap: onDayTouchTap,
							onDayMouseEnter: onDayMouseEnter,
							onDayMouseLeave: onDayMouseLeave,
							onMonthTransitionEnd: this.updateStateAfterMonthTransition,
							monthFormat: monthFormat
						}))));
					}

					return render;
				}()
			}]);

			return DayPicker;
		}(_react2['default'].Component);

		exports['default'] = DayPicker;

		DayPicker.propTypes = propTypes;
		DayPicker.defaultProps = defaultProps;

		/***/
	},
	/* 1 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(2);

		/***/
	},
	/* 2 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(71);

		/***/
	},,
	/* 3 */
	/* 4 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(3);

		/***/
	},
	/* 5 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(4);

		/***/
	},,,
	/* 6 */
	/* 7 */
	/* 8 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(72);

		/***/
	},
	/* 9 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(5);

		/***/
	},
	/* 10 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(6);

		/***/
	},,,
	/* 11 */
	/* 12 */
	/* 13 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(73);

		/***/
	},,,,,,,,,,,,,,,,
	/* 14 */
	/* 15 */
	/* 16 */
	/* 17 */
	/* 18 */
	/* 19 */
	/* 20 */
	/* 21 */
	/* 22 */
	/* 23 */
	/* 24 */
	/* 25 */
	/* 26 */
	/* 27 */
	/* 28 */
	/* 29 */
	/***/function (module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { "default": obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var SVG = function (_React$Component) {
			_inherits(SVG, _React$Component);

			function SVG() {
				_classCallCheck(this, SVG);

				return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
			}

			_createClass(SVG, [{
				key: "render",
				value: function () {
					function render() {
						return _react2["default"].createElement("svg", _extends({ viewBox: "0 0 1000 1000" }, this.props), _react2["default"].createElement("path", { d: "M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" }));
					}

					return render;
				}()
			}]);

			return SVG;
		}(_react2["default"].Component);

		exports["default"] = SVG;

		/***/
	},
	/* 30 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(74);

		/***/
	},
	/* 31 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(75);

		/***/
	},
	/* 32 */
	/***/function (module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { "default": obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var SVG = function (_React$Component) {
			_inherits(SVG, _React$Component);

			function SVG() {
				_classCallCheck(this, SVG);

				return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
			}

			_createClass(SVG, [{
				key: "render",
				value: function () {
					function render() {
						return _react2["default"].createElement("svg", _extends({ viewBox: "0 0 1000 1000" }, this.props), _react2["default"].createElement("path", { d: "M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" }));
					}

					return render;
				}()
			}]);

			return SVG;
		}(_react2["default"].Component);

		exports["default"] = SVG;

		/***/
	},
	/* 33 */
	/***/function (module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { "default": obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var SVG = function (_React$Component) {
			_inherits(SVG, _React$Component);

			function SVG() {
				_classCallCheck(this, SVG);

				return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
			}

			_createClass(SVG, [{
				key: "render",
				value: function () {
					function render() {
						return _react2["default"].createElement("svg", _extends({ viewBox: "0 0 1000 1000" }, this.props), _react2["default"].createElement("path", { d: "M32.1 712.6l453.2-452.2c11-11 21-11 32 0l453.2 452.2c4 5 6 10 6 16 0 13-10 23-22 23-7 0-12-2-16-7L501.3 308.5 64.1 744.7c-4 5-9 7-15 7-7 0-12-2-17-7-9-11-9-21 0-32.1z" }));
					}

					return render;
				}()
			}]);

			return SVG;
		}(_react2["default"].Component);

		exports["default"] = SVG;

		/***/
	},
	/* 34 */
	/***/function (module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { "default": obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var SVG = function (_React$Component) {
			_inherits(SVG, _React$Component);

			function SVG() {
				_classCallCheck(this, SVG);

				return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
			}

			_createClass(SVG, [{
				key: "render",
				value: function () {
					function render() {
						return _react2["default"].createElement("svg", _extends({ viewBox: "0 0 1000 1000" }, this.props), _react2["default"].createElement("path", { d: "M967.5 288.5L514.3 740.7c-11 11-21 11-32 0L29.1 288.5c-4-5-6-11-6-16 0-13 10-23 23-23 6 0 11 2 15 7l437.2 436.2 437.2-436.2c4-5 9-7 16-7 6 0 11 2 16 7 9 10.9 9 21 0 32z" }));
					}

					return render;
				}()
			}]);

			return SVG;
		}(_react2["default"].Component);

		exports["default"] = SVG;

		/***/
	}
	/******/]);

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(32);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _constants = __webpack_require__(5);

	exports['default'] = _react.PropTypes.oneOf([_constants.HORIZONTAL_ORIENTATION, _constants.VERTICAL_ORIENTATION]);

/***/ },
/* 73 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getTransformStyles;
	function getTransformStyles(transformValue) {
	  return {
	    transform: transformValue,
	    msTransform: transformValue,
	    MozTransform: transformValue,
	    WebkitTransform: transformValue
	  };
	}

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/{

		/***/0:
		/***/function () {
			function _(module, exports, __webpack_require__) {

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
				};

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _react = __webpack_require__(1);

				var _react2 = _interopRequireDefault(_react);

				var _reactDom = __webpack_require__(10);

				var _reactDom2 = _interopRequireDefault(_reactDom);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { 'default': obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var propTypes = {
					children: _react.PropTypes.node,
					onOutsideClick: _react.PropTypes.func
				};

				var defaultProps = {
					children: _react2['default'].createElement('span', null),
					onOutsideClick: function () {
						function onOutsideClick() {}

						return onOutsideClick;
					}()
				};

				var OutsideClickHandler = function (_React$Component) {
					_inherits(OutsideClickHandler, _React$Component);

					function OutsideClickHandler(props) {
						_classCallCheck(this, OutsideClickHandler);

						var _this = _possibleConstructorReturn(this, (OutsideClickHandler.__proto__ || Object.getPrototypeOf(OutsideClickHandler)).call(this, props));

						_this.onOutsideClick = _this.onOutsideClick.bind(_this);
						return _this;
					}

					_createClass(OutsideClickHandler, [{
						key: 'componentDidMount',
						value: function () {
							function componentDidMount() {
								if (document.addEventListener) {
									// `useCapture` flag is set to true so that a `stopPropagation` in the children will
									// not prevent all outside click handlers from firing - maja
									document.addEventListener('click', this.onOutsideClick, true);
								} else {
									document.attachEvent('onclick', this.onOutsideClick);
								}
							}

							return componentDidMount;
						}()
					}, {
						key: 'componentWillUnmount',
						value: function () {
							function componentWillUnmount() {
								if (document.removeEventListener) {
									document.removeEventListener('click', this.onOutsideClick, true);
								} else {
									document.detachEvent('onclick', this.onOutsideClick);
								}
							}

							return componentWillUnmount;
						}()
					}, {
						key: 'onOutsideClick',
						value: function () {
							function onOutsideClick(e) {
								var isDescendantOfRoot = _reactDom2['default'].findDOMNode(this.refs.childNode).contains(e.target);
								if (!isDescendantOfRoot) {
									this.props.onOutsideClick(e);
								}
							}

							return onOutsideClick;
						}()
					}, {
						key: 'render',
						value: function () {
							function render() {
								return _react2['default'].createElement('div', { ref: 'childNode' }, this.props.children);
							}

							return render;
						}()
					}]);

					return OutsideClickHandler;
				}(_react2['default'].Component);

				exports['default'] = OutsideClickHandler;

				OutsideClickHandler.propTypes = propTypes;
				OutsideClickHandler.defaultProps = defaultProps;

				/***/
			}

			return _;
		}(),

		/***/1:
		/***/function () {
			function _(module, exports) {

				module.exports = __webpack_require__(2);

				/***/
			}

			return _;
		}(),

		/***/10:
		/***/function () {
			function _(module, exports) {

				module.exports = __webpack_require__(6);

				/***/
			}

			return _;
		}()

		/******/ });

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {

		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		var _reactDom = __webpack_require__(10);

		var _reactDom2 = _interopRequireDefault(_reactDom);

		var _reactAddonsShallowCompare = __webpack_require__(2);

		var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

		var _reactMomentProptypes = __webpack_require__(3);

		var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

		var _moment = __webpack_require__(4);

		var _moment2 = _interopRequireDefault(_moment);

		var _classnames = __webpack_require__(5);

		var _classnames2 = _interopRequireDefault(_classnames);

		var _CalendarMonth = __webpack_require__(11);

		var _CalendarMonth2 = _interopRequireDefault(_CalendarMonth);

		var _isTransitionEndSupported = __webpack_require__(12);

		var _isTransitionEndSupported2 = _interopRequireDefault(_isTransitionEndSupported);

		var _getTransformStyles = __webpack_require__(13);

		var _getTransformStyles2 = _interopRequireDefault(_getTransformStyles);

		var _OrientationShape = __webpack_require__(8);

		var _OrientationShape2 = _interopRequireDefault(_OrientationShape);

		var _constants = __webpack_require__(9);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { 'default': obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var propTypes = {
			enableOutsideDays: _react.PropTypes.bool,
			firstVisibleMonthIndex: _react.PropTypes.number,
			initialMonth: _reactMomentProptypes2['default'].momentObj,
			isAnimating: _react.PropTypes.bool,
			numberOfMonths: _react.PropTypes.number,
			modifiers: _react.PropTypes.object,
			orientation: _OrientationShape2['default'],
			onDayClick: _react.PropTypes.func,
			onDayMouseDown: _react.PropTypes.func,
			onDayMouseUp: _react.PropTypes.func,
			onDayMouseEnter: _react.PropTypes.func,
			onDayMouseLeave: _react.PropTypes.func,
			onDayTouchStart: _react.PropTypes.func,
			onDayTouchEnd: _react.PropTypes.func,
			onDayTouchTap: _react.PropTypes.func,
			onMonthTransitionEnd: _react.PropTypes.func,
			transformValue: _react.PropTypes.string,

			// i18n
			monthFormat: _react.PropTypes.string
		};

		var defaultProps = {
			enableOutsideDays: false,
			firstVisibleMonthIndex: 0,
			initialMonth: (0, _moment2['default'])(),
			isAnimating: false,
			numberOfMonths: 1,
			modifiers: {},
			orientation: _constants.HORIZONTAL_ORIENTATION,
			onDayClick: function () {
				function onDayClick() {}

				return onDayClick;
			}(),
			onDayMouseDown: function () {
				function onDayMouseDown() {}

				return onDayMouseDown;
			}(),
			onDayMouseUp: function () {
				function onDayMouseUp() {}

				return onDayMouseUp;
			}(),
			onDayMouseEnter: function () {
				function onDayMouseEnter() {}

				return onDayMouseEnter;
			}(),
			onDayMouseLeave: function () {
				function onDayMouseLeave() {}

				return onDayMouseLeave;
			}(),
			onDayTouchStart: function () {
				function onDayTouchStart() {}

				return onDayTouchStart;
			}(),
			onDayTouchEnd: function () {
				function onDayTouchEnd() {}

				return onDayTouchEnd;
			}(),
			onDayTouchTap: function () {
				function onDayTouchTap() {}

				return onDayTouchTap;
			}(),
			onMonthTransitionEnd: function () {
				function onMonthTransitionEnd() {}

				return onMonthTransitionEnd;
			}(),

			transform: 'none',

			// i18n
			monthFormat: 'MMMM YYYY' };

		var CalendarMonthGrid = function (_React$Component) {
			_inherits(CalendarMonthGrid, _React$Component);

			function CalendarMonthGrid(props) {
				_classCallCheck(this, CalendarMonthGrid);

				var _this = _possibleConstructorReturn(this, (CalendarMonthGrid.__proto__ || Object.getPrototypeOf(CalendarMonthGrid)).call(this, props));

				_this.isTransitionEndSupported = (0, _isTransitionEndSupported2['default'])();
				_this.onTransitionEnd = _this.onTransitionEnd.bind(_this);
				return _this;
			}

			_createClass(CalendarMonthGrid, [{
				key: 'componentDidMount',
				value: function () {
					function componentDidMount() {
						this.container = _reactDom2['default'].findDOMNode(this.containerRef);
						this.container.addEventListener('transitionend', this.onTransitionEnd);
					}

					return componentDidMount;
				}()
			}, {
				key: 'shouldComponentUpdate',
				value: function () {
					function shouldComponentUpdate(nextProps, nextState) {
						return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
					}

					return shouldComponentUpdate;
				}()
			}, {
				key: 'componentDidUpdate',
				value: function () {
					function componentDidUpdate() {
						var _props = this.props;
						var isAnimating = _props.isAnimating;
						var onMonthTransitionEnd = _props.onMonthTransitionEnd;

						// For IE9, immediately call onMonthTransitionEnd instead of
						// waiting for the animation to complete

						if (!this.isTransitionEndSupported && isAnimating) {
							onMonthTransitionEnd();
						}
					}

					return componentDidUpdate;
				}()
			}, {
				key: 'componentWillUnmount',
				value: function () {
					function componentWillUnmount() {
						this.container.removeEventListener('transitionend', this.onTransitionEnd);
					}

					return componentWillUnmount;
				}()
			}, {
				key: 'onTransitionEnd',
				value: function () {
					function onTransitionEnd() {
						this.props.onMonthTransitionEnd();
					}

					return onTransitionEnd;
				}()
			}, {
				key: 'render',
				value: function () {
					function render() {
						var _this2 = this;

						var _props2 = this.props;
						var enableOutsideDays = _props2.enableOutsideDays;
						var firstVisibleMonthIndex = _props2.firstVisibleMonthIndex;
						var initialMonth = _props2.initialMonth;
						var isAnimating = _props2.isAnimating;
						var modifiers = _props2.modifiers;
						var numberOfMonths = _props2.numberOfMonths;
						var monthFormat = _props2.monthFormat;
						var orientation = _props2.orientation;
						var transformValue = _props2.transformValue;
						var onDayMouseEnter = _props2.onDayMouseEnter;
						var onDayMouseLeave = _props2.onDayMouseLeave;
						var onDayMouseDown = _props2.onDayMouseDown;
						var onDayMouseUp = _props2.onDayMouseUp;
						var onDayClick = _props2.onDayClick;
						var onDayTouchStart = _props2.onDayTouchStart;
						var onDayTouchEnd = _props2.onDayTouchEnd;
						var onDayTouchTap = _props2.onDayTouchTap;
						var onMonthTransitionEnd = _props2.onMonthTransitionEnd;

						var month = initialMonth.clone().subtract(1, 'month');

						var months = [];
						for (var i = 0; i < numberOfMonths + 2; i++) {
							var isVisible = i >= firstVisibleMonthIndex && i < firstVisibleMonthIndex + numberOfMonths;

							months.push(_react2['default'].createElement(_CalendarMonth2['default'], {
								key: month.format('MM-YY'),
								month: month,
								isVisible: isVisible,
								enableOutsideDays: enableOutsideDays,
								modifiers: modifiers,
								monthFormat: monthFormat,
								orientation: orientation,
								onDayMouseEnter: onDayMouseEnter,
								onDayMouseLeave: onDayMouseLeave,
								onDayMouseDown: onDayMouseDown,
								onDayMouseUp: onDayMouseUp,
								onDayClick: onDayClick,
								onDayTouchStart: onDayTouchStart,
								onDayTouchEnd: onDayTouchEnd,
								onDayTouchTap: onDayTouchTap
							}));
							month = month.clone().add(1, 'month');
						}

						var className = (0, _classnames2['default'])('CalendarMonthGrid', {
							'CalendarMonthGrid--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
							'CalendarMonthGrid--vertical': orientation === _constants.VERTICAL_ORIENTATION,
							'CalendarMonthGrid--animating': isAnimating
						});

						return _react2['default'].createElement('div', {
							ref: function () {
								function ref(_ref) {
									_this2.containerRef = _ref;
								}

								return ref;
							}(),
							className: className,
							style: (0, _getTransformStyles2['default'])(transformValue),
							onTransitionEnd: onMonthTransitionEnd
						}, months);
					}

					return render;
				}()
			}]);

			return CalendarMonthGrid;
		}(_react2['default'].Component);

		exports['default'] = CalendarMonthGrid;

		CalendarMonthGrid.propTypes = propTypes;
		CalendarMonthGrid.defaultProps = defaultProps;

		/***/
	},
	/* 1 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(2);

		/***/
	},
	/* 2 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(71);

		/***/
	},
	/* 3 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(76);

		/***/
	},
	/* 4 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(3);

		/***/
	},
	/* 5 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(4);

		/***/
	},,,
	/* 6 */
	/* 7 */
	/* 8 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(72);

		/***/
	},
	/* 9 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(5);

		/***/
	},
	/* 10 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(6);

		/***/
	},
	/* 11 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(78);

		/***/
	},
	/* 12 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(81);

		/***/
	},
	/* 13 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(73);

		/***/
	}
	/******/]);

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var moment = __webpack_require__(3);
	var momentValidationWrapper = __webpack_require__(77);

	moment.createFromInputFallback = function(config) {
	  config._d = new Date(config._i);
	};

	var ANONYMOUS = '<<anonymous>>';

	var ReactPropTypeLocationNames = {
	  prop : 'prop',
	  context : 'context',
	  childContext : 'child context',
	};

	function createMomentChecker(type, typeValidator, validator, momentType) {

	  function propValidator(isRequired, props, propName, componentName, location, propFullName) {

	    if (isRequired) {
	      var locationName = ReactPropTypeLocationNames[ location ];
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	      if (!props.hasOwnProperty(propName)) {
	        return new Error(
	          'Required ' + locationName + ' `' + propFullName +
	          '` was not specified in `' +
	          componentName + '`.'
	        );
	      }
	    }

	    var propValue = props[ propName ];
	    var propType = typeof propValue;

	    if (typeof propValue === 'undefined' || propValue === null) {
	      return null;
	    }

	    if (typeValidator && !typeValidator(propValue)) {
	      return new Error(
	        'Invalid input type: `' + propName + '` of type `' + propType + '` ' +
	        'supplied to `' + componentName + '`, expected `' + type + '`.'
	      );
	    }

	    if (! validator(propValue)) {
	      return new Error(
	        'Invalid ' + location + ' `' + propName + '` of type `' + propType + '` ' +
	        'supplied to `' + componentName + '`, expected `' + momentType + '`.'
	      );
	    }

	    return null;

	  }

	  var requiredPropValidator = propValidator.bind(null, false);
	  requiredPropValidator.isRequired = propValidator.bind(null, true);

	  return requiredPropValidator;

	}

	module.exports = {

	  momentObj : createMomentChecker(
	    'object',
	    function(obj) {
	      return typeof obj === 'object';
	    },
	    function isValid(value) {
	      return momentValidationWrapper.isValidMoment(value);
	    },
	    'Moment'
	  ),

	  momentString : createMomentChecker(
	    'string',
	    function(str) {
	      return typeof str === 'string';
	    },
	    function isValid(value) {
	      return momentValidationWrapper.isValidMoment(moment(value));
	    },
	    'Moment'
	  ),

	  momentDurationObj : createMomentChecker(
	    'object',
	    function(obj) {
	      return typeof obj === 'object';
	    },
	    function isValid(value) {
	      return moment.isDuration(value);
	    },
	    'Duration'
	  ),

	};


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var moment = __webpack_require__(3);

	function isValidMoment(testMoment) {
	  if (typeof testMoment.isValid === 'function') {
	    // moment 1.7.0+
	    return testMoment.isValid();
	  }

	  return ! isNaN(testMoment);
	}

	module.exports = {
	  isValidMoment : isValidMoment,
	}


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.getModifiersForDay = getModifiersForDay;
		exports['default'] = CalendarMonth;

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		var _reactMomentProptypes = __webpack_require__(3);

		var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

		var _moment = __webpack_require__(4);

		var _moment2 = _interopRequireDefault(_moment);

		var _classnames = __webpack_require__(5);

		var _classnames2 = _interopRequireDefault(_classnames);

		var _CalendarDay = __webpack_require__(6);

		var _CalendarDay2 = _interopRequireDefault(_CalendarDay);

		var _getCalendarMonthWeeks = __webpack_require__(7);

		var _getCalendarMonthWeeks2 = _interopRequireDefault(_getCalendarMonthWeeks);

		var _OrientationShape = __webpack_require__(8);

		var _OrientationShape2 = _interopRequireDefault(_OrientationShape);

		var _constants = __webpack_require__(9);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { 'default': obj };
		}

		var propTypes = {
			month: _reactMomentProptypes2['default'].momentObj,
			isVisible: _react.PropTypes.bool,
			enableOutsideDays: _react.PropTypes.bool,
			modifiers: _react.PropTypes.object,
			orientation: _OrientationShape2['default'],
			onDayClick: _react.PropTypes.func,
			onDayMouseDown: _react.PropTypes.func,
			onDayMouseUp: _react.PropTypes.func,
			onDayMouseEnter: _react.PropTypes.func,
			onDayMouseLeave: _react.PropTypes.func,
			onDayTouchStart: _react.PropTypes.func,
			onDayTouchEnd: _react.PropTypes.func,
			onDayTouchTap: _react.PropTypes.func,

			// i18n
			monthFormat: _react.PropTypes.string
		};

		var defaultProps = {
			month: (0, _moment2['default'])(),
			isVisible: true,
			enableOutsideDays: false,
			modifiers: {},
			orientation: _constants.HORIZONTAL_ORIENTATION,
			onDayClick: function () {
				function onDayClick() {}

				return onDayClick;
			}(),
			onDayMouseDown: function () {
				function onDayMouseDown() {}

				return onDayMouseDown;
			}(),
			onDayMouseUp: function () {
				function onDayMouseUp() {}

				return onDayMouseUp;
			}(),
			onDayMouseEnter: function () {
				function onDayMouseEnter() {}

				return onDayMouseEnter;
			}(),
			onDayMouseLeave: function () {
				function onDayMouseLeave() {}

				return onDayMouseLeave;
			}(),
			onDayTouchStart: function () {
				function onDayTouchStart() {}

				return onDayTouchStart;
			}(),
			onDayTouchEnd: function () {
				function onDayTouchEnd() {}

				return onDayTouchEnd;
			}(),
			onDayTouchTap: function () {
				function onDayTouchTap() {}

				return onDayTouchTap;
			}(),

			// i18n
			monthFormat: 'MMMM YYYY' };

		function getModifiersForDay(modifiers, day) {
			return day ? Object.keys(modifiers).filter(function (key) {
				return modifiers[key](day);
			}) : [];
		}

		function CalendarMonth(props) {
			var month = props.month;
			var monthFormat = props.monthFormat;
			var orientation = props.orientation;
			var isVisible = props.isVisible;
			var modifiers = props.modifiers;
			var enableOutsideDays = props.enableOutsideDays;
			var onDayClick = props.onDayClick;
			var onDayMouseDown = props.onDayMouseDown;
			var onDayMouseUp = props.onDayMouseUp;
			var onDayMouseEnter = props.onDayMouseEnter;
			var onDayMouseLeave = props.onDayMouseLeave;
			var onDayTouchStart = props.onDayTouchStart;
			var onDayTouchEnd = props.onDayTouchEnd;
			var onDayTouchTap = props.onDayTouchTap;

			var monthTitle = month.format(monthFormat);

			var calendarMonthClasses = (0, _classnames2['default'])('CalendarMonth', {
				'CalendarMonth--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
				'CalendarMonth--vertical': orientation === _constants.VERTICAL_ORIENTATION
			});

			return _react2['default'].createElement('div', { className: calendarMonthClasses, 'data-visible': isVisible }, _react2['default'].createElement('table', null, _react2['default'].createElement('caption', { className: 'CalendarMonth__caption js-CalendarMonth__caption' }, _react2['default'].createElement('strong', null, monthTitle)), _react2['default'].createElement('tbody', { className: 'js-CalendarMonth__grid' }, (0, _getCalendarMonthWeeks2['default'])(month, enableOutsideDays).map(function (week, i) {
				return _react2['default'].createElement('tr', { key: i }, week.map(function (day, j) {
					var modifiersForDay = getModifiersForDay(modifiers, day);
					var className = (0, _classnames2['default'])('CalendarMonth__day', {
						'CalendarMonth__day--outside': !day || day.month() !== month.month()
					}, modifiersForDay.map(function (mod) {
						return 'CalendarMonth__day--' + String(mod);
					}));

					return _react2['default'].createElement('td', { className: className, key: j }, day && _react2['default'].createElement(_CalendarDay2['default'], {
						day: day,
						modifiers: modifiersForDay,
						onDayMouseEnter: onDayMouseEnter,
						onDayMouseLeave: onDayMouseLeave,
						onDayMouseDown: onDayMouseDown,
						onDayMouseUp: onDayMouseUp,
						onDayClick: onDayClick,
						onDayTouchStart: onDayTouchStart,
						onDayTouchEnd: onDayTouchEnd,
						onDayTouchTap: onDayTouchTap
					}));
				}));
			}))));
		}

		CalendarMonth.propTypes = propTypes;
		CalendarMonth.defaultProps = defaultProps;

		/***/
	},
	/* 1 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(2);

		/***/
	},,
	/* 2 */
	/* 3 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(76);

		/***/
	},
	/* 4 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(3);

		/***/
	},
	/* 5 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(4);

		/***/
	},
	/* 6 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(79);

		/***/
	},
	/* 7 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(80);

		/***/
	},
	/* 8 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(72);

		/***/
	},
	/* 9 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(5);

		/***/
	}
	/******/]);

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {

		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};

		Object.defineProperty(exports, "__esModule", {
			value: true
		});
		exports.TOUCHSTART_TIMEOUT = undefined;

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		var _reactAddonsShallowCompare = __webpack_require__(2);

		var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

		var _reactMomentProptypes = __webpack_require__(3);

		var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

		var _moment = __webpack_require__(4);

		var _moment2 = _interopRequireDefault(_moment);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { 'default': obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var TOUCHSTART_TIMEOUT = exports.TOUCHSTART_TIMEOUT = 200;

		var propTypes = {
			day: _reactMomentProptypes2['default'].momentObj,
			modifiers: _react.PropTypes.arrayOf(_react.PropTypes.string),
			onDayClick: _react.PropTypes.func,
			onDayMouseDown: _react.PropTypes.func,
			onDayMouseUp: _react.PropTypes.func,
			onDayMouseEnter: _react.PropTypes.func,
			onDayMouseLeave: _react.PropTypes.func,
			onDayTouchStart: _react.PropTypes.func,
			onDayTouchEnd: _react.PropTypes.func,
			onDayTouchTap: _react.PropTypes.func
		};

		var defaultProps = {
			day: (0, _moment2['default'])(),
			modifiers: [],
			onDayClick: function () {
				function onDayClick() {}

				return onDayClick;
			}(),
			onDayMouseDown: function () {
				function onDayMouseDown() {}

				return onDayMouseDown;
			}(),
			onDayMouseUp: function () {
				function onDayMouseUp() {}

				return onDayMouseUp;
			}(),
			onDayMouseEnter: function () {
				function onDayMouseEnter() {}

				return onDayMouseEnter;
			}(),
			onDayMouseLeave: function () {
				function onDayMouseLeave() {}

				return onDayMouseLeave;
			}(),
			onDayTouchStart: function () {
				function onDayTouchStart() {}

				return onDayTouchStart;
			}(),
			onDayTouchEnd: function () {
				function onDayTouchEnd() {}

				return onDayTouchEnd;
			}(),
			onDayTouchTap: function () {
				function onDayTouchTap() {}

				return onDayTouchTap;
			}()
		};

		var CalendarDay = function (_React$Component) {
			_inherits(CalendarDay, _React$Component);

			function CalendarDay(props) {
				_classCallCheck(this, CalendarDay);

				var _this = _possibleConstructorReturn(this, (CalendarDay.__proto__ || Object.getPrototypeOf(CalendarDay)).call(this, props));

				_this.hasActiveTouchStart = false;
				return _this;
			}

			_createClass(CalendarDay, [{
				key: 'shouldComponentUpdate',
				value: function () {
					function shouldComponentUpdate(nextProps, nextState) {
						return (0, _reactAddonsShallowCompare2['default'])(this, nextProps, nextState);
					}

					return shouldComponentUpdate;
				}()
			}, {
				key: 'handleDayClick',
				value: function () {
					function handleDayClick(day, modifiers, e) {
						this.props.onDayClick(day, modifiers, e);
					}

					return handleDayClick;
				}()
			}, {
				key: 'handleDayMouseDown',
				value: function () {
					function handleDayMouseDown(day, modifiers, e) {
						this.props.onDayMouseDown(day, modifiers, e);
					}

					return handleDayMouseDown;
				}()
			}, {
				key: 'handleDayMouseUp',
				value: function () {
					function handleDayMouseUp(day, modifiers, e) {
						this.props.onDayMouseUp(day, modifiers, e);
					}

					return handleDayMouseUp;
				}()
			}, {
				key: 'handleDayMouseEnter',
				value: function () {
					function handleDayMouseEnter(day, modifiers, e) {
						this.props.onDayMouseEnter(day, modifiers, e);
					}

					return handleDayMouseEnter;
				}()
			}, {
				key: 'handleDayMouseLeave',
				value: function () {
					function handleDayMouseLeave(day, modifiers, e) {
						this.props.onDayMouseLeave(day, modifiers, e);
					}

					return handleDayMouseLeave;
				}()
			}, {
				key: 'handleDayTouchStart',
				value: function () {
					function handleDayTouchStart(day, modifiers, e) {
						var _this2 = this;

						this.hasActiveTouchStart = true;
						setTimeout(function () {
							_this2.hasActiveTouchStart = false;
						}, TOUCHSTART_TIMEOUT);

						this.props.onDayTouchStart(day, modifiers, e);
					}

					return handleDayTouchStart;
				}()
			}, {
				key: 'handleDayTouchEnd',
				value: function () {
					function handleDayTouchEnd(day, modifiers, e) {
						if (this.hasActiveTouchStart) {
							this.hasActiveTouchStart = false;
							this.handleDayTouchTap(day, modifiers, e);
						}

						this.props.onDayTouchEnd(day, modifiers, e);
					}

					return handleDayTouchEnd;
				}()
			}, {
				key: 'handleDayTouchTap',
				value: function () {
					function handleDayTouchTap(day, modifiers, e) {
						this.props.onDayTouchTap(day, modifiers, e);
					}

					return handleDayTouchTap;
				}()
			}, {
				key: 'render',
				value: function () {
					function render() {
						var _this3 = this;

						var _props = this.props;
						var day = _props.day;
						var modifiers = _props.modifiers;

						return _react2['default'].createElement('div', {
							className: 'CalendarDay',
							onMouseEnter: function () {
								function onMouseEnter(e) {
									return _this3.handleDayMouseEnter(day, modifiers, e);
								}

								return onMouseEnter;
							}(),
							onMouseLeave: function () {
								function onMouseLeave(e) {
									return _this3.handleDayMouseLeave(day, modifiers, e);
								}

								return onMouseLeave;
							}(),
							onMouseDown: function () {
								function onMouseDown(e) {
									return _this3.handleDayMouseDown(day, modifiers, e);
								}

								return onMouseDown;
							}(),
							onMouseUp: function () {
								function onMouseUp(e) {
									return _this3.handleDayMouseUp(day, modifiers, e);
								}

								return onMouseUp;
							}(),
							onClick: function () {
								function onClick(e) {
									return _this3.handleDayClick(day, modifiers, e);
								}

								return onClick;
							}(),
							onTouchStart: function () {
								function onTouchStart(e) {
									return _this3.handleDayTouchStart(day, modifiers, e);
								}

								return onTouchStart;
							}(),
							onTouchEnd: function () {
								function onTouchEnd(e) {
									return _this3.handleDayTouchEnd(day, modifiers, e);
								}

								return onTouchEnd;
							}()
						}, _react2['default'].createElement('span', { className: 'CalendarDay__day' }, day.format('D')));
					}

					return render;
				}()
			}]);

			return CalendarDay;
		}(_react2['default'].Component);

		exports['default'] = CalendarDay;

		CalendarDay.propTypes = propTypes;
		CalendarDay.defaultProps = defaultProps;

		/***/
	},
	/* 1 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(2);

		/***/
	},
	/* 2 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(71);

		/***/
	},
	/* 3 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(76);

		/***/
	},
	/* 4 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(3);

		/***/
	}
	/******/]);

/***/ },
/* 80 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = getCalendarMonthWeeks;
	function getCalendarMonthWeeks(month, enableOutsideDays) {
	  // set utc offset to get correct dates in future (when timezone changes)
	  var baseDate = month.clone();
	  var firstOfMonth = baseDate.clone().startOf('month').hour(12);
	  var lastOfMonth = baseDate.clone().endOf('month').hour(12);

	  var currentDay = firstOfMonth.clone();
	  var currentWeek = [];
	  var weeksInMonth = [];

	  // days belonging to the previous month
	  for (var i = 0; i < currentDay.weekday(); i++) {
	    var prevDay = enableOutsideDays && currentDay.clone().subtract(i + 1, 'day');
	    currentWeek.unshift(prevDay);
	  }

	  while (currentDay < lastOfMonth) {
	    currentWeek.push(currentDay.clone());
	    currentDay.add(1, 'd');

	    if (currentDay.weekday() === 0) {
	      weeksInMonth.push(currentWeek);
	      currentWeek = [];
	    }
	  }

	  // weekday() returns the index of the day of the week according to the locale
	  // this means if the week starts on Monday, weekday() will return 0 for a Monday date, not 1
	  if (currentDay.weekday() !== 0) {
	    // days belonging to the next month
	    for (var k = currentDay.weekday(), count = 0; k < 7; k++, count++) {
	      var nextDay = enableOutsideDays && currentDay.clone().add(count, 'day');
	      currentWeek.push(nextDay);
	    }

	    weeksInMonth.push(currentWeek);
	  }

	  return weeksInMonth;
	}

/***/ },
/* 81 */
/***/ function(module, exports) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = isTransitionEndSupported;
	function isTransitionEndSupported() {
	  return !!(typeof window !== 'undefined' && 'TransitionEvent' in window);
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _reactMomentProptypes = __webpack_require__(76);

	var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

	var _FocusedInputShape = __webpack_require__(83);

	var _FocusedInputShape2 = _interopRequireDefault(_FocusedInputShape);

	var _OrientationShape = __webpack_require__(72);

	var _OrientationShape2 = _interopRequireDefault(_OrientationShape);

	var _AnchorDirectionShape = __webpack_require__(84);

	var _AnchorDirectionShape2 = _interopRequireDefault(_AnchorDirectionShape);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	exports['default'] = {
	  startDate: _reactMomentProptypes2['default'].momentObj,
	  endDate: _reactMomentProptypes2['default'].momentObj,
	  focusedInput: _FocusedInputShape2['default'],
	  minimumNights: _react.PropTypes.number,
	  isDayBlocked: _react.PropTypes.func,
	  isOutsideRange: _react.PropTypes.func,
	  enableOutsideDays: _react.PropTypes.bool,
	  reopenPickerOnClearDates: _react.PropTypes.bool,
	  numberOfMonths: _react.PropTypes.number,
	  showClearDates: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  required: _react.PropTypes.bool,

	  orientation: _OrientationShape2['default'],
	  anchorDirection: _AnchorDirectionShape2['default'],
	  // portal options
	  withPortal: _react.PropTypes.bool,
	  withFullScreenPortal: _react.PropTypes.bool,

	  startDateId: _react.PropTypes.string,
	  startDatePlaceholderText: _react.PropTypes.string,
	  endDateId: _react.PropTypes.string,
	  endDatePlaceholderText: _react.PropTypes.string,

	  initialVisibleMonth: _react.PropTypes.func,
	  onDatesChange: _react.PropTypes.func,
	  onFocusChange: _react.PropTypes.func,
	  onPrevMonthClick: _react.PropTypes.func,
	  onNextMonthClick: _react.PropTypes.func,

	  // i18n
	  displayFormat: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	  monthFormat: _react.PropTypes.string,
	  phrases: _react.PropTypes.shape({
	    closeDatePicker: _react.PropTypes.node,
	    clearDates: _react.PropTypes.node
	  })
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _constants = __webpack_require__(5);

	exports['default'] = _react.PropTypes.oneOf([_constants.START_DATE, _constants.END_DATE]);

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _constants = __webpack_require__(5);

	exports['default'] = _react.PropTypes.oneOf([_constants.ANCHOR_LEFT, _constants.ANCHOR_RIGHT]);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	module.exports =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/[
	/* 0 */
	/***/function (module, exports, __webpack_require__) {

		var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
			return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		} : function (obj) {
			return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
		};

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		var _moment = __webpack_require__(4);

		var _moment2 = _interopRequireDefault(_moment);

		var _classnames = __webpack_require__(5);

		var _classnames2 = _interopRequireDefault(_classnames);

		var _reactPortal = __webpack_require__(15);

		var _reactPortal2 = _interopRequireDefault(_reactPortal);

		var _arrayIncludes = __webpack_require__(16);

		var _arrayIncludes2 = _interopRequireDefault(_arrayIncludes);

		var _reactTether = __webpack_require__(17);

		var _reactTether2 = _interopRequireDefault(_reactTether);

		var _toMomentObject = __webpack_require__(18);

		var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

		var _toLocalizedDateString = __webpack_require__(19);

		var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

		var _SingleDatePickerInput = __webpack_require__(35);

		var _SingleDatePickerInput2 = _interopRequireDefault(_SingleDatePickerInput);

		var _DayPicker = __webpack_require__(25);

		var _DayPicker2 = _interopRequireDefault(_DayPicker);

		var _close = __webpack_require__(26);

		var _close2 = _interopRequireDefault(_close);

		var _isInclusivelyAfterDay = __webpack_require__(20);

		var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

		var _isSameDay = __webpack_require__(23);

		var _isSameDay2 = _interopRequireDefault(_isSameDay);

		var _SingleDatePickerShape = __webpack_require__(36);

		var _SingleDatePickerShape2 = _interopRequireDefault(_SingleDatePickerShape);

		var _constants = __webpack_require__(9);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { 'default': obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var propTypes = _SingleDatePickerShape2['default'];

		var defaultProps = {
			date: null,
			focused: false,
			disabled: false,
			required: false,

			onDateChange: function () {
				function onDateChange() {}

				return onDateChange;
			}(),
			onFocusChange: function () {
				function onFocusChange() {}

				return onFocusChange;
			}(),

			isDayBlocked: function () {
				function isDayBlocked() {
					return false;
				}

				return isDayBlocked;
			}(),
			disabledDays: [],
			isOutsideRange: function () {
				function isOutsideRange(day) {
					return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
				}

				return isOutsideRange;
			}(),
			enableOutsideDays: false,
			numberOfMonths: 2,
			orientation: _constants.HORIZONTAL_ORIENTATION,
			anchorDirection: _constants.ANCHOR_LEFT,
			withPortal: false,
			withFullScreenPortal: false,
			initialVisibleMonth: function () {
				function initialVisibleMonth() {
					return (0, _moment2['default'])();
				}

				return initialVisibleMonth;
			}(),

			onPrevMonthClick: function () {
				function onPrevMonthClick() {}

				return onPrevMonthClick;
			}(),
			onNextMonthClick: function () {
				function onNextMonthClick() {}

				return onNextMonthClick;
			}(),

			// i18n
			displayFormat: function () {
				function displayFormat() {
					return _moment2['default'].localeData().longDateFormat('L');
				}

				return displayFormat;
			}(),
			monthFormat: 'MMMM YYYY',
			phrases: {
				closeDatePicker: 'Close'
			}
		};

		var SingleDatePicker = function (_React$Component) {
			_inherits(SingleDatePicker, _React$Component);

			function SingleDatePicker(props) {
				_classCallCheck(this, SingleDatePicker);

				var _this = _possibleConstructorReturn(this, (SingleDatePicker.__proto__ || Object.getPrototypeOf(SingleDatePicker)).call(this, props));

				_this.state = {
					hoverDate: null
				};

				_this.onDayMouseEnter = _this.onDayMouseEnter.bind(_this);
				_this.onDayMouseLeave = _this.onDayMouseLeave.bind(_this);
				_this.onDayClick = _this.onDayClick.bind(_this);

				_this.onChange = _this.onChange.bind(_this);
				_this.onFocus = _this.onFocus.bind(_this);
				_this.onClearFocus = _this.onClearFocus.bind(_this);
				return _this;
			}

			_createClass(SingleDatePicker, [{
				key: 'onChange',
				value: function () {
					function onChange(dateString) {
						var _props = this.props;
						var isOutsideRange = _props.isOutsideRange;
						var onDateChange = _props.onDateChange;
						var onFocusChange = _props.onFocusChange;

						var date = (0, _toMomentObject2['default'])(dateString, this.getDisplayFormat());

						var isValid = date && !isOutsideRange(date);
						if (isValid) {
							onDateChange(date);
							onFocusChange({ focused: false });
						} else {
							onDateChange(null);
						}
					}

					return onChange;
				}()
			}, {
				key: 'onDayClick',
				value: function () {
					function onDayClick(day, modifiers, e) {
						if (e) e.preventDefault();
						if ((0, _arrayIncludes2['default'])(modifiers, 'blocked')) return;

						this.props.onDateChange(day);
						this.props.onFocusChange({ focused: null });
					}

					return onDayClick;
				}()
			}, {
				key: 'onDayMouseEnter',
				value: function () {
					function onDayMouseEnter(day) {
						this.setState({
							hoverDate: day
						});
					}

					return onDayMouseEnter;
				}()
			}, {
				key: 'onDayMouseLeave',
				value: function () {
					function onDayMouseLeave() {
						this.setState({
							hoverDate: null
						});
					}

					return onDayMouseLeave;
				}()
			}, {
				key: 'onFocus',
				value: function () {
					function onFocus() {
						if (!this.props.disabled) {
							this.props.onFocusChange({ focused: true });
						}
					}

					return onFocus;
				}()
			}, {
				key: 'onClearFocus',
				value: function () {
					function onClearFocus() {
						var _props2 = this.props;
						var focused = _props2.focused;
						var onFocusChange = _props2.onFocusChange;

						if (!focused) return;

						onFocusChange({ focused: false });
					}

					return onClearFocus;
				}()
			}, {
				key: 'getDateString',
				value: function () {
					function getDateString(date) {
						var displayFormat = this.getDisplayFormat();
						if (date && displayFormat) {
							return date && date.format(displayFormat);
						}
						return (0, _toLocalizedDateString2['default'])(date);
					}

					return getDateString;
				}()
			}, {
				key: 'getDayPickerContainerClasses',
				value: function () {
					function getDayPickerContainerClasses() {
						var _props3 = this.props;
						var orientation = _props3.orientation;
						var withPortal = _props3.withPortal;
						var withFullScreenPortal = _props3.withFullScreenPortal;
						var anchorDirection = _props3.anchorDirection;
						var hoverDate = this.state.hoverDate;

						var dayPickerClassName = (0, _classnames2['default'])('SingleDatePicker__picker', {
							'SingleDatePicker__picker--direction-left': anchorDirection === _constants.ANCHOR_LEFT,
							'SingleDatePicker__picker--direction-right': anchorDirection === _constants.ANCHOR_RIGHT,
							'SingleDatePicker__picker--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
							'SingleDatePicker__picker--vertical': orientation === _constants.VERTICAL_ORIENTATION,
							'SingleDatePicker__picker--portal': withPortal || withFullScreenPortal,
							'SingleDatePicker__picker--full-screen-portal': withFullScreenPortal,
							'SingleDatePicker__picker--valid-date-hovered': hoverDate && !this.isBlocked(hoverDate)
						});

						return dayPickerClassName;
					}

					return getDayPickerContainerClasses;
				}()
			}, {
				key: 'getDisplayFormat',
				value: function () {
					function getDisplayFormat() {
						var displayFormat = this.props.displayFormat;

						return typeof displayFormat === 'string' ? displayFormat : displayFormat();
					}

					return getDisplayFormat;
				}()
			}, {
				key: 'isBlocked',
				value: function () {
					function isBlocked(day) {
						var _props4 = this.props;
						var isDayBlocked = _props4.isDayBlocked;
						var isOutsideRange = _props4.isOutsideRange;

						return isDayBlocked(day) || isOutsideRange(day);
					}

					return isBlocked;
				}()
			}, {
				key: 'isHovered',
				value: function () {
					function isHovered(day) {
						return (0, _isSameDay2['default'])(day, this.state.hoverDate);
					}

					return isHovered;
				}()
			}, {
				key: 'isSelected',
				value: function () {
					function isSelected(day) {
						return (0, _isSameDay2['default'])(day, this.props.date);
					}

					return isSelected;
				}()
			}, {
				key: 'maybeRenderDayPickerWithPortal',
				value: function () {
					function maybeRenderDayPickerWithPortal() {
						var _props5 = this.props;
						var focused = _props5.focused;
						var withPortal = _props5.withPortal;
						var withFullScreenPortal = _props5.withFullScreenPortal;

						if (withPortal || withFullScreenPortal) {
							return _react2['default'].createElement(_reactPortal2['default'], { isOpened: focused }, this.renderDayPicker());
						}

						return this.renderDayPicker();
					}

					return maybeRenderDayPickerWithPortal;
				}()
			}, {
				key: 'renderDayPicker',
				value: function () {
					function renderDayPicker() {
						var _this2 = this;

						var _props6 = this.props;
						var isDayBlocked = _props6.isDayBlocked;
						var isOutsideRange = _props6.isOutsideRange;
						var enableOutsideDays = _props6.enableOutsideDays;
						var numberOfMonths = _props6.numberOfMonths;
						var orientation = _props6.orientation;
						var monthFormat = _props6.monthFormat;
						var onPrevMonthClick = _props6.onPrevMonthClick;
						var onNextMonthClick = _props6.onNextMonthClick;
						var withPortal = _props6.withPortal;
						var withFullScreenPortal = _props6.withFullScreenPortal;
						var focused = _props6.focused;
						var initialVisibleMonth = _props6.initialVisibleMonth;

						var modifiers = {
							blocked: function () {
								function blocked(day) {
									return _this2.isBlocked(day);
								}

								return blocked;
							}(),
							'blocked-calendar': function () {
								function blockedCalendar(day) {
									return isDayBlocked(day);
								}

								return blockedCalendar;
							}(),
							'blocked-out-of-range': function () {
								function blockedOutOfRange(day) {
									return isOutsideRange(day);
								}

								return blockedOutOfRange;
							}(),
							valid: function () {
								function valid(day) {
									return !_this2.isBlocked(day);
								}

								return valid;
							}(),
							hovered: function () {
								function hovered(day) {
									return _this2.isHovered(day);
								}

								return hovered;
							}(),
							selected: function () {
								function selected(day) {
									return _this2.isSelected(day);
								}

								return selected;
							}()
						};

						var onOutsideClick = !withFullScreenPortal ? this.onClearFocus : undefined;

						return _react2['default'].createElement('div', { className: this.getDayPickerContainerClasses() }, _react2['default'].createElement(_DayPicker2['default'], {
							orientation: orientation,
							enableOutsideDays: enableOutsideDays,
							modifiers: modifiers,
							numberOfMonths: numberOfMonths,
							onDayMouseEnter: this.onDayMouseEnter,
							onDayMouseLeave: this.onDayMouseLeave,
							onDayMouseDown: this.onDayClick,
							onDayTouchTap: this.onDayClick,
							onPrevMonthClick: onPrevMonthClick,
							onNextMonthClick: onNextMonthClick,
							monthFormat: monthFormat,
							withPortal: withPortal || withFullScreenPortal,
							hidden: !focused,
							initialVisibleMonth: initialVisibleMonth,
							onOutsideClick: onOutsideClick
						}), withFullScreenPortal && _react2['default'].createElement('button', {
							className: 'SingleDatePicker__close',
							type: 'button',
							onClick: this.onClearFocus
						}, _react2['default'].createElement('span', { className: 'screen-reader-only' }, this.props.phrases.closeDatePicker), _react2['default'].createElement(_close2['default'], null)));
					}

					return renderDayPicker;
				}()
			}, {
				key: 'render',
				value: function () {
					function render() {
						var _props7 = this.props;
						var id = _props7.id;
						var placeholder = _props7.placeholder;
						var focused = _props7.focused;
						var disabled = _props7.disabled;
						var required = _props7.required;
						var date = _props7.date;
						var anchorDirection = _props7.anchorDirection;
						var withPortal = _props7.withPortal;
						var withFullScreenPortal = _props7.withFullScreenPortal;

						var dateString = this.getDateString(date);

						var tetherPinDirection = anchorDirection === _constants.ANCHOR_LEFT ? _constants.ANCHOR_RIGHT : _constants.ANCHOR_LEFT;

						return _react2['default'].createElement('div', { className: 'SingleDatePicker' }, _react2['default'].createElement(_reactTether2['default'], {
							attachment: 'top ' + String(anchorDirection),
							targetAttachment: 'bottom ' + String(anchorDirection),
							offset: '-23px 0',
							constraints: [{
								to: 'scrollParent',
								attachment: 'none',
								pin: [tetherPinDirection]
							}],
							className: (0, _classnames2['default'])({
								'SingleDatePicker__tether--show': focused,
								'SingleDatePicker__tether--invisible': !focused
							})
						}, _react2['default'].createElement(_SingleDatePickerInput2['default'], {
							id: id,
							placeholder: placeholder,
							focused: focused,
							disabled: disabled,
							required: required,
							showCaret: !withPortal && !withFullScreenPortal,
							dateValue: dateString,
							onChange: this.onChange,
							onFocus: this.onFocus,
							onKeyDownShiftTab: this.onClearFocus,
							onKeyDownTab: this.onClearFocus,
							border: true
						}), this.maybeRenderDayPickerWithPortal()));
					}

					return render;
				}()
			}]);

			return SingleDatePicker;
		}(_react2['default'].Component);

		exports['default'] = SingleDatePicker;

		SingleDatePicker.propTypes = propTypes;
		SingleDatePicker.defaultProps = defaultProps;

		/***/
	},
	/* 1 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(2);

		/***/
	},,,
	/* 2 */
	/* 3 */
	/* 4 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(3);

		/***/
	},
	/* 5 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(4);

		/***/
	},,,,
	/* 6 */
	/* 7 */
	/* 8 */
	/* 9 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(5);

		/***/
	},,,,,,
	/* 10 */
	/* 11 */
	/* 12 */
	/* 13 */
	/* 14 */
	/* 15 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(8);

		/***/
	},
	/* 16 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(34);

		/***/
	},
	/* 17 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(59);

		/***/
	},
	/* 18 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(62);

		/***/
	},
	/* 19 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(63);

		/***/
	},
	/* 20 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(64);

		/***/
	},,,
	/* 21 */
	/* 22 */
	/* 23 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(65);

		/***/
	},,
	/* 24 */
	/* 25 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(70);

		/***/
	},
	/* 26 */
	/***/function (module, exports, __webpack_require__) {

		Object.defineProperty(exports, "__esModule", {
			value: true
		});

		var _extends = Object.assign || function (target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}return target;
		};

		var _createClass = function () {
			function defineProperties(target, props) {
				for (var i = 0; i < props.length; i++) {
					var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
				}
			}return function (Constructor, protoProps, staticProps) {
				if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
			};
		}();

		var _react = __webpack_require__(1);

		var _react2 = _interopRequireDefault(_react);

		function _interopRequireDefault(obj) {
			return obj && obj.__esModule ? obj : { "default": obj };
		}

		function _classCallCheck(instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			}
		}

		function _possibleConstructorReturn(self, call) {
			if (!self) {
				throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			}return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
		}

		function _inherits(subClass, superClass) {
			if (typeof superClass !== "function" && superClass !== null) {
				throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
			}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
		}

		var SVG = function (_React$Component) {
			_inherits(SVG, _React$Component);

			function SVG() {
				_classCallCheck(this, SVG);

				return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
			}

			_createClass(SVG, [{
				key: "render",
				value: function () {
					function render() {
						return _react2["default"].createElement("svg", _extends({ viewBox: "0 0 12 12" }, this.props), _react2["default"].createElement("path", { fillRule: "evenodd", d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" }));
					}

					return render;
				}()
			}]);

			return SVG;
		}(_react2["default"].Component);

		exports["default"] = SVG;

		/***/
	},,,,,,,,,
	/* 27 */
	/* 28 */
	/* 29 */
	/* 30 */
	/* 31 */
	/* 32 */
	/* 33 */
	/* 34 */
	/* 35 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(86);

		/***/
	},
	/* 36 */
	/***/function (module, exports) {

		module.exports = __webpack_require__(87);

		/***/
	}
	/******/]);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/function (modules) {
		// webpackBootstrap
		/******/ // The module cache
		/******/var installedModules = {};

		/******/ // The require function
		/******/function __webpack_require__(moduleId) {

			/******/ // Check if module is in cache
			/******/if (installedModules[moduleId])
				/******/return installedModules[moduleId].exports;

			/******/ // Create a new module (and put it into the cache)
			/******/var module = installedModules[moduleId] = {
				/******/exports: {},
				/******/id: moduleId,
				/******/loaded: false
				/******/ };

			/******/ // Execute the module function
			/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			/******/ // Flag the module as loaded
			/******/module.loaded = true;

			/******/ // Return the exports of the module
			/******/return module.exports;
			/******/
		}

		/******/ // expose the modules object (__webpack_modules__)
		/******/__webpack_require__.m = modules;

		/******/ // expose the module cache
		/******/__webpack_require__.c = installedModules;

		/******/ // __webpack_public_path__
		/******/__webpack_require__.p = "";

		/******/ // Load entry module and return exports
		/******/return __webpack_require__(0);
		/******/
	}(
	/************************************************************************/
	/******/{

		/***/0:
		/***/function () {
			function _(module, exports, __webpack_require__) {

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports['default'] = SingleDatePickerInput;

				var _react = __webpack_require__(1);

				var _react2 = _interopRequireDefault(_react);

				var _DateInput = __webpack_require__(28);

				var _DateInput2 = _interopRequireDefault(_DateInput);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { 'default': obj };
				}

				var propTypes = {
					id: _react.PropTypes.string.isRequired,
					placeholder: _react.PropTypes.string, // also used as label
					dateValue: _react.PropTypes.string,
					border: _react.PropTypes.bool,
					focused: _react.PropTypes.bool,
					disabled: _react.PropTypes.bool,
					required: _react.PropTypes.bool,
					showCaret: _react.PropTypes.bool,

					onChange: _react.PropTypes.func,
					onFocus: _react.PropTypes.func,
					onKeyDownShiftTab: _react.PropTypes.func,
					onKeyDownTab: _react.PropTypes.func
				};

				var defaultProps = {
					placeholder: 'Select Date',
					dateValue: '',
					border: false,
					focused: false,
					disabled: false,
					required: false,
					showCaret: false,

					onChange: function () {
						function onChange() {}

						return onChange;
					}(),
					onFocus: function () {
						function onFocus() {}

						return onFocus;
					}(),
					onKeyDownShiftTab: function () {
						function onKeyDownShiftTab() {}

						return onKeyDownShiftTab;
					}(),
					onKeyDownTab: function () {
						function onKeyDownTab() {}

						return onKeyDownTab;
					}()
				};

				function SingleDatePickerInput(props) {
					var id = props.id;
					var placeholder = props.placeholder;
					var dateValue = props.dateValue;
					var focused = props.focused;
					var disabled = props.disabled;
					var required = props.required;
					var showCaret = props.showCaret;
					var onChange = props.onChange;
					var onFocus = props.onFocus;
					var onKeyDownShiftTab = props.onKeyDownShiftTab;
					var onKeyDownTab = props.onKeyDownTab;

					return _react2['default'].createElement('div', { className: 'SingleDatePickerInput' }, _react2['default'].createElement(_DateInput2['default'], {
						id: id,
						placeholder: placeholder // also used as label
						, dateValue: dateValue,
						focused: focused,
						disabled: disabled,
						required: required,
						showCaret: showCaret,

						onChange: onChange,
						onFocus: onFocus,
						onKeyDownShiftTab: onKeyDownShiftTab,
						onKeyDownTab: onKeyDownTab
					}));
				}

				SingleDatePickerInput.propTypes = propTypes;
				SingleDatePickerInput.defaultProps = defaultProps;

				/***/
			}

			return _;
		}(),

		/***/1:
		/***/function () {
			function _(module, exports) {

				module.exports = __webpack_require__(2);

				/***/
			}

			return _;
		}(),

		/***/28:
		/***/function () {
			function _(module, exports) {

				module.exports = __webpack_require__(69);

				/***/
			}

			return _;
		}()

		/******/ });

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _reactMomentProptypes = __webpack_require__(76);

	var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

	var _OrientationShape = __webpack_require__(72);

	var _OrientationShape2 = _interopRequireDefault(_OrientationShape);

	var _AnchorDirectionShape = __webpack_require__(84);

	var _AnchorDirectionShape2 = _interopRequireDefault(_AnchorDirectionShape);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	exports['default'] = {
	  id: _react.PropTypes.string.isRequired,
	  placeholder: _react.PropTypes.string,
	  date: _reactMomentProptypes2['default'].momentObj,
	  focused: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  required: _react.PropTypes.bool,

	  onDateChange: _react.PropTypes.func,
	  onFocusChange: _react.PropTypes.func,

	  isDayBlocked: _react.PropTypes.func,
	  isOutsideRange: _react.PropTypes.func,
	  enableOutsideDays: _react.PropTypes.bool,
	  numberOfMonths: _react.PropTypes.number,
	  orientation: _OrientationShape2['default'],
	  initialVisibleMonth: _react.PropTypes.func,
	  anchorDirection: _AnchorDirectionShape2['default'],

	  // portal options
	  withPortal: _react.PropTypes.bool,
	  withFullScreenPortal: _react.PropTypes.bool,

	  onPrevMonthClick: _react.PropTypes.func,
	  onNextMonthClick: _react.PropTypes.func,

	  // i18n
	  displayFormat: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
	  monthFormat: _react.PropTypes.string,
	  phrases: _react.PropTypes.shape({
	    closeDatePicker: _react.PropTypes.node
	  })
	};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports['default'] = toLocalizedDateString;

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	var _toMomentObject = __webpack_require__(62);

	var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

	var _constants = __webpack_require__(5);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function toLocalizedDateString(date, currentFormat) {
	  var dateObj = _moment2['default'].isMoment(date) ? date : (0, _toMomentObject2['default'])(date, currentFormat);
	  if (!dateObj) return null;

	  return dateObj.format(_constants.ISO_FORMAT);
	}

/***/ }
/******/ ]);