const wide = (

    $ => Number.isFinite($) || Infinity === $ || -Infinity === $ || ($ instanceof Number && !isNaN($))

);


export default wide;
