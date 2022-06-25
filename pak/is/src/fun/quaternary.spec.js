/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import quaternary from './quaternary.fn.js';


describe('quaternary', () => {


    it(
        'is a function',
        () => void expect(quaternary).toBeFun(),
    );

    it.each([
        // eslint-disable-next-line no-empty-function,no-unused-vars
        // eslint-disable-next-line no-unused-vars
        (a, b, c, d) => void (1),
    ])(
        'returns true for %p',
        $ => expect(quaternary).toMap(true, $),
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
        $ => expect(quaternary).toMap(false, $),
    );


});
