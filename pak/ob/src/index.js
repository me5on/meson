import del from './del/del.mod.js';
import get from './get/get.mod.js';
import inf from './inf/inf.mod.js';
import nav from './nav/nav.fn.js';
import neo from './neo/neo.fn.js';
import set from './set/set.mod.js';


const ob = (

    _ => ob

);


Object.assign(
    ob,
    {
        // modules
        get,
        set,
        del,
        inf,
        // functions
        nav,
        neo,
    },
);

export default ob;
