/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
export declare const SymbolHasInstance: typeof Symbol.hasInstance;
/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
export declare function hasInstance<C extends new (...args: any) => any>(staticClass: C): (instance: any) => instance is InstanceType<C>;
export declare function updateHasInstance<C extends new (...args: any) => any>(staticClass: C, hasInstanceFn: (instance: any) => boolean): C;
/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
export declare function isInstanceOf<C extends new (...args: any) => any>(instance: any, staticClass: C): instance is InstanceType<C>;
export default hasInstance;
