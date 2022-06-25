import setProp from '../util/set-prop.util.js';


const PROP = 'name';


const named$ = (

    (name, fn) => (
        (null === fn || void (1) === fn)
            ? fn
            : setProp(PROP, name, fn)
    )

);


export default named$;
