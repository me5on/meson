import aggregate from './aggregate.fn.js';
import caused from './caused.fn.js';
import err from './error.fn.js';


Object.assign(
    err,
    {
        aggregate,
        caused,
    },
);


export default err;
