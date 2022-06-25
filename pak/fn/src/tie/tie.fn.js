import nameOf from '../util/name-of.util.js';
import setProp from '../util/set-prop.util.js';


const INVALIDS = /\W/gu;


const mapper = (

    $ => {
        try {
            return (
                'function' === typeof $
                    ? nameOf($)
                    : String($)
            );
        } catch (e) {
            return e.message.replace(INVALIDS, '-');
        }
    }

);


const setProps = (first, rest, fn) => {

    const args = rest.map(mapper);
    const name = `${nameOf(first)}(${args})`;
    const source = first.toString();

    setProp('name', name, fn);
    setProp('args', args, fn);
    setProp('toString', () => source, fn);

    return fn;
};


const tie = (

    ($, ...$$) => setProps($, $$, $.bind(null, ...$$))

);


export default tie;
