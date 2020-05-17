const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'production',
  
  devtool: 'source-map',
  // 1
  entry: './src/index.js',
  // 2
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // The `injectType`  option can be avoided because it is default behaviour
          { loader: 'style-loader', options: { injectType: 'styleTag' } },
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:'bundle.css'
    }),
	new webpack.ProvidePlugin({
		 $: 'jquery',
		 jQuery: 'jquery'
	 }),
	 new Dotenv({
      path: './.env.production',
     }),
	 new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
     }),
	 new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
      title: 'Mascarillas Ventas Peru',
      template: './src/index.html'
    })
  ],
  
  output: {
    path: __dirname + '/maskPage',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // 3
  devServer: {
    contentBase: './maskPage'
  }
};