export declare function hasInstance<C extends new (...args: any) => any>(staticClass: C): (instance: any) => instance is InstanceType<C>;
export declare function isInstanceOf<C extends new (...args: any) => any>(instance: any, staticClass: C): instance is InstanceType<C>;
export default hasInstance;
