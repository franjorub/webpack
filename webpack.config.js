const webpack = require('webpack')
path = require('path')
endPath = path.resolve(__dirname, 'public');

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
    ],
    devtool: 'inline-soruce-map',
    devServer: {
        hot: true,
        contentBase: endPath,
        inline: true,
        compress: true,
        port: 3000,
        publicPath: '/'
    },
};