/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import literal from './literal.fn.js';


describe('literal', () => {


    it(
        'is a function',
        () => void expect(literal).toBeFun(),
    );


    it.each([
        true, false,
    ])(
        'returns true for %p',
        $ => expect(literal).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        new Boolean(), new Boolean(true), new Boolean(false),
        null, void (1),
        0, NaN, 1n, '1', '',
        [1], {a: 1}, /./u, [], {},
        new String(), new Number(),
        Symbol(''), () => void (1),
    ])(
        'returns false for %p',
        $ => expect(literal).toMap(false, $),
    );


});
