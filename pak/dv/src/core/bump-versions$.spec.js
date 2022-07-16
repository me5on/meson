/* eslint-disable no-magic-numbers */
import {describe, expect, it} from '@jest/globals';
import bumpVersions$ from './bump-versions$.core.js';


const BIG_A = BigInt(Number.MAX_VALUE) + 1n;
const BIG_B = BIG_A + 1n;
const BIG_S = BIG_B.toString();


describe('bumpVersions$', () => {

    it(
        'is a function',
        () => void expect(bumpVersions$).toBeFun(),
    );

    // noinspection SpellCheckingInspection
    it.each([
        // result, options
        [{ver: ['1'], pkg: '0.0.0+1'}, void (1)],
        [{ver: ['1'], pkg: '0.0.0+1'}, null],
        [{ver: ['1'], pkg: '0.0.0+1'}, []],
        [{ver: ['1'], pkg: '0.0.0+1'}, {}],
        [{ver: ['16'], pkg: '0.0.0+16'}, {ver: '15'}],
        [{ver: ['1'], pkg: '15+1'}, {pkg: '15'}],
        [{ver: ['9'], pkg: '3+9'}, {ver: '8', pkg: '3'}],
        [{ver: [BIG_S], pkg: `4+${BIG_S}`}, {ver: BIG_A, pkg: '4'}],
        [{ver: ['10'], pkg: '6.7.8+10'}, {ver: '9', pkg: '6.7.8'}],
        [{ver: ['20', 18, 17], pkg: '6.7.8+20'}, {ver: [19, 18, 17], pkg: '6.7.8'}],
        [{ver: ['1', 'a', 'b', 'c'], pkg: 'd.e.f+1'}, {ver: ['a', 'b', 'c'], pkg: 'd.e.f'}],
        [{ver: ['34', 'v'], pkg: 'p+34'}, {ver: ['33', 'v'], pkg: 'p+33'}],
        [{ver: ['56', [1, 'a'], [2, 'b']], pkg: '1.2+56'}, {ver: ['55', [1, 'a'], [2, 'b']], pkg: '1.2+55'}],
        [{ver: ['1', '-1'], pkg: '-1+1'}, {ver: '-1', pkg: '-1'}],
        [{ver: ['1'], pkg: 'a.b.c+1'}, {ver: [], pkg: 'a.b.c'}],
        [{ver: ['1', 2], pkg: 'a.b.c+1'}, {ver: [null, 2], pkg: 'a.b.c'}],
    ])(
        'returns bumpVersions$d string %p for %p',
        expect(bumpVersions$).toMapEqual,
    );

});
