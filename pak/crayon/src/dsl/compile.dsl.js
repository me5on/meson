import rebus from '@me5on/rebus';
import SYNTAX from '../etc/syntax.const.js';
import escapist from '../util/escapist.util.js';
import stringify from '../util/stringify.util.js';


const compile = (

    $ => {
        const box = $?.box ?? {};
        const syntax = $?.syntax ?? SYNTAX;

        const and = rebus(rebus.F.unicode, escapist(syntax.esc)(syntax.and));
        const get = segment => box[stringify(segment).trim()] ?? '';

        return (
            stringify($?.directives)
                .split(and)
                .map(get)
                .join('')
        );
    }

);


export default compile;
