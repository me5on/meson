/* eslint-disable prefer-destructuring,  no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import vals from './vals.fn.js';


describe('OB.inf.vals', () => {

    it(
        'is a function',
        () => void expect(vals).toBeFun(),
    );

    it.each([
        [[]],
        [[], null],
        [[], {}],
        [[1, 2], {a: 1, b: 2}],
        [['x', 'y', 'z'], {a: 'x', b: 'y', c: 'z'}],
        [[], {[Symbol('symbol')]: 'property'}],
    ])(
        'gets vals %p from %p',
        expect(vals).toMapEqual,
    );

});
