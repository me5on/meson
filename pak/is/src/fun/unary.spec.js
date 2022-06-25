/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import unary from './unary.fn.js';


describe('unary', () => {


    it(
        'is a function',
        () => void expect(unary).toBeFun(),
    );

    it.each([
        // eslint-disable-next-line no-unused-vars
        a => void (1),
    ])(
        'returns true for %p',
        $ => expect(unary).toMap(true, $),
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
        $ => expect(unary).toMap(false, $),
    );


});
