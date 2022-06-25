const kvo$ = (

    (key, value, object) => {
        object[key] = value;
        return object;
    }

);


export default kvo$;
