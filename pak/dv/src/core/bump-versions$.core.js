import SEP from '../etc/separator.const.js';


const {pls: PLUS} = SEP;


const ZERO = 0n;
const ONE = 1n;


const DEFAULT = '0.0.0+0';


const parse = (

    v => {

        const [head, ...tail] = (
            Array.isArray(v)
                ? v
                : [v ?? '']
        );

        // head must be cast-able to BigInt and must be non-negative
        try {

            const result = BigInt(head ?? 0);
            if (0 <= result) {
                return {tail, head: result};
            }

            tail.unshift(head);
            return {tail, head: ZERO};

        } catch (e) {
            tail.unshift(head);
            return {tail, head: ZERO};
        }

    }

);


const bumpVersions$ = (

    $ => {

        const {head, tail} = parse($?.ver);
        const suffix = (head + ONE).toString();
        const [prefix] = ($?.pkg || DEFAULT).split(PLUS);

        return {
            ver: [suffix, ...tail],
            pkg: `${prefix}${PLUS}${suffix}`,
        };

    }

);


// noinspection JSUnusedGlobalSymbols
export default bumpVersions$;
