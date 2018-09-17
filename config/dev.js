// tslint:disable:object-literal-sort-keys max-line-length no-console
const webpack = require('webpack');
const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./base.js');

module.exports = (env) => {
  return webpackMerge(commonConfig(env), {

    mode: 'development',

    plugins: [

      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
        },
      }),
    ],

    module: {

      rules: [

        // creates style nodes from JS strings
        // translates CSS into CommonJS
        // compiles Sass to CSS
        {
          test: /\.scss$/,
          exclude: /styles.scss$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'typings-for-css-modules-loader', options: {camelCase: true, minimize: false, modules: true, namedExport: true, sourceMap: false},},
            {loader: 'resolve-url-loader', options: {absolute: true}},
            {loader: 'sass-loader', options: {sourceMap: true}},
            {loader: 'sass-resources-loader', options: {resources: ['./src/assets/stylesheets/all.scss']}},
          ],
        },

        // creates style nodes from JS strings
        // translates CSS into CommonJS
        // compiles Sass to CSS
        //
        // global sass
        {
          test: /styles.scss$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader', options: {minimize: false, modules: false, sourceMap: false}},
            {loader: 'resolve-url-loader', options: {absolute: true}},
            {loader: 'sass-loader', options: {sourceMap: true}},
          ],
        },

        // images loader
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          use: [
            {loader: 'file-loader', options: {name: '[name].[ext]'}},
          ],
        },
      ],
    },

    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
    },

    devServer: {
      port: 4200,
      clientLogLevel: 'info',
      compress: true,
      contentBase: path.resolve(__dirname, 'dist'),
      historyApiFallback: true,
      hot: true,
      open: true,
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  });
};
