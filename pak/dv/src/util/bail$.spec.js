/* eslint-disable no-magic-numbers */
// noinspection JSCheckFunctionSignatures


import {describe, expect, it, jest} from '@jest/globals';
import bail$ from './bail$.util.js';


const noop = () => void (1);


describe('bail$', () => {

    it(
        'is a function',
        () => void expect(bail$).toBeFun(),
    );


    it(
        'calls process.exit() with value 1',
        () => {

            const mock = jest.spyOn(process, 'exit').mockImplementation(() => noop);

            bail$();

            expect(mock).toBeCalledWith(1);
        },
    );

});
