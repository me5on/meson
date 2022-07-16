/* eslint-disable no-magic-numbers,max-lines-per-function */
// noinspection DuplicatedCode

import {describe, expect, it, jest} from '@jest/globals';
import mockaround from '@sloy/mockaround';
import run$ from './run$.util.js';


describe('run$', () => {

    it(
        'is a function',
        () => void expect(run$).toBeFun(),
    );


    it.each([
        // options, args
        [1, 'asdf', ['asdf', [], {stdio: 'inherit'}]],
        [0, 'cmd arg1 arg2', ['cmd', ['arg1', 'arg2'], {stdio: 'inherit'}]],
    ])('runs with %p', async (code, options, args) => {

        const addListener = jest.fn((ev, cb) => 'exit' === ev && cb(code)).mockName('addListener');
        const spawn = jest.fn(() => ({addListener})).mockName('spawn');
        mockaround({spawn}, run$);

        const actual = await run$(options);

        expect(actual).toBe(code);
        expect(spawn).toHaveBeenCalledWith(...args);
        expect(addListener).toHaveBeenCalledTimes(2);

    });

    it.each([
        void (1),
        null,
        [],
        '',
        {},
        {cmd: ''},
        {cmd: null, args: null},
    ])(
        'returns an error if called with invalid input %p',
        async options => {

            const addListener = jest.fn((ev, cb) => 'error' === ev && cb()).mockName('addListener');
            const spawn = jest.fn(() => ({addListener})).mockName('spawn');
            mockaround({spawn}, run$);

            const actual = await run$(options);

            expect(actual).toBeInstanceOf(Error);
            expect(spawn).not.toHaveBeenCalled();
            expect(addListener).not.toHaveBeenCalled();
        },
    );

    it.each([

        // result, options
        ['1', 'some invalid command'],
        ['2', {cmd: 'invalid', args: []}],
    ])(
        'returns the error %p after process fails for %p',
        async (result, options) => {

            const addListener = jest.fn((ev, cb) => 'error' === ev && cb(result)).mockName('addListener');
            const spawn = jest.fn(() => ({addListener})).mockName('spawn');
            mockaround({spawn}, run$);

            const actual = await run$(options);

            expect(actual).toBeInstanceOf(Error);
            expect(actual.message).toBe(result);
            expect(spawn).toHaveBeenCalled();
            expect(addListener).toHaveBeenCalledTimes(2);
        },
    );

});
