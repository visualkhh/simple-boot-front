const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
// const tsConfigPath = path.resolve(__dirname, "tsconfig")

// var HtmlWebpackPlugin = require('html-webpack-plugin'); // https://github.com/jantimon/html-webpack-plugin
// var ExtractTextPlugin = require('extract-text-webpack-plugin'); // https://webpack.js.org/plugins/extract-text-webpack-plugin/

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    mode: 'development',
    watch: true,
    // resolve: {
    //     alias: {
    //         handlebars: 'handlebars/dist/handlebars.min.js'
    //     }
    // },
    // resolve: {
    //     // Add `.ts` and `.tsx` as a resolvable extension.
    //     extensions: [".ts", ".tsx", ".js"],
    //     plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })]
    // },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.script\.js$/,
                use: [
                    {
                        loader: 'script-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(txt|min)$/i,
                use: 'raw-loader'
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
                // options: {
                //     attributes: {
                //         list: [
                //             { tag: 'img', attribute: 'src', type: 'src' },
                //             { tag: 'link', attribute: 'href', type: 'src' },
                //             // { tag: 'a', attribute: 'href', type: 'src' } <--- throws error when included
                //         ]
                //     }
                // }
                // ,
                // options: {
                //     minimize: true
                // }
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         // {
            //         //     loader: 'style-loader'
            //         // },
            //         {
            //             loader: 'css-loader'
            //         }
            //         // "handlebars-loader", // handlebars loader expects raw resource string
            //         // 'extract-loader',
            //         // 'style-loader',
            //         // 'css-loader'
            //     ]
            // },
            // {
            //     test: /\.(png|svg|jpe?g|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 esModule: false
            //             }
            //         }
            //     ]
            // }
            {
                test: /\.hbs$/i,
                use: [

                    {
                        loader: 'handlebars-loader'
                    },
                    // {
                    //     loader: 'extract-loader'
                    // },
                    {
                        loader: 'html-loader'

                    }
                    // "extract-loader",
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: './src/index.html', // public/index.html 파일을 읽는다.
            filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
        })
    ],
    resolve: {
        alias: {
            handlebars: __dirname + '/node_modules/handlebars/dist/handlebars.min.js',
            fs: false,
            '@src': path.resolve(__dirname, 'src')
        },
        extensions: ['.tsx', '.ts', '.js']
        // extensions: ['.tsx', '.ts', '.js', 'webpack.js', '.web.js', '.html'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        inline: true,
        hot: true,
        contentBase: __dirname + '/dist/',
        host: 'localhost',
        port: 5500,
        proxy: {
            '/': 'http://localhost:8080' // 프록시
        }
        // contentBase: './dist'
    }
}
