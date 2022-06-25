/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import irf from './irf.fn.js';


describe('rebus.irf', () => {

    it(
        'is a function',
        () => void expect(irf).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', 'asdf'],
        ['\\1', 1],
    ])(
        'returns correct string %p for %p',
        expect(irf).toMapExact,
    );

});
