const woe$ = (

    $ => {
        // return result With-Out-Error, or just throw it
        if ($ instanceof Error) {
            throw $;
        } else {
            return $;
        }
    }

);


// noinspection JSUnusedGlobalSymbols
export default woe$;
