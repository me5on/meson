import IO from '../etc/io.const.js';


const alert$ = (

    // eslint-disable-next-line no-console
    (...$$) => console.error(IO.tag, ...$$)

);


// noinspection JSUnusedGlobalSymbols
export default alert$;
