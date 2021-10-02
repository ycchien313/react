import RowEmail from './RowEmail';
import RowPassowrd from './RowPassword';
import RowLoginMsg from './RowLoginMsg';

function RowAccountInput(prop) {
  const { username, setUsername, password, setPassword, loginMsg } = prop;

  return (
    <div className="row-account-input">
      <RowEmail username={username} setUsername={setUsername} />
      <RowPassowrd password={password} setPassword={setPassword} />
      <RowLoginMsg loginMsg={loginMsg} />
    </div>
  );
}

export default RowAccountInput;
