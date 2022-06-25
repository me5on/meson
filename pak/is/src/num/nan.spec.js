/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import nan from './nan.fn.js';


describe('nan', () => {


    it(
        'is a function',
        () => void expect(nan).toBeFun(),
    );


    it.each([
        NaN,
    ])(
        'returns true for %p',
        $ => expect(nan).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        1n,
        0, -0, 3.14,
        Infinity, -Infinity,
        new Number(), new Boolean(), new String(),
        true, false,
        null, void (1),
        '', 'asdf', `${1 + 2}`,
        [1], {a: 1}, /./u, [], {},
        Symbol(''), () => void (1),
    ])(
        'returns false for %p',
        $ => expect(nan).toMap(false, $),
    );


});
