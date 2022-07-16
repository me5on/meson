// noinspection JSCheckFunctionSignatures,JSUnresolvedFunction

import {describe, expect, it, jest} from '@jest/globals';
import help$ from './help$.cmd.js';


const noop = () => void (1);


const MESSAGE = `
$ npx dv                # to display current status
$ npx dv status         # to display current status
$ npx dv --help         # to display this help message
$ npx dv bump --dry-run # to see what changes will be done
$ npx dv bump           # to actually do the changes
$ npx dv bump --quiet   # to do the changes without console output

ver.json must be present next to package.json
containing array with first element being integer
`;


describe('help$', () => {

    it(
        'is a function',
        () => void expect(help$).toBeFun(),
    );


    it(
        'displays help information then exits',
        () => {

            const log = jest.spyOn(console, 'log').mockImplementation(() => noop).mockName('log');
            const exit = jest.spyOn(process, 'exit').mockImplementation(noop).mockName('exit');

            help$();

            expect(log).toBeCalledWith(MESSAGE);
            expect(exit).toHaveBeenCalledTimes(1);
            expect(exit).toHaveBeenCalledWith(0);
        },
    );

});
