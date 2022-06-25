/* eslint-disable new-cap */

import {describe, expect, it} from '@jest/globals';
import FN from './index.js';


describe('library FN', () => {

    it(
        'returns itself for trivial call',
        () => void expect(FN()).toBe(FN),
    );

    const names = [
        'compose', 'ident', 'k', 'noop', 'pipe', 'tie',
        'named$', 'variadic$',
    ].sort();

    it(
        'has no extra properties',
        () => void expect(Object.keys(FN).sort()).toEqual(names),
    );

    describe.each(names)('', name => { // eslint-disable-line no-shadow

        describe(`FN.${name}`, () => {

            const fn = FN[name];

            it(
                'is a function',
                () => void expect(fn).toBeFun(),
            );

        });
    });

});
