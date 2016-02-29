const path = require('path');

const srcDir = path.join(__dirname, 'src');

module.exports = {
  entry: path.join(srcDir, 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(srcDir),
      }
    ]
  }
};
