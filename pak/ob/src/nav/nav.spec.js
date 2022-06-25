/* eslint-disable no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import nav from './nav.fn.js';


describe('OB.nav', () => {

    it(
        'is a function',
        () => void expect(nav).toBeFun(),
    );

    it(
        'does not modify the provided object',
        () => {
            const object = {a: 1, b: 2, c: 3};
            nav('a', object);
            expect(object).toEqual({a: 1, b: 2, c: 3});
        },
    );

    const s1 = Symbol(1);
    const s2 = Symbol(2);

    it.each([
        ['b', {a: 1, b: 2, c: 3}, 2],
        ['a.b.c', {a: {b: {c: 'result'}}}, 'result'],
        [['a', 'b', 'c'], {a: {b: {c: 'result'}}}, 'result'],
        [[0, 0, 0], [[[0]]], 0],
        ['a.b.c', {a: {}}, void (1)],
        ['a.b.c', {a: {b: null}}, null],
        [[s1, s2], {[s1]: {[s2]: 'symbols'}}, 'symbols'],
    ])(
        'gets %p from %p resulting %p',
        (key, object, expected) => expect(nav(key, object)).toEqual(expected),
    );

});
