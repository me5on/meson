/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import ctl from './ctl.fn.js';


describe('rebus.ctl', () => {

    it(
        'is a function',
        () => void expect(ctl).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', ''],
        ['\\cA', 'a'],
        ['\\cX', 24],
        ['', 0],
        ['', 27],
        ['', '\\'],
        ['', [1, 2, 3, 4]],
        ['\\cA', 1, 2, 3, 4],
        ['\\cA', 'asdf', 'FDSA'],
        ['\\cF', 'FDSA', 'asdf'],
    ])(
        'returns correct string %p for %p',
        expect(ctl).toMapExact,
    );

});
