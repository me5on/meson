import {describe, expect, it} from '@jest/globals';
import space from './space.const.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


describe('space', () => {

    it(
        'has the correct keys',
        () => expect(
            sortedKeys(space),
        ).toEqual(
            ['ver', 'pkg'].sort(),
        ),
    );

});
