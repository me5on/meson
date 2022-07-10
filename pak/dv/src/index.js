#!/usr/bin/env node

/* eslint-disable import/max-dependencies */

import bump$ from './cmd/bump$.cmd.js';
import input$ from './core/input$.core.js';
import FILE from './etc/file.const.js';
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


/* istanbul ignore next */
try {

    const {flg, cmd} = input$();

    if (flg.help) {
        // quit with help message
        help$();
        quit$();
    }

    const different = await run$('git diff --quiet --exit-code .');
    if (flg.diffed && !different) {
        // quit silently
        quit$();
    }

    const old = {
        ver: woe$(await read$(FILE.ver)),
        pkg: woe$(await read$(FILE.pkg)),
    };

    if ('status' === cmd) {
        // quit with status message
        print$('ver:', canon(old.ver));
        print$('pkg:', old.pkg.version);
        quit$();
    }

    if ('bump' === cmd) {
        // quit with bump
        const {pkg, ver} = bump$({ver: old.ver, pkg: old.pkg.version});

        if (!flg.quiet) {
            print$('ver:', canon(old.ver), '->', canon(ver));
            print$('pkg:', old.pkg.version, '->', pkg);
        }

        if (!flg.dry) {
            await write$(FILE.ver, SPC.ver, ver);
            await write$(FILE.pkg, SPC.pkg, {...old.pkg, version: pkg});
        }

        quit$();
    }

} catch (e) { // bail with error message
    alert$(e?.message ?? e);
    bail$();
}
