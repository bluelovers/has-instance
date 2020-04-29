"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInstanceOf = exports.updateHasInstance = exports.hasInstanceSafe = exports.hasInstance = exports.hasInstanceRawSafe = exports.hasInstanceRaw = exports.getSymbolHasInstance = exports.isOriginalHasInstance = exports.getOriginalHasInstance = exports.supportSymbolHasInstance = exports.SymbolHasInstance = void 0;
/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
exports.SymbolHasInstance = getSymbolHasInstance(true);
const hasInstanceSource = Object[exports.SymbolHasInstance];
const hasOwnProperty = Object.prototype.hasOwnProperty;
function isDefined(target) {
    return target !== null && target !== void 0;
}
function supportSymbolHasInstance(nonStrict) {
    return typeof Symbol !== 'undefined' && (nonStrict
        ? isDefined(Symbol.hasInstance)
        : typeof Symbol.hasInstance === 'symbol');
}
exports.supportSymbolHasInstance = supportSymbolHasInstance;
function getOriginalHasInstance() {
    return hasInstanceSource;
}
exports.getOriginalHasInstance = getOriginalHasInstance;
function isOriginalHasInstance(fn) {
    return fn === hasInstanceSource;
}
exports.isOriginalHasInstance = isOriginalHasInstance;
function getSymbolHasInstance(nonStrict) {
    if (supportSymbolHasInstance(nonStrict)) {
        return Symbol.hasInstance;
    }
}
exports.getSymbolHasInstance = getSymbolHasInstance;
function hasInstanceRaw(staticClass, nonStrict = true) {
    if (supportSymbolHasInstance(nonStrict)) {
        // @ts-ignore
        return staticClass === null || staticClass === void 0 ? void 0 : staticClass[Symbol.hasInstance];
    }
}
exports.hasInstanceRaw = hasInstanceRaw;
function hasInstanceRawSafe(staticClass, nonStrict = true) {
    if (hasOwnProperty.call(staticClass, exports.SymbolHasInstance)) {
        return hasInstanceRaw(staticClass, nonStrict);
    }
}
exports.hasInstanceRawSafe = hasInstanceRawSafe;
/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
function hasInstance(staticClass) {
    var _a, _b, _c;
    // @ts-ignore
    return (_c = (_b = (_a = hasInstanceRaw(staticClass)) === null || _a === void 0 ? void 0 : _a.bind) === null || _b === void 0 ? void 0 : _b.call(_a, staticClass)) !== null && _c !== void 0 ? _c : ((instance) => instance instanceof staticClass);
}
exports.hasInstance = hasInstance;
function hasInstanceSafe(staticClass) {
    var _a;
    return (_a = hasInstanceRawSafe(staticClass)) !== null && _a !== void 0 ? _a : hasInstanceSource;
}
exports.hasInstanceSafe = hasInstanceSafe;
function updateHasInstance(staticClass, hasInstanceFn, nonStrict) {
    if (!supportSymbolHasInstance(nonStrict)) {
        throw new ReferenceError(`not support Symbol.hasInstance`);
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
    return instance instanceof staticClass;
}
exports.isInstanceOf = isInstanceOf;
exports.default = hasInstance;
//# sourceMappingURL=index.js.map