(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.EmojiMart = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectGetPrototypeOf = require('../polyfills/objectGetPrototypeOf');

var _objectGetPrototypeOf2 = _interopRequireDefault(_objectGetPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../polyfills/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../polyfills/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../polyfills/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = React;

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _svgs = require('../svgs');

var _svgs2 = _interopRequireDefault(_svgs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Anchors = function (_React$PureComponent) {
  (0, _inherits3.default)(Anchors, _React$PureComponent);

  function Anchors(props) {
    (0, _classCallCheck3.default)(this, Anchors);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Anchors.__proto__ || (0, _objectGetPrototypeOf2.default)(Anchors)).call(this, props));

    var defaultCategory = props.categories.filter(function (category) {
      return category.first;
    })[0];

    _this.state = {
      selected: defaultCategory.name
    };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Anchors, [{
    key: 'getSVG',
    value: function getSVG(name) {
      this.SVGs || (this.SVGs = {});

      if (this.SVGs[name]) {
        return this.SVGs[name];
      } else {
        var svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">\n       ' + _svgs2.default[name] + '\n      </svg>';

        this.SVGs[name] = svg;
        return svg;
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var index = e.currentTarget.getAttribute('data-index');
      var _props = this.props;
      var categories = _props.categories;
      var onAnchorClick = _props.onAnchorClick;


      onAnchorClick(categories[index], index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props;
      var categories = _props2.categories;
      var onAnchorClick = _props2.onAnchorClick;
      var color = _props2.color;
      var i18n = _props2.i18n;
      var selected = this.state.selected;


      return _react2.default.createElement(
        'div',
        { className: 'emoji-mart-anchors' },
        categories.map(function (category, i) {
          var name = category.name;
          var anchor = category.anchor;
          var isSelected = name == selected;

          if (anchor === false) {
            return null;
          }

          return _react2.default.createElement(
            'span',
            {
              key: name,
              title: i18n.categories[name.toLowerCase()],
              'data-index': i,
              onClick: _this2.handleClick,
              className: 'emoji-mart-anchor ' + (isSelected ? 'emoji-mart-anchor-selected' : ''),
              style: { color: isSelected ? color : null }
            },
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _this2.getSVG(name) } }),
            _react2.default.createElement('span', {
              className: 'emoji-mart-anchor-bar',
              style: { backgroundColor: color }
            })
          );
        })
      );
    }
  }]);
  return Anchors;
}(_react2.default.PureComponent);

exports.default = Anchors;


Anchors.defaultProps = {
  categories: [],
  onAnchorClick: function onAnchorClick() {}
};
},{"../polyfills/createClass":12,"../polyfills/inherits":14,"../polyfills/objectGetPrototypeOf":15,"../polyfills/possibleConstructorReturn":16,"../svgs":18,"babel-runtime/helpers/classCallCheck":26,"prop-types":69,"react":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('../polyfills/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectGetPrototypeOf = require('../polyfills/objectGetPrototypeOf');

var _objectGetPrototypeOf2 = _interopRequireDefault(_objectGetPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../polyfills/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../polyfills/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../polyfills/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = React;

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _frequently = require('../utils/frequently');

var _frequently2 = _interopRequireDefault(_frequently);

var _utils = require('../utils');

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Category = function (_React$Component) {
  (0, _inherits3.default)(Category, _React$Component);

  function Category(props) {
    (0, _classCallCheck3.default)(this, Category);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Category.__proto__ || (0, _objectGetPrototypeOf2.default)(Category)).call(this, props));

    _this.setContainerRef = _this.setContainerRef.bind(_this);
    _this.setLabelRef = _this.setLabelRef.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Category, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.parent = this.container.parentNode;

      this.margin = 0;
      this.minMargin = 0;

      this.memoizeSize();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _props = this.props;
      var name = _props.name;
      var perLine = _props.perLine;
      var native = _props.native;
      var hasStickyPosition = _props.hasStickyPosition;
      var emojis = _props.emojis;
      var emojiProps = _props.emojiProps;
      var skin = emojiProps.skin;
      var size = emojiProps.size;
      var set = emojiProps.set;
      var nextPerLine = nextProps.perLine;
      var nextNative = nextProps.native;
      var nextHasStickyPosition = nextProps.hasStickyPosition;
      var nextEmojis = nextProps.emojis;
      var nextEmojiProps = nextProps.emojiProps;
      var nextSkin = nextEmojiProps.skin;
      var nextSize = nextEmojiProps.size;
      var nextSet = nextEmojiProps.set;
      var shouldUpdate = false;

      if (name == 'Recent' && perLine != nextPerLine) {
        shouldUpdate = true;
      }

      if (name == 'Search') {
        shouldUpdate = !(emojis == nextEmojis);
      }

      if (skin != nextSkin || size != nextSize || native != nextNative || set != nextSet || hasStickyPosition != nextHasStickyPosition) {
        shouldUpdate = true;
      }

      return shouldUpdate;
    }
  }, {
    key: 'memoizeSize',
    value: function memoizeSize() {
      var _container$getBoundin = this.container.getBoundingClientRect();

      var top = _container$getBoundin.top;
      var height = _container$getBoundin.height;

      var _parent$getBoundingCl = this.parent.getBoundingClientRect();

      var parentTop = _parent$getBoundingCl.top;

      var _label$getBoundingCli = this.label.getBoundingClientRect();

      var labelHeight = _label$getBoundingCli.height;


      this.top = top - parentTop + this.parent.scrollTop;

      if (height == 0) {
        this.maxMargin = 0;
      } else {
        this.maxMargin = height - labelHeight;
      }
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(scrollTop) {
      var margin = scrollTop - this.top;
      margin = margin < this.minMargin ? this.minMargin : margin;
      margin = margin > this.maxMargin ? this.maxMargin : margin;

      if (margin == this.margin) return;
      var name = this.props.name;


      if (!this.props.hasStickyPosition) {
        this.label.style.top = margin + 'px';
      }

      this.margin = margin;
      return true;
    }
  }, {
    key: 'getEmojis',
    value: function getEmojis() {
      var _props2 = this.props;
      var name = _props2.name;
      var emojis = _props2.emojis;
      var recent = _props2.recent;
      var perLine = _props2.perLine;


      if (name == 'Recent') {
        var custom = this.props.custom;

        var frequentlyUsed = recent || _frequently2.default.get(perLine);

        if (frequentlyUsed.length) {
          emojis = frequentlyUsed.map(function (id) {
            var emoji = custom.filter(function (e) {
              return e.id === id;
            })[0];
            if (emoji) {
              return emoji;
            }

            return id;
          }).filter(function (id) {
            return !!(0, _utils.getData)(id);
          });
        }

        if (emojis.length === 0 && frequentlyUsed.length > 0) {
          return null;
        }
      }

      if (emojis) {
        emojis = emojis.slice(0);
      }

      return emojis;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay(display) {
      var emojis = this.getEmojis();

      if (!emojis) {
        return;
      }

      this.container.style.display = display;
    }
  }, {
    key: 'setContainerRef',
    value: function setContainerRef(c) {
      this.container = c;
    }
  }, {
    key: 'setLabelRef',
    value: function setLabelRef(c) {
      this.label = c;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var name = _props3.name;
      var hasStickyPosition = _props3.hasStickyPosition;
      var emojiProps = _props3.emojiProps;
      var i18n = _props3.i18n;
      var emojis = this.getEmojis();
      var labelStyles = {};
      var labelSpanStyles = {};
      var containerStyles = {};

      if (!emojis) {
        containerStyles = {
          display: 'none'
        };
      }

      if (!hasStickyPosition) {
        labelStyles = {
          height: 28
        };

        labelSpanStyles = {
          position: 'absolute'
        };
      }

      return _react2.default.createElement(
        'div',
        {
          ref: this.setContainerRef,
          className: 'emoji-mart-category ' + (emojis && !emojis.length ? 'emoji-mart-no-results' : ''),
          style: containerStyles
        },
        _react2.default.createElement(
          'div',
          {
            style: labelStyles,
            'data-name': name,
            className: 'emoji-mart-category-label'
          },
          _react2.default.createElement(
            'span',
            { style: labelSpanStyles, ref: this.setLabelRef },
            i18n.categories[name.toLowerCase()]
          )
        ),
        emojis && emojis.map(function (emoji) {
          return (0, _.Emoji)((0, _extends3.default)({ emoji: emoji }, emojiProps));
        }),
        emojis && !emojis.length && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            null,
            (0, _.Emoji)((0, _extends3.default)({}, emojiProps, {
              size: 38,
              emoji: 'sleuth_or_spy',
              onOver: null,
              onLeave: null,
              onClick: null
            }))
          ),
          _react2.default.createElement(
            'div',
            { className: 'emoji-mart-no-results-label' },
            i18n.notfound
          )
        )
      );
    }
  }]);
  return Category;
}(_react2.default.Component);

exports.default = Category;


Category.defaultProps = {
  emojis: [],
  hasStickyPosition: true
};
},{".":4,"../polyfills/createClass":12,"../polyfills/extends":13,"../polyfills/inherits":14,"../polyfills/objectGetPrototypeOf":15,"../polyfills/possibleConstructorReturn":16,"../utils":22,"../utils/frequently":21,"babel-runtime/helpers/classCallCheck":26,"prop-types":69,"react":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = React;

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _data = require('../data');

var _data2 = _interopRequireDefault(_data);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SHEET_COLUMNS = 49;

var _getPosition = function _getPosition(props) {
  var _getData2 = _getData(props);

  var sheet_x = _getData2.sheet_x;
  var sheet_y = _getData2.sheet_y;
  var multiply = 100 / (SHEET_COLUMNS - 1);

  return multiply * sheet_x + '% ' + multiply * sheet_y + '%';
};

var _getData = function _getData(props) {
  var emoji = props.emoji;
  var skin = props.skin;
  var set = props.set;

  return (0, _utils.getData)(emoji, skin, set);
};

var _getSanitizedData = function _getSanitizedData(props) {
  var emoji = props.emoji;
  var skin = props.skin;
  var set = props.set;

  return (0, _utils.getSanitizedData)(emoji, skin, set);
};

var _handleClick = function _handleClick(e, props) {
  if (!props.onClick) {
    return;
  }
  var onClick = props.onClick;
  var emoji = _getSanitizedData(props);

  onClick(emoji, e);
};

var _handleOver = function _handleOver(e, props) {
  if (!props.onOver) {
    return;
  }
  var onOver = props.onOver;
  var emoji = _getSanitizedData(props);

  onOver(emoji, e);
};

var _handleLeave = function _handleLeave(e, props) {
  if (!props.onLeave) {
    return;
  }
  var onLeave = props.onLeave;
  var emoji = _getSanitizedData(props);

  onLeave(emoji, e);
};

var Emoji = function Emoji(props) {
  for (var k in Emoji.defaultProps) {
    if (props[k] == undefined && Emoji.defaultProps[k] != undefined) {
      props[k] = Emoji.defaultProps[k];
    }
  }

  var data = _getData(props);
  if (!data) {
    return null;
  }

  var unified = data.unified;
  var custom = data.custom;
  var short_names = data.short_names;
  var imageUrl = data.imageUrl;
  var style = {};
  var children = props.children;
  var className = 'emoji-mart-emoji';
  var title = null;

  if (!unified && !custom) {
    return null;
  }

  if (props.tooltip) {
    title = short_names[0];
  }

  if (props.native && unified) {
    className += ' emoji-mart-emoji-native';
    style = { fontSize: props.size };
    children = (0, _utils.unifiedToNative)(unified);

    if (props.forceSize) {
      style.display = 'inline-block';
      style.width = props.size;
      style.height = props.size;
    }
  } else if (custom) {
    className += ' emoji-mart-emoji-custom';
    style = {
      width: props.size,
      height: props.size,
      display: 'inline-block',
      backgroundImage: 'url(' + imageUrl + ')',
      backgroundSize: 'contain'
    };
  } else {
    var setHasEmoji = _getData(props)['has_img_' + props.set];

    if (!setHasEmoji) {
      return null;
    }

    style = {
      width: props.size,
      height: props.size,
      display: 'inline-block',
      backgroundImage: 'url(' + props.backgroundImageFn(props.set, props.sheetSize) + ')',
      backgroundSize: 100 * SHEET_COLUMNS + '%',
      backgroundPosition: _getPosition(props)
    };
  }

  return _react2.default.createElement(
    'span',
    {
      key: props.emoji.id || props.emoji,
      onClick: function onClick(e) {
        return _handleClick(e, props);
      },
      onMouseEnter: function onMouseEnter(e) {
        return _handleOver(e, props);
      },
      onMouseLeave: function onMouseLeave(e) {
        return _handleLeave(e, props);
      },
      title: title,
      className: className
    },
    _react2.default.createElement(
      'span',
      { style: style },
      children
    )
  );
};

Emoji.defaultProps = {
  skin: 1,
  set: 'apple',
  sheetSize: 64,
  native: false,
  forceSize: false,
  tooltip: false,
  backgroundImageFn: function backgroundImageFn(set, sheetSize) {
    return 'https://unpkg.com/emoji-datasource-' + set + '@' + '3.0.0' + '/img/' + set + '/sheets/' + sheetSize + '.png';
  },
  onOver: function onOver() {},
  onLeave: function onLeave() {},
  onClick: function onClick() {}
};

exports.default = Emoji;
},{"../data":10,"../utils":22,"prop-types":69,"react":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anchors = require('./anchors');

Object.defineProperty(exports, 'Anchors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_anchors).default;
  }
});

var _category = require('./category');

Object.defineProperty(exports, 'Category', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_category).default;
  }
});

var _emoji = require('./emoji');

Object.defineProperty(exports, 'Emoji', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_emoji).default;
  }
});

var _picker = require('./picker');

Object.defineProperty(exports, 'Picker', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_picker).default;
  }
});

var _preview = require('./preview');

Object.defineProperty(exports, 'Preview', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_preview).default;
  }
});

var _search = require('./search');

Object.defineProperty(exports, 'Search', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_search).default;
  }
});

var _skins = require('./skins');

Object.defineProperty(exports, 'Skins', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_skins).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./anchors":1,"./category":2,"./emoji":3,"./picker":5,"./preview":6,"./search":7,"./skins":8}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('../polyfills/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectGetPrototypeOf = require('../polyfills/objectGetPrototypeOf');

var _objectGetPrototypeOf2 = _interopRequireDefault(_objectGetPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../polyfills/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../polyfills/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../polyfills/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

require('../vendor/raf-polyfill');

var _react = React;

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _data = require('../data');

var _data2 = _interopRequireDefault(_data);

var _store = require('../utils/store');

var _store2 = _interopRequireDefault(_store);

var _frequently = require('../utils/frequently');

var _frequently2 = _interopRequireDefault(_frequently);

var _utils = require('../utils');

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RECENT_CATEGORY = { name: 'Recent', emojis: null };
var SEARCH_CATEGORY = { name: 'Search', emojis: null, anchor: false };
var CUSTOM_CATEGORY = { name: 'Custom', emojis: [] };

var I18N = {
  search: 'Search',
  notfound: 'No Emoji Found',
  categories: {
    search: 'Search Results',
    recent: 'Frequently Used',
    people: 'Smileys & People',
    nature: 'Animals & Nature',
    foods: 'Food & Drink',
    activity: 'Activity',
    places: 'Travel & Places',
    objects: 'Objects',
    symbols: 'Symbols',
    flags: 'Flags',
    custom: 'Custom'
  }
};

var Picker = function (_React$PureComponent) {
  (0, _inherits3.default)(Picker, _React$PureComponent);

  function Picker(props) {
    (0, _classCallCheck3.default)(this, Picker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Picker.__proto__ || (0, _objectGetPrototypeOf2.default)(Picker)).call(this, props));

    _this.i18n = (0, _utils.deepMerge)(I18N, props.i18n);
    _this.state = {
      skin: _store2.default.get('skin') || props.skin,
      firstRender: true
    };

    _this.categories = [];
    var allCategories = [].concat(_data2.default.categories);

    if (props.custom.length > 0) {
      CUSTOM_CATEGORY.emojis = props.custom.map(function (emoji) {
        return (0, _extends3.default)({}, emoji, {
          // `<Category />` expects emoji to have an `id`.
          id: emoji.short_names[0],
          custom: true
        });
      });

      allCategories.push(CUSTOM_CATEGORY);
    }

    _this.hideRecent = true;

    if (props.include != undefined) {
      allCategories.sort(function (a, b) {
        var aName = a.name.toLowerCase();
        var bName = b.name.toLowerCase();

        if (props.include.indexOf(aName) > props.include.indexOf(bName)) {
          return 1;
        }

        return 0;
      });
    }

    for (var categoryIndex = 0; categoryIndex < allCategories.length; categoryIndex++) {
      var category = allCategories[categoryIndex];
      var isIncluded = props.include && props.include.length ? props.include.indexOf(category.name.toLowerCase()) > -1 : true;
      var isExcluded = props.exclude && props.exclude.length ? props.exclude.indexOf(category.name.toLowerCase()) > -1 : false;
      if (!isIncluded || isExcluded) {
        continue;
      }

      if (props.emojisToShowFilter) {
        var newEmojis = [];

        var emojis = category.emojis;

        for (var emojiIndex = 0; emojiIndex < emojis.length; emojiIndex++) {
          var emoji = emojis[emojiIndex];
          if (props.emojisToShowFilter(_data2.default.emojis[emoji] || emoji)) {
            newEmojis.push(emoji);
          }
        }

        if (newEmojis.length) {
          var newCategory = {
            emojis: newEmojis,
            name: category.name
          };

          _this.categories.push(newCategory);
        }
      } else {
        _this.categories.push(category);
      }
    }

    var includeRecent = props.include && props.include.length ? props.include.indexOf('recent') > -1 : true;
    var excludeRecent = props.exclude && props.exclude.length ? props.exclude.indexOf('recent') > -1 : false;
    if (includeRecent && !excludeRecent) {
      _this.hideRecent = false;
      _this.categories.unshift(RECENT_CATEGORY);
    }

    if (_this.categories[0]) {
      _this.categories[0].first = true;
    }

    _this.categories.unshift(SEARCH_CATEGORY);

    _this.setAnchorsRef = _this.setAnchorsRef.bind(_this);
    _this.handleAnchorClick = _this.handleAnchorClick.bind(_this);
    _this.setSearchRef = _this.setSearchRef.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.setScrollRef = _this.setScrollRef.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    _this.handleScrollPaint = _this.handleScrollPaint.bind(_this);
    _this.handleEmojiOver = _this.handleEmojiOver.bind(_this);
    _this.handleEmojiLeave = _this.handleEmojiLeave.bind(_this);
    _this.handleEmojiClick = _this.handleEmojiClick.bind(_this);
    _this.setPreviewRef = _this.setPreviewRef.bind(_this);
    _this.handleSkinChange = _this.handleSkinChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Picker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (props.skin && !_store2.default.get('skin')) {
        this.setState({ skin: props.skin });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.state.firstRender) {
        this.testStickyPosition();
        this.firstRenderTimeout = setTimeout(function () {
          _this2.setState({ firstRender: false });
        }, 60);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateCategoriesSize();
      this.handleScroll();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      SEARCH_CATEGORY.emojis = null;

      clearTimeout(this.leaveTimeout);
      clearTimeout(this.firstRenderTimeout);
    }
  }, {
    key: 'testStickyPosition',
    value: function testStickyPosition() {
      var stickyTestElement = document.createElement('div');

      var prefixes = ['', '-webkit-', '-ms-', '-moz-', '-o-'];

      prefixes.forEach(function (prefix) {
        return stickyTestElement.style.position = prefix + 'sticky';
      });

      this.hasStickyPosition = !!stickyTestElement.style.position.length;
    }
  }, {
    key: 'handleEmojiOver',
    value: function handleEmojiOver(emoji) {
      var preview = this.preview;

      if (!preview) {
        return;
      }

      // Use Array.prototype.find() when it is more widely supported.
      var emojiData = CUSTOM_CATEGORY.emojis.filter(function (customEmoji) {
        return customEmoji.id === emoji.id;
      })[0];
      for (var key in emojiData) {
        if (emojiData.hasOwnProperty(key)) {
          emoji[key] = emojiData[key];
        }
      }

      preview.setState({ emoji: emoji });
      clearTimeout(this.leaveTimeout);
    }
  }, {
    key: 'handleEmojiLeave',
    value: function handleEmojiLeave(emoji) {
      var preview = this.preview;

      if (!preview) {
        return;
      }

      this.leaveTimeout = setTimeout(function () {
        preview.setState({ emoji: null });
      }, 16);
    }
  }, {
    key: 'handleEmojiClick',
    value: function handleEmojiClick(emoji, e) {
      var _this3 = this;

      this.props.onClick(emoji, e);
      if (!this.hideRecent && !this.props.recent) _frequently2.default.add(emoji);

      var component = this.categoryRefs['category-1'];
      if (component) {
        var maxMargin = component.maxMargin;
        component.forceUpdate();

        window.requestAnimationFrame(function () {
          if (!_this3.scroll) return;
          component.memoizeSize();
          if (maxMargin == component.maxMargin) return;

          _this3.updateCategoriesSize();
          _this3.handleScrollPaint();

          if (SEARCH_CATEGORY.emojis) {
            component.updateDisplay('none');
          }
        });
      }
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      if (!this.waitingForPaint) {
        this.waitingForPaint = true;
        window.requestAnimationFrame(this.handleScrollPaint);
      }
    }
  }, {
    key: 'handleScrollPaint',
    value: function handleScrollPaint() {
      this.waitingForPaint = false;

      if (!this.scroll) {
        return;
      }

      var activeCategory = null;

      if (SEARCH_CATEGORY.emojis) {
        activeCategory = SEARCH_CATEGORY;
      } else {
        var target = this.scroll,
            scrollTop = target.scrollTop,
            scrollingDown = scrollTop > (this.scrollTop || 0),
            minTop = 0;

        for (var i = 0, l = this.categories.length; i < l; i++) {
          var ii = scrollingDown ? this.categories.length - 1 - i : i,
              category = this.categories[ii],
              component = this.categoryRefs['category-' + ii];

          if (component) {
            var active = component.handleScroll(scrollTop);

            if (!minTop || component.top < minTop) {
              if (component.top > 0) {
                minTop = component.top;
              }
            }

            if (active && !activeCategory) {
              activeCategory = category;
            }
          }
        }

        if (scrollTop < minTop) {
          activeCategory = this.categories.filter(function (category) {
            return !(category.anchor === false);
          })[0];
        } else if (scrollTop + this.clientHeight >= this.scrollHeight) {
          activeCategory = this.categories[this.categories.length - 1];
        }
      }

      if (activeCategory) {
        var anchors = this.anchors;
        var _activeCategory = activeCategory;
        var categoryName = _activeCategory.name;


        if (anchors.state.selected != categoryName) {
          anchors.setState({ selected: categoryName });
        }
      }

      this.scrollTop = scrollTop;
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(emojis) {
      SEARCH_CATEGORY.emojis = emojis;

      for (var i = 0, l = this.categories.length; i < l; i++) {
        var component = this.categoryRefs['category-' + i];

        if (component && component.props.name != 'Search') {
          var display = emojis ? 'none' : 'inherit';
          component.updateDisplay(display);
        }
      }

      this.forceUpdate();
      this.scroll.scrollTop = 0;
      this.handleScroll();
    }
  }, {
    key: 'handleAnchorClick',
    value: function handleAnchorClick(category, i) {
      var component = this.categoryRefs['category-' + i];
      var scroll = this.scroll;
      var anchors = this.anchors;
      var scrollToComponent = null;

      scrollToComponent = function scrollToComponent() {
        if (component) {
          var top = component.top;


          if (category.first) {
            top = 0;
          } else {
            top += 1;
          }

          scroll.scrollTop = top;
        }
      };

      if (SEARCH_CATEGORY.emojis) {
        this.handleSearch(null);
        this.search.clear();

        window.requestAnimationFrame(scrollToComponent);
      } else {
        scrollToComponent();
      }
    }
  }, {
    key: 'handleSkinChange',
    value: function handleSkinChange(skin) {
      var newState = { skin: skin };

      this.setState(newState);
      _store2.default.update(newState);
    }
  }, {
    key: 'updateCategoriesSize',
    value: function updateCategoriesSize() {
      for (var i = 0, l = this.categories.length; i < l; i++) {
        var component = this.categoryRefs['category-' + i];
        if (component) component.memoizeSize();
      }

      if (this.scroll) {
        var target = this.scroll;
        this.scrollHeight = target.scrollHeight;
        this.clientHeight = target.clientHeight;
      }
    }
  }, {
    key: 'getCategories',
    value: function getCategories() {
      return this.state.firstRender ? this.categories.slice(0, 3) : this.categories;
    }
  }, {
    key: 'setAnchorsRef',
    value: function setAnchorsRef(c) {
      this.anchors = c;
    }
  }, {
    key: 'setSearchRef',
    value: function setSearchRef(c) {
      this.search = c;
    }
  }, {
    key: 'setPreviewRef',
    value: function setPreviewRef(c) {
      this.preview = c;
    }
  }, {
    key: 'setScrollRef',
    value: function setScrollRef(c) {
      this.scroll = c;
    }
  }, {
    key: 'setCategoryRef',
    value: function setCategoryRef(name, c) {
      if (!this.categoryRefs) {
        this.categoryRefs = {};
      }

      this.categoryRefs[name] = c;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props;
      var perLine = _props.perLine;
      var emojiSize = _props.emojiSize;
      var set = _props.set;
      var sheetSize = _props.sheetSize;
      var style = _props.style;
      var title = _props.title;
      var emoji = _props.emoji;
      var color = _props.color;
      var native = _props.native;
      var backgroundImageFn = _props.backgroundImageFn;
      var emojisToShowFilter = _props.emojisToShowFilter;
      var showPreview = _props.showPreview;
      var emojiTooltip = _props.emojiTooltip;
      var include = _props.include;
      var exclude = _props.exclude;
      var recent = _props.recent;
      var autoFocus = _props.autoFocus;
      var skin = this.state.skin;
      var width = perLine * (emojiSize + 12) + 12 + 2 + (0, _utils.measureScrollbar)();

      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({ width: width }, style), className: 'emoji-mart' },
        _react2.default.createElement(
          'div',
          { className: 'emoji-mart-bar' },
          _react2.default.createElement(_.Anchors, {
            ref: this.setAnchorsRef,
            i18n: this.i18n,
            color: color,
            categories: this.categories,
            onAnchorClick: this.handleAnchorClick
          })
        ),
        _react2.default.createElement(_.Search, {
          ref: this.setSearchRef,
          onSearch: this.handleSearch,
          i18n: this.i18n,
          emojisToShowFilter: emojisToShowFilter,
          include: include,
          exclude: exclude,
          custom: CUSTOM_CATEGORY.emojis,
          autoFocus: autoFocus
        }),
        _react2.default.createElement(
          'div',
          {
            ref: this.setScrollRef,
            className: 'emoji-mart-scroll',
            onScroll: this.handleScroll
          },
          this.getCategories().map(function (category, i) {
            return _react2.default.createElement(_.Category, {
              ref: _this4.setCategoryRef.bind(_this4, 'category-' + i),
              key: category.name,
              name: category.name,
              emojis: category.emojis,
              perLine: perLine,
              native: native,
              hasStickyPosition: _this4.hasStickyPosition,
              i18n: _this4.i18n,
              recent: category.name == 'Recent' ? recent : undefined,
              custom: category.name == 'Recent' ? CUSTOM_CATEGORY.emojis : undefined,
              emojiProps: {
                native: native,
                skin: skin,
                size: emojiSize,
                set: set,
                sheetSize: sheetSize,
                forceSize: native,
                tooltip: emojiTooltip,
                backgroundImageFn: backgroundImageFn,
                onOver: _this4.handleEmojiOver,
                onLeave: _this4.handleEmojiLeave,
                onClick: _this4.handleEmojiClick
              }
            });
          })
        ),
        showPreview && _react2.default.createElement(
          'div',
          { className: 'emoji-mart-bar' },
          _react2.default.createElement(_.Preview, {
            ref: this.setPreviewRef,
            title: title,
            emoji: emoji,
            emojiProps: {
              native: native,
              size: 38,
              skin: skin,
              set: set,
              sheetSize: sheetSize,
              backgroundImageFn: backgroundImageFn
            },
            skinsProps: {
              skin: skin,
              onChange: this.handleSkinChange
            }
          })
        )
      );
    }
  }]);
  return Picker;
}(_react2.default.PureComponent);

exports.default = Picker;


Picker.defaultProps = {
  onClick: function onClick() {},
  emojiSize: 24,
  perLine: 9,
  i18n: {},
  style: {},
  title: 'Emoji Mart™',
  emoji: 'department_store',
  color: '#ae65c5',
  set: _.Emoji.defaultProps.set,
  skin: _.Emoji.defaultProps.skin,
  native: _.Emoji.defaultProps.native,
  sheetSize: _.Emoji.defaultProps.sheetSize,
  backgroundImageFn: _.Emoji.defaultProps.backgroundImageFn,
  emojisToShowFilter: null,
  showPreview: true,
  emojiTooltip: _.Emoji.defaultProps.tooltip,
  autoFocus: false,
  custom: []
};
},{".":4,"../data":10,"../polyfills/createClass":12,"../polyfills/extends":13,"../polyfills/inherits":14,"../polyfills/objectGetPrototypeOf":15,"../polyfills/possibleConstructorReturn":16,"../utils":22,"../utils/frequently":21,"../utils/store":23,"../vendor/raf-polyfill":24,"babel-runtime/helpers/classCallCheck":26,"prop-types":69,"react":undefined}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('../polyfills/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectGetPrototypeOf = require('../polyfills/objectGetPrototypeOf');

var _objectGetPrototypeOf2 = _interopRequireDefault(_objectGetPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../polyfills/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../polyfills/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../polyfills/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = React;

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('.');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Preview = function (_React$PureComponent) {
  (0, _inherits3.default)(Preview, _React$PureComponent);

  function Preview(props) {
    (0, _classCallCheck3.default)(this, Preview);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Preview.__proto__ || (0, _objectGetPrototypeOf2.default)(Preview)).call(this, props));

    _this.state = { emoji: null };
    return _this;
  }

  (0, _createClass3.default)(Preview, [{
    key: 'render',
    value: function render() {
      var emoji = this.state.emoji;
      var _props = this.props;
      var emojiProps = _props.emojiProps;
      var skinsProps = _props.skinsProps;
      var title = _props.title;
      var idleEmoji = _props.emoji;


      if (emoji) {
        var emojiData = (0, _utils.getData)(emoji);
        var _emojiData$emoticons = emojiData.emoticons;
        var emoticons = _emojiData$emoticons === undefined ? [] : _emojiData$emoticons;
        var knownEmoticons = [];
        var listedEmoticons = [];

        emoticons.forEach(function (emoticon) {
          if (knownEmoticons.indexOf(emoticon.toLowerCase()) >= 0) {
            return;
          }

          knownEmoticons.push(emoticon.toLowerCase());
          listedEmoticons.push(emoticon);
        });

        return _react2.default.createElement(
          'div',
          { className: 'emoji-mart-preview' },
          _react2.default.createElement(
            'div',
            { className: 'emoji-mart-preview-emoji' },
            (0, _.Emoji)((0, _extends3.default)({ key: emoji.id, emoji: emoji }, emojiProps))
          ),
          _react2.default.createElement(
            'div',
            { className: 'emoji-mart-preview-data' },
            _react2.default.createElement(
              'div',
              { className: 'emoji-mart-preview-name' },
              emoji.name
            ),
            _react2.default.createElement(
              'div',
              { className: 'emoji-mart-preview-shortnames' },
              emojiData.short_names.map(function (short_name) {
                return _react2.default.createElement(
                  'span',
                  { key: short_name, className: 'emoji-mart-preview-shortname' },
                  ':',
                  short_name,
                  ':'
                );
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'emoji-mart-preview-emoticons' },
              listedEmoticons.map(function (emoticon) {
                return _react2.default.createElement(
                  'span',
                  { key: emoticon, className: 'emoji-mart-preview-emoticon' },
                  emoticon
                );
              })
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'emoji-mart-preview' },
          _react2.default.createElement(
            'div',
            { className: 'emoji-mart-preview-emoji' },
            idleEmoji && idleEmoji.length && (0, _.Emoji)((0, _extends3.default)({ emoji: idleEmoji }, emojiProps))
          ),
          _react2.default.createElement(
            'div',
            { className: 'emoji-mart-preview-data' },
            _react2.default.createElement(
              'span',
              { className: 'emoji-mart-title-label' },
              title
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'emoji-mart-preview-skins' },
            _react2.default.createElement(_.Skins, skinsProps)
          )
        );
      }
    }
  }]);
  return Preview;
}(_react2.default.PureComponent);

exports.default = Preview;
},{".":4,"../polyfills/createClass":12,"../polyfills/extends":13,"../polyfills/inherits":14,"../polyfills/objectGetPrototypeOf":15,"../polyfills/possibleConstructorReturn":16,"../utils":22,"babel-runtime/helpers/classCallCheck":26,"prop-types":69,"react":undefined}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectGetPrototypeOf = require('../polyfills/objectGetPrototypeOf');

var _objectGetPrototypeOf2 = _interopRequireDefault(_objectGetPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../polyfills/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../polyfills/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../polyfills/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = React;

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _emojiIndex = require('../utils/emoji-index');

var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_React$PureComponent) {
  (0, _inherits3.default)(Search, _React$PureComponent);

  function Search(props) {
    (0, _classCallCheck3.default)(this, Search);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || (0, _objectGetPrototypeOf2.default)(Search)).call(this, props));

    _this.setRef = _this.setRef.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Search, [{
    key: 'handleChange',
    value: function handleChange() {
      var value = this.input.value;

      this.props.onSearch(_emojiIndex2.default.search(value, {
        emojisToShowFilter: this.props.emojisToShowFilter,
        maxResults: this.props.maxResults,
        include: this.props.include,
        exclude: this.props.exclude,
        custom: this.props.custom
      }));
    }
  }, {
    key: 'setRef',
    value: function setRef(c) {
      this.input = c;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.input.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var i18n = _props.i18n;
      var autoFocus = _props.autoFocus;


      return _react2.default.createElement(
        'div',
        { className: 'emoji-mart-search' },
        _react2.default.createElement('input', {
          ref: this.setRef,
          type: 'text',
          onChange: this.handleChange,
          placeholder: i18n.search,
          autoFocus: autoFocus
        })
      );
    }
  }]);
  return Search;
}(_react2.default.PureComponent);

exports.default = Search;


Search.defaultProps = {
  onSearch: function onSearch() {},
  maxResults: 75,
  emojisToShowFilter: null,
  autoFocus: false
};
},{"../polyfills/createClass":12,"../polyfills/inherits":14,"../polyfills/objectGetPrototypeOf":15,"../polyfills/possibleConstructorReturn":16,"../utils/emoji-index":20,"babel-runtime/helpers/classCallCheck":26,"prop-types":69,"react":undefined}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectGetPrototypeOf = require('../polyfills/objectGetPrototypeOf');

var _objectGetPrototypeOf2 = _interopRequireDefault(_objectGetPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('../polyfills/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('../polyfills/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('../polyfills/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = React;

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Skins = function (_React$PureComponent) {
  (0, _inherits3.default)(Skins, _React$PureComponent);

  function Skins(props) {
    (0, _classCallCheck3.default)(this, Skins);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Skins.__proto__ || (0, _objectGetPrototypeOf2.default)(Skins)).call(this, props));

    _this.state = {
      opened: false
    };

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Skins, [{
    key: 'handleClick',
    value: function handleClick(e) {
      var skin = e.currentTarget.getAttribute('data-skin');
      var onChange = this.props.onChange;


      if (!this.state.opened) {
        this.setState({ opened: true });
      } else {
        this.setState({ opened: false });
        if (skin != this.props.skin) {
          onChange(skin);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var skin = this.props.skin;
      var opened = this.state.opened;


      var skinToneNodes = [];

      for (var i = 0; i < 6; i++) {
        var skinTone = i + 1;
        var selected = skinTone == skin;

        skinToneNodes.push(_react2.default.createElement(
          'span',
          {
            key: 'skin-tone-' + skinTone,
            className: 'emoji-mart-skin-swatch ' + (selected ? 'emoji-mart-skin-swatch-selected' : '')
          },
          _react2.default.createElement('span', {
            onClick: this.handleClick,
            'data-skin': skinTone,
            className: 'emoji-mart-skin emoji-mart-skin-tone-' + skinTone
          })
        ));
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            className: 'emoji-mart-skin-swatches ' + (opened ? 'emoji-mart-skin-swatches-opened' : '')
          },
          skinToneNodes
        )
      );
    }
  }]);
  return Skins;
}(_react2.default.PureComponent);

exports.default = Skins;


Skins.defaultProps = {
  onChange: function onChange() {}
};
},{"../polyfills/createClass":12,"../polyfills/inherits":14,"../polyfills/objectGetPrototypeOf":15,"../polyfills/possibleConstructorReturn":16,"babel-runtime/helpers/classCallCheck":26,"prop-types":69,"react":undefined}],9:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={categories:[{name:"People",emojis:["grinning","smiley","smile","grin","laughing","sweat_smile","joy","rolling_on_the_floor_laughing","relaxed","blush","innocent","slightly_smiling_face","upside_down_face","wink","relieved","heart_eyes","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","yum","stuck_out_tongue_winking_eye","stuck_out_tongue_closed_eyes","stuck_out_tongue","money_mouth_face","hugging_face","nerd_face","sunglasses","clown_face","face_with_cowboy_hat","smirk","unamused","disappointed","pensive","worried","confused","slightly_frowning_face","white_frowning_face","persevere","confounded","tired_face","weary","triumph","angry","rage","no_mouth","neutral_face","expressionless","hushed","frowning","anguished","open_mouth","astonished","dizzy_face","flushed","scream","fearful","cold_sweat","cry","disappointed_relieved","drooling_face","sob","sweat","sleepy","sleeping","face_with_rolling_eyes","thinking_face","lying_face","grimacing","zipper_mouth_face","nauseated_face","sneezing_face","mask","face_with_thermometer","face_with_head_bandage","smiling_imp","imp","japanese_ogre","japanese_goblin","hankey","ghost","skull","skull_and_crossbones","alien","space_invader","robot_face","jack_o_lantern","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","open_hands","raised_hands","clap","pray","handshake","+1","-1","facepunch","fist","left-facing_fist","right-facing_fist","hand_with_index_and_middle_fingers_crossed","v","the_horns","ok_hand","point_left","point_right","point_up_2","point_down","point_up","hand","raised_back_of_hand","raised_hand_with_fingers_splayed","spock-hand","wave","call_me_hand","muscle","middle_finger","writing_hand","selfie","nail_care","ring","lipstick","kiss","lips","tongue","ear","nose","footprints","eye","eyes","speaking_head_in_silhouette","bust_in_silhouette","busts_in_silhouette","baby","boy","girl","man","woman","blond-haired-woman","person_with_blond_hair","older_man","older_woman","man_with_gua_pi_mao","woman-wearing-turban","man_with_turban","female-police-officer","cop","female-construction-worker","construction_worker","female-guard","guardsman","female-detective","sleuth_or_spy","female-doctor","male-doctor","female-farmer","male-farmer","female-cook","male-cook","female-student","male-student","female-singer","male-singer","female-teacher","male-teacher","female-factory-worker","male-factory-worker","female-technologist","male-technologist","female-office-worker","male-office-worker","female-mechanic","male-mechanic","female-scientist","male-scientist","female-artist","male-artist","female-firefighter","male-firefighter","female-pilot","male-pilot","female-astronaut","male-astronaut","female-judge","male-judge","mother_christmas","santa","princess","prince","bride_with_veil","man_in_tuxedo","angel","pregnant_woman","woman-bowing","bow","information_desk_person","man-tipping-hand","no_good","man-gesturing-no","ok_woman","man-gesturing-ok","raising_hand","man-raising-hand","face_palm","woman-facepalming","man-facepalming","shrug","woman-shrugging","man-shrugging","person_with_pouting_face","man-pouting","person_frowning","man-frowning","haircut","man-getting-haircut","massage","man-getting-massage","man_in_business_suit_levitating","dancer","man_dancing","dancers","man-with-bunny-ears-partying","woman-walking","walking","woman-running","runner","couple","two_women_holding_hands","two_men_holding_hands","couple_with_heart","woman-heart-woman","man-heart-man","couplekiss","woman-kiss-woman","man-kiss-man","family","man-woman-girl","man-woman-girl-boy","man-woman-boy-boy","man-woman-girl-girl","woman-woman-boy","woman-woman-girl","woman-woman-girl-boy","woman-woman-boy-boy","woman-woman-girl-girl","man-man-boy","man-man-girl","man-man-girl-boy","man-man-boy-boy","man-man-girl-girl","woman-boy","woman-girl","woman-girl-boy","woman-boy-boy","woman-girl-girl","man-boy","man-girl","man-girl-boy","man-boy-boy","man-girl-girl","womans_clothes","shirt","jeans","necktie","dress","bikini","kimono","high_heel","sandal","boot","mans_shoe","athletic_shoe","womans_hat","tophat","mortar_board","crown","helmet_with_white_cross","school_satchel","pouch","purse","handbag","briefcase","eyeglasses","dark_sunglasses","closed_umbrella","umbrella","man-woman-boy","woman-heart-man","woman-kiss-man","male-police-officer","blond-haired-man","man-wearing-turban","male-construction-worker","male-guard","male-detective","woman-with-bunny-ears-partying","man-running","woman-getting-massage","woman-getting-haircut","man-walking","woman-tipping-hand","woman-gesturing-no","woman-gesturing-ok","man-bowing","woman-raising-hand","woman-frowning","woman-pouting"]},{name:"Nature",emojis:["dog","cat","mouse","hamster","rabbit","fox_face","bear","panda_face","koala","tiger","lion_face","cow","pig","pig_nose","frog","monkey_face","see_no_evil","hear_no_evil","speak_no_evil","monkey","chicken","penguin","bird","baby_chick","hatching_chick","hatched_chick","duck","eagle","owl","bat","wolf","boar","horse","unicorn_face","bee","bug","butterfly","snail","shell","beetle","ant","spider","spider_web","turtle","snake","lizard","scorpion","crab","squid","octopus","shrimp","tropical_fish","fish","blowfish","dolphin","shark","whale","whale2","crocodile","leopard","tiger2","water_buffalo","ox","cow2","deer","dromedary_camel","camel","elephant","rhinoceros","gorilla","racehorse","pig2","goat","ram","sheep","dog2","poodle","cat2","rooster","turkey","dove_of_peace","rabbit2","mouse2","rat","chipmunk","feet","dragon","dragon_face","cactus","christmas_tree","evergreen_tree","deciduous_tree","palm_tree","seedling","herb","shamrock","four_leaf_clover","bamboo","tanabata_tree","leaves","fallen_leaf","maple_leaf","mushroom","ear_of_rice","bouquet","tulip","rose","wilted_flower","sunflower","blossom","cherry_blossom","hibiscus","earth_americas","earth_africa","earth_asia","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","new_moon","waxing_crescent_moon","first_quarter_moon","moon","new_moon_with_face","full_moon_with_face","sun_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","crescent_moon","dizzy","star","star2","sparkles","zap","fire","boom","comet","sunny","mostly_sunny","partly_sunny","barely_sunny","partly_sunny_rain","rainbow","cloud","rain_cloud","thunder_cloud_and_rain","lightning","snow_cloud","snowman","snowman_without_snow","snowflake","wind_blowing_face","dash","tornado","fog","ocean","droplet","sweat_drops","umbrella_with_rain_drops"]},{name:"Foods",emojis:["green_apple","apple","pear","tangerine","lemon","banana","watermelon","grapes","strawberry","melon","cherries","peach","pineapple","kiwifruit","avocado","tomato","eggplant","cucumber","carrot","corn","hot_pepper","potato","sweet_potato","chestnut","peanuts","honey_pot","croissant","bread","baguette_bread","cheese_wedge","egg","fried_egg","bacon","pancakes","fried_shrimp","poultry_leg","meat_on_bone","pizza","hotdog","hamburger","fries","stuffed_flatbread","taco","burrito","green_salad","shallow_pan_of_food","spaghetti","ramen","stew","fish_cake","sushi","bento","curry","rice","rice_ball","rice_cracker","oden","dango","shaved_ice","ice_cream","icecream","cake","birthday","custard","lollipop","candy","chocolate_bar","popcorn","doughnut","cookie","glass_of_milk","baby_bottle","coffee","tea","sake","beer","beers","clinking_glasses","wine_glass","tumbler_glass","cocktail","tropical_drink","champagne","spoon","fork_and_knife","knife_fork_plate"]},{name:"Activity",emojis:["soccer","basketball","football","baseball","tennis","volleyball","rugby_football","8ball","table_tennis_paddle_and_ball","badminton_racquet_and_shuttlecock","goal_net","ice_hockey_stick_and_puck","field_hockey_stick_and_ball","cricket_bat_and_ball","golf","bow_and_arrow","fishing_pole_and_fish","boxing_glove","martial_arts_uniform","ice_skate","ski","skier","snowboarder","woman-lifting-weights","weight_lifter","fencer","wrestlers","woman-wrestling","man-wrestling","person_doing_cartwheel","woman-cartwheeling","man-cartwheeling","woman-bouncing-ball","person_with_ball","handball","woman-playing-handball","man-playing-handball","woman-golfing","golfer","woman-surfing","surfer","woman-swimming","swimmer","water_polo","woman-playing-water-polo","man-playing-water-polo","woman-rowing-boat","rowboat","horse_racing","woman-biking","bicyclist","woman-mountain-biking","mountain_bicyclist","running_shirt_with_sash","sports_medal","medal","first_place_medal","second_place_medal","third_place_medal","trophy","rosette","reminder_ribbon","ticket","admission_tickets","circus_tent","juggling","woman-juggling","man-juggling","performing_arts","art","clapper","microphone","headphones","musical_score","musical_keyboard","drum_with_drumsticks","saxophone","trumpet","guitar","violin","game_die","dart","bowling","video_game","slot_machine","man-bouncing-ball","man-lifting-weights","man-golfing","man-surfing","man-swimming","man-rowing-boat","man-biking","man-mountain-biking"]},{name:"Places",emojis:["car","taxi","blue_car","bus","trolleybus","racing_car","police_car","ambulance","fire_engine","minibus","truck","articulated_lorry","tractor","scooter","bike","motor_scooter","racing_motorcycle","rotating_light","oncoming_police_car","oncoming_bus","oncoming_automobile","oncoming_taxi","aerial_tramway","mountain_cableway","suspension_railway","railway_car","train","mountain_railway","monorail","bullettrain_side","bullettrain_front","light_rail","steam_locomotive","train2","metro","tram","station","helicopter","small_airplane","airplane","airplane_departure","airplane_arriving","rocket","satellite","seat","canoe","boat","motor_boat","speedboat","passenger_ship","ferry","ship","anchor","construction","fuelpump","busstop","vertical_traffic_light","traffic_light","world_map","moyai","statue_of_liberty","fountain","tokyo_tower","european_castle","japanese_castle","stadium","ferris_wheel","roller_coaster","carousel_horse","umbrella_on_ground","beach_with_umbrella","desert_island","mountain","snow_capped_mountain","mount_fuji","volcano","desert","camping","tent","railway_track","motorway","building_construction","factory","house","house_with_garden","house_buildings","derelict_house_building","office","department_store","post_office","european_post_office","hospital","bank","hotel","convenience_store","school","love_hotel","wedding","classical_building","church","mosque","synagogue","kaaba","shinto_shrine","japan","rice_scene","national_park","sunrise","sunrise_over_mountains","stars","sparkler","fireworks","city_sunrise","city_sunset","cityscape","night_with_stars","milky_way","bridge_at_night","foggy"]},{name:"Objects",emojis:["watch","iphone","calling","computer","keyboard","desktop_computer","printer","three_button_mouse","trackball","joystick","compression","minidisc","floppy_disk","cd","dvd","vhs","camera","camera_with_flash","video_camera","movie_camera","film_projector","film_frames","telephone_receiver","phone","pager","fax","tv","radio","studio_microphone","level_slider","control_knobs","stopwatch","timer_clock","alarm_clock","mantelpiece_clock","hourglass","hourglass_flowing_sand","satellite_antenna","battery","electric_plug","bulb","flashlight","candle","wastebasket","oil_drum","money_with_wings","dollar","yen","euro","pound","moneybag","credit_card","gem","scales","wrench","hammer","hammer_and_pick","hammer_and_wrench","pick","nut_and_bolt","gear","chains","gun","bomb","hocho","dagger_knife","crossed_swords","shield","smoking","coffin","funeral_urn","amphora","crystal_ball","prayer_beads","barber","alembic","telescope","microscope","hole","pill","syringe","thermometer","toilet","potable_water","shower","bathtub","bath","bellhop_bell","key","old_key","door","couch_and_lamp","bed","sleeping_accommodation","frame_with_picture","shopping_bags","shopping_trolley","gift","balloon","flags","ribbon","confetti_ball","tada","dolls","izakaya_lantern","wind_chime","email","envelope_with_arrow","incoming_envelope","e-mail","love_letter","inbox_tray","outbox_tray","package","label","mailbox_closed","mailbox","mailbox_with_mail","mailbox_with_no_mail","postbox","postal_horn","scroll","page_with_curl","page_facing_up","bookmark_tabs","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","spiral_note_pad","spiral_calendar_pad","calendar","date","card_index","card_file_box","ballot_box_with_ballot","file_cabinet","clipboard","file_folder","open_file_folder","card_index_dividers","rolled_up_newspaper","newspaper","notebook","notebook_with_decorative_cover","ledger","closed_book","green_book","blue_book","orange_book","books","book","bookmark","link","paperclip","linked_paperclips","triangular_ruler","straight_ruler","pushpin","round_pushpin","scissors","lower_left_ballpoint_pen","lower_left_fountain_pen","black_nib","lower_left_paintbrush","lower_left_crayon","memo","pencil2","mag","mag_right","lock_with_ink_pen","closed_lock_with_key","lock","unlock"]},{name:"Symbols",emojis:["heart","yellow_heart","green_heart","blue_heart","purple_heart","black_heart","broken_heart","heavy_heart_exclamation_mark_ornament","two_hearts","revolving_hearts","heartbeat","heartpulse","sparkling_heart","cupid","gift_heart","heart_decoration","peace_symbol","latin_cross","star_and_crescent","om_symbol","wheel_of_dharma","star_of_david","six_pointed_star","menorah_with_nine_branches","yin_yang","orthodox_cross","place_of_worship","ophiuchus","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","id","atom_symbol","accept","radioactive_sign","biohazard_sign","mobile_phone_off","vibration_mode","u6709","u7121","u7533","u55b6","u6708","eight_pointed_black_star","vs","white_flower","ideograph_advantage","secret","congratulations","u5408","u6e80","u5272","u7981","a","b","ab","cl","o2","sos","x","o","octagonal_sign","no_entry","name_badge","no_entry_sign","100","anger","hotsprings","no_pedestrians","do_not_litter","no_bicycles","non-potable_water","underage","no_mobile_phones","no_smoking","exclamation","grey_exclamation","question","grey_question","bangbang","interrobang","low_brightness","high_brightness","part_alternation_mark","warning","children_crossing","trident","fleur_de_lis","beginner","recycle","white_check_mark","u6307","chart","sparkle","eight_spoked_asterisk","negative_squared_cross_mark","globe_with_meridians","diamond_shape_with_a_dot_inside","m","cyclone","zzz","atm","wc","wheelchair","parking","u7a7a","sa","passport_control","customs","baggage_claim","left_luggage","mens","womens","baby_symbol","restroom","put_litter_in_its_place","cinema","signal_strength","koko","symbols","information_source","abc","abcd","capital_abcd","ng","ok","up","cool","new","free","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","1234","hash","keycap_star","arrow_forward","double_vertical_bar","black_right_pointing_triangle_with_double_vertical_bar","black_square_for_stop","eject","black_circle_for_record","black_right_pointing_double_triangle_with_vertical_bar","black_left_pointing_double_triangle_with_vertical_bar","fast_forward","rewind","arrow_double_up","arrow_double_down","arrow_backward","arrow_up_small","arrow_down_small","arrow_right","arrow_left","arrow_up","arrow_down","arrow_upper_right","arrow_lower_right","arrow_lower_left","arrow_upper_left","arrow_up_down","left_right_arrow","arrow_right_hook","leftwards_arrow_with_hook","arrow_heading_up","arrow_heading_down","twisted_rightwards_arrows","repeat","repeat_one","arrows_counterclockwise","arrows_clockwise","musical_note","notes","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","heavy_multiplication_x","heavy_dollar_sign","currency_exchange","tm","copyright","registered","wavy_dash","curly_loop","loop","end","back","on","top","soon","heavy_check_mark","ballot_box_with_check","radio_button","white_circle","black_circle","red_circle","large_blue_circle","small_red_triangle","small_red_triangle_down","small_orange_diamond","small_blue_diamond","large_orange_diamond","large_blue_diamond","white_square_button","black_square_button","black_small_square","white_small_square","black_medium_small_square","white_medium_small_square","black_medium_square","white_medium_square","black_large_square","white_large_square","speaker","mute","sound","loud_sound","bell","no_bell","mega","loudspeaker","eye-in-speech-bubble","speech_balloon","left_speech_bubble","thought_balloon","right_anger_bubble","spades","clubs","hearts","diamonds","black_joker","flower_playing_cards","mahjong","clock1","clock2","clock3","clock4","clock5","clock6","clock7","clock8","clock9","clock10","clock11","clock12","clock130","clock230","clock330","clock430","clock530","clock630","clock730","clock830","clock930","clock1030","clock1130","clock1230","female_sign","male_sign","staff_of_aesculapius"]},{name:"Flags",emojis:["checkered_flag","crossed_flags","flag-ac","flag-ad","flag-ae","flag-af","flag-ag","flag-ai","flag-al","flag-am","flag-ao","flag-aq","flag-ar","flag-as","flag-at","flag-au","flag-aw","flag-ax","flag-az","flag-ba","flag-bb","flag-bd","flag-be","flag-bf","flag-bg","flag-bh","flag-bi","flag-bj","flag-bl","flag-bm","flag-bn","flag-bo","flag-bq","flag-br","flag-bs","flag-bt","flag-bv","flag-bw","flag-by","flag-bz","flag-ca","flag-cc","flag-cd","flag-cf","flag-cg","flag-ch","flag-ci","flag-ck","flag-cl","flag-cm","flag-cn","flag-co","flag-cp","flag-cr","flag-cu","flag-cv","flag-cw","flag-cx","flag-cy","flag-cz","flag-de","flag-dg","flag-dj","flag-dk","flag-dm","flag-do","flag-dz","flag-ea","flag-ec","flag-ee","flag-eg","flag-eh","flag-er","flag-es","flag-et","flag-eu","flag-fi","flag-fj","flag-fk","flag-fm","flag-fo","flag-fr","flag-ga","flag-gb","flag-gd","flag-ge","flag-gf","flag-gg","flag-gh","flag-gi","flag-gl","flag-gm","flag-gn","flag-gp","flag-gq","flag-gr","flag-gs","flag-gt","flag-gu","flag-gw","flag-gy","flag-hk","flag-hm","flag-hn","flag-hr","flag-ht","flag-hu","flag-ic","flag-id","flag-ie","flag-il","flag-im","flag-in","flag-io","flag-iq","flag-ir","flag-is","flag-it","flag-je","flag-jm","flag-jo","flag-jp","flag-ke","flag-kg","flag-kh","flag-ki","flag-km","flag-kn","flag-kp","flag-kr","flag-kw","flag-ky","flag-kz","flag-la","flag-lb","flag-lc","flag-li","flag-lk","flag-lr","flag-ls","flag-lt","flag-lu","flag-lv","flag-ly","flag-ma","flag-mc","flag-md","flag-me","flag-mf","flag-mg","flag-mh","flag-mk","flag-ml","flag-mm","flag-mn","flag-mo","flag-mp","flag-mq","flag-mr","flag-ms","flag-mt","flag-mu","flag-mv","flag-mw","flag-mx","flag-my","flag-mz","flag-na","flag-nc","flag-ne","flag-nf","flag-ng","flag-ni","flag-nl","flag-no","flag-np","flag-nr","flag-nu","flag-nz","flag-om","flag-pa","flag-pe","flag-pf","flag-pg","flag-ph","flag-pk","flag-pl","flag-pm","flag-pn","flag-pr","flag-ps","flag-pt","flag-pw","flag-py","flag-qa","flag-re","flag-ro","flag-rs","flag-ru","flag-rw","flag-sa","flag-sb","flag-sc","flag-sd","flag-se","flag-sg","flag-sh","flag-si","flag-sj","flag-sk","flag-sl","flag-sm","flag-sn","flag-so","flag-sr","flag-ss","flag-st","flag-sv","flag-sx","flag-sy","flag-sz","flag-ta","flag-tc","flag-td","flag-tf","flag-tg","flag-th","flag-tj","flag-tk","flag-tl","flag-tm","flag-tn","flag-to","flag-tr","flag-tt","flag-tv","flag-tw","flag-tz","flag-ua","flag-ug","flag-um","flag-us","flag-uy","flag-uz","flag-va","flag-vc","flag-ve","flag-vg","flag-vi","flag-vn","flag-vu","flag-wf","flag-ws","flag-xk","flag-ye","flag-yt","flag-za","flag-zm","flag-zw","rainbow-flag","triangular_flag_on_post","waving_black_flag","waving_white_flag"]}],emojis:{"100":{name:"Hundred Points Symbol",unified:"1F4AF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["100","score","perfect","numbers","century","exam","quiz","test","pass","hundred"],sheet:[17,32]},"1234":{name:"Input Symbol for Numbers",unified:"1F522",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["1234","numbers","blue-square"],sheet:[19,48]},dog:{name:"Dog Face",unified:"1F436",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dog","animal","friend","nature","woof","puppy","pet","faithful"],sheet:[11,30]},green_apple:{name:"Green Apple",unified:"1F34F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["green_apple","fruit","nature"],sheet:[6,12]},watch:{name:"Watch",unified:"231A",variations:["231A-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["watch","time","accessories"],sheet:[0,14]},waving_white_flag:{name:"White Flag",unified:"1F3F3",variations:["1F3F3-FE0F"],added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["white_flag","losing","loser","lost","surrender","give up","fail"],sheet:[10,13]},heart:{name:"Heavy Black Heart",unified:"2764",variations:["2764-FE0F"],text:"<3",added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["<3"],sheet:[3,30]},car:{name:"Automobile",unified:"1F697",short_names:["red_car"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["red_car","red","transportation","vehicle"],sheet:[25,29]},soccer:{name:"Soccer Ball",unified:"26BD",variations:["26BD-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["soccer","sports","football"],sheet:[2,5]},grinning:{name:"Grinning Face",unified:"1F600",text:":D",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["grinning","face","smile","happy","joy",":D","grin"],sheet:[22,33]},yellow_heart:{name:"Yellow Heart",unified:"1F49B",text:"<3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["yellow_heart","love","like","affection","valentines"],sheet:[17,7]},iphone:{name:"Mobile Phone",unified:"1F4F1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["iphone","technology","apple","gadgets","dial"],sheet:[19,0]},waving_black_flag:{name:"Black Flag",unified:"1F3F4",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["black_flag","pirate"],sheet:[10,14]},cat:{name:"Cat Face",unified:"1F431",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cat","animal","meow","nature","pet","kitten"],sheet:[11,25]},taxi:{name:"Taxi",unified:"1F695",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["taxi","uber","vehicle","cars","transportation"],sheet:[25,27]},apple:{name:"Red Apple",unified:"1F34E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["apple","fruit","mac","school"],sheet:[6,11]},basketball:{name:"Basketball and Hoop",unified:"1F3C0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["basketball","sports","balls","NBA"],sheet:[8,27]},smiley:{name:"Smiling Face with Open Mouth",unified:"1F603",text:":)",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["=)","=-)"],keywords:["smiley","face","happy","joy","haha",":D",":)","smile","funny"],sheet:[22,36]},mouse:{name:"Mouse Face",unified:"1F42D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mouse","animal","nature","cheese_wedge","rodent"],sheet:[11,21]},calling:{name:"Mobile Phone with Rightwards Arrow at Left",unified:"1F4F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["calling","iphone","incoming"],sheet:[19,1]},blue_car:{name:"Recreational Vehicle",unified:"1F699",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["blue_car","transportation","vehicle"],sheet:[25,31]},pear:{name:"Pear",unified:"1F350",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pear","fruit","nature","food"],sheet:[6,13]},checkered_flag:{name:"Checkered Flag",unified:"1F3C1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["checkered_flag","contest","finishline","race","gokart"],sheet:[8,28]},green_heart:{name:"Green Heart",unified:"1F49A",text:"<3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["green_heart","love","like","affection","valentines"],sheet:[17,6]},football:{name:"American Football",unified:"1F3C8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["football","sports","balls","NFL"],sheet:[9,6]},smile:{name:"Smiling Face with Open Mouth and Smiling Eyes",unified:"1F604",text:":)",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["C:","c:",":D",":-D"],keywords:["smile","face","happy","joy","funny","haha","laugh","like",":D",":)"],sheet:[22,37]},tangerine:{name:"Tangerine",unified:"1F34A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tangerine","food","fruit","nature","orange"],sheet:[6,7]},bus:{name:"Bus",unified:"1F68C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bus","car","vehicle","transportation"],sheet:[25,18]},baseball:{name:"Baseball",unified:"26BE",variations:["26BE-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["baseball","sports","balls"],sheet:[2,6]},hamster:{name:"Hamster Face",unified:"1F439",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hamster","animal","nature"],sheet:[11,33]},blue_heart:{name:"Blue Heart",unified:"1F499",text:"<3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["blue_heart","love","like","affection","valentines"],sheet:[17,5]},grin:{name:"Grinning Face with Smiling Eyes",unified:"1F601",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["grin","face","happy","smile","joy","kawaii"],sheet:[22,34]},triangular_flag_on_post:{name:"Triangular Flag on Post",unified:"1F6A9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["triangular_flag_on_post","mark","milestone","place"],sheet:[26,3]},computer:{name:"Personal Computer",unified:"1F4BB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["computer","technology","laptop","screen","display","monitor"],sheet:[17,44]},tennis:{name:"Tennis Racquet and Ball",unified:"1F3BE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tennis","sports","balls","green"],sheet:[8,25]},trolleybus:{name:"Trolleybus",unified:"1F68E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["trolleybus","bart","transportation","vehicle"],sheet:[25,20]},laughing:{name:"Smiling Face with Open Mouth and Tightly-Closed Eyes",unified:"1F606",short_names:["satisfied"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":>",":->"],keywords:["laughing","happy","joy","lol","satisfied","haha","face","glad","XD","laugh"],sheet:[22,39]},rabbit:{name:"Rabbit Face",unified:"1F430",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rabbit","animal","nature","pet","spring","magic","bunny"],sheet:[11,24]},lemon:{name:"Lemon",unified:"1F34B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["lemon","fruit","nature"],sheet:[6,8]},keyboard:{name:"Keyboard",unified:"2328",variations:["2328-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["keyboard","technology","computer","type","input","text"],sheet:[0,16]},"rainbow-flag":{name:"Rainbow Flag",unified:"1F3F3-FE0F-200D-1F308",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,keywords:["rainbow_flag","flag","rainbow","pride","gay","lgbt","glbt","queer","homosexual","lesbian","bisexual","transgender"],sheet:[40,48]},purple_heart:{name:"Purple Heart",unified:"1F49C",text:"<3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["purple_heart","love","like","affection","valentines"],sheet:[17,8]},black_heart:{name:"Black Heart",unified:"1F5A4",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["black_heart","evil"],sheet:[22,7]},desktop_computer:{name:"Desktop Computer",unified:"1F5A5",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["desktop_computer","technology","computing","screen"],sheet:[22,8]},fox_face:{name:"Fox Face",unified:"1F98A",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["fox_face","animal","nature","face"],sheet:[30,39]},"flag-af":{name:"Afghanistan",unified:"1F1E6-1F1EB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["afghanistan","af","flag","nation","country","banner"],sheet:[31,14]},racing_car:{name:"Racing Car",unified:"1F3CE",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["racing_car","sports","race","fast","formula","f1"],sheet:[9,27]},volleyball:{name:"Volleyball",unified:"1F3D0",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["volleyball","sports","balls"],sheet:[9,29]},sweat_smile:{name:"Smiling Face with Open Mouth and Cold Sweat",unified:"1F605",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sweat_smile","face","hot","happy","laugh","sweat","smile","relief"],sheet:[22,38]},banana:{name:"Banana",unified:"1F34C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["banana","fruit","food","monkey"],sheet:[6,9]},"flag-ax":{name:"Aland Islands",unified:"1F1E6-1F1FD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["aland_islands","Åland","islands","flag","nation","country","banner"],sheet:[31,26]},rugby_football:{name:"Rugby Football",unified:"1F3C9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rugby_football","sports","team"],sheet:[9,7]},watermelon:{name:"Watermelon",unified:"1F349",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["watermelon","fruit","food","picnic","summer"],sheet:[6,6]},broken_heart:{name:"Broken Heart",unified:"1F494",text:"</3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["</3"],keywords:["broken_heart","sad","sorry","break","heart","heartbreak"],sheet:[17,0]},police_car:{name:"Police Car",unified:"1F693",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["police_car","vehicle","cars","transportation","law","legal","enforcement"],sheet:[25,25]},bear:{name:"Bear Face",unified:"1F43B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bear","animal","nature","wild"],sheet:[11,35]},joy:{name:"Face with Tears of Joy",unified:"1F602",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["joy","face","cry","tears","weep","happy","happytears","haha"],sheet:[22,35]},printer:{name:"Printer",unified:"1F5A8",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["printer","paper","ink"],sheet:[22,9]},ambulance:{name:"Ambulance",unified:"1F691",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ambulance","health","911","hospital"],sheet:[25,23]},panda_face:{name:"Panda Face",unified:"1F43C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["panda_face","animal","nature","panda"],sheet:[11,36]},heavy_heart_exclamation_mark_ornament:{name:"Heavy Heart Exclamation Mark Ornament",unified:"2763",variations:["2763-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["heavy_heart_exclamation","decoration","love"],sheet:[3,29]},grapes:{name:"Grapes",unified:"1F347",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["grapes","fruit","food","wine"],sheet:[6,4]},"8ball":{name:"Billiards",unified:"1F3B1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["8ball","pool","hobby","game","luck","magic"],sheet:[8,12]},"flag-al":{name:"Albania",unified:"1F1E6-1F1F1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["albania","al","flag","nation","country","banner"],sheet:[31,17]},rolling_on_the_floor_laughing:{name:"Rolling on the Floor Laughing",unified:"1F923",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["rofl","face","rolling","floor","laughing","lol","haha"],sheet:[28,29]},three_button_mouse:{name:"Three Button Mouse",unified:"1F5B1",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["computer_mouse","click"],sheet:[22,10]},trackball:{name:"Trackball",unified:"1F5B2",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["trackball","technology","trackpad"],sheet:[22,11]},fire_engine:{name:"Fire Engine",unified:"1F692",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fire_engine","transportation","cars","vehicle"],sheet:[25,24]},table_tennis_paddle_and_ball:{name:"Table Tennis Paddle and Ball",unified:"1F3D3",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["ping_pong","sports","pingpong"],sheet:[9,32]},two_hearts:{name:"Two Hearts",unified:"1F495",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["two_hearts","love","like","affection","valentines","heart"],sheet:[17,1]},"flag-dz":{name:"Algeria",unified:"1F1E9-1F1FF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["algeria","dz","flag","nation","country","banner"],sheet:[32,26]},koala:{name:"Koala",unified:"1F428",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["koala","animal","nature"],sheet:[11,16]},relaxed:{name:"White Smiling Face",unified:"263A",variations:["263A-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[1,17]},strawberry:{name:"Strawberry",unified:"1F353",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["strawberry","fruit","food","nature"],sheet:[6,16]},badminton_racquet_and_shuttlecock:{name:"Badminton Racquet and Shuttlecock",unified:"1F3F8",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["badminton","sports"],sheet:[10,17]},tiger:{name:"Tiger Face",unified:"1F42F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tiger","animal","cat","danger","wild","nature","roar"],sheet:[11,23]},"flag-as":{name:"American Samoa",unified:"1F1E6-1F1F8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["american_samoa","american","ws","flag","nation","country","banner"],sheet:[31,22]},revolving_hearts:{name:"Revolving Hearts",unified:"1F49E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["revolving_hearts","love","like","affection","valentines"],sheet:[17,10]},blush:{name:"Smiling Face with Smiling Eyes",unified:"1F60A",text:":)",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["blush","face","smile","happy","flushed","crush","embarrassed","shy","joy"],sheet:[22,43]},melon:{name:"Melon",unified:"1F348",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["melon","fruit","nature","food"],sheet:[6,5]},joystick:{name:"Joystick",unified:"1F579",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["joystick","game","play"],sheet:[21,26]},minibus:{name:"Minibus",unified:"1F690",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["minibus","vehicle","car","transportation"],sheet:[25,22]},goal_net:{name:"Goal Net",unified:"1F945",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["goal_net","sports"],sheet:[30,8]},innocent:{name:"Smiling Face with Halo",unified:"1F607",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["innocent","face","angel","heaven","halo"],sheet:[22,40]},compression:{name:"Compression",unified:"1F5DC",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["clamp","tool"],sheet:[22,19]},heartbeat:{name:"Beating Heart",unified:"1F493",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["heartbeat","love","like","affection","valentines","pink","heart"],sheet:[16,48]},lion_face:{name:"Lion Face",unified:"1F981",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["lion","animal","nature"],sheet:[30,30]},"flag-ad":{name:"Andorra",unified:"1F1E6-1F1E9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["andorra","ad","flag","nation","country","banner"],sheet:[31,12]},cherries:{name:"Cherries",unified:"1F352",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cherries","food","fruit"],sheet:[6,15]},truck:{name:"Delivery Truck",unified:"1F69A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["truck","cars","transportation"],sheet:[25,32]},ice_hockey_stick_and_puck:{name:"Ice Hockey Stick and Puck",unified:"1F3D2",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["ice_hockey","sports"],sheet:[9,31]},minidisc:{name:"Minidisc",unified:"1F4BD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["minidisc","technology","record","data","disk","90s"],sheet:[17,46]},"flag-ao":{name:"Angola",unified:"1F1E6-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["angola","ao","flag","nation","country","banner"],sheet:[31,19]},articulated_lorry:{name:"Articulated Lorry",unified:"1F69B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["articulated_lorry","vehicle","cars","transportation","express"],sheet:[25,33]},peach:{name:"Peach",unified:"1F351",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["peach","fruit","nature","food"],sheet:[6,14]},cow:{name:"Cow Face",unified:"1F42E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cow","beef","ox","animal","nature","moo","milk"],sheet:[11,22]},heartpulse:{name:"Growing Heart",unified:"1F497",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["heartpulse","like","love","affection","valentines","pink"],sheet:[17,3]},slightly_smiling_face:{name:"Slightly Smiling Face",unified:"1F642",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":)","(:",":-)"],keywords:["slightly_smiling_face","face","smile"],sheet:[24,1]},floppy_disk:{name:"Floppy Disk",unified:"1F4BE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["floppy_disk","oldschool","technology","save","90s","80s"],sheet:[17,47]},sparkling_heart:{name:"Sparkling Heart",unified:"1F496",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sparkling_heart","love","like","affection","valentines"],sheet:[17,2]},tractor:{name:"Tractor",unified:"1F69C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tractor","vehicle","car","farming","agriculture"],sheet:[25,34]},pineapple:{name:"Pineapple",unified:"1F34D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pineapple","fruit","nature","food"],sheet:[6,10]},upside_down_face:{name:"Upside-Down Face",unified:"1F643",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["upside_down_face","face","flipped","silly","smile"],sheet:[24,2]},pig:{name:"Pig Face",unified:"1F437",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pig","animal","oink","nature"],sheet:[11,31]},field_hockey_stick_and_ball:{name:"Field Hockey Stick and Ball",unified:"1F3D1",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["field_hockey","sports"],sheet:[9,30]},"flag-ai":{name:"Anguilla",unified:"1F1E6-1F1EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["anguilla","ai","flag","nation","country","banner"],sheet:[31,16]},wink:{name:"Winking Face",unified:"1F609",text:";)",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[";)",";-)"],keywords:["wink","face","happy","mischievous","secret",";)","smile","eye"],sheet:[22,42]},pig_nose:{name:"Pig Nose",unified:"1F43D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pig_nose","animal","oink"],sheet:[11,37]},kiwifruit:{name:"Kiwifruit",unified:"1F95D",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["kiwi_fruit","fruit","food"],sheet:[30,27]},cd:{name:"Optical Disc",unified:"1F4BF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cd","technology","dvd","disk","disc","90s"],sheet:[17,48]},cricket_bat_and_ball:{name:"Cricket Bat and Ball",unified:"1F3CF",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["cricket","sports"],sheet:[9,28]},cupid:{name:"Heart with Arrow",unified:"1F498",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cupid","love","like","heart","affection","valentines"],sheet:[17,4]},scooter:{name:"Scooter",unified:"1F6F4",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["kick_scooter","vehicle","kick","razor"],sheet:[27,27]},"flag-aq":{name:"Antarctica",unified:"1F1E6-1F1F6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["antarctica","aq","flag","nation","country","banner"],sheet:[31,20]},relieved:{name:"Relieved Face",unified:"1F60C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["relieved","face","relaxed","phew","massage","happiness"],sheet:[22,45]},frog:{name:"Frog Face",unified:"1F438",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["frog","animal","nature","croak","toad"],sheet:[11,32]},bike:{name:"Bicycle",unified:"1F6B2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bike","sports","bicycle","exercise","hipster"],sheet:[26,12]},"flag-ag":{name:"Antigua Barbuda",unified:"1F1E6-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["antigua_barbuda","antigua","barbuda","flag","nation","country","banner"],sheet:[31,15]},golf:{name:"Flag in Hole",unified:"26F3",variations:["26F3-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["golf","sports","business","flag","hole","summer"],sheet:[2,20]},dvd:{name:"Dvd",unified:"1F4C0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dvd","cd","disk","disc"],sheet:[18,0]},gift_heart:{name:"Heart with Ribbon",unified:"1F49D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["gift_heart","love","valentines"],sheet:[17,9]},avocado:{name:"Avocado",unified:"1F951",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["avocado","fruit","food"],sheet:[30,15]},tomato:{name:"Tomato",unified:"1F345",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tomato","fruit","vegetable","nature","food"],sheet:[6,2]},vhs:{name:"Videocassette",unified:"1F4FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["vhs","record","video","oldschool","90s","80s"],sheet:[19,11]},"flag-ar":{name:"Argentina",unified:"1F1E6-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["argentina","ar","flag","nation","country","banner"],sheet:[31,21]},heart_decoration:{name:"Heart Decoration",unified:"1F49F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["heart_decoration","purple-square","love","like"],sheet:[17,11]},motor_scooter:{name:"Motor Scooter",unified:"1F6F5",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["motor_scooter","vehicle","vespa","sasha"],sheet:[27,28]},bow_and_arrow:{name:"Bow and Arrow",unified:"1F3F9",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["bow_and_arrow","sports"],sheet:[10,18]},monkey_face:{name:"Monkey Face",unified:"1F435",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":o)"],keywords:["monkey_face","animal","nature","circus"],sheet:[11,29]},heart_eyes:{name:"Smiling Face with Heart-Shaped Eyes",unified:"1F60D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["heart_eyes","face","love","like","affection","valentines","infatuation","crush","heart"],sheet:[22,46]},"flag-am":{name:"Armenia",unified:"1F1E6-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["armenia","am","flag","nation","country","banner"],sheet:[31,18]},peace_symbol:{name:"Peace Symbol",unified:"262E",variations:["262E-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["peace_symbol","hippie"],sheet:[1,13]},camera:{name:"Camera",unified:"1F4F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["camera","gadgets","photography"],sheet:[19,6]},kissing_heart:{name:"Face Throwing a Kiss",unified:"1F618",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":*",":-*"],keywords:["kissing_heart","face","love","like","affection","valentines","infatuation","kiss"],sheet:[23,8]},racing_motorcycle:{name:"Racing Motorcycle",unified:"1F3CD",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["motorcycle","race","sports","fast"],sheet:[9,26]},eggplant:{name:"Aubergine",unified:"1F346",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["eggplant","vegetable","nature","food","aubergine"],sheet:[6,3]},see_no_evil:{name:"See-No-Evil Monkey",unified:"1F648",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["see_no_evil","monkey","animal","nature","haha"],sheet:[24,22]},fishing_pole_and_fish:{name:"Fishing Pole and Fish",unified:"1F3A3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fishing_pole_and_fish","food","hobby","summer"],sheet:[7,47]},boxing_glove:{name:"Boxing Glove",unified:"1F94A",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["boxing_glove","sports","fighting"],sheet:[30,12]},rotating_light:{name:"Police Cars Revolving Light",unified:"1F6A8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rotating_light","police","ambulance","911","emergency","alert","error","pinged","law","legal"],sheet:[26,2]},hear_no_evil:{name:"Hear-No-Evil Monkey",unified:"1F649",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hear_no_evil","animal","monkey","nature"],sheet:[24,23]},kissing:{name:"Kissing Face",unified:"1F617",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kissing","love","like","face","3","valentines","infatuation","kiss"],sheet:[23,7]},"flag-aw":{name:"Aruba",unified:"1F1E6-1F1FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["aruba","aw","flag","nation","country","banner"],sheet:[31,25]},camera_with_flash:{name:"Camera with Flash",unified:"1F4F8",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["camera_flash","photography","gadgets"],sheet:[19,7]},latin_cross:{name:"Latin Cross",unified:"271D",variations:["271D-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["latin_cross","christianity"],sheet:[3,16]},cucumber:{name:"Cucumber",unified:"1F952",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["cucumber","fruit","food","pickle"],sheet:[30,16]},"flag-au":{name:"Australia",unified:"1F1E6-1F1FA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["australia","au","flag","nation","country","banner"],sheet:[31,24]},star_and_crescent:{name:"Star and Crescent",unified:"262A",variations:["262A-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["star_and_crescent","islam"],sheet:[1,12]},video_camera:{name:"Video Camera",unified:"1F4F9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["video_camera","film","record"],sheet:[19,8]},carrot:{name:"Carrot",unified:"1F955",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["carrot","vegetable","food","orange"],sheet:[30,19]},kissing_smiling_eyes:{name:"Kissing Face with Smiling Eyes",unified:"1F619",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kissing_smiling_eyes","face","affection","valentines","infatuation","kiss"],sheet:[23,9]},speak_no_evil:{name:"Speak-No-Evil Monkey",unified:"1F64A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["speak_no_evil","monkey","animal","nature","omg"],sheet:[24,24]},martial_arts_uniform:{name:"Martial Arts Uniform",unified:"1F94B",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["martial_arts_uniform","judo","karate","taekwondo"],sheet:[30,13]},oncoming_police_car:{name:"Oncoming Police Car",unified:"1F694",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["oncoming_police_car","vehicle","law","legal","enforcement","911"],sheet:[25,26]},oncoming_bus:{name:"Oncoming Bus",unified:"1F68D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["oncoming_bus","vehicle","transportation"],sheet:[25,19]},movie_camera:{name:"Movie Camera",unified:"1F3A5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["movie_camera","film","record"],sheet:[8,0]},corn:{name:"Ear of Maize",unified:"1F33D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["corn","food","vegetable","plant"],sheet:[5,43]},om_symbol:{name:"Om Symbol",unified:"1F549",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["om","hinduism","buddhism","sikhism","jainism"],sheet:[20,27]},monkey:{name:"Monkey",unified:"1F412",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["monkey","animal","nature","banana","circus"],sheet:[10,43]},ice_skate:{name:"Ice Skate",unified:"26F8",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["ice_skate","sports"],sheet:[2,24]},kissing_closed_eyes:{name:"Kissing Face with Closed Eyes",unified:"1F61A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kissing_closed_eyes","face","love","like","affection","valentines","infatuation","kiss"],sheet:[23,10]},"flag-at":{name:"Austria",unified:"1F1E6-1F1F9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["austria","at","flag","nation","country","banner"],sheet:[31,23]},film_projector:{name:"Film Projector",unified:"1F4FD",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["film_projector","video","tape","record","movie"],sheet:[19,12]},hot_pepper:{name:"Hot Pepper",unified:"1F336",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["hot_pepper","food","spicy","chilli","chili"],sheet:[5,36]},oncoming_automobile:{name:"Oncoming Automobile",unified:"1F698",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["oncoming_automobile","car","vehicle","transportation"],sheet:[25,30]},yum:{name:"Face Savouring Delicious Food",unified:"1F60B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["yum","happy","joy","tongue","smile","face","silly","yummy","nom","delicious","savouring"],sheet:[22,44]},chicken:{name:"Chicken",unified:"1F414",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["chicken","animal","cluck","nature","bird"],sheet:[10,45]},"flag-az":{name:"Azerbaijan",unified:"1F1E6-1F1FF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["azerbaijan","az","flag","nation","country","banner"],sheet:[31,27]},wheel_of_dharma:{name:"Wheel of Dharma",unified:"2638",variations:["2638-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["wheel_of_dharma","hinduism","buddhism","sikhism","jainism"],sheet:[1,15]},ski:{name:"Ski and Ski Boot",unified:"1F3BF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ski","sports","winter","cold","snow"],sheet:[8,26]},"flag-bs":{name:"Bahamas",unified:"1F1E7-1F1F8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bahamas","bs","flag","nation","country","banner"],sheet:[31,43]},stuck_out_tongue_winking_eye:{name:"Face with Stuck-out Tongue and Winking Eye",unified:"1F61C",text:";p",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[";p",";-p",";b",";-b",";P",";-P"],keywords:["stuck_out_tongue_winking_eye","face","prank","childish","playful","mischievous","smile","wink","tongue"],sheet:[23,12]},star_of_david:{name:"Star of David",unified:"2721",variations:["2721-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["star_of_david","judaism"],sheet:[3,17]},potato:{name:"Potato",unified:"1F954",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["potato","food","tuber","vegatable","starch"],sheet:[30,18]},skier:{name:"Skier",unified:"26F7",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["skier","sports","winter","snow"],sheet:[2,23]},oncoming_taxi:{name:"Oncoming Taxi",unified:"1F696",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["oncoming_taxi","vehicle","cars","uber"],sheet:[25,28]},film_frames:{name:"Film Frames",unified:"1F39E",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["film_strip","movie"],sheet:[7,42]},penguin:{name:"Penguin",unified:"1F427",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["penguin","animal","nature"],sheet:[11,15]},telephone_receiver:{name:"Telephone Receiver",unified:"1F4DE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["telephone_receiver","technology","communication","dial"],sheet:[18,30]},"flag-bh":{name:"Bahrain",unified:"1F1E7-1F1ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bahrain","bh","flag","nation","country","banner"],sheet:[31,34]},snowboarder:{name:"Snowboarder",unified:"1F3C2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C2-1F3FB",image:"1f3c2-1f3fb.png",sheet_x:8,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3C2-1F3FC",image:"1f3c2-1f3fc.png",sheet_x:8,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3C2-1F3FD",image:"1f3c2-1f3fd.png",sheet_x:8,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3C2-1F3FE",image:"1f3c2-1f3fe.png",sheet_x:8,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3C2-1F3FF",image:"1f3c2-1f3ff.png",sheet_x:8,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true}},keywords:["snowboarder","sports","winter"],sheet:[8,29]},sweet_potato:{name:"Roasted Sweet Potato",unified:"1F360",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sweet_potato","food","nature"],sheet:[6,29]},stuck_out_tongue_closed_eyes:{name:"Face with Stuck-out Tongue and Tightly-Closed Eyes",unified:"1F61D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["stuck_out_tongue_closed_eyes","face","prank","playful","mischievous","smile","tongue"],sheet:[23,13]},bird:{name:"Bird",unified:"1F426",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bird","animal","nature","fly","tweet","spring"],sheet:[11,14]},aerial_tramway:{name:"Aerial Tramway",unified:"1F6A1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["aerial_tramway","transportation","vehicle","ski"],sheet:[25,39]},six_pointed_star:{name:"Six Pointed Star with Middle Dot",unified:"1F52F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["six_pointed_star","purple-square","religion","jewish","hexagram"],sheet:[20,12]},menorah_with_nine_branches:{name:"Menorah with Nine Branches",unified:"1F54E",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["menorah","hanukkah","candles","jewish"],sheet:[20,32]},phone:{name:"Black Telephone",unified:"260E",variations:["260E-FE0F"],short_names:["telephone"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,46]},baby_chick:{name:"Baby Chick",unified:"1F424",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["baby_chick","animal","chicken","bird"],sheet:[11,12]},chestnut:{name:"Chestnut",unified:"1F330",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["chestnut","food","squirrel"],sheet:[5,30]},stuck_out_tongue:{name:"Face with Stuck-out Tongue",unified:"1F61B",text:":p",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":p",":-p",":P",":-P",":b",":-b"],keywords:["stuck_out_tongue","face","prank","childish","playful","mischievous","smile","tongue"],sheet:[23,11]},"woman-lifting-weights":{name:"Woman Lifting Weights",unified:"1F3CB-FE0F-200D-2640-FE0F",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CB-1F3FB-200D-2640-FE0F",image:"1f3cb-1f3fb-200d-2640-fe0f.png",sheet_x:40,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CB-1F3FC-200D-2640-FE0F",image:"1f3cb-1f3fc-200d-2640-fe0f.png",sheet_x:40,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CB-1F3FD-200D-2640-FE0F",image:"1f3cb-1f3fd-200d-2640-fe0f.png",sheet_x:40,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CB-1F3FE-200D-2640-FE0F",image:"1f3cb-1f3fe-200d-2640-fe0f.png",sheet_x:40,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CB-1F3FF-200D-2640-FE0F",image:"1f3cb-1f3ff-200d-2640-fe0f.png",sheet_x:40,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["weight_lifting_woman","sports","training","exercise","woman","female"],sheet:[40,24]},"flag-bd":{name:"Bangladesh",unified:"1F1E7-1F1E9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bangladesh","bd","flag","nation","country","banner"],sheet:[31,30]},mountain_cableway:{name:"Mountain Cableway",unified:"1F6A0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mountain_cableway","transportation","vehicle","ski"],sheet:[25,38]},yin_yang:{name:"Yin Yang",unified:"262F",variations:["262F-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["yin_yang","balance"],sheet:[1,14]},money_mouth_face:{name:"Money-Mouth Face",unified:"1F911",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["money_mouth_face","face","rich","dollar","money"],sheet:[27,31]},suspension_railway:{name:"Suspension Railway",unified:"1F69F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["suspension_railway","vehicle","transportation"],sheet:[25,37]},"flag-bb":{name:"Barbados",unified:"1F1E7-1F1E7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["barbados","bb","flag","nation","country","banner"],sheet:[31,29]},peanuts:{name:"Peanuts",unified:"1F95C",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["peanuts","food","nut"],sheet:[30,26]},pager:{name:"Pager",unified:"1F4DF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pager","bbcall","oldschool","90s"],sheet:[18,31]},hatching_chick:{name:"Hatching Chick",unified:"1F423",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hatching_chick","animal","chicken","egg","born","baby","bird"],sheet:[11,11]},weight_lifter:{name:"Weight Lifter",unified:"1F3CB",variations:["1F3CB-FE0F"],added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CB-1F3FB",image:"1f3cb-1f3fb.png",sheet_x:9,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F3CB-1F3FC",image:"1f3cb-1f3fc.png",sheet_x:9,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F3CB-1F3FD",image:"1f3cb-1f3fd.png",sheet_x:9,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F3CB-1F3FE",image:"1f3cb-1f3fe.png",sheet_x:9,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F3CB-1F3FF",image:"1f3cb-1f3ff.png",sheet_x:9,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},obsoleted_by:"1F3CB-FE0F-200D-2642-FE0F",keywords:["weight_lifting_man","sports","training","exercise"],sheet:[9,14]},fax:{name:"Fax Machine",unified:"1F4E0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fax","communication","technology"],sheet:[18,32]},hugging_face:{name:"Hugging Face",unified:"1F917",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["hugs","face","smile","hug"],sheet:[27,37]},railway_car:{name:"Railway Car",unified:"1F683",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["railway_car","transportation","vehicle"],sheet:[25,9]},fencer:{name:"Fencer",unified:"1F93A",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["person_fencing","sports","fencing","sword"],sheet:[29,38]},hatched_chick:{name:"Front-Facing Baby Chick",unified:"1F425",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hatched_chick","animal","chicken","baby","bird"],sheet:[11,13]},"flag-by":{name:"Belarus",unified:"1F1E7-1F1FE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["belarus","by","flag","nation","country","banner"],sheet:[31,47]},honey_pot:{name:"Honey Pot",unified:"1F36F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["honey_pot","bees","sweet","kitchen"],sheet:[6,44]},orthodox_cross:{name:"Orthodox Cross",unified:"2626",variations:["2626-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["orthodox_cross","suppedaneum","religion"],sheet:[1,11]},duck:{name:"Duck",unified:"1F986",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["duck","animal","nature","bird","mallard"],sheet:[30,35]},train:{name:"Tram Car",unified:"1F68B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["train","transportation","vehicle","carriage","public","travel"],sheet:[25,17]},nerd_face:{name:"Nerd Face",unified:"1F913",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["nerd_face","face","nerdy","geek","dork"],sheet:[27,33]},croissant:{name:"Croissant",unified:"1F950",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["croissant","food","bread","french"],sheet:[30,14]},place_of_worship:{name:"Place of Worship",unified:"1F6D0",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["place_of_worship","religion","church","temple","prayer"],sheet:[27,13]},wrestlers:{name:"Wrestlers",unified:"1F93C",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,sheet:[29,39]},"flag-be":{name:"Belgium",unified:"1F1E7-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["belgium","be","flag","nation","country","banner"],sheet:[31,31]},tv:{name:"Television",unified:"1F4FA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tv","technology","program","oldschool","show","television"],sheet:[19,9]},sunglasses:{name:"Smiling Face with Sunglasses",unified:"1F60E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["8)"],keywords:["sunglasses","face","cool","smile","summer","beach","sunglass"],sheet:[22,47]},ophiuchus:{name:"Ophiuchus",unified:"26CE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ophiuchus","sign","purple-square","constellation","astrology"],sheet:[2,10]},bread:{name:"Bread",unified:"1F35E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bread","food","wheat","breakfast","toast"],sheet:[6,27]},"flag-bz":{name:"Belize",unified:"1F1E7-1F1FF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["belize","bz","flag","nation","country","banner"],sheet:[31,48]},"woman-wrestling":{name:"Woman Wrestling",unified:"1F93C-200D-2640-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,keywords:["women_wrestling","sports","wrestlers"],sheet:[47,48]},eagle:{name:"Eagle",unified:"1F985",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["eagle","animal","nature","bird"],sheet:[30,34]},mountain_railway:{name:"Mountain Railway",unified:"1F69E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mountain_railway","transportation","vehicle"],sheet:[25,36]},radio:{name:"Radio",unified:"1F4FB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["radio","communication","music","podcast","program"],sheet:[19,10]},monorail:{name:"Monorail",unified:"1F69D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["monorail","transportation","vehicle"],sheet:[25,35]},"flag-bj":{name:"Benin",unified:"1F1E7-1F1EF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["benin","bj","flag","nation","country","banner"],sheet:[31,36]},owl:{name:"Owl",unified:"1F989",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["owl","animal","nature","bird","hoot"],sheet:[30,38]},clown_face:{name:"Clown Face",unified:"1F921",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["clown_face","face"],sheet:[28,27]},aries:{name:"Aries",unified:"2648",variations:["2648-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["aries","sign","purple-square","zodiac","astrology"],sheet:[1,20]},"man-wrestling":{name:"Man Wrestling",unified:"1F93C-200D-2642-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,keywords:["men_wrestling","sports","wrestlers"],sheet:[48,0]},studio_microphone:{name:"Studio Microphone",unified:"1F399",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["studio_microphone","sing","recording","artist","talkshow"],sheet:[7,39]},baguette_bread:{name:"Baguette Bread",unified:"1F956",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["baguette_bread","food","bread","french"],sheet:[30,20]},"flag-bm":{name:"Bermuda",unified:"1F1E7-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bermuda","bm","flag","nation","country","banner"],sheet:[31,38]},person_doing_cartwheel:{name:"Person Doing Cartwheel",unified:"1F938",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F938-1F3FB",image:"1f938-1f3fb.png",sheet_x:29,sheet_y:27,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F938-1F3FC",image:"1f938-1f3fc.png",sheet_x:29,sheet_y:28,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F938-1F3FD",image:"1f938-1f3fd.png",sheet_x:29,sheet_y:29,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F938-1F3FE",image:"1f938-1f3fe.png",sheet_x:29,sheet_y:30,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F938-1F3FF",image:"1f938-1f3ff.png",sheet_x:29,sheet_y:31,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},sheet:[29,26]},taurus:{name:"Taurus",unified:"2649",variations:["2649-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["taurus","purple-square","sign","zodiac","astrology"],sheet:[1,21]},level_slider:{name:"Level Slider",unified:"1F39A",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["level_slider","scale"],sheet:[7,40]},bat:{name:"Bat",unified:"1F987",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["bat","animal","nature","blind","vampire"],sheet:[30,36]},face_with_cowboy_hat:{name:"Face with Cowboy Hat",unified:"1F920",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["cowboy_hat_face","face","cowgirl","hat"],sheet:[28,26]},cheese_wedge:{name:"Cheese Wedge",unified:"1F9C0",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["cheese","food","chadder"],sheet:[30,47]},bullettrain_side:{name:"High-Speed Train",unified:"1F684",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bullettrain_side","transportation","vehicle"],sheet:[25,10]},smirk:{name:"Smirking Face",unified:"1F60F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["smirk","face","smile","mean","prank","smug","sarcasm"],sheet:[22,48]},"flag-bt":{name:"Bhutan",unified:"1F1E7-1F1F9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bhutan","bt","flag","nation","country","banner"],sheet:[31,44]},gemini:{name:"Gemini",unified:"264A",variations:["264A-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["gemini","sign","zodiac","purple-square","astrology"],sheet:[1,22]},bullettrain_front:{name:"High-Speed Train with Bullet Nose",unified:"1F685",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bullettrain_front","transportation","vehicle","speed","fast","public","travel"],sheet:[25,11]},egg:{name:"Egg",unified:"1F95A",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["egg","food","chicken","breakfast"],sheet:[30,24]},wolf:{name:"Wolf Face",unified:"1F43A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["wolf","animal","nature","wild"],sheet:[11,34]},control_knobs:{name:"Control Knobs",unified:"1F39B",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["control_knobs","dial"],sheet:[7,41]},"woman-cartwheeling":{name:"Woman Cartwheeling",unified:"1F938-200D-2640-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F938-1F3FB-200D-2640-FE0F",image:"1f938-1f3fb-200d-2640-fe0f.png",sheet_x:47,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F938-1F3FC-200D-2640-FE0F",image:"1f938-1f3fc-200d-2640-fe0f.png",sheet_x:47,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F938-1F3FD-200D-2640-FE0F",image:"1f938-1f3fd-200d-2640-fe0f.png",sheet_x:47,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F938-1F3FE-200D-2640-FE0F",image:"1f938-1f3fe-200d-2640-fe0f.png",sheet_x:47,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F938-1F3FF-200D-2640-FE0F",image:"1f938-1f3ff-200d-2640-fe0f.png",sheet_x:47,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["woman_cartwheeling","gymnastics"],sheet:[47,24]},stopwatch:{name:"Stopwatch",unified:"23F1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["stopwatch","time","deadline"],sheet:[0,26]},unamused:{name:"Unamused Face",unified:"1F612",text:":(",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["unamused","indifference","bored","straight face","serious","sarcasm"],sheet:[23,2]},light_rail:{name:"Light Rail",unified:"1F688",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["light_rail","transportation","vehicle"],sheet:[25,14]},boar:{name:"Boar",unified:"1F417",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["boar","animal","nature"],sheet:[10,48]},"flag-bo":{name:"Bolivia",unified:"1F1E7-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bolivia","bo","flag","nation","country","banner"],sheet:[31,40]},"man-cartwheeling":{name:"Man Cartwheeling",unified:"1F938-200D-2642-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F938-1F3FB-200D-2642-FE0F",image:"1f938-1f3fb-200d-2642-fe0f.png",sheet_x:47,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F938-1F3FC-200D-2642-FE0F",image:"1f938-1f3fc-200d-2642-fe0f.png",sheet_x:47,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F938-1F3FD-200D-2642-FE0F",image:"1f938-1f3fd-200d-2642-fe0f.png",sheet_x:47,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F938-1F3FE-200D-2642-FE0F",image:"1f938-1f3fe-200d-2642-fe0f.png",sheet_x:47,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F938-1F3FF-200D-2642-FE0F",image:"1f938-1f3ff-200d-2642-fe0f.png",sheet_x:47,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["man_cartwheeling","gymnastics"],sheet:[47,30]},fried_egg:{name:"Cooking",unified:"1F373",short_names:["cooking"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fried_egg","food","breakfast","kitchen","egg"],sheet:[6,48]},cancer:{name:"Cancer",unified:"264B",variations:["264B-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cancer","sign","zodiac","purple-square","astrology"],sheet:[1,23]},leo:{name:"Leo",unified:"264C",variations:["264C-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["leo","sign","purple-square","zodiac","astrology"],sheet:[1,24]},disappointed:{name:"Disappointed Face",unified:"1F61E",text:":(",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["):",":(",":-("],keywords:["disappointed","face","sad","upset","depressed",":("],sheet:[23,14]},timer_clock:{name:"Timer Clock",unified:"23F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["timer_clock","alarm"],sheet:[0,27]},steam_locomotive:{name:"Steam Locomotive",unified:"1F682",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["steam_locomotive","transportation","vehicle","train"],sheet:[25,8]},horse:{name:"Horse Face",unified:"1F434",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["horse","animal","brown","nature"],sheet:[11,28]},"flag-bq":{name:"Caribbean Netherlands",unified:"1F1E7-1F1F6",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["caribbean_netherlands","bonaire","flag","nation","country","banner"],sheet:[31,41]},bacon:{name:"Bacon",unified:"1F953",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["bacon","food","breakfast","pork","pig","meat"],sheet:[30,17]},"woman-bouncing-ball":{name:"Woman Bouncing Ball",unified:"26F9-FE0F-200D-2640-FE0F",added_in:"5.2",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"26F9-1F3FB-200D-2640-FE0F",image:"26f9-1f3fb-200d-2640-fe0f.png",sheet_x:48,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"26F9-1F3FC-200D-2640-FE0F",image:"26f9-1f3fc-200d-2640-fe0f.png",sheet_x:48,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"26F9-1F3FD-200D-2640-FE0F",image:"26f9-1f3fd-200d-2640-fe0f.png",sheet_x:48,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"26F9-1F3FE-200D-2640-FE0F",image:"26f9-1f3fe-200d-2640-fe0f.png",sheet_x:48,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"26F9-1F3FF-200D-2640-FE0F",image:"26f9-1f3ff-200d-2640-fe0f.png",sheet_x:48,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["basketball_woman","sports","human","woman","female"],sheet:[48,25]},pensive:{name:"Pensive Face",unified:"1F614",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pensive","face","sad","depressed","upset"],sheet:[23,4]},"train2":{name:"Train",unified:"1F686",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["train2","transportation","vehicle"],sheet:[25,12]},virgo:{name:"Virgo",unified:"264D",variations:["264D-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["virgo","sign","zodiac","purple-square","astrology"],sheet:[1,25]},person_with_ball:{name:"Person with Ball",unified:"26F9",variations:["26F9-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"26F9-1F3FB",image:"26f9-1f3fb.png",sheet_x:2,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"26F9-1F3FC",image:"26f9-1f3fc.png",sheet_x:2,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"26F9-1F3FD",image:"26f9-1f3fd.png",sheet_x:2,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"26F9-1F3FE",image:"26f9-1f3fe.png",sheet_x:2,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"26F9-1F3FF",image:"26f9-1f3ff.png",sheet_x:2,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},obsoleted_by:"26F9-FE0F-200D-2642-FE0F",keywords:["basketball_man","sports","human"],sheet:[2,25]},"flag-ba":{name:"Bosnia Herzegovina",unified:"1F1E7-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["bosnia_herzegovina","bosnia","herzegovina","flag","nation","country","banner"],sheet:[31,28]},pancakes:{name:"Pancakes",unified:"1F95E",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["pancakes","food","breakfast","flapjacks","hotcakes"],sheet:[30,28]},unicorn_face:{name:"Unicorn Face",unified:"1F984",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["unicorn","animal","nature","mystical"],sheet:[30,33]},alarm_clock:{name:"Alarm Clock",unified:"23F0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["alarm_clock","time","wake"],sheet:[0,25]},handball:{name:"Handball",unified:"1F93E",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93E-1F3FB",image:"1f93e-1f3fb.png",sheet_x:29,sheet_y:47,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F93E-1F3FC",image:"1f93e-1f3fc.png",sheet_x:29,sheet_y:48,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F93E-1F3FD",image:"1f93e-1f3fd.png",sheet_x:30,sheet_y:0,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F93E-1F3FE",image:"1f93e-1f3fe.png",sheet_x:30,sheet_y:1,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F93E-1F3FF",image:"1f93e-1f3ff.png",sheet_x:30,sheet_y:2,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},sheet:[29,46]},fried_shrimp:{name:"Fried Shrimp",unified:"1F364",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fried_shrimp","food","animal","appetizer","summer"],sheet:[6,33]},"flag-bw":{name:"Botswana",unified:"1F1E7-1F1FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["botswana","bw","flag","nation","country","banner"],sheet:[31,46]},worried:{name:"Worried Face",unified:"1F61F",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["worried","face","concern","nervous",":("],sheet:[23,15]},mantelpiece_clock:{name:"Mantelpiece Clock",unified:"1F570",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["mantelpiece_clock","time"],sheet:[21,9]},libra:{name:"Libra",unified:"264E",variations:["264E-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["libra","sign","purple-square","zodiac","astrology"],sheet:[1,26]},metro:{name:"Metro",unified:"1F687",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["metro","transportation","blue-square","mrt","underground","tube"],sheet:[25,13]},bee:{name:"Honeybee",unified:"1F41D",short_names:["honeybee"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["honeybee","animal","insect","nature","bug","spring","honey"],sheet:[11,5]},hourglass:{name:"Hourglass",unified:"231B",variations:["231B-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hourglass","time","clock","oldschool","limit","exam","quiz","test"],sheet:[0,15]},"flag-br":{name:"Brazil",unified:"1F1E7-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["brazil","br","flag","nation","country","banner"],sheet:[31,42]},tram:{name:"Tram",unified:"1F68A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tram","transportation","vehicle"],sheet:[25,16]},scorpius:{name:"Scorpius",unified:"264F",variations:["264F-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["scorpius","sign","zodiac","purple-square","astrology","scorpio"],sheet:[1,27]},poultry_leg:{name:"Poultry Leg",unified:"1F357",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["poultry_leg","food","meat","drumstick","bird","chicken","turkey"],sheet:[6,20]},"woman-playing-handball":{name:"Woman Playing Handball",unified:"1F93E-200D-2640-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93E-1F3FB-200D-2640-FE0F",image:"1f93e-1f3fb-200d-2640-fe0f.png",sheet_x:48,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93E-1F3FC-200D-2640-FE0F",image:"1f93e-1f3fc-200d-2640-fe0f.png",sheet_x:48,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93E-1F3FD-200D-2640-FE0F",image:"1f93e-1f3fd-200d-2640-fe0f.png",sheet_x:48,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93E-1F3FE-200D-2640-FE0F",image:"1f93e-1f3fe-200d-2640-fe0f.png",sheet_x:48,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93E-1F3FF-200D-2640-FE0F",image:"1f93e-1f3ff-200d-2640-fe0f.png",sheet_x:48,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["woman_playing_handball","sports"],sheet:[48,13]},bug:{name:"Bug",unified:"1F41B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bug","animal","insect","nature","worm"],sheet:[11,3]},confused:{name:"Confused Face",unified:"1F615",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":\\",":-\\",":/",":-/"],keywords:["confused","face","indifference","huh","weird","hmmm",":/"],sheet:[23,5]},sagittarius:{name:"Sagittarius",unified:"2650",variations:["2650-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sagittarius","sign","zodiac","purple-square","astrology"],sheet:[1,28]},butterfly:{name:"Butterfly",unified:"1F98B",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["butterfly","animal","insect","nature","caterpillar"],sheet:[30,40]},hourglass_flowing_sand:{name:"Hourglass with Flowing Sand",unified:"23F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hourglass_flowing_sand","oldschool","time","countdown"],sheet:[0,28]},"flag-io":{name:"British Indian Ocean Territory",unified:"1F1EE-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["british_indian_ocean_territory","british","indian","ocean","territory","flag","nation","country","banner"],sheet:[33,24]},slightly_frowning_face:{name:"Slightly Frowning Face",unified:"1F641",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["slightly_frowning_face","face","frowning","disappointed","sad","upset"],sheet:[24,0]},station:{name:"Station",unified:"1F689",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["station","transportation","vehicle","public"],sheet:[25,15]},meat_on_bone:{name:"Meat on Bone",unified:"1F356",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["meat_on_bone","good","food","drumstick"],sheet:[6,19]},"man-playing-handball":{name:"Man Playing Handball",unified:"1F93E-200D-2642-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93E-1F3FB-200D-2642-FE0F",image:"1f93e-1f3fb-200d-2642-fe0f.png",sheet_x:48,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93E-1F3FC-200D-2642-FE0F",image:"1f93e-1f3fc-200d-2642-fe0f.png",sheet_x:48,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93E-1F3FD-200D-2642-FE0F",image:"1f93e-1f3fd-200d-2642-fe0f.png",sheet_x:48,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93E-1F3FE-200D-2642-FE0F",image:"1f93e-1f3fe-200d-2642-fe0f.png",sheet_x:48,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93E-1F3FF-200D-2642-FE0F",image:"1f93e-1f3ff-200d-2642-fe0f.png",sheet_x:48,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["man_playing_handball","sports"],sheet:[48,19]},"flag-vg":{name:"British Virgin Islands",unified:"1F1FB-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["british_virgin_islands","british","virgin","islands","bvi","flag","nation","country","banner"],sheet:[36,12]},satellite_antenna:{name:"Satellite Antenna",unified:"1F4E1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["satellite","communication","future","radio","space"],sheet:[18,33]},helicopter:{name:"Helicopter",unified:"1F681",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["helicopter","transportation","vehicle","fly"],sheet:[25,7]},pizza:{name:"Slice of Pizza",unified:"1F355",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pizza","food","party"],sheet:[6,18]},snail:{name:"Snail",unified:"1F40C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["snail","slow","animal","shell"],sheet:[10,37]},white_frowning_face:{name:"White Frowning Face",unified:"2639",variations:["2639-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["frowning_face","face","sad","upset","frown"],sheet:[1,16]},capricorn:{name:"Capricorn",unified:"2651",variations:["2651-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["capricorn","sign","zodiac","purple-square","astrology"],sheet:[1,29]},"woman-golfing":{name:"Woman Golfing",unified:"1F3CC-FE0F-200D-2640-FE0F",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CC-1F3FB-200D-2640-FE0F",image:"1f3cc-1f3fb-200d-2640-fe0f.png",sheet_x:40,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CC-1F3FC-200D-2640-FE0F",image:"1f3cc-1f3fc-200d-2640-fe0f.png",sheet_x:40,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CC-1F3FD-200D-2640-FE0F",image:"1f3cc-1f3fd-200d-2640-fe0f.png",sheet_x:40,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CC-1F3FE-200D-2640-FE0F",image:"1f3cc-1f3fe-200d-2640-fe0f.png",sheet_x:40,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CC-1F3FF-200D-2640-FE0F",image:"1f3cc-1f3ff-200d-2640-fe0f.png",sheet_x:40,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["golfing_woman","sports","business","woman","female"],sheet:[40,36]},"flag-bn":{name:"Brunei",unified:"1F1E7-1F1F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["brunei","bn","darussalam","flag","nation","country","banner"],sheet:[31,39]},battery:{name:"Battery",unified:"1F50B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["battery","power","energy","sustain"],sheet:[19,25]},shell:{name:"Spiral Shell",unified:"1F41A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["shell","nature","sea","beach"],sheet:[11,2]},aquarius:{name:"Aquarius",unified:"2652",variations:["2652-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["aquarius","sign","purple-square","zodiac","astrology"],sheet:[1,30]},golfer:{name:"Golfer",unified:"1F3CC",variations:["1F3CC-FE0F"],added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CC-1F3FB",image:"1f3cc-1f3fb.png",sheet_x:9,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F3CC-1F3FC",image:"1f3cc-1f3fc.png",sheet_x:9,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F3CC-1F3FD",image:"1f3cc-1f3fd.png",sheet_x:9,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F3CC-1F3FE",image:"1f3cc-1f3fe.png",sheet_x:9,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F3CC-1F3FF",image:"1f3cc-1f3ff.png",sheet_x:9,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},obsoleted_by:"1F3CC-FE0F-200D-2642-FE0F",keywords:["golfing_man","sports","business"],sheet:[9,20]},hotdog:{name:"Hot Dog",unified:"1F32D",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["hotdog","food","frankfurter"],sheet:[5,27]},small_airplane:{name:"Small Airplane",unified:"1F6E9",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["small_airplane","flight","transportation","fly","vehicle"],sheet:[27,22]},persevere:{name:"Persevering Face",unified:"1F623",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["persevere","face","sick","no","upset","oops"],sheet:[23,19]},beetle:{name:"Lady Beetle",unified:"1F41E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["beetle","animal","insect","nature","ladybug"],sheet:[11,6]},airplane:{name:"Airplane",unified:"2708",variations:["2708-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[2,35]},"woman-surfing":{name:"Woman Surfing",unified:"1F3C4-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C4-1F3FB-200D-2640-FE0F",image:"1f3c4-1f3fb-200d-2640-fe0f.png",sheet_x:40,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C4-1F3FC-200D-2640-FE0F",image:"1f3c4-1f3fc-200d-2640-fe0f.png",sheet_x:40,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C4-1F3FD-200D-2640-FE0F",image:"1f3c4-1f3fd-200d-2640-fe0f.png",sheet_x:40,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C4-1F3FE-200D-2640-FE0F",image:"1f3c4-1f3fe-200d-2640-fe0f.png",sheet_x:40,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C4-1F3FF-200D-2640-FE0F",image:"1f3c4-1f3ff-200d-2640-fe0f.png",sheet_x:40,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["surfing_woman","sports","ocean","sea","summer","beach","woman","female"],sheet:[40,0]},pisces:{name:"Pisces",unified:"2653",variations:["2653-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pisces","purple-square","sign","zodiac","astrology"],sheet:[1,31]},electric_plug:{name:"Electric Plug",unified:"1F50C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["electric_plug","charger","power"],sheet:[19,26]},hamburger:{name:"Hamburger",unified:"1F354",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hamburger","meat","fast food","beef","cheeseburger","mcdonalds","burger king"],sheet:[6,17]},confounded:{name:"Confounded Face",unified:"1F616",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["confounded","face","confused","sick","unwell","oops",":S"],sheet:[23,6]},"flag-bg":{name:"Bulgaria",unified:"1F1E7-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bulgaria","bg","flag","nation","country","banner"],sheet:[31,33]},tired_face:{name:"Tired Face",unified:"1F62B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tired_face","sick","whine","upset","frustrated"],sheet:[23,27]},surfer:{name:"Surfer",unified:"1F3C4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C4-1F3FB",image:"1f3c4-1f3fb.png",sheet_x:8,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3C4-1F3FC",image:"1f3c4-1f3fc.png",sheet_x:8,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3C4-1F3FD",image:"1f3c4-1f3fd.png",sheet_x:8,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3C4-1F3FE",image:"1f3c4-1f3fe.png",sheet_x:8,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3C4-1F3FF",image:"1f3c4-1f3ff.png",sheet_x:8,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F3C4-200D-2642-FE0F",keywords:["surfing_man","sports","ocean","sea","summer","beach"],sheet:[8,41]},fries:{name:"French Fries",unified:"1F35F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fries","chips","snack","fast food"],sheet:[6,28]},bulb:{name:"Electric Light Bulb",unified:"1F4A1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bulb","light","electricity","idea"],sheet:[17,13]},id:{name:"Squared Id",unified:"1F194",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["id","purple-square","words"],sheet:[4,11]},airplane_departure:{name:"Airplane Departure",unified:"1F6EB",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["flight_departure","airport","flight","landing"],sheet:[27,23]},"flag-bf":{name:"Burkina Faso",unified:"1F1E7-1F1EB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["burkina_faso","burkina","faso","flag","nation","country","banner"],sheet:[31,32]},ant:{name:"Ant",unified:"1F41C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ant","animal","insect","nature","bug"],sheet:[11,4]},weary:{name:"Weary Face",unified:"1F629",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["weary","face","tired","sleepy","sad","frustrated","upset"],sheet:[23,25]},"flag-bi":{name:"Burundi",unified:"1F1E7-1F1EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["burundi","bi","flag","nation","country","banner"],sheet:[31,35]},spider:{name:"Spider",unified:"1F577",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["spider","animal","arachnid"],sheet:[21,24]},"woman-swimming":{name:"Woman Swimming",unified:"1F3CA-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CA-1F3FB-200D-2640-FE0F",image:"1f3ca-1f3fb-200d-2640-fe0f.png",sheet_x:40,sheet_y:13,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CA-1F3FC-200D-2640-FE0F",image:"1f3ca-1f3fc-200d-2640-fe0f.png",sheet_x:40,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CA-1F3FD-200D-2640-FE0F",image:"1f3ca-1f3fd-200d-2640-fe0f.png",sheet_x:40,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CA-1F3FE-200D-2640-FE0F",image:"1f3ca-1f3fe-200d-2640-fe0f.png",sheet_x:40,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CA-1F3FF-200D-2640-FE0F",image:"1f3ca-1f3ff-200d-2640-fe0f.png",sheet_x:40,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["swimming_woman","sports","exercise","human","athlete","water","summer","woman","female"],sheet:[40,12]},stuffed_flatbread:{name:"Stuffed Flatbread",unified:"1F959",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["stuffed_flatbread","food","flatbread","stuffed","gyro"],sheet:[30,23]},airplane_arriving:{name:"Airplane Arriving",unified:"1F6EC",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["flight_arrival","airport","flight","boarding"],sheet:[27,24]},flashlight:{name:"Electric Torch",unified:"1F526",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["flashlight","dark","camping","sight","night"],sheet:[20,3]},atom_symbol:{name:"Atom Symbol",unified:"269B",variations:["269B-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["atom_symbol","science","physics","chemistry"],sheet:[1,46]},triumph:{name:"Face with Look of Triumph",unified:"1F624",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["triumph","face","gas","phew","proud","pride"],sheet:[23,20]},candle:{name:"Candle",unified:"1F56F",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["candle","fire","wax"],sheet:[21,8]},swimmer:{name:"Swimmer",unified:"1F3CA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3CA-1F3FB",image:"1f3ca-1f3fb.png",sheet_x:9,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3CA-1F3FC",image:"1f3ca-1f3fc.png",sheet_x:9,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3CA-1F3FD",image:"1f3ca-1f3fd.png",sheet_x:9,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3CA-1F3FE",image:"1f3ca-1f3fe.png",sheet_x:9,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3CA-1F3FF",image:"1f3ca-1f3ff.png",sheet_x:9,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F3CA-200D-2642-FE0F",keywords:["swimming_man","sports","exercise","human","athlete","water","summer"],sheet:[9,8]},"flag-cv":{name:"Cape Verde",unified:"1F1E8-1F1FB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cape_verde","cabo","verde","flag","nation","country","banner"],sheet:[32,15]},spider_web:{name:"Spider Web",unified:"1F578",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["spider_web","animal","insect","arachnid","silk"],sheet:[21,25]},accept:{name:"Circled Ideograph Accept",unified:"1F251",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["accept","ok","good","chinese","kanji","agree","yes","orange-circle"],sheet:[4,32]},taco:{name:"Taco",unified:"1F32E",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["taco","food","mexican"],sheet:[5,28]},rocket:{name:"Rocket",unified:"1F680",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rocket","launch","ship","staffmode","NASA","outer space","outer_space","fly"],sheet:[25,6]},"flag-kh":{name:"Cambodia",unified:"1F1F0-1F1ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cambodia","kh","flag","nation","country","banner"],sheet:[33,35]},radioactive_sign:{name:"Radioactive Sign",unified:"2622",variations:["2622-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["radioactive","nuclear","danger"],sheet:[1,9]},burrito:{name:"Burrito",unified:"1F32F",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["burrito","food","mexican"],sheet:[5,29]},angry:{name:"Angry Face",unified:"1F620",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[">:(",">:-("],keywords:["angry","mad","face","annoyed","frustrated"],sheet:[23,16]},water_polo:{name:"Water Polo",unified:"1F93D",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93D-1F3FB",image:"1f93d-1f3fb.png",sheet_x:29,sheet_y:41,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F93D-1F3FC",image:"1f93d-1f3fc.png",sheet_x:29,sheet_y:42,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F93D-1F3FD",image:"1f93d-1f3fd.png",sheet_x:29,sheet_y:43,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F93D-1F3FE",image:"1f93d-1f3fe.png",sheet_x:29,sheet_y:44,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F93D-1F3FF",image:"1f93d-1f3ff.png",sheet_x:29,sheet_y:45,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},sheet:[29,40]},satellite:{name:"Satellite",unified:"1F6F0",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["artificial_satellite","communication","gps","orbit","spaceflight","NASA","ISS"],sheet:[27,25]},turtle:{name:"Turtle",unified:"1F422",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["turtle","animal","slow","nature","tortoise"],sheet:[11,10]},wastebasket:{name:"Wastebasket",unified:"1F5D1",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["wastebasket","bin","trash","rubbish","garbage","toss"],sheet:[22,16]},"woman-playing-water-polo":{name:"Woman Playing Water Polo",unified:"1F93D-200D-2640-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93D-1F3FB-200D-2640-FE0F",image:"1f93d-1f3fb-200d-2640-fe0f.png",sheet_x:48,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93D-1F3FC-200D-2640-FE0F",image:"1f93d-1f3fc-200d-2640-fe0f.png",sheet_x:48,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93D-1F3FD-200D-2640-FE0F",image:"1f93d-1f3fd-200d-2640-fe0f.png",sheet_x:48,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93D-1F3FE-200D-2640-FE0F",image:"1f93d-1f3fe-200d-2640-fe0f.png",sheet_x:48,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93D-1F3FF-200D-2640-FE0F",image:"1f93d-1f3ff-200d-2640-fe0f.png",sheet_x:48,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["woman_playing_water_polo","sports","pool"],sheet:[48,1]},snake:{name:"Snake",unified:"1F40D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["snake","animal","evil","nature","hiss","python"],sheet:[10,38]},rage:{name:"Pouting Face",unified:"1F621",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rage","angry","mad","hate","despise"],sheet:[23,17]},green_salad:{name:"Green Salad",unified:"1F957",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["green_salad","food","healthy","lettuce"],sheet:[30,21]},oil_drum:{name:"Oil Drum",unified:"1F6E2",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["oil_drum","barrell"],sheet:[27,18]},seat:{name:"Seat",unified:"1F4BA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["seat","sit","airplane","transport","bus","flight","fly"],sheet:[17,43]},biohazard_sign:{name:"Biohazard Sign",unified:"2623",variations:["2623-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["biohazard","danger"],sheet:[1,10]},"flag-cm":{name:"Cameroon",unified:"1F1E8-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cameroon","cm","flag","nation","country","banner"],sheet:[32,9]},shallow_pan_of_food:{name:"Shallow Pan of Food",unified:"1F958",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["shallow_pan_of_food","food","cooking","casserole","paella"],sheet:[30,22]},"man-playing-water-polo":{name:"Man Playing Water Polo",unified:"1F93D-200D-2642-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F93D-1F3FB-200D-2642-FE0F",image:"1f93d-1f3fb-200d-2642-fe0f.png",sheet_x:48,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F93D-1F3FC-200D-2642-FE0F",image:"1f93d-1f3fc-200d-2642-fe0f.png",sheet_x:48,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F93D-1F3FD-200D-2642-FE0F",image:"1f93d-1f3fd-200d-2642-fe0f.png",sheet_x:48,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F93D-1F3FE-200D-2642-FE0F",image:"1f93d-1f3fe-200d-2642-fe0f.png",sheet_x:48,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F93D-1F3FF-200D-2642-FE0F",image:"1f93d-1f3ff-200d-2642-fe0f.png",sheet_x:48,sheet_y:12,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["man_playing_water_polo","sports","pool"],sheet:[48,7]},canoe:{name:"Canoe",unified:"1F6F6",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["canoe","boat","paddle","water","ship"],sheet:[27,29]},"flag-ca":{name:"Canada",unified:"1F1E8-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["canada","ca","flag","nation","country","banner"],sheet:[32,0]},lizard:{name:"Lizard",unified:"1F98E",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["lizard","animal","nature","reptile"],sheet:[30,43]},mobile_phone_off:{name:"Mobile Phone off",unified:"1F4F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mobile_phone_off","mute","orange-square","silence","quiet"],sheet:[19,3]},money_with_wings:{name:"Money with Wings",unified:"1F4B8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["money_with_wings","dollar","bills","payment","sale"],sheet:[17,41]},no_mouth:{name:"Face Without Mouth",unified:"1F636",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["no_mouth","face","hellokitty"],sheet:[23,38]},"flag-ic":{name:"Canary Islands",unified:"1F1EE-1F1E8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["canary_islands","canary","islands","flag","nation","country","banner"],sheet:[33,18]},neutral_face:{name:"Neutral Face",unified:"1F610",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":|",":-|"],keywords:["neutral_face","indifference","meh",":|","neutral"],sheet:[23,0]},dollar:{name:"Banknote with Dollar Sign",unified:"1F4B5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dollar","money","sales","bill","currency"],sheet:[17,38]},vibration_mode:{name:"Vibration Mode",unified:"1F4F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["vibration_mode","orange-square","phone"],sheet:[19,2]},spaghetti:{name:"Spaghetti",unified:"1F35D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["spaghetti","food","italian","noodle"],sheet:[6,26]},"woman-rowing-boat":{name:"Woman Rowing Boat",unified:"1F6A3-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6A3-1F3FB-200D-2640-FE0F",image:"1f6a3-1f3fb-200d-2640-fe0f.png",sheet_x:46,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6A3-1F3FC-200D-2640-FE0F",image:"1f6a3-1f3fc-200d-2640-fe0f.png",sheet_x:46,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6A3-1F3FD-200D-2640-FE0F",image:"1f6a3-1f3fd-200d-2640-fe0f.png",sheet_x:46,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6A3-1F3FE-200D-2640-FE0F",image:"1f6a3-1f3fe-200d-2640-fe0f.png",sheet_x:46,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6A3-1F3FF-200D-2640-FE0F",image:"1f6a3-1f3ff-200d-2640-fe0f.png",sheet_x:46,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["rowing_woman","sports","hobby","water","ship","woman","female"],sheet:[46,1]},scorpion:{name:"Scorpion",unified:"1F982",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["scorpion","animal","arachnid"],sheet:[30,31]},boat:{name:"Sailboat",unified:"26F5",variations:["26F5-FE0F"],short_names:["sailboat"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sailboat","ship","summer","transportation","water","sailing"],sheet:[2,22]},"flag-ky":{name:"Cayman Islands",unified:"1F1F0-1F1FE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cayman_islands","cayman","islands","flag","nation","country","banner"],sheet:[33,42]},rowboat:{name:"Rowboat",unified:"1F6A3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6A3-1F3FB",image:"1f6a3-1f3fb.png",sheet_x:25,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F6A3-1F3FC",image:"1f6a3-1f3fc.png",sheet_x:25,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F6A3-1F3FD",image:"1f6a3-1f3fd.png",sheet_x:25,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F6A3-1F3FE",image:"1f6a3-1f3fe.png",sheet_x:25,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F6A3-1F3FF",image:"1f6a3-1f3ff.png",sheet_x:25,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},obsoleted_by:"1F6A3-200D-2642-FE0F",keywords:["rowing_man","sports","hobby","water","ship"],sheet:[25,41]},expressionless:{name:"Expressionless Face",unified:"1F611",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["expressionless","face","indifferent","-_-","meh","deadpan"],sheet:[23,1]},"u6709":{name:"Squared Cjk Unified Ideograph-6709",unified:"1F236",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["u6709","orange-square","chinese","have","kanji"],sheet:[4,26]},yen:{name:"Banknote with Yen Sign",unified:"1F4B4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["yen","money","sales","japanese","dollar","currency"],sheet:[17,37]},crab:{name:"Crab",unified:"1F980",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["crab","animal","crustacean"],sheet:[30,29]},ramen:{name:"Steaming Bowl",unified:"1F35C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ramen","food","japanese","noodle","chopsticks"],sheet:[6,25]},motor_boat:{name:"Motor Boat",unified:"1F6E5",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["motor_boat","ship"],sheet:[27,21]},"flag-cf":{name:"Central African Republic",unified:"1F1E8-1F1EB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["central_african_republic","central","african","republic","flag","nation","country","banner"],sheet:[32,3]},hushed:{name:"Hushed Face",unified:"1F62F",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hushed","face","woo","shh"],sheet:[23,31]},"u7121":{name:"Squared Cjk Unified Ideograph-7121",unified:"1F21A",variations:["1F21A-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["u7121","nothing","chinese","kanji","japanese","orange-square"],sheet:[4,20]},speedboat:{name:"Speedboat",unified:"1F6A4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["speedboat","ship","transportation","vehicle","summer"],sheet:[25,47]},squid:{name:"Squid",unified:"1F991",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["squid","animal","nature","ocean","sea"],sheet:[30,46]},stew:{name:"Pot of Food",unified:"1F372",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["stew","food","meat","soup"],sheet:[6,47]},horse_racing:{name:"Horse Racing",unified:"1F3C7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C7-1F3FB",image:"1f3c7-1f3fb.png",sheet_x:9,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3C7-1F3FC",image:"1f3c7-1f3fc.png",sheet_x:9,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3C7-1F3FD",image:"1f3c7-1f3fd.png",sheet_x:9,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3C7-1F3FE",image:"1f3c7-1f3fe.png",sheet_x:9,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3C7-1F3FF",image:"1f3c7-1f3ff.png",sheet_x:9,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["horse_racing","animal","betting","competition","gambling","luck"],sheet:[9,0]},euro:{name:"Banknote with Euro Sign",unified:"1F4B6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["euro","money","sales","dollar","currency"],sheet:[17,39]},passenger_ship:{name:"Passenger Ship",unified:"1F6F3",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["passenger_ship","yacht","cruise","ferry"],sheet:[27,26]},pound:{name:"Banknote with Pound Sign",unified:"1F4B7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pound","british","sterling","money","sales","bills","uk","england","currency"],sheet:[17,40]},fish_cake:{name:"Fish Cake with Swirl Design",unified:"1F365",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fish_cake","food","japan","sea","beach","narutomaki","pink","swirl","kamaboko","surimi","ramen"],sheet:[6,34]},octopus:{name:"Octopus",unified:"1F419",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["octopus","animal","creature","ocean","sea","nature","beach"],sheet:[11,1]},"woman-biking":{name:"Woman Biking",unified:"1F6B4-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B4-1F3FB-200D-2640-FE0F",image:"1f6b4-1f3fb-200d-2640-fe0f.png",sheet_x:46,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B4-1F3FC-200D-2640-FE0F",image:"1f6b4-1f3fc-200d-2640-fe0f.png",sheet_x:46,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B4-1F3FD-200D-2640-FE0F",image:"1f6b4-1f3fd-200d-2640-fe0f.png",sheet_x:46,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B4-1F3FE-200D-2640-FE0F",image:"1f6b4-1f3fe-200d-2640-fe0f.png",sheet_x:46,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B4-1F3FF-200D-2640-FE0F",image:"1f6b4-1f3ff-200d-2640-fe0f.png",sheet_x:46,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["biking_woman","sports","bike","exercise","hipster","woman","female"],sheet:[46,13]},frowning:{name:"Frowning Face with Open Mouth",unified:"1F626",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["frowning","face","aw","what"],sheet:[23,22]},"flag-td":{name:"Chad",unified:"1F1F9-1F1E9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["chad","td","flag","nation","country","banner"],sheet:[35,36]},"u7533":{name:"Squared Cjk Unified Ideograph-7533",unified:"1F238",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["u7533","chinese","japanese","kanji","orange-square"],sheet:[4,28]},"u55b6":{name:"Squared Cjk Unified Ideograph-55b6",unified:"1F23A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["u55b6","japanese","opening hours","orange-square"],sheet:[4,30]},anguished:{name:"Anguished Face",unified:"1F627",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:["D:"],keywords:["anguished","face","stunned","nervous"],sheet:[23,23]},moneybag:{name:"Money Bag",unified:"1F4B0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["moneybag","dollar","payment","coins","sale"],sheet:[17,33]},sushi:{name:"Sushi",unified:"1F363",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sushi","food","fish","japanese","rice"],sheet:[6,32]},bicyclist:{name:"Bicyclist",unified:"1F6B4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6B4-1F3FB",image:"1f6b4-1f3fb.png",sheet_x:26,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F6B4-1F3FC",image:"1f6b4-1f3fc.png",sheet_x:26,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F6B4-1F3FD",image:"1f6b4-1f3fd.png",sheet_x:26,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F6B4-1F3FE",image:"1f6b4-1f3fe.png",sheet_x:26,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F6B4-1F3FF",image:"1f6b4-1f3ff.png",sheet_x:26,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F6B4-200D-2642-FE0F",keywords:["biking_man","sports","bike","exercise","hipster"],sheet:[26,14]},shrimp:{name:"Shrimp",unified:"1F990",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["shrimp","animal","ocean","nature","seafood"],sheet:[30,45]},ferry:{name:"Ferry",unified:"26F4",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["ferry","boat","ship","yacht"],sheet:[2,21]},"flag-cl":{name:"Chile",unified:"1F1E8-1F1F1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["chile","flag","nation","country","banner"],sheet:[32,8]},credit_card:{name:"Credit Card",unified:"1F4B3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["credit_card","money","sales","dollar","bill","payment","shopping"],sheet:[17,36]},"flag-cn":{name:"CN",unified:"1F1E8-1F1F3",short_names:["cn"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cn","china","chinese","prc","flag","country","nation","banner"],sheet:[32,10]},bento:{name:"Bento Box",unified:"1F371",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bento","food","japanese","box"],sheet:[6,46]},ship:{name:"Ship",unified:"1F6A2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ship","transportation","titanic","deploy"],sheet:[25,40]},open_mouth:{name:"Face with Open Mouth",unified:"1F62E",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":o",":-o",":O",":-O"],keywords:["open_mouth","face","surprise","impressed","wow","whoa",":O"],sheet:[23,30]},"u6708":{name:"Squared Cjk Unified Ideograph-6708",unified:"1F237",variations:["1F237-FE0F"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[4,27]},tropical_fish:{name:"Tropical Fish",unified:"1F420",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tropical_fish","animal","swim","ocean","beach","nemo"],sheet:[11,8]},"woman-mountain-biking":{name:"Woman Mountain Biking",unified:"1F6B5-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B5-1F3FB-200D-2640-FE0F",image:"1f6b5-1f3fb-200d-2640-fe0f.png",sheet_x:46,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B5-1F3FC-200D-2640-FE0F",image:"1f6b5-1f3fc-200d-2640-fe0f.png",sheet_x:46,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B5-1F3FD-200D-2640-FE0F",image:"1f6b5-1f3fd-200d-2640-fe0f.png",sheet_x:46,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B5-1F3FE-200D-2640-FE0F",image:"1f6b5-1f3fe-200d-2640-fe0f.png",sheet_x:46,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B5-1F3FF-200D-2640-FE0F",image:"1f6b5-1f3ff-200d-2640-fe0f.png",sheet_x:46,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["mountain_biking_woman","transportation","sports","human","race","bike","woman","female"],sheet:[46,25]},"flag-cx":{name:"Christmas Island",unified:"1F1E8-1F1FD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["christmas_island","christmas","island","flag","nation","country","banner"],sheet:[32,17]},fish:{name:"Fish",unified:"1F41F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fish","animal","food","nature"],sheet:[11,7]},eight_pointed_black_star:{name:"Eight Pointed Black Star",unified:"2734",variations:["2734-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,20]},anchor:{name:"Anchor",unified:"2693",variations:["2693-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["anchor","ship","ferry","sea","boat"],sheet:[1,40]},gem:{name:"Gem Stone",unified:"1F48E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["gem","blue","ruby","diamond","jewelry"],sheet:[16,43]},astonished:{name:"Astonished Face",unified:"1F632",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["astonished","face","xox","surprised","poisoned"],sheet:[23,34]},mountain_bicyclist:{name:"Mountain Bicyclist",unified:"1F6B5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6B5-1F3FB",image:"1f6b5-1f3fb.png",sheet_x:26,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F6B5-1F3FC",image:"1f6b5-1f3fc.png",sheet_x:26,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F6B5-1F3FD",image:"1f6b5-1f3fd.png",sheet_x:26,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F6B5-1F3FE",image:"1f6b5-1f3fe.png",sheet_x:26,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F6B5-1F3FF",image:"1f6b5-1f3ff.png",sheet_x:26,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F6B5-200D-2642-FE0F",keywords:["mountain_biking_man","transportation","sports","human","race","bike"],sheet:[26,20]},curry:{name:"Curry and Rice",unified:"1F35B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["curry","food","spicy","hot","indian"],sheet:[6,24]},"flag-cc":{name:"Cocos Islands",unified:"1F1E8-1F1E8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cocos_islands","cocos","keeling","islands","flag","nation","country","banner"],sheet:[32,1]},blowfish:{name:"Blowfish",unified:"1F421",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["blowfish","animal","nature","food","sea","ocean"],sheet:[11,9]},rice:{name:"Cooked Rice",unified:"1F35A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rice","food","china","asian"],sheet:[6,23]},running_shirt_with_sash:{name:"Running Shirt with Sash",unified:"1F3BD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["running_shirt_with_sash","play","pageant"],sheet:[8,24]},dizzy_face:{name:"Dizzy Face",unified:"1F635",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dizzy_face","spent","unconscious","xox","dizzy"],sheet:[23,37]},construction:{name:"Construction Sign",unified:"1F6A7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["construction","wip","progress","caution","warning"],sheet:[26,1]},scales:{name:"Scales",unified:"2696",variations:["2696-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["balance_scale","law","fairness","weight"],sheet:[1,43]},vs:{name:"Squared Vs",unified:"1F19A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["vs","words","orange-square"],sheet:[4,17]},fuelpump:{name:"Fuel Pump",unified:"26FD",variations:["26FD-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fuelpump","gas station","petroleum"],sheet:[2,32]},white_flower:{name:"White Flower",unified:"1F4AE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["white_flower","japanese","spring"],sheet:[17,31]},rice_ball:{name:"Rice Ball",unified:"1F359",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rice_ball","food","japanese"],sheet:[6,22]},dolphin:{name:"Dolphin",unified:"1F42C",short_names:["flipper"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dolphin","animal","nature","fish","sea","ocean","flipper","fins","beach"],sheet:[11,20]},wrench:{name:"Wrench",unified:"1F527",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["wrench","tools","diy","ikea","fix","maintainer"],sheet:[20,4]},"flag-co":{name:"Colombia",unified:"1F1E8-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["colombia","co","flag","nation","country","banner"],sheet:[32,11]},sports_medal:{name:"Sports Medal",unified:"1F3C5",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["medal_sports","award","winning"],sheet:[8,47]},flushed:{name:"Flushed Face",unified:"1F633",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["flushed","face","blush","shy","flattered"],sheet:[23,35]},hammer:{name:"Hammer",unified:"1F528",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hammer","tools","build","create"],sheet:[20,5]},ideograph_advantage:{name:"Circled Ideograph Advantage",unified:"1F250",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ideograph_advantage","chinese","kanji","obtain","get","circle"],sheet:[4,31]},shark:{name:"Shark",unified:"1F988",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["shark","animal","nature","fish","sea","ocean","jaws","fins","beach"],sheet:[30,37]},medal:{name:"Military Medal",unified:"1F396",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["medal_military","award","winning","army"],sheet:[7,37]},"flag-km":{name:"Comoros",unified:"1F1F0-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["comoros","km","flag","nation","country","banner"],sheet:[33,37]},scream:{name:"Face Screaming in Fear",unified:"1F631",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["scream","face","munch","scared","omg"],sheet:[23,33]},busstop:{name:"Bus Stop",unified:"1F68F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["busstop","transportation","wait"],sheet:[25,21]},rice_cracker:{name:"Rice Cracker",unified:"1F358",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rice_cracker","food","japanese"],sheet:[6,21]},vertical_traffic_light:{name:"Vertical Traffic Light",unified:"1F6A6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["vertical_traffic_light","transportation","driving"],sheet:[26,0]},hammer_and_pick:{name:"Hammer and Pick",unified:"2692",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["hammer_and_pick","tools","build","create"],sheet:[1,39]},"flag-cg":{name:"Congo Brazzaville",unified:"1F1E8-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["congo_brazzaville","congo","flag","nation","country","banner"],sheet:[32,4]},whale:{name:"Spouting Whale",unified:"1F433",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["whale","animal","nature","sea","ocean"],sheet:[11,27]},secret:{name:"Circled Ideograph Secret",unified:"3299",variations:["3299-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[4,0]},fearful:{name:"Fearful Face",unified:"1F628",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fearful","face","scared","terrified","nervous","oops","huh"],sheet:[23,24]},first_place_medal:{name:"First Place Medal",unified:"1F947",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["1st_place_medal","award","winning","first"],sheet:[30,9]},oden:{name:"Oden",unified:"1F362",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["oden","food","japanese"],sheet:[6,31]},"whale2":{name:"Whale",unified:"1F40B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["whale2","animal","nature","sea","ocean"],sheet:[10,36]},traffic_light:{name:"Horizontal Traffic Light",unified:"1F6A5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["traffic_light","transportation","signal"],sheet:[25,48]},"flag-cd":{name:"Congo Kinshasa",unified:"1F1E8-1F1E9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["congo_kinshasa","congo","democratic","republic","flag","nation","country","banner"],sheet:[32,2]},hammer_and_wrench:{name:"Hammer and Wrench",unified:"1F6E0",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["hammer_and_wrench","tools","build","create"],sheet:[27,16]},second_place_medal:{name:"Second Place Medal",unified:"1F948",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["2nd_place_medal","award","second"],sheet:[30,10]},dango:{name:"Dango",unified:"1F361",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dango","food","dessert","sweet","japanese","barbecue","meat"],sheet:[6,30]},cold_sweat:{name:"Face with Open Mouth and Cold Sweat",unified:"1F630",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cold_sweat","face","nervous","sweat"],sheet:[23,32]},congratulations:{name:"Circled Ideograph Congratulation",unified:"3297",variations:["3297-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,48]},cry:{name:"Crying Face",unified:"1F622",text:":'(",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,emoticons:[":'("],keywords:["cry","face","tears","sad","depressed","upset",":'("],sheet:[23,18]},crocodile:{name:"Crocodile",unified:"1F40A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["crocodile","animal","nature","reptile","lizard","alligator"],sheet:[10,35]},"u5408":{name:"Squared Cjk Unified Ideograph-5408",unified:"1F234",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["u5408","japanese","chinese","join","kanji","red-square"],sheet:[4,24]},"flag-ck":{name:"Cook Islands",unified:"1F1E8-1F1F0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cook_islands","cook","islands","flag","nation","country","banner"],sheet:[32,7]},pick:{name:"Pick",unified:"26CF",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["pick","tools","dig"],sheet:[2,11]},shaved_ice:{name:"Shaved Ice",unified:"1F367",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["shaved_ice","hot","dessert","summer"],sheet:[6,36]},third_place_medal:{name:"Third Place Medal",unified:"1F949",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["3rd_place_medal","award","third"],sheet:[30,11]},world_map:{name:"World Map",unified:"1F5FA",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["world_map","location","direction"],sheet:[22,27]},trophy:{name:"Trophy",unified:"1F3C6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["trophy","win","award","contest","place","ftw","ceremony"],sheet:[8,48]},"flag-cr":{name:"Costa Rica",unified:"1F1E8-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["costa_rica","costa","rica","flag","nation","country","banner"],sheet:[32,13]},moyai:{name:"Moyai",unified:"1F5FF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["moyai","rock","easter island","moai"],sheet:[22,32]},"u6e80":{name:"Squared Cjk Unified Ideograph-6e80",unified:"1F235",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["u6e80","full","chinese","japanese","red-square","kanji"],sheet:[4,25]},leopard:{name:"Leopard",unified:"1F406",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["leopard","animal","nature"],sheet:[10,31]},nut_and_bolt:{name:"Nut and Bolt",unified:"1F529",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["nut_and_bolt","handy","tools","fix"],sheet:[20,6]},disappointed_relieved:{name:"Disappointed but Relieved Face",unified:"1F625",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["disappointed_relieved","face","phew","sweat","nervous"],sheet:[23,21]},ice_cream:{name:"Ice Cream",unified:"1F368",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ice_cream","food","hot","dessert"],sheet:[6,37]},rosette:{name:"Rosette",unified:"1F3F5",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["rosette","flower","decoration","military"],sheet:[10,15]},icecream:{name:"Soft Ice Cream",unified:"1F366",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["icecream","food","hot","dessert","summer"],sheet:[6,35]},"u5272":{name:"Squared Cjk Unified Ideograph-5272",unified:"1F239",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["u5272","cut","divide","chinese","kanji","pink-square"],sheet:[4,29]},statue_of_liberty:{name:"Statue of Liberty",unified:"1F5FD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["statue_of_liberty","american","newyork"],sheet:[22,30]},gear:{name:"Gear",unified:"2699",variations:["2699-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["gear","cog"],sheet:[1,45]},drooling_face:{name:"Drooling Face",unified:"1F924",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["drooling_face","face"],sheet:[28,30]},"flag-ci":{name:"Cote Divoire",unified:"1F1E8-1F1EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cote_divoire","ivory","coast","flag","nation","country","banner"],sheet:[32,6]},"tiger2":{name:"Tiger",unified:"1F405",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tiger2","animal","nature","roar"],sheet:[10,30]},sob:{name:"Loudly Crying Face",unified:"1F62D",text:":'(",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sob","face","cry","tears","sad","upset","depressed"],sheet:[23,29]},"flag-hr":{name:"Croatia",unified:"1F1ED-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["croatia","hr","flag","nation","country","banner"],sheet:[33,15]},fountain:{name:"Fountain",unified:"26F2",variations:["26F2-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fountain","photo","summer","water","fresh"],sheet:[2,19]},water_buffalo:{name:"Water Buffalo",unified:"1F403",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["water_buffalo","animal","nature","ox","cow"],sheet:[10,28]},cake:{name:"Shortcake",unified:"1F370",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cake","food","dessert"],sheet:[6,45]},"u7981":{name:"Squared Cjk Unified Ideograph-7981",unified:"1F232",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["u7981","kanji","japanese","chinese","forbidden","limit","restricted","red-square"],sheet:[4,22]},reminder_ribbon:{name:"Reminder Ribbon",unified:"1F397",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["reminder_ribbon","sports","cause","support","awareness"],sheet:[7,38]},chains:{name:"Chains",unified:"26D3",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["chains","lock","arrest"],sheet:[2,13]},"flag-cu":{name:"Cuba",unified:"1F1E8-1F1FA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cuba","cu","flag","nation","country","banner"],sheet:[32,14]},sweat:{name:"Face with Cold Sweat",unified:"1F613",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sweat","face","hot","sad","tired","exercise"],sheet:[23,3]},gun:{name:"Pistol",unified:"1F52B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["gun","violence","weapon","pistol","revolver"],sheet:[20,8]},a:{name:"Negative Squared Latin Capital Letter a",unified:"1F170",variations:["1F170-FE0F"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[4,3]},ox:{name:"Ox",unified:"1F402",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ox","animal","cow","beef"],sheet:[10,27]},tokyo_tower:{name:"Tokyo Tower",unified:"1F5FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tokyo_tower","photo","japanese"],sheet:[22,29]},birthday:{name:"Birthday Cake",unified:"1F382",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["birthday","food","dessert","cake"],sheet:[7,14]},ticket:{name:"Ticket",unified:"1F3AB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ticket","event","concert","pass"],sheet:[8,6]},sleepy:{name:"Sleepy Face",unified:"1F62A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sleepy","face","tired","rest","nap"],sheet:[23,26]},european_castle:{name:"European Castle",unified:"1F3F0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["european_castle","building","royalty","history"],sheet:[10,12]},custard:{name:"Custard",unified:"1F36E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["custard","dessert","food"],sheet:[6,43]},"cow2":{name:"Cow",unified:"1F404",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cow2","beef","ox","animal","nature","moo","milk"],sheet:[10,29]},bomb:{name:"Bomb",unified:"1F4A3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bomb","boom","explode","explosion","terrorism"],sheet:[17,15]},"flag-cw":{name:"Curacao",unified:"1F1E8-1F1FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["curacao","curaçao","flag","nation","country","banner"],sheet:[32,16]},b:{name:"Negative Squared Latin Capital Letter B",unified:"1F171",variations:["1F171-FE0F"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[4,4]},admission_tickets:{name:"Admission Tickets",unified:"1F39F",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["tickets","sports","concert","entrance"],sheet:[7,43]},ab:{name:"Negative Squared Ab",unified:"1F18E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ab","red-square","alphabet"],sheet:[4,7]},sleeping:{name:"Sleeping Face",unified:"1F634",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sleeping","face","tired","sleepy","night","zzz"],sheet:[23,36]},deer:{name:"Deer",unified:"1F98C",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["deer","animal","nature","horns","venison"],sheet:[30,41]},"flag-cy":{name:"Cyprus",unified:"1F1E8-1F1FE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cyprus","cy","flag","nation","country","banner"],sheet:[32,18]},lollipop:{name:"Lollipop",unified:"1F36D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["lollipop","food","snack","candy","sweet"],sheet:[6,42]},japanese_castle:{name:"Japanese Castle",unified:"1F3EF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["japanese_castle","photo","building"],sheet:[10,11]},hocho:{name:"Hocho",unified:"1F52A",short_names:["knife"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hocho","knife","blade","cutlery","kitchen","weapon"],sheet:[20,7]},circus_tent:{name:"Circus Tent",unified:"1F3AA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["circus_tent","festival","carnival","party"],sheet:[8,5]},cl:{name:"Squared Cl",unified:"1F191",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cl","alphabet","words","red-square"],sheet:[4,8]},candy:{name:"Candy",unified:"1F36C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["candy","snack","dessert","sweet","lolly"],sheet:[6,41]},"flag-cz":{name:"Czech Republic",unified:"1F1E8-1F1FF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["czech_republic","cz","flag","nation","country","banner"],sheet:[32,19]},stadium:{name:"Stadium",unified:"1F3DF",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["stadium","photo","place","sports","concert","venue"],sheet:[9,44]},dagger_knife:{name:"Dagger Knife",unified:"1F5E1",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["dagger","weapon"],sheet:[22,22]},face_with_rolling_eyes:{name:"Face with Rolling Eyes",unified:"1F644",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["roll_eyes","face","eyeroll","frustrated"],sheet:[24,3]},juggling:{name:"Juggling",unified:"1F939",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F939-1F3FB",image:"1f939-1f3fb.png",sheet_x:29,sheet_y:33,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F939-1F3FC",image:"1f939-1f3fc.png",sheet_x:29,sheet_y:34,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F939-1F3FD",image:"1f939-1f3fd.png",sheet_x:29,sheet_y:35,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F939-1F3FE",image:"1f939-1f3fe.png",sheet_x:29,sheet_y:36,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F939-1F3FF",image:"1f939-1f3ff.png",sheet_x:29,sheet_y:37,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},sheet:[29,32]},dromedary_camel:{name:"Dromedary Camel",unified:"1F42A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dromedary_camel","animal","hot","desert","hump"],sheet:[11,18]},"woman-juggling":{name:"Woman Juggling",unified:"1F939-200D-2640-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F939-1F3FB-200D-2640-FE0F",image:"1f939-1f3fb-200d-2640-fe0f.png",sheet_x:47,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F939-1F3FC-200D-2640-FE0F",image:"1f939-1f3fc-200d-2640-fe0f.png",sheet_x:47,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F939-1F3FD-200D-2640-FE0F",image:"1f939-1f3fd-200d-2640-fe0f.png",sheet_x:47,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F939-1F3FE-200D-2640-FE0F",image:"1f939-1f3fe-200d-2640-fe0f.png",sheet_x:47,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F939-1F3FF-200D-2640-FE0F",image:"1f939-1f3ff-200d-2640-fe0f.png",sheet_x:47,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["woman_juggling","juggle","balance","skill","multitask"],sheet:[47,36]},"o2":{name:"Negative Squared Latin Capital Letter O",unified:"1F17E",variations:["1F17E-FE0F"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[4,5]},"flag-dk":{name:"Denmark",unified:"1F1E9-1F1F0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["denmark","dk","flag","nation","country","banner"],sheet:[32,23]},camel:{name:"Bactrian Camel",unified:"1F42B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["camel","animal","nature","hot","desert","hump"],sheet:[11,19]},ferris_wheel:{name:"Ferris Wheel",unified:"1F3A1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ferris_wheel","photo","carnival","londoneye"],sheet:[7,45]},thinking_face:{name:"Thinking Face",unified:"1F914",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["thinking","face","hmmm","think","consider"],sheet:[27,34]},crossed_swords:{name:"Crossed Swords",unified:"2694",variations:["2694-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["crossed_swords","weapon"],sheet:[1,41]},chocolate_bar:{name:"Chocolate Bar",unified:"1F36B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["chocolate_bar","food","snack","dessert","sweet"],sheet:[6,40]},"man-juggling":{name:"Man Juggling",unified:"1F939-200D-2642-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F939-1F3FB-200D-2642-FE0F",image:"1f939-1f3fb-200d-2642-fe0f.png",sheet_x:47,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F939-1F3FC-200D-2642-FE0F",image:"1f939-1f3fc-200d-2642-fe0f.png",sheet_x:47,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F939-1F3FD-200D-2642-FE0F",image:"1f939-1f3fd-200d-2642-fe0f.png",sheet_x:47,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F939-1F3FE-200D-2642-FE0F",image:"1f939-1f3fe-200d-2642-fe0f.png",sheet_x:47,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F939-1F3FF-200D-2642-FE0F",image:"1f939-1f3ff-200d-2642-fe0f.png",sheet_x:47,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["man_juggling","juggle","balance","skill","multitask"],sheet:[47,42]},roller_coaster:{name:"Roller Coaster",unified:"1F3A2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["roller_coaster","carnival","playground","photo","fun"],sheet:[7,46]},sos:{name:"Squared Sos",unified:"1F198",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sos","help","red-square","words","emergency","911"],sheet:[4,15]},shield:{name:"Shield",unified:"1F6E1",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["shield","protection","security"],sheet:[27,17]},"flag-dj":{name:"Djibouti",unified:"1F1E9-1F1EF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["djibouti","dj","flag","nation","country","banner"],sheet:[32,22]},popcorn:{name:"Popcorn",unified:"1F37F",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["popcorn","food","movie theater","films","snack"],sheet:[7,11]},elephant:{name:"Elephant",unified:"1F418",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["elephant","animal","nature","nose","th","circus"],sheet:[11,0]},lying_face:{name:"Lying Face",unified:"1F925",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["lying_face","face","lie","pinocchio"],sheet:[28,31]},carousel_horse:{name:"Carousel Horse",unified:"1F3A0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["carousel_horse","photo","carnival"],sheet:[7,44]},performing_arts:{name:"Performing Arts",unified:"1F3AD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["performing_arts","acting","theater","drama"],sheet:[8,8]},x:{name:"Cross Mark",unified:"274C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["x","no","delete","remove","cancel"],sheet:[3,23]},rhinoceros:{name:"Rhinoceros",unified:"1F98F",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["rhinoceros","animal","nature","horn"],sheet:[30,44]},grimacing:{name:"Grimacing Face",unified:"1F62C",added_in:"6.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["grimacing","face","grimace","teeth"],sheet:[23,28]},doughnut:{name:"Doughnut",unified:"1F369",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["doughnut","food","dessert","snack","sweet","donut"],sheet:[6,38]},"flag-dm":{name:"Dominica",unified:"1F1E9-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dominica","dm","flag","nation","country","banner"],sheet:[32,24]},smoking:{name:"Smoking Symbol",unified:"1F6AC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["smoking","kills","tobacco","cigarette","joint","smoke"],sheet:[26,6]},o:{name:"Heavy Large Circle",unified:"2B55",variations:["2B55-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["o","circle","round"],sheet:[3,45]},umbrella_on_ground:{name:"Umbrella on Ground",unified:"26F1",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["parasol_on_ground","weather","summer"],sheet:[2,18]},"flag-do":{name:"Dominican Republic",unified:"1F1E9-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dominican_republic","dominican","republic","flag","nation","country","banner"],sheet:[32,25]},coffin:{name:"Coffin",unified:"26B0",variations:["26B0-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["coffin","vampire","dead","die","death","rip","graveyard","cemetery","casket","funeral","box"],sheet:[2,3]},cookie:{name:"Cookie",unified:"1F36A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cookie","food","snack","oreo","chocolate","sweet","dessert"],sheet:[6,39]},gorilla:{name:"Gorilla",unified:"1F98D",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["gorilla","animal","nature","circus"],sheet:[30,42]},art:{name:"Artist Palette",unified:"1F3A8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["art","design","paint","draw","colors"],sheet:[8,3]},zipper_mouth_face:{name:"Zipper-Mouth Face",unified:"1F910",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["zipper_mouth_face","face","sealed","zipper","secret"],sheet:[27,30]},octagonal_sign:{name:"Octagonal Sign",unified:"1F6D1",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["stop_sign","stop"],sheet:[27,14]},nauseated_face:{name:"Nauseated Face",unified:"1F922",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["nauseated_face","face","vomit","gross","green","sick","throw up","ill"],sheet:[28,28]},beach_with_umbrella:{name:"Beach with Umbrella",unified:"1F3D6",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["beach_umbrella","weather","summer","sunny","sand","mojito"],sheet:[9,35]},"flag-ec":{name:"Ecuador",unified:"1F1EA-1F1E8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ecuador","ec","flag","nation","country","banner"],sheet:[32,28]},funeral_urn:{name:"Funeral Urn",unified:"26B1",variations:["26B1-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["funeral_urn","dead","die","death","rip","ashes"],sheet:[2,4]},glass_of_milk:{name:"Glass of Milk",unified:"1F95B",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["milk_glass","beverage","drink","cow"],sheet:[30,25]},racehorse:{name:"Horse",unified:"1F40E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["racehorse","animal","gamble","luck"],sheet:[10,39]},clapper:{name:"Clapper Board",unified:"1F3AC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clapper","movie","film","record"],sheet:[8,7]},amphora:{name:"Amphora",unified:"1F3FA",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["amphora","vase","jar"],sheet:[10,19]},sneezing_face:{name:"Sneezing Face",unified:"1F927",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["sneezing_face","face","gesundheit","sneeze","sick","allergy"],sheet:[28,38]},baby_bottle:{name:"Baby Bottle",unified:"1F37C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["baby_bottle","food","container","milk"],sheet:[7,8]},"pig2":{name:"Pig",unified:"1F416",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pig2","animal","nature"],sheet:[10,47]},desert_island:{name:"Desert Island",unified:"1F3DD",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["desert_island","photo","tropical","mojito"],sheet:[9,42]},microphone:{name:"Microphone",unified:"1F3A4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["microphone","sound","music","PA","sing","talkshow"],sheet:[7,48]},"flag-eg":{name:"Egypt",unified:"1F1EA-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["egypt","eg","flag","nation","country","banner"],sheet:[32,30]},no_entry:{name:"No Entry",unified:"26D4",variations:["26D4-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["no_entry","limit","security","privacy","bad","denied","stop","circle"],sheet:[2,14]},name_badge:{name:"Name Badge",unified:"1F4DB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["name_badge","fire","forbid"],sheet:[18,27]},mask:{name:"Face with Medical Mask",unified:"1F637",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mask","face","sick","ill","disease"],sheet:[23,39]},coffee:{name:"Hot Beverage",unified:"2615",variations:["2615-FE0F"],added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["coffee","beverage","caffeine","latte","espresso"],sheet:[1,0]},mountain:{name:"Mountain",unified:"26F0",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["mountain","photo","nature","environment"],sheet:[2,17]},headphones:{name:"Headphone",unified:"1F3A7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["headphones","music","score","gadgets"],sheet:[8,2]},goat:{name:"Goat",unified:"1F410",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["goat","animal","nature"],sheet:[10,41]},"flag-sv":{name:"El Salvador",unified:"1F1F8-1F1FB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["el_salvador","el","salvador","flag","nation","country","banner"],sheet:[35,30]},crystal_ball:{name:"Crystal Ball",unified:"1F52E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["crystal_ball","disco","party","magic","circus","fortune_teller"],sheet:[20,11]},prayer_beads:{name:"Prayer Beads",unified:"1F4FF",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["prayer_beads","dhikr","religious"],sheet:[19,13]},"flag-gq":{name:"Equatorial Guinea",unified:"1F1EC-1F1F6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["equatorial_guinea","equatorial","gn","flag","nation","country","banner"],sheet:[33,5]},musical_score:{name:"Musical Score",unified:"1F3BC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["musical_score","treble","clef","compose"],sheet:[8,23]},ram:{name:"Ram",unified:"1F40F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ram","animal","sheep","nature"],sheet:[10,40]},tea:{name:"Teacup Without Handle",unified:"1F375",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tea","drink","bowl","breakfast","green","british"],sheet:[7,1]},face_with_thermometer:{name:"Face with Thermometer",unified:"1F912",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["face_with_thermometer","sick","temperature","thermometer","cold","fever"],sheet:[27,32]},snow_capped_mountain:{name:"Snow Capped Mountain",unified:"1F3D4",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["mountain_snow","photo","nature","environment","winter","cold"],sheet:[9,33]},no_entry_sign:{name:"No Entry Sign",unified:"1F6AB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["no_entry_sign","forbid","stop","limit","denied","disallow","circle"],sheet:[26,5]},barber:{name:"Barber Pole",unified:"1F488",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["barber","hair","salon","style"],sheet:[16,37]},face_with_head_bandage:{name:"Face with Head-Bandage",unified:"1F915",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["face_with_head_bandage","injured","clumsy","bandage","hurt"],sheet:[27,35]},mount_fuji:{name:"Mount Fuji",unified:"1F5FB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mount_fuji","photo","mountain","nature","japanese"],sheet:[22,28]},sheep:{name:"Sheep",unified:"1F411",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sheep","animal","nature","wool","shipit"],sheet:[10,42]},"flag-er":{name:"Eritrea",unified:"1F1EA-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["eritrea","er","flag","nation","country","banner"],sheet:[32,32]},sake:{name:"Sake Bottle and Cup",unified:"1F376",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sake","wine","drink","drunk","beverage","japanese","alcohol","booze"],sheet:[7,2]},musical_keyboard:{name:"Musical Keyboard",unified:"1F3B9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["musical_keyboard","piano","instrument","compose"],sheet:[8,20]},smiling_imp:{name:"Smiling Face with Horns",unified:"1F608",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["smiling_imp","devil","horns"],sheet:[22,41]},"dog2":{name:"Dog",unified:"1F415",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dog2","animal","nature","friend","doge","pet","faithful"],sheet:[10,46]},beer:{name:"Beer Mug",unified:"1F37A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["beer","relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],sheet:[7,6]},alembic:{name:"Alembic",unified:"2697",variations:["2697-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["alembic","distilling","science","experiment","chemistry"],sheet:[1,44]},"flag-ee":{name:"Estonia",unified:"1F1EA-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["estonia","ee","flag","nation","country","banner"],sheet:[32,29]},volcano:{name:"Volcano",unified:"1F30B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["volcano","photo","nature","disaster"],sheet:[4,44]},drum_with_drumsticks:{name:"Drum with Drumsticks",unified:"1F941",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["drum","music","instrument","drumsticks"],sheet:[30,4]},anger:{name:"Anger Symbol",unified:"1F4A2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["anger","angry","mad"],sheet:[17,14]},saxophone:{name:"Saxophone",unified:"1F3B7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["saxophone","music","instrument","jazz","blues"],sheet:[8,18]},poodle:{name:"Poodle",unified:"1F429",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["poodle","dog","animal","101","nature","pet"],sheet:[11,17]},hotsprings:{name:"Hot Springs",unified:"2668",variations:["2668-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[1,36]},"flag-et":{name:"Ethiopia",unified:"1F1EA-1F1F9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ethiopia","et","flag","nation","country","banner"],sheet:[32,34]},desert:{name:"Desert",unified:"1F3DC",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["desert","photo","warm","saharah"],sheet:[9,41]},beers:{name:"Clinking Beer Mugs",unified:"1F37B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["beers","relax","beverage","drink","drunk","party","pub","summer","alcohol","booze"],sheet:[7,7]},imp:{name:"Imp",unified:"1F47F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["imp","devil","angry","horns"],sheet:[15,47]},telescope:{name:"Telescope",unified:"1F52D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["telescope","stars","space","zoom","science","astronomy"],sheet:[20,10]},japanese_ogre:{name:"Japanese Ogre",unified:"1F479",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["japanese_ogre","monster","red","mask","halloween","scary","creepy","devil","demon","japanese","ogre"],sheet:[15,36]},no_pedestrians:{name:"No Pedestrians",unified:"1F6B7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["no_pedestrians","rules","crossing","walking","circle"],sheet:[26,32]},clinking_glasses:{name:"Clinking Glasses",unified:"1F942",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["clinking_glasses","beverage","drink","party","alcohol","celebrate","cheers"],sheet:[30,5]},camping:{name:"Camping",unified:"1F3D5",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["camping","photo","outdoors","tent"],sheet:[9,34]},"cat2":{name:"Cat",unified:"1F408",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cat2","animal","meow","pet","cats"],sheet:[10,33]},trumpet:{name:"Trumpet",unified:"1F3BA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["trumpet","music","brass"],sheet:[8,21]},"flag-eu":{name:"EU",unified:"1F1EA-1F1FA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["eu","european","union","flag","banner"],sheet:[32,35]},microscope:{name:"Microscope",unified:"1F52C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["microscope","laboratory","experiment","zoomin","science","study"],sheet:[20,9]},wine_glass:{name:"Wine Glass",unified:"1F377",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["wine_glass","drink","beverage","drunk","alcohol","booze"],sheet:[7,3]},japanese_goblin:{name:"Japanese Goblin",unified:"1F47A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["japanese_goblin","red","evil","mask","monster","scary","creepy","japanese","goblin"],sheet:[15,37]},tent:{name:"Tent",unified:"26FA",variations:["26FA-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tent","photo","camping","outdoors"],sheet:[2,31]},rooster:{name:"Rooster",unified:"1F413",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rooster","animal","nature","chicken"],sheet:[10,44]},do_not_litter:{name:"Do Not Litter Symbol",unified:"1F6AF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["do_not_litter","trash","bin","garbage","circle"],sheet:[26,9]},hole:{name:"Hole",unified:"1F573",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["hole","embarrassing"],sheet:[21,10]},"flag-fk":{name:"Falkland Islands",unified:"1F1EB-1F1F0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["falkland_islands","falkland","islands","malvinas","flag","nation","country","banner"],sheet:[32,38]},guitar:{name:"Guitar",unified:"1F3B8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["guitar","music","instrument"],sheet:[8,19]},tumbler_glass:{name:"Tumbler Glass",unified:"1F943",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["tumbler_glass","drink","beverage","drunk","alcohol","liquor","booze","bourbon","scotch","whisky","glass","shot"],sheet:[30,6]},"flag-fo":{name:"Faroe Islands",unified:"1F1EB-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["faroe_islands","faroe","islands","flag","nation","country","banner"],sheet:[32,40]},no_bicycles:{name:"No Bicycles",unified:"1F6B3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["no_bicycles","cyclist","prohibited","circle"],sheet:[26,13]},violin:{name:"Violin",unified:"1F3BB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["violin","music","instrument","orchestra","symphony"],sheet:[8,22]},hankey:{name:"Pile of Poo",unified:"1F4A9",short_names:["poop","shit"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["poop","hankey","shitface","fail","turd","shit"],sheet:[17,21]},pill:{name:"Pill",unified:"1F48A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pill","health","medicine","doctor","pharmacy","drug"],sheet:[16,39]},turkey:{name:"Turkey",unified:"1F983",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["turkey","animal","bird"],sheet:[30,32]},railway_track:{name:"Railway Track",unified:"1F6E4",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["railway_track","train","transportation"],sheet:[27,20]},cocktail:{name:"Cocktail Glass",unified:"1F378",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cocktail","drink","drunk","alcohol","beverage","booze","mojito"],sheet:[7,4]},game_die:{name:"Game Die",unified:"1F3B2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["game_die","dice","random","tabletop","play","luck"],sheet:[8,13]},dove_of_peace:{name:"Dove of Peace",unified:"1F54A",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["dove","animal","bird"],sheet:[20,28]},motorway:{name:"Motorway",unified:"1F6E3",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["motorway","road","cupertino","interstate","highway"],sheet:[27,19]},"flag-fj":{name:"Fiji",unified:"1F1EB-1F1EF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fiji","fj","flag","nation","country","banner"],sheet:[32,37]},"non-potable_water":{name:"Non-Potable Water Symbol",unified:"1F6B1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["non-potable_water","drink","faucet","tap","circle"],sheet:[26,11]},ghost:{name:"Ghost",unified:"1F47B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ghost","halloween","spooky","scary"],sheet:[15,38]},syringe:{name:"Syringe",unified:"1F489",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["syringe","health","hospital","drugs","blood","medicine","needle","doctor","nurse"],sheet:[16,38]},building_construction:{name:"Building Construction",unified:"1F3D7",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["building_construction","wip","working","progress"],sheet:[9,36]},"flag-fi":{name:"Finland",unified:"1F1EB-1F1EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["finland","fi","flag","nation","country","banner"],sheet:[32,36]},tropical_drink:{name:"Tropical Drink",unified:"1F379",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tropical_drink","beverage","cocktail","summer","beach","alcohol","booze","mojito"],sheet:[7,5]},thermometer:{name:"Thermometer",unified:"1F321",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["thermometer","weather","temperature","hot","cold"],sheet:[5,17]},skull:{name:"Skull",unified:"1F480",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["skull","dead","skeleton","creepy","death"],sheet:[15,48]},dart:{name:"Direct Hit",unified:"1F3AF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dart","game","play","bar"],sheet:[8,10]},"rabbit2":{name:"Rabbit",unified:"1F407",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rabbit2","animal","nature","pet","magic","spring"],sheet:[10,32]},underage:{name:"No One Under Eighteen Symbol",unified:"1F51E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["underage","18","drink","pub","night","minor","circle"],sheet:[19,44]},"flag-fr":{name:"FR",unified:"1F1EB-1F1F7",short_names:["fr"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fr","banner","flag","nation","france","french","country"],sheet:[32,41]},factory:{name:"Factory",unified:"1F3ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["factory","building","industry","pollution","smoke"],sheet:[10,9]},"mouse2":{name:"Mouse",unified:"1F401",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mouse2","animal","nature","rodent"],sheet:[10,26]},toilet:{name:"Toilet",unified:"1F6BD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["toilet","restroom","wc","washroom","bathroom","potty"],sheet:[26,38]},no_mobile_phones:{name:"No Mobile Phones",unified:"1F4F5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["no_mobile_phones","iphone","mute","circle"],sheet:[19,4]},bowling:{name:"Bowling",unified:"1F3B3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bowling","sports","fun","play"],sheet:[8,14]},champagne:{name:"Bottle with Popping Cork",unified:"1F37E",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["champagne","drink","wine","bottle","celebration"],sheet:[7,10]},skull_and_crossbones:{name:"Skull and Crossbones",unified:"2620",variations:["2620-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["skull_and_crossbones","poison","danger","deadly","scary","death","pirate","evil"],sheet:[1,8]},spoon:{name:"Spoon",unified:"1F944",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["spoon","cutlery","kitchen","tableware"],sheet:[30,7]},video_game:{name:"Video Game",unified:"1F3AE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["video_game","play","console","PS4","controller"],sheet:[8,9]},no_smoking:{name:"No Smoking Symbol",unified:"1F6AD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["no_smoking","cigarette","blue-square","smell","smoke"],sheet:[26,7]},"flag-gf":{name:"French Guiana",unified:"1F1EC-1F1EB",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["french_guiana","french","guiana","flag","nation","country","banner"],sheet:[32,46]},alien:{name:"Extraterrestrial Alien",unified:"1F47D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["alien","UFO","paul","weird","outer_space"],sheet:[15,45]},house:{name:"House Building",unified:"1F3E0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["house","building","home"],sheet:[9,45]},rat:{name:"Rat",unified:"1F400",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rat","animal","mouse","rodent"],sheet:[10,25]},potable_water:{name:"Potable Water Symbol",unified:"1F6B0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["potable_water","blue-square","liquid","restroom","cleaning","faucet"],sheet:[26,10]},chipmunk:{name:"Chipmunk",unified:"1F43F",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["chipmunk","animal","nature","rodent","squirrel"],sheet:[11,39]},exclamation:{name:"Heavy Exclamation Mark Symbol",unified:"2757",variations:["2757-FE0F"],short_names:["heavy_exclamation_mark"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["exclamation","heavy_exclamation_mark","danger","surprise","punctuation","wow","warning"],sheet:[3,28]},"flag-pf":{name:"French Polynesia",unified:"1F1F5-1F1EB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["french_polynesia","french","polynesia","flag","nation","country","banner"],sheet:[34,44]},space_invader:{name:"Alien Monster",unified:"1F47E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["space_invader","game","arcade","play"],sheet:[15,46]},slot_machine:{name:"Slot Machine",unified:"1F3B0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["slot_machine","bet","gamble","vegas","fruit machine","luck","casino"],sheet:[8,11]},shower:{name:"Shower",unified:"1F6BF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["shower","clean","water","bathroom"],sheet:[26,40]},fork_and_knife:{name:"Fork and Knife",unified:"1F374",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fork_and_knife","cutlery","kitchen"],sheet:[7,0]},house_with_garden:{name:"House with Garden",unified:"1F3E1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["house_with_garden","home","plant","nature"],sheet:[9,46]},feet:{name:"Paw Prints",unified:"1F43E",short_names:["paw_prints"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["paw_prints","animal","tracking","footprints","dog","cat","pet","feet"],sheet:[11,38]},grey_exclamation:{name:"White Exclamation Mark Ornament",unified:"2755",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["grey_exclamation","surprise","punctuation","gray","wow","warning"],sheet:[3,27]},"man-bouncing-ball":{name:"Man Bouncing Ball",unified:"26F9-FE0F-200D-2642-FE0F",added_in:"5.2",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"26F9-1F3FB-200D-2642-FE0F",image:"26f9-1f3fb-200d-2642-fe0f.png",sheet_x:48,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"26F9-1F3FC-200D-2642-FE0F",image:"26f9-1f3fc-200d-2642-fe0f.png",sheet_x:48,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"26F9-1F3FD-200D-2642-FE0F",image:"26f9-1f3fd-200d-2642-fe0f.png",sheet_x:48,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"26F9-1F3FE-200D-2642-FE0F",image:"26f9-1f3fe-200d-2642-fe0f.png",sheet_x:48,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"26F9-1F3FF-200D-2642-FE0F",image:"26f9-1f3ff-200d-2642-fe0f.png",sheet_x:48,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"26F9",sheet:[48,31]},house_buildings:{name:"House Buildings",unified:"1F3D8",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["houses","buildings","photo"],sheet:[9,37]},knife_fork_plate:{name:"Fork and Knife with Plate",unified:"1F37D",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["plate_with_cutlery","food","eat","meal","lunch","dinner","restaurant"],sheet:[7,9]},robot_face:{name:"Robot Face",unified:"1F916",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["robot","computer","machine","bot"],sheet:[27,36]},bathtub:{name:"Bathtub",unified:"1F6C1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bathtub","clean","shower","bathroom"],sheet:[26,47]},"flag-tf":{name:"French Southern Territories",unified:"1F1F9-1F1EB",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["french_southern_territories","french","southern","territories","flag","nation","country","banner"],sheet:[35,37]},"flag-ga":{name:"Gabon",unified:"1F1EC-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["gabon","ga","flag","nation","country","banner"],sheet:[32,42]},"man-lifting-weights":{name:"Man Lifting Weights",unified:"1F3CB-FE0F-200D-2642-FE0F",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CB-1F3FB-200D-2642-FE0F",image:"1f3cb-1f3fb-200d-2642-fe0f.png",sheet_x:40,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CB-1F3FC-200D-2642-FE0F",image:"1f3cb-1f3fc-200d-2642-fe0f.png",sheet_x:40,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CB-1F3FD-200D-2642-FE0F",image:"1f3cb-1f3fd-200d-2642-fe0f.png",sheet_x:40,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CB-1F3FE-200D-2642-FE0F",image:"1f3cb-1f3fe-200d-2642-fe0f.png",sheet_x:40,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CB-1F3FF-200D-2642-FE0F",image:"1f3cb-1f3ff-200d-2642-fe0f.png",sheet_x:40,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3CB",sheet:[40,30]},bath:{name:"Bath",unified:"1F6C0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6C0-1F3FB",image:"1f6c0-1f3fb.png",sheet_x:26,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F6C0-1F3FC",image:"1f6c0-1f3fc.png",sheet_x:26,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F6C0-1F3FD",image:"1f6c0-1f3fd.png",sheet_x:26,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F6C0-1F3FE",image:"1f6c0-1f3fe.png",sheet_x:26,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F6C0-1F3FF",image:"1f6c0-1f3ff.png",sheet_x:26,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["bath","clean","shower","bathroom"],sheet:[26,41]},derelict_house_building:{name:"Derelict House Building",unified:"1F3DA",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["derelict_house","abandon","evict","broken","building"],sheet:[9,39]},dragon:{name:"Dragon",unified:"1F409",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dragon","animal","myth","nature","chinese","green"],sheet:[10,34]},jack_o_lantern:{name:"Jack-O-Lantern",unified:"1F383",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["jack_o_lantern","halloween","light","pumpkin","creepy","fall"],sheet:[7,15]},question:{name:"Black Question Mark Ornament",unified:"2753",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["question","doubt","confused"],sheet:[3,25]},smiley_cat:{name:"Smiling Cat Face with Open Mouth",unified:"1F63A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["smiley_cat","animal","cats","happy","smile"],sheet:[23,42]},dragon_face:{name:"Dragon Face",unified:"1F432",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dragon_face","animal","myth","nature","chinese","green"],sheet:[11,26]},bellhop_bell:{name:"Bellhop Bell",unified:"1F6CE",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["bellhop_bell","service"],sheet:[27,11]},grey_question:{name:"White Question Mark Ornament",unified:"2754",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["grey_question","doubts","gray","huh","confused"],sheet:[3,26]},office:{name:"Office Building",unified:"1F3E2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["office","building","bureau","work"],sheet:[9,47]},"flag-gm":{name:"Gambia",unified:"1F1EC-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["gambia","gm","flag","nation","country","banner"],sheet:[33,2]},"man-golfing":{name:"Man Golfing",unified:"1F3CC-FE0F-200D-2642-FE0F",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CC-1F3FB-200D-2642-FE0F",image:"1f3cc-1f3fb-200d-2642-fe0f.png",sheet_x:40,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CC-1F3FC-200D-2642-FE0F",image:"1f3cc-1f3fc-200d-2642-fe0f.png",sheet_x:40,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CC-1F3FD-200D-2642-FE0F",image:"1f3cc-1f3fd-200d-2642-fe0f.png",sheet_x:40,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CC-1F3FE-200D-2642-FE0F",image:"1f3cc-1f3fe-200d-2642-fe0f.png",sheet_x:40,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CC-1F3FF-200D-2642-FE0F",image:"1f3cc-1f3ff-200d-2642-fe0f.png",sheet_x:40,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3CC",sheet:[40,42]},"flag-ge":{name:"Georgia",unified:"1F1EC-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["georgia","ge","flag","nation","country","banner"],sheet:[32,45]},key:{name:"Key",unified:"1F511",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["key","lock","door","password"],sheet:[19,31]},bangbang:{name:"Double Exclamation Mark",unified:"203C",variations:["203C-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,2]},cactus:{name:"Cactus",unified:"1F335",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cactus","vegetable","plant","nature"],sheet:[5,35]},department_store:{name:"Department Store",unified:"1F3EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["department_store","building","shopping","mall"],sheet:[10,8]},"man-surfing":{name:"Man Surfing",unified:"1F3C4-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C4-1F3FB-200D-2642-FE0F",image:"1f3c4-1f3fb-200d-2642-fe0f.png",sheet_x:40,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C4-1F3FC-200D-2642-FE0F",image:"1f3c4-1f3fc-200d-2642-fe0f.png",sheet_x:40,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C4-1F3FD-200D-2642-FE0F",image:"1f3c4-1f3fd-200d-2642-fe0f.png",sheet_x:40,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C4-1F3FE-200D-2642-FE0F",image:"1f3c4-1f3fe-200d-2642-fe0f.png",sheet_x:40,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C4-1F3FF-200D-2642-FE0F",image:"1f3c4-1f3ff-200d-2642-fe0f.png",sheet_x:40,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3C4",sheet:[40,6]},smile_cat:{name:"Grinning Cat Face with Smiling Eyes",unified:"1F638",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["smile_cat","animal","cats","smile"],sheet:[23,40]},old_key:{name:"Old Key",unified:"1F5DD",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["old_key","lock","door","password"],sheet:[22,20]},"man-swimming":{name:"Man Swimming",unified:"1F3CA-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3CA-1F3FB-200D-2642-FE0F",image:"1f3ca-1f3fb-200d-2642-fe0f.png",sheet_x:40,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3CA-1F3FC-200D-2642-FE0F",image:"1f3ca-1f3fc-200d-2642-fe0f.png",sheet_x:40,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3CA-1F3FD-200D-2642-FE0F",image:"1f3ca-1f3fd-200d-2642-fe0f.png",sheet_x:40,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3CA-1F3FE-200D-2642-FE0F",image:"1f3ca-1f3fe-200d-2642-fe0f.png",sheet_x:40,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3CA-1F3FF-200D-2642-FE0F",image:"1f3ca-1f3ff-200d-2642-fe0f.png",sheet_x:40,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3CA",sheet:[40,18]},"flag-de":{name:"DE",unified:"1F1E9-1F1EA",short_names:["de"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["de","german","nation","flag","country","banner"],sheet:[32,20]},post_office:{name:"Japanese Post Office",unified:"1F3E3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["post_office","building","envelope","communication"],sheet:[9,48]},interrobang:{name:"Exclamation Question Mark",unified:"2049",variations:["2049-FE0F"],added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,3]},joy_cat:{name:"Cat Face with Tears of Joy",unified:"1F639",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["joy_cat","animal","cats","haha","happy","tears"],sheet:[23,41]},christmas_tree:{name:"Christmas Tree",unified:"1F384",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["christmas_tree","festival","vacation","december","xmas","celebration"],sheet:[7,16]},low_brightness:{name:"Low Brightness Symbol",unified:"1F505",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["low_brightness","sun","afternoon","warm","summer"],sheet:[19,19]},evergreen_tree:{name:"Evergreen Tree",unified:"1F332",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["evergreen_tree","plant","nature"],sheet:[5,32]},heart_eyes_cat:{name:"Smiling Cat Face with Heart-Shaped Eyes",unified:"1F63B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["heart_eyes_cat","animal","love","like","affection","cats","valentines","heart"],sheet:[23,43]},"man-rowing-boat":{name:"Man Rowing Boat",unified:"1F6A3-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6A3-1F3FB-200D-2642-FE0F",image:"1f6a3-1f3fb-200d-2642-fe0f.png",sheet_x:46,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6A3-1F3FC-200D-2642-FE0F",image:"1f6a3-1f3fc-200d-2642-fe0f.png",sheet_x:46,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6A3-1F3FD-200D-2642-FE0F",image:"1f6a3-1f3fd-200d-2642-fe0f.png",sheet_x:46,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6A3-1F3FE-200D-2642-FE0F",image:"1f6a3-1f3fe-200d-2642-fe0f.png",sheet_x:46,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6A3-1F3FF-200D-2642-FE0F",image:"1f6a3-1f3ff-200d-2642-fe0f.png",sheet_x:46,sheet_y:12,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6A3",sheet:[46,7]},door:{name:"Door",unified:"1F6AA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["door","house","entry","exit"],sheet:[26,4]},"flag-gh":{name:"Ghana",unified:"1F1EC-1F1ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ghana","gh","flag","nation","country","banner"],sheet:[32,48]},european_post_office:{name:"European Post Office",unified:"1F3E4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["european_post_office","building","email"],sheet:[10,0]},high_brightness:{name:"High Brightness Symbol",unified:"1F506",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["high_brightness","sun","light"],sheet:[19,20]},deciduous_tree:{name:"Deciduous Tree",unified:"1F333",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["deciduous_tree","plant","nature"],sheet:[5,33]},couch_and_lamp:{name:"Couch and Lamp",unified:"1F6CB",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["couch_and_lamp","read","chill"],sheet:[27,3]},"man-biking":{name:"Man Biking",unified:"1F6B4-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B4-1F3FB-200D-2642-FE0F",image:"1f6b4-1f3fb-200d-2642-fe0f.png",sheet_x:46,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B4-1F3FC-200D-2642-FE0F",image:"1f6b4-1f3fc-200d-2642-fe0f.png",sheet_x:46,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B4-1F3FD-200D-2642-FE0F",image:"1f6b4-1f3fd-200d-2642-fe0f.png",sheet_x:46,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B4-1F3FE-200D-2642-FE0F",image:"1f6b4-1f3fe-200d-2642-fe0f.png",sheet_x:46,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B4-1F3FF-200D-2642-FE0F",image:"1f6b4-1f3ff-200d-2642-fe0f.png",sheet_x:46,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6B4",sheet:[46,19]},hospital:{name:"Hospital",unified:"1F3E5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hospital","building","health","surgery","doctor"],sheet:[10,1]},"flag-gi":{name:"Gibraltar",unified:"1F1EC-1F1EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["gibraltar","gi","flag","nation","country","banner"],sheet:[33,0]},smirk_cat:{name:"Cat Face with Wry Smile",unified:"1F63C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["smirk_cat","animal","cats","smirk"],sheet:[23,44]},bank:{name:"Bank",unified:"1F3E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bank","building","money","sales","cash","business","enterprise"],sheet:[10,2]},part_alternation_mark:{name:"Part Alternation Mark",unified:"303D",variations:["303D-FE0F"],added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,47]},kissing_cat:{name:"Kissing Cat Face with Closed Eyes",unified:"1F63D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kissing_cat","animal","cats","kiss"],sheet:[23,45]},"man-mountain-biking":{name:"Man Mountain Biking",unified:"1F6B5-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B5-1F3FB-200D-2642-FE0F",image:"1f6b5-1f3fb-200d-2642-fe0f.png",sheet_x:46,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B5-1F3FC-200D-2642-FE0F",image:"1f6b5-1f3fc-200d-2642-fe0f.png",sheet_x:46,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B5-1F3FD-200D-2642-FE0F",image:"1f6b5-1f3fd-200d-2642-fe0f.png",sheet_x:46,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B5-1F3FE-200D-2642-FE0F",image:"1f6b5-1f3fe-200d-2642-fe0f.png",sheet_x:46,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B5-1F3FF-200D-2642-FE0F",image:"1f6b5-1f3ff-200d-2642-fe0f.png",sheet_x:46,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6B5",sheet:[46,31]},"flag-gr":{name:"Greece",unified:"1F1EC-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["greece","gr","flag","nation","country","banner"],sheet:[33,6]},bed:{name:"Bed",unified:"1F6CF",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["bed","sleep","rest"],sheet:[27,12]},palm_tree:{name:"Palm Tree",unified:"1F334",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["palm_tree","plant","vegetable","nature","summer","beach","mojito","tropical"],sheet:[5,34]},hotel:{name:"Hotel",unified:"1F3E8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hotel","building","accomodation","checkin"],sheet:[10,4]},scream_cat:{name:"Weary Cat Face",unified:"1F640",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["scream_cat","animal","cats","munch","scared","scream"],sheet:[23,48]},"flag-gl":{name:"Greenland",unified:"1F1EC-1F1F1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["greenland","gl","flag","nation","country","banner"],sheet:[33,1]},sleeping_accommodation:{name:"Sleeping Accommodation",unified:"1F6CC",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6CC-1F3FB",image:"1f6cc-1f3fb.png",sheet_x:27,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F6CC-1F3FC",image:"1f6cc-1f3fc.png",sheet_x:27,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F6CC-1F3FD",image:"1f6cc-1f3fd.png",sheet_x:27,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F6CC-1F3FE",image:"1f6cc-1f3fe.png",sheet_x:27,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F6CC-1F3FF",image:"1f6cc-1f3ff.png",sheet_x:27,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["sleeping_bed","bed","rest"],sheet:[27,4]},seedling:{name:"Seedling",unified:"1F331",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["seedling","plant","nature","grass","lawn","spring"],sheet:[5,31]},warning:{name:"Warning Sign",unified:"26A0",variations:["26A0-FE0F"],added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[1,48]},herb:{name:"Herb",unified:"1F33F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["herb","vegetable","plant","medicine","weed","grass","lawn"],sheet:[5,45]},crying_cat_face:{name:"Crying Cat Face",unified:"1F63F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["crying_cat_face","animal","tears","weep","sad","cats","upset","cry"],sheet:[23,47]},children_crossing:{name:"Children Crossing",unified:"1F6B8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["children_crossing","school","warning","danger","sign","driving","yellow-diamond"],sheet:[26,33]},"flag-gd":{name:"Grenada",unified:"1F1EC-1F1E9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["grenada","gd","flag","nation","country","banner"],sheet:[32,44]},frame_with_picture:{name:"Frame with Picture",unified:"1F5BC",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["framed_picture","photography"],sheet:[22,12]},convenience_store:{name:"Convenience Store",unified:"1F3EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["convenience_store","building","shopping","groceries"],sheet:[10,6]},school:{name:"School",unified:"1F3EB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["school","building","student","education","learn","teach"],sheet:[10,7]},pouting_cat:{name:"Pouting Cat Face",unified:"1F63E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pouting_cat","animal","cats"],sheet:[23,46]},"flag-gp":{name:"Guadeloupe",unified:"1F1EC-1F1F5",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["guadeloupe","gp","flag","nation","country","banner"],sheet:[33,4]},trident:{name:"Trident Emblem",unified:"1F531",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["trident","weapon","spear"],sheet:[20,14]},shamrock:{name:"Shamrock",unified:"2618",variations:["2618-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["shamrock","vegetable","plant","nature","irish","clover"],sheet:[1,1]},shopping_bags:{name:"Shopping Bags",unified:"1F6CD",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["shopping","mall","buy","purchase"],sheet:[27,10]},shopping_trolley:{name:"Shopping Trolley",unified:"1F6D2",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["shopping_cart","trolley"],sheet:[27,15]},love_hotel:{name:"Love Hotel",unified:"1F3E9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["love_hotel","like","affection","dating"],sheet:[10,5]},fleur_de_lis:{name:"Fleur-De-Lis",unified:"269C",variations:["269C-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["fleur_de_lis","decorative","scout"],sheet:[1,47]},four_leaf_clover:{name:"Four Leaf Clover",unified:"1F340",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["four_leaf_clover","vegetable","plant","nature","lucky","irish"],sheet:[5,46]},"flag-gu":{name:"Guam",unified:"1F1EC-1F1FA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["guam","gu","flag","nation","country","banner"],sheet:[33,9]},open_hands:{name:"Open Hands Sign",unified:"1F450",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F450-1F3FB",image:"1f450-1f3fb.png",sheet_x:13,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F450-1F3FC",image:"1f450-1f3fc.png",sheet_x:13,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F450-1F3FD",image:"1f450-1f3fd.png",sheet_x:13,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F450-1F3FE",image:"1f450-1f3fe.png",sheet_x:13,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F450-1F3FF",image:"1f450-1f3ff.png",sheet_x:13,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["open_hands","fingers","butterfly","hands","open"],sheet:[13,18]},raised_hands:{name:"Person Raising Both Hands in Celebration",unified:"1F64C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64C-1F3FB",image:"1f64c-1f3fb.png",sheet_x:24,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64C-1F3FC",image:"1f64c-1f3fc.png",sheet_x:24,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64C-1F3FD",image:"1f64c-1f3fd.png",sheet_x:24,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64C-1F3FE",image:"1f64c-1f3fe.png",sheet_x:24,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64C-1F3FF",image:"1f64c-1f3ff.png",sheet_x:24,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["raised_hands","gesture","hooray","yea","celebration","hands"],sheet:[24,31]},wedding:{name:"Wedding",unified:"1F492",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["wedding","love","like","affection","couple","marriage","bride","groom"],sheet:[16,47]},bamboo:{name:"Pine Decoration",unified:"1F38D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bamboo","plant","nature","vegetable","panda","pine_decoration"],sheet:[7,30]},beginner:{name:"Japanese Symbol for Beginner",unified:"1F530",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["beginner","badge","shield"],sheet:[20,13]},"flag-gt":{name:"Guatemala",unified:"1F1EC-1F1F9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["guatemala","gt","flag","nation","country","banner"],sheet:[33,8]},gift:{name:"Wrapped Present",unified:"1F381",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["gift","present","birthday","christmas","xmas"],sheet:[7,13]},classical_building:{name:"Classical Building",unified:"1F3DB",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["classical_building","art","culture","history"],sheet:[9,40]},"flag-gg":{name:"Guernsey",unified:"1F1EC-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["guernsey","gg","flag","nation","country","banner"],sheet:[32,47]},balloon:{name:"Balloon",unified:"1F388",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["balloon","party","celebration","birthday","circus"],sheet:[7,25]},tanabata_tree:{name:"Tanabata Tree",unified:"1F38B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tanabata_tree","plant","nature","branch","summer"],sheet:[7,28]},clap:{name:"Clapping Hands Sign",unified:"1F44F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44F-1F3FB",image:"1f44f-1f3fb.png",sheet_x:13,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44F-1F3FC",image:"1f44f-1f3fc.png",sheet_x:13,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44F-1F3FD",image:"1f44f-1f3fd.png",sheet_x:13,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44F-1F3FE",image:"1f44f-1f3fe.png",sheet_x:13,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44F-1F3FF",image:"1f44f-1f3ff.png",sheet_x:13,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["clap","hands","praise","applause","congrats","yay"],sheet:[13,12]},recycle:{name:"Black Universal Recycling Symbol",unified:"267B",variations:["267B-FE0F"],added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[1,37]},pray:{name:"Person with Folded Hands",unified:"1F64F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64F-1F3FB",image:"1f64f-1f3fb.png",sheet_x:25,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64F-1F3FC",image:"1f64f-1f3fc.png",sheet_x:25,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64F-1F3FD",image:"1f64f-1f3fd.png",sheet_x:25,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64F-1F3FE",image:"1f64f-1f3fe.png",sheet_x:25,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64F-1F3FF",image:"1f64f-1f3ff.png",sheet_x:25,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["pray","please","hope","wish","namaste","highfive"],sheet:[25,0]},church:{name:"Church",unified:"26EA",variations:["26EA-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["church","building","religion","christ"],sheet:[2,16]},white_check_mark:{name:"White Heavy Check Mark",unified:"2705",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["white_check_mark","green-square","ok","agree","vote","election","answer","tick"],sheet:[2,34]},flags:{name:"Carp Streamer",unified:"1F38F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["flags","fish","japanese","koinobori","carp","banner"],sheet:[7,32]},leaves:{name:"Leaf Fluttering in Wind",unified:"1F343",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["leaves","nature","plant","tree","vegetable","grass","lawn","spring"],sheet:[6,0]},"flag-gn":{name:"Guinea",unified:"1F1EC-1F1F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["guinea","gn","flag","nation","country","banner"],sheet:[33,3]},ribbon:{name:"Ribbon",unified:"1F380",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ribbon","decoration","pink","girl","bowtie"],sheet:[7,12]},"flag-gw":{name:"Guinea Bissau",unified:"1F1EC-1F1FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["guinea_bissau","gw","bissau","flag","nation","country","banner"],sheet:[33,10]},handshake:{name:"Handshake",unified:"1F91D",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["handshake","agreement","shake"],sheet:[28,19]},"u6307":{name:"Squared Cjk Unified Ideograph-6307",unified:"1F22F",variations:["1F22F-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["u6307","chinese","point","green-square","kanji"],sheet:[4,21]},fallen_leaf:{name:"Fallen Leaf",unified:"1F342",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fallen_leaf","nature","plant","vegetable","leaves"],sheet:[5,48]},mosque:{name:"Mosque",unified:"1F54C",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["mosque","islam","worship","minaret"],sheet:[20,30]},chart:{name:"Chart with Upwards Trend and Yen Sign",unified:"1F4B9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["chart","green-square","graph","presentation","stats"],sheet:[17,42]},"flag-gy":{name:"Guyana",unified:"1F1EC-1F1FE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["guyana","gy","flag","nation","country","banner"],sheet:[33,11]},"+1":{name:"Thumbs Up Sign",unified:"1F44D",short_names:["thumbsup"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44D-1F3FB",image:"1f44d-1f3fb.png",sheet_x:13,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44D-1F3FC",image:"1f44d-1f3fc.png",sheet_x:13,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44D-1F3FD",image:"1f44d-1f3fd.png",sheet_x:13,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44D-1F3FE",image:"1f44d-1f3fe.png",sheet_x:13,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44D-1F3FF",image:"1f44d-1f3ff.png",sheet_x:13,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["+1","thumbsup","yes","awesome","good","agree","accept","cool","hand","like"],sheet:[13,0]},maple_leaf:{name:"Maple Leaf",unified:"1F341",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["maple_leaf","nature","plant","vegetable","ca","fall"],sheet:[5,47]},confetti_ball:{name:"Confetti Ball",unified:"1F38A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["confetti_ball","festival","party","birthday","circus"],sheet:[7,27]},synagogue:{name:"Synagogue",unified:"1F54D",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["synagogue","judaism","worship","temple","jewish"],sheet:[20,31]},tada:{name:"Party Popper",unified:"1F389",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tada","party","congratulations","birthday","magic","circus","celebration"],sheet:[7,26]},kaaba:{name:"Kaaba",unified:"1F54B",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["kaaba","mecca","mosque","islam"],sheet:[20,29]},"-1":{name:"Thumbs Down Sign",unified:"1F44E",short_names:["thumbsdown"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44E-1F3FB",image:"1f44e-1f3fb.png",sheet_x:13,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44E-1F3FC",image:"1f44e-1f3fc.png",sheet_x:13,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44E-1F3FD",image:"1f44e-1f3fd.png",sheet_x:13,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44E-1F3FE",image:"1f44e-1f3fe.png",sheet_x:13,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44E-1F3FF",image:"1f44e-1f3ff.png",sheet_x:13,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["-1","thumbsdown","no","dislike","hand"],sheet:[13,6]},sparkle:{name:"Sparkle",unified:"2747",variations:["2747-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,22]},"flag-ht":{name:"Haiti",unified:"1F1ED-1F1F9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["haiti","ht","flag","nation","country","banner"],sheet:[33,16]},mushroom:{name:"Mushroom",unified:"1F344",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mushroom","plant","vegetable"],sheet:[6,1]},"flag-hn":{name:"Honduras",unified:"1F1ED-1F1F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["honduras","hn","flag","nation","country","banner"],sheet:[33,14]},shinto_shrine:{name:"Shinto Shrine",unified:"26E9",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["shinto_shrine","temple","japan","kyoto"],sheet:[2,15]},ear_of_rice:{name:"Ear of Rice",unified:"1F33E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ear_of_rice","nature","plant"],sheet:[5,44]},facepunch:{name:"Fisted Hand Sign",unified:"1F44A",short_names:["punch"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44A-1F3FB",image:"1f44a-1f3fb.png",sheet_x:12,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44A-1F3FC",image:"1f44a-1f3fc.png",sheet_x:12,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44A-1F3FD",image:"1f44a-1f3fd.png",sheet_x:12,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44A-1F3FE",image:"1f44a-1f3fe.png",sheet_x:12,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44A-1F3FF",image:"1f44a-1f3ff.png",sheet_x:12,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["facepunch","angry","violence","fist","hit","attack","hand"],sheet:[12,31]},eight_spoked_asterisk:{name:"Eight Spoked Asterisk",unified:"2733",variations:["2733-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,19]},dolls:{name:"Japanese Dolls",unified:"1F38E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dolls","japanese","toy","kimono"],sheet:[7,31]},bouquet:{name:"Bouquet",unified:"1F490",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bouquet","flowers","nature","spring"],sheet:[16,45]},negative_squared_cross_mark:{name:"Negative Squared Cross Mark",unified:"274E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["negative_squared_cross_mark","x","green-square","no","deny"],sheet:[3,24]},"flag-hk":{name:"Hong Kong",unified:"1F1ED-1F1F0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hong_kong","hong","kong","flag","nation","country","banner"],sheet:[33,12]},fist:{name:"Raised Fist",unified:"270A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"270A-1F3FB",image:"270a-1f3fb.png",sheet_x:2,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"270A-1F3FC",image:"270a-1f3fc.png",sheet_x:2,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"270A-1F3FD",image:"270a-1f3fd.png",sheet_x:2,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"270A-1F3FE",image:"270a-1f3fe.png",sheet_x:2,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"270A-1F3FF",image:"270a-1f3ff.png",sheet_x:2,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["fist","fingers","hand","grasp"],sheet:[2,37]},izakaya_lantern:{name:"Izakaya Lantern",unified:"1F3EE",short_names:["lantern"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["izakaya_lantern","light","paper","halloween","spooky"],sheet:[10,10]},japan:{name:"Silhouette of Japan",unified:"1F5FE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["japan","nation","country","japanese","asia"],sheet:[22,31]},"left-facing_fist":{name:"Left-Facing Fist",unified:"1F91B",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91B-1F3FB",image:"1f91b-1f3fb.png",sheet_x:28,sheet_y:8,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91B-1F3FC",image:"1f91b-1f3fc.png",sheet_x:28,sheet_y:9,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91B-1F3FD",image:"1f91b-1f3fd.png",sheet_x:28,sheet_y:10,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91B-1F3FE",image:"1f91b-1f3fe.png",sheet_x:28,sheet_y:11,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91B-1F3FF",image:"1f91b-1f3ff.png",sheet_x:28,sheet_y:12,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["fist_left","hand","fistbump"],sheet:[28,7]},tulip:{name:"Tulip",unified:"1F337",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tulip","flowers","plant","nature","summer","spring"],sheet:[5,37]},rice_scene:{name:"Moon Viewing Ceremony",unified:"1F391",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rice_scene","photo","japan","asia","tsukimi"],sheet:[7,34]},wind_chime:{name:"Wind Chime",unified:"1F390",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["wind_chime","nature","ding","spring","bell"],sheet:[7,33]},globe_with_meridians:{name:"Globe with Meridians",unified:"1F310",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["globe_with_meridians","earth","international","world","internet","interweb","i18n"],sheet:[5,0]},"flag-hu":{name:"Hungary",unified:"1F1ED-1F1FA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hungary","hu","flag","nation","country","banner"],sheet:[33,17]},national_park:{name:"National Park",unified:"1F3DE",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["national_park","photo","environment","nature"],sheet:[9,43]},diamond_shape_with_a_dot_inside:{name:"Diamond Shape with a Dot Inside",unified:"1F4A0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["diamond_shape_with_a_dot_inside","jewel","blue","gem","crystal","fancy"],sheet:[17,12]},"right-facing_fist":{name:"Right-Facing Fist",unified:"1F91C",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91C-1F3FB",image:"1f91c-1f3fb.png",sheet_x:28,sheet_y:14,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91C-1F3FC",image:"1f91c-1f3fc.png",sheet_x:28,sheet_y:15,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91C-1F3FD",image:"1f91c-1f3fd.png",sheet_x:28,sheet_y:16,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91C-1F3FE",image:"1f91c-1f3fe.png",sheet_x:28,sheet_y:17,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91C-1F3FF",image:"1f91c-1f3ff.png",sheet_x:28,sheet_y:18,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["fist_right","hand","fistbump"],sheet:[28,13]},email:{name:"Envelope",unified:"2709",variations:["2709-FE0F"],short_names:["envelope"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[2,36]},rose:{name:"Rose",unified:"1F339",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rose","flowers","valentines","love","spring"],sheet:[5,39]},"flag-is":{name:"Iceland",unified:"1F1EE-1F1F8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["iceland","is","flag","nation","country","banner"],sheet:[33,27]},m:{name:"Circled Latin Capital Letter M",unified:"24C2",variations:["24C2-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,32]},sunrise:{name:"Sunrise",unified:"1F305",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sunrise","morning","view","vacation","photo"],sheet:[4,38]},envelope_with_arrow:{name:"Envelope with Downwards Arrow Above",unified:"1F4E9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["envelope_with_arrow","email","communication"],sheet:[18,41]},"flag-in":{name:"India",unified:"1F1EE-1F1F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["india","in","flag","nation","country","banner"],sheet:[33,23]},wilted_flower:{name:"Wilted Flower",unified:"1F940",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["wilted_flower","plant","nature","flower"],sheet:[30,3]},hand_with_index_and_middle_fingers_crossed:{name:"Hand with Index and Middle Fingers Crossed",unified:"1F91E",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91E-1F3FB",image:"1f91e-1f3fb.png",sheet_x:28,sheet_y:21,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91E-1F3FC",image:"1f91e-1f3fc.png",sheet_x:28,sheet_y:22,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91E-1F3FD",image:"1f91e-1f3fd.png",sheet_x:28,sheet_y:23,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91E-1F3FE",image:"1f91e-1f3fe.png",sheet_x:28,sheet_y:24,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91E-1F3FF",image:"1f91e-1f3ff.png",sheet_x:28,sheet_y:25,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["crossed_fingers","good","lucky"],sheet:[28,20]},"flag-id":{name:"Indonesia",unified:"1F1EE-1F1E9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["indonesia","flag","nation","country","banner"],sheet:[33,19]},v:{name:"Victory Hand",unified:"270C",variations:["270C-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"270C-1F3FB",image:"270c-1f3fb.png",sheet_x:3,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"270C-1F3FC",image:"270c-1f3fc.png",sheet_x:3,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"270C-1F3FD",image:"270c-1f3fd.png",sheet_x:3,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"270C-1F3FE",image:"270c-1f3fe.png",sheet_x:3,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"270C-1F3FF",image:"270c-1f3ff.png",sheet_x:3,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["v","fingers","ohyeah","hand","peace","victory","two"],sheet:[3,0]},sunrise_over_mountains:{name:"Sunrise over Mountains",unified:"1F304",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sunrise_over_mountains","view","vacation","photo"],sheet:[4,37]},sunflower:{name:"Sunflower",unified:"1F33B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sunflower","nature","plant","fall"],sheet:[5,41]},cyclone:{name:"Cyclone",unified:"1F300",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cyclone","weather","swirl","blue","cloud","vortex","spiral","whirlpool","spin","tornado","hurricane","typhoon"],sheet:[4,33]},incoming_envelope:{name:"Incoming Envelope",unified:"1F4E8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["incoming_envelope","email","inbox"],sheet:[18,40]},"e-mail":{name:"E-Mail Symbol",unified:"1F4E7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["e-mail","communication","inbox"],sheet:[18,39]},blossom:{name:"Blossom",unified:"1F33C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["blossom","nature","flowers","yellow"],sheet:[5,42]},stars:{name:"Shooting Star",unified:"1F320",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["stars","night","photo"],sheet:[5,16]},the_horns:{name:"Sign of the Horns",unified:"1F918",short_names:["sign_of_the_horns"],added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F918-1F3FB",image:"1f918-1f3fb.png",sheet_x:27,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F918-1F3FC",image:"1f918-1f3fc.png",sheet_x:27,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F918-1F3FD",image:"1f918-1f3fd.png",sheet_x:27,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F918-1F3FE",image:"1f918-1f3fe.png",sheet_x:27,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F918-1F3FF",image:"1f918-1f3ff.png",sheet_x:27,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["metal","hand","fingers","evil_eye","sign_of_horns","rock_on"],sheet:[27,38]},zzz:{name:"Sleeping Symbol",unified:"1F4A4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["zzz","sleepy","tired","dream"],sheet:[17,16]},"flag-ir":{name:"Iran",unified:"1F1EE-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["iran","iran,","islamic","republic","flag","nation","country","banner"],sheet:[33,26]},"flag-iq":{name:"Iraq",unified:"1F1EE-1F1F6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["iraq","iq","flag","nation","country","banner"],sheet:[33,25]},love_letter:{name:"Love Letter",unified:"1F48C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["love_letter","email","like","affection","envelope","valentines"],sheet:[16,41]},ok_hand:{name:"Ok Hand Sign",unified:"1F44C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44C-1F3FB",image:"1f44c-1f3fb.png",sheet_x:12,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44C-1F3FC",image:"1f44c-1f3fc.png",sheet_x:12,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44C-1F3FD",image:"1f44c-1f3fd.png",sheet_x:12,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44C-1F3FE",image:"1f44c-1f3fe.png",sheet_x:12,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44C-1F3FF",image:"1f44c-1f3ff.png",sheet_x:12,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["ok_hand","fingers","limbs","perfect","ok","okay"],sheet:[12,43]},sparkler:{name:"Firework Sparkler",unified:"1F387",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sparkler","stars","night","shine"],sheet:[7,24]},atm:{name:"Automated Teller Machine",unified:"1F3E7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["atm","money","sales","cash","blue-square","payment","bank"],sheet:[10,3]},cherry_blossom:{name:"Cherry Blossom",unified:"1F338",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cherry_blossom","nature","plant","spring","flower"],sheet:[5,38]},wc:{name:"Water Closet",unified:"1F6BE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["wc","toilet","restroom","blue-square"],sheet:[26,39]},"flag-ie":{name:"Ireland",unified:"1F1EE-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ireland","ie","flag","nation","country","banner"],sheet:[33,20]},inbox_tray:{name:"Inbox Tray",unified:"1F4E5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["inbox_tray","email","documents"],sheet:[18,37]},point_left:{name:"White Left Pointing Backhand Index",unified:"1F448",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F448-1F3FB",image:"1f448-1f3fb.png",sheet_x:12,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F448-1F3FC",image:"1f448-1f3fc.png",sheet_x:12,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F448-1F3FD",image:"1f448-1f3fd.png",sheet_x:12,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F448-1F3FE",image:"1f448-1f3fe.png",sheet_x:12,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F448-1F3FF",image:"1f448-1f3ff.png",sheet_x:12,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["point_left","direction","fingers","hand","left"],sheet:[12,19]},fireworks:{name:"Fireworks",unified:"1F386",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fireworks","photo","festival","carnival","congratulations"],sheet:[7,23]},hibiscus:{name:"Hibiscus",unified:"1F33A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["hibiscus","plant","vegetable","flowers","beach"],sheet:[5,40]},outbox_tray:{name:"Outbox Tray",unified:"1F4E4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["outbox_tray","inbox","email"],sheet:[18,36]},point_right:{name:"White Right Pointing Backhand Index",unified:"1F449",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F449-1F3FB",image:"1f449-1f3fb.png",sheet_x:12,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F449-1F3FC",image:"1f449-1f3fc.png",sheet_x:12,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F449-1F3FD",image:"1f449-1f3fd.png",sheet_x:12,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F449-1F3FE",image:"1f449-1f3fe.png",sheet_x:12,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F449-1F3FF",image:"1f449-1f3ff.png",sheet_x:12,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["point_right","fingers","hand","direction","right"],sheet:[12,25]},city_sunrise:{name:"Sunset over Buildings",unified:"1F307",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["city_sunrise","photo","good morning","dawn"],sheet:[4,40]},"flag-im":{name:"Isle of Man",unified:"1F1EE-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["isle_of_man","isle","man","flag","nation","country","banner"],sheet:[33,22]},earth_americas:{name:"Earth Globe Americas",unified:"1F30E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["earth_americas","globe","world","USA","international"],sheet:[4,47]},wheelchair:{name:"Wheelchair Symbol",unified:"267F",variations:["267F-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["wheelchair","blue-square","disabled","a11y","accessibility"],sheet:[1,38]},"point_up_2":{name:"White Up Pointing Backhand Index",unified:"1F446",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F446-1F3FB",image:"1f446-1f3fb.png",sheet_x:12,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F446-1F3FC",image:"1f446-1f3fc.png",sheet_x:12,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F446-1F3FD",image:"1f446-1f3fd.png",sheet_x:12,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F446-1F3FE",image:"1f446-1f3fe.png",sheet_x:12,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F446-1F3FF",image:"1f446-1f3ff.png",sheet_x:12,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["point_up_2","fingers","hand","direction","up"],sheet:[12,7]},parking:{name:"Negative Squared Latin Capital Letter P",unified:"1F17F",variations:["1F17F-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[4,6]},city_sunset:{name:"Cityscape at Dusk",unified:"1F306",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["city_sunset","photo","evening","sky","buildings"],sheet:[4,39]},earth_africa:{name:"Earth Globe Europe-Africa",unified:"1F30D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["earth_africa","globe","world","international"],sheet:[4,46]},package:{name:"Package",unified:"1F4E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["package","mail","gift","cardboard","box","moving"],sheet:[18,38]},"flag-il":{name:"Israel",unified:"1F1EE-1F1F1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["israel","il","flag","nation","country","banner"],sheet:[33,21]},cityscape:{name:"Cityscape",unified:"1F3D9",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["cityscape","photo","night life","urban"],sheet:[9,38]},point_down:{name:"White Down Pointing Backhand Index",unified:"1F447",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F447-1F3FB",image:"1f447-1f3fb.png",sheet_x:12,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F447-1F3FC",image:"1f447-1f3fc.png",sheet_x:12,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F447-1F3FD",image:"1f447-1f3fd.png",sheet_x:12,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F447-1F3FE",image:"1f447-1f3fe.png",sheet_x:12,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F447-1F3FF",image:"1f447-1f3ff.png",sheet_x:12,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["point_down","fingers","hand","direction","down"],sheet:[12,13]},"flag-it":{name:"IT",unified:"1F1EE-1F1F9",short_names:["it"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["it","italy","flag","nation","country","banner"],sheet:[33,28]},label:{name:"Label",unified:"1F3F7",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["label","sale","tag"],sheet:[10,16]},"u7a7a":{name:"Squared Cjk Unified Ideograph-7a7a",unified:"1F233",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["u7a7a","kanji","japanese","chinese","empty","sky","blue-square"],sheet:[4,23]},earth_asia:{name:"Earth Globe Asia-Australia",unified:"1F30F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["earth_asia","globe","world","east","international"],sheet:[4,48]},"flag-jm":{name:"Jamaica",unified:"1F1EF-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["jamaica","jm","flag","nation","country","banner"],sheet:[33,30]},sa:{name:"Squared Katakana Sa",unified:"1F202",variations:["1F202-FE0F"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[4,19]},night_with_stars:{name:"Night with Stars",unified:"1F303",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["night_with_stars","evening","city","downtown"],sheet:[4,36]},mailbox_closed:{name:"Closed Mailbox with Lowered Flag",unified:"1F4EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mailbox_closed","email","communication","inbox"],sheet:[18,42]},point_up:{name:"White Up Pointing Index",unified:"261D",variations:["261D-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"261D-1F3FB",image:"261d-1f3fb.png",sheet_x:1,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"261D-1F3FC",image:"261d-1f3fc.png",sheet_x:1,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"261D-1F3FD",image:"261d-1f3fd.png",sheet_x:1,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"261D-1F3FE",image:"261d-1f3fe.png",sheet_x:1,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"261D-1F3FF",image:"261d-1f3ff.png",sheet_x:1,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["point_up","hand","fingers","direction","up"],sheet:[1,2]},full_moon:{name:"Full Moon Symbol",unified:"1F315",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["full_moon","nature","yellow","twilight","planet","space","night","evening","sleep"],sheet:[5,5]},mailbox:{name:"Closed Mailbox with Raised Flag",unified:"1F4EB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mailbox","email","inbox","communication"],sheet:[18,43]},milky_way:{name:"Milky Way",unified:"1F30C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["milky_way","photo","space","stars"],sheet:[4,45]},waning_gibbous_moon:{name:"Waning Gibbous Moon Symbol",unified:"1F316",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["waning_gibbous_moon","nature","twilight","planet","space","night","evening","sleep","waxing_gibbous_moon"],sheet:[5,6]},"flag-jp":{name:"JP",unified:"1F1EF-1F1F5",short_names:["jp"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["jp","japanese","nation","flag","country","banner"],sheet:[33,32]},hand:{name:"Raised Hand",unified:"270B",short_names:["raised_hand"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"270B-1F3FB",image:"270b-1f3fb.png",sheet_x:2,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"270B-1F3FC",image:"270b-1f3fc.png",sheet_x:2,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"270B-1F3FD",image:"270b-1f3fd.png",sheet_x:2,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"270B-1F3FE",image:"270b-1f3fe.png",sheet_x:2,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"270B-1F3FF",image:"270b-1f3ff.png",sheet_x:2,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["raised_hand","fingers","stop","highfive","palm","ban"],sheet:[2,43]},passport_control:{name:"Passport Control",unified:"1F6C2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["passport_control","custom","blue-square"],sheet:[26,48]},mailbox_with_mail:{name:"Open Mailbox with Raised Flag",unified:"1F4EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mailbox_with_mail","email","inbox","communication"],sheet:[18,44]},customs:{name:"Customs",unified:"1F6C3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["customs","passport","border","blue-square"],sheet:[27,0]},bridge_at_night:{name:"Bridge at Night",unified:"1F309",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bridge_at_night","photo","sanfrancisco"],sheet:[4,42]},raised_back_of_hand:{name:"Raised Back of Hand",unified:"1F91A",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F91A-1F3FB",image:"1f91a-1f3fb.png",sheet_x:28,sheet_y:2,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F91A-1F3FC",image:"1f91a-1f3fc.png",sheet_x:28,sheet_y:3,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F91A-1F3FD",image:"1f91a-1f3fd.png",sheet_x:28,sheet_y:4,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F91A-1F3FE",image:"1f91a-1f3fe.png",sheet_x:28,sheet_y:5,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F91A-1F3FF",image:"1f91a-1f3ff.png",sheet_x:28,sheet_y:6,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["raised_back_of_hand","fingers","raised","backhand"],sheet:[28,1]},last_quarter_moon:{name:"Last Quarter Moon Symbol",unified:"1F317",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["last_quarter_moon","nature","twilight","planet","space","night","evening","sleep"],sheet:[5,7]},crossed_flags:{name:"Crossed Flags",unified:"1F38C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["crossed_flags","japanese","nation","country","border"],sheet:[7,29]},waning_crescent_moon:{name:"Waning Crescent Moon Symbol",unified:"1F318",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["waning_crescent_moon","nature","twilight","planet","space","night","evening","sleep"],sheet:[5,8]},baggage_claim:{name:"Baggage Claim",unified:"1F6C4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["baggage_claim","blue-square","airport","transport"],sheet:[27,1]},raised_hand_with_fingers_splayed:{name:"Raised Hand with Fingers Splayed",unified:"1F590",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F590-1F3FB",image:"1f590-1f3fb.png",sheet_x:21,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F590-1F3FC",image:"1f590-1f3fc.png",sheet_x:21,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F590-1F3FD",image:"1f590-1f3fd.png",sheet_x:21,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F590-1F3FE",image:"1f590-1f3fe.png",sheet_x:21,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F590-1F3FF",image:"1f590-1f3ff.png",sheet_x:21,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["raised_hand_with_fingers_splayed","hand","fingers","palm"],sheet:[21,38]},foggy:{name:"Foggy",unified:"1F301",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["foggy","photo","mountain"],sheet:[4,34]},mailbox_with_no_mail:{name:"Open Mailbox with Lowered Flag",unified:"1F4ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mailbox_with_no_mail","email","inbox"],sheet:[18,45]},"flag-je":{name:"Jersey",unified:"1F1EF-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["jersey","je","flag","nation","country","banner"],sheet:[33,29]},new_moon:{name:"New Moon Symbol",unified:"1F311",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["new_moon","nature","twilight","planet","space","night","evening","sleep"],sheet:[5,1]},"flag-jo":{name:"Jordan",unified:"1F1EF-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["jordan","jo","flag","nation","country","banner"],sheet:[33,31]},postbox:{name:"Postbox",unified:"1F4EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["postbox","email","letter","envelope"],sheet:[18,46]},"spock-hand":{name:"Raised Hand with Part Between Middle and Ring Fingers",unified:"1F596",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F596-1F3FB",image:"1f596-1f3fb.png",sheet_x:22,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F596-1F3FC",image:"1f596-1f3fc.png",sheet_x:22,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F596-1F3FD",image:"1f596-1f3fd.png",sheet_x:22,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F596-1F3FE",image:"1f596-1f3fe.png",sheet_x:22,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F596-1F3FF",image:"1f596-1f3ff.png",sheet_x:22,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["vulcan_salute","hand","fingers","spock","star trek"],sheet:[22,1]},left_luggage:{name:"Left Luggage",unified:"1F6C5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["left_luggage","blue-square","travel"],sheet:[27,2]},waxing_crescent_moon:{name:"Waxing Crescent Moon Symbol",unified:"1F312",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["waxing_crescent_moon","nature","twilight","planet","space","night","evening","sleep"],sheet:[5,2]},mens:{name:"Mens Symbol",unified:"1F6B9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mens","toilet","restroom","wc","blue-square","gender","male"],sheet:[26,34]},postal_horn:{name:"Postal Horn",unified:"1F4EF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["postal_horn","instrument","music"],sheet:[18,47]},wave:{name:"Waving Hand Sign",unified:"1F44B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F44B-1F3FB",image:"1f44b-1f3fb.png",sheet_x:12,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F44B-1F3FC",image:"1f44b-1f3fc.png",sheet_x:12,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F44B-1F3FD",image:"1f44b-1f3fd.png",sheet_x:12,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F44B-1F3FE",image:"1f44b-1f3fe.png",sheet_x:12,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F44B-1F3FF",image:"1f44b-1f3ff.png",sheet_x:12,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["wave","hands","gesture","goodbye","solong","farewell","hello","hi","palm"],sheet:[12,37]},"flag-kz":{name:"Kazakhstan",unified:"1F1F0-1F1FF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kazakhstan","kz","flag","nation","country","banner"],sheet:[33,43]},scroll:{name:"Scroll",unified:"1F4DC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["scroll","documents","ancient","history","paper"],sheet:[18,28]},womens:{name:"Womens Symbol",unified:"1F6BA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["womens","purple-square","woman","female","toilet","loo","restroom","gender"],sheet:[26,35]},first_quarter_moon:{name:"First Quarter Moon Symbol",unified:"1F313",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["first_quarter_moon","nature","twilight","planet","space","night","evening","sleep"],sheet:[5,3]},call_me_hand:{name:"Call Me Hand",unified:"1F919",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F919-1F3FB",image:"1f919-1f3fb.png",sheet_x:27,sheet_y:45,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F919-1F3FC",image:"1f919-1f3fc.png",sheet_x:27,sheet_y:46,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F919-1F3FD",image:"1f919-1f3fd.png",sheet_x:27,sheet_y:47,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F919-1F3FE",image:"1f919-1f3fe.png",sheet_x:27,sheet_y:48,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F919-1F3FF",image:"1f919-1f3ff.png",sheet_x:28,sheet_y:0,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["call_me_hand","hands","gesture"],sheet:[27,44]},"flag-ke":{name:"Kenya",unified:"1F1F0-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kenya","ke","flag","nation","country","banner"],sheet:[33,33]},muscle:{name:"Flexed Biceps",unified:"1F4AA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F4AA-1F3FB",image:"1f4aa-1f3fb.png",sheet_x:17,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F4AA-1F3FC",image:"1f4aa-1f3fc.png",sheet_x:17,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F4AA-1F3FD",image:"1f4aa-1f3fd.png",sheet_x:17,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F4AA-1F3FE",image:"1f4aa-1f3fe.png",sheet_x:17,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F4AA-1F3FF",image:"1f4aa-1f3ff.png",sheet_x:17,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["muscle","arm","flex","hand","summer","strong","biceps"],sheet:[17,22]},moon:{name:"Waxing Gibbous Moon Symbol",unified:"1F314",short_names:["waxing_gibbous_moon"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["waxing_gibbous_moon","nature","night","sky","gray","twilight","planet","space","evening","sleep"],sheet:[5,4]},"flag-ki":{name:"Kiribati",unified:"1F1F0-1F1EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kiribati","ki","flag","nation","country","banner"],sheet:[33,36]},page_with_curl:{name:"Page with Curl",unified:"1F4C3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["page_with_curl","documents","office","paper"],sheet:[18,3]},baby_symbol:{name:"Baby Symbol",unified:"1F6BC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["baby_symbol","orange-square","child"],sheet:[26,37]},page_facing_up:{name:"Page Facing Up",unified:"1F4C4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["page_facing_up","documents","office","paper","information"],sheet:[18,4]},"flag-xk":{name:"Kosovo",unified:"1F1FD-1F1F0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kosovo","xk","flag","nation","country","banner"],sheet:[36,18]},restroom:{name:"Restroom",unified:"1F6BB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["restroom","blue-square","toilet","refresh","wc","gender"],sheet:[26,36]},middle_finger:{name:"Reversed Hand with Middle Finger Extended",unified:"1F595",short_names:["reversed_hand_with_middle_finger_extended"],added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F595-1F3FB",image:"1f595-1f3fb.png",sheet_x:21,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F595-1F3FC",image:"1f595-1f3fc.png",sheet_x:21,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F595-1F3FD",image:"1f595-1f3fd.png",sheet_x:21,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F595-1F3FE",image:"1f595-1f3fe.png",sheet_x:21,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F595-1F3FF",image:"1f595-1f3ff.png",sheet_x:22,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["fu","hand","fingers","rude","middle","flipping"],sheet:[21,44]},new_moon_with_face:{name:"New Moon with Face",unified:"1F31A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["new_moon_with_face","nature","twilight","planet","space","night","evening","sleep"],sheet:[5,10]},bookmark_tabs:{name:"Bookmark Tabs",unified:"1F4D1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bookmark_tabs","favorite","save","order","tidy"],sheet:[18,17]},put_litter_in_its_place:{name:"Put Litter in Its Place Symbol",unified:"1F6AE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["put_litter_in_its_place","blue-square","sign","human","info"],sheet:[26,8]},writing_hand:{name:"Writing Hand",unified:"270D",variations:["270D-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"270D-1F3FB",image:"270d-1f3fb.png",sheet_x:3,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"270D-1F3FC",image:"270d-1f3fc.png",sheet_x:3,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"270D-1F3FD",image:"270d-1f3fd.png",sheet_x:3,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"270D-1F3FE",image:"270d-1f3fe.png",sheet_x:3,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"270D-1F3FF",image:"270d-1f3ff.png",sheet_x:3,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["writing_hand","lower_left_ballpoint_pen","stationery","write","compose"],sheet:[3,6]},"flag-kw":{name:"Kuwait",unified:"1F1F0-1F1FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kuwait","kw","flag","nation","country","banner"],sheet:[33,41]},full_moon_with_face:{name:"Full Moon with Face",unified:"1F31D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["full_moon_with_face","nature","twilight","planet","space","night","evening","sleep"],sheet:[5,13]},sun_with_face:{name:"Sun with Face",unified:"1F31E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sun_with_face","nature","morning","sky"],sheet:[5,14]},"flag-kg":{name:"Kyrgyzstan",unified:"1F1F0-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kyrgyzstan","kg","flag","nation","country","banner"],sheet:[33,34]},selfie:{name:"Selfie",unified:"1F933",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F933-1F3FB",image:"1f933-1f3fb.png",sheet_x:28,sheet_y:46,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F933-1F3FC",image:"1f933-1f3fc.png",sheet_x:28,sheet_y:47,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F933-1F3FD",image:"1f933-1f3fd.png",sheet_x:28,sheet_y:48,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F933-1F3FE",image:"1f933-1f3fe.png",sheet_x:29,sheet_y:0,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F933-1F3FF",image:"1f933-1f3ff.png",sheet_x:29,sheet_y:1,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["selfie","camera","phone"],sheet:[28,45]},cinema:{name:"Cinema",unified:"1F3A6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cinema","blue-square","record","film","movie","curtain","stage","theater"],sheet:[8,1]},bar_chart:{name:"Bar Chart",unified:"1F4CA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bar_chart","graph","presentation","stats"],sheet:[18,10]},first_quarter_moon_with_face:{name:"First Quarter Moon with Face",unified:"1F31B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["first_quarter_moon_with_face","nature","twilight","planet","space","night","evening","sleep"],sheet:[5,11]},nail_care:{name:"Nail Polish",unified:"1F485",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F485-1F3FB",image:"1f485-1f3fb.png",sheet_x:16,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F485-1F3FC",image:"1f485-1f3fc.png",sheet_x:16,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F485-1F3FD",image:"1f485-1f3fd.png",sheet_x:16,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F485-1F3FE",image:"1f485-1f3fe.png",sheet_x:16,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F485-1F3FF",image:"1f485-1f3ff.png",sheet_x:16,sheet_y:24,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["nail_care","beauty","manicure","finger","fashion","nail"],sheet:[16,19]},signal_strength:{name:"Antenna with Bars",unified:"1F4F6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["signal_strength","blue-square","reception","phone","internet","connection","wifi","bluetooth","bars"],sheet:[19,5]},"flag-la":{name:"Laos",unified:"1F1F1-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["laos","lao","democratic","republic","flag","nation","country","banner"],sheet:[33,44]},chart_with_upwards_trend:{name:"Chart with Upwards Trend",unified:"1F4C8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["chart_with_upwards_trend","graph","presentation","stats","recovery","business","economics","money","sales","good","success"],sheet:[18,8]},chart_with_downwards_trend:{name:"Chart with Downwards Trend",unified:"1F4C9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["chart_with_downwards_trend","graph","presentation","stats","recession","business","economics","money","sales","bad","failure"],sheet:[18,9]},last_quarter_moon_with_face:{name:"Last Quarter Moon with Face",unified:"1F31C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["last_quarter_moon_with_face","nature","twilight","planet","space","night","evening","sleep"],sheet:[5,12]},"flag-lv":{name:"Latvia",unified:"1F1F1-1F1FB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["latvia","lv","flag","nation","country","banner"],sheet:[34,4]},koko:{name:"Squared Katakana Koko",unified:"1F201",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["koko","blue-square","here","katakana","japanese","destination"],sheet:[4,18]},ring:{name:"Ring",unified:"1F48D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ring","wedding","propose","marriage","valentines","diamond","fashion","jewelry","gem","engagement"],sheet:[16,42]},spiral_note_pad:{name:"Spiral Note Pad",unified:"1F5D2",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["spiral_notepad","memo","stationery"],sheet:[22,17]},crescent_moon:{name:"Crescent Moon",unified:"1F319",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["crescent_moon","night","sleep","sky","evening","magic"],sheet:[5,9]},symbols:{name:"Input Symbol for Symbols",unified:"1F523",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["symbols","blue-square","music","note","ampersand","percent","glyphs","characters"],sheet:[20,0]},lipstick:{name:"Lipstick",unified:"1F484",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["lipstick","female","girl","fashion","woman"],sheet:[16,18]},"flag-lb":{name:"Lebanon",unified:"1F1F1-1F1E7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["lebanon","lb","flag","nation","country","banner"],sheet:[33,45]},kiss:{name:"Kiss Mark",unified:"1F48B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kiss","face","lips","love","like","affection","valentines"],sheet:[16,40]},information_source:{name:"Information Source",unified:"2139",variations:["2139-FE0F"],added_in:"3.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,5]},"flag-ls":{name:"Lesotho",unified:"1F1F1-1F1F8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["lesotho","ls","flag","nation","country","banner"],sheet:[34,1]},dizzy:{name:"Dizzy Symbol",unified:"1F4AB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dizzy","star","sparkle","shoot","magic"],sheet:[17,28]},spiral_calendar_pad:{name:"Spiral Calendar Pad",unified:"1F5D3",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["spiral_calendar","date","schedule","planning"],sheet:[22,18]},"flag-lr":{name:"Liberia",unified:"1F1F1-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["liberia","lr","flag","nation","country","banner"],sheet:[34,0]},abc:{name:"Input Symbol for Latin Letters",unified:"1F524",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["abc","blue-square","alphabet"],sheet:[20,1]},lips:{name:"Mouth",unified:"1F444",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["lips","mouth","kiss"],sheet:[12,5]},star:{name:"White Medium Star",unified:"2B50",variations:["2B50-FE0F"],added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["star","night","yellow"],sheet:[3,44]},calendar:{name:"Tear-off Calendar",unified:"1F4C6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["calendar","schedule","date","planning"],sheet:[18,6]},"star2":{name:"Glowing Star",unified:"1F31F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["star2","night","sparkle","awesome","good","magic"],sheet:[5,15]},tongue:{name:"Tongue",unified:"1F445",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tongue","mouth","playful"],sheet:[12,6]},abcd:{name:"Input Symbol for Latin Small Letters",unified:"1F521",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["abcd","blue-square","alphabet"],sheet:[19,47]},date:{name:"Calendar",unified:"1F4C5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["date","calendar","schedule"],sheet:[18,5]},"flag-ly":{name:"Libya",unified:"1F1F1-1F1FE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["libya","ly","flag","nation","country","banner"],sheet:[34,5]},capital_abcd:{name:"Input Symbol for Latin Capital Letters",unified:"1F520",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["capital_abcd","alphabet","words","blue-square"],sheet:[19,46]},sparkles:{name:"Sparkles",unified:"2728",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sparkles","stars","shine","shiny","cool","awesome","good","magic"],sheet:[3,18]},ear:{name:"Ear",unified:"1F442",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F442-1F3FB",image:"1f442-1f3fb.png",sheet_x:11,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F442-1F3FC",image:"1f442-1f3fc.png",sheet_x:11,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F442-1F3FD",image:"1f442-1f3fd.png",sheet_x:11,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F442-1F3FE",image:"1f442-1f3fe.png",sheet_x:11,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F442-1F3FF",image:"1f442-1f3ff.png",sheet_x:11,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["ear","face","hear","sound","listen"],sheet:[11,42]},"flag-li":{name:"Liechtenstein",unified:"1F1F1-1F1EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["liechtenstein","li","flag","nation","country","banner"],sheet:[33,47]},card_index:{name:"Card Index",unified:"1F4C7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["card_index","business","stationery"],sheet:[18,7]},zap:{name:"High Voltage Sign",unified:"26A1",variations:["26A1-FE0F"],added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["zap","thunder","weather","lightning bolt","fast"],sheet:[2,0]},"flag-lt":{name:"Lithuania",unified:"1F1F1-1F1F9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["lithuania","lt","flag","nation","country","banner"],sheet:[34,2]},nose:{name:"Nose",unified:"1F443",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F443-1F3FB",image:"1f443-1f3fb.png",sheet_x:12,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F443-1F3FC",image:"1f443-1f3fc.png",sheet_x:12,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F443-1F3FD",image:"1f443-1f3fd.png",sheet_x:12,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F443-1F3FE",image:"1f443-1f3fe.png",sheet_x:12,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F443-1F3FF",image:"1f443-1f3ff.png",sheet_x:12,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["nose","smell","sniff"],sheet:[11,48]},card_file_box:{name:"Card File Box",unified:"1F5C3",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["card_file_box","business","stationery"],sheet:[22,14]},ng:{name:"Squared Ng",unified:"1F196",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ng","blue-square","words","shape","icon"],sheet:[4,13]},ballot_box_with_ballot:{name:"Ballot Box with Ballot",unified:"1F5F3",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["ballot_box","election","vote"],sheet:[22,26]},ok:{name:"Squared Ok",unified:"1F197",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ok","good","agree","yes","blue-square"],sheet:[4,14]},footprints:{name:"Footprints",unified:"1F463",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["footprints","feet","tracking","walking","beach"],sheet:[13,42]},"flag-lu":{name:"Luxembourg",unified:"1F1F1-1F1FA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["luxembourg","lu","flag","nation","country","banner"],sheet:[34,3]},fire:{name:"Fire",unified:"1F525",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fire","hot","cook","flame"],sheet:[20,2]},boom:{name:"Collision Symbol",unified:"1F4A5",short_names:["collision"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["boom","bomb","explode","explosion","collision","blown"],sheet:[17,17]},file_cabinet:{name:"File Cabinet",unified:"1F5C4",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["file_cabinet","filing","organizing"],sheet:[22,15]},up:{name:"Squared Up with Exclamation Mark",unified:"1F199",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["up","blue-square","above","high"],sheet:[4,16]},eye:{name:"Eye",unified:"1F441",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["eye","face","look","see","watch","stare"],sheet:[11,41]},"flag-mo":{name:"Macau",unified:"1F1F2-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["macau","macao","flag","nation","country","banner"],sheet:[34,17]},"flag-mk":{name:"Macedonia",unified:"1F1F2-1F1F0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["macedonia","macedonia,","flag","nation","country","banner"],sheet:[34,13]},cool:{name:"Squared Cool",unified:"1F192",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["cool","words","blue-square"],sheet:[4,9]},comet:{name:"Comet",unified:"2604",variations:["2604-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["comet","space"],sheet:[0,45]},eyes:{name:"Eyes",unified:"1F440",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["eyes","look","watch","stalk","peek","see"],sheet:[11,40]},clipboard:{name:"Clipboard",unified:"1F4CB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clipboard","stationery","documents"],sheet:[18,11]},file_folder:{name:"File Folder",unified:"1F4C1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["file_folder","documents","business","office"],sheet:[18,1]},speaking_head_in_silhouette:{name:"Speaking Head in Silhouette",unified:"1F5E3",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["speaking_head","user","person","human","sing","say","talk"],sheet:[22,23]},"flag-mg":{name:"Madagascar",unified:"1F1F2-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["madagascar","mg","flag","nation","country","banner"],sheet:[34,11]},new:{name:"Squared New",unified:"1F195",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["new","blue-square","words","start"],sheet:[4,12]},sunny:{name:"Black Sun with Rays",unified:"2600",variations:["2600-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,41]},"flag-mw":{name:"Malawi",unified:"1F1F2-1F1FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["malawi","mw","flag","nation","country","banner"],sheet:[34,25]},bust_in_silhouette:{name:"Bust in Silhouette",unified:"1F464",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bust_in_silhouette","user","person","human"],sheet:[13,43]},open_file_folder:{name:"Open File Folder",unified:"1F4C2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["open_file_folder","documents","load"],sheet:[18,2]},free:{name:"Squared Free",unified:"1F193",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["free","blue-square","words"],sheet:[4,10]},mostly_sunny:{name:"White Sun with Small Cloud",unified:"1F324",short_names:["sun_small_cloud"],added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["sun_behind_small_cloud","weather"],sheet:[5,18]},"flag-my":{name:"Malaysia",unified:"1F1F2-1F1FE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["malaysia","my","flag","nation","country","banner"],sheet:[34,27]},busts_in_silhouette:{name:"Busts in Silhouette",unified:"1F465",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["busts_in_silhouette","user","person","human","group","team"],sheet:[13,44]},partly_sunny:{name:"Sun Behind Cloud",unified:"26C5",variations:["26C5-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["partly_sunny","weather","nature","cloudy","morning","fall","spring"],sheet:[2,8]},card_index_dividers:{name:"Card Index Dividers",unified:"1F5C2",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["card_index_dividers","organizing","business","stationery"],sheet:[22,13]},zero:{name:"Keycap 0",unified:"0030-20E3",variations:["0030-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[31,1]},baby:{name:"Baby",unified:"1F476",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F476-1F3FB",image:"1f476-1f3fb.png",sheet_x:15,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F476-1F3FC",image:"1f476-1f3fc.png",sheet_x:15,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F476-1F3FD",image:"1f476-1f3fd.png",sheet_x:15,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F476-1F3FE",image:"1f476-1f3fe.png",sheet_x:15,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F476-1F3FF",image:"1f476-1f3ff.png",sheet_x:15,sheet_y:23,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["baby","child","boy","girl","toddler"],sheet:[15,18]},rolled_up_newspaper:{name:"Rolled-Up Newspaper",unified:"1F5DE",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["newspaper_roll","press","headline"],sheet:[22,21]},one:{name:"Keycap 1",unified:"0031-20E3",variations:["0031-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[31,2]},barely_sunny:{name:"White Sun Behind Cloud",unified:"1F325",short_names:["sun_behind_cloud"],added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["sun_behind_large_cloud","weather"],sheet:[5,19]},"flag-mv":{name:"Maldives",unified:"1F1F2-1F1FB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["maldives","mv","flag","nation","country","banner"],sheet:[34,24]},newspaper:{name:"Newspaper",unified:"1F4F0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["newspaper","press","headline"],sheet:[18,48]},boy:{name:"Boy",unified:"1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F466-1F3FB",image:"1f466-1f3fb.png",sheet_x:13,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F466-1F3FC",image:"1f466-1f3fc.png",sheet_x:13,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F466-1F3FD",image:"1f466-1f3fd.png",sheet_x:13,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F466-1F3FE",image:"1f466-1f3fe.png",sheet_x:14,sheet_y:0,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F466-1F3FF",image:"1f466-1f3ff.png",sheet_x:14,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["boy","man","male","guy","teenager"],sheet:[13,45]},two:{name:"Keycap 2",unified:"0032-20E3",variations:["0032-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[31,3]},partly_sunny_rain:{name:"White Sun Behind Cloud with Rain",unified:"1F326",short_names:["sun_behind_rain_cloud"],added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["sun_behind_rain_cloud","weather"],sheet:[5,20]},"flag-ml":{name:"Mali",unified:"1F1F2-1F1F1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mali","ml","flag","nation","country","banner"],sheet:[34,14]},three:{name:"Keycap 3",unified:"0033-20E3",variations:["0033-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[31,4]},notebook:{name:"Notebook",unified:"1F4D3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["notebook","stationery","record","notes","paper","study"],sheet:[18,19]},"flag-mt":{name:"Malta",unified:"1F1F2-1F1F9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["malta","mt","flag","nation","country","banner"],sheet:[34,22]},girl:{name:"Girl",unified:"1F467",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F467-1F3FB",image:"1f467-1f3fb.png",sheet_x:14,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F467-1F3FC",image:"1f467-1f3fc.png",sheet_x:14,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F467-1F3FD",image:"1f467-1f3fd.png",sheet_x:14,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F467-1F3FE",image:"1f467-1f3fe.png",sheet_x:14,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F467-1F3FF",image:"1f467-1f3ff.png",sheet_x:14,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["girl","female","woman","teenager"],sheet:[14,2]},rainbow:{name:"Rainbow",unified:"1F308",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rainbow","nature","happy","unicorn_face","photo","sky","spring"],sheet:[4,41]},four:{name:"Keycap 4",unified:"0034-20E3",variations:["0034-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[31,5]},man:{name:"Man",unified:"1F468",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F468-1F3FB",image:"1f468-1f3fb.png",sheet_x:14,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F468-1F3FC",image:"1f468-1f3fc.png",sheet_x:14,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F468-1F3FD",image:"1f468-1f3fd.png",sheet_x:14,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F468-1F3FE",image:"1f468-1f3fe.png",sheet_x:14,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F468-1F3FF",image:"1f468-1f3ff.png",sheet_x:14,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["man","mustache","father","dad","guy","classy","sir","moustache"],sheet:[14,8]},"flag-mh":{name:"Marshall Islands",unified:"1F1F2-1F1ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["marshall_islands","marshall","islands","flag","nation","country","banner"],sheet:[34,12]},cloud:{name:"Cloud",unified:"2601",variations:["2601-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,42]},notebook_with_decorative_cover:{name:"Notebook with Decorative Cover",unified:"1F4D4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["notebook_with_decorative_cover","classroom","notes","record","paper","study"],sheet:[18,20]},woman:{name:"Woman",unified:"1F469",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F469-1F3FB",image:"1f469-1f3fb.png",sheet_x:14,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F469-1F3FC",image:"1f469-1f3fc.png",sheet_x:14,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F469-1F3FD",image:"1f469-1f3fd.png",sheet_x:14,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F469-1F3FE",image:"1f469-1f3fe.png",sheet_x:14,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F469-1F3FF",image:"1f469-1f3ff.png",sheet_x:14,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["woman","female","girls","lady"],sheet:[14,14]},five:{name:"Keycap 5",unified:"0035-20E3",variations:["0035-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[31,6]},"flag-mq":{name:"Martinique",unified:"1F1F2-1F1F6",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["martinique","mq","flag","nation","country","banner"],sheet:[34,19]},rain_cloud:{name:"Cloud with Rain",unified:"1F327",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["cloud_with_rain","weather"],sheet:[5,21]},ledger:{name:"Ledger",unified:"1F4D2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ledger","notes","paper"],sheet:[18,18]},closed_book:{name:"Closed Book",unified:"1F4D5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["closed_book","read","library","knowledge","textbook","learn"],sheet:[18,21]},six:{name:"Keycap 6",unified:"0036-20E3",variations:["0036-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[31,7]},"flag-mr":{name:"Mauritania",unified:"1F1F2-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mauritania","mr","flag","nation","country","banner"],sheet:[34,20]},"blond-haired-woman":{name:"Blond Haired Woman",unified:"1F471-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F471-1F3FB-200D-2640-FE0F",image:"1f471-1f3fb-200d-2640-fe0f.png",sheet_x:42,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F471-1F3FC-200D-2640-FE0F",image:"1f471-1f3fc-200d-2640-fe0f.png",sheet_x:42,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F471-1F3FD-200D-2640-FE0F",image:"1f471-1f3fd-200d-2640-fe0f.png",sheet_x:42,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F471-1F3FE-200D-2640-FE0F",image:"1f471-1f3fe-200d-2640-fe0f.png",sheet_x:42,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F471-1F3FF-200D-2640-FE0F",image:"1f471-1f3ff-200d-2640-fe0f.png",sheet_x:42,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["blonde_woman","woman","female","girl","blonde","person"],sheet:[42,29]},thunder_cloud_and_rain:{name:"Thunder Cloud and Rain",unified:"26C8",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["cloud_with_lightning_and_rain","weather","lightning"],sheet:[2,9]},lightning:{name:"Cloud with Lightning",unified:"1F329",short_names:["lightning_cloud"],added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["cloud_with_lightning","weather","thunder"],sheet:[5,23]},"flag-mu":{name:"Mauritius",unified:"1F1F2-1F1FA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mauritius","mu","flag","nation","country","banner"],sheet:[34,23]},green_book:{name:"Green Book",unified:"1F4D7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["green_book","read","library","knowledge","study"],sheet:[18,23]},person_with_blond_hair:{name:"Person with Blond Hair",unified:"1F471",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F471-1F3FB",image:"1f471-1f3fb.png",sheet_x:14,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F471-1F3FC",image:"1f471-1f3fc.png",sheet_x:14,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F471-1F3FD",image:"1f471-1f3fd.png",sheet_x:14,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F471-1F3FE",image:"1f471-1f3fe.png",sheet_x:14,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F471-1F3FF",image:"1f471-1f3ff.png",sheet_x:14,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F471-200D-2642-FE0F",keywords:["blonde_man","man","male","boy","blonde","guy","person"],sheet:[14,37]},seven:{name:"Keycap 7",unified:"0037-20E3",variations:["0037-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[31,8]},older_man:{name:"Older Man",unified:"1F474",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F474-1F3FB",image:"1f474-1f3fb.png",sheet_x:15,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F474-1F3FC",image:"1f474-1f3fc.png",sheet_x:15,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F474-1F3FD",image:"1f474-1f3fd.png",sheet_x:15,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F474-1F3FE",image:"1f474-1f3fe.png",sheet_x:15,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F474-1F3FF",image:"1f474-1f3ff.png",sheet_x:15,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["older_man","human","male","men","old","elder","senior"],sheet:[15,6]},"flag-yt":{name:"Mayotte",unified:"1F1FE-1F1F9",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mayotte","yt","flag","nation","country","banner"],sheet:[36,20]},blue_book:{name:"Blue Book",unified:"1F4D8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["blue_book","read","library","knowledge","learn","study"],sheet:[18,24]},snow_cloud:{name:"Cloud with Snow",unified:"1F328",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["cloud_with_snow","weather"],sheet:[5,22]},eight:{name:"Keycap 8",unified:"0038-20E3",variations:["0038-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[31,9]},orange_book:{name:"Orange Book",unified:"1F4D9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["orange_book","read","library","knowledge","textbook","study"],sheet:[18,25]},snowman:{name:"Snowman",unified:"2603",variations:["2603-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["snowman_with_snow","winter","season","cold","weather","christmas","xmas","frozen"],sheet:[0,44]},older_woman:{name:"Older Woman",unified:"1F475",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F475-1F3FB",image:"1f475-1f3fb.png",sheet_x:15,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F475-1F3FC",image:"1f475-1f3fc.png",sheet_x:15,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F475-1F3FD",image:"1f475-1f3fd.png",sheet_x:15,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F475-1F3FE",image:"1f475-1f3fe.png",sheet_x:15,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F475-1F3FF",image:"1f475-1f3ff.png",sheet_x:15,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["older_woman","human","female","women","lady","old","elder","senior"],sheet:[15,12]},"flag-mx":{name:"Mexico",unified:"1F1F2-1F1FD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mexico","mx","flag","nation","country","banner"],sheet:[34,26]},nine:{name:"Keycap 9",unified:"0039-20E3",variations:["0039-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[31,10]},keycap_ten:{name:"Keycap Ten",unified:"1F51F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["keycap_ten","numbers","10","blue-square"],sheet:[19,45]},man_with_gua_pi_mao:{name:"Man with Gua Pi Mao",unified:"1F472",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F472-1F3FB",image:"1f472-1f3fb.png",sheet_x:14,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F472-1F3FC",image:"1f472-1f3fc.png",sheet_x:14,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F472-1F3FD",image:"1f472-1f3fd.png",sheet_x:14,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F472-1F3FE",image:"1f472-1f3fe.png",sheet_x:14,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F472-1F3FF",image:"1f472-1f3ff.png",sheet_x:14,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["man_with_gua_pi_mao","male","boy","chinese"],sheet:[14,43]},books:{name:"Books",unified:"1F4DA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["books","literature","library","study"],sheet:[18,26]},"flag-fm":{name:"Micronesia",unified:"1F1EB-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["micronesia","micronesia,","federated","states","flag","nation","country","banner"],sheet:[32,39]},snowman_without_snow:{name:"Snowman Without Snow",unified:"26C4",variations:["26C4-FE0F"],added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["snowman","winter","season","cold","weather","christmas","xmas","frozen","without_snow"],sheet:[2,7]},book:{name:"Open Book",unified:"1F4D6",short_names:["open_book"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["open_book","book","read","library","knowledge","literature","learn","study"],sheet:[18,22]},"woman-wearing-turban":{name:"Woman Wearing Turban",unified:"1F473-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F473-1F3FB-200D-2640-FE0F",image:"1f473-1f3fb-200d-2640-fe0f.png",sheet_x:42,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F473-1F3FC-200D-2640-FE0F",image:"1f473-1f3fc-200d-2640-fe0f.png",sheet_x:42,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F473-1F3FD-200D-2640-FE0F",image:"1f473-1f3fd-200d-2640-fe0f.png",sheet_x:42,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F473-1F3FE-200D-2640-FE0F",image:"1f473-1f3fe-200d-2640-fe0f.png",sheet_x:42,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F473-1F3FF-200D-2640-FE0F",image:"1f473-1f3ff-200d-2640-fe0f.png",sheet_x:42,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["woman_with_turban","female","indian","hinduism","arabs","woman"],sheet:[42,41]},"flag-md":{name:"Moldova",unified:"1F1F2-1F1E9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["moldova","moldova,","republic","flag","nation","country","banner"],sheet:[34,8]},snowflake:{name:"Snowflake",unified:"2744",variations:["2744-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,21]},bookmark:{name:"Bookmark",unified:"1F516",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bookmark","favorite","label","save"],sheet:[19,36]},"flag-mc":{name:"Monaco",unified:"1F1F2-1F1E8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["monaco","mc","flag","nation","country","banner"],sheet:[34,7]},man_with_turban:{name:"Man with Turban",unified:"1F473",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F473-1F3FB",image:"1f473-1f3fb.png",sheet_x:15,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F473-1F3FC",image:"1f473-1f3fc.png",sheet_x:15,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F473-1F3FD",image:"1f473-1f3fd.png",sheet_x:15,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F473-1F3FE",image:"1f473-1f3fe.png",sheet_x:15,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F473-1F3FF",image:"1f473-1f3ff.png",sheet_x:15,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F473-200D-2642-FE0F",keywords:["man_with_turban","male","indian","hinduism","arabs"],sheet:[15,0]},wind_blowing_face:{name:"Wind Blowing Face",unified:"1F32C",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["wind_face","gust","air"],sheet:[5,26]},hash:{name:"Hash Key",unified:"0023-20E3",variations:["0023-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[30,48]},"flag-mn":{name:"Mongolia",unified:"1F1F2-1F1F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mongolia","mn","flag","nation","country","banner"],sheet:[34,16]},link:{name:"Link Symbol",unified:"1F517",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["link","rings","url"],sheet:[19,37]},keycap_star:{name:"Keycap Star",unified:"002A-20E3",variations:["002A-FE0F-20E3"],added_in:null,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,keywords:["asterisk","star","keycap"],sheet:[31,0]},"female-police-officer":{name:"Female Police Officer",unified:"1F46E-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F46E-1F3FB-200D-2640-FE0F",image:"1f46e-1f3fb-200d-2640-fe0f.png",sheet_x:42,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F46E-1F3FC-200D-2640-FE0F",image:"1f46e-1f3fc-200d-2640-fe0f.png",sheet_x:42,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F46E-1F3FD-200D-2640-FE0F",image:"1f46e-1f3fd-200d-2640-fe0f.png",sheet_x:42,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F46E-1F3FE-200D-2640-FE0F",image:"1f46e-1f3fe-200d-2640-fe0f.png",sheet_x:42,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F46E-1F3FF-200D-2640-FE0F",image:"1f46e-1f3ff-200d-2640-fe0f.png",sheet_x:42,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["policewoman","woman","police","law","legal","enforcement","arrest","911","female"],sheet:[42,15]},dash:{name:"Dash Symbol",unified:"1F4A8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dash","wind","air","fast","shoo","fart","smoke","puff"],sheet:[17,20]},arrow_forward:{name:"Black Right-Pointing Triangle",unified:"25B6",variations:["25B6-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,35]},paperclip:{name:"Paperclip",unified:"1F4CE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["paperclip","documents","stationery"],sheet:[18,14]},cop:{name:"Police Officer",unified:"1F46E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F46E-1F3FB",image:"1f46e-1f3fb.png",sheet_x:14,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F46E-1F3FC",image:"1f46e-1f3fc.png",sheet_x:14,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F46E-1F3FD",image:"1f46e-1f3fd.png",sheet_x:14,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F46E-1F3FE",image:"1f46e-1f3fe.png",sheet_x:14,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F46E-1F3FF",image:"1f46e-1f3ff.png",sheet_x:14,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F46E-200D-2642-FE0F",keywords:["policeman","man","police","law","legal","enforcement","arrest","911"],sheet:[14,24]},"flag-me":{name:"Montenegro",unified:"1F1F2-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["montenegro","me","flag","nation","country","banner"],sheet:[34,9]},tornado:{name:"Cloud with Tornado",unified:"1F32A",short_names:["tornado_cloud"],added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["tornado","weather","cyclone","twister"],sheet:[5,24]},"flag-ms":{name:"Montserrat",unified:"1F1F2-1F1F8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["montserrat","ms","flag","nation","country","banner"],sheet:[34,21]},linked_paperclips:{name:"Linked Paperclips",unified:"1F587",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["paperclips","documents","stationery"],sheet:[21,33]},double_vertical_bar:{name:"Double Vertical Bar",unified:"23F8",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["pause_button","pause","blue-square"],sheet:[0,29]},"female-construction-worker":{name:"Female Construction Worker",unified:"1F477-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F477-1F3FB-200D-2640-FE0F",image:"1f477-1f3fb-200d-2640-fe0f.png",sheet_x:43,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F477-1F3FC-200D-2640-FE0F",image:"1f477-1f3fc-200d-2640-fe0f.png",sheet_x:43,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F477-1F3FD-200D-2640-FE0F",image:"1f477-1f3fd-200d-2640-fe0f.png",sheet_x:43,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F477-1F3FE-200D-2640-FE0F",image:"1f477-1f3fe-200d-2640-fe0f.png",sheet_x:43,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F477-1F3FF-200D-2640-FE0F",image:"1f477-1f3ff-200d-2640-fe0f.png",sheet_x:43,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["construction_worker_woman","female","human","wip","build","construction","worker","labor","woman"],sheet:[43,4]},fog:{name:"Fog",unified:"1F32B",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["fog","weather"],sheet:[5,25]},triangular_ruler:{name:"Triangular Ruler",unified:"1F4D0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["triangular_ruler","stationery","math","architect","sketch"],sheet:[18,16]},"flag-ma":{name:"Morocco",unified:"1F1F2-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["morocco","ma","flag","nation","country","banner"],sheet:[34,6]},ocean:{name:"Water Wave",unified:"1F30A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ocean","sea","water","wave","nature","tsunami","disaster"],sheet:[4,43]},construction_worker:{name:"Construction Worker",unified:"1F477",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F477-1F3FB",image:"1f477-1f3fb.png",sheet_x:15,sheet_y:25,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F477-1F3FC",image:"1f477-1f3fc.png",sheet_x:15,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F477-1F3FD",image:"1f477-1f3fd.png",sheet_x:15,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F477-1F3FE",image:"1f477-1f3fe.png",sheet_x:15,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F477-1F3FF",image:"1f477-1f3ff.png",sheet_x:15,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F477-200D-2642-FE0F",keywords:["construction_worker_man","male","human","wip","guy","build","construction","worker","labor"],sheet:[15,24]},black_right_pointing_triangle_with_double_vertical_bar:{name:"Black Right-Pointing Triangle with Double Vertical Bar",unified:"23EF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["play_or_pause_button","blue-square","play","pause"],sheet:[0,24]},droplet:{name:"Droplet",unified:"1F4A7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["droplet","water","drip","faucet","spring"],sheet:[17,19]},straight_ruler:{name:"Straight Ruler",unified:"1F4CF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["straight_ruler","stationery","calculate","length","math","school","drawing","architect","sketch"],sheet:[18,15]},"female-guard":{name:"Female Guard",unified:"1F482-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F482-1F3FB-200D-2640-FE0F",image:"1f482-1f3fb-200d-2640-fe0f.png",sheet_x:43,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F482-1F3FC-200D-2640-FE0F",image:"1f482-1f3fc-200d-2640-fe0f.png",sheet_x:43,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F482-1F3FD-200D-2640-FE0F",image:"1f482-1f3fd-200d-2640-fe0f.png",sheet_x:43,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F482-1F3FE-200D-2640-FE0F",image:"1f482-1f3fe-200d-2640-fe0f.png",sheet_x:43,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F482-1F3FF-200D-2640-FE0F",image:"1f482-1f3ff-200d-2640-fe0f.png",sheet_x:43,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["guardswoman","uk","gb","british","female","royal","woman"],sheet:[43,28]},black_square_for_stop:{name:"Black Square for Stop",unified:"23F9",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["stop_button","blue-square"],sheet:[0,30]},"flag-mz":{name:"Mozambique",unified:"1F1F2-1F1FF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mozambique","mz","flag","nation","country","banner"],sheet:[34,28]},sweat_drops:{name:"Splashing Sweat Symbol",unified:"1F4A6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sweat_drops","water","drip","oops"],sheet:[17,18]},guardsman:{name:"Guardsman",unified:"1F482",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F482-1F3FB",image:"1f482-1f3fb.png",sheet_x:16,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F482-1F3FC",image:"1f482-1f3fc.png",sheet_x:16,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F482-1F3FD",image:"1f482-1f3fd.png",sheet_x:16,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F482-1F3FE",image:"1f482-1f3fe.png",sheet_x:16,sheet_y:10,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F482-1F3FF",image:"1f482-1f3ff.png",sheet_x:16,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F482-200D-2642-FE0F",keywords:["guardsman","uk","gb","british","male","guy","royal"],sheet:[16,6]},pushpin:{name:"Pushpin",unified:"1F4CC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pushpin","stationery","mark","here"],sheet:[18,12]},"flag-mm":{name:"Myanmar",unified:"1F1F2-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["myanmar","mm","flag","nation","country","banner"],sheet:[34,15]},eject:{name:"Eject Symbol",unified:"23CF",added_in:"4.0",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,sheet:[0,17]},"flag-na":{name:"Namibia",unified:"1F1F3-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["namibia","na","flag","nation","country","banner"],sheet:[34,29]},umbrella_with_rain_drops:{name:"Umbrella with Rain Drops",unified:"2614",variations:["2614-FE0F"],added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["umbrella","rainy","weather","spring"],sheet:[0,48]},"female-detective":{name:"Female Detective",unified:"1F575-FE0F-200D-2640-FE0F",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F575-1F3FB-200D-2640-FE0F",image:"1f575-1f3fb-200d-2640-fe0f.png",sheet_x:44,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F575-1F3FC-200D-2640-FE0F",image:"1f575-1f3fc-200d-2640-fe0f.png",sheet_x:44,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F575-1F3FD-200D-2640-FE0F",image:"1f575-1f3fd-200d-2640-fe0f.png",sheet_x:44,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F575-1F3FE-200D-2640-FE0F",image:"1f575-1f3fe-200d-2640-fe0f.png",sheet_x:44,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F575-1F3FF-200D-2640-FE0F",image:"1f575-1f3ff-200d-2640-fe0f.png",sheet_x:44,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["female_detective","human","spy","detective","female","woman"],sheet:[44,15]},black_circle_for_record:{name:"Black Circle for Record",unified:"23FA",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["record_button","blue-square"],sheet:[0,31]},round_pushpin:{name:"Round Pushpin",unified:"1F4CD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["round_pushpin","stationery","location","map","here"],sheet:[18,13]},sleuth_or_spy:{name:"Sleuth or Spy",unified:"1F575",variations:["1F575-FE0F"],added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F575-1F3FB",image:"1f575-1f3fb.png",sheet_x:21,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F575-1F3FC",image:"1f575-1f3fc.png",sheet_x:21,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F575-1F3FD",image:"1f575-1f3fd.png",sheet_x:21,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F575-1F3FE",image:"1f575-1f3fe.png",sheet_x:21,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F575-1F3FF",image:"1f575-1f3ff.png",sheet_x:21,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},obsoleted_by:"1F575-FE0F-200D-2642-FE0F",keywords:["male_detective","human","spy","detective"],sheet:[21,17]},scissors:{name:"Black Scissors",unified:"2702",variations:["2702-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[2,33]},black_right_pointing_double_triangle_with_vertical_bar:{name:"Black Right-Pointing Double Triangle with Vertical Bar",unified:"23ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["next_track_button","forward","next","blue-square"],sheet:[0,22]},"flag-nr":{name:"Nauru",unified:"1F1F3-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["nauru","nr","flag","nation","country","banner"],sheet:[34,38]},lower_left_ballpoint_pen:{name:"Lower Left Ballpoint Pen",unified:"1F58A",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["pen","stationery","writing","write"],sheet:[21,34]},"female-doctor":{name:"Female Doctor",unified:"1F469-200D-2695-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-2695-FE0F",image:"1f469-1f3fb-200d-2695-fe0f.png",sheet_x:41,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-2695-FE0F",image:"1f469-1f3fc-200d-2695-fe0f.png",sheet_x:41,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-2695-FE0F",image:"1f469-1f3fd-200d-2695-fe0f.png",sheet_x:41,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-2695-FE0F",image:"1f469-1f3fe-200d-2695-fe0f.png",sheet_x:41,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-2695-FE0F",image:"1f469-1f3ff-200d-2695-fe0f.png",sheet_x:41,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["woman_health_worker","doctor","nurse","therapist","healthcare","woman","human"],sheet:[41,42]},black_left_pointing_double_triangle_with_vertical_bar:{name:"Black Left-Pointing Double Triangle with Vertical Bar",unified:"23EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["previous_track_button","backward"],sheet:[0,23]},"flag-np":{name:"Nepal",unified:"1F1F3-1F1F5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["nepal","np","flag","nation","country","banner"],sheet:[34,37]},"flag-nl":{name:"Netherlands",unified:"1F1F3-1F1F1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["netherlands","nl","flag","nation","country","banner"],sheet:[34,35]},fast_forward:{name:"Black Right-Pointing Double Triangle",unified:"23E9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["fast_forward","blue-square","play","speed","continue"],sheet:[0,18]},"male-doctor":{name:"Male Doctor",unified:"1F468-200D-2695-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-2695-FE0F",image:"1f468-1f3fb-200d-2695-fe0f.png",sheet_x:41,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-2695-FE0F",image:"1f468-1f3fc-200d-2695-fe0f.png",sheet_x:41,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-2695-FE0F",image:"1f468-1f3fd-200d-2695-fe0f.png",sheet_x:41,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-2695-FE0F",image:"1f468-1f3fe-200d-2695-fe0f.png",sheet_x:41,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-2695-FE0F",image:"1f468-1f3ff-200d-2695-fe0f.png",sheet_x:41,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["man_health_worker","doctor","nurse","therapist","healthcare","man","human"],sheet:[41,14]},lower_left_fountain_pen:{name:"Lower Left Fountain Pen",unified:"1F58B",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["fountain_pen","stationery","writing","write"],sheet:[21,35]},rewind:{name:"Black Left-Pointing Double Triangle",unified:"23EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rewind","play","blue-square"],sheet:[0,19]},"female-farmer":{name:"Female Farmer",unified:"1F469-200D-1F33E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F33E",image:"1f469-1f3fb-200d-1f33e.png",sheet_x:38,sheet_y:7,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F33E",image:"1f469-1f3fc-200d-1f33e.png",sheet_x:38,sheet_y:8,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F33E",image:"1f469-1f3fd-200d-1f33e.png",sheet_x:38,sheet_y:9,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F33E",image:"1f469-1f3fe-200d-1f33e.png",sheet_x:38,sheet_y:10,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F33E",image:"1f469-1f3ff-200d-1f33e.png",sheet_x:38,sheet_y:11,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_farmer","rancher","gardener","woman","human"],sheet:[38,6]},"flag-nc":{name:"New Caledonia",unified:"1F1F3-1F1E8",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["new_caledonia","new","caledonia","flag","nation","country","banner"],sheet:[34,30]},black_nib:{name:"Black Nib",unified:"2712",variations:["2712-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,13]},"flag-nz":{name:"New Zealand",unified:"1F1F3-1F1FF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["new_zealand","new","zealand","flag","nation","country","banner"],sheet:[34,40]},lower_left_paintbrush:{name:"Lower Left Paintbrush",unified:"1F58C",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["paintbrush","drawing","creativity","art"],sheet:[21,36]},arrow_double_up:{name:"Black Up-Pointing Double Triangle",unified:"23EB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["arrow_double_up","blue-square","direction","top"],sheet:[0,20]},"male-farmer":{name:"Male Farmer",unified:"1F468-200D-1F33E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F33E",image:"1f468-1f3fb-200d-1f33e.png",sheet_x:36,sheet_y:25,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F33E",image:"1f468-1f3fc-200d-1f33e.png",sheet_x:36,sheet_y:26,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F33E",image:"1f468-1f3fd-200d-1f33e.png",sheet_x:36,sheet_y:27,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F33E",image:"1f468-1f3fe-200d-1f33e.png",sheet_x:36,sheet_y:28,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F33E",image:"1f468-1f3ff-200d-1f33e.png",sheet_x:36,sheet_y:29,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_farmer","rancher","gardener","man","human"],sheet:[36,24]},arrow_double_down:{name:"Black Down-Pointing Double Triangle",unified:"23EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["arrow_double_down","blue-square","direction","bottom"],sheet:[0,21]},"female-cook":{name:"Female Cook",unified:"1F469-200D-1F373",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F373",image:"1f469-1f3fb-200d-1f373.png",sheet_x:38,sheet_y:13,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F373",image:"1f469-1f3fc-200d-1f373.png",sheet_x:38,sheet_y:14,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F373",image:"1f469-1f3fd-200d-1f373.png",sheet_x:38,sheet_y:15,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F373",image:"1f469-1f3fe-200d-1f373.png",sheet_x:38,sheet_y:16,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F373",image:"1f469-1f3ff-200d-1f373.png",sheet_x:38,sheet_y:17,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_cook","chef","woman","human"],sheet:[38,12]},lower_left_crayon:{name:"Lower Left Crayon",unified:"1F58D",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["crayon","drawing","creativity"],sheet:[21,37]},"flag-ni":{name:"Nicaragua",unified:"1F1F3-1F1EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["nicaragua","ni","flag","nation","country","banner"],sheet:[34,34]},memo:{name:"Memo",unified:"1F4DD",short_names:["pencil"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["memo","write","documents","stationery","pencil","paper","writing","legal","exam","quiz","test","study","compose"],sheet:[18,29]},arrow_backward:{name:"Black Left-Pointing Triangle",unified:"25C0",variations:["25C0-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,36]},"flag-ne":{name:"Niger",unified:"1F1F3-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["niger","ne","flag","nation","country","banner"],sheet:[34,31]},"male-cook":{name:"Male Cook",unified:"1F468-200D-1F373",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F373",image:"1f468-1f3fb-200d-1f373.png",sheet_x:36,sheet_y:31,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F373",image:"1f468-1f3fc-200d-1f373.png",sheet_x:36,sheet_y:32,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F373",image:"1f468-1f3fd-200d-1f373.png",sheet_x:36,sheet_y:33,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F373",image:"1f468-1f3fe-200d-1f373.png",sheet_x:36,sheet_y:34,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F373",image:"1f468-1f3ff-200d-1f373.png",sheet_x:36,sheet_y:35,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_cook","chef","man","human"],sheet:[36,30]},"flag-ng":{name:"Nigeria",unified:"1F1F3-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["nigeria","flag","nation","country","banner"],sheet:[34,33]},"pencil2":{name:"Pencil",unified:"270F",variations:["270F-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,12]},arrow_up_small:{name:"Up-Pointing Small Red Triangle",unified:"1F53C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["arrow_up_small","blue-square","triangle","direction","point","forward","top"],sheet:[20,25]},"female-student":{name:"Female Student",unified:"1F469-200D-1F393",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F393",image:"1f469-1f3fb-200d-1f393.png",sheet_x:38,sheet_y:19,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F393",image:"1f469-1f3fc-200d-1f393.png",sheet_x:38,sheet_y:20,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F393",image:"1f469-1f3fd-200d-1f393.png",sheet_x:38,sheet_y:21,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F393",image:"1f469-1f3fe-200d-1f393.png",sheet_x:38,sheet_y:22,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F393",image:"1f469-1f3ff-200d-1f393.png",sheet_x:38,sheet_y:23,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_student","graduate","woman","human"],sheet:[38,18]},"male-student":{name:"Male Student",unified:"1F468-200D-1F393",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F393",image:"1f468-1f3fb-200d-1f393.png",sheet_x:36,sheet_y:37,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F393",image:"1f468-1f3fc-200d-1f393.png",sheet_x:36,sheet_y:38,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F393",image:"1f468-1f3fd-200d-1f393.png",sheet_x:36,sheet_y:39,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F393",image:"1f468-1f3fe-200d-1f393.png",sheet_x:36,sheet_y:40,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F393",image:"1f468-1f3ff-200d-1f393.png",sheet_x:36,sheet_y:41,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_student","graduate","man","human"],sheet:[36,36]},"flag-nu":{name:"Niue",unified:"1F1F3-1F1FA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["niue","nu","flag","nation","country","banner"],sheet:[34,39]},mag:{name:"Left-Pointing Magnifying Glass",unified:"1F50D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mag","search","zoom","find","detective"],sheet:[19,27]},arrow_down_small:{name:"Down-Pointing Small Red Triangle",unified:"1F53D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["arrow_down_small","blue-square","direction","bottom"],sheet:[20,26]},arrow_right:{name:"Black Rightwards Arrow",unified:"27A1",variations:["27A1-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,34]},"flag-nf":{name:"Norfolk Island",unified:"1F1F3-1F1EB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["norfolk_island","norfolk","island","flag","nation","country","banner"],sheet:[34,32]},mag_right:{name:"Right-Pointing Magnifying Glass",unified:"1F50E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mag_right","search","zoom","find","detective"],sheet:[19,28]},"female-singer":{name:"Female Singer",unified:"1F469-200D-1F3A4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3A4",image:"1f469-1f3fb-200d-1f3a4.png",sheet_x:38,sheet_y:25,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3A4",image:"1f469-1f3fc-200d-1f3a4.png",sheet_x:38,sheet_y:26,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3A4",image:"1f469-1f3fd-200d-1f3a4.png",sheet_x:38,sheet_y:27,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3A4",image:"1f469-1f3fe-200d-1f3a4.png",sheet_x:38,sheet_y:28,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3A4",image:"1f469-1f3ff-200d-1f3a4.png",sheet_x:38,sheet_y:29,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_singer","rockstar","entertainer","woman","human"],sheet:[38,24]},arrow_left:{name:"Leftwards Black Arrow",unified:"2B05",variations:["2B05-FE0F"],added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,39]},"flag-mp":{name:"Northern Mariana Islands",unified:"1F1F2-1F1F5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["northern_mariana_islands","northern","mariana","islands","flag","nation","country","banner"],sheet:[34,18]},lock_with_ink_pen:{name:"Lock with Ink Pen",unified:"1F50F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["lock_with_ink_pen","security","secret"],sheet:[19,29]},"male-singer":{name:"Male Singer",unified:"1F468-200D-1F3A4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3A4",image:"1f468-1f3fb-200d-1f3a4.png",sheet_x:36,sheet_y:43,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3A4",image:"1f468-1f3fc-200d-1f3a4.png",sheet_x:36,sheet_y:44,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3A4",image:"1f468-1f3fd-200d-1f3a4.png",sheet_x:36,sheet_y:45,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3A4",image:"1f468-1f3fe-200d-1f3a4.png",sheet_x:36,sheet_y:46,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3A4",image:"1f468-1f3ff-200d-1f3a4.png",sheet_x:36,sheet_y:47,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_singer","rockstar","entertainer","man","human"],sheet:[36,42]},arrow_up:{name:"Upwards Black Arrow",unified:"2B06",variations:["2B06-FE0F"],added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,40]},"female-teacher":{name:"Female Teacher",unified:"1F469-200D-1F3EB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3EB",image:"1f469-1f3fb-200d-1f3eb.png",sheet_x:38,sheet_y:37,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3EB",image:"1f469-1f3fc-200d-1f3eb.png",sheet_x:38,sheet_y:38,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3EB",image:"1f469-1f3fd-200d-1f3eb.png",sheet_x:38,sheet_y:39,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3EB",image:"1f469-1f3fe-200d-1f3eb.png",sheet_x:38,sheet_y:40,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3EB",image:"1f469-1f3ff-200d-1f3eb.png",sheet_x:38,sheet_y:41,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_teacher","instructor","professor","woman","human"],sheet:[38,36]},"flag-kp":{name:"North Korea",unified:"1F1F0-1F1F5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["north_korea","north","korea","nation","flag","country","banner"],sheet:[33,39]},closed_lock_with_key:{name:"Closed Lock with Key",unified:"1F510",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["closed_lock_with_key","security","privacy"],sheet:[19,30]},arrow_down:{name:"Downwards Black Arrow",unified:"2B07",variations:["2B07-FE0F"],added_in:"4.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,41]},"male-teacher":{name:"Male Teacher",unified:"1F468-200D-1F3EB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3EB",image:"1f468-1f3fb-200d-1f3eb.png",sheet_x:37,sheet_y:6,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3EB",image:"1f468-1f3fc-200d-1f3eb.png",sheet_x:37,sheet_y:7,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3EB",image:"1f468-1f3fd-200d-1f3eb.png",sheet_x:37,sheet_y:8,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3EB",image:"1f468-1f3fe-200d-1f3eb.png",sheet_x:37,sheet_y:9,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3EB",image:"1f468-1f3ff-200d-1f3eb.png",sheet_x:37,sheet_y:10,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_teacher","instructor","professor","man","human"],sheet:[37,5]},"flag-no":{name:"Norway",unified:"1F1F3-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["norway","no","flag","nation","country","banner"],sheet:[34,36]},lock:{name:"Lock",unified:"1F512",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["lock","security","password","padlock"],sheet:[19,32]},unlock:{name:"Open Lock",unified:"1F513",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["unlock","privacy","security"],sheet:[19,33]},"flag-om":{name:"Oman",unified:"1F1F4-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["oman","om_symbol","flag","nation","country","banner"],sheet:[34,41]},arrow_upper_right:{name:"North East Arrow",unified:"2197",variations:["2197-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,9]},"female-factory-worker":{name:"Female Factory Worker",unified:"1F469-200D-1F3ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3ED",image:"1f469-1f3fb-200d-1f3ed.png",sheet_x:38,sheet_y:43,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3ED",image:"1f469-1f3fc-200d-1f3ed.png",sheet_x:38,sheet_y:44,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3ED",image:"1f469-1f3fd-200d-1f3ed.png",sheet_x:38,sheet_y:45,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3ED",image:"1f469-1f3fe-200d-1f3ed.png",sheet_x:38,sheet_y:46,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3ED",image:"1f469-1f3ff-200d-1f3ed.png",sheet_x:38,sheet_y:47,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_factory_worker","assembly","industrial","woman","human"],sheet:[38,42]},"male-factory-worker":{name:"Male Factory Worker",unified:"1F468-200D-1F3ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3ED",image:"1f468-1f3fb-200d-1f3ed.png",sheet_x:37,sheet_y:12,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3ED",image:"1f468-1f3fc-200d-1f3ed.png",sheet_x:37,sheet_y:13,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3ED",image:"1f468-1f3fd-200d-1f3ed.png",sheet_x:37,sheet_y:14,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3ED",image:"1f468-1f3fe-200d-1f3ed.png",sheet_x:37,sheet_y:15,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3ED",image:"1f468-1f3ff-200d-1f3ed.png",sheet_x:37,sheet_y:16,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_factory_worker","assembly","industrial","man","human"],sheet:[37,11]},"flag-pk":{name:"Pakistan",unified:"1F1F5-1F1F0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pakistan","pk","flag","nation","country","banner"],sheet:[34,47]},arrow_lower_right:{name:"South East Arrow",unified:"2198",variations:["2198-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,10]},"flag-pw":{name:"Palau",unified:"1F1F5-1F1FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["palau","pw","flag","nation","country","banner"],sheet:[35,5]},"female-technologist":{name:"Female Technologist",unified:"1F469-200D-1F4BB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F4BB",image:"1f469-1f3fb-200d-1f4bb.png",sheet_x:39,sheet_y:2,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F4BB",image:"1f469-1f3fc-200d-1f4bb.png",sheet_x:39,sheet_y:3,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F4BB",image:"1f469-1f3fd-200d-1f4bb.png",sheet_x:39,sheet_y:4,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F4BB",image:"1f469-1f3fe-200d-1f4bb.png",sheet_x:39,sheet_y:5,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F4BB",image:"1f469-1f3ff-200d-1f4bb.png",sheet_x:39,sheet_y:6,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_technologist","coder","developer","engineer","programmer","software","woman","human","laptop","computer"],sheet:[39,1]},arrow_lower_left:{name:"South West Arrow",unified:"2199",variations:["2199-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,11]},arrow_upper_left:{name:"North West Arrow",unified:"2196",variations:["2196-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,8]},"flag-ps":{name:"Palestinian Territories",unified:"1F1F5-1F1F8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["palestinian_territories","palestine","palestinian","territories","flag","nation","country","banner"],sheet:[35,3]},"male-technologist":{name:"Male Technologist",unified:"1F468-200D-1F4BB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F4BB",image:"1f468-1f3fb-200d-1f4bb.png",sheet_x:37,sheet_y:20,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F4BB",image:"1f468-1f3fc-200d-1f4bb.png",sheet_x:37,sheet_y:21,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F4BB",image:"1f468-1f3fd-200d-1f4bb.png",sheet_x:37,sheet_y:22,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F4BB",image:"1f468-1f3fe-200d-1f4bb.png",sheet_x:37,sheet_y:23,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F4BB",image:"1f468-1f3ff-200d-1f4bb.png",sheet_x:37,sheet_y:24,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_technologist","coder","developer","engineer","programmer","software","man","human","laptop","computer"],sheet:[37,19]},"flag-pa":{name:"Panama",unified:"1F1F5-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["panama","pa","flag","nation","country","banner"],sheet:[34,42]},"female-office-worker":{name:"Female Office Worker",unified:"1F469-200D-1F4BC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F4BC",image:"1f469-1f3fb-200d-1f4bc.png",sheet_x:39,sheet_y:8,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F4BC",image:"1f469-1f3fc-200d-1f4bc.png",sheet_x:39,sheet_y:9,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F4BC",image:"1f469-1f3fd-200d-1f4bc.png",sheet_x:39,sheet_y:10,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F4BC",image:"1f469-1f3fe-200d-1f4bc.png",sheet_x:39,sheet_y:11,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F4BC",image:"1f469-1f3ff-200d-1f4bc.png",sheet_x:39,sheet_y:12,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_office_worker","business","manager","woman","human"],sheet:[39,7]},arrow_up_down:{name:"Up Down Arrow",unified:"2195",variations:["2195-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,7]},"male-office-worker":{name:"Male Office Worker",unified:"1F468-200D-1F4BC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F4BC",image:"1f468-1f3fb-200d-1f4bc.png",sheet_x:37,sheet_y:26,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F4BC",image:"1f468-1f3fc-200d-1f4bc.png",sheet_x:37,sheet_y:27,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F4BC",image:"1f468-1f3fd-200d-1f4bc.png",sheet_x:37,sheet_y:28,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F4BC",image:"1f468-1f3fe-200d-1f4bc.png",sheet_x:37,sheet_y:29,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F4BC",image:"1f468-1f3ff-200d-1f4bc.png",sheet_x:37,sheet_y:30,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_office_worker","business","manager","man","human"],sheet:[37,25]},"flag-pg":{name:"Papua New Guinea",unified:"1F1F5-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["papua_new_guinea","papua","new","guinea","flag","nation","country","banner"],sheet:[34,45]},left_right_arrow:{name:"Left Right Arrow",unified:"2194",variations:["2194-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,6]},"flag-py":{name:"Paraguay",unified:"1F1F5-1F1FE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["paraguay","py","flag","nation","country","banner"],sheet:[35,6]},arrow_right_hook:{name:"Rightwards Arrow with Hook",unified:"21AA",variations:["21AA-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,13]},"female-mechanic":{name:"Female Mechanic",unified:"1F469-200D-1F527",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F527",image:"1f469-1f3fb-200d-1f527.png",sheet_x:39,sheet_y:14,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F527",image:"1f469-1f3fc-200d-1f527.png",sheet_x:39,sheet_y:15,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F527",image:"1f469-1f3fd-200d-1f527.png",sheet_x:39,sheet_y:16,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F527",image:"1f469-1f3fe-200d-1f527.png",sheet_x:39,sheet_y:17,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F527",image:"1f469-1f3ff-200d-1f527.png",sheet_x:39,sheet_y:18,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_mechanic","plumber","woman","human","wrench"],sheet:[39,13]},"flag-pe":{name:"Peru",unified:"1F1F5-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["peru","pe","flag","nation","country","banner"],sheet:[34,43]},"male-mechanic":{name:"Male Mechanic",unified:"1F468-200D-1F527",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F527",image:"1f468-1f3fb-200d-1f527.png",sheet_x:37,sheet_y:32,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F527",image:"1f468-1f3fc-200d-1f527.png",sheet_x:37,sheet_y:33,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F527",image:"1f468-1f3fd-200d-1f527.png",sheet_x:37,sheet_y:34,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F527",image:"1f468-1f3fe-200d-1f527.png",sheet_x:37,sheet_y:35,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F527",image:"1f468-1f3ff-200d-1f527.png",sheet_x:37,sheet_y:36,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_mechanic","plumber","man","human","wrench"],sheet:[37,31]},leftwards_arrow_with_hook:{name:"Leftwards Arrow with Hook",unified:"21A9",variations:["21A9-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,12]},"female-scientist":{name:"Female Scientist",unified:"1F469-200D-1F52C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F52C",image:"1f469-1f3fb-200d-1f52c.png",sheet_x:39,sheet_y:20,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F52C",image:"1f469-1f3fc-200d-1f52c.png",sheet_x:39,sheet_y:21,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F52C",image:"1f469-1f3fd-200d-1f52c.png",sheet_x:39,sheet_y:22,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F52C",image:"1f469-1f3fe-200d-1f52c.png",sheet_x:39,sheet_y:23,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F52C",image:"1f469-1f3ff-200d-1f52c.png",sheet_x:39,sheet_y:24,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_scientist","biologist","chemist","engineer","physicist","woman","human"],sheet:[39,19]},arrow_heading_up:{name:"Arrow Pointing Rightwards Then Curving Upwards",unified:"2934",variations:["2934-FE0F"],added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,37]},"flag-ph":{name:"Philippines",unified:"1F1F5-1F1ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["philippines","ph","flag","nation","country","banner"],sheet:[34,46]},"flag-pn":{name:"Pitcairn Islands",unified:"1F1F5-1F1F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pitcairn_islands","pitcairn","flag","nation","country","banner"],sheet:[35,1]},arrow_heading_down:{name:"Arrow Pointing Rightwards Then Curving Downwards",unified:"2935",variations:["2935-FE0F"],added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,38]},"male-scientist":{name:"Male Scientist",unified:"1F468-200D-1F52C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F52C",image:"1f468-1f3fb-200d-1f52c.png",sheet_x:37,sheet_y:38,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F52C",image:"1f468-1f3fc-200d-1f52c.png",sheet_x:37,sheet_y:39,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F52C",image:"1f468-1f3fd-200d-1f52c.png",sheet_x:37,sheet_y:40,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F52C",image:"1f468-1f3fe-200d-1f52c.png",sheet_x:37,sheet_y:41,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F52C",image:"1f468-1f3ff-200d-1f52c.png",sheet_x:37,sheet_y:42,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_scientist","biologist","chemist","engineer","physicist","man","human"],sheet:[37,37]},"flag-pl":{name:"Poland",unified:"1F1F5-1F1F1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["poland","pl","flag","nation","country","banner"],sheet:[34,48]},twisted_rightwards_arrows:{name:"Twisted Rightwards Arrows",unified:"1F500",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["twisted_rightwards_arrows","blue-square","shuffle","music","random"],sheet:[19,14]},"female-artist":{name:"Female Artist",unified:"1F469-200D-1F3A8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F3A8",image:"1f469-1f3fb-200d-1f3a8.png",sheet_x:38,sheet_y:31,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F3A8",image:"1f469-1f3fc-200d-1f3a8.png",sheet_x:38,sheet_y:32,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F3A8",image:"1f469-1f3fd-200d-1f3a8.png",sheet_x:38,sheet_y:33,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F3A8",image:"1f469-1f3fe-200d-1f3a8.png",sheet_x:38,sheet_y:34,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F3A8",image:"1f469-1f3ff-200d-1f3a8.png",sheet_x:38,sheet_y:35,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_artist","painter","woman","human"],sheet:[38,30]},repeat:{name:"Clockwise Rightwards and Leftwards Open Circle Arrows",unified:"1F501",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["repeat","loop","record"],sheet:[19,15]},"male-artist":{name:"Male Artist",unified:"1F468-200D-1F3A8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F3A8",image:"1f468-1f3fb-200d-1f3a8.png",sheet_x:37,sheet_y:0,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F3A8",image:"1f468-1f3fc-200d-1f3a8.png",sheet_x:37,sheet_y:1,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F3A8",image:"1f468-1f3fd-200d-1f3a8.png",sheet_x:37,sheet_y:2,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F3A8",image:"1f468-1f3fe-200d-1f3a8.png",sheet_x:37,sheet_y:3,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F3A8",image:"1f468-1f3ff-200d-1f3a8.png",sheet_x:37,sheet_y:4,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_artist","painter","man","human"],sheet:[36,48]},"flag-pt":{name:"Portugal",unified:"1F1F5-1F1F9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["portugal","pt","flag","nation","country","banner"],sheet:[35,4]},"flag-pr":{name:"Puerto Rico",unified:"1F1F5-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["puerto_rico","puerto","rico","flag","nation","country","banner"],sheet:[35,2]},repeat_one:{name:"Clockwise Rightwards and Leftwards Open Circle Arrows with Circled One Overlay",unified:"1F502",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["repeat_one","blue-square","loop"],sheet:[19,16]},"female-firefighter":{name:"Female Firefighter",unified:"1F469-200D-1F692",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F692",image:"1f469-1f3fb-200d-1f692.png",sheet_x:39,sheet_y:32,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F692",image:"1f469-1f3fc-200d-1f692.png",sheet_x:39,sheet_y:33,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F692",image:"1f469-1f3fd-200d-1f692.png",sheet_x:39,sheet_y:34,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F692",image:"1f469-1f3fe-200d-1f692.png",sheet_x:39,sheet_y:35,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F692",image:"1f469-1f3ff-200d-1f692.png",sheet_x:39,sheet_y:36,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_firefighter","fireman","woman","human"],sheet:[39,31]},"male-firefighter":{name:"Male Firefighter",unified:"1F468-200D-1F692",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F692",image:"1f468-1f3fb-200d-1f692.png",sheet_x:38,sheet_y:1,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F692",image:"1f468-1f3fc-200d-1f692.png",sheet_x:38,sheet_y:2,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F692",image:"1f468-1f3fd-200d-1f692.png",sheet_x:38,sheet_y:3,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F692",image:"1f468-1f3fe-200d-1f692.png",sheet_x:38,sheet_y:4,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F692",image:"1f468-1f3ff-200d-1f692.png",sheet_x:38,sheet_y:5,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_firefighter","fireman","man","human"],sheet:[38,0]},"flag-qa":{name:"Qatar",unified:"1F1F6-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["qatar","qa","flag","nation","country","banner"],sheet:[35,7]},arrows_counterclockwise:{name:"Anticlockwise Downwards and Upwards Open Circle Arrows",unified:"1F504",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["arrows_counterclockwise","blue-square","sync","cycle"],sheet:[19,18]},arrows_clockwise:{name:"Clockwise Downwards and Upwards Open Circle Arrows",unified:"1F503",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["arrows_clockwise","sync","cycle","round","repeat"],sheet:[19,17]},"female-pilot":{name:"Female Pilot",unified:"1F469-200D-2708-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-2708-FE0F",image:"1f469-1f3fb-200d-2708-fe0f.png",sheet_x:42,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-2708-FE0F",image:"1f469-1f3fc-200d-2708-fe0f.png",sheet_x:42,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-2708-FE0F",image:"1f469-1f3fd-200d-2708-fe0f.png",sheet_x:42,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-2708-FE0F",image:"1f469-1f3fe-200d-2708-fe0f.png",sheet_x:42,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-2708-FE0F",image:"1f469-1f3ff-200d-2708-fe0f.png",sheet_x:42,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["woman_pilot","aviator","plane","woman","human"],sheet:[42,5]},"flag-re":{name:"Reunion",unified:"1F1F7-1F1EA",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["reunion","réunion","flag","nation","country","banner"],sheet:[35,8]},musical_note:{name:"Musical Note",unified:"1F3B5",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["musical_note","score","tone","sound"],sheet:[8,16]},"male-pilot":{name:"Male Pilot",unified:"1F468-200D-2708-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-2708-FE0F",image:"1f468-1f3fb-200d-2708-fe0f.png",sheet_x:41,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-2708-FE0F",image:"1f468-1f3fc-200d-2708-fe0f.png",sheet_x:41,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-2708-FE0F",image:"1f468-1f3fd-200d-2708-fe0f.png",sheet_x:41,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-2708-FE0F",image:"1f468-1f3fe-200d-2708-fe0f.png",sheet_x:41,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-2708-FE0F",image:"1f468-1f3ff-200d-2708-fe0f.png",sheet_x:41,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["man_pilot","aviator","plane","man","human"],sheet:[41,26]},"flag-ro":{name:"Romania",unified:"1F1F7-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["romania","ro","flag","nation","country","banner"],sheet:[35,9]},notes:{name:"Multiple Musical Notes",unified:"1F3B6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["notes","music","score"],sheet:[8,17]},"female-astronaut":{name:"Female Astronaut",unified:"1F469-200D-1F680",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-1F680",image:"1f469-1f3fb-200d-1f680.png",sheet_x:39,sheet_y:26,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-1F680",image:"1f469-1f3fc-200d-1f680.png",sheet_x:39,sheet_y:27,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-1F680",image:"1f469-1f3fd-200d-1f680.png",sheet_x:39,sheet_y:28,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-1F680",image:"1f469-1f3fe-200d-1f680.png",sheet_x:39,sheet_y:29,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-1F680",image:"1f469-1f3ff-200d-1f680.png",sheet_x:39,sheet_y:30,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_astronaut","space","rocket","woman","human"],sheet:[39,25]},"flag-ru":{name:"RU",unified:"1F1F7-1F1FA",short_names:["ru"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ru","russian","federation","flag","nation","country","banner"],sheet:[35,11]},heavy_plus_sign:{name:"Heavy Plus Sign",unified:"2795",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["heavy_plus_sign","math","calculation","addition","more","increase"],sheet:[3,31]},"flag-rw":{name:"Rwanda",unified:"1F1F7-1F1FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["rwanda","rw","flag","nation","country","banner"],sheet:[35,12]},"male-astronaut":{name:"Male Astronaut",unified:"1F468-200D-1F680",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-1F680",image:"1f468-1f3fb-200d-1f680.png",sheet_x:37,sheet_y:44,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-1F680",image:"1f468-1f3fc-200d-1f680.png",sheet_x:37,sheet_y:45,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-1F680",image:"1f468-1f3fd-200d-1f680.png",sheet_x:37,sheet_y:46,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-1F680",image:"1f468-1f3fe-200d-1f680.png",sheet_x:37,sheet_y:47,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-1F680",image:"1f468-1f3ff-200d-1f680.png",sheet_x:37,sheet_y:48,has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["man_astronaut","space","rocket","man","human"],sheet:[37,43]},heavy_minus_sign:{name:"Heavy Minus Sign",unified:"2796",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["heavy_minus_sign","math","calculation","subtract","less"],sheet:[3,32]},"female-judge":{name:"Female Judge",unified:"1F469-200D-2696-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F469-1F3FB-200D-2696-FE0F",image:"1f469-1f3fb-200d-2696-fe0f.png",sheet_x:42,sheet_y:0,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F469-1F3FC-200D-2696-FE0F",image:"1f469-1f3fc-200d-2696-fe0f.png",sheet_x:42,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F469-1F3FD-200D-2696-FE0F",image:"1f469-1f3fd-200d-2696-fe0f.png",sheet_x:42,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F469-1F3FE-200D-2696-FE0F",image:"1f469-1f3fe-200d-2696-fe0f.png",sheet_x:42,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F469-1F3FF-200D-2696-FE0F",image:"1f469-1f3ff-200d-2696-fe0f.png",sheet_x:42,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["woman_judge","justice","court","woman","human"],sheet:[41,48]},"flag-bl":{name:"St Barthelemy",unified:"1F1E7-1F1F1",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["st_barthelemy","saint","barthélemy","flag","nation","country","banner"],sheet:[31,37]},"flag-sh":{name:"St Helena",unified:"1F1F8-1F1ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["st_helena","saint","helena","ascension","tristan","cunha","flag","nation","country","banner"],sheet:[35,19]},heavy_division_sign:{name:"Heavy Division Sign",unified:"2797",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["heavy_division_sign","divide","math","calculation"],sheet:[3,33]},"male-judge":{name:"Male Judge",unified:"1F468-200D-2696-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F468-1F3FB-200D-2696-FE0F",image:"1f468-1f3fb-200d-2696-fe0f.png",sheet_x:41,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F468-1F3FC-200D-2696-FE0F",image:"1f468-1f3fc-200d-2696-fe0f.png",sheet_x:41,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F468-1F3FD-200D-2696-FE0F",image:"1f468-1f3fd-200d-2696-fe0f.png",sheet_x:41,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F468-1F3FE-200D-2696-FE0F",image:"1f468-1f3fe-200d-2696-fe0f.png",sheet_x:41,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F468-1F3FF-200D-2696-FE0F",image:"1f468-1f3ff-200d-2696-fe0f.png",sheet_x:41,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["man_judge","justice","court","man","human"],sheet:[41,20]},heavy_multiplication_x:{name:"Heavy Multiplication X",unified:"2716",variations:["2716-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,15]},mother_christmas:{name:"Mother Christmas",unified:"1F936",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F936-1F3FB",image:"1f936-1f3fb.png",sheet_x:29,sheet_y:15,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F936-1F3FC",image:"1f936-1f3fc.png",sheet_x:29,sheet_y:16,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F936-1F3FD",image:"1f936-1f3fd.png",sheet_x:29,sheet_y:17,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F936-1F3FE",image:"1f936-1f3fe.png",sheet_x:29,sheet_y:18,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F936-1F3FF",image:"1f936-1f3ff.png",sheet_x:29,sheet_y:19,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["mrs_claus","woman","female","xmas","mother christmas"],sheet:[29,14]},"flag-kn":{name:"St Kitts Nevis",unified:"1F1F0-1F1F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["st_kitts_nevis","saint","kitts","nevis","flag","nation","country","banner"],sheet:[33,38]},heavy_dollar_sign:{name:"Heavy Dollar Sign",unified:"1F4B2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["heavy_dollar_sign","money","sales","payment","currency","buck"],sheet:[17,35]},"flag-lc":{name:"St Lucia",unified:"1F1F1-1F1E8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["st_lucia","saint","lucia","flag","nation","country","banner"],sheet:[33,46]},santa:{name:"Father Christmas",unified:"1F385",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F385-1F3FB",image:"1f385-1f3fb.png",sheet_x:7,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F385-1F3FC",image:"1f385-1f3fc.png",sheet_x:7,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F385-1F3FD",image:"1f385-1f3fd.png",sheet_x:7,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F385-1F3FE",image:"1f385-1f3fe.png",sheet_x:7,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F385-1F3FF",image:"1f385-1f3ff.png",sheet_x:7,sheet_y:22,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["santa","festival","man","male","xmas","father christmas"],sheet:[7,17]},currency_exchange:{name:"Currency Exchange",unified:"1F4B1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["currency_exchange","money","sales","dollar","travel"],sheet:[17,34]},princess:{name:"Princess",unified:"1F478",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F478-1F3FB",image:"1f478-1f3fb.png",sheet_x:15,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F478-1F3FC",image:"1f478-1f3fc.png",sheet_x:15,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F478-1F3FD",image:"1f478-1f3fd.png",sheet_x:15,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F478-1F3FE",image:"1f478-1f3fe.png",sheet_x:15,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F478-1F3FF",image:"1f478-1f3ff.png",sheet_x:15,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["princess","girl","woman","female","blond","crown","royal","queen"],sheet:[15,30]},"flag-pm":{name:"St Pierre Miquelon",unified:"1F1F5-1F1F2",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["st_pierre_miquelon","saint","pierre","miquelon","flag","nation","country","banner"],sheet:[35,0]},prince:{name:"Prince",unified:"1F934",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F934-1F3FB",image:"1f934-1f3fb.png",sheet_x:29,sheet_y:3,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F934-1F3FC",image:"1f934-1f3fc.png",sheet_x:29,sheet_y:4,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F934-1F3FD",image:"1f934-1f3fd.png",sheet_x:29,sheet_y:5,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F934-1F3FE",image:"1f934-1f3fe.png",sheet_x:29,sheet_y:6,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F934-1F3FF",image:"1f934-1f3ff.png",sheet_x:29,sheet_y:7,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["prince","boy","man","male","crown","royal","king"],sheet:[29,2]},"flag-vc":{name:"St Vincent Grenadines",unified:"1F1FB-1F1E8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["st_vincent_grenadines","saint","vincent","grenadines","flag","nation","country","banner"],sheet:[36,10]},tm:{name:"Trade Mark Sign",unified:"2122",variations:["2122-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,4]},"flag-ws":{name:"Samoa",unified:"1F1FC-1F1F8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["samoa","ws","flag","nation","country","banner"],sheet:[36,17]},copyright:{name:"Copyright Sign",unified:"00A9",variations:["00A9-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:false,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[0,0]},bride_with_veil:{name:"Bride with Veil",unified:"1F470",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F470-1F3FB",image:"1f470-1f3fb.png",sheet_x:14,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F470-1F3FC",image:"1f470-1f3fc.png",sheet_x:14,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F470-1F3FD",image:"1f470-1f3fd.png",sheet_x:14,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F470-1F3FE",image:"1f470-1f3fe.png",sheet_x:14,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F470-1F3FF",image:"1f470-1f3ff.png",sheet_x:14,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["bride_with_veil","couple","marriage","wedding","woman","bride"],sheet:[14,31]},registered:{name:"Registered Sign",unified:"00AE",variations:["00AE-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:false,has_img_emojione:true,has_img_facebook:false,has_img_messenger:false,sheet:[0,1]},"flag-sm":{name:"San Marino",unified:"1F1F8-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["san_marino","san","marino","flag","nation","country","banner"],sheet:[35,24]},man_in_tuxedo:{name:"Man in Tuxedo",unified:"1F935",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F935-1F3FB",image:"1f935-1f3fb.png",sheet_x:29,sheet_y:9,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F935-1F3FC",image:"1f935-1f3fc.png",sheet_x:29,sheet_y:10,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F935-1F3FD",image:"1f935-1f3fd.png",sheet_x:29,sheet_y:11,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F935-1F3FE",image:"1f935-1f3fe.png",sheet_x:29,sheet_y:12,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F935-1F3FF",image:"1f935-1f3ff.png",sheet_x:29,sheet_y:13,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["man_in_tuxedo","couple","marriage","wedding","groom"],sheet:[29,8]},angel:{name:"Baby Angel",unified:"1F47C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F47C-1F3FB",image:"1f47c-1f3fb.png",sheet_x:15,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F47C-1F3FC",image:"1f47c-1f3fc.png",sheet_x:15,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F47C-1F3FD",image:"1f47c-1f3fd.png",sheet_x:15,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F47C-1F3FE",image:"1f47c-1f3fe.png",sheet_x:15,sheet_y:43,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F47C-1F3FF",image:"1f47c-1f3ff.png",sheet_x:15,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["angel","heaven","wings","halo"],sheet:[15,39]},wavy_dash:{name:"Wavy Dash",unified:"3030",variations:["3030-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,46]},"flag-st":{name:"Sao Tome Principe",unified:"1F1F8-1F1F9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sao_tome_principe","sao","tome","principe","flag","nation","country","banner"],sheet:[35,29]},curly_loop:{name:"Curly Loop",unified:"27B0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["curly_loop","scribble","draw","shape","squiggle"],sheet:[3,35]},"flag-sa":{name:"Saudi Arabia",unified:"1F1F8-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["saudi_arabia","flag","nation","country","banner"],sheet:[35,13]},pregnant_woman:{name:"Pregnant Woman",unified:"1F930",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F930-1F3FB",image:"1f930-1f3fb.png",sheet_x:28,sheet_y:40,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F930-1F3FC",image:"1f930-1f3fc.png",sheet_x:28,sheet_y:41,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F930-1F3FD",image:"1f930-1f3fd.png",sheet_x:28,sheet_y:42,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F930-1F3FE",image:"1f930-1f3fe.png",sheet_x:28,sheet_y:43,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F930-1F3FF",image:"1f930-1f3ff.png",sheet_x:28,sheet_y:44,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["pregnant_woman","baby"],sheet:[28,39]},loop:{name:"Double Curly Loop",unified:"27BF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["loop","tape","cassette"],sheet:[3,36]},"woman-bowing":{name:"Woman Bowing",unified:"1F647-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F647-1F3FB-200D-2640-FE0F",image:"1f647-1f3fb-200d-2640-fe0f.png",sheet_x:45,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F647-1F3FC-200D-2640-FE0F",image:"1f647-1f3fc-200d-2640-fe0f.png",sheet_x:45,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F647-1F3FD-200D-2640-FE0F",image:"1f647-1f3fd-200d-2640-fe0f.png",sheet_x:45,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F647-1F3FE-200D-2640-FE0F",image:"1f647-1f3fe-200d-2640-fe0f.png",sheet_x:45,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F647-1F3FF-200D-2640-FE0F",image:"1f647-1f3ff-200d-2640-fe0f.png",sheet_x:45,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["bowing_woman","woman","female","girl"],sheet:[45,2]},"flag-sn":{name:"Senegal",unified:"1F1F8-1F1F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["senegal","sn","flag","nation","country","banner"],sheet:[35,25]},"flag-rs":{name:"Serbia",unified:"1F1F7-1F1F8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["serbia","rs","flag","nation","country","banner"],sheet:[35,10]},bow:{name:"Person Bowing Deeply",unified:"1F647",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F647-1F3FB",image:"1f647-1f3fb.png",sheet_x:24,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F647-1F3FC",image:"1f647-1f3fc.png",sheet_x:24,sheet_y:18,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F647-1F3FD",image:"1f647-1f3fd.png",sheet_x:24,sheet_y:19,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F647-1F3FE",image:"1f647-1f3fe.png",sheet_x:24,sheet_y:20,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F647-1F3FF",image:"1f647-1f3ff.png",sheet_x:24,sheet_y:21,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F647-200D-2642-FE0F",keywords:["bowing_man","man","male","boy"],sheet:[24,16]},end:{name:"End with Leftwards Arrow Above",unified:"1F51A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["end","words","arrow"],sheet:[19,40]},back:{name:"Back with Leftwards Arrow Above",unified:"1F519",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["back","arrow","words","return"],sheet:[19,39]},information_desk_person:{name:"Information Desk Person",unified:"1F481",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F481-1F3FB",image:"1f481-1f3fb.png",sheet_x:16,sheet_y:1,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F481-1F3FC",image:"1f481-1f3fc.png",sheet_x:16,sheet_y:2,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F481-1F3FD",image:"1f481-1f3fd.png",sheet_x:16,sheet_y:3,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F481-1F3FE",image:"1f481-1f3fe.png",sheet_x:16,sheet_y:4,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F481-1F3FF",image:"1f481-1f3ff.png",sheet_x:16,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F481-200D-2640-FE0F",keywords:["tipping_hand_woman","female","girl","woman","human","information"],sheet:[16,0]},"flag-sc":{name:"Seychelles",unified:"1F1F8-1F1E8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["seychelles","sc","flag","nation","country","banner"],sheet:[35,15]},on:{name:"On with Exclamation Mark with Left Right Arrow Above",unified:"1F51B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["on","arrow","words"],sheet:[19,41]},"man-tipping-hand":{name:"Man Tipping Hand",unified:"1F481-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F481-1F3FB-200D-2642-FE0F",image:"1f481-1f3fb-200d-2642-fe0f.png",sheet_x:43,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F481-1F3FC-200D-2642-FE0F",image:"1f481-1f3fc-200d-2642-fe0f.png",sheet_x:43,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F481-1F3FD-200D-2642-FE0F",image:"1f481-1f3fd-200d-2642-fe0f.png",sheet_x:43,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F481-1F3FE-200D-2642-FE0F",image:"1f481-1f3fe-200d-2642-fe0f.png",sheet_x:43,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F481-1F3FF-200D-2642-FE0F",image:"1f481-1f3ff-200d-2642-fe0f.png",sheet_x:43,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["tipping_hand_man","male","boy","man","human","information"],sheet:[43,22]},"flag-sl":{name:"Sierra Leone",unified:"1F1F8-1F1F1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sierra_leone","sierra","leone","flag","nation","country","banner"],sheet:[35,23]},"flag-sg":{name:"Singapore",unified:"1F1F8-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["singapore","sg","flag","nation","country","banner"],sheet:[35,18]},no_good:{name:"Face with No Good Gesture",unified:"1F645",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F645-1F3FB",image:"1f645-1f3fb.png",sheet_x:24,sheet_y:5,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F645-1F3FC",image:"1f645-1f3fc.png",sheet_x:24,sheet_y:6,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F645-1F3FD",image:"1f645-1f3fd.png",sheet_x:24,sheet_y:7,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F645-1F3FE",image:"1f645-1f3fe.png",sheet_x:24,sheet_y:8,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F645-1F3FF",image:"1f645-1f3ff.png",sheet_x:24,sheet_y:9,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F645-200D-2640-FE0F",keywords:["no_good_woman","female","girl","woman","nope"],sheet:[24,4]},top:{name:"Top with Upwards Arrow Above",unified:"1F51D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["top","words","blue-square"],sheet:[19,43]},"flag-sx":{name:"Sint Maarten",unified:"1F1F8-1F1FD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sint_maarten","sint","maarten","dutch","flag","nation","country","banner"],sheet:[35,31]},soon:{name:"Soon with Rightwards Arrow Above",unified:"1F51C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["soon","arrow","words"],sheet:[19,42]},"man-gesturing-no":{name:"Man Gesturing No",unified:"1F645-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F645-1F3FB-200D-2642-FE0F",image:"1f645-1f3fb-200d-2642-fe0f.png",sheet_x:44,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F645-1F3FC-200D-2642-FE0F",image:"1f645-1f3fc-200d-2642-fe0f.png",sheet_x:44,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F645-1F3FD-200D-2642-FE0F",image:"1f645-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F645-1F3FE-200D-2642-FE0F",image:"1f645-1f3fe-200d-2642-fe0f.png",sheet_x:44,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F645-1F3FF-200D-2642-FE0F",image:"1f645-1f3ff-200d-2642-fe0f.png",sheet_x:44,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["no_good_man","male","boy","man","nope"],sheet:[44,33]},"flag-sk":{name:"Slovakia",unified:"1F1F8-1F1F0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["slovakia","sk","flag","nation","country","banner"],sheet:[35,22]},heavy_check_mark:{name:"Heavy Check Mark",unified:"2714",variations:["2714-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[3,14]},ok_woman:{name:"Face with Ok Gesture",unified:"1F646",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F646-1F3FB",image:"1f646-1f3fb.png",sheet_x:24,sheet_y:11,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F646-1F3FC",image:"1f646-1f3fc.png",sheet_x:24,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F646-1F3FD",image:"1f646-1f3fd.png",sheet_x:24,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F646-1F3FE",image:"1f646-1f3fe.png",sheet_x:24,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F646-1F3FF",image:"1f646-1f3ff.png",sheet_x:24,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F646-200D-2640-FE0F",keywords:["ok_woman","women","girl","female","pink","human","woman"],sheet:[24,10]},"man-gesturing-ok":{name:"Man Gesturing Ok",unified:"1F646-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F646-1F3FB-200D-2642-FE0F",image:"1f646-1f3fb-200d-2642-fe0f.png",sheet_x:44,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F646-1F3FC-200D-2642-FE0F",image:"1f646-1f3fc-200d-2642-fe0f.png",sheet_x:44,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F646-1F3FD-200D-2642-FE0F",image:"1f646-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F646-1F3FE-200D-2642-FE0F",image:"1f646-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:0,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F646-1F3FF-200D-2642-FE0F",image:"1f646-1f3ff-200d-2642-fe0f.png",sheet_x:45,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["ok_man","men","boy","male","blue","human","man"],sheet:[44,45]},"flag-si":{name:"Slovenia",unified:"1F1F8-1F1EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["slovenia","si","flag","nation","country","banner"],sheet:[35,20]},ballot_box_with_check:{name:"Ballot Box with Check",unified:"2611",variations:["2611-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,47]},"flag-sb":{name:"Solomon Islands",unified:"1F1F8-1F1E7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["solomon_islands","solomon","islands","flag","nation","country","banner"],sheet:[35,14]},radio_button:{name:"Radio Button",unified:"1F518",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["radio_button","input","old","music","circle"],sheet:[19,38]},raising_hand:{name:"Happy Person Raising One Hand",unified:"1F64B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64B-1F3FB",image:"1f64b-1f3fb.png",sheet_x:24,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64B-1F3FC",image:"1f64b-1f3fc.png",sheet_x:24,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64B-1F3FD",image:"1f64b-1f3fd.png",sheet_x:24,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64B-1F3FE",image:"1f64b-1f3fe.png",sheet_x:24,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64B-1F3FF",image:"1f64b-1f3ff.png",sheet_x:24,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F64B-200D-2640-FE0F",keywords:["raising_hand_woman","female","girl","woman"],sheet:[24,25]},white_circle:{name:"Medium White Circle",unified:"26AA",variations:["26AA-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["white_circle","shape","round"],sheet:[2,1]},"man-raising-hand":{name:"Man Raising Hand",unified:"1F64B-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64B-1F3FB-200D-2642-FE0F",image:"1f64b-1f3fb-200d-2642-fe0f.png",sheet_x:45,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64B-1F3FC-200D-2642-FE0F",image:"1f64b-1f3fc-200d-2642-fe0f.png",sheet_x:45,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64B-1F3FD-200D-2642-FE0F",image:"1f64b-1f3fd-200d-2642-fe0f.png",sheet_x:45,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64B-1F3FE-200D-2642-FE0F",image:"1f64b-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64B-1F3FF-200D-2642-FE0F",image:"1f64b-1f3ff-200d-2642-fe0f.png",sheet_x:45,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["raising_hand_man","male","boy","man"],sheet:[45,20]},"flag-so":{name:"Somalia",unified:"1F1F8-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["somalia","so","flag","nation","country","banner"],sheet:[35,26]},black_circle:{name:"Medium Black Circle",unified:"26AB",variations:["26AB-FE0F"],added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["black_circle","shape","button","round"],sheet:[2,2]},face_palm:{name:"Face Palm",unified:"1F926",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F926-1F3FB",image:"1f926-1f3fb.png",sheet_x:28,sheet_y:33,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F926-1F3FC",image:"1f926-1f3fc.png",sheet_x:28,sheet_y:34,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F926-1F3FD",image:"1f926-1f3fd.png",sheet_x:28,sheet_y:35,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F926-1F3FE",image:"1f926-1f3fe.png",sheet_x:28,sheet_y:36,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F926-1F3FF",image:"1f926-1f3ff.png",sheet_x:28,sheet_y:37,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["man_facepalming","man","male","boy","disbelief"],sheet:[28,32]},"flag-za":{name:"South Africa",unified:"1F1FF-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["south_africa","south","africa","flag","nation","country","banner"],sheet:[36,21]},red_circle:{name:"Large Red Circle",unified:"1F534",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["red_circle","shape","error","danger"],sheet:[20,17]},"woman-facepalming":{name:"Woman Facepalming",unified:"1F926-200D-2640-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F926-1F3FB-200D-2640-FE0F",image:"1f926-1f3fb-200d-2640-fe0f.png",sheet_x:47,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F926-1F3FC-200D-2640-FE0F",image:"1f926-1f3fc-200d-2640-fe0f.png",sheet_x:47,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F926-1F3FD-200D-2640-FE0F",image:"1f926-1f3fd-200d-2640-fe0f.png",sheet_x:47,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F926-1F3FE-200D-2640-FE0F",image:"1f926-1f3fe-200d-2640-fe0f.png",sheet_x:47,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F926-1F3FF-200D-2640-FE0F",image:"1f926-1f3ff-200d-2640-fe0f.png",sheet_x:47,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["woman_facepalming","woman","female","girl","disbelief"],sheet:[47,0]},"flag-gs":{name:"South Georgia South Sandwich Islands",unified:"1F1EC-1F1F8",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["south_georgia_south_sandwich_islands","south","georgia","sandwich","islands","flag","nation","country","banner"],sheet:[33,7]},large_blue_circle:{name:"Large Blue Circle",unified:"1F535",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["large_blue_circle","shape","icon","button"],sheet:[20,18]},"flag-kr":{name:"KR",unified:"1F1F0-1F1F7",short_names:["kr"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kr","south","korea","nation","flag","country","banner"],sheet:[33,40]},"man-facepalming":{name:"Man Facepalming",unified:"1F926-200D-2642-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F926-1F3FB-200D-2642-FE0F",image:"1f926-1f3fb-200d-2642-fe0f.png",sheet_x:47,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F926-1F3FC-200D-2642-FE0F",image:"1f926-1f3fc-200d-2642-fe0f.png",sheet_x:47,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F926-1F3FD-200D-2642-FE0F",image:"1f926-1f3fd-200d-2642-fe0f.png",sheet_x:47,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F926-1F3FE-200D-2642-FE0F",image:"1f926-1f3fe-200d-2642-fe0f.png",sheet_x:47,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F926-1F3FF-200D-2642-FE0F",image:"1f926-1f3ff-200d-2642-fe0f.png",sheet_x:47,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},sheet:[47,6]},small_red_triangle:{name:"Up-Pointing Red Triangle",unified:"1F53A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["small_red_triangle","shape","direction","up","top"],sheet:[20,23]},"flag-ss":{name:"South Sudan",unified:"1F1F8-1F1F8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["south_sudan","south","sd","flag","nation","country","banner"],sheet:[35,28]},shrug:{name:"Shrug",unified:"1F937",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F937-1F3FB",image:"1f937-1f3fb.png",sheet_x:29,sheet_y:21,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F937-1F3FC",image:"1f937-1f3fc.png",sheet_x:29,sheet_y:22,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F937-1F3FD",image:"1f937-1f3fd.png",sheet_x:29,sheet_y:23,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F937-1F3FE",image:"1f937-1f3fe.png",sheet_x:29,sheet_y:24,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F937-1F3FF",image:"1f937-1f3ff.png",sheet_x:29,sheet_y:25,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["woman_shrugging","woman","female","girl","confused","indifferent","doubt"],sheet:[29,20]},"woman-shrugging":{name:"Woman Shrugging",unified:"1F937-200D-2640-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F937-1F3FB-200D-2640-FE0F",image:"1f937-1f3fb-200d-2640-fe0f.png",sheet_x:47,sheet_y:13,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F937-1F3FC-200D-2640-FE0F",image:"1f937-1f3fc-200d-2640-fe0f.png",sheet_x:47,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F937-1F3FD-200D-2640-FE0F",image:"1f937-1f3fd-200d-2640-fe0f.png",sheet_x:47,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F937-1F3FE-200D-2640-FE0F",image:"1f937-1f3fe-200d-2640-fe0f.png",sheet_x:47,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F937-1F3FF-200D-2640-FE0F",image:"1f937-1f3ff-200d-2640-fe0f.png",sheet_x:47,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},sheet:[47,12]},small_red_triangle_down:{name:"Down-Pointing Red Triangle",unified:"1F53B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["small_red_triangle_down","shape","direction","bottom"],sheet:[20,24]},"flag-es":{name:"ES",unified:"1F1EA-1F1F8",short_names:["es"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["es","spain","flag","nation","country","banner"],sheet:[32,33]},"man-shrugging":{name:"Man Shrugging",unified:"1F937-200D-2642-FE0F",added_in:"9.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F937-1F3FB-200D-2642-FE0F",image:"1f937-1f3fb-200d-2642-fe0f.png",sheet_x:47,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F937-1F3FC-200D-2642-FE0F",image:"1f937-1f3fc-200d-2642-fe0f.png",sheet_x:47,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F937-1F3FD-200D-2642-FE0F",image:"1f937-1f3fd-200d-2642-fe0f.png",sheet_x:47,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F937-1F3FE-200D-2642-FE0F",image:"1f937-1f3fe-200d-2642-fe0f.png",sheet_x:47,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F937-1F3FF-200D-2642-FE0F",image:"1f937-1f3ff-200d-2642-fe0f.png",sheet_x:47,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["man_shrugging","man","male","boy","confused","indifferent","doubt"],sheet:[47,18]},small_orange_diamond:{name:"Small Orange Diamond",unified:"1F538",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["small_orange_diamond","shape","jewel","gem"],sheet:[20,21]},"flag-lk":{name:"Sri Lanka",unified:"1F1F1-1F1F0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sri_lanka","sri","lanka","flag","nation","country","banner"],sheet:[33,48]},small_blue_diamond:{name:"Small Blue Diamond",unified:"1F539",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["small_blue_diamond","shape","jewel","gem"],sheet:[20,22]},person_with_pouting_face:{name:"Person with Pouting Face",unified:"1F64E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64E-1F3FB",image:"1f64e-1f3fb.png",sheet_x:24,sheet_y:44,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64E-1F3FC",image:"1f64e-1f3fc.png",sheet_x:24,sheet_y:45,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64E-1F3FD",image:"1f64e-1f3fd.png",sheet_x:24,sheet_y:46,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64E-1F3FE",image:"1f64e-1f3fe.png",sheet_x:24,sheet_y:47,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64E-1F3FF",image:"1f64e-1f3ff.png",sheet_x:24,sheet_y:48,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F64E-200D-2640-FE0F",keywords:["pouting_woman","female","girl","woman"],sheet:[24,43]},"flag-sd":{name:"Sudan",unified:"1F1F8-1F1E9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sudan","sd","flag","nation","country","banner"],sheet:[35,16]},"man-pouting":{name:"Man Pouting",unified:"1F64E-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64E-1F3FB-200D-2642-FE0F",image:"1f64e-1f3fb-200d-2642-fe0f.png",sheet_x:45,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64E-1F3FC-200D-2642-FE0F",image:"1f64e-1f3fc-200d-2642-fe0f.png",sheet_x:45,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64E-1F3FD-200D-2642-FE0F",image:"1f64e-1f3fd-200d-2642-fe0f.png",sheet_x:45,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64E-1F3FE-200D-2642-FE0F",image:"1f64e-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64E-1F3FF-200D-2642-FE0F",image:"1f64e-1f3ff-200d-2642-fe0f.png",sheet_x:46,sheet_y:0,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["pouting_man","male","boy","man"],sheet:[45,44]},large_orange_diamond:{name:"Large Orange Diamond",unified:"1F536",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["large_orange_diamond","shape","jewel","gem"],sheet:[20,19]},"flag-sr":{name:"Suriname",unified:"1F1F8-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["suriname","sr","flag","nation","country","banner"],sheet:[35,27]},"flag-sz":{name:"Swaziland",unified:"1F1F8-1F1FF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["swaziland","sz","flag","nation","country","banner"],sheet:[35,33]},large_blue_diamond:{name:"Large Blue Diamond",unified:"1F537",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["large_blue_diamond","shape","jewel","gem"],sheet:[20,20]},person_frowning:{name:"Person Frowning",unified:"1F64D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F64D-1F3FB",image:"1f64d-1f3fb.png",sheet_x:24,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F64D-1F3FC",image:"1f64d-1f3fc.png",sheet_x:24,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F64D-1F3FD",image:"1f64d-1f3fd.png",sheet_x:24,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F64D-1F3FE",image:"1f64d-1f3fe.png",sheet_x:24,sheet_y:41,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F64D-1F3FF",image:"1f64d-1f3ff.png",sheet_x:24,sheet_y:42,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F64D-200D-2640-FE0F",keywords:["frowning_woman","female","girl","woman","sad","depressed","discouraged","unhappy"],sheet:[24,37]},"man-frowning":{name:"Man Frowning",unified:"1F64D-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64D-1F3FB-200D-2642-FE0F",image:"1f64d-1f3fb-200d-2642-fe0f.png",sheet_x:45,sheet_y:33,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64D-1F3FC-200D-2642-FE0F",image:"1f64d-1f3fc-200d-2642-fe0f.png",sheet_x:45,sheet_y:34,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64D-1F3FD-200D-2642-FE0F",image:"1f64d-1f3fd-200d-2642-fe0f.png",sheet_x:45,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64D-1F3FE-200D-2642-FE0F",image:"1f64d-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64D-1F3FF-200D-2642-FE0F",image:"1f64d-1f3ff-200d-2642-fe0f.png",sheet_x:45,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["frowning_man","male","boy","man","sad","depressed","discouraged","unhappy"],sheet:[45,32]},"flag-se":{name:"Sweden",unified:"1F1F8-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sweden","se","flag","nation","country","banner"],sheet:[35,17]},white_square_button:{name:"White Square Button",unified:"1F533",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["white_square_button","shape","input"],sheet:[20,16]},"flag-ch":{name:"Switzerland",unified:"1F1E8-1F1ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["switzerland","ch","flag","nation","country","banner"],sheet:[32,5]},haircut:{name:"Haircut",unified:"1F487",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F487-1F3FB",image:"1f487-1f3fb.png",sheet_x:16,sheet_y:32,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F487-1F3FC",image:"1f487-1f3fc.png",sheet_x:16,sheet_y:33,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F487-1F3FD",image:"1f487-1f3fd.png",sheet_x:16,sheet_y:34,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F487-1F3FE",image:"1f487-1f3fe.png",sheet_x:16,sheet_y:35,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F487-1F3FF",image:"1f487-1f3ff.png",sheet_x:16,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F487-200D-2640-FE0F",keywords:["haircut_woman","female","girl","woman"],sheet:[16,31]},black_square_button:{name:"Black Square Button",unified:"1F532",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["black_square_button","shape","input","frame"],sheet:[20,15]},"man-getting-haircut":{name:"Man Getting Haircut",unified:"1F487-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F487-1F3FB-200D-2642-FE0F",image:"1f487-1f3fb-200d-2642-fe0f.png",sheet_x:44,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F487-1F3FC-200D-2642-FE0F",image:"1f487-1f3fc-200d-2642-fe0f.png",sheet_x:44,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F487-1F3FD-200D-2642-FE0F",image:"1f487-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:12,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F487-1F3FE-200D-2642-FE0F",image:"1f487-1f3fe-200d-2642-fe0f.png",sheet_x:44,sheet_y:13,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F487-1F3FF-200D-2642-FE0F",image:"1f487-1f3ff-200d-2642-fe0f.png",sheet_x:44,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["haircut_man","male","boy","man"],sheet:[44,9]},black_small_square:{name:"Black Small Square",unified:"25AA",variations:["25AA-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,33]},"flag-sy":{name:"Syria",unified:"1F1F8-1F1FE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["syria","syrian","arab","republic","flag","nation","country","banner"],sheet:[35,32]},"flag-tw":{name:"Taiwan",unified:"1F1F9-1F1FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["taiwan","tw","flag","nation","country","banner"],sheet:[36,0]},massage:{name:"Face Massage",unified:"1F486",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F486-1F3FB",image:"1f486-1f3fb.png",sheet_x:16,sheet_y:26,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F486-1F3FC",image:"1f486-1f3fc.png",sheet_x:16,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F486-1F3FD",image:"1f486-1f3fd.png",sheet_x:16,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F486-1F3FE",image:"1f486-1f3fe.png",sheet_x:16,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F486-1F3FF",image:"1f486-1f3ff.png",sheet_x:16,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F486-200D-2640-FE0F",keywords:["massage_woman","female","girl","woman","head"],sheet:[16,25]},white_small_square:{name:"White Small Square",unified:"25AB",variations:["25AB-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,34]},black_medium_small_square:{name:"Black Medium Small Square",unified:"25FE",variations:["25FE-FE0F"],added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["black_medium_small_square","icon","shape","button"],sheet:[0,40]},"man-getting-massage":{name:"Man Getting Massage",unified:"1F486-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F486-1F3FB-200D-2642-FE0F",image:"1f486-1f3fb-200d-2642-fe0f.png",sheet_x:43,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F486-1F3FC-200D-2642-FE0F",image:"1f486-1f3fc-200d-2642-fe0f.png",sheet_x:43,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F486-1F3FD-200D-2642-FE0F",image:"1f486-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:0,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F486-1F3FE-200D-2642-FE0F",image:"1f486-1f3fe-200d-2642-fe0f.png",sheet_x:44,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F486-1F3FF-200D-2642-FE0F",image:"1f486-1f3ff-200d-2642-fe0f.png",sheet_x:44,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["massage_man","male","boy","man","head"],sheet:[43,46]},"flag-tj":{name:"Tajikistan",unified:"1F1F9-1F1EF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tajikistan","tj","flag","nation","country","banner"],sheet:[35,40]},man_in_business_suit_levitating:{name:"Man in Business Suit Levitating",unified:"1F574",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F574-1F3FB",image:"1f574-1f3fb.png",sheet_x:21,sheet_y:12,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F574-1F3FC",image:"1f574-1f3fc.png",sheet_x:21,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F574-1F3FD",image:"1f574-1f3fd.png",sheet_x:21,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F574-1F3FE",image:"1f574-1f3fe.png",sheet_x:21,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F574-1F3FF",image:"1f574-1f3ff.png",sheet_x:21,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false}},keywords:["business_suit_levitating","suit","business","levitate","hover","jump"],sheet:[21,11]},"flag-tz":{name:"Tanzania",unified:"1F1F9-1F1FF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tanzania","tanzania,","united","republic","flag","nation","country","banner"],sheet:[36,1]},white_medium_small_square:{name:"White Medium Small Square",unified:"25FD",variations:["25FD-FE0F"],added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["white_medium_small_square","shape","stone","icon","button"],sheet:[0,39]},dancer:{name:"Dancer",unified:"1F483",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F483-1F3FB",image:"1f483-1f3fb.png",sheet_x:16,sheet_y:13,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F483-1F3FC",image:"1f483-1f3fc.png",sheet_x:16,sheet_y:14,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F483-1F3FD",image:"1f483-1f3fd.png",sheet_x:16,sheet_y:15,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F483-1F3FE",image:"1f483-1f3fe.png",sheet_x:16,sheet_y:16,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F483-1F3FF",image:"1f483-1f3ff.png",sheet_x:16,sheet_y:17,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},keywords:["dancer","female","girl","woman","fun"],sheet:[16,12]},black_medium_square:{name:"Black Medium Square",unified:"25FC",variations:["25FC-FE0F"],added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,38]},"flag-th":{name:"Thailand",unified:"1F1F9-1F1ED",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["thailand","th","flag","nation","country","banner"],sheet:[35,39]},"flag-tl":{name:"Timor Leste",unified:"1F1F9-1F1F1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["timor_leste","timor","leste","flag","nation","country","banner"],sheet:[35,42]},man_dancing:{name:"Man Dancing",unified:"1F57A",added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F57A-1F3FB",image:"1f57a-1f3fb.png",sheet_x:21,sheet_y:28,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FC":{unified:"1F57A-1F3FC",image:"1f57a-1f3fc.png",sheet_x:21,sheet_y:29,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FD":{unified:"1F57A-1F3FD",image:"1f57a-1f3fd.png",sheet_x:21,sheet_y:30,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FE":{unified:"1F57A-1F3FE",image:"1f57a-1f3fe.png",sheet_x:21,sheet_y:31,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false},"1F3FF":{unified:"1F57A-1F3FF",image:"1f57a-1f3ff.png",sheet_x:21,sheet_y:32,added_in:"9.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false}},keywords:["man_dancing","male","boy","fun","dancer"],sheet:[21,27]},white_medium_square:{name:"White Medium Square",unified:"25FB",variations:["25FB-FE0F"],added_in:"3.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[0,37]},"flag-tg":{name:"Togo",unified:"1F1F9-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["togo","tg","flag","nation","country","banner"],sheet:[35,38]},black_large_square:{name:"Black Large Square",unified:"2B1B",variations:["2B1B-FE0F"],added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["black_large_square","shape","icon","button"],sheet:[3,42]},dancers:{name:"Woman with Bunny Ears",unified:"1F46F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,obsoleted_by:"1F46F-200D-2640-FE0F",keywords:["dancing_women","female","bunny","women","girls"],sheet:[14,30]},"man-with-bunny-ears-partying":{name:"Man with Bunny Ears Partying",unified:"1F46F-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,keywords:["dancing_men","male","bunny","men","boys"],sheet:[42,28]},"flag-tk":{name:"Tokelau",unified:"1F1F9-1F1F0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tokelau","tk","flag","nation","country","banner"],sheet:[35,41]},white_large_square:{name:"White Large Square",unified:"2B1C",variations:["2B1C-FE0F"],added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["white_large_square","shape","icon","stone","button"],sheet:[3,43]},speaker:{name:"Speaker",unified:"1F508",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["speaker","sound","volume","silence","broadcast"],sheet:[19,22]},"woman-walking":{name:"Woman Walking",unified:"1F6B6-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B6-1F3FB-200D-2640-FE0F",image:"1f6b6-1f3fb-200d-2640-fe0f.png",sheet_x:46,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B6-1F3FC-200D-2640-FE0F",image:"1f6b6-1f3fc-200d-2640-fe0f.png",sheet_x:46,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B6-1F3FD-200D-2640-FE0F",image:"1f6b6-1f3fd-200d-2640-fe0f.png",sheet_x:46,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B6-1F3FE-200D-2640-FE0F",image:"1f6b6-1f3fe-200d-2640-fe0f.png",sheet_x:46,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B6-1F3FF-200D-2640-FE0F",image:"1f6b6-1f3ff-200d-2640-fe0f.png",sheet_x:46,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["walking_woman","human","feet","steps","woman","female"],sheet:[46,37]},"flag-to":{name:"Tonga",unified:"1F1F9-1F1F4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tonga","to","flag","nation","country","banner"],sheet:[35,45]},mute:{name:"Speaker with Cancellation Stroke",unified:"1F507",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mute","sound","volume","silence","quiet"],sheet:[19,21]},walking:{name:"Pedestrian",unified:"1F6B6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F6B6-1F3FB",image:"1f6b6-1f3fb.png",sheet_x:26,sheet_y:27,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F6B6-1F3FC",image:"1f6b6-1f3fc.png",sheet_x:26,sheet_y:28,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F6B6-1F3FD",image:"1f6b6-1f3fd.png",sheet_x:26,sheet_y:29,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F6B6-1F3FE",image:"1f6b6-1f3fe.png",sheet_x:26,sheet_y:30,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F6B6-1F3FF",image:"1f6b6-1f3ff.png",sheet_x:26,sheet_y:31,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F6B6-200D-2642-FE0F",keywords:["walking_man","human","feet","steps"],sheet:[26,26]},"flag-tt":{name:"Trinidad Tobago",unified:"1F1F9-1F1F9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["trinidad_tobago","trinidad","tobago","flag","nation","country","banner"],sheet:[35,47]},"flag-tn":{name:"Tunisia",unified:"1F1F9-1F1F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tunisia","tn","flag","nation","country","banner"],sheet:[35,44]},"woman-running":{name:"Woman Running",unified:"1F3C3-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C3-1F3FB-200D-2640-FE0F",image:"1f3c3-1f3fb-200d-2640-fe0f.png",sheet_x:39,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C3-1F3FC-200D-2640-FE0F",image:"1f3c3-1f3fc-200d-2640-fe0f.png",sheet_x:39,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C3-1F3FD-200D-2640-FE0F",image:"1f3c3-1f3fd-200d-2640-fe0f.png",sheet_x:39,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C3-1F3FE-200D-2640-FE0F",image:"1f3c3-1f3fe-200d-2640-fe0f.png",sheet_x:39,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C3-1F3FF-200D-2640-FE0F",image:"1f3c3-1f3ff-200d-2640-fe0f.png",sheet_x:39,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},keywords:["running_woman","woman","walking","exercise","race","running","female"],sheet:[39,37]},sound:{name:"Speaker with One Sound Wave",unified:"1F509",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sound","volume","speaker","broadcast"],sheet:[19,23]},runner:{name:"Runner",unified:"1F3C3",short_names:["running"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,skin_variations:{"1F3FB":{unified:"1F3C3-1F3FB",image:"1f3c3-1f3fb.png",sheet_x:8,sheet_y:36,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FC":{unified:"1F3C3-1F3FC",image:"1f3c3-1f3fc.png",sheet_x:8,sheet_y:37,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FD":{unified:"1F3C3-1F3FD",image:"1f3c3-1f3fd.png",sheet_x:8,sheet_y:38,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FE":{unified:"1F3C3-1F3FE",image:"1f3c3-1f3fe.png",sheet_x:8,sheet_y:39,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true},"1F3FF":{unified:"1F3C3-1F3FF",image:"1f3c3-1f3ff.png",sheet_x:8,sheet_y:40,added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true}},obsoleted_by:"1F3C3-200D-2642-FE0F",keywords:["running_man","man","walking","exercise","race","running"],sheet:[8,35]},"flag-tr":{name:"TR",unified:"1F1F9-1F1F7",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tr","turkey","flag","nation","country","banner"],sheet:[35,46]},loud_sound:{name:"Speaker with Three Sound Waves",unified:"1F50A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["loud_sound","volume","noise","noisy","speaker","broadcast"],sheet:[19,24]},"flag-tm":{name:"Turkmenistan",unified:"1F1F9-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["turkmenistan","flag","nation","country","banner"],sheet:[35,43]},couple:{name:"Man and Woman Holding Hands",unified:"1F46B",short_names:["man_and_woman_holding_hands"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["couple","pair","people","human","love","date","dating","like","affection","valentines","marriage"],sheet:[14,21]},bell:{name:"Bell",unified:"1F514",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bell","sound","notification","christmas","xmas","chime"],sheet:[19,34]},no_bell:{name:"Bell with Cancellation Stroke",unified:"1F515",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["no_bell","sound","volume","mute","quiet","silent"],sheet:[19,35]},two_women_holding_hands:{name:"Two Women Holding Hands",unified:"1F46D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["two_women_holding_hands","pair","friendship","couple","love","like","female","people","human"],sheet:[14,23]},"flag-tc":{name:"Turks Caicos Islands",unified:"1F1F9-1F1E8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["turks_caicos_islands","turks","caicos","islands","flag","nation","country","banner"],sheet:[35,35]},"flag-tv":{name:"Tuvalu",unified:"1F1F9-1F1FB",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tuvalu","flag","nation","country","banner"],sheet:[35,48]},two_men_holding_hands:{name:"Two Men Holding Hands",unified:"1F46C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["two_men_holding_hands","pair","couple","love","like","bromance","friendship","people","human"],sheet:[14,22]},mega:{name:"Cheering Megaphone",unified:"1F4E3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mega","sound","speaker","volume"],sheet:[18,35]},"flag-ug":{name:"Uganda",unified:"1F1FA-1F1EC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["uganda","ug","flag","nation","country","banner"],sheet:[36,3]},loudspeaker:{name:"Public Address Loudspeaker",unified:"1F4E2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["loudspeaker","volume","sound"],sheet:[18,34]},couple_with_heart:{name:"Couple with Heart",unified:"1F491",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,obsoleted_by:"1F469-200D-2764-FE0F-200D-1F468",keywords:["couple_with_heart_woman_man","pair","love","like","affection","human","dating","valentines","marriage"],sheet:[16,46]},"woman-heart-woman":{name:"Woman Heart Woman",unified:"1F469-200D-2764-FE0F-200D-1F469",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,keywords:["couple_with_heart_woman_woman","pair","love","like","affection","human","dating","valentines","marriage"],sheet:[42,12]},"flag-ua":{name:"Ukraine",unified:"1F1FA-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["ukraine","ua","flag","nation","country","banner"],sheet:[36,2]},"eye-in-speech-bubble":{name:"Eye in Speech Bubble",unified:"1F441-FE0F-200D-1F5E8-FE0F",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:false,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,sheet:[41,0]},"man-heart-man":{name:"Man Heart Man",unified:"1F468-200D-2764-FE0F-200D-1F468",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,keywords:["couple_with_heart_man_man","pair","love","like","affection","human","dating","valentines","marriage"],sheet:[41,32]},"flag-ae":{name:"United Arab Emirates",unified:"1F1E6-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["united_arab_emirates","united","arab","emirates","flag","nation","country","banner"],sheet:[31,13]},speech_balloon:{name:"Speech Balloon",unified:"1F4AC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["speech_balloon","bubble","words","message","talk","chatting"],sheet:[17,29]},"flag-gb":{name:"UK",unified:"1F1EC-1F1E7",short_names:["gb","uk"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["uk","united","kingdom","great","britain","northern","ireland","flag","nation","country","banner","british","UK","english","england","union jack"],sheet:[32,43]},couplekiss:{name:"Kiss",unified:"1F48F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,obsoleted_by:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",keywords:["couplekiss_man_woman","pair","valentines","love","like","dating","marriage"],sheet:[16,44]},left_speech_bubble:{name:"Left Speech Bubble",unified:"1F5E8",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["left_speech_bubble","words","message","talk","chatting"],sheet:[22,24]},"flag-us":{name:"US",unified:"1F1FA-1F1F8",short_names:["us"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["us","united","states","america","flag","nation","country","banner"],sheet:[36,6]},thought_balloon:{name:"Thought Balloon",unified:"1F4AD",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["thought_balloon","bubble","cloud","speech","thinking","dream"],sheet:[17,30]},"woman-kiss-woman":{name:"Woman Kiss Woman",unified:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F469",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,keywords:["couplekiss_woman_woman","pair","valentines","love","like","dating","marriage"],sheet:[42,14]},"man-kiss-man":{name:"Man Kiss Man",unified:"1F468-200D-2764-FE0F-200D-1F48B-200D-1F468",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,keywords:["couplekiss_man_man","pair","valentines","love","like","dating","marriage"],sheet:[41,33]},right_anger_bubble:{name:"Right Anger Bubble",unified:"1F5EF",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["right_anger_bubble","caption","speech","thinking","mad"],sheet:[22,25]},"flag-vi":{name:"Us Virgin Islands",unified:"1F1FB-1F1EE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["us_virgin_islands","virgin","islands","us","flag","nation","country","banner"],sheet:[36,13]},"flag-uy":{name:"Uruguay",unified:"1F1FA-1F1FE",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["uruguay","uy","flag","nation","country","banner"],sheet:[36,7]},family:{name:"Family",unified:"1F46A",short_names:["man-woman-boy"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,obsoleted_by:"1F468-200D-1F469-200D-1F466",keywords:["family_man_woman_boy","home","parents","child","mom","dad","father","mother","people","human"],sheet:[14,20]},spades:{name:"Black Spade Suit",unified:"2660",variations:["2660-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[1,32]},"man-woman-girl":{name:"Man Woman Girl",unified:"1F468-200D-1F469-200D-1F467",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_man_woman_girl","home","parents","people","human","child"],sheet:[41,11]},clubs:{name:"Black Club Suit",unified:"2663",variations:["2663-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[1,33]},"flag-uz":{name:"Uzbekistan",unified:"1F1FA-1F1FF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["uzbekistan","uz","flag","nation","country","banner"],sheet:[36,8]},"man-woman-girl-boy":{name:"Man Woman Girl Boy",unified:"1F468-200D-1F469-200D-1F467-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_man_woman_girl_boy","home","parents","people","human","children"],sheet:[41,12]},"flag-vu":{name:"Vanuatu",unified:"1F1FB-1F1FA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["vanuatu","vu","flag","nation","country","banner"],sheet:[36,15]},hearts:{name:"Black Heart Suit",unified:"2665",variations:["2665-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[1,34]},"flag-va":{name:"Vatican City",unified:"1F1FB-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["vatican_city","vatican","city","flag","nation","country","banner"],sheet:[36,9]},"man-woman-boy-boy":{name:"Man Woman Boy Boy",unified:"1F468-200D-1F469-200D-1F466-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_man_woman_boy_boy","home","parents","people","human","children"],sheet:[41,10]},diamonds:{name:"Black Diamond Suit",unified:"2666",variations:["2666-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[1,35]},"man-woman-girl-girl":{name:"Man Woman Girl Girl",unified:"1F468-200D-1F469-200D-1F467-200D-1F467",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_man_woman_girl_girl","home","parents","people","human","children"],sheet:[41,13]},black_joker:{name:"Playing Card Black Joker",unified:"1F0CF",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["black_joker","poker","cards","game","play","magic"],sheet:[4,2]},"flag-ve":{name:"Venezuela",unified:"1F1FB-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["venezuela","ve","bolivarian","republic","flag","nation","country","banner"],sheet:[36,11]},"woman-woman-boy":{name:"Woman Woman Boy",unified:"1F469-200D-1F469-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_woman_woman_boy","home","parents","people","human","children"],sheet:[41,37]},flower_playing_cards:{name:"Flower Playing Cards",unified:"1F3B4",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["flower_playing_cards","game","sunset","red"],sheet:[8,15]},"flag-vn":{name:"Vietnam",unified:"1F1FB-1F1F3",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["vietnam","viet","nam","flag","nation","country","banner"],sheet:[36,14]},"woman-woman-girl":{name:"Woman Woman Girl",unified:"1F469-200D-1F469-200D-1F467",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_woman_woman_girl","home","parents","people","human","children"],sheet:[41,39]},"flag-wf":{name:"Wallis Futuna",unified:"1F1FC-1F1EB",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["wallis_futuna","wallis","futuna","flag","nation","country","banner"],sheet:[36,16]},mahjong:{name:"Mahjong Tile Red Dragon",unified:"1F004",variations:["1F004-FE0F"],added_in:"5.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mahjong","game","play","chinese","kanji"],sheet:[4,1]},"woman-woman-girl-boy":{name:"Woman Woman Girl Boy",unified:"1F469-200D-1F469-200D-1F467-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_woman_woman_girl_boy","home","parents","people","human","children"],sheet:[41,40]},"flag-eh":{name:"Western Sahara",unified:"1F1EA-1F1ED",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["western_sahara","western","sahara","flag","nation","country","banner"],sheet:[32,31]},"clock1":{name:"Clock Face One Oclock",unified:"1F550",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock1","time","late","early","schedule"],sheet:[20,33]},"woman-woman-boy-boy":{name:"Woman Woman Boy Boy",unified:"1F469-200D-1F469-200D-1F466-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_woman_woman_boy_boy","home","parents","people","human","children"],sheet:[41,38]},"clock2":{name:"Clock Face Two Oclock",unified:"1F551",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock2","time","late","early","schedule"],sheet:[20,34]},"flag-ye":{name:"Yemen",unified:"1F1FE-1F1EA",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["yemen","ye","flag","nation","country","banner"],sheet:[36,19]},"clock3":{name:"Clock Face Three Oclock",unified:"1F552",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock3","time","late","early","schedule"],sheet:[20,35]},"woman-woman-girl-girl":{name:"Woman Woman Girl Girl",unified:"1F469-200D-1F469-200D-1F467-200D-1F467",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_woman_woman_girl_girl","home","parents","people","human","children"],sheet:[41,41]},"flag-zm":{name:"Zambia",unified:"1F1FF-1F1F2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["zambia","zm","flag","nation","country","banner"],sheet:[36,22]},"clock4":{name:"Clock Face Four Oclock",unified:"1F553",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock4","time","late","early","schedule"],sheet:[20,36]},"man-man-boy":{name:"Man Man Boy",unified:"1F468-200D-1F468-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_man_man_boy","home","parents","people","human","children"],sheet:[41,4]},"flag-zw":{name:"Zimbabwe",unified:"1F1FF-1F1FC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["zimbabwe","zw","flag","nation","country","banner"],sheet:[36,23]},"clock5":{name:"Clock Face Five Oclock",unified:"1F554",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock5","time","late","early","schedule"],sheet:[20,37]},"flag-ac":{name:"Regional Indicator Symbol Letters AC",unified:"1F1E6-1F1E8",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[31,11]},"man-man-girl":{name:"Man Man Girl",unified:"1F468-200D-1F468-200D-1F467",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_man_man_girl","home","parents","people","human","children"],sheet:[41,6]},"flag-bv":{name:"Regional Indicator Symbol Letters BV",unified:"1F1E7-1F1FB",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[31,45]},"clock6":{name:"Clock Face Six Oclock",unified:"1F555",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock6","time","late","early","schedule","dawn","dusk"],sheet:[20,38]},"man-man-girl-boy":{name:"Man Man Girl Boy",unified:"1F468-200D-1F468-200D-1F467-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_man_man_girl_boy","home","parents","people","human","children"],sheet:[41,7]},"clock7":{name:"Clock Face Seven Oclock",unified:"1F556",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock7","time","late","early","schedule"],sheet:[20,39]},"flag-cp":{name:"Regional Indicator Symbol Letters CP",unified:"1F1E8-1F1F5",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,sheet:[32,12]},"man-man-boy-boy":{name:"Man Man Boy Boy",unified:"1F468-200D-1F468-200D-1F466-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_man_man_boy_boy","home","parents","people","human","children"],sheet:[41,5]},"flag-dg":{name:"Regional Indicator Symbol Letters DG",unified:"1F1E9-1F1EC",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[32,21]},"clock8":{name:"Clock Face Eight Oclock",unified:"1F557",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock8","time","late","early","schedule"],sheet:[20,40]},"man-man-girl-girl":{name:"Man Man Girl Girl",unified:"1F468-200D-1F468-200D-1F467-200D-1F467",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["family_man_man_girl_girl","home","parents","people","human","children"],sheet:[41,8]},"woman-boy":{name:"Woman Boy",unified:"1F469-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,keywords:["family_woman_boy","home","parent","people","human","child"],sheet:[38,48]},"flag-ea":{name:"Regional Indicator Symbol Letters EA",unified:"1F1EA-1F1E6",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[32,27]},"clock9":{name:"Clock Face Nine Oclock",unified:"1F558",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock9","time","late","early","schedule"],sheet:[20,41]},"woman-girl":{name:"Woman Girl",unified:"1F469-200D-1F467",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,keywords:["family_woman_girl","home","parent","people","human","child"],sheet:[39,0]},"clock10":{name:"Clock Face Ten Oclock",unified:"1F559",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock10","time","late","early","schedule"],sheet:[20,42]},"flag-hm":{name:"Regional Indicator Symbol Letters HM",unified:"1F1ED-1F1F2",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[33,13]},"clock11":{name:"Clock Face Eleven Oclock",unified:"1F55A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock11","time","late","early","schedule"],sheet:[20,43]},"woman-girl-boy":{name:"Woman Girl Boy",unified:"1F469-200D-1F467-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,keywords:["family_woman_girl_boy","home","parent","people","human","children"],sheet:[41,35]},"flag-mf":{name:"Regional Indicator Symbol Letters MF",unified:"1F1F2-1F1EB",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[34,10]},"woman-boy-boy":{name:"Woman Boy Boy",unified:"1F469-200D-1F466-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,keywords:["family_woman_boy_boy","home","parent","people","human","children"],sheet:[41,34]},"flag-sj":{name:"Regional Indicator Symbol Letters SJ",unified:"1F1F8-1F1EF",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[35,21]},"clock12":{name:"Clock Face Twelve Oclock",unified:"1F55B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock12","time","noon","midnight","midday","late","early","schedule"],sheet:[20,44]},"clock130":{name:"Clock Face One-Thirty",unified:"1F55C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock130","time","late","early","schedule"],sheet:[20,45]},"flag-ta":{name:"Regional Indicator Symbol Letters TA",unified:"1F1F9-1F1E6",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[35,34]},"woman-girl-girl":{name:"Woman Girl Girl",unified:"1F469-200D-1F467-200D-1F467",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,keywords:["family_woman_girl_girl","home","parent","people","human","children"],sheet:[41,36]},"flag-um":{name:"Regional Indicator Symbol Letters UM",unified:"1F1FA-1F1F2",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,sheet:[36,4]},"man-boy":{name:"Man Boy",unified:"1F468-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,keywords:["family_man_boy","home","parent","people","human","child"],sheet:[37,17]},"clock230":{name:"Clock Face Two-Thirty",unified:"1F55D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock230","time","late","early","schedule"],sheet:[20,46]},"clock330":{name:"Clock Face Three-Thirty",unified:"1F55E",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock330","time","late","early","schedule"],sheet:[20,47]},"man-girl":{name:"Man Girl",unified:"1F468-200D-1F467",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,keywords:["family_man_girl","home","parent","people","human","child"],sheet:[37,18]},"flag-un":{name:"Regional Indicator Symbol Letters UN",unified:"1F1FA-1F1F3",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,sheet:[36,5]},"man-girl-boy":{name:"Man Girl Boy",unified:"1F468-200D-1F467-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,keywords:["family_man_girl_boy","home","parent","people","human","children"],sheet:[41,2]},"clock430":{name:"Clock Face Four-Thirty",unified:"1F55F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock430","time","late","early","schedule"],sheet:[20,48]},"clock530":{name:"Clock Face Five-Thirty",unified:"1F560",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock530","time","late","early","schedule"],sheet:[21,0]},"man-boy-boy":{name:"Man Boy Boy",unified:"1F468-200D-1F466-200D-1F466",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,keywords:["family_man_boy_boy","home","parent","people","human","children"],sheet:[41,1]},"clock630":{name:"Clock Face Six-Thirty",unified:"1F561",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock630","time","late","early","schedule"],sheet:[21,1]},"man-girl-girl":{name:"Man Girl Girl",unified:"1F468-200D-1F467-200D-1F467",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,keywords:["family_man_girl_girl","home","parent","people","human","children"],sheet:[41,3]},womans_clothes:{name:"Womans Clothes",unified:"1F45A",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["womans_clothes","fashion","shopping_bags","female"],sheet:[13,33]},"clock730":{name:"Clock Face Seven-Thirty",unified:"1F562",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock730","time","late","early","schedule"],sheet:[21,2]},shirt:{name:"T-Shirt",unified:"1F455",short_names:["tshirt"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tshirt","fashion","cloth","casual","shirt","tee"],sheet:[13,28]},"clock830":{name:"Clock Face Eight-Thirty",unified:"1F563",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock830","time","late","early","schedule"],sheet:[21,3]},jeans:{name:"Jeans",unified:"1F456",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["jeans","fashion","shopping"],sheet:[13,29]},"clock930":{name:"Clock Face Nine-Thirty",unified:"1F564",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock930","time","late","early","schedule"],sheet:[21,4]},"clock1030":{name:"Clock Face Ten-Thirty",unified:"1F565",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock1030","time","late","early","schedule"],sheet:[21,5]},necktie:{name:"Necktie",unified:"1F454",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["necktie","shirt","suitup","formal","fashion","cloth","business"],sheet:[13,27]},dress:{name:"Dress",unified:"1F457",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["dress","clothes","fashion","shopping"],sheet:[13,30]},"clock1130":{name:"Clock Face Eleven-Thirty",unified:"1F566",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock1130","time","late","early","schedule"],sheet:[21,6]},"clock1230":{name:"Clock Face Twelve-Thirty",unified:"1F567",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["clock1230","time","late","early","schedule"],sheet:[21,7]},bikini:{name:"Bikini",unified:"1F459",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["bikini","swimming","female","woman","girl","fashion","beach","summer"],sheet:[13,32]},kimono:{name:"Kimono",unified:"1F458",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["kimono","dress","fashion","women","female","japanese"],sheet:[13,31]},female_sign:{name:"Female Sign",unified:"2640",added_in:"1.1",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,sheet:[1,18]},high_heel:{name:"High-Heeled Shoe",unified:"1F460",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["high_heel","fashion","shoes","female","pumps","stiletto"],sheet:[13,39]},male_sign:{name:"Male Sign",unified:"2642",added_in:"1.1",has_img_apple:false,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,sheet:[1,19]},staff_of_aesculapius:{name:"Staff of Aesculapius",unified:"2695",added_in:"4.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,sheet:[1,42]},sandal:{name:"Womans Sandal",unified:"1F461",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["sandal","shoes","fashion","flip flops"],sheet:[13,40]},boot:{name:"Womans Boots",unified:"1F462",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["boot","shoes","fashion"],sheet:[13,41]},mans_shoe:{name:"Mans Shoe",unified:"1F45E",short_names:["shoe"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mans_shoe","fashion","male"],sheet:[13,37]},athletic_shoe:{name:"Athletic Shoe",unified:"1F45F",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["athletic_shoe","shoes","sports","sneakers"],sheet:[13,38]},womans_hat:{name:"Womans Hat",unified:"1F452",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["womans_hat","fashion","accessories","female","lady","spring"],sheet:[13,25]},tophat:{name:"Top Hat",unified:"1F3A9",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["tophat","magic","gentleman","classy","circus"],sheet:[8,4]},mortar_board:{name:"Graduation Cap",unified:"1F393",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["mortar_board","school","college","degree","university","graduation","cap","hat","legal","learn","education"],sheet:[7,36]},crown:{name:"Crown",unified:"1F451",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["crown","king","kod","leader","royalty","lord"],sheet:[13,24]},helmet_with_white_cross:{name:"Helmet with White Cross",unified:"26D1",added_in:"5.2",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["rescue_worker_helmet","construction","build"],sheet:[2,12]},school_satchel:{name:"School Satchel",unified:"1F392",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["school_satchel","student","education","bag","backpack"],sheet:[7,35]},pouch:{name:"Pouch",unified:"1F45D",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["pouch","bag","accessories","shopping"],sheet:[13,36]},purse:{name:"Purse",unified:"1F45B",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["purse","fashion","accessories","money","sales","shopping"],sheet:[13,34]},handbag:{name:"Handbag",unified:"1F45C",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["handbag","fashion","accessory","accessories","shopping"],sheet:[13,35]},briefcase:{name:"Briefcase",unified:"1F4BC",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["briefcase","business","documents","work","law","legal","job","career"],sheet:[17,45]},eyeglasses:{name:"Eyeglasses",unified:"1F453",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["eyeglasses","fashion","accessories","eyesight","nerdy","dork","geek"],sheet:[13,26]},dark_sunglasses:{name:"Dark Sunglasses",unified:"1F576",added_in:"7.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["dark_sunglasses","face","cool","accessories"],sheet:[21,23]},closed_umbrella:{name:"Closed Umbrella",unified:"1F302",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:true,keywords:["closed_umbrella","weather","rain","drizzle"],sheet:[4,35]},umbrella:{name:"Umbrella",unified:"2602",variations:["2602-FE0F"],added_in:"1.1",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,keywords:["open_umbrella","weather","spring"],sheet:[0,43]},"man-woman-boy":{name:"Man Woman Boy",unified:"1F468-200D-1F469-200D-1F466",short_names:["family"],has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:true,obsoletes:"1F46A",sheet:[41,9]},"woman-heart-man":{name:"Woman Heart Man",unified:"1F469-200D-2764-FE0F-200D-1F468",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoletes:"1F491",sheet:[42,11]},"woman-kiss-man":{name:"Woman Kiss Man",unified:"1F469-200D-2764-FE0F-200D-1F48B-200D-1F468",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:true,has_img_messenger:false,obsoletes:"1F48F",sheet:[42,13]},"male-police-officer":{name:"Male Police Officer",unified:"1F46E-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F46E-1F3FB-200D-2642-FE0F",image:"1f46e-1f3fb-200d-2642-fe0f.png",sheet_x:42,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F46E-1F3FC-200D-2642-FE0F",image:"1f46e-1f3fc-200d-2642-fe0f.png",sheet_x:42,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F46E-1F3FD-200D-2642-FE0F",image:"1f46e-1f3fd-200d-2642-fe0f.png",sheet_x:42,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F46E-1F3FE-200D-2642-FE0F",image:"1f46e-1f3fe-200d-2642-fe0f.png",sheet_x:42,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F46E-1F3FF-200D-2642-FE0F",image:"1f46e-1f3ff-200d-2642-fe0f.png",sheet_x:42,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F46E",sheet:[42,21]},"blond-haired-man":{name:"Blond Haired Man",unified:"1F471-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F471-1F3FB-200D-2642-FE0F",image:"1f471-1f3fb-200d-2642-fe0f.png",sheet_x:42,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F471-1F3FC-200D-2642-FE0F",image:"1f471-1f3fc-200d-2642-fe0f.png",sheet_x:42,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F471-1F3FD-200D-2642-FE0F",image:"1f471-1f3fd-200d-2642-fe0f.png",sheet_x:42,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F471-1F3FE-200D-2642-FE0F",image:"1f471-1f3fe-200d-2642-fe0f.png",sheet_x:42,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F471-1F3FF-200D-2642-FE0F",image:"1f471-1f3ff-200d-2642-fe0f.png",sheet_x:42,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F471",sheet:[42,35]},"man-wearing-turban":{name:"Man Wearing Turban",unified:"1F473-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F473-1F3FB-200D-2642-FE0F",image:"1f473-1f3fb-200d-2642-fe0f.png",sheet_x:42,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F473-1F3FC-200D-2642-FE0F",image:"1f473-1f3fc-200d-2642-fe0f.png",sheet_x:43,sheet_y:0,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F473-1F3FD-200D-2642-FE0F",image:"1f473-1f3fd-200d-2642-fe0f.png",sheet_x:43,sheet_y:1,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F473-1F3FE-200D-2642-FE0F",image:"1f473-1f3fe-200d-2642-fe0f.png",sheet_x:43,sheet_y:2,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F473-1F3FF-200D-2642-FE0F",image:"1f473-1f3ff-200d-2642-fe0f.png",sheet_x:43,sheet_y:3,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F473",sheet:[42,47]},"male-construction-worker":{name:"Male Construction Worker",unified:"1F477-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F477-1F3FB-200D-2642-FE0F",image:"1f477-1f3fb-200d-2642-fe0f.png",sheet_x:43,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F477-1F3FC-200D-2642-FE0F",image:"1f477-1f3fc-200d-2642-fe0f.png",sheet_x:43,sheet_y:12,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F477-1F3FD-200D-2642-FE0F",image:"1f477-1f3fd-200d-2642-fe0f.png",sheet_x:43,sheet_y:13,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F477-1F3FE-200D-2642-FE0F",image:"1f477-1f3fe-200d-2642-fe0f.png",sheet_x:43,sheet_y:14,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F477-1F3FF-200D-2642-FE0F",image:"1f477-1f3ff-200d-2642-fe0f.png",sheet_x:43,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F477",sheet:[43,10]},"male-guard":{name:"Male Guard",unified:"1F482-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F482-1F3FB-200D-2642-FE0F",image:"1f482-1f3fb-200d-2642-fe0f.png",sheet_x:43,sheet_y:35,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F482-1F3FC-200D-2642-FE0F",image:"1f482-1f3fc-200d-2642-fe0f.png",sheet_x:43,sheet_y:36,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F482-1F3FD-200D-2642-FE0F",image:"1f482-1f3fd-200d-2642-fe0f.png",sheet_x:43,sheet_y:37,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F482-1F3FE-200D-2642-FE0F",image:"1f482-1f3fe-200d-2642-fe0f.png",sheet_x:43,sheet_y:38,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F482-1F3FF-200D-2642-FE0F",image:"1f482-1f3ff-200d-2642-fe0f.png",sheet_x:43,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F482",sheet:[43,34]},"male-detective":{name:"Male Detective",unified:"1F575-FE0F-200D-2642-FE0F",added_in:"7.0",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F575-1F3FB-200D-2642-FE0F",image:"1f575-1f3fb-200d-2642-fe0f.png",sheet_x:44,sheet_y:22,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F575-1F3FC-200D-2642-FE0F",image:"1f575-1f3fc-200d-2642-fe0f.png",sheet_x:44,sheet_y:23,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F575-1F3FD-200D-2642-FE0F",image:"1f575-1f3fd-200d-2642-fe0f.png",sheet_x:44,sheet_y:24,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F575-1F3FE-200D-2642-FE0F",image:"1f575-1f3fe-200d-2642-fe0f.png",sheet_x:44,sheet_y:25,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F575-1F3FF-200D-2642-FE0F",image:"1f575-1f3ff-200d-2642-fe0f.png",sheet_x:44,sheet_y:26,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F575",sheet:[44,21]},"woman-with-bunny-ears-partying":{name:"Woman with Bunny Ears Partying",unified:"1F46F-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,obsoletes:"1F46F",sheet:[42,27]},"man-running":{name:"Man Running",unified:"1F3C3-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F3C3-1F3FB-200D-2642-FE0F",image:"1f3c3-1f3fb-200d-2642-fe0f.png",sheet_x:39,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F3C3-1F3FC-200D-2642-FE0F",image:"1f3c3-1f3fc-200d-2642-fe0f.png",sheet_x:39,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F3C3-1F3FD-200D-2642-FE0F",image:"1f3c3-1f3fd-200d-2642-fe0f.png",sheet_x:39,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F3C3-1F3FE-200D-2642-FE0F",image:"1f3c3-1f3fe-200d-2642-fe0f.png",sheet_x:39,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F3C3-1F3FF-200D-2642-FE0F",image:"1f3c3-1f3ff-200d-2642-fe0f.png",sheet_x:39,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F3C3",sheet:[39,43]},"woman-getting-massage":{name:"Woman Getting Massage",unified:"1F486-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F486-1F3FB-200D-2640-FE0F",image:"1f486-1f3fb-200d-2640-fe0f.png",sheet_x:43,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F486-1F3FC-200D-2640-FE0F",image:"1f486-1f3fc-200d-2640-fe0f.png",sheet_x:43,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F486-1F3FD-200D-2640-FE0F",image:"1f486-1f3fd-200d-2640-fe0f.png",sheet_x:43,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F486-1F3FE-200D-2640-FE0F",image:"1f486-1f3fe-200d-2640-fe0f.png",sheet_x:43,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F486-1F3FF-200D-2640-FE0F",image:"1f486-1f3ff-200d-2640-fe0f.png",sheet_x:43,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F486",sheet:[43,40]},"woman-getting-haircut":{name:"Woman Getting Haircut",unified:"1F487-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F487-1F3FB-200D-2640-FE0F",image:"1f487-1f3fb-200d-2640-fe0f.png",sheet_x:44,sheet_y:4,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F487-1F3FC-200D-2640-FE0F",image:"1f487-1f3fc-200d-2640-fe0f.png",sheet_x:44,sheet_y:5,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F487-1F3FD-200D-2640-FE0F",image:"1f487-1f3fd-200d-2640-fe0f.png",sheet_x:44,sheet_y:6,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F487-1F3FE-200D-2640-FE0F",image:"1f487-1f3fe-200d-2640-fe0f.png",sheet_x:44,sheet_y:7,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F487-1F3FF-200D-2640-FE0F",image:"1f487-1f3ff-200d-2640-fe0f.png",sheet_x:44,sheet_y:8,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F487",sheet:[44,3]},"man-walking":{name:"Man Walking",unified:"1F6B6-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F6B6-1F3FB-200D-2642-FE0F",image:"1f6b6-1f3fb-200d-2642-fe0f.png",sheet_x:46,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F6B6-1F3FC-200D-2642-FE0F",image:"1f6b6-1f3fc-200d-2642-fe0f.png",sheet_x:46,sheet_y:45,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F6B6-1F3FD-200D-2642-FE0F",image:"1f6b6-1f3fd-200d-2642-fe0f.png",sheet_x:46,sheet_y:46,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F6B6-1F3FE-200D-2642-FE0F",image:"1f6b6-1f3fe-200d-2642-fe0f.png",sheet_x:46,sheet_y:47,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F6B6-1F3FF-200D-2642-FE0F",image:"1f6b6-1f3ff-200d-2642-fe0f.png",sheet_x:46,sheet_y:48,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F6B6",sheet:[46,43]},"woman-tipping-hand":{name:"Woman Tipping Hand",unified:"1F481-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F481-1F3FB-200D-2640-FE0F",image:"1f481-1f3fb-200d-2640-fe0f.png",sheet_x:43,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F481-1F3FC-200D-2640-FE0F",image:"1f481-1f3fc-200d-2640-fe0f.png",sheet_x:43,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F481-1F3FD-200D-2640-FE0F",image:"1f481-1f3fd-200d-2640-fe0f.png",sheet_x:43,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F481-1F3FE-200D-2640-FE0F",image:"1f481-1f3fe-200d-2640-fe0f.png",sheet_x:43,sheet_y:20,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F481-1F3FF-200D-2640-FE0F",image:"1f481-1f3ff-200d-2640-fe0f.png",sheet_x:43,sheet_y:21,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F481",sheet:[43,16]},"woman-gesturing-no":{name:"Woman Gesturing No",unified:"1F645-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F645-1F3FB-200D-2640-FE0F",image:"1f645-1f3fb-200d-2640-fe0f.png",sheet_x:44,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F645-1F3FC-200D-2640-FE0F",image:"1f645-1f3fc-200d-2640-fe0f.png",sheet_x:44,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F645-1F3FD-200D-2640-FE0F",image:"1f645-1f3fd-200d-2640-fe0f.png",sheet_x:44,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F645-1F3FE-200D-2640-FE0F",image:"1f645-1f3fe-200d-2640-fe0f.png",sheet_x:44,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F645-1F3FF-200D-2640-FE0F",image:"1f645-1f3ff-200d-2640-fe0f.png",sheet_x:44,sheet_y:32,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F645",sheet:[44,27]},"woman-gesturing-ok":{name:"Woman Gesturing Ok",unified:"1F646-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F646-1F3FB-200D-2640-FE0F",image:"1f646-1f3fb-200d-2640-fe0f.png",sheet_x:44,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F646-1F3FC-200D-2640-FE0F",image:"1f646-1f3fc-200d-2640-fe0f.png",sheet_x:44,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F646-1F3FD-200D-2640-FE0F",image:"1f646-1f3fd-200d-2640-fe0f.png",sheet_x:44,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F646-1F3FE-200D-2640-FE0F",image:"1f646-1f3fe-200d-2640-fe0f.png",sheet_x:44,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F646-1F3FF-200D-2640-FE0F",image:"1f646-1f3ff-200d-2640-fe0f.png",sheet_x:44,sheet_y:44,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F646",sheet:[44,39]},"man-bowing":{name:"Man Bowing",unified:"1F647-200D-2642-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F647-1F3FB-200D-2642-FE0F",image:"1f647-1f3fb-200d-2642-fe0f.png",sheet_x:45,sheet_y:9,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F647-1F3FC-200D-2642-FE0F",image:"1f647-1f3fc-200d-2642-fe0f.png",sheet_x:45,sheet_y:10,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F647-1F3FD-200D-2642-FE0F",image:"1f647-1f3fd-200d-2642-fe0f.png",sheet_x:45,sheet_y:11,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F647-1F3FE-200D-2642-FE0F",image:"1f647-1f3fe-200d-2642-fe0f.png",sheet_x:45,sheet_y:12,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F647-1F3FF-200D-2642-FE0F",image:"1f647-1f3ff-200d-2642-fe0f.png",sheet_x:45,sheet_y:13,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F647",sheet:[45,8]},"woman-raising-hand":{name:"Woman Raising Hand",unified:"1F64B-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64B-1F3FB-200D-2640-FE0F",image:"1f64b-1f3fb-200d-2640-fe0f.png",sheet_x:45,sheet_y:15,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64B-1F3FC-200D-2640-FE0F",image:"1f64b-1f3fc-200d-2640-fe0f.png",sheet_x:45,sheet_y:16,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64B-1F3FD-200D-2640-FE0F",image:"1f64b-1f3fd-200d-2640-fe0f.png",sheet_x:45,sheet_y:17,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64B-1F3FE-200D-2640-FE0F",image:"1f64b-1f3fe-200d-2640-fe0f.png",sheet_x:45,sheet_y:18,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64B-1F3FF-200D-2640-FE0F",image:"1f64b-1f3ff-200d-2640-fe0f.png",sheet_x:45,sheet_y:19,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F64B",sheet:[45,14]},"woman-frowning":{name:"Woman Frowning",unified:"1F64D-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64D-1F3FB-200D-2640-FE0F",image:"1f64d-1f3fb-200d-2640-fe0f.png",sheet_x:45,sheet_y:27,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64D-1F3FC-200D-2640-FE0F",image:"1f64d-1f3fc-200d-2640-fe0f.png",sheet_x:45,sheet_y:28,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64D-1F3FD-200D-2640-FE0F",image:"1f64d-1f3fd-200d-2640-fe0f.png",sheet_x:45,sheet_y:29,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64D-1F3FE-200D-2640-FE0F",image:"1f64d-1f3fe-200d-2640-fe0f.png",sheet_x:45,sheet_y:30,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64D-1F3FF-200D-2640-FE0F",image:"1f64d-1f3ff-200d-2640-fe0f.png",sheet_x:45,sheet_y:31,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F64D",sheet:[45,26]},"woman-pouting":{name:"Woman Pouting",unified:"1F64E-200D-2640-FE0F",has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false,skin_variations:{"1F3FB":{unified:"1F64E-1F3FB-200D-2640-FE0F",image:"1f64e-1f3fb-200d-2640-fe0f.png",sheet_x:45,sheet_y:39,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FC":{unified:"1F64E-1F3FC-200D-2640-FE0F",image:"1f64e-1f3fc-200d-2640-fe0f.png",sheet_x:45,sheet_y:40,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FD":{unified:"1F64E-1F3FD-200D-2640-FE0F",image:"1f64e-1f3fd-200d-2640-fe0f.png",sheet_x:45,sheet_y:41,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FE":{unified:"1F64E-1F3FE-200D-2640-FE0F",image:"1f64e-1f3fe-200d-2640-fe0f.png",sheet_x:45,sheet_y:42,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false},"1F3FF":{unified:"1F64E-1F3FF-200D-2640-FE0F",image:"1f64e-1f3ff-200d-2640-fe0f.png",sheet_x:45,sheet_y:43,has_img_apple:true,has_img_google:false,has_img_twitter:true,has_img_emojione:false,has_img_facebook:false,has_img_messenger:false}},obsoletes:"1F64E",sheet:[45,38]}},skins:{"skin-tone-2":{name:"Emoji Modifier Fitzpatrick Type-1-2",unified:"1F3FB",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,sheet:[10,20]},"skin-tone-3":{name:"Emoji Modifier Fitzpatrick Type-3",unified:"1F3FC",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,sheet:[10,21]},"skin-tone-4":{name:"Emoji Modifier Fitzpatrick Type-4",unified:"1F3FD",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,sheet:[10,22]},"skin-tone-5":{name:"Emoji Modifier Fitzpatrick Type-5",unified:"1F3FE",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,sheet:[10,23]},"skin-tone-6":{name:"Emoji Modifier Fitzpatrick Type-6",unified:"1F3FF",added_in:"8.0",has_img_apple:true,has_img_google:true,has_img_twitter:true,has_img_emojione:true,has_img_facebook:true,has_img_messenger:false,sheet:[10,24]}},short_names:{red_car:"car",satisfied:"laughing",telephone:"phone",cooking:"fried_egg",honeybee:"bee",sailboat:"boat",cn:"flag-cn",flipper:"dolphin",knife:"hocho",poop:"hankey",shit:"hankey",fr:"flag-fr",heavy_exclamation_mark:"exclamation",paw_prints:"feet",de:"flag-de",thumbsup:"+1",thumbsdown:"-1",punch:"facepunch",lantern:"izakaya_lantern",envelope:"email",sign_of_the_horns:"the_horns",it:"flag-it",jp:"flag-jp",raised_hand:"hand",waxing_gibbous_moon:"moon",reversed_hand_with_middle_finger_extended:"middle_finger",collision:"boom",sun_small_cloud:"mostly_sunny",sun_behind_cloud:"barely_sunny",sun_behind_rain_cloud:"partly_sunny_rain",lightning_cloud:"lightning",open_book:"book",tornado_cloud:"tornado",pencil:"memo",ru:"flag-ru",kr:"flag-kr",es:"flag-es",running:"runner",man_and_woman_holding_hands:"couple",gb:"flag-gb",uk:"flag-gb",us:"flag-us","man-woman-boy":"family",tshirt:"shirt",shoe:"mans_shoe",family:"man-woman-boy"}};
},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _buildSearch = require('../utils/build-search');

var _buildSearch2 = _interopRequireDefault(_buildSearch);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uncompress(list) {
  for (var short_name in list) {
    var datum = list[short_name];

    if (!datum.short_names) datum.short_names = [];
    datum.short_names.unshift(short_name);

    datum.sheet_x = datum.sheet[0];
    datum.sheet_y = datum.sheet[1];
    delete datum.sheet;

    if (!datum.text) datum.text = '';
    if (datum.added_in !== null && !datum.added_in) datum.added_in = '6.0';

    datum.search = (0, _buildSearch2.default)({
      short_names: datum.short_names,
      name: datum.name,
      keywords: datum.keywords,
      emoticons: datum.emoticons
    });
  }
}

uncompress(_data2.default.emojis);
uncompress(_data2.default.skins);

exports.default = _data2.default;
},{"../utils/build-search":19,"./data":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frequently = exports.store = exports.emojiIndex = exports.Category = exports.Emoji = exports.Picker = undefined;

var _components = require('./components');

Object.defineProperty(exports, 'Picker', {
  enumerable: true,
  get: function get() {
    return _components.Picker;
  }
});
Object.defineProperty(exports, 'Emoji', {
  enumerable: true,
  get: function get() {
    return _components.Emoji;
  }
});
Object.defineProperty(exports, 'Category', {
  enumerable: true,
  get: function get() {
    return _components.Category;
  }
});

var _emojiIndex = require('./utils/emoji-index');

var _emojiIndex2 = _interopRequireDefault(_emojiIndex);

var _store = require('./utils/store');

var _store2 = _interopRequireDefault(_store);

var _frequently = require('./utils/frequently');

var _frequently2 = _interopRequireDefault(_frequently);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.emojiIndex = _emojiIndex2.default;
exports.store = _store2.default;
exports.frequently = _frequently2.default;
},{"./components":4,"./utils/emoji-index":20,"./utils/frequently":21,"./utils/store":23}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Object = Object;

exports.default = function createClass() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      _Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Object = Object;

exports.default = _Object.assign || function (target) {
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
},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inherits;
var _Object = Object;

function inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }

  subClass.prototype = _Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) {
    _Object.setPrototypeOf ? _Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
}
},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Object = Object;

exports.default = _Object.getPrototypeOf || function (O) {
  O = Object(O);

  if (typeof O.constructor === 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? Object.prototype : null;
};
},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = possibleConstructorReturn;
function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _String = String;

exports.default = _String.fromCodePoint || function stringFromCodePoint() {
  var MAX_SIZE = 0x4000;
  var codeUnits = [];
  var highSurrogate;
  var lowSurrogate;
  var index = -1;
  var length = arguments.length;
  if (!length) {
    return '';
  }
  var result = '';
  while (++index < length) {
    var codePoint = Number(arguments[index]);
    if (!isFinite(codePoint) || // `NaN`, `+Infinity`, or `-Infinity`
    codePoint < 0 || // not a valid Unicode code point
    codePoint > 0x10ffff || // not a valid Unicode code point
    Math.floor(codePoint) != codePoint // not an integer
    ) {
        throw RangeError('Invalid code point: ' + codePoint);
      }
    if (codePoint <= 0xffff) {
      // BMP code point
      codeUnits.push(codePoint);
    } else {
      // Astral code point; split in surrogate halves
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = codePoint % 0x400 + 0xdc00;
      codeUnits.push(highSurrogate, lowSurrogate);
    }
    if (index + 1 === length || codeUnits.length > MAX_SIZE) {
      result += String.fromCharCode.apply(null, codeUnits);
      codeUnits.length = 0;
    }
  }
  return result;
};
},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var SVGs = {
  Activity: "<path d=\"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12m9.949 11H17.05c.224-2.527 1.232-4.773 1.968-6.113A9.966 9.966 0 0 1 21.949 11M13 11V2.051a9.945 9.945 0 0 1 4.432 1.564c-.858 1.491-2.156 4.22-2.392 7.385H13zm-2 0H8.961c-.238-3.165-1.536-5.894-2.393-7.385A9.95 9.95 0 0 1 11 2.051V11zm0 2v8.949a9.937 9.937 0 0 1-4.432-1.564c.857-1.492 2.155-4.221 2.393-7.385H11zm4.04 0c.236 3.164 1.534 5.893 2.392 7.385A9.92 9.92 0 0 1 13 21.949V13h2.04zM4.982 4.887C5.718 6.227 6.726 8.473 6.951 11h-4.9a9.977 9.977 0 0 1 2.931-6.113M2.051 13h4.9c-.226 2.527-1.233 4.771-1.969 6.113A9.972 9.972 0 0 1 2.051 13m16.967 6.113c-.735-1.342-1.744-3.586-1.968-6.113h4.899a9.961 9.961 0 0 1-2.931 6.113\"/>",

  Custom: "<g transform=\"translate(2.000000, 1.000000)\"><rect id=\"Rectangle\" x=\"8\" y=\"0\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect><rect id=\"Rectangle\" transform=\"translate(9.843, 10.549) rotate(-60) translate(-9.843, -10.549) \" x=\"8.343\" y=\"0.049\" width=\"3\" height=\"21\" rx=\"1.5\"></rect></g>",

  Flags: "<path d=\"M0 0l6.084 24H8L1.916 0zM21 5h-4l-1-4H4l3 12h3l1 4h13L21 5zM6.563 3h7.875l2 8H8.563l-2-8zm8.832 10l-2.856 1.904L12.063 13h3.332zM19 13l-1.5-6h1.938l2 8H16l3-2z\"/>",

  Foods: "<path d=\"M17 4.978c-1.838 0-2.876.396-3.68.934.513-1.172 1.768-2.934 4.68-2.934a1 1 0 0 0 0-2c-2.921 0-4.629 1.365-5.547 2.512-.064.078-.119.162-.18.244C11.73 1.838 10.798.023 9.207.023 8.579.022 7.85.306 7 .978 5.027 2.54 5.329 3.902 6.492 4.999 3.609 5.222 0 7.352 0 12.969c0 4.582 4.961 11.009 9 11.009 1.975 0 2.371-.486 3-1 .629.514 1.025 1 3 1 4.039 0 9-6.418 9-11 0-5.953-4.055-8-7-8M8.242 2.546c.641-.508.943-.523.965-.523.426.169.975 1.405 1.357 3.055-1.527-.629-2.741-1.352-2.98-1.846.059-.112.241-.356.658-.686M15 21.978c-1.08 0-1.21-.109-1.559-.402l-.176-.146c-.367-.302-.816-.452-1.266-.452s-.898.15-1.266.452l-.176.146c-.347.292-.477.402-1.557.402-2.813 0-7-5.389-7-9.009 0-5.823 4.488-5.991 5-5.991 1.939 0 2.484.471 3.387 1.251l.323.276a1.995 1.995 0 0 0 2.58 0l.323-.276c.902-.78 1.447-1.251 3.387-1.251.512 0 5 .168 5 6 0 3.617-4.187 9-7 9\"/>",

  Nature: "<path d=\"M15.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 15.5 8M8.5 8a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 8.5 8\"/><path d=\"M18.933 0h-.027c-.97 0-2.138.787-3.018 1.497-1.274-.374-2.612-.51-3.887-.51-1.285 0-2.616.133-3.874.517C7.245.79 6.069 0 5.093 0h-.027C3.352 0 .07 2.67.002 7.026c-.039 2.479.276 4.238 1.04 5.013.254.258.882.677 1.295.882.191 3.177.922 5.238 2.536 6.38.897.637 2.187.949 3.2 1.102C8.04 20.6 8 20.795 8 21c0 1.773 2.35 3 4 3 1.648 0 4-1.227 4-3 0-.201-.038-.393-.072-.586 2.573-.385 5.435-1.877 5.925-7.587.396-.22.887-.568 1.104-.788.763-.774 1.079-2.534 1.04-5.013C23.929 2.67 20.646 0 18.933 0M3.223 9.135c-.237.281-.837 1.155-.884 1.238-.15-.41-.368-1.349-.337-3.291.051-3.281 2.478-4.972 3.091-5.031.256.015.731.27 1.265.646-1.11 1.171-2.275 2.915-2.352 5.125-.133.546-.398.858-.783 1.313M12 22c-.901 0-1.954-.693-2-1 0-.654.475-1.236 1-1.602V20a1 1 0 1 0 2 0v-.602c.524.365 1 .947 1 1.602-.046.307-1.099 1-2 1m3-3.48v.02a4.752 4.752 0 0 0-1.262-1.02c1.092-.516 2.239-1.334 2.239-2.217 0-1.842-1.781-2.195-3.977-2.195-2.196 0-3.978.354-3.978 2.195 0 .883 1.148 1.701 2.238 2.217A4.8 4.8 0 0 0 9 18.539v-.025c-1-.076-2.182-.281-2.973-.842-1.301-.92-1.838-3.045-1.853-6.478l.023-.041c.496-.826 1.49-1.45 1.804-3.102 0-2.047 1.357-3.631 2.362-4.522C9.37 3.178 10.555 3 11.948 3c1.447 0 2.685.192 3.733.57 1 .9 2.316 2.465 2.316 4.48.313 1.651 1.307 2.275 1.803 3.102.035.058.068.117.102.178-.059 5.967-1.949 7.01-4.902 7.19m6.628-8.202c-.037-.065-.074-.13-.113-.195a7.587 7.587 0 0 0-.739-.987c-.385-.455-.648-.768-.782-1.313-.076-2.209-1.241-3.954-2.353-5.124.531-.376 1.004-.63 1.261-.647.636.071 3.044 1.764 3.096 5.031.027 1.81-.347 3.218-.37 3.235\"/>",

  Objects: "<path d=\"M12 0a9 9 0 0 0-5 16.482V21s2.035 3 5 3 5-3 5-3v-4.518A9 9 0 0 0 12 0zm0 2c3.86 0 7 3.141 7 7s-3.14 7-7 7-7-3.141-7-7 3.14-7 7-7zM9 17.477c.94.332 1.946.523 3 .523s2.06-.19 3-.523v.834c-.91.436-1.925.689-3 .689a6.924 6.924 0 0 1-3-.69v-.833zm.236 3.07A8.854 8.854 0 0 0 12 21c.965 0 1.888-.167 2.758-.451C14.155 21.173 13.153 22 12 22c-1.102 0-2.117-.789-2.764-1.453z\"/><path d=\"M14.745 12.449h-.004c-.852-.024-1.188-.858-1.577-1.824-.421-1.061-.703-1.561-1.182-1.566h-.009c-.481 0-.783.497-1.235 1.537-.436.982-.801 1.811-1.636 1.791l-.276-.043c-.565-.171-.853-.691-1.284-1.794-.125-.313-.202-.632-.27-.913-.051-.213-.127-.53-.195-.634C7.067 9.004 7.039 9 6.99 9A1 1 0 0 1 7 7h.01c1.662.017 2.015 1.373 2.198 2.134.486-.981 1.304-2.058 2.797-2.075 1.531.018 2.28 1.153 2.731 2.141l.002-.008C14.944 8.424 15.327 7 16.979 7h.032A1 1 0 1 1 17 9h-.011c-.149.076-.256.474-.319.709a6.484 6.484 0 0 1-.311.951c-.429.973-.79 1.789-1.614 1.789\"/>",

  People: "<path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/><path d=\"M8 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 8 7M16 7a2 2 0 1 0-.001 3.999A2 2 0 0 0 16 7M15.232 15c-.693 1.195-1.87 2-3.349 2-1.477 0-2.655-.805-3.347-2H15m3-2H6a6 6 0 1 0 12 0\"/>",

  Places: "<path d=\"M6.5 12C5.122 12 4 13.121 4 14.5S5.122 17 6.5 17 9 15.879 9 14.5 7.878 12 6.5 12m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5M17.5 12c-1.378 0-2.5 1.121-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.122-2.5-2.5-2.5m0 3c-.275 0-.5-.225-.5-.5s.225-.5.5-.5.5.225.5.5-.225.5-.5.5\"/><path d=\"M22.482 9.494l-1.039-.346L21.4 9h.6c.552 0 1-.439 1-.992 0-.006-.003-.008-.003-.008H23c0-1-.889-2-1.984-2h-.642l-.731-1.717C19.262 3.012 18.091 2 16.764 2H7.236C5.909 2 4.738 3.012 4.357 4.283L3.626 6h-.642C1.889 6 1 7 1 8h.003S1 8.002 1 8.008C1 8.561 1.448 9 2 9h.6l-.043.148-1.039.346a2.001 2.001 0 0 0-1.359 2.097l.751 7.508a1 1 0 0 0 .994.901H3v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h6v1c0 1.103.896 2 2 2h2c1.104 0 2-.897 2-2v-1h1.096a.999.999 0 0 0 .994-.901l.751-7.508a2.001 2.001 0 0 0-1.359-2.097M6.273 4.857C6.402 4.43 6.788 4 7.236 4h9.527c.448 0 .834.43.963.857L19.313 9H4.688l1.585-4.143zM7 21H5v-1h2v1zm12 0h-2v-1h2v1zm2.189-3H2.811l-.662-6.607L3 11h18l.852.393L21.189 18z\"/>",

  Recent: "<path d=\"M13 4h-2l-.001 7H9v2h2v2h2v-2h4v-2h-4z\"/><path d=\"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10\"/>",

  Symbols: "<path d=\"M0 0h11v2H0zM4 11h3V6h4V4H0v2h4zM15.5 17c1.381 0 2.5-1.116 2.5-2.493s-1.119-2.493-2.5-2.493S13 13.13 13 14.507 14.119 17 15.5 17m0-2.986c.276 0 .5.222.5.493 0 .272-.224.493-.5.493s-.5-.221-.5-.493.224-.493.5-.493M21.5 19.014c-1.381 0-2.5 1.116-2.5 2.493S20.119 24 21.5 24s2.5-1.116 2.5-2.493-1.119-2.493-2.5-2.493m0 2.986a.497.497 0 0 1-.5-.493c0-.271.224-.493.5-.493s.5.222.5.493a.497.497 0 0 1-.5.493M22 13l-9 9 1.513 1.5 8.99-9.009zM17 11c2.209 0 4-1.119 4-2.5V2s.985-.161 1.498.949C23.01 4.055 23 6 23 6s1-1.119 1-3.135C24-.02 21 0 21 0h-2v6.347A5.853 5.853 0 0 0 17 6c-2.209 0-4 1.119-4 2.5s1.791 2.5 4 2.5M10.297 20.482l-1.475-1.585a47.54 47.54 0 0 1-1.442 1.129c-.307-.288-.989-1.016-2.045-2.183.902-.836 1.479-1.466 1.729-1.892s.376-.871.376-1.336c0-.592-.273-1.178-.818-1.759-.546-.581-1.329-.871-2.349-.871-1.008 0-1.79.293-2.344.879-.556.587-.832 1.181-.832 1.784 0 .813.419 1.748 1.256 2.805-.847.614-1.444 1.208-1.794 1.784a3.465 3.465 0 0 0-.523 1.833c0 .857.308 1.56.924 2.107.616.549 1.423.823 2.42.823 1.173 0 2.444-.379 3.813-1.137L8.235 24h2.819l-2.09-2.383 1.333-1.135zm-6.736-6.389a1.02 1.02 0 0 1 .73-.286c.31 0 .559.085.747.254a.849.849 0 0 1 .283.659c0 .518-.419 1.112-1.257 1.784-.536-.651-.805-1.231-.805-1.742a.901.901 0 0 1 .302-.669M3.74 22c-.427 0-.778-.116-1.057-.349-.279-.232-.418-.487-.418-.766 0-.594.509-1.288 1.527-2.083.968 1.134 1.717 1.946 2.248 2.438-.921.507-1.686.76-2.3.76\"/>"
};

exports.default = SVGs;
},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var search = [];

  var addToSearch = function addToSearch(strings, split) {
    if (!strings) {
      return;
    }

    ;(Array.isArray(strings) ? strings : [strings]).forEach(function (string) {
      ;(split ? string.split(/[-|_|\s]+/) : [string]).forEach(function (s) {
        s = s.toLowerCase();

        if (search.indexOf(s) == -1) {
          search.push(s);
        }
      });
    });
  };

  addToSearch(data.short_names, true);
  addToSearch(data.name, true);
  addToSearch(data.keywords, false);
  addToSearch(data.emoticons, false);

  return search.join(',');
};
},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = require('../data');

var _data2 = _interopRequireDefault(_data);

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var originalPool = {};
var index = {};
var emojisList = {};
var emoticonsList = {};

var _loop = function _loop(emoji) {
  var emojiData = _data2.default.emojis[emoji];
  var short_names = emojiData.short_names;
  var emoticons = emojiData.emoticons;
  var id = short_names[0];

  if (emoticons) {
    emoticons.forEach(function (emoticon) {
      if (emoticonsList[emoticon]) {
        return;
      }

      emoticonsList[emoticon] = id;
    });
  }

  emojisList[id] = (0, _.getSanitizedData)(id);
  originalPool[id] = emojiData;
};

for (var emoji in _data2.default.emojis) {
  _loop(emoji);
}

function addCustomToPool(custom, pool) {
  custom.forEach(function (emoji) {
    var emojiId = emoji.id || emoji.short_names[0];

    if (emojiId && !pool[emojiId]) {
      pool[emojiId] = (0, _.getData)(emoji);
      emojisList[emojiId] = (0, _.getSanitizedData)(emoji);
    }
  });
}

function search(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var emojisToShowFilter = _ref.emojisToShowFilter;
  var maxResults = _ref.maxResults;
  var include = _ref.include;
  var exclude = _ref.exclude;
  var _ref$custom = _ref.custom;
  var custom = _ref$custom === undefined ? [] : _ref$custom;

  addCustomToPool(custom, originalPool);

  maxResults || (maxResults = 75);
  include || (include = []);
  exclude || (exclude = []);

  var results = null,
      pool = originalPool;

  if (value.length) {
    if (value == '-' || value == '-1') {
      return [emojisList['-1']];
    }

    var values = value.toLowerCase().split(/[\s|,|\-|_]+/),
        allResults = [];

    if (values.length > 2) {
      values = [values[0], values[1]];
    }

    if (include.length || exclude.length) {
      pool = {};

      _data2.default.categories.forEach(function (category) {
        var isIncluded = include && include.length ? include.indexOf(category.name.toLowerCase()) > -1 : true;
        var isExcluded = exclude && exclude.length ? exclude.indexOf(category.name.toLowerCase()) > -1 : false;
        if (!isIncluded || isExcluded) {
          return;
        }

        category.emojis.forEach(function (emojiId) {
          return pool[emojiId] = _data2.default.emojis[emojiId];
        });
      });

      if (custom.length) {
        var customIsIncluded = include && include.length ? include.indexOf('custom') > -1 : true;
        var customIsExcluded = exclude && exclude.length ? exclude.indexOf('custom') > -1 : false;
        if (customIsIncluded && !customIsExcluded) {
          addCustomToPool(custom, pool);
        }
      }
    }

    allResults = values.map(function (value) {
      var aPool = pool,
          aIndex = index,
          length = 0;

      for (var charIndex = 0; charIndex < value.length; charIndex++) {
        var char = value[charIndex];
        length++;

        aIndex[char] || (aIndex[char] = {});
        aIndex = aIndex[char];

        if (!aIndex.results) {
          (function () {
            var scores = {};

            aIndex.results = [];
            aIndex.pool = {};

            for (var _id in aPool) {
              var emoji = aPool[_id];
              var _search = emoji.search;
              var sub = value.substr(0, length);
              var subIndex = _search.indexOf(sub);

              if (subIndex != -1) {
                var score = subIndex + 1;
                if (sub == _id) score = 0;

                aIndex.results.push(emojisList[_id]);
                aIndex.pool[_id] = emoji;

                scores[_id] = score;
              }
            }

            aIndex.results.sort(function (a, b) {
              var aScore = scores[a.id],
                  bScore = scores[b.id];

              return aScore - bScore;
            });
          })();
        }

        aPool = aIndex.pool;
      }

      return aIndex.results;
    }).filter(function (a) {
      return a;
    });

    if (allResults.length > 1) {
      results = _.intersect.apply(null, allResults);
    } else if (allResults.length) {
      results = allResults[0];
    } else {
      results = [];
    }
  }

  if (results) {
    if (emojisToShowFilter) {
      results = results.filter(function (result) {
        return emojisToShowFilter(_data2.default.emojis[result.id]);
      });
    }

    if (results && results.length > maxResults) {
      results = results.slice(0, maxResults);
    }
  }

  return results;
}

exports.default = { search: search, emojis: emojisList, emoticons: emoticonsList };
},{".":22,"../data":10}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULTS = ['+1', 'grinning', 'kissing_heart', 'heart_eyes', 'laughing', 'stuck_out_tongue_winking_eye', 'sweat_smile', 'joy', 'scream', 'disappointed', 'unamused', 'weary', 'sob', 'sunglasses', 'heart', 'poop'];

var frequently = void 0,
    initialized = void 0;
var defaults = {};

function init() {
  initialized = true;
  frequently = _store2.default.get('frequently');
}

function add(emoji) {
  if (!initialized) init();
  var id = emoji.id;


  frequently || (frequently = defaults);
  frequently[id] || (frequently[id] = 0);
  frequently[id] += 1;

  _store2.default.set('last', id);
  _store2.default.set('frequently', frequently);
}

function get(perLine) {
  if (!initialized) init();
  if (!frequently) {
    defaults = {};

    var result = [];

    for (var i = 0; i < perLine; i++) {
      defaults[DEFAULTS[i]] = perLine - i;
      result.push(DEFAULTS[i]);
    }

    return result;
  }

  var quantity = perLine * 4;
  var frequentlyKeys = [];

  for (var key in frequently) {
    if (frequently.hasOwnProperty(key)) {
      frequentlyKeys.push(key);
    }
  }

  var sorted = frequentlyKeys.sort(function (a, b) {
    return frequently[a] - frequently[b];
  }).reverse();
  var sliced = sorted.slice(0, quantity);

  var last = _store2.default.get('last');

  if (last && sliced.indexOf(last) == -1) {
    sliced.pop();
    sliced.push(last);
  }

  return sliced;
}

exports.default = { add: add, get: get };
},{"./store":23}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.measureScrollbar = exports.unifiedToNative = exports.deepMerge = exports.intersect = exports.uniq = exports.getSanitizedData = exports.getData = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _buildSearch = require('./build-search');

var _buildSearch2 = _interopRequireDefault(_buildSearch);

var _data = require('../data');

var _data2 = _interopRequireDefault(_data);

var _stringFromCodePoint = require('../polyfills/stringFromCodePoint');

var _stringFromCodePoint2 = _interopRequireDefault(_stringFromCodePoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _JSON = JSON;

var COLONS_REGEX = /^(?:\:([^\:]+)\:)(?:\:skin-tone-(\d)\:)?$/;
var SKINS = ['1F3FA', '1F3FB', '1F3FC', '1F3FD', '1F3FE', '1F3FF'];

function unifiedToNative(unified) {
  var unicodes = unified.split('-'),
      codePoints = unicodes.map(function (u) {
    return '0x' + u;
  });

  return _stringFromCodePoint2.default.apply(null, codePoints);
}

function sanitize(emoji) {
  var name = emoji.name;
  var short_names = emoji.short_names;
  var skin_tone = emoji.skin_tone;
  var skin_variations = emoji.skin_variations;
  var emoticons = emoji.emoticons;
  var unified = emoji.unified;
  var custom = emoji.custom;
  var imageUrl = emoji.imageUrl;
  var id = emoji.id || short_names[0];
  var colons = ':' + id + ':';

  if (custom) {
    return {
      id: id,
      name: name,
      colons: colons,
      emoticons: emoticons,
      custom: custom,
      imageUrl: imageUrl
    };
  }

  if (skin_tone) {
    colons += ':skin-tone-' + skin_tone + ':';
  }

  return {
    id: id,
    name: name,
    colons: colons,
    emoticons: emoticons,
    unified: unified.toLowerCase(),
    skin: skin_tone || (skin_variations ? 1 : null),
    native: unifiedToNative(unified)
  };
}

function getSanitizedData() {
  return sanitize(getData.apply(undefined, arguments));
}

function getData(emoji, skin, set) {
  var emojiData = {};

  if (typeof emoji == 'string') {
    var matches = emoji.match(COLONS_REGEX);

    if (matches) {
      emoji = matches[1];

      if (matches[2]) {
        skin = parseInt(matches[2]);
      }
    }

    if (_data2.default.short_names.hasOwnProperty(emoji)) {
      emoji = _data2.default.short_names[emoji];
    }

    if (_data2.default.emojis.hasOwnProperty(emoji)) {
      emojiData = _data2.default.emojis[emoji];
    } else {
      return null;
    }
  } else if (emoji.id) {
    if (_data2.default.short_names.hasOwnProperty(emoji.id)) {
      emoji.id = _data2.default.short_names[emoji.id];
    }

    if (_data2.default.emojis.hasOwnProperty(emoji.id)) {
      emojiData = _data2.default.emojis[emoji.id];
      skin || (skin = emoji.skin);
    }
  }

  if (!(0, _keys2.default)(emojiData).length) {
    emojiData = emoji;
    emojiData.custom = true;

    if (!emojiData.search) {
      emojiData.search = (0, _buildSearch2.default)(emoji);
    }
  }

  emojiData.emoticons || (emojiData.emoticons = []);
  emojiData.variations || (emojiData.variations = []);

  if (emojiData.skin_variations && skin > 1 && set) {
    emojiData = JSON.parse(_JSON.stringify(emojiData));

    var skinKey = SKINS[skin - 1],
        variationData = emojiData.skin_variations[skinKey];

    if (!variationData.variations && emojiData.variations) {
      delete emojiData.variations;
    }

    if (variationData['has_img_' + set]) {
      emojiData.skin_tone = skin;

      for (var k in variationData) {
        var v = variationData[k];
        emojiData[k] = v;
      }
    }
  }

  if (emojiData.variations && emojiData.variations.length) {
    emojiData = JSON.parse(_JSON.stringify(emojiData));
    emojiData.unified = emojiData.variations.shift();
  }

  return emojiData;
}

function uniq(arr) {
  return arr.reduce(function (acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }
    return acc;
  }, []);
}

function intersect(a, b) {
  var uniqA = uniq(a);
  var uniqB = uniq(b);

  return uniqA.filter(function (item) {
    return uniqB.indexOf(item) >= 0;
  });
}

function deepMerge(a, b) {
  var o = {};

  for (var key in a) {
    var originalValue = a[key],
        value = originalValue;

    if (b.hasOwnProperty(key)) {
      value = b[key];
    }

    if (typeof value === 'object') {
      value = deepMerge(originalValue, value);
    }

    o[key] = value;
  }

  return o;
}

// https://github.com/sonicdoe/measure-scrollbar
function measureScrollbar() {
  if (typeof document == 'undefined') return 0;
  var div = document.createElement('div');

  div.style.width = '100px';
  div.style.height = '100px';
  div.style.overflow = 'scroll';
  div.style.position = 'absolute';
  div.style.top = '-9999px';

  document.body.appendChild(div);
  var scrollbarWidth = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  return scrollbarWidth;
}

exports.getData = getData;
exports.getSanitizedData = getSanitizedData;
exports.uniq = uniq;
exports.intersect = intersect;
exports.deepMerge = deepMerge;
exports.unifiedToNative = unifiedToNative;
exports.measureScrollbar = measureScrollbar;
},{"../data":10,"../polyfills/stringFromCodePoint":17,"./build-search":19,"babel-runtime/core-js/object/keys":25}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var NAMESPACE = 'emoji-mart';

var _JSON = JSON;

var isLocalStorageSupported = typeof window !== 'undefined' && 'localStorage' in window;

var getter = void 0;
var setter = void 0;

function setHandlers(handlers) {
  handlers || (handlers = {});

  getter = handlers.getter;
  setter = handlers.setter;
}

function setNamespace(namespace) {
  NAMESPACE = namespace;
}

function update(state) {
  for (var key in state) {
    var value = state[key];
    set(key, value);
  }
}

function set(key, value) {
  if (setter) {
    setter(key, value);
  } else {
    if (!isLocalStorageSupported) return;
    try {
      window.localStorage[NAMESPACE + '.' + key] = _JSON.stringify(value);
    } catch (e) {}
  }
}

function get(key) {
  if (getter) {
    return getter(key);
  } else {
    if (!isLocalStorageSupported) return;
    try {
      var value = window.localStorage[NAMESPACE + '.' + key];
    } catch (e) {
      return;
    }

    if (value) {
      return JSON.parse(value);
    }
  }
}

exports.default = { update: update, set: set, get: get, setNamespace: setNamespace, setHandlers: setHandlers };
},{}],24:[function(require,module,exports){
'use strict';

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

var isWindowAvailable = typeof window !== 'undefined';

isWindowAvailable && function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);

    lastTime = currTime + timeToCall;
    return id;
  };

  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
}();
},{}],25:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":27}],26:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],27:[function(require,module,exports){
require('../../modules/es6.object.keys');
module.exports = require('../../modules/_core').Object.keys;

},{"../../modules/_core":32,"../../modules/es6.object.keys":60}],28:[function(require,module,exports){
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],29:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":45}],30:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject');
var toLength = require('./_to-length');
var toAbsoluteIndex = require('./_to-absolute-index');
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

},{"./_to-absolute-index":53,"./_to-iobject":55,"./_to-length":56}],31:[function(require,module,exports){
var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

},{}],32:[function(require,module,exports){
var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],33:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":28}],34:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

},{}],35:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":39}],36:[function(require,module,exports){
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_global":40,"./_is-object":45}],37:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

},{}],38:[function(require,module,exports){
var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_core":32,"./_ctx":33,"./_global":40,"./_hide":42}],39:[function(require,module,exports){
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],40:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],41:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],42:[function(require,module,exports){
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_descriptors":35,"./_object-dp":46,"./_property-desc":50}],43:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":35,"./_dom-create":36,"./_fails":39}],44:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

},{"./_cof":31}],45:[function(require,module,exports){
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],46:[function(require,module,exports){
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":29,"./_descriptors":35,"./_ie8-dom-define":43,"./_to-primitive":58}],47:[function(require,module,exports){
var has = require('./_has');
var toIObject = require('./_to-iobject');
var arrayIndexOf = require('./_array-includes')(false);
var IE_PROTO = require('./_shared-key')('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

},{"./_array-includes":30,"./_has":41,"./_shared-key":51,"./_to-iobject":55}],48:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = require('./_object-keys-internal');
var enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

},{"./_enum-bug-keys":37,"./_object-keys-internal":47}],49:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export');
var core = require('./_core');
var fails = require('./_fails');
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

},{"./_core":32,"./_export":38,"./_fails":39}],50:[function(require,module,exports){
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],51:[function(require,module,exports){
var shared = require('./_shared')('keys');
var uid = require('./_uid');
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

},{"./_shared":52,"./_uid":59}],52:[function(require,module,exports){
var global = require('./_global');
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

},{"./_global":40}],53:[function(require,module,exports){
var toInteger = require('./_to-integer');
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

},{"./_to-integer":54}],54:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

},{}],55:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject');
var defined = require('./_defined');
module.exports = function (it) {
  return IObject(defined(it));
};

},{"./_defined":34,"./_iobject":44}],56:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer');
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

},{"./_to-integer":54}],57:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function (it) {
  return Object(defined(it));
};

},{"./_defined":34}],58:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":45}],59:[function(require,module,exports){
var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

},{}],60:[function(require,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = require('./_to-object');
var $keys = require('./_object-keys');

require('./_object-sap')('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

},{"./_object-keys":48,"./_object-sap":49,"./_to-object":57}],61:[function(require,module,exports){
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

},{}],62:[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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
},{}],63:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

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
}).call(this,require('_process'))

},{"_process":61}],64:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
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
}

module.exports = warning;
}).call(this,require('_process'))

},{"./emptyFunction":62,"_process":61}],65:[function(require,module,exports){
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

},{}],66:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

if (process.env.NODE_ENV !== 'production') {
  var invariant = require('fbjs/lib/invariant');
  var warning = require('fbjs/lib/warning');
  var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
  var loggedTypeFailures = {};
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
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

}).call(this,require('_process'))

},{"./lib/ReactPropTypesSecret":70,"_process":61,"fbjs/lib/invariant":63,"fbjs/lib/warning":64}],67:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
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
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

},{"./lib/ReactPropTypesSecret":70,"fbjs/lib/emptyFunction":62,"fbjs/lib/invariant":63}],68:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var emptyFunction = require('fbjs/lib/emptyFunction');
var invariant = require('fbjs/lib/invariant');
var warning = require('fbjs/lib/warning');
var assign = require('object-assign');

var ReactPropTypesSecret = require('./lib/ReactPropTypesSecret');
var checkPropTypes = require('./checkPropTypes');

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
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
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
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
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
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
        if (propValue.hasOwnProperty(key)) {
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
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
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
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

}).call(this,require('_process'))

},{"./checkPropTypes":66,"./lib/ReactPropTypesSecret":70,"_process":61,"fbjs/lib/emptyFunction":62,"fbjs/lib/invariant":63,"fbjs/lib/warning":64,"object-assign":65}],69:[function(require,module,exports){
(function (process){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}

}).call(this,require('_process'))

},{"./factoryWithThrowingShims":67,"./factoryWithTypeCheckers":68,"_process":61}],70:[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

},{}]},{},[11])(11)
});