import {describe, expect, it} from '@jest/globals';
import any from './any.fn.js';
import string from './string.mod.js';


describe('string', () => {


    it(
        'is function',
        () => void expect(string).toBeFun(any),
    );


    it.each([
        void (1), null, '', NaN,
    ])(
        'returns empty string for %p',
        $ => expect(any).toMap('', $),
    );


    it('contains the from.any function', () => {
        expect(string.from.any).toBeFun();
    });

    const args = [
        ['true', true],
        ['1', 1],
        ['Symbol(dummy symbol)', Symbol('dummy symbol')],
    ];

    it.each(args)('returns correct string for %p', expect(any).toMap);

    it.each(args)('returns same %p called as string() and string.from.any() on %p', $ => {
        expect(string($)).toBe(string.from.any($));
    });

});
