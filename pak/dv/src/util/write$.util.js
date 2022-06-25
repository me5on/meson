import fs from 'node:fs/promises';
import M from '../etc/mockaround.const.js';


const write$ = (

    async (where, space, what, /* istanbul ignore next */ mock = null) => {

        const writeFile = M ? mock?.writeFile : /* istanbul ignore next */ fs.writeFile;

        try {
            const data = JSON.stringify(what, null, space);
            await writeFile(where, data);

            return null;
        } catch (e) {
            return e;
        }
    }

);


// noinspection JSUnusedGlobalSymbols
export default write$;
