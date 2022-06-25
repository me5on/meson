import fuse from './fuse.fn.js';
import respread from './respread.fn.js';


const assemble = (

    $ => fuse(respread($))

);


export default assemble;
