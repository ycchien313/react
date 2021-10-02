// 檢查 account
const handleCheckAccount = (username, password, setLoginMsg) => {
  if (username.length < 6 || password.length < 6)
    setLoginMsg('長度需為6個字元以上');
  else {
    // 存放 username 所有 6 個字元字串
    const usernameSubstrArr = [];

    // 擷取 username 所有 6 個字元字串
    for (let i = 0; i <= username.length - 6; i++)
      usernameSubstrArr.push(username.substr(i, 6));

    // true: 通過，false: 不通過
    const passBool = () => {
      return usernameSubstrArr.every((value) => {
        // 密碼有包含 username 其中6個字元，則回傳 false 並跳出迴圈
        if (password.includes(value)) return false;
        return true;
      });
    };

    passBool() ? setLoginMsg('通過') : setLoginMsg('不通過');
  }
};

function ColLogin(prop) {
  const { username, password, setLoginMsg } = prop;

  return (
    <div className="col-login">
      <button
        className="btn-login"
        onClick={() => {
          handleCheckAccount(username, password, setLoginMsg);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default ColLogin;
