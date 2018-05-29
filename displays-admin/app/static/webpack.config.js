const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry:  __dirname + '/js/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: './dist'
    },
    devtool: "#eval-source-map",
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader : "url-loader?name=dist/img/[name].[ext]"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new CopyWebpackPlugin([
            {   from:'./node_modules/ag-grid/dist/styles/ag-grid.css',
                to: __dirname + '/dist/ag-grid/dist/styles/ag-grid.css',
                toType: 'file'
            },
            {   from:'./node_modules/ag-grid/dist/styles/ag-theme-bootstrap.css',
                to: __dirname + '/dist/ag-grid/dist/styles/ag-theme-bootstrap.css',
                toType: 'file'
            },
            {   from: './login.html',
                to: __dirname + '/dist/login.html',
                toType: 'file'
            }
        ]),
        new HtmlWebpackPlugin({title:"ubiquity displays", template: 'index.html', inject:'body'})
    ]
};

module.exports = config;
