var webpack = require('webpack');
var path = require('path');
var definePlugin = new webpack.DefinePlugin({
  __DEV__: (process.env.NODE_ENV === 'development')
});
var globalHMRPlugin = new webpack.HotModuleReplacementPlugin({multiStep: true});
var readableHMRUpdatesPlugin = new webpack.NamedModulesPlugin();

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  context: path.resolve(__dirname, 'app'),
  entry: ['react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    './index.js'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
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
          loader: 'babel-loader',
          options: {plugins: ['react-hot-loader/babel']}
        }]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        use: [{
          loader: 'file-loader',
          options: {name: 'bundle/assets/[hash].[ext]'}
        }]
      }
    ],
  },
  plugins: [
    definePlugin,
    globalHMRPlugin,
    readableHMRUpdatesPlugin
  ],
  target: 'electron',
  devServer: {
    contentBase: path.resolve(__dirname, 'bundle'),
    // match the output path
    publicPath: '/',
    compress: true,
    // match the output `publicPath`
    historyApiFallback: true,
    proxy: { // This is so that any request going to localhost:8080/api will be redirected to localhost:1337
      '/api/*': {
        target: 'http://localhost:1337',
        rewrite: function (req) {
          req.url = req.url.replace(/^\/api(.+)$/, '$1');
        }
      }
    }
  }
};
