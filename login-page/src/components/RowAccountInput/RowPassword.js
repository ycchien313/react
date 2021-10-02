import { Link } from 'react-router-dom';

function RowPassowrd(prop) {
  const { password, setPassword } = prop;

  return (
    <div className="row-password">
      <span className="title">Password</span>
      <i className="fal fa-lock-alt"></i>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.currentTarget.value);
        }}
      />
      <Link to="/forgotpassword" className="forgot-link">
        Forgot?
      </Link>
    </div>
  );
}

export default RowPassowrd;
