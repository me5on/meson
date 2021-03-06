/* eslint-disable no-sparse-arrays */
// noinspection JSConsecutiveCommasInArrayLiteral

import {describe, expect, it} from '@jest/globals';
import readCli$ from './read-cli$.core.js';


// eslint-disable-next-line max-lines-per-function
describe('readCli$', () => {

    // noinspection JSUnresolvedFunction
    it(
        'is a function',
        () => void expect(readCli$).toBeFun(),
    );


    // noinspection SpellCheckingInspection
    it.each([
        // result, argv
        [
            {
                cmd: 'status',
                arg: [],
                flg: {diffed: false, dry: false, help: false, quiet: false},
            },
            [],
        ],
        [
            {
                cmd: 'status',
                arg: ['cmd', 'arg1', 'arg2'],
                flg: {diffed: false, dry: false, help: false, quiet: false},
            },
            [, , 'cmd', 'arg1', 'arg2'],
        ],
        [
            {
                cmd: 'status',
                arg: ['cmd', '--quiet', 'arg2'],
                flg: {diffed: false, dry: false, help: false, quiet: true},
            },
            [, , 'cmd', '--quiet', 'arg2'],
        ],
        [
            {
                cmd: 'bump',
                arg: ['bump', '--quiet', '--on-diff', '--dry-run', '--help'],
                flg: {diffed: true, dry: true, help: true, quiet: true},
            },
            [, , 'bump', '--quiet', '--on-diff', '--dry-run', '--help'],
        ],
        [
            {
                cmd: 'help',
                arg: ['help', '--quiet', '--on-diff', '--dry-run'],
                flg: {diffed: true, dry: true, help: false, quiet: true},
            },
            [, , 'help', '--quiet', '--on-diff', '--dry-run'],
        ],
    ])('return %p for process.argv of %p', (result, argv) => {

        global.process.argv = argv;
        expect(readCli$()).toEqual(result);
    });

});
