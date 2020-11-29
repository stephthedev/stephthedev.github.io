const path = require('path');

module.exports = {
  entry: "./App.js",
  output: {
    path: path.join(__dirname, "../jekyll/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'src-react'),
    compress: true,
    port: 9000,
    writeToDisk: true
  }
};
