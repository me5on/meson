import {describe, expect, it} from '@jest/globals';
import symboled from './symboled.fn.js';


describe('symboled', () => {


    it(
        'is a function',
        () => void expect(symboled).toBeFun(),
    );


    it.each([
        {[Symbol('')]: 2},
    ])(
        'returns true for %p',
        $ => expect(symboled).toMap(true, $),
    );

    it.each([
        {}, 0, 'string', {a: 1}, /./u,
    ])(
        'returns false for %p',
        $ => expect(symboled).toMap(false, $),
    );


});
