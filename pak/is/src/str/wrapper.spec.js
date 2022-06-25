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
        new String(), new String('asdf'),
    ])(
        'returns true for %p',
        $ => expect(wrapper).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        '', 'asdf', '', `${1 + 2}`,
        true, false,
        null, void (1),
        0, NaN, 1n,
        [1], {a: 1}, /./u, [], {},
        new Number(), new Boolean(),
        Symbol(''), () => void (1),
    ])(
        'returns false for %p',
        $ => expect(wrapper).toMap(false, $),
    );


});
