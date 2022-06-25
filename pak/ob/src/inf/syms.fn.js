const osyms = Object.getOwnPropertySymbols;


const syms = (

    $ => osyms($ ?? {})

);


export default syms;
