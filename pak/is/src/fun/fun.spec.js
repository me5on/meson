/* eslint-disable no-magic-numbers,no-new-wrappers,no-unused-vars */


import {describe, expect, it} from '@jest/globals';
import fun from './fun.fn.js';


describe('fun', () => {


    it(
        'is a function',
        () => void expect(fun).toBeFun(),
    );

    it.each([
        () => void (1),
        a => void (1),
        (a, b) => void (1),
        (a, c) => void (1),
    ])(
        'returns true for %p',
        $ => expect(fun).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        null, void (1),
        true, false,
        0, NaN, 1n, '1', '',
        [1], {a: 1}, /./u, [], {},
        new Date(), new Error(), new String(), new Number(), new Boolean(),
        Symbol(''),
        Promise.reject().catch(e => e),
    ])(
        'returns false for %p',
        $ => expect(fun).toMap(false, $),
    );


});
