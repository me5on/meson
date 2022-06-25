/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import gexact from './gexact.fn.js';


describe('rebus.gexact', () => {

    it(
        'is a function',
        () => void expect(gexact).toBeFun(),
    );


    it.each([
        // result, ...args
        [''],
        ['', void (1)],
        ['', null],
        ['', 'asdf'],
        ['', 1],
        ['3{2}', 2, 3, 4],
        ['34{2}', 2, '34'],
        ['asdf{2}', 2, 'asdf'],
    ])(
        'returns correct string %p for %p',
        expect(gexact).toMapExact,
    );

});
