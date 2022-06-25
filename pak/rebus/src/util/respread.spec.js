/* eslint-disable no-magic-numbers,require-unicode-regexp,prefer-regex-literals */

import {describe, expect, it} from '@jest/globals';
import respread from './respread.fn.js';


describe('respread', () => {

    it(
        'is a function',
        () => void expect(respread).toBeFun(),
    );

    it.each([
        // result, ...args
        [void (1)],
        [[void (1)], void (1)],
        [[null], null],
        [['anything'], 'anything'],
        [[1], 1, 2, 3],
        [[1, 2, 3], [1, 2, 3]],
    ])(
        'returns the re-spreaded array %p for %p',
        expect(respread).toMapEqual,
    );

});
