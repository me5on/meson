const {isArray} = Array;


const any = (

    $ => isArray($) ? NaN : $ - 0

);


export default any;
