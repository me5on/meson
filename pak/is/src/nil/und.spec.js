/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import und from './und.fn.js';


describe('und', () => {


    it(
        'is a function',
        () => void expect(und).toBeFun(),
    );

    it.each([
        // eslint-disable-next-line no-undefined
        undefined,
        void (1),
        // eslint-disable-next-line no-empty-function
        (() => {
        })(),
    ])(
        'returns true for %p',
        $ => expect(und).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        null,
        new Date(),
        new Error(),
        true, false,
        0, NaN, 1n, '1', '',
        [1], {a: 1}, /./u, [], {},
        new String(), new Number(), new Boolean(),
        Symbol(''), () => void (1),
        Promise.reject().catch(e => e),
    ])(
        'returns false for %p',
        $ => expect(und).toMap(false, $),
    );


});
