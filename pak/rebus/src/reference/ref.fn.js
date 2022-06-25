import IS from '@me5on/is';
import irf from './irf.fn.js';
import krf from './krf.fn.js';


// groups and ranges, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges


const {int} = IS;


// back reference, both named and indexed


const ref = (

    $ => int($) && 0 < $ ? irf($) : krf($)

);


export default ref;
