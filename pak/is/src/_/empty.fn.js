import a from '../arr/empty.fn.js';
import n from '../nil/nil.fn.js';
import o from '../obj/empty.fn.js';
import s from '../str/empty.fn.js';


const empty = (

    $ => n($) || s($) || a($) || o($)

);


export default empty;
