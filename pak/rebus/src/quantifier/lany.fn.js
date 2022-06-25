// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


// lazy any number of occurrences


const lany = (

    $ => {
        $ = String($ ?? '');

        return (
            $
                ? `${$}*?`
                : ''
        );
    }

);


export default lany;
