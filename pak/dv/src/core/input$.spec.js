/* eslint-disable no-sparse-arrays */
// noinspection JSConsecutiveCommasInArrayLiteral

import {describe, expect, it} from '@jest/globals';
import input$ from './input$.core.js';


// eslint-disable-next-line max-lines-per-function
describe('input$', () => {

    // noinspection JSUnresolvedFunction
    it(
        'is a function',
        () => void expect(input$).toBeFun(),
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
    ])('return %p for process.argv of %p', (result, argv) => {

        global.process.argv = argv;
        expect(input$()).toEqual(result);
    });

});
