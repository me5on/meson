/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import noop from './noop.fn.js';


describe('FN.noop', () => {

    it(
        'is a function',
        () => void expect(noop).toBeFun(),
    );

    const list = [
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
        [3, 4, 5],
        ['ob', 'j ect'],
        [Symbol('s'), null, void (1)],
        new Error(),
    ];

    it.each(list)(
        'returns undefined regardless of the arguments %p',
        $ => expect(noop($)).toBe(void (1)),
    );

    it.each(list)(
        'does not throw regardless of the arguments %p',
        $ => expect(() => noop($)).not.toThrow(),
    );


});
