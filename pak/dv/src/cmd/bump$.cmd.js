import bumpVersions$ from '../core/bump-versions$.core.js';
import readOld$ from '../core/read-old$.core.js';
import FILE from '../etc/file.const.js';
import SPC from '../etc/space.const.js';
import alert$ from '../util/alert$.util.js';
import bail$ from '../util/bail$.util.js';
import canon from '../util/canon.util.js';
import print$ from '../util/print$.util.js';
import quit$ from '../util/quit$.util.js';
import write$ from '../util/write$.util.js';


const bump$ = (

    async flg => {

        const quiet = flg?.quiet;
        const dry = flg?.dry;

        const {pkg: fullPkg, ver: oldVer} = await readOld$();

        if (!oldVer) {
            if (!quiet) {
                alert$('invalid ver:', (oldVer));
            }
            return void bail$();
        }

        const oldPkg = fullPkg?.version;

        const {pkg: newPkg, ver: newVer} = bumpVersions$({ver: oldVer, pkg: oldPkg});

        if (!quiet) {
            print$('ver:', canon(oldVer), '->', canon(newVer));
            print$('pkg:', oldPkg, '->', newPkg);
        }

        if (!dry) {
            await write$(FILE.ver, SPC.ver, newVer);
            await write$(FILE.pkg, SPC.pkg, {...fullPkg, version: newPkg});
        }

        return void quit$();
    }

);


// noinspection JSUnusedGlobalSymbols
export default bump$;
