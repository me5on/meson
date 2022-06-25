/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import gany from './gany.fn.js';


describe('rebus.gany', () => {

    it(
        'is a function',
        () => void expect(gany).toBeFun(),
    );


    it.each([
        // result, ...args
        [''],
        ['', void (1)],
        ['', null],
        ['asdf*', 'asdf'],
        ['1*', 1],
        ['2*', 2, 3, 4],
    ])(
        'returns correct string %p for %p',
        expect(gany).toMapExact,
    );

});
