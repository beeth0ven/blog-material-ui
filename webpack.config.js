const path = require('path');

module.exports = {
  entry: './src/App/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'stage-0',
              "react"
            ]
          }
        }
      }
    ]
  }
}
