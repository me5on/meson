import IS from '@me5on/is';
import create from './create.fn.js';


const {rgx, nil: {missing: mis}} = IS;


const rebus = (

    (flags, pattern, ...$$) => {

        !mis(pattern) && $$.unshift(pattern);
        !mis(flags) && $$.unshift(flags);

        let [first, second, ...rest] = $$; // eslint-disable-line prefer-const

        first ??= '';
        second ??= '';

        if (1 > $$.length) {
            return create();
        }

        if (1 === $$.length) {
            return rgx(first)
                ? create(first.flags, first.pattern)
                : create(void (1), String(first));
        }

        if (2 === $$.length) { // eslint-disable-line no-magic-numbers
            return rgx(second)
                ? create(String(first), second.pattern)
                : create(String(first), String(second));
        }

        // case is 2 < $$.length
        return create(String(first), second, ...rest);

    }

);


export default rebus;
