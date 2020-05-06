import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import ReactDOM from 'react-dom';
import { FormattedMessage } from 'react-intl';

var styles = {"test":"_styles-module__test__3ybTi"};

let _ = t => t,
    _t,
    _t2;
const Wrapper = styled.header(_t || (_t = _`
  height: ${0};
  width: 100%;
`), props => props.isDesktop ? '80px' : '60px');
Wrapper.displayName = 'HeaderWrapper';
const Content = styled.div(_t2 || (_t2 = _`
  position: fixed;
  width: 100%;
  z-index: 1;
`));
Content.displayName = 'HeaderContent';

var colors = {
  black: '#000',
  white: '#fff',
  red: '#e25050',
  blackInactive: '#252525',
  darkGray1: '#737373',
  darkGray2: '#adadad',
  darkGray3: '#222',
  lightGray1: '#dadada',
  lightGray2: '#eee',
  lightGray3: '#fafafa',
  lightGray4: 'rgba(238, 238, 238, 0.5)',
  lightGray5: '#5b5b5b',
  lightGray6: '#acacac',
  lightGray7: '#565656',
  grayLinkHover: '#807c7c',
  beige: '#d6b59f',
  beige2: '#B4876E',
  lightBeige: '#ead2c2',
  lightBeige2: '#faf7f0',
  lightBeige3: '#ac998c',
  lightBeige4: '#ede9e9',
  error: '#f44336',
  facebookBlue: '#4268b3',
  brown: '#a52a2a',
  whiteSmoke: '#f1f0f0',
  grey: '#807c7c',
  tableGray: '#f9f9f9'
};

const fontWeight = {
  light: '300',
  regular: '500',
  medium: '700'
};

let _$1 = t => t,
    _t$1,
    _t2$1,
    _t3,
    _t4,
    _t5,
    _t6;
const Wrapper$1 = styled.section(_t$1 || (_t$1 = _$1`
  background: transparent;
  width: 100%;
`));
Wrapper$1.displayName = 'HeaderDesktopWrapper';
const Content$1 = styled.header(_t2$1 || (_t2$1 = _$1`
  border-bottom: 1px solid ${0};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${0};
  font-size: 12px;
  font-weight: ${0};
  height: ${0};
  letter-spacing: 1.2px;
  position: relative;
  text-transform: uppercase;
  transition: height 0.25s ease;
`), colors.whiteSmoke, colors.white, fontWeight.light, p => p.shrinked ? '60px' : '80px');
Content$1.displayName = 'HeaderDesktopContent';
const Logo = styled.a(_t3 || (_t3 = _$1`
  width: 180px;
  height: 58px;
`));
Logo.displayName = 'HeaderDesktopLogo';
const Menu = styled.div(_t4 || (_t4 = _$1`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  height: 100%;
  padding-right: 30px;
`));
Menu.displayName = 'HeaderDesktopMenu';
const Item = styled.div(_t5 || (_t5 = _$1`
  align-items: center;
  display: flex;
  height: 100%;
  margin-left: 45px;
`));
Item.displayName = 'HeaderDesktopItem';
const Overlay = styled.div(_t6 || (_t6 = _$1`
  bottom: 0;
  display: ${0};
  opacity: 0.5;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0%;
  width: 100%;
`), p => p.isVisible ? 'block' : 'none');
Overlay.displayName = 'HeaderDesktopOverlay';

let _$2 = t => t,
    _t$2,
    _t2$2,
    _t3$1;
const Wrapper$2 = styled.div(_t$2 || (_t$2 = _$2`
  padding-left: 30px;
  width: 30%;
`));
Wrapper$2.displayName = 'WrapperNavigation';
const MainSections = styled.div(_t2$2 || (_t2$2 = _$2`
  display: flex;
  list-style-type: none;
  padding: 0;
`));
MainSections.displayName = 'MainSectionsNavigation';
const MainSection = styled.a(_t3$1 || (_t3$1 = _$2`
  color: ${0};
  cursor: pointer;
  display: block;
  min-width: 90px;
  text-decoration: none;
  transition: all 0.25s;

  &:hover {
    color: ${0};
  }
`), colors.black, colors.grey);
MainSection.displayName = 'MainSectionNavigation';

let _$3 = t => t,
    _t$3,
    _t2$3,
    _t3$2,
    _t4$1,
    _t5$1,
    _t6$1,
    _t7,
    _t8,
    _t9;
const fadeInKeyframes = keyframes(_t$3 || (_t$3 = _$3`
  from { opacity: 0; }
  to { opacity: 1; }
`));
const fadeOutKeyframes = keyframes(_t2$3 || (_t2$3 = _$3`
  from { opacity: 1; }
  to { opacity: 0; }
`));
const slideInKeyframes = keyframes(_t3$2 || (_t3$2 = _$3`
  from {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`));
const fadeIn = css(_t4$1 || (_t4$1 = _$3`
  animation: ${0} 0.5s forwards ease;
`), fadeInKeyframes);
const fadeOut = css(_t5$1 || (_t5$1 = _$3`
  animation: ${0} 0.5s forwards ease;
`), fadeOutKeyframes);
const spinnerKeyframes = keyframes(_t6$1 || (_t6$1 = _$3`
  to { transform: rotate(1turn); }
`));
const spin = css(_t7 || (_t7 = _$3`
  animation: ${0} 0.86s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite;
`), spinnerKeyframes);
const extend = css(_t8 || (_t8 = _$3`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`));
const slideIn = css(_t9 || (_t9 = _$3`
  animation: ${0} 0.5s forwards ease-out;
`), slideInKeyframes);

let _$4 = t => t,
    _t$4,
    _t2$4,
    _t3$3,
    _t4$2,
    _t5$2;
const Layers = styled.div(_t$4 || (_t$4 = _$4`
  position: relative;
  height: 0;
  width: 100%;
`));
Layers.displayName = 'HeaderDesktopLayers';
const Layer = styled.div(_t2$4 || (_t2$4 = _$4`
  ${0};
  background: white;
  border-bottom: 1px solid ${0};
  display: ${0};
  min-height: 300px;
  padding: ${0};
  position: absolute;
  top: 0%;
  width: 100%;
`), fadeIn, colors.whiteSmoke, p => p.active ? 'flex' : 'none', p => `30px 0 30px ${30 + 90 * p.order}px`);
Layer.displayName = 'HeaderDesktopLayer';
const Column = styled.div(_t3$3 || (_t3$3 = _$4`
  min-width: 200px;
  padding-right: 40px;
`));
Column.displayName = 'HeaderDesktopColumn';
const MenuTitle = styled.div(_t4$2 || (_t4$2 = _$4`
  padding: 8px 0;
`));
MenuTitle.displayName = 'HeaderDesktopMenuTitle';
const MenuItem = styled.a(_t5$2 || (_t5$2 = _$4`
  color: ${0};
  cursor: pointer;
  display: block;
  font-size: 15px;
  font-weight: ${0};
  letter-spacing: 0.375px;
  padding: 8px 0;
  text-decoration: none;

  &:hover {
    color: ${0};
  }
`), colors.black, fontWeight.light, colors.grey);
MenuItem.displayName = 'HeaderDesktopMenuItem';

const NavigationLayers = ({
  activeSection,
  sections,
  mountingPoint
}) => {
  const layout = /*#__PURE__*/React.createElement(Layers, null, sections.map((s, i) => /*#__PURE__*/React.createElement(Layer, {
    key: s.slug,
    active: s.slug === activeSection,
    order: i
  }, s.children.map(col => /*#__PURE__*/React.createElement(Column, {
    key: col.slug
  }, /*#__PURE__*/React.createElement(MenuTitle, null, col.name), col.children.map(menuItem => /*#__PURE__*/React.createElement(MenuItem, {
    key: menuItem.slug,
    href: menuItem.url
  }, menuItem.name)))))));
  if (!mountingPoint) return layout;
  return ReactDOM.createPortal(layout, mountingPoint);
};
NavigationLayers.propTypes = {
  menuItems: PropTypes.shape({
    sections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        children: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string,
          url: PropTypes.string
        }))
      }))
    }))
  }),
  activeSection: PropTypes.string,
  mountingPoint: PropTypes.object
};

const Navigation = ({
  sections,
  setActive,
  activeSection,
  layersMountingPoint
}) => {
  return /*#__PURE__*/React.createElement(Wrapper$2, null, /*#__PURE__*/React.createElement(MainSections, null, sections.map(i => /*#__PURE__*/React.createElement(MainSection, {
    onMouseEnter: () => setActive(i.slug),
    onClick: () => setActive(i.slug),
    href: "#",
    key: i.name
  }, i.name))), layersMountingPoint !== null && /*#__PURE__*/React.createElement(NavigationLayers, {
    sections: sections,
    activeSection: activeSection,
    mountingPoint: layersMountingPoint.current
  }));
};
Navigation.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  setActive: PropTypes.func,
  activeSection: PropTypes.string,
  layersMountingPoint: PropTypes.object
};

let _$5 = t => t,
    _t$5,
    _t2$5,
    _t3$4;
const Wrapper$3 = styled.button(_t$5 || (_t$5 = _$5`
  position: relative;
  background: transparent;
  padding: 0;
  appearance: none;
  outline: 0;
  border: none;
  cursor: pointer;
`));
Wrapper$3.displayName = 'CartIconWrapper';
const Badge = styled.div(_t2$5 || (_t2$5 = _$5`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${0};
  font-size: 12px;
`), colors.lightGray1);
Badge.displayName = 'CartIconBadge';
const Icon = styled.div(_t3$4 || (_t3$4 = _$5`
  width: 20px;
  height: 22px;
`));
Icon.displayName = 'CartIconIcon';

var BagIcon = require("./bag~gcUyBZpP.svg");

class CartIcon extends PureComponent {
  render() {
    const {
      itemsCount,
      onClick
    } = this.props;
    return /*#__PURE__*/React.createElement(Wrapper$3, {
      onClick: onClick
    }, /*#__PURE__*/React.createElement(Icon, null, /*#__PURE__*/React.createElement("img", {
      src: BagIcon
    })), /*#__PURE__*/React.createElement(Badge, null, itemsCount));
  }

}
CartIcon.propTypes = {
  itemsCount: PropTypes.number,
  onClick: PropTypes.func
};

let _$6 = t => t,
    _t$6;
const Button = styled.button(_t$6 || (_t$6 = _$6`
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  font-weight: 300;
  height: 40px;
  justify-content: center;
  letter-spacing: inherit;
  padding: 0;
  text-transform: uppercase;

  & > span {
    margin-top: 1px;
  }

  & > img {
    margin-right: 5px;
    width: 18px;
  }
`));

const SearchButton = ({
  toggle,
  children
}) => /*#__PURE__*/React.createElement(Button, {
  onClick: () => toggle()
}, children);

SearchButton.propTypes = {
  toggle: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};
SearchButton.propTypes = {
  toggle: PropTypes.func
};
SearchButton.defaultProps = {
  toggle: () => {}
};

var MejuriLogo = require("./logo~XjKPrCrd.svg");

var MagniGlass = require("./loupe~bnNZffbQ.svg");

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable$1.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag$1 = '[object Number]',
    objectTag = '[object Object]',
    regexpTag$1 = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag$1 = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag$1] =
typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag$1] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag$1] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag$1] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$5.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$8;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$9.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$a.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$7.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Promise = _getNative(_root, 'Promise');

var _Promise = Promise;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    objectTag$2 = '[object Object]';

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$2 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$2 : othTag;

  var objIsObj = objTag == objectTag$2,
      othIsObj = othTag == objectTag$2,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$8.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$8.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$4 = 1,
    COMPARE_UNORDERED_FLAG$2 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

/** `Object#toString` result references. */
var symbolTag$1 = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag$1);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$5 = 1,
    COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1(collection) ? Array(collection.length) : [];

  _baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap;

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayMap : _baseMap;
  return func(collection, _baseIteratee(iteratee));
}

var map_1 = map;

let _$7 = t => t,
    _t$7,
    _t2$6,
    _t3$5,
    _t4$3;
const Panel = styled.ul(_t$7 || (_t$7 = _$7`
  ${0}
  display: none;
  position: absolute;
  background-color: ${0};
  border: 1px solid ${0};
  padding: 30px 50px;
  top: 97%;
  right: -46px;
  margin: 0;
`), fadeIn, colors.white, colors.lightGray1);
Panel.displayName = 'UserMenuPanel';
const Wrapper$4 = styled.div(_t2$6 || (_t2$6 = _$7`
  height: inherit;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover ${0} {
    display: block;
  }
`), Panel);
Wrapper$4.displayName = 'WrapperUserMenu';
const LabelChevron = styled.div(_t3$5 || (_t3$5 = _$7`
  display: flex;
  align-items: center;

  & > img {
    width: 15px;
    height: 6px;
    margin-left: 3px;
    transform: rotate(180deg);
  }
`));
LabelChevron.displayName = 'UserMenuLabelChevron';
const Option = styled.li(_t4$3 || (_t4$3 = _$7`
  list-style-type: none;

  & > a {
    display: block;
    color: ${0};
    font-weight: ${0};
    font-size: 14px;
    text-decoration: none;
    text-transform: none;
    white-space: nowrap;
    line-height: 20px;
    padding: 3.5px 0;

    &:hover {
      color: ${0};
    }
  }
`), colors.black, fontWeight.light, colors.darkGray1);
Option.displayName = 'UserMenuOption';

var ChevronIcon = require("./chevron~FicxRuTq.svg");

const menuOptions = {
  'myProfile': {
    url: '/profile'
  },
  'storeCredit': {
    url: '/profile/available'
  },
  'myOrders': {
    url: '/profile/history'
  },
  'myWishList': {
    url: '/profile/wish-list'
  },
  'shippingInfo': {
    url: '/profile/shipping-info'
  },
  'billingInfo': {
    url: '/profile/billing-info'
  },
  'spreeAdmin': {
    url: '/shop/admin'
  },
  'signOut': {
    url: '/signout'
  }
};

const UserMenu = ({
  nameOrEmail
}) => {
  return /*#__PURE__*/React.createElement(Wrapper$4, null, /*#__PURE__*/React.createElement(LabelChevron, null, nameOrEmail, /*#__PURE__*/React.createElement("img", {
    src: ChevronIcon
  })), menuOptions && /*#__PURE__*/React.createElement(Panel, null, map_1(menuOptions, (option, key) => /*#__PURE__*/React.createElement(Option, {
    key: key
  }, /*#__PURE__*/React.createElement("a", {
    href: option.url
  }, /*#__PURE__*/React.createElement(FormattedMessage, {
    id: `header.userMenu.${key}`
  }))))));
};

UserMenu.propTypes = {
  nameOrEmail: PropTypes.string
};

let _$8 = t => t,
    _t$8,
    _t2$7;
const Wrapper$5 = styled.div(_t$8 || (_t$8 = _$8`
  height: inherit;
  display: flex;
  align-items: center;
`));
Wrapper$5.displayName = 'UserSelectionWrapper';
const SignUpLink = styled.a(_t2$7 || (_t2$7 = _$8`
  color: ${0};
  text-decoration: none;

  &:hover {
    color: ${0};
  }
`), colors.black, colors.darkGray1);
SignUpLink.displayName = 'UserSelectionSignUp';

class UserSection extends PureComponent {
  constructor(...args) {
    super(...args);

    this.handleLogIn = e => {
      const {
        onLogin
      } = this.props;
      e.preventDefault();
      onLogin();
    };
  }

  render() {
    const {
      isGuest,
      nameOrEmail
    } = this.props;
    return /*#__PURE__*/React.createElement(Wrapper$5, null, isGuest ? /*#__PURE__*/React.createElement(SignUpLink, {
      href: "#login",
      onClick: this.handleLogIn
    }, /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "common.signup"
    })) : /*#__PURE__*/React.createElement(UserMenu, {
      nameOrEmail: nameOrEmail
    }));
  }

}
UserSection.propTypes = {
  isGuest: PropTypes.bool,
  onLogin: PropTypes.func,
  nameOrEmail: PropTypes.string
};
UserSection.defaultProps = {
  isGuest: true,
  nameOrEmail: "",
  onLogin: () => {}
};

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  if (isObject_1(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce_1(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var throttle_1 = throttle;

class ScrollBreakpoint extends React.Component {
  constructor(props) {
    super(props);

    this.checkPosition = () => {
      const {
        top
      } = this.props;
      const {
        breakpointReached
      } = this.state;

      if (window.pageYOffset > top && !breakpointReached) {
        this.setState({
          breakpointReached: true
        });
      }

      if (window.pageYOffset <= top && breakpointReached) {
        this.setState({
          breakpointReached: false
        });
      }
    };

    this.state = {
      breakpointReached: false
    };
    this.throttledCheckPosition = throttle_1(this.checkPosition, props.lapse || 500);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.throttledCheckPosition);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.throttledCheckPosition);
  }

  render() {
    const {
      children
    } = this.props;
    const {
      breakpointReached
    } = this.state;
    return children(breakpointReached);
  }

}
ScrollBreakpoint.propTypes = {
  children: PropTypes.func,
  lapse: PropTypes.number,
  top: PropTypes.number.isRequired
};

var menuItems = {
  sections: [{
    slug: 'shop',
    name: 'shop',
    url: '/shop',
    children: [{
      slug: 'trending',
      name: 'Trending',
      children: [{
        slug: 'new-arrivals',
        name: 'New Arrivals',
        url: '/shop/new-arrivals'
      }, {
        slug: 'best-sellers',
        name: 'Best Sellers',
        url: '/shop/t/type/best-sellers'
      }, {
        slug: 'going-going-home',
        name: 'Going Going Gone',
        url: '/shop/new-arrivals'
      }, {
        slug: 'coming-soon',
        name: 'Coming Soon',
        url: '/shop/new-arrivals'
      }, {
        slug: 'shop-insta,',
        name: 'Shop Insta',
        url: '/shop/new-arrivals'
      }, {
        slug: 'everyday-diamonds',
        name: 'Everyday Diamonds',
        url: '/shop/new-arrivals'
      }, {
        slug: 'zodiac',
        name: 'Zodiac',
        url: '/shop/new-arrivals'
      }]
    }, {
      slug: 'categories',
      name: 'Categories',
      children: [{
        slug: 'rings',
        name: 'Rings',
        url: '/shop/new-arrivals'
      }, {
        slug: 'necklaces',
        name: 'Necklaces',
        url: '/shop/new-arrivals'
      }, {
        slug: 'earrings',
        name: 'Earrings',
        url: '/shop/new-arrivals'
      }, {
        slug: 'single-earrings',
        name: 'Single Earrings',
        url: '/shop/new-arrivals'
      }, {
        slug: 'bracelets-anklets',
        name: 'Bracelets + Anklets',
        url: '/shop/new-arrivals'
      }, {
        slug: 'stacking-sets',
        name: 'Stacking Sets',
        url: '/shop/new-arrivals'
      }, {
        slug: 'wedding',
        name: 'Wedding',
        url: '/shop/new-arrivals'
      }]
    }, {
      slug: 'gifts',
      name: 'Gifts',
      children: [{
        slug: 'gift-guide',
        name: 'Gift Guide',
        url: '/shop/new-arrivals'
      }, {
        slug: 'most-gifted',
        name: 'Most Gifted',
        url: '/shop/new-arrivals'
      }, {
        slug: 'under-150',
        name: 'Under $150',
        url: '/shop/new-arrivals'
      }, {
        slug: 'under-250',
        name: 'Under $250',
        url: '/shop/new-arrivals'
      }, {
        slug: 'personalized',
        name: 'Personalized',
        url: '/shop/new-arrivals'
      }, {
        slug: 'gift-cards',
        name: 'Gift Cards',
        url: '/shop/new-arrivals'
      }]
    }, {
      slug: 'lifestyle',
      name: 'Lifestyle',
      children: [{
        slug: 'travel-case',
        name: 'Travel Case',
        url: '/shop/new-arrivals'
      }, {
        slug: 'jewlery-box',
        name: 'Jewlery Box',
        url: '/shop/new-arrivals'
      }, {
        slug: 'monthly-horoscopes',
        name: 'Monthly Horoscopes',
        url: '/shop/new-arrivals'
      }, {
        slug: 'limited-edition-merch',
        name: 'Limited Edition Merch',
        url: '/shop/new-arrivals'
      }]
    }, {
      slug: 'lookbook',
      name: 'LookBook',
      children: [{
        slug: 'the-paris-edit',
        name: 'The Paris Edit',
        url: '/shop/new-arrivals'
      }, {
        slug: 'the-new-york-edit',
        name: 'The New York Edit',
        url: '/shop/new-arrivals'
      }]
    }]
  }, {
    slug: 'gifts',
    name: 'gifts',
    url: '/gifts',
    children: [{
      slug: 'by-category',
      name: 'By Category',
      children: [{
        slug: 'valentines-gift-guide',
        name: 'Valentines gift guide',
        url: '/shop/new-arrivals'
      }, {
        slug: 'most-gifted',
        name: 'Most gifted',
        url: '/shop/new-arrivals'
      }, {
        slug: 'personalized',
        name: 'Personalized',
        url: '/shop/new-arrivals'
      }, {
        slug: 'gift-cards',
        name: 'Gift Cards',
        url: '/shop/new-arrivals'
      }, {
        slug: 'limited-edition-merch',
        name: 'Limited Edition Merch',
        url: '/shop/new-arrivals'
      }]
    }, {
      slug: 'by-price',
      name: 'By Price',
      children: [{
        slug: 'under-150',
        name: 'Under 150',
        url: '/shop/new-arrivals'
      }, {
        slug: 'under-250',
        name: 'Under 250',
        url: '/shop/new-arrivals'
      }]
    }]
  }, {
    slug: 'about',
    name: 'About',
    children: [{
      slug: '-',
      name: '',
      children: [{
        slug: 'overview',
        name: 'Overview'
      }, {
        slug: 'behind-the-fine',
        name: 'Behind the Fine'
      }, {
        slug: 'fair-pricing',
        name: 'Fair Pricing'
      }, {
        slug: 'our-materials',
        name: 'Our Materials'
      }]
    }]
  }, {
    slug: 'visit-us',
    name: 'Visit Us',
    children: [{
      slug: 'stores',
      name: 'Stores',
      children: [{
        slug: 'new-york',
        name: 'New York'
      }, {
        slug: 'los-angeles',
        name: 'Los Angeles'
      }, {
        slug: 'san-francisco',
        name: 'San Francisco'
      }, {
        slug: 'toronto',
        name: 'Toronto'
      }]
    }, {
      slug: 'events',
      name: 'Events',
      children: [{
        slug: 'piercing-studio',
        name: 'Piercing Studio'
      }]
    }]
  }]
};

class HeaderDesktop extends PureComponent {
  constructor(props) {
    super(props);

    this.setActive = activeSection => {
      this.setState({
        activeSection
      });
    };

    this.state = {
      activeSection: null
    };
    this.layersMountingPoint = React.createRef();
  }

  render() {
    const {
      cartToggle,
      menuItems,
      cartItemsCount,
      user,
      onLogin
    } = this.props;
    const {
      activeSection
    } = this.state;
    return /*#__PURE__*/React.createElement(ScrollBreakpoint, {
      top: 120
    }, shrinkPointReached => /*#__PURE__*/React.createElement(Wrapper$1, null, /*#__PURE__*/React.createElement(Overlay, {
      onMouseEnter: () => this.setActive(null),
      isVisible: !!activeSection
    }), /*#__PURE__*/React.createElement(Content$1, {
      shrinked: shrinkPointReached
    }, /*#__PURE__*/React.createElement(Navigation, {
      sections: menuItems.sections,
      setActive: this.setActive,
      activeSection: activeSection,
      layersMountingPoint: this.layersMountingPoint
    }), /*#__PURE__*/React.createElement(Logo, {
      href: "/"
    }, /*#__PURE__*/React.createElement("img", {
      src: MejuriLogo,
      alt: "Mejuri"
    })), /*#__PURE__*/React.createElement(Menu, null, /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(SearchButton, null, /*#__PURE__*/React.createElement("img", {
      src: MagniGlass,
      alt: "Mejuri"
    }), /*#__PURE__*/React.createElement(FormattedMessage, {
      id: "header.search"
    }))), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(UserSection, {
      isGuest: user.isGuest,
      nameOrEmail: user.nameOrEmail,
      onLogin: onLogin
    })), /*#__PURE__*/React.createElement(Item, null, /*#__PURE__*/React.createElement(CartIcon, {
      onClick: () => cartToggle(),
      itemsCount: cartItemsCount
    }, "Cart Icon")))), /*#__PURE__*/React.createElement("div", {
      ref: this.layersMountingPoint
    })));
  }

}
HeaderDesktop.defaultProps = {
  menuItems: menuItems
};
HeaderDesktop.propTypes = {
  cartToggle: PropTypes.func,
  cartItemsCount: PropTypes.number,
  user: PropTypes.shape({
    isGuest: PropTypes.bool,
    nameOrEmail: PropTypes.string
  }),
  onLogin: PropTypes.func,
  menuItems: PropTypes.shape({
    sections: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        children: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string,
          url: PropTypes.string
        }))
      }))
    }))
  })
};

let _$9 = t => t,
    _t$9,
    _t2$8,
    _t3$6;
const Wrapper$6 = styled.header(_t$9 || (_t$9 = _$9`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${0};
  height: 60px;
`), colors.white);
Wrapper$6.displayName = 'HeaderMobileWrapper';
const Logo$1 = styled.a(_t2$8 || (_t2$8 = _$9`
  width: 160px;
  height: 58px;
`));
Logo$1.displayName = 'HeaderMobileLogo';
const Menu$1 = styled.div(_t3$6 || (_t3$6 = _$9`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 40px;
  width: 30%;
  height: 100%;

  & > div,
  & > button {
    padding-left: 20px;
  }
`));
Menu$1.displayName = 'HeaderMobileMenu';

let _$a = t => t,
    _t$a,
    _t2$9;
const Wrapper$7 = styled.div(_t$a || (_t$a = _$a`
  padding-left: 20px;
  width: 30%;
`));
Wrapper$7.displayName = 'WrapperNavigation';
const Hamburguer = styled.button(_t2$9 || (_t2$9 = _$a`
  width: 20px;
  padding: 0;
  margin: 0;
  appearance: none;
  background: transparent;
  border: none;
  outline: 0;
`));
Hamburguer.displayName = 'HamburguerNavigation';

var HamburguerIcon = require("./hamburguer~bggXhFWQ.svg");

let _$b = t => t,
    _t$b,
    _t2$a,
    _t3$7,
    _t4$4,
    _t5$3;
const Header = styled.header(_t$b || (_t$b = _$b`
  align-items: center;
  background: white;
  border-bottom: 1px solid tomato;
  display: flex;
  height: 60px;
  justify-content: flex-end;
  padding: 0 25px;
`));
const GoBack = styled.div(_t2$a || (_t2$a = _$b`
  margin-right: auto;
`));
const Arrow = styled.button(_t3$7 || (_t3$7 = _$b`
  background: transparent;
  border: none;
  height: 40px;
  width: 40px;
`));
const Close = styled(Arrow)(_t4$4 || (_t4$4 = _$b`
  padding: 12px;
  margin-left: -12px;
`));
const Glass = styled.button(_t5$3 || (_t5$3 = _$b`
  background: transparent;
  border: none;
  height: 35px;
  margin-right: 5px;
  width: 35px;
`));

const MobileMenuHeader = ({
  toggleNavigation,
  isGoBackEnabled,
  itemQuantity,
  bagClick,
  glassClick
}) => {
  return /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(GoBack, {
    onClick: toggleNavigation
  }, isGoBackEnabled ? /*#__PURE__*/React.createElement(Arrow, null, "Back") : /*#__PURE__*/React.createElement(Close, null, "CloseIcon")), /*#__PURE__*/React.createElement(Glass, {
    onClick: () => glassClick()
  }, "MagniGlass"));
};
MobileMenuHeader.propTypes = {
  toggleNavigation: PropTypes.func,
  isGoBackEnabled: PropTypes.bool,
  itemQuantity: PropTypes.number,
  bagClick: PropTypes.func,
  glassClick: PropTypes.func
};

let _$c = t => t,
    _t$c,
    _t2$b,
    _t3$8,
    _t4$5,
    _t5$4;
const Header$1 = styled.header(_t$c || (_t$c = _$c`
  background: white;
  border-bottom: 1px solid #fafafa;
  box-shadow: 0 10px 5px 0 rgba(255, 255, 255, 0.75);
  display: flex;
  font-size: 14px;
  font-weight: 600;
  justify-content: space-between;
  padding: 25px 0;
  position: sticky;
  top: 0;
  z-index: 1;
`));
Header$1.displayName = 'MobileMenuDriverHeader';
const Options = styled.ul(_t2$b || (_t2$b = _$c`
  border-bottom: 1px solid #fafafa;
  list-style: none;
  margin: 0;
  max-height: ${0};
  padding: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, opacity 0.2s linear 0.2s;
  opacity: ${0};
`), p => p.isOpen ? `${p.length * 42}px` : 0, p => p.collapsed ? 0 : 1);
Options.displayName = 'MobileMenuDriverOptions';
const Item$1 = styled.li(_t3$8 || (_t3$8 = _$c`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-transform: none;
  padding-top: 22px;

  &:last-of-type {
    padding-bottom: 22px;
  }

  ${0}

  & > a {
    text-decoration: none;
    color: black;
  }
`), p => p.sub && `
    font-weight: 500;
    padding-top: 30px;
  `);
const PlusMinusToggle = styled.div(_t4$5 || (_t4$5 = _$c`
  display: flex;
  align-items: center;
  position: relative;
  width: 16px;
  height: 16px;
  z-index: 2;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 16px;
    background: #000;
    transition: transform 150ms ease;
  }

  &::after {
    transform-origin: center;
    transform: ${0};
  }

  &::before {
    transform: ${0};
  }
`), p => p.isOpen ? 'rotate(90deg)' : 'none', p => p.isOpen ? 'rotate(180deg)' : 'none');
const Menu$2 = styled.div(_t5$4 || (_t5$4 = _$c`
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0 25px;
  text-transform: uppercase;
  padding: 0;
`));

const MobileMenuDrawer = ({
  toggle,
  label,
  isOpen,
  options
}) => {
  return /*#__PURE__*/React.createElement(Menu$2, null, /*#__PURE__*/React.createElement(Header$1, {
    onClick: toggle
  }, label, /*#__PURE__*/React.createElement(PlusMinusToggle, {
    isOpen: isOpen
  })), /*#__PURE__*/React.createElement(Options, {
    length: options.length,
    isOpen: isOpen
  }, options.map(o => /*#__PURE__*/React.createElement(Item$1, {
    key: o.label,
    sub: o.type === 'subtitle'
  }, /*#__PURE__*/React.createElement("a", {
    href: o.url,
    onClick: e => e.stopPropagation()
  }, o.label)))));
};
MobileMenuDrawer.propTypes = {
  toggle: PropTypes.func,
  label: PropTypes.string,
  isOpen: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  }))
};

let _$d = t => t,
    _t$d,
    _t2$c,
    _t3$9,
    _t4$6;
const SubPage = styled.div(_t$d || (_t$d = _$d`
  height: 100%;
  display: ${0};
  padding: 0 25px;
  position: absolute;
  right: 0;
  width: 50%;
`), p => p.active ? 'initial' : 'none');
const Title = styled.div(_t2$c || (_t2$c = _$d`
  border-bottom: 1px solid tomato;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 25px 0;
`));
const List = styled.ul(_t3$9 || (_t3$9 = _$d`
  list-style: none;
  margin: 0;
  padding: 0;
`));
const Item$2 = styled.li(_t4$6 || (_t4$6 = _$d`
  font-size: 16px;
  font-weight: 500;
  padding: 30px 0 0 0;

  & > a {
    color: black;
    text-decoration: none;
  }
`));

const MobileMenuSubPage = ({
  active,
  options,
  title,
  children
}) => {
  return /*#__PURE__*/React.createElement(SubPage, {
    active: active
  }, /*#__PURE__*/React.createElement(Title, null, title), /*#__PURE__*/React.createElement(List, null, options.map(o => /*#__PURE__*/React.createElement(Item$2, {
    key: o.label
  }, /*#__PURE__*/React.createElement("a", {
    href: o.url
  }, o.label)))), children);
};
MobileMenuSubPage.propTypes = {
  active: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string
  })),
  title: PropTypes.string,
  children: PropTypes.node
};

let _$e = t => t,
    _t$e;
const StylingHelp = styled.div(_t$e || (_t$e = _$e`
  border-top: tomato;
  margin-top: 35px;
  padding-top: 20px;

  & > h5 {
    letter-spacing: 1px;
  }

  & > a {
    color: black;
    display: block;
    margin-top: 20px;
    text-decoration: underline;
  }

  & > p {
    margin-top: 15px;
  }
`));

const MobileMenuStylingHelp = ({
  label,
  caption,
  linkText,
  url
}) => {
  return /*#__PURE__*/React.createElement(StylingHelp, null, /*#__PURE__*/React.createElement("h5", null, label), /*#__PURE__*/React.createElement("p", null, caption), /*#__PURE__*/React.createElement("a", {
    href: url
  }, linkText));
};
MobileMenuStylingHelp.propTypes = {
  label: PropTypes.string,
  caption: PropTypes.string,
  linkText: PropTypes.string,
  url: PropTypes.string
};

let _$f = t => t,
    _t$f;
const SignOut = styled.div(_t$f || (_t$f = _$f`
  border-top: tomato;
  font-weight: 500;
  font-size: 15px;
  margin-top: 30px;
  padding-top: 30px;
`));

const MobileMenuSignOut = () => /*#__PURE__*/React.createElement(SignOut, null, /*#__PURE__*/React.createElement("a", {
  href: "/signout"
}, "Sign Out"));

let _$g = t => t,
    _t$g,
    _t2$d,
    _t3$a,
    _t4$7,
    _t5$5,
    _t6$2,
    _t7$1,
    _t8$1;
const Overlay$1 = styled.div(_t$g || (_t$g = _$g`
  background: black;
  bottom: 0;
  display: ${0};
  height: 100%;
  left: 0;
  opacity: ${0};
  position: fixed;
  top: 0;
  visibility: ${0};
  width: 100%;
  z-index: 9999;
`), p => p.isOpen ? 'block' : 'none', p => p.isOpen ? 0.5 : 0, p => p.isOpen ? 'visible' : 'hidden');
Overlay$1.displayName = 'MobileMenuOverlay';
const NavigationPanel = styled.div(_t2$d || (_t2$d = _$g`
  background: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  max-width: 400px;
  overflow: hidden;
  position: fixed;
  top: 0;
  transform: ${0};
  transition: transform 0.25s ease;
  width: 86vw;
  z-index: 9999;
`), p => p.isOpen ? 'translateX(0)' : 'translateX(-100%)');
NavigationPanel.displayName = 'MobileMenuNavigationPanel';
const Page = styled.div(_t3$a || (_t3$a = _$g`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 50%;
`));
Page.displayName = 'MobileMenuPage';
const Pages = styled.div(_t4$7 || (_t4$7 = _$g`
  display: flex;
  height: calc(100% - 60px);
  position: relative;
  transition: transform 0.25s ease;
  width: 200%;
  ${0};
`), p => p.isOpen && 'transform: translateX(-50%);');
Pages.displayName = 'MobileMenuPages';
const Options$1 = styled.div(_t5$5 || (_t5$5 = _$g`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  overflow-y: auto;
  padding: 0;
`));
Options$1.displayName = 'MobileMenuOptions';
const Footer = styled.ul(_t6$2 || (_t6$2 = _$g`
  background: #fafafa;
  list-style: none;
  margin: auto 0 0 0;
  padding: 0 25px;
  width: 100%;
`));
Footer.displayName = 'MobileMenuFooter';
const FooterItem = styled.li(_t7$1 || (_t7$1 = _$g`
  border-bottom: 1px solid #fafafa;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 22px 0;
  text-transform: uppercase;

  &:last-child {
    border: none;
  }
`));
FooterItem.displayName = 'MobileMenuFooterItem';
const Account = styled(FooterItem)(_t8$1 || (_t8$1 = _$g`
  display: flex;
  justify-content: space-between;
`));
Account.displayName = 'MobileMenuAccount';

var menuOptions$1 = {
  'account': {
    'children': [{
      'label': 'My Profile',
      'url': '/profile/yourprofile'
    }, {
      'label': 'Store Credits',
      'url': '/profile/available'
    }, {
      'label': 'My Orders',
      'url': '/profile/history'
    }, {
      'label': 'Returns',
      'url': '/profile/return'
    }, {
      'label': 'Wishlist',
      'url': '/profile/wish-list'
    }, {
      'label': 'Shipping info',
      'url': '/profile/shipping-info'
    }, {
      'label': 'Gift Card Balance',
      'url': '/profile/gift-card-balance'
    }],
    'label': 'account',
    'slug': 'account'
  },
  'main': [{
    'children': [{
      'label': 'Trending',
      'type': 'subtitle'
    }, {
      'label': 'New Arrivals',
      'url': '/shop/new-arrivals'
    }, {
      'label': 'Best Sellers',
      'url': '/shop/t/type/best-sellers'
    }, {
      'label': 'Leaving Soon',
      'url': '/shop/t/type/leaving-soon'
    }, {
      'label': 'Coming Soon',
      'url': '/coming-soon'
    }, {
      'label': 'Shop Insta',
      'url': '/styles'
    }, {
      'label': 'Everyday Diamonds',
      'url': '/shop/t/type/everyday'
    }, {
      'label': 'Zodiac',
      'url': '/shop/t/type/zodiac'
    }, {
      'label': 'Categories',
      'type': 'subtitle'
    }, {
      'label': 'Earrings',
      'url': '/shop/t/type/earrings'
    }, {
      'label': 'Single Earrings',
      'url': '/shop/t/type/single-earrings'
    }, {
      'label': 'Necklaces',
      'url': '/shop/t/type/pendants'
    }, {
      'label': 'Rings',
      'url': '/shop/t/type/rings'
    }, {
      'label': 'Bracelets + Anklets',
      'url': '/shop/t/type/bracelets'
    }, {
      'label': 'Shop All',
      'url': '/shop/t/type'
    }, {
      'label': 'Wedding',
      'type': 'subtitle'
    }, {
      'label': 'Engagement Rings',
      'url': '/shop/t/engagement-rings'
    }, {
      'label': "Women's Wedding Bands",
      'url': '/shop/t/wedding-bands'
    }, {
      'label': "Men's Wedding Bands",
      'url': '/shop/t/mens-wedding-bands'
    }, {
      'label': 'Lifestyle',
      'type': 'subtitle'
    }, {
      'label': 'Travel Case',
      'url': '/shop/products/travel-case'
    }, {
      'label': 'Jewlery Box',
      'url': '/shop/products/jewelry-box-beige'
    }, {
      'label': 'Monthly Horoscope',
      'url': '/info/horoscope'
    }, {
      'label': 'Piercing',
      'posOnly': true,
      'url': '/shop/products/piercing'
    }],
    'label': 'shop',
    'slug': 'shop'
  }, {
    'children': [{
      'label': 'By Category',
      'type': 'subtitle'
    }, {
      'label': "Valentine's Gift Guide",
      'url': '/info/giftguide'
    }, {
      'label': 'Most Gifted',
      'url': '/collection/495-gifts'
    }, {
      'label': 'Personalized',
      'url': '/collection/66-the-engravables'
    }, {
      'label': 'Gift Cards',
      'url': '/shop/products/digital-giftcard'
    }, {
      'label': 'By Price',
      'type': 'subtitle'
    }, {
      'label': 'Under $150',
      'url': '/collection/207-under-150'
    }, {
      'label': 'Under $250',
      'url': '/collection/510-under-250'
    }],
    'label': 'gifts',
    'slug': 'gifts'
  }, {
    'children': [{
      'label': 'Our Story',
      'url': '/about-us'
    }, {
      'label': 'Fair Pricing',
      'url': '/fair-pricing'
    }, {
      'label': 'Our Jewellers',
      'url': '/behind-the-fine'
    }, {
      'label': 'Material and Care',
      'url': '/materials'
    }],
    'label': 'about',
    'slug': 'about'
  }, {
    'children': [{
      'label': 'Stores',
      'type': 'subtitle'
    }, {
      'label': 'New York',
      'url': '/irl/new-york'
    }, {
      'label': 'Los Angeles',
      'url': '/irl/losangeles'
    }, {
      'label': 'San Francisco',
      'url': '/locations/san-francisco'
    }, {
      'label': 'Toronto',
      'url': '/irl/toronto'
    }, {
      'label': 'Events',
      'type': 'subtitle'
    }, {
      'label': 'Piercing Studio',
      'url': '/info/piercing-studio'
    }],
    'label': 'visit us',
    'slug': 'visit-us'
  }],
  'stylingHelp': {
    'caption': 'Chat with our stylist experts in person or digitally',
    'label': 'Styling Help',
    'linkText': 'Book Now!',
    'url': '/info/styling-appointments'
  },
  'support': {
    'children': [{
      'label': 'Shipping',
      'url': 'https://mejuri.com/faqs#shipping'
    }, {
      'label': 'Updating my order',
      'url': 'https://mejuri.com/faqs#updating_my_order'
    }, {
      'label': 'Returns + Exchanges',
      'url': 'https://mejuri.com/faqs#returns_exchanges'
    }, {
      'label': 'Materials and Care',
      'url': 'https://mejuri.com/materials'
    }, {
      'label': 'Ring Sizer',
      'url': 'https://mejuri.com/ring-sizer'
    }, {
      'label': 'FAQ',
      'url': 'https://mejuri.com/faqs'
    }],
    'label': 'support',
    'slug': 'support'
  }
};

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenuState = () => {
      const {
        toggleMenu
      } = this.props;

      if (this.state.subPageOpen) {
        return this.setState({
          subPageOpen: false
        });
      }

      toggleMenu();
    };

    this.setOpenDrawer = drawerSlug => {
      if (drawerSlug === this.state.openDrawer) {
        return this.setState({
          openDrawer: null
        });
      }

      this.setState({
        openDrawer: drawerSlug
      });
      if (this.refOptions) this.refOptions.scrollTop = 0;
    };

    this.transition = e => {
      !this.state.subPageOpen && this.setState({
        subPageIndex: null
      });
    };

    this.handleAccountClick = () => {
      const {
        isLoggedIn,
        openOnboarding
      } = this.props;

      if (isLoggedIn) {
        return this.openSubPage(1);
      }

      openOnboarding();
      this.toggleMenuState();
    };

    this.handleBagClick = e => {
      const {
        toggleCart
      } = this.props;
      toggleCart();
      setTimeout(() => this.toggleMenuState(), 300);
    };

    this.handleSearchClick = () => {
      alert('Do not have search in this branch we need to implement after merge');
      this.toggleMenuState();
    };

    this.openSubPage = id => {
      this.setState({
        subPageIndex: id,
        subPageOpen: true
      });
    };

    this.state = {
      openDrawer: null,
      subPageOpen: false,
      subPageIndex: null
    };
    this.refOptions = null;
  }

  render() {
    const {
      menuOptions,
      itemQuantity,
      searchEnabled,
      isLoggedIn,
      isOpen
    } = this.props;
    const {
      subPageOpen
    } = this.state;
    if (!menuOptions) return null;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Overlay$1, {
      isOpen: isOpen,
      onClick: this.toggleMenuState
    }), /*#__PURE__*/React.createElement(NavigationPanel, {
      isOpen: isOpen
    }, /*#__PURE__*/React.createElement(MobileMenuHeader, {
      toggleNavigation: this.toggleMenuState,
      isGoBackEnabled: this.state.subPageOpen,
      itemQuantity: itemQuantity,
      bagClick: this.handleBagClick,
      glassClick: this.handleSearchClick,
      searchEnabled: searchEnabled
    }), /*#__PURE__*/React.createElement(Pages, {
      isOpen: subPageOpen,
      onTransitionEnd: this.state.subPage === null ? this.transition : () => {}
    }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Options$1, {
      ref: r => {
        this.refOptions = r;
      }
    }, menuOptions.main.map(o => /*#__PURE__*/React.createElement(MobileMenuDrawer, {
      key: o.slug,
      toggle: () => this.setOpenDrawer(o.slug),
      label: o.label,
      isOpen: this.state.openDrawer === o.slug,
      options: o.children,
      glassClick: this.handleSearchClick
    })), /*#__PURE__*/React.createElement(Footer, null, /*#__PURE__*/React.createElement(FooterItem, {
      onClick: () => this.openSubPage(0)
    }, "Support"), /*#__PURE__*/React.createElement(Account, {
      onClick: this.handleAccountClick
    }, isLoggedIn ? 'Account' : 'Sign In / Sign Up'), /*#__PURE__*/React.createElement(FooterItem, null)))), /*#__PURE__*/React.createElement(MobileMenuSubPage, {
      title: this.props.menuOptions.support.label,
      options: this.props.menuOptions.support.children,
      active: this.state.subPageIndex === 0
    }, /*#__PURE__*/React.createElement(MobileMenuStylingHelp, this.props.menuOptions.stylingHelp)), /*#__PURE__*/React.createElement(MobileMenuSubPage, {
      title: this.props.menuOptions.account.label,
      options: this.props.menuOptions.account.children,
      active: this.state.subPageIndex === 1
    }, /*#__PURE__*/React.createElement(MobileMenuSignOut, null)))));
  }

}
MobileMenu.propTypes = {
  menuOptions: PropTypes.shape({
    main: PropTypes.array,
    support: PropTypes.object,
    account: PropTypes.object,
    stylingHelp: PropTypes.object
  }),
  itemQuantity: PropTypes.number,
  searchEnabled: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  isPos: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  toggleCart: PropTypes.func,
  openOnboarding: PropTypes.func
};
MobileMenu.defaultProps = {
  menuOptions: menuOptions$1
};

class NavigationMobile extends PureComponent {
  constructor(...args) {
    super(...args);

    this.handleClick = () => {
      const {
        toggleMobileMenu
      } = this.props;
      toggleMobileMenu();
    };
  }

  render() {
    return /*#__PURE__*/React.createElement(Wrapper$7, null, /*#__PURE__*/React.createElement(Hamburguer, {
      onClick: this.handleClick
    }, /*#__PURE__*/React.createElement("img", {
      src: HamburguerIcon,
      alt: "menu"
    })), /*#__PURE__*/React.createElement(MobileMenu, null));
  }

}
NavigationMobile.propTypes = {
  toggleMobileMenu: PropTypes.func
};
NavigationMobile.defaultProps = {
  toggleMobileMenu: () => {}
};

const HeaderMobile = ({
  cartItemsCount,
  cartToggle
}) => {
  return /*#__PURE__*/React.createElement(Wrapper$6, null, /*#__PURE__*/React.createElement(NavigationMobile, null), /*#__PURE__*/React.createElement(Logo$1, {
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: MejuriLogo,
    alt: "Mejuri"
  })), /*#__PURE__*/React.createElement(Menu$1, null, /*#__PURE__*/React.createElement(SearchButton, null, /*#__PURE__*/React.createElement("img", {
    src: MagniGlass,
    alt: "search"
  })), /*#__PURE__*/React.createElement(CartIcon, {
    onClick: () => cartToggle(),
    itemsCount: cartItemsCount
  }, "Cart Icon")));
};

HeaderMobile.propTypes = {
  cartItemsCount: PropTypes.number,
  cartToggle: PropTypes.func
};
HeaderMobile.defaultProps = {
  cartToggle: () => {},
  cartItemsCount: 1
};

const Header$2 = ({
  isDesktop,
  cartItemsCount,
  user,
  onLogin,
  cartToggle,
  children
}) => /*#__PURE__*/React.createElement(Wrapper, {
  isDesktop: isDesktop()
}, /*#__PURE__*/React.createElement(Content, null, isDesktop() ? /*#__PURE__*/React.createElement(HeaderDesktop, {
  cartItemsCount: cartItemsCount,
  user: user,
  onLogin: onLogin,
  cartToggle: cartToggle
}) : /*#__PURE__*/React.createElement(HeaderMobile, {
  cartItemsCount: cartItemsCount,
  cartToggle: cartToggle
}), children));

Header$2.propTypes = {
  isDesktop: PropTypes.func,
  cartToggle: PropTypes.func,
  cartItemsCount: PropTypes.number,
  user: PropTypes.shape({
    isGuest: PropTypes.bool,
    nameOrEmail: PropTypes.string
  })
};
Header$2.defaultProps = {
  isDesktop: () => true,
  cartItemsCount: 1,
  onLogin: () => {},
  cartToggle: () => {}
};

const ExampleComponent = ({
  text
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { ExampleComponent, Header$2 as Header };
//# sourceMappingURL=index.modern.js.map
