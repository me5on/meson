/* eslint-disable no-magic-numbers,require-unicode-regexp,prefer-regex-literals */

import {describe, expect, it} from '@jest/globals';
import first from './first.fn.js';


describe('first', () => {

    it(
        'is a function',
        () => void expect(first).toBeFun(),
    );

    it.each([
        // result, ...args
        [''],
        ['', null],
        ['', null, null],
        ['', null, '1234567890'],
        ['', 'asdf', '1234567890'],
        ['123', '3', '1234567890'],
        ['123', 3, '1.2-3!4$5?6%7*8;9<0>'],
        ['12345', -5, '1234567890'],
    ])(
        'returns the starting substring %p for %p',
        expect(first).toMapExact,
    );

});
