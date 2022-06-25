import binary from './binary.fn.js';
import fun from './fun.fn.js';
import nullary from './nullary.fn.js';
import quaternary from './quaternary.fn.js';
import ternary from './ternary.fn.js';
import unary from './unary.fn.js';
import variadic from './variadic.fn.js';


Object.assign(
    fun,
    {
        nullary,
        unary,
        binary,
        ternary,
        quaternary,
        variadic,
    },
);


export default fun;
