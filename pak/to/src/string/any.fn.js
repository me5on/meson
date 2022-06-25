const any = $ => (

    null === $ || void (1) === $ || Number.isNaN($) ? '' : String($)

);


export default any;
