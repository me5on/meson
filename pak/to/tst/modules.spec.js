import {describe, expect, it} from '@jest/globals';
import TO from '../src/to/to.mod.js';


describe.each([

    ['boolean', TO.boolean],
    ['number', TO.number],
    ['string', TO.string],

])('module', (name, mod) => { // eslint-disable-line no-shadow

    describe(name, () => {


        it(
            'is a function',
            () => void expect(mod).toBeFun(name),
        );


        it(
            'has a "from" function property',
            () => void expect(mod.from).toBeFun(name),
        );


        it(
            `${name}.from() returns itself for trivial call`,
            () => void expect(mod.from()).toBe(mod.from),
        );


    });
});
