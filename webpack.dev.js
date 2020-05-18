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
      {  
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
         'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
         'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
     },
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
          loader: "url-loader?limit=10000&minetype=application/font-woff" 
        },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
          loader: "file-loader"
        },
        {
          test: /\.less$/,
          loader: 'less-loader', // compiles Less to CSS
        },
        {
          test: /\.html$/,
          use: [
              {
                  loader: "html-loader"
              }
          ]
        }
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
		 jQuery: 'jquery', "window.jQuery": "jquery"
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
    }), // Generates default index.html
    new HtmlWebpackPlugin({  // Also generate a mask.html
      filename: 'mask.html',
      template: './src/mask.html'
    })
  ],
  
  output: {
    path: __dirname + '/maskPage',
    publicPath: '/',
    filename: 'bundle.js'
  },
  // 3
  devServer: {
    contentBase: './maskPage',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    }
  }
};