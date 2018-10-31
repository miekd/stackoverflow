const path = require('path')

module.exports = {
  entry: './handler.js',
  target: 'node',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, 'build'),
    filename: 'handler.js'
  }
}

