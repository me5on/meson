import setProp from '../util/set-prop.util.js';


const PROP = 'length';


const variadic$ = (

    $ => setProp(
        PROP,

        // variadic function will get 0 as length by default
        Infinity,

        $,
    )

);


// noinspection JSUnusedGlobalSymbols
export default variadic$;
