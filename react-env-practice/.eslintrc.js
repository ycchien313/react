module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // 13版被認為有問題，降至12版
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // 檢查分號：關閉
    semi: ['off'],
    // 限制每行僅一個jsx元素：關閉
    'react/jsx-one-expression-per-line': 'off',
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ['plugin:react/recommended', 'airbnb'],
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//       experimentalObjectRestSpread: true,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//     // "@typescript-eslint"
//   ],
//   rules: {
//     'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
//     'no-param-reassign': 0,
//     'max-len': [1, { code: 200 }],
//     'jsx-a11y/anchor-is-valid': [
//       'error',
//       { components: ['Link'], specialLink: ['to'] },
//     ],
//     'jsx-a11y/label-has-for': 'off',
//     'jsx-a11y/label-has-associated-control': 'off',
//     'import/no-extraneous-dependencies': [
//       'error',
//       {
//         devDependencies: true,
//         optionalDependencies: false,
//         peerDependencies: false,
//       },
//     ],
//   },
// };
