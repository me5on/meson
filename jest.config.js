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
        global: {
            branches:   99,
            functions:  99,
            lines:      99,
            statements: -9,
        },
    },

    transform: {},

});
