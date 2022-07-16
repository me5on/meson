import fs from 'node:fs/promises';
import mockaround from '@sloy/mockaround';


const write$ = mockaround(fs, async (where, space, what, /* istanbul ignore next */ {writeFile} = null) => {

    try {
        const data = JSON.stringify(what, null, space);
        await writeFile(where, data);

        return null;
    } catch (e) {
        return e;
    }

});


// noinspection JSUnusedGlobalSymbols
export default write$;
