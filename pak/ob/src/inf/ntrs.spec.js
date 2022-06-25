/* eslint-disable prefer-destructuring,  no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import ntrs from './ntrs.fn.js';


describe('OB.inf.ntrs', () => {

    it(
        'is a function',
        () => void expect(ntrs).toBeFun(),
    );

    const s = Symbol(1);

    it.each([
        [[]],
        [[], null],
        [[], {}],
        [[], {[s]: s}],
        [[['s', s]], {s}],
        [[['a', 1], ['b', 2]], {a: 1, b: 2}],
        [[['a', 1], ['b', 'x'], ['s', s]], {a: 1, b: 'x', s}],
    ])(
        'gets ntrs %p from %p',
        expect(ntrs).toMapEqual,
    );

});
