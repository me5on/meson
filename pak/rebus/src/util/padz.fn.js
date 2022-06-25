import IS from '@me5on/is';


const PAD = '0';


const padz = (

    // eslint-disable-next-line no-shadow
    (length, value) => {

        const string = String(value ?? '');

        if (!IS.int(length) || 0 > length) {
            return string;
        }

        if (!string) {
            return PAD.repeat(length);
        }

        const diff = length - string.length;
        return (
            1 > diff
                ? string
                : PAD.repeat(diff) + string
        );
    }

);


export default padz;
