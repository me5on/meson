/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import wide from './wide.fn.js';


describe('wide', () => {


    it(
        'is a function',
        () => void expect(wide).toBeFun(),
    );


    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        Infinity, -Infinity,
        0, -0, 3.14,
        new Number(3),
    ])(
        'returns true for %p',
        $ => expect(wide).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        1n, NaN, new Number('asdf'),
        new Boolean(), new String(),
        true, false,
        null, void (1),
        '', 'asdf', `${1 + 2}`,
        [1], {a: 1}, /./u, [], {},
        Symbol(''), () => void (1),
    ])(
        'returns false for %p',
        $ => expect(wide).toMap(false, $),
    );


});
