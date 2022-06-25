const ovk = (

    (object, value, key) => {
        object = {...object};
        object[key] = value;
        return object;
    }

);


export default ovk;
