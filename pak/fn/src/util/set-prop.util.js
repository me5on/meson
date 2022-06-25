import withValue from './with-value.util.js';


const setProp = (

    (key, val, fn) => {
        try {
            Object.defineProperty(fn, key, withValue(val));
        } catch (e) {
            // nothing to do here, not the end of the world
        }
        return fn;
    }

);


export default setProp;
