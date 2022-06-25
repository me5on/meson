/* eslint-disable no-magic-numbers,require-unicode-regexp,prefer-regex-literals */

import {describe, expect, it} from '@jest/globals';
import rebus from './rebus.fn.js';


describe('rebus', () => {

    it(
        'is a function',
        () => void expect(rebus).toBeFun(),
    );

    // noinspection RegExpUnnecessaryNonCapturingGroup
    it.each([
        // result, ...args
        [/(?:)/],
        [/(?:)/gu, /.*/gu],
        [/(?:)/gu, new RegExp('.*', 'gu')],
        [/(?:)/y, 'y', /.*/gu],
        [/(?:)/, rebus(/.*/)],
        [/(?:)/gu, 'gu', rebus(/.*/)],
        [/.*/, '.*'],
        [/.*/, null, '.*'],
        [/.*/gu, 'gu', '.*'],
        [/123/y, 'y', 1, void (1), 2, null, 3],
        [/a,b,c/y, 'y', ['a', 'b', 'c']],
    ])(
        'returns correct rex %p for %p',
        expect(rebus).toMapEqRe,
    );

});
