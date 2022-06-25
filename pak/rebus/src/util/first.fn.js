const RE = /[^A-Za-z0-9]/gu;


const first = (

    (count, string) => (
        string
            ? String(string).replaceAll(RE, '').slice(0, count)
            : ''
    )
);


export default first;
