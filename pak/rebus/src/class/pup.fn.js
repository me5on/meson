import IS from '@me5on/is';


// Character classes,
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes


const {nil, str} = IS;


// positive unicode property


const pup = (

    $ => (
        nil($) || !str($)
            ? ''
            : $ && `\\p{${$}}`
    )

);


export default pup;
