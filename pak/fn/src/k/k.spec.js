/* eslint-disable no-magic-numbers,new-cap */


import {describe, expect, it} from '@jest/globals';
import K from './k.fn.js';


describe('FN.k', () => {

    it(
        'is a function',
        () => void expect(K).toBeFun(),
    );

    const list = [
        [null],
        [void (1)],
        ['a string'],
        [0],
        [NaN],
        [Infinity],
        [Symbol('a symbol')],
        [new Promise(() => null)],
        [{}],
        [[]],
        [() => void (1)],
        [[3, 4, 5]],
        ['ob', 'j ect'],
        [Symbol('s'), null, void (1)],
        [new Error()],
    ];

    it.each(list)(
        'returns a function for %p',
        (...$$) => expect(K(...$$)).toBeFun(),
    );

    it.each(list)(
        'returned function produces the same first argument %p when invoked',
        (...$$) => expect(K(...$$)()).toBe($$[0]),
    );


});
