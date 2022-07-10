import SEP from '../etc/separator.const.js';


const isa = Array.isArray;


const internal = (

    $ => (
        isa($)
            ? $.join(SEP.min)
            : String($ ?? '')
    )

);

// eslint-disable-next-line no-shadow
const external = (

    $ => {

        $ ??= [];

        return isa($) ? $ : [$];
    }

);


const MATCHER = /^-/u;

// noinspection SpellCheckingInspection
const dedash = (

    $ => String($).match(MATCHER) ? `0${$}` : $

);


const canon = (

    $ => external($)
        .map(internal)
        .map(dedash)
        .join(SEP.dot)

);


export default canon;
