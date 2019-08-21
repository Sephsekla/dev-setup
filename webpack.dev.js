const merge = require('webpack-merge');
const common = require('./webpack.common.js');

var ifdefOptions = {
  DEBUG: true
};


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      }, {
        loader: 'ifdef-loader',
        options: {
          DEBUG: true
        }
      }]
    }, ]
  }
});
