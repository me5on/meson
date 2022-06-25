import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {red: RED} = A.bg;
const {reset: RESET} = A.cc;


const red = (

    (...$$) => RED + fuse($$) + RESET

);


export default red;
