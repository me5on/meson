import readOld$ from '../core/read-old$.core.js';
import canon from '../util/canon.util.js';
import print$ from '../util/print$.util.js';
import quit$ from '../util/quit$.util.js';


const status$ = (

    async () => {

        const old = await readOld$();

        print$('ver:', canon(old.ver));
        print$('pkg:', old?.pkg?.version ?? '');

        quit$();
    }

);


// noinspection JSUnusedGlobalSymbols
export default status$;
