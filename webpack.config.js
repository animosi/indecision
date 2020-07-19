//entry -> output
const path = require('path');
console.log(path.join(__dirname, 'public'));

module.exports = {
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
};