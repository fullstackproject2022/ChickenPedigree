// const bundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')
const output = path.join(__dirname, '..', 'production')

module.exports = {
    // core behaviours
    entry: {
        // entry point (obj[code splitting]/filepath) to application 
        bundle: path.join(__dirname, 'frontend', 'index.js')
    },
    output: {
        // Code output (file to which js is compiled to)
        path: output,
        filename: '[name].[contenthash].js',
        clean: true
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: output
        },
        port: 8080,
        hot: true,
        compress: true,
        historyApiFallback: true,
        proxy: {
            "/api": "http://localhost:3000/"
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
<<<<<<< HEAD
                
=======

>>>>>>> origin/dev-sam
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'frontend', 'template.html'),
            filename: "index.html"
        })
        // new bundleAnalyzer()
    ],
};
