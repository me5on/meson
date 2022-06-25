import named$ from '../named/named$.fn.js';
import call from '../util/call.util.js';
import nameOf from '../util/name-of.util.js';
import variadic$ from '../variadic/variadic$.fn.js';


const pipe = variadic$(
    (...$$) => named$(
        `pipe(${$$.map(nameOf)})`,
        $ => $$.reduce(call, $),
    ),
);


export default pipe;
