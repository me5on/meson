/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import any from './any.fn.js';
import number from './number.mod.js';


describe('number', () => {


    it(
        'is the any number function',
        () => void expect(number).toBeFun(any),
    );
    

    it.each([
        NaN,
        'some text with no numbers',
        {},
        [],
        $ => $,
    ])(
        'returns NaN number for %p',
        $ => expect(number($)).toBeNaN(),
    );


    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        [0, '0'],
        [0, '-0'],
        [1, '1'],
        [Infinity, 'Infinity'],
        [-Infinity, '-Infinity'],
        [123, '0123'],
        [456, new Number(456)],

    ])(
        'returns correct number for %p',
        expect(any).toMap,
    );
});
