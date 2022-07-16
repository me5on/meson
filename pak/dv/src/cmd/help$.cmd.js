import printHelp$ from '../util/print-help$.util.js';
import quit$ from '../util/quit$.util.js';


const help$ = (

    () => {
        printHelp$();
        quit$();
    }

);


// noinspection JSUnusedGlobalSymbols
export default help$;
