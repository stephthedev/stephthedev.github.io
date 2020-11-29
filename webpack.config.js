const path = require('path');

const distDir = path.join(__dirname, "/src-jekyll/dist");

module.exports = {
  entry: "./src-react/App.js",
  output: {
    path: distDir,
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
    clientLogLevel: 'debug',
    writeToDisk: true
  }
};
