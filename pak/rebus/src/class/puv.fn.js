import IS from '@me5on/is';


// Character classes,
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes


const {str} = IS;


// positive unicode value


const puv = (

    (nam, val) => (
        !str(nam) || !str(val)
            ? ''
            : nam && `\\p{${nam}=${val}}`
    )

);


export default puv;
