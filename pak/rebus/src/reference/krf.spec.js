/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import krf from './krf.fn.js';


describe('rebus.krf', () => {

    it(
        'is a function',
        () => void expect(krf).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['\\k<asdf>', 'asdf'],
        ['\\k<1>', 1],
    ])(
        'returns correct string %p for %p',
        expect(krf).toMapExact,
    );

});
