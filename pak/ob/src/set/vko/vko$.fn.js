const vko$ = (

    (value, key, object) => {
        object[key] = value;
        return object;
    }

);


export default vko$;
