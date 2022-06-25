import {describe, expect, it} from '@jest/globals';
import plain from './plain.fn.js';


describe('plain', () => {


    it(
        'is a function',
        () => void expect(plain).toBeFun(),
    );


    it.each([
        {}, {a: 1}, {[Symbol('')]: 2}, Object.create(null),
    ])(
        'returns true for %p',
        $ => expect(plain).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        // eslint-disable-next-line no-new-wrappers,no-undef
        /./u, true, 0, 'string', new String(), globalThis,
    ])(
        'returns false for %p',
        $ => expect(plain).toMap(false, $),
    );

    it('on missing getPrototypeOf uses toString as fallback', () => {
        delete Object.getPrototypeOf;
        expect(plain({})).toBe(true);
    });


});
