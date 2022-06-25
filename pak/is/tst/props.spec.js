import {describe, expect, it} from '@jest/globals';
import IS from '../src/index.js';


const fns = (

    (path, fn) => [
        [path, fn],
        ...Object
            .entries(fn)
            .map(([k, v]) => fns(`${path}.${k}`, v))
            .filter($ => $[0])
            .flat(),
    ]

);


describe.each(fns('IS', IS))('property', (path, fn) => { // eslint-disable-line no-shadow

    describe(path, () => {


        it(
            'is a function',
            () => void expect(fn).toBeFun(path),
        );

        it(
            'is unary',
            () => void expect(fn.length).toEqual(1),
        );


    });
});
