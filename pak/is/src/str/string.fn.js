import sym from '../sym/sym.mod.js';


const string = (

    $ => !sym($) && `${$}` === $ || $ instanceof String

);


export default string;
