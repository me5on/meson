/* eslint-disable prefer-destructuring,  no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import neo from './neo.fn.js';


describe('OB.neo', () => {

    it(
        'is a function',
        () => void expect(neo).toBeFun(),
    );

    it(
        'creates empty object with no prototype',
        () => {

            const o = neo();

            expect(Object.entries(o).length).toBe(0);
            expect(Object.getOwnPropertyNames(o).length).toBe(0);
            expect(Object.getOwnPropertySymbols(o).length).toBe(0);
            expect(Object.getPrototypeOf(o)).toBe(null);

        },
    );

    it(
        'ignores the provided arg',
        () => {
            const object = {a: 1, b: 2, c: 3};
            expect(neo(object)).not.toBe(object);
            expect(object).toEqual({a: 1, b: 2, c: 3});
        },
    );


});
