import named from './named.fn.js';
import symboled from './symboled.fn.js';


const propped = (

    $ => named($) || symboled($)

);


export default propped;
