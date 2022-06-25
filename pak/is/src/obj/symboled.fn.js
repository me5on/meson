import object from './object.fn.js';


const symboled = (

    $ => object($) && !!Object.getOwnPropertySymbols($).length

);


export default symboled;
