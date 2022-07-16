/* eslint-disable no-magic-numbers,max-lines-per-function,max-statements-per-line */

import {describe, expect, it, jest} from '@jest/globals';
import mockaround from '@sloy/mockaround';
import read$ from '../util/read$.util.js';
import readOld$ from './read-old$.core.js';


describe('readOld$', () => {

    it(
        'is a function',
        () => void expect(readOld$).toBeFun(),
    );


    it.each([
        //  result, ver, pkg
        [{ver: [], pkg: {}}, '[]', '{}'],
        [{ver: [], pkg: {version: '1.2.3'}}, '[]', '{"version":"1.2.3"}'],
        [{ver: [4, 5, 6], pkg: {version: '1.2.3'}}, '[4,5,6]', '{"version":"1.2.3"}'],
        [{ver: ['a', 'b', 'c'], pkg: {}}, '[ "a", "b" , "c"]', '{}'],
    ])(
        'returns %p after it calls readFile for ver %p and for pkg %p',
        async (result, ver, pkg) => {

            const readFile = jest.fn(where => {
                // @formatter:off
                if (where?.endsWith('ver.json')) {return Promise.resolve(ver);}
                if (where?.endsWith('package.json')) {return Promise.resolve(pkg);}
                return Promise.resolve('');
                // @formatter:on
            });

            mockaround({readFile}, read$);

            expect(await readOld$()).toEqual(result);
            expect(readFile).toHaveBeenCalledTimes(2);

        },
    );

    it.each([
        //  message, ver, pkg
        ['Cannot read properties of null (reading \'toString\')', null, null],
        ['Unexpected end of JSON input', '', ''],
        ['Unexpected token a in JSON at position 0', 'abc', ''],
        ['Unexpected end of JSON input', '"abc"', ''],
    ])(
        'returns error with message %p after it calls readFile for ver %p and for pkg %p',
        async (message, ver, pkg) => {

            mockaround(
                {
                    readFile: jest.fn(where => {
                        // @formatter:off
                        if (where?.endsWith('ver.json')) {return Promise.resolve(ver);}
                        if (where?.endsWith('package.json')) {return Promise.resolve(pkg);}
                        return Promise.resolve('');
                    // @formatter:on
                    }),
                },
                read$,
            );

            try {
                await readOld$();
            } catch (actual) {
                expect(actual).toBeInstanceOf(Error);
                expect(actual.message).toBe(message);
            }

        },
    );

});
