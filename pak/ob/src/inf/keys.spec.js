/* eslint-disable prefer-destructuring,  no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import keys from './keys.fn.js';


describe('OB.inf.keys', () => {

    it(
        'is a function',
        () => void expect(keys).toBeFun(),
    );

    it.each([
        [[]],
        [[], null],
        [[], {}],
        [['a', 'b'], {a: 1, b: 2}],
        [['a', 'b', 'c'], {a: 1, b: 2, c: 3}],
        [[], {[Symbol('symbol')]: 'property'}],
    ])(
        'gets keys %p from %p',
        expect(keys).toMapEqual,
    );

});
