import object from './object.fn.js';


const named = (

    $ => object($) && !!Object.getOwnPropertyNames($).length

);


export default named;
