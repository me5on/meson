/* eslint-disable no-magic-numbers,no-new-wrappers,no-unused-vars */


import {describe, expect, it} from '@jest/globals';
import symbol from './symbol.fn.js';


describe('symbol', () => {


    it(
        'is a function',
        () => void expect(symbol).toBeFun(),
    );

    it.each([
        Symbol(''),
    ])(
        'returns true for %p',
        $ => expect(symbol).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        null, void (1),
        true, false,
        0, NaN, 1n, '1', '',
        [1], {a: 1}, /./u, [], {},
        new Date(), new Error(), new String(), new Number(), new Boolean(),
        () => void (1),
        Promise.reject().catch(e => e),
    ])(
        'returns false for %p',
        $ => expect(symbol).toMap(false, $),
    );


});
