import {describe, expect, it} from '@jest/globals';
import separator from './separator.const.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


describe('separator', () => {

    it(
        'has the correct keys',
        () => expect(
            sortedKeys(separator),
        ).toEqual(
            ['pls', 'min', 'dot'].sort(),
        ),
    );

});
