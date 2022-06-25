// groups and ranges, @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges


// named back reference


const krf = (

    $ => {
        $ = String($ ?? '');

        return (
            $
                ? `\\k<${$}>`
                : ''
        );
    }

);


export default krf;
