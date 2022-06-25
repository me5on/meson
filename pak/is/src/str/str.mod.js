import empty from './empty.fn.js';
import literal from './literal.fn.js';
import str from './string.fn.js';
import wrapper from './wrapper.fn.js';


Object.assign(
    str,
    {
        empty,
        wrapper,
        literal,
    },
);


export default str;
