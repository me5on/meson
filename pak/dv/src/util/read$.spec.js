/* eslint-disable no-magic-numbers,max-lines-per-function */
// noinspection DuplicatedCode

import {describe, expect, it, jest} from '@jest/globals';
import mockaround from '@sloy/mockaround';
import read$ from './read$.util.js';


describe('read$', () => {

    it(
        'is a function',
        () => void expect(read$).toBeFun(),
    );


    it.each([
        //  result, args, where, data
        [null, ['file'], 'file', 'null'],
        ['hi', ['where'], 'where', '"hi"'],
        [{a: 1}, ['file'], 'file', '{"a":1}'],
        [[1, 2, 3], ['file'], 'file', '[1,2,3]'],
    ])(
        'returns %p after it calls readFile with %p for options %p',
        async (result, args, where, data) => {

            const readFile = jest.fn(() => Promise.resolve(data)).mockName('readFile');
            mockaround({readFile}, read$);

            const actual = await read$(where);

            expect(actual).toEqual(result);
            expect(readFile).toHaveBeenCalledWith(...args);
            expect(readFile).toHaveBeenCalledTimes(1);

        },
    );

    it.each([
        //  result, args, where, data
        ['Unexpected end of JSON input', ['file'], 'file', ''],
        ['Unexpected token b in JSON at position 0', ['file'], 'file', 'blah'],
        ['Unexpected token a in JSON at position 2', ['file'], 'file', '{ a : 1 }'],
        ['Unexpected token } in JSON at position 6', ['file'], 'file', '[1,2,3}]'],
    ])(
        'returns error with message %p after it calls readFile with %p for options %p, %p',
        async (message, args, where, data) => {

            const readFile = jest.fn(() => Promise.resolve(data)).mockName('readFile');
            mockaround({readFile}, read$);

            const actual = await read$(where);

            expect(actual).toBeInstanceOf(Error);
            expect(actual.message).toBe(message);
            expect(readFile).toHaveBeenCalledWith(...args);
            expect(readFile).toHaveBeenCalledTimes(1);

        },
    );


    it.each([
        //  message, args, where
        ['the file is not good', ['invalid file'], 'invalid file'],
    ])(
        'returns error with message %p after it calls readFile with invalid path %p',
        async (message, args, where) => {

            const readFile = jest.fn(() => Promise.reject(new Error(message)));
            mockaround({readFile}, read$);

            const actual = await read$(where);

            expect(actual).toBeInstanceOf(Error);
            expect(actual.message).toBe(message);
            expect(readFile).toHaveBeenCalledWith(...args);
            expect(readFile).toHaveBeenCalledTimes(1);

        },
    );

});
