import boolean from '../boolean/boolean.mod.js';
import number from '../number/number.mod.js';
import string from '../string/string.mod.js';
import to from './to.fn.js';


const TO = Object.assign(
    to,
    {
        //
        boolean,
        bool: boolean,
        bul:  boolean,
        //
        string,
        str: string,
        //
        number,
        num: number,
    },
);


export default TO;
