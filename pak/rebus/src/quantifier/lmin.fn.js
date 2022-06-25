import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {number: {int}} = IS;


// lazy minimal number of occurrences


const lmin = (

    (count, $) => {
        $ = String($ ?? '');

        return (
            $ && int(count) && 0 < count
                ? `${$}{${count},}?`
                : ''
        );
    }

);


export default lmin;
