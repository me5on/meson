/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import nc from './nc.fn.js';


describe('rebus.nc', () => {

    it(
        'is a function',
        () => void expect(nc).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', ''],
        ['[^a]', 'a'],
        ['[^1]', 1],
        ['[^\\]', '\\'],
        ['[^1234]', [1, 2, 3, 4]],
        ['[^1234]', 1, 2, 3, 4],
        ['[^a-zA-Z]', 'a-z', 'A-Z'],
    ])(
        'returns correct string %p for %p',
        expect(nc).toMapExact,
    );

});
