/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import utf from './utf.fn.js';


describe('rebus.utf', () => {

    it(
        'is a function',
        () => void expect(utf).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', ''],
        ['\\u000A', 'a'],
        ['\\u0003', 3],
        ['\\u0000', 0],
        ['\\u001B', 0x1b],
        ['', '\\'],
        ['', [1, 2, 3, 4]],
        ['', {a: 1}],
        ['\\u0001', 1, 2, 3, 4],
        ['\\u0ADF', 'asdf', 'FDSA'],
        ['\\u0FDA', 'FDSA', 'asdf'],
    ])(
        'returns correct string %p for %p',
        expect(utf).toMapExact,
    );

});
