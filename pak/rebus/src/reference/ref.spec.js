/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import ref from './ref.fn.js';


describe('rebus.ref', () => {

    it(
        'is a function',
        () => void expect(ref).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['\\k<asdf>', 'asdf'],
        ['\\1', 1],
    ])(
        'returns correct string %p for %p',
        expect(ref).toMapExact,
    );

});
