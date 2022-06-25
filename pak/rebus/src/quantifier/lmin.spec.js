/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import lmin from './lmin.fn.js';


describe('rebus.lmin', () => {

    it(
        'is a function',
        () => void expect(lmin).toBeFun(),
    );


    it.each([
        // result, ...args
        [''],
        ['', void (1)],
        ['', null],
        ['', 'asdf'],
        ['', 1],
        ['', 'a', 2],
        ['b{1,}?', 1, 'b'],
        ['6{5,}?', 5, 6],
        ['asdf{2,}?', 2, 'asdf'],
    ])(
        'returns correct string %p for %p',
        expect(lmin).toMapExact,
    );

});
