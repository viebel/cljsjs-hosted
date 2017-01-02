var ReactDateRange =
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

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _DateRangeJs = __webpack_require__(1);

	var _DateRangeJs2 = _interopRequireDefault(_DateRangeJs);

	var _CalendarJs = __webpack_require__(5);

	var _CalendarJs2 = _interopRequireDefault(_CalendarJs);

	var _defaultRangesJs = __webpack_require__(10);

	var _defaultRangesJs2 = _interopRequireDefault(_defaultRangesJs);

	exports['default'] = { DateRange: _DateRangeJs2['default'], Calendar: _CalendarJs2['default'], defaultRanges: _defaultRangesJs2['default'] };
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	var _utilsParseInputJs = __webpack_require__(4);

	var _utilsParseInputJs2 = _interopRequireDefault(_utilsParseInputJs);

	var _CalendarJs = __webpack_require__(5);

	var _CalendarJs2 = _interopRequireDefault(_CalendarJs);

	var _PredefinedRangesJs = __webpack_require__(9);

	var _PredefinedRangesJs2 = _interopRequireDefault(_PredefinedRangesJs);

	var _stylesJs = __webpack_require__(8);

	var _stylesJs2 = _interopRequireDefault(_stylesJs);

	var DateRange = (function (_Component) {
	  _inherits(DateRange, _Component);

	  function DateRange(props, context) {
	    _classCallCheck(this, DateRange);

	    _get(Object.getPrototypeOf(DateRange.prototype), 'constructor', this).call(this, props, context);

	    var format = props.format;
	    var linkedCalendars = props.linkedCalendars;
	    var theme = props.theme;

	    var startDate = (0, _utilsParseInputJs2['default'])(props.startDate, format);
	    var endDate = (0, _utilsParseInputJs2['default'])(props.endDate, format);

	    this.state = {
	      range: { startDate: startDate, endDate: endDate },
	      link: linkedCalendars && endDate
	    };

	    this.step = 0;
	    this.styles = (0, _stylesJs2['default'])(theme);
	  }

	  _createClass(DateRange, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var onInit = this.props.onInit;

	      onInit && onInit(this.state.range);
	    }
	  }, {
	    key: 'orderRange',
	    value: function orderRange(range) {
	      var startDate = range.startDate;
	      var endDate = range.endDate;

	      var swap = startDate.isAfter(endDate);

	      if (!swap) return range;

	      return {
	        startDate: endDate,
	        endDate: startDate
	      };
	    }
	  }, {
	    key: 'setRange',
	    value: function setRange(range, source) {
	      var onChange = this.props.onChange;

	      range = this.orderRange(range);

	      this.setState({ range: range });

	      onChange && onChange(range, source);
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(date, source) {
	      if (date.startDate && date.endDate) {
	        this.step = 0;
	        return this.setRange(date, source);
	      }

	      var _state$range = this.state.range;
	      var startDate = _state$range.startDate;
	      var endDate = _state$range.endDate;

	      var range = {
	        startDate: startDate,
	        endDate: endDate
	      };

	      switch (this.step) {
	        case 0:
	          range['startDate'] = date;
	          range['endDate'] = date;
	          this.step = 1;
	          break;

	        case 1:
	          range['endDate'] = date;
	          this.step = 0;
	          break;
	      }

	      this.setRange(range, source);
	    }
	  }, {
	    key: 'handleLinkChange',
	    value: function handleLinkChange(direction) {
	      var link = this.state.link;

	      this.setState({
	        link: link.clone().add(direction, 'months')
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      // Whenever date props changes, update state with parsed variant
	      if (newProps.startDate || newProps.endDate) {
	        var format = newProps.format || this.props.format;
	        var startDate = newProps.startDate && (0, _utilsParseInputJs2['default'])(newProps.startDate, format);
	        var endDate = newProps.endDate && (0, _utilsParseInputJs2['default'])(newProps.endDate, format);
	        var oldStartDate = this.props.startDate && (0, _utilsParseInputJs2['default'])(this.props.startDate, format);
	        var oldEndDate = this.props.endDate && (0, _utilsParseInputJs2['default'])(this.props.endDate, format);

	        if (!startDate.isSame(oldStartDate) || !endDate.isSame(oldEndDate)) {
	          this.setRange({
	            startDate: startDate || oldStartDate,
	            endDate: endDate || oldEndDate
	          });
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this = this;

	      var _props = this.props;
	      var ranges = _props.ranges;
	      var format = _props.format;
	      var linkedCalendars = _props.linkedCalendars;
	      var style = _props.style;
	      var calendars = _props.calendars;
	      var firstDayOfWeek = _props.firstDayOfWeek;
	      var minDate = _props.minDate;
	      var maxDate = _props.maxDate;
	      var classNames = _props.classNames;
	      var onlyClasses = _props.onlyClasses;
	      var _state = this.state;
	      var range = _state.range;
	      var link = _state.link;
	      var styles = this.styles;

	      var classes = _extends({}, _stylesJs.defaultClasses, classNames);

	      return _react2['default'].createElement(
	        'div',
	        { style: onlyClasses ? undefined : _extends({}, styles['DateRange'], style), className: classes.dateRange },
	        ranges && _react2['default'].createElement(_PredefinedRangesJs2['default'], {
	          format: format,
	          ranges: ranges,
	          range: range,
	          theme: styles,
	          onSelect: this.handleSelect.bind(this),
	          onlyClasses: onlyClasses,
	          classNames: classes }),
	        (function () {
	          var _calendars = [];
	          for (var i = Number(calendars) - 1; i >= 0; i--) {
	            _calendars.push(_react2['default'].createElement(_CalendarJs2['default'], {
	              key: i,
	              offset: -i,
	              link: linkedCalendars && link,
	              linkCB: _this.handleLinkChange.bind(_this),
	              range: range,
	              format: format,
	              firstDayOfWeek: firstDayOfWeek,
	              theme: styles,
	              minDate: minDate,
	              maxDate: maxDate,
	              onlyClasses: onlyClasses,
	              classNames: classes,
	              onChange: _this.handleSelect.bind(_this) }));
	          }
	          return _calendars;
	        })()
	      );
	    }
	  }]);

	  return DateRange;
	})(_react.Component);

	DateRange.defaultProps = {
	  linkedCalendars: false,
	  theme: {},
	  format: 'DD/MM/YYYY',
	  calendars: 2,
	  onlyClasses: false,
	  classNames: {}
	};

	DateRange.propTypes = {
	  format: _react.PropTypes.string,
	  firstDayOfWeek: _react.PropTypes.number,
	  calendars: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	  startDate: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.string]),
	  endDate: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.string]),
	  minDate: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.string]),
	  maxDate: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.string]),
	  dateLimit: _react.PropTypes.func,
	  ranges: _react.PropTypes.object,
	  linkedCalendars: _react.PropTypes.bool,
	  theme: _react.PropTypes.object,
	  onInit: _react.PropTypes.func,
	  onChange: _react.PropTypes.func,
	  onlyClasses: _react.PropTypes.bool,
	  classNames: _react.PropTypes.object
	};

	exports['default'] = DateRange;
	module.exports = exports['default'];

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

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = parseInput;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	function parseInput(input, format) {
	  var output = null;

	  if (typeof input === 'undefined' || typeof input === 'null' || !input || input === '') {
	    output = (0, _moment2['default'])().startOf('day');
	  } else if (typeof input === 'string') {
	    output = (0, _moment2['default'])(input, format).startOf('day');
	  } else if (typeof input === 'function') {
	    output = parseInput(input((0, _moment2['default'])().startOf('day')), format);
	  } else if (input._isAMomentObject) {
	    output = input.startOf('day').clone();
	  }

	  return output;
	}

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	var _utilsParseInputJs = __webpack_require__(4);

	var _utilsParseInputJs2 = _interopRequireDefault(_utilsParseInputJs);

	var _DayCellJs = __webpack_require__(6);

	var _DayCellJs2 = _interopRequireDefault(_DayCellJs);

	var _stylesJs = __webpack_require__(8);

	var _stylesJs2 = _interopRequireDefault(_stylesJs);

	function checkRange(dayMoment, range) {
	  return dayMoment.isBetween(range['startDate'], range['endDate']) || dayMoment.isBetween(range['endDate'], range['startDate']);
	}

	function checkStartEdge(dayMoment, range) {
	  var startDate = range.startDate;

	  return dayMoment.isSame(startDate);
	}

	function checkEndEdge(dayMoment, range) {
	  var endDate = range.endDate;

	  return dayMoment.isSame(endDate);
	}

	function isOusideMinMax(dayMoment, minDate, maxDate, format) {
	  return minDate && dayMoment.isBefore((0, _utilsParseInputJs2['default'])(minDate, format)) || maxDate && dayMoment.isAfter((0, _utilsParseInputJs2['default'])(maxDate, format));
	}

	var Calendar = (function (_Component) {
	  _inherits(Calendar, _Component);

	  function Calendar(props, context) {
	    _classCallCheck(this, Calendar);

	    _get(Object.getPrototypeOf(Calendar.prototype), 'constructor', this).call(this, props, context);

	    var format = props.format;
	    var range = props.range;
	    var theme = props.theme;
	    var offset = props.offset;
	    var firstDayOfWeek = props.firstDayOfWeek;

	    var date = (0, _utilsParseInputJs2['default'])(props.date, format);
	    var state = {
	      date: date,
	      shownDate: (range && range['endDate'] || date).clone().add(offset, 'months'),
	      firstDayOfWeek: firstDayOfWeek || _moment2['default'].localeData().firstDayOfWeek()
	    };

	    this.state = state;
	    this.styles = (0, _stylesJs2['default'])(theme);
	  }

	  _createClass(Calendar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var onInit = this.props.onInit;

	      onInit && onInit(this.state.date);
	    }
	  }, {
	    key: 'getShownDate',
	    value: function getShownDate() {
	      var _props = this.props;
	      var link = _props.link;
	      var offset = _props.offset;

	      var shownDate = link ? link.clone().add(offset, 'months') : this.state.shownDate;

	      return shownDate;
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(newDate) {
	      var _props2 = this.props;
	      var link = _props2.link;
	      var onChange = _props2.onChange;
	      var date = this.state.date;

	      onChange && onChange(newDate, Calendar);

	      if (!link) {
	        this.setState({ date: newDate });
	      }
	    }
	  }, {
	    key: 'changeMonth',
	    value: function changeMonth(direction, event) {
	      event.preventDefault();
	      var _props3 = this.props;
	      var link = _props3.link;
	      var linkCB = _props3.linkCB;

	      if (link && linkCB) {
	        return linkCB(direction);
	      }

	      var current = this.state.shownDate.month();
	      var newMonth = this.state.shownDate.clone().add(direction, 'months');

	      this.setState({
	        shownDate: newMonth
	      });
	    }
	  }, {
	    key: 'renderMonthAndYear',
	    value: function renderMonthAndYear(classes) {
	      var shownDate = this.getShownDate();
	      var month = _moment2['default'].months(shownDate.month());
	      var year = shownDate.year();
	      var styles = this.styles;
	      var onlyClasses = this.props.onlyClasses;

	      return _react2['default'].createElement(
	        'div',
	        { style: onlyClasses ? undefined : styles['MonthAndYear'], className: classes.monthAndYearWrapper },
	        _react2['default'].createElement(
	          'button',
	          {
	            style: onlyClasses ? undefined : _extends({}, styles['MonthButton'], { float: 'left' }),
	            className: classes.prevButton,
	            onClick: this.changeMonth.bind(this, -1) },
	          _react2['default'].createElement('i', { style: onlyClasses ? undefined : _extends({}, styles['MonthArrow'], styles['MonthArrowPrev']) })
	        ),
	        _react2['default'].createElement(
	          'span',
	          null,
	          _react2['default'].createElement(
	            'span',
	            { className: classes.month },
	            month
	          ),
	          _react2['default'].createElement(
	            'span',
	            { className: classes.monthAndYearDivider },
	            ' - '
	          ),
	          _react2['default'].createElement(
	            'span',
	            { className: classes.year },
	            year
	          )
	        ),
	        _react2['default'].createElement(
	          'button',
	          {
	            style: onlyClasses ? undefined : _extends({}, styles['MonthButton'], { float: 'right' }),
	            className: classes.nextButton,
	            onClick: this.changeMonth.bind(this, +1) },
	          _react2['default'].createElement('i', { style: onlyClasses ? undefined : _extends({}, styles['MonthArrow'], styles['MonthArrowNext']) })
	        )
	      );
	    }
	  }, {
	    key: 'renderWeekdays',
	    value: function renderWeekdays(classes) {
	      var dow = this.state.firstDayOfWeek;
	      var weekdays = [];
	      var styles = this.styles;
	      var onlyClasses = this.props.onlyClasses;

	      for (var i = dow; i < 7 + dow; i++) {
	        var day = _moment2['default'].weekdaysMin(i);

	        weekdays.push(_react2['default'].createElement(
	          'span',
	          { style: onlyClasses ? undefined : styles['Weekday'], className: classes.weekDay, key: day },
	          day
	        ));
	      }

	      return weekdays;
	    }
	  }, {
	    key: 'renderDays',
	    value: function renderDays(classes) {
	      var _this = this;

	      // TODO: Split this logic into smaller chunks
	      var styles = this.styles;
	      var _props4 = this.props;
	      var range = _props4.range;
	      var minDate = _props4.minDate;
	      var maxDate = _props4.maxDate;
	      var format = _props4.format;
	      var onlyClasses = _props4.onlyClasses;

	      var shownDate = this.getShownDate();
	      var _state = this.state;
	      var date = _state.date;
	      var firstDayOfWeek = _state.firstDayOfWeek;

	      var dateUnix = date.unix();

	      var monthNumber = shownDate.month();
	      var dayCount = shownDate.daysInMonth();
	      var startOfMonth = shownDate.clone().startOf('month').isoWeekday();

	      var lastMonth = shownDate.clone().month(monthNumber - 1);
	      var lastMonthNumber = lastMonth.month();
	      var lastMonthDayCount = lastMonth.daysInMonth();

	      var nextMonth = shownDate.clone().month(monthNumber + 1);
	      var nextMonthNumber = nextMonth.month();

	      var days = [];

	      // Previous month's days
	      var diff = Math.abs(firstDayOfWeek - (startOfMonth + 7)) % 7;
	      for (var i = diff - 1; i >= 0; i--) {
	        var dayMoment = lastMonth.clone().date(lastMonthDayCount - i);
	        days.push({ dayMoment: dayMoment, isPassive: true });
	      }

	      // Current month's days
	      for (var i = 1; i <= dayCount; i++) {
	        var dayMoment = shownDate.clone().date(i);
	        days.push({ dayMoment: dayMoment });
	      }

	      // Next month's days
	      var remainingCells = 42 - days.length; // 42cells = 7days * 6rows
	      for (var i = 1; i <= remainingCells; i++) {
	        var dayMoment = nextMonth.clone().date(i);
	        days.push({ dayMoment: dayMoment, isPassive: true });
	      }

	      var today = (0, _moment2['default'])().startOf('day');
	      return days.map(function (data, index) {
	        var dayMoment = data.dayMoment;
	        var isPassive = data.isPassive;

	        var isSelected = !range && dayMoment.unix() === dateUnix;
	        var isInRange = range && checkRange(dayMoment, range);
	        var isStartEdge = range && checkStartEdge(dayMoment, range);
	        var isEndEdge = range && checkEndEdge(dayMoment, range);
	        var isEdge = isStartEdge || isEndEdge;
	        var isToday = today.isSame(dayMoment);
	        var isOutsideMinMax = isOusideMinMax(dayMoment, minDate, maxDate, format);

	        return _react2['default'].createElement(_DayCellJs2['default'], _extends({
	          onSelect: _this.handleSelect.bind(_this)
	        }, data, {
	          theme: styles,
	          isStartEdge: isStartEdge,
	          isEndEdge: isEndEdge,
	          isSelected: isSelected || isEdge,
	          isInRange: isInRange,
	          isToday: isToday,
	          key: index,
	          isPassive: isPassive || isOutsideMinMax,
	          onlyClasses: onlyClasses,
	          classNames: classes
	        }));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var styles = this.styles;
	      var _props5 = this.props;
	      var onlyClasses = _props5.onlyClasses;
	      var classNames = _props5.classNames;

	      var classes = _extends({}, _stylesJs.defaultClasses, classNames);

	      return _react2['default'].createElement(
	        'div',
	        { style: onlyClasses ? undefined : _extends({}, styles['Calendar'], this.props.style), className: classes.calendar },
	        _react2['default'].createElement(
	          'div',
	          { className: classes.monthAndYear },
	          this.renderMonthAndYear(classes)
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: classes.weekDays },
	          this.renderWeekdays(classes)
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: classes.days },
	          this.renderDays(classes)
	        )
	      );
	    }
	  }]);

	  return Calendar;
	})(_react.Component);

	Calendar.defaultProps = {
	  format: 'DD/MM/YYYY',
	  theme: {},
	  onlyClasses: false,
	  classNames: {}
	};

	Calendar.propTypes = {
	  sets: _react.PropTypes.string,
	  range: _react.PropTypes.shape({
	    startDate: _react.PropTypes.object,
	    endDate: _react.PropTypes.object
	  }),
	  minDate: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.string]),
	  maxDate: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func, _react.PropTypes.string]),
	  date: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.string, _react.PropTypes.func]),
	  format: _react.PropTypes.string.isRequired,
	  firstDayOfWeek: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  onChange: _react.PropTypes.func,
	  onInit: _react.PropTypes.func,
	  link: _react.PropTypes.oneOfType([_react.PropTypes.shape({
	    startDate: _react.PropTypes.object,
	    endDate: _react.PropTypes.object
	  }), _react.PropTypes.bool]),
	  linkCB: _react.PropTypes.func,
	  theme: _react.PropTypes.object,
	  onlyClasses: _react.PropTypes.bool,
	  classNames: _react.PropTypes.object
	};

	exports['default'] = Calendar;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(7);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _stylesJs = __webpack_require__(8);

	var DayCell = (function (_Component) {
	  _inherits(DayCell, _Component);

	  function DayCell(props, context) {
	    _classCallCheck(this, DayCell);

	    _get(Object.getPrototypeOf(DayCell.prototype), 'constructor', this).call(this, props, context);

	    this.state = {
	      hover: false,
	      active: false
	    };

	    this.styles = this.props.theme;
	  }

	  _createClass(DayCell, [{
	    key: 'handleMouseEvent',
	    value: function handleMouseEvent(event) {
	      event.preventDefault();

	      if (this.props.isPassive) return null;

	      var newState = {};

	      switch (event.type) {
	        case 'mouseenter':
	          newState['hover'] = true;
	          break;

	        case 'mouseup':
	        case 'mouseleave':
	          newState['hover'] = false;
	          newState['active'] = false;
	          break;

	        case 'mousedown':
	          newState['active'] = true;
	          break;
	      }

	      this.setState(newState);
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(event) {
	      event.preventDefault();

	      if (this.props.isPassive) return null;

	      this.props.onSelect(this.props.dayMoment);
	    }
	  }, {
	    key: 'getStateStyles',
	    value: function getStateStyles() {
	      var _state = this.state;
	      var hover = _state.hover;
	      var active = _state.active;
	      var _props = this.props;
	      var isSelected = _props.isSelected;
	      var isInRange = _props.isInRange;
	      var isPassive = _props.isPassive;
	      var isStartEdge = _props.isStartEdge;
	      var isEndEdge = _props.isEndEdge;
	      var dayMoment = _props.dayMoment;
	      var isToday = _props.isToday;
	      var styles = this.styles;

	      var hoverStyle = hover ? styles['DayHover'] : {};
	      var activeStyle = active ? styles['DayActive'] : {};
	      var passiveStyle = isPassive ? styles['DayPassive'] : {};
	      var startEdgeStyle = isStartEdge ? styles['DayStartEdge'] : {};
	      var endEdgeStyle = isEndEdge ? styles['DayEndEdge'] : {};
	      var selectedStyle = isSelected ? styles['DaySelected'] : {};
	      var inRangeStyle = isInRange ? styles['DayInRange'] : {};
	      var todayStyle = isToday ? styles['DayToday'] : {};

	      return _extends({}, todayStyle, inRangeStyle, hoverStyle, passiveStyle, activeStyle, selectedStyle, startEdgeStyle, endEdgeStyle);
	    }
	  }, {
	    key: 'getClassNames',
	    value: function getClassNames(classes) {
	      var _classnames;

	      var _props2 = this.props;
	      var isSelected = _props2.isSelected;
	      var isInRange = _props2.isInRange;
	      var isPassive = _props2.isPassive;
	      var isStartEdge = _props2.isStartEdge;
	      var isEndEdge = _props2.isEndEdge;
	      var isToday = _props2.isToday;

	      return (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, classes.day, true), _defineProperty(_classnames, classes.dayActive, isSelected), _defineProperty(_classnames, classes.dayPassive, isPassive), _defineProperty(_classnames, classes.dayInRange, isInRange), _defineProperty(_classnames, classes.dayStartEdge, isStartEdge), _defineProperty(_classnames, classes.dayEndEdge, isEndEdge), _defineProperty(_classnames, classes.dayToday, isToday), _classnames));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var dayMoment = _props3.dayMoment;
	      var onlyClasses = _props3.onlyClasses;
	      var classNames = _props3.classNames;
	      var styles = this.styles;

	      var stateStyle = this.getStateStyles();
	      var classes = this.getClassNames(classNames);

	      return _react2['default'].createElement(
	        'span',
	        {
	          onMouseEnter: this.handleMouseEvent.bind(this),
	          onMouseLeave: this.handleMouseEvent.bind(this),
	          onMouseDown: this.handleMouseEvent.bind(this),
	          onMouseUp: this.handleMouseEvent.bind(this),
	          onClick: this.handleSelect.bind(this),
	          className: classes,
	          style: onlyClasses ? undefined : _extends({}, styles['Day'], stateStyle) },
	        dayMoment.date()
	      );
	    }
	  }]);

	  return DayCell;
	})(_react.Component);

	DayCell.defaultProps = {
	  theme: { 'Day': {} },
	  onlyClasses: false
	};

	DayCell.propTypes = {
	  dayMoment: _react.PropTypes.object.isRequired,
	  onSelect: _react.PropTypes.func,
	  isSelected: _react.PropTypes.bool,
	  isInRange: _react.PropTypes.bool,
	  isPassive: _react.PropTypes.bool,
	  theme: _react.PropTypes.shape({
	    Day: _react.PropTypes.object.isRequired
	  }).isRequired,
	  onlyClasses: _react.PropTypes.bool,
	  classNames: _react.PropTypes.object
	};

	exports['default'] = DayCell;
	module.exports = exports['default'];

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var defaultClasses = {
	  calendar: 'rdr-Calendar',
	  dateRange: 'rdr-DateRange',
	  predefinedRanges: 'rdr-PredefinedRanges',
	  predefinedRangesItem: 'rdr-PredefinedRangesItem',
	  monthAndYear: 'rdr-MonthAndYear',
	  weekDays: 'rdr-WeekDays',
	  weekDay: 'rdr-WeekDay',
	  days: 'rdr-Days',
	  day: 'rdr-Day',
	  dayActive: 'is-selected',
	  dayPassive: 'is-passive',
	  dayInRange: 'is-inRange',
	  monthAndYearWrapper: 'rdr-MonthAndYear-innerWrapper',
	  prevButton: 'rdr-MonthAndYear-button prev',
	  nextButton: 'rdr-MonthAndYear-button next',
	  month: 'rdr-MonthAndYear-month',
	  monthAndYearDivider: 'rdr-MonthAndYear-divider',
	  year: 'rdr-MonthAndYear-year'
	};

	exports.defaultClasses = defaultClasses;
	var defaultTheme = {
	  DateRange: {
	    display: 'block',
	    boxSizing: 'border-box',
	    background: '#ffffff',
	    borderRadius: '2px'
	  },

	  Calendar: {
	    width: 280,
	    padding: 10,
	    background: '#ffffff',
	    borderRadius: '2px',
	    display: 'inline-block',
	    boxSizing: 'border-box',
	    letterSpacing: 0,
	    color: '#000000'
	  },

	  Day: {
	    boxSizing: 'border-box',
	    display: 'inline-block',
	    letterSpacing: 'initial',
	    textAlign: 'center',
	    fontSize: 12,
	    cursor: 'pointer',
	    transition: 'transform .1s ease'
	  },

	  DayPassive: {
	    opacity: 0.4,
	    cursor: 'normal'
	  },

	  DayHover: {
	    background: '#bdc3c7'
	  },

	  DayToday: {},

	  DayActive: {
	    background: '#95a5a6',
	    color: '#ffffff',
	    transform: 'scale(0.9)'
	  },

	  DaySelected: {
	    background: '#e74c3c',
	    color: '#ffffff'
	  },

	  DayStartEdge: {},

	  DayEndEdge: {},

	  DayInRange: {
	    background: '#34495e',
	    color: '#95a5a6'
	  },

	  Weekday: {
	    boxSizing: 'border-box',
	    display: 'inline-block',
	    letterSpacing: 'initial',
	    textAlign: 'center',
	    fontSize: 12,
	    fontWeight: '600',
	    marginBottom: 1
	  },

	  MonthAndYear: {
	    textAlign: 'center',
	    boxSizing: 'border-box',
	    fontSize: 12,
	    padding: '10px 0',
	    height: 38,
	    lineHeight: '18px'
	  },

	  MonthButton: {
	    display: 'block',
	    boxSizing: 'border-box',
	    height: 18,
	    width: 18,
	    padding: 0,
	    margin: '0 10px',
	    border: 'none',
	    background: '#bdc3c7',
	    boxShadow: 'none',
	    outline: 'none',
	    borderRadius: '50%'
	  },

	  MonthArrow: {
	    display: 'block',
	    width: 0,
	    height: 0,
	    padding: 0,
	    margin: 0,
	    border: '4px solid transparent',
	    textAlign: 'center'
	  },

	  MonthArrowPrev: {
	    borderRightWidth: '6px',
	    borderRightColor: '#34495e',
	    marginLeft: 1
	  },

	  MonthArrowNext: {
	    borderLeftWidth: '6px',
	    borderLeftColor: '#34495e',
	    marginLeft: 7
	  },

	  PredefinedRanges: {
	    width: 140,
	    display: 'inline-block',
	    verticalAlign: 'top'
	  },

	  PredefinedRangesItem: {
	    display: 'block',
	    fontSize: 12,
	    color: '#2c3e50',
	    padding: '10px 14px',
	    borderRadius: '2px',
	    background: '#ecf0f1',
	    textDecoration: 'none',
	    marginBottom: 6
	  },

	  PredefinedRangesItemActive: {
	    color: '#E74C3C'
	  }
	};

	exports['default'] = function () {
	  var customTheme = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var calendarWidth = defaultTheme.Calendar.width;
	  var calendarPadding = defaultTheme.Calendar.padding;
	  var cellMargin = defaultTheme.Day.margin || 0;

	  if (customTheme.Calendar && customTheme.Calendar.hasOwnProperty('width')) {
	    calendarWidth = customTheme.Calendar.width;
	  }

	  if (customTheme.Calendar && customTheme.Calendar.hasOwnProperty('padding')) {
	    calendarPadding = customTheme.Calendar.padding;
	  }

	  if (customTheme.Day && customTheme.Day.hasOwnProperty('margin')) {
	    cellMargin = customTheme.Day.margin;
	  }

	  var cellSize = (parseInt(calendarWidth) - parseInt(calendarPadding) * 2) / 7 - parseInt(cellMargin) * 2;

	  return {
	    DateRange: _extends({}, defaultTheme.DateRange, customTheme.DateRange),

	    Calendar: _extends({}, defaultTheme.Calendar, customTheme.Calendar),

	    Day: _extends({
	      width: cellSize,
	      height: cellSize,
	      lineHeight: cellSize + 'px'
	    }, defaultTheme.Day, customTheme.Day),

	    DayPassive: _extends({}, defaultTheme.DayPassive, customTheme.DayPassive),

	    DayHover: _extends({}, defaultTheme.DayHover, customTheme.DayHover),

	    DayToday: _extends({}, defaultTheme.DayToday, customTheme.DayToday),

	    DayActive: _extends({}, defaultTheme.DayActive, customTheme.DayActive),

	    DaySelected: _extends({}, defaultTheme.DaySelected, customTheme.DaySelected),

	    DayStartEdge: _extends({}, defaultTheme.DayStartEdge, customTheme.DayStartEdge),

	    DayEndEdge: _extends({}, defaultTheme.DayEndEdge, customTheme.DayEndEdge),

	    DayInRange: _extends({}, defaultTheme.DayInRange, customTheme.DayInRange),

	    Weekday: _extends({
	      width: cellSize,
	      height: cellSize / 2,
	      lineHeight: cellSize / 2 + 'px'
	    }, defaultTheme.Weekday, customTheme.Weekday),

	    MonthAndYear: _extends({}, defaultTheme.MonthAndYear, customTheme.MonthAndYear),

	    MonthButton: _extends({}, defaultTheme.MonthButton, customTheme.MonthButton),

	    MonthArrow: _extends({}, defaultTheme.MonthArrow, customTheme.MonthArrow),

	    MonthArrowPrev: _extends({}, defaultTheme.MonthArrowPrev, customTheme.MonthArrowPrev),

	    MonthArrowNext: _extends({}, defaultTheme.MonthArrowNext, customTheme.MonthArrowNext),

	    PredefinedRanges: _extends({}, defaultTheme.PredefinedRanges, customTheme.PredefinedRanges),

	    PredefinedRangesItem: _extends({}, defaultTheme.PredefinedRangesItem, customTheme.PredefinedRangesItem),

	    PredefinedRangesItemActive: _extends({}, defaultTheme.PredefinedRangesItemActive, customTheme.PredefinedRangesItemActive)
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(3);

	var _moment2 = _interopRequireDefault(_moment);

	var _utilsParseInputJs = __webpack_require__(4);

	var _utilsParseInputJs2 = _interopRequireDefault(_utilsParseInputJs);

	var _stylesJs = __webpack_require__(8);

	var PredefinedRanges = (function (_Component) {
	  _inherits(PredefinedRanges, _Component);

	  function PredefinedRanges(props, context) {
	    _classCallCheck(this, PredefinedRanges);

	    _get(Object.getPrototypeOf(PredefinedRanges.prototype), 'constructor', this).call(this, props, context);

	    this.styles = this.props.theme;
	  }

	  _createClass(PredefinedRanges, [{
	    key: 'handleSelect',
	    value: function handleSelect(name, event) {
	      event.preventDefault();

	      var range = this.props.ranges[name];

	      this.props.onSelect({
	        startDate: (0, _utilsParseInputJs2['default'])(range['startDate']),
	        endDate: (0, _utilsParseInputJs2['default'])(range['endDate'])
	      }, PredefinedRanges);
	    }
	  }, {
	    key: 'renderRangeList',
	    value: function renderRangeList(classes) {
	      var _this = this;

	      var _props = this.props;
	      var ranges = _props.ranges;
	      var range = _props.range;
	      var onlyClasses = _props.onlyClasses;
	      var styles = this.styles;

	      return Object.keys(ranges).map((function (name) {
	        var active = (0, _utilsParseInputJs2['default'])(ranges[name].startDate).isSame(range.startDate) && (0, _utilsParseInputJs2['default'])(ranges[name].endDate).isSame(range.endDate);

	        var style = _extends({}, styles['PredefinedRangesItem'], active ? styles['PredefinedRangesItemActive'] : {});

	        return _react2['default'].createElement(
	          'a',
	          {
	            href: '#',
	            key: 'range-' + name,
	            className: classes.predefinedRangesItem + (active ? ' active' : ''),
	            style: onlyClasses ? undefined : style,
	            onClick: _this.handleSelect.bind(_this, name)
	          },
	          name
	        );
	      }).bind(this));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var style = _props2.style;
	      var onlyClasses = _props2.onlyClasses;
	      var classNames = _props2.classNames;
	      var styles = this.styles;

	      var classes = _extends({}, _stylesJs.defaultClasses, classNames);

	      return _react2['default'].createElement(
	        'div',
	        {
	          style: onlyClasses ? undefined : _extends({}, styles['PredefinedRanges'], style),
	          className: classes.predefinedRanges
	        },
	        this.renderRangeList(classes)
	      );
	    }
	  }]);

	  return PredefinedRanges;
	})(_react.Component);

	PredefinedRanges.defaultProps = {
	  onlyClasses: false,
	  classNames: {}
	};

	PredefinedRanges.propTypes = {
	  ranges: _react.PropTypes.object.isRequired,
	  onlyClasses: _react.PropTypes.bool,
	  classNames: _react.PropTypes.object
	};

	exports['default'] = PredefinedRanges;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = {
	  'Today': {
	    startDate: function startDate(now) {
	      return now;
	    },
	    endDate: function endDate(now) {
	      return now;
	    }
	  },

	  'Yesterday': {
	    startDate: function startDate(now) {
	      return now.add(-1, 'days');
	    },
	    endDate: function endDate(now) {
	      return now.add(-1, 'days');
	    }
	  },

	  'Last 7 Days': {
	    startDate: function startDate(now) {
	      return now.add(-7, 'days');
	    },
	    endDate: function endDate(now) {
	      return now;
	    }
	  },

	  'Last 30 Days': {
	    startDate: function startDate(now) {
	      return now.add(-30, 'days');
	    },
	    endDate: function endDate(now) {
	      return now;
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }
/******/ ]);