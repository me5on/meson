import {describe, expect, it} from '@jest/globals';
import woe$ from './woe$.util.js';


describe('woe$', () => {

    it(
        'is a function',
        () => void expect(woe$).toBeFun(),
    );


    it.each([
        'test',
        null,
        void (1),
        1,
    ])(
        'returns %p for argument %p',
        $ => {
            expect(woe$($)).toBe($);
        },
    );


    it.each([
        new Error(),
    ])(
        'throws the same error %p that is passed as argument',
        $ => {
            expect(() => woe$($)).toThrow($);
        },
    );

});
