const ko$ = (

    (key, object) => {
        delete object[key];
        return object;
    }

);


export default ko$;
