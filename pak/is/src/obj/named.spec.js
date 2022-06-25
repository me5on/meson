import {describe, expect, it} from '@jest/globals';
import named from './named.fn.js';


describe('named', () => {


    it(
        'is a function',
        () => void expect(named).toBeFun(),
    );


    it.each([
        {a: 1}, /./u,
    ])(
        'returns true for %p',
        $ => expect(named).toMap(true, $),
    );

    it.each([
        {}, 0, 'string', {[Symbol('')]: 2},
    ])(
        'returns false for %p',
        $ => expect(named).toMap(false, $),
    );


});
