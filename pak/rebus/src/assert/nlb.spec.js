/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import nlb from './nlb.fn.js';


describe('rebus.nlb', () => {

    it(
        'is a function',
        () => void expect(nlb).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', ''],
        ['(?<!a)', 'a'],
        ['(?<!1)', 1],
        ['(?<!\\)', '\\'],
        ['(?<!1234)', [1, 2, 3, 4]],
        ['(?<!1234)', 1, 2, 3, 4],
        ['(?<!abcd1234)', 'abcd', '1234'],
    ])(
        'returns correct string %p for %p',
        expect(nlb).toMapExact,
    );

});
