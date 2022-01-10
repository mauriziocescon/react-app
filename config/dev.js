// tslint:disable:object-literal-sort-keys max-line-length no-console
const webpack = require('webpack');
const path = require('path');
const {merge} = require('webpack-merge');
const commonConfig = require('./base.js');

module.exports = (env) => {
  return merge(commonConfig(env), {

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
            {loader: 'css-loader', options: {modules: true, sourceMap: true}},
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
            {loader: 'css-loader', options: {modules: false, sourceMap: false}},
            {loader: 'resolve-url-loader', options: {absolute: true}},
            {loader: 'sass-loader', options: {sourceMap: true}},
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
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      client: {
        logging: "info",
        overlay: {
          errors: true,
          warnings: true,
        },
        progress: true,
      },
      historyApiFallback: true,
      hot: "only",
      open: true,
    },
  });
};
