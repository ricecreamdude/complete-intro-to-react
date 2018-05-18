//Does not use ES6 modules yet so cannot use import
const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.jsx',
  devtool: 'cheap-eval-source-map',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
