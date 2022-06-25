const okv = (

    (object, key, value) => {
        object = {...object};
        object[key] = value;
        return object;
    }

);


export default okv;
