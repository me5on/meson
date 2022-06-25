import any from './any.fn.js';


const from = () => from;
Object.assign(from, {any});


const string = $ => any($);
Object.assign(string, {from});


export default string;
