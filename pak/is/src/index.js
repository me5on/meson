/* eslint-disable import/max-dependencies */
import empty from './_/empty.fn.js';
import iterable from './_/iterable.fn.js';
import primitive from './_/primitive.fn.js';
import arr from './arr/arr.mod.js';
import bul from './bul/bul.mod.js';
import dat from './dat/dat.mod.js';
import err from './err/err.mod.js';
import fun from './fun/fun.mod.js';
import nil from './nil/nil.mod.js';
import bgi from './num/bigint.fn.js';
import flt from './num/float.fn.js';
import int from './num/integer.fn.js';
import nan from './num/nan.fn.js';
import num from './num/num.mod.js';
import obj from './obj/obj.mod.js';
import prm from './prm/prm.mod.js';
import rgx from './rgx/rgx.mod.js';
import str from './str/str.mod.js';
import sym from './sym/sym.mod.js';


const is = (

    _ => is

);


Object.assign(
    is,
    {

        // primitive data types:
        // string, symbol, number, bigint, boolean, undefined, null.
        // primitive wrapper objects:
        // String, Number, BigInt, Boolean, Symbol

        nil,
        bul, boolean: bul, bool: bul,
        nan,
        int, integer: int,
        flt, float:   flt,
        num, number:  num,
        bgi, bigint:  bgi, bint: bgi,
        sym, symbol:  sym,
        str, string:  str,

        // non-primitive objects:
        // Object, Array, Date, Error, Promise, RegExp, Map, Set, WeakMap, WeakSet,

        obj, object:  obj, ob: obj,
        arr, array:   arr, ar: obj,
        dat, date:    dat,
        err, error:   err,
        prm, promise: prm, pr: prm,
        rgx, regex:   rgx, re: rgx, regexp: rgx,

        // callable or special syntax objects:
        // Function, callable

        fun, function: fun, fn: fun,

        // composite

        empty,
        primitive,
        iterable,
    },
);


export default is;
