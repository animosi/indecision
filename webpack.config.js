//entry -> output
const path = require('path');
console.log(path.join(__dirname, 'public'));

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
  },
};

//loaders:'single loader'
//rules + use: [array of loaders]
