/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import pipe from './pipe.fn.js';


describe('FN.pipe', () => {

    it(
        'is a function',
        () => void expect(pipe).toBeFun(),
    );

    it(
        'returns a function when called',
        () => {
            expect(pipe()).toBeFun();
        },
    );

    const plus10 = ($ => 10 + $);
    const times2 = ($ => 2 * $);
    it.each([
        [22, [plus10, times2], 1],
        [12, [times2, plus10], 1],
        [33, [$ => 0 + $, $ => 1 * $], 33],
    ])(
        'returns %p when composed %p are invoked with %p',
        (expected, fns, arg) => expect(pipe(...fns)(arg)).toEqual(expected),
    );

});
