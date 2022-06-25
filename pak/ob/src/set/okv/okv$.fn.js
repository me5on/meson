const okv$ = (

    (object, key, value) => {
        object[key] = value;
        return object;
    }

);


export default okv$;
