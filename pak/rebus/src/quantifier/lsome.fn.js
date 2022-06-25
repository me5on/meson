// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


// lazy some number, at least one occurrence


const lsome = (

    $ => {
        $ = String($ ?? '');

        return (
            $
                ? `${$}+?`
                : ''
        );
    }

);


export default lsome;
