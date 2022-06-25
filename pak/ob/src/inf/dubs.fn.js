const odubs = Object.getOwnPropertyNames;


const dubs = (

    $ => odubs($ ?? {})

);


export default dubs;
