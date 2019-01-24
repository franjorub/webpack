const webpack = require('webpack')
path = require('path')
endPath = path.resolve(__dirname, 'public');
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js'],
    },
    cache: true,
    entry: './src/app/index.js',
    output: {
        path: endPath,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedModulesPlugin()
        new HtmlWebpackPlugin({
            template: './src/app/index.html',
            inject: false,
        })
    ],
    devtool: 'inline-soruce-map',
    devServer: {       
        contentBase: endPath,        
        compress: true,
        port: 3000,        
    },
};