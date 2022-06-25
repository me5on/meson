export default ({

    injectGlobals: false,
    clearMocks:    true,

    testMatch: [
        '<rootDir>/pak/*/(src|tst)/**/*.(spec|test).js',
    ],

    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.js',
    ],

    coverageReporters: [
        'json',
        'lcov',
        'text',
        'text-summary',
    ],

    collectCoverage: true,

    collectCoverageFrom: ['pak/*/src/**/*.js'],

    coverageThreshold: {
        global:             {
            branches:   90,
            functions:  90,
            lines:      90,
            statements: -90,
        },
        './pak/dv/**/*$.*': {
            branches:   0,
            functions:  0,
            lines:      0,
            statements: 0,
        },
    },

    transform: {},

});
