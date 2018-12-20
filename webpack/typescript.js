module.exports = function() {
  return {
    test: /\.ts$/,
    use: 'babel-loader, ts-loader',
    exclude: /node_modules/,
  };
};
