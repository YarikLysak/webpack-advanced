const path = require('path');

module.exports = function() {
  return {
    devServer: {
      port: 9000,
      contentBase: path.join(__dirname, 'dist'),
    },
  };
};
