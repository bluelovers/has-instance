import { hasInstance, isInstanceOf } from '../index';

test(`hasInstance`, () =>
{
	let fn = hasInstance(String);

	expect(fn(new String())).toStrictEqual(true);
	expect(fn('')).toStrictEqual(false);

});

test(`isInstanceOf`, () =>
{
	let fn = isInstanceOf(new String(), String);

	expect(isInstanceOf(new String(), String)).toStrictEqual(true);
	expect(isInstanceOf('', String)).toStrictEqual(false);

});
