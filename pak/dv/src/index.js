#!/usr/bin/env node


import bump$ from './cmd/bump$.cmd.js';
import help$ from './cmd/help$.cmd.js';
import status$ from './cmd/status$.cmd.js';
import dv$ from './core/dv$.core.js';
import readCli$ from './core/read-cli$.core.js';
import alert$ from './util/alert$.util.js';
import bail$ from './util/bail$.util.js';
import quit$ from './util/quit$.util.js';
import run$ from './util/run$.util.js';


/* istanbul ignore next */
try {

    const testDiff = async ({flg: {diffed}}) => {

        const exitCode = await run$('git diff --quiet --exit-code .');

        const bail = diffed && !exitCode;
        
        console.log('testDiff()', bail ? 'exit' : 'run', {exitCode, diffed});

        return bail;

    };
    const testHelp = ({cmd, flg: {help}}) => Promise.resolve('help' === cmd || help);

    await dv$(
        [
            {run: help$, test: testHelp},
            {run: quit$, test: testDiff},
            {run: status$, test: 'status'},
            {run: bump$, test: 'bump'},
        ],
        readCli$(),
    );
} catch (e) {
    alert$(e?.message ?? e);
    bail$();
}
