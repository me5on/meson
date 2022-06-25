/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import pup from './pup.fn.js';


describe('rebus.pup', () => {

    it(
        'is a function',
        () => void expect(pup).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', ''],
        ['\\p{a}', 'a'],
        ['', 24],
        ['', 0],
        ['', 27],
        ['\\p{\\}', '\\'],
        ['', [1, 2, 3, 4]],
        ['', 1, 2, 3, 4],
        ['\\p{asdf}', 'asdf', 'FDSA'],
    ])(
        'returns correct string %p for %p',
        expect(pup).toMapExact,
    );

});
