import {describe, expect, it} from '@jest/globals';
import any from './any.fn.js';
import boolean from './boolean.mod.js';


describe('boolean', () => {


    it(
        'is the any boolean function',
        () => void expect(boolean).toBeFun(any),
    );


    it.each([
        true, 1, 'a', {}, [],
    ])(
        'returns true for %p',
        $ => expect(boolean).toMap(true, $),
    );


    it.each([
        false, 0, '', NaN,
    ])(
        'returns false for %p',
        $ => expect(boolean).toMap(false, $),
    );


});
