// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


// greedy some number, at least one occurrence


const gsome = (

    $ => {
        $ = String($ ?? '');

        return (
            $
                ? `${$}+`
                : ''
        );
    }

);


export default gsome;
