const CLASS = Object.freeze({

    // any character and dot
    any: '.',
    dot: '\\.',

    // positive and negative digits
    pdigit: '\\d',
    ndigit: '\\D',

    // positive and negative words
    pword: '\\w',
    nword: '\\W',

    // positive and negative whitespace
    pspace: '\\s',
    nspace: '\\S',

    // workaround for \b meaning word boundary
    backspace: '[\\b]',

    // special characters
    tab:      '\\t',
    vtab:     '\\v',
    return:   '\\r',
    newline:  '\\n',
    formfeed: '\\f',
    nul:      '\\0',

});


export default CLASS;
