const SKIP = 2;


const input$ = (

    () => {

        const arg = process.argv.slice(SKIP);
        const cmd = 'bump' === arg[0] ? 'bump' : 'status';

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
export default input$;
