import SEP from '../etc/separator.const.js';


const isa = Array.isArray;


const internal = (

    $ => (
        isa($)
            ? $.join(SEP.min)
            : String($ ?? '')
    )

);

const external = (

    $ => {

        $ ??= [];

        return isa($) ? $ : [$];
    }

);


const canon = (

    $ => external($).map(internal).join(SEP.dot)

);


export default canon;
