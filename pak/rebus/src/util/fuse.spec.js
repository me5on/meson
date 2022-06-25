/* eslint-disable symbol-description,no-magic-numbers,require-unicode-regexp,prefer-regex-literals */

import {describe, expect, it} from '@jest/globals';
import fuse from './fuse.fn.js';


const SPACE = ' ';
const STOP = '.';

describe('fuse', () => {

    it(
        'is a function',
        () => void expect(fuse).toBeFun(),
    );

    // noinspection SpellCheckingInspection
    it.each([
        // result, ...args
        [void (1)],
        [void (1), null],
        [void (1), null, null],
        ['', []],
        ['Symbol()', [Symbol()]],
        ['Symbol(asdf)', [Symbol('asdf')]],
        ['123', [1, 2, 3]],
        ['nospacesallowed', ['no', 'spaces', 'allowed']],
        [
            'Unless you bring them with you.',
            [
                'Unless', SPACE,
                'you', SPACE,
                'bring', SPACE,
                'them', SPACE,
                'with', SPACE,
                'you', STOP,
            ],
        ],
    ])(
        'returns fused string %p for possible array %p',
        expect(fuse).toMapExact,
    );

});
