import any from './any.fn.js';


const from = () => from;
Object.assign(from, {any});


const boolean = $ => any($);
Object.assign(boolean, {from});


export default boolean;
