const ok$ = (

    (object, key) => {
        delete object[key];
        return object;
    }

);


export default ok$;
