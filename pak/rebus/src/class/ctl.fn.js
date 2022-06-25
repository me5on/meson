// Character classes, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes

import IS from '@me5on/is';


const {int} = IS;

const RE = /[^A-Za-z]/gu;

const BASE = 'A'.codePointAt(0) - 1;

const A = 1;
const Z = 26;


const char = (

    $ => (
        $
            ? String($).replaceAll(RE, '').slice(0, 1)
                .toUpperCase()
            : ''
    )
);


const point = (

    $ => String.fromCodePoint(BASE + $)

);


const ctl = (

    $ => {

        $ = (
            int($) && A <= $ && Z >= $
                ? point($)
                : char($)
        );

        return $ && `\\c${$}`;
    }

);


export default ctl;
