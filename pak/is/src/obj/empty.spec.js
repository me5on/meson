import {describe, expect, it} from '@jest/globals';
import empty from './empty.fn.js';


describe('empty', () => {


    it(
        'is a function',
        () => void expect(empty).toBeFun(),
    );


    it.each([
        {},
    ])(
        'returns true for %p',
        $ => expect(empty).toMap(true, $),
    );

    it.each([
        {a: 1}, /./u,
    ])(
        'returns false for %p',
        $ => expect(empty).toMap(false, $),
    );


});
