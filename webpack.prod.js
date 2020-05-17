const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  
  devtool: 'source-map',
  // 1
  entry: './src/index.js',
  // 2

  resolve: {
    extensions: ['*', '.js']
  },
  plugins: [
	 new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
      title: 'Hello Webpack bundled JavaScript Project',
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