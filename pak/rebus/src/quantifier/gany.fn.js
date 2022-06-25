// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


// greedy any number of occurrences


const gany = (

    $ => {
        $ = String($ ?? '');

        return (
            $
                ? `${$}*`
                : ''
        );
    }

);


export default gany;
