import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

// see: https://github.com/webpack/webpack/issues/2537
const isProd = process.argv.indexOf('-p') !== -1;

export default {
  context: __dirname,

  bail: isProd,
  devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: isProd ? '[hash]/[name].js' : '[name].js',
  },

  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        use: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
    }),

    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: ['Project is running at http://localhost:8080'],
        notes: ['Run linter with: yarn lint', 'Run tests with: yarn test'],
      },
    }),
  ],

  // from `webpack-dev-server` module
  devServer: {
    contentBase: false,
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
