const kvo = (

    (key, value, object) => {
        object = {...object};
        object[key] = value;
        return object;
    }

);


export default kvo;
