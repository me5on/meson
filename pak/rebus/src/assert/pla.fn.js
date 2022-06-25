import assemble from '../util/assemble.fn.js';


// assertions, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions


// positive lookahead
const pla = (

    (...$$) => {
        const $ = assemble($$);
        return $ && `(?=${$})`;
    }

);


export default pla;
