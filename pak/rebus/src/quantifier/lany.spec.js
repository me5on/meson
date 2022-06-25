/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import lany from './lany.fn.js';


describe('rebus.lany', () => {

    it(
        'is a function',
        () => void expect(lany).toBeFun(),
    );


    it.each([
        // result, ...args
        [''],
        ['', void (1)],
        ['', null],
        ['asdf*?', 'asdf'],
        ['1*?', 1],
        ['2*?', 2, 3, 4],
    ])(
        'returns correct string %p for %p',
        expect(lany).toMapExact,
    );

});
