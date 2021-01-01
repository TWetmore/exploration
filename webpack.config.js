const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWepackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        // CSS, PostCSS and Sass
        test: /\.(scss|css)$/,
        exclude: /(node_modules)/,
        // removed style-loader, not required in production.
        use: [
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpg|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
        type: 'javascript/auto',
      },
      {
        // Fonts and SVGs
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'javascript/auto',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWepackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    new HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    port: 8080,
    hot: true,
    open: true,
    inline: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000/',
        secure: false,
      },
    },
  },
};