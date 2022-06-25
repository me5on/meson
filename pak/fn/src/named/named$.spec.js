/* eslint-disable no-magic-numbers,new-cap */


import {describe, expect, it} from '@jest/globals';
import named$ from './named$.fn.js';


describe('FN.named$', () => {

    it(
        'is a function',
        () => void expect(named$).toBeFun(),
    );


    const prep = (fn, name) => [fn, name, fn];

    it.each([
        // result, ...args
        [],
        [void (1), null],
        [null, null, null],
        [null, void (1), null],
        prep($ => $, 'name'),
        prep($ => $, 'another name'),
    ])(
        'returned function %p is the same %p',
        expect(named$).toMapExact,
    );

    it.each([
        // result, ...args
        [],
        [void (1), null],
        [null, null, $ => $],
        [void (1), void (1), $ => $],
        ['name', 'name', $ => $],
        ['another name', 'another name', $ => $],
    ])(
        'returned function %p is the same name %p',
        expect((...$$) => named$(...$$)?.name).toMap,
    );


});
