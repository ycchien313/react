# React 環境建置(非CRA)、redux、hook練習

## 請先裝好 node.js 環境及 npm 工具

### 手動安裝及設定以下環境

- webpack (一次打包所有語法，整合成一個檔案，免除使用 CDN)
- eslint ()
- babel (編譯 JSX 語法用)
- react
- sass (編譯 scss 語法用)

### webpack 相關套件

- webpack (主程式)
- webpack-cli (給 webpack 下指令用)
- webpack-dev-server (HMR 熱刷新，但不會更新至 bundle.js)

### eslint 於初始化過程會同時安裝多項程式<br/>

### babel 相關套件

- @babel/cli
- @babel/core
- babel-loader
- @babel/preset-env
- @babel/preset-react
- @babel/plugin-transform-runtime (async/await 用，dev，設定 .babelrc)
- @babel/runtime (async/await 用，設定 .babelrc)

### react 相關套件

- react
- react-dom
- prop-types (設定 component 預設之型別及內容)

### sass 相關套件

- style-loader
- css-loader
- sass-loader
- mini-css-extract-plugin

### redux 相關套件

- redux
- react-redux

### hook 練習部分
- useGetUUID (custom hook，抓 uuid)
- useRef (主要操作 DOM 用，但不會 rerender，useState 則會)
- useMemo (Memorization 記憶，優化效能用，避免重複render。觸發監聽之變數後，改變memo內之程式)
- useCallback (同 useMemo。useMemo: 為變數；useCallback: 為function)
