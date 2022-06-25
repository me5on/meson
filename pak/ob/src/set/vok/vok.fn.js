const vok = (

    (value, object, key) => {
        object = {...object};
        object[key] = value;
        return object;
    }

);

export default vok;
