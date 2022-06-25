import IS from '@me5on/is';


// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


const {number: {int}} = IS;


// lazy between two numbers of occurrences


const lin = (

    (from, to, $) => {
        $ = String($ ?? '');

        if (!($ && int(from) && int(to) && 0 < from && 0 < to)) {
            return '';
        }

        return (
            from > to
                ? `${$}{${to},${from}}?`
                : `${$}{${from},${to}}?`
        );
    }

);


export default lin;
