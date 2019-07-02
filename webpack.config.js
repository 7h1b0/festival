const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
      app: './src',
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
