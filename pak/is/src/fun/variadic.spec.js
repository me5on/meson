/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import variadic from './variadic.fn.js';


describe('variadic', () => {


    it(
        'is a function',
        () => void expect(variadic).toBeFun(),
    );

    it.each([
        // eslint-disable-next-line no-empty-function,no-unused-vars
        (() => {
            const f = (...$$) => void ($$);
            // f.length = Infinity; can't be set directly, so indirectly:
            Object.defineProperty(f, 'length', {value: Infinity});
            return f;
        })(),
    ])(
        'returns true for %p',
        $ => expect(variadic).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        null, void (1),
        true, false,
        0, NaN, 1n, '1', '',
        [1], {a: 1}, /./u, [], {},
        new Date(), new Error(), new String(), new Number(), new Boolean(),
        Symbol(''), () => void (1),
        Promise.reject().catch(e => e),
    ])(
        'returns false for %p',
        $ => expect(variadic).toMap(false, $),
    );


});
