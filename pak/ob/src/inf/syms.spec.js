/* eslint-disable prefer-destructuring,  no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import syms from './syms.fn.js';


describe('OB.inf.syms', () => {

    it(
        'is a function',
        () => void expect(syms).toBeFun(),
    );

    const s1 = Symbol(1);
    const s2 = Symbol(2);

    it.each([
        [[]],
        [[], null],
        [[], {}],
        [[], {a: 1, b: 'x', s1, s2}],
        [[s1, s2], {[s1]: 'symbol', [s2]: 'property'}],
    ])(
        'gets syms %p from %p',
        expect(syms).toMapEqual,
    );

});
