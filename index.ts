/**
 * Created by user on 2020/4/30.
 */

export function hasInstance<C extends new (...args: any) => any>(staticClass: C): (instance) => instance is InstanceType<C>
{
	let fn;
	if (typeof Symbol !== 'undefined' && typeof Symbol.hasInstance !== 'undefined')
	{
		fn = staticClass?.[Symbol.hasInstance]?.bind?.(staticClass);
	}

	return fn ?? ((instance) => instance instanceof staticClass);
}

export function isInstanceOf<C extends new (...args: any) => any>(instance, staticClass: C): instance is InstanceType<C>
{
	return hasInstance(staticClass)(instance)
}

export default hasInstance
