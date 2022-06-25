/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import float from './float.fn.js';


describe('float', () => {


    it(
        'is a function',
        () => void expect(float).toBeFun(),
    );


    it.each([
        0, -0, 3.14,
    ])(
        'returns true for %p',
        $ => expect(float).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
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
        $ => expect(float).toMap(false, $),
    );


});
