import IS from '@me5on/is';


const {int} = IS;


// groups and ranges, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges


// indexed back reference


const irf = (

    $ => (
        int($) && 0 < $
            ? `\\${$}`
            : ''
    )

);


export default irf;
