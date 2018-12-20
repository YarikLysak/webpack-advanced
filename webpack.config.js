const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const less = require('./webpack/less');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');

const common = merge([
  {
    entry: './src/index.js',
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
  },
]);

module.exports = function(env) {
  if (env === 'production') {
    return merge([common, extractCSS('prod')]);
  }
  if (env === 'development') {
    return merge([common, devserver(), extractCSS('dev')]);
  }
};
