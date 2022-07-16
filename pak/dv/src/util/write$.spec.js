/* eslint-disable no-magic-numbers,max-lines-per-function */
// noinspection DuplicatedCode

import {describe, expect, it, jest} from '@jest/globals';
import mockaround from '@sloy/mockaround';
import write$ from './write$.util.js';


describe('write$', () => {

    it(
        'is a function',
        () => void expect(write$).toBeFun(),
    );


    it.each([
        //  args, options
        [['where', '"what"'], ['where', null, 'what']],
        [['where', '[1,2,3]'], ['where', 0, [1, 2, 3]]],
        [['file', '{\n  "a": 1\n}'], ['file', 2, {a: 1}]],
    ])('calls writeFile with %p for options %p', async (args, [where, space, what]) => {

        const writeFile = jest.fn(() => Promise.resolve());
        mockaround({writeFile}, write$);

        const actual = await write$(where, space, what);

        expect(actual).toBe(null);
        expect(writeFile).toHaveBeenCalledWith(...args);
        expect(writeFile).toHaveBeenCalledTimes(1);

    });


    it.each([
        // message, args, options
        ['msg', [null, 'null'], [null, null, null]],
        ['some error', [void (1), void (1)], []],
        ['message', ['invalid file', void (1)], ['invalid file']],
    ])(
        'returns error with message %p after it calls writeFile with %p for options %p',
        async (message, args, [where, space, what]) => {

            const writeFile = jest.fn(() => Promise.reject(new Error(message)));
            mockaround({writeFile}, write$);

            const actual = await write$(where, space, what);

            expect(actual).toBeInstanceOf(Error);
            expect(actual.message).toBe(message);
            expect(writeFile).toHaveBeenCalledWith(...args);
            expect(writeFile).toHaveBeenCalledTimes(1);

        },
    );


});
