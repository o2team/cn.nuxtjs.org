module.exports =
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 191);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

var store      = __webpack_require__(36)('wks')
  , uid        = __webpack_require__(27)
  , Symbol     = __webpack_require__(1).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ },
/* 1 */
/***/ function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 2 */
/***/ function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("vue");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("axios");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 7 */
/***/ function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(9)
  , createDesc = __webpack_require__(25);
module.exports = __webpack_require__(6) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(5)
  , IE8_DOM_DEFINE = __webpack_require__(46)
  , toPrimitive    = __webpack_require__(39)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(6) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(47)
  , defined = __webpack_require__(31);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ },
/* 11 */
/***/ function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(51)
  , enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* template */
var __vue_template__ = __webpack_require__(178)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/Footer.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4e99f6ef"
if (__vue_options__.functional) {console.error("[vue-loader] Footer.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(21);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);


/***/ },
/* 16 */
/***/ function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(22)
  , hide      = __webpack_require__(8)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
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
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
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

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = {};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(76)

/* template */
var __vue_template__ = __webpack_require__(184)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/HtmlParser.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] HtmlParser.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(30);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ },
/* 23 */
/***/ function(module, exports) {

module.exports = true;

/***/ },
/* 24 */
/***/ function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ },
/* 25 */
/***/ function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var def = __webpack_require__(9).f
  , has = __webpack_require__(7)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ },
/* 27 */
/***/ function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(71)

/* template */
var __vue_template__ = __webpack_require__(164)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/Affix.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0437d0ac"
if (__vue_options__.functional) {console.error("[vue-loader] Affix.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(175)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/CarbonAds.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] CarbonAds.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 30 */
/***/ function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ },
/* 31 */
/***/ function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18)
  , document = __webpack_require__(1).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ },
/* 33 */
/***/ function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ },
/* 34 */
/***/ function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

var shared = __webpack_require__(36)('keys')
  , uid    = __webpack_require__(27);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

var global = __webpack_require__(1)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ },
/* 37 */
/***/ function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function(it){
  return Object(defined(it));
};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

var global         = __webpack_require__(1)
  , core           = __webpack_require__(2)
  , LIBRARY        = __webpack_require__(23)
  , wksExt         = __webpack_require__(41)
  , defineProperty = __webpack_require__(9).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


var transitionsKeys = ['name', 'mode', 'css', 'type', 'enterClass', 'leaveClass', 'enterActiveClass', 'leaveActiveClass'];
var listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled'];

/* harmony default export */ exports["a"] = {
  name: 'nuxt-child',
  functional: true,
  render: function render(h, _ref) {
    var parent = _ref.parent,
        data = _ref.data;

    data.nuxtChild = true;

    var transitions = parent.$nuxt.nuxt.transitions;
    var defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    var depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data.nuxtChildDepth = depth;
    var transition = transitions[depth] || defaultTransition;
    var transitionProps = {};
    transitionsKeys.forEach(function (key) {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    var listeners = {};
    listenersKeys.forEach(function (key) {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key];
      }
    });
    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [h('router-view', data)]);
  }
};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(16)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).document && document.documentElement;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(6) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(16);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(23)
  , $export        = __webpack_require__(17)
  , redefine       = __webpack_require__(52)
  , hide           = __webpack_require__(8)
  , has            = __webpack_require__(7)
  , Iterators      = __webpack_require__(19)
  , $iterCreate    = __webpack_require__(115)
  , setToStringTag = __webpack_require__(26)
  , getPrototypeOf = __webpack_require__(125)
  , ITERATOR       = __webpack_require__(0)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(5)
  , dPs         = __webpack_require__(122)
  , enumBugKeys = __webpack_require__(33)
  , IE_PROTO    = __webpack_require__(35)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(32)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(45).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(51)
  , hiddenKeys = __webpack_require__(33).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

var has          = __webpack_require__(7)
  , toIObject    = __webpack_require__(10)
  , arrayIndexOf = __webpack_require__(108)(false)
  , IE_PROTO     = __webpack_require__(35)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(22)
  , invoke             = __webpack_require__(111)
  , html               = __webpack_require__(45)
  , cel                = __webpack_require__(32)
  , global             = __webpack_require__(1)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(16)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(37)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ },
/* 55 */
/***/ function(module, exports) {



/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(130)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(48)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(133);
var global        = __webpack_require__(1)
  , hide          = __webpack_require__(8)
  , Iterators     = __webpack_require__(19)
  , TO_STRING_TAG = __webpack_require__(0)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(77)

/* template */
var __vue_template__ = __webpack_require__(177)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/RecursiveList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4c658acc"
if (__vue_options__.functional) {console.error("[vue-loader] RecursiveList.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 59 */
/***/ function(module, exports) {

module.exports = require("highlight.js");

/***/ },
/* 60 */
/***/ function(module, exports) {

module.exports = require("marked");

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_meta__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_meta___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_meta__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_index_js__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nuxt_child_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nuxt_link_js__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nuxt_vue__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nuxt_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_nuxt_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__App_vue__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__App_vue__);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__router_js__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__store_index_js__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return app; });













// Component: <nuxt-child>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_6__components_nuxt_child_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_6__components_nuxt_child_js__["a" /* default */]);
// Component: <nuxt-link>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_7__components_nuxt_link_js__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_7__components_nuxt_link_js__["a" /* default */]);
// Component: <nuxt>
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_8__components_nuxt_vue___default.a.name, __WEBPACK_IMPORTED_MODULE_8__components_nuxt_vue___default.a);

// vue-meta configuration
__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_meta___default.a, {
  keyName: 'head', // the component option name that vue-meta looks for meta info on.
  attribute: 'n-head', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'n-head-ssr', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'hid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
});

if (false) {
  // window.onNuxtReady(() => console.log('Ready')) hook
  // Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)
  window._nuxtReadyCbs = [];
  window.onNuxtReady = function (cb) {
    window._nuxtReadyCbs.push(cb);
  };
}

// Includes external plugins

__webpack_require__(91);

__webpack_require__(92);

// root instance
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
var defaultTransition = { "name": "page", "mode": "out-in" };
var app = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
  router: __WEBPACK_IMPORTED_MODULE_4__router_js__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_5__store_index_js__["a" /* default */],
  _nuxt: {
    defaultTransition: defaultTransition,
    transitions: [defaultTransition],
    setTransitions: function setTransitions(transitions) {
      if (!Array.isArray(transitions)) {
        transitions = [transitions];
      }
      transitions = transitions.map(function (transition) {
        if (!transition) {
          transition = defaultTransition;
        } else if (typeof transition === 'string') {
          transition = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, { name: transition });
        } else {
          transition = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, defaultTransition, transition);
        }
        return transition;
      });
      this.$options._nuxt.transitions = transitions;
      return transitions;
    },

    err: null,
    error: function error(err) {
      err = err || null;
      this.$options._nuxt.err = err;
      return err;
    }
  }
}, __WEBPACK_IMPORTED_MODULE_9__App_vue___default.a);



/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys__);
/* harmony export (immutable) */ exports["b"] = getMatchedComponents;
/* unused harmony export getMatchedComponentsInstances */
/* unused harmony export flatMapComponents */
/* harmony export (immutable) */ exports["c"] = getContext;
/* harmony export (immutable) */ exports["d"] = promisify;
/* unused harmony export getLocation */
/* harmony export (immutable) */ exports["a"] = urlJoin;
/* unused harmony export compile */






function getMatchedComponents(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return m.components[key];
    });
  }));
}

function getMatchedComponentsInstances(route) {
  return [].concat.apply([], route.matched.map(function (m) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.instances).map(function (key) {
      return m.instances[key];
    });
  }));
}

function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map(function (m, index) {
    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_keys___default()(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key, index);
    });
  }));
}

function getContext(context) {
  var ctx = {
    isServer: !!context.isServer,
    isClient: !!context.isClient,
    isDev: false,
    store: context.store,
    route: context.to ? context.to : context.route,
    error: context.error,
    base: '/',
    env: { "githubToken": "4aa6bcf919d238504e7db59a66d32e78281c0ad3" }
  };
  var next = context.next;
  ctx.params = ctx.route.params || {};
  ctx.query = ctx.route.query || {};
  ctx.redirect = function (status, path, query) {
    if (!status) return;
    // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })
    if (typeof status === 'string' && (typeof path === 'undefined' || (typeof path === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(path)) === 'object')) {
      query = path || {};
      path = status;
      status = 302;
    }
    next({
      path: path,
      query: query,
      status: status
    });
  };
  if (context.req) ctx.req = context.req;
  if (context.res) ctx.res = context.res;
  return ctx;
}

function promisify(fn, context) {
  var promise = void 0;
  if (fn.length === 2) {
    // fn(context, callback)
    promise = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve) {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }
        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }
  if (!(promise instanceof __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a)) {
    promise = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve(promise);
  }
  return promise;
}

// Imported from vue-router
function getLocation(base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash;
}

function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/');
}

// Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/***/ },
/* 63 */
/***/ function(module, exports) {

module.exports = require("debug");

/***/ },
/* 64 */
/***/ function(module, exports) {

module.exports = require("lodash");

/***/ },
/* 65 */
/***/ function(module, exports) {

module.exports = require("querystring");

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


/* harmony default export */ exports["a"] = {
  name: 'nuxt-link',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    return h('router-link', data, children);
  }
};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

var _3494e3a2 =  false ? function () {
	return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/index.vue');
} : __webpack_require__(163);

var _47f03eea =  false ? function () {
	return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/api.vue');
} : __webpack_require__(154);

var _7a5c66b6 =  false ? function () {
	return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/api/_slug.vue');
} : __webpack_require__(155);

var _374771e6 =  false ? function () {
	return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/faq.vue');
} : __webpack_require__(158);

var _c1c45abe =  false ? function () {
	return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/faq/_slug.vue');
} : __webpack_require__(159);

var _2e1a5e68 =  false ? function () {
	return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/guide.vue');
} : __webpack_require__(160);

var _23a45d78 =  false ? function () {
	return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/guide/release-notes.vue');
} : __webpack_require__(162);

var _3523ed07 =  false ? function () {
	return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/guide/_slug.vue');
} : __webpack_require__(161);

var _354ed3ae =  false ? function () {
	return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/examples.vue');
} : __webpack_require__(156);

var _15f50eb8 =  false ? function () {
	return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/examples/_slug.vue');
} : __webpack_require__(157);

var scrollBehavior = function scrollBehavior(to, from, savedPosition) {
	if (savedPosition) {
		// savedPosition is only available for popstate navigations.
		return savedPosition;
	} else {
		var position = {};
		// if no children detected
		if (to.matched.length < 2) {
			position = { x: 0, y: 0 };
		} else if (to.matched.some(function (r) {
			return r.components.default.scrollToTop || r.components.default.options && r.components.default.options.scrollToTop;
		})) {
			position = { x: 0, y: 0 };
		}
		// if link has anchor,  scroll to anchor by returning the selector
		if (to.hash) {
			position = { selector: to.hash };
		}
		return position;
	}
};

/* harmony default export */ exports["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
	mode: 'history',
	base: '/',
	linkActiveClass: 'nuxt-link-active',
	scrollBehavior: scrollBehavior,
	routes: [{
		path: "/",
		component: _3494e3a2,
		name: "index"
	}, {
		path: "/api",
		component: _47f03eea,
		children: [{
			path: ":slug?",
			component: _7a5c66b6,
			name: "api-slug"
		}]
	}, {
		path: "/faq",
		component: _374771e6,
		children: [{
			path: ":slug?",
			component: _c1c45abe,
			name: "faq-slug"
		}]
	}, {
		path: "/guide",
		component: _2e1a5e68,
		children: [{
			path: "release-notes",
			component: _23a45d78,
			name: "guide-release-notes"
		}, {
			path: ":slug?",
			component: _3523ed07,
			name: "guide-slug"
		}]
	}, {
		path: "/examples",
		component: _354ed3ae,
		children: [{
			path: ":slug?",
			component: _15f50eb8,
			name: "examples-slug"
		}]
	}]
});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);

//
//
//
//
//
//

var layouts = {

  "_default":  false ? function () {
    return System.import('/Users/Atinux/Projets/nuxt/nuxtjs.org/layouts/default.vue');
  } : __webpack_require__(152)

};

/* harmony default export */ exports["default"] = {
  head: { "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }], "link": [{ "rel": "icon", "type": "image/x-icon", "href": "favicon.ico" }] },
  data: function data() {
    return {
      layout: null,
      layoutName: ''
    };
  },
  methods: {
    setLayout: function setLayout(layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default';
      this.layoutName = layout;
      var _layout = '_' + layout;
      if (typeof layouts[_layout] === 'function') {
        return this.loadLayout(_layout);
      }
      this.layout = layouts[_layout];
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(this.layout);
    },
    loadLayout: function loadLayout(_layout) {
      var _this = this;

      return layouts[_layout]().then(function (Component) {
        layouts[_layout] = Component;
        _this.layout = layouts[_layout];
        return _this.layout;
      }).catch(function (e) {
        if (_this.$nuxt) {
          return _this.$nuxt.error({ statusCode: 500, message: e.message });
        }
        console.error(e);
      });
    }
  }
};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  name: 'nuxt-loading',
  data: function data() {
    return {
      percent: 0,
      show: false,
      canSuccess: true,
      duration: 5000,
      height: '2px',
      color: '#41B883',
      failedColor: 'red'
    };
  },

  methods: {
    start: function start() {
      var _this = this;

      this.show = true;
      this.canSuccess = true;
      if (this._timer) {
        clearInterval(this._timer);
        this.percent = 0;
      }
      this._cut = 10000 / Math.floor(this.duration);
      this._timer = setInterval(function () {
        _this.increase(_this._cut * Math.random());
        if (_this.percent > 95) {
          _this.finish();
        }
      }, 100);
      return this;
    },
    set: function set(num) {
      this.show = true;
      this.canSuccess = true;
      this.percent = Math.floor(num);
      return this;
    },
    get: function get() {
      return Math.floor(this.percent);
    },
    increase: function increase(num) {
      this.percent = this.percent + Math.floor(num);
      return this;
    },
    decrease: function decrease(num) {
      this.percent = this.percent - Math.floor(num);
      return this;
    },
    finish: function finish() {
      this.percent = 100;
      this.hide();
      return this;
    },
    pause: function pause() {
      clearInterval(this._timer);
      return this;
    },
    hide: function hide() {
      var _this2 = this;

      clearInterval(this._timer);
      this._timer = null;
      setTimeout(function () {
        _this2.show = false;
        __WEBPACK_IMPORTED_MODULE_0_vue___default.a.nextTick(function () {
          setTimeout(function () {
            _this2.percent = 0;
          }, 200);
        });
      }, 500);
      return this;
    },
    fail: function fail() {
      this.canSuccess = false;
      return this;
    }
  }
};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuxt_child__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_Atinux_Projets_nuxt_nuxtjs_org_layouts_error_vue__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Users_Atinux_Projets_nuxt_nuxtjs_org_layouts_error_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Users_Atinux_Projets_nuxt_nuxtjs_org_layouts_error_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue__);
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
  name: 'nuxt',
  beforeCreate: function beforeCreate() {
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.util.defineReactive(this, 'nuxt', this.$root.$options._nuxt);
  },
  created: function created() {
    // Add this.$nuxt in child instances
    __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$nuxt = this;
    // Add this.$root.$nuxt
    this.$root.$nuxt = this;
    // Bind $nuxt.setLayout(layout) to $root.setLayout
    this.setLayout = this.$root.setLayout.bind(this.$root);
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this;
    }
    // Add $nuxt.error()
    this.error = this.$root.error;
  },
  mounted: function mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  methods: {
    errorChanged: function errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail();
        if (this.$loading.finish) this.$loading.finish();
      }
    }
  },

  components: {
    NuxtChild: __WEBPACK_IMPORTED_MODULE_1__nuxt_child__["a" /* default */],
    NuxtError: __WEBPACK_IMPORTED_MODULE_2__Users_Atinux_Projets_nuxt_nuxtjs_org_layouts_error_vue___default.a,
    NuxtLoading: __WEBPACK_IMPORTED_MODULE_3__nuxt_loading_vue___default.a
  }
};

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    list: {
      type: Array,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
  mounted: function mounted() {
    var self = this;
    this.$nextTick(function () {
      window.addEventListener('scroll', self.scrolled);
      if (self.$route.hash.length) {
        self.scrollTo(self.$route.hash);
      }
    });
  },
  data: function data() {
    return { current: 0, setInter: null };
  },

  computed: {
    visible: function visible() {
      return this.$store.state.visibleAffix;
    },
    path: function path() {
      return this.$route.path.slice(-1) === '/' ? this.$route.path.slice(0, -1) : this.$route.path;
    },
    menu: function menu() {
      return '/' + this.category;
    },
    contents: function contents() {
      var _this = this;

      var c = [];
      this.list.forEach(function (group) {
        if (group.links && !c.length) {
          var l = group.links.find(function (link) {
            return _this.path === _this.menu + link.to;
          });
          if (l && l.contents) {
            l.contents.forEach(function (content) {
              var el = document.getElementById(content.to.slice(1));
              if (el) {
                c.push(el.offsetTop);
              }
            });
          }
        }
      });
      return c;
    }
  },
  methods: {
    toggle: function toggle() {
      this.$store.commit('toggle', 'visibleAffix');
    },
    scrolled: function scrolled() {
      var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      var el = this.contents.find(function (pos) {
        return pos > top + h / 2;
      });
      this.current = (el ? this.contents.indexOf(el) : this.contents.length) - 1;
    },
    scrollTo: function scrollTo(id) {
      var _this2 = this;

      this.toggle();
      this.$nextTick(function () {
        var el = document.getElementById(id.slice(1));
        if (!el) return;
        var to = el.offsetTop - 25;
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        var diff = (to > top ? to - top : top - to) / 25;
        var i = 0;
        window.clearInterval(_this2.setInter);
        _this2.setInter = window.setInterval(function () {
          top = to > top ? top + diff : top - diff;
          window.scrollTo(0, top);
          i++;
          if (i === 25) {
            window.clearInterval(_this2.setInter);
          }
        }, 10);
      });
    }
  }
};

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ exports["default"] = {
  mounted: function mounted() {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=nuxtjsorg');
    script.setAttribute('id', '_carbonads_js');
    this.$refs.carbonads.appendChild(script);
  }
};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    title: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      show: false
    };
  }
};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highlight_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RecursiveList_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RecursiveList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__RecursiveList_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






var cacheFiles = {};

/* harmony default export */ exports["default"] = {
  props: {
    example: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      hidden: false,
      currentFile: null,
      content: ''
    };
  },

  computed: {
    parseContent: function parseContent() {
      if (!this.content) {
        return '';
      }
      if (this.isImage) {
        return 'https://github.com/nuxt/nuxt.js/blob/master/' + this.currentFile.path + '?raw=true';
      }
      return this.content;
    },
    breadcrumb: function breadcrumb() {
      return this.currentFile.path.replace('examples/' + this.example, '');
    },
    isImage: function isImage() {
      if (this.currentFile && /[^\s]+\.(jpe?g|png|gif|bmp)$/i.test(this.currentFile.path)) {
        return true;
      }
      return false;
    },
    isMobile: function isMobile() {
      return window.innerWidth < 576;
    }
  },
  methods: {
    changeFile: function changeFile(file) {
      var _this = this;

      this.currentFile = file;
      this.content = cacheFiles[file.path];
      if (this.isMobile) {
        this.hidden = true;
      }
      if (!this.content) {
        __WEBPACK_IMPORTED_MODULE_0_axios___default()({
          url: 'https://api.github.com/repos/nuxt/nuxt.js/contents/' + file.path,
          headers: {
            'Authorization': 'token ' + "4aa6bcf919d238504e7db59a66d32e78281c0ad3"
          }
        }).then(function (res) {
          var content = window.atob(res.data.content);
          content = __WEBPACK_IMPORTED_MODULE_1_highlight_js___default.a.highlightAuto(content).value;
          cacheFiles[file.path] = content;
          _this.content = cacheFiles[file.path];
        });
      }
    }
  },
  components: {
    RecursiveList: __WEBPACK_IMPORTED_MODULE_2__RecursiveList_vue___default.a
  }
};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Search_vue__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Search_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Search_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Dropdown_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Dropdown_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ exports["default"] = {
  data: function data() {
    return { show: false };
  },

  computed: {
    visible: function visible() {
      return this.$store.state.visibleHeader;
    },
    flag: function flag() {
      return 'flag-' + this.$store.state.lang.iso;
    },
    langs: function langs() {
      return [{ iso: 'en', class: 'flag-en', url: 'https://nuxtjs.org' }, { iso: 'ru', class: 'flag-ru', url: 'https://ru.nuxtjs.org' }];
    },
    ecosystemLinks: function ecosystemLinks() {
      return [{
        name: this.$store.state.lang.links.github,
        path: 'https://github.com/nuxt',
        target: '_blank'
      }, {
        name: this.$store.state.lang.links.twitter,
        path: 'https://twitter.com/nuxt_js',
        target: '_blank'
      }, {
        name: this.$store.state.lang.links.blog,
        path: 'https://medium.com/@nuxt_js',
        target: '_blank'
      }, {
        name: this.$store.state.lang.links.chat,
        path: 'https://gitter.im/nuxt/nuxt.js',
        target: '_blank'
      }, {
        name: this.$store.state.lang.links.vuejs,
        path: 'https://vuejs.org',
        target: '_blank'
      }, {
        name: this.$store.state.lang.links.vue_jobs,
        path: 'https://vuejobs.com/?ref=nuxtjs',
        target: '_blank'
      }];
    }
  },
  methods: {
    toggle: function toggle() {
      this.$store.commit('toggle', 'visibleHeader');
    }
  },
  components: {
    NuxtSearch: __WEBPACK_IMPORTED_MODULE_0__components_Search_vue___default.a,
    NuxtDropdown: __WEBPACK_IMPORTED_MODULE_1__components_Dropdown_vue___default.a
  }
};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: ['content'],
  mounted: function mounted() {
    this.addListeners();
  },
  beforeDestroy: function beforeDestroy() {
    this.removeListeners();
  },

  watch: {
    'content': 'contentUpdated'
  },
  methods: {
    navigate: function navigate(event) {
      var href = event.target.getAttribute('href');
      if (href && href[0] === '/') {
        event.preventDefault();
        this.$router.push(href);
      }
    },
    contentUpdated: function contentUpdated() {
      var _this = this;

      this.removeListeners();
      this.$nextTick(function () {
        _this.addListeners();
      });
    },
    addListeners: function addListeners() {
      this._links = this.$el.getElementsByTagName('a');
      for (var i = 0; i < this._links.length; i++) {
        this._links[i].addEventListener('click', this.navigate, false);
      }
    },
    removeListeners: function removeListeners() {
      for (var i = 0; i < this._links.length; i++) {
        this._links[i].removeEventListener('click', this.navigate, false);
      }
      this._links = [];
    }
  }
};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  name: 'recursive-list',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  beforeCreate: function beforeCreate() {
    // https://vuejs.org/v2/guide/components.html#Circular-References-Between-Components
    this.$options.components.RecursiveList = __webpack_require__(58);
  },
  mounted: function mounted() {
    var _this = this;

    return __WEBPACK_IMPORTED_MODULE_0_axios___default()({
      url: 'https://api.github.com/repos/nuxt/nuxt.js/contents/' + this.path,
      headers: {
        'Authorization': 'token ' + "4aa6bcf919d238504e7db59a66d32e78281c0ad3"
      }
    }).then(function (res) {
      res.data.sort(function (f1, f2) {
        // Same type, order by name
        if (f1.type === f2.type) {
          var n1 = f1.name.toUpperCase();
          var n2 = f2.name.toUpperCase();
          if (n1 < n2) return -1;
          if (n1 > n2) return 1;
          return 0;
        }
        if (f1.type === 'dir') return -1;
        return 1;
      });
      if (!_this.currentFile) {
        var f = res.data.find(function (file) {
          return file.name === "package.json";
        });
        if (f) _this.changeFile(f);
      }
      _this.files = res.data.filter(function (f) {
        return f.name.toLowerCase() !== 'readme.md';
      });
    });
  },
  data: function data() {
    return {
      files: []
    };
  },

  computed: {
    currentFile: function currentFile() {
      return this.$parent.currentFile;
    }
  },
  methods: {
    linkClass: function linkClass(f) {
      var c = 'RecursiveList__Item__Link ';
      c += this.currentFile && this.currentFile.path === f.path ? 'RecursiveList__Item__Link--active' : 'RecursiveList__Item__Link--' + f.type;
      return c;
    },
    changeFile: function changeFile(f) {
      if (f.type === 'file' && (!this.currentFile || this.currentFile.path !== f.path)) {
        this.$emit('changeFile', f);
      }
    }
  }
};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ exports["default"] = {
  props: {
    label: String
  },
  data: function data() {
    return {
      q: ''
    };
  }
};

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_vue__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Header_vue__);
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  watch: {
    $route: 'setStore'
  },
  computed: {
    visible: function visible() {
      return this.$store.state.visibleHeader;
    }
  },
  methods: {
    setStore: function setStore() {
      if (this.$store.state.visibleHeader) this.$store.commit('toggle', 'visibleHeader');
      if (this.$store.state.visibleAffix) this.$store.commit('toggle', 'visibleAffix');
    }
  },
  head: function head() {
    return {
      htmlAttrs: { lang: this.$store.state._lang },
      link: [{ rel: 'alternate', hreflang: 'en', href: 'https://nuxtjs.org' + this.$route.path }, { rel: 'alternate', hreflang: 'ru', href: 'https://ru.nuxtjs.org' + this.$route.path }]
    };
  },

  components: {
    Navbar: __WEBPACK_IMPORTED_MODULE_0__components_Header_vue___default.a
  }
};

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Footer_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Footer_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  props: ['error'],
  components: {
    NuxtFooter: __WEBPACK_IMPORTED_MODULE_0__components_Footer_vue___default.a
  }
};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Affix_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ exports["default"] = {
  computed: {
    visible: function visible() {
      return this.$store.state.visibleAffix;
    },
    list: function list() {
      return this.$store.state.menu.api;
    }
  },
  components: {
    NuxtAffix: __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue___default.a,
    NuxtFooter: __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default.a
  }
};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue__);


//
//
//
//
//
//
//
//





/* harmony default export */ exports["default"] = {
  data: function data(_ref) {
    var _this = this;

    var route = _ref.route,
        store = _ref.store,
        error = _ref.error,
        isDev = _ref.isDev;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var data, slug, path, res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Default data
              data = {
                attrs: {},
                body: '',
                docLink: '',
                isDev: isDev
              };
              slug = route.params.slug || 'index';
              path = '/' + store.state.lang.iso + '/api/' + slug;
              res = void 0;
              _context.prev = 4;
              _context.next = 7;
              return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(store.state.apiURI + path);

            case 7:
              res = _context.sent;
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](4);

              if (!(_context.t0.response.status !== 404)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt('return', error({ statusCode: 500, message: 'An error occured' }));

            case 14:
              return _context.abrupt('return', error({ statusCode: 404, message: 'API page not found' }));

            case 15:
              data.attrs = res.data.attrs;
              data.body = res.data.body;
              data.docLink = 'https://github.com/nuxt/docs/blob/master' + path + '.md';
              if (store.state.lang.iso === 'ru') {
                data.docLink = 'https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru' + path + '.md';
              }
              if (!data.attrs.title) console.error('[' + path + '] Please define a title in the front matter.');
              if (!data.attrs.description) console.error('[' + path + '] Please define a description in the front matter.');
              return _context.abrupt('return', data);

            case 22:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[4, 10]]);
    }))();
  },

  scrollToTop: true,
  head: function head() {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Nuxt.js API',
      meta: [{ hid: 'description', name: 'description', content: this.attrs.description }]
    };
  },

  components: {
    HtmlParser: __WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue___default.a,
    CarbonAds: __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue___default.a
  }
};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Affix_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ exports["default"] = {
  computed: {
    visible: function visible() {
      return this.$store.state.visibleAffix;
    },
    list: function list() {
      return this.$store.state.menu.examples;
    }
  },
  components: {
    NuxtAffix: __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue___default.a,
    NuxtFooter: __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default.a
  }
};

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_FilesTree_vue__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_FilesTree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_FilesTree_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_HtmlParser_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_HtmlParser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_HtmlParser_vue__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
  data: function data(_ref) {
    var _this = this;

    var route = _ref.route,
        store = _ref.store,
        error = _ref.error,
        isDev = _ref.isDev;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var data, slug, path, res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Default data
              data = {
                attrs: {},
                body: '',
                isDev: isDev
              };
              slug = route.params.slug || 'async-datas';
              path = '/' + store.state.lang.iso + '/examples/' + slug;
              res = void 0;
              _context.prev = 4;
              _context.next = 7;
              return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(store.state.apiURI + path);

            case 7:
              res = _context.sent;
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](4);

              if (!(_context.t0.response.status !== 404)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt('return', error({ statusCode: 500, message: 'An error occured' }));

            case 14:
              return _context.abrupt('return', error({ statusCode: 404, message: 'Example page not found' }));

            case 15:
              data.attrs = res.data.attrs;
              data.body = res.data.body;
              if (!data.attrs.title) console.error('[' + path + '] Please define a title in the front matter.');
              if (!data.attrs.description) console.error('[' + path + '] Please define a description in the front matter.');
              return _context.abrupt('return', data);

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[4, 10]]);
    }))();
  },

  computed: {
    downloadLink: function downloadLink() {
      return 'https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/nuxt/nuxt.js/tree/master/examples/' + this.attrs.github;
    }
  },
  scrollToTop: true,
  head: function head() {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Nuxt.js Examples',
      meta: [{ hid: 'description', name: 'description', content: this.attrs.description }]
    };
  },

  components: {
    CarbonAds: __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue___default.a,
    NuxtFilesTree: __WEBPACK_IMPORTED_MODULE_4__components_FilesTree_vue___default.a,
    HtmlParser: __WEBPACK_IMPORTED_MODULE_5__components_HtmlParser_vue___default.a
  }
};

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Affix_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ exports["default"] = {
  computed: {
    visible: function visible() {
      return this.$store.state.visibleAffix;
    },
    list: function list() {
      return this.$store.state.menu.faq;
    }
  },
  components: {
    NuxtAffix: __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue___default.a,
    NuxtFooter: __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default.a
  }
};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue__);


//
//
//
//
//
//
//
//





/* harmony default export */ exports["default"] = {
  data: function data(_ref) {
    var _this = this;

    var route = _ref.route,
        store = _ref.store,
        error = _ref.error,
        isDev = _ref.isDev;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var data, slug, path, res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Default data
              data = {
                attrs: {},
                body: '',
                docLink: '',
                isDev: isDev
              };
              slug = route.params.slug || 'index';
              path = '/' + store.state.lang.iso + '/faq/' + slug;
              res = void 0;
              _context.prev = 4;
              _context.next = 7;
              return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(store.state.apiURI + path);

            case 7:
              res = _context.sent;
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](4);

              if (!(_context.t0.response.status !== 404)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt('return', error({ statusCode: 500, message: 'An error occured' }));

            case 14:
              return _context.abrupt('return', error({ statusCode: 404, message: 'API page not found' }));

            case 15:
              data.attrs = res.data.attrs;
              data.body = res.data.body;
              data.docLink = 'https://github.com/nuxt/docs/blob/master' + path + '.md';
              if (store.state.lang.iso === 'ru') {
                data.docLink = 'https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru' + path + '.md';
              }
              if (!data.attrs.title) console.error('[' + path + '] Please define a title in the front matter.');
              if (!data.attrs.description) console.error('[' + path + '] Please define a description in the front matter.');
              return _context.abrupt('return', data);

            case 22:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[4, 10]]);
    }))();
  },

  scrollToTop: true,
  head: function head() {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Nuxt.js FAQ',
      meta: [{ hid: 'description', name: 'description', content: this.attrs.description }]
    };
  },

  components: {
    HtmlParser: __WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue___default.a,
    CarbonAds: __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue___default.a
  }
};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Affix_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Footer_vue__);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ exports["default"] = {
  computed: {
    visible: function visible() {
      return this.$store.state.visibleAffix;
    },
    list: function list() {
      return this.$store.state.menu.guide;
    }
  },
  components: {
    NuxtAffix: __WEBPACK_IMPORTED_MODULE_0__components_Affix_vue___default.a,
    NuxtFooter: __WEBPACK_IMPORTED_MODULE_1__components_Footer_vue___default.a
  }
};

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue__);


//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ exports["default"] = {
  data: function data(_ref) {
    var _this = this;

    var route = _ref.route,
        store = _ref.store,
        error = _ref.error,
        isDev = _ref.isDev;
    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var data, slug, path, res;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Default data
              data = {
                attrs: {},
                body: '',
                docLink: '',
                isDev: isDev
              };
              slug = route.params.slug || 'index';
              path = '/' + store.state.lang.iso + '/guide/' + slug;
              res = void 0;
              _context.prev = 4;
              _context.next = 7;
              return __WEBPACK_IMPORTED_MODULE_2_axios___default.a.get(store.state.apiURI + path);

            case 7:
              res = _context.sent;
              _context.next = 15;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](4);

              if (!(_context.t0.response.status !== 404)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt('return', error({ statusCode: 500, message: 'An error occured' }));

            case 14:
              return _context.abrupt('return', error({ statusCode: 404, message: 'Guide page not found' }));

            case 15:
              data.attrs = res.data.attrs;
              data.body = res.data.body;
              data.docLink = 'https://github.com/nuxt/docs/blob/master' + path + '.md';
              if (store.state.lang.iso === 'ru') {
                data.docLink = 'https://github.com/translation-gang/ru.docs.nuxtjs/blob/translation-ru' + path + '.md';
              }
              if (!data.attrs.title) console.error('[' + path + '] Please define a title in the front matter.');
              if (!data.attrs.description) console.error('[' + path + '] Please define a description in the front matter.');
              return _context.abrupt('return', data);

            case 22:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[4, 10]]);
    }))();
  },

  scrollToTop: true,
  head: function head() {
    return {
      title: this.attrs.title,
      titleTemplate: '%s - Nuxt.js Guide',
      meta: [{ hid: 'description', name: 'description', content: this.attrs.description }]
    };
  },

  components: {
    CarbonAds: __WEBPACK_IMPORTED_MODULE_3__components_CarbonAds_vue___default.a,
    HtmlParser: __WEBPACK_IMPORTED_MODULE_4__components_HtmlParser_vue___default.a
  }
};

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HtmlParser_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HtmlParser_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_HtmlParser_vue__);
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ exports["default"] = {
  data: function data() {
    // Default data
    var data = {
      releases: []
    };
    return __WEBPACK_IMPORTED_MODULE_1_axios___default()({
      url: 'https://api.github.com/repos/nuxt/nuxt.js/releases',
      headers: {
        'Authorization': 'token ' + "4aa6bcf919d238504e7db59a66d32e78281c0ad3"
      }
    }).then(function (res) {
      var releases = res.data.filter(function (r) {
        return !r.draft;
      }).map(function (release) {
        return {
          name: release.name,
          date: release.published_at,
          body: __WEBPACK_IMPORTED_MODULE_0_marked___default()(release.body)
        };
      });
      return { releases: releases };
    });
  },
  head: function head() {
    return {
      title: 'Release Notes',
      titleTemplate: '%s - Nuxt.js',
      meta: [{ hid: 'description', name: 'description', content: 'Nuxt.js release notes from Github.' }]
    };
  },

  components: {
    HtmlParser: __WEBPACK_IMPORTED_MODULE_2__components_HtmlParser_vue___default.a
  }
};

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Footer_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Footer_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ exports["default"] = {
  components: {
    NuxtFooter: __WEBPACK_IMPORTED_MODULE_0__components_Footer_vue___default.a
  },
  head: function head() {
    return {
      title: this.$store.state.lang.homepage.meta.title,
      meta: [{ name: 'description', hid: 'description', content: this.$store.state.lang.homepage.meta.description },
      // Open Grapg
      { name: 'og:title', content: this.$store.state.lang.homepage.meta.title }, { name: 'og:description', content: this.$store.state.lang.homepage.meta.description }, { name: 'og:type', content: 'website' }, { name: 'og:url', content: 'https://nuxtjs.org' }, { name: 'og:image', content: 'https://i.imgur.com/PzEm5j2.png' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary' }, { name: 'twitter:site', content: '@nuxt_js' }, { name: 'twitter:title', content: this.$store.state.lang.homepage.meta.title }, { name: 'twitter:description', content: this.$store.state.lang.homepage.meta.description }, { name: 'twitter:image', content: 'https://i.imgur.com/PzEm5j2.png' }, { name: 'twitter:image:alt', content: 'Nuxt.js Logo' }]
    };
  }
};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

if (false) {
  // Include Google Analytics
  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
  // Set the current page
  ga('create', 'UA-88662854-1', 'auto');
  ga('send', 'pageview');
  // When the app is mounted
  window.onNuxtReady(function (app) {
    // And the route has changed
    app.$nuxt.$on('routeChanged', function (to, from) {
      // We tell Google Analytic to update the page
      ga('set', 'page', to.fullPath);
      ga('send', 'pageview');
    });
  });
}

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_marked___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_marked__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_highlight_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_highlight_js__);



var renderer = new __WEBPACK_IMPORTED_MODULE_0_marked__["Renderer"]();
renderer.code = function (code, language) {
  var validLang = !!(language && __WEBPACK_IMPORTED_MODULE_1_highlight_js___default.a.getLanguage(language));
  var highlighted = validLang ? __WEBPACK_IMPORTED_MODULE_1_highlight_js___default.a.highlight(language, code).value : code;
  return '<pre><code class="hljs ' + language + '">' + highlighted + '</code></pre>';
};
__WEBPACK_IMPORTED_MODULE_0_marked___default.a.setOptions({ renderer: renderer });

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vuex__);






__WEBPACK_IMPORTED_MODULE_3_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vuex___default.a);

var store = new __WEBPACK_IMPORTED_MODULE_4_vuex___default.a.Store({
  state: {
    version: '0.9.5',
    visibleHeader: false,
    visibleAffix: false,
    apiURI: 'https://docs.api.nuxtjs.org',
    _lang: 'en',
    lang: {},
    menu: {}
  },
  mutations: {
    toggle: function toggle(state, key) {
      state[key] = !state[key];
    }
  },
  actions: {
    nuxtServerInit: function nuxtServerInit(_ref, _ref2) {
      var _this = this;

      var state = _ref.state;
      var isDev = _ref2.isDev;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var resLang, resMenu;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isDev) {
                  state.apiURI = 'http://localhost:4000';
                }
                _context.prev = 1;
                _context.next = 4;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default()(state.apiURI + '/lang/' + state._lang);

              case 4:
                resLang = _context.sent;

                state.lang = resLang.data;
                _context.next = 8;
                return __WEBPACK_IMPORTED_MODULE_2_axios___default()(state.apiURI + '/menu/' + state._lang);

              case 8:
                resMenu = _context.sent;

                state.menu = resMenu.data;
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](1);

                console.error('Error on [nuxtServerInit] action, please run the docs server.');

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[1, 12]]);
      }))();
    }
  }
});

/* harmony default export */ exports["a"] = store;

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(43);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(97);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(96);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

var core  = __webpack_require__(2)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(134);
module.exports = __webpack_require__(2).Object.assign;

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(135);
module.exports = __webpack_require__(2).Object.keys;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(136);
module.exports = __webpack_require__(2).Promise;

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(137);
__webpack_require__(55);
__webpack_require__(138);
__webpack_require__(139);
module.exports = __webpack_require__(2).Symbol;

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(56);
__webpack_require__(57);
module.exports = __webpack_require__(41).f('iterator');

/***/ },
/* 106 */
/***/ function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ },
/* 107 */
/***/ function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10)
  , toLength  = __webpack_require__(54)
  , toIndex   = __webpack_require__(131);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(12)
  , gOPS    = __webpack_require__(34)
  , pIE     = __webpack_require__(24);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(22)
  , call        = __webpack_require__(114)
  , isArrayIter = __webpack_require__(112)
  , anObject    = __webpack_require__(5)
  , toLength    = __webpack_require__(54)
  , getIterFn   = __webpack_require__(132)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ },
/* 111 */
/***/ function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(19)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(16);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(49)
  , descriptor     = __webpack_require__(25)
  , setToStringTag = __webpack_require__(26)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(8)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ },
/* 117 */
/***/ function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(12)
  , toIObject = __webpack_require__(10);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

var META     = __webpack_require__(27)('meta')
  , isObject = __webpack_require__(18)
  , has      = __webpack_require__(7)
  , setDesc  = __webpack_require__(9).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(11)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

var global    = __webpack_require__(1)
  , macrotask = __webpack_require__(53).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(16)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(12)
  , gOPS     = __webpack_require__(34)
  , pIE      = __webpack_require__(24)
  , toObject = __webpack_require__(38)
  , IObject  = __webpack_require__(47)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(11)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(9)
  , anObject = __webpack_require__(5)
  , getKeys  = __webpack_require__(12);

module.exports = __webpack_require__(6) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(24)
  , createDesc     = __webpack_require__(25)
  , toIObject      = __webpack_require__(10)
  , toPrimitive    = __webpack_require__(39)
  , has            = __webpack_require__(7)
  , IE8_DOM_DEFINE = __webpack_require__(46)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(6) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10)
  , gOPN      = __webpack_require__(50).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(7)
  , toObject    = __webpack_require__(38)
  , IE_PROTO    = __webpack_require__(35)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(17)
  , core    = __webpack_require__(2)
  , fails   = __webpack_require__(11);
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

var hide = __webpack_require__(8);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(1)
  , core        = __webpack_require__(2)
  , dP          = __webpack_require__(9)
  , DESCRIPTORS = __webpack_require__(6)
  , SPECIES     = __webpack_require__(0)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(5)
  , aFunction = __webpack_require__(30)
  , SPECIES   = __webpack_require__(0)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37)
  , defined   = __webpack_require__(31);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(37)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(44)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(19);
module.exports = __webpack_require__(2).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(106)
  , step             = __webpack_require__(117)
  , Iterators        = __webpack_require__(19)
  , toIObject        = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(48)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(17);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(121)});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(38)
  , $keys    = __webpack_require__(12);

__webpack_require__(126)('keys', function(){
  return function keys(it){
    return $keys(toObject(it));
  };
});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(23)
  , global             = __webpack_require__(1)
  , ctx                = __webpack_require__(22)
  , classof            = __webpack_require__(44)
  , $export            = __webpack_require__(17)
  , isObject           = __webpack_require__(18)
  , aFunction          = __webpack_require__(30)
  , anInstance         = __webpack_require__(107)
  , forOf              = __webpack_require__(110)
  , speciesConstructor = __webpack_require__(129)
  , task               = __webpack_require__(53).set
  , microtask          = __webpack_require__(120)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(127)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(26)($Promise, PROMISE);
__webpack_require__(128)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(116)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(1)
  , has            = __webpack_require__(7)
  , DESCRIPTORS    = __webpack_require__(6)
  , $export        = __webpack_require__(17)
  , redefine       = __webpack_require__(52)
  , META           = __webpack_require__(119).KEY
  , $fails         = __webpack_require__(11)
  , shared         = __webpack_require__(36)
  , setToStringTag = __webpack_require__(26)
  , uid            = __webpack_require__(27)
  , wks            = __webpack_require__(0)
  , wksExt         = __webpack_require__(41)
  , wksDefine      = __webpack_require__(40)
  , keyOf          = __webpack_require__(118)
  , enumKeys       = __webpack_require__(109)
  , isArray        = __webpack_require__(113)
  , anObject       = __webpack_require__(5)
  , toIObject      = __webpack_require__(10)
  , toPrimitive    = __webpack_require__(39)
  , createDesc     = __webpack_require__(25)
  , _create        = __webpack_require__(49)
  , gOPNExt        = __webpack_require__(124)
  , $GOPD          = __webpack_require__(123)
  , $DP            = __webpack_require__(9)
  , $keys          = __webpack_require__(12)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(50).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f  = $propertyIsEnumerable;
  __webpack_require__(34).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(23)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(40)('asyncIterator');

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

__webpack_require__(40)('observable');

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(141);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ },
/* 141 */
/***/ function(module, exports) {

/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo_nav.png?be08efae0d5c46fd682e2a24f18545ae";

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo_nav_mobile.png?f90e5a3d77508106e815f7179a322c02";

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/triangles.png?3c20c1813fa54bb34cb3ab00087d4a38";

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(68)

/* template */
var __vue_template__ = __webpack_require__(181)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/.nuxt/App.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(69)

/* template */
var __vue_template__ = __webpack_require__(168)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/.nuxt/components/nuxt-loading.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2aeb4e08"
if (__vue_options__.functional) {console.error("[vue-loader] nuxt-loading.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(70)

/* template */
var __vue_template__ = __webpack_require__(180)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/.nuxt/components/nuxt.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] nuxt.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(73)

/* template */
var __vue_template__ = __webpack_require__(174)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/Dropdown.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-38c38936"
if (__vue_options__.functional) {console.error("[vue-loader] Dropdown.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(74)

/* template */
var __vue_template__ = __webpack_require__(187)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/FilesTree.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-df2e5dde"
if (__vue_options__.functional) {console.error("[vue-loader] FilesTree.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(75)

/* template */
var __vue_template__ = __webpack_require__(182)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/Header.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6fcc5ae1"
if (__vue_options__.functional) {console.error("[vue-loader] Header.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(78)

/* template */
var __vue_template__ = __webpack_require__(179)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/components/Search.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-60d64f08"
if (__vue_options__.functional) {console.error("[vue-loader] Search.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(79)

/* template */
var __vue_template__ = __webpack_require__(186)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/layouts/default.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cc2bcbd4"
if (__vue_options__.functional) {console.error("[vue-loader] default.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(80)

/* template */
var __vue_template__ = __webpack_require__(166)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/layouts/error.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a01b4c6"
if (__vue_options__.functional) {console.error("[vue-loader] error.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(81)

/* template */
var __vue_template__ = __webpack_require__(176)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/api.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] api.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(82)

/* template */
var __vue_template__ = __webpack_require__(183)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/api/_slug.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] _slug.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(83)

/* template */
var __vue_template__ = __webpack_require__(172)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/examples.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] examples.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(84)

/* template */
var __vue_template__ = __webpack_require__(165)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/examples/_slug.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-15f50eb8"
if (__vue_options__.functional) {console.error("[vue-loader] _slug.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(85)

/* template */
var __vue_template__ = __webpack_require__(173)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/faq.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] faq.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(86)

/* template */
var __vue_template__ = __webpack_require__(185)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/faq/_slug.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] _slug.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(87)

/* template */
var __vue_template__ = __webpack_require__(169)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/guide.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] guide.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(88)

/* template */
var __vue_template__ = __webpack_require__(171)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/guide/_slug.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] _slug.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(89)

/* template */
var __vue_template__ = __webpack_require__(167)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/guide/release-notes.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
if (__vue_options__.functional) {console.error("[vue-loader] release-notes.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */

/* script */
__vue_exports__ = __webpack_require__(90)

/* template */
var __vue_template__ = __webpack_require__(170)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/Atinux/Projets/nuxt/nuxtjs.org/pages/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3494e3a2"
if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ },
/* 164 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "Affix",
    class: {
      'Affix--hidden': !_vm.visible
    }
  }, [_c('div', {
    staticClass: "Affix__Toggler",
    class: {
      'Affix__Toggler--hidden': _vm.visible
    },
    on: {
      "click": _vm.toggle
    }
  }, [_c('div', {
    staticClass: "icon more-vertical"
  })]), _c('h2', {
    staticClass: "Affix__Version"
  }, [_vm._v("\n    Version " + _vm._s(_vm.$store.state.version) + "\n    "), _c('div', {
    staticClass: "Affix__Version__Toggler",
    on: {
      "click": _vm.toggle
    }
  }, [_c('div', {
    staticClass: "icon close"
  })])]), _vm._l((_vm.list), function(group) {
    return [_c('h3', {
      staticClass: "Affix__Title"
    }, [_vm._v(_vm._s(group.title))]), _c('ul', {
      staticClass: "Affix__List"
    }, _vm._l((group.links), function(link) {
      return _c('li', {
        staticClass: "Affix__List__Item"
      }, [_c('nuxt-link', {
        staticClass: "Affix__List__Item__Link",
        class: {
          'nuxt-link-active': _vm.path === _vm.menu + link.to
        },
        attrs: {
          "to": _vm.menu + link.to,
          "exact": ""
        }
      }, [_vm._v("\n          " + _vm._s(link.name) + "\n        ")]), (_vm.path === _vm.menu + link.to) ? _c('ul', {
        staticClass: "Affix__List__Item__Contents"
      }, _vm._l((link.contents), function(content, index) {
        return _c('li', {
          staticClass: "Affix__List__Item__Contents__Item"
        }, [_c('a', {
          staticClass: "Affix__List__Item__Contents__Item__Link",
          class: {
            'Affix__List__Item__Contents__Item__Link--active': _vm.current === index
          },
          attrs: {
            "href": _vm.menu + link.to + content.to
          },
          on: {
            "click": function($event) {
              $event.preventDefault();
              _vm.scrollTo(content.to)
            }
          }
        }, [_vm._v("\n              " + _vm._s(content.name) + "\n            ")])])
      })) : _vm._e()], 1)
    }))]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 165 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.isDev) ? _c('carbon-ads', {
    key: _vm.$route.params.slug
  }) : _vm._e(), _c('h1', [_vm._v(_vm._s(_vm.attrs.title))]), _c('blockquote', [_c('p', [_vm._v(_vm._s(_vm.attrs.description))])]), (_vm.attrs.youtube) ? _c('div', {
    staticClass: "video"
  }, [_c('iframe', {
    staticClass: "youtube",
    attrs: {
      "src": _vm.attrs.youtube,
      "frameborder": "0",
      "allowfullscreen": ""
    }
  })], 1) : _vm._e(), _c('h2', [_vm._v(_vm._s(_vm.$store.state.lang.examples.source_code))]), _c('nuxt-files-tree', {
    key: _vm.attrs.github,
    attrs: {
      "example": _vm.attrs.github
    }
  }), _c('div', [(_vm.attrs.livedemo) ? _c('a', {
    staticClass: "button",
    attrs: {
      "href": _vm.attrs.livedemo,
      "target": "_blank"
    }
  }, [_vm._m(0), _vm._v("\n      " + _vm._s(_vm.$store.state.lang.links.live_demo) + "\n    ")]) : _vm._e(), (_vm.attrs.liveedit) ? _c('a', {
    staticClass: "button",
    attrs: {
      "href": _vm.attrs.liveedit,
      "target": "_blank"
    }
  }, [_vm._m(1), _vm._v("\n      " + _vm._s(_vm.$store.state.lang.links.live_edit) + "\n    ")]) : _vm._e(), _c('a', {
    staticClass: "button",
    attrs: {
      "href": _vm.downloadLink,
      "target": "_blank"
    }
  }, [_vm._m(2), _vm._v("\n      " + _vm._s(_vm.$store.state.lang.links.download) + "\n    ")])]), _c('html-parser', {
    attrs: {
      "content": _vm.body
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('div', {
    staticClass: "icon eye"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('div', {
    staticClass: "icon edit"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', [_c('div', {
    staticClass: "icon download"
  })])
}]}
module.exports.render._withStripped = true

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "Landscape"
  }, [_c('img', {
    staticClass: "Landscape__Image",
    attrs: {
      "src": __webpack_require__(144),
      "alt": "Logo nuxt"
    }
  }), _c('h1', {
    staticClass: "Landscape__Title"
  }, [_vm._v("\n      " + _vm._s(_vm.error.statusCode) + "\n    ")]), _c('h2', {
    staticClass: "Landscape__SubTitle"
  }, [_vm._v("\n      " + _vm._s(_vm.error.message) + "\n    ")]), _c('ul', {
    staticClass: "Landscape__List"
  }, [_c('li', {
    staticClass: "Landscape__List__Item"
  }, [(_vm.error.statusCode === 404) ? _c('nuxt-link', {
    staticClass: "button button--green",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$store.state.lang.links.homepage) + "\n        ")]) : _vm._e()], 1)])]), _c('nuxt-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 167 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Content"
  }, [_c('h1', [_vm._v(_vm._s(_vm.$store.state.lang.guide.release_notes))]), _vm._l((_vm.releases), function(release) {
    return _c('div', [_c('h2', {
      attrs: {
        "id": release.name
      }
    }, [_vm._v(_vm._s(release.name))]), _c('html-parser', {
      staticClass: "Release__Content",
      domProps: {
        "innerHTML": _vm._s(release.body)
      }
    })], 1)
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 168 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "progress",
    style: ({
      'width': _vm.percent + '%',
      'height': _vm.height,
      'background-color': _vm.canSuccess ? _vm.color : _vm.failedColor,
      'opacity': _vm.show ? 1 : 0
    })
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 169 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "category"
  }, [_c('nuxt-affix', {
    attrs: {
      "list": _vm.list,
      "category": "guide"
    }
  }), _c('div', {
    staticClass: "category__content Content",
    class: {
      'category__content--hidden': _vm.visible
    }
  }, [_c('nuxt-child')], 1), _c('div', {
    staticClass: "category__footer"
  }, [_c('nuxt-footer')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 170 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('section', {
    staticClass: "Landscape"
  }, [_c('img', {
    staticClass: "Landscape__Image Landscape__Image--mobile",
    attrs: {
      "src": "/logo_home_mobile.png",
      "alt": "Logo nuxt"
    }
  }), _c('img', {
    staticClass: "Landscape__Image Landscape__Image--desktop",
    attrs: {
      "src": "/logo_home.png",
      "alt": "Logo nuxt"
    }
  }), _c('h2', {
    staticClass: "Landscape__Title"
  }, [_vm._v("\n      " + _vm._s(_vm.$store.state.lang.homepage.title) + "\n    ")]), _c('ul', {
    staticClass: "Landscape__List"
  }, [_c('li', {
    staticClass: "Landscape__List__Item"
  }, [_c('nuxt-link', {
    staticClass: "button button--green",
    attrs: {
      "to": "/guide/installation"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$store.state.lang.links.get_started) + "\n        ")])], 1), _c('li', {
    staticClass: "Landscape__List__Item"
  }, [_c('a', {
    staticClass: "button",
    attrs: {
      "href": "https://github.com/nuxt/nuxt.js",
      "target": "_blank"
    }
  }, [_vm._v("\n          " + _vm._s(_vm.$store.state.lang.links.github) + "\n        ")])])])]), _c('nuxt-footer')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 171 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.isDev) ? _c('carbon-ads', {
    key: _vm.$route.params.slug
  }) : _vm._e(), _c('h1', [_vm._v(_vm._s(_vm.attrs.title))]), (_vm.attrs.youtube) ? _c('div', {
    staticClass: "video"
  }, [_c('iframe', {
    staticClass: "youtube",
    attrs: {
      "src": _vm.attrs.youtube,
      "frameborder": "0",
      "allowfullscreen": ""
    }
  })], 1) : _vm._e(), _c('html-parser', {
    attrs: {
      "content": _vm.body
    }
  }), _c('p', {
    staticClass: "contribute"
  }, [_vm._v(_vm._s(_vm.$store.state.lang.guide.contribute) + " "), _c('a', {
    attrs: {
      "href": _vm.docLink,
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.$store.state.lang.guide.edit_on_github))])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 172 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "category"
  }, [_c('nuxt-affix', {
    attrs: {
      "list": _vm.list,
      "category": "examples"
    }
  }), _c('div', {
    staticClass: "category__content Content",
    class: {
      'category__content--hidden': _vm.visible
    }
  }, [_c('nuxt-child')], 1), _c('div', {
    staticClass: "category__footer"
  }, [_c('nuxt-footer')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 173 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "category"
  }, [_c('nuxt-affix', {
    attrs: {
      "list": _vm.list,
      "category": "faq"
    }
  }), _c('div', {
    staticClass: "category__content Content",
    class: {
      'category__content--hidden': _vm.visible
    }
  }, [_c('nuxt-child')], 1), _c('div', {
    staticClass: "category__footer"
  }, [_c('nuxt-footer')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 174 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Dropdown"
  }, [_c('div', {
    staticClass: "Dropdown__Title",
    class: {
      'Dropdown__Title--mobile': _vm.show
    },
    on: {
      "click": function($event) {
        _vm.show = !_vm.show
      }
    }
  }, [_vm._v("\n    " + _vm._s(_vm.title) + "\n  ")]), _c('ul', {
    staticClass: "Dropdown__List",
    class: {
      'Dropdown__List--visible': _vm.show
    }
  }, _vm._l((_vm.list), function(item) {
    return _c('li', {
      staticClass: "Dropdown__List__Item"
    }, [_c('a', {
      staticClass: "Dropdown__List__Item__Link",
      attrs: {
        "href": item.path,
        "target": item.target
      }
    }, [_vm._v("\n        " + _vm._s(item.name) + "\n      ")])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 175 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "carbonads",
    staticClass: "ad"
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 176 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "category"
  }, [_c('nuxt-affix', {
    attrs: {
      "list": _vm.list,
      "category": "api"
    }
  }), _c('div', {
    staticClass: "category__content Content",
    class: {
      'category__content--hidden': _vm.visible
    }
  }, [_c('nuxt-child')], 1), _c('div', {
    staticClass: "category__footer"
  }, [_c('nuxt-footer')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 177 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "RecursiveList"
  }, _vm._l((_vm.files), function(file) {
    return _c('li', {
      staticClass: "RecursiveList__Item"
    }, [_c('div', {
      class: _vm.linkClass(file),
      on: {
        "click": function($event) {
          _vm.changeFile(file)
        }
      }
    }, [_c('div', {
      staticClass: "Icon"
    }, [_c('div', {
      staticClass: "icon",
      class: {
        'folder': file.type === 'dir', 'file': file.type === 'file'
      }
    })]), _vm._v("\n      " + _vm._s(file.name) + "\n    ")]), (file.type === 'dir') ? _c('recursive-list', {
      attrs: {
        "path": file.path
      },
      on: {
        "changeFile": _vm.changeFile
      }
    }) : _vm._e()], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 178 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "Footer"
  }, [_c('div', {
    staticClass: "Footer__Author container"
  }, [_vm._v("\n    " + _vm._s(_vm.$store.state.lang.footer.authors) + ":\n    "), _c('a', {
    attrs: {
      "href": "https://github.com/Atinux",
      "target": "_blank"
    }
  }, [_vm._v("@Atinux")]), _vm._v("\n    &\n    "), _c('a', {
    attrs: {
      "href": "https://github.com/alexchopin",
      "target": "_blank"
    }
  }, [_vm._v("@alexchopin")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 179 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "Search"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.q),
      expression: "q"
    }],
    staticClass: "Search__Input",
    attrs: {
      "type": "text",
      "name": "search",
      "id": _vm.label,
      "placeholder": "Search"
    },
    domProps: {
      "value": _vm._s(_vm.q)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.q = $event.target.value
      }
    }
  }), _c('label', {
    staticClass: "Search__Label",
    attrs: {
      "for": _vm.label
    },
    on: {
      "click": function($event) {
        _vm.q = ''
      }
    }
  }, [_c('div', {
    class: {
      'icon search': !_vm.q.length, 'icon remove': _vm.q.length
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 180 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('nuxt-loading', {
    ref: "loading"
  }), (!_vm.nuxt.err) ? _c('nuxt-child') : _vm._e(), (_vm.nuxt.err) ? _c('nuxt-error', {
    attrs: {
      "error": _vm.nuxt.err
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 181 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "__nuxt"
    }
  }, [(_vm.layout) ? _c(_vm.layout, {
    tag: "component"
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "Header"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('nuxt-link', {
    staticClass: "Header__Title",
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "Header__Title__Logo Header__Title__Logo--desktop",
    attrs: {
      "src": __webpack_require__(142),
      "alt": "Logo nuxt"
    }
  }), _c('img', {
    staticClass: "Header__Title__Logo Header__Title__Logo--mobile",
    attrs: {
      "src": __webpack_require__(143),
      "alt": "Logo nuxt"
    }
  }), _c('h1', {
    staticClass: "Header__Title__Text"
  }, [_vm._v("\n        NUXT\n      ")])]), _c('nav', {
    staticClass: "Header__Nav",
    class: {
      'Header__Nav--hidden': !_vm.visible
    }
  }, [_c('div', {
    staticClass: "Header__Nav__Search Header__Nav__Search--mobile"
  }, [_c('nuxt-search', {
    attrs: {
      "label": "mobile"
    }
  })], 1), _c('div', {
    staticClass: "Header__Nav__Lang"
  }, [_c('div', {
    staticClass: "Header__Nav__Lang__Icon"
  }, [_c('div', {
    staticClass: "flag ",
    class: _vm.flag,
    on: {
      "click": function($event) {
        _vm.show = !_vm.show
      }
    }
  })]), _c('ul', {
    staticClass: "Header__Nav__Lang__List",
    class: {
      'Header__Nav__Lang__List--visible': _vm.show
    }
  }, _vm._l((_vm.langs), function(lang) {
    return (lang.iso !== _vm.$store.state.lang.iso) ? _c('li', {
      staticClass: "Header__Nav__Lang__List__Item"
    }, [_c('a', {
      staticClass: "flag ",
      class: lang.class,
      attrs: {
        "href": lang.url + _vm.$route.path
      }
    })]) : _vm._e()
  }))]), _c('ul', {
    staticClass: "Header__Nav__List"
  }, [_c('li', {
    staticClass: "Header__Nav__List__Item"
  }, [_c('nuxt-link', {
    staticClass: "Header__Nav__List__Item__Link",
    attrs: {
      "to": "/guide"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$store.state.lang.links.guide) + "\n          ")])], 1), _c('li', {
    staticClass: "Header__Nav__List__Item"
  }, [_c('nuxt-link', {
    staticClass: "Header__Nav__List__Item__Link",
    attrs: {
      "to": "/api"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$store.state.lang.links.api) + "\n          ")])], 1), _c('li', {
    staticClass: "Header__Nav__List__Item"
  }, [_c('nuxt-link', {
    staticClass: "Header__Nav__List__Item__Link",
    attrs: {
      "to": "/examples"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$store.state.lang.links.examples) + "\n          ")])], 1), _c('li', {
    staticClass: "Header__Nav__List__Item"
  }, [_c('nuxt-link', {
    staticClass: "Header__Nav__List__Item__Link",
    attrs: {
      "to": "/faq"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$store.state.lang.links.faq) + "\n          ")])], 1), _c('li', {
    staticClass: "Header__Nav__List__Item"
  }, [_c('nuxt-dropdown', {
    staticClass: "Header__Nav__List__Item__Link",
    attrs: {
      "list": _vm.ecosystemLinks,
      "title": _vm.$store.state.lang.links.ecosystem
    }
  })], 1)]), _c('div', {
    staticClass: "Header__Nav__Search Header__Nav__Search--desktop"
  }, [_c('nuxt-search', {
    attrs: {
      "label": "desktop"
    }
  })], 1)]), _c('div', {
    staticClass: "Header__Toggler",
    on: {
      "click": _vm.toggle
    }
  }, [_c('div', {
    class: {
      'icon menu': !_vm.visible, 'icon close': _vm.visible
    }
  })])], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 183 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.isDev) ? _c('carbon-ads', {
    key: _vm.$route.params.slug
  }) : _vm._e(), _c('html-parser', {
    attrs: {
      "content": _vm.body
    }
  }), _c('p', {
    staticClass: "contribute"
  }, [_vm._v(_vm._s(_vm.$store.state.lang.guide.contribute) + " "), _c('a', {
    attrs: {
      "href": _vm.docLink,
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.$store.state.lang.guide.edit_on_github))])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 184 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 185 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(!_vm.isDev) ? _c('carbon-ads', {
    key: _vm.$route.params.slug
  }) : _vm._e(), _c('html-parser', {
    attrs: {
      "content": _vm.body
    }
  }), _c('p', {
    staticClass: "contribute"
  }, [_vm._v(_vm._s(_vm.$store.state.lang.guide.contribute) + " "), _c('a', {
    attrs: {
      "href": _vm.docLink,
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.$store.state.lang.guide.edit_on_github))])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 186 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('navbar'), _c('div', {
    class: {
      'App--hidden': _vm.visible
    }
  }, [_c('nuxt')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 187 */
/***/ function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "FilesTree clearfix"
  }, [_c('div', {
    staticClass: "FilesTree__Left",
    class: {
      'FilesTree__Left--hidden': _vm.hidden
    }
  }, [_c('div', {
    staticClass: "FilesTree__Left__Header"
  }, [_c('div', {
    staticClass: "Icon",
    on: {
      "click": function($event) {
        _vm.hidden = true
      }
    }
  }, [_c('div', {
    staticClass: "icon remove"
  })]), _vm._v("\n      Example Files\n    ")]), _c('div', {
    staticClass: "FilesTree__Left__Body"
  }, [_c('recursive-list', {
    attrs: {
      "path": 'examples/' + _vm.example
    },
    on: {
      "changeFile": _vm.changeFile
    }
  })], 1)]), (_vm.currentFile) ? _c('div', {
    staticClass: "FilesTree__Right",
    class: {
      'FilesTree__Right--hidden': _vm.hidden
    }
  }, [_c('div', {
    staticClass: "FilesTree__Right__Header"
  }, [(_vm.hidden) ? _c('div', {
    staticClass: "Icon",
    on: {
      "click": function($event) {
        _vm.hidden = false
      }
    }
  }, [_c('div', {
    staticClass: "icon menu"
  })]) : _vm._e(), _vm._v("\n      " + _vm._s(_vm.breadcrumb) + "\n    ")]), _c('div', {
    staticClass: "FilesTree__Right__Body"
  }, [(_vm.parseContent) ? [(_vm.isImage) ? _c('img', {
    staticClass: "FilesTree__Right__Body__Image",
    attrs: {
      "src": _vm.parseContent,
      "alt": "Image"
    }
  }) : _c('pre', {
    staticClass: "FilesTree__Right__Body__File"
  }, [_c('code', {
    domProps: {
      "innerHTML": _vm._s(_vm.parseContent)
    }
  })])] : _c('div', {
    staticClass: "FilesTree__Right__Body__Wait"
  }, [_vm._v("Please wait..")])], 2)]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ },
/* 188 */
/***/ function(module, exports) {

module.exports = require("vue-meta");

/***/ },
/* 189 */
/***/ function(module, exports) {

module.exports = require("vue-router");

/***/ },
/* 190 */
/***/ function(module, exports) {

module.exports = require("vuex");

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_querystring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(62);



var debug = __webpack_require__(63)('nuxt:render');
debug.color = 4; // force blue color






var isDev = false;
var _app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* app */]);

// Fix issue from vue-router Abstract mode with base (used for server-side rendering)


// This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.
/* harmony default export */ exports["default"] = function (context) {
  // Add store to the context
  context.store = __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */];
  // Nuxt object
  context.nuxt = { data: [], error: null, state: null, serverRendered: true };
  // create context.next for simulate next() of beforeEach() when wanted to redirect
  context.redirected = false;
  context.next = function (opts) {
    if (!context.res) {
      context.redirected = opts;
      context.nuxt.serverRendered = false;
      return;
    }
    opts.query = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_querystring__["stringify"])(opts.query);
    opts.path = opts.path + (opts.query ? '?' + opts.query : '');
    opts.path = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* urlJoin */])('/', opts.path);
    context.res.writeHead(opts.status, {
      'Location': opts.path
    });
    context.res.end();
  };
  // set router's location
  __WEBPACK_IMPORTED_MODULE_4__index__["c" /* router */].push(context.url);
  // Add route to the context
  context.route = __WEBPACK_IMPORTED_MODULE_4__index__["c" /* router */].currentRoute;
  // Add meta infos
  context.meta = _app.$meta();
  // Error function
  context.error = _app.$options._nuxt.error.bind(_app);

  var Components = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["b" /* getMatchedComponents */])(context.route);

  var promise = __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */]._actions && __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */]._actions.nuxtServerInit ? __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */].dispatch('nuxtServerInit', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["omit"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* getContext */])(context), 'redirect', 'error')) : null;
  if (!(promise instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a)) promise = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve();

  return promise.then(function () {
    // Sanitize Components
    Components = Components.map(function (Component) {
      var promises = [];
      if (!Component.options) {
        Component = __WEBPACK_IMPORTED_MODULE_1_vue___default.a.extend(Component);
        Component._Ctor = Component;
      } else {
        Component._Ctor = Component;
        Component.extendOptions = Component.options;
      }
      return Component;
    });
    // Set layout
    return _app.setLayout(Components.length ? Components[0].options.layout : '');
  }).then(function () {
    // Call .validate()
    var isValid = true;
    Components.forEach(function (Component) {
      if (!isValid) return;
      if (typeof Component.options.validate !== 'function') return;
      isValid = Component.options.validate({
        params: context.route.params || {},
        query: context.route.query || {}
      });
    });
    if (!isValid) {
      // Don't server-render the page in generate mode
      if (context._generate) {
        context.nuxt.serverRendered = false;
      }
      // Call the 404 error by making the Components array empty
      Components = [];
      return _app;
    }
    // Call data & fetch hooks on components matched by the route.
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(Components.map(function (Component) {
      var promises = [];
      var ctx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["c" /* getContext */])(context);
      if (Component.options.data && typeof Component.options.data === 'function') {
        Component._data = Component.options.data;
        var _promise = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["d" /* promisify */])(Component._data, ctx);
        _promise.then(function (data) {
          Component.options.data = function () {
            return data;
          };
          Component._Ctor.options.data = Component.options.data;
        });
        promises.push(_promise);
      } else {
        promises.push(null);
      }
      if (Component.options.fetch) {
        promises.push(Component.options.fetch(ctx));
      }
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(promises);
    }));
  }).then(function (res) {
    if (!Components.length) {
      context.nuxt.error = context.error({ statusCode: 404, message: 'This page could not be found.', url: context.route.path });
      context.nuxt.state = __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */].state;
      return _app;
    }

    // datas are the first row of each
    context.nuxt.data = res.map(function (tab) {
      return tab[0];
    });
    context.nuxt.error = _app.$options._nuxt.err;
    // Add the state from the vuex store
    context.nuxt.state = __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */].state;
    return _app;
  }).catch(function (error) {
    if (error && error instanceof Error) {
      error = { statusCode: 500, message: error.message };
    }
    context.nuxt.error = context.error(error);
    context.nuxt.state = __WEBPACK_IMPORTED_MODULE_4__index__["b" /* store */].state;
    return _app;
  });
};

/***/ }
/******/ ]);