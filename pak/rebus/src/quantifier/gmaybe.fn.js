// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


// greedy maybe one or maybe no occurrence


const gmaybe = (

    $ => {
        $ = String($ ?? '');

        return (
            $
                ? `${$}?`
                : ''
        );
    }

);


export default gmaybe;
