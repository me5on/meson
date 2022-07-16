const SKIP = 2;


const readCli$ = (

    () => {

        const arg = process.argv.slice(SKIP);
        const cmd = (

            'bump' === arg[0]
                ? 'bump'
                : (
                    'help' === arg[0]
                        ? 'help'
                        : 'status'
                )
        );

        const flg = Object.freeze({
            dry:    arg.includes('--dry-run'),
            quiet:  arg.includes('--quiet'),
            help:   arg.includes('--help'),
            diffed: arg.includes('--on-diff'),
        });

        return {arg, cmd, flg};

    }

);


// noinspection JSUnusedGlobalSymbols
export default readCli$;
