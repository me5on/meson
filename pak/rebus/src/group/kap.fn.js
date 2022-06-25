import assemble from '../util/assemble.fn.js';


// groups and ranges, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges


// named capturing group


const kap = (

    // eslint-disable-next-line no-shadow
    (name, ...$$) => {
        const key = String(name ?? '').trim();
        const val = assemble($$);
        return key && val && `(?<${key}>${val})`;
    }

);


export default kap;
