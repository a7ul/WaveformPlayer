const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
  devtool: 'eval',
  devServer: {
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {
      'Utils': path.resolve(__dirname, '../app/utils/'),
      'Styles': path.resolve(__dirname, '../app/styles/')
    }
  },
  target: 'electron',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }, {
      test: /\.(png|jpg|gif|exe|bin)$/,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]'
      }
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]__[local]___[hash:base64:5]',
          modules: true
        }
      }
      ]
    }]
  }
};
