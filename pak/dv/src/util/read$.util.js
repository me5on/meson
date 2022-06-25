import fs from 'node:fs/promises';
import M from '../etc/mockaround.const.js';


const read$ = (

    async (where, mock) => {
        const readFile = M ? mock?.readFile : /* istanbul ignore next */ fs.readFile;

        try {

            const buffer = await readFile(where);
            const text = buffer.toString();

            return JSON.parse(text);
        } catch (e) {
            return e;
        }
    }

);


// noinspection JSUnusedGlobalSymbols
export default read$;
