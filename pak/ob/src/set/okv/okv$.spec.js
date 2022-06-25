/* eslint-disable prefer-destructuring,  no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import okv$ from './okv$.fn.js';


describe('OB.set.okv$', () => {

    it(
        'is a function',
        () => void expect(okv$).toBeFun(),
    );

    it('modifies the provided object', () => {

        const object = {a: 1, b: 2};
        const expected = {a: 1, b: 2, c: 3};

        const actual = okv$(object, 'c', 3);

        expect(actual).toBe(object);
        expect(actual).toEqual(expected);
    });

    it.each([
        [3, 'c', {a: 1, b: 2}, {a: 1, b: 2, c: 3}],
        [4, 'b', {a: 1, b: 2}, {a: 1, b: 4}],
    ])(
        'sets value %p at key %p in object %p resulting %p',
        (val, key, obj, expected) => expect(okv$(obj, key, val)).toEqual(expected),
    );

});
