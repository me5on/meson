import {describe, expect, it} from '@jest/globals';
import propped from './propped.fn.js';


describe('propped', () => {


    it(
        'is a function',
        () => void expect(propped).toBeFun(),
    );


    it.each([
        {a: 1}, /./u,
        {[Symbol('')]: 2},
    ])(
        'returns true for %p',
        $ => expect(propped).toMap(true, $),
    );


    it.each([
        {}, 0, 'string',
    ])(
        'returns false for %p',
        $ => expect(propped).toMap(false, $),
    );


});
