import nil from './nil.fn.js';
import nul from './nul.fn.js';
import und from './und.fn.js';


Object.assign(
    nil,
    {
        und,
        undefined: und,
        missing:   und,
        nul,
        null:      nul,
    },
);


export default nil;
