/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import lmaybe from './lmaybe.fn.js';


describe('rebus.lmaybe', () => {

    it(
        'is a function',
        () => void expect(lmaybe).toBeFun(),
    );


    it.each([
        // result, ...args
        [''],
        ['', void (1)],
        ['', null],
        ['asdf??', 'asdf'],
        ['1??', 1],
        ['a??', 'a', 2],
        ['1??', 1, 'b'],
        ['asdf??', 'asdf'],
    ])(
        'returns correct string %p for %p',
        expect(lmaybe).toMapExact,
    );

});
