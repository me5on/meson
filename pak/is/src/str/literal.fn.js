import sym from '../sym/sym.mod.js';


const literal = (

    $ => !sym($) && `${$}` === $

);


export default literal;
