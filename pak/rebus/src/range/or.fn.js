import respread from '../util/respread.fn.js';


// groups and ranges, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges


const or = (

    (...$$) => {

        const $ = respread($$);

        return (
            $.length
                ? $.join('|')
                : ''
        );
    }

);


export default or;
