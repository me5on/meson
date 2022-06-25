const ovk$ = (

    (object, value, key) => {
        object[key] = value;
        return object;
    }

);


export default ovk$;
