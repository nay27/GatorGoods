const path = require('path')

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
    }
}