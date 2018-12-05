const path = require('path')

module.exports = {
  mode: "production",
  context: path.resolve(__dirname, "src"),
  entry: './gitment.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'gitment.browser.js',
    library: 'Gitment'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /^node_mocules/,
        loader: 'babel-loader'
      }
    ]
  }
}
