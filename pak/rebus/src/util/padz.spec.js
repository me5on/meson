/* eslint-disable no-magic-numbers,require-unicode-regexp,prefer-regex-literals */

import {describe, expect, it} from '@jest/globals';
import padz from './padz.fn.js';


const PI = 3.141592653589793;


describe('padz', () => {

    it(
        'is a function',
        () => void expect(padz).toBeFun(),
    );

    it.each([
        // result, ...args
        [''],
        ['', null],
        ['', null, null],
        ['', -1, null],
        ['', 0, null],
        ['0', 1, null],
        ['no-negatives', -1, 'no-negatives'],
        ['no-floats', PI, 'no-floats'],
        ['002', 3, 2],
        ['002', 3, '2'],
        [`${PI}`, 1, PI],
        [`000${PI}`, 20, PI],
        ['a', 0, 'a'],
        ['000a', 4, 'a'],
    ])(
        'returns correct zero pads %p for %p',
        expect(padz).toMapExact,
    );

});
