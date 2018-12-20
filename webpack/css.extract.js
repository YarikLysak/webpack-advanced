const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(env) {
  const devMode = env !== 'prod';

  return {
    plugins: [new MiniCssExtractPlugin('./css/[name].css')],
    module: {
      rules: [
        {
          test: /\.(le|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'less-loader',
          ],
        },
      ],
    },
  };
};
