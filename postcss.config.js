var autoprefixer = require('autoprefixer');

module.exports = {
  postcss: function() {
    return [autoprefixer];
  },
};
