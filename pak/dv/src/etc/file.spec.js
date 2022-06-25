import {describe, expect, it} from '@jest/globals';
import file from './file.const.js';


const sortedKeys = (

    $ => $
        ? Object.keys($).sort()
        : []

);


describe('file', () => {

    it(
        'has the correct keys',
        () => expect(
            sortedKeys(file),
        ).toEqual(
            ['ver', 'pkg'].sort(),
        ),
    );

});
