var webpack = require('webpack');
var path = require('path');
var definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
});

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, 'app'),
  entry: [
    './index.js'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '/',
    sourceMapFilename: 'bundle.js.map'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader'
        }]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: [{
          loader: 'file-loader',
          options: {name: 'bundle/assets/[hash].[ext]'}
        }]
      },
      {
        test: /\.bin$|\.exe$/,
        use: [{
          loader: 'file-loader',
          options: {name: 'bundle/binaries/[name].[ext]'}
        }]
      }
    ],
    noParse: [/ws\/lib/]
  },
  plugins: [
    definePlugin
  ],
  target: 'electron'
};
