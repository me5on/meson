const PRIMITIVES = Object.freeze([
    'undefined',
    'boolean',
    'number',
    'bigint',
    'string',
    'symbol',
    'function',
]);


const primitive = (

    $ => null === $ || PRIMITIVES.includes(typeof $)

);


export default primitive;
