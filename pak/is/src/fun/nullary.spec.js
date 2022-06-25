/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import nullary from './nullary.fn.js';


describe('nullary', () => {


    it(
        'is a function',
        () => void expect(nullary).toBeFun(),
    );

    it.each([
        () => void (1),
    ])(
        'returns true for %p',
        $ => expect(nullary).toMap(true, $),
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
        $ => expect(nullary).toMap(false, $),
    );


});
