/* eslint-disable max-statements-per-line,max-lines-per-function,no-magic-numbers */
// noinspection JSCheckFunctionSignatures,JSUnresolvedFunction,DuplicatedCode

import {describe, expect, it, jest} from '@jest/globals';
import mockaround from '@sloy/mockaround';
import read$ from '../util/read$.util.js';
import write$ from '../util/write$.util.js';
import bump$ from './bump$.cmd.js';


const noop = () => void 1;


describe('bump$', () => {

    it(
        'is a function',
        () => void expect(bump$).toBeFun(),
    );


    it.each([
        // new1, old1, input, output
        [
            {ver: '2.2', pkg: 'a.b.c+2'},
            {ver: '1.2', pkg: 'a.b.c+1'},
            {ver: '["1",2]', pkg: '{"version":"a.b.c+1"}'},
            {ver: '[\n    "2",\n    2\n]', pkg: '{\n  "version": "a.b.c+2"\n}'},
        ],
    ])(
        'bumps to %p from %p, prints %p, saves %p and exits',
        async (new1, old1, input, output) => {

            const writeFile = jest.fn(() => Promise.reject()).mockName('writeFile');
            const readFile = jest.fn(where => {
                // @formatter:off
                if (where?.endsWith('ver.json')) {return Promise.resolve(input.ver);}
                if (where?.endsWith('package.json')) {return Promise.resolve(input.pkg);}
                return Promise.resolve('');
                // @formatter:on
            }).mockName('readFile');

            mockaround({readFile}, read$);
            mockaround({writeFile}, write$);

            const log = jest.spyOn(console, 'log').mockImplementation(noop).mockName('log');
            const err = jest.spyOn(console, 'error').mockImplementation(noop).mockName('err');
            const exit = jest.spyOn(process, 'exit').mockImplementation(noop).mockName('exit');

            await bump$();

            expect(err).not.toHaveBeenCalled();
            expect(log.mock.calls).toEqual([
                ['dv:', 'ver:', old1.ver, '->', new1.ver],
                ['dv:', 'pkg:', old1.pkg, '->', new1.pkg],
            ]);

            expect(writeFile.mock.calls).toEqual([
                [expect.any(String), output.ver],
                [expect.any(String), output.pkg],
            ]);

            expect(readFile).toHaveBeenCalledTimes(2);
            expect(exit).toHaveBeenCalledTimes(1);
            expect(exit).toHaveBeenCalledWith(0);

        }
    );

    it.each([
        // new1, old1, input, flg
        [
            {ver: '3', pkg: '0.0.0+3'},
            {ver: '2', pkg: ''},
            {ver: '["2"]', pkg: '{"version":""}'},
            {dry: true},
        ],
    ])(
        'bumps to %p from %p, prints %p, does not save and exits',
        async (new1, old1, input, flg) => {

            const writeFile = jest.fn(() => Promise.reject()).mockName('writeFile');
            const readFile = jest.fn(where => {
                // @formatter:off
                if (where?.endsWith('ver.json')) {return Promise.resolve(input.ver);}
                if (where?.endsWith('package.json')) {return Promise.resolve(input.pkg);}
                return Promise.resolve('');
                // @formatter:on
            }).mockName('readFile');

            mockaround({readFile}, read$);
            mockaround({writeFile}, write$);

            const log = jest.spyOn(console, 'log').mockImplementation(noop).mockName('log');
            const err = jest.spyOn(console, 'error').mockImplementation(noop).mockName('err');
            const exit = jest.spyOn(process, 'exit').mockImplementation(noop).mockName('exit');

            await bump$(flg);

            expect(err).not.toHaveBeenCalled();
            expect(log.mock.calls).toEqual([
                ['dv:', 'ver:', old1.ver, '->', new1.ver],
                ['dv:', 'pkg:', old1.pkg, '->', new1.pkg],
            ]);

            expect(writeFile).not.toHaveBeenCalled();
            expect(readFile).toHaveBeenCalledTimes(2);
            expect(exit).toHaveBeenCalledTimes(1);
            expect(exit).toHaveBeenCalledWith(0);

        }
    );

    it.each([
        // input, flg
        [
            {ver: '["2"]', pkg: '{"version":""}'},
            {dry: true, quiet: true},
        ],
    ])(
        'bumps to %p from %p, does not print, does not save and exits',
        async (input, flg) => {

            const writeFile = jest.fn(() => Promise.reject()).mockName('writeFile');
            const readFile = jest.fn(where => {
                // @formatter:off
                if (where?.endsWith('ver.json')) {return Promise.resolve(input.ver);}
                if (where?.endsWith('package.json')) {return Promise.resolve(input.pkg);}
                return Promise.resolve('');
                // @formatter:on
            }).mockName('readFile');

            mockaround({readFile}, read$);
            mockaround({writeFile}, write$);

            const log = jest.spyOn(console, 'log').mockImplementation(noop).mockName('log');
            const err = jest.spyOn(console, 'error').mockImplementation(noop).mockName('err');
            const exit = jest.spyOn(process, 'exit').mockImplementation(noop).mockName('exit');

            await bump$(flg);

            expect(err).not.toHaveBeenCalled();
            expect(log).not.toHaveBeenCalled();
            expect(writeFile).not.toHaveBeenCalled();
            expect(readFile).toHaveBeenCalledTimes(2);
            expect(exit).toHaveBeenCalledTimes(1);
            expect(exit).toHaveBeenCalledWith(0);

        }
    );

    it.each([
        // flg
        {},
        {quiet: true},
    ])(
        'handles invalid result for flg %p, then exits',
        async flg => {

            const readFile = jest.fn(() => Promise.reject()).mockName('readFile');
            mockaround({readFile}, read$);

            const writeFile = jest.fn(() => Promise.reject()).mockName('writeFile');
            mockaround({writeFile}, write$);

            const log = jest.spyOn(console, 'log').mockImplementation(noop).mockName('log');
            const err = jest.spyOn(console, 'error').mockImplementation(noop).mockName('err');
            const exit = jest.spyOn(process, 'exit').mockImplementation(noop).mockName('exit');

            await bump$(flg);

            if (flg.quiet) {
                expect(err).not.toHaveBeenCalled();
            } else {
                expect(err).toHaveBeenCalledWith('dv:', 'invalid ver:', void (1));
            }

            expect(log).not.toHaveBeenCalled();
            expect(writeFile).not.toHaveBeenCalled();

            expect(readFile).toHaveBeenCalledTimes(2);
            expect(exit).toHaveBeenCalledTimes(1);
            expect(exit).toHaveBeenCalledWith(1);

        },
    );

    it(
        'just exits on error',
        async () => {

            const MESSAGE = 'some error happened';
            const readFile = jest.fn(() => Promise.reject(new Error(MESSAGE))).mockName('readFile');
            mockaround({readFile}, read$);

            const writeFile = jest.fn(() => Promise.reject()).mockName('writeFile');
            mockaround({writeFile}, write$);

            const log = jest.spyOn(console, 'log').mockImplementation(noop).mockName('log');
            const exit = jest.spyOn(process, 'exit').mockImplementation(noop).mockName('exit');

            try {
                await bump$();
                expect('this test').toBe('fail');
            } catch (e) {

                expect(e).toBeInstanceOf(Error);
                expect(e.message).toBe(MESSAGE);

                expect(readFile).toHaveBeenCalledTimes(1);
                expect(writeFile).not.toHaveBeenCalled();
                expect(log).not.toHaveBeenCalled();
                expect(exit).not.toHaveBeenCalled();
            }

        },
    );

});
