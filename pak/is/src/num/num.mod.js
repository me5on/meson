import bigint from './bigint.fn.js';
import float from './float.fn.js';
import integer from './integer.fn.js';
import literal from './literal.fn.js';
import nan from './nan.fn.js';
import num from './number.fn.js';
import wrapper from './wrapper.fn.js';


Object.assign(
    num,
    {
        nan,

        int: integer,
        flt: float,
        bgi: bigint,

        integer,
        float,
        bigint,

        literal,
        wrapper,
    },
);


export default num;
