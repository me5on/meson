/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import gsome from './gsome.fn.js';


describe('rebus.gsome', () => {

    it(
        'is a function',
        () => void expect(gsome).toBeFun(),
    );


    it.each([
        // result, ...args
        [''],
        ['', void (1)],
        ['', null],
        ['asdf+', 'asdf'],
        ['1+', 1],
        ['2+', 2, 3, 4],
    ])(
        'returns correct string %p for %p',
        expect(gsome).toMapExact,
    );

});
