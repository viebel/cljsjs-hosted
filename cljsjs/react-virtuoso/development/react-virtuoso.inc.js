(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('resize-observer-polyfill')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'resize-observer-polyfill'], factory) :
  (global = global || self, factory(global.ReactVirtuoso = {}, global.React, global.ResizeObserver));
}(this, (function (exports, React, ResizeObserver) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ResizeObserver = ResizeObserver && Object.prototype.hasOwnProperty.call(ResizeObserver, 'default') ? ResizeObserver['default'] : ResizeObserver;

  var VirtuosoContext = /*#__PURE__*/React.createContext(undefined);

  function _extends() {
    _extends = Object.assign || function (target) {
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

    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }

  function combineOperators() {
    for (var _len = arguments.length, operators = new Array(_len), _key = 0; _key < _len; _key++) {
      operators[_key] = arguments[_key];
    }

    if (operators.length === 0) {
      return function (value, subscriber) {
        return subscriber(value);
      };
    }

    if (operators.length === 1) {
      return operators[0];
    }

    return function (value, subscriber) {
      var acc = function acc(value) {
        return subscriber(value);
      };

      operators.slice().reverse().forEach(function (operator) {
        var prevCallback = acc;

        acc = function acc(value) {
          return operator(value, prevCallback);
        };
      });
      acc(value);
    };
  }

  function buildPipe(subscribe) {
    function pipe() {
      var operator = combineOperators.apply(void 0, arguments);
      return observable(subscribe, operator);
    }

    return pipe;
  }

  function observable(source, operator) {
    var subscribe = function subscribe(subscriber) {
      return source(function (val) {
        return operator(val, subscriber);
      });
    };

    return {
      subscribe: subscribe,
      pipe: buildPipe(subscribe)
    };
  }
  function subject(initial, distinct) {
    if (distinct === void 0) {
      distinct = true;
    }

    var subscribers = [];
    var val = initial;

    var next = function next(newVal) {
      if (!distinct || newVal !== val) {
        val = newVal;
        subscribers.forEach(function (subscriber) {
          return subscriber(newVal);
        });
      }
    };

    var subscribe = function subscribe(subscriber) {
      subscribers.push(subscriber);

      if (val !== undefined) {
        subscriber(val);
      }

      return function () {
        subscribers = subscribers.filter(function (sub) {
          return sub !== subscriber;
        });
      };
    };

    return {
      next: next,
      subscribe: subscribe,
      pipe: buildPipe(subscribe),
      subscribers: subscribers
    };
  }
  function coldSubject() {
    var subscribers = [];

    var next = function next(newVal) {
      subscribers.forEach(function (subscriber) {
        return subscriber(newVal);
      });
    };

    var subscribe = function subscribe(subscriber) {
      subscribers.push(subscriber);
      return function () {
        subscribers = subscribers.filter(function (sub) {
          return sub !== subscriber;
        });
      };
    };

    return {
      next: next,
      subscribe: subscribe,
      pipe: buildPipe(subscribe),
      subscribers: subscribers
    };
  }
  function combineLatest() {
    for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      sources[_key2] = arguments[_key2];
    }

    var called = Array(sources.length).fill(false);
    var values = Array(sources.length);
    var subscribers = [];

    var publish = function publish(subscribers) {
      called.every(function (isCalled) {
        return isCalled;
      }) && subscribers.forEach(function (subscriber) {
        return subscriber(values);
      });
    };

    sources.forEach(function (source, index) {
      source.subscribe(function (val) {
        called[index] = true;
        values[index] = val;
        publish(subscribers);
      });
    });

    var subscribe = function subscribe(subscriber) {
      subscribers.push(subscriber);
      publish([subscriber]);
      return function () {
        subscribers = subscribers.filter(function (sub) {
          return sub !== subscriber;
        });
      };
    };

    return {
      subscribe: subscribe,
      pipe: buildPipe(subscribe)
    };
  }
  function map(map) {
    return function (val, subscriber) {
      subscriber(map(val));
    };
  }
  function mapTo(val) {
    return function (_, done) {
      return done(val);
    };
  }
  function skip(times) {
    return function (val, done) {
      if (times > 0) {
        times--;
      } else {
        done(val);
      }
    };
  }
  function filter(predicate) {
    return function (val, done) {
      predicate(val) && done(val);
    };
  }
  function duc(comparator) {
    if (comparator === void 0) {
      comparator = function comparator(current, next) {
        return current !== next;
      };
    }

    var current;
    return function (next, done) {
      if (comparator(current, next)) {
        current = next;
        done(next);
      }
    };
  }
  function debounceTime(time) {
    var val;
    var timeout;
    return function (newVal, done) {
      val = newVal;

      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(function () {
        done(val);
      }, time);
    };
  }
  function throttleTime(time) {
    var val;
    var timeout;
    return function (newVal, done) {
      val = newVal;

      if (timeout) {
        return;
      }

      timeout = setTimeout(function () {
        timeout = undefined;
        done(val);
      }, time);
    };
  }
  function scan(scanner, initialValue) {
    var prevVal = initialValue;
    return function (newVal, done) {
      done(prevVal = scanner(prevVal, newVal));
    };
  }
  function withLatestFrom() {
    for (var _len3 = arguments.length, sources = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      sources[_key3] = arguments[_key3];
    }

    var called = Array(sources.length).fill(false);
    var values = Array(sources.length);
    sources.forEach(function (source, index) {
      source.subscribe(function (val) {
        values[index] = val;
        called[index] = true;
      });
    });
    return function (val, done) {
      called.every(function (isCalled) {
        return isCalled;
      }) && done([val].concat(values));
    };
  }

  var buildIsScrolling = function buildIsScrolling(scrollTop$) {
    var isScrolling$ = subject(false);
    scrollTop$.pipe(skip(1), duc(), mapTo(true)).subscribe(isScrolling$.next);
    scrollTop$.pipe(skip(1), mapTo(false), debounceTime(200)).subscribe(isScrolling$.next);
    return isScrolling$;
  };

  function adjustForPrependedItemsEngine(_ref) {
    var offsetList$ = _ref.offsetList$,
        scrollTop$ = _ref.scrollTop$,
        scrollTo$ = _ref.scrollTo$;
    var adjustForPrependedItems$ = coldSubject();
    var adjustmentInProgress$ = subject(false);
    adjustForPrependedItems$.pipe(withLatestFrom(offsetList$, scrollTop$, adjustmentInProgress$)).subscribe(function (_ref2) {
      var count = _ref2[0],
          offsetList = _ref2[1],
          scrollTop = _ref2[2],
          inProgress = _ref2[3];

      if (inProgress || offsetList.empty()) {
        return;
      }

      adjustmentInProgress$.next(true);
      offsetList$.next(offsetList.adjustForPrependedItems(count));
      setTimeout(function () {
        scrollTo$.next({
          top: count * offsetList.getDefaultSize() + scrollTop
        });
        adjustmentInProgress$.next(false);
      });
    });
    return {
      adjustForPrependedItems$: adjustForPrependedItems$,
      adjustmentInProgress$: adjustmentInProgress$
    };
  }

  function followOutputEngine(_ref) {
    var scrollToIndex$ = _ref.scrollToIndex$,
        scrolledToBottom$ = _ref.scrolledToBottom$,
        totalCount$ = _ref.totalCount$;
    var followOutput$ = subject(false);
    combineLatest(followOutput$, totalCount$).pipe(withLatestFrom(scrolledToBottom$)).subscribe(function (_ref2) {
      var _ref2$ = _ref2[0],
          followOutput = _ref2$[0],
          totalCount = _ref2$[1],
          scrolledToBottom = _ref2[1];

      if (followOutput && scrolledToBottom) {
        setTimeout(function () {
          scrollToIndex$.next({
            index: totalCount - 1,
            align: 'end',
            behavior: 'auto'
          });
        });
      }
    });
    return {
      followOutput$: followOutput$
    };
  }

  var NilNode = /*#__PURE__*/function () {
    function NilNode() {
      this.level = 0;
    }

    var _proto = NilNode.prototype;

    _proto.rebalance = function rebalance() {
      return this;
    };

    _proto.adjust = function adjust() {
      return this;
    };

    _proto.shift = function shift() {
      return this;
    };

    _proto.remove = function remove() {
      return this;
    };

    _proto.find = function find() {
      return;
    };

    _proto.findWith = function findWith() {
      return;
    };

    _proto.findMax = function findMax() {
      return -Infinity;
    };

    _proto.findMaxValue = function findMaxValue() {
      return;
    };

    _proto.insert = function insert(key, value) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      return new NonNilNode({
        key: key,
        value: value,
        level: 1
      });
    };

    _proto.walkWithin = function walkWithin() {
      return [];
    };

    _proto.walk = function walk() {
      return [];
    };

    _proto.ranges = function ranges() {
      return [];
    };

    _proto.rangesWithin = function rangesWithin() {
      return [];
    };

    _proto.empty = function empty() {
      return true;
    };

    _proto.isSingle = function isSingle() {
      return true;
    };

    _proto.isInvariant = function isInvariant() {
      return true;
    };

    _proto.keys = function keys() {
      return [];
    };

    return NilNode;
  }();

  var NIL_NODE = /*#__PURE__*/new NilNode();
  Object.freeze(NIL_NODE);

  var UnreachableCaseError = /*#__PURE__*/function (_Error) {
    _inheritsLoose(UnreachableCaseError, _Error);

    function UnreachableCaseError(val) {
      return _Error.call(this, "Unreachable case: " + val) || this;
    }

    return UnreachableCaseError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var NonNilNode = /*#__PURE__*/function () {
    function NonNilNode(_ref) {
      var key = _ref.key,
          value = _ref.value,
          level = _ref.level,
          _ref$left = _ref.left,
          left = _ref$left === void 0 ? NIL_NODE : _ref$left,
          _ref$right = _ref.right,
          right = _ref$right === void 0 ? NIL_NODE : _ref$right;
      this.key = key;
      this.value = value;
      this.level = level;
      this.left = left;
      this.right = right;
    }

    var _proto2 = NonNilNode.prototype;

    _proto2.shift = function shift(amount) {
      return this.clone({
        key: this.key + amount,
        left: this.left.shift(amount),
        right: this.right.shift(amount)
      });
    };

    _proto2.remove = function remove(key) {
      var left = this.left,
          right = this.right;

      if (key === this.key) {
        if (left.empty()) {
          return right;
        } else if (right.empty()) {
          return left;
        } else {
          var _left$last = left.last(),
              lastKey = _left$last[0],
              lastValue = _left$last[1];

          return this.clone({
            key: lastKey,
            value: lastValue,
            left: left.deleteLast()
          }).adjust();
        }
      } else if (key < this.key) {
        return this.clone({
          left: left.remove(key)
        }).adjust();
      } else {
        return this.clone({
          right: right.remove(key)
        }).adjust();
      }
    };

    _proto2.empty = function empty() {
      return false;
    };

    _proto2.find = function find(key) {
      if (key === this.key) {
        return this.value;
      } else if (key < this.key) {
        return this.left.find(key);
      } else {
        return this.right.find(key);
      }
    };

    _proto2.findWith = function findWith(callback) {
      var result = callback(this.value);

      switch (result) {
        case -1:
          return this.left.findWith(callback);

        case 0:
          return [this.key, this.value];

        case 1:
          return this.right.findWith(callback);

        default:
          throw new UnreachableCaseError(result);
      }
    };

    _proto2.findMax = function findMax(key) {
      if (this.key === key) {
        return key;
      }

      if (this.key < key) {
        var rightKey = this.right.findMax(key);

        if (rightKey === -Infinity) {
          return this.key;
        } else {
          return rightKey;
        }
      }

      return this.left.findMax(key);
    };

    _proto2.findMaxValue = function findMaxValue(key) {
      if (this.key === key) {
        return this.value;
      }

      if (this.key < key) {
        var rightValue = this.right.findMaxValue(key);

        if (rightValue === undefined) {
          return this.value;
        } else {
          return rightValue;
        }
      }

      return this.left.findMaxValue(key);
    };

    _proto2.insert = function insert(key, value) {
      if (key === this.key) {
        return this.clone({
          key: key,
          value: value
        });
      } else if (key < this.key) {
        return this.clone({
          left: this.left.insert(key, value)
        }).rebalance();
      } else {
        return this.clone({
          right: this.right.insert(key, value)
        }).rebalance();
      }
    };

    _proto2.walkWithin = function walkWithin(start, end) {
      var key = this.key,
          value = this.value;
      var result = [];

      if (key > start) {
        result = result.concat(this.left.walkWithin(start, end));
      }

      if (key >= start && key <= end) {
        result.push({
          key: key,
          value: value
        });
      }

      if (key <= end) {
        result = result.concat(this.right.walkWithin(start, end));
      }

      return result;
    };

    _proto2.walk = function walk() {
      return [].concat(this.left.walk(), [{
        key: this.key,
        value: this.value
      }], this.right.walk());
    };

    _proto2.last = function last() {
      if (this.right.empty()) {
        return [this.key, this.value];
      } else {
        return this.right.last();
      }
    };

    _proto2.deleteLast = function deleteLast() {
      if (this.right.empty()) {
        return this.left;
      } else {
        return this.clone({
          right: this.right.deleteLast()
        }).adjust();
      }
    };

    _proto2.clone = function clone(args) {
      return new NonNilNode({
        key: args.key !== undefined ? args.key : this.key,
        value: args.value !== undefined ? args.value : this.value,
        level: args.level !== undefined ? args.level : this.level,
        left: args.left !== undefined ? args.left : this.left,
        right: args.right !== undefined ? args.right : this.right
      });
    };

    _proto2.isSingle = function isSingle() {
      return this.level > this.right.level;
    };

    _proto2.rebalance = function rebalance() {
      return this.skew().split();
    };

    _proto2.adjust = function adjust() {
      var left = this.left,
          right = this.right,
          level = this.level;

      if (right.level >= level - 1 && left.level >= level - 1) {
        return this;
      } else if (level > right.level + 1) {
        if (left.isSingle()) {
          return this.clone({
            level: level - 1
          }).skew();
        } else {
          if (!left.empty() && !left.right.empty()) {
            return left.right.clone({
              left: left.clone({
                right: left.right.left
              }),
              right: this.clone({
                left: left.right.right,
                level: level - 1
              }),
              level: level
            });
          } else {
            throw new Error('Unexpected empty nodes');
          }
        }
      } else {
        if (this.isSingle()) {
          return this.clone({
            level: level - 1
          }).split();
        } else {
          if (!right.empty() && !right.left.empty()) {
            var rl = right.left;
            var rightLevel = rl.isSingle() ? right.level - 1 : right.level;
            return rl.clone({
              left: this.clone({
                right: rl.left,
                level: level - 1
              }),
              right: right.clone({
                left: rl.right,
                level: rightLevel
              }).split(),
              level: rl.level + 1
            });
          } else {
            throw new Error('Unexpected empty nodes');
          }
        }
      }
    };

    _proto2.isInvariant = function isInvariant() {
      var left = this.left,
          right = this.right,
          level = this.level;

      if (level !== left.level + 1) {
        return false;
      } else if (level !== right.level && level !== right.level + 1) {
        return false;
      } else if (!right.empty() && level <= right.right.level) {
        return false;
      } else {
        return left.isInvariant() && right.isInvariant();
      }
    };

    _proto2.keys = function keys() {
      return [].concat(this.left.keys(), [this.key], this.right.keys());
    };

    _proto2.ranges = function ranges() {
      return this.toRanges(this.walk());
    };

    _proto2.rangesWithin = function rangesWithin(startIndex, endIndex) {
      return this.toRanges(this.walkWithin(startIndex, endIndex));
    };

    _proto2.toRanges = function toRanges(nodes) {
      if (nodes.length === 0) {
        return [];
      }

      var first = nodes[0];
      var start = first.key,
          value = first.value;
      var result = [];

      for (var i = 1; i <= nodes.length; i++) {
        var nextNode = nodes[i];
        var end = nextNode ? nextNode.key - 1 : Infinity;
        result.push({
          start: start,
          end: end,
          value: value
        });

        if (nextNode) {
          start = nextNode.key;
          value = nextNode.value;
        }
      }

      return result;
    };

    _proto2.split = function split() {
      var right = this.right,
          level = this.level;

      if (!right.empty() && !right.right.empty() && right.level === level && right.right.level === level) {
        return right.clone({
          left: this.clone({
            right: right.left
          }),
          level: level + 1
        });
      } else {
        return this;
      }
    };

    _proto2.skew = function skew() {
      var left = this.left;

      if (!left.empty() && left.level === this.level) {
        return left.clone({
          right: this.clone({
            left: left.right
          })
        });
      } else {
        return this;
      }
    };

    return NonNilNode;
  }();

  var AATree = /*#__PURE__*/function () {
    function AATree(root) {
      this.root = root;
    }

    AATree.empty = function empty() {
      return new AATree(NIL_NODE);
    };

    var _proto3 = AATree.prototype;

    _proto3.find = function find(key) {
      return this.root.find(key);
    };

    _proto3.findMax = function findMax(key) {
      return this.root.findMax(key);
    };

    _proto3.findMaxValue = function findMaxValue(key) {
      if (this.empty()) {
        throw new Error('Searching for max value in an empty tree');
      }

      return this.root.findMaxValue(key);
    };

    _proto3.findWith = function findWith(callback) {
      return this.root.findWith(callback);
    };

    _proto3.insert = function insert(key, value) {
      return new AATree(this.root.insert(key, value));
    };

    _proto3.remove = function remove(key) {
      return new AATree(this.root.remove(key));
    };

    _proto3.shift = function shift(amount) {
      if (this.empty()) {
        return this;
      }

      var defaultValue = this.root.findMaxValue(Infinity);
      return new AATree(this.root.shift(amount).insert(0, defaultValue));
    };

    _proto3.empty = function empty() {
      return this.root.empty();
    };

    _proto3.keys = function keys() {
      return this.root.keys();
    };

    _proto3.walk = function walk() {
      return this.root.walk();
    };

    _proto3.walkWithin = function walkWithin(start, end) {
      var adjustedStart = this.root.findMax(start);
      return this.root.walkWithin(adjustedStart, end);
    };

    _proto3.ranges = function ranges() {
      return this.root.ranges();
    };

    _proto3.rangesWithin = function rangesWithin(start, end) {
      var adjustedStart = this.root.findMax(start);
      return this.root.rangesWithin(adjustedStart, end);
    };

    _proto3.isInvariant = function isInvariant() {
      return this.root.isInvariant();
    };

    return AATree;
  }();

  var StubIndexTransposer = /*#__PURE__*/function () {
    function StubIndexTransposer() {}

    var _proto = StubIndexTransposer.prototype;

    _proto.transpose = function transpose(items) {
      return items.map(function (item) {
        return {
          groupIndex: 0,
          index: item.index,
          offset: item.offset,
          size: item.size,
          transposedIndex: item.index,
          type: 'item'
        };
      });
    };

    return StubIndexTransposer;
  }();
  var GroupIndexTransposer = /*#__PURE__*/function () {
    function GroupIndexTransposer(counts) {
      this.count = counts.reduce(function (acc, groupCount) {
        return acc + groupCount + 1;
      }, 0);
      var tree = AATree.empty();
      var groupIndex = 0;
      var total = 0;

      for (var _iterator = _createForOfIteratorHelperLoose(counts), _step; !(_step = _iterator()).done;) {
        var groupCount = _step.value;
        tree = tree.insert(total, [groupIndex, total]);
        groupIndex++;
        total += groupCount + 1;
      }

      this.tree = tree;
    }

    var _proto2 = GroupIndexTransposer.prototype;

    _proto2.totalCount = function totalCount() {
      return this.count;
    };

    _proto2.transpose = function transpose(items) {
      var _this = this;

      return items.map(function (item) {
        var groupMatch = _this.tree.find(item.index);

        if (groupMatch) {
          return {
            groupIndex: groupMatch[0],
            index: item.index,
            offset: item.offset,
            size: item.size,
            type: 'group'
          };
        }

        var _this$tree$findMaxVal = _this.tree.findMaxValue(item.index),
            groupIndex = _this$tree$findMaxVal[0];

        return {
          groupIndex: groupIndex,
          index: item.index,
          offset: item.offset,
          size: item.size,
          transposedIndex: item.index - groupIndex - 1,
          type: 'item'
        };
      });
    };

    _proto2.groupIndices = function groupIndices() {
      return this.tree.keys();
    };

    return GroupIndexTransposer;
  }();

  function groupCountEngine(_ref) {
    var transposer$ = _ref.transposer$,
        stickyItems$ = _ref.stickyItems$,
        totalCount$ = _ref.totalCount$;
    var groupCounts$ = subject();
    var groupIndices$ = stickyItems$.pipe();
    groupCounts$.subscribe(function (counts) {
      var transposer = new GroupIndexTransposer(counts);
      transposer$.next(transposer);
      totalCount$.next(transposer.totalCount());
      stickyItems$.next(transposer.groupIndices());
    });
    return {
      groupCounts$: groupCounts$,
      groupIndices$: groupIndices$
    };
  }

  var getListTop = function getListTop(items) {
    return items.length > 0 ? items[0].offset : 0;
  };
  function listEngine(_ref) {
    var overscan = _ref.overscan,
        defaultItemHeight = _ref.defaultItemHeight,
        viewportHeight$ = _ref.viewportHeight$,
        scrollTop$ = _ref.scrollTop$,
        topListHeight$ = _ref.topListHeight$,
        footerHeight$ = _ref.footerHeight$,
        minListIndex$ = _ref.minListIndex$,
        totalCount$ = _ref.totalCount$,
        offsetList$ = _ref.offsetList$,
        scrolledToTopMostItem$ = _ref.scrolledToTopMostItem$,
        transposer$ = _ref.transposer$,
        totalHeight$ = _ref.totalHeight$;
    var listHeight$ = subject(0);
    var endReached$ = coldSubject();
    var list$ = subject([]);
    var constrainedScrollTop$ = subject(0);
    combineLatest(scrollTop$, totalHeight$, viewportHeight$).pipe(map(function (_ref2) {
      var scrollTop = _ref2[0],
          totalHeight = _ref2[1],
          viewportHeight = _ref2[2];
      return Math.max(0, Math.min(scrollTop, totalHeight - viewportHeight));
    })).subscribe(constrainedScrollTop$.next);
    combineLatest(viewportHeight$, constrainedScrollTop$, topListHeight$, listHeight$, footerHeight$, minListIndex$, totalCount$, offsetList$, scrolledToTopMostItem$, transposer$).pipe(scan(function (items, _ref3) {
      var viewportHeight = _ref3[0],
          scrollTop = _ref3[1],
          topListHeight = _ref3[2],
          listHeight = _ref3[3],
          footerHeight = _ref3[4],
          minIndex = _ref3[5],
          totalCount = _ref3[6],
          offsetList = _ref3[7],
          scrolledToTopMostItem = _ref3[8],
          transposer = _ref3[9];
      var itemLength = items.length;

      if (totalCount === 0) {
        return [];
      }

      var listTop = getListTop(items);
      var listBottom = listTop - scrollTop + listHeight - footerHeight - topListHeight;
      var maxIndex = Math.max(totalCount - 1, 0);
      var indexOutOfAllowedRange = itemLength > 0 && (items[0].index < minIndex || items[itemLength - 1].index > maxIndex);

      if (listBottom < viewportHeight || indexOutOfAllowedRange) {
        var endOffset = scrollTop + viewportHeight + overscan * 2 - 1;
        items = transposer.transpose(offsetList.range(scrollTop, endOffset, minIndex, maxIndex));
      }

      if (listTop > scrollTop) {
        var startOffset = Math.max(scrollTop - overscan * 2, 0);

        var _endOffset = scrollTop + viewportHeight - 1;

        items = transposer.transpose(offsetList.range(startOffset, _endOffset, minIndex, maxIndex));
      } // this is a hack - we should let the probe item render,
      // but skip the real list until the viewport has scrolled
      // to the expected location
      // However, if we have default item height set then we can skip this.


      if (items.length > 1 && !scrolledToTopMostItem && !defaultItemHeight) {
        return [];
      }

      return items;
    }, []), duc()).subscribe(list$.next);
    var listOffset$ = combineLatest(list$, scrollTop$, topListHeight$).pipe(map(function (_ref4) {
      var items = _ref4[0];
      return getListTop(items);
    }));
    var currentEndIndex = 0;
    list$.pipe(map(function (items) {
      return items.length ? items[items.length - 1].index : 0;
    })).pipe(withLatestFrom(totalCount$)).subscribe(function (_ref5) {
      var endIndex = _ref5[0],
          totalCount = _ref5[1];

      if (totalCount === 0) {
        return;
      }

      if (endIndex === totalCount - 1) {
        if (currentEndIndex !== endIndex) {
          currentEndIndex = endIndex;
          endReached$.next(endIndex);
        }
      }
    });
    return {
      list$: list$,
      listOffset$: listOffset$,
      listHeight$: listHeight$,
      endReached$: endReached$
    };
  }

  function maxRangeSizeEngine(_ref) {
    var list$ = _ref.list$,
        offsetList$ = _ref.offsetList$,
        scrollTop$ = _ref.scrollTop$,
        scrollTo$ = _ref.scrollTo$;
    var scheduledReadjust$ = subject(null);
    var maxRangeSize$ = subject(Infinity); //////////////
    // Max range size implementation
    // the scheduledReadjust$ can be removed through the trapNext pattern
    //////////////
    // 1. List warns us that it will reset itself.

    offsetList$.pipe(withLatestFrom(maxRangeSize$, scrollTop$, list$)).subscribe(function (_ref2) {
      var offsetList = _ref2[0],
          maxRangeSize = _ref2[1],
          scrollTop = _ref2[2],
          list = _ref2[3];
      return offsetList.configureMaxRangeSize(maxRangeSize, function () {
        // 2. we pick the adjustment signal and capture the list state *before* it gets reset
        scheduledReadjust$.next({
          index: list[0].index,
          offset: scrollTop - list[0].offset
        });
      });
    }); // 3. once the offset list is reset, we compensate the scroll.

    offsetList$.pipe(withLatestFrom(scheduledReadjust$)).subscribe(function (_ref3) {
      var offsetList = _ref3[0],
          adjust = _ref3[1];

      if (adjust !== null) {
        var scrollTo = offsetList.offsetOf(adjust.index) + adjust.offset;
        scrollTo$.next({
          top: scrollTo
        });
        scheduledReadjust$.next(null);
      }
    });
    return {
      maxRangeSize$: maxRangeSize$
    };
  }

  var OffsetList = /*#__PURE__*/function () {
    function OffsetList(rangeTree, offsetTree, nanIndices, initialTopMostItemIndex) {
      if (offsetTree === void 0) {
        offsetTree = AATree.empty();
      }

      if (nanIndices === void 0) {
        nanIndices = [];
      }

      if (initialTopMostItemIndex === void 0) {
        initialTopMostItemIndex = 0;
      }

      this.initialTopMostItemIndex = 0;
      this.rangeSize = 0;
      this.maxRangeSize = Infinity;

      this.rangeSizeExceededCallback = function () {};

      this.rangeTree = rangeTree;
      this.nanIndices = nanIndices;
      this.initialTopMostItemIndex = initialTopMostItemIndex;

      if (offsetTree.empty()) {
        var offset = 0;
        var ranges = rangeTree.ranges();
        var nanFound = false;

        for (var _iterator = _createForOfIteratorHelperLoose(ranges), _step; !(_step = _iterator()).done;) {
          var _step$value = _step.value,
              startIndex = _step$value.start,
              endIndex = _step$value.end,
              size = _step$value.value;
          this.rangeSize++;

          if (isNaN(size)) {
            this.nanIndices.push(startIndex);

            if (!nanFound) {
              offsetTree = offsetTree.insert(offset, {
                startIndex: startIndex,
                endIndex: Infinity,
                size: size
              });
            }

            nanFound = true;
          } else if (!nanFound) {
            offsetTree = offsetTree.insert(offset, {
              startIndex: startIndex,
              endIndex: endIndex,
              size: size
            });
            offset += (endIndex - startIndex + 1) * size;
          }
        }
      }

      this.offsetTree = offsetTree;
    }

    OffsetList.create = function create() {
      return new OffsetList(AATree.empty());
    };

    var _proto = OffsetList.prototype;

    _proto.empty = function empty() {
      return this.rangeTree.empty();
    };

    _proto.fromTree = function fromTree(tree) {
      return new OffsetList(tree, undefined, undefined, this.initialTopMostItemIndex);
    };

    _proto.insert = function insert(start, end, size) {
      var tree = this.rangeTree;

      if (tree.empty()) {
        return this.fromTree(tree.insert(0, size));
      }

      if (this.rangeSize > this.maxRangeSize) {
        this.rangeSizeExceededCallback();
        return this.fromTree(AATree.empty().insert(0, this.getDefaultSize()));
      } // tree is in non-complete state - we know the group sizes, but not the item sizes


      if (this.nanIndices.length && this.nanIndices.indexOf(end) > -1) {
        var groupSize = tree.find(this.nanIndices[0] - 1);

        if (groupSize === size) {
          return this.fromTree(AATree.empty().insert(0, size));
        }

        for (var _iterator2 = _createForOfIteratorHelperLoose(this.nanIndices), _step2; !(_step2 = _iterator2()).done;) {
          var nanIndex = _step2.value;
          tree = tree.insert(nanIndex, size);
        }

        return this.fromTree(tree);
      } // extend the range in both directions, so that we can get adjacent neighbours.
      // if the previous / next ones have the same value as the one we are about to insert,
      // we 'merge' them.


      var overlapingRanges = tree.rangesWithin(start - 1, end + 1);

      if (overlapingRanges.some(function (range) {
        return range.start === start && (range.end === end || range.end === Infinity) && range.value === size;
      })) {
        return this;
      }

      var firstPassDone = false;
      var shouldInsert = false;

      for (var _iterator3 = _createForOfIteratorHelperLoose(overlapingRanges), _step3; !(_step3 = _iterator3()).done;) {
        var _step3$value = _step3.value,
            rangeStart = _step3$value.start,
            rangeEnd = _step3$value.end,
            rangeValue = _step3$value.value;

        // previous range
        if (!firstPassDone) {
          shouldInsert = rangeValue !== size;
          firstPassDone = true;
        } else {
          // remove the range if it starts within the new range OR if
          // it has the same value as it, in order to perfrom a merge
          if (end >= rangeStart || size === rangeValue) {
            tree = tree.remove(rangeStart);
          }
        } // next range


        if (rangeEnd > end && end >= rangeStart) {
          if (rangeValue !== size && !isNaN(rangeValue)) {
            tree = tree.insert(end + 1, rangeValue);
          }
        }
      }

      if (shouldInsert) {
        tree = tree.insert(start, size);
      }

      return tree === this.rangeTree ? this : this.fromTree(tree);
    };

    _proto.insertSpots = function insertSpots(spotIndexes, value) {
      if (this.empty()) {
        var tree = this.rangeTree;

        for (var _iterator4 = _createForOfIteratorHelperLoose(spotIndexes), _step4; !(_step4 = _iterator4()).done;) {
          var spot = _step4.value;
          tree = tree.insert(spot, value).insert(spot + 1, NaN);
        }

        return new OffsetList(tree);
      } else {
        throw new Error('attempting to overwrite non-empty tree');
      }
    };

    _proto.offsetOf = function offsetOf(index) {
      if (this.offsetTree.empty()) {
        return 0;
      }

      var find = function find(value) {
        if (value.startIndex > index) return -1;
        if (value.endIndex < index) return 1;
        return 0;
      };

      var offsetRange = this.offsetTree.findWith(find);

      if (offsetRange) {
        var offset = offsetRange[0],
            _offsetRange$ = offsetRange[1],
            startIndex = _offsetRange$.startIndex,
            size = _offsetRange$.size;
        return offset + (index - startIndex) * size;
      } else {
        throw new Error("Requested offset outside of the known ones, index: " + index);
      }
    };

    _proto.itemAt = function itemAt(index) {
      var size = this.rangeTree.findMaxValue(index);
      return {
        index: index,
        size: size,
        offset: NaN
      };
    };

    _proto.indexRange = function indexRange(startIndex, endIndex) {
      if (this.rangeTree.empty()) {
        return [{
          index: this.initialTopMostItemIndex,
          size: 0,
          offset: NaN
        }];
      }

      var ranges = this.rangeTree.rangesWithin(startIndex, endIndex);
      var result = [];

      for (var _iterator5 = _createForOfIteratorHelperLoose(ranges), _step5; !(_step5 = _iterator5()).done;) {
        var range = _step5.value;
        var start = Math.max(startIndex, range.start);
        var rangeEnd = typeof range.end === 'undefined' ? Infinity : range.end;
        var end = Math.min(endIndex, rangeEnd);

        for (var i = start; i <= end; i++) {
          result.push({
            index: i,
            size: range.value,
            offset: NaN
          });
        }
      }

      return result;
    };

    _proto.range = function range(startOffset, endOffset, minIndex, maxIndex) {
      if (minIndex === void 0) {
        minIndex = 0;
      }

      if (maxIndex === void 0) {
        maxIndex = Infinity;
      }

      if (this.offsetTree.empty()) {
        return [{
          index: this.initialTopMostItemIndex,
          size: 0,
          offset: 0
        }];
      }

      var ranges = this.offsetTree.rangesWithin(startOffset, endOffset);
      var result = [];

      for (var _iterator6 = _createForOfIteratorHelperLoose(ranges), _step6; !(_step6 = _iterator6()).done;) {
        var _step6$value = _step6.value,
            rangeOffset = _step6$value.start,
            _step6$value$value = _step6$value.value,
            rangeIndex = _step6$value$value.startIndex,
            endIndex = _step6$value$value.endIndex,
            size = _step6$value$value.size;
        var offset = rangeOffset;
        var startIndex = rangeIndex;

        if (rangeOffset < startOffset) {
          startIndex += Math.floor((startOffset - rangeOffset) / size);
          offset += (startIndex - rangeIndex) * size;
        }

        if (startIndex < minIndex) {
          offset += (minIndex - startIndex) * size;
          startIndex = minIndex;
        } // we don't know the size of this range - terminate with a probe item


        if (isNaN(size)) {
          result.push({
            index: startIndex,
            size: 0,
            offset: offset
          });
          return result;
        }

        endIndex = Math.min(endIndex, maxIndex);

        for (var i = startIndex; i <= endIndex; i++) {
          if (offset > endOffset) {
            break;
          }

          result.push({
            index: i,
            size: size,
            offset: offset
          });
          offset += size;
        }
      }

      return result;
    };

    _proto.total = function total(endIndex) {
      var ranges = this.rangeTree.rangesWithin(0, endIndex);
      var total = 0;

      for (var _iterator7 = _createForOfIteratorHelperLoose(ranges), _step7; !(_step7 = _iterator7()).done;) {
        var _step7$value = _step7.value,
            start = _step7$value.start,
            end = _step7$value.end,
            size = _step7$value.value;
        end = Math.min(end, endIndex);
        total += (end - start + 1) * (isNaN(size) ? 0 : size);
      }

      return total;
    };

    _proto.getOffsets = function getOffsets(indices) {
      var _this = this;

      var tree = AATree.empty();
      indices.forEach(function (index) {
        var offset = _this.offsetOf(index);

        tree = tree.insert(offset, index);
      });
      return new IndexList(tree);
    };

    _proto.setInitialIndex = function setInitialIndex(topMostItemIndex) {
      return new OffsetList(this.rangeTree, this.offsetTree, this.nanIndices, topMostItemIndex);
    };

    _proto.getDefaultSize = function getDefaultSize() {
      return this.rangeTree.findMaxValue(Infinity);
    };

    _proto.adjustForPrependedItems = function adjustForPrependedItems(count) {
      return this.fromTree(this.rangeTree.shift(count));
    };

    _proto.configureMaxRangeSize = function configureMaxRangeSize(maxRangeSize, maxRangeSizeExceededCallback) {
      this.maxRangeSize = maxRangeSize;
      this.rangeSizeExceededCallback = maxRangeSizeExceededCallback;
    };

    return OffsetList;
  }();
  var IndexList = /*#__PURE__*/function () {
    function IndexList(tree) {
      this.tree = tree;
    }

    var _proto2 = IndexList.prototype;

    _proto2.findMaxValue = function findMaxValue(offset) {
      return this.tree.findMaxValue(offset);
    };

    _proto2.empty = function empty() {
      return this.tree.empty();
    };

    return IndexList;
  }();

  function initialItemCountEngine(_ref) {
    var itemHeights$ = _ref.itemHeights$,
        viewportHeight$ = _ref.viewportHeight$;
    var initialItemCount$ = subject();
    var pendingRenderAfterInitial$ = subject(false);
    var unsubscribeInitial = initialItemCount$.subscribe(function (count) {
      var dummyItemHeight = 30;
      itemHeights$.next([{
        start: 0,
        end: 0,
        size: dummyItemHeight
      }]);
      viewportHeight$.next(dummyItemHeight * count);
      pendingRenderAfterInitial$.next(true);
      unsubscribeInitial();
    });
    return {
      initialItemCount$: initialItemCount$,
      pendingRenderAfterInitial$: pendingRenderAfterInitial$
    };
  }

  function stickyItemsEngine(_ref) {
    var offsetList$ = _ref.offsetList$,
        scrollTop$ = _ref.scrollTop$,
        topList$ = _ref.topList$,
        transposer$ = _ref.transposer$;
    var stickyItems$ = subject([]);
    var stickyItemsIndexList$ = combineLatest(offsetList$, stickyItems$).pipe(map(function (_ref2) {
      var offsetList = _ref2[0],
          stickyItems = _ref2[1];
      return offsetList.getOffsets(stickyItems);
    }));
    combineLatest(offsetList$, stickyItemsIndexList$, scrollTop$).pipe(filter(function (params) {
      return !params[1].empty() && !params[0].empty();
    }), withLatestFrom(topList$, transposer$), map(function (_ref3) {
      var _ref3$ = _ref3[0],
          offsetList = _ref3$[0],
          stickyItemsIndexList = _ref3$[1],
          scrollTop = _ref3$[2],
          topList = _ref3[1],
          transposer = _ref3[2];
      var currentStickyItem = stickyItemsIndexList.findMaxValue(Math.max(scrollTop, 0));

      if (topList.length === 1 && topList[0].index === currentStickyItem) {
        return topList;
      }

      var item = offsetList.itemAt(currentStickyItem);
      return transposer.transpose([item]);
    })).subscribe(topList$.next);
    return {
      stickyItems$: stickyItems$
    };
  }

  function offsetListEngine(_ref) {
    var totalCount = _ref.totalCount,
        itemHeight = _ref.itemHeight,
        defaultItemHeight = _ref.defaultItemHeight,
        initialTopMostItemIndex = _ref.initialTopMostItemIndex,
        viewportHeight$ = _ref.viewportHeight$,
        scrollTop$ = _ref.scrollTop$,
        topList$ = _ref.topList$,
        transposer$ = _ref.transposer$;
    var footerHeight$ = subject(0);
    var totalCount$ = subject(totalCount);
    var itemHeights$ = subject();

    var _initialItemCountEngi = initialItemCountEngine({
      itemHeights$: itemHeights$,
      viewportHeight$: viewportHeight$
    }),
        pendingRenderAfterInitial$ = _initialItemCountEngi.pendingRenderAfterInitial$,
        initialItemCount$ = _initialItemCountEngi.initialItemCount$;

    var heightsChanged$ = coldSubject();
    var initialOffsetList = OffsetList.create();

    if (itemHeight) {
      initialOffsetList = initialOffsetList.insert(0, 0, itemHeight);
    }

    if (defaultItemHeight) {
      initialOffsetList = initialOffsetList.insert(0, 0, defaultItemHeight);
    }

    if (initialTopMostItemIndex) {
      initialOffsetList = initialOffsetList.setInitialIndex(initialTopMostItemIndex);
    }

    var offsetList$ = subject(initialOffsetList);

    var _stickyItemsEngine = stickyItemsEngine({
      offsetList$: offsetList$,
      scrollTop$: scrollTop$,
      topList$: topList$,
      transposer$: transposer$
    }),
        stickyItems$ = _stickyItemsEngine.stickyItems$;

    var totalHeight$ = combineLatest(offsetList$, totalCount$, footerHeight$).pipe(map(function (_ref2) {
      var offsetList = _ref2[0],
          totalCount = _ref2[1],
          footerHeight = _ref2[2];
      return offsetList.total(totalCount - 1) + footerHeight;
    }));

    if (!itemHeight) {
      itemHeights$.pipe(withLatestFrom(offsetList$, stickyItems$, pendingRenderAfterInitial$)).subscribe(function (_ref3) {
        var heights = _ref3[0],
            offsetList = _ref3[1],
            stickyItems = _ref3[2],
            pendingRenderAfterInitial = _ref3[3];
        var newList = offsetList;

        if (pendingRenderAfterInitial) {
          newList = OffsetList.create();
          pendingRenderAfterInitial = false;
        }

        for (var _iterator = _createForOfIteratorHelperLoose(heights), _step; !(_step = _iterator()).done;) {
          var _step$value = _step.value,
              start = _step$value.start,
              end = _step$value.end,
              size = _step$value.size;

          if (newList.empty() && start === end && stickyItems.indexOf(start) > -1) {
            newList = newList.insertSpots(stickyItems, size);
          } else {
            newList = newList.insert(start, end, size);
          }
        }

        if (newList !== offsetList) {
          offsetList$.next(newList);
          heightsChanged$.next([true, newList]);
        } else {
          heightsChanged$.next([false, newList]);
        }
      });
    }

    return {
      totalCount$: totalCount$,
      offsetList$: offsetList$,
      totalHeight$: totalHeight$,
      footerHeight$: footerHeight$,
      initialItemCount$: initialItemCount$,
      itemHeights$: itemHeights$,
      stickyItems$: stickyItems$,
      heightsChanged$: heightsChanged$
    };
  }

  function scrolledToBottomEngine(_ref) {
    var totalHeight$ = _ref.totalHeight$,
        viewportHeight$ = _ref.viewportHeight$,
        scrollTop$ = _ref.scrollTop$;
    var scrolledToBottom$ = subject(false);
    var notAtBottom;
    combineLatest(scrollTop$, viewportHeight$, totalHeight$).pipe(map(function (_ref2) {
      var scrollTop = _ref2[0],
          viewportHeight = _ref2[1],
          totalHeight = _ref2[2];
      if (viewportHeight === 0) return false;
      return scrollTop === totalHeight - viewportHeight;
    })).subscribe(function (value) {
      clearTimeout(notAtBottom);

      if (!value) {
        notAtBottom = setTimeout(function () {
          return scrolledToBottom$.next(false);
        });
      } else {
        scrolledToBottom$.next(true);
      }
    });
    return {
      scrolledToBottom$: scrolledToBottom$
    };
  }

  function scrollSeekEngine(_ref) {
    var isScrolling$ = _ref.isScrolling$,
        scrollTop$ = _ref.scrollTop$,
        range$ = _ref.rangeChanged$;
    var scrollVelocity$ = subject(0);
    var isSeeking$ = subject(false);
    var scrollSeekConfiguration$ = subject(false);
    isScrolling$.pipe(filter(function (val) {
      return !val;
    }), mapTo(0)).subscribe(scrollVelocity$.next);
    scrollTop$.pipe(throttleTime(100), scan(function (_ref2, next) {
      var prev = _ref2[1];
      return [prev, next];
    }, [0, 0]), map(function (_ref3) {
      var prev = _ref3[0],
          next = _ref3[1];
      return next - prev;
    })).subscribe(scrollVelocity$.next);
    scrollVelocity$.pipe(withLatestFrom(scrollSeekConfiguration$, isSeeking$, range$), filter(function (_ref4) {
      var config = _ref4[1];
      return !!config;
    }), map(function (_ref5) {
      var speed = _ref5[0],
          config = _ref5[1],
          isSeeking = _ref5[2],
          range = _ref5[3];
      var exit = config.exit,
          enter = config.enter;

      if (isSeeking) {
        if (exit(speed, range)) {
          return false;
        }
      } else {
        if (enter(speed, range)) {
          return true;
        }
      }

      return isSeeking;
    }), duc()).subscribe(isSeeking$.next);
    combineLatest(isSeeking$, scrollVelocity$, range$).pipe(withLatestFrom(scrollSeekConfiguration$)).subscribe(function (_ref6) {
      var _ref6$ = _ref6[0],
          isSeeking = _ref6$[0],
          velocity = _ref6$[1],
          range = _ref6$[2],
          config = _ref6[1];
      return isSeeking && config && config.change(velocity, range);
    });
    return {
      isSeeking$: isSeeking$,
      scrollSeekConfiguration$: scrollSeekConfiguration$,
      scrollVelocity$: scrollVelocity$
    };
  }

  function initialTopMostItemIndexEngine(_ref) {
    var initialTopMostItemIndex = _ref.initialTopMostItemIndex,
        scrollToIndex$ = _ref.scrollToIndex$,
        scrollTop$ = _ref.scrollTop$,
        scrollTo$ = _ref.scrollTo$,
        offsetList$ = _ref.offsetList$;
    var scrolledToTopMostItem$ = subject(!initialTopMostItemIndex);
    scrollTop$.pipe(withLatestFrom(scrollTo$, scrolledToTopMostItem$)).subscribe(function (_ref2) {
      var scrollTop = _ref2[0],
          scrollTo = _ref2[1],
          scrolledToTopMostItem = _ref2[2];

      if (scrollTop === scrollTo.top && !scrolledToTopMostItem) {
        // skip a tick, so that the list$ can grab the scrollTop$ update
        setTimeout(function () {
          scrolledToTopMostItem$.next(true);
        });
      }
    });
    offsetList$.pipe(withLatestFrom(scrolledToTopMostItem$)).subscribe(function (_ref3) {
      var scrolledToTopMostItem = _ref3[1];

      if (!scrolledToTopMostItem) {
        // hack: wait for the viewport to get populated :(
        setTimeout(function () {
          scrollToIndex$.next(initialTopMostItemIndex);
        });
      }
    });
    return {
      scrolledToTopMostItem$: scrolledToTopMostItem$
    };
  }

  function scrollToIndexEngine(_ref) {
    var offsetList$ = _ref.offsetList$,
        topListHeight$ = _ref.topListHeight$,
        stickyItems$ = _ref.stickyItems$,
        viewportHeight$ = _ref.viewportHeight$,
        totalCount$ = _ref.totalCount$,
        totalHeight$ = _ref.totalHeight$,
        initialTopMostItemIndex = _ref.initialTopMostItemIndex,
        heightsChanged$ = _ref.heightsChanged$,
        scrollTop$ = _ref.scrollTop$;
    var scrollToIndex$ = coldSubject();
    var scrollToIndexRequestPending$ = subject(false);
    var scrollTopReportedAfterScrollToIndex$ = subject(true);
    var scrollTo$ = coldSubject();

    var _initialTopMostItemIn = initialTopMostItemIndexEngine({
      scrollTo$: scrollTo$,
      offsetList$: offsetList$,
      scrollToIndex$: scrollToIndex$,
      scrollTop$: scrollTop$,
      initialTopMostItemIndex: initialTopMostItemIndex
    }),
        scrolledToTopMostItem$ = _initialTopMostItemIn.scrolledToTopMostItem$;

    heightsChanged$.pipe(withLatestFrom(scrolledToTopMostItem$)).subscribe(function (_ref2) {
      var _ref2$ = _ref2[0],
          changed = _ref2$[0],
          scrolledToTopMostItem = _ref2[1];

      if (!changed && scrolledToTopMostItem) {
        scrollToIndexRequestPending$.next(false);
        scrollTopReportedAfterScrollToIndex$.next(true);
      }
    });
    scrollToIndex$.pipe(withLatestFrom(offsetList$, topListHeight$, stickyItems$, viewportHeight$, totalCount$, totalHeight$), map(function (_ref3) {
      var _location$behavior;

      var location = _ref3[0],
          offsetList = _ref3[1],
          topListHeight = _ref3[2],
          stickyItems = _ref3[3],
          viewportHeight = _ref3[4],
          totalCount = _ref3[5],
          totalHeight = _ref3[6];

      if (typeof location === 'number') {
        location = {
          index: location,
          align: 'start',
          behavior: 'auto'
        };
      }

      var _location = location,
          index = _location.index,
          _location$align = _location.align,
          align = _location$align === void 0 ? 'start' : _location$align;
      index = Math.max(0, index, Math.min(totalCount - 1, index));
      var offset = offsetList.offsetOf(index);

      if (align === 'end') {
        offset = offset - viewportHeight + offsetList.itemAt(index).size;
      } else if (align === 'center') {
        offset = Math.round(offset - viewportHeight / 2 + offsetList.itemAt(index).size / 2);
      } else {
        if (stickyItems.indexOf(index) === -1) {
          offset -= topListHeight;
        }
      }

      scrollTopReportedAfterScrollToIndex$.next(false);
      return {
        top: Math.max(0, Math.min(offset, Math.floor(totalHeight - viewportHeight))),
        behavior: (_location$behavior = location.behavior) !== null && _location$behavior !== void 0 ? _location$behavior : 'auto'
      };
    })).subscribe(scrollTo$.next);
    scrollTop$.pipe(withLatestFrom(scrollTopReportedAfterScrollToIndex$)).subscribe(function (_ref4) {
      var scrollTopReported = _ref4[1];

      if (!scrollTopReported) {
        scrollTopReportedAfterScrollToIndex$.next(true);
        scrollToIndexRequestPending$.next(true);
      }
    }); // if the list has received new heights, the scrollTo call calculations were wrong;
    // we will retry by re-requesting the same index

    offsetList$.pipe(withLatestFrom(scrollToIndexRequestPending$, scrollToIndex$)).subscribe(function (_ref5) {
      var scrollToIndexRequestPending = _ref5[1],
          scrollToIndex = _ref5[2];

      if (scrollToIndexRequestPending) {
        scrollToIndex$.next(scrollToIndex);
      }
    });
    return {
      scrollToIndex$: scrollToIndex$,
      scrollTo$: scrollTo$,
      scrolledToTopMostItem$: scrolledToTopMostItem$
    };
  }

  function topItemCountEngine(_ref) {
    var topList$ = _ref.topList$,
        transposer$ = _ref.transposer$,
        viewportHeight$ = _ref.viewportHeight$,
        totalCount$ = _ref.totalCount$,
        offsetList$ = _ref.offsetList$;
    var topItemCount$ = subject();
    combineLatest(offsetList$, topItemCount$, totalCount$, viewportHeight$).pipe(filter(function (params) {
      return params[1] > 0 && params[3] > 0;
    }), withLatestFrom(transposer$), map(function (_ref2) {
      var _ref2$ = _ref2[0],
          offsetList = _ref2$[0],
          topItemCount = _ref2$[1],
          totalCount = _ref2$[2],
          transposer = _ref2[1];
      var endIndex = Math.max(0, Math.min(topItemCount - 1, totalCount));
      return transposer.transpose(offsetList.indexRange(0, endIndex));
    })).subscribe(topList$.next);
    return {
      topItemCount$: topItemCount$
    };
  }

  function topListEngine() {
    var topList$ = subject([]);
    var topListHeight$ = topList$.pipe(map(function (items) {
      return items.reduce(function (total, item) {
        return total + item.size;
      }, 0);
    }));
    var minListIndex$ = topList$.pipe(map(function (topList) {
      return topList.length && topList[topList.length - 1].index + 1;
    }));
    return {
      topList$: topList$,
      topListHeight$: topListHeight$,
      minListIndex$: minListIndex$
    };
  }

  function makeOutput(observable) {
    var unsubscribe;
    return function (callback) {
      if (unsubscribe) {
        unsubscribe();
      }

      if (callback) {
        unsubscribe = observable.subscribe(callback);
      }
    };
  }
  function makeInput(subject) {
    return subject.next;
  }

  var VirtuosoStore = function VirtuosoStore(_ref) {
    var _ref$overscan = _ref.overscan,
        overscan = _ref$overscan === void 0 ? 0 : _ref$overscan,
        _ref$totalCount = _ref.totalCount,
        totalCount = _ref$totalCount === void 0 ? 0 : _ref$totalCount,
        itemHeight = _ref.itemHeight,
        initialTopMostItemIndex = _ref.initialTopMostItemIndex,
        defaultItemHeight = _ref.defaultItemHeight;
    var transposer$ = subject(new StubIndexTransposer());
    var viewportHeight$ = subject(0);
    var scrollTop$ = subject(0, false);
    var isScrolling$ = buildIsScrolling(scrollTop$);

    var _topListEngine = topListEngine(),
        topList$ = _topListEngine.topList$,
        minListIndex$ = _topListEngine.minListIndex$,
        topListHeight$ = _topListEngine.topListHeight$;

    var _offsetListEngine = offsetListEngine({
      totalCount: totalCount,
      itemHeight: itemHeight,
      defaultItemHeight: defaultItemHeight,
      initialTopMostItemIndex: initialTopMostItemIndex,
      viewportHeight$: viewportHeight$,
      scrollTop$: scrollTop$,
      transposer$: transposer$,
      topList$: topList$
    }),
        stickyItems$ = _offsetListEngine.stickyItems$,
        initialItemCount$ = _offsetListEngine.initialItemCount$,
        itemHeights$ = _offsetListEngine.itemHeights$,
        offsetList$ = _offsetListEngine.offsetList$,
        totalCount$ = _offsetListEngine.totalCount$,
        footerHeight$ = _offsetListEngine.footerHeight$,
        totalHeight$ = _offsetListEngine.totalHeight$,
        heightsChanged$ = _offsetListEngine.heightsChanged$;

    var _groupCountEngine = groupCountEngine({
      totalCount$: totalCount$,
      transposer$: transposer$,
      stickyItems$: stickyItems$
    }),
        groupCounts$ = _groupCountEngine.groupCounts$,
        groupIndices$ = _groupCountEngine.groupIndices$;

    var _scrolledToBottomEngi = scrolledToBottomEngine({
      totalHeight$: totalHeight$,
      viewportHeight$: viewportHeight$,
      scrollTop$: scrollTop$
    }),
        scrolledToBottom$ = _scrolledToBottomEngi.scrolledToBottom$;

    var _scrollToIndexEngine = scrollToIndexEngine({
      initialTopMostItemIndex: initialTopMostItemIndex,
      scrollTop$: scrollTop$,
      offsetList$: offsetList$,
      viewportHeight$: viewportHeight$,
      totalHeight$: totalHeight$,
      stickyItems$: stickyItems$,
      totalCount$: totalCount$,
      topListHeight$: topListHeight$,
      heightsChanged$: heightsChanged$
    }),
        scrolledToTopMostItem$ = _scrollToIndexEngine.scrolledToTopMostItem$,
        scrollToIndex$ = _scrollToIndexEngine.scrollToIndex$,
        scrollTo$ = _scrollToIndexEngine.scrollTo$;

    var _listEngine = listEngine({
      overscan: overscan,
      defaultItemHeight: defaultItemHeight,
      viewportHeight$: viewportHeight$,
      scrollTop$: scrollTop$,
      totalHeight$: totalHeight$,
      topListHeight$: topListHeight$,
      footerHeight$: footerHeight$,
      minListIndex$: minListIndex$,
      totalCount$: totalCount$,
      offsetList$: offsetList$,
      scrolledToTopMostItem$: scrolledToTopMostItem$,
      transposer$: transposer$
    }),
        listHeight$ = _listEngine.listHeight$,
        list$ = _listEngine.list$,
        listOffset$ = _listEngine.listOffset$,
        endReached$ = _listEngine.endReached$;

    var _adjustForPrependedIt = adjustForPrependedItemsEngine({
      offsetList$: offsetList$,
      scrollTop$: scrollTop$,
      scrollTo$: scrollTo$
    }),
        adjustForPrependedItems$ = _adjustForPrependedIt.adjustForPrependedItems$,
        adjustmentInProgress$ = _adjustForPrependedIt.adjustmentInProgress$;

    var _maxRangeSizeEngine = maxRangeSizeEngine({
      scrollTo$: scrollTo$,
      offsetList$: offsetList$,
      scrollTop$: scrollTop$,
      list$: list$
    }),
        maxRangeSize$ = _maxRangeSizeEngine.maxRangeSize$;

    var _topItemCountEngine = topItemCountEngine({
      offsetList$: offsetList$,
      totalCount$: totalCount$,
      transposer$: transposer$,
      viewportHeight$: viewportHeight$,
      topList$: topList$
    }),
        topItemCount$ = _topItemCountEngine.topItemCount$;

    var _followOutputEngine = followOutputEngine({
      totalCount$: totalCount$,
      scrollToIndex$: scrollToIndex$,
      scrolledToBottom$: scrolledToBottom$
    }),
        followOutput$ = _followOutputEngine.followOutput$;

    var stickyItemsOffset$ = listOffset$.pipe(map(function (offset) {
      return -offset;
    }));
    var rangeChanged$ = coldSubject();
    list$.pipe(withLatestFrom(adjustmentInProgress$), filter(function (_ref2) {
      var list = _ref2[0],
          inProgress = _ref2[1];
      return list.length !== 0 && !inProgress;
    }), map(function (_ref3) {
      var list = _ref3[0];
      var startIndex = list[0].index;
      var endIndex = list[list.length - 1].index;
      return {
        startIndex: startIndex,
        endIndex: endIndex
      };
    }), duc(function (current, next) {
      return !current || current.startIndex !== next.startIndex || current.endIndex !== next.endIndex;
    })).subscribe(rangeChanged$.next);

    var _scrollSeekEngine = scrollSeekEngine({
      scrollTop$: scrollTop$,
      isScrolling$: isScrolling$,
      rangeChanged$: rangeChanged$
    }),
        isSeeking$ = _scrollSeekEngine.isSeeking$,
        scrollVelocity$ = _scrollSeekEngine.scrollVelocity$,
        scrollSeekConfiguration$ = _scrollSeekEngine.scrollSeekConfiguration$;

    var MAX_OFFSET_HEIGHT = 15000000;
    var domTotalHeight$ = totalHeight$.pipe(map(function (value) {
      return Math.min(value, MAX_OFFSET_HEIGHT);
    }));
    var scrollTopMultiplier$ = combineLatest(totalHeight$, domTotalHeight$, viewportHeight$).pipe(map(function (_ref4) {
      var totalHeight = _ref4[0],
          domTotalHeight = _ref4[1],
          viewportHeight = _ref4[2];

      if (totalHeight === domTotalHeight) {
        return 1;
      }

      return (totalHeight - viewportHeight) / (domTotalHeight - viewportHeight);
    }));
    var domScrollTop$ = subject(0, false);
    var domListOffset$ = combineLatest(listOffset$, scrollTopMultiplier$).pipe(map(function (_ref5) {
      var offset = _ref5[0],
          multiplier = _ref5[1];
      return offset / multiplier;
    }));
    combineLatest(domScrollTop$, scrollTopMultiplier$).pipe(map(function (_ref6) {
      var domScrollTop = _ref6[0],
          multiplier = _ref6[1];
      return domScrollTop * multiplier;
    })).subscribe(scrollTop$.next);
    var computeItemKey$ = subject(function (itemIndex) {
      return itemIndex;
    });
    var renderProp$ = subject(function (index, _groupIndex) {
      return index;
    });
    var groupRenderProp$ = subject(function (index) {
      return index;
    });
    var itemContainer$ = subject('div');
    var groupContainer$ = subject('div');
    var itemRender$ = subject(false);
    var dataKey$ = subject(Symbol('data-key'));
    combineLatest(renderProp$, groupRenderProp$, scrollSeekConfiguration$, computeItemKey$, itemContainer$, groupContainer$, dataKey$).pipe(map(function (_ref7) {
      var _render = _ref7[0],
          groupRender = _ref7[1],
          scrollSeek = _ref7[2],
          computeItemKey = _ref7[3],
          ItemContainer = _ref7[4],
          GroupContainer = _ref7[5];
      return {
        render: function render(item, _ref8) {
          var key = _ref8.key,
              renderPlaceholder = _ref8.renderPlaceholder,
              itemProps = _objectWithoutPropertiesLoose(_ref8, ["key", "renderPlaceholder"]);

          if (computeItemKey) {
            key = computeItemKey(item.index);
          }

          if (item.type === 'group') {
            return React__default.createElement(GroupContainer, _extends({
              key: key
            }, itemProps), groupRender(item.groupIndex));
          } else {
            var children;

            if (scrollSeek && renderPlaceholder) {
              children = React__default.createElement(scrollSeek.placeholder, {
                height: itemProps['data-known-size'],
                index: item.index
              });
            } else {
              children = _render(item.transposedIndex, item.groupIndex);
            }

            return React__default.createElement(ItemContainer, _extends({}, itemProps, {
              key: key
            }), children);
          }
        }
      };
    })).subscribe(itemRender$.next);
    return {
      groupCounts: makeInput(groupCounts$),
      itemHeights: makeInput(itemHeights$),
      footerHeight: makeInput(footerHeight$),
      listHeight: makeInput(listHeight$),
      viewportHeight: makeInput(viewportHeight$),
      scrollTop: makeInput(domScrollTop$),
      topItemCount: makeInput(topItemCount$),
      totalCount: makeInput(totalCount$),
      scrollToIndex: makeInput(scrollToIndex$),
      initialItemCount: makeInput(initialItemCount$),
      followOutput: makeInput(followOutput$),
      adjustForPrependedItems: makeInput(adjustForPrependedItems$),
      maxRangeSize: makeInput(maxRangeSize$),
      scrollSeekConfiguration: makeInput(scrollSeekConfiguration$),
      renderProp: makeInput(renderProp$),
      groupRenderProp: makeInput(groupRenderProp$),
      computeItemKey: makeInput(computeItemKey$),
      itemContainer: makeInput(itemContainer$),
      groupContainer: makeInput(groupContainer$),
      dataKey: makeInput(dataKey$),
      itemRender: makeOutput(itemRender$),
      list: makeOutput(list$),
      isSeeking: makeOutput(isSeeking$),
      scrollVelocity: makeOutput(scrollVelocity$),
      itemsRendered: makeOutput(list$),
      topList: makeOutput(topList$),
      listOffset: makeOutput(domListOffset$),
      totalHeight: makeOutput(domTotalHeight$),
      endReached: makeOutput(endReached$),
      atBottomStateChange: makeOutput(scrolledToBottom$),
      totalListHeightChanged: makeOutput(totalHeight$),
      rangeChanged: makeOutput(rangeChanged$),
      isScrolling: makeOutput(isScrolling$),
      stickyItems: makeOutput(stickyItems$),
      groupIndices: makeOutput(groupIndices$),
      stickyItemsOffset: makeOutput(stickyItemsOffset$),
      scrollTo: makeOutput(scrollTo$)
    };
  };

  var viewportStyle = {
    top: 0,
    position: 'absolute',
    height: '100%',
    width: '100%'
  };

  var useHeight = function useHeight(input, onMount, onResize) {
    var ref = React.useRef(null);
    var animationFrameID = React.useRef(0);
    var observer = new ResizeObserver(function (entries) {
      var newHeight = Math.round(entries[0].contentRect.height);

      if (onResize) {
        animationFrameID.current = window.requestAnimationFrame(function () {
          var element = entries[0].target;

          if (document.body.contains(element)) {
            onResize(element);
          }
        });
      }

      input(newHeight);
    });

    var callbackRef = function callbackRef(elRef) {
      if (elRef) {
        observer.observe(elRef);

        if (onMount) {
          onMount(elRef);
        }

        ref.current = elRef;
      } else {
        observer.unobserve(ref.current);
        ref.current = null;
      }
    };

    React.useEffect(function () {
      return function () {
        return window.cancelAnimationFrame(animationFrameID.current);
      };
    }, []);
    return callbackRef;
  };

  function callbackToValue(output, defaultValue) {
    return function () {
      var result = defaultValue;
      output(function (val) {
        result = val;
      });
      return result;
    };
  }

  function useOutput(output, initialValue) {
    var _useState = React.useState(callbackToValue(output, initialValue)),
        value = _useState[0],
        setValue = _useState[1];

    React.useEffect(function () {
      output(setValue);
      return function () {
        return output(undefined);
      };
    }, [output]);
    return value;
  }
  var useSize = function useSize(callback) {
    var ref = React.useRef(null);
    var currentSize = React.useRef([0, 0]);
    var observer = new ResizeObserver(function (entries) {
      var _entries$0$contentRec = entries[0].contentRect,
          width = _entries$0$contentRec.width,
          height = _entries$0$contentRec.height;

      if (currentSize.current[0] !== width || currentSize.current[1] !== height) {
        currentSize.current = [width, height];
        callback({
          element: entries[0].target,
          width: Math.round(width),
          height: Math.round(height)
        });
      }
    });

    var callbackRef = function callbackRef(elRef) {
      if (elRef) {
        observer.observe(elRef);
        ref.current = elRef;
      } else {
        observer.unobserve(ref.current);
        ref.current = null;
      }
    };

    return callbackRef;
  };
  function simpleMemoize(func) {
    var called = false;
    var result;
    return function () {
      if (!called) {
        called = true;
        result = func();
      }

      return result;
    };
  }
  var WEBKIT_STICKY = '-webkit-sticky';
  var STICKY = 'sticky';
  var positionStickyCssValue = /*#__PURE__*/simpleMemoize(function () {
    var node = document.createElement('div');
    node.style.position = WEBKIT_STICKY;
    return node.style.position === WEBKIT_STICKY ? WEBKIT_STICKY : STICKY;
  });

  var VirtuosoFiller = function VirtuosoFiller(_ref) {
    var height = _ref.height;
    return React__default.createElement("div", {
      style: {
        height: height + "px",
        position: 'absolute',
        top: 0
      }
    }, "\xA0");
  };

  var VirtuosoList = /*#__PURE__*/React__default.memo(function () {
    var _useContext = React.useContext(VirtuosoContext),
        isSeeking = _useContext.isSeeking,
        topList = _useContext.topList,
        list = _useContext.list,
        itemRender = _useContext.itemRender;

    var items = useOutput(list, []);
    var topItems = useOutput(topList, []);
    var render = useOutput(itemRender, false);
    var renderPlaceholder = useOutput(isSeeking, false);
    var renderedItems = [];
    var topOffset = 0;
    var renderedTopItemIndices = [];
    var marginTop = topItems.reduce(function (acc, item) {
      return acc + item.size;
    }, 0);
    topItems.forEach(function (item, index) {
      var itemIndex = item.index;
      renderedTopItemIndices.push(itemIndex);
      var style = {
        top: topOffset + "px",
        marginTop: index === 0 ? -marginTop + "px" : undefined,
        zIndex: 2,
        position: positionStickyCssValue()
      };
      var props = {
        key: itemIndex,
        'data-index': itemIndex,
        'data-known-size': item.size,
        renderPlaceholder: renderPlaceholder,
        style: style
      };
      render && renderedItems.push(render.render(item, props));
      topOffset += item.size;
    });
    items.forEach(function (item) {
      if (renderedTopItemIndices.indexOf(item.index) > -1) {
        return;
      }

      render && renderedItems.push(render.render(item, {
        key: item.index,
        'data-index': item.index,
        'data-known-size': item.size,
        renderPlaceholder: renderPlaceholder
      }));
    });
    return React__default.createElement(React__default.Fragment, null, renderedItems);
  });

  var scrollerStyle = {
    height: '40rem',
    overflowY: 'auto',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    outline: 'none'
  };

  var DefaultScrollContainer = function DefaultScrollContainer(_ref) {
    var className = _ref.className,
        style = _ref.style,
        reportScrollTop = _ref.reportScrollTop,
        scrollTo = _ref.scrollTo,
        children = _ref.children;
    var elRef = React.useRef(null);
    var smoothScrollTarget = React.useRef(null);
    var currentScrollTop = React.useRef();
    var onScroll = React.useCallback(function (e) {
      var scrollTop = e.target.scrollTop;
      currentScrollTop.current = scrollTop;

      if (smoothScrollTarget.current !== null) {
        if (smoothScrollTarget.current === scrollTop) {
          // console.log('reporting smooth scrolling')
          smoothScrollTarget.current = null;
          reportScrollTop(scrollTop);
        }
      } else {
        reportScrollTop(scrollTop);
      }
    }, [reportScrollTop]);
    var ref = React.useCallback(function (theRef) {
      if (theRef) {
        theRef.addEventListener('scroll', onScroll, {
          passive: true
        });
        elRef.current = theRef;
      } else {
        if (elRef.current) {
          elRef.current.removeEventListener('scroll', onScroll);
        }
      }
    }, [onScroll]);
    scrollTo(function (location) {
      if (currentScrollTop.current !== location.top) {
        if (location.behavior === 'smooth') {
          smoothScrollTarget.current = location.top;
        }

        elRef.current && elRef.current.scrollTo(location);
      }
    });
    return React__default.createElement("div", {
      ref: ref,
      style: style,
      tabIndex: 0,
      className: className
    }, children);
  };

  var VirtuosoScroller = function VirtuosoScroller(_ref2) {
    var children = _ref2.children,
        style = _ref2.style,
        className = _ref2.className,
        _ref2$ScrollContainer = _ref2.ScrollContainer,
        ScrollContainer = _ref2$ScrollContainer === void 0 ? DefaultScrollContainer : _ref2$ScrollContainer,
        scrollTop = _ref2.scrollTop,
        scrollTo = _ref2.scrollTo;
    return React__default.createElement(ScrollContainer, {
      style: _extends({}, scrollerStyle, style),
      reportScrollTop: scrollTop,
      scrollTo: scrollTo,
      className: className
    }, children);
  };

  var DefaultFooterContainer = function DefaultFooterContainer(_ref) {
    var children = _ref.children,
        footerRef = _ref.footerRef;
    return React__default.createElement("footer", {
      ref: footerRef
    }, children);
  };
  var DefaultListContainer = function DefaultListContainer(_ref2) {
    var children = _ref2.children,
        listRef = _ref2.listRef,
        style = _ref2.style;
    return React__default.createElement("div", {
      ref: listRef,
      style: style
    }, children);
  };

  var VirtuosoFooter = function VirtuosoFooter(_ref3) {
    var footer = _ref3.footer,
        _ref3$FooterContainer = _ref3.FooterContainer,
        FooterContainer = _ref3$FooterContainer === void 0 ? DefaultFooterContainer : _ref3$FooterContainer;
    var footerCallbackRef = useHeight(React.useContext(VirtuosoContext).footerHeight);
    return React__default.createElement(FooterContainer, {
      footerRef: footerCallbackRef
    }, footer());
  };

  var getHeights = function getHeights(children) {
    var results = [];

    for (var i = 0, len = children.length; i < len; i++) {
      var child = children.item(i);

      if (!child || child.dataset.index === undefined) {
        continue;
      }

      var index = parseInt(child.dataset.index);
      var knownSize = parseInt(child.dataset.knownSize);
      var size = child.offsetHeight;

      if (size === knownSize) {
        continue;
      }

      var lastResult = results[results.length - 1];

      if (results.length === 0 || lastResult.size !== size || lastResult.end !== index - 1) {
        results.push({
          start: index,
          end: index,
          size: size
        });
      } else {
        results[results.length - 1].end++;
      }
    }

    return results;
  };

  var ListWrapper = function ListWrapper(_ref4) {
    var fixedItemHeight = _ref4.fixedItemHeight,
        children = _ref4.children,
        ListContainer = _ref4.ListContainer;

    var _useContext = React.useContext(VirtuosoContext),
        listHeight = _useContext.listHeight,
        itemHeights = _useContext.itemHeights,
        listOffset = _useContext.listOffset;

    var translate = useOutput(listOffset, 0);
    var style = {
      marginTop: translate + "px"
    };
    var listCallbackRef = useHeight(listHeight, function () {}, function (ref) {
      if (!fixedItemHeight) {
        var measuredItemHeights = getHeights(ref.children);
        itemHeights(measuredItemHeights);
      }
    });
    return React__default.createElement(ListContainer, {
      listRef: listCallbackRef,
      style: style
    }, children);
  };

  var VirtuosoView = function VirtuosoView(_ref5) {
    var style = _ref5.style,
        footer = _ref5.footer,
        fixedItemHeight = _ref5.fixedItemHeight,
        ScrollContainer = _ref5.ScrollContainer,
        ListContainer = _ref5.ListContainer,
        FooterContainer = _ref5.FooterContainer,
        className = _ref5.className;

    var _useContext2 = React.useContext(VirtuosoContext),
        scrollTo = _useContext2.scrollTo,
        scrollTop = _useContext2.scrollTop,
        totalHeight = _useContext2.totalHeight,
        viewportHeight = _useContext2.viewportHeight;

    var fillerHeight = useOutput(totalHeight, 0);

    var reportScrollTop = function reportScrollTop(st) {
      scrollTop(Math.max(st, 0));
    };

    var viewportCallbackRef = useHeight(viewportHeight);
    return React__default.createElement(VirtuosoScroller, {
      style: style,
      ScrollContainer: ScrollContainer,
      className: className,
      scrollTo: scrollTo,
      scrollTop: reportScrollTop
    }, React__default.createElement("div", {
      ref: viewportCallbackRef,
      style: viewportStyle
    }, React__default.createElement(ListWrapper, {
      fixedItemHeight: fixedItemHeight,
      ListContainer: ListContainer
    }, React__default.createElement(VirtuosoList, null), footer && React__default.createElement(VirtuosoFooter, {
      footer: footer,
      FooterContainer: FooterContainer
    }))), React__default.createElement(VirtuosoFiller, {
      height: fillerHeight
    }));
  };

  var DEFAULT_STYLE = {};
  var VirtuosoPresentation = /*#__PURE__*/React__default.memo(function (_ref) {
    var contextValue = _ref.contextValue,
        style = _ref.style,
        className = _ref.className,
        footer = _ref.footer,
        itemHeight = _ref.itemHeight,
        ScrollContainer = _ref.ScrollContainer,
        ListContainer = _ref.ListContainer,
        FooterContainer = _ref.FooterContainer;
    return React__default.createElement(VirtuosoContext.Provider, {
      value: contextValue
    }, React__default.createElement(VirtuosoView, {
      style: style || DEFAULT_STYLE,
      className: className,
      footer: footer,
      fixedItemHeight: itemHeight !== undefined,
      ScrollContainer: ScrollContainer,
      FooterContainer: FooterContainer,
      ListContainer: ListContainer || DefaultListContainer
    }));
  });
  var Virtuoso = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _useState = React.useState(function () {
      return VirtuosoStore(props);
    }),
        state = _useState[0];

    React.useImperativeHandle(ref, function () {
      return {
        scrollToIndex: function scrollToIndex(location) {
          state.scrollToIndex(location);
        },
        adjustForPrependedItems: function adjustForPrependedItems(count) {
          state.adjustForPrependedItems(count);
        }
      };
    }, [state]);
    React.useEffect(function () {
      state.isScrolling(props.scrollingStateChange);
      state.atBottomStateChange(props.atBottomStateChange);
      state.endReached(props.endReached);
      state.topItemCount(props.topItems || 0);
      state.totalCount(props.totalCount);
      props.initialItemCount && state.initialItemCount(props.initialItemCount);
      state.itemsRendered(props.itemsRendered);
      state.totalListHeightChanged(props.totalListHeightChanged);
      state.followOutput(!!props.followOutput);
      state.maxRangeSize(props.maxHeightCacheSize || Infinity);
      state.rangeChanged(props.rangeChanged);
      state.scrollSeekConfiguration(props.scrollSeek);
      state.computeItemKey(props.computeItemKey || function (key) {
        return key;
      });
      state.itemContainer(props.ItemContainer || 'div');
      state.renderProp(props.item);
      state.dataKey(props.dataKey);
      return function () {
        state.itemsRendered(undefined);
        state.totalListHeightChanged(undefined);
      };
    }, [state, props.scrollingStateChange, props.atBottomStateChange, props.endReached, props.topItems, props.totalCount, props.initialItemCount, props.itemsRendered, props.totalListHeightChanged, props.followOutput, props.maxHeightCacheSize, props.rangeChanged, props.scrollSeek, props.item, props.ItemContainer, props.computeItemKey, props.dataKey]);
    return React__default.createElement(VirtuosoPresentation, {
      contextValue: state,
      style: props.style,
      className: props.className,
      footer: props.footer,
      itemHeight: props.itemHeight,
      ScrollContainer: props.ScrollContainer,
      FooterContainer: props.FooterContainer,
      ListContainer: props.ListContainer
    });
  });
  Virtuoso.displayName = 'Virtuoso';

  var GroupedVirtuoso = /*#__PURE__*/React.forwardRef(function (props, ref) {
    var _useState = React.useState(VirtuosoStore(props)),
        state = _useState[0];

    React.useImperativeHandle(ref, function () {
      return {
        scrollToIndex: function scrollToIndex(location) {
          state.scrollToIndex(location);
        }
      };
    }, [state]);
    React.useEffect(function () {
      state.endReached(props.endReached);
      state.rangeChanged(props.rangeChanged);
      state.atBottomStateChange(props.atBottomStateChange);
      state.isScrolling(props.scrollingStateChange);
      state.groupCounts(props.groupCounts);
      state.groupIndices(props.groupIndices);
      state.itemsRendered(props.itemsRendered);
      state.totalListHeightChanged(props.totalListHeightChanged);
      state.renderProp(props.item);
      state.groupRenderProp(props.group);
      state.itemContainer(props.ItemContainer || 'div');
      state.groupContainer(props.GroupContainer || 'div');
      state.scrollSeekConfiguration(props.scrollSeek);
      return function () {
        state.itemsRendered(undefined);
        state.totalListHeightChanged(undefined);
      };
    }, [state, props.endReached, props.rangeChanged, props.atBottomStateChange, props.scrollingStateChange, props.groupCounts, props.groupIndices, props.itemsRendered, props.totalListHeightChanged, props.item, props.group, props.GroupContainer, props.ItemContainer, props.scrollSeek]);
    return React__default.createElement(VirtuosoPresentation, {
      contextValue: state,
      style: props.style,
      className: props.className,
      footer: props.footer,
      itemHeight: props.itemHeight,
      ScrollContainer: props.ScrollContainer,
      FooterContainer: props.FooterContainer,
      ListContainer: props.ListContainer
    });
  });
  GroupedVirtuoso.displayName = 'GroupedVirtuoso';

  var ceil = Math.ceil,
      floor = Math.floor,
      min = Math.min,
      max = Math.max;

  var hackFloor = function hackFloor(val) {
    return ceil(val) - val < 0.03 ? ceil(val) : floor(val);
  };

  var VirtuosoGridEngine = function VirtuosoGridEngine(initialItemCount) {
    if (initialItemCount === void 0) {
      initialItemCount = 0;
    }

    var gridDimensions$ = subject([0, 0, undefined, undefined]);
    var totalCount$ = subject(0);
    var scrollTop$ = subject(0);
    var overscan$ = subject(0);
    var itemRange$ = subject([0, max(initialItemCount - 1, 0)]);
    var remainingHeight$ = subject(0);
    var listOffset$ = subject(0);
    var scrollToIndex$ = coldSubject();
    var rangeChanged$ = coldSubject();
    combineLatest(gridDimensions$, scrollTop$, overscan$, totalCount$).pipe(withLatestFrom(itemRange$)).subscribe(function (_ref) {
      var _ref$ = _ref[0],
          _ref$$ = _ref$[0],
          viewportWidth = _ref$$[0],
          viewportHeight = _ref$$[1],
          itemWidth = _ref$$[2],
          itemHeight = _ref$$[3],
          scrollTop = _ref$[1],
          overscan = _ref$[2],
          totalCount = _ref$[3],
          itemRange = _ref[1];

      if (itemWidth === undefined || itemHeight === undefined) {
        return;
      }

      if (totalCount === 0) {
        itemRange$.next([0, -1]);
        listOffset$.next(0);
        rangeChanged$.next({
          startIndex: 0,
          endIndex: -1
        });
        return;
      }

      var startIndex = itemRange[0],
          endIndex = itemRange[1];
      var itemsPerRow = hackFloor(viewportWidth / itemWidth);

      var toRowIndex = function toRowIndex(index, roundFunc) {
        if (roundFunc === void 0) {
          roundFunc = floor;
        }

        return roundFunc(index / itemsPerRow);
      };

      var updateRange = function updateRange(down) {
        var _ref2 = down ? [0, overscan] : [overscan, 0],
            topOverscan = _ref2[0],
            bottomOverscan = _ref2[1];

        var startIndex = itemsPerRow * floor((scrollTop - topOverscan) / itemHeight);
        var endIndex = itemsPerRow * ceil((scrollTop + viewportHeight + bottomOverscan) / itemHeight) - 1;
        endIndex = min(totalCount - 1, endIndex);
        startIndex = min(endIndex, max(0, startIndex));
        itemRange$.next([startIndex, endIndex]);
        listOffset$.next(toRowIndex(startIndex) * itemHeight);
        rangeChanged$.next({
          startIndex: startIndex,
          endIndex: endIndex
        });
      };

      var listTop = itemHeight * toRowIndex(startIndex);
      var listBottom = itemHeight * toRowIndex(endIndex) + itemHeight; // totalCount has decreased, we have to re-render

      if (totalCount < endIndex - 1) {
        updateRange(true); // user is scrolling up - list top is below the top edge of the viewport
      } else if (listTop > scrollTop) {
        updateRange(false); // user is scrolling down - list bottom is above the bottom edge of the viewport
      } else if (listBottom < scrollTop + viewportHeight) {
        updateRange(true);
      }

      remainingHeight$.next(itemHeight * toRowIndex(totalCount - endIndex - 1, ceil));
    });
    var scrollTo$ = scrollToIndex$.pipe(withLatestFrom(gridDimensions$, totalCount$), map(function (_ref3) {
      var location = _ref3[0],
          _ref3$ = _ref3[1],
          viewportWidth = _ref3$[0],
          viewportHeight = _ref3$[1],
          itemWidth = _ref3$[2],
          itemHeight = _ref3$[3],
          totalCount = _ref3[2];

      if (itemWidth === undefined || itemHeight === undefined) {
        return {
          top: 0,
          behavior: 'auto'
        };
      }

      if (typeof location === 'number') {
        location = {
          index: location,
          align: 'start'
        };
      }

      var _location = location,
          index = _location.index,
          _location$align = _location.align,
          align = _location$align === void 0 ? 'start' : _location$align;
      index = Math.max(0, index, Math.min(totalCount - 1, index));
      var itemsPerRow = hackFloor(viewportWidth / itemWidth);
      var offset = floor(index / itemsPerRow) * itemHeight;

      if (align === 'end') {
        offset = offset - viewportHeight + itemHeight;
      } else if (align === 'center') {
        offset = Math.round(offset - viewportHeight / 2 + itemHeight / 2);
      }

      return {
        top: offset,
        behavior: 'auto'
      };
    }));
    var isScrolling$ = buildIsScrolling(scrollTop$);
    var endReached$ = coldSubject();
    var currentEndIndex = 0;
    itemRange$.pipe(withLatestFrom(totalCount$)).subscribe(function (_ref4) {
      var _ref4$ = _ref4[0],
          endIndex = _ref4$[1],
          totalCount = _ref4[1];

      if (totalCount === 0) {
        return;
      }

      if (endIndex === totalCount - 1) {
        if (currentEndIndex !== endIndex) {
          currentEndIndex = endIndex;
          endReached$.next(endIndex);
        }
      }
    });
    return {
      gridDimensions: makeInput(gridDimensions$),
      totalCount: makeInput(totalCount$),
      scrollTop: makeInput(scrollTop$),
      overscan: makeInput(overscan$),
      scrollToIndex: makeInput(scrollToIndex$),
      itemRange: makeOutput(itemRange$),
      remainingHeight: makeOutput(remainingHeight$),
      listOffset: makeOutput(listOffset$),
      scrollTo: makeOutput(scrollTo$),
      isScrolling: makeOutput(isScrolling$),
      endReached: makeOutput(endReached$),
      rangeChanged: makeOutput(rangeChanged$)
    };
  };

  var VirtuosoGrid = /*#__PURE__*/function (_React$PureComponent) {
    _inheritsLoose(VirtuosoGrid, _React$PureComponent);

    function VirtuosoGrid() {
      var _this;

      _this = _React$PureComponent.apply(this, arguments) || this;
      _this.state = VirtuosoGridEngine(_this.props.initialItemCount);
      return _this;
    }

    VirtuosoGrid.getDerivedStateFromProps = function getDerivedStateFromProps(props, engine) {
      engine.overscan(props.overscan || 0);
      engine.totalCount(props.totalCount);
      engine.isScrolling(props.scrollingStateChange);
      engine.endReached(props.endReached);
      engine.rangeChanged(props.rangeChanged);
      return null;
    };

    var _proto = VirtuosoGrid.prototype;

    _proto.scrollToIndex = function scrollToIndex(location) {
      this.state.scrollToIndex(location);
    };

    _proto.render = function render() {
      return React__default.createElement(VirtuosoGridFC, Object.assign({}, this.props, {
        engine: this.state
      }));
    };

    return VirtuosoGrid;
  }(React__default.PureComponent);

  var buildItems = function buildItems(_ref, item, itemClassName, ItemContainer, computeItemKey) {
    var startIndex = _ref[0],
        endIndex = _ref[1];
    var items = [];

    for (var index = startIndex; index <= endIndex; index++) {
      var key = computeItemKey(index);
      items.push(React__default.createElement(ItemContainer, {
        key: key,
        className: itemClassName
      }, item(index)));
    }

    return items;
  };

  var VirtuosoGridFC = function VirtuosoGridFC(_ref2) {
    var ScrollContainer = _ref2.ScrollContainer,
        _ref2$ItemContainer = _ref2.ItemContainer,
        ItemContainer = _ref2$ItemContainer === void 0 ? 'div' : _ref2$ItemContainer,
        _ref2$ListContainer = _ref2.ListContainer,
        ListContainer = _ref2$ListContainer === void 0 ? 'div' : _ref2$ListContainer,
        className = _ref2.className,
        item = _ref2.item,
        _ref2$itemClassName = _ref2.itemClassName,
        itemClassName = _ref2$itemClassName === void 0 ? 'virtuoso-grid-item' : _ref2$itemClassName,
        _ref2$listClassName = _ref2.listClassName,
        listClassName = _ref2$listClassName === void 0 ? 'virtuoso-grid-list' : _ref2$listClassName,
        engine = _ref2.engine,
        _ref2$style = _ref2.style,
        style = _ref2$style === void 0 ? {
      height: '40rem'
    } : _ref2$style,
        _ref2$computeItemKey = _ref2.computeItemKey,
        computeItemKey = _ref2$computeItemKey === void 0 ? function (key) {
      return key;
    } : _ref2$computeItemKey;
    var itemRange = engine.itemRange,
        listOffset = engine.listOffset,
        remainingHeight = engine.remainingHeight,
        gridDimensions = engine.gridDimensions,
        scrollTo = engine.scrollTo,
        scrollTop = engine.scrollTop;
    var fillerHeight = useOutput(remainingHeight, 0);
    var translate = useOutput(listOffset, 0);
    var listStyle = {
      paddingTop: translate + "px",
      paddingBottom: fillerHeight + "px"
    };
    var itemIndexRange = useOutput(itemRange, [0, 0]);
    var viewportCallbackRef = useSize(function (_ref3) {
      var element = _ref3.element,
          width = _ref3.width,
          height = _ref3.height;
      var firstItem = element.firstChild.firstChild;
      gridDimensions([width, height, firstItem.offsetWidth, firstItem.offsetHeight]);
    });
    return React__default.createElement(VirtuosoScroller, {
      style: style,
      ScrollContainer: ScrollContainer,
      className: className,
      scrollTo: scrollTo,
      scrollTop: scrollTop
    }, React__default.createElement("div", {
      ref: viewportCallbackRef,
      style: viewportStyle
    }, React__default.createElement(ListContainer, {
      style: listStyle,
      className: listClassName
    }, buildItems(itemIndexRange, item, itemClassName, ItemContainer, computeItemKey))));
  };

  exports.GroupedVirtuoso = GroupedVirtuoso;
  exports.Virtuoso = Virtuoso;
  exports.VirtuosoGrid = VirtuosoGrid;
  exports.VirtuosoPresentation = VirtuosoPresentation;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
