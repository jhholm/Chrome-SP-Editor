(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp.common"] = factory();
	else
		root["pnp.common"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "BearerTokenFetchClient": () => (/* reexport */ BearerTokenFetchClient),
  "DefaultRuntime": () => (/* reexport */ DefaultRuntime),
  "FetchClient": () => (/* reexport */ FetchClient),
  "LambdaFetchClient": () => (/* reexport */ LambdaFetchClient),
  "PnPClientStorage": () => (/* reexport */ PnPClientStorage),
  "PnPClientStorageWrapper": () => (/* reexport */ PnPClientStorageWrapper),
  "Runtime": () => (/* reexport */ Runtime),
  "SPFxAdalClient": () => (/* reexport */ SPFxAdalClient),
  "assign": () => (/* reexport */ util_assign),
  "combine": () => (/* reexport */ combine),
  "dateAdd": () => (/* reexport */ dateAdd),
  "getADALResource": () => (/* reexport */ getADALResource),
  "getCtxCallback": () => (/* reexport */ getCtxCallback),
  "getGUID": () => (/* reexport */ getGUID),
  "getHashCode": () => (/* reexport */ getHashCode),
  "getRandomString": () => (/* reexport */ getRandomString),
  "hOP": () => (/* reexport */ hOP),
  "isArray": () => (/* reexport */ isArray),
  "isFunc": () => (/* reexport */ isFunc),
  "isUrlAbsolute": () => (/* reexport */ isUrlAbsolute),
  "jsS": () => (/* reexport */ jsS),
  "mergeHeaders": () => (/* reexport */ mergeHeaders),
  "mergeMaps": () => (/* reexport */ mergeMaps),
  "mergeOptions": () => (/* reexport */ mergeOptions),
  "objectDefinedNotNull": () => (/* reexport */ objectDefinedNotNull),
  "objectToMap": () => (/* reexport */ objectToMap),
  "onRuntimeCreate": () => (/* reexport */ onRuntimeCreate),
  "safeGlobal": () => (/* reexport */ safeGlobal),
  "sanitizeGuid": () => (/* reexport */ sanitizeGuid),
  "setup": () => (/* reexport */ setup),
  "stringIsNullOrEmpty": () => (/* reexport */ stringIsNullOrEmpty)
});

;// CONCATENATED MODULE: ./node_modules/@pnp/common/util.js
/**
 * Gets a callback function which will maintain context across async calls.
 * Allows for the calling pattern getCtxCallback(thisobj, method, methodarg1, methodarg2, ...)
 *
 * @param context The object that will be the 'this' value in the callback
 * @param method The method to which we will apply the context and parameters
 * @param params Optional, additional arguments to supply to the wrapped method when it is invoked
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function getCtxCallback(context, method) {
    var params = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        params[_i - 2] = arguments[_i];
    }
    return function () {
        method.apply(context, params);
    };
}
/**
 * Adds a value to a date
 *
 * @param date The date to which we will add units, done in local time
 * @param interval The name of the interval to add, one of: ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']
 * @param units The amount to add to date of the given interval
 *
 * http://stackoverflow.com/questions/1197928/how-to-add-30-minutes-to-a-javascript-date-object
 */
function dateAdd(date, interval, units) {
    var ret = new Date(date.toString()); // don't change original date
    switch (interval.toLowerCase()) {
        case "year":
            ret.setFullYear(ret.getFullYear() + units);
            break;
        case "quarter":
            ret.setMonth(ret.getMonth() + 3 * units);
            break;
        case "month":
            ret.setMonth(ret.getMonth() + units);
            break;
        case "week":
            ret.setDate(ret.getDate() + 7 * units);
            break;
        case "day":
            ret.setDate(ret.getDate() + units);
            break;
        case "hour":
            ret.setTime(ret.getTime() + units * 3600000);
            break;
        case "minute":
            ret.setTime(ret.getTime() + units * 60000);
            break;
        case "second":
            ret.setTime(ret.getTime() + units * 1000);
            break;
        default:
            ret = undefined;
            break;
    }
    return ret;
}
/**
 * Combines an arbitrary set of paths ensuring and normalizes the slashes
 *
 * @param paths 0 to n path parts to combine
 */
function combine() {
    var paths = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        paths[_i] = arguments[_i];
    }
    return paths
        .filter(function (path) { return !stringIsNullOrEmpty(path); })
        .map(function (path) { return path.replace(/^[\\|/]/, "").replace(/[\\|/]$/, ""); })
        .join("/")
        .replace(/\\/g, "/");
}
/**
 * Gets a random string of chars length
 *
 * https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 *
 * @param chars The length of the random string to generate
 */
function getRandomString(chars) {
    var text = new Array(chars);
    for (var i = 0; i < chars; i++) {
        text[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * 62));
    }
    return text.join("");
}
/**
 * Gets a random GUID value
 *
 * http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
 */
/* eslint-disable no-bitwise */
function getGUID() {
    var d = Date.now();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
/* eslint-enable no-bitwise */
/**
 * Determines if a given value is a function
 *
 * @param cf The thing to test for functionness
 */
function isFunc(f) {
    return typeof f === "function";
}
/**
 * Determines if an object is both defined and not null
 * @param obj Object to test
 */
function objectDefinedNotNull(obj) {
    return typeof obj !== "undefined" && obj !== null;
}
/**
 * @returns whether the provided parameter is a JavaScript Array or not.
*/
function isArray(array) {
    return Array.isArray ? Array.isArray(array) : array && typeof array.length === "number" && array.constructor === Array;
}
/**
 * Provides functionality to extend the given object by doing a shallow copy
 *
 * @param target The object to which properties will be copied
 * @param source The source object from which properties will be copied
 * @param noOverwrite If true existing properties on the target are not overwritten from the source
 * @param filter If provided allows additional filtering on what properties are copied (propName: string) => boolean
 *
 */
function util_assign(target, source, noOverwrite, filter) {
    if (noOverwrite === void 0) { noOverwrite = false; }
    if (filter === void 0) { filter = function () { return true; }; }
    if (!objectDefinedNotNull(source)) {
        return target;
    }
    // ensure we don't overwrite things we don't want overwritten
    var check = noOverwrite ? function (o, i) { return !(i in o); } : function () { return true; };
    // final filter we will use
    var f = function (v) { return check(target, v) && filter(v); };
    return Object.getOwnPropertyNames(source)
        .filter(f)
        .reduce(function (t, v) {
        t[v] = source[v];
        return t;
    }, target);
}
/**
 * Determines if a given url is absolute
 *
 * @param url The url to check to see if it is absolute
 */
function isUrlAbsolute(url) {
    return /^https?:\/\/|^\/\//i.test(url);
}
/**
 * Determines if a string is null or empty or undefined
 *
 * @param s The string to test
 */
function stringIsNullOrEmpty(s) {
    return s === undefined || s === null || s.length < 1;
}
/**
 * Ensures guid values are represented consistently as "ea123463-137d-4ae3-89b8-cf3fc578ca05"
 *
 * @param guid The candidate guid
 */
function sanitizeGuid(guid) {
    if (stringIsNullOrEmpty(guid)) {
        return guid;
    }
    var matches = /([0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12})/i.exec(guid);
    return matches === null ? guid : matches[1];
}
/**
 * Shorthand for JSON.stringify
 *
 * @param o Any type of object
 */
function jsS(o) {
    return JSON.stringify(o);
}
/**
 * Shorthand for Object.hasOwnProperty
 *
 * @param o Object to check for
 * @param p Name of the property
 */
function hOP(o, p) {
    return Object.hasOwnProperty.call(o, p);
}
/**
 * Generates a ~unique hash code
 *
 * From: https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
/* eslint-disable no-bitwise */
function getHashCode(s) {
    var hash = 0;
    if (s.length === 0) {
        return hash;
    }
    for (var i = 0; i < s.length; i++) {
        var chr = s.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/* eslint-enable no-bitwise */
//# sourceMappingURL=util.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/collections.js

/**
 * Used to calculate the object properties, with polyfill if needed
 */
var objectEntries = isFunc(Object.entries) ? Object.entries : function (o) { return Object.keys(o).map(function (k) { return [k, o[k]]; }); };
/**
 * Converts the supplied object to a map
 *
 * @param o The object to map
 */
function objectToMap(o) {
    if (objectDefinedNotNull(o)) {
        return new Map(objectEntries(o));
    }
    return new Map();
}
/**
 * Merges to Map instances together, overwriting values in target with matching keys, last in wins
 *
 * @param target map into which the other maps are merged
 * @param maps One or more maps to merge into the target
 */
function mergeMaps(target) {
    var maps = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        maps[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < maps.length; i++) {
        maps[i].forEach(function (v, k) {
            // let's not run the spfx context through Object.assign :)
            if ((typeof k === "string" && k !== "spfxContext") && Object.prototype.toString.call(v) === "[object Object]") {
                // we only handle one level of deep object merging
                target.set(k, Object.assign({}, target.get(k) || {}, v));
            }
            else {
                target.set(k, v);
            }
        });
    }
    return target;
}
//# sourceMappingURL=collections.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

;// CONCATENATED MODULE: ./node_modules/@pnp/common/libconfig.js


function setup(config, runtime) {
    if (runtime === void 0) { runtime = DefaultRuntime; }
    runtime.assign(config);
}
// lable mapping for known config values
var s = [
    "defaultCachingStore",
    "defaultCachingTimeoutSeconds",
    "globalCacheDisable",
    "enableCacheExpiration",
    "cacheExpirationIntervalMilliseconds",
    "spfxContext",
    "ie11",
];
var runtimeCreateHooks = [];
function onRuntimeCreate(hook) {
    if (runtimeCreateHooks.indexOf(hook) < 0) {
        // apply hook logic to default runtime
        hook(DefaultRuntime);
        runtimeCreateHooks.push(hook);
    }
}
var Runtime = /** @class */ (function () {
    function Runtime(_v) {
        var _this = this;
        if (_v === void 0) { _v = new Map(); }
        this._v = _v;
        var defaulter = function (key, def) {
            if (!_this._v.has(key)) {
                _this._v.set(key, def);
            }
        };
        // setup defaults
        defaulter(s[0], "session");
        defaulter(s[1], 60);
        defaulter(s[2], false);
        defaulter(s[3], false);
        defaulter(s[4], 750);
        defaulter(s[5], null);
        defaulter(s[6], false);
        runtimeCreateHooks.forEach(function (hook) { return hook(_this); });
    }
    /**
     *
     * @param config The set of properties to add to this runtime instance
     */
    Runtime.prototype.assign = function (config) {
        this._v = mergeMaps(this._v, objectToMap(config));
    };
    /**
     * Gets a runtime value using T to define the available keys, and R to define the type returned by that key
     *
     * @param key
     */
    Runtime.prototype.get = function (key) {
        return this._v.get(key);
    };
    /**
     * Exports the internal Map representing this runtime
     */
    Runtime.prototype.export = function () {
        var e_1, _a;
        var expt = new Map();
        try {
            for (var _b = __values(this._v), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (key !== "__isDefault__") {
                    expt.set(key, value);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return expt;
    };
    return Runtime;
}());

// default runtime used globally
var _runtime = new Runtime(new Map([["__isDefault__", true]]));
var DefaultRuntime = _runtime;
//# sourceMappingURL=libconfig.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/safe-global.js
// export either window or global
var safeGlobal = typeof __webpack_require__.g === "undefined" ? window : __webpack_require__.g;
//# sourceMappingURL=safe-global.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/net.js



function mergeHeaders(target, source) {
    if (objectDefinedNotNull(source)) {
        var temp = new Request("", { headers: source });
        temp.headers.forEach(function (value, name) {
            target.append(name, value);
        });
    }
}
function mergeOptions(target, source) {
    if (objectDefinedNotNull(source)) {
        var headers = util_assign(target.headers || {}, source.headers);
        target = util_assign(target, source);
        target.headers = headers;
    }
}
/**
 * Parses out the root of the request url to use as the resource when getting the token
 *
  * @param url The url to parse
 */
function getADALResource(url) {
    var u = new URL(url);
    return u.protocol + "//" + u.hostname;
}
/**
 * Makes requests using the global/window fetch API
 */
var FetchClient = /** @class */ (function () {
    function FetchClient() {
    }
    FetchClient.prototype.fetch = function (url, options) {
        return safeGlobal.fetch(url, options);
    };
    return FetchClient;
}());

/**
 * Makes requests using the fetch API adding the supplied token to the Authorization header
 */
var BearerTokenFetchClient = /** @class */ (function (_super) {
    __extends(BearerTokenFetchClient, _super);
    function BearerTokenFetchClient(token) {
        var _this = _super.call(this) || this;
        _this.token = token;
        return _this;
    }
    BearerTokenFetchClient.prototype.fetch = function (url, options) {
        if (options === void 0) { options = {}; }
        var headers = new Headers();
        mergeHeaders(headers, options.headers);
        headers.set("Authorization", "Bearer " + this.token);
        options.headers = headers;
        return _super.prototype.fetch.call(this, url, options);
    };
    return BearerTokenFetchClient;
}(FetchClient));

var LambdaFetchClient = /** @class */ (function (_super) {
    __extends(LambdaFetchClient, _super);
    function LambdaFetchClient(tokenFactory) {
        var _this = _super.call(this, null) || this;
        _this.tokenFactory = tokenFactory;
        return _this;
    }
    /**
     * Executes a fetch request using the supplied url and options
     *
     * @param url Absolute url of the request
     * @param options Any options
     */
    LambdaFetchClient.prototype.fetch = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.tokenFactory({ url: url, options: options })];
                    case 1:
                        _a.token = _b.sent();
                        return [2 /*return*/, _super.prototype.fetch.call(this, url, options)];
                }
            });
        });
    };
    return LambdaFetchClient;
}(BearerTokenFetchClient));

/**
 * Client wrapping the aadTokenProvider available from SPFx >= 1.6
 */
var SPFxAdalClient = /** @class */ (function (_super) {
    __extends(SPFxAdalClient, _super);
    /**
     *
     * @param context provide the appropriate SPFx Context object
     */
    function SPFxAdalClient(context) {
        var _this = _super.call(this, function (params) { return __awaiter(_this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, context.aadTokenProviderFactory.getTokenProvider()];
                    case 1:
                        provider = _a.sent();
                        return [2 /*return*/, provider.getToken(getADALResource(params.url))];
                }
            });
        }); }) || this;
        _this.context = context;
        return _this;
    }
    /**
     * Gets an AAD token for the provided resource using the SPFx AADTokenProvider
     *
     * @param resource Resource for which a token is to be requested (ex: https://graph.microsoft.com)
     */
    SPFxAdalClient.prototype.getToken = function (resource) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.context.aadTokenProviderFactory.getTokenProvider()];
                    case 1:
                        provider = _a.sent();
                        return [2 /*return*/, provider.getToken(resource)];
                }
            });
        });
    };
    return SPFxAdalClient;
}(LambdaFetchClient));

//# sourceMappingURL=net.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/storage.js



/**
 * A wrapper class to provide a consistent interface to browser based storage
 *
 */
var PnPClientStorageWrapper = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorageWrapper class
     *
     * @constructor
     */
    function PnPClientStorageWrapper(store, defaultTimeoutMinutes) {
        if (defaultTimeoutMinutes === void 0) { defaultTimeoutMinutes = -1; }
        this.store = store;
        this.defaultTimeoutMinutes = defaultTimeoutMinutes;
        this.enabled = this.test();
        // if the cache timeout is enabled call the handler
        // this will clear any expired items and set the timeout function
        if (DefaultRuntime.get("enableCacheExpiration")) {
            this.cacheExpirationHandler();
        }
    }
    PnPClientStorageWrapper.bind = function (store) {
        return new PnPClientStorageWrapper(typeof (store) === "undefined" ? new MemoryStorage() : store);
    };
    /**
     * Get a value from storage, or null if that value does not exist
     *
     * @param key The key whose value we want to retrieve
     */
    PnPClientStorageWrapper.prototype.get = function (key) {
        if (!this.enabled) {
            return null;
        }
        var o = this.store.getItem(key);
        if (!objectDefinedNotNull(o)) {
            return null;
        }
        var persistable = JSON.parse(o);
        if (new Date(persistable.expiration) <= new Date()) {
            this.delete(key);
            return null;
        }
        else {
            return persistable.value;
        }
    };
    /**
     * Adds a value to the underlying storage
     *
     * @param key The key to use when storing the provided value
     * @param o The value to store
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.put = function (key, o, expire) {
        if (this.enabled) {
            this.store.setItem(key, this.createPersistable(o, expire));
        }
    };
    /**
     * Deletes a value from the underlying storage
     *
     * @param key The key of the pair we want to remove from storage
     */
    PnPClientStorageWrapper.prototype.delete = function (key) {
        if (this.enabled) {
            this.store.removeItem(key);
        }
    };
    /**
     * Gets an item from the underlying storage, or adds it if it does not exist using the supplied getter function
     *
     * @param key The key to use when storing the provided value
     * @param getter A function which will upon execution provide the desired value
     * @param expire Optional, if provided the expiration of the item, otherwise the default is used
     */
    PnPClientStorageWrapper.prototype.getOrPut = function (key, getter, expire) {
        return __awaiter(this, void 0, void 0, function () {
            var o;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled) {
                            return [2 /*return*/, getter()];
                        }
                        o = this.get(key);
                        if (!(o === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, getter()];
                    case 1:
                        o = _a.sent();
                        this.put(key, o, expire);
                        _a.label = 2;
                    case 2: return [2 /*return*/, o];
                }
            });
        });
    };
    /**
     * Deletes any expired items placed in the store by the pnp library, leaves other items untouched
     */
    PnPClientStorageWrapper.prototype.deleteExpired = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.enabled) {
                            return [2 /*return*/];
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.store.length)) return [3 /*break*/, 4];
                        key = this.store.key(i);
                        if (!(key !== null)) return [3 /*break*/, 3];
                        if (!/["|']?pnp["|']? ?: ?1/i.test(this.store.getItem(key))) return [3 /*break*/, 3];
                        // get those items as get will delete from cache if they are expired
                        return [4 /*yield*/, this.get(key)];
                    case 2:
                        // get those items as get will delete from cache if they are expired
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Used to determine if the wrapped storage is available currently
     */
    PnPClientStorageWrapper.prototype.test = function () {
        var str = "t";
        try {
            this.store.setItem(str, str);
            this.store.removeItem(str);
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Creates the persistable to store
     */
    PnPClientStorageWrapper.prototype.createPersistable = function (o, expire) {
        if (expire === undefined) {
            // ensure we are by default inline with the global library setting
            var defaultTimeout = DefaultRuntime.get("defaultCachingTimeoutSeconds");
            if (this.defaultTimeoutMinutes > 0) {
                defaultTimeout = this.defaultTimeoutMinutes * 60;
            }
            expire = dateAdd(new Date(), "second", defaultTimeout);
        }
        return jsS({ pnp: 1, expiration: expire, value: o });
    };
    /**
     * Deletes expired items added by this library in this.store and sets a timeout to call itself
     */
    PnPClientStorageWrapper.prototype.cacheExpirationHandler = function () {
        var _this = this;
        if (!this.enabled) {
            return;
        }
        this.deleteExpired().then(function () {
            // call ourself in the future
            setTimeout(getCtxCallback(_this, _this.cacheExpirationHandler), DefaultRuntime.get("cacheExpirationIntervalMilliseconds"));
        }).catch(console.error);
    };
    return PnPClientStorageWrapper;
}());

/**
 * A thin implementation of in-memory storage for use in nodejs
 */
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage(_store) {
        if (_store === void 0) { _store = new Map(); }
        this._store = _store;
    }
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: function () {
            return this._store.size;
        },
        enumerable: false,
        configurable: true
    });
    MemoryStorage.prototype.clear = function () {
        this._store.clear();
    };
    MemoryStorage.prototype.getItem = function (key) {
        return this._store.get(key);
    };
    MemoryStorage.prototype.key = function (index) {
        return Array.from(this._store)[index][0];
    };
    MemoryStorage.prototype.removeItem = function (key) {
        this._store.delete(key);
    };
    MemoryStorage.prototype.setItem = function (key, data) {
        this._store.set(key, data);
    };
    return MemoryStorage;
}());
/**
 * A class that will establish wrappers for both local and session storage
 */
var PnPClientStorage = /** @class */ (function () {
    /**
     * Creates a new instance of the PnPClientStorage class
     *
     * @constructor
     */
    function PnPClientStorage(_local, _session) {
        if (_local === void 0) { _local = null; }
        if (_session === void 0) { _session = null; }
        this._local = _local;
        this._session = _session;
    }
    Object.defineProperty(PnPClientStorage.prototype, "local", {
        /**
         * Provides access to the local storage of the browser
         */
        get: function () {
            if (this._local === null) {
                this._local = new PnPClientStorageWrapper(typeof (localStorage) === "undefined" ? new MemoryStorage() : localStorage);
            }
            return this._local;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PnPClientStorage.prototype, "session", {
        /**
         * Provides access to the session storage of the browser
         */
        get: function () {
            if (this._session === null) {
                this._session = new PnPClientStorageWrapper(typeof (sessionStorage) === "undefined" ? new MemoryStorage() : sessionStorage);
            }
            return this._session;
        },
        enumerable: false,
        configurable: true
    });
    return PnPClientStorage;
}());

//# sourceMappingURL=storage.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/common/index.js







//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./pnpjs-sources/index-common.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});