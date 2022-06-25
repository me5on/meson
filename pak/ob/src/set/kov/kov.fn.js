const kov = (

    (key, object, value) => {
        object = {...object};
        object[key] = value;
        return object;
    }

);

export default kov;
