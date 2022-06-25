/* eslint-disable no-magic-numbers */
// noinspection JSCheckFunctionSignatures


import {describe, expect, it, jest} from '@jest/globals';
import quit$ from './quit$.util.js';


const noop = () => void (1);


describe('quit$', () => {

    it(
        'is a function',
        () => void expect(quit$).toBeFun(),
    );


    it(
        'calls process.exit() with value 0',
        () => {

            const mock = jest.spyOn(process, 'exit').mockImplementation(() => noop);

            quit$();

            expect(mock).toBeCalledWith(0);
        },
    );

});
