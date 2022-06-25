const stringify = (
    $ => String($ ?? '')
);


const fuse = (

    $ => $?.map(stringify).join?.('')

);


export default fuse;
