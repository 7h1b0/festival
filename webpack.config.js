const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const tailwindcss = require('tailwindcss');
const TerserPlugin = require('terser-webpack-plugin');

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

module.exports = () => {
  const isProd = process.env.NODE_ENV === 'production';
  const additionalPlugins = isProd
    ? [
        new WorkboxWebpackPlugin.GenerateSW({
          clientsClaim: true,
          mode: 'production',
          exclude: [/\.map$/, /\.txt$/],
          navigateFallback: 'index.html',
        }),
      ]
    : [];

  return {
    mode: isProd ? 'production' : 'development',
    entry: {
      app: ['./src', './src/styles.css'],
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      pathinfo: !isProd,
      publicPath: '/',
      clean: true,
    },
    devtool: isProd ? false : 'source-map',
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
                postcssOptions: {
                  plugins: [tailwindcss, ...(isProd ? [cssnano] : [])],
                },
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              pure_getters: true,
              unsafe: true,
              booleans_as_integers: false,
              drop_console: true,
              passes: 3,
            },
            mangle: {
              properties: {
                regex: /^(_|(handle)([A-Za-z]+))/,
              },
            },
          },
        }),
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.[contenthash].css',
        chunkFilename: '[id].css',
        ignoreOrder: false,
      }),
      new CopyPlugin({
        patterns: [{ from: 'public' }],
      }),
      ...additionalPlugins,
    ],
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      modules: ['node_modules', '.'],
    },
    devServer: {
      open: true,
      port: 3000,
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'src'),
      },
      devMiddleware: {
        stats: 'errors-only',
      },
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
