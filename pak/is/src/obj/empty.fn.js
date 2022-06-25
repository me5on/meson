import regex from '../rgx/regex.fn.js';
import object from './object.fn.js';


const empty = (

    $ => !regex($) && object($) && !Object.keys($).length

);


export default empty;
