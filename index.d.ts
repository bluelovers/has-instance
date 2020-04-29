/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
export declare const SymbolHasInstance: typeof Symbol.hasInstance;
export declare function supportSymbolHasInstance(nonStrict?: boolean): boolean;
export declare function getOriginalHasInstance(): (<C extends new (...args: any) => any>(this: C, instance: any) => instance is InstanceType<C>) | ((this: any, instance: any) => boolean);
export declare function isOriginalHasInstance(fn: any): fn is (<C extends new (...args: any) => any>(this: C, instance: any) => instance is InstanceType<C>) | ((this: any, instance: any) => boolean);
export declare function getSymbolHasInstance(nonStrict?: boolean): typeof Symbol.hasInstance;
export declare function hasInstanceRaw<C extends new (...args: any) => any>(staticClass: C, nonStrict?: boolean): (instance: any) => instance is InstanceType<C>;
export declare function hasInstanceRawSafe<C extends new (...args: any) => any>(staticClass: C, nonStrict?: boolean): (instance: any) => instance is InstanceType<C>;
/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
export declare function hasInstance<C extends new (...args: any) => any>(staticClass: C): (instance: any) => instance is InstanceType<C>;
export declare function hasInstanceSafe<C extends new (...args: any) => any>(staticClass: C): (instance: any) => instance is InstanceType<C>;
export declare function updateHasInstance<C extends new (...args: any) => any>(staticClass: C, hasInstanceFn: (instance: any) => boolean, nonStrict?: boolean): C;
/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
export declare function isInstanceOf<C extends new (...args: any) => any>(instance: any, staticClass: C): instance is InstanceType<C>;
export default hasInstance;
