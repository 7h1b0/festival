const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.tsx', './public/index.html'],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});
const cssnano = require('cssnano')({
  preset: [
    'default',
    {
      discardComments: {
        removeAll: true,
      },
    },
  ],
});
const tailwindcss = require('tailwindcss')('./tailwindcss-config.js');

module.exports = ({ prod } = {}) => {
  const plugins = prod
    ? [
        new WebpackPwaManifest({
          name: 'Festival Converter',
          short_name: 'Converter',
          description: 'Convert festival currency',
          background_color: '#eeeeee',
          theme_color: '#5c8df6',
          icons: [
            {
              src: path.resolve('src/assets/icon.png'),
              sizes: [192, 512],
            },
          ],
        }),
        new SWPrecacheWebpackPlugin({
          filename: 'service-worker.js',
          dontCacheBustUrlsMatching: /\.\w{8}\./,
          minify: true,
          staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
        }),
      ]
    : [];

  return {
    mode: prod ? 'production' : 'development',
    entry: {
      app: ['./src', './src/styles.css'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      pathinfo: !prod,
      publicPath: '/',
    },
    devtool: prod ? 'none' : 'source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [tailwindcss, ...(prod ? [purgecss, cssnano] : [])],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: prod
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : undefined,
      }),
      new CleanWebpackPlugin({ verbose: false }),
      new MiniCssExtractPlugin({
        filename: 'styles.[contenthash].css',
        chunkFilename: '[id].css',
        ignoreOrder: false,
      }),
      ...plugins,
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      modules: ['node_modules', '.'],
    },
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      compress: true,
      historyApiFallback: true,
      noInfo: true,
      port: 3000,
    },
    bail: true,
    node: false,
    stats: {
      assets: true,
      cached: false,
      chunks: false,
      children: false,
      modules: false,
      hash: false,
      version: true,
      timings: true,
      warnings: true,
      errors: true,
      errorDetails: true,
      builtAt: false,
      entrypoints: false,
    },
  };
};
