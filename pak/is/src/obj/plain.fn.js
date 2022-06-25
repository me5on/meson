const toS = Function.prototype.call.bind(Object.prototype.toString);


const TAG = '[object Object]';


const plain = (

    $ => {

        if ('object' !== typeof $ || null === $) {
            return false;
        }
        
        const {prototype, getPrototypeOf} = Object;
        if (getPrototypeOf) {
            const p = getPrototypeOf($);
            return null === p || prototype === p;
        }

        return TAG === toS($);
    }

);


export default plain;
