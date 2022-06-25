/* eslint-disable no-magic-numbers,no-new-wrappers,max-lines-per-function */


import {describe, expect, it} from '@jest/globals';
import aggregate from './aggregate.fn.js';


// eslint-disable-next-line max-lines-per-function
describe('aggregate', () => {


    it(
        'is a function',
        () => void expect(aggregate).toBeFun(),
    );

    // noinspection JSCheckFunctionSignatures
    it(
        'returns true for error returned by Promise.any',
        async () => {
            try {
                await Promise.any([
                    Promise.reject(new Error()),
                    Promise.reject(new Error()),
                ]);
            } catch (e) {
                expect(aggregate(e)).toBe(true);
            }
        },
    );

    // noinspection JSPrimitiveTypeWrapperUsage,JSCheckFunctionSignatures
    it.each([
        new Error(),
        new Error('2', {cause: new Error('1')}),
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
        $ => expect(aggregate).toMap(false, $),
    );


});
