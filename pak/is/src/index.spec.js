import {describe, expect, it} from '@jest/globals';
import IS from './index.js';


describe.each([

    ['IS', IS],

])('module', (name, mod) => { // eslint-disable-line no-shadow

    describe(name, () => {


        it(
            'is a function',
            () => void expect(mod).toBeFun(name),
        );


        it(
            `${name} returns itself for trivial call`,
            () => void expect(mod()).toBe(mod),
        );


    });
});
