/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import bigint from './bigint.fn.js';


describe('bigint', () => {


    it(
        'is a function',
        () => void expect(bigint).toBeFun(),
    );


    it.each([
        1n,
    ])(
        'returns true for %p',
        $ => expect(bigint).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        0, -0, 3.14,
        Infinity, -Infinity, NaN,
        new Number(), new Boolean(), new String(),
        true, false,
        null, void (1),
        '', 'asdf', `${1 + 2}`,
        [1], {a: 1}, /./u, [], {},
        Symbol(''), () => void (1),
    ])(
        'returns false for %p',
        $ => expect(bigint).toMap(false, $),
    );


});
