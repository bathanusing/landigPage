module.exports = {
  // 1
  entry: './src/index.js',
  // 2
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