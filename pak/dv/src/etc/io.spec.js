import {describe, expect, it} from '@jest/globals';
import io from './io.const.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


describe('io', () => {

    it(
        'has the correct keys',
        () => expect(
            sortedKeys(io),
        ).toEqual(
            ['tag'].sort(),
        ),
    );

});
