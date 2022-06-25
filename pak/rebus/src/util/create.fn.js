import fuse from './fuse.fn.js';


const create = (

    (flags, ...$$) => new RegExp(fuse($$), flags)

);


export default create;
