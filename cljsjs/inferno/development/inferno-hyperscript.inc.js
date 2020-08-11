(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('inferno')) :
    typeof define === 'function' && define.amd ? define(['exports', 'inferno'], factory) :
    (factory((global.Inferno = global.Inferno || {}),global.Inferno));
}(this, (function (exports,inferno) { 'use strict';

    var isBrowser = !!(typeof window !== 'undefined' && window.document);
    var isArray = Array.isArray;
    function isStringOrNumber(o) {
        var type = typeof o;
        return type === 'string' || type === 'number';
    }
    function isString(o) {
        return typeof o === 'string';
    }
    function isUndefined(o) {
        return o === void 0;
    }

    var classIdSplit = /([.#]?[a-zA-Z0-9_:-]+)/;
    var notClassId = /^\.|#/;
    function parseTag(tag, props) {
        if (!tag) {
            return 'div';
        }
        var noId = props && isUndefined(props.id);
        var tagParts = tag.split(classIdSplit);
        var tagName = null;
        if (notClassId.test(tagParts[1])) {
            tagName = 'div';
        }
        var classes;
        for (var i = 0, len = tagParts.length; i < len; i++) {
            var part = tagParts[i];
            if (!part) {
                continue;
            }
            var type = part.charAt(0);
            if (!tagName) {
                tagName = part;
            }
            else if (type === '.') {
                if (classes === void 0) {
                    classes = [];
                }
                classes.push(part.substring(1, part.length));
            }
            else if (type === '#' && noId) {
                props.id = part.substring(1, part.length);
            }
        }
        if (classes) {
            if (props.className) {
                classes.push(props.className);
            }
            props.className = classes.join(' ');
        }
        return tagName || 'div';
    }
    function isChildren(x) {
        return isStringOrNumber(x) || (x && isArray(x));
    }
    function extractProps(_props, isElement, _tag) {
        _props = _props || {};
        var tag = isElement ? parseTag(_tag, _props) : _tag;
        var newProps = {};
        var key = null;
        var ref = null;
        var children = null;
        var className = null;
        for (var prop in _props) {
            if (isElement && (prop === 'className' || prop === 'class')) {
                className = _props[prop];
            }
            else if (prop === 'key') {
                key = _props[prop];
            }
            else if (prop === 'ref') {
                ref = _props[prop];
            }
            else if (prop === 'hooks') {
                ref = _props[prop];
            }
            else if (prop === 'children') {
                children = _props[prop];
            }
            else if (!isElement && prop.substr(0, 11) === 'onComponent') {
                if (!ref) {
                    ref = {};
                }
                ref[prop] = _props[prop];
            }
            else {
                newProps[prop] = _props[prop];
            }
        }
        return { tag: tag, props: newProps, key: key, ref: ref, children: children, className: className };
    }
    /**
     * Creates virtual node
     * @param {string|VNode|Function} _tag Name for virtual node
     * @param {object=} _props Additional properties for virtual node
     * @param {string|number|VNode|Array<string|number|VNode>|null=} _children Optional children for virtual node
     * @param {boolean} noNormalize Set true to avoid normalization process. Tells Inferno to trust the input as is. Used for optimization.
     * @returns {VNode} returns new virtual node
     */
    function h(_tag, _props, _children) {
        // If a child array or text node are passed as the second argument, shift them
        if (!_children && isChildren(_props)) {
            _children = _props;
            _props = {};
        }
        var isElement = isString(_tag);
        var ref$1 = extractProps(_props, isElement, _tag);
        var tag = ref$1.tag;
        var props = ref$1.props;
        var key = ref$1.key;
        var ref = ref$1.ref;
        var children = ref$1.children;
        var className = ref$1.className;
        if (isElement) {
            var flags = inferno.getFlagsForElementVnode(tag);
            if (props.contenteditable !== void 0) {
                flags |= 4096 /* ContentEditable */;
            }
            return inferno.createVNode(flags, tag, className, _children || children, 0 /* UnknownChildren */, props, key, ref);
        }
        else {
            if (children || _children) {
                props.children = children || _children;
            }
            return inferno.createComponentVNode(2 /* ComponentUnknown */, tag, props, key, ref);
        }
    }

    exports.h = h;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
