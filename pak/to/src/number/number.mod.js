import any from './any.fn.js';


const from = () => from;
Object.assign(from, {any});


const number = $ => any($);
Object.assign(number, {from});


export default number;
