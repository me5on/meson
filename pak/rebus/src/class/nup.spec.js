/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import nup from './nup.fn.js';


describe('rebus.nup', () => {

    it(
        'is a function',
        () => void expect(nup).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', ''],
        ['\\P{a}', 'a'],
        ['', 24],
        ['', 0],
        ['', 27],
        ['\\P{\\}', '\\'],
        ['', [1, 2, 3, 4]],
        ['', 1, 2, 3, 4],
        ['\\P{asdf}', 'asdf', 'FDSA'],
    ])(
        'returns correct string %p for %p',
        expect(nup).toMapExact,
    );

});
