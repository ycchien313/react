# 登入頁面

## React & SASS

### PC、ipad、mobile 等 CSS 大致皆撰寫完畢

### 密碼驗證規則：密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複

### 密碼驗證範例

username: abc12345
password: xxabc123wer
結果：不通過

username: abc12345
password: c12345er12fda
結果：不通過

username: abc12345
password: c124345ksfh
結果：通過
