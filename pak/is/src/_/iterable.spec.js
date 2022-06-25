/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import iterable from './iterable.fn.js';


describe('iterable', () => {


    it(
        'is a function',
        () => void expect(iterable).toBeFun(),
    );


    const iterator = () => ({done: true});

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        [], [1],
        '', '1',
        {[Symbol.iterator]: iterator},
        new String(),
    ])(
        'returns true for %p',
        $ => expect(iterable).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        0, NaN, 1n,
        {}, {a: 1}, {[Symbol.iterator]: 'not a function'},
        true, false, null, void (1), Symbol(''),
        /./u, () => void (1),
        new Number(), new Boolean(),
    ])(
        'returns false for %p',
        $ => expect(iterable).toMap(false, $),
    );


});
