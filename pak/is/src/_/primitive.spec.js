/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import primitive from './primitive.fn.js';


describe('primitive', () => {


    it(
        'is a function',
        () => void expect(primitive).toBeFun(),
    );


    it.each([
        0, NaN, 1n, '1', '', true, false, null, void (1), Symbol(''), () => void (1),
    ])(
        'returns true for %p',
        $ => expect(primitive).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        [1], {a: 1}, /./u, [], {}, new String(), new Number(), new Boolean(),
    ])(
        'returns false for %p',
        $ => expect(primitive).toMap(false, $),
    );


});
