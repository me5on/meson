/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import hex from './hex.fn.js';


describe('rebus.hex', () => {

    it(
        'is a function',
        () => void expect(hex).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', ''],
        ['\\x0A', 'a'],
        ['\\x03', 3],
        ['\\x00', 0],
        ['\\x1B', 0x1b],
        ['', '\\'],
        ['', [1, 2, 3, 4]],
        ['', {a: 1}],
        ['\\x01', 1, 2, 3, 4],
        ['\\xAD', 'asdf', 'FDSA'],
        ['\\xFD', 'FDSA', 'asdf'],
    ])(
        'returns correct string %p for %p',
        expect(hex).toMapExact,
    );

});
