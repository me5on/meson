// Character classes, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

import IS from '@me5on/is';
import first from '../util/first.fn.js';
import padz from '../util/padz.fn.js';


const {nil, str, int} = IS;


const RE = /[^0-9A-Fa-f]/gu;

const BASE = 16;

const MIN_N = 4;
const MAX_N = 5;

// noinspection DuplicatedCode
const uni = (

    $ => {

        if (nil($)) {
            return '';
        }

        if (int($)) {

            $ = ($ - 0).toString(BASE);

        } else if (str($)) {

            $ = first(MAX_N, String($).replaceAll(RE, ''));

        } else {
            return '';
        }

        if (0 === $.length) {
            return '';
        }

        $ = padz(MIN_N, $).toUpperCase();

        return $ && `\\u{${$}}`;
    }

);


export default uni;
