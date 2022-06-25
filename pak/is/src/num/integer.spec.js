/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import integer from './integer.fn.js';


describe('integer', () => {


    it(
        'is a function',
        () => void expect(integer).toBeFun(),
    );


    it.each([
        0, -0, 1, 10, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER,
    ])(
        'returns true for %p',
        $ => expect(integer).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        3.14, Number.MAX_VALUE, Number.MIN_VALUE,
        1n,
        Infinity, -Infinity, NaN,
        new Number(), new Boolean(), new String(),
        true, false,
        null, void (1),
        '', 'asdf', `${1 + 2}`,
        [1], {a: 1}, /./u, [], {},
        Symbol(''), () => void (1),
    ])(
        'returns false for %p',
        $ => expect(integer).toMap(false, $),
    );


});
