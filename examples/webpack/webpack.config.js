const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.script\.js$/,
        use: [
          {
            loader: 'script-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(txt|min)$/i,
        use: 'raw-loader',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.hbs$/i,
        use: [
          {
            loader: 'handlebars-loader',
          },
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html', // public/index.html 파일을 읽는다.
      filename: 'index.html', // output으로 출력할 파일은 index.html 이다.
    }),
  ],
  resolve: {
    alias: {
      handlebars: __dirname + '/node_modules/handlebars/dist/handlebars.min.js',
      fs: false,
      '@src': path.resolve(__dirname, 'src'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    inline: true,
    hot: true,
    contentBase: __dirname + '/dist/',
    host: 'localhost',
    port: 5500,
    proxy: {
      '/': 'http://localhost:8080', // 프록시
    },
  },
};
