# 登入頁面

## React & SASS

### PC、ipad、mobile 等 CSS 大致皆撰寫完畢

### 密碼驗證規則：密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複

### 密碼驗證範例

username: abc12345<br/>
password: xxabc123wer<br/>
結果：不通過<br/>
<br/>
username: abc12345<br/>
password: c12345er12fda<br/>
結果：不通過<br/>
<br/>
username: abc12345<br/>
password: c124345ksfh<br/>
結果：通過<br/>
