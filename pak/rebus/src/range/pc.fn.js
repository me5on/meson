import assemble from '../util/assemble.fn.js';


// groups and ranges, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges


// character class
const pc = (

    (...$$) => {
        const $ = assemble($$);
        return $ && `[${$}]`;
    }

);


export default pc;
