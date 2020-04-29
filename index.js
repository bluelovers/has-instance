"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInstanceOf = exports.updateHasInstance = exports.hasInstance = exports.SymbolHasInstance = void 0;
/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
exports.SymbolHasInstance = typeof Symbol !== 'undefined' && Symbol.hasInstance || void 0;
/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
function hasInstance(staticClass) {
    var _a, _b;
    let fn;
    if (typeof Symbol !== 'undefined' && typeof Symbol.hasInstance !== 'undefined') {
        fn = (_b = (_a = staticClass === null || staticClass === void 0 ? void 0 : staticClass[Symbol.hasInstance]) === null || _a === void 0 ? void 0 : _a.bind) === null || _b === void 0 ? void 0 : _b.call(_a, staticClass);
    }
    return fn !== null && fn !== void 0 ? fn : ((instance) => instance instanceof staticClass);
}
exports.hasInstance = hasInstance;
function updateHasInstance(staticClass, hasInstanceFn) {
    if (!Symbol.hasInstance) {
        throw new ReferenceError(`not support Symbol.hasInstance, ${typeof Symbol.hasInstance}`);
    }
    Object.defineProperty(staticClass, Symbol.hasInstance, {
        value: hasInstanceFn,
        configurable: false,
        enumerable: false,
        writable: false,
    });
    return staticClass;
}
exports.updateHasInstance = updateHasInstance;
/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
function isInstanceOf(instance, staticClass) {
    return hasInstance(staticClass)(instance);
}
exports.isInstanceOf = isInstanceOf;
exports.default = hasInstance;
//# sourceMappingURL=index.js.map