const number = (

    $ => Number.isFinite($) || ($ instanceof Number && Number.isFinite($.valueOf()))

);


export default number;
