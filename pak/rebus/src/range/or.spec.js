/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import or from './or.fn.js';


describe('rebus.or', () => {

    it(
        'is a function',
        () => void expect(or).toBeFun(),
    );


    it.each([
        // result, ...args
        [''],
        ['', void (1)],
        ['', null],
        ['', ''],
        ['a', 'a'],
        ['1', 1],
        ['\\', '\\'],
        ['1|2|3|4', [1, 2, 3, 4]],
        ['1|2|3|4', 1, 2, 3, 4],
    ])(
        'returns correct string %p for %p',
        expect(or).toMapExact,
    );

});
