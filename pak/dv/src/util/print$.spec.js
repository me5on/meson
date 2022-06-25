/* eslint-disable no-magic-numbers */
// noinspection JSCheckFunctionSignatures


import {describe, expect, it, jest} from '@jest/globals';
import print$ from './print$.util.js';


const noop = () => void (1);


describe('print$', () => {

    it(
        'is a function',
        () => void expect(print$).toBeFun(),
    );


    it.each([
        'test',
        123,
        null,
        void (1),
    ])(
        'prints %p as a regular log line in console',
        $ => {

            const mock = jest.spyOn(console, 'log').mockImplementation(() => noop);

            print$($);

            expect(mock).toBeCalledWith('bump:', $);
        },
    );

});
