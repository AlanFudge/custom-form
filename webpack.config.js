const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"]
            }, {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './build',
        open: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}