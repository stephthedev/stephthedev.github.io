const path = require('path');

module.exports = {
  entry: "./src-react/entry.js",
  output: {
    path: path.join(__dirname, "/src-jekyll/dist"),
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
    port: 9000
  }
};
