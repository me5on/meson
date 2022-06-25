import assemble from '../util/assemble.fn.js';


// assertions, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions


// negative lookbehind
const nlb = (

    (...$$) => {
        const $ = assemble($$);
        return $ && `(?<!${$})`;
    }


);


export default nlb;
