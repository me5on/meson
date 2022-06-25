/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import lexact from './lexact.fn.js';


describe('rebus.lexact', () => {

    it(
        'is a function',
        () => void expect(lexact).toBeFun(),
    );


    it.each([
        // result, ...args
        [''],
        ['', void (1)],
        ['', null],
        ['', 'asdf'],
        ['', 1],
        ['3{2}?', 2, 3, 4],
        ['34{2}?', 2, '34'],
        ['asdf{2}?', 2, 'asdf'],
    ])(
        'returns correct string %p for %p',
        expect(lexact).toMapExact,
    );

});
