const ok = (

    (object, key) => {
        object = {...object};
        delete object[key];
        return object;
    }

);


export default ok;
