(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.FelaPresetDev = factory());
}(this, function () { 'use strict';

  var babelHelpers = {};
  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.defineProperty = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  babelHelpers.extends = Object.assign || function (target) {
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

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  babelHelpers;


  function __commonjs(fn, module) { return module = { exports: {} }, fn(module, module.exports), module.exports; }

  function addLogger(style, type) {
    if (true) {
      console.log(type, babelHelpers.extends({}, style));
    }

    return style;
  }
  /* eslint-disable no-console */

  var logger = (function () {
    return addLogger;
  });

  var RULE_TYPE = 1;
  var KEYFRAME_TYPE = 2;

  function isObject(value) {
    return (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) === 'object' && !Array.isArray(value);
  }

  var regex = /^(:|\[|>|&)/;

  function isNestedSelector(property) {
    return regex.test(property);
  }

  function isMediaQuery(property) {
    return property.substr(0, 6) === '@media';
  }

  var percentageRegex = /from|to|%/;

  function validateStyleObject(style, logInvalid, deleteInvalid) {
    for (var property in style) {
      var value = style[property];

      if (isObject(value)) {
        if (isNestedSelector(property) || isMediaQuery(property)) {
          validateStyleObject(value, logInvalid, deleteInvalid);
        } else {
          if (deleteInvalid) {
            delete style[property];
          }
          if (logInvalid) {
            console.error((deleteInvalid ? '[Deleted] ' : ' ') + 'Invalid nested property. Only use nested media queries, pseudo classes, child selectors or &-combinators.\n              Maybe you forgot to add a plugin that resolves "' + property + '".', {
              property: property,
              value: value
            });
          }
        }
      }
    }
  }

  function isValidPercentage(percentage) {
    var percentageValue = parseFloat(percentage);

    return percentage.indexOf('%') > -1 && (percentageValue < 0 || percentageValue > 100);
  }

  function validateKeyframeObject(style, logInvalid, deleteInvalid) {
    for (var percentage in style) {
      var value = style[percentage];
      if (!isObject(value)) {
        if (logInvalid) {
          console.error((deleteInvalid ? '[Deleted] ' : ' ') + 'Invalid keyframe value. An object was expected.', {
            percentage: percentage,
            style: value
          });
        }
        if (deleteInvalid) {
          delete style[percentage];
        }
        // check for invalid percentage values, it only allows from, to or 0% - 100%
      } else if (!percentageRegex.test(percentage) || !isValidPercentage(percentage)) {
        if (logInvalid) {
          console.error((deleteInvalid ? '[Deleted] ' : ' ') + 'Invalid keyframe property.\n              Expected either `to`, `from` or a percentage value between 0 and 100.', {
            percentage: percentage,
            style: value
          });
        }
        if (deleteInvalid) {
          delete style[percentage];
        }
      }
    }
  }

  function validateStyle(style, type, options) {
    var logInvalid = options.logInvalid,
        deleteInvalid = options.deleteInvalid;


    if (type === KEYFRAME_TYPE) {
      validateKeyframeObject(style, logInvalid, deleteInvalid);
    } else if (type === RULE_TYPE) {
      validateStyleObject(style, logInvalid, deleteInvalid);
    }

    return style;
  }

  var defaultOptions = {
    logInvalid: true,
    deleteInvalid: false
  };

  function validator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (style, type) {
      return validateStyle(style, type, babelHelpers.extends({}, defaultOptions, options));
    };
  }

  var dev = [logger({ logMetaData: true }), validator()];

  return dev;

}));
//# sourceMappingURL=fela-preset-dev.js.map