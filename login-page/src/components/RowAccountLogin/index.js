import ColSingup from './ColSingup';
import ColLogin from './ColLogin';

function RowAccountLogin(prop) {
  const { username, password, setLoginMsg } = prop;

  return (
    <div className="row-account-login">
      <ColSingup />
      <ColLogin
        username={username}
        password={password}
        setLoginMsg={setLoginMsg}
      />
    </div>
  );
}

export default RowAccountLogin;
