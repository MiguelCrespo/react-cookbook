const webpack = require('webpack');

// Webpack uses `publicPath` to determine where the app is being served from.
// In development, we always serve from the root. This makes config easier.
const publicPath = '/';
// `publicUrl` is just like `publicPath`, but we will provide it to our app
// as %PUBLIC_URL% in `index.html` and `process.env.PUBLIC_URL` in JavaScript.
// Omit trailing slash as %PUBLIC_PATH%/xyz looks better than %PUBLIC_PATH%xyz.
const publicUrl = '';

module.exports = {
    entry: [
        __dirname + '/../src'
    ],
    output: {
        path: __dirname + '/../lib',
        filename: "bundle.js"
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: __dirname,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    }
};
