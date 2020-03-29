const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    // Resolving to absolute path with src folder as root
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        // Only attempt to run babel on javascript files
        test: /\.js?$/,
        loader: 'babel-loader',
        // Don't run babel over certain dir, files | using regex
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
};
