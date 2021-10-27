const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry: './src/index.js', // 進入點 (舊)
  entry: './src/index.jsx', // 進入點

  // 打包後之設定
  output: {
    filename: 'bundle.js', // 檔名
    path: path.resolve(__dirname, './dist/'), // 檔案位置
  },

  // 產生 css map 用
  devtool: 'source-map',

  // 設定各種模組編譯用
  module: {
    // 依序使用哪些 loader 來編譯此份 code
    rules: [
      {
        // test: /\.js$/, // 目標檔案之副檔名 (舊)
        test: /\.jsx$/, // 目標檔案之副檔名
        use: {
          loader: 'babel-loader', // 模組名
          // 配置 babel 之其他參數
          options: {
            // @babel/preset-env: 編譯 ES6 語法
            // @babel/preset-react: 編譯 JSX 語法
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // {
      //   // 一般 css 編譯用
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         modules: { localIdentName: '[name]__[local]__[hash:base64:5]' },
      //       },
      //     },
      //   ],
      // },
      {
        // scss 編譯用
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            // 先處理 css 編譯
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[name]__[local]__[hash:base64:5]' },
              sourceMap: true,
            },
          },
          {
            // 在處理 scss 編譯
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      // 將 index.scss 輸出為 index.css
      // 路徑為 ./dist/ (因為會先讀到上方 output 屬性)
      filename: './index.css',
    }),
  ],

  // webpack-dev-server 設定
  devServer: {
    static: './dist', // 讀取路徑
    port: 8080, // 運行 port
    open: true, // 自動開啟瀏覽器
  },

  // plugins: [
  //   new ESLintPlugin({
  //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //     threads: true,
  //     exclude: ['node_modules', '*.test.js'],
  //     overrideConfigFile: path.resolve('./.eslintrc'),
  //   }),
  // ],
};
