import fun from './fun.fn.js';


const ternary = (

    // eslint-disable-next-line no-magic-numbers
    $ => fun($) && 3 === $.length

);


export default ternary;
