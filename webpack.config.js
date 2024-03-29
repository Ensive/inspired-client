const path = require('path');

const config = {
  context: __dirname,
  entry: './src/ClientApp.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.webpack.js', '.scss']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        enforce: 'pre',
        test: /\.jsx?%/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};

console.log('PROCESS ENV', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [];
}

module.exports = config;
