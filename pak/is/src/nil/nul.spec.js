/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import nul from './nul.fn.js';


describe('nul', () => {


    it(
        'is a function',
        () => void expect(nul).toBeFun(),
    );

    it.each([
        null,
    ])(
        'returns true for %p',
        $ => expect(nul).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        // eslint-disable-next-line no-undefined
        undefined,
        void (1),
        // eslint-disable-next-line no-empty-function
        (() => {
        })(),
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
        $ => expect(nul).toMap(false, $),
    );


});
