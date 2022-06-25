/* eslint-disable no-underscore-dangle */


const {iterator} = Symbol;


const iterable = (

    $ => 'function' === typeof $?.[iterator]

);


export default iterable;
