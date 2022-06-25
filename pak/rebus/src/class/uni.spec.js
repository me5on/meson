/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import uni from './uni.fn.js';


describe('rebus.uni', () => {

    it(
        'is a function',
        () => void expect(uni).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', ''],
        ['\\u{000A}', 'a'],
        ['\\u{0003}', 3],
        ['\\u{0000}', 0],
        ['\\u{0012}', 0x12],
        ['\\u{1234}', 0x1234],
        ['\\u{12345}', 0x12345],
        ['', '\\'],
        ['', [1, 2, 3, 4]],
        ['', {a: 1}],
        ['\\u{0001}', 1, 2, 3, 4],
        ['\\u{0ADF}', 'asdf', 'FDSA'],
        ['\\u{0FDA}', 'FDSA', 'asdf'],
    ])(
        'returns correct string %p for %p',
        expect(uni).toMapExact,
    );

});
