/* eslint-disable no-magic-numbers,max-lines-per-function */


import {describe, expect, it} from '@jest/globals';
import tie from './tie.fn.js';


describe('FN.tie', () => {

    const concat = ((...$$) => $$.join('+'));

    const parens = function parens($) {
        return `(${$})`;
    };

    const double = tie(concat, 'double');

    it(
        'is a function',
        () => void expect(tie).toBeFun(),
    );

    it.each([
        () => void (1),
        class C {
        },
        // eslint-disable-next-line no-empty-function
        function f() {
        },
    ])(
        'returns a function when called with valid input %p',
        $ => {
            expect(tie($)).toBeFun();
        },
    );

    it.each([null, void (1), 'a', 0, NaN, Infinity, Symbol(''), new Promise(() => null), {bind: 1}])(
        'throws an error when called with invalid input %p',
        $ => expect(() => tie($)).toThrow(),
    );

    it.each([
        ['concat(1,2,3,4)', concat, [1, 2, 3, 4]],
        ['concat(double)(1,2,3,4)', double, [1, 2, 3, 4]],
        ['parens(Symbol(s),null,undefined)', parens, [Symbol('s'), null, void (1)]],
        ['($ => $)(0)', $ => $, [0]],
        ['($ => $)(named,0)', $ => $, [function named($) {
            return $;
        }, 0]],
        ['($ => $)(($ => 2 * $),0)', $ => $, [$ => 2 * $, 0]],
        ['($ => $)(null,undefined,Symbol(2))', $ => $, [null, void (1), Symbol(2)]],
    ])(
        'updates %p name when tied with %p',
        (expected, fn, args) => expect(tie(fn, ...args).name).toEqual(expected),
    );

    it.each([
        ['($ => $)(Cannot-convert-object-to-primitive-value)', $ => $, [{toString: null}]],
        ['($ => $)(Cannot-convert-a-Symbol-value-to-a-string)', $ => $, [{toString: () => Symbol('')}]],
    ])(
        'recovers as %p when %p is called on erroneous argument %p',
        (expected, fn, args) => expect(tie(fn, ...args).name).toEqual(expected),
    );

    it.each([
        [concat, [1, 2, 3, 4]],
        [double, [1, 2, 3, 4]],
        [parens, [Symbol('s'), null, void (1)]],
    ])(
        'makes %p return same .toString() result as %p',
        (fn, args) => expect(tie(fn, ...args).toString()).toEqual(fn.toString()),
    );


});
