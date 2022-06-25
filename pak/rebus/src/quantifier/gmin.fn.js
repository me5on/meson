import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {number: {int}} = IS;


// greedy minimal number of occurrences


const gmin = (

    (count, $) => {
        $ = String($ ?? '');

        return (
            $ && int(count) && 0 < count
                ? `${$}{${count},}`
                : ''
        );
    }

);


export default gmin;
