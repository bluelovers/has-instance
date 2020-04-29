/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
export const SymbolHasInstance: typeof Symbol.hasInstance = getSymbolHasInstance(true);

const hasInstanceSource = Object[SymbolHasInstance] as (<C extends new (...args: any) => any>(this: C, instance: any) => instance is InstanceType<C>);
const hasOwnProperty = Object.prototype.hasOwnProperty;

function isDefined<T>(target: T): target is Exclude<T, null | void | never>
{
	return target !== null && target !== void 0
}

export function supportSymbolHasInstance(nonStrict?: boolean)
{
	return typeof Symbol !== 'undefined' && (nonStrict
		? isDefined(Symbol.hasInstance)
		: typeof Symbol.hasInstance === 'symbol')
}

export function getOriginalHasInstance(): (<C extends new (...args: any) => any>(this: C, instance: any) => instance is InstanceType<C>) | ((this: any, instance: any) => boolean)
{
	return hasInstanceSource
}

export function isOriginalHasInstance(fn): fn is (<C extends new (...args: any) => any>(this: C, instance: any) => instance is InstanceType<C>) | ((this: any, instance: any) => boolean)
{
	return fn === hasInstanceSource
}

export function getSymbolHasInstance(nonStrict?: boolean): typeof Symbol.hasInstance
{
	if (supportSymbolHasInstance(nonStrict))
	{
		return Symbol.hasInstance
	}
}

export function hasInstanceRaw<C extends new (...args: any) => any>(staticClass: C, nonStrict: boolean = true): (instance: any) => instance is InstanceType<C>
{
	if (supportSymbolHasInstance(nonStrict))
	{
		// @ts-ignore
		return staticClass?.[Symbol.hasInstance];
	}
}

export function hasInstanceRawSafe<C extends new (...args: any) => any>(staticClass: C, nonStrict: boolean = true): (instance: any) => instance is InstanceType<C>
{
	if (hasOwnProperty.call(staticClass, SymbolHasInstance))
	{
		return hasInstanceRaw(staticClass, nonStrict);
	}
}

/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances. Called by the semantics of the instanceof operator.
 */
export function hasInstance<C extends new (...args: any) => any>(staticClass: C): (instance: any) => instance is InstanceType<C>
{
	// @ts-ignore
	return hasInstanceRaw(staticClass)?.bind?.(staticClass) ?? ((instance) => instance instanceof staticClass);
}

export function hasInstanceSafe<C extends new (...args: any) => any>(staticClass: C): (instance: any) => instance is InstanceType<C>
{
	return hasInstanceRawSafe(staticClass) ?? hasInstanceSource;
}

export function updateHasInstance<C extends new (...args: any) => any>(staticClass: C,
	hasInstanceFn: (instance: any) => boolean,
	nonStrict?: boolean,
)
{
	if (!supportSymbolHasInstance(nonStrict))
	{
		throw new ReferenceError(`not support Symbol.hasInstance`)
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
export function isInstanceOf<C extends new (...args: any) => any>(instance: any,
	staticClass: C,
): instance is InstanceType<C>
{
	return instance instanceof staticClass
}

export default hasInstance
