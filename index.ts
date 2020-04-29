
/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
export const SymbolHasInstance: typeof Symbol.hasInstance = typeof Symbol !== 'undefined' && Symbol.hasInstance || void 0;

/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
export function hasInstance<C extends new (...args: any) => any>(staticClass: C): (instance: any) => instance is InstanceType<C>
{
	let fn;
	if (typeof Symbol.hasInstance !== 'undefined')
	{
		fn = staticClass?.[Symbol.hasInstance]?.bind?.(staticClass);
	}

	return fn ?? ((instance) => instance instanceof staticClass);
}

export function updateHasInstance<C extends new (...args: any) => any>(staticClass: C, hasInstanceFn: (instance: any) => boolean)
{
	if (typeof Symbol.hasInstance !== 'symbol')
	{
		throw new ReferenceError(`Symbol.hasInstance is undefined`)
	}

	Object.defineProperty(staticClass, Symbol.hasInstance, {
		value: hasInstanceFn,
		configurable: false,
		enumerable: false,
		writable: false,
	});

	return staticClass
}

/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
export function isInstanceOf<C extends new (...args: any) => any>(instance: any, staticClass: C): instance is InstanceType<C>
{
	return hasInstance(staticClass)(instance)
}

export default hasInstance
