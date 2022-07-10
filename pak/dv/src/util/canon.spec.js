/* eslint-disable symbol-description,no-magic-numbers,require-unicode-regexp,prefer-regex-literals */

import {describe, expect, it} from '@jest/globals';
import canon from './canon.util.js';


const BIG_I = BigInt(Number.MAX_VALUE) + 1n;
const BIG_S = BIG_I.toString();


describe('canon', () => {

    it(
        'is a function',
        () => void expect(canon).toBeFun(),
    );

    it.each([
        // result, ...args
        [''],
        ['', []],
        ['', [void (1)]],
        ['', [null]],
        ['1.2.3', [1, 2, 3]],
        ['a', 'a'],
        ['a.b.c', 'a.b.c'],
        ['1-a.2-b.3-c', '1-a.2-b.3-c'],
        ['x.2-y.z', [['x'], [2, 'y'], 'z']],
        ['0-1.p.0-2-q.w.0-abc', [-1, ['p'], [-2, 'q'], 'w', '-abc']],
        [`${BIG_S}.p.2-q.w`, [BIG_I, ['p'], [2, 'q'], 'w']],
    ])(
        'returns the canonical string %p for %p',
        expect(canon).toMapExact,
    );

});
