/* eslint-disable no-magic-numbers */
// noinspection JSCheckFunctionSignatures


import {describe, expect, it, jest} from '@jest/globals';
import alert$ from './alert$.util.js';


const noop = () => void (1);


describe('alert$', () => {

    it(
        'is a function',
        () => void expect(alert$).toBeFun(),
    );


    it.each([
        'test',
        123,
        null,
        void (1),
    ])(
        'prints %p as an error message to console',
        $ => {

            const mock = jest.spyOn(console, 'error').mockImplementation(() => noop);

            alert$($);

            expect(mock).toBeCalledWith('bump:', $);
        },
    );

});
