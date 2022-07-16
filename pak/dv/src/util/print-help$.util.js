const MESSAGE = `
$ npx dv                # to display current status
$ npx dv status         # to display current status
$ npx dv --help         # to display this help message
$ npx dv bump --dry-run # to see what changes will be done
$ npx dv bump           # to actually do the changes
$ npx dv bump --quiet   # to do the changes without console output

ver.json must be present next to package.json
containing array with first element being integer
`;


const printHelp$ = (

    () => {
        // eslint-disable-next-line no-console
        console.log(MESSAGE);
    }

);


// noinspection JSUnusedGlobalSymbols
export default printHelp$;
