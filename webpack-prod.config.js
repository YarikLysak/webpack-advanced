const path = require('path');

// "build": "rimraf dist && webpack --config webpack-prod.config.js",
// "dev": "rimraf dist && webpack --config webpack.config.js",

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 9000,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html',
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
      },
    ],
  },
};
