/* eslint-disable symbol-description,no-magic-numbers,require-unicode-regexp,prefer-regex-literals */

import {describe, expect, it} from '@jest/globals';
import assemble from './assemble.fn.js';


describe('assemble', () => {

    it(
        'is a function',
        () => void expect(assemble).toBeFun(),
    );

    it.each([
        // result, ...args
        [''],
        ['', []],
        ['', [void (1)]],
        ['', [null]],
        ['123', [1, 2, 3]],
        ['a$ => $Symbol()', ['a', $ => $, Symbol()]],
    ])(
        'returns the assembled string %p for %p',
        expect(assemble).toMapExact,
    );

});
