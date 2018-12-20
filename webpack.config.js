const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const extractCSS = require('./webpack/css.extract');

const common = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html',
      filename: './index.html',
    }),
  ],
};

module.exports = function(env) {
  if (env === 'production') {
    return merge([common, extractCSS('prod')]);
  }
  if (env === 'development') {
    return merge([common, devserver(), extractCSS('dev')]);
  }
};
