const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
	
  devtool: 'eval-source-map',
  // 1
  entry: './src/index.js',
  // 2
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
      path: './.env.development',
     }),
	 new DefinePlugin({
	  'process.env': {
		'NODE_ENV': JSON.stringify('development'),
	  }
	 }),
	 new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
      title: 'Mascarillas Peru',
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