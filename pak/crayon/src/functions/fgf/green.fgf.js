import A from '../../etc/ansi.const.js';
import fuse from '../../util/fuse.util.js';


const {green: GREEN} = A.fg;
const {reset: RESET} = A.cc;

const green = (

    (...$$) => GREEN + fuse($$) + RESET

);


export default green;
