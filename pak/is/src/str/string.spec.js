/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import string from './string.fn.js';


describe('string', () => {


    it(
        'is a function',
        () => void expect(string).toBeFun(),
    );


    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        '', 'asdf', '', `${1 + 2}`,
        new String(), new String('asdf'),
    ])(
        'returns true for %p',
        $ => expect(string).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        true, false,
        null, void (1),
        0, NaN, 1n,
        [1], {a: 1}, /./u, [], {},
        new Number(), new Boolean(),
        Symbol(''), () => void (1),
    ])(
        'returns false for %p',
        $ => expect(string).toMap(false, $),
    );


});
