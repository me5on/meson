#!/usr/bin/env node

/* eslint-disable import/max-dependencies */


import FILE from './etc/file.const.js';
import SEP from './etc/separator.const.js';
import SPC from './etc/space.const.js';
import alert$ from './util/alert$.util.js';
import bail$ from './util/bail$.util.js';
import canon from './util/canon.util.js';
import help$ from './util/help$.util.js';
import print$ from './util/print$.util.js';
import quit$ from './util/quit$.util.js';
import read$ from './util/read$.util.js';
import run$ from './util/run$.util.js';
import woe$ from './util/woe$.util.js';
import write$ from './util/write$.util.js';


// TODO: add proper test to get 100% coverage
/* istanbul ignore next */
try {

    const ONE = 1n;
    const SKIP = 2;

    const ARG = process.argv.slice(SKIP);
    const CMD = 'bump' === ARG[0] ? 'bump' : 'status';

    const FLG = Object.freeze({
        dry:    ARG.includes('--dry-run'),
        quiet:  ARG.includes('--quiet'),
        help:   ARG.includes('--help'),
        diffed: ARG.includes('--on-diff'),
    });

    if (FLG.help) {
        help$();
        quit$();
    }

    const different = await run$('git diff --quiet --exit-code .');
    if (FLG.diffed && !different) {
        quit$();
    }

    const oldVer = woe$(await read$(FILE.ver));
    const pkg = woe$(await read$(FILE.pkg));
    const oldPkg = pkg?.version ?? '0.0.0+0';

    if ('status' === CMD) {
        print$('ver:', canon(oldVer));
        print$('pkg:', oldPkg);
        quit$();
    }

    const [head, ...tail] = oldVer ?? [];
    const newVer = [(BigInt(head) + ONE).toString(), ...(tail ?? [])];

    const newPkg = `${oldPkg.split(SEP.pls)[0]}${SEP.pls}${newVer[0]}`;

    if (!FLG.quiet) {
        print$('ver:', canon(oldVer), '->', canon(newVer));
        print$('pkg:', oldPkg, '->', newPkg);
    }

    if (!FLG.dry) {
        await write$(FILE.ver, SPC.ver, newVer);
        await write$(FILE.pkg, SPC.pkg, {...pkg, version: newPkg});
    }

} catch (e) {
    alert$(e?.message ?? e);
    bail$();
}
