/* eslint-disable no-magic-numbers,no-new-wrappers,no-unused-vars */


import {describe, expect, it} from '@jest/globals';
import promise from './promise.fn.js';


describe('promise', () => {


    it(
        'is a function',
        () => void expect(promise).toBeFun(),
    );

    it.each([
        new Promise($ => $()),
        Promise.resolve(),
        Promise.reject().catch(e => e),
    ])(
        'returns true for %p',
        $ => expect(promise).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        null, void (1),
        true, false,
        0, NaN, 1n, '1', '',
        [1], {a: 1}, /./u, [], {},
        new Date(), new Error(), new String(), new Number(), new Boolean(),
        Symbol(''),
        () => void (1),
    ])(
        'returns false for %p',
        $ => expect(promise).toMap(false, $),
    );


});
