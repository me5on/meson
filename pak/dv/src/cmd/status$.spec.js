/* eslint-disable max-statements-per-line,max-lines-per-function,no-magic-numbers */
// noinspection JSCheckFunctionSignatures,JSUnresolvedFunction

import {describe, expect, it, jest} from '@jest/globals';
import mockaround from '@sloy/mockaround';
import read$ from '../util/read$.util.js';
import status$ from './status$.cmd.js';


const noop = () => void 1;


describe('status$', () => {

    it(
        'is a function',
        () => void expect(status$).toBeFun(),
    );


    it.each([
        // expectedVer, expectedPkg, ver, pkg
        ['a.b.c', '3', '["a","b","c"]', '{"version":"3"}'],
        ['1.2', 'a.b.c+1', '["1",2]', '{"version":"a.b.c+1"}'],
    ])(
        'prints status with expected ver %p for ver %p and for pkg %p then exits',
        async (expectedVer, expectedPkg, ver, pkg) => {

            const readFile = jest.fn(where => {
                // @formatter:off
                if (where?.endsWith('ver.json')) {return Promise.resolve(ver);}
                if (where?.endsWith('package.json')) {return Promise.resolve(pkg);}
                return Promise.resolve('');
                // @formatter:on
            });

            mockaround({readFile}, read$);

            const log = jest.spyOn(global.console, 'log').mockImplementation(noop).mockName('log');
            const exit = jest.spyOn(global.process, 'exit').mockImplementation(noop).mockName('exit');

            await status$();

            expect(readFile).toHaveBeenCalledTimes(2);
            expect(log).toHaveBeenCalledTimes(2);
            expect(log.mock.calls).toEqual([
                ['dv:', 'ver:', expectedVer],
                ['dv:', 'pkg:', expectedPkg],
            ]);
            expect(exit).toHaveBeenCalledTimes(1);
            expect(exit).toHaveBeenCalledWith(0);

        }
    );

    it(
        'prints invalid result regardless then exits',
        async () => {

            const readFile = jest.fn(() => Promise.reject());
            mockaround({readFile}, read$);

            const log = jest.spyOn(global.console, 'log').mockImplementation(noop).mockName('log');
            const exit = jest.spyOn(global.process, 'exit').mockImplementation(noop).mockName('exit');

            await status$();

            expect(readFile).toHaveBeenCalled();
            expect(log.mock.calls).toEqual([
                ['dv:', 'ver:', ''],
                ['dv:', 'pkg:', ''],
            ]);
            expect(exit).toHaveBeenCalledTimes(1);
            expect(exit).toHaveBeenCalledWith(0);

        },
    );

});
