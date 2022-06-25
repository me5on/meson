/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import pc from './pc.fn.js';


describe('rebus.pc', () => {

    it(
        'is a function',
        () => void expect(pc).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', ''],
        ['[a]', 'a'],
        ['[1]', 1],
        ['[\\]', '\\'],
        ['[1234]', [1, 2, 3, 4]],
        ['[1234]', 1, 2, 3, 4],
        ['[a-zA-Z]', 'a-z', 'A-Z'],
    ])(
        'returns correct string %p for %p',
        expect(pc).toMapExact,
    );

});
