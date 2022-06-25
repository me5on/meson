/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import gin from './gin.fn.js';


describe('rebus.gin', () => {

    it(
        'is a function',
        () => void expect(gin).toBeFun(),
    );


    it.each([
        // result, ...args
        [''],
        ['', void (1)],
        ['', null],
        ['', 'asdf'],
        ['', 1],
        ['', 'a', 2],
        ['', 1, 'b'],
        ['', 3, 4],
        ['7{5,6}', 5, 6, 7],
        ['7{8,9}', 9, 8, 7],
        ['asdf{1,2}', 1, 2, 'asdf'],
    ])(
        'returns correct string %p for %p',
        expect(gin).toMapExact,
    );

});
