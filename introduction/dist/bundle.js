'use strict';
try{if(!exports) {var exports = {}}}catch (e) {var exports = {}} Object.defineProperty(exports, '__esModule', { value: true });
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

function __extends$2(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var SimOption_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimOption = void 0;
var SimOption = (function () {
    function SimOption(advice, proxy) {
        if (advice === void 0) { advice = []; }
        this.advice = advice;
        this.proxy = proxy;
    }
    SimOption.prototype.addAdvicce = function (advice) {
        this.advice.push(advice);
    };
    SimOption.prototype.setAdvice = function () {
        var advice = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            advice[_i] = arguments[_i];
        }
        this.advice = advice;
        return this;
    };
    return SimOption;
}());
exports.SimOption = SimOption;
});

unwrapExports(SimOption_1);
SimOption_1.SimOption;

var SimFrontOption_1 = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimFrontOption = exports.UrlType = void 0;

var UrlType;
(function (UrlType) {
    UrlType["path"] = "path";
    UrlType["hash"] = "hash";
})(UrlType = exports.UrlType || (exports.UrlType = {}));
var SimFrontOption = (function (_super) {
    __extends(SimFrontOption, _super);
    function SimFrontOption(window, advice) {
        if (advice === void 0) { advice = []; }
        var _this = _super.call(this, advice) || this;
        _this.window = window;
        _this.selector = '#app';
        _this.urlType = UrlType.path;
        return _this;
    }
    SimFrontOption.prototype.setSelector = function (selector) {
        this.selector = selector;
        return this;
    };
    SimFrontOption.prototype.setUrlType = function (urlType) {
        this.urlType = urlType;
        return this;
    };
    return SimFrontOption;
}(SimOption_1.SimOption));
exports.SimFrontOption = SimFrontOption;
});

unwrapExports(SimFrontOption_1);
var SimFrontOption_2 = SimFrontOption_1.SimFrontOption;
var SimFrontOption_3 = SimFrontOption_1.UrlType;

var ReflectUtils_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectUtils = void 0;
var ReflectUtils = (function () {
    function ReflectUtils() {
    }
    ReflectUtils.getParameterTypes = function (target, propertyKey) {
        if (propertyKey) {
            return Reflect.getMetadata('design:paramtypes', target, propertyKey) || [];
        }
        else {
            return Reflect.getMetadata('design:paramtypes', target) || [];
        }
    };
    ReflectUtils.getMetadata = function (metadataKey, target, propertyKey) {
        if (propertyKey) {
            return Reflect.getMetadata(metadataKey, target, propertyKey);
        }
        else {
            return Reflect.getMetadata(metadataKey, target);
        }
    };
    ReflectUtils.getMetadataKeys = function (target) {
        return Reflect.getMetadataKeys(target);
    };
    ReflectUtils.getMetadatas = function (target) {
        return this.getMetadataKeys(target).map(function (it) { return ReflectUtils.getMetadata(it, target); });
    };
    ReflectUtils.metadata = function (metadataKey, data) {
        return Reflect.metadata(metadataKey, data);
    };
    ReflectUtils.defineMetadata = function (metadataKey, value, target, propertyKey) {
        if (propertyKey && Reflect.defineMetadata) {
            Reflect.defineMetadata(metadataKey, value, target, propertyKey);
        }
        else if (Reflect.defineMetadata) {
            Reflect.defineMetadata(metadataKey, value, target);
        }
    };
    return ReflectUtils;
}());
exports.ReflectUtils = ReflectUtils;
});

unwrapExports(ReflectUtils_1);
ReflectUtils_1.ReflectUtils;

var Component_1 = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getComponent = exports.Component = exports.ComponentMetadataKey = exports.componentSelectors = void 0;

exports.componentSelectors = new Map();
exports.ComponentMetadataKey = Symbol('Component');
var Component = function (config) {
    return function (target) {
        if (!config) {
            config = {};
        }
        if (!config.selector) {
            config.selector = target.name;
        }
        exports.componentSelectors.set(config.selector.toLowerCase(), target);
        ReflectUtils_1.ReflectUtils.defineMetadata(exports.ComponentMetadataKey, config, target);
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.__componentInstances = {};
                return _this;
            }
            return class_1;
        }(target));
    };
};
exports.Component = Component;
var getComponent = function (target) {
    if (target && typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils_1.ReflectUtils.getMetadata(exports.ComponentMetadataKey, target);
    }
    catch (e) {
    }
};
exports.getComponent = getComponent;
});

unwrapExports(Component_1);
Component_1.getComponent;
var Component_3 = Component_1.Component;
Component_1.ComponentMetadataKey;
Component_1.componentSelectors;

var Script_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScript = exports.Script = exports.ScriptMetadataKey = exports.scripts = void 0;

exports.scripts = new Map();
exports.ScriptMetadataKey = Symbol('Script');
var Script = function (config) {
    return function (target) {
        if (!config) {
            config = {};
        }
        if (!config.name) {
            config.name = target.name;
        }
        exports.scripts.set(config.name, target);
        ReflectUtils_1.ReflectUtils.defineMetadata(exports.ScriptMetadataKey, config, target);
        return target;
    };
};
exports.Script = Script;
var getScript = function (target) {
    if (target && typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils_1.ReflectUtils.getMetadata(exports.ScriptMetadataKey, target);
    }
    catch (e) {
    }
};
exports.getScript = getScript;
});

unwrapExports(Script_1);
Script_1.getScript;
var Script_3 = Script_1.Script;
Script_1.ScriptMetadataKey;
Script_1.scripts;

var ValidUtils = (function () {
    function ValidUtils() {
    }
    ValidUtils.isNullOrUndefined = function (data) {
        if (data == null || undefined === data) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidUtils.isNull = function (data) {
        if (data == null) {
            return true;
        }
        else {
            return false;
        }
    };
    ValidUtils.isArray = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Array]';
        }
    };
    ValidUtils.isNumber = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Number]';
        }
    };
    ValidUtils.isString = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object String]';
        }
    };
    ValidUtils.isFunction = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Function]';
        }
    };
    ValidUtils.isObject = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Object]';
        }
    };
    ValidUtils.isMap = function (object_o) {
        if (ValidUtils.isNullOrUndefined(object_o)) {
            return false;
        }
        else {
            return Object.prototype.toString.call(object_o).trim() === '[object Map]';
        }
    };
    return ValidUtils;
}());

var RandomUtils = (function () {
    function RandomUtils() {
    }
    RandomUtils.random = function (min, max) {
        if (ValidUtils.isNullOrUndefined(min)) {
            return Math.random();
        }
        else if (!ValidUtils.isNullOrUndefined(min) && ValidUtils.isNullOrUndefined(max)) {
            return Math.random() * (min || 0);
        }
        else {
            return Math.random() * ((max || 0) - (min || 0)) + (min || 0);
        }
    };
    RandomUtils.uuid = function (format) {
        if (format === void 0) { format = 'xxxx-xxxx-xxxx-xxxx'; }
        return format.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0;
            var v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    RandomUtils.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    RandomUtils.getRandomString = function (len) {
        var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        var color = '';
        for (var i = 0; i < len; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    };
    RandomUtils.d = '';
    return RandomUtils;
}());

var StringUtils = (function () {
    function StringUtils() {
    }
    StringUtils.deleteEnter = function (data) {
        return data.replace(/\r?\n/g, '');
    };
    StringUtils.regexExec = function (regex, text) {
        var varExec = regex.exec(text);
        var usingVars = [];
        while (varExec) {
            usingVars.push(varExec);
            varExec = regex.exec(varExec.input);
        }
        return usingVars;
    };
    StringUtils.escapeSpecialCharacterRegExp = function (data) {
        return data.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };
    return StringUtils;
}());

var __values$2 = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read$4 = (undefined && undefined.__read) || function (o, n) {
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
};
var ScriptUtils = (function () {
    function ScriptUtils() {
    }
    ScriptUtils.getVariablePaths = function (script) {
        var usingVars = new Set();
        var GetDetectProxy = (function () {
            function GetDetectProxy(prefix) {
                this.prefix = prefix;
                this.usingVars = usingVars;
            }
            GetDetectProxy.prototype.set = function (target, p, value, receiver) {
                return true;
            };
            GetDetectProxy.prototype.get = function (target, p, receiver) {
                var items;
                if (typeof p === 'string') {
                    items = this.prefix ? this.prefix + '.' + p : p;
                    this.usingVars.add(items);
                }
                return new Proxy(function () {
                }, new GetDetectProxy(items));
            };
            return GetDetectProxy;
        }());
        var destUser = new Proxy(function () {
        }, new GetDetectProxy());
        try {
            Function("\"use strict\"; " + script + "; ").bind(destUser)();
        }
        catch (e) {
            console.error(e);
        }
        return usingVars;
    };
    ScriptUtils.evalReturn = function (script, thisTarget) {
        return this.eval('return ' + script + ';', thisTarget);
    };
    ScriptUtils.eval = function (script, thisTarget) {
        return Function("\"use strict\"; " + script + " ").bind(thisTarget)();
    };
    ScriptUtils.loadElement = function (name, attribute, target) {
        if (target === void 0) { target = document.head; }
        return new Promise(function (resolve, reject) {
            var e_1, _a;
            var tag = document.createElement(name);
            tag.onload = resolve;
            tag.onerror = reject;
            try {
                for (var _b = __values$2(Object.entries(attribute)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read$4(_c.value, 2), key = _d[0], value = _d[1];
                    tag.setAttribute(key, value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            target.append(tag);
        });
    };
    ScriptUtils.loadStyleSheet = function (href, attribute) {
        if (attribute === void 0) { attribute = {}; }
        attribute.type = 'text/css';
        attribute.rel = 'stylesheet';
        attribute.href = href;
        return ScriptUtils.loadElement('link', attribute);
    };
    ScriptUtils.loadScript = function (src, attribute) {
        if (attribute === void 0) { attribute = {}; }
        attribute.type = 'text/javascript';
        attribute.src = src;
        return ScriptUtils.loadElement('script', attribute);
    };
    return ScriptUtils;
}());

var ScriptUtils$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ScriptUtils: ScriptUtils
});

var DomUtils = (function () {
    function DomUtils() {
    }
    DomUtils.selectorElements = function (selector, element) {
        if (element === void 0) { element = document; }
        return Array.prototype.slice.call(element.querySelectorAll(selector));
    };
    DomUtils.selectorNodes = function (selector, element) {
        if (element === void 0) { element = document; }
        return element.querySelectorAll(selector);
    };
    DomUtils.removeAttribute = function (result, attrs) {
        attrs.forEach(function (it) {
            result.removeAttribute(it);
        });
    };
    DomUtils.setAttribute = function (result, attrs) {
        attrs.forEach(function (it) {
            result.setAttribute(it, '');
        });
    };
    DomUtils.setAttributeAttr = function (result, attrs) {
        attrs.forEach(function (it) {
            result.setAttribute(it.name, it.value);
        });
    };
    DomUtils.getAttributeToObject = function (input) {
        var attribute = {};
        input.getAttributeNames().forEach(function (ait) {
            attribute[ait] = input.getAttribute(ait);
        });
        return attribute;
    };
    DomUtils.getStyleToObject = function (input) {
        var style = {};
        for (var i = 0; i < input.style.length; i++) {
            var key = input.style[i];
            style[key] = input.style[key];
        }
        return style;
    };
    return DomUtils;
}());

var __read$3 = (undefined && undefined.__read) || function (o, n) {
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
};
var __values$1 = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var EventManager = (function () {
    function EventManager() {
        var _this = this;
        this.attrPrefix = 'dr-';
        this.eventNames = [
            'click', 'mousedown', 'mouseup', 'dblclick', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'contextmenu',
            'keyup', 'keydown', 'keypress',
            'change', 'input', 'submit', 'resize', 'focus', 'blur'
        ];
        this.eventParam = this.attrPrefix + 'event';
        this.attrNames = [
            this.attrPrefix + 'value',
            this.attrPrefix + 'value-link',
            this.attrPrefix + 'attr',
            this.attrPrefix + 'style',
            this.attrPrefix + 'class',
            this.attrPrefix + 'window-event-popstate',
            this.attrPrefix + 'on-init',
            this.eventParam
        ];
        this.eventNames.forEach(function (it) {
            _this.attrNames.push(_this.attrPrefix + 'event-' + it);
        });
        window.addEventListener('popstate', function (e) {
            document.querySelectorAll('[dr-window-event-popstate]').forEach(function (it) {
                var script = it.getAttribute('dr-window-event-popstate');
                if (script) {
                    ScriptUtils.eval("const $target = this.__render.target;  " + script + " ", Object.assign(it.obj, {
                        __render: Object.freeze({
                            target: it
                        })
                    }));
                }
            });
        });
    }
    EventManager.prototype.findAttrElements = function (fragment, config) {
        var _a, _b;
        var elements = new Set();
        var addAttributes = (_b = (_a = config === null || config === void 0 ? void 0 : config.applyEvents) === null || _a === void 0 ? void 0 : _a.map(function (it) { return it.attrName; })) !== null && _b !== void 0 ? _b : [];
        addAttributes.concat(this.attrNames).forEach(function (attrName) {
            fragment === null || fragment === void 0 ? void 0 : fragment.querySelectorAll("[" + attrName + "]").forEach(function (it) {
                elements.add(it);
            });
        });
        return elements;
    };
    EventManager.prototype.applyEvent = function (obj, childNodes, config) {
        var _this = this;
        this.eventNames.forEach(function (it) {
            _this.addDrEvents(obj, it, childNodes);
        });
        this.addDrEventPram(obj, this.eventParam, childNodes);
        this.procAttr(childNodes, this.attrPrefix + 'value', function (it, attribute) {
            var script = attribute;
            if (script) {
                var data = ScriptUtils.evalReturn(script, obj);
                if (it.value !== data) {
                    it.value = data;
                }
            }
        });
        this.procAttr(childNodes, this.attrPrefix + 'window-event-popstate', function (it, attribute) {
            it.obj = obj;
        });
        this.procAttr(childNodes, this.attrPrefix + 'on-init', function (it, varName) {
            if (varName) {
                if (typeof _this.getValue(obj, varName) === 'function') {
                    _this.getValue(obj, varName)(it);
                }
                else {
                    _this.setValue(obj, varName, it);
                }
            }
        });
        this.procAttr(childNodes, this.attrPrefix + 'value-link', function (it, varName) {
            if (varName) {
                var value = _this.getValue(obj, varName);
                if (typeof value === 'function' && value) {
                    value(it.value);
                }
                else {
                    if (value) {
                        _this.setValue(obj, varName, value);
                    }
                    else {
                        _this.setValue(obj, varName, it.value);
                    }
                }
                it.addEventListener('input', function (eit) {
                    if (typeof _this.getValue(obj, varName) === 'function') {
                        _this.getValue(obj, varName)(it.value, eit);
                    }
                    else {
                        _this.setValue(obj, varName, it.value);
                    }
                });
            }
        });
        this.changeVar(obj, childNodes, undefined);
        var elements = Array.from(childNodes).filter(function (it) { return it.nodeType === 1; }).map(function (it) { return it; });
        elements.forEach(function (it) {
            var _a;
            (_a = config === null || config === void 0 ? void 0 : config.applyEvents) === null || _a === void 0 ? void 0 : _a.filter(function (ta) { return it.getAttribute(ta.attrName); }).forEach(function (ta) { return ta.callBack(it, it.getAttribute(ta.attrName), obj); });
        });
    };
    EventManager.prototype.changeVar = function (obj, elements, varName) {
        var _this = this;
        this.procAttr(elements, this.attrPrefix + 'value-link', function (it, attribute) {
            if (attribute && attribute === varName) {
                if (typeof _this.getValue(obj, attribute) === 'function') {
                    _this.getValue(obj, attribute)(it.value);
                }
                else {
                    var value = _this.getValue(obj, attribute);
                    if (value !== undefined && value !== null) {
                        it.value = value;
                    }
                }
            }
        });
        this.procAttr(elements, this.attrPrefix + 'attr', function (it, attribute) {
            var e_1, _a;
            var script = attribute;
            if (script) {
                script = 'return ' + script;
            }
            if (_this.isUsingThisVar(script, varName) || varName === undefined) {
                var data = ScriptUtils.eval("const $element = this.__render.element; " + script + " ", Object.assign(obj, {
                    __render: Object.freeze({
                        element: it
                    })
                }));
                if (typeof data === 'string') {
                    data.split(',').forEach(function (sit) {
                        var _a = __read$3(sit.split('='), 2), key = _a[0], value = _a[1];
                        var s = value.trim();
                        var k = key.trim();
                        if (s === 'null') {
                            it.removeAttribute(k);
                        }
                        else {
                            it.setAttribute(k, s);
                        }
                    });
                }
                else if (Array.isArray(data)) {
                    data.forEach(function (sit) {
                        var _a = __read$3(sit.split('='), 2), key = _a[0], value = _a[1];
                        var s = value.trim();
                        var k = key.trim();
                        if (s === 'null') {
                            it.removeAttribute(k);
                        }
                        else {
                            it.setAttribute(k, s);
                        }
                    });
                }
                else {
                    try {
                        for (var _b = __values$1(Object.entries(data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var _d = __read$3(_c.value, 2), key = _d[0], value = _d[1];
                            if (value === null) {
                                it.removeAttribute(key);
                            }
                            else {
                                it.setAttribute(key, String(value));
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
                }
            }
        });
        this.procAttr(elements, this.attrPrefix + 'style', function (it, attribute) {
            var e_2, _a;
            var script = attribute;
            if (script) {
                script = 'return ' + script;
            }
            if (_this.isUsingThisVar(script, varName) || varName === undefined) {
                var data = ScriptUtils.eval("const $element = this.__render.element;  " + script + " ", Object.assign(obj, {
                    __render: Object.freeze({
                        element: it
                    })
                }));
                if (typeof data === 'string') {
                    it.setAttribute('style', data);
                }
                else if (Array.isArray(data)) {
                    it.setAttribute('style', data.join(';'));
                }
                else {
                    try {
                        for (var _b = __values$1(Object.entries(data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var _d = __read$3(_c.value, 2), key = _d[0], value = _d[1];
                            if (it instanceof HTMLElement) {
                                it.style[key] = String(value);
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        });
        this.procAttr(elements, this.attrPrefix + 'class', function (it, attribute) {
            var e_3, _a;
            var script = attribute;
            if (script) {
                script = 'return ' + script;
            }
            if (_this.isUsingThisVar(script, varName) || varName === undefined) {
                var data = ScriptUtils.eval("const $element = this.element;  " + script + " ", Object.assign(obj, {
                    __render: Object.freeze({
                        element: it
                    })
                }));
                if (typeof data === 'string') {
                    it.setAttribute('class', data);
                }
                else if (Array.isArray(data)) {
                    it.setAttribute('class', data.join(' '));
                }
                else {
                    try {
                        for (var _b = __values$1(Object.entries(data)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var _d = __read$3(_c.value, 2), key = _d[0], value = _d[1];
                            if (it instanceof HTMLElement) {
                                if (value) {
                                    it.classList.add(key);
                                }
                                else {
                                    it.classList.remove(key);
                                }
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
        });
    };
    EventManager.prototype.addDrEvents = function (obj, eventName, elements) {
        var attr = this.attrPrefix + 'event-' + eventName;
        this.procAttr(elements, attr, function (it, attribute) {
            var script = attribute;
            it.addEventListener(eventName, function (event) {
                ScriptUtils.eval("const $event=this.__render.event;  const $target=$event.target; " + script + " ", Object.assign(obj, {
                    __render: Object.freeze({
                        event: event
                    })
                }));
            });
        });
    };
    EventManager.prototype.addDrEventPram = function (obj, attr, elements) {
        this.procAttr(elements, attr, function (it, attribute, attributes) {
            var bind = attributes[attr + ':bind'];
            if (bind) {
                var script_1 = attribute;
                var params_1 = {};
                var prefix_1 = attr + ':';
                Object.entries(attributes).filter(function (_a) {
                    var _b = __read$3(_a, 2), k = _b[0]; _b[1];
                    return k.startsWith(prefix_1);
                }).forEach(function (_a) {
                    var _b = __read$3(_a, 2), k = _b[0], v = _b[1];
                    params_1[k.slice(prefix_1.length)] = v;
                });
                bind.split(',').forEach(function (eventName) {
                    it.addEventListener(eventName.trim(), function (event) {
                        ScriptUtils.eval("const $params = this.__render.params; const $event=this.__render.event; const $target=$event.target;  " + script_1 + " ", Object.assign(obj, {
                            __render: Object.freeze({
                                event: event,
                                params: params_1
                            })
                        }));
                    });
                });
            }
        });
    };
    EventManager.prototype.procAttr = function (elements, attrName, callBack) {
        if (elements === void 0) { elements = new Set(); }
        var sets = new Set();
        elements.forEach(function (it) {
            if (!it) {
                return;
            }
            if (it.nodeType === 1) {
                var e = it;
                sets.add(e);
                e.querySelectorAll("[" + attrName + "]").forEach(function (it) {
                    sets.add(it);
                });
            }
        });
        sets.forEach(function (it) {
            var attr = it.getAttribute(attrName);
            var attrs = DomUtils.getAttributeToObject(it);
            if (attr) {
                callBack(it, attr, attrs);
            }
        });
    };
    EventManager.prototype.getValue = function (obj, name, value) {
        var r = ScriptUtils.evalReturn(name, obj);
        if (typeof r === 'function') {
            r = r.bind(obj);
        }
        return r;
    };
    EventManager.prototype.setValue = function (obj, name, value) {
        ScriptUtils.eval("this." + name + " = this.value", {
            this: obj,
            value: value
        });
    };
    EventManager.prototype.isUsingThisVar = function (raws, varName) {
        if (varName && raws) {
            if (varName.startsWith('this.')) {
                varName = varName.replace(/this\./, '');
            }
            EventManager.VARNAMES.forEach(function (it) {
                raws = raws.replace(RegExp(it.replace('$', '\\$'), 'g'), "this?.___" + it);
            });
            var variablePaths = ScriptUtils.getVariablePaths(raws !== null && raws !== void 0 ? raws : '');
            return variablePaths.has(varName);
        }
        return false;
    };
    EventManager.SCRIPTS_VARNAME = '$scripts';
    EventManager.FAG_VARNAME = '$fag';
    EventManager.RAWSET_VARNAME = '$rawset';
    EventManager.RANGE_VARNAME = '$range';
    EventManager.ELEMENT_VARNAME = '$element';
    EventManager.TARGET_VARNAME = '$target';
    EventManager.VARNAMES = [EventManager.SCRIPTS_VARNAME, EventManager.FAG_VARNAME, EventManager.RAWSET_VARNAME, EventManager.RANGE_VARNAME, EventManager.ELEMENT_VARNAME, EventManager.TARGET_VARNAME];
    return EventManager;
}());
var eventManager = new EventManager();

var __read$2 = (undefined && undefined.__read) || function (o, n) {
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
};
var __spreadArray$1 = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var RangeResult = (function () {
    function RangeResult(value, done) {
        this.done = done;
        this.value = value !== null && value !== void 0 ? value : 0;
    }
    return RangeResult;
}());
var RangeIterator = (function () {
    function RangeIterator(first, last, step) {
        this._current = this._first = first;
        this._last = last;
        this._step = step;
    }
    RangeIterator.prototype.next = function (value) {
        var r;
        if (this._first < this._last && this._current < this._last) {
            r = new RangeResult(this._current, false);
            this._current += this._step;
        }
        else if (this._first > this._last && this._current > this._last) {
            r = new RangeResult(this._current, false);
            this._current -= this._step;
        }
        else {
            r = new RangeResult(undefined, true);
        }
        return r;
    };
    return RangeIterator;
}());
var Range = (function () {
    function Range(first, last, step) {
        if (step === void 0) { step = 1; }
        this.first = first;
        this.last = last;
        this.step = step;
        this.isRange = true;
    }
    Range.prototype[Symbol.iterator] = function () {
        return new RangeIterator(this.first, this.last, this.step);
    };
    Range.range = function (first, last, step) {
        if (step === void 0) { step = 1; }
        if (typeof first === 'number' && last === undefined) {
            return new Range(0, first, step);
        }
        else if (typeof first === 'string') {
            var _a = __read$2(first.split('..'), 2), _first = _a[0], _b = _a[1], _last = _b === void 0 ? '0' : _b;
            var _c = __read$2(_last.split(','), 2), __last = _c[0], _d = _c[1], _step = _d === void 0 ? '1' : _d;
            return new Range(Number(_first.trim()), Number(__last.trim()), Number(_step.trim()));
        }
        else {
            return new Range(first, last !== null && last !== void 0 ? last : 0, step);
        }
    };
    Range.prototype.toArray = function () {
        return __spreadArray$1([], __read$2(this), false);
    };
    return Range;
}());

var __read$1 = (undefined && undefined.__read) || function (o, n) {
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
};
var Validator = (function () {
    function Validator(_value, target, event, autoValid, autoValidAction) {
        if (autoValid === void 0) { autoValid = true; }
        if (autoValidAction === void 0) { autoValidAction = true; }
        this._value = _value;
        this.setTarget(target);
        this.setEvent(event);
        this.setAutoValid(autoValid);
        this.setAutoValidAction(autoValidAction);
    }
    Validator.prototype.getValidAction = function () {
        return this._validAction;
    };
    Validator.prototype.setValidAction = function (value) {
        this._validAction = value;
        return this;
    };
    Validator.prototype.getAutoValid = function () {
        return this._autoValid;
    };
    Validator.prototype.setAutoValid = function (autoValid) {
        this._autoValid = autoValid;
        return this;
    };
    Validator.prototype.getAutoValidAction = function () {
        return this._autoValidAction;
    };
    Validator.prototype.setAutoValidAction = function (autoValid) {
        this._autoValidAction = autoValid;
        return this;
    };
    Validator.prototype.getEvent = function () {
        return this._event;
    };
    Validator.prototype.setEvent = function (event) {
        if (event) {
            this._event = this.domRenderFinal(event);
        }
        return this;
    };
    Validator.prototype.getTarget = function () {
        return this._target;
    };
    Validator.prototype.setTarget = function (target) {
        if (target) {
            this._target = this.domRenderFinal(target);
        }
        return this;
    };
    Validator.prototype.domRenderFinal = function (obj) {
        obj._DomRender_isFinal = true;
        return obj;
    };
    Object.defineProperty(Validator.prototype, "value", {
        get: function () {
            var _a;
            if (this._value === undefined || this._value === null) {
                this._value = (_a = this.getTarget()) === null || _a === void 0 ? void 0 : _a.value;
            }
            return this._value;
        },
        set: function (value) {
            this._value = value;
            this.tickValue(value);
        },
        enumerable: false,
        configurable: true
    });
    Validator.prototype.tickValue = function (value) {
        this.changeValue(value);
        var target = this.getTarget();
        if (target && (target === null || target === void 0 ? void 0 : target.value) !== undefined && (target === null || target === void 0 ? void 0 : target.value) !== null) {
            target.value = this._value;
        }
        if (this.getAutoValidAction()) {
            this.validAction();
        }
        else if (this.getAutoValid()) {
            this.valid();
        }
    };
    Validator.prototype.set = function (value, target, event) {
        this.setTarget(target);
        this.setEvent(event);
        this.value = value;
    };
    Validator.prototype.changeValue = function (value) {
    };
    Object.defineProperty(Validator.prototype, "checked", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.getTarget()) === null || _a === void 0 ? void 0 : _a.checked) !== null && _b !== void 0 ? _b : false;
        },
        set: function (checked) {
            var target = this.getTarget();
            if (target) {
                target.checked = checked;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Validator.prototype, "selectedIndex", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.getTarget()) === null || _a === void 0 ? void 0 : _a.selectedIndex) !== null && _b !== void 0 ? _b : -1;
        },
        set: function (selectedIndex) {
            var target = this.getTarget();
            if (target) {
                target.selectedIndex = selectedIndex;
            }
        },
        enumerable: false,
        configurable: true
    });
    Validator.prototype.querySelector = function (selector) {
        var _a;
        return (_a = this.getTarget()) === null || _a === void 0 ? void 0 : _a.querySelector(selector);
    };
    Validator.prototype.querySelectorALL = function (selector) {
        var _a;
        return (_a = this.getTarget()) === null || _a === void 0 ? void 0 : _a.querySelectorAll(selector);
    };
    Validator.prototype.validAction = function () {
        var _a;
        var valid = this.valid();
        (_a = this.getValidAction()) === null || _a === void 0 ? void 0 : _a(valid, this.value, this.getTarget(), this.getEvent());
        return valid;
    };
    Validator.prototype.inValid = function () {
        return !this.valid();
    };
    Validator.prototype.allValid = function () {
        return this.valid() && this.childInValid();
    };
    Validator.prototype.allValidAction = function () {
        return this.validAction() && this.childInValidAction();
    };
    Validator.prototype.allInValid = function () {
        return !this.allValid();
    };
    Validator.prototype.allInValidAction = function () {
        return !this.allValidAction();
    };
    Validator.prototype.childValid = function () {
        return !this.childInValid();
    };
    Validator.prototype.childValidAction = function () {
        return !this.childInValidAction();
    };
    Validator.prototype.childInValid = function () {
        var inValid = this.childValidator().filter(function (_a) {
            var _b = __read$1(_a, 2); _b[0]; var v = _b[1];
            return !v.valid();
        });
        return inValid.length > 0;
    };
    Validator.prototype.childInValidAction = function () {
        var inValid = this.childValidator().filter(function (_a) {
            var _b = __read$1(_a, 2); _b[0]; var v = _b[1];
            return !v.validAction();
        });
        return inValid.length > 0;
    };
    Validator.prototype.childValidator = function () {
        return Object.entries(this).filter(function (_a) {
            var _b = __read$1(_a, 2); _b[0]; var v = _b[1];
            return (v instanceof Validator);
        });
    };
    Object.defineProperty(Validator.prototype, "length", {
        get: function () {
            var _a, _b;
            return (_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        },
        enumerable: false,
        configurable: true
    });
    return Validator;
}());

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NonPassValidator = (function (_super) {
    __extends$1(NonPassValidator, _super);
    function NonPassValidator(value, target, event, autoValid) {
        if (autoValid === void 0) { autoValid = true; }
        return _super.call(this, value, target, event, autoValid) || this;
    }
    NonPassValidator.prototype.valid = function () {
        return false;
    };
    return NonPassValidator;
}(Validator));

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ValidatorArray = (function (_super) {
    __extends(ValidatorArray, _super);
    function ValidatorArray(value, target, event, autoValid) {
        if (autoValid === void 0) { autoValid = true; }
        var _this = _super.call(this, value, target, event, autoValid) || this;
        _this._makeValidatorFactory = function (value, target, event) {
            return new NonPassValidator(value, target, event);
        };
        return _this;
    }
    ValidatorArray.prototype.getMakeValidatorFactory = function () {
        return this._makeValidatorFactory;
    };
    ValidatorArray.prototype.setMakeValidatorFactory = function (value) {
        this._makeValidatorFactory = value;
        return this;
    };
    ValidatorArray.prototype.setArrayValue = function (target, value, event) {
        var _a;
        (_a = this.value) === null || _a === void 0 ? void 0 : _a.filter(function (it) {
            if (it.getTarget()) {
                return it.getTarget() === target;
            }
            else {
                return false;
            }
        }).forEach(function (it) {
            it.set(value, target, event);
        });
        this.tickValue(this.value);
    };
    ValidatorArray.prototype.addValidator = function (value, target, event) {
        var _a, _b;
        if (!this.value) {
            this.value = [];
        }
        if (value instanceof Validator) {
            (_a = this.value) === null || _a === void 0 ? void 0 : _a.push(value);
        }
        else {
            (_b = this.value) === null || _b === void 0 ? void 0 : _b.push(this.makeValidator(value, target, event));
        }
        this.tickValue(this.value);
    };
    ValidatorArray.prototype.allChecked = function (checked) {
        var _a;
        this.checked = checked;
        (_a = this.value) === null || _a === void 0 ? void 0 : _a.forEach(function (it) {
            it.checked = checked;
        });
    };
    ValidatorArray.prototype.getValidators = function () {
        return this._value;
    };
    ValidatorArray.prototype.getValidator = function (e) {
        var _a;
        return (_a = this.value) === null || _a === void 0 ? void 0 : _a.filter(function (it) { return it.getTarget() === e; })[0];
    };
    ValidatorArray.prototype.getValidatorByValue = function (value) {
        var validatorByValue = this.getValidatorByValues(value)[0];
        return validatorByValue;
    };
    ValidatorArray.prototype.getValidatorByValues = function (value) {
        var _a, _b;
        return (_b = (_a = this.value) === null || _a === void 0 ? void 0 : _a.filter(function (it) { return it.value === value; })) !== null && _b !== void 0 ? _b : [];
    };
    ValidatorArray.prototype.removeElement = function (e) {
        var value = this.value;
        if (value) {
            this.value = value.filter(function (it) { return it.getTarget() !== e; });
        }
    };
    ValidatorArray.prototype.makeValidator = function (value, target, event) {
        return this._makeValidatorFactory(value, target, event);
    };
    return ValidatorArray;
}(Validator));

var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (undefined && undefined.__read) || function (o, n) {
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
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var RawSet = (function () {
    function RawSet(uuid, point, fragment, data) {
        if (data === void 0) { data = {}; }
        this.uuid = uuid;
        this.point = point;
        this.fragment = fragment;
        this.data = data;
    }
    Object.defineProperty(RawSet.prototype, "isConnected", {
        get: function () {
            return this.point.start.isConnected && this.point.end.isConnected;
        },
        enumerable: false,
        configurable: true
    });
    RawSet.prototype.getUsingTriggerVariables = function (config) {
        var usingTriggerVariables = new Set();
        this.fragment.childNodes.forEach(function (cNode, key) {
            var _a, _b, _c;
            var script = '';
            if (cNode.nodeType === Node.TEXT_NODE) {
                script = "`" + ((_a = cNode.textContent) !== null && _a !== void 0 ? _a : '') + "`";
            }
            else if (cNode.nodeType === Node.ELEMENT_NODE) {
                var element_1 = cNode;
                var targetAttrNames = ((_c = (_b = config === null || config === void 0 ? void 0 : config.targetAttrs) === null || _b === void 0 ? void 0 : _b.map(function (it) { return it.name; })) !== null && _c !== void 0 ? _c : []).concat(RawSet.DR_ATTRIBUTES);
                script = targetAttrNames.map(function (it) { return (element_1.getAttribute(it)); }).filter(function (it) { return it; }).join(';');
            }
            if (script) {
                EventManager.VARNAMES.forEach(function (it) {
                    script = script.replace(RegExp(it.replace('$', '\\$'), 'g'), "this?.___" + it);
                });
                Array.from(ScriptUtils.getVariablePaths(script)).filter(function (it) { return !it.startsWith("___" + EventManager.SCRIPTS_VARNAME) && !it.startsWith("___" + EventManager.SCRIPTS_VARNAME); }).forEach(function (it) { return usingTriggerVariables.add(it); });
            }
        });
        return usingTriggerVariables;
    };
    RawSet.prototype.render = function (obj, config) {
        var _this = this;
        var genNode = document.importNode(this.fragment, true);
        var raws = [];
        var onAttrInitCallBack = [];
        var onElementInitCallBack = [];
        var drAttrs = [];
        genNode.childNodes.forEach(function (cNode, key) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4;
            var __render = Object.freeze({
                rawset: _this,
                scripts: RawSet.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj),
                range: Range.range,
                element: cNode,
                bindScript: "\n                    const " + EventManager.SCRIPTS_VARNAME + " = this.__render.scripts;\n                    const " + EventManager.RAWSET_VARNAME + " = this.__render.rawset;\n                    const " + EventManager.ELEMENT_VARNAME + " = this.__render.element;\n                    const " + EventManager.RANGE_VARNAME + " = this.__render.range;\n            "
            });
            var fag = document.createDocumentFragment();
            if (cNode.nodeType === Node.TEXT_NODE && cNode.textContent) {
                var textContent = cNode.textContent;
                var runText = RawSet.exporesionGrouops(textContent)[0][1];
                var n = void 0;
                if (textContent === null || textContent === void 0 ? void 0 : textContent.startsWith('#')) {
                    var r = ScriptUtils.eval(__render.bindScript + " return " + runText, Object.assign(obj, { __render: __render }));
                    var template = document.createElement('template');
                    template.innerHTML = r;
                    n = template.content;
                }
                else {
                    var r = ScriptUtils.eval(__render.bindScript + "  return " + runText, Object.assign(obj, { __render: __render }));
                    n = document.createTextNode(r);
                }
                (_a = cNode.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(n, cNode);
            }
            else if (cNode.nodeType === Node.ELEMENT_NODE) {
                var element_2 = cNode;
                var drAttr_1 = {
                    dr: _this.getAttributeAndDelete(element_2, RawSet.DR),
                    drIf: _this.getAttributeAndDelete(element_2, RawSet.DR_IF_NAME),
                    drFor: _this.getAttributeAndDelete(element_2, RawSet.DR_FOR_NAME),
                    drForOf: _this.getAttributeAndDelete(element_2, RawSet.DR_FOR_OF_NAME),
                    drRepeat: _this.getAttributeAndDelete(element_2, RawSet.DR_REPEAT_NAME),
                    drThis: _this.getAttributeAndDelete(element_2, RawSet.DR_THIS_NAME),
                    drForm: _this.getAttributeAndDelete(element_2, RawSet.DR_FORM_NAME),
                    drPre: _this.getAttributeAndDelete(element_2, RawSet.DR_PRE_NAME),
                    drInnerHTML: _this.getAttributeAndDelete(element_2, RawSet.DR_INNERHTML_NAME),
                    drInnerText: _this.getAttributeAndDelete(element_2, RawSet.DR_INNERTEXT_NAME),
                    drItOption: _this.getAttributeAndDelete(element_2, RawSet.DR_IT_OPTIONNAME),
                    drVarOption: _this.getAttributeAndDelete(element_2, RawSet.DR_VAR_OPTIONNAME),
                    drAfterOption: _this.getAttributeAndDelete(element_2, RawSet.DR_AFTER_OPTIONNAME),
                    drBeforeOption: _this.getAttributeAndDelete(element_2, RawSet.DR_BEFORE_OPTIONNAME),
                    drCompleteOption: _this.getAttributeAndDelete(element_2, RawSet.DR_COMPLETE_OPTIONNAME),
                    drStripOption: _this.getAttributeAndDelete(element_2, RawSet.DR_STRIP_OPTIONNAME) === 'true'
                };
                drAttrs.push(drAttr_1);
                if (drAttr_1.drPre != null) {
                    return;
                }
                if (drAttr_1.dr !== null && drAttr_1.dr.length >= 0) {
                    var itRandom = RawSet.drItOtherEncoding(element_2);
                    var vars = RawSet.drVarEncoding(element_2, (_b = drAttr_1.drVarOption) !== null && _b !== void 0 ? _b : '');
                    var newTemp = document.createElement('temp');
                    ScriptUtils.eval("\n                        " + __render.bindScript + "\n                        const n = $element.cloneNode(true);\n                        var destIt = " + drAttr_1.drItOption + ";\n                        if (destIt !== undefined) {\n                            n.getAttributeNames().forEach(it => n.setAttribute(it, n.getAttribute(it).replace(/\\#it\\#/g, destIt)))\n                            n.innerHTML = n.innerHTML.replace(/\\#it\\#/g, destIt);\n                        }\n                        if (this.__render.drStripOption) {\n                            Array.from(n.childNodes).forEach(it => this.__fag.append(it));\n                        } else {\n                            this.__render.fag.append(n);\n                        }", Object.assign(obj, {
                        __render: Object.freeze(__assign({ fag: newTemp, drStripOption: drAttr_1.drStripOption }, __render))
                    }));
                    RawSet.drVarDecoding(newTemp, vars);
                    RawSet.drItOtherDecoding(newTemp, itRandom);
                    var tempalte = document.createElement('template');
                    tempalte.innerHTML = newTemp.innerHTML;
                    fag.append(tempalte.content);
                    var rr = RawSet.checkPointCreates(fag, config);
                    (_c = element_2.parentNode) === null || _c === void 0 ? void 0 : _c.replaceChild(fag, element_2);
                    raws.push.apply(raws, __spreadArray([], __read(rr), false));
                }
                if (drAttr_1.drIf) {
                    var itRandom = RawSet.drItOtherEncoding(element_2);
                    var vars = RawSet.drVarEncoding(element_2, (_d = drAttr_1.drVarOption) !== null && _d !== void 0 ? _d : '');
                    var newTemp = document.createElement('temp');
                    ScriptUtils.eval("\n                    " + __render.bindScript + "\n                    " + ((_e = drAttr_1.drBeforeOption) !== null && _e !== void 0 ? _e : '') + "\n                    if(" + drAttr_1.drIf + ") {\n                        const n = $element.cloneNode(true);\n                        var destIt = " + drAttr_1.drItOption + ";\n                        if (destIt !== undefined) {\n                            n.getAttributeNames().forEach(it => n.setAttribute(it, n.getAttribute(it).replace(/\\#it\\#/g, destIt)))\n                            n.innerHTML = n.innerHTML.replace(/\\#it\\#/g, destIt);\n                        }\n                        if (this.__render.drStripOption) {\n                            Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                        } else {\n                            this.__render.fag.append(n);\n                        }\n                    }\n                    " + ((_f = drAttr_1.drAfterOption) !== null && _f !== void 0 ? _f : '') + "\n                    ", Object.assign(obj, {
                        __render: Object.freeze(__assign({ fag: newTemp, drStripOption: drAttr_1.drStripOption }, __render))
                    }));
                    RawSet.drVarDecoding(newTemp, vars);
                    RawSet.drItOtherDecoding(newTemp, itRandom);
                    var tempalte = document.createElement('template');
                    tempalte.innerHTML = newTemp.innerHTML;
                    fag.append(tempalte.content);
                    var rr = RawSet.checkPointCreates(fag, config);
                    (_g = element_2.parentNode) === null || _g === void 0 ? void 0 : _g.replaceChild(fag, element_2);
                    raws.push.apply(raws, __spreadArray([], __read(rr), false));
                }
                if (drAttr_1.drThis) {
                    var r = ScriptUtils.evalReturn(drAttr_1.drThis, obj);
                    if (r) {
                        fag.append(RawSet.drThisCreate(element_2, drAttr_1.drThis, (_h = drAttr_1.drVarOption) !== null && _h !== void 0 ? _h : '', drAttr_1.drStripOption, obj));
                        var rr = RawSet.checkPointCreates(fag, config);
                        (_j = element_2.parentNode) === null || _j === void 0 ? void 0 : _j.replaceChild(fag, element_2);
                        raws.push.apply(raws, __spreadArray([], __read(rr), false));
                    }
                    else {
                        cNode.remove();
                    }
                }
                if (drAttr_1.drForm) {
                    RawSet.drFormOtherMoveAttr(element_2, 'name', 'temp-name');
                    var data = ScriptUtils.evalReturn("" + drAttr_1.drForm, obj);
                    if (data instanceof Validator) {
                        data.setTarget(element_2);
                    }
                    element_2.querySelectorAll('[name]').forEach(function (it) {
                        var _a;
                        var eventName = (_a = it.getAttribute('dr-form:event')) !== null && _a !== void 0 ? _a : 'change';
                        var attrEventName = eventManager.attrPrefix + 'event-' + eventName;
                        var varpath = it.getAttribute('name');
                        if (varpath != null) {
                            var data_1 = ScriptUtils.evalReturn("" + drAttr_1.drForm + (varpath ? '.' + varpath : ''), obj);
                            if (data_1 instanceof ValidatorArray) {
                                varpath = drAttr_1.drForm + '.' + varpath;
                                it.setAttribute(attrEventName, varpath + ".setArrayValue($target, $target.value, $event);");
                                data_1.addValidator(it.value, it);
                            }
                            else if (data_1 instanceof Validator) {
                                var fieldPath = drAttr_1.drForm + '.' + varpath;
                                varpath += (varpath ? '.value' : 'value');
                                varpath = drAttr_1.drForm + '.' + varpath;
                                it.setAttribute(attrEventName, fieldPath + ".set($target.value, $target, $event);");
                                data_1.setTarget(it);
                                data_1.value = it.value;
                            }
                            else {
                                varpath = drAttr_1.drForm + '.' + varpath;
                                it.setAttribute(attrEventName, varpath + " = $target.value;");
                            }
                        }
                    });
                    RawSet.drFormOtherMoveAttr(element_2, 'temp-name', 'name');
                    raws.push.apply(raws, __spreadArray([], __read(RawSet.checkPointCreates(element_2, config)), false));
                }
                if (drAttr_1.drInnerText) {
                    var newTemp = document.createElement('temp');
                    ScriptUtils.eval(" \n                        " + __render.bindScript + "\n                        const n = $element.cloneNode(true);  \n                        " + ((_k = drAttr_1.drBeforeOption) !== null && _k !== void 0 ? _k : '') + "\n                        n.innerText = " + drAttr_1.drInnerText + ";\n                        if (this.__render.drStripOption) {\n                            Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                        } else {\n                            this.__render.fag.append(n);\n                        }\n                        " + ((_l = drAttr_1.drAfterOption) !== null && _l !== void 0 ? _l : '') + "\n                    ", Object.assign(obj, {
                        __render: Object.freeze(__assign({ drStripOption: drAttr_1.drStripOption, fag: newTemp }, __render))
                    }));
                    var tempalte = document.createElement('template');
                    tempalte.innerHTML = newTemp.innerHTML;
                    fag.append(tempalte.content);
                    var rr = RawSet.checkPointCreates(fag, config);
                    (_m = element_2.parentNode) === null || _m === void 0 ? void 0 : _m.replaceChild(fag, element_2);
                    raws.push.apply(raws, __spreadArray([], __read(rr), false));
                }
                if (drAttr_1.drInnerHTML) {
                    var newTemp = document.createElement('temp');
                    ScriptUtils.eval("\n                        " + __render.bindScript + "\n                        const n = $element.cloneNode(true);\n                        " + ((_o = drAttr_1.drBeforeOption) !== null && _o !== void 0 ? _o : '') + "\n                        n.innerHTML = " + drAttr_1.drInnerHTML + ";\n                        if (this.__render.drStripOption) {\n                            Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                        } else {\n                            this.__render.fag.append(n);\n                        }\n                        " + ((_p = drAttr_1.drAfterOption) !== null && _p !== void 0 ? _p : '') + "\n                    ", Object.assign(obj, {
                        __render: Object.freeze(__assign({ drStripOption: drAttr_1.drStripOption, fag: newTemp }, __render))
                    }));
                    var tempalte = document.createElement('template');
                    tempalte.innerHTML = newTemp.innerHTML;
                    fag.append(tempalte.content);
                    var rr = RawSet.checkPointCreates(fag, config);
                    (_q = element_2.parentNode) === null || _q === void 0 ? void 0 : _q.replaceChild(fag, element_2);
                    raws.push.apply(raws, __spreadArray([], __read(rr), false));
                }
                if (drAttr_1.drFor) {
                    var itRandom = RawSet.drItOtherEncoding(element_2);
                    var vars = RawSet.drVarEncoding(element_2, (_r = drAttr_1.drVarOption) !== null && _r !== void 0 ? _r : '');
                    var newTemp = document.createElement('temp');
                    ScriptUtils.eval("\n                    " + __render.bindScript + "\n                    " + ((_s = drAttr_1.drBeforeOption) !== null && _s !== void 0 ? _s : '') + "\n                    for(" + drAttr_1.drFor + ") {\n                        const n = this.__render.element.cloneNode(true);\n                        var destIt = " + drAttr_1.drItOption + ";\n                        if (destIt !== undefined) {\n                            n.getAttributeNames().forEach(it => n.setAttribute(it, n.getAttribute(it).replace(/\\#it\\#/g, destIt))) \n                            n.innerHTML = n.innerHTML.replace(/\\#it\\#/g, destIt);\n                        }\n                        if (this.__render.drStripOption) {\n                            Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                        } else {\n                            this.__render.fag.append(n);\n                        }\n                    }\n                    " + ((_t = drAttr_1.drAfterOption) !== null && _t !== void 0 ? _t : '') + "\n                    ", Object.assign(obj, {
                        __render: Object.freeze(__assign({ fag: newTemp, drStripOption: drAttr_1.drStripOption }, __render))
                    }));
                    RawSet.drVarDecoding(newTemp, vars);
                    RawSet.drItOtherDecoding(newTemp, itRandom);
                    var tempalte = document.createElement('template');
                    tempalte.innerHTML = newTemp.innerHTML;
                    fag.append(tempalte.content);
                    var rr = RawSet.checkPointCreates(fag, config);
                    (_u = element_2.parentNode) === null || _u === void 0 ? void 0 : _u.replaceChild(fag, element_2);
                    raws.push.apply(raws, __spreadArray([], __read(rr), false));
                }
                if (drAttr_1.drForOf) {
                    var itRandom = RawSet.drItOtherEncoding(element_2);
                    var vars = RawSet.drVarEncoding(element_2, (_v = drAttr_1.drVarOption) !== null && _v !== void 0 ? _v : '');
                    var newTemp = document.createElement('temp');
                    ScriptUtils.eval("\n                    " + __render.bindScript + "\n                    " + ((_w = drAttr_1.drBeforeOption) !== null && _w !== void 0 ? _w : '') + "\n                    var i = 0; \n                    const forOf = " + drAttr_1.drForOf + ";\n                    const forOfStr = `" + drAttr_1.drForOf + "`.trim();\n                    for(const it of forOf) {\n                        var destIt = it;\n                        if (/\\[(.*,?)\\],/g.test(forOfStr)) {\n                            if (typeof it === 'string') {\n                                destIt = it;\n                            } else {\n                                destIt = forOfStr.substring(1, forOfStr.length-1).split(',')[i];\n                            }\n                        } else if (forOf.isRange) {\n                                destIt = it;\n                        }  else {\n                            destIt = forOfStr + '[' + i +']'\n                        }\n                        const n = this.__render.element.cloneNode(true);\n                        n.getAttributeNames().forEach(it => n.setAttribute(it, n.getAttribute(it).replace(/\\#it\\#/g, destIt)))\n                        n.innerHTML = n.innerHTML.replace(/\\#it\\#/g, destIt);\n                        if (this.__render.drStripOption) {\n                            Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                        } else {\n                            this.__render.fag.append(n);\n                        }\n                        i++;\n                    }\n                    " + ((_x = drAttr_1.drAfterOption) !== null && _x !== void 0 ? _x : '') + "\n                    ", Object.assign(obj, {
                        __render: Object.freeze(__assign({ drStripOption: drAttr_1.drStripOption, fag: newTemp }, __render))
                    }));
                    RawSet.drVarDecoding(newTemp, vars);
                    RawSet.drItOtherDecoding(newTemp, itRandom);
                    var tempalte = document.createElement('template');
                    tempalte.innerHTML = newTemp.innerHTML;
                    fag.append(tempalte.content);
                    var rr = RawSet.checkPointCreates(fag, config);
                    (_y = element_2.parentNode) === null || _y === void 0 ? void 0 : _y.replaceChild(fag, element_2);
                    raws.push.apply(raws, __spreadArray([], __read(rr), false));
                }
                if (drAttr_1.drRepeat) {
                    var itRandom = RawSet.drItOtherEncoding(element_2);
                    var vars = RawSet.drVarEncoding(element_2, (_z = drAttr_1.drVarOption) !== null && _z !== void 0 ? _z : '');
                    var newTemp = document.createElement('temp');
                    ScriptUtils.eval("\n                    " + __render.bindScript + "\n                    " + ((_0 = drAttr_1.drBeforeOption) !== null && _0 !== void 0 ? _0 : '') + "\n                    var i = 0; \n                    const repeat = " + drAttr_1.drRepeat + ";\n                    const repeatStr = `" + drAttr_1.drRepeat + "`;\n                    let range = repeat;\n                    if (typeof repeat === 'number') {\n                        range = " + EventManager.RANGE_VARNAME + "(repeat);\n                    } \n                    for(const it of range) {\n                        var destIt = it;\n                        if (range.isRange) {\n                            destIt = it;\n                        }  else {\n                            destIt = repeatStr + '[' + i +']'\n                        }\n                        const n = this.__render.element.cloneNode(true);\n                        n.getAttributeNames().forEach(it => n.setAttribute(it, n.getAttribute(it).replace(/\\#it\\#/g, destIt)))\n                        n.innerHTML = n.innerHTML.replace(/\\#it\\#/g, destIt);\n                        \n                        if (this.__render.drStripOption) {\n                            Array.from(n.childNodes).forEach(it => this.__render.fag.append(it));\n                        } else {\n                            this.__render.fag.append(n);\n                        }\n                        i++;\n                    }\n                    " + ((_1 = drAttr_1.drAfterOption) !== null && _1 !== void 0 ? _1 : '') + "\n                    ", Object.assign(obj, {
                        __render: Object.freeze(__assign({ fag: newTemp, drStripOption: drAttr_1.drStripOption }, __render))
                    }));
                    RawSet.drVarDecoding(newTemp, vars);
                    RawSet.drItOtherDecoding(newTemp, itRandom);
                    var tempalte = document.createElement('template');
                    tempalte.innerHTML = newTemp.innerHTML;
                    fag.append(tempalte.content);
                    var rr = RawSet.checkPointCreates(fag, config);
                    (_2 = element_2.parentNode) === null || _2 === void 0 ? void 0 : _2.replaceChild(fag, element_2);
                    raws.push.apply(raws, __spreadArray([], __read(rr), false));
                }
                (_3 = config === null || config === void 0 ? void 0 : config.targetElements) === null || _3 === void 0 ? void 0 : _3.forEach(function (it) {
                    var _a, _b;
                    var name = it.name;
                    if (name.toLowerCase() === element_2.tagName.toLowerCase()) {
                        var documentFragment = it.callBack(element_2, obj, _this);
                        if (documentFragment) {
                            fag.append(documentFragment);
                            var rr = RawSet.checkPointCreates(fag, config);
                            (_a = element_2.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(fag, element_2);
                            var onInit = element_2.getAttribute('dr-on-init-component');
                            if (onInit) {
                                ScriptUtils.evalReturn(onInit, obj)(obj === null || obj === void 0 ? void 0 : obj.__componentInstances[_this.uuid], _this);
                            }
                            raws.push.apply(raws, __spreadArray([], __read(rr), false));
                            onElementInitCallBack.push({
                                name: name,
                                obj: obj
                            });
                            (_b = it === null || it === void 0 ? void 0 : it.complete) === null || _b === void 0 ? void 0 : _b.call(it, element_2, obj, _this);
                        }
                    }
                });
                (_4 = config === null || config === void 0 ? void 0 : config.targetAttrs) === null || _4 === void 0 ? void 0 : _4.forEach(function (it) {
                    var _a, _b;
                    var attrName = it.name;
                    var attrValue = _this.getAttributeAndDelete(element_2, attrName);
                    if (attrValue && attrName) {
                        var documentFragment = it.callBack(element_2, attrValue, obj, _this);
                        if (documentFragment) {
                            fag.append(documentFragment);
                            var rr = RawSet.checkPointCreates(fag, config);
                            (_a = element_2.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(fag, element_2);
                            raws.push.apply(raws, __spreadArray([], __read(rr), false));
                            onAttrInitCallBack.push({
                                attrName: attrName,
                                attrValue: attrValue,
                                obj: obj
                            });
                            (_b = it === null || it === void 0 ? void 0 : it.complete) === null || _b === void 0 ? void 0 : _b.call(it, element_2, attrValue, obj, _this);
                        }
                    }
                });
            }
        });
        this.applyEvent(obj, genNode, config);
        this.replaceBody(genNode);
        drAttrs.forEach(function (it) {
            if (it.drCompleteOption) {
                ScriptUtils.eval("\n                const " + EventManager.FAG_VARNAME + " = this.__render.fag;\n                const " + EventManager.SCRIPTS_VARNAME + " = this.__render.scripts;\n                const " + EventManager.RAWSET_VARNAME + " = this.__render.rawset;\n                " + it.drCompleteOption + "\n                ", Object.assign(obj, {
                    __render: Object.freeze({
                        rawset: _this,
                        fag: genNode,
                        scripts: RawSet.setBindProperty(config === null || config === void 0 ? void 0 : config.scripts, obj)
                    })
                }));
            }
        });
        onElementInitCallBack.forEach(function (it) { var _a; return (_a = config === null || config === void 0 ? void 0 : config.onElementInit) === null || _a === void 0 ? void 0 : _a.call(config, it.name, obj, _this); });
        onAttrInitCallBack.forEach(function (it) { var _a; return (_a = config === null || config === void 0 ? void 0 : config.onAttrInit) === null || _a === void 0 ? void 0 : _a.call(config, it.attrName, it.attrValue, obj, _this); });
        return raws;
    };
    RawSet.prototype.applyEvent = function (obj, fragment, config) {
        if (fragment === void 0) { fragment = this.fragment; }
        eventManager.applyEvent(obj, eventManager.findAttrElements(fragment, config), config);
    };
    RawSet.prototype.getAttribute = function (element, attr) {
        var data = element.getAttribute(attr);
        return data;
    };
    RawSet.prototype.getAttributeAndDelete = function (element, attr) {
        var data = element.getAttribute(attr);
        element.removeAttribute(attr);
        return data;
    };
    RawSet.prototype.replaceBody = function (genNode) {
        var _a;
        this.childAllRemove();
        (_a = this.point.start.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(genNode, this.point.start.nextSibling);
    };
    RawSet.checkPointCreates = function (element, config) {
        var _a, _b, _c, _d;
        var nodeIterator = document.createNodeIterator(element, NodeFilter.SHOW_ALL, {
            acceptNode: function (node) {
                var _a, _b, _c, _d, _e;
                if (node.nodeType === Node.TEXT_NODE) {
                    var between = RawSet.exporesionGrouops(StringUtils.deleteEnter((_a = node.data) !== null && _a !== void 0 ? _a : ''));
                    return (between === null || between === void 0 ? void 0 : between.length) > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                }
                else if (node.nodeType === Node.ELEMENT_NODE) {
                    var element_3 = node;
                    var isElement = ((_c = (_b = config === null || config === void 0 ? void 0 : config.targetElements) === null || _b === void 0 ? void 0 : _b.map(function (it) { return it.name.toLowerCase(); })) !== null && _c !== void 0 ? _c : []).includes(element_3.tagName.toLowerCase());
                    var targetAttrNames_1 = ((_e = (_d = config === null || config === void 0 ? void 0 : config.targetAttrs) === null || _d === void 0 ? void 0 : _d.map(function (it) { return it.name; })) !== null && _e !== void 0 ? _e : []).concat(RawSet.DR_ATTRIBUTES);
                    var isAttr = element_3.getAttributeNames().filter(function (it) { return targetAttrNames_1.includes(it.toLowerCase()); }).length > 0;
                    return (isAttr || isElement) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                }
                return NodeFilter.FILTER_REJECT;
            }
        });
        var pars = [];
        var currentNode;
        var _loop_1 = function () {
            if (currentNode.nodeType === Node.TEXT_NODE) {
                var text = (_a = currentNode.textContent) !== null && _a !== void 0 ? _a : '';
                var template_1 = document.createElement('template');
                var a = RawSet.exporesionGrouops(text);
                var map = a.map(function (it) {
                    return {
                        uuid: RandomUtils.uuid(),
                        content: it[0],
                        regexArr: it
                    };
                });
                var lasterIndex_1 = 0;
                map.forEach(function (it) {
                    var regexArr = it.regexArr;
                    var preparedText = regexArr.input.substring(lasterIndex_1, regexArr.index);
                    var start = document.createComment("start text " + it.uuid);
                    var end = document.createComment("end text " + it.uuid);
                    template_1.content.append(document.createTextNode(preparedText));
                    template_1.content.append(start);
                    template_1.content.append(end);
                    var fragment = document.createDocumentFragment();
                    fragment.append(document.createTextNode(it.content));
                    pars.push(new RawSet(it.uuid, {
                        start: start,
                        end: end
                    }, fragment));
                    lasterIndex_1 = regexArr.index + it.content.length;
                });
                template_1.content.append(document.createTextNode(text.substring(lasterIndex_1, text.length)));
                (_b = currentNode === null || currentNode === void 0 ? void 0 : currentNode.parentNode) === null || _b === void 0 ? void 0 : _b.replaceChild(template_1.content, currentNode);
            }
            else {
                var uuid = RandomUtils.uuid();
                var fragment = document.createDocumentFragment();
                var start = document.createComment("start " + uuid);
                var end = document.createComment("end " + uuid);
                (_c = currentNode === null || currentNode === void 0 ? void 0 : currentNode.parentNode) === null || _c === void 0 ? void 0 : _c.insertBefore(start, currentNode);
                (_d = currentNode === null || currentNode === void 0 ? void 0 : currentNode.parentNode) === null || _d === void 0 ? void 0 : _d.insertBefore(end, currentNode.nextSibling);
                fragment.append(currentNode);
                pars.push(new RawSet(uuid, {
                    start: start,
                    end: end
                }, fragment));
            }
        };
        while (currentNode = nodeIterator.nextNode()) {
            _loop_1();
        }
        return pars;
    };
    RawSet.prototype.childAllRemove = function () {
        var next = this.point.start.nextSibling;
        while (next) {
            if (next === this.point.end) {
                break;
            }
            next.remove();
            next = this.point.start.nextSibling;
        }
    };
    RawSet.drItOtherEncoding = function (element) {
        var random = RandomUtils.uuid();
        var regex = /#it#/g;
        element.querySelectorAll("[" + RawSet.DR_IT_OPTIONNAME + "], [" + RawSet.DR_FOR_OF_NAME + "], [" + RawSet.DR_REPEAT_NAME + "]").forEach(function (it) {
            it.innerHTML = it.innerHTML.replace(regex, random);
        });
        return random;
    };
    RawSet.drItOtherDecoding = function (element, random) {
        element.querySelectorAll("[" + RawSet.DR_IT_OPTIONNAME + "], [" + RawSet.DR_FOR_OF_NAME + "], [" + RawSet.DR_REPEAT_NAME + "]").forEach(function (it) {
            it.innerHTML = it.innerHTML.replace(RegExp(random, 'g'), '#it#');
        });
    };
    RawSet.drThisEncoding = function (element, drThis) {
        var thisRandom = RandomUtils.uuid();
        element.querySelectorAll("[" + RawSet.DR_PRE_NAME + "]").forEach(function (it) {
            it.innerHTML = it.innerHTML.replace(/this/g, thisRandom);
        });
        element.querySelectorAll("[" + RawSet.DR_THIS_NAME + "]").forEach(function (it) {
            var message = it.innerHTML;
            StringUtils.regexExec(/([^(dr\-)])?this(?=.?)/g, message).reverse().forEach(function (it) {
                var _a;
                message = message.substr(0, it.index) + message.substr(it.index).replace(it[0], "" + ((_a = it[1]) !== null && _a !== void 0 ? _a : '') + drThis);
            });
            it.innerHTML = message;
        });
        var message = element.innerHTML;
        StringUtils.regexExec(/([^(dr\-)])?this(?=.?)/g, message).reverse().forEach(function (it) {
            var _a;
            message = message.substr(0, it.index) + message.substr(it.index).replace(it[0], "" + ((_a = it[1]) !== null && _a !== void 0 ? _a : '') + drThis);
        });
        element.innerHTML = message;
        return thisRandom;
    };
    RawSet.drThisDecoding = function (element, thisRandom) {
        element.querySelectorAll("[" + RawSet.DR_PRE_NAME + "]").forEach(function (it) {
            it.innerHTML = it.innerHTML.replace(RegExp(thisRandom, 'g'), 'this');
        });
        element.querySelectorAll("[" + RawSet.DR_THIS_NAME + "]").forEach(function (it) {
            it.innerHTML = it.innerHTML.replace(RegExp(thisRandom, 'g'), 'this');
        });
    };
    RawSet.drFormOtherMoveAttr = function (element, as, to) {
        element.querySelectorAll("[" + RawSet.DR_FORM_NAME + "]").forEach(function (subElement) {
            var _a;
            var nodeIterator = document.createNodeIterator(subElement, NodeFilter.SHOW_ELEMENT, {
                acceptNode: function (node) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        var element_4 = node;
                        return element_4.hasAttribute(as) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
                    }
                    else {
                        return NodeFilter.FILTER_REJECT;
                    }
                }
            });
            var node;
            while (node = nodeIterator.nextNode()) {
                var element_5 = node;
                element_5.setAttribute(to, (_a = element_5.getAttribute(as)) !== null && _a !== void 0 ? _a : '');
                element_5.removeAttribute(as);
            }
        });
    };
    RawSet.drVarEncoding = function (element, drVarOption) {
        var _a;
        var vars = ((_a = drVarOption === null || drVarOption === void 0 ? void 0 : drVarOption.split(',')) !== null && _a !== void 0 ? _a : []).map(function (it) {
            var _a, _b;
            var s = it.trim().split('=');
            var name = (_a = s[0]) === null || _a === void 0 ? void 0 : _a.trim();
            var value = (_b = s[1]) === null || _b === void 0 ? void 0 : _b.trim();
            return {
                name: name,
                value: value,
                regex: RegExp('\\$var\\.' + name + '(?=.?)', 'g'),
                random: RandomUtils.uuid()
            };
        });
        element.querySelectorAll("[" + RawSet.DR_VAR_OPTIONNAME + "]").forEach(function (it) {
            vars.filter(function (vit) { return vit.value && vit.name; }).forEach(function (vit) {
                it.innerHTML = it.innerHTML.replace(vit.regex, vit.random);
            });
        });
        vars.filter(function (vit) { return vit.value && vit.name; }).forEach(function (vit) {
            element.innerHTML = element.innerHTML.replace(vit.regex, vit.value);
        });
        return vars;
    };
    RawSet.drVarDecoding = function (element, vars) {
        element.querySelectorAll("[" + RawSet.DR_THIS_NAME + "]").forEach(function (it) {
            vars.filter(function (vit) { return vit.value && vit.name; }).forEach(function (vit) {
                it.innerHTML = it.innerHTML.replace(RegExp(vit.random, 'g'), vit.value);
            });
        });
    };
    RawSet.drThisCreate = function (element, drThis, drVarOption, drStripOption, obj) {
        var fag = document.createDocumentFragment();
        var n = element.cloneNode(true);
        var thisRandom = this.drThisEncoding(n, drThis);
        var vars = this.drVarEncoding(n, drVarOption);
        this.drVarDecoding(n, vars);
        this.drThisDecoding(n, thisRandom);
        if (drStripOption) {
            Array.from(n.childNodes).forEach(function (it) { return fag.append(it); });
        }
        else {
            fag.append(n);
        }
        return fag;
    };
    RawSet.setBindProperty = function (scripts, obj) {
        var e_1, _a;
        if (scripts) {
            var newScripts = Object.assign({}, scripts);
            try {
                for (var _b = __values(Object.entries(newScripts)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                    if (typeof value === 'function') {
                        newScripts[key] = value.bind(obj);
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
            return newScripts;
        }
    };
    RawSet.createComponentTargetElement = function (name, objFactory, template, styles, scripts) {
        if (template === void 0) { template = ''; }
        if (styles === void 0) { styles = []; }
        var targetElement = {
            name: name,
            styles: styles,
            template: template,
            callBack: function (element, obj, rawSet) {
                var _a;
                if (!obj.__domrender_components) {
                    obj.__domrender_components = {};
                }
                var domrenderComponents = obj.__domrender_components;
                var componentKey = '_' + RandomUtils.getRandomString(20);
                domrenderComponents[componentKey] = objFactory(element, obj, rawSet);
                var instance = domrenderComponents[componentKey];
                var oninit = element.getAttribute('dr-on-init');
                if (oninit) {
                    var attribute_1 = {};
                    element.getAttributeNames().forEach(function (it) {
                        attribute_1[it] = element.getAttribute(it);
                    });
                    var script = "var $component = this.__render.component; var $element = this.__render.$element; var $innerHTML = this.__render.$innerHTML; var $attribute = this.__render.$attribute;  " + oninit + " ";
                    ScriptUtils.eval(script, Object.assign(obj, {
                        __render: Object.freeze({
                            component: instance,
                            element: element,
                            innerHTML: element.innerHTML,
                            attribute: attribute_1,
                            rawset: rawSet,
                            scripts: RawSet.setBindProperty(scripts, obj)
                        })
                    }));
                }
                var fag = document.createDocumentFragment();
                var innerHTML = ((_a = styles === null || styles === void 0 ? void 0 : styles.map(function (it) { return "<style>" + it + "</style>"; })) !== null && _a !== void 0 ? _a : []).join(' ') + (template !== null && template !== void 0 ? template : '');
                element.innerHTML = innerHTML;
                fag.append(RawSet.drThisCreate(element, "this.__domrender_components." + componentKey, '', true, obj));
                return fag;
            }
        };
        return targetElement;
    };
    RawSet.exporesionGrouops = function (data) {
        var reg = /(?:[$#]\{(?:(([$#]\{)??[^$#]*?)\}[$#]))/g;
        return StringUtils.regexExec(reg, data);
    };
    RawSet.DR = 'dr';
    RawSet.DR_IF_NAME = 'dr-if';
    RawSet.DR_FOR_OF_NAME = 'dr-for-of';
    RawSet.DR_FOR_NAME = 'dr-for';
    RawSet.DR_REPEAT_NAME = 'dr-repeat';
    RawSet.DR_THIS_NAME = 'dr-this';
    RawSet.DR_FORM_NAME = 'dr-form';
    RawSet.DR_PRE_NAME = 'dr-pre';
    RawSet.DR_INNERHTML_NAME = 'dr-inner-html';
    RawSet.DR_INNERTEXT_NAME = 'dr-inner-text';
    RawSet.DR_TAGS = [];
    RawSet.DR_IT_OPTIONNAME = 'dr-it';
    RawSet.DR_AFTER_OPTIONNAME = 'dr-after';
    RawSet.DR_BEFORE_OPTIONNAME = 'dr-before';
    RawSet.DR_COMPLETE_OPTIONNAME = 'dr-complete';
    RawSet.DR_VAR_OPTIONNAME = 'dr-var';
    RawSet.DR_STRIP_OPTIONNAME = 'dr-strip';
    RawSet.DR_ATTRIBUTES = [RawSet.DR, RawSet.DR_IF_NAME, RawSet.DR_FOR_OF_NAME, RawSet.DR_FOR_NAME, RawSet.DR_THIS_NAME, RawSet.DR_FORM_NAME, RawSet.DR_PRE_NAME, RawSet.DR_INNERHTML_NAME, RawSet.DR_INNERTEXT_NAME, RawSet.DR_REPEAT_NAME];
    return RawSet;
}());

var RawSet$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    RawSet: RawSet
});

var Shield = (function () {
    function Shield() {
    }
    return Shield;
}());

var excludeGetSetPropertys = ['onBeforeReturnGet', 'onBeforeReturnSet', '__domrender_components', '__render', '_DomRender_isFinal', '_domRender_ref', '_rawSets', '_domRender_proxy', '_targets', '_DomRender_origin', '_DomRender_ref', '_DomRender_proxy'];
var DomRenderProxy = (function () {
    function DomRenderProxy(_domRender_origin, target, config) {
        this._domRender_origin = _domRender_origin;
        this.config = config;
        this._domRender_ref = new Map();
        this._rawSets = new Map();
        this._targets = new Set();
        if (target) {
            this._targets.add(target);
        }
    }
    DomRenderProxy.unFinal = function (obj) {
        delete obj._DomRender_isFinal;
        return obj;
    };
    DomRenderProxy.final = function (obj) {
        obj._DomRender_isFinal = true;
        return obj;
    };
    DomRenderProxy.isFinal = function (obj) {
        return '_DomRender_isFinal' in obj;
    };
    DomRenderProxy.prototype.run = function (objProxy) {
        var _this = this;
        this._domRender_proxy = objProxy;
        var obj = objProxy._DomRender_origin;
        if (obj) {
            Object.keys(obj).forEach(function (it) {
                var _a, _b, _c;
                var target = obj[it];
                if (target !== undefined && target !== null && typeof target === 'object' && !DomRenderProxy.isFinal(target) && !Object.isFrozen(target) && !(obj instanceof Shield)) {
                    var filter = (_c = (_b = (_a = _this.config) === null || _a === void 0 ? void 0 : _a.proxyExcludeTyps) === null || _b === void 0 ? void 0 : _b.filter(function (it) { return target instanceof it; })) !== null && _c !== void 0 ? _c : [];
                    if (filter.length === 0) {
                        var proxyAfter = _this.proxy(objProxy, target, it);
                        obj[it] = proxyAfter;
                    }
                }
            });
        }
        this._targets.forEach(function (target) {
            _this.initRender(target);
        });
    };
    DomRenderProxy.prototype.initRender = function (target) {
        var _this = this;
        var _a, _b;
        this._targets.add(target);
        var rawSets = RawSet.checkPointCreates(target, this.config);
        eventManager.applyEvent(this._domRender_proxy, eventManager.findAttrElements(target, this.config), this.config);
        rawSets.forEach(function (it) {
            var strings = it.getUsingTriggerVariables(_this.config);
            if (strings.size <= 0) {
                _this.addRawSet('', it);
            }
            else {
                strings.forEach(function (sit) {
                    _this.addRawSet(sit, it);
                });
            }
        });
        this.render(this.getRawSets());
        (_b = (_a = this._domRender_proxy) === null || _a === void 0 ? void 0 : _a.onInitRender) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    DomRenderProxy.prototype.getRawSets = function () {
        var set = new Set();
        this._rawSets.forEach(function (v, k) {
            v.forEach(function (it) { return set.add(it); });
        });
        return Array.from(set);
    };
    DomRenderProxy.prototype.render = function (raws) {
        var _this = this;
        (raws !== null && raws !== void 0 ? raws : this.getRawSets()).forEach(function (it) {
            it.getUsingTriggerVariables(_this.config).forEach(function (path) { return _this.addRawSet(path, it); });
            if (it.point.start.isConnected && it.point.start.isConnected) {
                var rawSets = it.render(_this._domRender_proxy, _this.config);
                _this.render(rawSets);
            }
            else {
                _this.removeRawSet(it);
            }
        });
    };
    DomRenderProxy.prototype.root = function (paths, value, lastDoneExecute) {
        var _this = this;
        if (lastDoneExecute === void 0) { lastDoneExecute = true; }
        var fullPaths = [];
        if (this._domRender_ref.size > 0) {
            this._domRender_ref.forEach(function (it, key) {
                if ('_DomRender_isProxy' in key) {
                    it.forEach(function (sit) {
                        var _a;
                        var items = (_a = key._DomRender_proxy) === null || _a === void 0 ? void 0 : _a.root(paths.concat(sit), value, lastDoneExecute);
                        fullPaths.push(items.join(','));
                    });
                }
            });
        }
        else {
            var strings = paths.reverse();
            var fullPathStr_1 = strings.join('.');
            if (lastDoneExecute) {
                var iterable = this._rawSets.get(fullPathStr_1);
                var front = strings.slice(0, strings.length - 1).join('.');
                var last = strings[strings.length - 1];
                if (!isNaN(Number(last)) && Array.isArray(ScriptUtils.evalReturn('this.' + front, this._domRender_proxy))) {
                    var aIterable = this._rawSets.get(front);
                    if (aIterable) {
                        this.render(Array.from(aIterable));
                    }
                }
                else if (iterable) {
                    this.render(Array.from(iterable));
                }
                this._targets.forEach(function (it) {
                    if (it.nodeType === Node.DOCUMENT_FRAGMENT_NODE || it.nodeType === Node.ELEMENT_NODE) {
                        var targets = eventManager.findAttrElements(it, _this.config);
                        eventManager.changeVar(_this._domRender_proxy, targets, "this." + fullPathStr_1);
                    }
                });
            }
            fullPaths.push(fullPathStr_1);
        }
        return fullPaths;
    };
    DomRenderProxy.prototype.set = function (target, p, value, receiver) {
        var _a, _b, _c, _d;
        if (typeof p === 'string') {
            value = this.proxy(receiver, value, p);
        }
        target[p] = value;
        var fullPath;
        if (typeof p === 'string') {
            fullPath = this.root([p], value);
        }
        if (('onBeforeReturnSet' in receiver) && typeof p === 'string' && !((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.proxyExcludeOnBeforeReturnSets) !== null && _b !== void 0 ? _b : []).concat(excludeGetSetPropertys).includes(p)) {
            (_d = (_c = receiver) === null || _c === void 0 ? void 0 : _c.onBeforeReturnSet) === null || _d === void 0 ? void 0 : _d.call(_c, p, value, fullPath);
        }
        return true;
    };
    DomRenderProxy.prototype.get = function (target, p, receiver) {
        var _a, _b, _c, _d;
        if (p === '_DomRender_origin') {
            return this._domRender_origin;
        }
        else if (p === '_DomRender_ref') {
            return this._domRender_ref;
        }
        else if (p === '_DomRender_proxy') {
            return this;
        }
        else {
            var it_1 = target[p];
            if (it_1 && typeof it_1 === 'object' && ('_DomRender_isProxy' in it_1) && Object.prototype.toString.call(it_1._DomRender_origin) === '[object Date]') {
                it_1 = it_1._DomRender_origin;
            }
            if (('onBeforeReturnGet' in receiver) && typeof p === 'string' && !((_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.proxyExcludeOnBeforeReturnGets) !== null && _b !== void 0 ? _b : []).concat(excludeGetSetPropertys).includes(p)) {
                (_d = (_c = receiver) === null || _c === void 0 ? void 0 : _c.onBeforeReturnGet) === null || _d === void 0 ? void 0 : _d.call(_c, p, it_1, this.root([p], it_1, false));
            }
            return it_1;
        }
    };
    DomRenderProxy.prototype.has = function (target, p) {
        return p === '_DomRender_isProxy' || p in target;
    };
    DomRenderProxy.prototype.proxy = function (parentProxy, obj, p) {
        var _a, _b, _c;
        var proxyTarget = ((_c = (_b = (_a = this.config) === null || _a === void 0 ? void 0 : _a.proxyExcludeTyps) === null || _b === void 0 ? void 0 : _b.filter(function (it) { return obj instanceof it; })) !== null && _c !== void 0 ? _c : []).length <= 0;
        if (proxyTarget && obj !== undefined && obj !== null && typeof obj === 'object' && !('_DomRender_isProxy' in obj) && !DomRenderProxy.isFinal(obj) && !Object.isFrozen(obj) && !(obj instanceof Shield)) {
            var domRender = new DomRenderProxy(obj, undefined, this.config);
            domRender.addRef(parentProxy, p);
            var proxy = new Proxy(obj, domRender);
            domRender.run(proxy);
            return proxy;
        }
        if (proxyTarget && obj !== undefined && obj !== null && typeof obj === 'object' && ('_DomRender_isProxy' in obj) && !DomRenderProxy.isFinal(obj) && !Object.isFrozen(obj) && !(obj instanceof Shield)) {
            var d = obj._DomRender_proxy;
            d.addRef(this._domRender_proxy, p);
            return obj;
        }
        else {
            return obj;
        }
    };
    DomRenderProxy.prototype.addRef = function (parent, path) {
        var _a;
        if (!this._domRender_ref.get(parent)) {
            this._domRender_ref.set(parent, new Set());
        }
        (_a = this._domRender_ref.get(parent)) === null || _a === void 0 ? void 0 : _a.add(path);
    };
    DomRenderProxy.prototype.addRawSetAndRender = function (path, rawSet) {
        this.addRawSet(path, rawSet);
        this.render([rawSet]);
    };
    DomRenderProxy.prototype.addRawSet = function (path, rawSet) {
        var _a;
        if (!this._rawSets.get(path)) {
            this._rawSets.set(path, new Set());
        }
        (_a = this._rawSets.get(path)) === null || _a === void 0 ? void 0 : _a.add(rawSet);
    };
    DomRenderProxy.prototype.removeRawSet = function (raws) {
        this._rawSets.forEach(function (it) {
            it.delete(raws);
        });
        this.garbageRawSet();
    };
    DomRenderProxy.prototype.garbageRawSet = function () {
        var _this = this;
        this._targets.forEach(function (it) {
            if (!it.isConnected) {
                _this._targets.delete(it);
            }
        });
        this._rawSets.forEach(function (it) {
            it.forEach(function (sit) {
                if (!sit.isConnected) {
                    it.delete(sit);
                }
            });
        });
    };
    return DomRenderProxy;
}());

var DomRender = (function () {
    function DomRender() {
    }
    DomRender.run = function (obj, target, config) {
        var robj = obj;
        if ('_DomRender_isProxy' in obj) {
            if (target) {
                obj._DomRender_proxy.initRender(target);
            }
            robj = obj;
            return robj;
        }
        var domRender = new DomRenderProxy(obj, target, config);
        var dest = new Proxy(obj, domRender);
        robj = dest;
        domRender.run(robj);
        return robj;
    };
    return DomRender;
}());

var DomRender$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DomRender: DomRender
});

var SimGlobal_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimGlobal = void 0;
var g = new (function () {
    function class_1() {
        this.storage = new Set();
        this.data = {};
    }
    Object.defineProperty(class_1.prototype, "application", {
        get: function () {
            return this._application;
        },
        set: function (application) {
            this._application = application;
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}())();
if (commonjsGlobal) {
    commonjsGlobal.SimGlobal = g;
}
else if (window) {
    window.SimGlobal = g;
}
var SimGlobal = function () {
    if (commonjsGlobal) {
        return commonjsGlobal.SimGlobal;
    }
    else if (window) {
        return window.SimGlobal;
    }
    else {
        return g;
    }
};
exports.SimGlobal = SimGlobal;
});

unwrapExports(SimGlobal_1);
SimGlobal_1.SimGlobal;

var SimDecorator = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostConstruct = exports.PostConstruct = exports.getRouter = exports.Router = exports.RouterMetadataKey = exports.getSim = exports.Sim = exports.SimMetadataKey = void 0;


exports.SimMetadataKey = Symbol('Sim');
var Sim = function (config) {
    if (config === void 0) { config = {}; }
    return function (target) {
        ReflectUtils_1.ReflectUtils.defineMetadata(exports.SimMetadataKey, config, target);
        SimGlobal_1.SimGlobal().storage.add(target);
    };
};
exports.Sim = Sim;
var getSim = function (target) {
    if (typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils_1.ReflectUtils.getMetadata(exports.SimMetadataKey, target);
    }
    catch (e) { }
};
exports.getSim = getSim;
exports.RouterMetadataKey = Symbol('Router');
var Router = function (config) {
    return function (target) {
        ReflectUtils_1.ReflectUtils.defineMetadata(exports.RouterMetadataKey, config, target);
    };
};
exports.Router = Router;
var getRouter = function (target) {
    if (typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils_1.ReflectUtils.getMetadata(exports.RouterMetadataKey, target);
    }
    catch (e) { }
};
exports.getRouter = getRouter;
var PostConstructMetadataKey = Symbol('PostConstruct');
var PostConstruct = function (target, propertyKey, descriptor) {
    ReflectUtils_1.ReflectUtils.defineMetadata(PostConstructMetadataKey, PostConstructMetadataKey, target, propertyKey);
};
exports.PostConstruct = PostConstruct;
var getPostConstruct = function (target, propertyKey) {
    return ReflectUtils_1.ReflectUtils.getMetadata(PostConstructMetadataKey, target, propertyKey);
};
exports.getPostConstruct = getPostConstruct;
});

unwrapExports(SimDecorator);
SimDecorator.getPostConstruct;
SimDecorator.PostConstruct;
var SimDecorator_3 = SimDecorator.getRouter;
var SimDecorator_4 = SimDecorator.Router;
SimDecorator.RouterMetadataKey;
SimDecorator.getSim;
var SimDecorator_7 = SimDecorator.Sim;
SimDecorator.SimMetadataKey;

var SimAtomic_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimAtomic = void 0;



var SimAtomic = (function () {
    function SimAtomic(type, simstanceManager) {
        if (simstanceManager === void 0) { simstanceManager = (_a = SimGlobal_1.SimGlobal().application) === null || _a === void 0 ? void 0 : _a.simstanceManager; }
        var _a;
        this.type = type;
        this.simstanceManager = simstanceManager;
    }
    SimAtomic.prototype.getConfig = function (key) {
        if (key === void 0) { key = SimDecorator.SimMetadataKey; }
        return ReflectUtils_1.ReflectUtils.getMetadata(key, this.type);
    };
    SimAtomic.prototype.getConfigs = function () {
        return ReflectUtils_1.ReflectUtils.getMetadatas(this.type);
    };
    Object.defineProperty(SimAtomic.prototype, "value", {
        get: function () {
            var _a;
            return (_a = this.simstanceManager) === null || _a === void 0 ? void 0 : _a.getOrNewSim(this.type);
        },
        enumerable: false,
        configurable: true
    });
    return SimAtomic;
}());
exports.SimAtomic = SimAtomic;
});

unwrapExports(SimAtomic_1);
SimAtomic_1.SimAtomic;

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect$1;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof commonjsGlobal === "object" ? commonjsGlobal :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect$1 || (Reflect$1 = {}));

var SimError_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimError = void 0;
var SimError = (function () {
    function SimError(message, name, stack) {
        this.message = message;
        this.name = name;
        this.stack = stack;
    }
    return SimError;
}());
exports.SimError = SimError;
});

unwrapExports(SimError_1);
SimError_1.SimError;

var SimNoSuch_1 = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimNoSuch = void 0;

var SimNoSuch = (function (_super) {
    __extends(SimNoSuch, _super);
    function SimNoSuch(message, name, stack) {
        return _super.call(this, message, name, stack) || this;
    }
    return SimNoSuch;
}(SimError_1.SimError));
exports.SimNoSuch = SimNoSuch;
});

unwrapExports(SimNoSuch_1);
SimNoSuch_1.SimNoSuch;

var ObjectUtils_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectUtils = void 0;
var ObjectUtils = (function () {
    function ObjectUtils() {
    }
    ObjectUtils.getAllProtoTypeName = function (target) {
        var data = [];
        if (target) {
            var proto = Object.getPrototypeOf(target);
            if (proto && (data = Object.keys(proto) || []).length > 0) {
                data = data.concat(this.getAllProtoTypeName(proto));
            }
        }
        return data.filter(function (it) { return it !== 'constructor'; });
    };
    ObjectUtils.getProtoTypeName = function (target) {
        var data = [];
        if (target) {
            var proto = Object.getPrototypeOf(target);
            data = Object.keys(proto) || [];
        }
        return data.filter(function (it) { return it !== 'constructor'; });
    };
    ObjectUtils.getProtoTypes = function (target) {
        var data = [];
        if (target) {
            var proto_1 = Object.getPrototypeOf(target);
            (Object.keys(proto_1) || []).filter(function (it) { return it !== 'constructor'; }).forEach(function (it) {
                data.push(proto_1[it]);
            });
        }
        return data;
    };
    ObjectUtils.seal = function (target) {
        return Object.seal(target);
    };
    ObjectUtils.isPrototypeOfTarget = function (start, target) {
        if (start && target) {
            return Object.prototype.isPrototypeOf.call(start.prototype, target);
        }
        else {
            return false;
        }
    };
    ObjectUtils.getAllProtoType = function (start) {
        var protos = [];
        while (start) {
            protos.push(start);
            start = Object.getPrototypeOf(start);
        }
        return protos;
    };
    ObjectUtils.getPrototypeOf = function (start) {
        return Object.getPrototypeOf(start);
    };
    ObjectUtils.getPrototypeKeyMap = function (target) {
        var data = new Map();
        var proto = Object.getPrototypeOf(target);
        (Object.keys(proto) || []).filter(function (it) { return it !== 'constructor'; }).forEach(function (it) {
            data.set(proto[it], it);
        });
        return data;
    };
    ObjectUtils.getPrototypeName = function (target, fnc) {
        return this.getPrototypeKeyMap(target).get(fnc);
    };
    return ObjectUtils;
}());
exports.ObjectUtils = ObjectUtils;
});

unwrapExports(ObjectUtils_1);
ObjectUtils_1.ObjectUtils;

var FunctionUtils_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionUtils = void 0;
var FunctionUtils = (function () {
    function FunctionUtils() {
    }
    FunctionUtils.getParameterNames = function (func, property) {
        var _a, _b;
        if (typeof func === 'object' && property) {
            func = func[property];
        }
        return (_b = (_a = new RegExp('(?:' + func.name + '\\s*|^)\\s*\\((.*?)\\)')
            .exec(func.toString().replace(/\n/g, ''))) === null || _a === void 0 ? void 0 : _a[1].replace(/\/\*.*?\*\//g, '').replace(/ /g, '').split(',')) !== null && _b !== void 0 ? _b : [];
    };
    FunctionUtils.eval = function (script, obj) {
        try {
            if (script && obj) {
                return Function("\"use strict\";\n                    " + script + "\n                    ").bind(obj)();
            }
            else if (script) {
                return (new Function('return ' + script))();
            }
            else {
                return null;
            }
        }
        catch (e) {
            return null;
        }
    };
    return FunctionUtils;
}());
exports.FunctionUtils = FunctionUtils;
});

unwrapExports(FunctionUtils_1);
FunctionUtils_1.FunctionUtils;

var Inject_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInject = exports.Inject = void 0;


var InjectMetadataKey = Symbol('Inject');
var Inject = function (type) {
    return function (target, propertyKey, parameterIndex) {
        if (!propertyKey || typeof target === 'function') {
            propertyKey = FunctionUtils_1.FunctionUtils.getParameterNames(target)[parameterIndex];
        }
        else if (propertyKey && typeof target === 'object') {
            target = target[propertyKey];
            propertyKey = FunctionUtils_1.FunctionUtils.getParameterNames(target)[parameterIndex];
        }
        ReflectUtils_1.ReflectUtils.defineMetadata(InjectMetadataKey, type, target, propertyKey);
    };
};
exports.Inject = Inject;
var getInject = function (target, propertyKey) {
    if (typeof target === 'object') {
        target = target.constructor;
    }
    try {
        return ReflectUtils_1.ReflectUtils.getMetadata(InjectMetadataKey, target, propertyKey);
    }
    catch (e) {
    }
};
exports.getInject = getInject;
});

unwrapExports(Inject_1);
Inject_1.getInject;
Inject_1.Inject;

var MetaDataAtomic_1 = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaDataPropertyAtomic = exports.MetaDataAtomic = void 0;
var MetaDataAtomic = (function () {
    function MetaDataAtomic(target, metaData) {
        this.target = target;
        this.metaData = metaData;
    }
    return MetaDataAtomic;
}());
exports.MetaDataAtomic = MetaDataAtomic;
var MetaDataPropertyAtomic = (function (_super) {
    __extends(MetaDataPropertyAtomic, _super);
    function MetaDataPropertyAtomic(target, metaData, property, parameter) {
        var _this = _super.call(this, target, metaData) || this;
        _this.property = property;
        _this.parameter = parameter;
        return _this;
    }
    MetaDataPropertyAtomic.prototype.call = function () {
        var _a;
        var parameter = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parameter[_i] = arguments[_i];
        }
        return (_a = this.target)[this.property].apply(_a, parameter);
    };
    return MetaDataPropertyAtomic;
}(MetaDataAtomic));
exports.MetaDataPropertyAtomic = MetaDataPropertyAtomic;
});

unwrapExports(MetaDataAtomic_1);
MetaDataAtomic_1.MetaDataPropertyAtomic;
MetaDataAtomic_1.MetaDataAtomic;

var ExceptionDecorator = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTargetAndIncludeNullAndSortExceptionHandlers = exports.getExceptionHandlers = exports.getExceptionHandler = exports.ExceptionHandler = void 0;



var ExceptionHandlerMetadataKey = Symbol('ExceptionHandler');
var ExceptionHandler = function (target) {
    return ReflectUtils_1.ReflectUtils.metadata(ExceptionHandlerMetadataKey, target !== null && target !== void 0 ? target : null);
};
exports.ExceptionHandler = ExceptionHandler;
var getExceptionHandler = function (target, propertyKey) {
    return ReflectUtils_1.ReflectUtils.getMetadata(ExceptionHandlerMetadataKey, target, propertyKey);
};
exports.getExceptionHandler = getExceptionHandler;
var getExceptionHandlers = function (target) {
    return ObjectUtils_1.ObjectUtils.getAllProtoTypeName(target)
        .map(function (it) { return new MetaDataAtomic_1.MetaDataPropertyAtomic(target, exports.getExceptionHandler(target, it), it, ReflectUtils_1.ReflectUtils.getParameterTypes(target, it)); })
        .filter(function (it) { return it.metaData !== undefined; }) || [];
};
exports.getExceptionHandlers = getExceptionHandlers;
var getTargetAndIncludeNullAndSortExceptionHandlers = function (target, error) {
    return exports.getExceptionHandlers(target).filter(function (it) { return it.metaData == null || ObjectUtils_1.ObjectUtils.isPrototypeOfTarget(it.metaData, error); })
        .sort(function (a, b) { return ObjectUtils_1.ObjectUtils.getAllProtoType(a.metaData).length - ObjectUtils_1.ObjectUtils.getAllProtoType(b.metaData).length; });
};
exports.getTargetAndIncludeNullAndSortExceptionHandlers = getTargetAndIncludeNullAndSortExceptionHandlers;
});

unwrapExports(ExceptionDecorator);
ExceptionDecorator.getTargetAndIncludeNullAndSortExceptionHandlers;
ExceptionDecorator.getExceptionHandlers;
ExceptionDecorator.getExceptionHandler;
ExceptionDecorator.ExceptionHandler;

var AOPDecorator = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProtoBefores = exports.getBefores = exports.getBefore = exports.Before = exports.getProtoAfters = exports.getAfters = exports.getAfter = exports.After = void 0;



var AfterMetadataKey = Symbol('After');
var BeforeMetadataKey = Symbol('Before');
var After = function (data) {
    return ReflectUtils_1.ReflectUtils.metadata(AfterMetadataKey, data);
};
exports.After = After;
var getAfter = function (target, propertyKey) {
    return ReflectUtils_1.ReflectUtils.getMetadata(AfterMetadataKey, target, propertyKey);
};
exports.getAfter = getAfter;
var getAfters = function (target) {
    return ObjectUtils_1.ObjectUtils.getAllProtoTypeName(target)
        .map(function (it) { return new MetaDataAtomic_1.MetaDataPropertyAtomic(target, exports.getAfter(target, it), it); })
        .filter(function (it) { return it.metaData !== undefined; }) || [];
};
exports.getAfters = getAfters;
var getProtoAfters = function (target, propertyKey, type) {
    return exports.getAfters(target).filter(function (it) { var _a; return propertyKey === it.metaData.property && type === ((_a = it.metaData.type) === null || _a === void 0 ? void 0 : _a.prototype); }) || [];
};
exports.getProtoAfters = getProtoAfters;
var Before = function (data) {
    return ReflectUtils_1.ReflectUtils.metadata(BeforeMetadataKey, data);
};
exports.Before = Before;
var getBefore = function (target, propertyKey) {
    return ReflectUtils_1.ReflectUtils.getMetadata(BeforeMetadataKey, target, propertyKey);
};
exports.getBefore = getBefore;
var getBefores = function (target) {
    return ObjectUtils_1.ObjectUtils.getAllProtoTypeName(target)
        .map(function (it) { return new MetaDataAtomic_1.MetaDataPropertyAtomic(target, exports.getBefore(target, it), it); })
        .filter(function (it) { return it.metaData !== undefined; }) || [];
};
exports.getBefores = getBefores;
var getProtoBefores = function (target, propertyKey, type) {
    return exports.getBefores(target).filter(function (it) { var _a; return propertyKey === it.metaData.property && type === ((_a = it.metaData.type) === null || _a === void 0 ? void 0 : _a.prototype); }) || [];
};
exports.getProtoBefores = getProtoBefores;
});

unwrapExports(AOPDecorator);
AOPDecorator.getProtoBefores;
AOPDecorator.getBefores;
AOPDecorator.getBefore;
AOPDecorator.Before;
AOPDecorator.getProtoAfters;
AOPDecorator.getAfters;
AOPDecorator.getAfter;
AOPDecorator.After;

var SimProxyHandler_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimProxyHandler = void 0;



var SimProxyHandler = (function () {
    function SimProxyHandler(simstanceManager, simOption) {
        this.simstanceManager = simstanceManager;
        this.simOption = simOption;
    }
    SimProxyHandler.prototype.get = function (target, name) {
        return target[name];
    };
    SimProxyHandler.prototype.set = function (obj, prop, value, receiver) {
        var _a;
        value = (_a = this.simstanceManager) === null || _a === void 0 ? void 0 : _a.proxy(value);
        obj[prop] = value;
        return true;
    };
    SimProxyHandler.prototype.apply = function (target, thisArg, argumentsList) {
        var _a;
        var r;
        try {
            this.aopBefore(thisArg, target);
            r = target.apply(thisArg, argumentsList);
            this.aopAfter(thisArg, target);
        }
        catch (e) {
            var inHandler = ExceptionDecorator.getTargetAndIncludeNullAndSortExceptionHandlers(thisArg, e);
            if (inHandler.length > 0) {
                inHandler[inHandler.length - 1].call(e, thisArg, target, argumentsList);
            }
            else {
                for (var i = 0; i < this.simOption.advice.length; i++) {
                    var sim = (_a = this.simstanceManager) === null || _a === void 0 ? void 0 : _a.getOrNewSim(this.simOption.advice[i]);
                    var inHandler_1 = ExceptionDecorator.getTargetAndIncludeNullAndSortExceptionHandlers(sim, e);
                    if (inHandler_1.length > 0) {
                        inHandler_1[inHandler_1.length - 1].call(e, thisArg, target, argumentsList);
                        break;
                    }
                }
            }
            console.error(e);
        }
        return r;
    };
    SimProxyHandler.prototype.aopBefore = function (obj, protoType) {
        var _a;
        var propertyName = ObjectUtils_1.ObjectUtils.getPrototypeName(obj, protoType);
        if (propertyName) {
            AOPDecorator.getProtoBefores(obj, propertyName).forEach(function (it) {
                it.call(obj, protoType, propertyName);
            });
            for (var i = 0; i < this.simOption.advice.length; i++) {
                var sim = (_a = this.simstanceManager) === null || _a === void 0 ? void 0 : _a.getOrNewSim(this.simOption.advice[i]);
                var protoBefores = AOPDecorator.getProtoBefores(sim, propertyName, Object.getPrototypeOf(obj));
                protoBefores.forEach(function (it) {
                    it.call(obj, protoType, propertyName);
                });
            }
        }
    };
    SimProxyHandler.prototype.aopAfter = function (obj, protoType) {
        var _a;
        var propertyName = ObjectUtils_1.ObjectUtils.getPrototypeName(obj, protoType);
        if (propertyName) {
            AOPDecorator.getProtoAfters(obj, propertyName).forEach(function (it) {
                it.call(obj, protoType, propertyName);
            });
            for (var i = 0; i < this.simOption.advice.length; i++) {
                var sim = (_a = this.simstanceManager) === null || _a === void 0 ? void 0 : _a.getOrNewSim(this.simOption.advice[i]);
                var protoBefores = AOPDecorator.getProtoAfters(sim, propertyName, Object.getPrototypeOf(obj));
                protoBefores.forEach(function (it) {
                    it.call(obj, protoType, propertyName);
                });
            }
        }
    };
    SimProxyHandler.prototype.has = function (target, key) {
        if (key === 'isProxy') {
            return true;
        }
        return key in target;
    };
    return SimProxyHandler;
}());
exports.SimProxyHandler = SimProxyHandler;
});

unwrapExports(SimProxyHandler_1);
SimProxyHandler_1.SimProxyHandler;

var SimstanceManager_1 = createCommonjsModule(function (module, exports) {
var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimstanceManager = void 0;











var SimstanceManager = (function () {
    function SimstanceManager(option) {
        this.option = option;
        this._storage = new Map();
        this._storage.set(SimstanceManager, this);
        this._storage.set(option.constructor, option);
        this._storage.set(SimOption_1.SimOption, option);
        this.simProxyHandler = new SimProxyHandler_1.SimProxyHandler(this, option);
    }
    Object.defineProperty(SimstanceManager.prototype, "storage", {
        get: function () {
            return this._storage;
        },
        enumerable: false,
        configurable: true
    });
    SimstanceManager.prototype.getSimAtomics = function () {
        return Array.from(this._storage.keys()).map(function (it) { return new SimAtomic_1.SimAtomic(it); });
    };
    SimstanceManager.prototype.getSimConfig = function (scheme) {
        var newVar = this.getSimAtomics().filter(function (it) { var _a; return scheme && it && scheme === ((_a = it === null || it === void 0 ? void 0 : it.getConfig()) === null || _a === void 0 ? void 0 : _a.scheme); }) || [];
        return newVar;
    };
    SimstanceManager.prototype.getOrNewSim = function (k) {
        if (k) {
            var newVar = this.storage.get(k);
            if (!newVar) {
                newVar = this.resolve(k);
            }
            return newVar;
        }
    };
    SimstanceManager.prototype.getOrNewSims = function (k) {
        var _this = this;
        var list = new Array(0);
        this.storage.forEach(function (value, key, mapObject) {
            var sw = false;
            if (value && value instanceof k) {
                sw = true;
            }
            else if (key === k || k.isPrototypeOf(key)) {
                sw = true;
            }
            if (sw) {
                if (!value) {
                    value = _this.resolve(key);
                }
                list.push(value);
            }
        });
        return list;
    };
    SimstanceManager.prototype.register = function (target) {
        if (!this._storage.has(target)) {
            this._storage.set(target, undefined);
        }
    };
    SimstanceManager.prototype.resolve = function (target) {
        var _this = this;
        var _a;
        var registed = this._storage.get(target);
        if (registed) {
            return registed;
        }
        if (this._storage.has(target) && undefined === registed) {
            var newSim = this.newSim(target, function (data) { return _this._storage.set(target, data); });
            (_a = newSim === null || newSim === void 0 ? void 0 : newSim.onSimCreate) === null || _a === void 0 ? void 0 : _a.call(newSim);
            return newSim;
        }
        throw new SimNoSuch_1.SimNoSuch('no simple instance ' + target);
    };
    SimstanceManager.prototype.newSim = function (target, simCreateAfter) {
        var r = new (target.bind.apply(target, __spreadArray([void 0], this.getParameterSim(target))))();
        var p = this.proxy(r);
        simCreateAfter === null || simCreateAfter === void 0 ? void 0 : simCreateAfter(p);
        this.callBindPostConstruct(p);
        return p;
    };
    SimstanceManager.prototype.callBindPostConstruct = function (obj) {
        var _this = this;
        var set = new Set(ObjectUtils_1.ObjectUtils.getAllProtoTypeName(obj));
        set.forEach(function (it) {
            var _a;
            var postConstruct = SimDecorator.getPostConstruct(obj, it);
            if (postConstruct) {
                (_a = obj)[it].apply(_a, _this.getParameterSim(obj, it));
            }
        });
    };
    SimstanceManager.prototype.getParameterSim = function (target, targetKey) {
        var _this = this;
        var paramTypes = ReflectUtils_1.ReflectUtils.getParameterTypes(target, targetKey);
        var paramNames = FunctionUtils_1.FunctionUtils.getParameterNames(target, targetKey);
        var injections = paramTypes.map(function (token, idx) {
            target = targetKey ? target[targetKey] : target;
            var inject = Inject_1.getInject(target, paramNames[idx]);
            return _this.resolve(inject !== null && inject !== void 0 ? inject : token);
        });
        return injections;
    };
    SimstanceManager.prototype.proxy = function (target) {
        var _this = this;
        if (SimDecorator.getSim(target) && (typeof target === 'object') && (!('isProxy' in target))) {
            for (var key in target) {
                target[key] = this.proxy(target[key]);
            }
            var protoTypeName = ObjectUtils_1.ObjectUtils.getProtoTypeName(target);
            protoTypeName.filter(function (it) { return typeof target[it] === 'function'; }).forEach(function (it) {
                target[it] = new Proxy(target[it], _this.simProxyHandler);
            });
            if (this.simProxyHandler) {
                target = new Proxy(target, this.simProxyHandler);
            }
        }
        if (this.option.proxy) {
            target = this.option.proxy.onProxy(target);
        }
        return target;
    };
    SimstanceManager.prototype.run = function () {
        var _this = this;
        SimGlobal_1.SimGlobal().storage.forEach(function (data) {
            _this.register(data);
        });
        this.callBindPostConstruct(this);
    };
    return SimstanceManager;
}());
exports.SimstanceManager = SimstanceManager;
});

unwrapExports(SimstanceManager_1);
SimstanceManager_1.SimstanceManager;

var Intent_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intent = void 0;
var Intent = (function () {
    function Intent(uri, data, event) {
        this.uri = uri;
        this.data = data;
        this.event = event;
    }
    Object.defineProperty(Intent.prototype, "scheme", {
        get: function () {
            return this.uri.split('://')[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intent.prototype, "paths", {
        get: function () {
            var _a;
            return ((_a = this.pathname.split('/')) !== null && _a !== void 0 ? _a : []);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intent.prototype, "fullPath", {
        get: function () {
            var _a;
            var paths = this.uri.split('://');
            return (_a = paths[paths.length >= 2 ? 1 : 0]) !== null && _a !== void 0 ? _a : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intent.prototype, "pathname", {
        get: function () {
            var paths = this.fullPath.split('?');
            return paths[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intent.prototype, "query", {
        get: function () {
            var _a;
            var paths = this.fullPath.split('?');
            return (_a = paths[1]) !== null && _a !== void 0 ? _a : '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Intent.prototype, "queryParams", {
        get: function () {
            var _a;
            var param = {};
            (_a = this.query.split('&')) === null || _a === void 0 ? void 0 : _a.forEach(function (it) {
                var a = it.split('=');
                param[a[0]] = a[1];
            });
            return param;
        },
        enumerable: false,
        configurable: true
    });
    Intent.prototype.getPathnameData = function (urlExpression) {
        var urls = this.pathname.split('/');
        var urlExpressions = urlExpression.split('/');
        if (urls.length !== urlExpressions.length) {
            return;
        }
        var data = {};
        for (var i = 0; i < urlExpressions.length; i++) {
            var it_1 = urlExpressions[i];
            var urlit = urls[i];
            if (!it_1.startsWith(':')) {
                if (it_1 !== urlit) {
                    return;
                }
                continue;
            }
            data[it_1.slice(1)] = urlit;
        }
        return data;
    };
    return Intent;
}());
exports.Intent = Intent;
});

unwrapExports(Intent_1);
Intent_1.Intent;

var IntentManager_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntentManager = void 0;


var IntentManager = (function () {
    function IntentManager(simstanceManager) {
        this.simstanceManager = simstanceManager;
    }
    IntentManager.prototype.publish = function (it, data) {
        var _this = this;
        if (typeof it === 'string') {
            it = new Intent_1.Intent(it, data);
        }
        var intent = it;
        this.simstanceManager.getSimConfig(intent.scheme).forEach(function (data) {
            var _a, _b;
            var orNewSim = (_a = _this.simstanceManager) === null || _a === void 0 ? void 0 : _a.getOrNewSim(data.type);
            if (orNewSim) {
                if (intent.paths.length > 0) {
                    var callthis_1 = orNewSim;
                    var lastProp_1 = '';
                    intent.paths.filter(function (i) { return i; }).forEach(function (i) {
                        callthis_1 = orNewSim;
                        orNewSim = orNewSim === null || orNewSim === void 0 ? void 0 : orNewSim[i];
                        lastProp_1 = i;
                    });
                    if (orNewSim && typeof orNewSim === 'function') {
                        orNewSim.call(callthis_1, intent);
                    }
                    else if (orNewSim) {
                        callthis_1[lastProp_1] = intent.data;
                    }
                }
                else {
                    (_b = orNewSim === null || orNewSim === void 0 ? void 0 : orNewSim.intentSubscribe) === null || _b === void 0 ? void 0 : _b.call(orNewSim, intent);
                }
            }
        });
    };
    return IntentManager;
}());
exports.IntentManager = IntentManager;
});

unwrapExports(IntentManager_1);
IntentManager_1.IntentManager;

var RouterModule_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterModule = void 0;

var RouterModule = (function () {
    function RouterModule(router, module, routerChains) {
        if (routerChains === void 0) { routerChains = []; }
        this.router = router;
        this.module = module;
        this.routerChains = routerChains;
    }
    RouterModule.prototype.getModuleInstance = function () {
        return SimGlobal_1.SimGlobal().application.simstanceManager.getOrNewSim(this.module);
    };
    return RouterModule;
}());
exports.RouterModule = RouterModule;
});

unwrapExports(RouterModule_1);
RouterModule_1.RouterModule;

var RouterManager_1 = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterManager = void 0;




var RouterManager = (function () {
    function RouterManager(rootRouter) {
        this.rootRouter = rootRouter;
    }
    RouterManager.prototype.routing = function (intent) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __awaiter(this, void 0, void 0, function () {
            var routers, routerAtomic, rootRouter, executeModule, routerChain, lastRouter;
            return __generator(this, function (_o) {
                routers = [];
                routerAtomic = new SimAtomic_1.SimAtomic(this.rootRouter);
                routerAtomic.getConfig(SimDecorator.RouterMetadataKey);
                rootRouter = routerAtomic.value;
                executeModule = this.getExecuteModule(routerAtomic, intent, routers);
                new Date().getTime();
                if (executeModule === null || executeModule === void 0 ? void 0 : executeModule.router) {
                    executeModule.routerChains = routers;
                    if (((_a = executeModule.routerChains) === null || _a === void 0 ? void 0 : _a.length) && ((_b = executeModule.routerChains) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                        (_d = (_c = executeModule.routerChains) === null || _c === void 0 ? void 0 : _c.reduce) === null || _d === void 0 ? void 0 : _d.call(_c, function (a, b) {
                            var _a;
                            var value = a.value;
                            (_a = value === null || value === void 0 ? void 0 : value.canActivate) === null || _a === void 0 ? void 0 : _a.call(value, intent, b.value);
                            return b;
                        });
                    }
                    if (!(executeModule === null || executeModule === void 0 ? void 0 : executeModule.module)) {
                        routerChain = executeModule.routerChains[executeModule.routerChains.length - 1];
                        (_f = (_e = routerChain === null || routerChain === void 0 ? void 0 : routerChain.value) === null || _e === void 0 ? void 0 : _e.canActivate) === null || _f === void 0 ? void 0 : _f.call(_e, intent, executeModule.getModuleInstance());
                    }
                    else {
                        (_j = (_h = (_g = executeModule.router) === null || _g === void 0 ? void 0 : _g.value) === null || _h === void 0 ? void 0 : _h.canActivate) === null || _j === void 0 ? void 0 : _j.call(_h, intent, executeModule.getModuleInstance());
                    }
                    return [2, this.activeRouterModule = executeModule];
                }
                else {
                    if (routers.length && routers.length > 0) {
                        lastRouter = (_k = routers.reduce) === null || _k === void 0 ? void 0 : _k.call(routers, function (a, b) {
                            var _a;
                            var value = a.value;
                            (_a = value === null || value === void 0 ? void 0 : value.canActivate) === null || _a === void 0 ? void 0 : _a.call(value, intent, b.value);
                            return b;
                        });
                        (_m = (_l = lastRouter.value) === null || _l === void 0 ? void 0 : _l.canActivate) === null || _m === void 0 ? void 0 : _m.call(_l, intent, null);
                    }
                    return [2, this.activeRouterModule = new RouterModule_1.RouterModule(rootRouter, undefined, routers)];
                }
            });
        });
    };
    RouterManager.prototype.getExecuteModule = function (router, intent, parentRouters) {
        var path = intent.pathname;
        var routerConfig = router.getConfig(SimDecorator.RouterMetadataKey);
        if (routerConfig) {
            var routerStrings = parentRouters.slice(1).map(function (it) { var _a; return ((_a = it.getConfig(SimDecorator.RouterMetadataKey)) === null || _a === void 0 ? void 0 : _a.path) || ''; });
            var isRoot = this.isRootUrl(routerConfig.path, routerStrings, path);
            if (isRoot) {
                parentRouters.push(router);
                var module_1 = this.findRouting(router, routerConfig, routerStrings, intent);
                if (module_1 === null || module_1 === void 0 ? void 0 : module_1.module) {
                    return module_1;
                }
                else if (routerConfig.routers && routerConfig.routers.length > 0) {
                    for (var _i = 0, _a = routerConfig.routers; _i < _a.length; _i++) {
                        var child = _a[_i];
                        var routerAtomic = new SimAtomic_1.SimAtomic(child);
                        routerAtomic.getConfig(SimDecorator.RouterMetadataKey);
                        var router_1 = routerAtomic.value;
                        var executeModule = this.getExecuteModule(routerAtomic, intent, parentRouters);
                        if (router_1 && executeModule) {
                            return executeModule;
                        }
                    }
                }
            }
        }
    };
    RouterManager.prototype.isRootUrl = function (path, parentRoots, url) {
        return url.startsWith(parentRoots.join('') + (path || ''));
    };
    RouterManager.prototype.findRouting = function (router, routerData, parentRoots, intent) {
        var urlRoot = parentRoots.join('') + routerData.path;
        for (var _i = 0, _a = Object.keys(routerData.route).filter(function (it) { return !it.startsWith('_'); }); _i < _a.length; _i++) {
            var it_1 = _a[_i];
            var pathnameData = intent.getPathnameData(urlRoot + it_1);
            if (pathnameData) {
                var _b = this.findRouteProperty(routerData.route, it_1), child = _b.child, data = _b.data;
                var rm = new RouterModule_1.RouterModule(router, child);
                rm.data = data;
                rm.pathData = pathnameData;
                return rm;
            }
        }
    };
    RouterManager.prototype.findRouteProperty = function (route, propertyName) {
        var child;
        var data;
        var routeElement = route[propertyName];
        if (typeof routeElement === 'function') {
            child = routeElement;
        }
        else if (typeof routeElement === 'string') {
            return this.findRouteProperty(route, routeElement);
        }
        else {
            child = routeElement[0];
            data = routeElement[1];
        }
        return {
            child: child,
            data: data
        };
    };
    return RouterManager;
}());
exports.RouterManager = RouterManager;
});

unwrapExports(RouterManager_1);
RouterManager_1.RouterManager;

var SimpleApplication_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleApplication = void 0;





var SimpleApplication = (function () {
    function SimpleApplication(rootRouter, option) {
        if (option === void 0) { option = new SimOption_1.SimOption(); }
        this.rootRouter = rootRouter;
        this.option = option;
        this.simstanceManager = new SimstanceManager_1.SimstanceManager(option);
        this.intentManager = new IntentManager_1.IntentManager(this.simstanceManager);
        this.routerManager = new RouterManager_1.RouterManager(this.rootRouter);
        this.simstanceManager.storage.set(SimstanceManager_1.SimstanceManager, this.simstanceManager);
        this.simstanceManager.storage.set(IntentManager_1.IntentManager, this.intentManager);
        this.simstanceManager.storage.set(RouterManager_1.RouterManager, this.routerManager);
        SimGlobal_1.SimGlobal().application = this;
    }
    SimpleApplication.prototype.run = function () {
        this.simstanceManager.run();
    };
    SimpleApplication.prototype.publishIntent = function (i) {
        return this.intentManager.publish(i);
    };
    SimpleApplication.prototype.routing = function (i) {
        return this.routerManager.routing(i);
    };
    return SimpleApplication;
}());
exports.SimpleApplication = SimpleApplication;
});

unwrapExports(SimpleApplication_1);
SimpleApplication_1.SimpleApplication;

var LocationUtils_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationUtils = void 0;
var LocationUtils = (function () {
    function LocationUtils() {
    }
    LocationUtils.hash = function () {
        return window.location.hash.replace('#', '');
    };
    LocationUtils.hashPath = function () {
        return '/' + window.location.hash.replace('#', '').split('?')[0];
    };
    LocationUtils.hashQueryParams = function () {
        var s = window.location.hash.replace('#', '').split('?')[1] || '';
        return this.queryStringToMap(s);
    };
    LocationUtils.path = function () {
        return window.location.pathname;
    };
    LocationUtils.pathQueryParams = function () {
        return this.queryStringToMap(window.location.search.substring(1));
    };
    LocationUtils.queryStringToMap = function (s) {
        var params = new Map();
        var vars = s.split('&') || [];
        vars.forEach(function (it) {
            var kv = it.split('=') || [];
            params.set(kv[0], kv[1]);
        });
        return params;
    };
    return LocationUtils;
}());
exports.LocationUtils = LocationUtils;
});

unwrapExports(LocationUtils_1);
LocationUtils_1.LocationUtils;

var Navigation_1 = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = void 0;



var Navigation = (function () {
    function Navigation(option) {
        this.option = option;
    }
    Object.defineProperty(Navigation.prototype, "path", {
        get: function () {
            if (SimFrontOption_1.UrlType.path === this.option.urlType) {
                return LocationUtils_1.LocationUtils.path();
            }
            else if (SimFrontOption_1.UrlType.hash === this.option.urlType) {
                return LocationUtils_1.LocationUtils.hashPath();
            }
            else {
                return '';
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigation.prototype, "queryParams", {
        get: function () {
            if (SimFrontOption_1.UrlType.path === this.option.urlType) {
                return LocationUtils_1.LocationUtils.pathQueryParams();
            }
            else if (SimFrontOption_1.UrlType.hash === this.option.urlType) {
                return LocationUtils_1.LocationUtils.hashQueryParams();
            }
            else {
                return new Map();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Navigation.prototype, "pathInfo", {
        get: function () {
            return { path: this.path, queryParams: this.queryParams };
        },
        enumerable: false,
        configurable: true
    });
    Navigation.prototype.go = function (path, data, title) {
        if (data === void 0) { data = {}; }
        if (title === void 0) { title = ''; }
        if (SimFrontOption_1.UrlType.path === this.option.urlType) {
            history.pushState(data, title, path);
        }
        else if (SimFrontOption_1.UrlType.hash === this.option.urlType) {
            path = '#' + path.substring(1);
            history.pushState(data, title, path);
        }
        window.dispatchEvent(new Event('popstate'));
    };
    Navigation = __decorate([
        (0, SimDecorator.Sim)(),
        __metadata("design:paramtypes", [SimFrontOption_1.SimFrontOption])
    ], Navigation);
    return Navigation;
}());
exports.Navigation = Navigation;
});

unwrapExports(Navigation_1);
var Navigation_2 = Navigation_1.Navigation;

var View_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
var View = (function () {
    function View(_e) {
        this._e = _e;
    }
    Object.defineProperty(View.prototype, "e", {
        get: function () {
            if (typeof this._e === 'string') {
                return document.querySelector(this._e);
            }
            else {
                return this._e;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(View.prototype, "value", {
        get: function () {
            return this.e.value;
        },
        enumerable: false,
        configurable: true
    });
    return View;
}());
exports.View = View;
});

unwrapExports(View_1);
View_1.View;

var ViewService_1 = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewService = void 0;


var ViewService = (function () {
    function ViewService() {
    }
    ViewService.prototype.e = function (selector) {
        try {
            var querySelector = document.querySelector(selector);
            if (querySelector) {
                return new View_1.View(querySelector);
            }
            else {
                return undefined;
            }
        }
        catch (e) {
            return undefined;
        }
    };
    ViewService.prototype.eI = function (selector) {
        var _a;
        return (_a = this.e("#" + selector)) !== null && _a !== void 0 ? _a : undefined;
    };
    ViewService.prototype.eC = function (selector) {
        var _a;
        return (_a = this.e("." + selector)) !== null && _a !== void 0 ? _a : undefined;
    };
    ViewService = __decorate([
        (0, SimDecorator.Sim)(),
        __metadata("design:paramtypes", [])
    ], ViewService);
    return ViewService;
}());
exports.ViewService = ViewService;
});

unwrapExports(ViewService_1);
ViewService_1.ViewService;

var HttpService_1 = createCommonjsModule(function (module, exports) {
var __decorate = (commonjsGlobal && commonjsGlobal.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (commonjsGlobal && commonjsGlobal.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpService = void 0;

var HttpService = (function () {
    function HttpService() {
    }
    HttpService = __decorate([
        (0, SimDecorator.Sim)(),
        __metadata("design:paramtypes", [])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
});

unwrapExports(HttpService_1);
HttpService_1.HttpService;

var SimpleBootFront_1 = createCommonjsModule(function (module, exports) {
var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleBootFront = void 0;
















var SimpleBootFront = (function (_super) {
    __extends(SimpleBootFront, _super);
    function SimpleBootFront(rootRouter, option) {
        var _this = _super.call(this, rootRouter, option) || this;
        _this.rootRouter = rootRouter;
        _this.option = option;
        _this.domRendoerExcludeProxy = [SimpleApplication_1.SimpleApplication, IntentManager_1.IntentManager, RouterManager_1.RouterManager, SimstanceManager_1.SimstanceManager, SimFrontOption_1.SimFrontOption, Navigation_1.Navigation, ViewService_1.ViewService, HttpService_1.HttpService, HTMLElement];
        _this.domRenderTargetElements = [];
        _this.domRenderTargetAttrs = [];
        _this.domRenderConfig = {
            targetElements: _this.domRenderTargetElements,
            targetAttrs: _this.domRenderTargetAttrs,
            onAttrInit: function (attrName, attrValue, obj) {
                var _a, _b;
                if (attrName === 'component') {
                    var bindObj = ScriptUtils$1.ScriptUtils.evalReturn(attrValue, obj);
                    (_b = (_a = bindObj) === null || _a === void 0 ? void 0 : _a.onInit) === null || _b === void 0 ? void 0 : _b.call(_a);
                }
            },
            scripts: { 'application': _this },
            applyEvents: [{
                    attrName: 'router-link', callBack: function (elements, attrValue, obj) {
                        elements.addEventListener('click', function (event) {
                            var _a;
                            (_a = (0, SimGlobal_1.SimGlobal)().application.simstanceManager.getOrNewSim(Navigation_1.Navigation)) === null || _a === void 0 ? void 0 : _a.go(attrValue);
                        });
                    }
                }],
            proxyExcludeTyps: _this.domRendoerExcludeProxy
        };
        window.__dirname = 'simple-boot-front__dirname';
        _this.domRenderTargetAttrs.push({
            name: 'component', callBack: function (element, attrValue, obj, rawSet) {
                var fag = _this.option.window.document.createDocumentFragment();
                if (attrValue) {
                    var targetObj = ScriptUtils$1.ScriptUtils.eval("return " + attrValue, obj);
                    var n = element.cloneNode(true);
                    var innerHTML = _this.getComponentInnerHtml(targetObj);
                    n.innerHTML = innerHTML;
                    fag.append(RawSet$1.RawSet.drThisCreate(n, attrValue, '', true, obj));
                }
                return fag;
            }
        });
        option.proxy = {
            onProxy: function (it) { return _this.createDomRender(it); }
        };
        return _this;
    }
    SimpleBootFront.prototype.getComponentInnerHtml = function (targetObj) {
        var _a, _b, _c;
        var component = (0, Component_1.getComponent)(targetObj);
        var styles = ((_b = (_a = component === null || component === void 0 ? void 0 : component.styles) === null || _a === void 0 ? void 0 : _a.map(function (it) { return "<style>" + it + "</style>"; })) !== null && _b !== void 0 ? _b : []).join(' ');
        var template = ((_c = component === null || component === void 0 ? void 0 : component.template) !== null && _c !== void 0 ? _c : '');
        return styles + template;
    };
    SimpleBootFront.prototype.createDomRender = function (obj) {
        var component = (0, Component_1.getComponent)(obj);
        if (component && typeof obj === 'object') {
            return DomRender$1.DomRender.run(obj, undefined, this.domRenderConfig);
        }
        return obj;
    };
    SimpleBootFront.prototype.run = function () {
        var _this = this;
        var _a, _b, _c, _d, _e;
        _super.prototype.run.call(this);
        this.initDomRenderScripts();
        this.initDomRenderTargetElements();
        this.navigation = this.simstanceManager.getOrNewSim(Navigation_1.Navigation);
        var routerAtomic = new SimAtomic_1.SimAtomic(this.rootRouter);
        var target = this.option.window.document.querySelector(this.option.selector);
        if (target && routerAtomic.value) {
            var component = routerAtomic.getConfig(Component_1.ComponentMetadataKey);
            this.option.window.document.createElement('template');
            var styles = ((_b = (_a = component === null || component === void 0 ? void 0 : component.styles) === null || _a === void 0 ? void 0 : _a.map(function (it) { return "<style>" + it + "</style>"; })) !== null && _b !== void 0 ? _b : []).join(' ');
            target.innerHTML = styles + " " + ((_c = component === null || component === void 0 ? void 0 : component.template) !== null && _c !== void 0 ? _c : '');
            var val = routerAtomic.value;
            var domRenderProxy = val._DomRender_proxy;
            domRenderProxy.initRender(target);
            (_e = (_d = val) === null || _d === void 0 ? void 0 : _d.onInit) === null || _e === void 0 ? void 0 : _e.call(_d);
        }
        this.option.window.addEventListener('intent', function (event) {
            var cevent = event;
            _this.publishIntent(new Intent_1.Intent(cevent.detail.uri, cevent.detail.data, event));
        });
        this.option.window.addEventListener('popstate', function (event) {
            var _a;
            var intent = new Intent_1.Intent((_a = _this.navigation.path) !== null && _a !== void 0 ? _a : '');
            _this.routing(intent).then(function (it) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.afterSetting();
                    return [2];
                });
            }); });
        });
        this.option.window.dispatchEvent(new Event('popstate'));
    };
    SimpleBootFront.prototype.afterSetting = function () {
        var _this = this;
        this.option.window.document.querySelectorAll('[router-link]').forEach(function (it) {
            var _a, _b, _c, _d;
            var link = it.getAttribute('router-link');
            if (link) {
                var activeClasss = it.getAttribute('router-active-class');
                var aClasss = activeClasss === null || activeClasss === void 0 ? void 0 : activeClasss.split(',');
                var inActiveClasss = it.getAttribute('router-inactive-class');
                var iClasss = inActiveClasss === null || inActiveClasss === void 0 ? void 0 : inActiveClasss.split(',');
                if (_this.navigation.path === link) {
                    if (aClasss && aClasss.length > 0) {
                        (_a = it.classList).add.apply(_a, aClasss);
                    }
                    if (iClasss && iClasss.length > 0) {
                        (_b = it.classList).remove.apply(_b, iClasss);
                    }
                }
                else {
                    if (aClasss && aClasss.length > 0) {
                        (_c = it.classList).remove.apply(_c, aClasss);
                    }
                    if (iClasss && iClasss.length > 0) {
                        (_d = it.classList).add.apply(_d, iClasss);
                    }
                }
            }
        });
    };
    SimpleBootFront.prototype.initDomRenderScripts = function () {
        var _this = this;
        var simstanceManager = this.simstanceManager;
        Script_1.scripts.forEach(function (val, name) {
            _this.domRenderConfig.scripts[name] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var obj = undefined;
                try {
                    obj = simstanceManager.getOrNewSim(val);
                }
                catch (e) {
                    obj = simstanceManager.newSim(val);
                }
                var render = this.__render;
                var scriptRunnable = obj;
                scriptRunnable.rawSets.set(render.rawset, this);
                return scriptRunnable.run.apply(scriptRunnable, args);
            };
        });
    };
    SimpleBootFront.prototype.initDomRenderTargetElements = function () {
        var _this = this;
        var selectors = Component_1.componentSelectors;
        selectors.forEach(function (val, name) {
            var component = (0, Component_1.getComponent)(val);
            _this.domRenderTargetElements.push(RawSet$1.RawSet.createComponentTargetElement(name, function (e, o, r) { return _this.simstanceManager.newSim(val); }, component === null || component === void 0 ? void 0 : component.template, component === null || component === void 0 ? void 0 : component.styles, _this.domRenderConfig.scripts));
        });
    };
    return SimpleBootFront;
}(SimpleApplication_1.SimpleApplication));
exports.SimpleBootFront = SimpleBootFront;
});

unwrapExports(SimpleBootFront_1);
var SimpleBootFront_2 = SimpleBootFront_1.SimpleBootFront;

var template$B = "<div>\n  <header class=\"header\">\n    <nav class=\"input-group\">\n      <label class=\"input-group-text bg-white\" for=\"inputGroupSelect01\">simple-boot</label>\n      <select class=\"form-select form-select-lg\" id=\"inputGroupSelect01\" dr-on-init=\"this.category\" dr-event-change=\"this.changeCategory($target.value)\">\n        <option selected=\"selected\" value=\"simple-boot-front\" dr-attr=\"{selected: this.getPath(1) === $element.value ? 'selected' : null}\">front </option>\n        <option value=\"dom-render\" dr-attr=\"{selected: this.getPath(1) === $element.value ? 'selected' : null}\">dom-render</option>\n        <option value=\"simple-boot-core\" dr-attr=\"{selected: this.getPath(1) === $element.value ? 'selected' : null}\">core</option>\n        <option value=\"create-simple-boot-front\" dr-attr=\"{selected: this.getPath(1) === $element.value ? 'selected' : null}\">create</option>\n        <option value=\"simple-boot-front-cli\" dr-attr=\"{selected: this.getPath(1) === $element.value ? 'selected' : null}\">cli</option>\n      </select>\n      <span class=\"input-group-text bg-light fs-6\">⇢</span>\n      <select class=\"form-select form-select-sm\" dr-on-init=\"this.detail\" dr-event-change=\"this.changeDetail($target.value)\">\n        <option dr-for-of=\"this.detailsItems\" dr-complete=\"this.changeDetail(this.detail.value)\" dr-value=\"#it#\" dr-attr=\"{selected: this.navagation.path === $element.value ? 'selected' : null}\">${#it#?.split?.('/')?.[2] ?? ''}$</option>\n      </select>\n    </nav>\n  </header>\n  <main>\n    <router component=\"this.child\"></router>\n  </main>\n  <footer>\n    <ul class=\"badge-container\">\n      <li>\n        <a href=\"https://www.npmjs.com/package/simple-boot-front\" target=\"_blank\"><img src=\"https://img.shields.io/badge/npm-blue?logo=npm\"></a>\n      </li>\n      <li>\n        <img src=\"https://img.shields.io/badge/license-MIT-green\">\n      </li>\n      <li>\n        <a href=\"https://discord.gg/PW56dpns\" target=\"_blank\"><img src=\"https://img.shields.io/badge/discord-brightgreen?logo=discord\"></a>\n      </li>\n      <li>\n        <a href=\"https://github.com/visualkhh/simple-boot-front\" target=\"_blank\"><img src=\"https://img.shields.io/badge/-github-black?logo=github\"></a>\n      </li>\n      <li>\n        <a href=\"maileto:visualkhh@gmail.com\" target=\"_blank\"><img src=\"https://img.shields.io/badge/visualkhh@gmail.com-lightgrey\"></a>\n      </li>\n    </ul>\n  </footer>\n</div>\n";

var style$o = "html {\n    scroll-behavior: smooth;\n}\nheader {\n    position: -webkit-sticky; /* 사파리 브라우저 지원 */\n    position: sticky;\n    top: 0px;\n    /*border: #656565 1px solid;*/\n    /*background: white;*/\n    /*border-bottom-left-radius: 5px;*/\n    /*border-bottom-right-radius: 5px;*/\n}\n\n/*footer,*/\nmain {\n/*    border: #333333 1px solid;*/\n    color: rgb(30, 30, 30);\n    padding: 10px;\n/*    !*margin: 20px;*!*/\n}\n\n.code-container {\n    color: #a9b7c6;\n    background-color: #282b2e;\n    overflow-x: auto;\n    /*margin: 5px;*/\n    padding: 10px;\n    border-radius: 10px;\n}\npre code{\n    border-radius: 10px;\n}\n\n\nul.badge-container {\n    padding-left: 0px;\n    /*background-color: #3D99CE;*/\n    /*text-align: center;*/\n}\nfooter>ul.badge-container {\n    text-align: right;\n}\n\nul.badge-container > li {\n    display: inline-block;\n    /*padding: 10px 20px;*/\n}\nul.badge-container > li:hover {\n    /*background-color: #2779BF;*/\n}\nul.badge-container > li > a {\n    color: white;\n    text-decoration: none;\n}\n\n\nsection > figure figcaption {\n    text-align: right;\n    font-size: 0.5rem;\n}\n\n\n.content-container {\n    color: #a9b7c6;\n    background-color: #282b2e;\n    border-radius: 10px;\n    padding: 7px;\n    overflow-x: auto;\n}\n\n.content-container-white {\n    color: #282b2e;\n    border: #dedede solid 1px;\n    border-radius: 10px;\n    padding: 7px;\n    overflow-x: auto;\n}\n\n/*.dl-container > dt::before {*/\n/*    content: '- ';*/\n\n/*}*/\n.dl-container > dd {\n    padding-left: 10px;\n    margin-bottom: 15px;\n}\n\ndd > small {\n    font-size: 0.5rem;\n}\n\nli > small {\n    font-size: 0.5rem;\n}\n";

var template$A = "<!--    <p>¯\\_(ツ)_/¯ - Everyone</p>-->\n<article>\n    <h1>SIMPLE-BOOT-FRONT</h1>\n    <p>Single Page Application Framworks for Web</p>\n\n    <ul class=\"badge-container\">\n        <li>\n            <a href=\"https://www.npmjs.com/package/simple-boot-front\" target=\"_blank\"><img src=\"https://img.shields.io/badge/npm-blue?logo=npm\"></a>\n        </li>\n        <li>\n            <img src=\"https://img.shields.io/badge/license-MIT-green\">\n        </li>\n        <li>\n            <a href=\"https://discord.gg/PW56dpns\" target=\"_blank\"><img src=\"https://img.shields.io/badge/discord-brightgreen?logo=discord\"></a>\n        </li>\n        <li>\n            <a href=\"https://github.com/visualkhh/simple-boot-front\" target=\"_blank\"><img src=\"https://img.shields.io/badge/-github-black?logo=github\"></a>\n        </li>\n    </ul>\n\n    <section>\n        <h2>our primary goals are</h2>\n        <ul>\n            <li>Single Page Application Framworks for Web</li>\n            <li>Provide a radically faster and widely accessible getting started experience for all front end.</li>\n        </ul>\n    </section>\n\n    <hr>\n\n    <section>\n        <h2>dependencies</h2>\n        <ul>\n            <li>dom-render <span class=\"badge bg-secondary\">Product line</span></li>\n            <li>simple-boot-core <span class=\"badge bg-secondary\">Product line</span></li>\n            <li>reflect-metadata</li>\n        </ul>\n    </section>\n\n    <hr>\n    <domrender-function-section></domrender-function-section>\n    <hr>\n    <core-function-section></core-function-section>\n    <hr>\n    <core-lifecycle-section></core-lifecycle-section>\n    <hr>\n    <front-lifecycle-section></front-lifecycle-section>\n    <hr>\n\n    <section>\n        <h2>contributors</h2>\n        <a href=\"https://github.com/visualkhh/simple-boot-front/graphs/contributors\">\n            <img src=\"https://contrib.rocks/image?repo=visualkhh/simple-boot-front\">\n        </a>\n    </section>\n</article>\n";

var style$n = "/*pre code {*/\n/*    overflow-x: auto ;*/\n/*    overflow-y:hidden;*/\n/*    white-space: pre;*/\n/*    !*white-space: nowrap;*!*/\n\n/*}*/\n/*code {*/\n/*    white-space: pre;*/\n/*    -webkit-overflow-scrolling: auto;*/\n/*}*/\n/*#div1, #div2, #div3, #div4 {*/\n/*    border: 1px solid black;*/\n/*    width:  250px;*/\n/*    margin-bottom: 12px;*/\n/*}*/\n\n/*#div1 { overflow-x: hidden;}*/\n/*#div2 { overflow-x: scroll;}*/\n/*#div3 { overflow-x: visible;}*/\n/*#div4 { overflow-x: auto;*/\n/*    white-space: nowrap;*/\n/*}*/\n";

var ApiService = (function () {
    function ApiService() {
    }
    ApiService.prototype.getBlobBase64 = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var data, blob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fetch(url)];
                    case 1:
                        data = _a.sent();
                        return [4, data.blob()];
                    case 2:
                        blob = _a.sent();
                        return [2, new Promise(function (resolve) {
                                var reader = new FileReader();
                                reader.readAsDataURL(blob);
                                reader.onloadend = function () {
                                    var base64data = reader.result;
                                    resolve(base64data);
                                };
                            })];
                }
            });
        });
    };
    ApiService.prototype.getJson = function (url) {
        return fetch(url).then(function (response) { return response.json(); });
    };
    ApiService.prototype.json = function (url, requstInit) {
        return fetch(url, requstInit).then(function (response) { return response.json(); });
    };
    ApiService = __decorate([
        SimDecorator_7(),
        __metadata("design:paramtypes", [])
    ], ApiService);
    return ApiService;
}());

var template$z = "<section>\n    <h2>${this.title}$</h2>\n    <dl dr-pre>\n        <ul>\n            <li>\n                <dt>onSimCreate()</dt>\n                <dd>Sim create just one call <small>(OnSimCreate.ts)</small></dd>\n            </li>\n        </ul>\n    </dl>\n</section>\n";

var CoreLifecycleSection = (function () {
    function CoreLifecycleSection() {
        this.title = 'core life cycle';
    }
    CoreLifecycleSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'core-lifecycle-section',
            template: template$z
        })
    ], CoreLifecycleSection);
    return CoreLifecycleSection;
}());

var template$y = "<section>\n    <h2>${this.title}$</h2>\n    <p>simple-boot-core <a href=\"https://github.com/visualkhh/simple-boot-core\" target=\"_blank\"><img src=\"https://img.shields.io/badge/-github-black?logo=github\"></a></p>\n    <ul>\n        <li>Object management <small>(@Sim)</small></li>\n        <li>Dependency Injection <small>(DI)</small></li>\n        <li>Aspect Oriented Programming <small>(AOP)</small></li>\n        <li>Global Advice</li>\n        <li>Intent Event System</li>\n        <li>Route System <small>(@Router)</small></li>\n    </ul>\n</section>\n";

var CoreFunctionSection = (function () {
    function CoreFunctionSection() {
        this.title = 'core engine';
    }
    CoreFunctionSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'core-function-section',
            template: template$y
        })
    ], CoreFunctionSection);
    return CoreFunctionSection;
}());

var template$x = "<section>\n    <h2>${this.title}$</h2>\n    <dl dr-pre>\n        <ul>\n            <li>\n                <dt>onChangedRender()</dt>\n                <dd>change rended in module event <small>(OnChangedRender.ts)</small></dd>\n            </li>\n            <li>\n                <dt>onFinish()</dt>\n                <dd>Sim create just one call <small>(OnFinish.ts)</small></dd>\n            </li>\n            <li>\n                <dt>onInit()</dt>\n                <dd>module load event <small>(OnInit.ts)</small></dd>\n            </li>\n            <li>\n                <dt>onDestroy()</dt>\n                <dd>module destroy event <small>(OnDestroy.ts)</small></dd>\n            </li>\n            <li>\n                <dt>onInitedChild()</dt>\n                <dd>module and child module inited event <small>(OnInitedChild.ts)</small></dd>\n            </li>\n        </ul>\n    </dl>\n</section>\n";

var FrontLifecycleSection = (function () {
    function FrontLifecycleSection() {
        this.title = 'front life cycle';
    }
    FrontLifecycleSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'front-lifecycle-section',
            template: template$x
        })
    ], FrontLifecycleSection);
    return FrontLifecycleSection;
}());

var template$w = "<section>\n    <h2>${this.title}$</h2>\n    <p>dom-render <a href=\"https://github.com/visualkhh/dom-render\" target=\"_blank\"><img src=\"https://img.shields.io/badge/-github-black?logo=github\"></a></p>\n    <ul>\n        <li>Dom control and reorder</li>\n        <li>Immediate reaction when the value changes</li>\n        <li>all internal variables are managed by proxy <small class=\"text-danger\">(DomRenderProxy)</small></li>\n    </ul>\n</section>\n";

var DomrenderFunctionSection = (function () {
    function DomrenderFunctionSection() {
        this.title = 'view Template engine';
    }
    DomrenderFunctionSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'domrender-function-section',
            template: template$w
        })
    ], DomrenderFunctionSection);
    return DomrenderFunctionSection;
}());

var FrontIntroduction = (function () {
    function FrontIntroduction(apiService) {
        this.apiService = apiService;
    }
    FrontIntroduction.prototype.onInit = function () {
    };
    FrontIntroduction = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$A,
            styles: [style$n],
            using: [CoreLifecycleSection, FrontLifecycleSection, CoreFunctionSection, DomrenderFunctionSection]
        }),
        __metadata("design:paramtypes", [ApiService])
    ], FrontIntroduction);
    return FrontIntroduction;
}());

var template$v = "<article>\n    <h1>@Component</h1>\n    <p>minimum units that make up the page</p>\n    <section>\n        <h2>create</h2>\n        <figure>\n            <figcaption>template.html</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;h1&gt;${this.name}$&lt;/h1&gt;\n&lt;div dr-inner-html=&quot;this.html&quot;&gt;&lt;/div&gt;</pre>\n        </figure>\n        <figure>\n            <figcaption>typescript</figcaption>\n            <pre dr-pre class=\"code-container typescript\">@Sim()\n@Component({\n  selector: 'index',\n  template,\n  styles: [style]\n})\nexport class Index {\n  public name = 'index class'\n  public title = ''\n  public html = ''\n  public setData(title: string, html: string) {\n    this.title = title;\n    this.html = html;\n  }\n}</pre>\n        </figure>\n        \n    </section>\n\n    <hr>\n\n    <domrender-component-template-section dr-on-init=\"$component.title='using'\"></domrender-component-template-section>\n    <hr>\n\n    <section>\n        <h2>componentConfig</h2>\n        <figure>\n            <figcaption>ComponentConfig.ts</figcaption>\n            <pre dr-pre class=\"code-container typescript\">export interface ComponentConfig {\n    selector?: string,\n    template?: string,\n    styles?: (string)[],\n    using?: (ConstructorType&lt;any&gt;)[],\n}</pre>\n        </figure>\n        <dl class=\"dl-container\" dr-pre>\n            <ul>\n                <li>\n                    <dt>selector</dt>\n                    <dd>element name</dd>\n                </li>\n                <li>\n                    <dt>template</dt>\n                    <dd>html template string</dd>\n                </li>\n                <li>\n                    <dt>styles</dt>\n                    <dd>style string array</dd>\n                </li>\n                <li>\n                    <dt>using</dt>\n                    <dd>using components or scripts in this component</dd>\n                </li>\n            </ul>\n        </dl>\n    </section>\n\n\n</article>\n\n";

var style$m = "";

var template$u = "<section>\n    <h2>${this.title}$</h2>\n    <figure>\n        <figcaption>typescript</figcaption>\n        <pre dr-pre class=\"code-container typescript\">constructor(index: Index){...}</pre>\n    </figure>\n    <figure>\n        <figcaption>html</figcaption>\n        <pre dr-pre class=\"code-container html\">&lt;index&gt;&lt;/index&gt;\n&lt;!-- dr-set: $index.setData(&#39;data&#39;); $element, $innerHTML, $attributes --&gt;\n&lt;index dr-on-init=&quot;$component.setData(&#39;hello component&#39;, $innerHTML)&quot;&gt;&lt;/index&gt;</pre>\n    </figure>\n</section>\n\n<domrender-component-attr-section></domrender-component-attr-section>\n";

var template$t = "<section>\n    <h2>${this.title}$</h2>\n    <dl dr-pre>\n        <ul>\n            <li>\n                <dt>&lt;tagname&gt;&lt;/tagname&gt;</dt>\n                <dd>component selector name</dd>\n            </li>\n            <li>\n                <dt>dr-on-init attribute</dt>\n                <dd>\n                    component created init call script\n                    <ul>\n                        <li><span class=\"badge bg-primary\">$component</span> : component instance</li>\n                        <li><span class=\"badge bg-primary\">$element</span> : this element instance</li>\n                        <li><span class=\"badge bg-primary\">$attribute</span> : this element attribute object</li>\n                        <li><span class=\"badge bg-primary\">$innerHTML</span> : this element innerHTML string</li>\n                    </ul>\n                </dd>\n            </li>\n        </ul>\n    </dl>\n</section>\n";

var DomrenderComponentAttrSection = (function () {
    function DomrenderComponentAttrSection() {
        this.title = 'tagName and variable in attribute';
    }
    DomrenderComponentAttrSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'domrender-component-attr-section',
            template: template$t
        })
    ], DomrenderComponentAttrSection);
    return DomrenderComponentAttrSection;
}());

var DomrenderComponentTemplateSection = (function () {
    function DomrenderComponentTemplateSection() {
        this.title = 'component';
    }
    DomrenderComponentTemplateSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'domrender-component-template-section',
            template: template$u,
            using: [DomrenderComponentAttrSection]
        })
    ], DomrenderComponentTemplateSection);
    return DomrenderComponentTemplateSection;
}());

var FrontComponent = (function () {
    function FrontComponent() {
    }
    FrontComponent.prototype.onInit = function () {
    };
    FrontComponent = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$v,
            styles: [style$m],
            using: [DomrenderComponentTemplateSection]
        }),
        __metadata("design:paramtypes", [])
    ], FrontComponent);
    return FrontComponent;
}());

var ScriptRunnable_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptRunnable = void 0;
var ScriptRunnable = (function () {
    function ScriptRunnable() {
        this.rawSets = new Map();
    }
    ScriptRunnable.prototype.render = function () {
        var _this = this;
        this.rawSets.forEach(function (value, key) {
            var _a;
            if (key.isConnected) {
                (_a = value._DomRender_proxy) === null || _a === void 0 ? void 0 : _a.render([key]);
            }
            else {
                _this.rawSets.delete(key);
            }
        });
    };
    return ScriptRunnable;
}());
exports.ScriptRunnable = ScriptRunnable;
});

unwrapExports(ScriptRunnable_1);
var ScriptRunnable_2 = ScriptRunnable_1.ScriptRunnable;

var CodeScript = (function (_super) {
    __extends$2(CodeScript, _super);
    function CodeScript() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodeScript.prototype.run = function (data, language) {
        console.log('data-->', data, language);
        return hljs.highlight(data, { language: language }).value.replace(/\$\{/g, '$<span>{</span>');
    };
    CodeScript = __decorate([
        SimDecorator_7({ scheme: 'CodeScript' }),
        Script_3({
            name: 'code'
        })
    ], CodeScript);
    return CodeScript;
}(ScriptRunnable_2));

var template$s = "<article>\n    <h1>🚀 Quick start</h1>\n    <p>Start a project simply and quickly.</p>\n    <section>\n        <h2>create</h2>\n        <figure>\n            <figcaption>terminal</figcaption>\n            <pre class=\"code-container bash\">npm init simple-boot-front projectname\ncd projectname\nnpm start</pre>\n        </figure>\n    </section>\n\n    <hr>\n    <section>\n        <h2>directory structure</h2>\n        <p>default bundler rollup (sample template)</p>\n        <figure class=\"content-container-white\">\n            <figcaption>structure</figcaption>\n            <ul class=\"root-directory\">\n                <li>assets</li>\n                <li>dist <small>out put directory</small></li>\n                <li>src <small>source</small>\n                    <ul class=\"child-directory\">\n                        <li>pages <small>your pages</small>\n                            <ul class=\"child-directory\">\n                                <li>home.ts <small>sample page</small></li>\n                                <li>user.ts <small>sample page</small></li>\n                            </ul>\n                        </li>\n                        <li>index.css <small class=\"text-primary\">index route page css</small></li>\n                        <li>index.html <small class=\"text-primary\">index route page template</small></li>\n                        <li>index.ts <small class=\"text-primary\">simple-boot-fornt start and route point</small></li>\n                    </ul>\n                </li>\n                <li>types <small>typescript type</small></li>\n                    <ul class=\"child-directory\">\n                        <li>index.d.ts <small>type definition</small></li>\n                    </ul>\n                \n                <li>index.html <small class=\"text-primary\">start point html</small></li>\n                <li>package.json <small>project config</small></li>\n                <li>rollup.config.js <small>rollup bundler config</small></li>\n                <li>tsconfig.json <small>typescript config</small></li>\n            </ul>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>execution command (package.json)</h2>\n        <figure>\n            <figcaption>package.json</figcaption>\n            <pre dr-pre class=\"code-container json\">{\n  \"name\": \"simple-boot-front-templates\",\n  \"version\": \"1.0.0\",\n                ...\n  \"scripts\": {\n    \"start\": \"rollup -c && sbf serve --path ./dist --port 4500\",\n    \"serve\": \"sbf serve --path ./dist --port 4500\",\n    \"serve:watch\": \"sbf serve --path ./dist --port 4500 --watch\",\n    \"serve:watch:all\": \"sbf serve --bundle rollup --path ./dist --port 4500 --watch\",\n    \"serve:proxy\": \"sbf serve --path ./dist --port 4500 --proxy http://localhost:8080\",\n    \"bundle\": \"rollup -c \",\n    \"bundle:watch\": \"rollup -c -w \"\n  },\n  \"devDependencies\": {\n    ...\n  },\n  \"dependencies\": {\n    \"simple-boot-front\": ...\n  }\n}</pre>\n        </figure>\n\n        <dl class=\"dl-container\">\n            <ul>\n                <li>\n                    <dt>start</dt>\n                    <dd>run the server after bundling</dd>\n                </li>\n                <li>\n                    <dt>serve</dt>\n                    <dd>run the server</dd>\n                </li>\n                <li>\n                    <dt>serve:watch</dt>\n                    <dd>run the server. It also updates the browser when there is a change in the dist directory file<span class=\"badge bg-secondary\">(detect dist directory)</span></dd>\n                </li>\n                <li>\n                    <dt>serve:watch:all</dt>\n                    <dd>\"serve:watch\" is the same and updates are made even when the source file<span class=\"badge bg-secondary\">(detect dist, src directory)</span></dd>\n                </li>\n                <li>\n                    <dt>serve:proxy</dt>\n                    <dd>run the proxy server<span class=\"badge bg-secondary\">--proxy address</span></dd>\n                </li>\n                <li>\n                    <dt>bundle</dt>\n                    <dd>rollup bundle</dd>\n                </li>\n                <li>\n                    <dt>bundle:watch</dt>\n                    <dd>rollup bundle watch</dd>\n                </li>\n            </ul>\n        </dl>\n\n    </section>\n\n    <hr>\n\n    <h1>📄 Code description</h1>\n    <section>\n        <h2>simple-boot-front start</h2>\n        <figure>\n            <figcaption>index.html</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n    &lt;meta charset=&quot;UTF-8&quot;&gt;\n    &lt;title&gt;simple-boot-front&lt;/title&gt;\n    &lt;script src=&quot;bundle.js&quot; defer&gt;&lt;/script&gt;\n    &lt;link rel=&quot;shortcut icon&quot; href=&quot;assets/favicons/favicon.ico&quot;&gt;\n&lt;/head&gt;\n&lt;body id=&quot;app&quot;&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</pre>\n        </figure>\n        <figure>\n            <figcaption>index.ts (simple-boot-front start)</figcaption>\n            <pre dr-pre class=\"code-container typescript\">const config = new SimFrontOption(window);\nconfig.setUrlType(UrlType.hash);\nnew SimpleBootFront(Index, config).run();</pre>\n        </figure>\n    </section>\n\n    <hr>\n    <section>\n        <h2>single page</h2>\n        <figure>\n            <figcaption>index.ts</figcaption>\n            <pre dr-pre class=\"code-container typescript\">import template from './index.html'\nimport style from './index.css'\n@Component({\n    template,\n    styles: [style]\n})\nexport class Index {\n}</pre>\n        </figure>\n    </section>\n\n    <hr>\n    <router-template-section dr-on-init=\"$component.title = 'multiple route pages'\"></router-template-section>\n</article>\n\n";

var style$l = "ul.root-directory {\n    list-style:none;\n}\nul.root-directory > li::before {\n    content: '├ ';\n}\nul.root-directory > li:first-child::before {\n    content: '┌ ';\n    margin-left: -1px;\n    font-size: 0.9rem;\n}\n\nul.root-directory > li:last-child::before {\n    content: '└ ';\n    font-size: 0.9rem;\n    margin-left: -1px;\n}\n\n\nul.child-directory {\n    list-style:none;\n    /*padding-left: calc(50 - 10px);*/\n}\nul.child-directory > li::before {\n    content: ' ├ ';\n    padding-left: 4px;\n}\nul.child-directory > li:last-child::before {\n    content: '└ ';\n    font-size: 0.9rem;\n    margin-left: -1px;\n}\n\nul.root-directory > li small, ul.child-directory > li small {\n    font-size: 0.5rem;\n    padding-left: 3px;\n}\nul.root-directory > li small::before, ul.child-directory > li small::before {\n    content: '(';\n}\nul.root-directory > li small::after, ul.child-directory > li small::after {\n    content: ')';\n}\n";

var template$r = "<section>\n    <h2>${this.title}$</h2>\n    <figure>\n        <figcaption>index.html</figcaption>\n        <pre dr-pre class=\"code-container html\">&lt;header&gt;\n    &lt;nav&gt;\n        &lt;ul&gt;\n            &lt;li&gt;\n                &lt;button router-link=&quot;/&quot;&gt;home&lt;/button&gt;\n            &lt;/li&gt;\n            &lt;li&gt;\n                &lt;button router-link=&quot;/user&quot;&gt;user&lt;/button&gt;\n            &lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/nav&gt;\n\n&lt;/header&gt;\n&lt;main&gt;\n    &lt;router component=&quot;this.child&quot;&gt;&lt;/router&gt;\n&lt;/main&gt;\n&lt;footer&gt;\n    footer\n&lt;/footer&gt;\n</pre>\n    </figure>\n    <figure>\n        <figcaption>router index.ts</figcaption>\n        <pre dr-pre class=\"code-container typescript\">@Sim()\n@Router({\n    path: '',\n    route: {\n        '/': Home,\n        '/users': User\n    }\n})\n@Component({\n    template,\n    styles: [style]\n})\nexport class Index implements RouterAction {\n    child?: any;\n    canActivate(url: any, module: any): void {\n        this.child = module;\n    }\n}</pre>\n    </figure>\n    \n</section>\n";

var RouterTemplateSection = (function () {
    function RouterTemplateSection() {
        this.title = 'Router';
    }
    RouterTemplateSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'router-template-section',
            template: template$r
        })
    ], RouterTemplateSection);
    return RouterTemplateSection;
}());

var FrontQuickstart = (function () {
    function FrontQuickstart() {
    }
    FrontQuickstart.prototype.onInit = function () {
    };
    FrontQuickstart = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$s,
            styles: [style$l],
            using: [RouterTemplateSection]
        }),
        __metadata("design:paramtypes", [])
    ], FrontQuickstart);
    return FrontQuickstart;
}());

var template$q = "<article>\n    <h1>option config</h1>\n    <p>simple-boot-front Framworks option</p>\n    <section>\n        <h2>simFrontOption</h2>\n        <figure>\n            <figcaption>simple-boot-front/option/SimFrontOption.ts</figcaption>\n            <pre dr-pre class=\"code-container typescript\">const config = new SimFrontOption(window);</pre>\n            <pre dr-pre class=\"code-container typescript\">export declare enum UrlType {\n    path = \"path\",\n    hash = \"hash\"\n}\nexport declare class SimFrontOption extends SimOption {\n    window: Window;\n    selector: string;\n    urlType: UrlType;\n    constructor(window: Window, advice?: ConstructorType&lt;any&gt;[]);\n    setSelector(selector: string): SimFrontOption;\n    setUrlType(urlType: UrlType): SimFrontOption;\n}\n</pre>\n        </figure>\n        <dl class=\"dl-container\">\n            <ul>\n                <li>\n                    <dt>constructor</dt>\n                    <dd>\n                        <ol>\n                            <li>\n                                window object\n                            </li>\n                            <li>\n                                global advice class @Sim class type\n                            </li>\n                        </ol>\n                    </dd>\n                </li>\n                <li>\n                    <dt>selector</dt>\n                </li>\n                <dd>target element selector (default: '#app')</dd>\n                <li>\n                    <dt>urlType</dt>\n                    <dd>\n                        <ul>\n                            <li>UrlType.path (default)</li>\n                            <li>UrlType.hash</li>\n                        </ul>\n                    </dd>\n                </li>\n            </ul>\n        </dl>\n    </section>\n\n    <hr>\n\n    <section>\n        <h2>simpleBootFront</h2>\n        <figure>\n            <figcaption>simple-boot-front/SimpleBootFront.ts</figcaption>\n            <pre dr-pre class=\"code-container typescript\">const config = new SimFrontOption(window);\nnew SimpleBootFront(Index, config).run();</pre>\n            <pre dr-pre class=\"code-container typescript\">export declare class SimpleBootFront extends SimpleApplication {\n    rootRouter: ConstructorType&lt;any&gt;;\n    option: SimFrontOption;\n    navigation: Navigation;\n    domRendoerExcludeProxy: (typeof SimFrontOption | typeof SimstanceManager | typeof SimpleApplication | typeof Navigation | typeof HttpService | typeof IntentManager | typeof RouterManager)[];\n    domRenderTargetElements: TargetElement[];\n    domRenderTargetAttrs: TargetAttr[];\n    domRenderConfig: Config;\n    constructor(rootRouter: ConstructorType&lt;any&gt;, option: SimFrontOption);\n    getComponentInnerHtml(targetObj: any): string;\n    createDomRender&lt;T extends object&gt;(obj: T): T;\n    run(): void;\n    private afterSetting;\n    resetDomrenderScripts(): void;\n}</pre>\n        </figure>\n        <dl class=\"dl-container\">\n            <ul>\n                <li>\n                    <dt>constructor</dt>\n                    <dd>\n                        <ol>\n                            <li>\n                                Router Component or Component class type\n                            </li>\n                            <li>\n                                SimFrontOption object\n                            </li>\n                        </ol>\n                    </dd>\n                </li>\n                <li>\n                    <dt>domRendoerExcludeProxy</dt>\n                </li>\n                <dd>domRender proxy exclude type list</dd>\n                <li>\n                    <dt>run</dt>\n                </li>\n                <dd>simple-boot-front start</dd>\n            </ul>\n        </dl>\n    </section>\n</article>\n\n";

var style$k = "";

var FrontOption = (function () {
    function FrontOption(apiService) {
        this.apiService = apiService;
    }
    FrontOption.prototype.onInit = function () {
    };
    FrontOption = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$q,
            styles: [style$k]
        }),
        __metadata("design:paramtypes", [ApiService])
    ], FrontOption);
    return FrontOption;
}());

var template$p = "<article>\n    <h1>@Router</h1>\n    <p>page routing controller</p>\n    <router-template-section dr-on-init=\"$component.title = 'create'\"></router-template-section>\n    <hr>\n    <core-routermapping-section></core-routermapping-section>\n    <hr>\n    <core-routercurrent-section></core-routercurrent-section>\n    <hr>\n    <core-routerconfig-section></core-routerconfig-section>\n    <hr>\n    <core-routeraction-section></core-routeraction-section>\n\n    <hr>\n    <section>\n        <h2>include Component</h2>\n        <p>Route Change callback Component Data</p>\n        <figure>\n            <figcaption>include component</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;route component=&quot;this.child&quot;&gt;&lt;/route&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>routing in html</h2>\n        <figure>\n            <figcaption>router-link attribute</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;button router-link=&quot;/&quot;&gt;home&lt;/button&gt;\n&lt;a router-link=&quot;/home&quot; router-active-class=&quot;active&quot; router-inactive-class=&quot;inactive&quot;&gt;home&lt;/a&gt;</pre>\n        </figure>\n        <dl>\n            <ul>\n                <li>\n                    <dt>router-link</dt>\n                    <dd>Go to the page (route url)</dd>\n                </li>\n                <li>\n                    <dt>router-active-class</dt>\n                    <dd>current route path matching set className</dd>\n                </li>\n                <li>\n                    <dt>router-inactive-class</dt>\n                    <dd>current route path matching unset className</dd>\n                </li>\n            </ul>\n        </dl>\n    </section>\n</article>\n\n";

var style$j = "";

var template$o = "<section>\n    <h2>${this.title}$</h2>\n    <dl class=\"dl-container\">\n        <ul>\n            <li>\n                <dt>path</dt>\n                <dd>router control path</dd>\n            </li>\n            <li>\n                <dt>route</dt>\n                <dd>mapping components</dd>\n            </li>\n            <li>\n                <dt>routers</dt>\n                <dd>sub router array</dd>\n            </li>\n        </ul>\n    </dl>\n</section>\n";

var CoreRouterconfigSection = (function () {
    function CoreRouterconfigSection() {
        this.title = 'routerConfig';
    }
    CoreRouterconfigSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'core-routerconfig-section',
            template: template$o
        })
    ], CoreRouterconfigSection);
    return CoreRouterconfigSection;
}());

var template$n = "<section>\n    <h2>${this.title}$</h2>\n    <figure>\n        <figcaption>router.ts</figcaption>\n        <pre dr-pre class=\"code-container typescript\">@Sim()\n@Router({\n    path: '',\n    route: {\n        '': '/',\n        '/': [Home, {data: 456}],\n        '/user': User,\n        '/user/:aa/addr': [UserAddr, {data:'data'}]\n    },\n    routers: [UserRouter]\n})\nexport class AppRouter implements RouterAction {\n    constructor() {\n    }\n    canActivate(url: Intent, module: any): void {\n        console.log('AppRouter canActivate->>>>>', url, module)\n    }\n}</pre>\n    </figure>\n    \n</section>\n\n";

var CoreRouterTemplateSection = (function () {
    function CoreRouterTemplateSection() {
        this.title = 'router';
    }
    CoreRouterTemplateSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'core-router-template-section',
            template: template$n
        })
    ], CoreRouterTemplateSection);
    return CoreRouterTemplateSection;
}());

var template$m = "\n<section>\n    <h2>${this.title}$</h2>\n    <figure>\n        <figcaption>@Router</figcaption>\n        <pre dr-pre class=\"code-container typescript\">@Router({\n    path: '',\n    route: {\n        '/': Home,\n        '/jhon': '/user',\n        '/user': User,\n        '/user/:id': UserDetail,\n        '/welcom': [Welcom, {msg: 'welcom', other: 'other data'}]\n    }\n})</pre>\n    </figure>\n    <dl dr-pre>\n        <ul>\n            <li>\n                <dt>'path': Component(@Sim)</dt>\n                <dd>matches the path, this Component (@Sim) call</dd>\n            </li>\n            <li>\n                <dt>'path': 'path'</dt>\n                <dd>Redirect end point (no url changed)</dd>\n            </li>\n            <li>\n                <dt>'path': '/path/:data'</dt>\n                <dd>url path variable</dd>\n            </li>\n            <li>\n                <dt>'path': [Component (@Sim), Data]</dt>\n                <dd>call Component with Data</dd>\n            </li>\n        </ul>\n    </dl>\n</section>\n";

var CoreRoutermappingSection = (function () {
    function CoreRoutermappingSection() {
        this.title = 'router Mapping';
    }
    CoreRoutermappingSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'core-routermapping-section',
            template: template$m
        })
    ], CoreRoutermappingSection);
    return CoreRoutermappingSection;
}());

var template$l = "\n<section>\n    <h2>${this.title}$</h2>\n    <figure>\n        <figcaption>get RouterModule in Component</figcaption>\n        <pre dr-pre class=\"code-container typescript\">constructor(routerManager: RouterManager){\n    // get path data  '/user/:id'\n    routerManager.activeRouterModule.pathData.id;\n\n    // receive data\n    routerManager.activeRouterModule.data\n}</pre>\n    </figure>\n</section>\n";

var CoreRoutercurrentSection = (function () {
    function CoreRoutercurrentSection() {
        this.title = 'current Route (RouterModule)';
    }
    CoreRoutercurrentSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'core-routercurrent-section',
            template: template$l
        })
    ], CoreRoutercurrentSection);
    return CoreRoutercurrentSection;
}());

var template$k = "<section>\n    <h2>${this.title}$</h2>\n    <p>Route Change callback in Router</p>\n    <figure>\n        <figcaption>simple-boot-core/route/RouterAction</figcaption>\n        <pre dr-pre class=\"code-container typescript\">export interface RouterAction {\n    canActivate(url: Intent, module: any): void;\n}</pre>\n    </figure>\n</section>\n";

var CoreRouteractionSection = (function () {
    function CoreRouteractionSection() {
        this.title = 'routerAction';
    }
    CoreRouteractionSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'core-routeraction-section',
            template: template$k
        })
    ], CoreRouteractionSection);
    return CoreRouteractionSection;
}());

var FrontRouter = (function () {
    function FrontRouter() {
    }
    FrontRouter.prototype.onInit = function () {
    };
    FrontRouter = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$p,
            styles: [style$j],
            using: [RouterTemplateSection, CoreRouterconfigSection, CoreRouterTemplateSection, CoreRoutermappingSection, CoreRoutercurrentSection, CoreRouteractionSection]
        }),
        __metadata("design:paramtypes", [])
    ], FrontRouter);
    return FrontRouter;
}());

var template$j = "<article>\n    <h1>@Script</h1>\n    <p>define script instructions and call</p>\n    <section>\n        <h2>create</h2>\n        <p>extends ScriptRunnable class (create 'run' method) implements</p>\n        <figure>\n            <figcaption>define Script class</figcaption>\n            <pre dr-pre class=\"code-container typescript\">\n@Sim()\n@Script({\n    name: 'calc'\n})\nexport class CalcScript extends ScriptRunnable {\n    constructor() {\n        super();\n    }\n\n    run(data1: number, data2: nuber): any {\n        return data1 + data2;\n    }\n\n}</pre>\n        </figure>\n    </section>\n\n    <hr>\n\n    <section>\n        <h2>using</h2>\n        <figure>\n            <figcaption>class</figcaption>\n            <pre dr-pre class=\"code-container typescript\">counstructor(calcScript: CalcScript) {...}\ncounstructor(scriptService: ScriptService) {\n  const script = scriptService.getScript('calc');\n}</pre>\n        </figure>\n        <figure>\n            <figcaption>html</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;div&gt;${$scripts.calc(1, 4)}$&lt;/div&gt;\n&lt;div dr-if=&quot;$scripts.calc(1, 3) === 3&quot;&gt; is 3&lt;/div&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>scriptConfig</h2>\n        <figure>\n            <figcaption>ScriptConfig.ts</figcaption>\n            <pre dr-pre class=\"code-container typescript\">export interface ScriptConfig {\n    name?: string,\n    using?: (ConstructorType&lt;any&gt;)[],\n}</pre>\n        </figure>\n        <dl class=\"dl-container\">\n            <ul>\n                <li>\n                    <dt>name</dt>\n                    <dd>script name</dd>\n                </li>\n                <li>\n                    <dt>using</dt>\n                    <dd>using components or scripts in this component</dd>\n                </li>\n            </ul>\n        </dl>\n    </section>\n    <hr>\n    <section>\n        <h2>change Data and Ref re render</h2>\n        <p>If the data changes, re render the place you are referring to.</p>\n        <p>🔨 example: i18n Script</p>\n        <figure>\n            <figcaption>html</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;div&gt;${$scripts.i18n('hello')}$&lt;/div&gt;</pre>\n        </figure>\n        <figure>\n            <figcaption>I18nScript.ts</figcaption>\n            <pre dr-pre class=\"code-container typescript\">@Sim()\n@Script({\n    name: 'i18n'\n})\nexport class I18nScript extends ScriptRunnable {\n    public language?: Language;\n    constructor(public i18nService: I18nService) {\n        super();\n        i18nService.subject.subscribe(it => {\n            this.language = it;\n            this.render();  //  ref target  rerender\n        })\n    }\n    run(key: string): any {\n        return this.language?.defaultData?.[key] ?? key;\n    }\n}</pre>\n        </figure>\n        <figure>\n            <figcaption>I18nService.ts</figcaption>\n            <pre dr-pre class=\"code-container typescript\">import enUS from '@generate/i18n/message_en_US.json';\nimport koKR from '@generate/i18n/message_ko_KR.json';\nimport { ApiService } from 'services/ApiService';\nimport { Sim } from 'simple-boot-core/decorators/SimDecorator';\nimport { OnSimCreate } from 'simple-boot-core/lifecycle/OnSimCreate';\nimport { IntentManager } from 'simple-boot-core/intent/IntentManager';\nimport { BehaviorSubject } from 'rxjs';\nexport type Language = {\n    key: string;\n    param: string;\n    alt: string;\n    title: string;\n    defaultData: {[k: string]: string  }\n}\n\n\nexport const languages: Language[] = [\n    {\n        key: 'us',\n        param: 'en_US',\n        alt: 'United States',\n        title: 'English (US)',\n        defaultData: enUS\n    },\n\n    {\n        key: 'kr',\n        param: 'ko_KR',\n        alt: 'Korea',\n        title: '한국어',\n        defaultData: koKR\n    }\n];\n\n@Sim()\nexport class I18nService implements OnSimCreate {\n    public subject = new BehaviorSubject<language |undefined>(this.getData());\n    constructor(public apiService: ApiService, public indentManager: IntentManager) {\n    }\n\n    onSimCreate(): void {\n        const country = this.currentCountry;\n        this.changeCountry(country);\n    }\n\n    public changeCountry(country: string) {\n        this.apiService.get(`/langs/message_${country}.json`)\n            .then(data => {\n                const findLangguage = this.getData(country);\n                if (findLangguage) {\n                    findLangguage.defaultData = data;\n                    this.subject.next(findLangguage);\n                }\n            })\n    }\n\n    public getData(key: string = this.currentCountry) {\n        return languages.find(it => it.key === key);\n    }\n\n    public getDatas() {\n        return languages;\n    }\n\n    public get currentCountry() {\n        return navigator.language.toLowerCase().replace('-', '_').split('_') [1] ?? 'us'\n    }\n\n}\n</language></pre>\n        </figure>\n    </section>\n</article>\n\n";

var style$i = "";

var FrontScript = (function () {
    function FrontScript() {
    }
    FrontScript.prototype.onInit = function () {
    };
    FrontScript = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$j,
            styles: [style$i]
        }),
        __metadata("design:paramtypes", [])
    ], FrontScript);
    return FrontScript;
}());

var template$i = "<!--    <p>¯\\_(ツ)_/¯ - Everyone</p>-->\n<article>\n    <h1>SIMPLE-BOOT-FRONT-CLI (sbf)</h1>\n    <p>sbf cli</p>\n    <ul class=\"badge-container\">\n        <li>\n            <a href=\"https://www.npmjs.com/package/simple-boot-front-cli\" target=\"_blank\"><img src=\"https://img.shields.io/badge/npm-blue?logo=npm\"></a>\n        </li>\n        <li>\n            <img src=\"https://img.shields.io/badge/license-MIT-green\">\n        </li>\n        <li>\n            <a href=\"https://github.com/visualkhh/simple-boot-front/tree/master/cli\" target=\"_blank\"><img src=\"https://img.shields.io/badge/-github-black?logo=github\"></a>\n        </li>\n    </ul>\n    <section>\n        <h2>🚀 Quick start </h2>\n        <figure>\n            <figcaption>terminal</figcaption>\n            <pre class=\"code-container bash\">npm install simple-boot-cli</pre>\n        </figure>\n        <dl class=\"dl-container\">\n            <ul>\n                <li>\n                    <dt>serve</dt>\n                    <dd>\n                        http server and proxy\n                        <ul>\n                            <li>--path dist path</li>\n                            <li>--port server port</li>\n                            <li>--proxy proxy url</li>\n                            <li>--bundle rollup</li>\n                            <li>--watch fileChange(dist) browser refresh</li>\n                        </ul>\n                    </dd>\n                </li>\n                <li>\n                    <dt>create</dt>\n                    <dd>create simple-boot-front template project</dd>\n                </li>\n                <li>\n                    <dt>rollup-build</dt>\n                    <dd>\n                        project rollup bundle\n                        <ul>\n                            <li>--config rollup config path</li>\n                            <li>--watch rollup watc</li>\n                        </ul>\n                    </dd>\n                </li>\n                <li>\n                    <dt>exec</dt>\n                    <dd>\n                        executing Shell Commands <small>(child-process)</small>\n                        <ul>\n                            <li>--cmd 'copmmand' ...--cmd... <small>(multiple)</small></li>\n                        </ul>\n                    </dd>\n                </li>\n            </ul>\n        </dl>\n    </section>\n    <hr>\n    <section>\n        <h2>example</h2>\n        <figure>\n            <figcaption>serve</figcaption>\n            <pre class=\"code-container bash\">sbf serve --path ../dist --watch</pre>\n        </figure>\n    </section>\n</article>\n";

var style$h = "";

var CliIntroduction = (function () {
    function CliIntroduction(apiService) {
        this.apiService = apiService;
    }
    CliIntroduction.prototype.onInit = function () {
    };
    CliIntroduction = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$i,
            styles: [style$h]
        }),
        __metadata("design:paramtypes", [ApiService])
    ], CliIntroduction);
    return CliIntroduction;
}());

var template$h = "<!--    <p>¯\\_(ツ)_/¯ - Everyone</p>-->\n<article>\n    <h1>CREATE-SIMPLE-BOOT</h1>\n    <p>default boilerplate template creater</p>\n    <ul class=\"badge-container\">\n        <li>\n            <a href=\"https://www.npmjs.com/package/create-simple-boot-front\" target=\"_blank\"><img src=\"https://img.shields.io/badge/npm-blue?logo=npm\"></a>\n        </li>\n        <li>\n            <img src=\"https://img.shields.io/badge/license-MIT-green\">\n        </li>\n        <li>\n            <a href=\"https://github.com/visualkhh/simple-boot-front/tree/master/create\" target=\"_blank\"><img src=\"https://img.shields.io/badge/-github-black?logo=github\"></a>\n        </li>\n    </ul>\n    <section>\n        <h2>🚀 Quick start </h2>\n        <figure>\n            <figcaption>terminal</figcaption>\n            <pre class=\"code-container bash\">npm init simple-boot-front projectname\ncd projectname\nnpm start</pre>\n        </figure>\n        <dl class=\"dl-container\">\n            <ul>\n                <li>\n                    <dt>bundler</dt>\n                    <dd>\n                        rollup <small>(default)</small>\n                    </dd>\n                </li>\n            </ul>\n        </dl>\n    </section>\n    <hr>\n    <section>\n        <h2>example</h2>\n        <figure>\n            <figcaption>serve</figcaption>\n            <pre class=\"code-container bash\">sbf serve --path ../dist --watch</pre>\n        </figure>\n    </section>\n</article>\n";

var style$g = "";

var CreateIntroduction = (function () {
    function CreateIntroduction(apiService) {
        this.apiService = apiService;
    }
    CreateIntroduction.prototype.onInit = function () {
    };
    CreateIntroduction = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$h,
            styles: [style$g]
        }),
        __metadata("design:paramtypes", [ApiService])
    ], CreateIntroduction);
    return CreateIntroduction;
}());

var template$g = "<article>\n    <h1>SIMPLE-BOOT-CORE</h1>\n    <p>core Engine</p>\n\n    <ul class=\"badge-container\">\n        <li>\n            <a href=\"https://www.npmjs.com/package/simple-boot-core\" target=\"_blank\"><img src=\"https://img.shields.io/badge/npm-blue?logo=npm\"></a>\n        </li>\n        <li>\n            <img src=\"https://img.shields.io/badge/license-MIT-green\">\n        </li>\n        <li>\n            <a href=\"https://github.com/visualkhh/simple-boot-core\" target=\"_blank\"><img src=\"https://img.shields.io/badge/-github-black?logo=github\"></a>\n        </li>\n    </ul>\n\n    <section>\n        <h2>our primary goals are</h2>\n        <ul>\n            <li>manage objects easily.</li>\n            <li>users focus only on business logic.</li>\n        </ul>\n    </section>\n\n    <hr>\n\n    <section>\n        <h2>dependencies</h2>\n        <ul>\n            <li>0 zero dependency</li>\n        </ul>\n    </section>\n\n    <hr>\n    <core-lifecycle-section></core-lifecycle-section>\n    <hr>\n    <core-function-section></core-function-section>\n    <hr>\n\n    <section>\n        <h2>contributors</h2>\n        <a href=\"https://github.com/visualkhh/simple-boot-core/graphs/contributors\">\n            <img src=\"https://contrib.rocks/image?repo=visualkhh/simple-boot-core\">\n        </a>\n    </section>\n</article>\n";

var style$f = "";

var CoreIntroduction = (function () {
    function CoreIntroduction(apiService) {
        this.apiService = apiService;
    }
    CoreIntroduction.prototype.onInit = function () {
    };
    CoreIntroduction = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$g,
            styles: [style$f],
            using: [CoreLifecycleSection, CoreFunctionSection]
        }),
        __metadata("design:paramtypes", [ApiService])
    ], CoreIntroduction);
    return CoreIntroduction;
}());

var template$f = "<article>\n    <h1>🚀 Quick start</h1>\n    <p>Start a project simply and quickly.</p>\n    <section>\n        <h2>create</h2>\n        <figure>\n            <figcaption>terminal</figcaption>\n            <pre class=\"code-container bash\">npm install simple-boot-core</pre>\n        </figure>\n    </section>\n\n    <hr>\n    <section>\n        <h2>simple-boot-core start</h2>\n        <figure>\n            <figcaption>index.ts</figcaption>\n            <pre dr-pre class=\"code-container typescript\">const option = new SimOption([GlobalAdvice]);\nconst simpleApplication = new SimpleApplication(AppRouter, option);\nsimpleApplication.run();\nconst intent = new Intent(&#39;/user/456/addr&#39;);\nsimpleApplication.routing&lt;SimAtomic&lt;any&gt;, any&gt;(intent)\n .then(it =&gt; {\n    let moduleInstance = it.getModuleInstance&lt;UserAddr&gt;();\n    moduleInstance?.print();\n });</pre>\n        </figure>\n    </section>\n\n    <hr>\n    <core-router-template-section></core-router-template-section>\n</article>\n\n";

var style$e = "";

var CoreQuickstart = (function () {
    function CoreQuickstart() {
    }
    CoreQuickstart.prototype.onInit = function () {
    };
    CoreQuickstart = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$f,
            styles: [style$e],
            using: [CoreRouterTemplateSection]
        }),
        __metadata("design:paramtypes", [])
    ], CoreQuickstart);
    return CoreQuickstart;
}());

var template$e = "<article>\n    <h1>@Router</h1>\n    <p>routing controller</p>\n\n    <core-router-template-section dr-on-init=\"$component.title='create'\"></core-router-template-section>\n    <hr>\n    <core-routermapping-section></core-routermapping-section>\n    <hr>\n    <core-routerconfig-section></core-routerconfig-section>\n    <hr>\n    <core-routercurrent-section></core-routercurrent-section>\n    <hr>\n    <core-routeraction-section></core-routeraction-section>\n</article>\n\n";

var style$d = "";

var CoreRouter = (function () {
    function CoreRouter() {
    }
    CoreRouter.prototype.onInit = function () {
    };
    CoreRouter = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$e,
            styles: [style$d],
            using: [CoreRouterconfigSection, CoreRouterTemplateSection, CoreRoutermappingSection, CoreRoutercurrentSection, CoreRouteractionSection]
        }),
        __metadata("design:paramtypes", [])
    ], CoreRouter);
    return CoreRouter;
}());

var template$d = "<article>\n    <h1>⚡️Intent Event System</h1>\n    <p>transmit data between objects and generate events</p>\n    <p>send data and generate events to @Sim scheme</p>\n    <ul>\n        <li>Support Object transmission</li>\n        <li>Support query parameters</li>\n        <li>Allocate directly to variables</li>\n        <li>Calling the method</li>\n    </ul>\n    <hr>\n    <section>\n        <h2>intent publish</h2>\n        <figure>\n            <figcaption>publish</figcaption>\n            <pre dr-pre class=\"code-container typescript\">@Sim({scheme:'user'})\nexport class User {\n    constructor(private intentManager: IntentManager) {\n    }\n    publishEvent() {\n        // this.intentManager.publish(new Intent('targetScheme://path?a=55', 'ddddddddddd'));\n        // this.intentManager.publish(new Intent('targetScheme://path?bb=44&ff=44', '444'));\n        // this.intentManager.publish(new Intent('targetScheme://path?gg=55&sadfsdf=444', '55'));\n        //global\n        this.intentManager.publish('://path?query=a')\n        //target\n        this.intentManager.publish('scheme://path?query=a')\n    }\n}</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>intent subscribe</h2>\n\n\n\n        <figure>\n            <figcaption>implements interface IntentSubscribe</figcaption>\n            <pre dr-pre class=\"code-container typescript\">export interface IntentSubscribe {\n    intentSubscribe(intent: Intent): void;\n}\n</pre>\n        </figure>\n        <figure>\n            <figcaption>method subscribe</figcaption>\n            <pre dr-pre class=\"code-container typescript\">class User implements IntentSubscribe {\n    intentSubscribe(intent: Intent) {\n        //receive\n    }\n}</pre>\n        </figure>\n    </section>\n<hr>\n    <section>\n        <h2>intent</h2>\n        <figure>\n            <figcaption>simple-boot-core/intent/Intent</figcaption>\n            <pre dr-pre class=\"code-container typescript\">export declare class Intent&lt;T = any, E = any&gt; {\n    uri: string;\n    data?: T | undefined;\n    event?: E | undefined;\n    constructor(uri: string, data?: T | undefined, event?: E | undefined);\n    get scheme(): string;\n    get paths(): string[];\n    get fullPath(): string;\n    get pathname(): string;\n    get query(): string;\n    get queryParams(): {\n        [key: string]: string;\n    };\n    getPathnameData(urlExpression: string): {\n        [name: string]: string;\n    } | undefined;\n}\n</pre>\n        </figure>\n    </section>\n</article>\n\n";

var style$c = "";

var CoreIntent = (function () {
    function CoreIntent() {
    }
    CoreIntent.prototype.onInit = function () {
    };
    CoreIntent = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$d,
            styles: [style$c]
        }),
        __metadata("design:paramtypes", [])
    ], CoreIntent);
    return CoreIntent;
}());

var template$c = "<article>\n    <h1>Aspect Oriented Programming (AOP)</h1>\n    <ul>\n        <li>Support method aop</li>\n    </ul>\n    <hr>\n    <section>\n        <h2>@After, @Before</h2>\n        <figure>\n            <figcaption>After, Before simple-boot-core/decorators/aop/AOPDecorato</figcaption>\n            <pre dr-pre class=\"code-container typescript\">@Sim()\nexport class User {\n    // target method\n    print() {\n        console.log('execute print method');\n    }\n\n    @Before({property: 'print'})\n    before() {\n        console.log('---Before----');\n    }\n\n    @After({property: 'print'})\n    after() {\n        console.log('---After----');\n    }\n}}</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>AOPOption</h2>\n        <figure>\n            <figcaption>AOPOption</figcaption>\n            <pre dr-pre class=\"code-container typescript\">type AOPOption = {type?: ConstructorType&lt;any&gt;, property: string}</pre>\n        </figure>\n        <dl>\n            <ul>\n                <li>\n                    <dt>type</dt>\n                    <dl>target Type (optional)</dl>\n                </li>\n                <li>\n                    <dt>property</dt>\n                    <dl>property method name</dl>\n                </li>\n            </ul>\n        </dl>\n    </section>\n</article>\n\n";

var style$b = "";

var CoreAop = (function () {
    function CoreAop() {
    }
    CoreAop.prototype.onInit = function () {
    };
    CoreAop = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$c,
            styles: [style$b]
        }),
        __metadata("design:paramtypes", [])
    ], CoreAop);
    return CoreAop;
}());

var template$b = "<article>\n    <h1>Exception Advice</h1>\n    <ul>\n        <li>Support Global, Exception Type Advice</li>\n    </ul>\n    <hr>\n    <section>\n        <h2>@ExceptionHandler</h2>\n        <figure>\n            <figcaption>ExceptionHandler simple-boot-core/decorators/exception/ExceptionDecorator</figcaption>\n            <pre dr-pre class=\"code-container typescript\">@Sim()\nexport class GlobalAdvice {\n\n    constructor() {\n    }\n\n    @ExceptionHandler()\n    print(error: any){\n        console.log('global advice errorr', error.msg)\n    }\n\n    @ExceptionHandler(NotFoundError)\n    print(error: NotFoundError){\n        console.log('NotFoundError', error)\n    }\n\n}\n</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>exceptionHandler</h2>\n        <figure>\n            <figcaption>ExceptionDecorator.ts</figcaption>\n            <pre dr-pre class=\"code-container typescript\">export const ExceptionHandler = (target?: ConstructorType&lt;any&gt;) =&gt; {\n    return ReflectUtils.metadata(ExceptionHandlerMetadataKey, target ?? null);\n}</pre>\n        </figure>\n        <dl>\n            <ul>\n                <li>\n                    <dt>target</dt>\n                    <dl>target Exception Target (optional)</dl>\n                </li>\n            </ul>\n        </dl>\n    </section>\n</article>\n\n";

var style$a = "";

var CoreAdvice = (function () {
    function CoreAdvice() {
    }
    CoreAdvice.prototype.onInit = function () {
    };
    CoreAdvice = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$b,
            styles: [style$a]
        }),
        __metadata("design:paramtypes", [])
    ], CoreAdvice);
    return CoreAdvice;
}());

var template$a = "<article>\n    <h1>DOM-RENDER</h1>\n    <p>view template Engine</p>\n\n    <ul class=\"badge-container\">\n        <li>\n            <a href=\"https://www.npmjs.com/package/dom-render\" target=\"_blank\"><img src=\"https://img.shields.io/badge/npm-blue?logo=npm\"></a>\n        </li>\n        <li>\n            <img src=\"https://img.shields.io/badge/license-MIT-green\">\n        </li>\n        <li>\n            <a href=\"https://github.com/visualkhh/dom-render\" target=\"_blank\"><img src=\"https://img.shields.io/badge/-github-black?logo=github\"></a>\n        </li>\n    </ul>\n\n    <domrender-function-section></domrender-function-section>\n\n    <hr>\n\n    <section>\n        <h2>dependencies</h2>\n        <ul>\n            <li>0 zero dependency</li>\n        </ul>\n    </section>\n\n    <hr>\n    <domrender-lifecycle-section></domrender-lifecycle-section>\n    <section>\n        <h2>contributors</h2>\n        <a href=\"https://github.com/visualkhh/dom-render/graphs/contributors\">\n            <img src=\"https://contrib.rocks/image?repo=visualkhh/dom-render\">\n        </a>\n    </section>\n</article>\n";

var style$9 = "";

var template$9 = "<section>\n    <h2>${this.title}$</h2>\n    <dl dr-pre>\n        <ul>\n            <li>\n                <dt>onInitRender()</dt>\n                <dd>init rendered call<small>(OnInitRender.ts)</small></dd>\n            </li>\n        </ul>\n    </dl>\n</section>\n";

var DomrenderLifecycleSection = (function () {
    function DomrenderLifecycleSection() {
        this.title = 'dom-render life cycle';
    }
    DomrenderLifecycleSection = __decorate([
        SimDecorator_7(),
        Component_3({
            selector: 'domrender-lifecycle-section',
            template: template$9
        })
    ], DomrenderLifecycleSection);
    return DomrenderLifecycleSection;
}());

var DomrenderIntroduction = (function () {
    function DomrenderIntroduction(apiService) {
        this.apiService = apiService;
    }
    DomrenderIntroduction.prototype.onInit = function () {
    };
    DomrenderIntroduction = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$a,
            styles: [style$9],
            using: [DomrenderFunctionSection, DomrenderLifecycleSection]
        }),
        __metadata("design:paramtypes", [ApiService])
    ], DomrenderIntroduction);
    return DomrenderIntroduction;
}());

var template$8 = "<article>\n    <h1>🚀 Quick start</h1>\n    <p>Start a project simply and quickly.</p>\n    <section>\n        <h2>create</h2>\n        <figure>\n            <figcaption>terminal</figcaption>\n            <pre class=\"code-container bash\">npm install dom-render</pre>\n        </figure>\n    </section>\n\n    <hr>\n    <h1>📄 Code description</h1>\n    <section>\n        <h2>simple-boot-front start</h2>\n        <figure>\n            <figcaption>index.html</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;!DOCTYPE html&gt;\n&lt;html lang=&quot;en&quot;&gt;\n&lt;head&gt;\n    &lt;meta charset=&quot;UTF-8&quot;&gt;\n    &lt;title&gt;simple-boot-front&lt;/title&gt;\n    &lt;script src=&quot;bundle.js&quot; defer&gt;&lt;/script&gt;\n    &lt;link rel=&quot;shortcut icon&quot; href=&quot;assets/favicons/favicon.ico&quot;&gt;\n&lt;/head&gt;\n&lt;body id=&quot;app&quot;&gt;\n    &lt;div&gt;name: ${this.name} &lt;/div&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</pre>\n        </figure>\n        <figure>\n            <figcaption>index.ts (dom-render start)</figcaption>\n            <pre dr-pre class=\"code-container typescript\">const target = document.querySelector('#app');\nconst data = DomRender.run({name: 'my name is dom-render'}, target);\ndata.name = 'modify name';</pre>\n        </figure>\n    </section>\n\n    <hr>\n    <section>\n        <h2>Expressions (calc and innerTEXT)</h2>\n        <p dr-pre>${...}$</p>\n        <figure dr-pre class=\"content-container-white\">\n            <figcaption>${...}$</figcaption>\n            <dl>\n                <ul>\n                    <li>\n                        <dt>start</dt>\n                        <dl>${</dl>\n                    </li>\n                    <li>\n                        <dt>end</dt>\n                        <dl>}$</dl>\n                    </li>\n                </ul>\n            </dl>\n        </figure>\n    </section>\n    <section>\n        <h2>Expressions (calc and innerHTML)</h2>\n        <p dr-pre>#{...}#</p>\n        <figure dr-pre class=\"content-container-white\">\n            <figcaption>#{...}#</figcaption>\n            <dl>\n                <ul>\n                    <li>\n                        <dt>start</dt>\n                        <dl>#{</dl>\n                    </li>\n                    <li>\n                        <dt>end</dt>\n                        <dl>}#</dl>\n                    </li>\n                </ul>\n            </dl>\n        </figure>\n    </section>\n</article>\n\n";

var style$8 = "";

var DomrenderQuickstart = (function () {
    function DomrenderQuickstart() {
    }
    DomrenderQuickstart.prototype.onInit = function () {
    };
    DomrenderQuickstart = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$8,
            styles: [style$8],
            using: [RouterTemplateSection]
        }),
        __metadata("design:paramtypes", [])
    ], DomrenderQuickstart);
    return DomrenderQuickstart;
}());

var template$7 = "<article>\n    <h1>⚡️ Function 🚀</h1>\n    <p>provides a powerful function for dome control</p>\n    <section>\n        <h2>print and call</h2>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;div&gt;${this.name}$&lt;/div&gt;\n&lt;div&gt;${this.office.addr.first}$, ${this.office.addr.last}$, ${this.office.addr.street}$ (${this.office.name}$)&lt;/div&gt;\n&lt;div dr=&quot;this.office.addr.street&quot;&gt;${this.getOfficeFullAddr()}$&lt;/div&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-if</h2>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;div dr-if=&quot;true&quot;&gt;true&lt;/div&gt;\n&lt;div dr-if=&quot;this.gender===&#39;M&#39;&quot;&gt;gender: M&lt;/div&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-for, dr-for-of</h2>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;div dr-for=&quot;var i = 0; i &lt; this.friends.length; i++&quot;&gt; friend&lt;/div&gt;\n&lt;div dr-for-of=&quot;this.friends&quot;&gt; ${#it#.name}$&lt;/div&gt;\n&lt;div dr-for-of=&quot;$range(10, 20)&quot;&gt;&lt;div&gt;${#it#}$&lt;/div&gt;&lt;div&gt;\n&lt;div dr-for=&quot;var i = 1 ; i &lt;= 9 ; i++&quot; dr-it=&quot;i&quot;&gt;\n    ${#it#}$ *\n    &lt;scope dr-for=&quot;var y = 1 ; y &lt;= 9 ; y++&quot; dr-it=&quot;y&quot; dr-var=&quot;superIt=#it#&quot; dr-strip=&quot;true&quot;&gt;\n        #it# = ${var.superIt * #it#}$\n    &lt;/scope&gt;\n&lt;/div&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-repeat</h2>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;div dr-repeat=&quot;10&quot;&gt;&lt;div&gt;#it#&lt;/div&gt;&lt;/div&gt;\n&lt;div dr-repeat=&quot;$range(10, 20)&quot;&gt;&lt;div&gt;#it#&lt;/div&gt;&lt;/div&gt;\n&lt;div dr-repeat=&quot;$range(10, 20, 5)&quot;&gt;&lt;div&gt;#it#&lt;/div&gt;&lt;/div&gt;\n&lt;div dr-repeat=&quot;$range(&#39;10..5, 2&#39;)&quot;&gt;&lt;div&gt;#it#&lt;/div&gt;&lt;/div&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-inner-text, dr-inner-html</h2>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;div dr-inner-text=&quot;&#39;&lt;b&gt;aa&lt;/b&gt; &lt;button dr-event-click=\\&#39;alert(1)\\&#39;&gt;aa&lt;/button&gt;&#39;&quot;&gt; friend&lt;/div&gt;\n&lt;div dr-inner-html=&quot;&#39;&lt;b&gt;aa&lt;/b&gt; &lt;button dr-event-click=\\&#39;alert(1)\\&#39;&gt;aa&lt;/button&gt;&#39;&quot;&gt; friend&lt;/div&gt;\n</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>⚡️event</h2>\n        <ul>\n            <li>\n                click, mousedown, mouseup, dblclick, mouseover, mouseout, mousemove, mouseenter, mouseleave, contextmenu, keyup, keydown, keypress, change, input, submit, resize, focus, blur\n            </li>\n            <li>ref: element</li>\n            <li>variable: $event, $target</li>\n        </ul>\n        <figure>\n            <pre dr-pre class=\"code-container html\">click: &lt;button dr-event-click=&quot;this.name = &#39;name&#39; + new Date()&quot;&gt;click&lt;/button&gt; &lt;br&gt;\nchange: &lt;input type=&quot;text&quot; dr-event-change=&quot;this.name = $target.value&quot;&gt; &lt;br&gt;\ninput: &lt;input type=&quot;text&quot; dr-event-input=&quot;this.name = $target.value&quot;&gt; &lt;br&gt;\nkeyup: &lt;input type=&quot;text&quot; dr-event-keyup=&quot;this.name = $target.value&quot;&gt; &lt;br&gt;\n...\nkeydown: &lt;input type=&quot;text&quot; dr-event-keydown=&quot;this.name = $target.value&quot;&gt;&lt;br&gt;\nsubmit: &lt;form dr-event-submit=&quot;console.log($event); $event.preventDefault();&quot;&gt;&lt;input type=&quot;text&quot;&gt; &lt;button type=&quot;submit&quot;&gt;submit&lt;/button&gt;&lt;/form&gt;&lt;br&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>⚡️ window event</h2>\n        <ul>\n            <li>ref: window</li>\n            <li>variable: $target</li>\n        </ul>\n        <figure>\n            <pre dr-pre class=\"code-container html\">window-event-popstate: &lt;input type=&quot;text&quot; dr-window-event-popstate=&quot;alert(this.name)&quot;&gt;&lt;br&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>⚡️ custom event (other)</h2>\n        <ul>\n            <li>other event</li>\n            <li>ref: element</li>\n            <li>variable: $params, $event</li>\n        </ul>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;input dr-event:bind=&#39;eventName1, eventName2&#39; dr-event=&quot;console.log(&#39;event&#39;, $params, $event)&quot;  type=&quot;text&quot;&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-value, value-link</h2>\n        <dl>\n            <ul>\n                <li>\n                    <dt>dr-value</dt>\n                    <dl>The value is assigned the first time.</dl>\n                </li>\n                <li>\n                    <dt>dr-value-link</dt>\n                    <dl>Value and variable values are referencing each other. It affects each other when changing. (Immediate reflection event: input)</dl>\n                </li>\n            </ul>\n        </dl>\n        <figure>\n            <pre dr-pre class=\"code-container html\">dr-value: &lt;input type=&quot;text&quot; dr-value=&quot;this.office.name&quot;&gt; &lt;br&gt;\ndr-value-link: &lt;input type=&quot;text&quot; dr-value-link=&quot;this.office.addr.street&quot;&gt; &lt;br&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-attr</h2>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;textarea dr-attr=&quot;{rows: this.age/2, cols: this.age}&quot;&gt;&lt;/textarea&gt;\n&lt;div dr-attr=&quot;{wow: &#39;123&#39;, good: 123444}&quot;&gt;&lt;/div&gt;\n&lt;div dr-attr=&quot;[&#39;wow=123&#39;, &#39;good=123444&#39;]&quot;&gt;&lt;/div&gt;\n&lt;div dr-attr=&quot;&#39;wow=123, good=123444&#39;&quot;&gt;&lt;/div&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-class</h2>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;div dr-class=&quot;{big: this.age &gt; 50, red: this.age &gt; 50}&quot;&gt;\n&lt;div dr-class=&quot;&#39;big yellow &#39; + (this.age &gt; 50 ? &#39;old&#39; : &#39;young&#39;)&quot;&gt;\n&lt;div dr-class=&quot;[&#39;small&#39;, &#39;yellow&#39;]&quot;&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-style</h2>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;div dr-style=&quot;{fontSize: this.age + &#39;px&#39;}&quot;&gt; style &lt;/div&gt;\n&lt;div dr-style=&quot;{&#39;font-size&#39;: &#39;20px&#39;}&quot;&gt; style&lt;/div&gt;\n&lt;div dr-style=&quot;&#39;font-size: &#39; + this.age +&#39;px; margin: &#39; + this.age + &#39;px&#39;&quot;&gt; style &lt;/div&gt;\n&lt;div dr-style=&quot;[&#39;font-size: &#39; + this.age +&#39;px&#39;, &#39;margin: &#39; + this.age + &#39;px&#39;]&quot;&gt; style &lt;/div&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-strip</h2>\n        <figure>\n            AS-IS\n            <pre dr-pre class=\"code-container html\">&lt;div dr-strip=&quot;true&quot;&gt;&lt;span&gt;hello&lt;/span&gt;&lt;/div&gt;</pre>\n            TO-BE\n            <pre dr-pre class=\"code-container html\">&lt;span&gt;hello&lt;/span&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-on-init</h2>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;input dr-on-init=&quot;this.onInitElement&quot;&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-before, dr-after</h2>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;div dr-before=&quot;console.log(&#39;process before&#39;)&quot; dr-after=&quot;console.log(&#39;process after&#39;)&quot;&gt;&lt;/div&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n    <section>\n        <h2>dr-complete</h2>\n        <figure>\n            <pre dr-pre class=\"code-container html\">&lt;select dr-value-link=&quot;this.currentContry&quot; dr-event-change=&quot;this.contryChange($event)&quot;&gt;\n    &lt;option dr-for-of=&quot;this.languages&quot; dr-value=&quot;#it#.key&quot; dr-complete=&quot;this.currentContry=&#39;defaultValue&#39;&quot;&gt;${#it#.title}$&lt;/option&gt;\n&lt;/select&gt;</pre>\n        </figure>\n    </section>\n\n</article>\n\n";

var style$7 = "";

var DomrenderFunction = (function () {
    function DomrenderFunction() {
    }
    DomrenderFunction.prototype.onInit = function () {
    };
    DomrenderFunction = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$7,
            styles: [style$7]
        }),
        __metadata("design:paramtypes", [])
    ], DomrenderFunction);
    return DomrenderFunction;
}());

var template$6 = "<article>\n    <h1>Script</h1>\n    <p>define script instructions and call</p>\n    <p>define script function in $scripts object</p>\n    <section>\n        <h2>define</h2>\n        <figure>\n            <figcaption>class</figcaption>\n            <pre dr-pre class=\"code-container typescript\">new DomRender.run(obj, target, {\n  scripts: {\n    concat: function (head: string, tail: string) {\n      return head + tail;\n    }\n  }\n});</pre>\n        </figure>\n    </section>\n\n    <hr>\n\n    <section>\n        <h2>using in Class</h2>\n        <figure>\n            <figcaption>class</figcaption>\n            <pre dr-pre class=\"code-container typescript\">const data = config.scripts.concat('head', 'tail')</pre>\n        </figure>\n    </section>\n    <hr>\n\n    <section>\n        <h2>using in html</h2>\n        <figure>\n            <figcaption>html</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;div&gt;${$scripts.concat(&#39;head&#39;, &#39;tail&#39;)}$&lt;/div&gt;\n&lt;div dr-if=&quot;$scripts.concat(&#39;wow&#39;, &#39;good&#39;) === &#39;wowgood&#39;&quot;&gt;\nis wowgood\n&lt;/div&gt;</pre>\n        </figure>\n        <figure>\n            <figcaption>html</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;div&gt;${$scripts.calc(1, 4)}$&lt;/div&gt;\n&lt;div dr-if=&quot;$scripts.calc(1, 3) === 3&quot;&gt; is 3&lt;/div&gt;</pre>\n        </figure>\n        <dl>\n            <ul>\n                <li>\n                    <dt>$scripts</dt>\n                    <dd>scripts object</dd>\n                </li>\n            </ul>\n        </dl>\n    </section>\n</article>\n\n";

var style$6 = "";

var DomrenderScript = (function () {
    function DomrenderScript() {
    }
    DomrenderScript.prototype.onInit = function () {
    };
    DomrenderScript = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$6,
            styles: [style$6]
        }),
        __metadata("design:paramtypes", [])
    ], DomrenderScript);
    return DomrenderScript;
}());

var template$5 = "<article>\n    <h1>Component</h1>\n    <p>create custom tags in component format</p>\n    <section>\n        <h2>define</h2>\n        <figure>\n            <figcaption>typescript</figcaption>\n            <pre dr-pre class=\"code-container typescript\">export namespace Profile {\n  export const templat = &#39;&lt;div&gt;aaaaa${this.name}aaaaa &lt;/div&gt;&#39;;\n  export const styles = ['p {color: red}', 'div {margin: ${this.margin} + \\'px\\' }'];\n  export class Component {\n    public name = 'default name';\n    public margin = 5;\n    public say() {\n        console.log('say!~')\n    }\n  }\n}\n\nnew DomRender.run(obj, target, {\n  targetElements: [\n    RawSet.createComponentTargetElement('my-element', (e, o, r) => new Profile.Component(), Profile.templat, Profile.styles, scripts)\n  ],\n});</pre>\n        </figure>\n    </section>\n\n    <hr>\n\n    <section>\n        <h2>using in html</h2>\n        <figure>\n            <figcaption>html</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;my-element dr-on-init=&quot;$component.say();&quot;&gt;&lt;/my-element&gt;</pre>\n        </figure>\n        <figure>\n            <figcaption>html</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;div&gt;${$scripts.calc(1, 4)}$&lt;/div&gt;\n&lt;div dr-if=&quot;$scripts.calc(1, 3) === 3&quot;&gt; is 3&lt;/div&gt;</pre>\n        </figure>\n    </section>\n    <hr>\n\n    <domrender-component-attr-section></domrender-component-attr-section>\n</article>\n\n";

var style$5 = "";

var DomrenderComponent = (function () {
    function DomrenderComponent() {
    }
    DomrenderComponent.prototype.onInit = function () {
    };
    DomrenderComponent = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$5,
            styles: [style$5],
            using: [DomrenderComponentAttrSection]
        }),
        __metadata("design:paramtypes", [])
    ], DomrenderComponent);
    return DomrenderComponent;
}());

var template$4 = "<article>\n    <h1>Validation</h1>\n    <p>Form and Validator</p>\n    <section>\n        <h2>dr-form</h2>\n        <figure>\n            <figcaption>form</figcaption>\n <pre dr-pre class=\"code-container html\">&lt;form dr-form=&quot;this.form&quot; dr-event-submit=&quot;this.submit(); $event.preventDefault();&quot;&gt;\n  name: &lt;input name=&quot;name&quot;&gt;\n  age: &lt;input name=&quot;age&quot;&gt;\n  addr: &lt;input dr-form:event=&quot;input&quot; name=&quot;addr&quot;&gt;\n  &lt;button type=&quot;submit&quot;&gt;submit&lt;/button&gt;\n&lt;/form&gt;</pre>\n        </figure>\n        <figure>\n            <figcaption>typescript</figcaption>\n            <pre dr-pre class=\"code-container typescript\">class User {\n  form = {};\n  submit() {\n    const form = (this.form as any)\n    console.log('submit->', form, form.name, form.age, form.addr);\n  }\n}</pre>\n        </figure>\n        <dl>\n            <ul>\n                <li>\n                    <dt>event</dt>\n                    <dd>change (default)</dd>\n                </li>\n                <li>\n                    <dt>modify event event</dt>\n                    <dd>dr-form:event=\"input\"</dd>\n                </li>\n            </ul>\n        </dl>\n    </section>\n\n    <hr>\n\n    <section>\n        <h2>validator</h2>\n        <figure>\n            <figcaption>validation examples</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;form dr-form=&quot;this.form&quot; dr-event-submit=&quot;this.submit(); $event.preventDefault();&quot;&gt;\n    &lt;h2&gt;validator&lt;/h2&gt;\n    required: &lt;input name=&quot;required&quot;&gt; &lt;br&gt;\n    notEmpty: &lt;input name=&quot;notEmpty&quot;&gt; &lt;br&gt;\n    empty: &lt;input name=&quot;empty&quot;&gt; &lt;br&gt;\n    regexp: /[0-9]/ &lt;input name=&quot;regexp&quot;&gt; &lt;br&gt;\n    &lt;h2&gt;mix validator&lt;/h2&gt;\n    required, notEmpty: &lt;input name=&quot;mix&quot;&gt; &lt;br&gt;\n    &lt;h2&gt;all check required&lt;/h2&gt;\n    &lt;input name=&quot;all&quot; type=&quot;checkbox&quot; value=&quot;a&quot;&gt;a &lt;br&gt;\n    &lt;input name=&quot;all&quot; type=&quot;checkbox&quot; value=&quot;b&quot;&gt;b &lt;br&gt;\n\n    &lt;h2&gt;gender chose one&lt;/h2&gt;\n    &lt;input name=&quot;gender&quot; type=&quot;radio&quot; value=&quot;male&quot;&gt; Male &lt;br&gt;\n    &lt;input name=&quot;gender&quot; type=&quot;radio&quot; value=&quot;female&quot;&gt; Female&lt;br&gt;\n\n    &lt;button type=&quot;submit&quot;&gt;check valid&lt;/button&gt;\n&lt;/form&gt;</pre>\n        </figure>\n        <figure>\n            <figcaption>typescript</figcaption>\n            <pre dr-pre class=\"code-container typescript\">class PageValidator extends FormValidator {\n    required = new RequiredValidator();\n    notEmpty = new NotEmptyValidator();\n    empty = new EmptyValidator();\n    regexp = new RegExpTestValidator(/[0-9]/);\n    mix = new MultipleValidator([new RequiredValidator(), new NotEmptyValidator()]);\n\n    all = new ValidValidatorArray((v, t, e) => {\n        return !((v ?? []).filter(it => !it.checked).length > 0);\n    });\n\n    gender = new ValidValidatorArray((v, t, e) => {\n        return ((v ?? []).filter(it => it.checked).length > 0);\n    });\n}\nclass User {\n  form = new PageValidator();\n  submit() {\n    console.log('submit valid->', this.form.valid());\n  }\n\n  changeData() {\n    this.form.required.value = 'new value';\n  }\n}</pre>\n        </figure>\n        Validator types.\n        <dl>\n            <ul>\n                <li><dt>Validator (abstract)</dt><dd></dd></li>\n                <li><dt>ValidatorArray (abstract)</dt><dd></dd></li>\n                <li><dt>AllCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>AllUnCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>CheckedValidator</dt><dd></dd></li>\n                <li><dt>CountEqualsCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>CountEqualsUnCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>CountGreaterThanCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>CountGreaterThanEqualsCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>CountGreaterThanEqualsUnCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>CountGreaterThanUnCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>CountLessThanCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>CountLessThanEqualsCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>CountLessThanEqualsUnCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>CountLessThanUnCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>CountUnCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>EmptyValidator</dt><dd></dd></li>\n                <li><dt>ExcludeCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>FormValidator</dt><dd></dd></li>\n                <li><dt>IncludeCheckedValidatorArray</dt><dd></dd></li>\n                <li><dt>MultipleValidator</dt><dd></dd></li>\n                <li><dt>NonPassValidator</dt><dd></dd></li>\n                <li><dt>NotEmptyValidator</dt><dd></dd></li>\n                <li><dt>NotRegExpTestValidator</dt><dd></dd></li>\n                <li><dt>PassValidator</dt><dd></dd></li>\n                <li><dt>RegExpTestValidator</dt><dd></dd></li>\n                <li><dt>RequiredValidator</dt><dd></dd></li>\n                <li><dt>UnCheckedValidator</dt><dd></dd></li>\n                <li><dt>ValidMultipleValidator</dt><dd></dd></li>\n                <li><dt>ValidValidator</dt><dd></dd></li>\n                <li><dt>ValidValidatorArray</dt><dd></dd></li>\n                <li><dt>ValueEqualsValidator</dt><dd></dd></li>\n                <li><dt>ValueNotEqualsValidator</dt><dd></dd></li>\n            </ul>\n        </dl>\n    </section>\n</article>\n\n";

var style$4 = "";

var DomrenderValidation = (function () {
    function DomrenderValidation() {
    }
    DomrenderValidation.prototype.onInit = function () {
    };
    DomrenderValidation = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$4,
            styles: [style$4]
        }),
        __metadata("design:paramtypes", [])
    ], DomrenderValidation);
    return DomrenderValidation;
}());

var template$3 = "<article>\n    <h1>Config</h1>\n    <p>dom-render config</p>\n    <section>\n        <h2>config</h2>\n        <figure>\n            <figcaption>Config.ts</figcaption>\n            <pre dr-pre class=\"code-container typescript\">export type TargetElement = {\n    _name: string,\n    template?: string,\n    styles?: string[],\n    callBack: (target: Element, obj: any, rawSet: RawSet) => DocumentFragment,\n    complete?: (target: Element, obj: any, rawSet: RawSet) => void\n};\n\nexport type TargetAttr = {\n    name: string,\n    callBack: (target: Element, attrValue: string, obj: any, rawSet: RawSet) => DocumentFragment,\n    complete?: (target: Element, attrValue: string, obj: any, rawSet: RawSet) => void\n};\n\nexport interface Config {\n    targetElements?: TargetElement[];\n    targetAttrs?: TargetAttr[];\n    onElementInit?: (name: string, obj: any, rawSet: RawSet) =&gt; void;\n    onAttrInit?: (name: string, attrValue: string, obj: any, rawSet: RawSet) =&gt; void;\n    proxyExcludeTyps?: ConstructorType&lt;any&gt;[];\n    proxyExcludeOnBeforeReturnSets?: string[];\n    proxyExcludeOnBeforeReturnGets?: string[];\n    scripts?: { [n: string]: any };\n    applyEvents?: { attrName: string, callBack: (elements: Element, attrValue: string, obj: any) => void }[];\n}</pre>\n        </figure>\n    </section>\n</article>\n\n";

var style$3 = "";

var DomrenderConfig = (function () {
    function DomrenderConfig() {
    }
    DomrenderConfig.prototype.onInit = function () {
    };
    DomrenderConfig = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$3,
            styles: [style$3]
        }),
        __metadata("design:paramtypes", [])
    ], DomrenderConfig);
    return DomrenderConfig;
}());

var template$2 = "<article>\n    <h1>Proxy</h1>\n    <p>all internal variables are managed by proxy (DomRenderProxy)</p>\n    <section>\n        <h2>exclude proxy</h2>\n        <p>(situation: Maximum call stack error)</p>\n        <figure>\n            <pre dr-pre class=\"code-container typescript\">// frezz\n{name : Object.freeze({...})}\n\n// Shield Object type: {[k: string]: any}\n{name : new Shield()}\n\n// DomRenderProxy Final\n{name : DomRenderProxy.final({...})}</pre>\n        </figure>\n        <dl>\n            <dt>exclude detect property: Config</dt>\n            <dd>proxyExcludeTyps: [Class...]</dd>\n        </dl>\n    </section>\n</article>\n\n";

var style$2 = "";

var DomrenderProxy = (function () {
    function DomrenderProxy() {
    }
    DomrenderProxy.prototype.onInit = function () {
    };
    DomrenderProxy = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$2,
            styles: [style$2]
        }),
        __metadata("design:paramtypes", [])
    ], DomrenderProxy);
    return DomrenderProxy;
}());

var template$1 = "<article>\n    <h1>Class</h1>\n    <p>define class in dom-render framworks</p>\n    <section>\n        <h2>range</h2>\n        <dl>\n            <ul>\n                <li>\n                    <dt>in html</dt>\n                    <dd>variable: $range</dd>\n                </li>\n                <li>\n                    <dt>in class</dt>\n                    <dd>new Range(...)</dd>\n                </li>\n            </ul>\n        </dl>\n        <figure>\n            <figcaption>typescript</figcaption>\n            <pre dr-pre class=\"code-container typescript\">const range = new Range(100,55, 10);\nfor (let data of new Range(100,55, 10)) {\n  console.log(data);\n}\nconst rangeArray = new Range(100,55, 10).toArray();</pre>\n        </figure>\n        <figure>\n            <figcaption>html</figcaption>\n            <pre dr-pre class=\"code-container html\">&lt;div dr-repeat=&quot;$range(10, 20)&quot;&gt;&lt;div&gt;#it#&lt;/div&gt;&lt;/div&gt;</pre>\n        </figure>\n\n\n        <figure>\n            <figcaption>Range iterator class</figcaption>\n            <pre dr-pre class=\"code-container typescript\">export declare class Range implements Iterable<number> {\n    first: number;\n    last: number;\n    step: number;\n    readonly isRange = true;\n    constructor(first: number, last: number, step?: number);\n    [Symbol.iterator](): Iterator<number>;\n    static range(first: number | string, last?: number, step?: number): Range;\n    toArray(): number[];\n}</number></number></pre>\n        </figure>\n    </section>\n</article>\n\n";

var style$1 = "";

var DomrenderClass = (function () {
    function DomrenderClass() {
    }
    DomrenderClass.prototype.onInit = function () {
    };
    DomrenderClass = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template$1,
            styles: [style$1]
        }),
        __metadata("design:paramtypes", [])
    ], DomrenderClass);
    return DomrenderClass;
}());

var template = "<article>\n    <h1>Detect</h1>\n    <p>Detect get, set variable</p>\n    <section>\n        <h2>onBeforeReturnSet</h2>\n        <figure>\n            <pre dr-pre class=\"code-container typescript\">export interface OnBeforeReturnSet {\n    onBeforeReturnSet(name: string, value: any, fullPath?: string[]): void;\n}</pre>\n        </figure>\n    </section>\n\n    <hr>\n\n    <section>\n        <h2>onBeforeReturnGet</h2>\n        <figure>\n            <figcaption>class</figcaption>\n            <pre dr-pre class=\"code-container typescript\">export interface OnBeforeReturnGet {\n    onBeforeReturnGet(name: string, value: any, fullPath?: string[]): void;\n}</pre>\n        </figure>\n    </section>\n    <hr>\n\n    <section>\n        <h2>using</h2>\n        <figure>\n            <figcaption>class</figcaption>\n            <pre dr-pre class=\"code-container typescript\">{\n    name: 'dom-render'\n    onBeforeReturnSet: (name: string, value: any, fullpath: string[]) => {\n        console.log('set name-->', name, value, fullpath);\n    }\n    onBeforeReturnGet: (name: string, value: any, fullpath: string[]) => {\n        console.log('get name-->', name, value, fullpath);\n    }\n}</pre>\n        </figure>\n        <p>exclude detect property: Config</p>\n        <dl>\n            <ul>\n                <li>\n                    <dt>proxyExcludeOnBeforeReturnGets: ['propertyName']</dt>\n                    <dd></dd>\n                </li>\n                <li>\n                    <dt>proxyExcludeOnBeforeReturnSets: ['propertyName']</dt>\n                    <dd></dd>\n                </li>\n            </ul>\n        </dl>\n    </section>\n</article>\n\n";

var style = "";

var DomrenderDetect = (function () {
    function DomrenderDetect() {
    }
    DomrenderDetect.prototype.onInit = function () {
    };
    DomrenderDetect = __decorate([
        SimDecorator_7(),
        Component_3({
            template: template,
            styles: [style]
        }),
        __metadata("design:paramtypes", [])
    ], DomrenderDetect);
    return DomrenderDetect;
}());

var Index = (function () {
    function Index(navagation) {
        this.navagation = navagation;
        this.detailsItems = [];
        var data = SimDecorator_3(this);
        this.route = data.route;
    }
    Index.prototype.onInit = function () {
        var _a;
        this.detailsItems = this.getDetails((_a = this.category) === null || _a === void 0 ? void 0 : _a.value);
    };
    Index.prototype.changeCategory = function (data) {
        this.detailsItems = this.getDetails(data);
    };
    Index.prototype.changeDetail = function (data) {
        if (data) {
            this.navagation.go(data);
        }
    };
    Index.prototype.getPath = function (depth) {
        var _a, _b;
        return (_b = (_a = this.navagation.path) === null || _a === void 0 ? void 0 : _a.split('/')[depth]) !== null && _b !== void 0 ? _b : '';
    };
    Index.prototype.getDetails = function (prefix) {
        if (prefix === void 0) { prefix = ''; }
        return Object.entries(this.route).filter(function (_a) {
            var k = _a[0]; _a[1];
            return k.split('/')[1] === prefix;
        }).map(function (_a) {
            var k = _a[0]; _a[1];
            return k;
        });
    };
    Index.prototype.canActivate = function (url, module) {
        window.scrollTo(0, 0);
        this.child = module;
        feather.replace({ 'aria-hidden': 'true' });
        document.querySelectorAll('.code-container').forEach(function (el) {
            hljs.highlightElement(el);
        });
    };
    Index = __decorate([
        SimDecorator_7(),
        SimDecorator_4({
            path: '',
            route: {
                '/': '/simple-boot-front/introduction',
                '/simple-boot-front/introduction': FrontIntroduction,
                '/simple-boot-front/quick-start': FrontQuickstart,
                '/simple-boot-front/component': FrontComponent,
                '/simple-boot-front/router': FrontRouter,
                '/simple-boot-front/script': FrontScript,
                '/dom-render/introduction': DomrenderIntroduction,
                '/dom-render/quick-start': DomrenderQuickstart,
                '/dom-render/function': DomrenderFunction,
                '/dom-render/script': DomrenderScript,
                '/dom-render/component': DomrenderComponent,
                '/dom-render/validation': DomrenderValidation,
                '/dom-render/class': DomrenderClass,
                '/dom-render/proxy': DomrenderProxy,
                '/dom-render/detect': DomrenderDetect,
                '/dom-render/config': DomrenderConfig,
                '/simple-boot-front/config-option': FrontOption,
                '/simple-boot-core/introduction': CoreIntroduction,
                '/simple-boot-core/quick-start': CoreQuickstart,
                '/simple-boot-core/router': CoreRouter,
                '/simple-boot-core/intent': CoreIntent,
                '/simple-boot-core/aop': CoreAop,
                '/simple-boot-core/advice': CoreAdvice,
                '/create-simple-boot-front/introduction': CreateIntroduction,
                '/simple-boot-front-cli/introduction': CliIntroduction
            }
        }),
        Component_3({
            template: template$B,
            styles: [style$o],
            using: [CodeScript]
        }),
        __metadata("design:paramtypes", [Navigation_2])
    ], Index);
    return Index;
}());
var simpleApplication = new SimpleBootFront_2(Index, new SimFrontOption_2(window).setUrlType(SimFrontOption_3.hash));
simpleApplication.run();

exports.Index = Index;
//# sourceMappingURL=bundle.js.map
