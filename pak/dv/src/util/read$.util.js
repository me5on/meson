import fs from 'node:fs/promises';
import mockaround from '@sloy/mockaround';


const read$ = mockaround(fs, async (where, /* istanbul ignore next */ {readFile} = null) => {

    try {
        const buffer = await readFile(where);
        const text = buffer.toString();

        return JSON.parse(text);
    } catch (e) {
        return e;
    }

});


// noinspection JSUnusedGlobalSymbols
export default read$;
