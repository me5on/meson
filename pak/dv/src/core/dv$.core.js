const dv$ = (

    async (list, cli) => {

        const cmd = cli?.cmd;
        const flg = cli?.flg;

        for (const {test, run} of Array.isArray(list) ? list : []) {

            if ('string' === typeof test && cmd === test) {
                return run?.(flg);
            }

            if ('function' === typeof test && await test({cmd, flg})) {
                return run?.(flg);
            }

        }

        return void 1;
    }

);


// noinspection JSUnusedGlobalSymbols
export default dv$;
