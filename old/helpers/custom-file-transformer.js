// fileTransformer.js
// https://facebook.github.io/jest/docs/webpack.html#handling-static-assets

module.exports = {
  process (src, filename) {
    return 'module.exports = ' + JSON.stringify(filename) + ';';
  },
};
