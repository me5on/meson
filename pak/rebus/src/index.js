/* eslint-disable import/max-dependencies */


import bgn from './assert/bgn.fn.js';
import box from './assert/box.fn.js';
import end from './assert/end.fn.js';
import nla from './assert/nla.fn.js';
import nlb from './assert/nlb.fn.js';
import pla from './assert/pla.fn.js';
import plb from './assert/plb.fn.js';
import ctl from './class/ctl.fn.js';
import hex from './class/hex.fn.js';
import nup from './class/nup.fn.js';
import nuv from './class/nuv.fn.js';
import pup from './class/pup.fn.js';
import puv from './class/puv.fn.js';
import uni from './class/uni.fn.js';
import utf from './class/utf.fn.js';
import ASSERT from './etc/assert.enum.js';
import CLASS from './etc/class.enum.js';
import ESC from './etc/escape.const.js';
import FLAG from './etc/flag.enum.js';
import UNICODE from './etc/unicode.enum.js';
import cap from './group/cap.fn.js';
import kap from './group/kap.fn.js';
import nocap from './group/nap.fn.js';
import gany from './quantifier/gany.fn.js';
import gexact from './quantifier/gexact.fn.js';
import gin from './quantifier/gin.fn.js';
import gmaybe from './quantifier/gmaybe.fn.js';
import gmin from './quantifier/gmin.fn.js';
import gsome from './quantifier/gsome.fn.js';
import lany from './quantifier/lany.fn.js';
import lexact from './quantifier/lexact.fn.js';
import lin from './quantifier/lin.fn.js';
import lmaybe from './quantifier/lmaybe.fn.js';
import lmin from './quantifier/lmin.fn.js';
import lsome from './quantifier/lsome.fn.js';
import nc from './range/nc.fn.js';
import or from './range/or.fn.js';
import pc from './range/pc.fn.js';
import irf from './reference/irf.fn.js';
import krf from './reference/krf.fn.js';
import ref from './reference/ref.fn.js';
import rebus from './util/rebus.fn.js';


Object.assign(
    rebus,
    {
        // etc
        ESC, esc:   ESC, escape: ESC,
        ASSERT, A:  ASSERT, assert: ASSERT,
        CLASS, C:   CLASS, class: CLASS,
        FLAG, F:    FLAG, flag: FLAG,
        UNICODE, U: UNICODE, unicode: UNICODE,
        // assert
        bgn, box, end,
        nla, nlb,
        pla, plb,
        // class
        ctl, hex, utf, uni,
        pup, nup,
        puv, nuv,
        // group
        cap, kap, nap: nocap,
        // quantifier
        gany, gexact, gin, gmaybe, gmin, gsome,
        lany, lexact, lin, lmaybe, lmin, lsome,
        // range
        nc, pc, or,
        // reference
        ref, irf, krf,
    },
);


export default rebus;
