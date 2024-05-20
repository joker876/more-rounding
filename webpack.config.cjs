const path = require('path');

module.exports = {
    entry: './dist/index.js',
    mode: 'production',
    output: {
        filename: 'more-rounding.min.js',
        path: path.resolve(__dirname, 'dist/browser'),
        library: 'MoreRounding',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        auxiliaryComment: 'A library that offers more number rounding options for JavaScript and TypeScript',
    },
};