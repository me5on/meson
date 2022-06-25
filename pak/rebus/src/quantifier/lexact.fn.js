import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


// lazy exact number of occurrences


const {number: {int}} = IS;


const lexact = (

    (count, $) => {
        $ = String($ ?? '');

        return (
            $ && int(count) && 0 < count
                ? `${$}{${count}}?`
                : ''
        );
    }

);


export default lexact;
