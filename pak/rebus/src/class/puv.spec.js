/* eslint-disable no-magic-numbers */

import {describe, expect, it} from '@jest/globals';
import puv from './puv.fn.js';


describe('rebus.puv', () => {

    it(
        'is a function',
        () => void expect(puv).toBeFun(),
    );


    it.each([
        // result, ...args
        ['', void (1)],
        ['', null],
        ['', ''],
        ['', 'a'],
        ['', 1, 2, 3, 4],
        ['', 's', 2],
        ['', 1, 's'],
        ['\\p{asdf=FDSA}', 'asdf', 'FDSA'],
        ['\\p{\\=\\}', '\\', '\\'],
    ])(
        'returns correct string %p for %p',
        expect(puv).toMapExact,
    );

});
