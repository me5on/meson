// Character classes, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

import IS from '@me5on/is';
import first from '../util/first.fn.js';
import padz from '../util/padz.fn.js';


const {nil, str, int} = IS;


const RE = /[^0-9A-Fa-f]/gu;

const BASE = 16;

const N = 2;


// noinspection DuplicatedCode
const hex = (

    $ => {

        if (nil($)) {
            return '';
        }

        if (int($)) {

            $ = ($ - 0).toString(BASE);

        } else if (str($)) {

            $ = first(N, String($).replaceAll(RE, ''));

        } else {
            return '';
        }

        if (0 === $.length) {
            return '';
        }

        $ = padz(N, $).toUpperCase();

        return $ && `\\x${$}`;
    }

);


export default hex;
