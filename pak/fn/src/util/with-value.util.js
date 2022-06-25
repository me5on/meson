const withValue = (

    $ => {
        const descriptor = Object.create(null);
        descriptor.value = $;
        return descriptor;
    }

);


export default withValue;
