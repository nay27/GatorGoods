const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'home': './src/pages/home.js'
    },
    output: {
        filename: '[name]--bundle.js',
        path: path.resolve('../priv/static/js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: "static", to: path.resolve('../priv/static/') }
        ]),
        new CleanWebpackPlugin(
            [path.resolve('../priv/static/')],
            { dry: false, allowExternal: true }
            )
    ]
}