/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import gmaybe from './gmaybe.fn.js';


describe('rebus.gmaybe', () => {

    it(
        'is a function',
        () => void expect(gmaybe).toBeFun(),
    );


    it.each([
        // result, ...args
        [''],
        ['', void (1)],
        ['', null],
        ['asdf?', 'asdf'],
        ['1?', 1],
        ['a?', 'a', 2],
        ['1?', 1, 'b'],
        ['asdf?', 'asdf'],
    ])(
        'returns correct string %p for %p',
        expect(gmaybe).toMapExact,
    );

});
