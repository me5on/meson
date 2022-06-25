/* eslint-disable no-magic-numbers,no-new-wrappers,no-unused-vars */


import {describe, expect, it} from '@jest/globals';
import described from './described.fn.js';


describe('described', () => {


    it(
        'is a function',
        () => void expect(described).toBeFun(),
    );

    it.each([
        Symbol('asdf'),
    ])(
        'returns true for %p',
        $ => expect(described).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        // eslint-disable-next-line symbol-description
        Symbol(), Symbol(''),
        null, void (1),
        true, false,
        0, NaN, 1n, '1', '',
        [1], {a: 1}, /./u, [], {},
        new Date(), new Error(), new String(), new Number(), new Boolean(),
        () => void (1),
        Promise.reject().catch(e => e),
    ])(
        'returns false for %p',
        $ => expect(described).toMap(false, $),
    );


});
