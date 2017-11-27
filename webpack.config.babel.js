import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// see: https://github.com/webpack/webpack/issues/2537
const isProd = process.argv.indexOf('-p') !== -1;

const config = {
  context: __dirname,

  // Don't attempt to continue if there are any errors in production
  bail: isProd,

  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',

  entry: [
    './src/main.js',
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: isProd ? '[hash]/[name].js' : '[name].js',
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },

  module: {
    // noParse: /jquery|lodash/,

    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
    }),
  ],

  // from `webpack-dev-server` module
  devServer: {
    noInfo: true,
    quiet: true,

    // Shows a full-screen overlay in the browser when there
    // are compiler errors or warnings.
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};

if (isProd) {
  config.plugins.push(
    // Minify the code.
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),
  );
}

module.exports = config;
