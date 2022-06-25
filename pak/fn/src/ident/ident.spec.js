/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import ident from './ident.fn.js';


describe('FN.ident', () => {

    it(
        'is a function',
        () => void expect(ident).toBeFun(),
    );

    it.each([
        null,
        void (1),
        'a string',
        0,
        NaN,
        Infinity,
        Symbol('a symbol'),
        new Promise(() => null),
        {},
        [],
        () => void (1),
    ])(
        'returns the same value provided by the first parameter %p',
        $ => expect(ident($)).toBe($),
    );

    it.each([
        [[3, 4, 5], 67],
        [['ob', 'j ect'], {}],
        [[Symbol('s'), null, void (1)], []],
    ])(
        'ignores the rest of the arguments %p',
        (rest, $) => expect(ident($, ...rest)).toBe($),
    );

});
