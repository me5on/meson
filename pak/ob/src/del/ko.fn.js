const ko = (

    (key, object) => {
        object = {...object};
        delete object[key];
        return object;
    }

);


export default ko;
