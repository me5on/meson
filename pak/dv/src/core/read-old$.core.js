import FILE from '../etc/file.const.js';
import read$ from '../util/read$.util.js';
import woe$ from '../util/woe$.util.js';


const readOld$ = (

    async () => ({
        ver: woe$(await read$(FILE.ver)),
        pkg: woe$(await read$(FILE.pkg)),
    })

);


// noinspection JSUnusedGlobalSymbols
export default readOld$;
