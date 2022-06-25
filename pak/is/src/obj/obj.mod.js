import empty from './empty.fn.js';
import named from './named.fn.js';
import object from './object.fn.js';
import plain from './plain.fn.js';
import propped from './propped.fn.js';
import symboled from './symboled.fn.js';


Object.assign(
    object,
    {
        plain,
        empty,
        named,
        propped,
        symboled,
    },
);


export default object;
