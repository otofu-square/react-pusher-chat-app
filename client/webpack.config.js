const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'client',
    port: 3000,
    inline: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.PUSHER_KEY': JSON.stringify(process.env.PUSHER_KEY),
      'process.env.PUSHER_CLUSTER': JSON.stringify(process.env.PUSHER_CLUSTER),
    }),
  ],
};
