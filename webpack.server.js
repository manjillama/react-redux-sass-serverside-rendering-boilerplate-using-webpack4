const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  // Inform a webpack that we're building a bundle for nodeJS
  // Rather than for the browser.
  target: 'node',
  // Tell webpack the root file of our application server
  entry: './src/index.js',
  // Tell webpack where to put the generated output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    // Resolving to absolute path with src folder as root
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
  },
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
        test: /\.s?css/,
        use: [
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  // Don't bundle any libraries from /node_modules into our
  // output bundle makes our server start up bit faster and size a lot smaller
  externals: [webpackNodeExternals()]
};
