const path = require('path');
const webpack = require('webpack');

const SETTINGS = require('./settings');

// const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');

const production = process.env.NODE_ENV === 'production';
const fileNamePrefix = production ? '.[chunkhash]' : '';

const pluginsBase = [
  new HtmlWebpackPlugin({
    template: './index.html',
    title: 'It News App',
    excludeChunks: ['base'],
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
      collapseInlinespace: true,
      removeComments: true,
      removeRedundantAttributes: true,
    },
    inject: 'body',
  }),
  new FaviconsWebpackPlugin({
    logo: './favicon.png',
    background: SETTINGS.THEME_COLOR,
    icons: SETTINGS.FAVICONS,
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || ''),
    },
  }),
];

const developmentPlugins = [
  ...pluginsBase,
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new OpenBrowserPlugin({ url: `http://localhost:${SETTINGS.PORT}` }),
];
const productionPlugins = [
  ...pluginsBase,
  new WebpackChunkHash(), //webpack-chunk-hash
  new webpack.HashedModuleIdsPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: m => m.context && m.context.includes('node_modules'),
    filename: 'js/vendor/vendor.[chunkhash].js',
    // filename: 'vendor.js',
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'runtime',
    chunks: ['vendor'],
    minChunks: Infinity,
    filename: 'js/runtime/runtime.[chunkhash].js',
    // filename: 'vendor.js',
  }),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new ExtractTextPlugin({
    filename: 'styles/[name].[contenthash].css',
    // filename: 'styles/[name].css',
    allChunks: true,
  }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: true,
    sourcemap: true,
    compress: {
      warnings: false, // Suppress uglification warnings
      pure_getters: true,
      conditionals: true,
      join_vars: true,
      if_return: true,
      unsafe: true,
      sequences: true,
      booleans: true,
      loops: true,
      unused: false,
      drop_console: true,
      unsafe_comps: true,
      screw_ie8: true,
    },
    output: {
      comments: false,
    },
    exclude: [/\.min\.js$/gi], // skip pre-minified libs
  }),
];

module.exports = {
  context: __dirname,
  entry: {
    main: './src/index.jsx',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router-dom',
      'redux',
      'redux-thunk',
      'styled-components',
    ],
  },

  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/chunks/chunk.[name]-[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: production ? productionPlugins : developmentPlugins,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          // 'react-hot-loader',
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                'styled-components',
                'syntax-dynamic-import',
                'transform-class-properties',
              ],
              presets: ['env', 'react'],
            },
          },
        ],
      },
      {
        test: /\.jsx?/,
        loader: 'stylelint-custom-processor-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/images/[name].[ext]',
          },
        },
      },
      // {
      //   test: /\.svg$/,
      //   use: {
      //     loader: 'svg-url-loader',
      //     options: {
      //       limit: 10000,
      //       noquotes: true,
      //       name: 'assets/images/[name].[ext]',
      //     },
      //   },
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'img-loader',
          options: {
            enabled: process.env.NODE_ENV === 'production',
            gifsicle: {
              interlaced: false,
            },
            mozjpeg: {
              progressive: true,
              arithmetic: false,
            },
            optipng: false, // disabled
            pngquant: {
              floyd: 0.5,
              speed: 2,
            },
            svgo: {
              plugins: [
                { removeTitle: true },
                { convertPathData: false },
              ],
            },
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: production
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader', options: { sourceMap: true, minimize: true } },
              'resolve-url-loader',
              // {
              //   loader: 'postcss-loader',
              //   options: {
              //     plugins: [
              //       autoprefixer({
              //         browsers: ['ie >= 8', 'last 4 version'],
              //         cascade: false,
              //         remove: true,
              //       }),
              //     ],
              //   },
              // },
            ],
            publicPath: './dist',
          })
          : [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
      },
    ],
  },

  devServer: {
    port: SETTINGS.PORT,
    compress: true,
    disableHostCheck: true,
    inline: true,
    hot: true,
    // watchContentBase: true,
    // contentBase: path.join(__dirname, '/'),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    // // show compile errors
    overlay: true,
    // webpack build logs config
    stats: {
      colors: true,
      resons: true,
      chunks: false,
    },
  },

  // devtool: production ? 'cheap-module-eval-source-map' : 'source-map',
  devtool: production ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  // devtool: production ? 'cheap-module-source-map' : 'source-map',
  cache: false,
  resolve: {
    modules: [
      path.join(__dirname, 'dist'),
      'node_modules', 'shared',
    ],
    extensions: ['.js', '.jsx', '.json', '*'],
  },
};
