import get from '../get/ok.fn.js';


const DOT = '.';

const {isArray} = Array;
const isString = $ => String($) === $;


const nav = (

    (path, object) => (

        isArray(path)
            ? path.reduce(get, object)
            : (
                isString(path) && path.includes(DOT)
                    ? nav(path.split(DOT), object)
                    : get(object, path)
            )

    )

);


export default nav;
