const nan = Number.isNaN;


const invalid = (

    $ => $ instanceof Date && nan($ - 0)

);


export default invalid;
