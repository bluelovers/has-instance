"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInstanceOf = exports.hasInstance = void 0;
function hasInstance(staticClass) {
    var _a, _b;
    let fn;
    if (typeof Symbol !== 'undefined' && typeof Symbol.hasInstance !== 'undefined') {
        fn = (_b = (_a = staticClass === null || staticClass === void 0 ? void 0 : staticClass[Symbol.hasInstance]) === null || _a === void 0 ? void 0 : _a.bind) === null || _b === void 0 ? void 0 : _b.call(_a, staticClass);
    }
    return fn !== null && fn !== void 0 ? fn : ((instance) => instance instanceof staticClass);
}
exports.hasInstance = hasInstance;
function isInstanceOf(instance, staticClass) {
    return hasInstance(staticClass)(instance);
}
exports.isInstanceOf = isInstanceOf;
exports.default = hasInstance;
//# sourceMappingURL=index.js.map