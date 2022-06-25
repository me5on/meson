/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import wrapper from './wrapper.fn.js';


describe('wrapper', () => {


    it(
        'is a function',
        () => void expect(wrapper).toBeFun(),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        new Boolean(), new Boolean(true), new Boolean(false),
    ])(
        'returns true for %p',
        $ => expect(wrapper).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        true, false,
        null, void (1),
        0, NaN, 1n, '1', '',
        [1], {a: 1}, /./u, [], {},
        new String(), new Number(),
        Symbol(''), () => void (1),
    ])(
        'returns false for %p',
        $ => expect(wrapper).toMap(false, $),
    );


});
