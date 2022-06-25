/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import compose from './compose.fn.js';


describe('FN.compose', () => {

    it(
        'is a function',
        () => void expect(compose).toBeFun(),
    );

    it(
        'returns a function when called',
        () => {
            expect(compose()).toBeFun();
        },
    );

    const plus10 = ($ => 10 + $);
    const times2 = ($ => 2 * $);
    it.each([
        [12, [plus10, times2], 1],
        [22, [times2, plus10], 1],
        [33, [$ => 0 + $, $ => 1 * $], 33],
    ])(
        'returns %p when composed %p are invoked with %p',
        (expected, fns, arg) => expect(compose(...fns)(arg)).toEqual(expected),
    );

});
