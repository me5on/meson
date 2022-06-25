/* eslint-disable prefer-destructuring,  no-magic-numbers */


import {describe, expect, it} from '@jest/globals';
import dubs from './dubs.fn.js';


const p = Object.defineProperty;


describe('OB.inf.dubs', () => {

    it(
        'is a function',
        () => void expect(dubs).toBeFun(),
    );

    it.each([
        [[]],
        [[], null],
        [[], {}],
        [[], {[Symbol('symbol')]: 'property'}],
        [['a', 'b', 'c'], p({a: 1, b: 2}, 'c', {value: 3})],
        [['a', 'b', 'c'], p({a: 1, b: 2}, 'c', {get: () => 3})],
    ])(
        'gets dubs %p from %p',
        expect(dubs).toMapEqual,
    );

});
