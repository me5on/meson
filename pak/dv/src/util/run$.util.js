import cp from 'node:child_process';
import mockaround from '@sloy/mockaround';


const WHITESPACE = /\s+/u;


const parse = (

    options => {

        if (null === options || void (1) === options) {
            return {
                cmd:  '',
                args: [],
            };
        }

        if (String(options) !== options) {
            return {
                cmd:  options?.cmd ?? '',
                args: options.args ?? [],
            };
        }

        const [cmd, ...args] = options.split(WHITESPACE);
        return {cmd, args};
    }
);


const run$ = mockaround(cp, (options, /* istanbul ignore next */ {spawn} = null) => (

    new Promise(resolve => {

        const {cmd, args} = parse(options);

        if ('' === cmd) {
            return void resolve(new Error(`Invalid command: "${cmd}" from options: ${String(options)}`));
        }

        const ps = spawn(cmd, args, {stdio: 'inherit'});

        ps.addListener('error', $ => resolve(new Error($)));
        ps.addListener('exit', resolve);

        return void (1);

    })

));


// noinspection JSUnusedGlobalSymbols
export default run$;
