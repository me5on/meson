/* eslint-disable prefer-destructuring,  no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import ko from './ko.fn.js';


describe('OB.del.ko', () => {

    it(
        'is a function',
        () => void expect(ko).toBeFun(),
    );

    it(
        'does not modify the provided object',
        () => {
            const object = {a: 1, b: 2, c: 3};
            expect(ko('a', object)).not.toBe(object);
            expect(object).toEqual({a: 1, b: 2, c: 3});
        },
    );

    it.each([
        ['b', {a: 1, b: 2, c: 3}, {a: 1, c: 3}],
    ])(
        'removes %p from %p resulting %p',
        (key, object, expected) => expect(ko(key, object)).toEqual(expected),
    );

});
