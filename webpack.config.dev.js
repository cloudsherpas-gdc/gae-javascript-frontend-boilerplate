var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index.ts'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
    // {
    //   test: /\.js/,
    //   loaders: ['babel'],
    //   include: path.join(__dirname, 'src')
    // },
    {
      test: /\.ts/,
      loaders: ['babel-loader', 'ts-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
};
