import primitive from '../_/primitive.fn.js';
import nil from '../nil/nil.fn.js';


const object = (

    $ => !nil($) && !primitive($)

);


export default object;
