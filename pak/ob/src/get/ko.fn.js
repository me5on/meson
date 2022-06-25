const ko = (

    (key, object) => (

        // difference from ?. is this one will return null for null object
        null === object
            ? null
            : object?.[key]
    )

);


export default ko;
