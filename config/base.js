const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env) => {
  return {

    entry: {
      vendors: './src/vendors.tsx',
      app: './src/main.tsx',
    },

    devtool: 'inline-source-map',

    resolve: {
      // Add '.ts' and '.tsx' as a resolvable extension.
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.scss', '.html', '.json'],
    },

    optimization: {

      splitChunks: {
        cacheGroups: {
          common: {
            test: /node_modules/,
            chunks: 'initial',
          },
        },
      },
    },

    plugins: [

      // environment variables
      new webpack.NormalModuleReplacementPlugin(/\.\.\/environments\/environment/, (resource) => {
        const newRequest = path.resolve(__dirname, `../src/environments/environment.${env.name}.tsx`);
        if (fs.existsSync(newRequest)) {
          resource.request = resource.request + `.${env.name}`;
        }
      }),

      // hot module replacement
      new webpack.HotModuleReplacementPlugin({}),

      // clean dist folder
      new CleanWebpackPlugin(),

      new CopyPlugin({
        patterns: [
          {from: 'src/assets/i18n', to: 'assets/i18n'},
          {from: 'src/assets/imgs', to: 'assets/imgs'},
        ],
      }),

      // insert file dynamically
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body',
      }),

      new StyleLintPlugin({
        files: 'src/**/*.s?(a|c)ss',
      }),

      new ESLintPlugin({
        extensions: ['ts', 'tsx'],
        emitError: true,
      }),
    ],

    module: {

      rules: [

        // https://github.com/webpack/webpack/issues/11467
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false
          }
        },

        // template loaders
        {
          test: /\.html?$/,
          exclude: /index.html$/,
          use: [
            {loader: 'html-loader', options: {esModule: true, minimize: true}},
          ],
        },

        // all files with '.js' '.ts' '.tsx' extensions will be handled by ts-loader
        {
          test: /\.(js|ts|tsx)?$/,
          exclude: [/node_modules/],
          use: [
            {loader: 'babel-loader', options: {cacheDirectory: true, babelrc: true}},
            {loader: 'ts-loader'},
          ],
        },
      ],
    },
  };
};
