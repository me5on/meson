/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import kap from './kap.fn.js';


describe('rebus.kap', () => {

    it(
        'is a function',
        () => void expect(kap).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null, null],
        ['', '', ''],
        ['', 'name'],
        ['(?<a>b)', 'a', 'b'],
        ['(?<1>2)', 1, 2],
        ['(?<1>234)', 1, 2, 3, 4],
        ['(?<\\>//)', '\\', '//'],
        ['(?<1234>1234)', 1234, [1, 2, 3, 4]],
        ['(?<x>abcd1234)', 'x', 'abcd', '1234'],
    ])(
        'returns correct string %p for %p',
        expect(kap).toMapExact,
    );

});
