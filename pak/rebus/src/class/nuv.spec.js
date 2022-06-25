/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import nuv from './nuv.fn.js';


describe('rebus.nuv', () => {

    it(
        'is a function',
        () => void expect(nuv).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', ''],
        ['', 'a'],
        ['', 1, 2, 3, 4],
        ['', 's', 2],
        ['', 1, 's'],
        ['\\P{asdf=FDSA}', 'asdf', 'FDSA'],
        ['\\P{\\=\\}', '\\', '\\'],
    ])(
        'returns correct string %p for %p',
        expect(nuv).toMapExact,
    );

});
