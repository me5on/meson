// quantifiers, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers


// lazy maybe one or maybe no occurrence


const lmaybe = (

    $ => {
        $ = String($ ?? '');

        return (
            $
                ? `${$}??`
                : ''
        );
    }

);


export default lmaybe;
