import IS from '@me5on/is';


// Character classes,
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes


const {nil, str} = IS;


// negative unicode property


const nup = (

    $ => (
        nil($) || !str($)
            ? ''
            : $ && `\\P{${$}}`
    )

);


export default nup;
