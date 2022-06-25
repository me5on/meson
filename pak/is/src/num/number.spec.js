/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import number from './number.fn.js';


describe('number', () => {


    it(
        'is a function',
        () => void expect(number).toBeFun(),
    );


    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        0, -0, 3.14,
        new Number(3),
    ])(
        'returns true for %p',
        $ => expect(number).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        1n, NaN, Infinity, -Infinity, new Number('asdf'),
        new Boolean(), new String(),
        true, false,
        null, void (1),
        '', 'asdf', `${1 + 2}`,
        [1], {a: 1}, /./u, [], {},
        Symbol(''), () => void (1),
    ])(
        'returns false for %p',
        $ => expect(number).toMap(false, $),
    );


});
