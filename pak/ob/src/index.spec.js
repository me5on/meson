/* eslint-disable new-cap,max-lines-per-function */


import {describe, expect, it} from '@jest/globals';
import OB from './index.js';


describe('library OB', () => {

    const mods = ['get', 'set', 'del', 'inf'];
    const funs = ['nav', 'neo'];

    it(
        'OB returns itself for trivial call',
        () => void expect(OB()).toBe(OB),
    );

    describe.each(mods)('module', name => { // eslint-disable-line no-shadow

        describe(`OB.${name}`, () => {

            const mod = OB[name];

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

    describe.each(funs)('function', name => { // eslint-disable-line no-shadow
        describe(`OB.${name}`, () => {

            const fn = OB[name];

            it(
                'is a function',
                () => void expect(fn).toBeFun(name),
            );

        });
    });

});
