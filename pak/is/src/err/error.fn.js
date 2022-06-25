import nil from '../nil/nil.fn.js';


const error = (

    $ => !nil($) && $ instanceof Error

);


export default error;
