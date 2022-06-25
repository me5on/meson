import compose from './compose/compose.fn.js';
import ident from './ident/ident.fn.js';
import k from './k/k.fn.js';
import named$ from './named/named$.fn.js';
import noop from './noop/noop.fn.js';
import pipe from './pipe/pipe.fn.js';
import tie from './tie/tie.fn.js';
import variadic$ from './variadic/variadic$.fn.js';


const fn = (

    _ => fn

);


Object.assign(
    fn,
    {
        noop,
        ident,
        k,
        tie,
        compose,
        pipe,
    },
    {
        named$,
        variadic$,
    },
);


export default fn;
