/* eslint-disable prefer-destructuring,  no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import ok from './ok.fn.js';


describe('OB.get.ok', () => {

    it(
        'is a function',
        () => void expect(ok).toBeFun(),
    );

    it(
        'does not modify the provided object',
        () => {
            const object = {a: 1, b: 2, c: 3};
            ok(object, 'a');
            expect(object).toEqual({a: 1, b: 2, c: 3});
        },
    );

    it.each([
        ['a', null, null],
        ['b', {a: 1, b: 2, c: 3}, 2],
        ['c', void (1), void (1)],
        ['d', {a: 1, b: 2, c: 3}, void (1)],
        ['e', {a: 1, b: 2, e: null}, null],
    ])(
        'gets %p from %p resulting %p',
        (key, object, expected) => expect(ok(object, key)).toEqual(expected),
    );

});
