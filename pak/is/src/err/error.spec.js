/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import error from './error.fn.js';


describe('error', () => {


    it(
        'is a function',
        () => void expect(error).toBeFun(),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        new Error(),
    ])(
        'returns true for %p',
        $ => expect(error).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        new Date(),
        new Date(0, 0, 0, 0, 0, 0, 0),
        new Date(0),
        Date.now(), (new Date()).toISOString(), Date.parse(),
        null, void (1),
        true, false,
        new Boolean(), new Boolean(true), new Boolean(false),
        0, NaN, 1n, '1', '',
        [1], {a: 1}, /./u, [], {},
        new String(), new Number(),
        Symbol(''), () => void (1),
        Promise.reject().catch(e => e),
        Promise.reject('asdf').catch(e => e),
    ])(
        'returns false for %p',
        $ => expect(error).toMap(false, $),
    );


});
