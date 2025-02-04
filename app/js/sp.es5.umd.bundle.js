(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["pnp.sp"] = factory();
	else
		root["pnp.sp"] = factory();
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
  "AddFieldOptions": () => (/* reexport */ AddFieldOptions),
  "App": () => (/* reexport */ App),
  "AppCatalog": () => (/* reexport */ AppCatalog),
  "Attachment": () => (/* reexport */ Attachment),
  "Attachments": () => (/* reexport */ Attachments),
  "CalendarType": () => (/* reexport */ CalendarType),
  "CanvasColumn": () => (/* reexport */ CanvasColumn),
  "CanvasSection": () => (/* reexport */ CanvasSection),
  "CheckinType": () => (/* reexport */ CheckinType),
  "Children": () => (/* reexport */ Children),
  "ChoiceFieldFormatType": () => (/* reexport */ ChoiceFieldFormatType),
  "ClientsidePageFromFile": () => (/* reexport */ ClientsidePageFromFile),
  "ClientsideText": () => (/* reexport */ ClientsideText),
  "ClientsideWebpart": () => (/* reexport */ ClientsideWebpart),
  "ColumnControl": () => (/* reexport */ ColumnControl),
  "Comment": () => (/* reexport */ Comment),
  "Comments": () => (/* reexport */ Comments),
  "ContentType": () => (/* reexport */ ContentType),
  "ContentTypes": () => (/* reexport */ ContentTypes),
  "ControlMode": () => (/* reexport */ ControlMode),
  "CreateClientsidePage": () => (/* reexport */ CreateClientsidePage),
  "DateTimeFieldFormatType": () => (/* reexport */ DateTimeFieldFormatType),
  "DateTimeFieldFriendlyFormatType": () => (/* reexport */ DateTimeFieldFriendlyFormatType),
  "Feature": () => (/* reexport */ Feature),
  "Features": () => (/* reexport */ Features),
  "Field": () => (/* reexport */ Field),
  "FieldLink": () => (/* reexport */ FieldLink),
  "FieldLinks": () => (/* reexport */ FieldLinks),
  "FieldTypes": () => (/* reexport */ FieldTypes),
  "FieldUserSelectionMode": () => (/* reexport */ FieldUserSelectionMode),
  "Fields": () => (/* reexport */ Fields),
  "File": () => (/* reexport */ File),
  "Files": () => (/* reexport */ Files),
  "Folder": () => (/* reexport */ Folder),
  "Folders": () => (/* reexport */ Folders),
  "Form": () => (/* reexport */ Form),
  "Forms": () => (/* reexport */ Forms),
  "HubSite": () => (/* reexport */ HubSite),
  "HubSites": () => (/* reexport */ HubSites),
  "Item": () => (/* reexport */ Item),
  "ItemVersion": () => (/* reexport */ ItemVersion),
  "ItemVersions": () => (/* reexport */ ItemVersions),
  "Items": () => (/* reexport */ Items),
  "LimitedWebPartManager": () => (/* reexport */ LimitedWebPartManager),
  "List": () => (/* reexport */ List),
  "Lists": () => (/* reexport */ Lists),
  "MoveOperations": () => (/* reexport */ MoveOperations),
  "MySocial": () => (/* reexport */ MySocial),
  "Navigation": () => (/* reexport */ Navigation),
  "NavigationNode": () => (/* reexport */ NavigationNode),
  "NavigationNodes": () => (/* reexport */ NavigationNodes),
  "NavigationService": () => (/* reexport */ NavigationService),
  "PageType": () => (/* reexport */ PageType),
  "PagedItemCollection": () => (/* reexport */ PagedItemCollection),
  "PermissionKind": () => (/* reexport */ PermissionKind),
  "PrincipalSource": () => (/* reexport */ PrincipalSource),
  "PrincipalType": () => (/* reexport */ PrincipalType),
  "Profiles": () => (/* reexport */ Profiles),
  "PromotedState": () => (/* reexport */ PromotedState),
  "QueryPropertyValueType": () => (/* reexport */ QueryPropertyValueType),
  "RegionalSettings": () => (/* reexport */ RegionalSettings),
  "RelatedItemManager": () => (/* reexport */ RelatedItemManager),
  "Relation": () => (/* reexport */ Relation),
  "Relations": () => (/* reexport */ Relations),
  "RenderListDataOptions": () => (/* reexport */ RenderListDataOptions),
  "ReorderingRuleMatchType": () => (/* reexport */ ReorderingRuleMatchType),
  "Replies": () => (/* reexport */ Replies),
  "RoleAssignment": () => (/* reexport */ RoleAssignment),
  "RoleAssignments": () => (/* reexport */ RoleAssignments),
  "RoleDefinition": () => (/* reexport */ RoleDefinition),
  "RoleDefinitions": () => (/* reexport */ RoleDefinitions),
  "RoleType": () => (/* reexport */ RoleType),
  "SPBatch": () => (/* reexport */ SPBatch),
  "SPHttpClient": () => (/* reexport */ SPHttpClient),
  "SPRest": () => (/* reexport */ SPRest),
  "SPSharedObjectType": () => (/* reexport */ SPSharedObjectType),
  "Search": () => (/* reexport */ Search),
  "SearchBuiltInSourceId": () => (/* reexport */ SearchBuiltInSourceId),
  "SearchQueryBuilder": () => (/* reexport */ SearchQueryBuilder),
  "SearchResults": () => (/* reexport */ SearchResults),
  "SharePointQueryable": () => (/* reexport */ SharePointQueryable),
  "SharePointQueryableCollection": () => (/* reexport */ SharePointQueryableCollection),
  "SharePointQueryableInstance": () => (/* reexport */ SharePointQueryableInstance),
  "SharingDomainRestrictionMode": () => (/* reexport */ SharingDomainRestrictionMode),
  "SharingLinkKind": () => (/* reexport */ SharingLinkKind),
  "SharingOperationStatusCode": () => (/* reexport */ SharingOperationStatusCode),
  "SharingRole": () => (/* reexport */ SharingRole),
  "Site": () => (/* reexport */ Site),
  "SiteDesigns": () => (/* reexport */ SiteDesigns),
  "SiteGroup": () => (/* reexport */ SiteGroup),
  "SiteGroups": () => (/* reexport */ SiteGroups),
  "SiteScripts": () => (/* reexport */ SiteScripts),
  "SiteUser": () => (/* reexport */ SiteUser),
  "SiteUsers": () => (/* reexport */ SiteUsers),
  "Social": () => (/* reexport */ Social),
  "SocialActorType": () => (/* reexport */ SocialActorType),
  "SocialActorTypes": () => (/* reexport */ SocialActorTypes),
  "SocialFollowResult": () => (/* reexport */ SocialFollowResult),
  "SocialStatusCode": () => (/* reexport */ SocialStatusCode),
  "SortDirection": () => (/* reexport */ SortDirection),
  "Subscription": () => (/* reexport */ Subscription),
  "Subscriptions": () => (/* reexport */ Subscriptions),
  "Suggest": () => (/* reexport */ Suggest),
  "TemplateFileType": () => (/* reexport */ TemplateFileType),
  "Term": () => (/* reexport */ Term),
  "TermGroup": () => (/* reexport */ TermGroup),
  "TermGroups": () => (/* reexport */ TermGroups),
  "TermSet": () => (/* reexport */ TermSet),
  "TermSets": () => (/* reexport */ TermSets),
  "TermStore": () => (/* reexport */ TermStore),
  "Terms": () => (/* reexport */ Terms),
  "TimeZone": () => (/* reexport */ TimeZone),
  "TimeZones": () => (/* reexport */ TimeZones),
  "UrlFieldFormatType": () => (/* reexport */ UrlFieldFormatType),
  "UrlZone": () => (/* reexport */ UrlZone),
  "UserCustomAction": () => (/* reexport */ UserCustomAction),
  "UserCustomActionRegistrationType": () => (/* reexport */ UserCustomActionRegistrationType),
  "UserCustomActionScope": () => (/* reexport */ UserCustomActionScope),
  "UserCustomActions": () => (/* reexport */ UserCustomActions),
  "Utilities": () => (/* reexport */ Utilities),
  "Version": () => (/* reexport */ Version),
  "Versions": () => (/* reexport */ Versions),
  "View": () => (/* reexport */ View),
  "ViewFields": () => (/* reexport */ ViewFields),
  "ViewScope": () => (/* reexport */ ViewScope),
  "Views": () => (/* reexport */ Views),
  "Web": () => (/* reexport */ Web),
  "WebPartDefinition": () => (/* reexport */ WebPartDefinition),
  "WebPartDefinitions": () => (/* reexport */ WebPartDefinitions),
  "WebPartsPersonalizationScope": () => (/* reexport */ WebPartsPersonalizationScope),
  "Webs": () => (/* reexport */ Webs),
  "containsInvalidFileFolderChars": () => (/* reexport */ containsInvalidFileFolderChars),
  "defaultPath": () => (/* reexport */ defaultPath),
  "escapeQueryStrValue": () => (/* reexport */ escapeQueryStrValue),
  "extractWebUrl": () => (/* reexport */ extractWebUrl),
  "objectToSPKeyValueCollection": () => (/* reexport */ objectToSPKeyValueCollection),
  "odataUrlFrom": () => (/* reexport */ odataUrlFrom),
  "registerCustomRequestClientFactory": () => (/* reexport */ registerCustomRequestClientFactory),
  "sp": () => (/* reexport */ all_sp),
  "spDelete": () => (/* reexport */ spDelete),
  "spGet": () => (/* reexport */ spGet),
  "spInvokableFactory": () => (/* reexport */ spInvokableFactory),
  "spODataEntity": () => (/* reexport */ spODataEntity),
  "spODataEntityArray": () => (/* reexport */ spODataEntityArray),
  "spPatch": () => (/* reexport */ spPatch),
  "spPost": () => (/* reexport */ spPost),
  "spPostDelete": () => (/* reexport */ spPostDelete),
  "spPostDeleteETag": () => (/* reexport */ spPostDeleteETag),
  "stripInvalidFileFolderChars": () => (/* reexport */ stripInvalidFileFolderChars),
  "toAbsoluteUrl": () => (/* reexport */ toAbsoluteUrl)
});

;// CONCATENATED MODULE: ./node_modules/@pnp/sp/node_modules/tslib/tslib.es6.js
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
function util_getGUID() {
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

var tslib_es6_extendStatics = function(d, b) {
    tslib_es6_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return tslib_es6_extendStatics(d, b);
};

function tslib_es6_extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    tslib_es6_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_es6_assign = function() {
    tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_es6_assign.apply(this, arguments);
}

function tslib_es6_rest(s, e) {
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

function tslib_es6_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function tslib_es6_param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function tslib_es6_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function tslib_es6_generator(thisArg, body) {
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

var tslib_es6_createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function tslib_es6_exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) tslib_es6_createBinding(o, m, p);
}

function tslib_es6_values(o) {
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

function tslib_es6_read(o, n) {
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
function tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(tslib_es6_read(arguments[i]));
    return ar;
}

/** @deprecated */
function tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function tslib_es6_spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function tslib_es6_await(v) {
    return this instanceof tslib_es6_await ? (this.v = v, this) : new tslib_es6_await(v);
}

function tslib_es6_asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof tslib_es6_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function tslib_es6_asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: tslib_es6_await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function tslib_es6_asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof tslib_es6_values === "function" ? tslib_es6_values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function tslib_es6_makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var tslib_es6_setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function tslib_es6_importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) tslib_es6_createBinding(result, mod, k);
    tslib_es6_setModuleDefault(result, mod);
    return result;
}

function tslib_es6_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function tslib_es6_classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function tslib_es6_classPrivateFieldSet(receiver, state, value, kind, f) {
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
            for (var _b = tslib_es6_values(this._v), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib_es6_read(_c.value, 2), key = _d[0], value = _d[1];
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
    tslib_es6_extends(BearerTokenFetchClient, _super);
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
    tslib_es6_extends(LambdaFetchClient, _super);
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
        return tslib_es6_awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_es6_generator(this, function (_b) {
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
    tslib_es6_extends(SPFxAdalClient, _super);
    /**
     *
     * @param context provide the appropriate SPFx Context object
     */
    function SPFxAdalClient(context) {
        var _this = _super.call(this, function (params) { return tslib_es6_awaiter(_this, void 0, void 0, function () {
            var provider;
            return tslib_es6_generator(this, function (_a) {
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
        return tslib_es6_awaiter(this, void 0, void 0, function () {
            var provider;
            return tslib_es6_generator(this, function (_a) {
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
        return tslib_es6_awaiter(this, void 0, void 0, function () {
            var o;
            return tslib_es6_generator(this, function (_a) {
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
        return tslib_es6_awaiter(this, void 0, void 0, function () {
            var i, key;
            return tslib_es6_generator(this, function (_a) {
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
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/splibconfig.js

var emptyGuid = "00000000-0000-0000-0000-000000000000";
onRuntimeCreate(function (runtime) {
    var existing = runtime.get("sp");
    var spPart = Object.assign({}, {
        fetchClientFactory: function () { return new FetchClient(); },
    }, existing);
    runtime.assign({ sp: spPart });
});
function splibconfig_setup(config, runtime) {
    if (runtime === void 0) { runtime = DefaultRuntime; }
    runtime.assign(config);
}
//# sourceMappingURL=splibconfig.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/rest.js



/**
 * Root of the SharePoint REST module
 */
var SPRest = /** @class */ (function () {
    /**
     * Creates a new instance of the SPRest class
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    function SPRest(_options, _baseUrl, _runtime) {
        if (_options === void 0) { _options = {}; }
        if (_baseUrl === void 0) { _baseUrl = ""; }
        if (_runtime === void 0) { _runtime = DefaultRuntime; }
        this._options = _options;
        this._baseUrl = _baseUrl;
        this._runtime = _runtime;
    }
    /**
     * Configures instance with additional options and baseUrl.
     * Provided configuration used by other objects in a chain
     *
     * @param options Additional options
     * @param baseUrl A string that should form the base part of the url
     */
    SPRest.prototype.configure = function (options, baseUrl) {
        if (baseUrl === void 0) { baseUrl = ""; }
        return new SPRest(options, baseUrl);
    };
    /**
     * Global SharePoint configuration options
     *
     * @param config The SharePoint configuration to apply
     */
    SPRest.prototype.setup = function (config) {
        if (config.pageContext) {
            splibconfig_setup({
                spfxContext: config,
            }, this._runtime);
        }
        else {
            splibconfig_setup(config, this._runtime);
        }
    };
    SPRest.prototype.createIsolated = function (init) {
        return __awaiter(this, void 0, void 0, function () {
            var baseUrl, cloneGlobal, options, config, runtime;
            return __generator(this, function (_a) {
                // merge our defaults
                init = Object.assign({
                    baseUrl: "",
                    cloneGlobal: true,
                    config: {},
                    options: {},
                }, init || {});
                baseUrl = init.baseUrl, cloneGlobal = init.cloneGlobal, options = init.options, config = init.config;
                runtime = cloneGlobal ? new Runtime(DefaultRuntime.export()) : new Runtime();
                runtime.assign(config);
                return [2 /*return*/, new SPRest(options, baseUrl, runtime)];
            });
        });
    };
    SPRest.prototype.childConfigHook = function (callback) {
        return callback({ options: this._options, baseUrl: this._baseUrl, runtime: this._runtime });
    };
    return SPRest;
}());

var sp = new SPRest();
//# sourceMappingURL=rest.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/batch.js

var Batch = /** @class */ (function () {
    function Batch(_batchId) {
        if (_batchId === void 0) { _batchId = util_getGUID(); }
        this._batchId = _batchId;
        this._reqs = [];
        this._deps = [];
        this._rDeps = [];
        this._index = -1;
    }
    Object.defineProperty(Batch.prototype, "batchId", {
        get: function () {
            return this._batchId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Batch.prototype, "requests", {
        /**
         * The requests contained in this batch
         */
        get: function () {
            // we sort these each time this is accessed
            return this._reqs.sort(function (info1, info2) { return info1.index - info2.index; });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Not meant for use directly
     *
     * @param batchee The IQueryable for this batch to track in order
     */
    Batch.prototype.track = function (batchee) {
        batchee.data.batch = this;
        // we need to track the order requests are added to the batch to ensure we always
        // operate on them in order
        if (typeof batchee.data.batchIndex === "undefined" || batchee.data.batchIndex < 0) {
            batchee.data.batchIndex = ++this._index;
        }
    };
    /**
     * Adds the given request context to the batch for execution
     *
     * @param context Details of the request to batch
     */
    Batch.prototype.add = function (context) {
        var info = {
            id: context.requestId,
            index: context.batchIndex,
            method: context.method.toUpperCase(),
            options: context.options,
            parser: context.parser,
            reject: null,
            resolve: null,
            url: context.url,
        };
        // we create a new promise that will be resolved within the batch
        var p = new Promise(function (resolve, reject) {
            info.resolve = resolve;
            info.reject = reject;
        });
        this._reqs.push(info);
        return p;
    };
    /**
     * Adds a dependency insuring that some set of actions will occur before a batch is processed.
     * MUST be cleared using the returned resolve delegate to allow batches to run
     */
    Batch.prototype.addDependency = function () {
        var resolver = function () { return void (0); };
        this._deps.push(new Promise(function (resolve) {
            resolver = resolve;
        }));
        return resolver;
    };
    /**
     * The batch's execute method will not resolve util any promises added here resolve
     *
     * @param p The dependent promise
     */
    Batch.prototype.addResolveBatchDependency = function (p) {
        this._rDeps.push(p);
    };
    /**
     * Execute the current batch and resolve the associated promises
     *
     * @returns A promise which will be resolved once all of the batch's child promises have resolved
     */
    Batch.prototype.execute = function () {
        var _this = this;
        // we need to check the dependencies twice due to how different engines handle things.
        // We can get a second set of promises added during the first set resolving
        return Promise.all(this._deps)
            .then(function () { return Promise.all(_this._deps); })
            .then(function () { return _this.executeImpl(); })
            .then(function () { return Promise.all(_this._rDeps); })
            .then(function () { return void (0); });
    };
    return Batch;
}());

//# sourceMappingURL=batch.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/caching.js

var storage = new PnPClientStorage();
var CachingOptions = /** @class */ (function () {
    function CachingOptions(key, storeName, expiration) {
        this.key = key;
        this.storeName = storeName;
        this.expiration = expiration;
    }
    Object.defineProperty(CachingOptions.prototype, "store", {
        get: function () {
            if (this.storeName === "local") {
                return storage.local;
            }
            else {
                return storage.session;
            }
        },
        enumerable: false,
        configurable: true
    });
    return CachingOptions;
}());

var CachingParserWrapper = /** @class */ (function () {
    function CachingParserWrapper(parser, cacheOptions) {
        this.parser = parser;
        this.cacheOptions = cacheOptions;
    }
    CachingParserWrapper.prototype.parse = function (response) {
        var _this = this;
        return this.parser.parse(response).then(function (r) { return _this.cacheData(r); });
    };
    CachingParserWrapper.prototype.cacheData = function (data) {
        if (this.cacheOptions.store !== null) {
            this.cacheOptions.store.put(this.cacheOptions.key, data, this.cacheOptions.expiration);
        }
        return data;
    };
    return CachingParserWrapper;
}());

//# sourceMappingURL=caching.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/add-prop.js
/**
 * Adds a property to a target instance
 *
 * @param target The object to whose prototype we will add a property
 * @param name Property name
 * @param factory Factory method used to produce the property value
 * @param path Any additional path required to produce the value
 */
function addProp(target, name, factory, path) {
    Reflect.defineProperty(target.prototype, name, {
        configurable: true,
        enumerable: true,
        get: function () {
            return factory(this, path);
        },
    });
}
//# sourceMappingURL=add-prop.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/node_modules/tslib/tslib.es6.js
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

var tslib_tslib_es6_extendStatics = function(d, b) {
    tslib_tslib_es6_extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return tslib_tslib_es6_extendStatics(d, b);
};

function tslib_tslib_es6_extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    tslib_tslib_es6_extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var tslib_tslib_es6_assign = function() {
    tslib_tslib_es6_assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return tslib_tslib_es6_assign.apply(this, arguments);
}

function tslib_tslib_es6_rest(s, e) {
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

function tslib_tslib_es6_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function tslib_tslib_es6_param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function tslib_tslib_es6_metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function tslib_tslib_es6_awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function tslib_tslib_es6_generator(thisArg, body) {
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

var tslib_tslib_es6_createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function tslib_tslib_es6_exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) tslib_tslib_es6_createBinding(o, m, p);
}

function tslib_tslib_es6_values(o) {
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

function tslib_tslib_es6_read(o, n) {
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
function tslib_tslib_es6_spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(tslib_tslib_es6_read(arguments[i]));
    return ar;
}

/** @deprecated */
function tslib_tslib_es6_spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function tslib_tslib_es6_spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function tslib_tslib_es6_await(v) {
    return this instanceof tslib_tslib_es6_await ? (this.v = v, this) : new tslib_tslib_es6_await(v);
}

function tslib_tslib_es6_asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof tslib_tslib_es6_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function tslib_tslib_es6_asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: tslib_tslib_es6_await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function tslib_tslib_es6_asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof tslib_tslib_es6_values === "function" ? tslib_tslib_es6_values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function tslib_tslib_es6_makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var tslib_tslib_es6_setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function tslib_tslib_es6_importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) tslib_tslib_es6_createBinding(result, mod, k);
    tslib_tslib_es6_setModuleDefault(result, mod);
    return result;
}

function tslib_tslib_es6_importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function tslib_tslib_es6_classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function tslib_tslib_es6_classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

;// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-extensions.js


var _enableExtensions = false;
var globalExtensions = [];
var factoryExtensions = new Map();
var ObjExtensionsSym = Symbol.for("43f7a601");
/**
 * Creates global extensions across all invokable objects
 *
 * @param e The global extensions to apply
 */
var extendGlobal = function (e) {
    _enableExtensions = true;
    extendCol(globalExtensions, e);
};
/**
 * Applies the supplied extensions to a single instance
 *
 * @param target Object to which extensions are applied
 * @param extensions Extensions to apply
 */
// eslint-disable-next-line @typescript-eslint/ban-types
var extendObj = function (target, extensions) {
    _enableExtensions = true;
    if (!Reflect.has(target, ObjExtensionsSym)) {
        Reflect.set(target, ObjExtensionsSym, []);
    }
    extendCol(Reflect.get(target, ObjExtensionsSym), extensions);
    return target;
};
/**
 * Allows applying extensions to all instances created from the supplied factory
 *
 * @param factory The Invokable Factory method to extend
 * @param extensions Extensions to apply
 */
var extendFactory = function (factory, extensions) {
    _enableExtensions = true;
    // factoryExtensions
    var proto = Reflect.getPrototypeOf(factory);
    if (!Reflect.has(proto, ObjExtensionsSym)) {
        Reflect.defineProperty(proto, ObjExtensionsSym, {
            value: getGUID(),
        });
    }
    var key = proto[ObjExtensionsSym];
    if (!factoryExtensions.has(key)) {
        factoryExtensions.set(key, []);
    }
    extendCol(factoryExtensions.get(key), extensions);
};
function extendCol(a, e) {
    if (Array.isArray(e)) {
        a.push.apply(a, tslib_tslib_es6_spreadArray([], tslib_tslib_es6_read(e)));
    }
    else {
        a.push(e);
    }
}
/**
 * Clears all global extensions
 */
var clearGlobalExtensions = function () {
    globalExtensions.length = 0;
};
/**
 * Disables all extensions
 */
var disableExtensions = function () {
    _enableExtensions = false;
};
/**
 * Enables all extensions
 */
var enableExtensions = function () {
    _enableExtensions = true;
};
/**
 * Applies a set of extension previously applied to a factory using extendFactory to an object created from that factory
 *
 * @param factory
 * @param args
 */
// eslint-disable-next-line @typescript-eslint/ban-types
var applyFactoryExtensions = function (factory, args) {
    var o = factory(args);
    var proto = Reflect.getPrototypeOf(factory);
    if (Reflect.has(proto, ObjExtensionsSym)) {
        var extensions = factoryExtensions.get(Reflect.get(proto, ObjExtensionsSym));
        o = extendObj(o, extensions);
    }
    return o;
};
function extensionOrDefault(op, or, target) {
    var rest = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        rest[_i - 3] = arguments[_i];
    }
    if (_enableExtensions) {
        var extensions = [];
        // we need to first invoke extensions tied to only this object
        if (Reflect.has(target, ObjExtensionsSym)) {
            extensions.push.apply(extensions, tslib_tslib_es6_spreadArray([], tslib_tslib_es6_read(Reflect.get(target, ObjExtensionsSym))));
        }
        // second we need to process any global extensions
        extensions.push.apply(extensions, tslib_tslib_es6_spreadArray([], tslib_tslib_es6_read(globalExtensions)));
        for (var i = 0; i < extensions.length; i++) {
            var extension = extensions[i];
            var result = undefined;
            if (isFunc(extension)) {
                // this extension is a function which we call
                result = extension.apply(void 0, tslib_tslib_es6_spreadArray([op, target], tslib_tslib_es6_read(rest)));
            }
            else if (op === "get" && Reflect.has(extension, rest[0])) {
                // this extension is a named extension meaning we are overriding a specific method/property
                result = Reflect.get(extension, rest[0], target);
            }
            else if (Reflect.has(extension, op)) {
                // this extension is a ProxyHandler that has a handler defined for {op} so we pass control and see if we get a result
                result = Reflect.get(extension, op).apply(void 0, tslib_tslib_es6_spreadArray([target], tslib_tslib_es6_read(rest)));
            }
            if (typeof result !== "undefined") {
                // if a extension returned a result, we return that
                // this means that this extension overrides any other extensions and no more are executed
                // first extension in the list to return "wins"
                return result;
            }
        }
    }
    return or.apply(void 0, tslib_tslib_es6_spreadArray([target], tslib_tslib_es6_read(rest)));
}
//# sourceMappingURL=invokable-extensions.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/invokable-binder.js



var invokableBinder = function (invoker) { return function (constructor) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var factory = function (as) {
            var r = Object.assign(function () {
                var ags = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    ags[_i] = arguments[_i];
                }
                return invoker.call.apply(invoker, tslib_tslib_es6_spreadArray([r], tslib_tslib_es6_read(ags)));
            }, new (constructor.bind.apply(constructor, tslib_tslib_es6_spreadArray([void 0], tslib_tslib_es6_read(as))))());
            Reflect.setPrototypeOf(r, constructor.prototype);
            return r;
        };
        // ie11 setting is always global
        if (DefaultRuntime.get("ie11") || false) {
            return factory(args);
        }
        else {
            return new Proxy(applyFactoryExtensions(factory, args), {
                apply: function (target, _thisArg, argArray) {
                    return extensionOrDefault("apply", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.apply(a[0], a[1], a[2]);
                    }, target, _thisArg, argArray);
                },
                get: function (target, p, receiver) {
                    return extensionOrDefault("get", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.get(a[0], a[1], a[2]);
                    }, target, p, receiver);
                },
                has: function (target, p) {
                    return extensionOrDefault("has", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.has(a[0], a[1]);
                    }, target, p);
                },
                set: function (target, p, value, receiver) {
                    return extensionOrDefault("set", function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return Reflect.set(a[0], a[1], a[2], a[3]);
                    }, target, p, value, receiver);
                },
            });
        }
    };
}; };
var invokableFactory = invokableBinder(function (options) {
    return this.defaultAction(options);
});
//# sourceMappingURL=invokable-binder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/parsers.js


var ODataParser = /** @class */ (function () {
    function ODataParser() {
    }
    ODataParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                _this.parseImpl(r, resolve, reject);
            }
        });
    };
    ODataParser.prototype.parseImpl = function (r, resolve, reject) {
        var _this = this;
        if ((r.headers.has("Content-Length") && parseFloat(r.headers.get("Content-Length")) === 0) || r.status === 204) {
            resolve({});
        }
        else {
            // patch to handle cases of 200 response with no or whitespace only bodies (#487 & #545)
            r.text()
                .then(function (txt) { return txt.replace(/\s/ig, "").length > 0 ? JSON.parse(txt) : {}; })
                .then(function (json) { return resolve(_this.parseODataJSON(json)); })
                .catch(function (e) { return reject(e); });
        }
    };
    /**
     * Handles a response with ok === false by parsing the body and creating a ProcessHttpClientResponseException
     * which is passed to the reject delegate. This method returns true if there is no error, otherwise false
     *
     * @param r Current response object
     * @param reject reject delegate for the surrounding promise
     */
    ODataParser.prototype.handleError = function (r, reject) {
        if (!r.ok) {
            HttpRequestError.init(r).then(reject);
        }
        return r.ok;
    };
    /**
     * Normalizes the json response by removing the various nested levels
     *
     * @param json json object to parse
     */
    ODataParser.prototype.parseODataJSON = function (json) {
        var result = json;
        if (hOP(json, "d")) {
            if (hOP(json.d, "results")) {
                result = json.d.results;
            }
            else {
                result = json.d;
            }
        }
        else if (hOP(json, "value")) {
            result = json.value;
        }
        return result;
    };
    return ODataParser;
}());

var TextParser = /** @class */ (function (_super) {
    tslib_tslib_es6_extends(TextParser, _super);
    function TextParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextParser.prototype.parseImpl = function (r, resolve) {
        r.text().then(resolve);
    };
    return TextParser;
}(ODataParser));

var BlobParser = /** @class */ (function (_super) {
    tslib_tslib_es6_extends(BlobParser, _super);
    function BlobParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlobParser.prototype.parseImpl = function (r, resolve) {
        r.blob().then(resolve);
    };
    return BlobParser;
}(ODataParser));

var JSONParser = /** @class */ (function (_super) {
    tslib_tslib_es6_extends(JSONParser, _super);
    function JSONParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSONParser.prototype.parseImpl = function (r, resolve) {
        r.json().then(resolve);
    };
    return JSONParser;
}(ODataParser));

var BufferParser = /** @class */ (function (_super) {
    tslib_tslib_es6_extends(BufferParser, _super);
    function BufferParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BufferParser.prototype.parseImpl = function (r, resolve) {
        if (isFunc(r.arrayBuffer)) {
            r.arrayBuffer().then(resolve);
        }
        else {
            r.buffer().then(resolve);
        }
    };
    return BufferParser;
}(ODataParser));

var LambdaParser = /** @class */ (function (_super) {
    tslib_tslib_es6_extends(LambdaParser, _super);
    function LambdaParser(parser) {
        var _this = _super.call(this) || this;
        _this.parser = parser;
        return _this;
    }
    LambdaParser.prototype.parseImpl = function (r, resolve) {
        this.parser(r).then(resolve);
    };
    return LambdaParser;
}(ODataParser));

var HttpRequestError = /** @class */ (function (_super) {
    tslib_tslib_es6_extends(HttpRequestError, _super);
    function HttpRequestError(message, response, status, statusText) {
        if (status === void 0) { status = response.status; }
        if (statusText === void 0) { statusText = response.statusText; }
        var _this = _super.call(this, message) || this;
        _this.response = response;
        _this.status = status;
        _this.statusText = statusText;
        _this.isHttpRequestError = true;
        return _this;
    }
    HttpRequestError.init = function (r) {
        return tslib_tslib_es6_awaiter(this, void 0, void 0, function () {
            var t;
            return tslib_tslib_es6_generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, r.clone().text()];
                    case 1:
                        t = _a.sent();
                        return [2 /*return*/, new HttpRequestError("Error making HttpClient request in queryable [" + r.status + "] " + r.statusText + " ::> " + t, r.clone())];
                }
            });
        });
    };
    return HttpRequestError;
}(Error));

//# sourceMappingURL=parsers.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/queryable.js



function cloneQueryableData(source) {
    var body;
    // this handles bodies that cannot be JSON encoded (Blob, etc)
    // Note however, even bodies that can be serialized will not be cloned.
    if (source.options && source.options.body) {
        body = source.options.body;
        source.options.body = "-";
    }
    var s = JSON.stringify(source, function (key, value) {
        switch (key) {
            case "query":
                return JSON.stringify(tslib_tslib_es6_spreadArray([], tslib_tslib_es6_read(value)));
            case "batch":
            case "batchDependency":
            case "cachingOptions":
            case "clientFactory":
            case "parser":
                return "-";
            default:
                return value;
        }
    }, 0);
    var parsed = JSON.parse(s, function (key, value) {
        switch (key) {
            case "query":
                return new Map(JSON.parse(value));
            case "batch":
            case "batchDependency":
            case "cachingOptions":
            case "clientFactory":
            case "parser":
                return source[key];
            default:
                return value;
        }
    });
    if (body) {
        parsed.options.body = body;
        source.options.body = body;
    }
    return parsed;
}
var Queryable = /** @class */ (function () {
    function Queryable(dataSeed) {
        if (dataSeed === void 0) { dataSeed = {}; }
        this._data = Object.assign({}, {
            cloneParentWasCaching: false,
            options: {},
            parentUrl: "",
            parser: new ODataParser(),
            query: new Map(),
            url: "",
            useCaching: false,
        }, cloneQueryableData(dataSeed));
        this._runtime = null;
    }
    Object.defineProperty(Queryable.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = Object.assign({}, this.data, cloneQueryableData(value));
        },
        enumerable: false,
        configurable: true
    });
    Queryable.prototype.getRuntime = function () {
        if (this._runtime === null) {
            return DefaultRuntime;
        }
        return this._runtime;
    };
    Queryable.prototype.setRuntime = function () {
        // need to wait for ts update in spfx: [runtime: Runtime] | [cloneGlobal: boolean, additionalConfig?: ITypedHash<any>]
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args[0] instanceof Runtime) {
            this._runtime = args[0];
        }
        else {
            this._runtime = args[0] ? new Runtime(DefaultRuntime.export()) : new Runtime();
            if (args.length > 1 && objectDefinedNotNull(args[1])) {
                this._runtime.assign(args[1]);
            }
        }
        return this;
    };
    /**
  * Gets the current url
  *
  */
    Queryable.prototype.toUrl = function () {
        return this.data.url;
    };
    /**
   * Directly concatenates the supplied string to the current url, not normalizing "/" chars
   *
   * @param pathPart The string to concatenate to the url
   */
    Queryable.prototype.concat = function (pathPart) {
        this.data.url += pathPart;
        return this;
    };
    Object.defineProperty(Queryable.prototype, "query", {
        /**
       * Provides access to the query builder for this url
       *
       */
        get: function () {
            return this.data.query;
        },
        enumerable: false,
        configurable: true
    });
    /**
   * Sets custom options for current object and all derived objects accessible via chaining
   *
   * @param options custom options
   */
    Queryable.prototype.configure = function (options) {
        mergeOptions(this.data.options, options);
        return this;
    };
    /**
   * Configures this instance from the configure options of the supplied instance
   *
   * @param o Instance from which options should be taken
   */
    Queryable.prototype.configureFrom = function (o) {
        mergeOptions(this.data.options, o.data.options);
        var sourceRuntime = o.getRuntime();
        if (!sourceRuntime.get("__isDefault__")) {
            this.setRuntime(sourceRuntime);
        }
        return this;
    };
    /**
   * Enables caching for this request
   *
   * @param options Defines the options used when caching this request
   */
    Queryable.prototype.usingCaching = function (options) {
        var runtime = this.getRuntime();
        if (!runtime.get("globalCacheDisable")) {
            this.data.useCaching = true;
            // handle getting just the key
            if (typeof options === "string") {
                if (stringIsNullOrEmpty(options)) {
                    throw Error("Cache key cannot be empty.");
                }
                options = { key: options };
            }
            // this uses our local options if they are defined as defaults
            var defaultOpts = {
                expiration: dateAdd(new Date(), "second", runtime.get("defaultCachingTimeoutSeconds")),
                storeName: runtime.get("defaultCachingStore"),
            };
            this.data.cachingOptions = util_assign(defaultOpts, options);
        }
        return this;
    };
    Queryable.prototype.usingParser = function (parser) {
        this.data.parser = parser;
        return this;
    };
    /**
   * Allows you to set a request specific processing pipeline
   *
   * @param pipeline The set of methods, in order, to execute a given request
   */
    Queryable.prototype.withPipeline = function (pipeline) {
        this.data.pipes = pipeline.slice(0);
        return this;
    };
    /**
   * Appends the given string and normalizes "/" chars
   *
   * @param pathPart The string to append
   */
    Queryable.prototype.append = function (pathPart) {
        this.data.url = combine(this.data.url, pathPart);
    };
    /**
   * Adds this query to the supplied batch
   *
   * @example
   * ```
   *
   * let b = pnp.sp.createBatch();
   * pnp.sp.web.inBatch(b).get().then(...);
   * b.execute().then(...)
   * ```
   */
    Queryable.prototype.inBatch = function (batch) {
        if (this.hasBatch) {
            throw Error("This query is already part of a batch.");
        }
        if (objectDefinedNotNull(batch)) {
            batch.track(this);
        }
        return this;
    };
    /**
   * Blocks a batch call from occuring, MUST be cleared by calling the returned function
  */
    Queryable.prototype.addBatchDependency = function () {
        if (objectDefinedNotNull(this.data.batch)) {
            return this.data.batch.addDependency();
        }
        return function () { return null; };
    };
    Object.defineProperty(Queryable.prototype, "hasBatch", {
        /**
       * Indicates if the current query has a batch associated
       *
       */
        get: function () {
            return objectDefinedNotNull(this.data.batch);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "batch", {
        /**
       * The batch currently associated with this query or null
       *
       */
        get: function () {
            return this.hasBatch ? this.data.batch : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Queryable.prototype, "parentUrl", {
        /**
       * Gets the parent url used when creating this instance
       *
       */
        get: function () {
            return this.data.parentUrl;
        },
        enumerable: false,
        configurable: true
    });
    /**
   * Clones this instance's data to target
   *
   * @param target Instance to which data is written
   * @param settings [Optional] Settings controlling how clone is applied
   */
    Queryable.prototype.cloneTo = function (target, settings) {
        if (settings === void 0) { settings = {}; }
        // default values for settings
        settings = util_assign({
            includeBatch: true,
            includeQuery: false,
        }, settings);
        target.data = Object.assign({}, cloneQueryableData(this.data), {
            batch: null,
            cloneParentCacheOptions: null,
            cloneParentWasCaching: false,
        }, cloneQueryableData(target.data));
        target.configureFrom(this);
        if (settings.includeBatch) {
            target.inBatch(this.batch);
        }
        if (settings.includeQuery && this.query.size > 0) {
            this.query.forEach(function (v, k) { return target.query.set(k, v); });
        }
        if (this.data.useCaching) {
            target.data.cloneParentWasCaching = true;
            target.data.cloneParentCacheOptions = this.data.cachingOptions;
        }
        return target;
    };
    return Queryable;
}());

//# sourceMappingURL=queryable.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/logging/logger.js
/**
 * Class used to subscribe ILogListener and log messages throughout an application
 *
 */
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Object.defineProperty(Logger, "activeLogLevel", {
        /**
       * Gets or sets the active log level to apply for log filtering
       */
        get: function () {
            return Logger.instance.activeLogLevel;
        },
        set: function (value) {
            Logger.instance.activeLogLevel = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger, "instance", {
        get: function () {
            if (Logger._instance === undefined || Logger._instance === null) {
                Logger._instance = new LoggerImpl();
            }
            return Logger._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
   * Adds ILogListener instances to the set of subscribed listeners
   *
   * @param listeners One or more listeners to subscribe to this log
   */
    Logger.subscribe = function () {
        var listeners = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            listeners[_i] = arguments[_i];
        }
        listeners.forEach(function (listener) { return Logger.instance.subscribe(listener); });
    };
    /**
   * Clears the subscribers collection, returning the collection before modification
   */
    Logger.clearSubscribers = function () {
        return Logger.instance.clearSubscribers();
    };
    Object.defineProperty(Logger, "count", {
        /**
       * Gets the current subscriber count
       */
        get: function () {
            return Logger.instance.count;
        },
        enumerable: false,
        configurable: true
    });
    /**
   * Writes the supplied string to the subscribed listeners
   *
   * @param message The message to write
   * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
   */
    Logger.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        Logger.instance.log({ level: level, message: message });
    };
    /**
   * Writes the supplied string to the subscribed listeners
   *
   * @param json The json object to stringify and write
   * @param level [Optional] if supplied will be used as the level of the entry (Default: LogLevel.Info)
   */
    Logger.writeJSON = function (json, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.write(JSON.stringify(json), level);
    };
    /**
   * Logs the supplied entry to the subscribed listeners
   *
   * @param entry The message to log
   */
    Logger.log = function (entry) {
        Logger.instance.log(entry);
    };
    /**
   * Logs an error object to the subscribed listeners
   *
   * @param err The error object
   */
    Logger.error = function (err) {
        Logger.instance.log({ data: err, level: 3 /* Error */, message: err.message });
    };
    return Logger;
}());

var LoggerImpl = /** @class */ (function () {
    function LoggerImpl(activeLogLevel, subscribers) {
        if (activeLogLevel === void 0) { activeLogLevel = 2 /* Warning */; }
        if (subscribers === void 0) { subscribers = []; }
        this.activeLogLevel = activeLogLevel;
        this.subscribers = subscribers;
    }
    LoggerImpl.prototype.subscribe = function (listener) {
        this.subscribers.push(listener);
    };
    LoggerImpl.prototype.clearSubscribers = function () {
        var s = this.subscribers.slice(0);
        this.subscribers.length = 0;
        return s;
    };
    Object.defineProperty(LoggerImpl.prototype, "count", {
        get: function () {
            return this.subscribers.length;
        },
        enumerable: false,
        configurable: true
    });
    LoggerImpl.prototype.write = function (message, level) {
        if (level === void 0) { level = 1 /* Info */; }
        this.log({ level: level, message: message });
    };
    LoggerImpl.prototype.log = function (entry) {
        if (entry !== undefined && this.activeLogLevel <= entry.level) {
            this.subscribers.map(function (subscriber) { return subscriber.log(entry); });
        }
    };
    return LoggerImpl;
}());
/**
 * A set of logging levels
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
    LogLevel[LogLevel["Off"] = 99] = "Off";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=logger.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/logging/listeners.js
/**
 * Implementation of LogListener which logs to the console
 *
 */
var ConsoleListener = /** @class */ (function () {
    function ConsoleListener() {
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    ConsoleListener.prototype.log = function (entry) {
        var msg = this.format(entry);
        switch (entry.level) {
            case 0 /* Verbose */:
            case 1 /* Info */:
                console.log(msg);
                break;
            case 2 /* Warning */:
                console.warn(msg);
                break;
            case 3 /* Error */:
                console.error(msg);
                break;
        }
    };
    /**
     * Formats the message
     *
     * @param entry The information to format into a string
     */
    ConsoleListener.prototype.format = function (entry) {
        var msg = [];
        msg.push("Message: " + entry.message);
        if (entry.data !== undefined) {
            try {
                msg.push(" Data: " + JSON.stringify(entry.data));
            }
            catch (e) {
                msg.push(" Data: Error in stringify of supplied data " + e);
            }
        }
        return msg.join("");
    };
    return ConsoleListener;
}());

/**
 * Implementation of LogListener which logs to the supplied function
 *
 */
var FunctionListener = /** @class */ (function () {
    /**
     * Creates a new instance of the FunctionListener class
     *
     * @constructor
     * @param  method The method to which any logging data will be passed
     */
    function FunctionListener(method) {
        this.method = method;
    }
    /**
     * Any associated data that a given logging listener may choose to log or ignore
     *
     * @param entry The information to be logged
     */
    FunctionListener.prototype.log = function (entry) {
        this.method(entry);
    };
    return FunctionListener;
}());

//# sourceMappingURL=listeners.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/logging/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/pipeline.js




/**
 * Resolves the context's result value
 *
 * @param context The current context
 */
function returnResult(context) {
    Logger.log({
        data: Logger.activeLogLevel === 0 /* Verbose */ ? context.result : {},
        level: 1 /* Info */,
        message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Returning result from pipeline. Set logging to verbose to see data.",
    });
    return Promise.resolve(context.result);
}
/**
 * Sets the result on the context
 */
function setResult(context, value) {
    return new Promise(function (resolve) {
        context.result = value;
        context.hasResult = true;
        resolve(context);
    });
}
/**
 * Invokes the next method in the provided context's pipeline
 *
 * @param c The current request context
 */
function next(c) {
    return c.pipes.length > 0 ? c.pipes.shift()(c) : Promise.resolve(c);
}
/**
 * Executes the current request context's pipeline
 *
 * @param context Current context
 */
function pipe(context) {
    if (context.pipes.length < 1) {
        Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Request pipeline contains no methods!", 3 /* Error */);
        throw Error("Request pipeline contains no methods!");
    }
    var promise = next(context).then(function (ctx) { return returnResult(ctx); }).catch(function (e) {
        Logger.error(e);
        throw e;
    });
    if (context.isBatched) {
        // this will block the batch's execute method from returning until the child requests have been resolved
        context.batch.addResolveBatchDependency(promise);
    }
    return promise;
}
/**
 * decorator factory applied to methods in the pipeline to control behavior
 */
function requestPipelineMethod(alwaysRun) {
    if (alwaysRun === void 0) { alwaysRun = false; }
    return function (target, propertyKey, descriptor) {
        var method = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // if we have a result already in the pipeline, pass it along and don't call the tagged method
            if (!alwaysRun && args.length > 0 && hOP(args[0], "hasResult") && args[0].hasResult) {
                Logger.write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Skipping request pipeline method " + propertyKey + ", existing result in pipeline.", 0 /* Verbose */);
                return Promise.resolve(args[0]);
            }
            // apply the tagged method
            Logger.write("[" + args[0].requestId + "] (" + (new Date()).getTime() + ") Calling request pipeline method " + propertyKey + ".", 0 /* Verbose */);
            // then chain the next method in the context's pipeline - allows for dynamic pipeline
            return method.apply(target, args).then(function (ctx) { return next(ctx); });
        };
    };
}
/**
 * Contains the methods used within the request pipeline
 */
var PipelineMethods = /** @class */ (function () {
    function PipelineMethods() {
    }
    /**
     * Logs the start of the request
     */
    PipelineMethods.logStart = function (context) {
        return new Promise(function (resolve) {
            Logger.log({
                data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                level: 1 /* Info */,
                message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Beginning " + context.method + " request (" + context.url + ")",
            });
            resolve(context);
        });
    };
    /**
     * Handles caching of the request
     */
    PipelineMethods.caching = function (context) {
        return new Promise(function (resolve) {
            // handle caching, if applicable
            if (context.useCaching) {
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Caching is enabled for request, checking cache...", 1 /* Info */);
                var cacheOptions = new CachingOptions(context.url.toLowerCase());
                if (context.cachingOptions !== undefined) {
                    cacheOptions = util_assign(cacheOptions, context.cachingOptions);
                }
                // we may not have a valid store
                if (cacheOptions.store !== null) {
                    // check if we have the data in cache and if so resolve the promise and return
                    var data = cacheOptions.store.get(cacheOptions.key);
                    if (data !== null) {
                        Logger.log({
                            data: Logger.activeLogLevel === 1 /* Info */ ? {} : data,
                            level: 1 /* Info */,
                            message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Value returned from cache.",
                        });
                        // ensure we clear any held batch dependency we are resolving from the cache
                        if (isFunc(context.batchDependency)) {
                            context.batchDependency();
                        }
                        // handle the case where a parser needs to take special actions with a cached result
                        if (hOP(context.parser, "hydrate")) {
                            data = context.parser.hydrate(data);
                        }
                        return setResult(context, data).then(function (ctx) { return resolve(ctx); });
                    }
                }
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Value not found in cache.", 1 /* Info */);
                // if we don't then wrap the supplied parser in the caching parser wrapper
                // and send things on their way
                context.parser = new CachingParserWrapper(context.parser, cacheOptions);
            }
            return resolve(context);
        });
    };
    /**
     * Sends the request
     */
    PipelineMethods.send = function (context) {
        return new Promise(function (resolve, reject) {
            // send or batch the request
            if (context.isBatched) {
                var p = context.batch.add(context);
                // we release the dependency here to ensure the batch does not execute until the request is added to the batch
                if (isFunc(context.batchDependency)) {
                    context.batchDependency();
                }
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Batching request in batch " + context.batch.batchId + ".", 1 /* Info */);
                // we set the result as the promise which will be resolved by the batch's execution
                resolve(setResult(context, p));
            }
            else {
                Logger.write("[" + context.requestId + "] (" + (new Date()).getTime() + ") Sending request.", 1 /* Info */);
                // we are not part of a batch, so proceed as normal
                var client = context.clientFactory();
                var opts = util_assign(context.options || {}, { method: context.method });
                client.fetch(context.url, opts)
                    .then(function (response) { return context.parser.parse(response); })
                    .then(function (result) { return setResult(context, result); })
                    .then(function (ctx) { return resolve(ctx); })
                    .catch(function (e) { return reject(e); });
            }
        });
    };
    /**
     * Logs the end of the request
     */
    PipelineMethods.logEnd = function (context) {
        return new Promise(function (resolve) {
            if (context.isBatched) {
                Logger.log({
                    data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") " + context.method + " request will complete in batch " + context.batch.batchId + ".",
                });
            }
            else {
                Logger.log({
                    data: Logger.activeLogLevel === 1 /* Info */ ? {} : context,
                    level: 1 /* Info */,
                    message: "[" + context.requestId + "] (" + (new Date()).getTime() + ") Completing " + context.method + " request.",
                });
            }
            resolve(context);
        });
    };
    tslib_tslib_es6_decorate([
        requestPipelineMethod(true)
    ], PipelineMethods, "logStart", null);
    tslib_tslib_es6_decorate([
        requestPipelineMethod()
    ], PipelineMethods, "caching", null);
    tslib_tslib_es6_decorate([
        requestPipelineMethod()
    ], PipelineMethods, "send", null);
    tslib_tslib_es6_decorate([
        requestPipelineMethod(true)
    ], PipelineMethods, "logEnd", null);
    return PipelineMethods;
}());

function getDefaultPipeline() {
    return [
        PipelineMethods.logStart,
        PipelineMethods.caching,
        PipelineMethods.send,
        PipelineMethods.logEnd,
    ].slice(0);
}
//# sourceMappingURL=pipeline.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/pipeline-binder.js




// first we bind the pipeline we will use for all requests within this closure
function pipelineBinder(pipes) {
    // then we bind the client factory we'll use (typically done in an implementing library such as sp)
    return function (clientFactory) {
        // then we create a binder we can apply for each type of method (GET, POST, etc.)
        return function (method) {
            // finally we get a function back to which we can pass an IQueryableData instance and execute the request it defines
            return function (o) {
                // send the IQueryableData down the pipeline
                return pipe(Object.assign({}, {
                    batch: null,
                    batchDependency: null,
                    batchIndex: -1,
                    cachingOptions: null,
                    clientFactory: clientFactory,
                    cloneParentCacheOptions: null,
                    cloneParentWasCaching: false,
                    hasResult: false,
                    isBatched: objectDefinedNotNull(o.batch),
                    method: method,
                    options: null,
                    parentUrl: "",
                    parser: new ODataParser(),
                    pipes: pipes.slice(0),
                    query: new Map(),
                    requestId: util_getGUID(),
                    url: "",
                    useCaching: /^get$/i.test(o.method) && o.useCaching,
                }, cloneQueryableData(o)));
            };
        };
    };
}
var defaultPipelineBinder = pipelineBinder(getDefaultPipeline());
//# sourceMappingURL=pipeline-binder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/request-builders.js

function body(o, previous) {
    return Object.assign({ body: jsS(o) }, previous);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function headers(o, previous) {
    return Object.assign({ headers: o }, previous);
}
//# sourceMappingURL=request-builders.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/odata/index.js










//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/metadata.js
function metadata(type) {
    return {
        "__metadata": { "type": type },
    };
}
//# sourceMappingURL=metadata.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/extractweburl.js

function extractWebUrl(candidateUrl) {
    if (stringIsNullOrEmpty(candidateUrl)) {
        return "";
    }
    var index = candidateUrl.indexOf("_api/");
    if (index < 0) {
        index = candidateUrl.indexOf("_vti_bin/");
    }
    if (index > -1) {
        return candidateUrl.substr(0, index);
    }
    // if all else fails just give them what they gave us back
    return candidateUrl;
}
//# sourceMappingURL=extractweburl.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/telemetry.js



/**
 * Includes this method name in the X-ClientService-ClientTag used to record pnpjs usage
 *
 * @param name Method name, displayed in the
 */
function tag(name) {
    return function (target, key, descriptor) {
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.configure(headers({ "X-PnPjs-Tracking": name }));
                    return [2 /*return*/, originalMethod.apply(this, args)];
                });
            });
        };
        return descriptor;
    };
}
tag.getClientTag = function (h, deleteFromCollection) {
    if (deleteFromCollection === void 0) { deleteFromCollection = true; }
    if (h.has("X-PnPjs-Tracking")) {
        var methodName = h.get("X-PnPjs-Tracking");
        if (deleteFromCollection) {
            h.delete("X-PnPjs-Tracking");
        }
        if (!stringIsNullOrEmpty(methodName)) {
            return methodName;
        }
    }
    return "";
};
tag.configure = function (o, name) {
    return o.configure(headers({ "X-PnPjs-Tracking": name }));
};
tag.isTagged = function (o) {
    return o.data.options.headers && o.data.options.headers["X-PnPjs-Tracking"];
};
//# sourceMappingURL=telemetry.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sphttpclient.js





var SPHttpClient = /** @class */ (function () {
    function SPHttpClient() {
        // constructor(...args: [runtime: Runtime] | [impl: IHttpClientImpl, runtime?: Runtime]) {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a;
        this._runtime = args.length > 0 && args[0] instanceof Runtime ? args[0] : DefaultRuntime;
        this._impl = args.length > 1 && objectDefinedNotNull(args[1]) ?
            args[1] : ((_a = this._runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.fetchClientFactory()) || null;
        if (this._impl === null) {
            throw Error("Could not generate fetchClientFactory in SPHttpClient.");
        }
        this._digestCache = getDigestFactory(this);
    }
    SPHttpClient.prototype.fetch = function (url, options) {
        var _a;
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var opts, headers, methodName, clientTag, digest;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        opts = util_assign(options, { cache: "no-cache", credentials: "same-origin" }, true);
                        headers = new Headers();
                        // first we add the global headers so they can be overwritten by any passed in locally to this call
                        mergeHeaders(headers, (_a = this._runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.headers);
                        // second we add the local options so we can overwrite the globals
                        mergeHeaders(headers, options.headers);
                        // lastly we apply any default headers we need that may not exist
                        if (!headers.has("Accept")) {
                            headers.append("Accept", "application/json");
                        }
                        if (!headers.has("Content-Type")) {
                            headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                        }
                        if (!headers.has("X-ClientService-ClientTag")) {
                            methodName = tag.getClientTag(headers);
                            clientTag = "PnPCoreJS:2.8.0:" + methodName;
                            if (clientTag.length > 32) {
                                clientTag = clientTag.substr(0, 32);
                            }
                            headers.append("X-ClientService-ClientTag", clientTag);
                        }
                        opts = util_assign(opts, { headers: headers });
                        if (!(opts.method && opts.method.toUpperCase() !== "GET" && !headers.has("X-RequestDigest") && !headers.has("Authorization"))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._digestCache(extractWebUrl(url))];
                    case 1:
                        digest = _b.sent();
                        headers.append("X-RequestDigest", digest);
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.fetchRaw(url, opts)];
                }
            });
        });
    };
    SPHttpClient.prototype.fetchRaw = function (url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        // here we need to normalize the headers
        var rawHeaders = new Headers();
        mergeHeaders(rawHeaders, options.headers);
        options = util_assign(options, { headers: rawHeaders });
        var retry = function (ctx) {
            // handles setting the proper timeout for a retry
            var setRetry = function (response) {
                var delay;
                if (response.headers.has("Retry-After")) {
                    // if we have gotten a header, use that value as the delay value in seconds
                    delay = parseInt(response.headers.get("Retry-After"), 10) * 1000;
                }
                else {
                    // grab our current delay
                    delay = ctx.delay;
                    // Increment our counters.
                    ctx.delay *= 2;
                }
                ctx.attempts++;
                // If we have exceeded the retry count, reject.
                if (ctx.retryCount <= ctx.attempts) {
                    // eslint-disable-next-line max-len
                    ctx.reject(new HttpRequestError("Retry count exceeded (" + ctx.retryCount + ") for request. Response status: [" + response.status + "] " + response.statusText, response));
                }
                else {
                    // Set our retry timeout for {delay} milliseconds.
                    setTimeout(getCtxCallback(_this, retry, ctx), delay);
                }
            };
            // send the actual request
            _this._impl.fetch(url, options).then(function (response) {
                if (response.status === 429) {
                    // we have been throttled
                    setRetry(response);
                }
                else {
                    ctx.resolve(response);
                }
            }).catch(function (response) {
                if (response.status === 503 || response.status === 504) {
                    // http status code 503 or 504, we can retry this
                    setRetry(response);
                }
                else {
                    ctx.reject(response);
                }
            });
        };
        return new Promise(function (resolve, reject) {
            retry.call(_this, {
                attempts: 0,
                delay: 100,
                reject: reject,
                resolve: resolve,
                retryCount: 7,
            });
        });
    };
    SPHttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_assign(options, { method: "GET" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.post = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_assign(options, { method: "POST" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.patch = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_assign(options, { method: "PATCH" });
        return this.fetch(url, opts);
    };
    SPHttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        var opts = util_assign(options, { method: "DELETE" });
        return this.fetch(url, opts);
    };
    return SPHttpClient;
}());

// allows for the caching of digests across all HttpClient's which each have their own DigestCache wrapper.
var digests = new Map();
function getDigestFactory(client) {
    var _this = this;
    return function (webUrl) { return __awaiter(_this, void 0, void 0, function () {
        var cachedDigest, now, url, headers, resp, parsed, newCachedDigest;
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    cachedDigest = digests.get(webUrl);
                    if (cachedDigest !== undefined) {
                        now = new Date();
                        if (now < cachedDigest.expiration) {
                            return [2 /*return*/, cachedDigest.value];
                        }
                    }
                    url = combine(webUrl, "/_api/contextinfo");
                    headers = {
                        "Accept": "application/json;odata=verbose",
                        "Content-Type": "application/json;odata=verbose;charset=utf-8",
                    };
                    return [4 /*yield*/, client.fetchRaw(url, {
                            cache: "no-cache",
                            credentials: "same-origin",
                            headers: util_assign(headers, (_b = (_a = client._runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.sp) === null || _b === void 0 ? void 0 : _b.headers, true),
                            method: "POST",
                        })];
                case 1:
                    resp = _c.sent();
                    return [4 /*yield*/, (new ODataParser()).parse(resp).then(function (r) { return r.GetContextWebInformation; })];
                case 2:
                    parsed = _c.sent();
                    newCachedDigest = {
                        expiration: dateAdd(new Date(), "second", parsed.FormDigestTimeoutSeconds),
                        value: parsed.FormDigestValue,
                    };
                    digests.set(webUrl, newCachedDigest);
                    return [2 /*return*/, newCachedDigest.value];
            }
        });
    }); };
}
//# sourceMappingURL=sphttpclient.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/toabsoluteurl.js


/**
 * Ensures that a given url is absolute for the current web based on context
 *
 * @param candidateUrl The url to make absolute
 *
 */
function toAbsoluteUrl(candidateUrl, runtime) {
    var _a, _b;
    if (runtime === void 0) { runtime = DefaultRuntime; }
    return __awaiter(this, void 0, void 0, function () {
        var baseUrl, fetchClientFactory, context, tempClient, location_1;
        return __generator(this, function (_c) {
            if (isUrlAbsolute(candidateUrl)) {
                // if we are already absolute, then just return the url
                return [2 /*return*/, candidateUrl];
            }
            baseUrl = (_a = runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.baseUrl;
            fetchClientFactory = (_b = runtime.get("sp")) === null || _b === void 0 ? void 0 : _b.fetchClientFactory;
            if (!stringIsNullOrEmpty(baseUrl)) {
                // base url specified either with baseUrl of spfxContext config property
                return [2 /*return*/, combine(baseUrl, candidateUrl)];
            }
            context = runtime.get("spfxContext");
            if (context) {
                return [2 /*return*/, combine(context.pageContext.web.absoluteUrl, candidateUrl)];
            }
            // to make the existing node client work in a backwards compatible way we do the following (hacky thing)
            // get the client
            // see if it has a siteUrl property
            // use that to absolute the url
            if (fetchClientFactory) {
                tempClient = fetchClientFactory();
                if (hOP(tempClient, "siteUrl")) {
                    return [2 /*return*/, combine(tempClient.siteUrl, candidateUrl)];
                }
            }
            if (safeGlobal._spPageContextInfo !== undefined) {
                // operating in classic pages
                if (hOP(safeGlobal._spPageContextInfo, "webAbsoluteUrl")) {
                    return [2 /*return*/, combine(safeGlobal._spPageContextInfo.webAbsoluteUrl, candidateUrl)];
                }
                else if (hOP(safeGlobal._spPageContextInfo, "webServerRelativeUrl")) {
                    return [2 /*return*/, combine(safeGlobal._spPageContextInfo.webServerRelativeUrl, candidateUrl)];
                }
            }
            // does window.location exist and have a certain path part in it?
            if (safeGlobal.location !== undefined) {
                location_1 = safeGlobal.location.toString().toLowerCase();
                ["/_layouts/", "/siteassets/", "/sitepages/"].forEach(function (s) {
                    var index = location_1.indexOf(s);
                    if (index > 0) {
                        return combine(location_1.substr(0, index), candidateUrl);
                    }
                });
            }
            return [2 /*return*/, candidateUrl];
        });
    });
}
//# sourceMappingURL=toabsoluteurl.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/operations.js





function registerCustomRequestClientFactory(requestClientFactory) {
    httpClientFactory = isFunc(requestClientFactory) ? function () { return requestClientFactory; } : defaultFactory;
}
var defaultFactory = function (runtime) { return function () { return new SPHttpClient(runtime); }; };
var httpClientFactory = defaultFactory;
var send = function (method) {
    return function (o, options) {
        return __awaiter(this, void 0, void 0, function () {
            var runtime, operation, data, batchDependency, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        runtime = o.getRuntime();
                        operation = defaultPipelineBinder(httpClientFactory(runtime))(method);
                        data = cloneQueryableData(o.data);
                        batchDependency = objectDefinedNotNull(data.batch) ? data.batch.addDependency() : function () {
                            return;
                        };
                        return [4 /*yield*/, toAbsoluteUrl(o.toUrlAndQuery(), runtime)];
                    case 1:
                        url = _a.sent();
                        mergeOptions(data.options, options);
                        return [2 /*return*/, operation(Object.assign({}, data, {
                                batchDependency: batchDependency,
                                url: url,
                            }))];
                }
            });
        });
    };
};
var spGet = function (o, options) {
    // Fix for #304 - when we clone objects we in some cases then execute a get request
    // in these cases the caching settings were getting dropped from the request
    // this tracks if the object from which this was cloned was caching and applies that to an immediate get request
    // does not affect objects cloned from this as we are using different fields to track the settings so it won't
    // be triggered
    if (o.data.cloneParentWasCaching) {
        o.usingCaching(o.data.cloneParentCacheOptions);
    }
    // if we are forcing caching set that in the data here
    if (o._forceCaching) {
        o.data.useCaching = true;
    }
    return send("GET")(o, options);
};
var spPost = function (o, options) { return send("POST")(o, options); };
var spDelete = function (o, options) { return send("DELETE")(o, options); };
var spPatch = function (o, options) { return send("PATCH")(o, options); };
var spPostDelete = function (o, options) {
    var opts = Object.assign(headers({ "X-HTTP-Method": "DELETE" }), options);
    return spPost(o, opts);
};
var spPostDeleteETag = function (o, options, eTag) {
    if (eTag === void 0) { eTag = "*"; }
    var opts = Object.assign(headers({ "X-HTTP-Method": "DELETE", "IF-Match": eTag }), options);
    return spPost(o, opts);
};
//# sourceMappingURL=operations.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharepointqueryable.js







var spInvokableFactory = function (f) {
    return invokableFactory(f);
};
/**
 * SharePointQueryable Base Class
 *
 */
var _SharePointQueryable = /** @class */ (function (_super) {
    __extends(_SharePointQueryable, _super);
    /**
     * Creates a new instance of the SharePointQueryable class
     *
     * @constructor
     * @param baseUrl A string or SharePointQueryable that should form the base part of the url
     *
     */
    function _SharePointQueryable(baseUrl, path) {
        var _this = this;
        var url = "";
        var parentUrl = "";
        var query = new Map();
        if (typeof baseUrl === "string") {
            // we need to do some extra parsing to get the parent url correct if we are
            // being created from just a string.
            if (isUrlAbsolute(baseUrl) || baseUrl.lastIndexOf("/") < 0) {
                parentUrl = baseUrl;
                url = combine(baseUrl, path);
            }
            else if (baseUrl.lastIndexOf("/") > baseUrl.lastIndexOf("(")) {
                // .../items(19)/fields
                var index = baseUrl.lastIndexOf("/");
                parentUrl = baseUrl.slice(0, index);
                path = combine(baseUrl.slice(index), path);
                url = combine(parentUrl, path);
            }
            else {
                // .../items(19)
                var index = baseUrl.lastIndexOf("(");
                parentUrl = baseUrl.slice(0, index);
                url = combine(baseUrl, path);
            }
        }
        else {
            parentUrl = baseUrl.toUrl();
            url = combine(parentUrl, path || "");
            var target = baseUrl.query.get("@target");
            if (target !== undefined) {
                query.set("@target", target);
            }
        }
        // init base with correct values for data seed
        _this = _super.call(this, {
            parentUrl: parentUrl,
            query: query,
            url: url,
        }) || this;
        // post init actions
        if (typeof baseUrl !== "string") {
            _this.configureFrom(baseUrl);
        }
        _this._forceCaching = false;
        return _this;
    }
    /**
     * Gets the full url with query information
     */
    _SharePointQueryable.prototype.toUrlAndQuery = function () {
        var aliasedParams = new Map(this.query);
        var url = this.toUrl().replace(/'!(@.*?)::(.*?)'/ig, function (match, labelName, value) {
            Logger.write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + value, 0 /* Verbose */);
            aliasedParams.set(labelName, "'" + value + "'");
            return labelName;
        });
        if (aliasedParams.size > 0) {
            var char = url.indexOf("?") > -1 ? "&" : "?";
            url += "" + char + Array.from(aliasedParams).map(function (v) { return v[0] + "=" + v[1]; }).join("&");
        }
        return url;
    };
    /**
     * Choose which fields to return
     *
     * @param selects One or more fields to return
     */
    _SharePointQueryable.prototype.select = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        if (selects.length > 0) {
            this.query.set("$select", selects.map(encodeURIComponent).join(","));
        }
        return this;
    };
    _SharePointQueryable.prototype.get = function (options) {
        return spGet(this, options);
    };
    /**
     * Expands fields such as lookups to get additional data
     *
     * @param expands The Fields for which to expand the values
     */
    _SharePointQueryable.prototype.expand = function () {
        var expands = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expands[_i] = arguments[_i];
        }
        if (expands.length > 0) {
            this.query.set("$expand", expands.map(encodeURIComponent).join(","));
        }
        return this;
    };
    /**
     * Clones this SharePointQueryable into a new SharePointQueryable instance of T
     * @param factory Constructor used to create the new instance
     * @param additionalPath Any additional path to include in the clone
     * @param includeBatch If true this instance's batch will be added to the cloned instance
     * @param includeQuery If true all of the query values will be copied to the cloned instance
     */
    _SharePointQueryable.prototype.clone = function (factory, additionalPath, includeBatch, includeQuery) {
        if (includeBatch === void 0) { includeBatch = true; }
        if (includeQuery === void 0) { includeQuery = false; }
        var clone = _super.prototype.cloneTo.call(this, factory(this, additionalPath), { includeBatch: includeBatch, includeQuery: includeQuery });
        // handle sp specific clone actions
        if (!includeQuery) {
            // we would have already copied this over if we got the entire query
            var t = "@target";
            if (this.query.has(t)) {
                clone.query.set(t, this.query.get(t));
            }
        }
        return clone;
    };
    /**
     * The default action for this object (unless overridden spGet)
     *
     * @param options optional request options
     */
    _SharePointQueryable.prototype.defaultAction = function (options) {
        return spGet(this, options);
    };
    /**
     * Gets a parent for this instance as specified
     *
     * @param factory The contructor for the class to create
     */
    _SharePointQueryable.prototype.getParent = function (factory, baseUrl, path, batch) {
        if (baseUrl === void 0) { baseUrl = this.parentUrl; }
        var parent = factory(baseUrl, path).configureFrom(this);
        var t = "@target";
        if (this.query.has(t)) {
            parent.query.set(t, this.query.get(t));
        }
        if (batch !== undefined) {
            parent = parent.inBatch(batch);
        }
        return parent;
    };
    return _SharePointQueryable;
}(Queryable));

var SharePointQueryable = spInvokableFactory(_SharePointQueryable);
/**
 * Represents a REST collection which can be filtered, paged, and selected
 *
 */
var _SharePointQueryableCollection = /** @class */ (function (_super) {
    __extends(_SharePointQueryableCollection, _super);
    function _SharePointQueryableCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Filters the returned collection (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#bk_supported)
     *
     * @param filter The string representing the filter query
     */
    _SharePointQueryableCollection.prototype.filter = function (filter) {
        this.query.set("$filter", encodeURIComponent(filter));
        return this;
    };
    /**
     * Orders based on the supplied fields
     *
     * @param orderby The name of the field on which to sort
     * @param ascending If false DESC is appended, otherwise ASC (default)
     */
    _SharePointQueryableCollection.prototype.orderBy = function (orderBy, ascending) {
        if (ascending === void 0) { ascending = true; }
        var o = "$orderby";
        var query = this.query.has(o) ? this.query.get(o).split(",") : [];
        query.push(encodeURIComponent(orderBy) + " " + (ascending ? "asc" : "desc"));
        this.query.set(o, query.join(","));
        return this;
    };
    /**
     * Skips the specified number of items
     *
     * @param skip The number of items to skip
     */
    _SharePointQueryableCollection.prototype.skip = function (skip) {
        this.query.set("$skip", skip.toString());
        return this;
    };
    /**
     * Limits the query to only return the specified number of items
     *
     * @param top The query row limit
     */
    _SharePointQueryableCollection.prototype.top = function (top) {
        this.query.set("$top", top.toString());
        return this;
    };
    return _SharePointQueryableCollection;
}(_SharePointQueryable));

var SharePointQueryableCollection = spInvokableFactory(_SharePointQueryableCollection);
/**
 * Represents an instance that can be selected
 *
 */
var _SharePointQueryableInstance = /** @class */ (function (_super) {
    __extends(_SharePointQueryableInstance, _super);
    function _SharePointQueryableInstance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Curries the update function into the common pieces
     *
     * @param type
     * @param mapper
     */
    _SharePointQueryableInstance.prototype._update = function (type, mapper) {
        var _this = this;
        return function (props) { return spPost(tag.configure(_this, type + ".Update"), {
            body: jsS(util_assign(metadata(type), props)),
            headers: {
                "X-HTTP-Method": "MERGE",
            },
        }).then(function (d) { return mapper(d, props); }); };
    };
    return _SharePointQueryableInstance;
}(_SharePointQueryable));

var SharePointQueryableInstance = spInvokableFactory(_SharePointQueryableInstance);
/**
 * Adds the a delete method to the tagged class taking no parameters and calling spPostDelete
 */
function deleteable(t) {
    return function () {
        return spPostDelete(tag.configure(this, t + ".delete"));
    };
}
function deleteableWithETag(t) {
    return function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return spPostDeleteETag(tag.configure(this, t + ".delete"), {}, eTag);
    };
}
//# sourceMappingURL=sharepointqueryable.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/decorators.js
/**
 * Class Decorators
 */

/**
 * Decorator used to specify the default path for SharePointQueryable objects
 *
 * @param path
 */
function defaultPath(path) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.call(this, args[0], args.length > 1 && args[1] !== undefined ? args[1] : path) || this;
            }
            return class_1;
        }(target));
    };
}
// TODO::?
// performance tracking method decorator
// redirect to graph api
//# sourceMappingURL=decorators.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/odata.js





function odataUrlFrom(candidate) {
    var parts = [];
    var s = ["odata.type", "odata.editLink", "__metadata", "odata.metadata", "odata.id"];
    if (hOP(candidate, s[0]) && candidate[s[0]] === "SP.Web") {
        // webs return an absolute url in the id
        if (hOP(candidate, s[4])) {
            parts.push(candidate[s[4]]);
        }
        else if (hOP(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    else {
        if (hOP(candidate, s[3]) && hOP(candidate, s[1])) {
            // we are dealign with minimal metadata (default)
            // some entities return an abosolute url in the editlink while for others it is relative
            // without the _api. This code is meant to handle both situations
            var editLink = isUrlAbsolute(candidate[s[1]]) ? candidate[s[1]].split("_api")[1] : candidate[s[1]];
            parts.push(extractWebUrl(candidate[s[3]]), "_api", editLink);
        }
        else if (hOP(candidate, s[1])) {
            parts.push("_api", candidate[s[1]]);
        }
        else if (hOP(candidate, s[2])) {
            // we are dealing with verbose, which has an absolute uri
            parts.push(candidate.__metadata.uri);
        }
    }
    if (parts.length < 1) {
        Logger.write("No uri information found in ODataEntity parsing, chaining will fail for this object.", 2 /* Warning */);
        return "";
    }
    return combine.apply(void 0, __spreadArray([], __read(parts)));
}
var SPODataEntityParserImpl = /** @class */ (function (_super) {
    __extends(SPODataEntityParserImpl, _super);
    function SPODataEntityParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            var o = _this.factory(odataUrlFrom(d), null);
            return util_assign(o, d);
        };
        return _this;
    }
    SPODataEntityParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            var o = _this.factory(odataUrlFrom(d), null);
            return util_assign(o, d);
        });
    };
    return SPODataEntityParserImpl;
}(ODataParser));
var SPODataEntityArrayParserImpl = /** @class */ (function (_super) {
    __extends(SPODataEntityArrayParserImpl, _super);
    function SPODataEntityArrayParserImpl(factory) {
        var _this = _super.call(this) || this;
        _this.factory = factory;
        _this.hydrate = function (d) {
            return d.map(function (v) {
                var o = _this.factory(odataUrlFrom(v), null);
                return util_assign(o, v);
            });
        };
        return _this;
    }
    SPODataEntityArrayParserImpl.prototype.parse = function (r) {
        var _this = this;
        return _super.prototype.parse.call(this, r).then(function (d) {
            return d.map(function (v) {
                var o = _this.factory(odataUrlFrom(v), null);
                return util_assign(o, v);
            });
        });
    };
    return SPODataEntityArrayParserImpl;
}(ODataParser));
function spODataEntity(factory) {
    return new SPODataEntityParserImpl(factory);
}
function spODataEntityArray(factory) {
    return new SPODataEntityArrayParserImpl(factory);
}
//# sourceMappingURL=odata.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/batch.js






/**
 * Manages a batch of OData operations
 */
var SPBatch = /** @class */ (function (_super) {
    __extends(SPBatch, _super);
    function SPBatch(url, runtime) {
        if (runtime === void 0) { runtime = DefaultRuntime; }
        var _this = _super.call(this) || this;
        _this.url = url;
        _this.runtime = runtime;
        return _this;
    }
    /**
     * Parses the response from a batch request into an array of Response instances
     *
     * @param body Text body of the response from the batch request
     */
    SPBatch.ParseResponse = function (body) {
        var responses = [];
        var header = "--batchresponse_";
        // Ex. "HTTP/1.1 500 Internal Server Error"
        var statusRegExp = new RegExp("^HTTP/[0-9.]+ +([0-9]+) +(.*)", "i");
        var lines = body.split("\n");
        var state = "batch";
        var status;
        var statusText;
        for (var i = 0; i < lines.length; ++i) {
            var line = lines[i];
            switch (state) {
                case "batch":
                    if (line.substr(0, header.length) === header) {
                        state = "batchHeaders";
                    }
                    else {
                        if (line.trim() !== "") {
                            throw Error("Invalid response, line " + i);
                        }
                    }
                    break;
                case "batchHeaders":
                    if (line.trim() === "") {
                        state = "status";
                    }
                    break;
                case "status": {
                    var parts = statusRegExp.exec(line);
                    if (parts.length !== 3) {
                        throw Error("Invalid status, line " + i);
                    }
                    status = parseInt(parts[1], 10);
                    statusText = parts[2];
                    state = "statusHeaders";
                    break;
                }
                case "statusHeaders":
                    if (line.trim() === "") {
                        state = "body";
                    }
                    break;
                case "body":
                    responses.push((status === 204) ? new Response() : new Response(line, { status: status, statusText: statusText }));
                    state = "batch";
                    break;
            }
        }
        if (state !== "status") {
            throw Error("Unexpected end of input");
        }
        return responses;
    };
    SPBatch.prototype.executeImpl = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var client, absoluteRequestUrl, batchBody, currentChangeSetId, i, reqInfo, headers, url, method, castHeaders, batchOptions, fetchResponse, text, responses;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Executing batch with " + this.requests.length + " requests.", 1 /* Info */);
                        // if we don't have any requests, don't bother sending anything
                        // this could be due to caching further upstream, or just an empty batch
                        if (this.requests.length < 1) {
                            Logger.write("Resolving empty batch.", 1 /* Info */);
                            return [2 /*return*/];
                        }
                        client = new SPHttpClient(this.runtime);
                        return [4 /*yield*/, toAbsoluteUrl(this.url, this.runtime)];
                    case 1:
                        absoluteRequestUrl = _b.sent();
                        batchBody = [];
                        currentChangeSetId = "";
                        for (i = 0; i < this.requests.length; i++) {
                            reqInfo = this.requests[i];
                            if (reqInfo.method === "GET") {
                                if (currentChangeSetId.length > 0) {
                                    // end an existing change set
                                    batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                                    currentChangeSetId = "";
                                }
                                batchBody.push("--batch_" + this.batchId + "\n");
                            }
                            else {
                                if (currentChangeSetId.length < 1) {
                                    // start new change set
                                    currentChangeSetId = util_getGUID();
                                    batchBody.push("--batch_" + this.batchId + "\n");
                                    batchBody.push("Content-Type: multipart/mixed; boundary=\"changeset_" + currentChangeSetId + "\"\n\n");
                                }
                                batchBody.push("--changeset_" + currentChangeSetId + "\n");
                            }
                            // common batch part prefix
                            batchBody.push("Content-Type: application/http\n");
                            batchBody.push("Content-Transfer-Encoding: binary\n\n");
                            headers = new Headers();
                            url = isUrlAbsolute(reqInfo.url) ? reqInfo.url : combine(absoluteRequestUrl, reqInfo.url);
                            Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Adding request " + reqInfo.method + " " + url + " to batch.", 0 /* Verbose */);
                            if (reqInfo.method !== "GET") {
                                method = reqInfo.method;
                                castHeaders = reqInfo.options.headers;
                                if (hOP(reqInfo, "options") && hOP(reqInfo.options, "headers") && castHeaders["X-HTTP-Method"] !== undefined) {
                                    method = castHeaders["X-HTTP-Method"];
                                    delete castHeaders["X-HTTP-Method"];
                                }
                                batchBody.push(method + " " + url + " HTTP/1.1\n");
                                headers.set("Content-Type", "application/json;odata=verbose;charset=utf-8");
                            }
                            else {
                                batchBody.push(reqInfo.method + " " + url + " HTTP/1.1\n");
                            }
                            // merge global config headers
                            mergeHeaders(headers, (_a = this.runtime.get("sp")) === null || _a === void 0 ? void 0 : _a.headers);
                            // merge per-request headers
                            if (reqInfo.options) {
                                mergeHeaders(headers, reqInfo.options.headers);
                            }
                            // lastly we apply any default headers we need that may not exist
                            if (!headers.has("Accept")) {
                                headers.append("Accept", "application/json");
                            }
                            if (!headers.has("Content-Type")) {
                                headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
                            }
                            if (!headers.has("X-ClientService-ClientTag")) {
                                headers.append("X-ClientService-ClientTag", "PnPCoreJS:@pnp-2.8.0:batch");
                            }
                            // write headers into batch body
                            headers.forEach(function (value, name) {
                                batchBody.push(name + ": " + value + "\n");
                            });
                            batchBody.push("\n");
                            if (reqInfo.options.body) {
                                batchBody.push(reqInfo.options.body + "\n\n");
                            }
                        }
                        if (currentChangeSetId.length > 0) {
                            // Close the changeset
                            batchBody.push("--changeset_" + currentChangeSetId + "--\n\n");
                            currentChangeSetId = "";
                        }
                        batchBody.push("--batch_" + this.batchId + "--\n");
                        batchOptions = {
                            "body": batchBody.join(""),
                            "headers": {
                                "Content-Type": "multipart/mixed; boundary=batch_" + this.batchId,
                            },
                            "method": "POST",
                        };
                        Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Sending batch request.", 1 /* Info */);
                        return [4 /*yield*/, client.fetch(combine(absoluteRequestUrl, "/_api/$batch"), batchOptions)];
                    case 2:
                        fetchResponse = _b.sent();
                        if (!!fetchResponse.ok) return [3 /*break*/, 4];
                        return [4 /*yield*/, HttpRequestError.init(fetchResponse)];
                    case 3: 
                    // the entire batch resulted in an error and we need to handle that better #1356
                    // things consistently with the rest of the http errors
                    throw (_b.sent());
                    case 4: return [4 /*yield*/, fetchResponse.text()];
                    case 5:
                        text = _b.sent();
                        responses = SPBatch.ParseResponse(text);
                        if (responses.length !== this.requests.length) {
                            throw Error("Could not properly parse responses to match requests in batch.");
                        }
                        Logger.write("[" + this.batchId + "] (" + (new Date()).getTime() + ") Resolving batched requests.", 1 /* Info */);
                        // this structure ensures that we resolve the batched requests in the order we expect
                        // using async this is not guaranteed depending on the requests
                        return [2 /*return*/, responses.reduce(function (p, response, index) { return p.then(function () { return __awaiter(_this, void 0, void 0, function () {
                                var request, _a, _b, e_1;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            request = this.requests[index];
                                            Logger.write("[" + request.id + "] (" + (new Date()).getTime() + ") Resolving request in batch " + this.batchId + ".", 1 /* Info */);
                                            _c.label = 1;
                                        case 1:
                                            _c.trys.push([1, 3, , 4]);
                                            _b = (_a = request).resolve;
                                            return [4 /*yield*/, request.parser.parse(response)];
                                        case 2:
                                            _b.apply(_a, [_c.sent()]);
                                            return [3 /*break*/, 4];
                                        case 3:
                                            e_1 = _c.sent();
                                            request.reject(e_1);
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); }); }, Promise.resolve(void (0)))];
                }
            });
        });
    };
    return SPBatch;
}(Batch));

//# sourceMappingURL=batch.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/escapeQueryStrValue.js


function escapeQueryStrValue(value) {
    if (stringIsNullOrEmpty(value)) {
        return "";
    }
    // replace all instance of ' with ''
    if (/!(@.*?)::(.*?)/ig.test(value)) {
        // to ensure our param aliasing still works we need to treat these special or we'll hear about it
        // so we encode JUST the part that will end up in the url
        return value.replace(/!(@.*?)::(.*)$/ig, function (match, labelName, v) {
            Logger.write("Rewriting aliased parameter from match " + match + " to label: " + labelName + " value: " + v, 0 /* Verbose */);
            return "!" + labelName + "::" + encodeURIComponent(v.replace(/'/ig, "''"));
        });
    }
    else {
        return encodeURIComponent(value.replace(/'/ig, "''"));
    }
}
//# sourceMappingURL=escapeQueryStrValue.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sites/types.js














var _Site = /** @class */ (function (_super) {
    __extends(_Site, _super);
    function _Site() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Site.prototype, "rootWeb", {
        /**
         * Gets the root web of the site collection
         *
         */
        get: function () {
            return tag.configure(Web(this, "rootweb").configureFrom(this), "si.rootWeb");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
     *
     * @param query The change query
     */
    _Site.prototype.getChanges = function (query) {
        var postBody = body({ "query": util_assign(metadata("SP.ChangeQuery"), query) });
        return spPost(this.clone(Web, "getchanges"), postBody);
    };
    /**
     * Opens a web by id (using POST)
     *
     * @param webId The GUID id of the web to open
     */
    _Site.prototype.openWebById = function (webId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Site, "openWebById('" + webId + "')"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                web: Web(extractWebUrl(odataUrlFrom(data))).configureFrom(this),
                            }];
                }
            });
        });
    };
    /**
     * Gets a Web instance representing the root web of the site collection
     * correctly setup for chaining within the library
     */
    _Site.prototype.getRootWeb = function () {
        return __awaiter(this, void 0, void 0, function () {
            var web;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.rootWeb.select("Url")()];
                    case 1:
                        web = _a.sent();
                        return [2 /*return*/, tag.configure(Web(web.Url).configureFrom(this), "si.getRootWeb")];
                }
            });
        });
    };
    /**
     * Gets the context information for this site collection
     */
    _Site.prototype.getContextInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var site, q, data, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        site = Site(this.parentUrl, "_api/contextinfo").configureFrom(this);
                        q = tag.configure(site, "si.getContextInfo");
                        return [4 /*yield*/, spPost(q)];
                    case 1:
                        data = _a.sent();
                        if (hOP(data, "GetContextWebInformation")) {
                            info = data.GetContextWebInformation;
                            info.SupportedSchemaVersions = info.SupportedSchemaVersions.results;
                            return [2 /*return*/, info];
                        }
                        else {
                            return [2 /*return*/, data];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    _Site.prototype.createBatch = function () {
        return new SPBatch(this.parentUrl, this.getRuntime());
    };
    /**
     * Deletes the current site
     *
     */
    _Site.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var site, q;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(Site, "").select("Id")()];
                    case 1:
                        site = _a.sent();
                        q = tag.configure(Site(this.parentUrl, "_api/SPSiteManager/Delete"), "si.delete");
                        return [4 /*yield*/, spPost(q, body({ siteId: site.Id }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the document libraries on a site. Static method. (SharePoint Online only)
     *
     * @param absoluteWebUrl The absolute url of the web whose document libraries should be returned
     */
    _Site.prototype.getDocumentLibraries = function (absoluteWebUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var q, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = tag.configure(SharePointQueryable("", "_api/sp.web.getdocumentlibraries(@v)"), "si.getDocumentLibraries");
                        q.query.set("@v", "'" + escapeQueryStrValue(absoluteWebUrl) + "'");
                        return [4 /*yield*/, q()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, hOP(data, "GetDocumentLibraries") ? data.GetDocumentLibraries : data];
                }
            });
        });
    };
    /**
     * Gets the site url from a page url
     *
     * @param absolutePageUrl The absolute url of the page
     */
    _Site.prototype.getWebUrlFromPageUrl = function (absolutePageUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var q, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = tag.configure(SharePointQueryable("", "_api/sp.web.getweburlfrompageurl(@v)"), "si.getWebUrlFromPageUrl");
                        q.query.set("@v", "'" + escapeQueryStrValue(absolutePageUrl) + "'");
                        return [4 /*yield*/, q()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, hOP(data, "GetWebUrlFromPageUrl") ? data.GetWebUrlFromPageUrl : data];
                }
            });
        });
    };
    /**
     * Creates a Modern communication site.
     *
     * @param title The title of the site to create
     * @param lcid The language to use for the site. If not specified will default to 1033 (English).
     * @param shareByEmailEnabled If set to true, it will enable sharing files via Email. By default it is set to false
     * @param url The fully qualified URL (e.g. https://yourtenant.sharepoint.com/sites/mysitecollection) of the site.
     * @param description The description of the communication site.
     * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
     * @param siteDesignId The Guid of the site design to be used.
     *                     You can use the below default OOTB GUIDs:
     *                     Topic: 00000000-0000-0000-0000-000000000000
     *                     Showcase: 6142d2a0-63a5-4ba0-aede-d9fefca2c767
     *                     Blank: f6cc5403-0d63-442e-96c0-285923709ffc
     * @param hubSiteId The id of the hub site to which the new site should be associated
     * @param owner Optional owner value, required if executing the method in app only mode
     */
    _Site.prototype.createCommunicationSite = function (title, lcid, shareByEmailEnabled, url, description, classification, siteDesignId, hubSiteId, owner) {
        if (lcid === void 0) { lcid = 1033; }
        if (shareByEmailEnabled === void 0) { shareByEmailEnabled = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.createCommunicationSiteFromProps({
                        Classification: classification,
                        Description: description,
                        HubSiteId: hubSiteId,
                        Lcid: lcid,
                        Owner: owner,
                        ShareByEmailEnabled: shareByEmailEnabled,
                        SiteDesignId: siteDesignId,
                        Title: title,
                        Url: url,
                    })];
            });
        });
    };
    _Site.prototype.createCommunicationSiteFromProps = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var p, postBody;
            return __generator(this, function (_a) {
                p = Object.assign({}, {
                    Classification: "",
                    Description: "",
                    HubSiteId: emptyGuid,
                    Lcid: 1033,
                    ShareByEmailEnabled: false,
                    SiteDesignId: emptyGuid,
                    WebTemplate: "SITEPAGEPUBLISHING#0",
                    WebTemplateExtensionId: emptyGuid,
                }, props);
                postBody = body({
                    "request": util_assign(metadata("Microsoft.SharePoint.Portal.SPSiteCreationRequest"), p),
                });
                return [2 /*return*/, spPost(Site(extractWebUrl(this.toUrl()), "/_api/SPSiteManager/Create"), postBody)];
            });
        });
    };
    /**
     *
     * @param url Site Url that you want to check if exists
     */
    _Site.prototype.exists = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body({ url: url });
                        return [4 /*yield*/, spPost(Site(extractWebUrl(this.toUrl()), "/_api/SP.Site.Exists"), postBody)];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, value];
                }
            });
        });
    };
    /**
     * Creates a Modern team site backed by Office 365 group. For use in SP Online only. This will not work with App-only tokens
     *
     * @param displayName The title or display name of the Modern team site to be created
     * @param alias Alias of the underlying Office 365 Group
     * @param isPublic Defines whether the Office 365 Group will be public (default), or private.
     * @param lcid The language to use for the site. If not specified will default to English (1033).
     * @param description The description of the site to be created.
     * @param classification The Site classification to use. For instance 'Contoso Classified'. See https://www.youtube.com/watch?v=E-8Z2ggHcS0 for more information
     * @param owners The Owners of the site to be created
     */
    _Site.prototype.createModernTeamSite = function (displayName, alias, isPublic, lcid, description, classification, owners, hubSiteId, siteDesignId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.createModernTeamSiteFromProps({
                        alias: alias,
                        classification: classification,
                        description: description,
                        displayName: displayName,
                        hubSiteId: hubSiteId,
                        isPublic: isPublic,
                        lcid: lcid,
                        owners: owners,
                        siteDesignId: siteDesignId,
                    })];
            });
        });
    };
    _Site.prototype.createModernTeamSiteFromProps = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var p, postBody;
            return __generator(this, function (_a) {
                p = Object.assign({}, {
                    classification: "",
                    description: "",
                    hubSiteId: emptyGuid,
                    isPublic: true,
                    lcid: 1033,
                    owners: [],
                }, props);
                postBody = {
                    alias: p.alias,
                    displayName: p.displayName,
                    isPublic: p.isPublic,
                    optionalParams: {
                        Classification: p.classification,
                        CreationOptions: {
                            "results": ["SPSiteLanguage:" + p.lcid, "HubSiteId:" + p.hubSiteId],
                        },
                        Description: p.description,
                        Owners: {
                            "results": p.owners,
                        },
                    },
                };
                if (p.siteDesignId) {
                    postBody.optionalParams.CreationOptions.results.push("implicit_formula_292aa8a00786498a87a5ca52d9f4214a_" + p.siteDesignId);
                }
                return [2 /*return*/, spPost(Site(extractWebUrl(this.toUrl()), "/_api/GroupSiteManager/CreateGroupEx"), body(postBody))];
            });
        });
    };
    __decorate([
        tag("si.getChanges")
    ], _Site.prototype, "getChanges", null);
    __decorate([
        tag("si.openWebById")
    ], _Site.prototype, "openWebById", null);
    _Site = __decorate([
        defaultPath("_api/site")
    ], _Site);
    return _Site;
}(_SharePointQueryableInstance));

var Site = spInvokableFactory(_Site);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sites/index.js



Reflect.defineProperty(SPRest.prototype, "site", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(function (_a) {
            var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
            return Site(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/webs/types.js












var _Webs = /** @class */ (function (_super) {
    __extends(_Webs, _super);
    function _Webs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new web to the collection
     *
     * @param title The new web's title
     * @param url The new web's relative url
     * @param description The new web's description
     * @param template The new web's template internal name (default = STS)
     * @param language The locale id that specifies the new web's language (default = 1033 [English, US])
     * @param inheritPermissions When true, permissions will be inherited from the new web's parent (default = true)
     */
    _Webs.prototype.add = function (title, url, description, template, language, inheritPermissions) {
        if (description === void 0) { description = ""; }
        if (template === void 0) { template = "STS"; }
        if (language === void 0) { language = 1033; }
        if (inheritPermissions === void 0) { inheritPermissions = true; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body({
                            "parameters": util_assign(metadata("SP.WebCreationInformation"), {
                                Description: description,
                                Language: language,
                                Title: title,
                                Url: url,
                                UseSamePermissionsAsParentSite: inheritPermissions,
                                WebTemplate: template,
                            }),
                        });
                        return [4 /*yield*/, spPost(this.clone(Webs, "add"), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                web: Web(odataUrlFrom(data).replace(/_api\/web\/?/i, "")).configureFrom(this),
                            }];
                }
            });
        });
    };
    __decorate([
        tag("ws.add")
    ], _Webs.prototype, "add", null);
    _Webs = __decorate([
        defaultPath("webs")
    ], _Webs);
    return _Webs;
}(_SharePointQueryableCollection));

var Webs = spInvokableFactory(_Webs);
/**
 * Describes a web
 *
 */
var _Web = /** @class */ (function (_super) {
    __extends(_Web, _super);
    function _Web() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("w");
        return _this;
    }
    Object.defineProperty(_Web.prototype, "webs", {
        /**
         * Gets this web's subwebs
         *
         */
        get: function () {
            return Webs(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Web.prototype, "allProperties", {
        /**
         * Allows access to the web's all properties collection
         */
        get: function () {
            return tag.configure(this.clone(SharePointQueryableInstance, "allproperties"), "w.allprops");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Web.prototype, "webinfos", {
        /**
         * Gets a collection of WebInfos for this web's subwebs
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableCollection(this, "webinfos"), "w.webinfos");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets this web's parent web and data
     *
     */
    _Web.prototype.getParentWeb = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ParentWeb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spGet(this.select("ParentWeb/Id").expand("ParentWeb"))];
                    case 1:
                        ParentWeb = (_a.sent()).ParentWeb;
                        return [2 /*return*/, (ParentWeb === null || ParentWeb === void 0 ? void 0 : ParentWeb.Id) ? Site(this.parentUrl).openWebById(ParentWeb.Id) : null];
                }
            });
        });
    };
    /**
     * Updates this web instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the web
     */
    _Web.prototype.update = function (properties) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(util_assign(metadata("SP.Web"), properties), headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, web: this }];
                }
            });
        });
    };
    /**
     * Applies the theme specified by the contents of each of the files specified in the arguments to the site
     *
     * @param colorPaletteUrl The server-relative URL of the color palette file
     * @param fontSchemeUrl The server-relative URL of the font scheme
     * @param backgroundImageUrl The server-relative URL of the background image
     * @param shareGenerated When true, the generated theme files are stored in the root site. When false, they are stored in this web
     */
    _Web.prototype.applyTheme = function (colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, shareGenerated) {
        var postBody = body({
            backgroundImageUrl: backgroundImageUrl,
            colorPaletteUrl: colorPaletteUrl,
            fontSchemeUrl: fontSchemeUrl,
            shareGenerated: shareGenerated,
        });
        return spPost(this.clone(Web, "applytheme"), postBody);
    };
    /**
     * Applies the specified site definition or site template to the Web site that has no template applied to it
     *
     * @param template Name of the site definition or the name of the site template
     */
    _Web.prototype.applyWebTemplate = function (template) {
        var q = this.clone(Web, "applywebtemplate");
        q.concat("(webTemplate='" + escapeQueryStrValue(template) + "')");
        return spPost(q);
    };
    /**
         * Returns the collection of changes from the change log that have occurred within the list, based on the specified query
         *
         * @param query The change query
         */
    _Web.prototype.getChanges = function (query) {
        var postBody = body({ "query": util_assign(metadata("SP.ChangeQuery"), query) });
        return spPost(this.clone(Web, "getchanges"), postBody);
    };
    /**
     * Returns the name of the image file for the icon that is used to represent the specified file
     *
     * @param filename The file name. If this parameter is empty, the server returns an empty string
     * @param size The size of the icon: 16x16 pixels = 0, 32x32 pixels = 1 (default = 0)
     * @param progId The ProgID of the application that was used to create the file, in the form OLEServerName.ObjectName
     */
    _Web.prototype.mapToIcon = function (filename, size, progId) {
        if (size === void 0) { size = 0; }
        if (progId === void 0) { progId = ""; }
        return spGet(this.clone(Web, "maptoicon(filename='" + escapeQueryStrValue(filename) + "', progid='" + escapeQueryStrValue(progId) + "', size=" + size + ")"));
    };
    /**
     * Returns the tenant property corresponding to the specified key in the app catalog site
     *
     * @param key Id of storage entity to be set
     */
    _Web.prototype.getStorageEntity = function (key) {
        return spGet(this.clone(Web, "getStorageEntity('" + escapeQueryStrValue(key) + "')"));
    };
    /**
     * This will set the storage entity identified by the given key (MUST be called in the context of the app catalog)
     *
     * @param key Id of storage entity to be set
     * @param value Value of storage entity to be set
     * @param description Description of storage entity to be set
     * @param comments Comments of storage entity to be set
     */
    _Web.prototype.setStorageEntity = function (key, value, description, comments) {
        if (description === void 0) { description = ""; }
        if (comments === void 0) { comments = ""; }
        return spPost(this.clone(Web, "setStorageEntity"), body({
            comments: comments,
            description: description,
            key: key,
            value: value,
        }));
    };
    /**
     * This will remove the storage entity identified by the given key
     *
     * @param key Id of storage entity to be removed
     */
    _Web.prototype.removeStorageEntity = function (key) {
        return spPost(this.clone(Web, "removeStorageEntity('" + escapeQueryStrValue(key) + "')"));
    };
    /**
    * Returns a collection of objects that contain metadata about subsites of the current site in which the current user is a member.
    *
    * @param nWebTemplateFilter Specifies the site definition (default = -1)
    * @param nConfigurationFilter A 16-bit integer that specifies the identifier of a configuration (default = -1)
    */
    _Web.prototype.getSubwebsFilteredForCurrentUser = function (nWebTemplateFilter, nConfigurationFilter) {
        if (nWebTemplateFilter === void 0) { nWebTemplateFilter = -1; }
        if (nConfigurationFilter === void 0) { nConfigurationFilter = -1; }
        var o = this.clone(SharePointQueryableCollection, "getSubwebsFilteredForCurrentUser(nWebTemplateFilter=" + nWebTemplateFilter + ",nConfigurationFilter=" + nConfigurationFilter + ")");
        return tag.configure(o, "w.getSubwebsFilteredForCurrentUser");
    };
    /**
     * Creates a new batch for requests within the context of this web
     *
     */
    _Web.prototype.createBatch = function () {
        return new SPBatch(this.parentUrl, this.getRuntime());
    };
    /**
     * Returns a collection of site templates available for the site
     *
     * @param language The locale id of the site templates to retrieve (default = 1033 [English, US])
     * @param includeCrossLanguage When true, includes language-neutral site templates; otherwise false (default = true)
     */
    _Web.prototype.availableWebTemplates = function (language, includeCrossLanugage) {
        if (language === void 0) { language = 1033; }
        if (includeCrossLanugage === void 0) { includeCrossLanugage = true; }
        var path = "getavailablewebtemplates(lcid=" + language + ", doincludecrosslanguage=" + includeCrossLanugage + ")";
        return tag.configure(SharePointQueryableCollection(this, path), "w.availableWebTemplates");
    };
    __decorate([
        tag("w.getParentWeb")
    ], _Web.prototype, "getParentWeb", null);
    __decorate([
        tag("w.update")
    ], _Web.prototype, "update", null);
    __decorate([
        tag("w.applyTheme")
    ], _Web.prototype, "applyTheme", null);
    __decorate([
        tag("w.applyWebTemplate")
    ], _Web.prototype, "applyWebTemplate", null);
    __decorate([
        tag("w.getChanges")
    ], _Web.prototype, "getChanges", null);
    __decorate([
        tag("w.mapToIcon")
    ], _Web.prototype, "mapToIcon", null);
    __decorate([
        tag("w.getStorageEntity")
    ], _Web.prototype, "getStorageEntity", null);
    __decorate([
        tag("w.setStorageEntity")
    ], _Web.prototype, "setStorageEntity", null);
    __decorate([
        tag("w.removeStorageEntity")
    ], _Web.prototype, "removeStorageEntity", null);
    _Web = __decorate([
        defaultPath("_api/web")
    ], _Web);
    return _Web;
}(_SharePointQueryableInstance));

var Web = spInvokableFactory(_Web);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/toResourcePath.js
function toResourcePath(url) {
    return {
        DecodedUrl: url,
        __metadata: { type: "SP.ResourcePath" },
    };
}
//# sourceMappingURL=toResourcePath.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/types.js











var _Lists = /** @class */ (function (_super) {
    __extends(_Lists, _super);
    function _Lists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a list from the collection by guid id
     *
     * @param id The Id of the list (GUID)
     */
    _Lists.prototype.getById = function (id) {
        return tag.configure(List(this).concat("('" + id + "')"), "ls.getById");
    };
    /**
     * Gets a list from the collection by title
     *
     * @param title The title of the list
     */
    _Lists.prototype.getByTitle = function (title) {
        return tag.configure(List(this, "getByTitle('" + escapeQueryStrValue(title) + "')"), "ls.getByTitle");
    };
    /**
     * Adds a new list to the collection
     *
     * @param title The new list's title
     * @param description The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body
     */
    _Lists.prototype.add = function (title, desc, template, enableContentTypes, additionalSettings) {
        if (desc === void 0) { desc = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var addSettings, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addSettings = Object.assign({
                            "AllowContentTypes": enableContentTypes,
                            "BaseTemplate": template,
                            "ContentTypesEnabled": enableContentTypes,
                            "Description": desc,
                            "Title": title,
                        }, metadata("SP.List"), additionalSettings);
                        return [4 /*yield*/, spPost(this, body(addSettings))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, list: this.getByTitle(addSettings.Title) }];
                }
            });
        });
    };
    /**
     * Ensures that the specified list exists in the collection (note: this method not supported for batching)
     *
     * @param title The new list's title
     * @param desc The new list's description
     * @param template The list template value
     * @param enableContentTypes If true content types will be allowed and enabled, otherwise they will be disallowed and not enabled
     * @param additionalSettings Will be passed as part of the list creation body or used to update an existing list
     */
    _Lists.prototype.ensure = function (title, desc, template, enableContentTypes, additionalSettings) {
        if (desc === void 0) { desc = ""; }
        if (template === void 0) { template = 100; }
        if (enableContentTypes === void 0) { enableContentTypes = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var addOrUpdateSettings, list, data, e_1, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.hasBatch) {
                            throw Error("The ensure list method is not supported for use in a batch.");
                        }
                        addOrUpdateSettings = util_assign(additionalSettings, { Title: title, Description: desc, ContentTypesEnabled: enableContentTypes }, true);
                        list = this.getByTitle(addOrUpdateSettings.Title);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 6]);
                        // this will throw if the list doesn't exist
                        return [4 /*yield*/, list.select("Title")()];
                    case 2:
                        // this will throw if the list doesn't exist
                        _a.sent();
                        return [4 /*yield*/, list.update(addOrUpdateSettings).then(function (r) { return r.data; })];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, { created: false, data: data, list: this.getByTitle(addOrUpdateSettings.Title) }];
                    case 4:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.add(title, desc, template, enableContentTypes, addOrUpdateSettings).then(function (r) { return r.data; })];
                    case 5:
                        data = _a.sent();
                        return [2 /*return*/, { created: true, data: data, list: this.getByTitle(addOrUpdateSettings.Title) }];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.
     */
    _Lists.prototype.ensureSiteAssetsLibrary = function () {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Lists, "ensuresiteassetslibrary"))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, List(odataUrlFrom(json))];
                }
            });
        });
    };
    /**
     * Gets a list that is the default location for wiki pages.
     */
    _Lists.prototype.ensureSitePagesLibrary = function () {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Lists, "ensuresitepageslibrary"))];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, List(odataUrlFrom(json))];
                }
            });
        });
    };
    __decorate([
        tag("ls.add")
    ], _Lists.prototype, "add", null);
    __decorate([
        tag("ls.ensure")
    ], _Lists.prototype, "ensure", null);
    __decorate([
        tag("ls.ensureSiteAssetsLibrary")
    ], _Lists.prototype, "ensureSiteAssetsLibrary", null);
    __decorate([
        tag("ls.ensureSitePagesLibrary")
    ], _Lists.prototype, "ensureSitePagesLibrary", null);
    _Lists = __decorate([
        defaultPath("lists")
    ], _Lists);
    return _Lists;
}(_SharePointQueryableCollection));

var Lists = spInvokableFactory(_Lists);
var _List = /** @class */ (function (_super) {
    __extends(_List, _super);
    function _List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("l");
        return _this;
    }
    Object.defineProperty(_List.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions of this list
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "EffectiveBasePermissions"), "l.effectiveBasePermissions");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "eventReceivers", {
        /**
         * Gets the event receivers attached to this list
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableCollection(this, "EventReceivers"), "l.eventReceivers");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "relatedFields", {
        /**
         * Gets the related fields of this list
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "getRelatedFields"), "l.relatedFields");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_List.prototype, "informationRightsManagementSettings", {
        /**
         * Gets the IRM settings for this list
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "InformationRightsManagementSettings"), "l.informationRightsManagementSettings");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Updates this list intance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    _List.prototype.update = function (properties, eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data, list;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(util_assign(metadata("SP.List"), properties), headers({
                            "IF-Match": eTag,
                            "X-HTTP-Method": "MERGE",
                        }));
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        list = hOP(properties, "Title") ? this.getParent(List, this.parentUrl, "getByTitle('" + properties.Title + "')") : List(this);
                        return [2 /*return*/, {
                                data: data,
                                list: list,
                            }];
                }
            });
        });
    };
    /**
     * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
     * @param query A query that is performed against the change log.
     */
    _List.prototype.getChanges = function (query) {
        return spPost(this.clone(List, "getchanges"), body({ query: util_assign(metadata("SP.ChangeQuery"), query) }));
    };
    /**
     * Returns the collection of items in the list based on the provided CamlQuery
     * @param query A query that is performed against the list
     * @param expands An expanded array of n items that contains fields to expand in the CamlQuery
     */
    _List.prototype.getItemsByCAMLQuery = function (query) {
        var expands = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            expands[_i - 1] = arguments[_i];
        }
        var q = this.clone(List, "getitems");
        return spPost(q.expand.apply(q, __spreadArray([], __read(expands))), body({ query: util_assign(metadata("SP.CamlQuery"), query) }));
    };
    /**
     * See: https://msdn.microsoft.com/en-us/library/office/dn292554.aspx
     * @param query An object that defines the change log item query
     */
    _List.prototype.getListItemChangesSinceToken = function (query) {
        var o = this.clone(List, "getlistitemchangessincetoken").usingParser({
            parse: function (r) {
                return r.text();
            },
        });
        return spPost(o, body({ "query": util_assign(metadata("SP.ChangeLogItemQuery"), query) }));
    };
    /**
     * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _List.prototype.recycle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(List, "recycle"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, hOP(data, "Recycle") ? data.Recycle : data];
                }
            });
        });
    };
    /**
     * Renders list data based on the view xml provided
     * @param viewXml A string object representing a view xml
     */
    _List.prototype.renderListData = function (viewXml) {
        return __awaiter(this, void 0, void 0, function () {
            var q, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.clone(List, "renderlistdata(@viewXml)");
                        q.query.set("@viewXml", "'" + viewXml + "'");
                        return [4 /*yield*/, spPost(q)];
                    case 1:
                        data = _a.sent();
                        // data will be a string, so we parse it again
                        return [2 /*return*/, JSON.parse(hOP(data, "RenderListData") ? data.RenderListData : data)];
                }
            });
        });
    };
    /**
     * Returns the data for the specified query view
     *
     * @param parameters The parameters to be used to render list data as JSON string.
     * @param overrideParams The parameters that are used to override and extend the regular SPRenderListDataParameters.
     * @param query Allows setting of query parameters
     */
    _List.prototype.renderListDataAsStream = function (parameters, overrideParams, query) {
        if (overrideParams === void 0) { overrideParams = null; }
        if (query === void 0) { query = new Map(); }
        if (hOP(parameters, "RenderOptions") && isArray(parameters.RenderOptions)) {
            parameters.RenderOptions = parameters.RenderOptions.reduce(function (v, c) { return v + c; });
        }
        var bodyOptions = { parameters: util_assign(metadata("SP.RenderListDataParameters"), parameters) };
        if (objectDefinedNotNull(overrideParams)) {
            bodyOptions = util_assign(bodyOptions, { overrideParameters: util_assign(metadata("SP.RenderListDataOverrideParameters"), overrideParams) });
        }
        var clone = this.clone(List, "RenderListDataAsStream", true, true);
        if (query && query.size > 0) {
            query.forEach(function (v, k) { return clone.query.set(k, v); });
        }
        return spPost(clone, body(bodyOptions));
    };
    /**
     * Gets the field values and field schema attributes for a list item.
     * @param itemId Item id of the item to render form data for
     * @param formId The id of the form
     * @param mode Enum representing the control mode of the form (Display, Edit, New)
     */
    _List.prototype.renderListFormData = function (itemId, formId, mode) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(List, "renderlistformdata(itemid=" + itemId + ", formid='" + formId + "', mode='" + mode + "')"))];
                    case 1:
                        data = _a.sent();
                        // data will be a string, so we parse it again
                        return [2 /*return*/, JSON.parse(hOP(data, "RenderListFormData") ? data.RenderListFormData : data)];
                }
            });
        });
    };
    /**
     * Reserves a list item ID for idempotent list item creation.
     */
    _List.prototype.reserveListItemId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(List, "reservelistitemid"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, hOP(data, "ReserveListItemId") ? data.ReserveListItemId : data];
                }
            });
        });
    };
    /**
     * Returns the ListItemEntityTypeFullName for this list, used when adding/updating list items. Does not support batching.
     */
    _List.prototype.getListItemEntityTypeFullName = function () {
        // we cache these requests as the entity name doesn't change and we can save traffic
        // this is justified as this method generates our second highest number of monthly executions ahead of item add and update
        return this.clone(List, null, false).select("ListItemEntityTypeFullName").usingCaching({
            expiration: dateAdd(new Date(), "day", 5),
            key: "PnPjs-ListEntityName:" + this.toUrl(),
            storeName: "local",
        })().then(function (o) { return o.ListItemEntityTypeFullName; });
    };
    /**
     * Creates an item using path (in a folder), validates and sets its field values.
     *
     * @param formValues The fields to change and their new values.
     * @param decodedUrl Path decoded url; folder's server relative path.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     * @param checkInComment Optional check in comment.
     * @param additionalProps Optional set of additional properties LeafName new document file name,
     */
    _List.prototype.addValidateUpdateItemUsingPath = function (formValues, decodedUrl, bNewDocumentUpdate, checkInComment, additionalProps) {
        if (bNewDocumentUpdate === void 0) { bNewDocumentUpdate = false; }
        return __awaiter(this, void 0, void 0, function () {
            var addProps, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addProps = {
                            FolderPath: toResourcePath(decodedUrl),
                        };
                        if (objectDefinedNotNull(additionalProps)) {
                            if (additionalProps.leafName) {
                                addProps.LeafName = toResourcePath(additionalProps.leafName);
                            }
                            if (additionalProps.objectType) {
                                addProps.UnderlyingObjectType = additionalProps.objectType;
                            }
                        }
                        return [4 /*yield*/, spPost(this.clone(List, "AddValidateUpdateItemUsingPath()"), body({
                                bNewDocumentUpdate: bNewDocumentUpdate,
                                checkInComment: checkInComment,
                                formValues: formValues,
                                listItemCreateInfo: util_assign(metadata("SP.ListItemCreationInformationUsingPath"), addProps),
                            }))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, hOP(res, "AddValidateUpdateItemUsingPath") ? res.AddValidateUpdateItemUsingPath : res];
                }
            });
        });
    };
    /**
     * Gets the parent information for this item's list and web
     */
    _List.prototype.getParentInfos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urlInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.select("Id", "RootFolder/UniqueId", "RootFolder/ServerRelativeUrl", "RootFolder/ServerRelativePath", "ParentWeb/Id", "ParentWeb/Url", "ParentWeb/ServerRelativeUrl", "ParentWeb/ServerRelativePath").expand("RootFolder", "ParentWeb")()];
                    case 1:
                        urlInfo = _a.sent();
                        return [2 /*return*/, {
                                List: {
                                    Id: urlInfo.Id,
                                    RootFolderServerRelativePath: urlInfo.RootFolder.ServerRelativePath,
                                    RootFolderServerRelativeUrl: urlInfo.RootFolder.ServerRelativeUrl,
                                    RootFolderUniqueId: urlInfo.RootFolder.UniqueId,
                                },
                                ParentWeb: {
                                    Id: urlInfo.ParentWeb.Id,
                                    ServerRelativePath: urlInfo.ParentWeb.ServerRelativePath,
                                    ServerRelativeUrl: urlInfo.ParentWeb.ServerRelativeUrl,
                                    Url: urlInfo.ParentWeb.Url,
                                },
                            }];
                }
            });
        });
    };
    __decorate([
        tag("l.update")
    ], _List.prototype, "update", null);
    __decorate([
        tag("l.getChanges")
    ], _List.prototype, "getChanges", null);
    __decorate([
        tag("l.CAMLQuery")
    ], _List.prototype, "getItemsByCAMLQuery", null);
    __decorate([
        tag("l.ChangesSinceToken")
    ], _List.prototype, "getListItemChangesSinceToken", null);
    __decorate([
        tag("l.recycle")
    ], _List.prototype, "recycle", null);
    __decorate([
        tag("l.renderListData")
    ], _List.prototype, "renderListData", null);
    __decorate([
        tag("l.AsStream")
    ], _List.prototype, "renderListDataAsStream", null);
    __decorate([
        tag("l.renderListFormData")
    ], _List.prototype, "renderListFormData", null);
    __decorate([
        tag("l.reserveListItemId")
    ], _List.prototype, "reserveListItemId", null);
    __decorate([
        tag("l.getListItemEntityTypeFullName")
    ], _List.prototype, "getListItemEntityTypeFullName", null);
    __decorate([
        tag("l.addValidateUpdateItemUsingPath")
    ], _List.prototype, "addValidateUpdateItemUsingPath", null);
    return _List;
}(_SharePointQueryableInstance));

var List = spInvokableFactory(_List);
/**
 * Enum representing the options of the RenderOptions property on IRenderListDataParameters interface
 */
var RenderListDataOptions;
(function (RenderListDataOptions) {
    RenderListDataOptions[RenderListDataOptions["None"] = 0] = "None";
    RenderListDataOptions[RenderListDataOptions["ContextInfo"] = 1] = "ContextInfo";
    RenderListDataOptions[RenderListDataOptions["ListData"] = 2] = "ListData";
    RenderListDataOptions[RenderListDataOptions["ListSchema"] = 4] = "ListSchema";
    RenderListDataOptions[RenderListDataOptions["MenuView"] = 8] = "MenuView";
    RenderListDataOptions[RenderListDataOptions["ListContentType"] = 16] = "ListContentType";
    RenderListDataOptions[RenderListDataOptions["FileSystemItemId"] = 32] = "FileSystemItemId";
    RenderListDataOptions[RenderListDataOptions["ClientFormSchema"] = 64] = "ClientFormSchema";
    RenderListDataOptions[RenderListDataOptions["QuickLaunch"] = 128] = "QuickLaunch";
    RenderListDataOptions[RenderListDataOptions["Spotlight"] = 256] = "Spotlight";
    RenderListDataOptions[RenderListDataOptions["Visualization"] = 512] = "Visualization";
    RenderListDataOptions[RenderListDataOptions["ViewMetadata"] = 1024] = "ViewMetadata";
    RenderListDataOptions[RenderListDataOptions["DisableAutoHyperlink"] = 2048] = "DisableAutoHyperlink";
    RenderListDataOptions[RenderListDataOptions["EnableMediaTAUrls"] = 4096] = "EnableMediaTAUrls";
    RenderListDataOptions[RenderListDataOptions["ParentInfo"] = 8192] = "ParentInfo";
    RenderListDataOptions[RenderListDataOptions["PageContextInfo"] = 16384] = "PageContextInfo";
    RenderListDataOptions[RenderListDataOptions["ClientSideComponentManifest"] = 32768] = "ClientSideComponentManifest";
})(RenderListDataOptions || (RenderListDataOptions = {}));
/**
 * Determines the display mode of the given control or view
 */
var ControlMode;
(function (ControlMode) {
    ControlMode[ControlMode["Display"] = 1] = "Display";
    ControlMode[ControlMode["Edit"] = 2] = "Edit";
    ControlMode[ControlMode["New"] = 3] = "New";
})(ControlMode || (ControlMode = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/items/types.js












/**
 * Describes a collection of Item objects
 *
 */
var _Items = /** @class */ (function (_super) {
    __extends(_Items, _super);
    function _Items() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Gets an Item by id
    *
    * @param id The integer id of the item to retrieve
    */
    _Items.prototype.getById = function (id) {
        return tag.configure(Item(this).concat("(" + id + ")"), "is.getById");
    };
    /**
     * Gets BCS Item by string id
     *
     * @param stringId The string id of the BCS item to retrieve
     */
    _Items.prototype.getItemByStringId = function (stringId) {
        // creates an item with the parent list path and append out method call
        return tag.configure(Item(this.parentUrl, "getItemByStringId('" + stringId + "')"), "is.getItemByStringId");
    };
    /**
     * Skips the specified number of items (https://msdn.microsoft.com/en-us/library/office/fp142385.aspx#sectionSection6)
     *
     * @param skip The starting id where the page should start, use with top to specify pages
     * @param reverse It true the PagedPrev=true parameter is added allowing backwards navigation in the collection
     */
    _Items.prototype.skip = function (skip, reverse) {
        if (reverse === void 0) { reverse = false; }
        if (reverse) {
            this.query.set("$skiptoken", encodeURIComponent("Paged=TRUE&PagedPrev=TRUE&p_ID=" + skip));
        }
        else {
            this.query.set("$skiptoken", encodeURIComponent("Paged=TRUE&p_ID=" + skip));
        }
        return this;
    };
    /**
     * Gets a collection designed to aid in paging through data
     *
     */
    _Items.prototype.getPaged = function () {
        return this.usingParser(new PagedItemCollectionParser(this))();
    };
    /**
     * Gets all the items in a list, regardless of count. Does not support batching or caching
     *
     *  @param requestSize Number of items to return in each request (Default: 2000)
     *  @param acceptHeader Allows for setting the value of the Accept header for SP 2013 support
     */
    _Items.prototype.getAll = function (requestSize, acceptHeader) {
        if (requestSize === void 0) { requestSize = 2000; }
        if (acceptHeader === void 0) { acceptHeader = "application/json;odata=nometadata"; }
        Logger.write("Calling items.getAll should be done sparingly. Ensure this is the correct choice. If you are unsure, it is not.", 2 /* Warning */);
        // this will be used for the actual query
        // and we set no metadata here to try and reduce traffic
        var items = Items(this, "").top(requestSize).configure({
            headers: {
                "Accept": acceptHeader,
            },
        });
        // let's copy over the odata query params that can be applied
        // $top - allow setting the page size this way (override what we did above)
        // $select - allow picking the return fields (good behavior)
        // $filter - allow setting a filter, though this may fail due for large lists
        this.query.forEach(function (v, k) {
            if (/^\$select|filter|top|expand$/i.test(k)) {
                items.query.set(k, v);
            }
        });
        // give back the promise
        return new Promise(function (resolve, reject) {
            // this will eventually hold the items we return
            var itemsCollector = [];
            // action that will gather up our results recursively
            var gatherer = function (last) {
                // collect that set of results
                [].push.apply(itemsCollector, last.results);
                // if we have more, repeat - otherwise resolve with the collected items
                if (last.hasNext) {
                    last.getNext().then(gatherer).catch(reject);
                }
                else {
                    resolve(itemsCollector);
                }
            };
            // start the cycle
            items.getPaged().then(gatherer).catch(reject);
        });
    };
    /**
     * Adds a new item to the collection
     *
     * @param properties The new items's properties
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    _Items.prototype.add = function (properties, listItemEntityTypeFullName) {
        if (properties === void 0) { properties = {}; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        return __awaiter(this, void 0, void 0, function () {
            var removeDependency, listItemEntityType, postBody, promise;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, this.ensureListItemEntityTypeName(listItemEntityTypeFullName)];
                    case 1:
                        listItemEntityType = _a.sent();
                        postBody = body(util_assign(metadata(listItemEntityType), properties));
                        promise = spPost(this.clone(Items, ""), postBody).then(function (data) {
                            return {
                                data: data,
                                item: _this.getById(data.Id),
                            };
                        });
                        removeDependency();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    _Items.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, candidatelistItemEntityTypeFullName ?
                        candidatelistItemEntityTypeFullName :
                        this.getParent(List).getListItemEntityTypeFullName()];
            });
        });
    };
    __decorate([
        tag("is.getPaged")
    ], _Items.prototype, "getPaged", null);
    __decorate([
        tag("is.getAll")
    ], _Items.prototype, "getAll", null);
    __decorate([
        tag("is.add")
    ], _Items.prototype, "add", null);
    _Items = __decorate([
        defaultPath("items")
    ], _Items);
    return _Items;
}(_SharePointQueryableCollection));

var Items = spInvokableFactory(_Items);
/**
 * Descrines a single Item instance
 *
 */
var _Item = /** @class */ (function (_super) {
    __extends(_Item, _super);
    function _Item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("i");
        return _this;
    }
    Object.defineProperty(_Item.prototype, "effectiveBasePermissions", {
        /**
         * Gets the effective base permissions for the item
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "EffectiveBasePermissions"), "i.effectiveBasePermissions");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "effectiveBasePermissionsForUI", {
        /**
         * Gets the effective base permissions for the item in a UI context
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "EffectiveBasePermissionsForUI"), "i.effectiveBasePermissionsForUI");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesAsHTML", {
        /**
         * Gets the field values for this list item in their HTML representation
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableInstance(this, "FieldValuesAsHTML"), "i.fvHTML");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesAsText", {
        /**
         * Gets the field values for this list item in their text representation
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableInstance(this, "FieldValuesAsText"), "i.fvText");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "fieldValuesForEdit", {
        /**
         * Gets the field values for this list item for use in editing controls
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableInstance(this, "FieldValuesForEdit"), "i.fvEdit");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "versions", {
        /**
         * Gets the collection of versions associated with this item
         */
        get: function () {
            return tag.configure(ItemVersions(this), "i.versions");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Item.prototype, "list", {
        get: function () {
            return this.getParent(List, this.parentUrl.substr(0, this.parentUrl.lastIndexOf("/")));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Updates this list instance with the supplied properties
     *
     * @param properties A plain object hash of values to update for the list
     * @param eTag Value used in the IF-Match header, by default "*"
     * @param listItemEntityTypeFullName The type name of the list's entities
     */
    _Item.prototype.update = function (properties, eTag, listItemEntityTypeFullName) {
        if (eTag === void 0) { eTag = "*"; }
        if (listItemEntityTypeFullName === void 0) { listItemEntityTypeFullName = null; }
        return __awaiter(this, void 0, void 0, function () {
            var removeDependency, listItemEntityType, postBody, poster, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, this.ensureListItemEntityTypeName(listItemEntityTypeFullName)];
                    case 1:
                        listItemEntityType = _a.sent();
                        postBody = body(util_assign(metadata(listItemEntityType), properties), headers({
                            "IF-Match": eTag,
                            "X-HTTP-Method": "MERGE",
                        }));
                        removeDependency();
                        poster = tag.configure(this.clone(Item).usingParser(new ItemUpdatedParser()), "i.update");
                        return [4 /*yield*/, spPost(poster, postBody)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                item: this,
                            }];
                }
            });
        });
    };
    /**
     * Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _Item.prototype.recycle = function () {
        return spPost(this.clone(Item, "recycle"));
    };
    /**
     * Deletes the item object with options.
     *
     * @param parameters Specifies the options to use when deleting a item.
     */
    _Item.prototype.deleteWithParams = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, spPost(this.clone(Item, "DeleteWithParameters"), body({ parameters: parameters }))];
            });
        });
    };
    /**
     * Gets a string representation of the full URL to the WOPI frame.
     * If there is no associated WOPI application, or no associated action, an empty string is returned.
     *
     * @param action Display mode: 0: view, 1: edit, 2: mobileView, 3: interactivePreview
     */
    _Item.prototype.getWopiFrameUrl = function (action) {
        if (action === void 0) { action = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var i, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = this.clone(Item, "getWOPIFrameUrl(@action)");
                        i.query.set("@action", action);
                        return [4 /*yield*/, spPost(i)];
                    case 1:
                        data = _a.sent();
                        // handle verbose mode
                        if (hOP(data, "GetWOPIFrameUrl")) {
                            return [2 /*return*/, data.GetWOPIFrameUrl];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Validates and sets the values of the specified collection of fields for the list item.
     *
     * @param formValues The fields to change and their new values.
     * @param bNewDocumentUpdate true if the list item is a document being updated after upload; otherwise false.
     */
    _Item.prototype.validateUpdateListItem = function (formValues, bNewDocumentUpdate) {
        if (bNewDocumentUpdate === void 0) { bNewDocumentUpdate = false; }
        return spPost(this.clone(Item, "validateupdatelistitem"), body({ formValues: formValues, bNewDocumentUpdate: bNewDocumentUpdate }));
    };
    /**
     * Gets the parent information for this item's list and web
     */
    _Item.prototype.getParentInfos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urlInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.select("Id", "ParentList/Id", "ParentList/Title", "ParentList/RootFolder/UniqueId", "ParentList/RootFolder/ServerRelativeUrl", "ParentList/RootFolder/ServerRelativePath", "ParentList/ParentWeb/Id", "ParentList/ParentWeb/Url", "ParentList/ParentWeb/ServerRelativeUrl", "ParentList/ParentWeb/ServerRelativePath").expand("ParentList", "ParentList/RootFolder", "ParentList/ParentWeb")()];
                    case 1:
                        urlInfo = _a.sent();
                        return [2 /*return*/, {
                                Item: {
                                    Id: urlInfo.Id,
                                },
                                ParentList: {
                                    Id: urlInfo.ParentList.Id,
                                    Title: urlInfo.ParentList.Title,
                                    RootFolderServerRelativePath: urlInfo.ParentList.RootFolder.ServerRelativePath,
                                    RootFolderServerRelativeUrl: urlInfo.ParentList.RootFolder.ServerRelativeUrl,
                                    RootFolderUniqueId: urlInfo.ParentList.RootFolder.UniqueId,
                                },
                                ParentWeb: {
                                    Id: urlInfo.ParentList.ParentWeb.Id,
                                    ServerRelativePath: urlInfo.ParentList.ParentWeb.ServerRelativePath,
                                    ServerRelativeUrl: urlInfo.ParentList.ParentWeb.ServerRelativeUrl,
                                    Url: urlInfo.ParentList.ParentWeb.Url,
                                },
                            }];
                }
            });
        });
    };
    _Item.prototype.setImageField = function (fieldName, imageName, imageContent) {
        return __awaiter(this, void 0, void 0, function () {
            var contextInfo, webUrl, q, result, itemInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getParentInfos()];
                    case 1:
                        contextInfo = _a.sent();
                        webUrl = extractWebUrl(this.toUrl());
                        q = SharePointQueryable(webUrl, "/_api/web/UploadImage");
                        q.concat("(listTitle=@a1,imageName=@a2,listId=@a3,itemId=@a4)");
                        q.query.set("@a1", "'" + escapeQueryStrValue(contextInfo.ParentList.Title) + "'");
                        q.query.set("@a2", "'" + escapeQueryStrValue(imageName) + "'");
                        q.query.set("@a3", "'" + escapeQueryStrValue(contextInfo.ParentList.Id) + "'");
                        q.query.set("@a4", contextInfo.Item.Id);
                        return [4 /*yield*/, spPost(q, { body: imageContent })];
                    case 2:
                        result = _a.sent();
                        itemInfo = {
                            "type": "thumbnail",
                            "fileName": result.Name,
                            "nativeFile": {},
                            "fieldName": fieldName,
                            "serverUrl": contextInfo.ParentWeb.Url.replace(contextInfo.ParentWeb.ServerRelativeUrl, ""),
                            "serverRelativeUrl": result.ServerRelativeUrl,
                            "id": result.UniqueId,
                        };
                        return [2 /*return*/, this.validateUpdateListItem([{
                                    FieldName: fieldName,
                                    FieldValue: JSON.stringify(itemInfo),
                                }])];
                }
            });
        });
    };
    /**
     * Ensures we have the proper list item entity type name, either from the value provided or from the list
     *
     * @param candidatelistItemEntityTypeFullName The potential type name
     */
    _Item.prototype.ensureListItemEntityTypeName = function (candidatelistItemEntityTypeFullName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, candidatelistItemEntityTypeFullName ?
                        candidatelistItemEntityTypeFullName :
                        this.list.getListItemEntityTypeFullName()];
            });
        });
    };
    __decorate([
        tag("i.recycle")
    ], _Item.prototype, "recycle", null);
    __decorate([
        tag("i.del-params")
    ], _Item.prototype, "deleteWithParams", null);
    __decorate([
        tag("i.getWopiFrameUrl")
    ], _Item.prototype, "getWopiFrameUrl", null);
    __decorate([
        tag("i.validateUpdateListItem")
    ], _Item.prototype, "validateUpdateListItem", null);
    return _Item;
}(_SharePointQueryableInstance));

var Item = spInvokableFactory(_Item);
/**
 * Describes a collection of Version objects
 *
 */
var _ItemVersions = /** @class */ (function (_super) {
    __extends(_ItemVersions, _super);
    function _ItemVersions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    _ItemVersions.prototype.getById = function (versionId) {
        return tag.configure(ItemVersion(this).concat("(" + versionId + ")"), "iv.getById");
    };
    _ItemVersions = __decorate([
        defaultPath("versions")
    ], _ItemVersions);
    return _ItemVersions;
}(_SharePointQueryableCollection));

var ItemVersions = spInvokableFactory(_ItemVersions);
/**
 * Describes a single Version instance
 *
 */
var _ItemVersion = /** @class */ (function (_super) {
    __extends(_ItemVersion, _super);
    function _ItemVersion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("iv");
        return _this;
    }
    return _ItemVersion;
}(_SharePointQueryableInstance));

var ItemVersion = spInvokableFactory(_ItemVersion);
/**
 * Provides paging functionality for list items
 */
var PagedItemCollection = /** @class */ (function () {
    function PagedItemCollection(parent, nextUrl, results) {
        this.parent = parent;
        this.nextUrl = nextUrl;
        this.results = results;
    }
    Object.defineProperty(PagedItemCollection.prototype, "hasNext", {
        /**
         * If true there are more results available in the set, otherwise there are not
         */
        get: function () {
            return typeof this.nextUrl === "string" && this.nextUrl.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the next set of results, or resolves to null if no results are available
     */
    PagedItemCollection.prototype.getNext = function () {
        if (this.hasNext) {
            var items = tag.configure(Items(this.nextUrl, null).configureFrom(this.parent), "ip.getNext");
            return items.getPaged();
        }
        return new Promise(function (r) { return r(null); });
    };
    return PagedItemCollection;
}());

var PagedItemCollectionParser = /** @class */ (function (_super) {
    __extends(PagedItemCollectionParser, _super);
    function PagedItemCollectionParser(_parent) {
        var _this = _super.call(this) || this;
        _this._parent = _parent;
        return _this;
    }
    PagedItemCollectionParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                r.json().then(function (json) {
                    var nextUrl = hOP(json, "d") && hOP(json.d, "__next") ? json.d.__next : json["odata.nextLink"];
                    resolve(new PagedItemCollection(_this._parent, nextUrl, _this.parseODataJSON(json)));
                });
            }
        });
    };
    return PagedItemCollectionParser;
}(ODataParser));
var ItemUpdatedParser = /** @class */ (function (_super) {
    __extends(ItemUpdatedParser, _super);
    function ItemUpdatedParser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemUpdatedParser.prototype.parse = function (r) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.handleError(r, reject)) {
                resolve({
                    "odata.etag": r.headers.get("etag"),
                });
            }
        });
    };
    return ItemUpdatedParser;
}(ODataParser));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/items/list.js



addProp(_List, "items", Items);
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/items/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/types.js












/**
 * Describes a collection of File objects
 *
 */
var _Files = /** @class */ (function (_super) {
    __extends(_Files, _super);
    function _Files() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a File by filename
     *
     * @param name The name of the file, including extension.
     */
    _Files.prototype.getByName = function (name) {
        if (/%#/.test(name)) {
            throw Error("For file names containing % or # please use web.getFileByServerRelativePath");
        }
        return tag.configure(File(this).concat("('" + escapeQueryStrValue(name) + "')"), "fis.getByName");
    };
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The file contents
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @returns The new File and the raw response.
     */
    _Files.prototype.add = function (url, content, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(Files(this, "add(overwrite=" + shouldOverWrite + ",url='" + escapeQueryStrValue(url) + "')"), {
                            body: content,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: this.getByName(url),
                            }];
                }
            });
        });
    };
    /**
     * Adds a file using the pound percent safe methods
     *
     * @param url Excoded url of the file
     * @param content The file content
     * @param parameters Additional parameters to control method behavior
     */
    _Files.prototype.addUsingPath = function (url, content, parameters) {
        if (parameters === void 0) { parameters = { Overwrite: false }; }
        return __awaiter(this, void 0, void 0, function () {
            var path, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = ["AddUsingPath(decodedurl='" + escapeQueryStrValue(url) + "'"];
                        if (parameters) {
                            if (parameters.Overwrite) {
                                path.push(",Overwrite=true");
                            }
                            if (parameters.AutoCheckoutOnInvalidData) {
                                path.push(",AutoCheckoutOnInvalidData=true");
                            }
                            if (!stringIsNullOrEmpty(parameters.XorHash)) {
                                path.push(",XorHash=" + escapeQueryStrValue(parameters.XorHash));
                            }
                        }
                        path.push(")");
                        return [4 /*yield*/, spPost(Files(this, path.join("")), { body: content })];
                    case 1:
                        resp = _a.sent();
                        return [2 /*return*/, {
                                data: resp,
                                file: File(odataUrlFrom(resp)),
                            }];
                }
            });
        });
    };
    /**
     * Uploads a file. Not supported for batching
     *
     * @param url The folder-relative url of the file.
     * @param content The Blob file content to add
     * @param progress A callback function which can be used to track the progress of the upload
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten? (default: true)
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     * @returns The new File and the raw response.
     */
    _Files.prototype.addChunked = function (url, content, progress, shouldOverWrite, chunkSize) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        if (chunkSize === void 0) { chunkSize = 10485760; }
        return __awaiter(this, void 0, void 0, function () {
            var response, odataUrl, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Files, "add(overwrite=" + shouldOverWrite + ",url='" + escapeQueryStrValue(url) + "')", false))];
                    case 1:
                        response = _a.sent();
                        odataUrl = odataUrlFrom(response);
                        if (!stringIsNullOrEmpty(odataUrl) && /%27/i.test(odataUrl)) {
                            odataUrl = odataUrl.replace(/%27/ig, "''");
                        }
                        file = File(odataUrl);
                        return [4 /*yield*/, file.setContentChunked(content, progress, chunkSize)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds a ghosted file to an existing list or document library. Not supported for batching.
     *
     * @param fileUrl The server-relative url where you want to save the file.
     * @param templateFileType The type of use to create the file.
     * @returns The template file that was added and the raw response.
     */
    _Files.prototype.addTemplateFile = function (fileUrl, templateFileType) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Files, "addTemplateFile(urloffile='" + escapeQueryStrValue(fileUrl) + "',templatefiletype=" + templateFileType + ")", false))];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: File(odataUrlFrom(response)),
                            }];
                }
            });
        });
    };
    __decorate([
        tag("fis.add")
    ], _Files.prototype, "add", null);
    __decorate([
        tag("fis.addUsingPath")
    ], _Files.prototype, "addUsingPath", null);
    __decorate([
        tag("fis.addChunked")
    ], _Files.prototype, "addChunked", null);
    __decorate([
        tag("fis.addTemplateFile")
    ], _Files.prototype, "addTemplateFile", null);
    _Files = __decorate([
        defaultPath("files")
    ], _Files);
    return _Files;
}(_SharePointQueryableCollection));

var Files = spInvokableFactory(_Files);
/**
 * Describes a single File instance
 *
 */
var _File = /** @class */ (function (_super) {
    __extends(_File, _super);
    function _File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("fi");
        return _this;
    }
    Object.defineProperty(_File.prototype, "listItemAllFields", {
        /**
         * Gets a value that specifies the list item field values for the list item corresponding to the file.
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableInstance(this, "listItemAllFields"), "fi.listItemAllFields");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_File.prototype, "versions", {
        /**
         * Gets a collection of versions
         *
         */
        get: function () {
            return tag.configure(Versions(this), "fi.versions");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Approves the file submitted for content approval with the specified comment.
     * Only documents in lists that are enabled for content approval can be approved.
     *
     * @param comment The comment for the approval.
     */
    _File.prototype.approve = function (comment) {
        if (comment === void 0) { comment = ""; }
        return spPost(this.clone(File, "approve(comment='" + escapeQueryStrValue(comment) + "')"));
    };
    /**
     * Stops the chunk upload session without saving the uploaded data. Does not support batching.
     * If the file doesn’t already exist in the library, the partially uploaded file will be deleted.
     * Use this in response to user action (as in a request to cancel an upload) or an error or exception.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     */
    _File.prototype.cancelUpload = function (uploadId) {
        return spPost(this.clone(File, "cancelUpload(uploadId=guid'" + uploadId + "')", false));
    };
    /**
     * Checks the file in to a document library based on the check-in type.
     *
     * @param comment A comment for the check-in. Its length must be <= 1023.
     * @param checkinType The check-in type for the file.
     */
    _File.prototype.checkin = function (comment, checkinType) {
        if (comment === void 0) { comment = ""; }
        if (checkinType === void 0) { checkinType = CheckinType.Major; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return spPost(this.clone(File, "checkin(comment='" + escapeQueryStrValue(comment) + "',checkintype=" + checkinType + ")"));
    };
    /**
     * Checks out the file from a document library.
     */
    _File.prototype.checkout = function () {
        return spPost(this.clone(File, "checkout"));
    };
    /**
     * Copies the file to the destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     */
    _File.prototype.copyTo = function (url, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return spPost(this.clone(File, "copyTo(strnewurl='" + escapeQueryStrValue(url) + "',boverwrite=" + shouldOverWrite + ")"));
    };
    /**
     * Copies the file by path to destination path.
     * Also works with different site collections.
     *
     * @param destUrl The absolute url or server relative url of the destination file path to copy to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     * @param keepBoth Keep both if file with the same name in the same location already exists? Only relevant when shouldOverWrite is set to false.
     */
    _File.prototype.copyByPath = function (destUrl, shouldOverWrite, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = extractWebUrl(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, spPost(File(webBaseUrl, "/_api/SP.MoveCopyUtil.CopyFileByPath(overwrite=@a1)?@a1=" + shouldOverWrite), body({
                                destPath: toResourcePath(isUrlAbsolute(destUrl) ? destUrl : "" + hostUrl + destUrl),
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: true,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: toResourcePath(isUrlAbsolute(srcUrl) ? srcUrl : "" + hostUrl + srcUrl),
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Denies approval for a file that was submitted for content approval.
     * Only documents in lists that are enabled for content approval can be denied.
     *
     * @param comment The comment for the denial.
     */
    _File.prototype.deny = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return spPost(this.clone(File, "deny(comment='" + escapeQueryStrValue(comment) + "')"));
    };
    /**
     * Moves the file to the specified destination url.
     *
     * @param url The absolute url or server relative url of the destination file path to move to.
     * @param moveOperations The bitwise MoveOperations value for how to move the file.
     */
    _File.prototype.moveTo = function (url, moveOperations) {
        if (moveOperations === void 0) { moveOperations = MoveOperations.Overwrite; }
        return spPost(this.clone(File, "moveTo(newurl='" + escapeQueryStrValue(url) + "',flags=" + moveOperations + ")"));
    };
    /**
     * Moves the file by path to the specified destination url.
     * Also works with different site collections.
     *
     * @param destUrl The absolute url or server relative url of the destination file path to move to.
     * @param shouldOverWrite Should a file with the same name in the same location be overwritten?
     * @param keepBoth Keep both if file with the same name in the same location already exists? Only relevant when shouldOverWrite is set to false.
     */
    _File.prototype.moveByPath = function (destUrl, shouldOverWrite, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, srcUrl, absoluteUrl, webBaseUrl, hostUrl;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl")()];
                    case 1:
                        _a = _b.sent(), srcUrl = _a.ServerRelativeUrl, absoluteUrl = _a["odata.id"];
                        webBaseUrl = extractWebUrl(absoluteUrl);
                        hostUrl = webBaseUrl.replace("://", "___").split("/")[0].replace("___", "://");
                        return [4 /*yield*/, spPost(File(webBaseUrl, "/_api/SP.MoveCopyUtil.MoveFileByPath(overwrite=@a1)?@a1=" + shouldOverWrite), body({
                                destPath: toResourcePath(isUrlAbsolute(destUrl) ? destUrl : "" + hostUrl + destUrl),
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: false,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: toResourcePath(isUrlAbsolute(srcUrl) ? srcUrl : "" + hostUrl + srcUrl),
                            }))];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Submits the file for content approval with the specified comment.
     *
     * @param comment The comment for the published file. Its length must be <= 1023.
     */
    _File.prototype.publish = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return spPost(this.clone(File, "publish(comment='" + escapeQueryStrValue(comment) + "')"));
    };
    /**
     * Moves the file to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     *
     * @returns The GUID of the recycled file.
     */
    _File.prototype.recycle = function () {
        return spPost(this.clone(File, "recycle"));
    };
    /**
     * Deletes the file object with options.
     *
     * @param parameters Specifies the options to use when deleting a file.
     */
    _File.prototype.deleteWithParams = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, spPost(this.clone(File, "DeleteWithParameters"), body({ parameters: parameters }))];
            });
        });
    };
    /**
     * Reverts an existing checkout for the file.
     *
     */
    _File.prototype.undoCheckout = function () {
        return spPost(this.clone(File, "undoCheckout"));
    };
    /**
     * Removes the file from content approval or unpublish a major version.
     *
     * @param comment The comment for the unpublish operation. Its length must be <= 1023.
     */
    _File.prototype.unpublish = function (comment) {
        if (comment === void 0) { comment = ""; }
        if (comment.length > 1023) {
            throw Error("The maximum comment length is 1023 characters.");
        }
        return spPost(this.clone(File, "unpublish(comment='" + escapeQueryStrValue(comment) + "')"));
    };
    /**
     * Checks to see if the file represented by this object exists
     *
     */
    _File.prototype.exists = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.clone(File).select("Exists")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.Exists];
                    case 2:
                        e_1 = _a.sent();
                        // this treats any error here as the file not existing, which
                        // might not be true, but is good enough.
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the contents of the file as text. Not supported in batching.
     *
     */
    _File.prototype.getText = function () {
        return this.clone(File, "$value", false).usingParser(new TextParser())(headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of the file as a blob, does not work in Node.js. Not supported in batching.
     *
     */
    _File.prototype.getBlob = function () {
        return this.clone(File, "$value", false).usingParser(new BlobParser())(headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    _File.prototype.getBuffer = function () {
        return this.clone(File, "$value", false).usingParser(new BufferParser())(headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js. Not supported in batching.
     */
    _File.prototype.getJSON = function () {
        return this.clone(File, "$value", false).usingParser(new JSONParser())(headers({ "binaryStringResponseBody": "true" }));
    };
    /**
     * Sets the content of a file, for large files use setContentChunked. Not supported in batching.
     *
     * @param content The file content
     *
     */
    _File.prototype.setContent = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(File, "$value", false), {
                            body: content,
                            headers: {
                                "X-HTTP-Method": "PUT",
                            },
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, File(this)];
                }
            });
        });
    };
    /**
     * Gets the associated list item for this file, loading the default properties
     */
    _File.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var q, d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.listItemAllFields;
                        return [4 /*yield*/, q.select.apply(q, __spreadArray([], __read(selects)))()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, util_assign(Item(odataUrlFrom(d)), d)];
                }
            });
        });
    };
    /**
     * Sets the contents of a file using a chunked upload approach. Not supported in batching.
     *
     * @param file The file to upload
     * @param progress A callback function which can be used to track the progress of the upload
     * @param chunkSize The size of each file slice, in bytes (default: 10485760)
     */
    _File.prototype.setContentChunked = function (file, progress, chunkSize) {
        if (chunkSize === void 0) { chunkSize = 10485760; }
        return __awaiter(this, void 0, void 0, function () {
            var fileSize, totalBlocks, uploadId, currentPointer, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!isFunc(progress)) {
                            progress = function () { return null; };
                        }
                        fileSize = file.size;
                        totalBlocks = parseInt((fileSize / chunkSize).toString(), 10) + ((fileSize % chunkSize === 0) ? 1 : 0);
                        uploadId = util_getGUID();
                        // report that we are starting
                        progress({ uploadId: uploadId, blockNumber: 1, chunkSize: chunkSize, currentPointer: 0, fileSize: fileSize, stage: "starting", totalBlocks: totalBlocks });
                        return [4 /*yield*/, this.startUpload(uploadId, file.slice(0, chunkSize))];
                    case 1:
                        currentPointer = _a.sent();
                        i = 2;
                        _a.label = 2;
                    case 2:
                        if (!(i < totalBlocks)) return [3 /*break*/, 5];
                        progress({ uploadId: uploadId, blockNumber: i, chunkSize: chunkSize, currentPointer: currentPointer, fileSize: fileSize, stage: "continue", totalBlocks: totalBlocks });
                        return [4 /*yield*/, this.continueUpload(uploadId, currentPointer, file.slice(currentPointer, currentPointer + chunkSize))];
                    case 3:
                        currentPointer = _a.sent();
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5:
                        progress({ uploadId: uploadId, blockNumber: totalBlocks, chunkSize: chunkSize, currentPointer: currentPointer, fileSize: fileSize, stage: "finishing", totalBlocks: totalBlocks });
                        return [2 /*return*/, this.finishUpload(uploadId, currentPointer, file.slice(currentPointer))];
                }
            });
        });
    };
    /**
     * Starts a new chunk upload session and uploads the first fragment.
     * The current file content is not changed when this method completes.
     * The method is idempotent (and therefore does not change the result) as long as you use the same values for uploadId and stream.
     * The upload session ends either when you use the CancelUpload method or when you successfully
     * complete the upload session by passing the rest of the file contents through the ContinueUpload and FinishUpload methods.
     * The StartUpload and ContinueUpload methods return the size of the running total of uploaded data in bytes,
     * so you can pass those return values to subsequent uses of ContinueUpload and FinishUpload.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    _File.prototype.startUpload = function (uploadId, fragment) {
        return __awaiter(this, void 0, void 0, function () {
            var n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(File, "startUpload(uploadId=guid'" + uploadId + "')", false), { body: fragment })];
                    case 1:
                        n = _a.sent();
                        if (typeof n === "object") {
                            // When OData=verbose the payload has the following shape:
                            // { StartUpload: "10485760" }
                            n = n.StartUpload;
                        }
                        return [2 /*return*/, parseFloat(n)];
                }
            });
        });
    };
    /**
     * Continues the chunk upload session with an additional fragment.
     * The current file content is not changed.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The size of the total uploaded data in bytes.
     */
    _File.prototype.continueUpload = function (uploadId, fileOffset, fragment) {
        return __awaiter(this, void 0, void 0, function () {
            var n;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(File, "continueUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false), { body: fragment })];
                    case 1:
                        n = _a.sent();
                        if (typeof n === "object") {
                            // When OData=verbose the payload has the following shape:
                            // { ContinueUpload: "20971520" }
                            n = n.ContinueUpload;
                        }
                        return [2 /*return*/, parseFloat(n)];
                }
            });
        });
    };
    /**
     * Uploads the last file fragment and commits the file. The current file content is changed when this method completes.
     * Use the uploadId value that was passed to the StartUpload method that started the upload session.
     * This method is currently available only on Office 365.
     *
     * @param uploadId The unique identifier of the upload session.
     * @param fileOffset The size of the offset into the file where the fragment starts.
     * @param fragment The file contents.
     * @returns The newly uploaded file.
     */
    _File.prototype.finishUpload = function (uploadId, fileOffset, fragment) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(File, "finishUpload(uploadId=guid'" + uploadId + "',fileOffset=" + fileOffset + ")", false), { body: fragment })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: File(odataUrlFrom(response)),
                            }];
                }
            });
        });
    };
    __decorate([
        tag("fi.approve")
    ], _File.prototype, "approve", null);
    __decorate([
        tag("fi.cancelUpload")
    ], _File.prototype, "cancelUpload", null);
    __decorate([
        tag("fi.checkin")
    ], _File.prototype, "checkin", null);
    __decorate([
        tag("fi.checkout")
    ], _File.prototype, "checkout", null);
    __decorate([
        tag("fi.copyTo")
    ], _File.prototype, "copyTo", null);
    __decorate([
        tag("fi.copyByPath")
    ], _File.prototype, "copyByPath", null);
    __decorate([
        tag("fi.deny")
    ], _File.prototype, "deny", null);
    __decorate([
        tag("fi.moveTo")
    ], _File.prototype, "moveTo", null);
    __decorate([
        tag("fi.moveByPath")
    ], _File.prototype, "moveByPath", null);
    __decorate([
        tag("fi.publish")
    ], _File.prototype, "publish", null);
    __decorate([
        tag("fi.recycle")
    ], _File.prototype, "recycle", null);
    __decorate([
        tag("fi.del-params")
    ], _File.prototype, "deleteWithParams", null);
    __decorate([
        tag("fi.undoCheckout")
    ], _File.prototype, "undoCheckout", null);
    __decorate([
        tag("fi.unpublish")
    ], _File.prototype, "unpublish", null);
    __decorate([
        tag("fi.exists")
    ], _File.prototype, "exists", null);
    __decorate([
        tag("fi.getText")
    ], _File.prototype, "getText", null);
    __decorate([
        tag("fi.getBlob")
    ], _File.prototype, "getBlob", null);
    __decorate([
        tag("fi.getBuffer")
    ], _File.prototype, "getBuffer", null);
    __decorate([
        tag("fi.getJSON")
    ], _File.prototype, "getJSON", null);
    __decorate([
        tag("fi.setContent")
    ], _File.prototype, "setContent", null);
    __decorate([
        tag("fi.getItem")
    ], _File.prototype, "getItem", null);
    __decorate([
        tag("fi.startUpload")
    ], _File.prototype, "startUpload", null);
    __decorate([
        tag("fi.continueUpload")
    ], _File.prototype, "continueUpload", null);
    __decorate([
        tag("fi.finishUpload")
    ], _File.prototype, "finishUpload", null);
    return _File;
}(_SharePointQueryableInstance));

var File = spInvokableFactory(_File);
/**
 * Describes a collection of Version objects
 *
 */
var _Versions = /** @class */ (function (_super) {
    __extends(_Versions, _super);
    function _Versions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a version by id
     *
     * @param versionId The id of the version to retrieve
     */
    _Versions.prototype.getById = function (versionId) {
        return tag.configure(Version(this).concat("(" + versionId + ")"), "vers.getById");
    };
    /**
     * Deletes all the file version objects in the collection.
     *
     */
    _Versions.prototype.deleteAll = function () {
        return spPost(Versions(this, "deleteAll"));
    };
    /**
     * Deletes the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    _Versions.prototype.deleteById = function (versionId) {
        return spPost(this.clone(Versions, "deleteById(vid=" + versionId + ")"));
    };
    /**
     * Recycles the specified version of the file.
     *
     * @param versionId The ID of the file version to delete.
     */
    _Versions.prototype.recycleByID = function (versionId) {
        return spPost(this.clone(Versions, "recycleByID(vid=" + versionId + ")"));
    };
    /**
     * Deletes the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    _Versions.prototype.deleteByLabel = function (label) {
        return spPost(this.clone(Versions, "deleteByLabel(versionlabel='" + escapeQueryStrValue(label) + "')"));
    };
    /**
     * Recycles the file version object with the specified version label.
     *
     * @param label The version label of the file version to delete, for example: 1.2
     */
    _Versions.prototype.recycleByLabel = function (label) {
        return spPost(this.clone(Versions, "recycleByLabel(versionlabel='" + escapeQueryStrValue(label) + "')"));
    };
    /**
     * Creates a new file version from the file specified by the version label.
     *
     * @param label The version label of the file version to restore, for example: 1.2
     */
    _Versions.prototype.restoreByLabel = function (label) {
        return spPost(this.clone(Versions, "restoreByLabel(versionlabel='" + escapeQueryStrValue(label) + "')"));
    };
    __decorate([
        tag("vers.deleteAll")
    ], _Versions.prototype, "deleteAll", null);
    __decorate([
        tag("vers.deleteById")
    ], _Versions.prototype, "deleteById", null);
    __decorate([
        tag("vers.recycleByID")
    ], _Versions.prototype, "recycleByID", null);
    __decorate([
        tag("vers.deleteByLabel")
    ], _Versions.prototype, "deleteByLabel", null);
    __decorate([
        tag("vers.recycleByLabel")
    ], _Versions.prototype, "recycleByLabel", null);
    __decorate([
        tag("vers.restoreByLabel")
    ], _Versions.prototype, "restoreByLabel", null);
    _Versions = __decorate([
        defaultPath("versions")
    ], _Versions);
    return _Versions;
}(_SharePointQueryableCollection));

var Versions = spInvokableFactory(_Versions);
/**
 * Describes a single Version instance
 *
 */
var _Version = /** @class */ (function (_super) {
    __extends(_Version, _super);
    function _Version() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("ver");
        return _this;
    }
    return _Version;
}(_SharePointQueryableInstance));

var Version = spInvokableFactory(_Version);
/**
 * Types for document check in.
 * Minor = 0
 * Major = 1
 * Overwrite = 2
 */
var CheckinType;
(function (CheckinType) {
    CheckinType[CheckinType["Minor"] = 0] = "Minor";
    CheckinType[CheckinType["Major"] = 1] = "Major";
    CheckinType[CheckinType["Overwrite"] = 2] = "Overwrite";
})(CheckinType || (CheckinType = {}));
/**
 * File move opertions
 */
var MoveOperations;
(function (MoveOperations) {
    /**
     * Produce an error if a file with the same name exists in the destination
     */
    MoveOperations[MoveOperations["None"] = 0] = "None";
    /**
     * Overwrite a file with the same name if it exists. Value is 1.
     */
    MoveOperations[MoveOperations["Overwrite"] = 1] = "Overwrite";
    /**
     * Complete the move operation even if supporting files are separated from the file. Value is 8.
     */
    MoveOperations[MoveOperations["AllowBrokenThickets"] = 8] = "AllowBrokenThickets";
    /**
     * Boolean specifying whether to retain the source of the move's editor and modified by datetime.
     */
    MoveOperations[MoveOperations["RetainEditorAndModifiedOnMove"] = 2048] = "RetainEditorAndModifiedOnMove";
})(MoveOperations || (MoveOperations = {}));
var TemplateFileType;
(function (TemplateFileType) {
    TemplateFileType[TemplateFileType["StandardPage"] = 0] = "StandardPage";
    TemplateFileType[TemplateFileType["WikiPage"] = 1] = "WikiPage";
    TemplateFileType[TemplateFileType["FormPage"] = 2] = "FormPage";
    TemplateFileType[TemplateFileType["ClientSidePage"] = 3] = "ClientSidePage";
})(TemplateFileType || (TemplateFileType = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/webs/index.js



Reflect.defineProperty(SPRest.prototype, "web", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(function (_a) {
            var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
            return Web(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
SPRest.prototype.createBatch = function () {
    return this.web.createBatch();
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/appcatalog/types.js









var _AppCatalog = /** @class */ (function (_super) {
    __extends(_AppCatalog, _super);
    function _AppCatalog(baseUrl, path) {
        var _this = _super.call(this, extractWebUrl(typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl()), path) || this;
        // get the catalog path without the AvailableApps suffix
        // used for adding, syncing to teams
        var pathSplit = path.split("/");
        _this.catalogPath = pathSplit.slice(0, pathSplit.length - 1).join("/");
        return _this;
    }
    /**
     * Get details of specific app from the app catalog
     * @param id - Specify the guid of the app
     */
    _AppCatalog.prototype.getAppById = function (id) {
        return tag.configure(App(this, "getById('" + id + "')").configureFrom(this), "ac.getAppById");
    };
    /**
     * Synchronize a solution to the Microsoft Teams App Catalog
     * @param id - Specify the guid of the app
     * @param useSharePointItemId (optional) - By default this REST call requires the SP Item id of the app, not the app id.
     *                            PnPjs will try to fetch the item id by default, you can still use this parameter to pass your own item id in the first parameter
     */
    _AppCatalog.prototype.syncSolutionToTeams = function (id, useSharePointItemId) {
        if (useSharePointItemId === void 0) { useSharePointItemId = false; }
        return __awaiter(this, void 0, void 0, function () {
            var appId, webUrl, web, listId, listItems, poster;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        appId = null;
                        webUrl = extractWebUrl(this.toUrl());
                        if (!useSharePointItemId) return [3 /*break*/, 1];
                        appId = id;
                        return [3 /*break*/, 4];
                    case 1:
                        web = Web(webUrl).configureFrom(this);
                        return [4 /*yield*/, web.lists.select("Id").filter("EntityTypeName eq 'AppCatalog'")()];
                    case 2:
                        listId = (_a.sent())[0].Id;
                        return [4 /*yield*/, web.lists.getById(listId).items.filter("AppProductID eq '" + id + "'").top(1)()];
                    case 3:
                        listItems = _a.sent();
                        if (listItems && listItems.length > 0) {
                            appId = listItems[0].Id;
                        }
                        else {
                            throw Error("Did not find the app with id " + id + " in the appcatalog.");
                        }
                        _a.label = 4;
                    case 4:
                        poster = tag.configure(AppCatalog(webUrl, this.catalogPath + "/SyncSolutionToTeams(id=" + appId + ")"), "ac.syncSolutionToTeams");
                        poster.configureFrom(this);
                        return [4 /*yield*/, spPost(poster, {})];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Uploads an app package. Not supported for batching
     *
     * @param filename Filename to create.
     * @param content app package data (eg: the .app or .sppkg file).
     * @param shouldOverWrite Should an app with the same name in the same location be overwritten? (default: true)
     * @returns Promise<IAppAddResult>
     */
    _AppCatalog.prototype.add = function (filename, content, shouldOverWrite) {
        if (shouldOverWrite === void 0) { shouldOverWrite = true; }
        return __awaiter(this, void 0, void 0, function () {
            var adder, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        adder = tag.configure(AppCatalog(extractWebUrl(this.toUrl()), this.catalogPath + "/add(overwrite=" + shouldOverWrite + ",url='" + filename + "')"), "ac.add");
                        adder.configureFrom(this);
                        return [4 /*yield*/, spPost(adder, {
                                body: content, headers: {
                                    "binaryStringRequestBody": "true",
                                },
                            })];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, {
                                data: r,
                                file: File(odataUrlFrom(r)),
                            }];
                }
            });
        });
    };
    return _AppCatalog;
}(_SharePointQueryableCollection));

var AppCatalog = spInvokableFactory(_AppCatalog);
var _App = /** @class */ (function (_super) {
    __extends(_App, _super);
    function _App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This method deploys an app on the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     *
     * @param skipFeatureDeployment Deploy the app to the entire tenant
     */
    _App.prototype.deploy = function (skipFeatureDeployment) {
        if (skipFeatureDeployment === void 0) { skipFeatureDeployment = false; }
        return this.do("Deploy(" + skipFeatureDeployment + ")");
    };
    /**
     * This method retracts a deployed app on the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    _App.prototype.retract = function () {
        return this.do("Retract");
    };
    /**
     * This method allows an app which is already deployed to be installed on a web
     */
    _App.prototype.install = function () {
        return this.do("Install");
    };
    /**
     * This method allows an app which is already installed to be uninstalled on a web
     * Note: when you use the REST API to uninstall a solution package from the site, it is not relocated to the recycle bin
     */
    _App.prototype.uninstall = function () {
        return this.do("Uninstall");
    };
    /**
     * This method allows an app which is already installed to be upgraded on a web
     */
    _App.prototype.upgrade = function () {
        return this.do("Upgrade");
    };
    /**
     * This method removes an app from the app catalog. It must be called in the context
     * of the tenant app catalog web or it will fail.
     */
    _App.prototype.remove = function () {
        return this.do("Remove");
    };
    _App.prototype.do = function (path) {
        return spPost(this.clone(App, path));
    };
    __decorate([
        tag("app.deploy")
    ], _App.prototype, "deploy", null);
    __decorate([
        tag("app.retract")
    ], _App.prototype, "retract", null);
    __decorate([
        tag("app.install")
    ], _App.prototype, "install", null);
    __decorate([
        tag("app.uninstall")
    ], _App.prototype, "uninstall", null);
    __decorate([
        tag("app.upgrade")
    ], _App.prototype, "upgrade", null);
    __decorate([
        tag("app.remove")
    ], _App.prototype, "remove", null);
    return _App;
}(_SharePointQueryableInstance));

var App = spInvokableFactory(_App);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/appcatalog/web.js


_Web.prototype.getAppCatalog = function (url, scope) {
    if (scope === void 0) { scope = "tenant"; }
    return AppCatalog(url || this, "_api/web/" + scope + "appcatalog/AvailableApps").configureFrom(this);
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/appcatalog/index.js






SPRest.prototype.getTenantAppCatalogWeb = function () {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, this.childConfigHook(function (_a) {
                    var options = _a.options, runtime = _a.runtime;
                    return __awaiter(_this, void 0, void 0, function () {
                        var data;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, SharePointQueryable("/", "_api/SP_TenantSettings_Current").configure(options).setRuntime(runtime)()];
                                case 1:
                                    data = _b.sent();
                                    if (!(data === null || data === void 0 ? void 0 : data.CorporateCatalogUrl)) {
                                        throw new Error("Failed to get tenant corporate app catalog, its not configured on the tenant.");
                                    }
                                    return [2 /*return*/, Web(data.CorporateCatalogUrl).configure(options).setRuntime(runtime)];
                            }
                        });
                    });
                })];
        });
    });
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/attachments/types.js






var _Attachments = /** @class */ (function (_super) {
    __extends(_Attachments, _super);
    function _Attachments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Gets a Attachment File by filename
    *
    * @param name The name of the file, including extension.
    */
    _Attachments.prototype.getByName = function (name) {
        var f = tag.configure(Attachment(this), "ats.getByName");
        f.concat("('" + name + "')");
        return f;
    };
    /**
     * Adds a new attachment to the collection. Not supported for batching.
     *
     * @param name The name of the file, including extension.
     * @param content The Base64 file content.
     */
    _Attachments.prototype.add = function (name, content) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Attachments, "add(FileName='" + name + "')", false), { body: content })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response,
                                file: this.getByName(name),
                            }];
                }
            });
        });
    };
    /**
     * Adds multiple new attachment to the collection. Not supported for batching.
     *
     * @param files The collection of files to add
     */
    _Attachments.prototype.addMultiple = function (files) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < files.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.add(files[i].name, files[i].content)];
                    case 2:
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
     * Delete multiple attachments from the collection. Not supported for batching.
     *
     * @param files The collection of files to delete
     */
    _Attachments.prototype.deleteMultiple = function () {
        var files = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            files[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < files.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getByName(files[i]).delete()];
                    case 2:
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
     * Delete multiple attachments from the collection and send to recycle bin. Not supported for batching.
     *
     * @param files The collection of files to be deleted and sent to recycle bin
     */
    _Attachments.prototype.recycleMultiple = function () {
        var files = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            files[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < files.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getByName(files[i]).recycle()];
                    case 2:
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
    __decorate([
        tag("ats.add")
    ], _Attachments.prototype, "add", null);
    __decorate([
        tag("ats.addMultiple")
    ], _Attachments.prototype, "addMultiple", null);
    __decorate([
        tag("ats.deleteMultiple")
    ], _Attachments.prototype, "deleteMultiple", null);
    __decorate([
        tag("ats.recycleMultiple")
    ], _Attachments.prototype, "recycleMultiple", null);
    _Attachments = __decorate([
        defaultPath("AttachmentFiles")
    ], _Attachments);
    return _Attachments;
}(_SharePointQueryableCollection));

var Attachments = spInvokableFactory(_Attachments);
var _Attachment = /** @class */ (function (_super) {
    __extends(_Attachment, _super);
    function _Attachment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("at");
        return _this;
    }
    /**
     * Gets the contents of the file as text
     *
     */
    _Attachment.prototype.getText = function () {
        return this.getParsed(new TextParser());
    };
    /**
     * Gets the contents of the file as a blob, does not work in Node.js
     *
     */
    _Attachment.prototype.getBlob = function () {
        return this.getParsed(new BlobParser());
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    _Attachment.prototype.getBuffer = function () {
        return this.getParsed(new BufferParser());
    };
    /**
     * Gets the contents of a file as an ArrayBuffer, works in Node.js
     */
    _Attachment.prototype.getJSON = function () {
        return this.getParsed(new JSONParser());
    };
    /**
     * Sets the content of a file. Not supported for batching
     *
     * @param content The value to set for the file contents
     */
    _Attachment.prototype.setContent = function (content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Attachment, "$value", false), headers({ "X-HTTP-Method": "PUT" }, {
                            body: content,
                        }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, Attachment(this)];
                }
            });
        });
    };
    /**
     * Delete this attachment file and send it to recycle bin
     *
     * @param eTag Value used in the IF-Match header, by default "*"
     */
    _Attachment.prototype.recycle = function (eTag) {
        if (eTag === void 0) { eTag = "*"; }
        return spPost(this.clone(Attachment, "recycleObject"), headers({
            "IF-Match": eTag,
            "X-HTTP-Method": "DELETE",
        }));
    };
    _Attachment.prototype.getParsed = function (parser) {
        return this.clone(Attachment, "$value", false).usingParser(parser)();
    };
    __decorate([
        tag("at.getText")
    ], _Attachment.prototype, "getText", null);
    __decorate([
        tag("at.getBlob")
    ], _Attachment.prototype, "getBlob", null);
    __decorate([
        tag("at.getBuffer")
    ], _Attachment.prototype, "getBuffer", null);
    __decorate([
        tag("at.getJSON")
    ], _Attachment.prototype, "getJSON", null);
    __decorate([
        tag("at.setContent")
    ], _Attachment.prototype, "setContent", null);
    __decorate([
        tag("at.recycle")
    ], _Attachment.prototype, "recycle", null);
    return _Attachment;
}(_SharePointQueryableInstance));

var Attachment = spInvokableFactory(_Attachment);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/attachments/item.js



addProp(_Item, "attachmentFiles", Attachments);
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/attachments/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/funcs.js

/**
 * Gets the next order value 1 based for the provided collection
 *
 * @param collection Collection of orderable things
 */
function getNextOrder(collection) {
    return collection.length < 1 ? 1 : (Math.max.apply(null, collection.map(function (i) { return i.order; })) + 1);
}
/**
 * Normalizes the order value for all the sections, columns, and controls to be 1 based and stepped (1, 2, 3...)
 *
 * @param collection The collection to normalize
 */
function reindex(collection) {
    for (var i = 0; i < collection.length; i++) {
        collection[i].order = i + 1;
        if (hOP(collection[i], "columns")) {
            reindex(collection[i].columns);
        }
        else if (hOP(collection[i], "controls")) {
            reindex(collection[i].controls);
        }
    }
}
//# sourceMappingURL=funcs.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/web.js



_Web.prototype.getFileByServerRelativeUrl = function (fileRelativeUrl) {
    return File(this, "getFileByServerRelativeUrl('" + escapeQueryStrValue(fileRelativeUrl) + "')");
};
_Web.prototype.getFileByServerRelativePath = function (fileRelativeUrl) {
    return File(this, "getFileByServerRelativePath(decodedUrl='" + escapeQueryStrValue(fileRelativeUrl) + "')");
};
_Web.prototype.getFileById = function (uniqueId) {
    return File(this, "getFileById('" + uniqueId + "')");
};
_Web.prototype.getFileByUrl = function (fileUrl) {
    return File(this, "getFileByUrl('!@p1::" + escapeQueryStrValue(fileUrl) + "')");
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/comments/types.js









var _Comments = /** @class */ (function (_super) {
    __extends(_Comments, _super);
    function _Comments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new comment to this collection
     *
     * @param info Comment information to add
     */
    _Comments.prototype.add = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof info === "string") {
                            info = { text: info };
                        }
                        postBody = body(util_assign(metadata("Microsoft.SharePoint.Comments.comment"), info));
                        return [4 /*yield*/, spPost(this.clone(Comments, null), postBody)];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, util_assign(this.getById(d.id), d)];
                }
            });
        });
    };
    /**
     * Gets a comment by id
     *
     * @param id Id of the comment to load
     */
    _Comments.prototype.getById = function (id) {
        return tag.configure(Comment(this).concat("(" + id + ")"), "coms.getById");
    };
    /**
     * Deletes all the comments in this collection
     */
    _Comments.prototype.clear = function () {
        return spPost(tag.configure(this.clone(Comments, "DeleteAll"), "coms.clear"));
    };
    __decorate([
        tag("coms.add")
    ], _Comments.prototype, "add", null);
    _Comments = __decorate([
        defaultPath("comments")
    ], _Comments);
    return _Comments;
}(_SharePointQueryableCollection));

var Comments = spInvokableFactory(_Comments);
var _Comment = /** @class */ (function (_super) {
    __extends(_Comment, _super);
    function _Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Comment.prototype, "replies", {
        /**
         * A comment's replies
         */
        get: function () {
            return tag.configure(Replies(this), "com.replies");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Likes the comment as the current user
     */
    _Comment.prototype.like = function () {
        return spPost(this.clone(Comment, "Like"));
    };
    /**
     * Unlikes the comment as the current user
     */
    _Comment.prototype.unlike = function () {
        return spPost(this.clone(Comment, "Unlike"));
    };
    /**
     * Deletes this comment
     */
    _Comment.prototype.delete = function () {
        return spPost(this.clone(Comment, "DeleteComment"));
    };
    __decorate([
        tag("com.like")
    ], _Comment.prototype, "like", null);
    __decorate([
        tag("com.unlike")
    ], _Comment.prototype, "unlike", null);
    __decorate([
        tag("com.delete")
    ], _Comment.prototype, "delete", null);
    return _Comment;
}(_SharePointQueryableInstance));

var Comment = spInvokableFactory(_Comment);
var _Replies = /** @class */ (function (_super) {
    __extends(_Replies, _super);
    function _Replies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new reply to this collection
     *
     * @param info Comment information to add
     */
    _Replies.prototype.add = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof info === "string") {
                            info = { text: info };
                        }
                        postBody = body(util_assign(metadata("Microsoft.SharePoint.Comments.comment"), info));
                        return [4 /*yield*/, spPost(this.clone(Replies, null), postBody)];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, util_assign(Comment(odataUrlFrom(d)), d)];
                }
            });
        });
    };
    __decorate([
        tag("reps.add")
    ], _Replies.prototype, "add", null);
    _Replies = __decorate([
        defaultPath("replies")
    ], _Replies);
    return _Replies;
}(_SharePointQueryableCollection));

var Replies = spInvokableFactory(_Replies);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/comments/item.js








addProp(_Item, "comments", Comments);
_Item.prototype.getLikedBy = function () {
    return spPost(this.clone(Item, "likedBy"));
};
_Item.prototype.like = function () {
    return __awaiter(this, void 0, void 0, function () {
        var itemInfo, baseUrl, reputationUrl, likeUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getParentInfos()];
                case 1:
                    itemInfo = _a.sent();
                    baseUrl = extractWebUrl(this.toUrl());
                    reputationUrl = "_api/Microsoft.Office.Server.ReputationModel.Reputation.SetLike(listID=@a1,itemID=@a2,like=@a3)";
                    likeUrl = combine(baseUrl, reputationUrl) + ("?@a1='{" + itemInfo.ParentList.Id + "}'&@a2='" + itemInfo.Item.Id + "'&@a3=true");
                    return [2 /*return*/, spPost(SharePointQueryable(likeUrl))];
            }
        });
    });
};
_Item.prototype.unlike = function () {
    return __awaiter(this, void 0, void 0, function () {
        var itemInfo, baseUrl, reputationUrl, likeUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getParentInfos()];
                case 1:
                    itemInfo = _a.sent();
                    baseUrl = extractWebUrl(this.toUrl());
                    reputationUrl = "_api/Microsoft.Office.Server.ReputationModel.Reputation.SetLike(listID=@a1,itemID=@a2,like=@a3)";
                    likeUrl = combine(baseUrl, reputationUrl) + ("?@a1='{" + itemInfo.ParentList.Id + "}'&@a2='" + itemInfo.Item.Id + "'&@a3=false");
                    return [2 /*return*/, spPost(SharePointQueryable(likeUrl))];
            }
        });
    });
};
_Item.prototype.getLikedByInformation = function () {
    return this.clone(Item, "likedByInformation").expand("likedby")();
};
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/types.js
















/**
 * Page promotion state
 */
var PromotedState;
(function (PromotedState) {
    /**
     * Regular client side page
     */
    PromotedState[PromotedState["NotPromoted"] = 0] = "NotPromoted";
    /**
     * Page that will be promoted as news article after publishing
     */
    PromotedState[PromotedState["PromoteOnPublish"] = 1] = "PromoteOnPublish";
    /**
     * Page that is promoted as news article
     */
    PromotedState[PromotedState["Promoted"] = 2] = "Promoted";
})(PromotedState || (PromotedState = {}));
function initFrom(o, url) {
    return ClientsidePage(extractWebUrl(o.toUrl()), url).configureFrom(o);
}
/**
 * Represents the data and methods associated with client side "modern" pages
 */
var _ClientsidePage = /** @class */ (function (_super) {
    __extends(_ClientsidePage, _super);
    /**
     * PLEASE DON'T USE THIS CONSTRUCTOR DIRECTLY, thank you 🐇
     */
    function _ClientsidePage(baseUrl, path, json, noInit, sections, commentsDisabled) {
        if (noInit === void 0) { noInit = false; }
        if (sections === void 0) { sections = []; }
        if (commentsDisabled === void 0) { commentsDisabled = false; }
        var _this = _super.call(this, baseUrl, path) || this;
        _this.json = json;
        _this.sections = sections;
        _this.commentsDisabled = commentsDisabled;
        _this._bannerImageDirty = false;
        _this._bannerImageThumbnailUrlDirty = false;
        // ensure we have a good url to build on for the pages api
        if (typeof baseUrl === "string") {
            _this.data.parentUrl = "";
            _this.data.url = combine(extractWebUrl(baseUrl), path);
        }
        else {
            _this.assign(initFrom(baseUrl, null), path);
        }
        // set a default page settings slice
        _this._pageSettings = { controlType: 0, pageSettingsSlice: { isDefaultDescription: true, isDefaultThumbnail: true } };
        // set a default layout part
        _this._layoutPart = _ClientsidePage.getDefaultLayoutPart();
        if (typeof json !== "undefined" && !noInit) {
            _this.fromJSON(json);
        }
        return _this;
    }
    _ClientsidePage.getDefaultLayoutPart = function () {
        return {
            dataVersion: "1.4",
            description: "Title Region Description",
            id: "cbe7b0a9-3504-44dd-a3a3-0e5cacd07788",
            instanceId: "cbe7b0a9-3504-44dd-a3a3-0e5cacd07788",
            properties: {
                authorByline: [],
                authors: [],
                layoutType: "FullWidthImage",
                showPublishDate: false,
                showTopicHeader: false,
                textAlignment: "Left",
                title: "",
                topicHeader: "",
            },
            reservedHeight: 280,
            serverProcessedContent: { htmlStrings: {}, searchablePlainTexts: {}, imageSources: {}, links: {} },
            title: "Title area",
        };
    };
    Object.defineProperty(_ClientsidePage.prototype, "pageLayout", {
        get: function () {
            return this.json.PageLayoutType;
        },
        set: function (value) {
            this.json.PageLayoutType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "bannerImageUrl", {
        get: function () {
            return this.json.BannerImageUrl;
        },
        set: function (value) {
            this.setBannerImage(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "thumbnailUrl", {
        get: function () {
            return this._pageSettings.pageSettingsSlice.isDefaultThumbnail ? this.json.BannerImageUrl : this.json.BannerThumbnailUrl;
        },
        set: function (value) {
            this.json.BannerThumbnailUrl = value;
            this._bannerImageThumbnailUrlDirty = true;
            this._pageSettings.pageSettingsSlice.isDefaultThumbnail = false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "topicHeader", {
        get: function () {
            return objectDefinedNotNull(this.json.TopicHeader) ? this.json.TopicHeader : "";
        },
        set: function (value) {
            this.json.TopicHeader = value;
            this._layoutPart.properties.topicHeader = value;
            if (stringIsNullOrEmpty(value)) {
                this.showTopicHeader = false;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "title", {
        get: function () {
            return this._layoutPart.properties.title;
        },
        set: function (value) {
            this.json.Title = value;
            this._layoutPart.properties.title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "reservedHeight", {
        get: function () {
            return this._layoutPart.reservedHeight;
        },
        set: function (value) {
            this._layoutPart.reservedHeight = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "description", {
        get: function () {
            return this.json.Description;
        },
        set: function (value) {
            if (!stringIsNullOrEmpty(value) && value.length > 255) {
                throw Error("Modern Page description is limited to 255 chars.");
            }
            this.json.Description = value;
            if (!hOP(this._pageSettings, "htmlAttributes")) {
                this._pageSettings.htmlAttributes = [];
            }
            if (this._pageSettings.htmlAttributes.indexOf("modifiedDescription") < 0) {
                this._pageSettings.htmlAttributes.push("modifiedDescription");
            }
            this._pageSettings.pageSettingsSlice.isDefaultDescription = false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "layoutType", {
        get: function () {
            return this._layoutPart.properties.layoutType;
        },
        set: function (value) {
            this._layoutPart.properties.layoutType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "headerTextAlignment", {
        get: function () {
            return this._layoutPart.properties.textAlignment;
        },
        set: function (value) {
            this._layoutPart.properties.textAlignment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "showTopicHeader", {
        get: function () {
            return this._layoutPart.properties.showTopicHeader;
        },
        set: function (value) {
            this._layoutPart.properties.showTopicHeader = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "showPublishDate", {
        get: function () {
            return this._layoutPart.properties.showPublishDate;
        },
        set: function (value) {
            this._layoutPart.properties.showPublishDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "hasVerticalSection", {
        get: function () {
            return this.sections.findIndex(function (s) { return s.layoutIndex === 2; }) > -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "authorByLine", {
        get: function () {
            if (isArray(this._layoutPart.properties.authorByline) && this._layoutPart.properties.authorByline.length > 0) {
                return this._layoutPart.properties.authorByline[0];
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ClientsidePage.prototype, "verticalSection", {
        get: function () {
            if (this.hasVerticalSection) {
                return this.addVerticalSection();
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Add a section to this page
     */
    _ClientsidePage.prototype.addSection = function () {
        var section = new CanvasSection(this, getNextOrder(this.sections), 1);
        this.sections.push(section);
        return section;
    };
    /**
     * Add a section to this page
     */
    _ClientsidePage.prototype.addVerticalSection = function () {
        // we can only have one vertical section so we find it if it exists
        var sectionIndex = this.sections.findIndex(function (s) { return s.layoutIndex === 2; });
        if (sectionIndex > -1) {
            return this.sections[sectionIndex];
        }
        var section = new CanvasSection(this, getNextOrder(this.sections), 2);
        this.sections.push(section);
        return section;
    };
    /**
     * Loads this instance from the appropriate JSON data
     *
     * @param pageData JSON data to load (replaces any existing data)
     */
    _ClientsidePage.prototype.fromJSON = function (pageData) {
        this.json = pageData;
        var canvasControls = JSON.parse(pageData.CanvasContent1);
        var layouts = JSON.parse(pageData.LayoutWebpartsContent);
        if (layouts && layouts.length > 0) {
            this._layoutPart = layouts[0];
        }
        this.setControls(canvasControls);
        return this;
    };
    /**
     * Loads this page's content from the server
     */
    _ClientsidePage.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item, pageData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getItem("Id", "CommentsDisabled")];
                    case 1:
                        item = _a.sent();
                        return [4 /*yield*/, SharePointQueryable(this, "_api/sitepages/pages(" + item.Id + ")")()];
                    case 2:
                        pageData = _a.sent();
                        this.commentsDisabled = item.CommentsDisabled;
                        return [2 /*return*/, this.fromJSON(pageData)];
                }
            });
        });
    };
    /**
     * Persists the content changes (sections, columns, and controls) [does not work with batching]
     *
     * @param publish If true the page is published, if false the changes are persisted to SharePoint but not published [Default: true]
     */
    _ClientsidePage.prototype.save = function (publish) {
        if (publish === void 0) { publish = true; }
        return __awaiter(this, void 0, void 0, function () {
            var previewPartialUrl, serverRelativePath, imgInfo_1, webUrl_1, web, batch, f, saveBody, bannerImageUrlValue, updater, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.json.Id === null) {
                            throw Error("The id for this page is null. If you want to create a new page, please use ClientSidePage.Create");
                        }
                        previewPartialUrl = "_layouts/15/getpreview.ashx";
                        if (!(this._bannerImageDirty && !this.bannerImageUrl.includes(previewPartialUrl))) return [3 /*break*/, 2];
                        serverRelativePath = this.bannerImageUrl;
                        web = Web(extractWebUrl(this.toUrl())).configureFrom(this);
                        batch = web.createBatch();
                        web.getFileByServerRelativePath(serverRelativePath.replace(/%20/ig, " "))
                            .select("ListId", "WebId", "UniqueId", "Name", "SiteId").inBatch(batch)().then(function (r1) { return imgInfo_1 = r1; });
                        web.select("Url").inBatch(batch)().then(function (r2) { return webUrl_1 = r2.Url; });
                        // we know the .then calls above will run before execute resolves, ensuring the vars are set
                        return [4 /*yield*/, batch.execute()];
                    case 1:
                        // we know the .then calls above will run before execute resolves, ensuring the vars are set
                        _a.sent();
                        f = SharePointQueryable(webUrl_1, previewPartialUrl);
                        f.query.set("guidSite", "" + imgInfo_1.SiteId);
                        f.query.set("guidWeb", "" + imgInfo_1.WebId);
                        f.query.set("guidFile", "" + imgInfo_1.UniqueId);
                        this.bannerImageUrl = f.toUrlAndQuery();
                        if (!objectDefinedNotNull(this._layoutPart.serverProcessedContent)) {
                            this._layoutPart.serverProcessedContent = {};
                        }
                        this._layoutPart.serverProcessedContent.imageSources = { imageSource: serverRelativePath };
                        if (!objectDefinedNotNull(this._layoutPart.serverProcessedContent.customMetadata)) {
                            this._layoutPart.serverProcessedContent.customMetadata = {};
                        }
                        this._layoutPart.serverProcessedContent.customMetadata.imageSource = {
                            listId: imgInfo_1.ListId,
                            siteId: imgInfo_1.SiteId,
                            uniqueId: imgInfo_1.UniqueId,
                            webId: imgInfo_1.WebId,
                        };
                        this._layoutPart.properties.webId = imgInfo_1.WebId;
                        this._layoutPart.properties.siteId = imgInfo_1.SiteId;
                        this._layoutPart.properties.listId = imgInfo_1.ListId;
                        this._layoutPart.properties.uniqueId = imgInfo_1.UniqueId;
                        _a.label = 2;
                    case 2:
                        if (!!this.json.IsPageCheckedOutToCurrentUser) return [3 /*break*/, 4];
                        return [4 /*yield*/, spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/checkoutpage"))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        saveBody = Object.assign(metadata("SP.Publishing.SitePage"), {
                            AuthorByline: this.json.AuthorByline || [],
                            CanvasContent1: this.getCanvasContent1(),
                            Description: this.description,
                            LayoutWebpartsContent: this.getLayoutWebpartsContent(),
                            Title: this.title,
                            TopicHeader: this.topicHeader,
                            BannerImageUrl: this.bannerImageUrl
                        });
                        if (this._bannerImageDirty || this._bannerImageThumbnailUrlDirty) {
                            bannerImageUrlValue = this._bannerImageThumbnailUrlDirty ? this.thumbnailUrl : this.bannerImageUrl;
                            saveBody = util_assign(saveBody, {
                                BannerImageUrl: bannerImageUrlValue,
                            });
                        }
                        updater = initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/savepage");
                        return [4 /*yield*/, spPost(updater, headers({ "if-match": "*" }, body(saveBody)))];
                    case 5:
                        _a.sent();
                        r = true;
                        if (!publish) return [3 /*break*/, 7];
                        return [4 /*yield*/, spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/publish"))];
                    case 6:
                        r = _a.sent();
                        if (r) {
                            this.json.IsPageCheckedOutToCurrentUser = false;
                        }
                        _a.label = 7;
                    case 7:
                        this._bannerImageDirty = false;
                        this._bannerImageThumbnailUrlDirty = false;
                        // we need to ensure we reload from the latest data to ensure all urls are updated and current in the object (expecially for new pages)
                        return [4 /*yield*/, this.load()];
                    case 8:
                        // we need to ensure we reload from the latest data to ensure all urls are updated and current in the object (expecially for new pages)
                        _a.sent();
                        return [2 /*return*/, r];
                }
            });
        });
    };
    /**
     * Discards the checkout of this page
     */
    _ClientsidePage.prototype.discardPageCheckout = function () {
        return __awaiter(this, void 0, void 0, function () {
            var d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.json.Id === null) {
                            throw Error("The id for this page is null. If you want to create a new page, please use ClientSidePage.Create");
                        }
                        return [4 /*yield*/, spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/discardPage"), body(metadata("SP.Publishing.SitePage")))];
                    case 1:
                        d = _a.sent();
                        this.fromJSON(d);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Promotes this page as a news item
     */
    _ClientsidePage.prototype.promoteToNews = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.promoteNewsImpl("promoteToNews")];
            });
        });
    };
    // API is currently broken on server side
    // public async demoteFromNews(): Promise<boolean> {
    //     return this.promoteNewsImpl("demoteFromNews");
    // }
    /**
     * Finds a control by the specified instance id
     *
     * @param id Instance id of the control to find
     */
    _ClientsidePage.prototype.findControlById = function (id) {
        return this.findControl(function (c) { return c.id === id; });
    };
    /**
     * Finds a control within this page's control tree using the supplied predicate
     *
     * @param predicate Takes a control and returns true or false, if true that control is returned by findControl
     */
    _ClientsidePage.prototype.findControl = function (predicate) {
        // check all sections
        for (var i = 0; i < this.sections.length; i++) {
            // check all columns
            for (var j = 0; j < this.sections[i].columns.length; j++) {
                // check all controls
                for (var k = 0; k < this.sections[i].columns[j].controls.length; k++) {
                    // check to see if the predicate likes this control
                    if (predicate(this.sections[i].columns[j].controls[k])) {
                        return this.sections[i].columns[j].controls[k];
                    }
                }
            }
        }
        // we found nothing so give nothing back
        return null;
    };
    /**
     * Creates a new page with all of the content copied from this page
     *
     * @param web The web where we will create the copy
     * @param pageName The file name of the new page
     * @param title The title of the new page
     * @param publish If true the page will be published (Default: true)
     */
    _ClientsidePage.prototype.copy = function (web, pageName, title, publish, promotedState) {
        if (publish === void 0) { publish = true; }
        return __awaiter(this, void 0, void 0, function () {
            var page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CreateClientsidePage(web, pageName, title, this.pageLayout, promotedState)];
                    case 1:
                        page = _a.sent();
                        return [2 /*return*/, this.copyTo(page, publish)];
                }
            });
        });
    };
    /**
     * Copies the content from this page to the supplied page instance NOTE: fully overwriting any previous content!!
     *
     * @param page Page whose content we replace with this page's content
     * @param publish If true the page will be published after the copy, if false it will be saved but left unpublished (Default: true)
     */
    _ClientsidePage.prototype.copyTo = function (page, publish) {
        if (publish === void 0) { publish = true; }
        return __awaiter(this, void 0, void 0, function () {
            var url, makeGuid, guidSite, guidWeb, guidFile, site, id, openWeb, file, props;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // we know the method is on the class - but it is protected so not part of the interface
                        page.setControls(this.getControls());
                        if (!!stringIsNullOrEmpty(this.json.BannerImageUrl)) return [3 /*break*/, 4];
                        url = new URL(this.json.BannerImageUrl);
                        makeGuid = function (s) { return s.replace(/(.{8})(.{4})(.{4})(.{4})(.{12})/g, "$1-$2-$3-$4-$5"); };
                        if (!(url.searchParams.has("guidSite") && url.searchParams.has("guidWeb") && url.searchParams.has("guidFile"))) return [3 /*break*/, 4];
                        guidSite = makeGuid(url.searchParams.get("guidSite"));
                        guidWeb = makeGuid(url.searchParams.get("guidWeb"));
                        guidFile = makeGuid(url.searchParams.get("guidFile"));
                        site = Site(extractWebUrl(this.toUrl()));
                        return [4 /*yield*/, site.select("Id")()];
                    case 1:
                        id = _a.sent();
                        if (!(id.Id === guidSite)) return [3 /*break*/, 4];
                        return [4 /*yield*/, site.openWebById(guidWeb)];
                    case 2:
                        openWeb = _a.sent();
                        return [4 /*yield*/, openWeb.web.getFileById(guidFile).select("ServerRelativeUrl")()];
                    case 3:
                        file = _a.sent();
                        props = {};
                        if (this._layoutPart.properties) {
                            if (hOP(this._layoutPart.properties, "translateX")) {
                                props.translateX = this._layoutPart.properties.translateX;
                            }
                            if (hOP(this._layoutPart.properties, "translateY")) {
                                props.translateY = this._layoutPart.properties.translateY;
                            }
                            if (hOP(this._layoutPart.properties, "imageSourceType")) {
                                props.imageSourceType = this._layoutPart.properties.imageSourceType;
                            }
                            if (hOP(this._layoutPart.properties, "altText")) {
                                props.altText = this._layoutPart.properties.altText;
                            }
                        }
                        page.setBannerImage(file.ServerRelativeUrl, props);
                        _a.label = 4;
                    case 4: return [4 /*yield*/, page.save(publish)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, page];
                }
            });
        });
    };
    /**
     * Sets the modern page banner image
     *
     * @param url Url of the image to display
     * @param altText Alt text to describe the image
     * @param bannerProps Additional properties to control display of the banner
     */
    _ClientsidePage.prototype.setBannerImage = function (url, props) {
        if (isUrlAbsolute(url)) {
            // do our best to make this a server relative url by removing the x.sharepoint.com part
            url = url.replace(/^https?:\/\/[a-z0-9.]*?\.[a-z]{2,3}\//i, "/");
        }
        this.json.BannerImageUrl = url;
        this._bannerImageDirty = true;
        /*
            setting the banner image resets the thumbnail image (matching UI functionality)
            but if the thumbnail is dirty they are likely trying to set them both to
            different values, so we allow that here.
            Also allows the banner image to be updated safely with the calculated one in save()
        */
        if (!this._bannerImageThumbnailUrlDirty) {
            this.thumbnailUrl = url;
            this._pageSettings.pageSettingsSlice.isDefaultThumbnail = true;
        }
        // this seems to always be true, so default
        this._layoutPart.properties.imageSourceType = 2;
        if (objectDefinedNotNull(props)) {
            if (hOP(props, "translateX")) {
                this._layoutPart.properties.translateX = props.translateX;
            }
            if (hOP(props, "translateY")) {
                this._layoutPart.properties.translateY = props.translateY;
            }
            if (hOP(props, "imageSourceType")) {
                this._layoutPart.properties.imageSourceType = props.imageSourceType;
            }
            if (hOP(props, "altText")) {
                this._layoutPart.properties.altText = props.altText;
            }
        }
    };
    /**
     * Sets the banner image url from an external source. You must call save to persist the changes
     *
     * @param url absolute url of the external file
     * @param props optional set of properties to control display of the banner image
     */
    _ClientsidePage.prototype.setBannerImageFromExternalUrl = function (url, props) {
        return __awaiter(this, void 0, void 0, function () {
            var fileUrl, pageName, filename, request, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileUrl = new URL(url);
                        pageName = this.json.FileName.replace(/\.[^/.]+$/, "");
                        filename = fileUrl.pathname.split(/[\\/]/i).pop();
                        request = initFrom(this, "_api/sitepages/AddImageFromExternalUrl");
                        request.query.set("imageFileName", "'" + encodeURIComponent(filename) + "'");
                        request.query.set("pageName", "'" + encodeURIComponent(pageName) + "'");
                        request.query.set("externalUrl", "'" + encodeURIComponent(url) + "'");
                        request.select("ServerRelativeUrl");
                        return [4 /*yield*/, spPost(request)];
                    case 1:
                        result = _a.sent();
                        // set with the newly created relative url
                        this.setBannerImage(result.ServerRelativeUrl, props);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Sets the authors for this page from the supplied list of user integer ids
     *
     * @param authorId The integer id of the user to set as the author
     */
    _ClientsidePage.prototype.setAuthorById = function (authorId) {
        return __awaiter(this, void 0, void 0, function () {
            var userLoginData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SharePointQueryableCollection(extractWebUrl(this.toUrl()), "/_api/web/siteusers")
                            .configureFrom(this)
                            .filter("Id eq " + authorId)
                            .select("LoginName")()];
                    case 1:
                        userLoginData = _a.sent();
                        if (userLoginData.length < 1) {
                            throw Error("Could not find user with id " + authorId + ".");
                        }
                        return [2 /*return*/, this.setAuthorByLoginName(userLoginData[0].LoginName)];
                }
            });
        });
    };
    /**
     * Sets the authors for this page from the supplied list of user integer ids
     *
     * @param authorLoginName The login name of the user (ex: i:0#.f|membership|name@tenant.com)
     */
    _ClientsidePage.prototype.setAuthorByLoginName = function (authorLoginName) {
        return __awaiter(this, void 0, void 0, function () {
            var userLoginData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, SharePointQueryableCollection(extractWebUrl(this.toUrl()), "/_api/web/siteusers")
                            .configureFrom(this)
                            .filter("LoginName eq '" + authorLoginName + "'")
                            .select("UserPrincipalName", "Title")()];
                    case 1:
                        userLoginData = _a.sent();
                        if (userLoginData.length < 1) {
                            throw Error("Could not find user with login name '" + authorLoginName + "'.");
                        }
                        this.json.AuthorByline = [userLoginData[0].UserPrincipalName];
                        this._layoutPart.properties.authorByline = [userLoginData[0].UserPrincipalName];
                        this._layoutPart.properties.authors = [{
                                id: authorLoginName,
                                name: userLoginData[0].Title,
                                role: "",
                                upn: userLoginData[0].UserPrincipalName,
                            }];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Gets the list item associated with this clientside page
     *
     * @param selects Specific set of fields to include when getting the item
     */
    _ClientsidePage.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var initer, listData, item, itemData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        initer = initFrom(this, "/_api/lists/EnsureClientRenderedSitePagesLibrary").select("EnableModeration", "EnableMinorVersions", "Id");
                        return [4 /*yield*/, spPost(initer)];
                    case 1:
                        listData = _a.sent();
                        item = (List(listData["odata.id"])).configureFrom(this).items.getById(this.json.Id);
                        return [4 /*yield*/, item.select.apply(item, __spreadArray([], __read(selects)))()];
                    case 2:
                        itemData = _a.sent();
                        return [2 /*return*/, util_assign((Item(odataUrlFrom(itemData))).configureFrom(this), itemData)];
                }
            });
        });
    };
    /**
     * Recycle this page
     */
    _ClientsidePage.prototype.recycle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getItem()];
                    case 1:
                        item = _a.sent();
                        return [4 /*yield*/, item.recycle()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Delete this page
     */
    _ClientsidePage.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getItem()];
                    case 1:
                        item = _a.sent();
                        return [4 /*yield*/, item.delete()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // not yet active in service
    // /**
    //  * Schedules a page for publishing
    //  *
    //  * @param publishDate Date to publish the item
    //  * @returns Publish work item details
    //  */
    // public async schedulePublish(publishDate: Date): Promise<string> {
    //     let r: string;
    //     // currently the server throws an exception, but then the page is published as expected
    //     // so we just ignore that error for now, YMMV
    //     try {
    //         r = await spPost(initFrom(this, `_api/sitepages/pages(${this.json.Id})/SchedulePublish`), body({
    //             sitePage: { PublishStartDate: publishDate },
    //         }));
    //     } catch {
    //         r = "";
    //     }
    //     return r;
    // }
    /**
     * Saves a copy of this page as a template in this library's Templates folder
     *
     * @param publish If true the template is published, false the template is not published (default: true)
     * @returns IClientsidePage instance representing the new template page
     */
    _ClientsidePage.prototype.saveAsTemplate = function (publish) {
        if (publish === void 0) { publish = true; }
        return __awaiter(this, void 0, void 0, function () {
            var data, page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/SavePageAsTemplate"))];
                    case 1:
                        data = _a.sent();
                        page = ClientsidePage(this, null, data);
                        page.title = this.title;
                        return [4 /*yield*/, page.save(publish)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, page];
                }
            });
        });
    };
    /**
     * Share this Page's Preview content by Email
     *
     * @param emails Set of emails to which the preview is shared
     * @param message The message to include
     * @returns void
     */
    _ClientsidePage.prototype.share = function (emails, message) {
        return spPost(initFrom(this, "_api/SP.Publishing.RichSharing/SharePageByEmail"), body({
            recipientEmails: emails,
            message: message,
            url: this.json.AbsoluteUrl,
        }));
    };
    /**
     * Extends this queryable from the provided parent
     *
     * @param parent Parent queryable from which we will derive a base url
     * @param path Additional path
     */
    _ClientsidePage.prototype.assign = function (parent, path) {
        this.data.parentUrl = parent.data.url;
        this.data.url = combine(this.data.parentUrl, path || "");
        this.configureFrom(parent);
    };
    _ClientsidePage.prototype.getCanvasContent1 = function () {
        return JSON.stringify(this.getControls());
    };
    _ClientsidePage.prototype.getLayoutWebpartsContent = function () {
        if (this._layoutPart) {
            return JSON.stringify([this._layoutPart]);
        }
        else {
            return JSON.stringify(null);
        }
    };
    _ClientsidePage.prototype.setControls = function (controls) {
        // reset the sections
        this.sections = [];
        if (controls && controls.length) {
            for (var i = 0; i < controls.length; i++) {
                // if no control type is present this is a column which we give type 0 to let us process it
                var controlType = hOP(controls[i], "controlType") ? controls[i].controlType : 0;
                switch (controlType) {
                    case 0:
                        // empty canvas column or page settings
                        if (hOP(controls[i], "pageSettingsSlice")) {
                            this._pageSettings = controls[i];
                        }
                        else {
                            // we have an empty column
                            this.mergeColumnToTree(new CanvasColumn(controls[i]));
                        }
                        break;
                    case 3: {
                        var part = new ClientsideWebpart(controls[i]);
                        this.mergePartToTree(part, part.data.position);
                        break;
                    }
                    case 4: {
                        var textData = controls[i];
                        var text = new ClientsideText(textData.innerHTML, textData);
                        this.mergePartToTree(text, text.data.position);
                        break;
                    }
                }
            }
            reindex(this.sections);
        }
    };
    _ClientsidePage.prototype.getControls = function () {
        var _this = this;
        // reindex things
        reindex(this.sections);
        // rollup the control changes
        var canvasData = [];
        this.sections.forEach(function (section) {
            section.columns.forEach(function (column) {
                if (column.controls.length < 1) {
                    // empty column
                    canvasData.push({
                        displayMode: column.data.displayMode,
                        emphasis: _this.getEmphasisObj(section.emphasis),
                        position: column.data.position,
                    });
                }
                else {
                    column.controls.forEach(function (control) {
                        control.data.emphasis = _this.getEmphasisObj(section.emphasis);
                        canvasData.push(_this.specialSaveHandling(control).data);
                    });
                }
            });
        });
        canvasData.push(this._pageSettings);
        return canvasData;
    };
    _ClientsidePage.prototype.getEmphasisObj = function (value) {
        if (value < 1 || value > 3) {
            return {};
        }
        return { zoneEmphasis: value };
    };
    _ClientsidePage.prototype.promoteNewsImpl = function (method) {
        return __awaiter(this, void 0, void 0, function () {
            var lastPubData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.json.Id === null) {
                            throw Error("The id for this page is null.");
                        }
                        if (!stringIsNullOrEmpty(this.json.VersionInfo.LastVersionCreatedBy)) return [3 /*break*/, 2];
                        lastPubData = new Date(this.json.VersionInfo.LastVersionCreated);
                        if (!(lastPubData.getFullYear() < 2000)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.save(true)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, spPost(initFrom(this, "_api/sitepages/pages(" + this.json.Id + ")/" + method), body(metadata("SP.Publishing.SitePage")))];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Merges the control into the tree of sections and columns for this page
     *
     * @param control The control to merge
     */
    _ClientsidePage.prototype.mergePartToTree = function (control, positionData) {
        var _a, _b, _c;
        var column = null;
        var sectionFactor = 12;
        var sectionIndex = 0;
        var zoneIndex = 0;
        var layoutIndex = 1;
        // handle case where we don't have position data (shouldn't happen?)
        if (positionData) {
            if (hOP(positionData, "zoneIndex")) {
                zoneIndex = positionData.zoneIndex;
            }
            if (hOP(positionData, "sectionIndex")) {
                sectionIndex = positionData.sectionIndex;
            }
            if (hOP(positionData, "sectionFactor")) {
                sectionFactor = positionData.sectionFactor;
            }
            if (hOP(positionData, "layoutIndex")) {
                layoutIndex = positionData.layoutIndex;
            }
        }
        var zoneEmphasis = (_c = (_b = (_a = control.data) === null || _a === void 0 ? void 0 : _a.emphasis) === null || _b === void 0 ? void 0 : _b.zoneEmphasis) !== null && _c !== void 0 ? _c : 0;
        var section = this.getOrCreateSection(zoneIndex, layoutIndex, zoneEmphasis);
        var columns = section.columns.filter(function (c) { return c.order === sectionIndex; });
        if (columns.length < 1) {
            column = section.addColumn(sectionFactor, layoutIndex);
        }
        else {
            column = columns[0];
        }
        control.column = column;
        column.addControl(control);
    };
    /**
     * Merges the supplied column into the tree
     *
     * @param column Column to merge
     * @param position The position data for the column
     */
    _ClientsidePage.prototype.mergeColumnToTree = function (column) {
        var _a, _b;
        var order = hOP(column.data, "position") && hOP(column.data.position, "zoneIndex") ? column.data.position.zoneIndex : 0;
        var layoutIndex = hOP(column.data, "position") && hOP(column.data.position, "layoutIndex") ? column.data.position.layoutIndex : 1;
        var section = this.getOrCreateSection(order, layoutIndex, ((_b = (_a = column.data) === null || _a === void 0 ? void 0 : _a.emphasis) === null || _b === void 0 ? void 0 : _b.zoneEmphasis) || 0);
        column.section = section;
        section.columns.push(column);
    };
    /**
     * Handle the logic to get or create a section based on the supplied order and layoutIndex
     *
     * @param order Section order
     * @param layoutIndex Layout Index (1 === normal, 2 === vertical section)
     * @param emphasis The section emphasis
     */
    _ClientsidePage.prototype.getOrCreateSection = function (order, layoutIndex, emphasis) {
        var section = null;
        var sections = this.sections.filter(function (s) { return s.order === order && s.layoutIndex === layoutIndex; });
        if (sections.length < 1) {
            section = layoutIndex === 2 ? this.addVerticalSection() : this.addSection();
            section.order = order;
            section.emphasis = emphasis;
        }
        else {
            section = sections[0];
        }
        return section;
    };
    /**
     * Based on issue #1690 we need to take special case actions to ensure some things
     * can be saved properly without breaking existing pages.
     *
     * @param control The control we are ensuring is "ready" to be saved
     */
    _ClientsidePage.prototype.specialSaveHandling = function (control) {
        var _a, _b, _c;
        // this is to handle the special case in issue #1690
        // must ensure that searchablePlainTexts values have < replaced with &lt; in links web part
        if (control.data.controlType === 3 && control.data.webPartId === "c70391ea-0b10-4ee9-b2b4-006d3fcad0cd") {
            var texts = ((_c = (_b = (_a = control.data) === null || _a === void 0 ? void 0 : _a.webPartData) === null || _b === void 0 ? void 0 : _b.serverProcessedContent) === null || _c === void 0 ? void 0 : _c.searchablePlainTexts) || null;
            if (objectDefinedNotNull(texts)) {
                var keys = Object.getOwnPropertyNames(texts);
                for (var i = 0; i < keys.length; i++) {
                    texts[keys[i]] = texts[keys[i]].replace(/</ig, "&lt;");
                    control.data.webPartData.serverProcessedContent.searchablePlainTexts = texts;
                }
            }
        }
        return control;
    };
    __decorate([
        tag("csp.load")
    ], _ClientsidePage.prototype, "load", null);
    __decorate([
        tag("csp.save")
    ], _ClientsidePage.prototype, "save", null);
    __decorate([
        tag("csp.discardPageCheckout")
    ], _ClientsidePage.prototype, "discardPageCheckout", null);
    __decorate([
        tag("csp.promoteToNews")
    ], _ClientsidePage.prototype, "promoteToNews", null);
    __decorate([
        tag("csp.copy")
    ], _ClientsidePage.prototype, "copy", null);
    __decorate([
        tag("csp.copyTo")
    ], _ClientsidePage.prototype, "copyTo", null);
    __decorate([
        tag("csp.getItem")
    ], _ClientsidePage.prototype, "getItem", null);
    return _ClientsidePage;
}(_SharePointQueryable));

/**
 * Invokable factory for IClientSidePage instances
 */
var ClientsidePage = function (baseUrl, path, json, noInit, sections, commentsDisabled) {
    if (noInit === void 0) { noInit = false; }
    if (sections === void 0) { sections = []; }
    if (commentsDisabled === void 0) { commentsDisabled = false; }
    return invokableFactory(_ClientsidePage)(baseUrl, path, json, noInit, sections, commentsDisabled);
};
/**
 * Loads a client side page from the supplied IFile instance
 *
 * @param file Source IFile instance
 */
var ClientsidePageFromFile = function (file) { return __awaiter(void 0, void 0, void 0, function () {
    var item, page;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, file.getItem()];
            case 1:
                item = _a.sent();
                page = ClientsidePage(extractWebUrl(file.toUrl()), "", { Id: item.Id }, true);
                return [2 /*return*/, page.configureFrom(file).load()];
        }
    });
}); };
/**
 * Creates a new client side page
 *
 * @param web The web or list
 * @param pageName The name of the page (filename)
 * @param title The page's title
 * @param PageLayoutType Layout to use when creating the page
 */
var CreateClientsidePage = function (web, pageName, title, PageLayoutType, promotedState) {
    if (PageLayoutType === void 0) { PageLayoutType = "Article"; }
    if (promotedState === void 0) { promotedState = 0; }
    return __awaiter(void 0, void 0, void 0, function () {
        var pageInitData, newPage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // patched because previously we used the full page name with the .aspx at the end
                    // this allows folk's existing code to work after the re-write to the new API
                    pageName = pageName.replace(/\.aspx$/i, "");
                    return [4 /*yield*/, spPost(initFrom(web, "_api/sitepages/pages"), body(Object.assign(metadata("SP.Publishing.SitePage"), {
                            PageLayoutType: PageLayoutType,
                            PromotedState: promotedState,
                        })))];
                case 1:
                    pageInitData = _a.sent();
                    newPage = ClientsidePage(web, "", pageInitData);
                    newPage.title = pageName;
                    return [4 /*yield*/, newPage.save(false)];
                case 2:
                    _a.sent();
                    newPage.title = title;
                    return [2 /*return*/, newPage];
            }
        });
    });
};
var CanvasSection = /** @class */ (function () {
    function CanvasSection(page, order, layoutIndex, columns, _emphasis) {
        if (columns === void 0) { columns = []; }
        if (_emphasis === void 0) { _emphasis = 0; }
        this.page = page;
        this.columns = columns;
        this._emphasis = _emphasis;
        this._memId = util_getGUID();
        this._order = order;
        this._layoutIndex = layoutIndex;
    }
    Object.defineProperty(CanvasSection.prototype, "order", {
        get: function () {
            return this._order;
        },
        set: function (value) {
            this._order = value;
            for (var i = 0; i < this.columns.length; i++) {
                this.columns[i].data.position.zoneIndex = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasSection.prototype, "layoutIndex", {
        get: function () {
            return this._layoutIndex;
        },
        set: function (value) {
            this._layoutIndex = value;
            for (var i = 0; i < this.columns.length; i++) {
                this.columns[i].data.position.layoutIndex = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasSection.prototype, "defaultColumn", {
        /**
         * Default column (this.columns[0]) for this section
         */
        get: function () {
            if (this.columns.length < 1) {
                this.addColumn(12);
            }
            return this.columns[0];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds a new column to this section
     */
    CanvasSection.prototype.addColumn = function (factor, layoutIndex) {
        if (layoutIndex === void 0) { layoutIndex = this.layoutIndex; }
        var column = new CanvasColumn();
        column.section = this;
        column.data.position.zoneIndex = this.order;
        column.data.position.layoutIndex = layoutIndex;
        column.data.position.sectionFactor = factor;
        column.order = getNextOrder(this.columns);
        this.columns.push(column);
        return column;
    };
    /**
     * Adds a control to the default column for this section
     *
     * @param control Control to add to the default column
     */
    CanvasSection.prototype.addControl = function (control) {
        this.defaultColumn.addControl(control);
        return this;
    };
    Object.defineProperty(CanvasSection.prototype, "emphasis", {
        get: function () {
            return this._emphasis;
        },
        set: function (value) {
            this._emphasis = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Removes this section and all contained columns and controls from the collection
     */
    CanvasSection.prototype.remove = function () {
        var _this = this;
        this.page.sections = this.page.sections.filter(function (section) { return section._memId !== _this._memId; });
        reindex(this.page.sections);
    };
    return CanvasSection;
}());

var CanvasColumn = /** @class */ (function () {
    function CanvasColumn(json, controls) {
        if (json === void 0) { json = JSON.parse(JSON.stringify(CanvasColumn.Default)); }
        if (controls === void 0) { controls = []; }
        this.json = json;
        this.controls = controls;
        this._section = null;
        this._memId = util_getGUID();
    }
    Object.defineProperty(CanvasColumn.prototype, "data", {
        get: function () {
            return this.json;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasColumn.prototype, "section", {
        get: function () {
            return this._section;
        },
        set: function (section) {
            this._section = section;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasColumn.prototype, "order", {
        get: function () {
            return this.data.position.sectionIndex;
        },
        set: function (value) {
            this.data.position.sectionIndex = value;
            for (var i = 0; i < this.controls.length; i++) {
                this.controls[i].data.position.zoneIndex = this.data.position.zoneIndex;
                this.controls[i].data.position.layoutIndex = this.data.position.layoutIndex;
                this.controls[i].data.position.sectionIndex = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CanvasColumn.prototype, "factor", {
        get: function () {
            return this.data.position.sectionFactor;
        },
        set: function (value) {
            this.data.position.sectionFactor = value;
        },
        enumerable: false,
        configurable: true
    });
    CanvasColumn.prototype.addControl = function (control) {
        control.column = this;
        this.controls.push(control);
        return this;
    };
    CanvasColumn.prototype.getControl = function (index) {
        return this.controls[index];
    };
    CanvasColumn.prototype.remove = function () {
        var _this = this;
        this.section.columns = this.section.columns.filter(function (column) { return column._memId !== _this._memId; });
        reindex(this.section.columns);
    };
    CanvasColumn.Default = {
        controlType: 0,
        displayMode: 2,
        emphasis: {},
        position: {
            layoutIndex: 1,
            sectionFactor: 12,
            sectionIndex: 1,
            zoneIndex: 1,
        },
    };
    return CanvasColumn;
}());

var ColumnControl = /** @class */ (function () {
    function ColumnControl(json) {
        this.json = json;
    }
    Object.defineProperty(ColumnControl.prototype, "id", {
        get: function () {
            return this.json.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColumnControl.prototype, "data", {
        get: function () {
            return this.json;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ColumnControl.prototype, "column", {
        get: function () {
            return this._column;
        },
        set: function (value) {
            this._column = value;
            this.onColumnChange(this._column);
        },
        enumerable: false,
        configurable: true
    });
    ColumnControl.prototype.remove = function () {
        var _this = this;
        this.column.controls = this.column.controls.filter(function (control) { return control.id !== _this.id; });
        reindex(this.column.controls);
    };
    ColumnControl.prototype.setData = function (data) {
        this.json = data;
    };
    return ColumnControl;
}());

var ClientsideText = /** @class */ (function (_super) {
    __extends(ClientsideText, _super);
    function ClientsideText(text, json) {
        if (json === void 0) { json = JSON.parse(JSON.stringify(ClientsideText.Default)); }
        var _this = this;
        if (stringIsNullOrEmpty(json.id)) {
            json.id = util_getGUID();
            json.anchorComponentId = json.id;
        }
        _this = _super.call(this, json) || this;
        _this.text = text;
        return _this;
    }
    Object.defineProperty(ClientsideText.prototype, "text", {
        get: function () {
            return this.data.innerHTML;
        },
        set: function (value) {
            this.data.innerHTML = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientsideText.prototype, "order", {
        get: function () {
            return this.data.position.controlIndex;
        },
        set: function (value) {
            this.data.position.controlIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    ClientsideText.prototype.onColumnChange = function (col) {
        this.data.position.sectionFactor = col.factor;
        this.data.position.controlIndex = getNextOrder(col.controls);
        this.data.position.zoneIndex = col.data.position.zoneIndex;
        this.data.position.sectionIndex = col.order;
        this.data.position.layoutIndex = col.data.position.layoutIndex;
    };
    ClientsideText.Default = {
        addedFromPersistedData: false,
        anchorComponentId: "",
        controlType: 4,
        displayMode: 2,
        editorType: "CKEditor",
        emphasis: {},
        id: "",
        innerHTML: "",
        position: {
            controlIndex: 1,
            layoutIndex: 1,
            sectionFactor: 12,
            sectionIndex: 1,
            zoneIndex: 1,
        },
    };
    return ClientsideText;
}(ColumnControl));

var ClientsideWebpart = /** @class */ (function (_super) {
    __extends(ClientsideWebpart, _super);
    function ClientsideWebpart(json) {
        if (json === void 0) { json = JSON.parse(JSON.stringify(ClientsideWebpart.Default)); }
        return _super.call(this, json) || this;
    }
    ClientsideWebpart.fromComponentDef = function (definition) {
        var part = new ClientsideWebpart();
        part.import(definition);
        return part;
    };
    Object.defineProperty(ClientsideWebpart.prototype, "title", {
        get: function () {
            return this.data.webPartData.title;
        },
        set: function (value) {
            this.data.webPartData.title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientsideWebpart.prototype, "description", {
        get: function () {
            return this.data.webPartData.description;
        },
        set: function (value) {
            this.data.webPartData.description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientsideWebpart.prototype, "order", {
        get: function () {
            return this.data.position.controlIndex;
        },
        set: function (value) {
            this.data.position.controlIndex = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientsideWebpart.prototype, "height", {
        get: function () {
            return this.data.reservedHeight;
        },
        set: function (value) {
            this.data.reservedHeight = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientsideWebpart.prototype, "width", {
        get: function () {
            return this.data.reservedWidth;
        },
        set: function (value) {
            this.data.reservedWidth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClientsideWebpart.prototype, "dataVersion", {
        get: function () {
            return this.data.webPartData.dataVersion;
        },
        set: function (value) {
            this.data.webPartData.dataVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    ClientsideWebpart.prototype.setProperties = function (properties) {
        this.data.webPartData.properties = util_assign(this.data.webPartData.properties, properties);
        return this;
    };
    ClientsideWebpart.prototype.getProperties = function () {
        return this.data.webPartData.properties;
    };
    ClientsideWebpart.prototype.onColumnChange = function (col) {
        this.data.position.sectionFactor = col.factor;
        this.data.position.controlIndex = getNextOrder(col.controls);
        this.data.position.zoneIndex = col.data.position.zoneIndex;
        this.data.position.sectionIndex = col.data.position.sectionIndex;
        this.data.position.layoutIndex = col.data.position.layoutIndex;
    };
    ClientsideWebpart.prototype.import = function (component) {
        var id = util_getGUID();
        var componendId = component.Id.replace(/^\{|\}$/g, "").toLowerCase();
        var manifest = JSON.parse(component.Manifest);
        var preconfiguredEntries = manifest.preconfiguredEntries[0];
        this.setData(Object.assign({}, this.data, {
            id: id,
            webPartData: {
                dataVersion: "1.0",
                description: preconfiguredEntries.description.default,
                id: componendId,
                instanceId: id,
                properties: preconfiguredEntries.properties,
                title: preconfiguredEntries.title.default,
            },
            webPartId: componendId,
        }));
    };
    ClientsideWebpart.Default = {
        addedFromPersistedData: false,
        controlType: 3,
        displayMode: 2,
        emphasis: {},
        id: null,
        position: {
            controlIndex: 1,
            layoutIndex: 1,
            sectionFactor: 12,
            sectionIndex: 1,
            zoneIndex: 1,
        },
        reservedHeight: 500,
        reservedWidth: 500,
        webPartData: null,
        webPartId: null,
    };
    return ClientsideWebpart;
}(ColumnControl));

//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/web.js









_Web.prototype.getClientsideWebParts = function () {
    return this.clone(SharePointQueryableCollection, "GetClientSideWebParts")();
};
_Web.prototype.addClientsidePage =
    function (pageName, title, layout, promotedState) {
        if (title === void 0) { title = pageName.replace(/\.[^/.]+$/, ""); }
        return CreateClientsidePage(this, pageName, title, layout, promotedState);
    };
_Web.prototype.loadClientsidePage = function (path) {
    return ClientsidePageFromFile(this.getFileByServerRelativePath(path));
};
_Web.prototype.addRepostPage = function (details) {
    return __awaiter(this, void 0, void 0, function () {
        var query, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = SharePointQueryableInstance(extractWebUrl(this.toUrl()), "_api/sitepages/pages/reposts").configureFrom(this);
                    return [4 /*yield*/, spPost(query, body(util_assign(metadata("SP.Publishing.RepostPage"), details)))];
                case 1:
                    r = _a.sent();
                    return [2 /*return*/, r.AbsoluteUrl];
            }
        });
    });
};
// eslint-disable-next-line max-len
_Web.prototype.addFullPageApp = function (pageName, title, componentId, promotedState) {
    if (title === void 0) { title = pageName.replace(/\.[^/.]+$/, ""); }
    return __awaiter(this, void 0, void 0, function () {
        var parts, test, partDef, part, page;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getClientsideWebParts()];
                case 1:
                    parts = _a.sent();
                    test = new RegExp("{?" + componentId + "}?", "i");
                    partDef = parts.find(function (p) { return test.test(p.Id); });
                    part = ClientsideWebpart.fromComponentDef(partDef);
                    return [4 /*yield*/, this.addClientsidePage(pageName, title, "SingleWebPartAppPage", promotedState)];
                case 2:
                    page = _a.sent();
                    page.addSection().addColumn(12).addControl(part);
                    return [2 /*return*/, page];
            }
        });
    });
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/clientside-pages/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/types.js












var _Folders = /** @class */ (function (_super) {
    __extends(_Folders, _super);
    function _Folders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a folder by it's name
     *
     * @param name Folder's name
     */
    _Folders.prototype.getByName = function (name) {
        return tag.configure(Folder(this).concat("('" + escapeQueryStrValue(name) + "')"), "fs.getByName");
    };
    /**
     * Adds a new folder at the specified URL
     *
     * @param url
     */
    _Folders.prototype.add = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Folders, "add('" + escapeQueryStrValue(url) + "')"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                folder: this.getByName(url),
                            }];
                }
            });
        });
    };
    /**
     * Adds a new folder by path and should be prefered over add
     *
     * @param serverRelativeUrl The server relative url of the new folder to create
     * @param overwrite True to overwrite an existing folder, default false
     */
    _Folders.prototype.addUsingPath = function (serverRelativeUrl, overwrite) {
        if (overwrite === void 0) { overwrite = false; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Folders, "addUsingPath(DecodedUrl='" + escapeQueryStrValue(serverRelativeUrl) + "',overwrite=" + overwrite + ")"))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                folder: Folder(extractWebUrl(this.toUrl()), "_api/web/getFolderByServerRelativePath(decodedUrl='" + escapeQueryStrValue(serverRelativeUrl) + "')"),
                            }];
                }
            });
        });
    };
    __decorate([
        tag("fs.add")
    ], _Folders.prototype, "add", null);
    __decorate([
        tag("fs.addUsingPath")
    ], _Folders.prototype, "addUsingPath", null);
    _Folders = __decorate([
        defaultPath("folders")
    ], _Folders);
    return _Folders;
}(_SharePointQueryableCollection));

var Folders = spInvokableFactory(_Folders);
var _Folder = /** @class */ (function (_super) {
    __extends(_Folder, _super);
    function _Folder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteableWithETag("f");
        /**
         * Updates folder's properties
         * @param props Folder's properties to update
         */
        _this.update = _this._update("SP.Folder", function (data) { return ({ data: data, folder: _this }); });
        return _this;
    }
    Object.defineProperty(_Folder.prototype, "contentTypeOrder", {
        /**
         * Specifies the sequence in which content types are displayed.
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableCollection(this, "contentTypeOrder"), "f.contentTypeOrder");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "folders", {
        /**
         * Gets this folder's sub folders
         *
         */
        get: function () {
            return Folders(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "listItemAllFields", {
        /**
         * Gets this folder's list item field values
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableInstance(this, "listItemAllFields"), "f.listItemAllFields");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "parentFolder", {
        /**
         * Gets the parent folder, if available
         *
         */
        get: function () {
            return tag.configure(Folder(this, "parentFolder"), "f.parentFolder");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "properties", {
        /**
         * Gets this folder's properties
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableInstance(this, "properties"), "f.properties");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "serverRelativeUrl", {
        /**
         * Gets this folder's server relative url
         *
         */
        get: function () {
            return tag.configure(SharePointQueryable(this, "serverRelativeUrl"), "f.serverRelativeUrl");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Folder.prototype, "uniqueContentTypeOrder", {
        /**
         * Gets a value that specifies the content type order.
         *
         */
        get: function () {
            return tag.configure(SharePointQueryableCollection(this, "uniqueContentTypeOrder"), "f.uniqueContentTypeOrder");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Moves the folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
     */
    _Folder.prototype.recycle = function () {
        return spPost(this.clone(Folder, "recycle"));
    };
    /**
     * Gets the associated list item for this folder, loading the default properties
     */
    _Folder.prototype.getItem = function () {
        var selects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            selects[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var q;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (_a = this.listItemAllFields).select.apply(_a, __spreadArray([], __read(selects)))()];
                    case 1:
                        q = _b.sent();
                        if (hOP(q, "odata.null") && q["odata.null"]) {
                            throw Error("No associated item was found for this folder. It may be the root folder, which does not have an item.");
                        }
                        return [2 /*return*/, util_assign(Item(odataUrlFrom(q)).configureFrom(this), q)];
                }
            });
        });
    };
    /**
     * Moves a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    _Folder.prototype.moveTo = function (destUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var urlInfo, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getParentInfos()];
                    case 1:
                        urlInfo = _a.sent();
                        uri = new URL(urlInfo.ParentWeb.Url);
                        return [4 /*yield*/, spPost(Folder(urlInfo.ParentWeb.Url, "/_api/SP.MoveCopyUtil.MoveFolder()").configureFrom(this), body({
                                destUrl: isUrlAbsolute(destUrl) ? destUrl : combine(uri.origin, destUrl),
                                srcUrl: combine(uri.origin, urlInfo.Folder.ServerRelativeUrl),
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Moves a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    _Folder.prototype.moveByPath = function (destUrl, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return __awaiter(this, void 0, void 0, function () {
            var urlInfo, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getParentInfos()];
                    case 1:
                        urlInfo = _a.sent();
                        uri = new URL(urlInfo.ParentWeb.Url);
                        return [4 /*yield*/, spPost(Folder(uri.origin, "/_api/SP.MoveCopyUtil.MoveFolderByPath()").configureFrom(this), body({
                                destPath: toResourcePath(isUrlAbsolute(destUrl) ? destUrl : combine(uri.origin, destUrl)),
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: true,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: toResourcePath(combine(uri.origin, urlInfo.Folder.ServerRelativeUrl)),
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Copies a folder to destination path
     *
     * @param destUrl Absolute or relative URL of the destination path
     */
    _Folder.prototype.copyTo = function (destUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var urlInfo, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getParentInfos()];
                    case 1:
                        urlInfo = _a.sent();
                        uri = new URL(urlInfo.ParentWeb.Url);
                        return [4 /*yield*/, spPost(Folder(uri.origin, "/_api/SP.MoveCopyUtil.CopyFolder()").configureFrom(this), body({
                                destUrl: isUrlAbsolute(destUrl) ? destUrl : combine(uri.origin, destUrl),
                                srcUrl: combine(uri.origin, urlInfo.Folder.ServerRelativeUrl),
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Copies a folder by path to destination path
     * Also works with different site collections.
     *
     * @param destUrl Absolute or relative URL of the destination path
     * @param keepBoth Keep both if folder with the same name in the same location already exists?
     */
    _Folder.prototype.copyByPath = function (destUrl, KeepBoth) {
        if (KeepBoth === void 0) { KeepBoth = false; }
        return __awaiter(this, void 0, void 0, function () {
            var urlInfo, uri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getParentInfos()];
                    case 1:
                        urlInfo = _a.sent();
                        uri = new URL(urlInfo.ParentWeb.Url);
                        return [4 /*yield*/, spPost(Folder(uri.origin, "/_api/SP.MoveCopyUtil.CopyFolderByPath()").configureFrom(this), body({
                                destPath: toResourcePath(isUrlAbsolute(destUrl) ? destUrl : combine(uri.origin, destUrl)),
                                options: {
                                    KeepBoth: KeepBoth,
                                    ResetAuthorAndCreatedOnCopy: true,
                                    ShouldBypassSharedLocks: true,
                                    __metadata: {
                                        type: "SP.MoveCopyOptions",
                                    },
                                },
                                srcPath: toResourcePath(combine(uri.origin, urlInfo.Folder.ServerRelativeUrl)),
                            }))];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deletes the folder object with options.
     *
     * @param parameters Specifies the options to use when deleting a folder.
     */
    _Folder.prototype.deleteWithParams = function (parameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, spPost(this.clone(Folder, "DeleteWithParameters"), body({ parameters: parameters }))];
            });
        });
    };
    /**
     * Create the subfolder inside the current folder, as specified by the leafPath
     *
     * @param leafPath leafName of the new folder
     */
    _Folder.prototype.addSubFolderUsingPath = function (leafPath) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Folder, "AddSubFolderUsingPath"), body({ leafPath: toResourcePath(leafPath) }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.folders.getByName(leafPath)];
                }
            });
        });
    };
    /**
     * Gets the parent information for this folder's list and web
     */
    _Folder.prototype.getParentInfos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var urlInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.select("ServerRelativeUrl", "ListItemAllFields/ParentList/Id", "ListItemAllFields/ParentList/RootFolder/UniqueId", "ListItemAllFields/ParentList/RootFolder/ServerRelativeUrl", "ListItemAllFields/ParentList/RootFolder/ServerRelativePath", "ListItemAllFields/ParentList/ParentWeb/Id", "ListItemAllFields/ParentList/ParentWeb/Url", "ListItemAllFields/ParentList/ParentWeb/ServerRelativeUrl", "ListItemAllFields/ParentList/ParentWeb/ServerRelativePath").expand("ListItemAllFields/ParentList", "ListItemAllFields/ParentList/RootFolder", "ListItemAllFields/ParentList/ParentWeb")()];
                    case 1:
                        urlInfo = _a.sent();
                        return [2 /*return*/, {
                                Folder: {
                                    ServerRelativeUrl: urlInfo.ServerRelativeUrl,
                                },
                                ParentList: {
                                    Id: urlInfo.ListItemAllFields.ParentList.Id,
                                    RootFolderServerRelativePath: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativePath,
                                    RootFolderServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.RootFolder.ServerRelativeUrl,
                                    RootFolderUniqueId: urlInfo.ListItemAllFields.ParentList.RootFolder.UniqueId,
                                },
                                ParentWeb: {
                                    Id: urlInfo.ListItemAllFields.ParentList.ParentWeb.Id,
                                    ServerRelativePath: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativePath,
                                    ServerRelativeUrl: urlInfo.ListItemAllFields.ParentList.ParentWeb.ServerRelativeUrl,
                                    Url: urlInfo.ListItemAllFields.ParentList.ParentWeb.Url,
                                },
                            }];
                }
            });
        });
    };
    /**
     * Gets the shareable item associated with this folder
     */
    _Folder.prototype.getShareable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var d, shareable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(SharePointQueryableInstance, "listItemAllFields", false).select("odata.id")()];
                    case 1:
                        d = _a.sent();
                        shareable = Item(odataUrlFrom(d)).configureFrom(this);
                        // we need to handle batching
                        if (this.hasBatch) {
                            shareable = shareable.inBatch(this.batch);
                        }
                        return [2 /*return*/, shareable];
                }
            });
        });
    };
    __decorate([
        tag("f.recycle")
    ], _Folder.prototype, "recycle", null);
    __decorate([
        tag("f.getItem")
    ], _Folder.prototype, "getItem", null);
    __decorate([
        tag("f.moveTo")
    ], _Folder.prototype, "moveTo", null);
    __decorate([
        tag("f.moveByPath")
    ], _Folder.prototype, "moveByPath", null);
    __decorate([
        tag("f.copyTo")
    ], _Folder.prototype, "copyTo", null);
    __decorate([
        tag("f.copyByPath")
    ], _Folder.prototype, "copyByPath", null);
    __decorate([
        tag("f.del-params")
    ], _Folder.prototype, "deleteWithParams", null);
    __decorate([
        tag("f.getShareable")
    ], _Folder.prototype, "getShareable", null);
    return _Folder;
}(_SharePointQueryableInstance));

var Folder = spInvokableFactory(_Folder);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/column-defaults/list.js









addProp(_List, "rootFolder", Folder, "rootFolder");
_List.prototype.getDefaultColumnValues = function () {
    return __awaiter(this, void 0, void 0, function () {
        var pathPart, webUrl, path, baseFilePath, xml, e_1, matches, tags;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.rootFolder.select("ServerRelativePath")()];
                case 1:
                    pathPart = _a.sent();
                    return [4 /*yield*/, this.select("ParentWeb/Url").expand("ParentWeb")()];
                case 2:
                    webUrl = _a.sent();
                    path = combine("/", pathPart.ServerRelativePath.DecodedUrl, "Forms/client_LocationBasedDefaults.html");
                    baseFilePath = combine(webUrl.ParentWeb.Url, "_api/web", "getFileByServerRelativePath(decodedUrl='" + escapeQueryStrValue(path) + "')");
                    xml = "";
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, Folder(baseFilePath, "$value").usingParser(new TextParser())(headers({ "binaryStringResponseBody": "true" }))];
                case 4:
                    xml = _a.sent();
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    // if this call fails we assume it is because the file is 404
                    if (e_1 && e_1.status && e_1.status === 404) {
                        // return an empty array
                        return [2 /*return*/, []];
                    }
                    throw e_1;
                case 6:
                    matches = xml.match(/<a.*?<\/a>/ig);
                    tags = matches === null ? [] : matches.map(function (t) { return t.trim(); });
                    // now we need to turn these tags of form into objects
                    // <a href="/sites/dev/My%20Title"><DefaultValue FieldName="TextField">Test</DefaultValue></a>
                    return [2 /*return*/, tags.reduce(function (defVals, t) {
                            var m = /<a href="(.*?)">/ig.exec(t);
                            // if things worked out captures are:
                            // 0: whole string
                            // 1: ENCODED server relative path
                            if (m.length < 1) {
                                // this indicates an error somewhere, but we have no way to meaningfully recover
                                // perhaps the way the tags are stored has changed on the server? Check that first.
                                Logger.write("Could not parse default column value from '" + t + "'", 2 /* Warning */);
                                return null;
                            }
                            // return the parsed out values
                            var subMatches = t.match(/<DefaultValue.*?<\/DefaultValue>/ig);
                            var subTags = subMatches === null ? [] : subMatches.map(function (st) { return st.trim(); });
                            subTags.map(function (st) {
                                var sm = /<DefaultValue FieldName="(.*?)">(.*?)<\/DefaultValue>/ig.exec(st);
                                // if things worked out captures are:
                                // 0: whole string
                                // 1: Field internal name
                                // 2: Default value as string
                                if (sm.length < 1) {
                                    Logger.write("Could not parse default column value from '" + st + "'", 2 /* Warning */);
                                }
                                else {
                                    defVals.push({
                                        name: sm[1],
                                        path: decodeURIComponent(m[1]),
                                        value: sm[2],
                                    });
                                }
                            });
                            return defVals;
                        }, []).filter(function (v) { return v !== null; })];
            }
        });
    });
};
_List.prototype.setDefaultColumnValues = function (defaults) {
    return __awaiter(this, void 0, void 0, function () {
        var fieldDefs, defaultsByPath, i, paths, pathDefaults, j, pathFields, tags, href, pathDefault, xml, pathPart, webUrl, path, baseFilePath, existingReceivers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, SharePointQueryableCollection(this, "fields").select("InternalName", "TypeAsString").filter("Hidden ne true")()];
                case 1:
                    fieldDefs = _a.sent();
                    defaultsByPath = {};
                    for (i = 0; i < defaults.length; i++) {
                        if (defaultsByPath[defaults[i].path] == null) {
                            defaultsByPath[defaults[i].path] = [defaults[i]];
                        }
                        else {
                            defaultsByPath[defaults[i].path].push(defaults[i]);
                        }
                    }
                    paths = Object.getOwnPropertyNames(defaultsByPath);
                    pathDefaults = [];
                    // For each path, group field defaults
                    for (j = 0; j < paths.length; j++) {
                        pathFields = defaultsByPath[paths[j]];
                        tags = pathFields.map(function (fieldDefault) {
                            var index = fieldDefs.findIndex(function (fd) { return fd.InternalName === fieldDefault.name; });
                            if (index < 0) {
                                throw Error("Field '" + fieldDefault.name + "' does not exist in the list. Please check the internal field name. Failed to set defaults.");
                            }
                            var fieldDef = fieldDefs[index];
                            var value = "";
                            switch (fieldDef.TypeAsString) {
                                case "Boolean":
                                case "Currency":
                                case "Text":
                                case "DateTime":
                                case "Number":
                                case "Choice":
                                case "User":
                                    if (isArray(fieldDefault.value)) {
                                        throw Error("The type '" + fieldDef.TypeAsString + "' does not support multiple values.");
                                    }
                                    value = "" + fieldDefault.value;
                                    break;
                                case "MultiChoice":
                                    if (isArray(fieldDefault.value)) {
                                        value = fieldDefault.value.map(function (v) { return "" + v; }).join(";");
                                    }
                                    else {
                                        value = "" + fieldDefault.value;
                                    }
                                    break;
                                case "UserMulti":
                                    if (isArray(fieldDefault.value)) {
                                        value = fieldDefault.value.map(function (v) { return "" + v; }).join(";#");
                                    }
                                    else {
                                        value = "" + fieldDefault.value;
                                    }
                                    break;
                                case "Taxonomy":
                                case "TaxonomyFieldType":
                                    if (isArray(fieldDefault.value)) {
                                        throw Error("The type '" + fieldDef.TypeAsString + "' does not support multiple values.");
                                    }
                                    else {
                                        value = fieldDefault.value.wssId + ";#" + fieldDefault.value.termName + "|" + fieldDefault.value.termId;
                                    }
                                    break;
                                case "TaxonomyMulti":
                                case "TaxonomyFieldTypeMulti":
                                    if (isArray(fieldDefault.value)) {
                                        value = fieldDefault.value.map(function (v) { return v.wssId + ";#" + v.termName + "|" + v.termId; }).join(";#");
                                    }
                                    else {
                                        value = [fieldDefault.value].map(function (v) { return v.wssId + ";#" + v.termName + "|" + v.termId; }).join(";#");
                                    }
                                    break;
                            }
                            return "<DefaultValue FieldName=\"" + fieldDefault.name + "\">" + value + "</DefaultValue>";
                        });
                        href = pathFields[0].path.replace(/ /gi, "%20");
                        pathDefault = "<a href=\"" + href + "\">" + tags.join("") + "</a>";
                        pathDefaults.push(pathDefault);
                    }
                    xml = "<MetadataDefaults>" + pathDefaults.join("") + "</MetadataDefaults>";
                    return [4 /*yield*/, this.rootFolder.select("ServerRelativePath")()];
                case 2:
                    pathPart = _a.sent();
                    return [4 /*yield*/, this.select("ParentWeb/Url").expand("ParentWeb")()];
                case 3:
                    webUrl = _a.sent();
                    path = combine("/", pathPart.ServerRelativePath.DecodedUrl, "Forms");
                    baseFilePath = combine(webUrl.ParentWeb.Url, "_api/web", "getFolderByServerRelativePath(decodedUrl='" + escapeQueryStrValue(path) + "')", "files");
                    return [4 /*yield*/, spPost(Folder(baseFilePath, "add(overwrite=true,url='client_LocationBasedDefaults.html')"), { body: xml })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, this.eventReceivers.filter("ReceiverName eq 'LocationBasedMetadataDefaultsReceiver ItemAdded'").select("ReceiverId")()];
                case 5:
                    existingReceivers = _a.sent();
                    if (!(existingReceivers.length < 1)) return [3 /*break*/, 7];
                    return [4 /*yield*/, spPost(List(this.eventReceivers, "add"), body({
                            eventReceiverCreationInformation: {
                                EventType: 10001,
                                ReceiverAssembly: "Microsoft.Office.DocumentManagement, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c",
                                ReceiverClass: "Microsoft.Office.DocumentManagement.LocationBasedMetadataDefaultsReceiver",
                                ReceiverName: "LocationBasedMetadataDefaultsReceiver ItemAdded",
                                SequenceNumber: 1000,
                                Synchronization: 1,
                            },
                        }))];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/web.js







addProp(_Web, "lists", Lists);
addProp(_Web, "siteUserInfoList", List, "siteuserinfolist");
addProp(_Web, "defaultDocumentLibrary", List, "DefaultDocumentLibrary");
addProp(_Web, "customListTemplates", SharePointQueryableCollection, "getcustomlisttemplates");
_Web.prototype.getList = function (listRelativeUrl) {
    return List(this, "getList('" + escapeQueryStrValue(listRelativeUrl) + "')");
};
_Web.prototype.getCatalog = function (type) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.clone(Web, "getcatalog(" + type + ")").select("Id").get()];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, List(odataUrlFrom(data))];
            }
        });
    });
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/column-defaults/folder.js






_Folder.prototype.getDefaultColumnValues = function () {
    return __awaiter(this, void 0, void 0, function () {
        var folderProps, serRelPath, web, docLib;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Folder(this, "Properties").select("vti_x005f_listname")()];
                case 1:
                    folderProps = _a.sent();
                    return [4 /*yield*/, this.select("ServerRelativePath")()];
                case 2:
                    serRelPath = (_a.sent()).ServerRelativePath;
                    web = Web(extractWebUrl(odataUrlFrom(folderProps))).configureFrom(this);
                    docLib = web.lists.getById(folderProps.vti_x005f_listname);
                    return [4 /*yield*/, docLib.getDefaultColumnValues()];
                case 3: 
                // and we return the defaults associated with this folder's server relative path only
                // if you want all the defaults use list.getDefaultColumnValues()
                return [2 /*return*/, (_a.sent()).filter(function (v) { return v.path.toLowerCase() === serRelPath.DecodedUrl.toLowerCase(); })];
            }
        });
    });
};
_Folder.prototype.setDefaultColumnValues = function (fieldDefaults, merge) {
    if (merge === void 0) { merge = true; }
    return __awaiter(this, void 0, void 0, function () {
        var folderProps, web, docLib, folderPath, existingDefaults, filteredExistingDefaults;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Folder(this, "Properties").select("vti_x005f_listname")()];
                case 1:
                    folderProps = _a.sent();
                    web = Web(extractWebUrl(odataUrlFrom(folderProps))).configureFrom(this);
                    docLib = web.lists.getById(folderProps.vti_x005f_listname);
                    return [4 /*yield*/, this.select("ServerRelativePath")()];
                case 2:
                    folderPath = (_a.sent()).ServerRelativePath.DecodedUrl;
                    return [4 /*yield*/, docLib.getDefaultColumnValues()];
                case 3:
                    existingDefaults = _a.sent();
                    filteredExistingDefaults = merge ? existingDefaults : existingDefaults.filter(function (f) { return f.path !== folderPath; });
                    // we update / add any new defaults from those passed to this method
                    fieldDefaults.forEach(function (d) {
                        var existing = filteredExistingDefaults.find(function (ed) { return ed.name === d.name && ed.path === folderPath; });
                        if (existing) {
                            existing.value = d.value;
                        }
                        else {
                            filteredExistingDefaults.push({
                                name: d.name,
                                path: folderPath,
                                value: d.value,
                            });
                        }
                    });
                    // after this operation filteredExistingDefaults should contain all the value we want to write to the file
                    return [4 /*yield*/, docLib.setDefaultColumnValues(filteredExistingDefaults)];
                case 4:
                    // after this operation filteredExistingDefaults should contain all the value we want to write to the file
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
_Folder.prototype.clearDefaultColumnValues = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.setDefaultColumnValues([], false)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=folder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/column-defaults/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/comments/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/types.js







var _ContentTypes = /** @class */ (function (_super) {
    __extends(_ContentTypes, _super);
    function _ContentTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds an existing contenttype to a content type collection
     *
     * @param contentTypeId in the following format, for example: 0x010102
     */
    _ContentTypes.prototype.addAvailableContentType = function (contentTypeId) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(ContentTypes, "addAvailableContentType"), body({ "contentTypeId": contentTypeId }))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                contentType: this.getById(data.id),
                                data: data,
                            }];
                }
            });
        });
    };
    /**
     * Gets a ContentType by content type id
     * @param id The id of the content type to get, in the following format, for example: 0x010102
     */
    _ContentTypes.prototype.getById = function (id) {
        return tag.configure(ContentType(this).concat("('" + id + "')"), "cts.getById");
    };
    /**
     * Adds a new content type to the collection
     *
     * @param id The desired content type id for the new content type (also determines the parent content type)
     * @param name The name of the content type
     * @param description The description of the content type
     * @param group The group in which to add the content type
     * @param additionalSettings Any additional settings to provide when creating the content type
     *
     */
    _ContentTypes.prototype.add = function (id, name, description, group, additionalSettings) {
        if (description === void 0) { description = ""; }
        if (group === void 0) { group = "Custom Content Types"; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object.assign(metadata("SP.ContentType"), {
                            "Description": description,
                            "Group": group,
                            "Id": { "StringValue": id },
                            "Name": name,
                        }, additionalSettings));
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { contentType: this.getById(data.id), data: data }];
                }
            });
        });
    };
    __decorate([
        tag("cts.addAvailableContentType")
    ], _ContentTypes.prototype, "addAvailableContentType", null);
    __decorate([
        tag("cts.add")
    ], _ContentTypes.prototype, "add", null);
    _ContentTypes = __decorate([
        defaultPath("contenttypes")
    ], _ContentTypes);
    return _ContentTypes;
}(_SharePointQueryableCollection));

var ContentTypes = spInvokableFactory(_ContentTypes);
var _ContentType = /** @class */ (function (_super) {
    __extends(_ContentType, _super);
    function _ContentType() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("ct");
        return _this;
    }
    Object.defineProperty(_ContentType.prototype, "fieldLinks", {
        /**
         * Gets the column (also known as field) references in the content type.
         */
        get: function () {
            return tag.configure(FieldLinks(this), "ct.fieldLinks");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ContentType.prototype, "fields", {
        /**
         * Gets a value that specifies the collection of fields for the content type.
         */
        get: function () {
            return tag.configure(SharePointQueryableCollection(this, "fields"), "ct.fields");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ContentType.prototype, "parent", {
        /**
         * Gets the parent content type of the content type.
         */
        get: function () {
            return tag.configure(ContentType(this, "parent"), "ct.parent");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_ContentType.prototype, "workflowAssociations", {
        /**
         * Gets a value that specifies the collection of workflow associations for the content type.
         */
        get: function () {
            return tag.configure(SharePointQueryableCollection(this, "workflowAssociations"), "ct.workflowAssociations");
        },
        enumerable: false,
        configurable: true
    });
    return _ContentType;
}(_SharePointQueryableInstance));

var ContentType = spInvokableFactory(_ContentType);
var _FieldLinks = /** @class */ (function (_super) {
    __extends(_FieldLinks, _super);
    function _FieldLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    *  Gets a FieldLink by GUID id
    *
    * @param id The GUID id of the field link
    */
    _FieldLinks.prototype.getById = function (id) {
        return tag.configure(FieldLink(this).concat("(guid'" + id + "')"), "fls.getById");
    };
    _FieldLinks = __decorate([
        defaultPath("fieldlinks")
    ], _FieldLinks);
    return _FieldLinks;
}(_SharePointQueryableCollection));

var FieldLinks = spInvokableFactory(_FieldLinks);
var _FieldLink = /** @class */ (function (_super) {
    __extends(_FieldLink, _super);
    function _FieldLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _FieldLink;
}(_SharePointQueryableInstance));

var FieldLink = spInvokableFactory(_FieldLink);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/web.js



addProp(_Web, "contentTypes", ContentTypes);
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/item.js



addProp(_Item, "contentType", ContentType, "ContentType");
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/list.js



addProp(_List, "contentTypes", ContentTypes);
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/content-types/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/types.js






var _Features = /** @class */ (function (_super) {
    __extends(_Features, _super);
    function _Features() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds (activates) the specified feature
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature activation will be forced
     */
    _Features.prototype.add = function (id, force) {
        if (force === void 0) { force = false; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(Features, "add"), body({
                            featdefScope: 0,
                            featureId: id,
                            force: force,
                        }))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                feature: this.getById(id),
                            }];
                }
            });
        });
    };
    /**
     * Gets a feature from the collection with the specified guid
     *
     * @param id The Id of the feature (GUID)
     */
    _Features.prototype.getById = function (id) {
        var feature = Feature(this);
        feature.concat("('" + id + "')");
        return tag.configure(feature, "fes.getById");
    };
    /**
     * Removes (deactivates) a feature from the collection
     *
     * @param id The Id of the feature (GUID)
     * @param force If true the feature deactivation will be forced
     */
    _Features.prototype.remove = function (id, force) {
        if (force === void 0) { force = false; }
        return spPost(this.clone(Features, "remove"), body({
            featureId: id,
            force: force,
        }));
    };
    __decorate([
        tag("fes.add")
    ], _Features.prototype, "add", null);
    __decorate([
        tag("fes.remove")
    ], _Features.prototype, "remove", null);
    _Features = __decorate([
        defaultPath("features")
    ], _Features);
    return _Features;
}(_SharePointQueryableCollection));

var Features = spInvokableFactory(_Features);
var _Feature = /** @class */ (function (_super) {
    __extends(_Feature, _super);
    function _Feature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Removes (deactivates) the feature
     *
     * @param force If true the feature deactivation will be forced
     */
    _Feature.prototype.deactivate = function (force) {
        if (force === void 0) { force = false; }
        return __awaiter(this, void 0, void 0, function () {
            var removeDependency, feature, promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeDependency = this.addBatchDependency();
                        return [4 /*yield*/, Feature(this).select("DefinitionId")()];
                    case 1:
                        feature = _a.sent();
                        promise = this.getParent(Features, this.parentUrl, "", this.batch).remove(feature.DefinitionId, force);
                        removeDependency();
                        return [2 /*return*/, promise];
                }
            });
        });
    };
    __decorate([
        tag("fe.deactivate")
    ], _Feature.prototype, "deactivate", null);
    return _Feature;
}(_SharePointQueryableInstance));

var Feature = spInvokableFactory(_Feature);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/site.js



addProp(_Site, "features", Features);
//# sourceMappingURL=site.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/web.js



addProp(_Web, "features", Features);
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/features/index.js



//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/types.js








var _Fields = /** @class */ (function (_super) {
    __extends(_Fields, _super);
    function _Fields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a field based on the specified schema
     *
     * @param xml A string or XmlSchemaFieldCreationInformation instance descrbing the field to create
     */
    _Fields.prototype.createFieldAsXml = function (xml) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof xml === "string") {
                            xml = { SchemaXml: xml };
                        }
                        postBody = body({
                            "parameters": util_assign(metadata("SP.XmlSchemaFieldCreationInformation"), xml),
                        });
                        return [4 /*yield*/, spPost(this.clone(Fields, "createfieldasxml"), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                field: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
   * Gets a field from the collection by id
   *
   * @param id The Id of the list
   */
    _Fields.prototype.getById = function (id) {
        return tag.configure(Field(this).concat("('" + id + "')"), "fs.getById");
    };
    /**
   * Gets a field from the collection by title
   *
   * @param title The case-sensitive title of the field
   */
    _Fields.prototype.getByTitle = function (title) {
        return tag.configure(Field(this, "getByTitle('" + title + "')"), "fs.getByTitle");
    };
    /**
   * Gets a field from the collection by using internal name or title
   *
   * @param name The case-sensitive internal name or title of the field
   */
    _Fields.prototype.getByInternalNameOrTitle = function (name) {
        return tag.configure(Field(this, "getByInternalNameOrTitle('" + name + "')"), "fs.getByInternalNameOrTitle");
    };
    /**
   * Adds a new field to the collection
   *
   * @param title The new field's title
   * @param fieldType The new field's type (ex: SP.FieldText)
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    _Fields.prototype.add = function (title, fieldType, properties) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object.assign(metadata(fieldType), {
                            "Title": title,
                        }, properties));
                        if (!tag.isTagged(this)) {
                            tag.configure(this, "fs.add");
                        }
                        return [4 /*yield*/, spPost(this.clone(Fields, null), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                field: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
   * Adds a new SP.FieldText to the collection
   *
   * @param title The field title
   * @param maxLength The maximum number of characters allowed in the value of the field.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    _Fields.prototype.addText = function (title, maxLength, properties) {
        if (maxLength === void 0) { maxLength = 255; }
        var props = {
            FieldTypeKind: 2,
            MaxLength: maxLength,
        };
        return this.add(title, "SP.FieldText", util_assign(props, properties));
    };
    /**
   * Adds a new SP.FieldCalculated to the collection
   *
   * @param title The field title.
   * @param formula The formula for the field.
   * @param dateFormat The date and time format that is displayed in the field.
   * @param outputType Specifies the output format for the field. Represents a FieldType value.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    _Fields.prototype.addCalculated = function (title, formula, dateFormat, outputType, properties) {
        if (outputType === void 0) { outputType = FieldTypes.Text; }
        var props = {
            DateFormat: dateFormat,
            FieldTypeKind: 17,
            Formula: formula,
            OutputType: outputType,
        };
        return this.add(title, "SP.FieldCalculated", util_assign(props, properties));
    };
    /**
   * Adds a new SP.FieldDateTime to the collection
   *
   * @param title The field title
   * @param displayFormat The format of the date and time that is displayed in the field.
   * @param calendarType Specifies the calendar type of the field.
   * @param friendlyDisplayFormat The type of friendly display format that is used in the field.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    _Fields.prototype.addDateTime = function (title, displayFormat, calendarType, friendlyDisplayFormat, properties) {
        if (displayFormat === void 0) { displayFormat = DateTimeFieldFormatType.DateOnly; }
        if (calendarType === void 0) { calendarType = CalendarType.Gregorian; }
        if (friendlyDisplayFormat === void 0) { friendlyDisplayFormat = DateTimeFieldFriendlyFormatType.Unspecified; }
        var props = {
            DateTimeCalendarType: calendarType,
            DisplayFormat: displayFormat,
            FieldTypeKind: 4,
            FriendlyDisplayFormat: friendlyDisplayFormat,
        };
        return this.add(title, "SP.FieldDateTime", util_assign(props, properties));
    };
    /**
   * Adds a new SP.FieldNumber to the collection
   *
   * @param title The field title
   * @param minValue The field's minimum value
   * @param maxValue The field's maximum value
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    _Fields.prototype.addNumber = function (title, minValue, maxValue, properties) {
        var props = { FieldTypeKind: 9 };
        if (minValue !== undefined) {
            props = util_assign({ MinimumValue: minValue }, props);
        }
        if (maxValue !== undefined) {
            props = util_assign({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldNumber", util_assign(props, properties));
    };
    /**
   * Adds a new SP.FieldCurrency to the collection
   *
   * @param title The field title
   * @param minValue The field's minimum value
   * @param maxValue The field's maximum value
   * @param currencyLocalId Specifies the language code identifier (LCID) used to format the value of the field
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    _Fields.prototype.addCurrency = function (title, minValue, maxValue, currencyLocalId, properties) {
        if (currencyLocalId === void 0) { currencyLocalId = 1033; }
        var props = {
            CurrencyLocaleId: currencyLocalId,
            FieldTypeKind: 10,
        };
        if (minValue !== undefined) {
            props = util_assign({ MinimumValue: minValue }, props);
        }
        if (maxValue !== undefined) {
            props = util_assign({ MaximumValue: maxValue }, props);
        }
        return this.add(title, "SP.FieldCurrency", util_assign(props, properties));
    };
    /**
   * Adds a new SP.FieldMultiLineText to the collection
   *
   * @param title The field title
   * @param numberOfLines Specifies the number of lines of text to display for the field.
   * @param richText Specifies whether the field supports rich formatting.
   * @param restrictedMode Specifies whether the field supports a subset of rich formatting.
   * @param appendOnly Specifies whether all changes to the value of the field are displayed in list forms.
   * @param allowHyperlink Specifies whether a hyperlink is allowed as a value of the field.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   *
   */
    _Fields.prototype.addMultilineText = function (title, numberOfLines, richText, restrictedMode, appendOnly, allowHyperlink, properties) {
        if (numberOfLines === void 0) { numberOfLines = 6; }
        if (richText === void 0) { richText = true; }
        if (restrictedMode === void 0) { restrictedMode = false; }
        if (appendOnly === void 0) { appendOnly = false; }
        if (allowHyperlink === void 0) { allowHyperlink = true; }
        var props = {
            AllowHyperlink: allowHyperlink,
            AppendOnly: appendOnly,
            FieldTypeKind: 3,
            NumberOfLines: numberOfLines,
            RestrictedMode: restrictedMode,
            RichText: richText,
        };
        return this.add(title, "SP.FieldMultiLineText", util_assign(props, properties));
    };
    /**
   * Adds a new SP.FieldUrl to the collection
   *
   * @param title The field title
   */
    _Fields.prototype.addUrl = function (title, displayFormat, properties) {
        if (displayFormat === void 0) { displayFormat = UrlFieldFormatType.Hyperlink; }
        var props = {
            DisplayFormat: displayFormat,
            FieldTypeKind: 11,
        };
        return this.add(title, "SP.FieldUrl", util_assign(props, properties));
    };
    /** Adds a user field to the colleciton
  *
  * @param title The new field's title
  * @param selectionMode The selection mode of the field
  * @param selectionGroup Value that specifies the identifier of the SharePoint group whose members can be selected as values of the field
  * @param properties
  */
    _Fields.prototype.addUser = function (title, selectionMode, properties) {
        var props = {
            FieldTypeKind: 20,
            SelectionMode: selectionMode,
        };
        return this.add(title, "SP.FieldUser", util_assign(props, properties));
    };
    /**
   * Adds a SP.FieldLookup to the collection
   *
   * @param title The new field's title
   * @param lookupListId The guid id of the list where the source of the lookup is found
   * @param lookupFieldName The internal name of the field in the source list
   * @param properties Set of additional properties to set on the new field
   */
    _Fields.prototype.addLookup = function (title, lookupListId, lookupFieldName, properties) {
        return __awaiter(this, void 0, void 0, function () {
            var props, postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = util_assign({
                            FieldTypeKind: 7,
                            LookupFieldName: lookupFieldName,
                            LookupListId: lookupListId,
                            Title: title,
                        }, properties);
                        postBody = body({
                            "parameters": util_assign(metadata("SP.FieldCreationInformation"), props),
                        });
                        return [4 /*yield*/, spPost(this.clone(Fields, "addfield"), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                field: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
   * Adds a new SP.FieldChoice to the collection
   *
   * @param title The field title.
   * @param choices The choices for the field.
   * @param format The display format of the available options for the field.
   * @param fillIn Specifies whether the field allows fill-in values.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    _Fields.prototype.addChoice = function (title, choices, format, fillIn, properties) {
        if (format === void 0) { format = ChoiceFieldFormatType.Dropdown; }
        var props = {
            Choices: {
                results: choices,
            },
            EditFormat: format,
            FieldTypeKind: 6,
            FillInChoice: fillIn,
        };
        return this.add(title, "SP.FieldChoice", util_assign(props, properties));
    };
    /**
   * Adds a new SP.FieldMultiChoice to the collection
   *
   * @param title The field title.
   * @param choices The choices for the field.
   * @param fillIn Specifies whether the field allows fill-in values.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    _Fields.prototype.addMultiChoice = function (title, choices, fillIn, properties) {
        var props = {
            Choices: {
                results: choices,
            },
            FieldTypeKind: 15,
            FillInChoice: fillIn,
        };
        return this.add(title, "SP.FieldMultiChoice", util_assign(props, properties));
    };
    /**
   * Adds a new SP.FieldBoolean to the collection
   *
   * @param title The field title.
   * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
   */
    _Fields.prototype.addBoolean = function (title, properties) {
        var props = {
            FieldTypeKind: 8,
        };
        return this.add(title, "SP.Field", util_assign(props, properties));
    };
    /**
  * Creates a secondary (dependent) lookup field, based on the Id of the primary lookup field.
  *
  * @param displayName The display name of the new field.
  * @param primaryLookupFieldId The guid of the primary Lookup Field.
  * @param showField Which field to show from the lookup list.
  */
    _Fields.prototype.addDependentLookupField = function (displayName, primaryLookupFieldId, showField) {
        return __awaiter(this, void 0, void 0, function () {
            var path, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = "adddependentlookupfield(displayName='" + displayName + "', primarylookupfieldid='" + primaryLookupFieldId + "', showfield='" + showField + "')";
                        return [4 /*yield*/, spPost(this.clone(Fields, path))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                field: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
     * Adds a new SP.FieldLocation to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.addLocation = function (title, properties) {
        var props = { FieldTypeKind: 33 };
        return this.add(title, "SP.FieldLocation", util_assign(props, properties));
    };
    /**
     * Adds a new SP.FieldLocation to the collection
     *
     * @param title The field title.
     * @param properties Differ by type of field being created (see: https://msdn.microsoft.com/en-us/library/office/dn600182.aspx)
     */
    _Fields.prototype.addImageField = function (title, properties) {
        var props = {
            FieldTypeKind: 34,
        };
        return this.add(title, "SP.FieldMultiLineText", util_assign(props, properties));
    };
    __decorate([
        tag("fs.createFieldAsXml")
    ], _Fields.prototype, "createFieldAsXml", null);
    __decorate([
        tag("fs.addText")
    ], _Fields.prototype, "addText", null);
    __decorate([
        tag("fs.addCalculated")
    ], _Fields.prototype, "addCalculated", null);
    __decorate([
        tag("fs.addDateTime")
    ], _Fields.prototype, "addDateTime", null);
    __decorate([
        tag("fs.addNumber")
    ], _Fields.prototype, "addNumber", null);
    __decorate([
        tag("fs.addCurrency")
    ], _Fields.prototype, "addCurrency", null);
    __decorate([
        tag("fs.addMultilineText")
    ], _Fields.prototype, "addMultilineText", null);
    __decorate([
        tag("fs.addUrl")
    ], _Fields.prototype, "addUrl", null);
    __decorate([
        tag("fs.addUser")
    ], _Fields.prototype, "addUser", null);
    __decorate([
        tag("fs.addLookup")
    ], _Fields.prototype, "addLookup", null);
    __decorate([
        tag("fs.addChoice")
    ], _Fields.prototype, "addChoice", null);
    __decorate([
        tag("fs.addMultiChoice")
    ], _Fields.prototype, "addMultiChoice", null);
    __decorate([
        tag("fs.addBoolean")
    ], _Fields.prototype, "addBoolean", null);
    __decorate([
        tag("fs.addDependentLookupField")
    ], _Fields.prototype, "addDependentLookupField", null);
    __decorate([
        tag("fs.addLocation")
    ], _Fields.prototype, "addLocation", null);
    __decorate([
        tag("fs.addImage")
    ], _Fields.prototype, "addImageField", null);
    _Fields = __decorate([
        defaultPath("fields")
    ], _Fields);
    return _Fields;
}(_SharePointQueryableCollection));

var Fields = spInvokableFactory(_Fields);
var _Field = /** @class */ (function (_super) {
    __extends(_Field, _super);
    function _Field() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("f");
        return _this;
    }
    /**
   * Updates this field instance with the supplied properties
   *
   * @param properties A plain object hash of values to update for the list
   * @param fieldType The type value such as SP.FieldLookup. Optional, looked up from the field if not provided
   */
    _Field.prototype.update = function (properties, fieldType) {
        return __awaiter(this, void 0, void 0, function () {
            var info, req, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(typeof fieldType === "undefined" || fieldType === null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Field(this).select("FieldTypeKind").configure({
                                headers: {
                                    "Accept": "application/json",
                                },
                            })()];
                    case 1:
                        info = _a.sent();
                        fieldType = info["odata.type"];
                        _a.label = 2;
                    case 2:
                        req = body(util_assign(metadata(fieldType), properties), headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, spPost(this, req)];
                    case 3:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                field: this,
                            }];
                }
            });
        });
    };
    /**
   * Sets the value of the ShowInDisplayForm property for this field.
   */
    _Field.prototype.setShowInDisplayForm = function (show) {
        return spPost(this.clone(Field, "setshowindisplayform(" + show + ")"));
    };
    /**
   * Sets the value of the ShowInEditForm property for this field.
   */
    _Field.prototype.setShowInEditForm = function (show) {
        return spPost(this.clone(Field, "setshowineditform(" + show + ")"));
    };
    /**
   * Sets the value of the ShowInNewForm property for this field.
   */
    _Field.prototype.setShowInNewForm = function (show) {
        return spPost(this.clone(Field, "setshowinnewform(" + show + ")"));
    };
    __decorate([
        tag("f.update")
    ], _Field.prototype, "update", null);
    __decorate([
        tag("f.setShowInDisplayForm")
    ], _Field.prototype, "setShowInDisplayForm", null);
    __decorate([
        tag("f.setShowInEditForm")
    ], _Field.prototype, "setShowInEditForm", null);
    __decorate([
        tag("f.setShowInNewForm")
    ], _Field.prototype, "setShowInNewForm", null);
    return _Field;
}(_SharePointQueryableInstance));

var Field = spInvokableFactory(_Field);
/**
 * Specifies the type of the field.
 */
var FieldTypes;
(function (FieldTypes) {
    FieldTypes[FieldTypes["Invalid"] = 0] = "Invalid";
    FieldTypes[FieldTypes["Integer"] = 1] = "Integer";
    FieldTypes[FieldTypes["Text"] = 2] = "Text";
    FieldTypes[FieldTypes["Note"] = 3] = "Note";
    FieldTypes[FieldTypes["DateTime"] = 4] = "DateTime";
    FieldTypes[FieldTypes["Counter"] = 5] = "Counter";
    FieldTypes[FieldTypes["Choice"] = 6] = "Choice";
    FieldTypes[FieldTypes["Lookup"] = 7] = "Lookup";
    FieldTypes[FieldTypes["Boolean"] = 8] = "Boolean";
    FieldTypes[FieldTypes["Number"] = 9] = "Number";
    FieldTypes[FieldTypes["Currency"] = 10] = "Currency";
    FieldTypes[FieldTypes["URL"] = 11] = "URL";
    FieldTypes[FieldTypes["Computed"] = 12] = "Computed";
    FieldTypes[FieldTypes["Threading"] = 13] = "Threading";
    FieldTypes[FieldTypes["Guid"] = 14] = "Guid";
    FieldTypes[FieldTypes["MultiChoice"] = 15] = "MultiChoice";
    FieldTypes[FieldTypes["GridChoice"] = 16] = "GridChoice";
    FieldTypes[FieldTypes["Calculated"] = 17] = "Calculated";
    FieldTypes[FieldTypes["File"] = 18] = "File";
    FieldTypes[FieldTypes["Attachments"] = 19] = "Attachments";
    FieldTypes[FieldTypes["User"] = 20] = "User";
    FieldTypes[FieldTypes["Recurrence"] = 21] = "Recurrence";
    FieldTypes[FieldTypes["CrossProjectLink"] = 22] = "CrossProjectLink";
    FieldTypes[FieldTypes["ModStat"] = 23] = "ModStat";
    FieldTypes[FieldTypes["Error"] = 24] = "Error";
    FieldTypes[FieldTypes["ContentTypeId"] = 25] = "ContentTypeId";
    FieldTypes[FieldTypes["PageSeparator"] = 26] = "PageSeparator";
    FieldTypes[FieldTypes["ThreadIndex"] = 27] = "ThreadIndex";
    FieldTypes[FieldTypes["WorkflowStatus"] = 28] = "WorkflowStatus";
    FieldTypes[FieldTypes["AllDayEvent"] = 29] = "AllDayEvent";
    FieldTypes[FieldTypes["WorkflowEventType"] = 30] = "WorkflowEventType";
})(FieldTypes || (FieldTypes = {}));
var DateTimeFieldFormatType;
(function (DateTimeFieldFormatType) {
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateOnly"] = 0] = "DateOnly";
    DateTimeFieldFormatType[DateTimeFieldFormatType["DateTime"] = 1] = "DateTime";
})(DateTimeFieldFormatType || (DateTimeFieldFormatType = {}));
var DateTimeFieldFriendlyFormatType;
(function (DateTimeFieldFriendlyFormatType) {
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Unspecified"] = 0] = "Unspecified";
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Disabled"] = 1] = "Disabled";
    DateTimeFieldFriendlyFormatType[DateTimeFieldFriendlyFormatType["Relative"] = 2] = "Relative";
})(DateTimeFieldFriendlyFormatType || (DateTimeFieldFriendlyFormatType = {}));
/**
 * Specifies the control settings while adding a field.
 */
var AddFieldOptions;
(function (AddFieldOptions) {
    /**
   *  Specify that a new field added to the list must also be added to the default content type in the site collection
   */
    AddFieldOptions[AddFieldOptions["DefaultValue"] = 0] = "DefaultValue";
    /**
   * Specify that a new field added to the list must also be added to the default content type in the site collection.
   */
    AddFieldOptions[AddFieldOptions["AddToDefaultContentType"] = 1] = "AddToDefaultContentType";
    /**
   * Specify that a new field must not be added to any other content type
   */
    AddFieldOptions[AddFieldOptions["AddToNoContentType"] = 2] = "AddToNoContentType";
    /**
   *  Specify that a new field that is added to the specified list must also be added to all content types in the site collection
   */
    AddFieldOptions[AddFieldOptions["AddToAllContentTypes"] = 4] = "AddToAllContentTypes";
    /**
   * Specify adding an internal field name hint for the purpose of avoiding possible database locking or field renaming operations
   */
    AddFieldOptions[AddFieldOptions["AddFieldInternalNameHint"] = 8] = "AddFieldInternalNameHint";
    /**
   * Specify that a new field that is added to the specified list must also be added to the default list view
   */
    AddFieldOptions[AddFieldOptions["AddFieldToDefaultView"] = 16] = "AddFieldToDefaultView";
    /**
   * Specify to confirm that no other field has the same display name
   */
    AddFieldOptions[AddFieldOptions["AddFieldCheckDisplayName"] = 32] = "AddFieldCheckDisplayName";
})(AddFieldOptions || (AddFieldOptions = {}));
var CalendarType;
(function (CalendarType) {
    CalendarType[CalendarType["Gregorian"] = 1] = "Gregorian";
    CalendarType[CalendarType["Japan"] = 3] = "Japan";
    CalendarType[CalendarType["Taiwan"] = 4] = "Taiwan";
    CalendarType[CalendarType["Korea"] = 5] = "Korea";
    CalendarType[CalendarType["Hijri"] = 6] = "Hijri";
    CalendarType[CalendarType["Thai"] = 7] = "Thai";
    CalendarType[CalendarType["Hebrew"] = 8] = "Hebrew";
    CalendarType[CalendarType["GregorianMEFrench"] = 9] = "GregorianMEFrench";
    CalendarType[CalendarType["GregorianArabic"] = 10] = "GregorianArabic";
    CalendarType[CalendarType["GregorianXLITEnglish"] = 11] = "GregorianXLITEnglish";
    CalendarType[CalendarType["GregorianXLITFrench"] = 12] = "GregorianXLITFrench";
    CalendarType[CalendarType["KoreaJapanLunar"] = 14] = "KoreaJapanLunar";
    CalendarType[CalendarType["ChineseLunar"] = 15] = "ChineseLunar";
    CalendarType[CalendarType["SakaEra"] = 16] = "SakaEra";
    CalendarType[CalendarType["UmAlQura"] = 23] = "UmAlQura";
})(CalendarType || (CalendarType = {}));
var UrlFieldFormatType;
(function (UrlFieldFormatType) {
    UrlFieldFormatType[UrlFieldFormatType["Hyperlink"] = 0] = "Hyperlink";
    UrlFieldFormatType[UrlFieldFormatType["Image"] = 1] = "Image";
})(UrlFieldFormatType || (UrlFieldFormatType = {}));
var FieldUserSelectionMode;
(function (FieldUserSelectionMode) {
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleAndGroups"] = 1] = "PeopleAndGroups";
    FieldUserSelectionMode[FieldUserSelectionMode["PeopleOnly"] = 0] = "PeopleOnly";
})(FieldUserSelectionMode || (FieldUserSelectionMode = {}));
var ChoiceFieldFormatType;
(function (ChoiceFieldFormatType) {
    ChoiceFieldFormatType[ChoiceFieldFormatType["Dropdown"] = 0] = "Dropdown";
    ChoiceFieldFormatType[ChoiceFieldFormatType["RadioButtons"] = 1] = "RadioButtons";
})(ChoiceFieldFormatType || (ChoiceFieldFormatType = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/web.js



addProp(_Web, "fields", Fields);
addProp(_Web, "availablefields", Fields, "availablefields");
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/list.js



addProp(_List, "fields", Fields);
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/fields/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/folder.js



addProp(_Folder, "files", Files);
//# sourceMappingURL=folder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/item.js



addProp(_Item, "file", File, "file");
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/files/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/item.js



addProp(_Item, "folder", Folder, "folder");
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/list.js



addProp(_List, "rootFolder", Folder, "rootFolder");
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/web.js




addProp(_Web, "folders", Folders);
addProp(_Web, "rootFolder", Folder, "rootFolder");
_Web.prototype.getFolderByServerRelativeUrl = function (folderRelativeUrl) {
    return Folder(this, "getFolderByServerRelativeUrl('" + escapeQueryStrValue(folderRelativeUrl) + "')");
};
_Web.prototype.getFolderByServerRelativePath = function (folderRelativeUrl) {
    return Folder(this, "getFolderByServerRelativePath(decodedUrl='" + escapeQueryStrValue(folderRelativeUrl) + "')");
};
_Web.prototype.getFolderById = function (uniqueId) {
    return Folder(this, "getFolderById('" + uniqueId + "')");
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/folders/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/forms/types.js




/**
 * Describes a collection of Form objects
 *
 */
var _Forms = /** @class */ (function (_super) {
    __extends(_Forms, _super);
    function _Forms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a form by id
     *
     * @param id The guid id of the item to retrieve
     */
    _Forms.prototype.getById = function (id) {
        return tag.configure(Form(this).concat("('" + id + "')"), "fos.getById");
    };
    _Forms = __decorate([
        defaultPath("forms")
    ], _Forms);
    return _Forms;
}(_SharePointQueryableCollection));

var Forms = spInvokableFactory(_Forms);
/**
 * Describes a single of Form instance
 *
 */
var _Form = /** @class */ (function (_super) {
    __extends(_Form, _super);
    function _Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return _Form;
}(_SharePointQueryableInstance));

var Form = spInvokableFactory(_Form);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/forms/list.js



addProp(_List, "forms", Forms, "forms");
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/forms/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/types.js





var _HubSites = /** @class */ (function (_super) {
    __extends(_HubSites, _super);
    function _HubSites() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a Hub Site from the collection by id
     *
     * @param id The Id of the Hub Site
     */
    _HubSites.prototype.getById = function (id) {
        return tag.configure(HubSite(this, "GetById?hubSiteId='" + id + "'"), "hss.getById");
    };
    _HubSites = __decorate([
        defaultPath("_api/hubsites")
    ], _HubSites);
    return _HubSites;
}(_SharePointQueryableCollection));

var HubSites = spInvokableFactory(_HubSites);
var _HubSite = /** @class */ (function (_super) {
    __extends(_HubSite, _super);
    function _HubSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the ISite instance associated with this hubsite
     */
    _HubSite.prototype.getSite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.select("SiteUrl")()];
                    case 1:
                        d = _a.sent();
                        return [2 /*return*/, Site(d.SiteUrl)];
                }
            });
        });
    };
    __decorate([
        tag("hs.getSite")
    ], _HubSite.prototype, "getSite", null);
    return _HubSite;
}(_SharePointQueryableInstance));

var HubSite = spInvokableFactory(_HubSite);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/site.js



_Site.prototype.joinHubSite = function (siteId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(Site, "joinHubSite('" + siteId + "')"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
_Site.prototype.registerHubSite = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(Site, "registerHubSite"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
_Site.prototype.unRegisterHubSite = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(Site, "unRegisterHubSite"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
//# sourceMappingURL=site.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/web.js



_Web.prototype.hubSiteData = function (forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.clone(Web, "hubSiteData(" + forceRefresh + ")")()];
                case 1:
                    data = _a.sent();
                    if (typeof data === "string") {
                        return [2 /*return*/, JSON.parse(data)];
                    }
                    return [2 /*return*/, data];
            }
        });
    });
};
_Web.prototype.syncHubSiteTheme = function () {
    return spPost(this.clone(Web, "syncHubSiteTheme"));
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/hubsites/index.js





Reflect.defineProperty(SPRest.prototype, "hubSites", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(function (_a) {
            var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
            return HubSites(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/lists/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/navigation/types.js








/**
 * Represents a collection of navigation nodes
 *
 */
var _NavigationNodes = /** @class */ (function (_super) {
    __extends(_NavigationNodes, _super);
    function _NavigationNodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a navigation node by id
     *
     * @param id The id of the node
     */
    _NavigationNodes.prototype.getById = function (id) {
        return tag.configure(NavigationNode(this).concat("(" + id + ")"), "nns.getById");
    };
    /**
     * Adds a new node to the collection
     *
     * @param title Display name of the node
     * @param url The url of the node
     * @param visible If true the node is visible, otherwise it is hidden (default: true)
     */
    _NavigationNodes.prototype.add = function (title, url, visible) {
        if (visible === void 0) { visible = true; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(util_assign(metadata("SP.NavigationNode"), {
                            IsVisible: visible,
                            Title: title,
                            Url: url,
                        }));
                        return [4 /*yield*/, spPost(this.clone(NavigationNodes, null), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                node: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
     * Moves a node to be after another node in the navigation
     *
     * @param nodeId Id of the node to move
     * @param previousNodeId Id of the node after which we move the node specified by nodeId
     */
    _NavigationNodes.prototype.moveAfter = function (nodeId, previousNodeId) {
        var postBody = body({
            nodeId: nodeId,
            previousNodeId: previousNodeId,
        });
        return spPost(this.clone(NavigationNodes, "MoveAfter"), postBody);
    };
    __decorate([
        tag("nns.add")
    ], _NavigationNodes.prototype, "add", null);
    __decorate([
        tag("nns.moveAfter")
    ], _NavigationNodes.prototype, "moveAfter", null);
    return _NavigationNodes;
}(_SharePointQueryableCollection));

var NavigationNodes = spInvokableFactory(_NavigationNodes);
/**
 * Represents an instance of a navigation node
 *
 */
var _NavigationNode = /** @class */ (function (_super) {
    __extends(_NavigationNode, _super);
    function _NavigationNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("nn");
        return _this;
    }
    Object.defineProperty(_NavigationNode.prototype, "children", {
        /**
         * Represents the child nodes of this node
         */
        get: function () {
            return tag.configure(NavigationNodes(this, "children"), "nn.children");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Updates this node
     *
     * @param properties Properties used to update this node
     */
    _NavigationNode.prototype.update = function (properties) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(util_assign(metadata("SP.NavigationNode"), properties), headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                node: this,
                            }];
                }
            });
        });
    };
    __decorate([
        tag("nn.update")
    ], _NavigationNode.prototype, "update", null);
    return _NavigationNode;
}(_SharePointQueryableInstance));

var NavigationNode = spInvokableFactory(_NavigationNode);
/**
 * Exposes the navigation components
 *
 */
var _Navigation = /** @class */ (function (_super) {
    __extends(_Navigation, _super);
    function _Navigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Navigation.prototype, "quicklaunch", {
        /**
         * Gets the quicklaunch navigation nodes for the current context
         *
         */
        get: function () {
            return tag.configure(NavigationNodes(this, "quicklaunch"), "n.quicklaunch");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Navigation.prototype, "topNavigationBar", {
        /**
         * Gets the top bar navigation nodes for the current context
         *
         */
        get: function () {
            return tag.configure(NavigationNodes(this, "topnavigationbar"), "n.topnavigationbar");
        },
        enumerable: false,
        configurable: true
    });
    _Navigation = __decorate([
        defaultPath("navigation")
    ], _Navigation);
    return _Navigation;
}(_SharePointQueryable));

var Navigation = spInvokableFactory(_Navigation);
/**
 * Represents the top level navigation service
 */
var _NavigationService = /** @class */ (function (_super) {
    __extends(_NavigationService, _super);
    function _NavigationService(path) {
        if (path === void 0) { path = null; }
        return _super.call(this, "_api/navigation", path) || this;
    }
    /**
     * The MenuState service operation returns a Menu-State (dump) of a SiteMapProvider on a site.
     *
     * @param menuNodeKey MenuNode.Key of the start node within the SiteMapProvider If no key is provided the SiteMapProvider.RootNode will be the root of the menu state.
     * @param depth Depth of the dump. If no value is provided a dump with the depth of 10 is returned
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     * @param customProperties comma seperated list of custom properties to be returned.
     */
    _NavigationService.prototype.getMenuState = function (menuNodeKey, depth, mapProviderName, customProperties) {
        if (menuNodeKey === void 0) { menuNodeKey = null; }
        if (depth === void 0) { depth = 10; }
        if (mapProviderName === void 0) { mapProviderName = null; }
        if (customProperties === void 0) { customProperties = null; }
        return spPost(NavigationService("MenuState"), body({
            customProperties: customProperties,
            depth: depth,
            mapProviderName: mapProviderName,
            menuNodeKey: menuNodeKey,
        }));
    };
    /**
     * Tries to get a SiteMapNode.Key for a given URL within a site collection.
     *
     * @param currentUrl A url representing the SiteMapNode
     * @param mapProviderName The name identifying the SiteMapProvider to be used
     */
    _NavigationService.prototype.getMenuNodeKey = function (currentUrl, mapProviderName) {
        if (mapProviderName === void 0) { mapProviderName = null; }
        return spPost(NavigationService("MenuNodeKey"), body({
            currentUrl: currentUrl,
            mapProviderName: mapProviderName,
        }));
    };
    __decorate([
        tag("ns.getMenuState")
    ], _NavigationService.prototype, "getMenuState", null);
    __decorate([
        tag("ns.getMenuNodeKey")
    ], _NavigationService.prototype, "getMenuNodeKey", null);
    return _NavigationService;
}(_SharePointQueryable));

var NavigationService = function (path) { return new _NavigationService(path); };
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/navigation/web.js



addProp(_Web, "navigation", Navigation);
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/navigation/index.js




Reflect.defineProperty(SPRest.prototype, "navigation", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(function (_a) {
            var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
            return NavigationService(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/profiles/types.js







var _Profiles = /** @class */ (function (_super) {
    __extends(_Profiles, _super);
    /**
     * Creates a new instance of the UserProfileQuery class
     *
     * @param baseUrl The url or SharePointQueryable which forms the parent of this user profile query
     */
    function _Profiles(baseUrl, path) {
        if (path === void 0) { path = "_api/sp.userprofiles.peoplemanager"; }
        var _this = _super.call(this, baseUrl, path) || this;
        _this.clientPeoplePickerQuery = (new ClientPeoplePickerQuery(baseUrl)).configureFrom(_this);
        _this.profileLoader = (new ProfileLoader(baseUrl)).configureFrom(_this);
        return _this;
    }
    Object.defineProperty(_Profiles.prototype, "editProfileLink", {
        /**
         * The url of the edit profile page for the current user
         */
        get: function () {
            return this.clone(Profiles, "EditProfileLink").get();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Profiles.prototype, "isMyPeopleListPublic", {
        /**
         * A boolean value that indicates whether the current user's "People I'm Following" list is public
         */
        get: function () {
            return this.clone(Profiles, "IsMyPeopleListPublic").get();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * A boolean value that indicates whether the current user is being followed by the specified user
     *
     * @param loginName The account name of the user
     */
    _Profiles.prototype.amIFollowedBy = function (loginName) {
        var q = this.clone(Profiles, "amifollowedby(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * A boolean value that indicates whether the current user is following the specified user
     *
     * @param loginName The account name of the user
     */
    _Profiles.prototype.amIFollowing = function (loginName) {
        var q = this.clone(Profiles, "amifollowing(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Gets tags that the current user is following
     *
     * @param maxCount The maximum number of tags to retrieve (default is 20)
     */
    _Profiles.prototype.getFollowedTags = function (maxCount) {
        if (maxCount === void 0) { maxCount = 20; }
        return this.clone(Profiles, "getfollowedtags(" + maxCount + ")").get();
    };
    /**
     * Gets the people who are following the specified user
     *
     * @param loginName The account name of the user
     */
    _Profiles.prototype.getFollowersFor = function (loginName) {
        var q = this.clone(Profiles, "getfollowersfor(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    Object.defineProperty(_Profiles.prototype, "myFollowers", {
        /**
         * Gets the people who are following the current user
         *
         */
        get: function () {
            return SharePointQueryableCollection(this, "getmyfollowers");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Profiles.prototype, "myProperties", {
        /**
         * Gets user properties for the current user
         *
         */
        get: function () {
            return new _Profiles(this, "getmyproperties");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the people who the specified user is following
     *
     * @param loginName The account name of the user.
     */
    _Profiles.prototype.getPeopleFollowedBy = function (loginName) {
        var q = this.clone(Profiles, "getpeoplefollowedby(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Gets user properties for the specified user.
     *
     * @param loginName The account name of the user.
     */
    _Profiles.prototype.getPropertiesFor = function (loginName) {
        var q = this.clone(Profiles, "getpropertiesfor(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    Object.defineProperty(_Profiles.prototype, "trendingTags", {
        /**
         * Gets the 20 most popular hash tags over the past week, sorted so that the most popular tag appears first
         *
         */
        get: function () {
            var q = this.clone(Profiles, null);
            q.concat(".gettrendingtags");
            return q.get();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the specified user profile property for the specified user
     *
     * @param loginName The account name of the user
     * @param propertyName The case-sensitive name of the property to get
     */
    _Profiles.prototype.getUserProfilePropertyFor = function (loginName, propertyName) {
        var q = this.clone(Profiles, "getuserprofilepropertyfor(accountname=@v, propertyname='" + propertyName + "')");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return q.get();
    };
    /**
     * Removes the specified user from the user's list of suggested people to follow
     *
     * @param loginName The account name of the user
     */
    _Profiles.prototype.hideSuggestion = function (loginName) {
        var q = this.clone(Profiles, "hidesuggestion(@v)");
        q.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return spPost(q);
    };
    /**
     * A boolean values that indicates whether the first user is following the second user
     *
     * @param follower The account name of the user who might be following the followee
     * @param followee The account name of the user who might be followed by the follower
     */
    _Profiles.prototype.isFollowing = function (follower, followee) {
        var q = this.clone(Profiles, null);
        q.concat(".isfollowing(possiblefolloweraccountname=@v, possiblefolloweeaccountname=@y)");
        q.query.set("@v", "'" + encodeURIComponent(follower) + "'");
        q.query.set("@y", "'" + encodeURIComponent(followee) + "'");
        return q.get();
    };
    /**
     * Uploads and sets the user profile picture (Users can upload a picture to their own profile only). Not supported for batching.
     *
     * @param profilePicSource Blob data representing the user's picture in BMP, JPEG, or PNG format of up to 4.76MB
     */
    _Profiles.prototype.setMyProfilePic = function (profilePicSource) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (e) { return __awaiter(_this, void 0, void 0, function () {
                var buffer, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            buffer = e.target.result;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, spPost(Profiles(this, "setmyprofilepicture"), { body: buffer })];
                        case 2:
                            _a.sent();
                            resolve();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            reject(e_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); };
            reader.readAsArrayBuffer(profilePicSource);
        });
    };
    /**
     * Sets single value User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValue Property value
     */
    _Profiles.prototype.setSingleValueProfileProperty = function (accountName, propertyName, propertyValue) {
        return spPost(this.clone(Profiles, "SetSingleValueProfileProperty"), body({
            accountName: accountName,
            propertyName: propertyName,
            propertyValue: propertyValue,
        }));
    };
    /**
     * Sets multi valued User Profile property
     *
     * @param accountName The account name of the user
     * @param propertyName Property name
     * @param propertyValues Property values
     */
    _Profiles.prototype.setMultiValuedProfileProperty = function (accountName, propertyName, propertyValues) {
        return spPost(this.clone(Profiles, "SetMultiValuedProfileProperty"), body({
            accountName: accountName,
            propertyName: propertyName,
            propertyValues: propertyValues,
        }));
    };
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only)
     *
     * @param emails The email addresses of the users to provision sites for
     */
    _Profiles.prototype.createPersonalSiteEnqueueBulk = function () {
        var emails = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            emails[_i] = arguments[_i];
        }
        return this.profileLoader.createPersonalSiteEnqueueBulk(emails);
    };
    Object.defineProperty(_Profiles.prototype, "ownerUserProfile", {
        /**
         * Gets the user profile of the site owner
         *
         */
        get: function () {
            return this.profileLoader.ownerUserProfile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Profiles.prototype, "userProfile", {
        /**
         * Gets the user profile for the current user
         */
        get: function () {
            return this.profileLoader.userProfile;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    _Profiles.prototype.createPersonalSite = function (interactiveRequest) {
        if (interactiveRequest === void 0) { interactiveRequest = false; }
        return this.profileLoader.createPersonalSite(interactiveRequest);
    };
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private
     */
    _Profiles.prototype.shareAllSocialData = function (share) {
        return this.profileLoader.shareAllSocialData(share);
    };
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    _Profiles.prototype.clientPeoplePickerResolveUser = function (queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerResolveUser(queryParams);
    };
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    _Profiles.prototype.clientPeoplePickerSearchUser = function (queryParams) {
        return this.clientPeoplePickerQuery.clientPeoplePickerSearchUser(queryParams);
    };
    return _Profiles;
}(_SharePointQueryableInstance));

var Profiles = spInvokableFactory(_Profiles);
var ProfileLoader = /** @class */ (function (_super) {
    __extends(ProfileLoader, _super);
    function ProfileLoader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Provisions one or more users' personal sites. (My Site administrator on SharePoint Online only) Doesn't support batching
     *
     * @param emails The email addresses of the users to provision sites for
     */
    ProfileLoader.prototype.createPersonalSiteEnqueueBulk = function (emails) {
        return spPost(this.clone(ProfileLoaderFactory, "createpersonalsiteenqueuebulk", false), body({ "emailIDs": emails }));
    };
    Object.defineProperty(ProfileLoader.prototype, "ownerUserProfile", {
        /**
         * Gets the user profile of the site owner.
         *
         */
        get: function () {
            var q = this.getParent(ProfileLoaderFactory, this.parentUrl, "_api/sp.userprofiles.profileloader.getowneruserprofile");
            if (this.hasBatch) {
                q = q.inBatch(this.batch);
            }
            return spPost(q);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProfileLoader.prototype, "userProfile", {
        /**
         * Gets the user profile of the current user.
         *
         */
        get: function () {
            return spPost(this.clone(ProfileLoaderFactory, "getuserprofile"));
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Enqueues creating a personal site for this user, which can be used to share documents, web pages, and other files.
     *
     * @param interactiveRequest true if interactively (web) initiated request, or false (default) if non-interactively (client) initiated request
     */
    ProfileLoader.prototype.createPersonalSite = function (interactiveRequest) {
        if (interactiveRequest === void 0) { interactiveRequest = false; }
        return spPost(this.clone(ProfileLoaderFactory, "getuserprofile/createpersonalsiteenque(" + interactiveRequest + ")"));
    };
    /**
     * Sets the privacy settings for this profile
     *
     * @param share true to make all social data public; false to make all social data private.
     */
    ProfileLoader.prototype.shareAllSocialData = function (share) {
        return spPost(this.clone(ProfileLoaderFactory, "getuserprofile/shareallsocialdata(" + share + ")"));
    };
    ProfileLoader = __decorate([
        defaultPath("_api/sp.userprofiles.profileloader.getprofileloader")
    ], ProfileLoader);
    return ProfileLoader;
}(_SharePointQueryable));
var ProfileLoaderFactory = function (baseUrl, path) {
    return new ProfileLoader(baseUrl, path);
};
var ClientPeoplePickerQuery = /** @class */ (function (_super) {
    __extends(ClientPeoplePickerQuery, _super);
    function ClientPeoplePickerQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Resolves user or group using specified query parameters
     *
     * @param queryParams The query parameters used to perform resolve
     */
    ClientPeoplePickerQuery.prototype.clientPeoplePickerResolveUser = function (queryParams) {
        return __awaiter(this, void 0, void 0, function () {
            var q, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.clone(ClientPeoplePickerFactory, null);
                        q.concat(".clientpeoplepickerresolveuser");
                        return [4 /*yield*/, spPost(q, this.getBodyFrom(queryParams))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, JSON.parse(typeof res === "object" ? res.ClientPeoplePickerResolveUser : res)];
                }
            });
        });
    };
    /**
     * Searches for users or groups using specified query parameters
     *
     * @param queryParams The query parameters used to perform search
     */
    ClientPeoplePickerQuery.prototype.clientPeoplePickerSearchUser = function (queryParams) {
        return __awaiter(this, void 0, void 0, function () {
            var q, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = this.clone(ClientPeoplePickerFactory, null);
                        q.concat(".clientpeoplepickersearchuser");
                        return [4 /*yield*/, spPost(q, this.getBodyFrom(queryParams))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, JSON.parse(typeof res === "object" ? res.ClientPeoplePickerSearchUser : res)];
                }
            });
        });
    };
    /**
     * Creates ClientPeoplePickerQueryParameters request body
     *
     * @param queryParams The query parameters to create request body
     */
    ClientPeoplePickerQuery.prototype.getBodyFrom = function (queryParams) {
        return body({ "queryParams": util_assign(metadata("SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters"), queryParams) });
    };
    ClientPeoplePickerQuery = __decorate([
        defaultPath("_api/sp.ui.applicationpages.clientpeoplepickerwebserviceinterface")
    ], ClientPeoplePickerQuery);
    return ClientPeoplePickerQuery;
}(_SharePointQueryable));
var ClientPeoplePickerFactory = function (baseUrl, path) {
    return new ClientPeoplePickerQuery(baseUrl, path);
};
/**
 * Specifies the originating zone of a request received.
 */
var UrlZone;
(function (UrlZone) {
    /**
     * Specifies the default zone used for requests unless another zone is specified.
     */
    UrlZone[UrlZone["DefaultZone"] = 0] = "DefaultZone";
    /**
     * Specifies an intranet zone.
     */
    UrlZone[UrlZone["Intranet"] = 1] = "Intranet";
    /**
     * Specifies an Internet zone.
     */
    UrlZone[UrlZone["Internet"] = 2] = "Internet";
    /**
     * Specifies a custom zone.
     */
    UrlZone[UrlZone["Custom"] = 3] = "Custom";
    /**
     * Specifies an extranet zone.
     */
    UrlZone[UrlZone["Extranet"] = 4] = "Extranet";
})(UrlZone || (UrlZone = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/profiles/index.js



Reflect.defineProperty(SPRest.prototype, "profiles", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(function (_a) {
            var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
            return Profiles(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/types.js







var _RegionalSettings = /** @class */ (function (_super) {
    __extends(_RegionalSettings, _super);
    function _RegionalSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_RegionalSettings.prototype, "installedLanguages", {
        /**
         * Gets the collection of languages used in a server farm.
         * ** Please use getInstalledLanguages instead of this method **
         */
        get: function () {
            console.warn("Deprecated: RegionalSettings.installedLanguages is deprecated, please use RegionalSettings.getInstalledLanguages");
            return tag.configure(SharePointQueryableCollection(this, "installedlanguages"), "rs.installedLanguages");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_RegionalSettings.prototype, "timeZone", {
        /**
         * Gets time zone
         */
        get: function () {
            return tag.configure(TimeZone(this), "rs.tz");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_RegionalSettings.prototype, "timeZones", {
        /**
         * Gets time zones
         */
        get: function () {
            return tag.configure(TimeZones(this), "rs.tzs");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets the collection of languages used in a server farm.
     */
    _RegionalSettings.prototype.getInstalledLanguages = function () {
        return __awaiter(this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, tag.configure(SharePointQueryableCollection(this, "installedlanguages"), "rs.getInstalledLanguages")()];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, results.Items];
                }
            });
        });
    };
    _RegionalSettings = __decorate([
        defaultPath("regionalsettings")
    ], _RegionalSettings);
    return _RegionalSettings;
}(_SharePointQueryableInstance));

var RegionalSettings = spInvokableFactory(_RegionalSettings);
var _TimeZone = /** @class */ (function (_super) {
    __extends(_TimeZone, _super);
    function _TimeZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets an Local Time by UTC Time
     *
     * @param utcTime UTC Time as Date or ISO String
     */
    _TimeZone.prototype.utcToLocalTime = function (utcTime) {
        return __awaiter(this, void 0, void 0, function () {
            var dateIsoString, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof utcTime === "string") {
                            dateIsoString = utcTime;
                        }
                        else {
                            dateIsoString = utcTime.toISOString();
                        }
                        return [4 /*yield*/, spPost(this.clone(TimeZone, "utctolocaltime('" + dateIsoString + "')"))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, hOP(res, "UTCToLocalTime") ? res.UTCToLocalTime : res];
                }
            });
        });
    };
    /**
     * Gets an UTC Time by Local Time
     *
     * @param localTime Local Time as Date or ISO String
     */
    _TimeZone.prototype.localTimeToUTC = function (localTime) {
        return __awaiter(this, void 0, void 0, function () {
            var dateIsoString, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof localTime === "string") {
                            dateIsoString = localTime;
                        }
                        else {
                            dateIsoString = dateAdd(localTime, "minute", localTime.getTimezoneOffset() * -1).toISOString();
                        }
                        return [4 /*yield*/, spPost(this.clone(TimeZone, "localtimetoutc('" + dateIsoString + "')"))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, hOP(res, "LocalTimeToUTC") ? res.LocalTimeToUTC : res];
                }
            });
        });
    };
    __decorate([
        tag("tz.utcToLocalTime")
    ], _TimeZone.prototype, "utcToLocalTime", null);
    __decorate([
        tag("tz.localTimeToUTC")
    ], _TimeZone.prototype, "localTimeToUTC", null);
    _TimeZone = __decorate([
        defaultPath("timezone")
    ], _TimeZone);
    return _TimeZone;
}(_SharePointQueryableInstance));

var TimeZone = spInvokableFactory(_TimeZone);
var _TimeZones = /** @class */ (function (_super) {
    __extends(_TimeZones, _super);
    function _TimeZones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets an TimeZone by id (see: https://msdn.microsoft.com/en-us/library/office/jj247008.aspx)
     *
     * @param id The integer id of the timezone to retrieve
     */
    _TimeZones.prototype.getById = function (id) {
        // do the post and merge the result into a TimeZone instance so the data and methods are available
        return spPost(this.clone(TimeZones, "GetById(" + id + ")").usingParser(spODataEntity(TimeZone)));
    };
    __decorate([
        tag("tzs.getById")
    ], _TimeZones.prototype, "getById", null);
    _TimeZones = __decorate([
        defaultPath("timezones")
    ], _TimeZones);
    return _TimeZones;
}(_SharePointQueryableCollection));

var TimeZones = spInvokableFactory(_TimeZones);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/funcs.js



function getValueForUICultureBinder(propName) {
    return function (cultureName) {
        return spPost(this.clone(SharePointQueryable, propName + "/getValueForUICulture"), body({ cultureName: cultureName }));
    };
}
//# sourceMappingURL=funcs.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/web.js




addProp(_Web, "regionalSettings", RegionalSettings);
_Web.prototype.titleResource = getValueForUICultureBinder("titleResource");
_Web.prototype.descriptionResource = getValueForUICultureBinder("descriptionResource");
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/types.js








var _UserCustomActions = /** @class */ (function (_super) {
    __extends(_UserCustomActions, _super);
    function _UserCustomActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns the user custom action with the specified id
     *
     * @param id The GUID id of the user custom action to retrieve
     */
    _UserCustomActions.prototype.getById = function (id) {
        return tag.configure(UserCustomAction(this).concat("('" + id + "')"), "ucas.getById");
    };
    /**
     * Creates a user custom action
     *
     * @param properties The information object of property names and values which define the new user custom action
     */
    _UserCustomActions.prototype.add = function (properties) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this, body(util_assign(metadata("SP.UserCustomAction"), properties)))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                action: this.getById(data.Id),
                                data: data,
                            }];
                }
            });
        });
    };
    /**
     * Deletes all user custom actions in the collection
     */
    _UserCustomActions.prototype.clear = function () {
        return spPost(this.clone(UserCustomActions, "clear"));
    };
    __decorate([
        tag("ucas.add")
    ], _UserCustomActions.prototype, "add", null);
    __decorate([
        tag("ucas.clear")
    ], _UserCustomActions.prototype, "clear", null);
    _UserCustomActions = __decorate([
        defaultPath("usercustomactions")
    ], _UserCustomActions);
    return _UserCustomActions;
}(_SharePointQueryableCollection));

var UserCustomActions = spInvokableFactory(_UserCustomActions);
var _UserCustomAction = /** @class */ (function (_super) {
    __extends(_UserCustomAction, _super);
    function _UserCustomAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("uca");
        /**
        * Updates this user custom action with the supplied properties
        *
        * @param properties An information object of property names and values to update for this user custom action
        */
        _this.update = _this._update("SP.UserCustomAction", function (data) { return ({ data: data, action: _this }); });
        return _this;
    }
    return _UserCustomAction;
}(_SharePointQueryableInstance));

var UserCustomAction = spInvokableFactory(_UserCustomAction);
var UserCustomActionRegistrationType;
(function (UserCustomActionRegistrationType) {
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["None"] = 0] = "None";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["List"] = 1] = "List";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["ContentType"] = 2] = "ContentType";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["ProgId"] = 3] = "ProgId";
    UserCustomActionRegistrationType[UserCustomActionRegistrationType["FileType"] = 4] = "FileType";
})(UserCustomActionRegistrationType || (UserCustomActionRegistrationType = {}));
var UserCustomActionScope;
(function (UserCustomActionScope) {
    UserCustomActionScope[UserCustomActionScope["Unknown"] = 0] = "Unknown";
    UserCustomActionScope[UserCustomActionScope["Site"] = 2] = "Site";
    UserCustomActionScope[UserCustomActionScope["Web"] = 3] = "Web";
    UserCustomActionScope[UserCustomActionScope["List"] = 4] = "List";
})(UserCustomActionScope || (UserCustomActionScope = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/user-custom-actions.js


_UserCustomAction.prototype.titleResource = getValueForUICultureBinder("titleResource");
_UserCustomAction.prototype.descriptionResource = getValueForUICultureBinder("descriptionResource");
//# sourceMappingURL=user-custom-actions.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/list.js


_List.prototype.titleResource = getValueForUICultureBinder("titleResource");
_List.prototype.descriptionResource = getValueForUICultureBinder("descriptionResource");
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/field.js


_Field.prototype.titleResource = getValueForUICultureBinder("titleResource");
_Field.prototype.descriptionResource = getValueForUICultureBinder("descriptionResource");
//# sourceMappingURL=field.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/content-type.js


_ContentType.prototype.titleResource = getValueForUICultureBinder("nameResource");
_ContentType.prototype.descriptionResource = getValueForUICultureBinder("descriptionResource");
//# sourceMappingURL=content-type.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/regional-settings/index.js






//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/related-items/types.js







var _RelatedItemManager = /** @class */ (function (_super) {
    __extends(_RelatedItemManager, _super);
    function _RelatedItemManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _RelatedItemManager.prototype.getRelatedItems = function (sourceListName, sourceItemId) {
        var query = this.clone(RelatedItemManager, null);
        query.concat(".GetRelatedItems");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
        }));
    };
    _RelatedItemManager.prototype.getPageOneRelatedItems = function (sourceListName, sourceItemId) {
        var query = this.clone(RelatedItemManager, null);
        query.concat(".GetPageOneRelatedItems");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
        }));
    };
    _RelatedItemManager.prototype.addSingleLink = function (sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemID, targetWebUrl, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManager, null);
        query.concat(".AddSingleLink");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            SourceWebUrl: sourceWebUrl,
            TargetItemID: targetItemID,
            TargetListName: targetListName,
            TargetWebUrl: targetWebUrl,
            TryAddReverseLink: tryAddReverseLink,
        }));
    };
    _RelatedItemManager.prototype.addSingleLinkToUrl = function (sourceListName, sourceItemId, targetItemUrl, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManager, null);
        query.concat(".AddSingleLinkToUrl");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            TargetItemUrl: targetItemUrl,
            TryAddReverseLink: tryAddReverseLink,
        }));
    };
    _RelatedItemManager.prototype.addSingleLinkFromUrl = function (sourceItemUrl, targetListName, targetItemId, tryAddReverseLink) {
        if (tryAddReverseLink === void 0) { tryAddReverseLink = false; }
        var query = this.clone(RelatedItemManager, null);
        query.concat(".AddSingleLinkFromUrl");
        return spPost(query, body({
            SourceItemUrl: sourceItemUrl,
            TargetItemID: targetItemId,
            TargetListName: targetListName,
            TryAddReverseLink: tryAddReverseLink,
        }));
    };
    _RelatedItemManager.prototype.deleteSingleLink = function (sourceListName, sourceItemId, sourceWebUrl, targetListName, targetItemId, targetWebUrl, tryDeleteReverseLink) {
        if (tryDeleteReverseLink === void 0) { tryDeleteReverseLink = false; }
        var query = this.clone(RelatedItemManager, null);
        query.concat(".DeleteSingleLink");
        return spPost(query, body({
            SourceItemID: sourceItemId,
            SourceListName: sourceListName,
            SourceWebUrl: sourceWebUrl,
            TargetItemID: targetItemId,
            TargetListName: targetListName,
            TargetWebUrl: targetWebUrl,
            TryDeleteReverseLink: tryDeleteReverseLink,
        }));
    };
    __decorate([
        tag("rim.getRelatedItems")
    ], _RelatedItemManager.prototype, "getRelatedItems", null);
    __decorate([
        tag("rim.getPageOneRelatedItems")
    ], _RelatedItemManager.prototype, "getPageOneRelatedItems", null);
    __decorate([
        tag("rim.addSingleLink")
    ], _RelatedItemManager.prototype, "addSingleLink", null);
    __decorate([
        tag("rim.ToUrl")
    ], _RelatedItemManager.prototype, "addSingleLinkToUrl", null);
    __decorate([
        tag("rim.FromUrl")
    ], _RelatedItemManager.prototype, "addSingleLinkFromUrl", null);
    __decorate([
        tag("rim.deleteSingleLink")
    ], _RelatedItemManager.prototype, "deleteSingleLink", null);
    _RelatedItemManager = __decorate([
        defaultPath("_api/SP.RelatedItemManager")
    ], _RelatedItemManager);
    return _RelatedItemManager;
}(_SharePointQueryable));

var RelatedItemManager = function (url) { return new _RelatedItemManager(extractWebUrl(typeof url === "string" ? url : url.toUrl())); };
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/related-items/index.js

//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/query.js








var funcs = new Map([
    ["text", "Querytext"],
    ["template", "QueryTemplate"],
    ["sourceId", "SourceId"],
    ["trimDuplicatesIncludeId", ""],
    ["startRow", ""],
    ["rowLimit", ""],
    ["rankingModelId", ""],
    ["rowsPerPage", ""],
    ["selectProperties", ""],
    ["culture", ""],
    ["timeZoneId", ""],
    ["refinementFilters", ""],
    ["refiners", ""],
    ["hiddenConstraints", ""],
    ["sortList", ""],
    ["timeout", ""],
    ["hitHighlightedProperties", ""],
    ["clientType", ""],
    ["personalizationData", ""],
    ["resultsURL", ""],
    ["queryTag", ""],
    ["properties", ""],
    ["queryTemplatePropertiesUrl", ""],
    ["reorderingRules", ""],
    ["hitHighlightedMultivaluePropertyLimit", ""],
    ["collapseSpecification", ""],
    ["uiLanguage", ""],
    ["desiredSnippetLength", ""],
    ["maxSnippetLength", ""],
    ["summaryLength", ""],
]);
var props = new Map([]);
function toPropCase(str) {
    return str.replace(/^(.)/, function ($1) { return $1.toUpperCase(); });
}
/**
 * Creates a new instance of the SearchQueryBuilder
 *
 * @param queryText Initial query text
 * @param _query Any initial query configuration
 */
function SearchQueryBuilder(queryText, _query) {
    if (queryText === void 0) { queryText = ""; }
    if (_query === void 0) { _query = {}; }
    return new Proxy({
        query: Object.assign({
            Querytext: queryText,
        }, _query),
    }, {
        get: function (self, propertyKey, proxy) {
            var pk = propertyKey.toString();
            if (pk === "toSearchQuery") {
                return function () { return self.query; };
            }
            if (funcs.has(pk)) {
                return function () {
                    var value = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        value[_i] = arguments[_i];
                    }
                    var mappedPk = funcs.get(pk);
                    self.query[mappedPk.length > 0 ? mappedPk : toPropCase(pk)] = value.length > 1 ? value : value[0];
                    return proxy;
                };
            }
            var propKey = props.has(pk) ? props.get(pk) : toPropCase(pk);
            self.query[propKey] = true;
            return proxy;
        },
    });
}
var queryRegex = /_api\/search\/postquery$/i;
/**
 * Describes the search API
 *
 */
var _Search = /** @class */ (function (_super) {
    __extends(_Search, _super);
    function _Search() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @returns Promise
     */
    _Search.prototype.execute = function (queryInit) {
        return __awaiter(this, void 0, void 0, function () {
            var query, postBody, cacheKey, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = this.parseQuery(queryInit);
                        postBody = body({
                            request: util_assign(metadata("Microsoft.Office.Server.Search.REST.SearchRequest"), Object.assign({}, query, {
                                HitHighlightedProperties: this.fixArrProp(query.HitHighlightedProperties),
                                Properties: this.fixArrProp(query.Properties),
                                RefinementFilters: this.fixArrProp(query.RefinementFilters),
                                ReorderingRules: this.fixArrProp(query.ReorderingRules),
                                SelectProperties: this.fixArrProp(query.SelectProperties),
                                SortList: this.fixArrProp(query.SortList),
                            })),
                        });
                        // if we are using caching with this search request, then we need to handle some work upfront to enable that
                        if (this.data.useCaching) {
                            // force use of the cache for this request if .usingCaching was called
                            this._forceCaching = true;
                            cacheKey = "PnPjs.SearchWithCaching(" + getHashCode(postBody.body) + ")";
                            if (objectDefinedNotNull(this.data.cachingOptions)) {
                                // if our key ends in the postquery url we overwrite it
                                if (stringIsNullOrEmpty(this.data.cachingOptions.key) || queryRegex.test(this.data.cachingOptions.key)) {
                                    this.data.cachingOptions.key = cacheKey;
                                }
                            }
                            else {
                                this.data.cachingOptions = new CachingOptions(cacheKey);
                            }
                        }
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, new SearchResults(data, this.toUrl(), query)];
                }
            });
        });
    };
    /**
     * Fix array property
     *
     * @param prop property to fix for container struct
     */
    _Search.prototype.fixArrProp = function (prop) {
        if (typeof prop === "undefined") {
            return ({ results: [] });
        }
        return { results: isArray(prop) ? prop : [prop] };
    };
    /**
     * Translates one of the query initializers into a SearchQuery instance
     *
     * @param query
     */
    _Search.prototype.parseQuery = function (query) {
        var finalQuery;
        if (typeof query === "string") {
            finalQuery = { Querytext: query };
        }
        else if (query.toSearchQuery) {
            finalQuery = query.toSearchQuery();
        }
        else {
            finalQuery = query;
        }
        return finalQuery;
    };
    __decorate([
        tag("se.execute")
    ], _Search.prototype, "execute", null);
    _Search = __decorate([
        defaultPath("_api/search/postquery")
    ], _Search);
    return _Search;
}(_SharePointQueryableInstance));

var Search = function (baseUrl, options, runtime) {
    if (options === void 0) { options = {}; }
    if (runtime === void 0) { runtime = DefaultRuntime; }
    return function (queryInit) {
        return (new _Search(baseUrl)).configure(options).setRuntime(runtime).execute(queryInit);
    };
};
var SearchResults = /** @class */ (function () {
    function SearchResults(rawResponse, _url, _query, _raw, _primary) {
        if (_raw === void 0) { _raw = null; }
        if (_primary === void 0) { _primary = null; }
        this._url = _url;
        this._query = _query;
        this._raw = _raw;
        this._primary = _primary;
        this._url = this._url.replace(queryRegex, "");
        this._raw = rawResponse.postquery ? rawResponse.postquery : rawResponse;
    }
    Object.defineProperty(SearchResults.prototype, "ElapsedTime", {
        get: function () {
            var _a;
            return ((_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.ElapsedTime) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "RowCount", {
        get: function () {
            var _a, _b, _c;
            return ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.RowCount) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "TotalRows", {
        get: function () {
            var _a, _b, _c;
            return ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.TotalRows) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "TotalRowsIncludingDuplicates", {
        get: function () {
            var _a, _b, _c;
            return ((_c = (_b = (_a = this === null || this === void 0 ? void 0 : this.RawSearchResults) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.TotalRowsIncludingDuplicates) || 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "RawSearchResults", {
        get: function () {
            return this._raw;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SearchResults.prototype, "PrimarySearchResults", {
        get: function () {
            var _a, _b, _c, _d;
            if (this._primary === null) {
                this._primary = this.formatSearchResults(((_d = (_c = (_b = (_a = this._raw) === null || _a === void 0 ? void 0 : _a.PrimaryQueryResult) === null || _b === void 0 ? void 0 : _b.RelevantResults) === null || _c === void 0 ? void 0 : _c.Table) === null || _d === void 0 ? void 0 : _d.Rows) || null);
            }
            return this._primary;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Gets a page of results
     *
     * @param pageNumber Index of the page to return. Used to determine StartRow
     * @param pageSize Optional, items per page (default = 10)
     */
    SearchResults.prototype.getPage = function (pageNumber, pageSize) {
        // if we got all the available rows we don't have another page
        if (this.TotalRows < this.RowCount) {
            return Promise.resolve(null);
        }
        // if pageSize is supplied, then we use that regardless of any previous values
        // otherwise get the previous RowLimit or default to 10
        var rows = pageSize !== undefined ? pageSize : hOP(this._query, "RowLimit") ? this._query.RowLimit : 10;
        var query = util_assign(this._query, {
            RowLimit: rows,
            StartRow: rows * (pageNumber - 1),
        });
        // we have reached the end
        if (query.StartRow > this.TotalRows) {
            return Promise.resolve(null);
        }
        return Search(this._url)(query);
    };
    /**
     * Formats a search results array
     *
     * @param rawResults The array to process
     */
    SearchResults.prototype.formatSearchResults = function (rawResults) {
        var e_1, _a;
        var results = new Array();
        if (typeof (rawResults) === "undefined" || rawResults == null) {
            return [];
        }
        var tempResults = rawResults.results ? rawResults.results : rawResults;
        try {
            for (var tempResults_1 = __values(tempResults), tempResults_1_1 = tempResults_1.next(); !tempResults_1_1.done; tempResults_1_1 = tempResults_1.next()) {
                var tempResult = tempResults_1_1.value;
                var cells = tempResult.Cells.results ? tempResult.Cells.results : tempResult.Cells;
                results.push(cells.reduce(function (res, cell) {
                    Reflect.defineProperty(res, cell.Key, {
                        configurable: false,
                        enumerable: true,
                        value: cell.Value,
                        writable: false,
                    });
                    return res;
                }, {}));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (tempResults_1_1 && !tempResults_1_1.done && (_a = tempResults_1.return)) _a.call(tempResults_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return results;
    };
    return SearchResults;
}());

//# sourceMappingURL=query.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/suggest.js





var _Suggest = /** @class */ (function (_super) {
    __extends(_Suggest, _super);
    function _Suggest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Suggest.prototype.execute = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var response, mapper;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.mapQueryToQueryString(query);
                        return [4 /*yield*/, this.get()];
                    case 1:
                        response = _a.sent();
                        mapper = hOP(response, "suggest") ? function (s_1) { return response.suggest[s_1].results; } : function (s_2) { return response[s_2]; };
                        return [2 /*return*/, {
                                PeopleNames: mapper("PeopleNames"),
                                PersonalResults: mapper("PersonalResults"),
                                Queries: mapper("Queries"),
                            }];
                }
            });
        });
    };
    _Suggest.prototype.mapQueryToQueryString = function (query) {
        var _this = this;
        var setProp = function (q) { return function (checkProp) { return function (sp) {
            if (hOP(q, checkProp)) {
                _this.query.set(sp, q[checkProp].toString());
            }
        }; }; };
        this.query.set("querytext", "'" + query.querytext + "'");
        var querySetter = setProp(query);
        querySetter("count")("inumberofquerysuggestions");
        querySetter("personalCount")("inumberofresultsuggestions");
        querySetter("preQuery")("fprequerysuggestions");
        querySetter("hitHighlighting")("fhithighlighting");
        querySetter("capitalize")("fcapitalizefirstletters");
        querySetter("culture")("culture");
        querySetter("stemming")("enablestemming");
        querySetter("includePeople")("showpeoplenamesuggestions");
        querySetter("queryRules")("enablequeryrules");
        querySetter("prefixMatch")("fprefixmatchallterms");
    };
    __decorate([
        tag("su.execute")
    ], _Suggest.prototype, "execute", null);
    _Suggest = __decorate([
        defaultPath("_api/search/suggest")
    ], _Suggest);
    return _Suggest;
}(_SharePointQueryableInstance));

var Suggest = function (baseUrl, options, runtime) {
    if (options === void 0) { options = {}; }
    if (runtime === void 0) { runtime = DefaultRuntime; }
    return function (query) {
        return (new _Suggest(baseUrl)).configure(options).setRuntime(runtime).execute(query);
    };
};
//# sourceMappingURL=suggest.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/types.js
/**
 * defines the SortDirection enum
 */
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Ascending"] = 0] = "Ascending";
    SortDirection[SortDirection["Descending"] = 1] = "Descending";
    SortDirection[SortDirection["FQLFormula"] = 2] = "FQLFormula";
})(SortDirection || (SortDirection = {}));
/**
 * defines the ReorderingRuleMatchType  enum
 */
var ReorderingRuleMatchType;
(function (ReorderingRuleMatchType) {
    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultContainsKeyword"] = 0] = "ResultContainsKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleContainsKeyword"] = 1] = "TitleContainsKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["TitleMatchesKeyword"] = 2] = "TitleMatchesKeyword";
    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlStartsWith"] = 3] = "UrlStartsWith";
    ReorderingRuleMatchType[ReorderingRuleMatchType["UrlExactlyMatches"] = 4] = "UrlExactlyMatches";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ContentTypeIs"] = 5] = "ContentTypeIs";
    ReorderingRuleMatchType[ReorderingRuleMatchType["FileExtensionMatches"] = 6] = "FileExtensionMatches";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ResultHasTag"] = 7] = "ResultHasTag";
    ReorderingRuleMatchType[ReorderingRuleMatchType["ManualCondition"] = 8] = "ManualCondition";
})(ReorderingRuleMatchType || (ReorderingRuleMatchType = {}));
/**
 * Specifies the type value for the property
 */
var QueryPropertyValueType;
(function (QueryPropertyValueType) {
    QueryPropertyValueType[QueryPropertyValueType["None"] = 0] = "None";
    QueryPropertyValueType[QueryPropertyValueType["StringType"] = 1] = "StringType";
    QueryPropertyValueType[QueryPropertyValueType["Int32Type"] = 2] = "Int32Type";
    QueryPropertyValueType[QueryPropertyValueType["BooleanType"] = 3] = "BooleanType";
    QueryPropertyValueType[QueryPropertyValueType["StringArrayType"] = 4] = "StringArrayType";
    QueryPropertyValueType[QueryPropertyValueType["UnSupportedType"] = 5] = "UnSupportedType";
})(QueryPropertyValueType || (QueryPropertyValueType = {}));
var SearchBuiltInSourceId = /** @class */ (function () {
    function SearchBuiltInSourceId() {
    }
    SearchBuiltInSourceId.Documents = "e7ec8cee-ded8-43c9-beb5-436b54b31e84";
    SearchBuiltInSourceId.ItemsMatchingContentType = "5dc9f503-801e-4ced-8a2c-5d1237132419";
    SearchBuiltInSourceId.ItemsMatchingTag = "e1327b9c-2b8c-4b23-99c9-3730cb29c3f7";
    SearchBuiltInSourceId.ItemsRelatedToCurrentUser = "48fec42e-4a92-48ce-8363-c2703a40e67d";
    SearchBuiltInSourceId.ItemsWithSameKeywordAsThisItem = "5c069288-1d17-454a-8ac6-9c642a065f48";
    SearchBuiltInSourceId.LocalPeopleResults = "b09a7990-05ea-4af9-81ef-edfab16c4e31";
    SearchBuiltInSourceId.LocalReportsAndDataResults = "203fba36-2763-4060-9931-911ac8c0583b";
    SearchBuiltInSourceId.LocalSharePointResults = "8413cd39-2156-4e00-b54d-11efd9abdb89";
    SearchBuiltInSourceId.LocalVideoResults = "78b793ce-7956-4669-aa3b-451fc5defebf";
    SearchBuiltInSourceId.Pages = "5e34578e-4d08-4edc-8bf3-002acf3cdbcc";
    SearchBuiltInSourceId.Pictures = "38403c8c-3975-41a8-826e-717f2d41568a";
    SearchBuiltInSourceId.Popular = "97c71db1-58ce-4891-8b64-585bc2326c12";
    SearchBuiltInSourceId.RecentlyChangedItems = "ba63bbae-fa9c-42c0-b027-9a878f16557c";
    SearchBuiltInSourceId.RecommendedItems = "ec675252-14fa-4fbe-84dd-8d098ed74181";
    SearchBuiltInSourceId.Wiki = "9479bf85-e257-4318-b5a8-81a180f5faa1";
    return SearchBuiltInSourceId;
}());

//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/search/index.js







SPRest.prototype.search = function (query) {
    return this.childConfigHook(function (_a) {
        var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
        return Search(baseUrl, options, runtime)(query);
    });
};
SPRest.prototype.searchWithCaching = function (query, cacheOptions) {
    return this.childConfigHook(function (_a) {
        var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
        return (new _Search(baseUrl)).configure(options).setRuntime(runtime).usingCaching(cacheOptions).execute(query);
    });
};
SPRest.prototype.searchSuggest = function (query) {
    return this.childConfigHook(function (_a) {
        var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
        return Suggest(baseUrl, options, runtime)(typeof query === "string" ? { querytext: query } : query);
    });
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-users/types.js









var _SiteUsers = /** @class */ (function (_super) {
    __extends(_SiteUsers, _super);
    function _SiteUsers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a user from the collection by id
     *
     * @param id The id of the user to retrieve
     */
    _SiteUsers.prototype.getById = function (id) {
        return tag.configure(SiteUser(this, "getById(" + id + ")"), "sus.getById");
    };
    /**
     * Gets a user from the collection by email
     *
     * @param email The email address of the user to retrieve
     */
    _SiteUsers.prototype.getByEmail = function (email) {
        return tag.configure(SiteUser(this, "getByEmail('" + email + "')"), "sus.getByEmail");
    };
    /**
     * Gets a user from the collection by login name
     *
     * @param loginName The login name of the user to retrieve
     */
    _SiteUsers.prototype.getByLoginName = function (loginName) {
        return tag.configure(SiteUser(this).concat("('!@v::" + encodeURIComponent(loginName) + "')"), "sus.getByLoginName");
    };
    /**
     * Removes a user from the collection by id
     *
     * @param id The id of the user to remove
     */
    _SiteUsers.prototype.removeById = function (id) {
        return spPost(this.clone(SiteUsers, "removeById(" + id + ")"));
    };
    /**
     * Removes a user from the collection by login name
     *
     * @param loginName The login name of the user to remove
     */
    _SiteUsers.prototype.removeByLoginName = function (loginName) {
        var o = this.clone(SiteUsers, "removeByLoginName(@v)");
        o.query.set("@v", "'" + encodeURIComponent(loginName) + "'");
        return spPost(o);
    };
    /**
     * Adds a user to a site collection
     *
     * @param loginName The login name of the user to add  to a site collection
     *
     */
    _SiteUsers.prototype.add = function (loginName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this, body(util_assign(metadata("SP.User"), { LoginName: loginName })))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.getByLoginName(loginName)];
                }
            });
        });
    };
    __decorate([
        tag("sus.remId")
    ], _SiteUsers.prototype, "removeById", null);
    __decorate([
        tag("sus.remLoginName")
    ], _SiteUsers.prototype, "removeByLoginName", null);
    __decorate([
        tag("sus.add")
    ], _SiteUsers.prototype, "add", null);
    _SiteUsers = __decorate([
        defaultPath("siteusers")
    ], _SiteUsers);
    return _SiteUsers;
}(_SharePointQueryableCollection));

var SiteUsers = spInvokableFactory(_SiteUsers);
/**
 * Describes a single user
 *
 */
var _SiteUser = /** @class */ (function (_super) {
    __extends(_SiteUser, _super);
    function _SiteUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("su");
        /**
        * Updates this user instance with the supplied properties
        *
        * @param properties A plain object of property names and values to update for the user
        */
        _this.update = _this._update("SP.User", function (data) { return ({ data: data, user: _this }); });
        return _this;
    }
    Object.defineProperty(_SiteUser.prototype, "groups", {
        /**
         * Gets the groups for this user
         *
         */
        get: function () {
            return tag.configure(SiteGroups(this, "groups"), "su.groups");
        },
        enumerable: false,
        configurable: true
    });
    return _SiteUser;
}(_SharePointQueryableInstance));

var SiteUser = spInvokableFactory(_SiteUser);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-groups/types.js









var _SiteGroups = /** @class */ (function (_super) {
    __extends(_SiteGroups, _super);
    function _SiteGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a group from the collection by id
     *
     * @param id The id of the group to retrieve
     */
    _SiteGroups.prototype.getById = function (id) {
        return tag.configure(SiteGroup(this).concat("(" + id + ")"), "sgs.getById");
    };
    /**
     * Adds a new group to the site collection
     *
     * @param properties The group properties object of property names and values to be set for the group
     */
    _SiteGroups.prototype.add = function (properties) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(util_assign(metadata("SP.Group"), properties));
                        return [4 /*yield*/, spPost(tag.configure(this, "sgs.add"), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                group: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
     * Gets a group from the collection by name
     *
     * @param groupName The name of the group to retrieve
     */
    _SiteGroups.prototype.getByName = function (groupName) {
        return tag.configure(SiteGroup(this, "getByName('" + groupName + "')"), "sgs.getByName");
    };
    /**
     * Removes the group with the specified member id from the collection
     *
     * @param id The id of the group to remove
     */
    _SiteGroups.prototype.removeById = function (id) {
        return spPost(this.clone(SiteGroups, "removeById('" + id + "')"));
    };
    /**
     * Removes the cross-site group with the specified name from the collection
     *
     * @param loginName The name of the group to remove
     */
    _SiteGroups.prototype.removeByLoginName = function (loginName) {
        return spPost(this.clone(SiteGroups, "removeByLoginName('" + loginName + "')"));
    };
    __decorate([
        tag("sgs.removeById")
    ], _SiteGroups.prototype, "removeById", null);
    __decorate([
        tag("sgs.removeByLoginName")
    ], _SiteGroups.prototype, "removeByLoginName", null);
    _SiteGroups = __decorate([
        defaultPath("sitegroups")
    ], _SiteGroups);
    return _SiteGroups;
}(_SharePointQueryableCollection));

var SiteGroups = spInvokableFactory(_SiteGroups);
var _SiteGroup = /** @class */ (function (_super) {
    __extends(_SiteGroup, _super);
    function _SiteGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Updates the group with the given property values
         *
         * @param props The group properties object of property names and values to be set for the group
         */
        _this.update = _this._update("SP.Group", function (d, p) {
            var retGroup = hOP(p, "Title") ? _this.getParent(SiteGroup, _this.parentUrl, "getByName('" + p.Title + "')") : SiteGroup(_this);
            return {
                data: d,
                group: retGroup,
            };
        });
        return _this;
    }
    Object.defineProperty(_SiteGroup.prototype, "users", {
        /**
         * Gets the users for this group
         *
         */
        get: function () {
            return tag.configure(SiteUsers(this, "users"), "sg.users");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Set the owner of a group using a user id
     * @param userId the id of the user that will be set as the owner of the current group
     */
    _SiteGroup.prototype.setUserAsOwner = function (userId) {
        return spPost(this.clone(SiteGroup, "SetUserAsOwner(" + userId + ")"));
    };
    __decorate([
        tag("sg.setUserAsOwner")
    ], _SiteGroup.prototype, "setUserAsOwner", null);
    return _SiteGroup;
}(_SharePointQueryableInstance));

var SiteGroup = spInvokableFactory(_SiteGroup);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/types.js









/**
 * Describes a set of role assignments for the current scope
 *
 */
var _RoleAssignments = /** @class */ (function (_super) {
    __extends(_RoleAssignments, _super);
    function _RoleAssignments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the role assignment associated with the specified principal id from the collection.
     *
     * @param id The id of the role assignment
     */
    _RoleAssignments.prototype.getById = function (id) {
        return RoleAssignment(this).concat("(" + id + ")");
    };
    /**
     * Adds a new role assignment with the specified principal and role definitions to the collection
     *
     * @param principalId The id of the user or group to assign permissions to
     * @param roleDefId The id of the role definition that defines the permissions to assign
     *
     */
    _RoleAssignments.prototype.add = function (principalId, roleDefId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(RoleAssignments, "addroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Removes the role assignment with the specified principal and role definition from the collection
     *
     * @param principalId The id of the user or group in the role assignment
     * @param roleDefId The id of the role definition in the role assignment
     *
     */
    _RoleAssignments.prototype.remove = function (principalId, roleDefId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(RoleAssignments, "removeroleassignment(principalid=" + principalId + ", roledefid=" + roleDefId + ")"))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    _RoleAssignments = __decorate([
        defaultPath("roleassignments")
    ], _RoleAssignments);
    return _RoleAssignments;
}(_SharePointQueryableCollection));

var RoleAssignments = spInvokableFactory(_RoleAssignments);
/**
 * Describes a role assignment
 *
 */
var _RoleAssignment = /** @class */ (function (_super) {
    __extends(_RoleAssignment, _super);
    function _RoleAssignment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("ra");
        return _this;
    }
    Object.defineProperty(_RoleAssignment.prototype, "groups", {
        /**
         * Gets the groups that directly belong to the access control list (ACL) for this securable object
         *
         */
        get: function () {
            return tag.configure(SiteGroups(this, "groups"), "ra.groups");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_RoleAssignment.prototype, "bindings", {
        /**
         * Gets the role definition bindings for this role assignment
         *
         */
        get: function () {
            return SharePointQueryableCollection(this, "roledefinitionbindings");
        },
        enumerable: false,
        configurable: true
    });
    return _RoleAssignment;
}(_SharePointQueryableInstance));

var RoleAssignment = spInvokableFactory(_RoleAssignment);
/**
 * Describes a collection of role definitions
 *
 */
var _RoleDefinitions = /** @class */ (function (_super) {
    __extends(_RoleDefinitions, _super);
    function _RoleDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the role definition with the specified id from the collection
     *
     * @param id The id of the role definition
     *
     */
    _RoleDefinitions.prototype.getById = function (id) {
        return RoleDefinition(this, "getById(" + id + ")");
    };
    /**
     * Gets the role definition with the specified name
     *
     * @param name The name of the role definition
     *
     */
    _RoleDefinitions.prototype.getByName = function (name) {
        return RoleDefinition(this, "getbyname('" + name + "')");
    };
    /**
     * Gets the role definition with the specified role type
     *
     * @param roleTypeKind The roletypekind of the role definition (None=0, Guest=1, Reader=2, Contributor=3, WebDesigner=4, Administrator=5, Editor=6, System=7)
     *
     */
    _RoleDefinitions.prototype.getByType = function (roleTypeKind) {
        return RoleDefinition(this, "getbytype(" + roleTypeKind + ")");
    };
    /**
     * Creates a role definition
     *
     * @param name The new role definition's name
     * @param description The new role definition's description
     * @param order The order in which the role definition appears
     * @param basePermissions The permissions mask for this role definition, high and low values need to be converted to string
     *
     */
    _RoleDefinitions.prototype.add = function (name, description, order, basePermissions) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body({
                            BasePermissions: { "High": basePermissions.High.toString(), "Low": basePermissions.Low.toString() },
                            Description: description,
                            Name: name,
                            Order: order,
                            __metadata: { "type": "SP.RoleDefinition" },
                        });
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                definition: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    _RoleDefinitions = __decorate([
        defaultPath("roledefinitions")
    ], _RoleDefinitions);
    return _RoleDefinitions;
}(_SharePointQueryableCollection));

var RoleDefinitions = spInvokableFactory(_RoleDefinitions);
/**
 * Describes a role definition
 *
 */
var _RoleDefinition = /** @class */ (function (_super) {
    __extends(_RoleDefinition, _super);
    function _RoleDefinition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("rd");
        return _this;
    }
    /**
     * Updates this role definition with the supplied properties
     *
     * @param properties A plain object hash of values to update for the role definition
     */
    _RoleDefinition.prototype.update = function (properties) {
        return __awaiter(this, void 0, void 0, function () {
            var s, bpObj, postBody, data, definition, parent_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        s = ["BasePermissions"];
                        if (hOP(properties, s[0]) !== undefined) {
                            properties[s[0]] = util_assign(metadata("SP." + s[0]), properties[s[0]]);
                            bpObj = properties[s[0]];
                            bpObj.High = bpObj.High.toString();
                            bpObj.Low = bpObj.Low.toString();
                        }
                        postBody = body(util_assign(metadata("SP.RoleDefinition"), properties), headers({ "X-HTTP-Method": "MERGE" }));
                        return [4 /*yield*/, spPost(this, postBody)];
                    case 1:
                        data = _a.sent();
                        definition = this;
                        if (hOP(properties, "Name")) {
                            parent_1 = this.getParent(RoleDefinitions, this.parentUrl, "");
                            definition = parent_1.getByName(properties.Name);
                        }
                        return [2 /*return*/, {
                                data: data,
                                definition: definition,
                            }];
                }
            });
        });
    };
    return _RoleDefinition;
}(_SharePointQueryableInstance));

var RoleDefinition = spInvokableFactory(_RoleDefinition);
var PermissionKind;
(function (PermissionKind) {
    /**
     * Has no permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["EmptyMask"] = 0] = "EmptyMask";
    /**
     * View items in lists, documents in document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["ViewListItems"] = 1] = "ViewListItems";
    /**
     * Add items to lists, documents to document libraries, and Web discussion comments.
     */
    PermissionKind[PermissionKind["AddListItems"] = 2] = "AddListItems";
    /**
     * Edit items in lists, edit documents in document libraries, edit Web discussion comments
     * in documents, and customize Web Part Pages in document libraries.
     */
    PermissionKind[PermissionKind["EditListItems"] = 3] = "EditListItems";
    /**
     * Delete items from a list, documents from a document library, and Web discussion
     * comments in documents.
     */
    PermissionKind[PermissionKind["DeleteListItems"] = 4] = "DeleteListItems";
    /**
     * Approve a minor version of a list item or document.
     */
    PermissionKind[PermissionKind["ApproveItems"] = 5] = "ApproveItems";
    /**
     * View the source of documents with server-side file handlers.
     */
    PermissionKind[PermissionKind["OpenItems"] = 6] = "OpenItems";
    /**
     * View past versions of a list item or document.
     */
    PermissionKind[PermissionKind["ViewVersions"] = 7] = "ViewVersions";
    /**
     * Delete past versions of a list item or document.
     */
    PermissionKind[PermissionKind["DeleteVersions"] = 8] = "DeleteVersions";
    /**
     * Discard or check in a document which is checked out to another user.
     */
    PermissionKind[PermissionKind["CancelCheckout"] = 9] = "CancelCheckout";
    /**
     * Create, change, and delete personal views of lists.
     */
    PermissionKind[PermissionKind["ManagePersonalViews"] = 10] = "ManagePersonalViews";
    /**
     * Create and delete lists, add or remove columns in a list, and add or remove public views of a list.
     */
    PermissionKind[PermissionKind["ManageLists"] = 12] = "ManageLists";
    /**
     * View forms, views, and application pages, and enumerate lists.
     */
    PermissionKind[PermissionKind["ViewFormPages"] = 13] = "ViewFormPages";
    /**
     * Make content of a list or document library retrieveable for anonymous users through SharePoint search.
     * The list permissions in the site do not change.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessList"] = 14] = "AnonymousSearchAccessList";
    /**
     * Allow users to open a Site, list, or folder to access items inside that container.
     */
    PermissionKind[PermissionKind["Open"] = 17] = "Open";
    /**
     * View pages in a Site.
     */
    PermissionKind[PermissionKind["ViewPages"] = 18] = "ViewPages";
    /**
     * Add, change, or delete HTML pages or Web Part Pages, and edit the Site using
     * a Windows SharePoint Services compatible editor.
     */
    PermissionKind[PermissionKind["AddAndCustomizePages"] = 19] = "AddAndCustomizePages";
    /**
     * Apply a theme or borders to the entire Site.
     */
    PermissionKind[PermissionKind["ApplyThemeAndBorder"] = 20] = "ApplyThemeAndBorder";
    /**
     * Apply a style sheet (.css file) to the Site.
     */
    PermissionKind[PermissionKind["ApplyStyleSheets"] = 21] = "ApplyStyleSheets";
    /**
     * View reports on Site usage.
     */
    PermissionKind[PermissionKind["ViewUsageData"] = 22] = "ViewUsageData";
    /**
     * Create a Site using Self-Service Site Creation.
     */
    PermissionKind[PermissionKind["CreateSSCSite"] = 23] = "CreateSSCSite";
    /**
     * Create subsites such as team sites, Meeting Workspace sites, and Document Workspace sites.
     */
    PermissionKind[PermissionKind["ManageSubwebs"] = 24] = "ManageSubwebs";
    /**
     * Create a group of users that can be used anywhere within the site collection.
     */
    PermissionKind[PermissionKind["CreateGroups"] = 25] = "CreateGroups";
    /**
     * Create and change permission levels on the Site and assign permissions to users
     * and groups.
     */
    PermissionKind[PermissionKind["ManagePermissions"] = 26] = "ManagePermissions";
    /**
     * Enumerate files and folders in a Site using Microsoft Office SharePoint Designer
     * and WebDAV interfaces.
     */
    PermissionKind[PermissionKind["BrowseDirectories"] = 27] = "BrowseDirectories";
    /**
     * View information about users of the Site.
     */
    PermissionKind[PermissionKind["BrowseUserInfo"] = 28] = "BrowseUserInfo";
    /**
     * Add or remove personal Web Parts on a Web Part Page.
     */
    PermissionKind[PermissionKind["AddDelPrivateWebParts"] = 29] = "AddDelPrivateWebParts";
    /**
     * Update Web Parts to display personalized information.
     */
    PermissionKind[PermissionKind["UpdatePersonalWebParts"] = 30] = "UpdatePersonalWebParts";
    /**
     * Grant the ability to perform all administration tasks for the Site as well as
     * manage content, activate, deactivate, or edit properties of Site scoped Features
     * through the object model or through the user interface (UI). When granted on the
     * root Site of a Site Collection, activate, deactivate, or edit properties of
     * site collection scoped Features through the object model. To browse to the Site
     * Collection Features page and activate or deactivate Site Collection scoped Features
     * through the UI, you must be a Site Collection administrator.
     */
    PermissionKind[PermissionKind["ManageWeb"] = 31] = "ManageWeb";
    /**
     * Content of lists and document libraries in the Web site will be retrieveable for anonymous users through
     * SharePoint search if the list or document library has AnonymousSearchAccessList set.
     */
    PermissionKind[PermissionKind["AnonymousSearchAccessWebLists"] = 32] = "AnonymousSearchAccessWebLists";
    /**
     * Use features that launch client applications. Otherwise, users must work on documents
     * locally and upload changes.
     */
    PermissionKind[PermissionKind["UseClientIntegration"] = 37] = "UseClientIntegration";
    /**
     * Use SOAP, WebDAV, or Microsoft Office SharePoint Designer interfaces to access the Site.
     */
    PermissionKind[PermissionKind["UseRemoteAPIs"] = 38] = "UseRemoteAPIs";
    /**
     * Manage alerts for all users of the Site.
     */
    PermissionKind[PermissionKind["ManageAlerts"] = 39] = "ManageAlerts";
    /**
     * Create e-mail alerts.
     */
    PermissionKind[PermissionKind["CreateAlerts"] = 40] = "CreateAlerts";
    /**
     * Allows a user to change his or her user information, such as adding a picture.
     */
    PermissionKind[PermissionKind["EditMyUserInfo"] = 41] = "EditMyUserInfo";
    /**
     * Enumerate permissions on Site, list, folder, document, or list item.
     */
    PermissionKind[PermissionKind["EnumeratePermissions"] = 63] = "EnumeratePermissions";
    /**
     * Has all permissions on the Site. Not available through the user interface.
     */
    PermissionKind[PermissionKind["FullMask"] = 65] = "FullMask";
})(PermissionKind || (PermissionKind = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/funcs.js





/**
* Gets the effective permissions for the user supplied
*
* @param loginName The claims username for the user (ex: i:0#.f|membership|user@domain.com)
*/
function getUserEffectivePermissions(loginName) {
    return __awaiter(this, void 0, void 0, function () {
        var q, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    q = this.clone(SharePointQueryableInstance, "getUserEffectivePermissions(@user)");
                    q.query.set("@user", "'" + encodeURIComponent(loginName) + "'");
                    return [4 /*yield*/, q.get()];
                case 1:
                    r = _a.sent();
                    // handle verbose mode
                    return [2 /*return*/, hOP(r, "GetUserEffectivePermissions") ? r.GetUserEffectivePermissions : r];
            }
        });
    });
}
/**
 * Gets the effective permissions for the current user
 */
function getCurrentUserEffectivePermissions() {
    return __awaiter(this, void 0, void 0, function () {
        var q;
        return __generator(this, function (_a) {
            q = this.clone(SharePointQueryable, "EffectiveBasePermissions");
            return [2 /*return*/, q.get().then(function (r) {
                    // handle verbose mode
                    return hOP(r, "EffectiveBasePermissions") ? r.EffectiveBasePermissions : r;
                })];
        });
    });
}
/**
 * Breaks the security inheritance at this level optinally copying permissions and clearing subscopes
 *
 * @param copyRoleAssignments If true the permissions are copied from the current parent scope
 * @param clearSubscopes Optional. true to make all child securable objects inherit role assignments from the current object
 */
function breakRoleInheritance(copyRoleAssignments, clearSubscopes) {
    if (copyRoleAssignments === void 0) { copyRoleAssignments = false; }
    if (clearSubscopes === void 0) { clearSubscopes = false; }
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(SharePointQueryable, "breakroleinheritance(copyroleassignments=" + copyRoleAssignments + ", clearsubscopes=" + clearSubscopes + ")"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Removes the local role assignments so that it re-inherit role assignments from the parent object.
 *
 */
function resetRoleInheritance() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(SharePointQueryable, "resetroleinheritance"))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Determines if a given user has the appropriate permissions
 *
 * @param loginName The user to check
 * @param permission The permission being checked
 */
function userHasPermissions(loginName, permission) {
    return __awaiter(this, void 0, void 0, function () {
        var perms;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getUserEffectivePermissions.call(this, loginName)];
                case 1:
                    perms = _a.sent();
                    return [2 /*return*/, this.hasPermissions(perms, permission)];
            }
        });
    });
}
/**
 * Determines if the current user has the requested permissions
 *
 * @param permission The permission we wish to check
 */
function currentUserHasPermissions(permission) {
    return __awaiter(this, void 0, void 0, function () {
        var perms;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getCurrentUserEffectivePermissions.call(this)];
                case 1:
                    perms = _a.sent();
                    return [2 /*return*/, this.hasPermissions(perms, permission)];
            }
        });
    });
}
/**
 * Taken from sp.js, checks the supplied permissions against the mask
 *
 * @param value The security principal's permissions on the given object
 * @param perm The permission checked against the value
 */
/* eslint-disable no-bitwise */
function hasPermissions(value, perm) {
    if (!perm) {
        return true;
    }
    if (perm === PermissionKind.FullMask) {
        return (value.High & 32767) === 32767 && value.Low === 65535;
    }
    perm = perm - 1;
    var num = 1;
    if (perm >= 0 && perm < 32) {
        num = num << perm;
        return 0 !== (value.Low & num);
    }
    else if (perm >= 32 && perm < 64) {
        num = num << perm - 32;
        return 0 !== (value.High & num);
    }
    return false;
}
/* eslint-enable no-bitwise */
//# sourceMappingURL=funcs.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/item.js





addProp(_Item, "roleAssignments", RoleAssignments);
addProp(_Item, "firstUniqueAncestorSecurableObject", SharePointQueryableInstance);
_Item.prototype.getUserEffectivePermissions = getUserEffectivePermissions;
_Item.prototype.getCurrentUserEffectivePermissions = getCurrentUserEffectivePermissions;
_Item.prototype.breakRoleInheritance = breakRoleInheritance;
_Item.prototype.resetRoleInheritance = resetRoleInheritance;
_Item.prototype.userHasPermissions = userHasPermissions;
_Item.prototype.currentUserHasPermissions = currentUserHasPermissions;
_Item.prototype.hasPermissions = hasPermissions;
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/list.js





addProp(_List, "roleAssignments", RoleAssignments);
addProp(_List, "firstUniqueAncestorSecurableObject", SharePointQueryableInstance);
_List.prototype.getUserEffectivePermissions = getUserEffectivePermissions;
_List.prototype.getCurrentUserEffectivePermissions = getCurrentUserEffectivePermissions;
_List.prototype.breakRoleInheritance = breakRoleInheritance;
_List.prototype.resetRoleInheritance = resetRoleInheritance;
_List.prototype.userHasPermissions = userHasPermissions;
_List.prototype.currentUserHasPermissions = currentUserHasPermissions;
_List.prototype.hasPermissions = hasPermissions;
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/web.js





addProp(_Web, "roleDefinitions", RoleDefinitions);
addProp(_Web, "roleAssignments", RoleAssignments);
addProp(_Web, "firstUniqueAncestorSecurableObject", SharePointQueryableInstance);
_Web.prototype.getUserEffectivePermissions = getUserEffectivePermissions;
_Web.prototype.getCurrentUserEffectivePermissions = getCurrentUserEffectivePermissions;
_Web.prototype.breakRoleInheritance = breakRoleInheritance;
_Web.prototype.resetRoleInheritance = resetRoleInheritance;
_Web.prototype.userHasPermissions = userHasPermissions;
_Web.prototype.currentUserHasPermissions = currentUserHasPermissions;
_Web.prototype.hasPermissions = hasPermissions;
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/security/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/types.js
/**
 * Indicates the role of the sharing link
 */
var SharingRole;
(function (SharingRole) {
    SharingRole[SharingRole["None"] = 0] = "None";
    SharingRole[SharingRole["View"] = 1] = "View";
    SharingRole[SharingRole["Edit"] = 2] = "Edit";
    SharingRole[SharingRole["Owner"] = 3] = "Owner";
})(SharingRole || (SharingRole = {}));
var SPSharedObjectType;
(function (SPSharedObjectType) {
    SPSharedObjectType[SPSharedObjectType["Unknown"] = 0] = "Unknown";
    SPSharedObjectType[SPSharedObjectType["File"] = 1] = "File";
    SPSharedObjectType[SPSharedObjectType["Folder"] = 2] = "Folder";
    SPSharedObjectType[SPSharedObjectType["Item"] = 3] = "Item";
    SPSharedObjectType[SPSharedObjectType["List"] = 4] = "List";
    SPSharedObjectType[SPSharedObjectType["Web"] = 5] = "Web";
    SPSharedObjectType[SPSharedObjectType["Max"] = 6] = "Max";
})(SPSharedObjectType || (SPSharedObjectType = {}));
var SharingDomainRestrictionMode;
(function (SharingDomainRestrictionMode) {
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["None"] = 0] = "None";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["AllowList"] = 1] = "AllowList";
    SharingDomainRestrictionMode[SharingDomainRestrictionMode["BlockList"] = 2] = "BlockList";
})(SharingDomainRestrictionMode || (SharingDomainRestrictionMode = {}));
var SharingOperationStatusCode;
(function (SharingOperationStatusCode) {
    /**
     * The share operation completed without errors.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CompletedSuccessfully"] = 0] = "CompletedSuccessfully";
    /**
     * The share operation completed and generated requests for access.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["AccessRequestsQueued"] = 1] = "AccessRequestsQueued";
    /**
     * The share operation failed as there were no resolved users.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["NoResolvedUsers"] = -1] = "NoResolvedUsers";
    /**
     * The share operation failed due to insufficient permissions.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["AccessDenied"] = -2] = "AccessDenied";
    /**
     * The share operation failed when attempting a cross site share, which is not supported.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CrossSiteRequestNotSupported"] = -3] = "CrossSiteRequestNotSupported";
    /**
     * The sharing operation failed due to an unknown error.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["UnknowError"] = -4] = "UnknowError";
    /**
     * The text you typed is too long. Please shorten it.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["EmailBodyTooLong"] = -5] = "EmailBodyTooLong";
    /**
     * The maximum number of unique scopes in the list has been exceeded.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["ListUniqueScopesExceeded"] = -6] = "ListUniqueScopesExceeded";
    /**
     * The share operation failed because a sharing capability is disabled in the site.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["CapabilityDisabled"] = -7] = "CapabilityDisabled";
    /**
     * The specified object for the share operation is not supported.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["ObjectNotSupported"] = -8] = "ObjectNotSupported";
    /**
     * A SharePoint group cannot contain another SharePoint group.
     */
    SharingOperationStatusCode[SharingOperationStatusCode["NestedGroupsNotSupported"] = -9] = "NestedGroupsNotSupported";
})(SharingOperationStatusCode || (SharingOperationStatusCode = {}));
var SharingLinkKind;
(function (SharingLinkKind) {
    /**
     * Uninitialized link
     */
    SharingLinkKind[SharingLinkKind["Uninitialized"] = 0] = "Uninitialized";
    /**
     * Direct link to the object being shared
     */
    SharingLinkKind[SharingLinkKind["Direct"] = 1] = "Direct";
    /**
     * Organization-shareable link to the object being shared with view permissions
     */
    SharingLinkKind[SharingLinkKind["OrganizationView"] = 2] = "OrganizationView";
    /**
     * Organization-shareable link to the object being shared with edit permissions
     */
    SharingLinkKind[SharingLinkKind["OrganizationEdit"] = 3] = "OrganizationEdit";
    /**
     * View only anonymous link
     */
    SharingLinkKind[SharingLinkKind["AnonymousView"] = 4] = "AnonymousView";
    /**
     * Read/Write anonymous link
     */
    SharingLinkKind[SharingLinkKind["AnonymousEdit"] = 5] = "AnonymousEdit";
    /**
     * Flexible sharing Link where properties can change without affecting link URL
     */
    SharingLinkKind[SharingLinkKind["Flexible"] = 6] = "Flexible";
})(SharingLinkKind || (SharingLinkKind = {}));
var RoleType;
(function (RoleType) {
    RoleType[RoleType["None"] = 0] = "None";
    RoleType[RoleType["Guest"] = 1] = "Guest";
    RoleType[RoleType["Reader"] = 2] = "Reader";
    RoleType[RoleType["Contributor"] = 3] = "Contributor";
    RoleType[RoleType["WebDesigner"] = 4] = "WebDesigner";
    RoleType[RoleType["Administrator"] = 5] = "Administrator";
})(RoleType || (RoleType = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/file.js




_File.prototype.shareWith = function (loginNames, role, requireSignin, emailData) {
    if (role === void 0) { role = SharingRole.View; }
    if (requireSignin === void 0) { requireSignin = false; }
    return __awaiter(this, void 0, void 0, function () {
        var item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getItem()];
                case 1:
                    item = _a.sent();
                    return [2 /*return*/, item.shareWith(loginNames, role, requireSignin, emailData)];
            }
        });
    });
};
_File.prototype.getShareLink = function (kind, expiration) {
    if (expiration === void 0) { expiration = null; }
    return __awaiter(this, void 0, void 0, function () {
        var item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getItem()];
                case 1:
                    item = _a.sent();
                    return [2 /*return*/, item.getShareLink(kind, expiration)];
            }
        });
    });
};
_File.prototype.checkSharingPermissions = function (recipients) {
    return __awaiter(this, void 0, void 0, function () {
        var item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getItem()];
                case 1:
                    item = _a.sent();
                    return [2 /*return*/, item.checkSharingPermissions(recipients)];
            }
        });
    });
};
// eslint-disable-next-line max-len
_File.prototype.getSharingInformation = function (request, expands) {
    if (request === void 0) { request = null; }
    if (expands === void 0) { expands = []; }
    return __awaiter(this, void 0, void 0, function () {
        var item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getItem()];
                case 1:
                    item = _a.sent();
                    return [2 /*return*/, item.getSharingInformation(request, expands)];
            }
        });
    });
};
_File.prototype.getObjectSharingSettings = function (useSimplifiedRoles) {
    if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
    return __awaiter(this, void 0, void 0, function () {
        var item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getItem()];
                case 1:
                    item = _a.sent();
                    return [2 /*return*/, item.getObjectSharingSettings(useSimplifiedRoles)];
            }
        });
    });
};
_File.prototype.unshare = function () {
    return __awaiter(this, void 0, void 0, function () {
        var item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getItem()];
                case 1:
                    item = _a.sent();
                    return [2 /*return*/, item.unshare()];
            }
        });
    });
};
_File.prototype.deleteSharingLinkByKind = function (linkKind) {
    return __awaiter(this, void 0, void 0, function () {
        var item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getItem()];
                case 1:
                    item = _a.sent();
                    return [2 /*return*/, item.deleteSharingLinkByKind(linkKind)];
            }
        });
    });
};
_File.prototype.unshareLink = function unshareLink(linkKind, shareId) {
    if (shareId === void 0) { shareId = emptyGuid; }
    return __awaiter(this, void 0, void 0, function () {
        var item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.getItem()];
                case 1:
                    item = _a.sent();
                    return [2 /*return*/, item.unshareLink(linkKind, shareId)];
            }
        });
    });
};
//# sourceMappingURL=file.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/folder.js



_Folder.prototype.shareWith = function (loginNames, role, requireSignin, shareEverything, emailData) {
    if (role === void 0) { role = SharingRole.View; }
    if (requireSignin === void 0) { requireSignin = false; }
    if (shareEverything === void 0) { shareEverything = false; }
    return __awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.shareWith(loginNames, role, requireSignin, shareEverything, emailData)];
            }
        });
    });
};
_Folder.prototype.getShareLink = function (kind, expiration) {
    if (expiration === void 0) { expiration = null; }
    return __awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.getShareLink(kind, expiration)];
            }
        });
    });
};
_Folder.prototype.checkSharingPermissions = function (recipients) {
    return __awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.checkSharingPermissions(recipients)];
            }
        });
    });
};
_Folder.prototype.getSharingInformation = function (request, expands) {
    return __awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.getSharingInformation(request, expands)];
            }
        });
    });
};
_Folder.prototype.getObjectSharingSettings = function (useSimplifiedRoles) {
    if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
    return __awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.getObjectSharingSettings(useSimplifiedRoles)];
            }
        });
    });
};
_Folder.prototype.unshare = function () {
    return __awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.unshare()];
            }
        });
    });
};
_Folder.prototype.deleteSharingLinkByKind = function (kind) {
    return __awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.deleteSharingLinkByKind(kind)];
            }
        });
    });
};
_Folder.prototype.unshareLink = function (kind, shareId) {
    return __awaiter(this, void 0, void 0, function () {
        var dependency, shareable;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    return [4 /*yield*/, this.getShareable()];
                case 1:
                    shareable = _a.sent();
                    dependency();
                    return [2 /*return*/, shareable.unshareLink(kind, shareId)];
            }
        });
    });
};
//# sourceMappingURL=folder.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/funcs.js











/**
 * Shares an object based on the supplied options
 *
 * @param options The set of options to send to the ShareObject method
 * @param bypass If true any processing is skipped and the options are sent directly to the ShareObject method
 */
function shareObject(o, options, bypass) {
    if (bypass === void 0) { bypass = false; }
    return __awaiter(this, void 0, void 0, function () {
        var roleValue, userStr, postBody;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (bypass) {
                        // if the bypass flag is set send the supplied parameters directly to the service
                        return [2 /*return*/, sendShareObjectRequest(o, options)];
                    }
                    // extend our options with some defaults
                    options = util_assign(options, {
                        group: null,
                        includeAnonymousLinkInEmail: false,
                        propagateAcl: false,
                        useSimplifiedRoles: true,
                    }, true);
                    return [4 /*yield*/, getRoleValue(options.role, options.group)];
                case 1:
                    roleValue = _a.sent();
                    // handle the multiple input types
                    if (!Array.isArray(options.loginNames)) {
                        options.loginNames = [options.loginNames];
                    }
                    userStr = jsS(options.loginNames.map(function (Key) { return ({ Key: Key }); }));
                    postBody = {
                        peoplePickerInput: userStr,
                        roleValue: roleValue,
                        url: options.url,
                    };
                    if (options.emailData !== undefined && options.emailData !== null) {
                        postBody = util_assign(postBody, {
                            emailBody: options.emailData.body,
                            emailSubject: options.emailData.subject !== undefined ? options.emailData.subject : "Shared with you.",
                            sendEmail: true,
                        });
                    }
                    return [2 /*return*/, sendShareObjectRequest(o, postBody)];
            }
        });
    });
}
/**
 * Gets a sharing link for the supplied
 *
 * @param kind The kind of link to share
 * @param expiration The optional expiration for this link
 */
function getShareLink(kind, expiration) {
    if (expiration === void 0) { expiration = null; }
    // date needs to be an ISO string or null
    var expString = expiration !== null ? expiration.toISOString() : null;
    // clone using the factory and send the request
    var o = tag.configure(this.clone(SharePointQueryableInstance, "shareLink"), "sh.getShareLink");
    return spPost(o, body({
        request: {
            createLink: true,
            emailData: null,
            settings: {
                expiration: expString,
                linkKind: kind,
            },
        },
    }));
}
/**
 * Checks Permissions on the list of Users and returns back role the users have on the Item.
 *
 * @param recipients The array of Entities for which Permissions need to be checked.
 */
function checkPermissions(recipients) {
    var o = tag.configure(this.clone(SharePointQueryableInstance, "checkPermissions"), "sh.checkPermissions");
    return spPost(o, body({ recipients: recipients }));
}
/**
 * Get Sharing Information.
 *
 * @param request The SharingInformationRequest Object.
 * @param expands Expand more fields.
 *
 */
function getSharingInformation(request, expands) {
    if (request === void 0) { request = null; }
    if (expands === void 0) { expands = []; }
    var o = tag.configure(this.clone(SharePointQueryableInstance, "getSharingInformation"), "sh.getSharingInformation");
    return spPost(o.expand.apply(o, __spreadArray([], __read(expands))), body({ request: request }));
}
/**
 * Gets the sharing settings of an item.
 *
 * @param useSimplifiedRoles Determines whether to use simplified roles.
 */
function getObjectSharingSettings(useSimplifiedRoles) {
    if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
    var o = tag.configure(this.clone(SharePointQueryableInstance, "getObjectSharingSettings"), "sh.getObjectSharingSettings");
    return spPost(o, body({ useSimplifiedRoles: useSimplifiedRoles }));
}
/**
 * Unshares this object
 */
function unshareObject() {
    return spPost(tag.configure(this.clone(SharePointQueryableInstance, "unshareObject"), "sh.unshareObject"));
}
/**
 * Deletes a link by type
 *
 * @param kind Deletes a sharing link by the kind of link
 */
function deleteLinkByKind(linkKind) {
    return spPost(tag.configure(this.clone(SharePointQueryableInstance, "deleteLinkByKind"), "sh.deleteLinkByKind"), body({ linkKind: linkKind }));
}
/**
 * Removes the specified link to the item.
 *
 * @param kind The kind of link to be deleted.
 * @param shareId
 */
function unshareLink(linkKind, shareId) {
    if (shareId === void 0) { shareId = emptyGuid; }
    return spPost(tag.configure(this.clone(SharePointQueryableInstance, "unshareLink"), "sh.unshareLink"), body({ linkKind: linkKind, shareId: shareId }));
}
/**
 * Shares this instance with the supplied users
 *
 * @param loginNames Resolved login names to share
 * @param role The role
 * @param requireSignin True to require the user is authenticated, otherwise false
 * @param propagateAcl True to apply this share to all children
 * @param emailData If supplied an email will be sent with the indicated properties
 */
function shareWith(o, loginNames, role, requireSignin, propagateAcl, emailData) {
    if (requireSignin === void 0) { requireSignin = false; }
    if (propagateAcl === void 0) { propagateAcl = false; }
    return __awaiter(this, void 0, void 0, function () {
        var userStr, roleFilter, w, def, postBody;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // handle the multiple input types
                    if (!Array.isArray(loginNames)) {
                        loginNames = [loginNames];
                    }
                    userStr = jsS(loginNames.map(function (login) {
                        return { Key: login };
                    }));
                    roleFilter = role === SharingRole.Edit ? RoleType.Contributor : RoleType.Reader;
                    w = SharePointQueryableCollection("_api/web", "roledefinitions");
                    return [4 /*yield*/, w.select("Id").filter("RoleTypeKind eq " + roleFilter).get()];
                case 1:
                    def = _a.sent();
                    if (!Array.isArray(def) || def.length < 1) {
                        throw Error("Could not locate a role defintion with RoleTypeKind " + roleFilter);
                    }
                    postBody = {
                        includeAnonymousLinkInEmail: requireSignin,
                        peoplePickerInput: userStr,
                        propagateAcl: propagateAcl,
                        roleValue: "role:" + def[0].Id,
                        useSimplifiedRoles: true,
                    };
                    if (emailData !== undefined) {
                        postBody = util_assign(postBody, {
                            emailBody: emailData.body,
                            emailSubject: emailData.subject !== undefined ? emailData.subject : "",
                            sendEmail: true,
                        });
                    }
                    return [2 /*return*/, spPost(tag.configure(o.clone(SharePointQueryableInstance, "shareObject"), "sh.shareWith"), body(postBody))];
            }
        });
    });
}
function sendShareObjectRequest(o, options) {
    var w = tag.configure(Web(extractWebUrl(o.toUrl()), "/_api/SP.Web.ShareObject"), "sh.sendShareObjectRequest");
    w.configureFrom(o);
    return spPost(w.expand("UsersWithAccessRequests", "GroupsSharedWith"), body(options));
}
/**
 * Calculates the roleValue string used in the sharing query
 *
 * @param role The Sharing Role
 * @param group The Group type
 */
function getRoleValue(role, group) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, g1, g2, roleFilter, def;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(group !== undefined && group !== null)) return [3 /*break*/, 7];
                    _a = group;
                    switch (_a) {
                        case RoleType.Contributor: return [3 /*break*/, 1];
                        case RoleType.Reader: return [3 /*break*/, 3];
                        case RoleType.Guest: return [3 /*break*/, 3];
                    }
                    return [3 /*break*/, 5];
                case 1: return [4 /*yield*/, Web("_api/web", "associatedmembergroup").configureFrom(this).select("Id")()];
                case 2:
                    g1 = _b.sent();
                    return [2 /*return*/, "group: " + g1.Id];
                case 3: return [4 /*yield*/, Web("_api/web", "associatedvisitorgroup").configureFrom(this).select("Id")()];
                case 4:
                    g2 = _b.sent();
                    return [2 /*return*/, "group: " + g2.Id];
                case 5: throw Error("Could not determine role value for supplied value. Contributor, Reader, and Guest are supported");
                case 6: return [3 /*break*/, 9];
                case 7:
                    roleFilter = role === SharingRole.Edit ? RoleType.Contributor : RoleType.Reader;
                    return [4 /*yield*/, RoleDefinitions("_api/web").select("Id").top(1).filter("RoleTypeKind eq " + roleFilter)()];
                case 8:
                    def = _b.sent();
                    if (def.length < 1) {
                        throw Error("Could not locate associated role definition for supplied role. Edit and View are supported");
                    }
                    return [2 /*return*/, "role: " + def[0].Id];
                case 9: return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=funcs.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/item.js



_Item.prototype.shareWith = function (loginNames, role, requireSignin, emailData) {
    if (role === void 0) { role = SharingRole.View; }
    if (requireSignin === void 0) { requireSignin = false; }
    return shareWith(this, loginNames, role, requireSignin, false, emailData);
};
_Item.prototype.getShareLink = getShareLink;
_Item.prototype.checkSharingPermissions = checkPermissions;
_Item.prototype.getSharingInformation = getSharingInformation;
_Item.prototype.getObjectSharingSettings = getObjectSharingSettings;
_Item.prototype.unshare = unshareObject;
_Item.prototype.deleteSharingLinkByKind = deleteLinkByKind;
_Item.prototype.unshareLink = unshareLink;
//# sourceMappingURL=item.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/web.js









/**
 * Shares this web with the supplied users
 * @param loginNames The resolved login names to share
 * @param role The role to share this web
 * @param emailData Optional email data
 */
_Web.prototype.shareWith = function (loginNames, role, emailData) {
    if (role === void 0) { role = SharingRole.View; }
    return __awaiter(this, void 0, void 0, function () {
        var dependency, web, url;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dependency = this.addBatchDependency();
                    web = new _SharePointQueryableInstance(extractWebUrl(this.toUrl()), "/_api/web/url");
                    return [4 /*yield*/, web.get()];
                case 1:
                    url = _a.sent();
                    dependency();
                    return [2 /*return*/, this.shareObject(combine(url, "/_layouts/15/aclinv.aspx?forSharing=1&mbypass=1"), loginNames, role, emailData)];
            }
        });
    });
};
/**
 * Provides direct access to the static web.ShareObject method
 *
 * @param url The url to share
 * @param loginNames Resolved loginnames string[] of a single login name string
 * @param roleValue Role value
 * @param emailData Optional email data
 * @param groupId Optional group id
 * @param propagateAcl
 * @param includeAnonymousLinkInEmail
 * @param useSimplifiedRoles
 */
_Web.prototype.shareObject = function (url, loginNames, role, emailData, group, propagateAcl, includeAnonymousLinkInEmail, useSimplifiedRoles) {
    if (propagateAcl === void 0) { propagateAcl = false; }
    if (includeAnonymousLinkInEmail === void 0) { includeAnonymousLinkInEmail = false; }
    if (useSimplifiedRoles === void 0) { useSimplifiedRoles = true; }
    return shareObject(this, {
        emailData: emailData,
        group: group,
        includeAnonymousLinkInEmail: includeAnonymousLinkInEmail,
        loginNames: loginNames,
        propagateAcl: propagateAcl,
        role: role,
        url: url,
        useSimplifiedRoles: useSimplifiedRoles,
    });
};
/**
 * Supplies a method to pass any set of arguments to ShareObject
 *
 * @param options The set of options to send to ShareObject
 */
_Web.prototype.shareObjectRaw = function (options) {
    return shareObject(this, options, true);
};
/**
 * Supplies a method to pass any set of arguments to ShareObject
 *
 * @param options The set of options to send to ShareObject
 */
_Web.prototype.unshareObject = function (url) {
    return spPost(Web(this, "unshareObject").configureFrom(this), body({ url: url }));
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sharing/index.js





//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-designs/types.js







var _SiteDesigns = /** @class */ (function (_super) {
    __extends(_SiteDesigns, _super);
    function _SiteDesigns(baseUrl, methodName) {
        if (methodName === void 0) { methodName = ""; }
        var _this = this;
        var url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        _this = _super.call(this, extractWebUrl(url), "_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility." + methodName) || this;
        return _this;
    }
    _SiteDesigns.prototype.execute = function (props) {
        return spPost(this, body(props, headers({ "Content-Type": "application/json;charset=utf-8" })));
    };
    /**
     * Creates a new site design available to users when they create a new site from the SharePoint home page.
     *
     * @param creationInfo A sitedesign creation information object
     */
    _SiteDesigns.prototype.createSiteDesign = function (creationInfo) {
        return this.clone(SiteDesignsCloneFactory, "CreateSiteDesign").execute({ info: creationInfo });
    };
    /**
     * Applies a site design to an existing site collection.
     *
     * @param siteDesignId The ID of the site design to apply.
     * @param webUrl The URL of the site collection where you want to apply the site design.
     */
    _SiteDesigns.prototype.applySiteDesign = function (siteDesignId, webUrl) {
        return this.clone(SiteDesignsCloneFactory, "ApplySiteDesign").execute({ siteDesignId: siteDesignId, "webUrl": webUrl });
    };
    /**
     * Gets the list of available site designs
     */
    _SiteDesigns.prototype.getSiteDesigns = function () {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesigns").execute({});
    };
    /**
     * Gets information about a specific site design.
     * @param id The ID of the site design to get information about.
     */
    _SiteDesigns.prototype.getSiteDesignMetadata = function (id) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignMetadata").execute({ id: id });
    };
    /**
     * Updates a site design with new values. In the REST call, all parameters are optional except the site script Id.
     * If you had previously set the IsDefault parameter to TRUE and wish it to remain true, you must pass in this parameter again (otherwise it will be reset to FALSE).
     * @param updateInfo A sitedesign update information object
     */
    _SiteDesigns.prototype.updateSiteDesign = function (updateInfo) {
        return this.clone(SiteDesignsCloneFactory, "UpdateSiteDesign").execute({ updateInfo: updateInfo });
    };
    /**
     * Deletes a site design.
     * @param id The ID of the site design to delete.
     */
    _SiteDesigns.prototype.deleteSiteDesign = function (id) {
        return this.clone(SiteDesignsCloneFactory, "DeleteSiteDesign").execute({ id: id });
    };
    /**
     * Gets a list of principals that have access to a site design.
     * @param id The ID of the site design to get rights information from.
     */
    _SiteDesigns.prototype.getSiteDesignRights = function (id) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignRights").execute({ id: id });
    };
    /**
     * Grants access to a site design for one or more principals.
     * @param id The ID of the site design to grant rights on.
     * @param principalNames An array of one or more principals to grant view rights.
     *                       Principals can be users or mail-enabled security groups in the form of "alias" or "alias@<domain name>.com"
     * @param grantedRights Always set to 1. This represents the View right.
     */
    _SiteDesigns.prototype.grantSiteDesignRights = function (id, principalNames, grantedRights) {
        if (grantedRights === void 0) { grantedRights = 1; }
        return this.clone(SiteDesignsCloneFactory, "GrantSiteDesignRights")
            .execute({
            "grantedRights": grantedRights.toString(),
            "id": id,
            "principalNames": principalNames,
        });
    };
    /**
     * Revokes access from a site design for one or more principals.
     * @param id The ID of the site design to revoke rights from.
     * @param principalNames An array of one or more principals to revoke view rights from.
     *                       If all principals have rights revoked on the site design, the site design becomes viewable to everyone.
     */
    _SiteDesigns.prototype.revokeSiteDesignRights = function (id, principalNames) {
        return this.clone(SiteDesignsCloneFactory, "RevokeSiteDesignRights")
            .execute({
            "id": id,
            "principalNames": principalNames,
        });
    };
    /**
     * Adds a site design task on the specified web url to be invoked asynchronously.
     * @param webUrl The absolute url of the web on where to create the task
     * @param siteDesignId The ID of the site design to create a task for
     */
    _SiteDesigns.prototype.addSiteDesignTask = function (webUrl, siteDesignId) {
        return this.clone(SiteDesignsCloneFactory, "AddSiteDesignTask")
            .execute({ "webUrl": webUrl, "siteDesignId": siteDesignId });
    };
    /**
     * Adds a site design task on the current web to be invoked asynchronously.
     * @param siteDesignId The ID of the site design to create a task for
     */
    _SiteDesigns.prototype.addSiteDesignTaskToCurrentWeb = function (siteDesignId) {
        return this.clone(SiteDesignsCloneFactory, "AddSiteDesignTaskToCurrentWeb")
            .execute({ "siteDesignId": siteDesignId });
    };
    /**
     * Retrieves the site design task, if the task has finished running null will be returned
     * @param id The ID of the site design task
     */
    _SiteDesigns.prototype.getSiteDesignTask = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var task;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(SiteDesignsCloneFactory, "GetSiteDesignTask")
                            .execute({ "taskId": id })];
                    case 1:
                        task = _a.sent();
                        return [2 /*return*/, hOP(task, "ID") ? task : null];
                }
            });
        });
    };
    /**
     * Retrieves a list of site design that have run on a specific web
     * @param webUrl The url of the web where the site design was applied
     * @param siteDesignId (Optional) the site design ID, if not provided will return all site design runs
     */
    _SiteDesigns.prototype.getSiteDesignRun = function (webUrl, siteDesignId) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignRun")
            .execute({ "webUrl": webUrl, siteDesignId: siteDesignId });
    };
    /**
     * Retrieves the status of a site design that has been run or is still running
     * @param webUrl The url of the web where the site design was applied
     * @param runId the run ID
     */
    _SiteDesigns.prototype.getSiteDesignRunStatus = function (webUrl, runId) {
        return this.clone(SiteDesignsCloneFactory, "GetSiteDesignRunStatus")
            .execute({ "webUrl": webUrl, runId: runId });
    };
    __decorate([
        tag("sd.createSiteDesign")
    ], _SiteDesigns.prototype, "createSiteDesign", null);
    __decorate([
        tag("sd.applySiteDesign")
    ], _SiteDesigns.prototype, "applySiteDesign", null);
    __decorate([
        tag("sd.getSiteDesigns")
    ], _SiteDesigns.prototype, "getSiteDesigns", null);
    __decorate([
        tag("sd.getSiteDesignMetadata")
    ], _SiteDesigns.prototype, "getSiteDesignMetadata", null);
    __decorate([
        tag("sd.updateSiteDesign")
    ], _SiteDesigns.prototype, "updateSiteDesign", null);
    __decorate([
        tag("sd.deleteSiteDesign")
    ], _SiteDesigns.prototype, "deleteSiteDesign", null);
    __decorate([
        tag("sd.getSiteDesignRights")
    ], _SiteDesigns.prototype, "getSiteDesignRights", null);
    __decorate([
        tag("sd.grantSiteDesignRights")
    ], _SiteDesigns.prototype, "grantSiteDesignRights", null);
    __decorate([
        tag("sd.revokeSiteDesignRights")
    ], _SiteDesigns.prototype, "revokeSiteDesignRights", null);
    __decorate([
        tag("sd.addSiteDesignTask")
    ], _SiteDesigns.prototype, "addSiteDesignTask", null);
    __decorate([
        tag("sd.addSiteDesignTaskToCurrentWeb")
    ], _SiteDesigns.prototype, "addSiteDesignTaskToCurrentWeb", null);
    __decorate([
        tag("sd.getSiteDesignTask")
    ], _SiteDesigns.prototype, "getSiteDesignTask", null);
    __decorate([
        tag("sd.getSiteDesignRun")
    ], _SiteDesigns.prototype, "getSiteDesignRun", null);
    __decorate([
        tag("sd.getSiteDesignRunStatus")
    ], _SiteDesigns.prototype, "getSiteDesignRunStatus", null);
    return _SiteDesigns;
}(_SharePointQueryable));

var SiteDesigns = function (baseUrl, methodName) { return new _SiteDesigns(baseUrl, methodName); };
var SiteDesignsCloneFactory = function (baseUrl, methodName) {
    if (methodName === void 0) { methodName = ""; }
    return SiteDesigns(baseUrl, methodName);
};
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-designs/web.js


_Web.prototype.getSiteDesignRuns = function (siteDesignId) {
    return SiteDesigns(this, "").getSiteDesignRun(undefined, siteDesignId);
};
_Web.prototype.addSiteDesignTask = function (siteDesignId) {
    return SiteDesigns(this, "").addSiteDesignTaskToCurrentWeb(siteDesignId);
};
_Web.prototype.getSiteDesignRunStatus = function (runId) {
    return SiteDesigns(this, "").getSiteDesignRunStatus(undefined, runId);
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-designs/index.js




Reflect.defineProperty(SPRest.prototype, "siteDesigns", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(function (_a) {
            var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
            return SiteDesigns(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-groups/web.js







addProp(_Web, "siteGroups", SiteGroups);
addProp(_Web, "associatedOwnerGroup", SiteGroup, "associatedownergroup");
addProp(_Web, "associatedMemberGroup", SiteGroup, "associatedmembergroup");
addProp(_Web, "associatedVisitorGroup", SiteGroup, "associatedvisitorgroup");
_Web.prototype.createDefaultAssociatedGroups = function (groupNameSeed, siteOwner, copyRoleAssignments, clearSubscopes, siteOwner2) {
    if (copyRoleAssignments === void 0) { copyRoleAssignments = false; }
    if (clearSubscopes === void 0) { clearSubscopes = true; }
    return __awaiter(this, void 0, void 0, function () {
        var q;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.breakRoleInheritance(copyRoleAssignments, clearSubscopes)];
                case 1:
                    _a.sent();
                    q = this.clone(Web, "createDefaultAssociatedGroups(userLogin=@u,userLogin2=@v,groupNameSeed=@s)");
                    q.query.set("@u", "'" + escapeQueryStrValue(siteOwner || "") + "'");
                    q.query.set("@v", "'" + escapeQueryStrValue(siteOwner2 || "") + "'");
                    q.query.set("@s", "'" + escapeQueryStrValue(groupNameSeed || "") + "'");
                    return [2 /*return*/, spPost(q)];
            }
        });
    });
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-groups/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/types.js







var _SiteScripts = /** @class */ (function (_super) {
    __extends(_SiteScripts, _super);
    function _SiteScripts(baseUrl, methodName) {
        if (methodName === void 0) { methodName = ""; }
        var _this = this;
        var url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        _this = _super.call(this, extractWebUrl(url), "_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility." + methodName) || this;
        return _this;
    }
    _SiteScripts.prototype.execute = function (props) {
        return spPost(this, body(props));
    };
    /**
     * Gets a list of information on all existing site scripts.
     */
    _SiteScripts.prototype.getSiteScripts = function () {
        return this.clone(SiteScriptsCloneFactory, "GetSiteScripts", true).execute({});
    };
    /**
     * Creates a new site script.
     *
     * @param title The display name of the site script.
     * @param content JSON value that describes the script. For more information, see JSON reference.
     */
    _SiteScripts.prototype.createSiteScript = function (title, description, content) {
        return this.clone(SiteScriptsCloneFactory, "CreateSiteScript(Title=@title,Description=@desc)?@title='" + escapeQueryStrValue(title) + "'&@desc='" + escapeQueryStrValue(description) + "'")
            .execute(content);
    };
    /**
     * Gets information about a specific site script. It also returns the JSON of the script.
     *
     * @param id The ID of the site script to get information about.
     */
    _SiteScripts.prototype.getSiteScriptMetadata = function (id) {
        return this.clone(SiteScriptsCloneFactory, "GetSiteScriptMetadata").execute({ id: id });
    };
    /**
     * Deletes a site script.
     *
     * @param id The ID of the site script to delete.
     */
    _SiteScripts.prototype.deleteSiteScript = function (id) {
        return this.clone(SiteScriptsCloneFactory, "DeleteSiteScript").execute({ id: id });
    };
    /**
     * Updates a site script with new values. In the REST call, all parameters are optional except the site script Id.
     *
     * @param siteScriptUpdateInfo Object that contains the information to update a site script.
     *                             Make sure you stringify the content object or pass it in the second 'content' parameter
     * @param content (Optional) A new JSON script defining the script actions. For more information, see Site design JSON schema.
     */
    _SiteScripts.prototype.updateSiteScript = function (updateInfo, content) {
        if (content) {
            updateInfo.Content = JSON.stringify(content);
        }
        return this.clone(SiteScriptsCloneFactory, "UpdateSiteScript").execute({ updateInfo: updateInfo });
    };
    /**
     * Gets the site script syntax (JSON) for a specific list
     * @param listUrl The absolute url of the list to retrieve site script
     */
    _SiteScripts.prototype.getSiteScriptFromList = function (listUrl) {
        return this.clone(SiteScriptsCloneFactory, "GetSiteScriptFromList").execute({ listUrl: listUrl });
    };
    /**
     * Gets the site script syntax (JSON) for a specific web
     * @param webUrl The absolute url of the web to retrieve site script
     * @param extractInfo configuration object to specify what to extract
     */
    _SiteScripts.prototype.getSiteScriptFromWeb = function (webUrl, info) {
        return this.clone(SiteScriptsCloneFactory, "getSiteScriptFromWeb").execute({ webUrl: webUrl, info: info });
    };
    /**
     * Executes the indicated site design action on the indicated web.
     *
     * @param webUrl The absolute url of the web to retrieve site script
     * @param extractInfo configuration object to specify what to extract
     */
    _SiteScripts.prototype.executeSiteScriptAction = function (actionDefinition) {
        return this.clone(SiteScriptsCloneFactory, "executeSiteScriptAction").execute({ actionDefinition: actionDefinition });
    };
    __decorate([
        tag("ss.getSiteScripts")
    ], _SiteScripts.prototype, "getSiteScripts", null);
    __decorate([
        tag("ss.createSiteScript")
    ], _SiteScripts.prototype, "createSiteScript", null);
    __decorate([
        tag("ss.getSiteScriptMetadata")
    ], _SiteScripts.prototype, "getSiteScriptMetadata", null);
    __decorate([
        tag("ss.deleteSiteScript")
    ], _SiteScripts.prototype, "deleteSiteScript", null);
    __decorate([
        tag("ss.updateSiteScript")
    ], _SiteScripts.prototype, "updateSiteScript", null);
    __decorate([
        tag("ss.getSiteScriptFromList")
    ], _SiteScripts.prototype, "getSiteScriptFromList", null);
    __decorate([
        tag("ss.getSiteScriptFromWeb")
    ], _SiteScripts.prototype, "getSiteScriptFromWeb", null);
    __decorate([
        tag("ss.executeSiteScriptAction")
    ], _SiteScripts.prototype, "executeSiteScriptAction", null);
    return _SiteScripts;
}(_SharePointQueryable));

var SiteScripts = function (baseUrl, methodName) { return new _SiteScripts(baseUrl, methodName); };
var SiteScriptsCloneFactory = function (baseUrl, methodName) {
    if (methodName === void 0) { methodName = ""; }
    return SiteScripts(baseUrl, methodName);
};
var SiteScriptActionOutcome;
(function (SiteScriptActionOutcome) {
    /**
     * The stage was deemed to have completed successfully.
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["Success"] = 0] = "Success";
    /**
     * The stage was deemed to have failed to complete successfully (non-blocking, rest of recipe
     * execution should still be able to proceed).
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["Failure"] = 1] = "Failure";
    /**
     * No action was taken for this stage / this stage was skipped.
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["NoOp"] = 2] = "NoOp";
    /**
     * There was an exception but the operation succeeded. This is analagous to the operation completing
     * in a "yellow" state.
     */
    SiteScriptActionOutcome[SiteScriptActionOutcome["SucceededWithException"] = 3] = "SucceededWithException";
})(SiteScriptActionOutcome || (SiteScriptActionOutcome = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/web.js


_Web.prototype.getSiteScript = function (extractInfo) {
    return SiteScripts(this.toUrl(), "").getSiteScriptFromWeb(undefined, extractInfo);
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/list.js







_List.prototype.getSiteScript = function () {
    return __awaiter(this, void 0, void 0, function () {
        var rootFolder, web, absoluteListUrl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.clone(List).rootFolder.get()];
                case 1:
                    rootFolder = _a.sent();
                    return [4 /*yield*/, Web(extractWebUrl(this.toUrl())).configureFrom(this).select("Url").get()];
                case 2:
                    web = _a.sent();
                    absoluteListUrl = combine(web.Url, "Lists", rootFolder.Name);
                    return [2 /*return*/, SiteScripts(this, "").getSiteScriptFromList(absoluteListUrl)];
            }
        });
    });
};
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-scripts/index.js





Reflect.defineProperty(SPRest.prototype, "siteScripts", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(function (_a) {
            var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
            return SiteScripts(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-users/web.js






addProp(_Web, "siteUsers", SiteUsers);
addProp(_Web, "currentUser", SiteUser, "currentuser");
_Web.prototype.ensureUser = function (logonName) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spPost(this.clone(Web, "ensureuser"), body({ logonName: logonName }))];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, {
                            data: data,
                            user: SiteUser(odataUrlFrom(data)),
                        }];
            }
        });
    });
};
_Web.prototype.getUserById = function (id) {
    return SiteUser(this, "getUserById(" + id + ")");
};
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/site-users/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/social/types.js








var _Social = /** @class */ (function (_super) {
    __extends(_Social, _super);
    function _Social() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Social.prototype, "my", {
        get: function () {
            return MySocial(this);
        },
        enumerable: false,
        configurable: true
    });
    _Social.prototype.getFollowedSitesUri = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(SocialCloneFactory, "FollowedSitesUri").get()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.FollowedSitesUri || r];
                }
            });
        });
    };
    _Social.prototype.getFollowedDocumentsUri = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(SocialCloneFactory, "FollowedDocumentsUri").get()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.FollowedDocumentsUri || r];
                }
            });
        });
    };
    _Social.prototype.follow = function (actorInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(SocialCloneFactory, "follow"), this.createSocialActorInfoRequestBody(actorInfo))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _Social.prototype.isFollowed = function (actorInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(SocialCloneFactory, "isfollowed"), this.createSocialActorInfoRequestBody(actorInfo))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _Social.prototype.stopFollowing = function (actorInfo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, spPost(this.clone(SocialCloneFactory, "stopfollowing"), this.createSocialActorInfoRequestBody(actorInfo))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    _Social.prototype.createSocialActorInfoRequestBody = function (actorInfo) {
        return body({
            "actor": Object.assign(metadata("SP.Social.SocialActorInfo"), {
                Id: null,
            }, actorInfo),
        });
    };
    __decorate([
        tag("soc.getFollowedSitesUri")
    ], _Social.prototype, "getFollowedSitesUri", null);
    __decorate([
        tag("soc.getFollowedDocumentsUri")
    ], _Social.prototype, "getFollowedDocumentsUri", null);
    __decorate([
        tag("soc.follow")
    ], _Social.prototype, "follow", null);
    __decorate([
        tag("soc.isFollowed")
    ], _Social.prototype, "isFollowed", null);
    __decorate([
        tag("soc.stopFollowing")
    ], _Social.prototype, "stopFollowing", null);
    _Social = __decorate([
        defaultPath("_api/social.following")
    ], _Social);
    return _Social;
}(_SharePointQueryableInstance));

/**
 * Get a new Social instance for the particular Url
 */
var Social = function (baseUrl) { return new _Social(baseUrl); };
var SocialCloneFactory = function (baseUrl, paths) { return new _Social(baseUrl, paths); };
/**
 * Current user's Social instance
 */
var _MySocial = /** @class */ (function (_super) {
    __extends(_MySocial, _super);
    function _MySocial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _MySocial.prototype.followed = function (types) {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(MySocialCloneFactory, "followed(types=" + types + ")")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, hOP(r, "Followed") ? r.Followed.results : r];
                }
            });
        });
    };
    _MySocial.prototype.followedCount = function (types) {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(MySocialCloneFactory, "followedcount(types=" + types + ")")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.FollowedCount || r];
                }
            });
        });
    };
    _MySocial.prototype.followers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(MySocialCloneFactory, "followers")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, hOP(r, "Followers") ? r.Followers.results : r];
                }
            });
        });
    };
    _MySocial.prototype.suggestions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clone(MySocialCloneFactory, "suggestions")()];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, hOP(r, "Suggestions") ? r.Suggestions.results : r];
                }
            });
        });
    };
    __decorate([
        tag("msoc.followed")
    ], _MySocial.prototype, "followed", null);
    __decorate([
        tag("msoc.followedCount")
    ], _MySocial.prototype, "followedCount", null);
    __decorate([
        tag("msoc.followers")
    ], _MySocial.prototype, "followers", null);
    __decorate([
        tag("msoc.suggestions")
    ], _MySocial.prototype, "suggestions", null);
    _MySocial = __decorate([
        defaultPath("my")
    ], _MySocial);
    return _MySocial;
}(_SharePointQueryableInstance));

/**
 * Invokable factory for IMySocial instances
 */
var MySocial = spInvokableFactory(_MySocial);
var MySocialCloneFactory = function (baseUrl, path) { return MySocial(baseUrl, path); };
/**
 * Social actor type
 *
 */
var SocialActorType;
(function (SocialActorType) {
    SocialActorType[SocialActorType["User"] = 0] = "User";
    SocialActorType[SocialActorType["Document"] = 1] = "Document";
    SocialActorType[SocialActorType["Site"] = 2] = "Site";
    SocialActorType[SocialActorType["Tag"] = 3] = "Tag";
})(SocialActorType || (SocialActorType = {}));
/**
 * Social actor type
 *
 */
/* eslint-disable no-bitwise */
var SocialActorTypes;
(function (SocialActorTypes) {
    SocialActorTypes[SocialActorTypes["None"] = 0] = "None";
    SocialActorTypes[SocialActorTypes["User"] = 1] = "User";
    SocialActorTypes[SocialActorTypes["Document"] = 2] = "Document";
    SocialActorTypes[SocialActorTypes["Site"] = 4] = "Site";
    SocialActorTypes[SocialActorTypes["Tag"] = 8] = "Tag";
    /**
   * The set excludes documents and sites that do not have feeds.
   */
    SocialActorTypes[SocialActorTypes["ExcludeContentWithoutFeeds"] = 268435456] = "ExcludeContentWithoutFeeds";
    /**
   * The set includes group sites
   */
    SocialActorTypes[SocialActorTypes["IncludeGroupsSites"] = 536870912] = "IncludeGroupsSites";
    /**
   * The set includes only items created within the last 24 hours
   */
    SocialActorTypes[SocialActorTypes["WithinLast24Hours"] = 1073741824] = "WithinLast24Hours";
})(SocialActorTypes || (SocialActorTypes = {}));
/* eslint-enable no-bitwise */
/**
 * Result from following
 *
 */
var SocialFollowResult;
(function (SocialFollowResult) {
    SocialFollowResult[SocialFollowResult["Ok"] = 0] = "Ok";
    SocialFollowResult[SocialFollowResult["AlreadyFollowing"] = 1] = "AlreadyFollowing";
    SocialFollowResult[SocialFollowResult["LimitReached"] = 2] = "LimitReached";
    SocialFollowResult[SocialFollowResult["InternalError"] = 3] = "InternalError";
})(SocialFollowResult || (SocialFollowResult = {}));
/**
 * Specifies an exception or status code.
 */
var SocialStatusCode;
(function (SocialStatusCode) {
    /**
   * The operation completed successfully
   */
    SocialStatusCode[SocialStatusCode["OK"] = 0] = "OK";
    /**
   * The request is invalid.
   */
    SocialStatusCode[SocialStatusCode["InvalidRequest"] = 1] = "InvalidRequest";
    /**
   *  The current user is not authorized to perform the operation.
   */
    SocialStatusCode[SocialStatusCode["AccessDenied"] = 2] = "AccessDenied";
    /**
   * The target of the operation was not found.
   */
    SocialStatusCode[SocialStatusCode["ItemNotFound"] = 3] = "ItemNotFound";
    /**
   * The operation is invalid for the target's current state.
   */
    SocialStatusCode[SocialStatusCode["InvalidOperation"] = 4] = "InvalidOperation";
    /**
   * The operation completed without modifying the target.
   */
    SocialStatusCode[SocialStatusCode["ItemNotModified"] = 5] = "ItemNotModified";
    /**
   * The operation failed because an internal error occurred.
   */
    SocialStatusCode[SocialStatusCode["InternalError"] = 6] = "InternalError";
    /**
   * The operation failed because the server could not access the distributed cache.
   */
    SocialStatusCode[SocialStatusCode["CacheReadError"] = 7] = "CacheReadError";
    /**
   * The operation succeeded but the server could not update the distributed cache.
   */
    SocialStatusCode[SocialStatusCode["CacheUpdateError"] = 8] = "CacheUpdateError";
    /**
   * No personal site exists for the current user, and no further information is available.
   */
    SocialStatusCode[SocialStatusCode["PersonalSiteNotFound"] = 9] = "PersonalSiteNotFound";
    /**
   * No personal site exists for the current user, and a previous attempt to create one failed.
   */
    SocialStatusCode[SocialStatusCode["FailedToCreatePersonalSite"] = 10] = "FailedToCreatePersonalSite";
    /**
   * No personal site exists for the current user, and a previous attempt to create one was not authorized.
   */
    SocialStatusCode[SocialStatusCode["NotAuthorizedToCreatePersonalSite"] = 11] = "NotAuthorizedToCreatePersonalSite";
    /**
   * No personal site exists for the current user, and no attempt should be made to create one.
   */
    SocialStatusCode[SocialStatusCode["CannotCreatePersonalSite"] = 12] = "CannotCreatePersonalSite";
    /**
   * The operation was rejected because an internal limit had been reached.
   */
    SocialStatusCode[SocialStatusCode["LimitReached"] = 13] = "LimitReached";
    /**
   * The operation failed because an error occurred during the processing of the specified attachment.
   */
    SocialStatusCode[SocialStatusCode["AttachmentError"] = 14] = "AttachmentError";
    /**
   * The operation succeeded with recoverable errors; the returned data is incomplete.
   */
    SocialStatusCode[SocialStatusCode["PartialData"] = 15] = "PartialData";
    /**
   * A required SharePoint feature is not enabled.
   */
    SocialStatusCode[SocialStatusCode["FeatureDisabled"] = 16] = "FeatureDisabled";
    /**
   * The site's storage quota has been exceeded.
   */
    SocialStatusCode[SocialStatusCode["StorageQuotaExceeded"] = 17] = "StorageQuotaExceeded";
    /**
   * The operation failed because the server could not access the database.
   */
    SocialStatusCode[SocialStatusCode["DatabaseError"] = 18] = "DatabaseError";
})(SocialStatusCode || (SocialStatusCode = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/social/index.js



Reflect.defineProperty(SPRest.prototype, "social", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(function (_a) {
            var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
            return Social(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/objectToSPKeyValueCollection.js


/**
 * Creates an object representing a SharePoint Collection(SP.KeyValue)
 *
 * @param obj The plain object defining the properties
 */
function objectToSPKeyValueCollection(obj) {
    return util_assign(metadata("Collection(SP.KeyValue)"), {
        results: Object.keys(obj).map(function (key) { return util_assign(metadata("SP.KeyValue"), {
            Key: key,
            Value: Reflect.get(obj, key),
            ValueType: "Edm.String",
        }); }),
    });
}
//# sourceMappingURL=objectToSPKeyValueCollection.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sputilities/types.js











var _Utilities = /** @class */ (function (_super) {
    __extends(_Utilities, _super);
    function _Utilities(baseUrl, methodName) {
        var _this = this;
        var url = typeof baseUrl === "string" ? baseUrl : baseUrl.toUrl();
        _this = _super.call(this, extractWebUrl(url), "_api/SP.Utilities.Utility." + methodName) || this;
        return _this;
    }
    _Utilities.prototype.excute = function (props) {
        return spPost(this, body(props));
    };
    _Utilities.prototype.sendEmail = function (props) {
        var params = {
            properties: util_assign(metadata("SP.Utilities.EmailProperties"), {
                Body: props.Body,
                From: props.From,
                Subject: props.Subject,
            }),
        };
        if (props.To && props.To.length > 0) {
            params.properties = util_assign(params.properties, {
                To: { results: props.To },
            });
        }
        if (props.CC && props.CC.length > 0) {
            params.properties = util_assign(params.properties, {
                CC: { results: props.CC },
            });
        }
        if (props.BCC && props.BCC.length > 0) {
            params.properties = util_assign(params.properties, {
                BCC: { results: props.BCC },
            });
        }
        if (props.AdditionalHeaders) {
            params.properties = util_assign(params.properties, {
                AdditionalHeaders: objectToSPKeyValueCollection(props.AdditionalHeaders),
            });
        }
        return tag.configure(this.clone(UtilitiesCloneFactory, "SendEmail", true), "u.sendEmail").excute(params);
    };
    _Utilities.prototype.getCurrentUserEmailAddresses = function () {
        return tag.configure(this.clone(UtilitiesCloneFactory, "GetCurrentUserEmailAddresses", true), "u.getCurrentUserEmailAddresses").excute({});
    };
    _Utilities.prototype.resolvePrincipal = function (input, scopes, sources, inputIsEmailOnly, addToUserInfoList, matchUserInfoList) {
        if (matchUserInfoList === void 0) { matchUserInfoList = false; }
        var params = {
            addToUserInfoList: addToUserInfoList,
            input: input,
            inputIsEmailOnly: inputIsEmailOnly,
            matchUserInfoList: matchUserInfoList,
            scopes: scopes,
            sources: sources,
        };
        var clone = this.clone(UtilitiesCloneFactory, "ResolvePrincipalInCurrentContext", true);
        return tag.configure(clone, "u.ResolvePrincipalInCurrentContext").excute(params);
    };
    _Utilities.prototype.searchPrincipals = function (input, scopes, sources, groupName, maxCount) {
        var params = {
            groupName: groupName,
            input: input,
            maxCount: maxCount,
            scopes: scopes,
            sources: sources,
        };
        var clone = this.clone(UtilitiesCloneFactory, "SearchPrincipalsUsingContextWeb", true);
        return tag.configure(clone, "u.SearchPrincipalsUsingContextWeb").excute(params);
    };
    _Utilities.prototype.createEmailBodyForInvitation = function (pageAddress) {
        var params = {
            pageAddress: pageAddress,
        };
        var clone = this.clone(UtilitiesCloneFactory, "CreateEmailBodyForInvitation", true);
        return tag.configure(clone, "u.CreateEmailBodyForInvitation").excute(params);
    };
    _Utilities.prototype.expandGroupsToPrincipals = function (inputs, maxCount) {
        if (maxCount === void 0) { maxCount = 30; }
        var params = {
            inputs: inputs,
            maxCount: maxCount,
        };
        var clone = this.clone(UtilitiesCloneFactory, "ExpandGroupsToPrincipals", true);
        return tag.configure(clone, "u.ExpandGroupsToPrincipals").excute(params);
    };
    _Utilities.prototype.createWikiPage = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var clone, newPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        clone = this.clone(UtilitiesCloneFactory, "CreateWikiPageInContextWeb", true);
                        return [4 /*yield*/, tag.configure(clone, "u.CreateWikiPageInContextWeb").excute({ parameters: info })];
                    case 1:
                        newPage = _a.sent();
                        return [2 /*return*/, {
                                data: newPage,
                                file: File(odataUrlFrom(newPage)),
                            }];
                }
            });
        });
    };
    return _Utilities;
}(_SharePointQueryable));

var Utilities = spInvokableFactory(_Utilities);
var UtilitiesCloneFactory = function (baseUrl, path) { return Utilities(baseUrl, path); };
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/sputilities/index.js



Reflect.defineProperty(SPRest.prototype, "utility", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(function (_a) {
            var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
            return Utilities(baseUrl, "").configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/subscriptions/types.js






var _Subscriptions = /** @class */ (function (_super) {
    __extends(_Subscriptions, _super);
    function _Subscriptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
    * Returns all the webhook subscriptions or the specified webhook subscription
    *
    * @param subscriptionId The id of a specific webhook subscription to retrieve, omit to retrieve all the webhook subscriptions
    */
    _Subscriptions.prototype.getById = function (subscriptionId) {
        return tag.configure(Subscription(this).concat("('" + subscriptionId + "')"), "subs.getById");
    };
    /**
     * Creates a new webhook subscription
     *
     * @param notificationUrl The url to receive the notifications
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months)
     * @param clientState A client specific string (optional)
     */
    _Subscriptions.prototype.add = function (notificationUrl, expirationDate, clientState) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {
                            "expirationDateTime": expirationDate,
                            "notificationUrl": notificationUrl,
                            "resource": this.toUrl(),
                        };
                        if (clientState) {
                            postBody.clientState = clientState;
                        }
                        return [4 /*yield*/, spPost(this, body(postBody, headers({ "Content-Type": "application/json" })))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, subscription: this.getById(data.id) }];
                }
            });
        });
    };
    __decorate([
        tag("subs.add")
    ], _Subscriptions.prototype, "add", null);
    _Subscriptions = __decorate([
        defaultPath("subscriptions")
    ], _Subscriptions);
    return _Subscriptions;
}(_SharePointQueryableCollection));

var Subscriptions = spInvokableFactory(_Subscriptions);
var _Subscription = /** @class */ (function (_super) {
    __extends(_Subscription, _super);
    function _Subscription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renews this webhook subscription
     *
     * @param expirationDate The date and time to expire the subscription in the form YYYY-MM-ddTHH:mm:ss+00:00 (maximum of 6 months, optional)
     * @param notificationUrl The url to receive the notifications (optional)
     * @param clientState A client specific string (optional)
     */
    _Subscription.prototype.update = function (expirationDate, notificationUrl, clientState) {
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = {};
                        if (expirationDate) {
                            postBody.expirationDateTime = expirationDate;
                        }
                        if (notificationUrl) {
                            postBody.notificationUrl = notificationUrl;
                        }
                        if (clientState) {
                            postBody.clientState = clientState;
                        }
                        return [4 /*yield*/, spPatch(this, body(postBody, headers({ "Content-Type": "application/json" })))];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, subscription: this }];
                }
            });
        });
    };
    /**
     * Removes this webhook subscription
     *
     */
    _Subscription.prototype.delete = function () {
        return spDelete(this);
    };
    __decorate([
        tag("sub.update")
    ], _Subscription.prototype, "update", null);
    __decorate([
        tag("sub.delete")
    ], _Subscription.prototype, "delete", null);
    return _Subscription;
}(_SharePointQueryableInstance));

var Subscription = spInvokableFactory(_Subscription);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/subscriptions/list.js



addProp(_List, "subscriptions", Subscriptions);
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/subscriptions/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/taxonomy/types.js





/**
 * Describes a collection of Form objects
 *
 */
var _TermStore = /** @class */ (function (_super) {
    __extends(_TermStore, _super);
    function _TermStore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_TermStore.prototype, "groups", {
        /**
         * Gets the term groups associated with this tenant
         */
        get: function () {
            return tag.configure(TermGroups(this), "txts.groups");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_TermStore.prototype, "sets", {
        /**
         * Gets the term groups associated with this tenant
         */
        get: function () {
            return tag.configure(TermSets(this), "txts.sets");
        },
        enumerable: false,
        configurable: true
    });
    _TermStore = __decorate([
        defaultPath("_api/v2.1/termstore")
    ], _TermStore);
    return _TermStore;
}(_SharePointQueryableInstance));

var TermStore = spInvokableFactory(_TermStore);
var _TermGroups = /** @class */ (function (_super) {
    __extends(_TermGroups, _super);
    function _TermGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    _TermGroups.prototype.getById = function (id) {
        return tag.configure(TermGroup(this, id), "txtgs.getById");
    };
    _TermGroups = __decorate([
        defaultPath("groups")
    ], _TermGroups);
    return _TermGroups;
}(_SharePointQueryableCollection));

var TermGroups = spInvokableFactory(_TermGroups);
var _TermGroup = /** @class */ (function (_super) {
    __extends(_TermGroup, _super);
    function _TermGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_TermGroup.prototype, "sets", {
        /**
         * Gets the term sets associated with this tenant
         */
        get: function () {
            return tag.configure(TermSets(this, "sets"), "txtg.sets");
        },
        enumerable: false,
        configurable: true
    });
    return _TermGroup;
}(_SharePointQueryableInstance));

var TermGroup = spInvokableFactory(_TermGroup);
var _TermSets = /** @class */ (function (_super) {
    __extends(_TermSets, _super);
    function _TermSets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    _TermSets.prototype.getById = function (id) {
        return tag.configure(TermSet(this, id), "txts.getById");
    };
    _TermSets = __decorate([
        defaultPath("sets")
    ], _TermSets);
    return _TermSets;
}(_SharePointQueryableCollection));

var TermSets = spInvokableFactory(_TermSets);
var _TermSet = /** @class */ (function (_super) {
    __extends(_TermSet, _super);
    function _TermSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_TermSet.prototype, "terms", {
        /**
         * Gets all the terms in this set
         */
        get: function () {
            return Terms(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_TermSet.prototype, "parentGroup", {
        get: function () {
            return tag.configure(TermGroup(this, "parentGroup"), "txts.parentGroup");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_TermSet.prototype, "children", {
        get: function () {
            return tag.configure(Children(this), "txts.children");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_TermSet.prototype, "relations", {
        get: function () {
            return tag.configure(Relations(this), "txts.relations");
        },
        enumerable: false,
        configurable: true
    });
    _TermSet.prototype.getTermById = function (id) {
        return tag.configure(this.clone(Term, "terms/" + id), "txts.getTermById");
    };
    /**
     * Gets all the terms in this termset in an ordered tree using the appropriate sort ordering
     * ** This is an expensive operation and you should strongly consider caching the results **
     *
     * @param props Optional set of properties controlling how the tree is retrieved.
     */
    _TermSet.prototype.getAllChildrenAsOrderedTree = function (props) {
        if (props === void 0) { props = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var selects, setInfo, tree, ensureOrder, visitor;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selects = ["*", "customSortOrder"];
                        if (props.retrieveProperties) {
                            selects.push("properties", "localProperties");
                        }
                        return [4 /*yield*/, this.select.apply(this, __spreadArray([], __read(selects)))()];
                    case 1:
                        setInfo = _a.sent();
                        tree = [];
                        ensureOrder = function (terms, sorts, setSorts) {
                            // handle no custom sort information present
                            if (!isArray(sorts) && !isArray(setSorts)) {
                                return terms;
                            }
                            var ordering = null;
                            if (sorts === null && setSorts.length > 0) {
                                ordering = __spreadArray([], __read(setSorts));
                            }
                            else {
                                var index = sorts.findIndex(function (v) { return v.setId === setInfo.id; });
                                if (index >= 0) {
                                    ordering = __spreadArray([], __read(sorts[index].order));
                                }
                            }
                            if (ordering !== null) {
                                var orderedChildren_1 = [];
                                ordering.forEach(function (o) {
                                    var found = terms.find(function (ch) { return o === ch.id; });
                                    if (found) {
                                        orderedChildren_1.push(found);
                                    }
                                });
                                // we have a case where if a set is ordered and a term is added to that set
                                // AND the ordering information hasn't been updated in the UI the new term will not have
                                // any associated ordering information. See #1547 which reported this. So here we
                                // append any terms remaining in "terms" not in "orderedChildren" to the end of "orderedChildren"
                                orderedChildren_1.push.apply(orderedChildren_1, __spreadArray([], __read(terms.filter(function (info) { return ordering.indexOf(info.id) < 0; }))));
                                return orderedChildren_1;
                            }
                            return terms;
                        };
                        visitor = function (source, parent) { return __awaiter(_this, void 0, void 0, function () {
                            var children, i, child, orderedTerm;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, (_a = source.children).select.apply(_a, __spreadArray([], __read(selects)))()];
                                    case 1:
                                        children = _b.sent();
                                        i = 0;
                                        _b.label = 2;
                                    case 2:
                                        if (!(i < children.length)) return [3 /*break*/, 6];
                                        child = children[i];
                                        orderedTerm = __assign({ children: [], defaultLabel: child.labels.find(function (l) { return l.isDefault; }).name }, child);
                                        if (!(child.childrenCount > 0)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, visitor(this.getTermById(children[i].id), orderedTerm.children)];
                                    case 3:
                                        _b.sent();
                                        orderedTerm.children = ensureOrder(orderedTerm.children, child.customSortOrder);
                                        _b.label = 4;
                                    case 4:
                                        parent.push(orderedTerm);
                                        _b.label = 5;
                                    case 5:
                                        i++;
                                        return [3 /*break*/, 2];
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, visitor(this, tree)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, ensureOrder(tree, null, setInfo.customSortOrder)];
                }
            });
        });
    };
    return _TermSet;
}(_SharePointQueryableInstance));

var TermSet = spInvokableFactory(_TermSet);
var _Children = /** @class */ (function (_super) {
    __extends(_Children, _super);
    function _Children() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Children = __decorate([
        defaultPath("children")
    ], _Children);
    return _Children;
}(_SharePointQueryableCollection));

var Children = spInvokableFactory(_Children);
var _Terms = /** @class */ (function (_super) {
    __extends(_Terms, _super);
    function _Terms() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    _Terms.prototype.getById = function (id) {
        return Term(this, id);
    };
    _Terms = __decorate([
        defaultPath("terms")
    ], _Terms);
    return _Terms;
}(_SharePointQueryableCollection));

var Terms = spInvokableFactory(_Terms);
var _Term = /** @class */ (function (_super) {
    __extends(_Term, _super);
    function _Term() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Term.prototype, "children", {
        get: function () {
            return tag.configure(Children(this), "txt.children");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Term.prototype, "relations", {
        get: function () {
            return tag.configure(Relations(this), "txt.relations");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Term.prototype, "set", {
        get: function () {
            return tag.configure(TermSet(this, "set"), "txt.set");
        },
        enumerable: false,
        configurable: true
    });
    return _Term;
}(_SharePointQueryableInstance));

var Term = spInvokableFactory(_Term);
var _Relations = /** @class */ (function (_super) {
    __extends(_Relations, _super);
    function _Relations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a term group by id
     *
     * @param id Id of the term group to access
     */
    _Relations.prototype.getById = function (id) {
        return tag.configure(Relation(this, id), "txrs.getById");
    };
    _Relations = __decorate([
        defaultPath("relations")
    ], _Relations);
    return _Relations;
}(_SharePointQueryableCollection));

var Relations = spInvokableFactory(_Relations);
var _Relation = /** @class */ (function (_super) {
    __extends(_Relation, _super);
    function _Relation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_Relation.prototype, "fromTerm", {
        get: function () {
            return tag.configure(Term(this, "fromTerm"), "txr.fromTerm");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Relation.prototype, "toTerm", {
        get: function () {
            return tag.configure(Term(this, "toTerm"), "txr.toTerm");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Relation.prototype, "set", {
        get: function () {
            return tag.configure(TermSet(this, "set"), "txr.set");
        },
        enumerable: false,
        configurable: true
    });
    return _Relation;
}(_SharePointQueryableInstance));

var Relation = spInvokableFactory(_Relation);
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/taxonomy/index.js



Reflect.defineProperty(SPRest.prototype, "termStore", {
    configurable: true,
    enumerable: true,
    get: function () {
        return this.childConfigHook(function (_a) {
            var options = _a.options, baseUrl = _a.baseUrl, runtime = _a.runtime;
            return TermStore(baseUrl).configure(options).setRuntime(runtime);
        });
    },
});
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/list.js



addProp(_List, "userCustomActions", UserCustomActions);
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/web.js



addProp(_Web, "userCustomActions", UserCustomActions);
//# sourceMappingURL=web.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/site.js



addProp(_Site, "userCustomActions", UserCustomActions);
//# sourceMappingURL=site.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/user-custom-actions/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/views/types.js







var _Views = /** @class */ (function (_super) {
    __extends(_Views, _super);
    function _Views() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Adds a new view to the collection
     *
     * @param title The new views's title
     * @param personalView True if this is a personal view, otherwise false, default = false
     * @param additionalSettings Will be passed as part of the view creation body
     */
    _Views.prototype.add = function (title, personalView, additionalSettings) {
        if (personalView === void 0) { personalView = false; }
        if (additionalSettings === void 0) { additionalSettings = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var postBody, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postBody = body(Object.assign(metadata("SP.View"), {
                            "PersonalView": personalView,
                            "Title": title,
                        }, additionalSettings));
                        return [4 /*yield*/, spPost(this.clone(Views, null), postBody)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, {
                                data: data,
                                view: this.getById(data.Id),
                            }];
                }
            });
        });
    };
    /**
     * Gets a view by guid id
     *
     * @param id The GUID id of the view
     */
    _Views.prototype.getById = function (id) {
        return View(this).concat("('" + id + "')");
    };
    /**
     * Gets a view by title (case-sensitive)
     *
     * @param title The case-sensitive title of the view
     */
    _Views.prototype.getByTitle = function (title) {
        return View(this, "getByTitle('" + title + "')");
    };
    __decorate([
        tag("vs.add")
    ], _Views.prototype, "add", null);
    _Views = __decorate([
        defaultPath("views")
    ], _Views);
    return _Views;
}(_SharePointQueryableCollection));

var Views = spInvokableFactory(_Views);
var _View = /** @class */ (function (_super) {
    __extends(_View, _super);
    function _View() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delete = deleteable("vw");
        /**
         * Updates this view intance with the supplied properties
         *
         * @param properties A plain object hash of values to update for the view
         */
        _this.update = _this._update("SP.View", function (data) { return ({ data: data, view: _this }); });
        return _this;
    }
    Object.defineProperty(_View.prototype, "fields", {
        get: function () {
            return ViewFields(this);
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns the list view as HTML.
     *
     */
    _View.prototype.renderAsHtml = function () {
        return this.clone(View, "renderashtml")();
    };
    /**
     * Sets the view schema
     *
     * @param viewXml The view XML to set
     */
    _View.prototype.setViewXml = function (viewXml) {
        return spPost(this.clone(View, "SetViewXml"), body({ viewXml: viewXml }));
    };
    __decorate([
        tag("v.renderAsHtml")
    ], _View.prototype, "renderAsHtml", null);
    __decorate([
        tag("v.setViewXml")
    ], _View.prototype, "setViewXml", null);
    return _View;
}(_SharePointQueryableInstance));

var View = spInvokableFactory(_View);
var _ViewFields = /** @class */ (function (_super) {
    __extends(_ViewFields, _super);
    function _ViewFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a value that specifies the XML schema that represents the collection.
     */
    _ViewFields.prototype.getSchemaXml = function () {
        return this.clone(ViewFields, "schemaxml")();
    };
    /**
     * Adds the field with the specified field internal name or display name to the collection.
     *
     * @param fieldTitleOrInternalName The case-sensitive internal name or display name of the field to add.
     */
    _ViewFields.prototype.add = function (fieldTitleOrInternalName) {
        return spPost(this.clone(ViewFields, "addviewfield('" + fieldTitleOrInternalName + "')"));
    };
    /**
     * Moves the field with the specified field internal name to the specified position in the collection.
     *
     * @param field The case-sensitive internal name of the field to move.
     * @param index The zero-based index of the new position for the field.
     */
    _ViewFields.prototype.move = function (field, index) {
        return spPost(this.clone(ViewFields, "moveviewfieldto"), body({ field: field, index: index }));
    };
    /**
     * Removes all the fields from the collection.
     */
    _ViewFields.prototype.removeAll = function () {
        return spPost(this.clone(ViewFields, "removeallviewfields"));
    };
    /**
     * Removes the field with the specified field internal name from the collection.
     *
     * @param fieldInternalName The case-sensitive internal name of the field to remove from the view.
     */
    _ViewFields.prototype.remove = function (fieldInternalName) {
        return spPost(this.clone(ViewFields, "removeviewfield('" + fieldInternalName + "')"));
    };
    __decorate([
        tag("vfs.getSchemaXml")
    ], _ViewFields.prototype, "getSchemaXml", null);
    __decorate([
        tag("vfs.add")
    ], _ViewFields.prototype, "add", null);
    __decorate([
        tag("vfs.move")
    ], _ViewFields.prototype, "move", null);
    __decorate([
        tag("vfs.removeAll")
    ], _ViewFields.prototype, "removeAll", null);
    __decorate([
        tag("vfs.remove")
    ], _ViewFields.prototype, "remove", null);
    _ViewFields = __decorate([
        defaultPath("viewfields")
    ], _ViewFields);
    return _ViewFields;
}(_SharePointQueryableCollection));

var ViewFields = spInvokableFactory(_ViewFields);
var ViewScope;
(function (ViewScope) {
    ViewScope[ViewScope["DefaultValue"] = 0] = "DefaultValue";
    ViewScope[ViewScope["Recursive"] = 1] = "Recursive";
    ViewScope[ViewScope["RecursiveAll"] = 2] = "RecursiveAll";
    ViewScope[ViewScope["FilesOnly"] = 3] = "FilesOnly";
})(ViewScope || (ViewScope = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/views/list.js



addProp(_List, "views", Views);
addProp(_List, "defaultView", View, "DefaultView");
_List.prototype.getView = function (viewId) {
    return View(this, "getView('" + viewId + "')");
};
//# sourceMappingURL=list.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/views/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/webparts/types.js





var _LimitedWebPartManager = /** @class */ (function (_super) {
    __extends(_LimitedWebPartManager, _super);
    function _LimitedWebPartManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_LimitedWebPartManager.prototype, "scope", {
        get: function () {
            return tag.configure(SharePointQueryable(this, "Scope"), "f.scope");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_LimitedWebPartManager.prototype, "webparts", {
        get: function () {
            return WebPartDefinitions(this, "webparts");
        },
        enumerable: false,
        configurable: true
    });
    _LimitedWebPartManager.prototype.export = function (id) {
        return spPost(this.clone(LimitedWebPartManagerCloneFactory, "ExportWebPart"), body({ webPartId: id }));
    };
    _LimitedWebPartManager.prototype.import = function (xml) {
        return spPost(this.clone(LimitedWebPartManagerCloneFactory, "ImportWebPart"), body({ webPartXml: xml }));
    };
    return _LimitedWebPartManager;
}(_SharePointQueryable));

var LimitedWebPartManager = function (baseUrl, path) { return new _LimitedWebPartManager(baseUrl, path); };
var LimitedWebPartManagerCloneFactory = function (baseUrl, path) { return LimitedWebPartManager(baseUrl, path); };
var _WebPartDefinitions = /** @class */ (function (_super) {
    __extends(_WebPartDefinitions, _super);
    function _WebPartDefinitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets a web part definition from the collection by id
     *
     * @param id The storage ID of the SPWebPartDefinition to retrieve
     */
    _WebPartDefinitions.prototype.getById = function (id) {
        return WebPartDefinition(this, "getbyid('" + id + "')");
    };
    /**
     * Gets a web part definition from the collection by storage id
     *
     * @param id The WebPart.ID of the SPWebPartDefinition to retrieve
     */
    _WebPartDefinitions.prototype.getByControlId = function (id) {
        return WebPartDefinition(this, "getByControlId('" + id + "')");
    };
    return _WebPartDefinitions;
}(_SharePointQueryableCollection));

var WebPartDefinitions = spInvokableFactory(_WebPartDefinitions);
var _WebPartDefinition = /** @class */ (function (_super) {
    __extends(_WebPartDefinition, _super);
    function _WebPartDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(_WebPartDefinition.prototype, "webpart", {
        /**
        * Gets the webpart information associated with this definition
        */
        get: function () {
            return SharePointQueryableInstance(this, "webpart");
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Saves changes to the Web Part made using other properties and methods on the SPWebPartDefinition object
     */
    _WebPartDefinition.prototype.saveChanges = function () {
        return spPost(this.clone(WebPartDefinition, "SaveWebPartChanges"));
    };
    /**
     * Moves the Web Part to a different location on a Web Part Page
     *
     * @param zoneId The ID of the Web Part Zone to which to move the Web Part
     * @param zoneIndex A Web Part zone index that specifies the position at which the Web Part is to be moved within the destination Web Part zone
     */
    _WebPartDefinition.prototype.moveTo = function (zoneId, zoneIndex) {
        return spPost(this.clone(WebPartDefinition, "MoveWebPartTo(zoneID='" + zoneId + "', zoneIndex=" + zoneIndex + ")"));
    };
    /**
     * Closes the Web Part. If the Web Part is already closed, this method does nothing
     */
    _WebPartDefinition.prototype.close = function () {
        return spPost(this.clone(WebPartDefinition, "CloseWebPart"));
    };
    /**
     * Opens the Web Part. If the Web Part is already closed, this method does nothing
     */
    _WebPartDefinition.prototype.open = function () {
        return spPost(this.clone(WebPartDefinition, "OpenWebPart"));
    };
    /**
     * Removes a webpart from a page, all settings will be lost
     */
    _WebPartDefinition.prototype.delete = function () {
        return spPost(this.clone(WebPartDefinition, "DeleteWebPart"));
    };
    return _WebPartDefinition;
}(_SharePointQueryableInstance));

var WebPartDefinition = spInvokableFactory(_WebPartDefinition);
var WebPartsPersonalizationScope;
(function (WebPartsPersonalizationScope) {
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["User"] = 0] = "User";
    WebPartsPersonalizationScope[WebPartsPersonalizationScope["Shared"] = 1] = "Shared";
})(WebPartsPersonalizationScope || (WebPartsPersonalizationScope = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/webparts/file.js


_File.prototype.getLimitedWebPartManager = function (scope) {
    if (scope === void 0) { scope = WebPartsPersonalizationScope.Shared; }
    return LimitedWebPartManager(this, "getLimitedWebPartManager(scope=" + scope + ")");
};
//# sourceMappingURL=file.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/webparts/index.js


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/types.js
// reference: https://msdn.microsoft.com/en-us/library/office/dn600183.aspx
/**
 * Specifies the type of a principal.
 */
var PrincipalType;
(function (PrincipalType) {
    /**
     * Enumeration whose value specifies no principal type.
     */
    PrincipalType[PrincipalType["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies a user as the principal type.
     */
    PrincipalType[PrincipalType["User"] = 1] = "User";
    /**
     * Enumeration whose value specifies a distribution list as the principal type.
     */
    PrincipalType[PrincipalType["DistributionList"] = 2] = "DistributionList";
    /**
     * Enumeration whose value specifies a security group as the principal type.
     */
    PrincipalType[PrincipalType["SecurityGroup"] = 4] = "SecurityGroup";
    /**
     * Enumeration whose value specifies a group as the principal type.
     */
    PrincipalType[PrincipalType["SharePointGroup"] = 8] = "SharePointGroup";
    /**
     * Enumeration whose value specifies all principal types.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalType[PrincipalType["All"] = 15] = "All";
})(PrincipalType || (PrincipalType = {}));
/**
 * Specifies the source of a principal.
 */
var PrincipalSource;
(function (PrincipalSource) {
    /**
     * Enumeration whose value specifies no principal source.
     */
    PrincipalSource[PrincipalSource["None"] = 0] = "None";
    /**
     * Enumeration whose value specifies user information list as the principal source.
     */
    PrincipalSource[PrincipalSource["UserInfoList"] = 1] = "UserInfoList";
    /**
     * Enumeration whose value specifies Active Directory as the principal source.
     */
    PrincipalSource[PrincipalSource["Windows"] = 2] = "Windows";
    /**
     * Enumeration whose value specifies the current membership provider as the principal source.
     */
    PrincipalSource[PrincipalSource["MembershipProvider"] = 4] = "MembershipProvider";
    /**
     * Enumeration whose value specifies the current role provider as the principal source.
     */
    PrincipalSource[PrincipalSource["RoleProvider"] = 8] = "RoleProvider";
    /**
     * Enumeration whose value specifies all principal sources.
     */
    // eslint-disable-next-line no-bitwise
    PrincipalSource[PrincipalSource["All"] = 15] = "All";
})(PrincipalSource || (PrincipalSource = {}));
var PageType;
(function (PageType) {
    PageType[PageType["Invalid"] = -1] = "Invalid";
    PageType[PageType["DefaultView"] = 0] = "DefaultView";
    PageType[PageType["NormalView"] = 1] = "NormalView";
    PageType[PageType["DialogView"] = 2] = "DialogView";
    PageType[PageType["View"] = 3] = "View";
    PageType[PageType["DisplayForm"] = 4] = "DisplayForm";
    PageType[PageType["DisplayFormDialog"] = 5] = "DisplayFormDialog";
    PageType[PageType["EditForm"] = 6] = "EditForm";
    PageType[PageType["EditFormDialog"] = 7] = "EditFormDialog";
    PageType[PageType["NewForm"] = 8] = "NewForm";
    PageType[PageType["NewFormDialog"] = 9] = "NewFormDialog";
    PageType[PageType["SolutionForm"] = 10] = "SolutionForm";
    PageType[PageType["PAGE_MAXITEMS"] = 11] = "PAGE_MAXITEMS";
})(PageType || (PageType = {}));
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/utils/file-names.js
// eslint-disable-next-line no-control-regex
var InvalidFileFolderNameCharsOnlineRegex = /["*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
// eslint-disable-next-line no-control-regex
var InvalidFileFolderNameCharsOnPremiseRegex = /["#%*:<>?/\\|\x00-\x1f\x7f-\x9f]/g;
/**
 * Checks if file or folder name contains invalid characters
 *
 * @param input File or folder name to check
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns True if contains invalid chars, false otherwise
 */
function containsInvalidFileFolderChars(input, onPremise) {
    if (onPremise === void 0) { onPremise = false; }
    if (onPremise) {
        return InvalidFileFolderNameCharsOnPremiseRegex.test(input);
    }
    else {
        return InvalidFileFolderNameCharsOnlineRegex.test(input);
    }
}
/**
 * Removes invalid characters from file or folder name
 *
 * @param input File or folder name
 * @param replacer Value that will replace invalid characters
 * @param onPremise Set to true for SharePoint On-Premise
 * @returns File or folder name with replaced invalid characters
 */
function stripInvalidFileFolderChars(input, replacer, onPremise) {
    if (replacer === void 0) { replacer = ""; }
    if (onPremise === void 0) { onPremise = false; }
    if (onPremise) {
        return input.replace(InvalidFileFolderNameCharsOnPremiseRegex, replacer);
    }
    else {
        return input.replace(InvalidFileFolderNameCharsOnlineRegex, replacer);
    }
}
//# sourceMappingURL=file-names.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/index.js













//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@pnp/sp/presets/all.js







































































var all_sp = new SPRest();
//# sourceMappingURL=all.js.map
;// CONCATENATED MODULE: ./pnpjs-sources/index-sp.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});