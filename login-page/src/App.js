import './styles/normalize.scss';
import './styles/style.scss';

function App() {
  return (
    <main className="container">
      <div className="page">
        {/* 帳戶類型列 */}
        <div className="row-account-type">
          <div className="row-title">
            <h1 className="title">Choose Account Type</h1>
          </div>
          <div className="row-type">
            <figure className="box-container active">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img_doctor_90@3x.svg`}
                alt=""
              />
              <figcaption>Doctor</figcaption>
              <div className="check-box">
                <i className="fal fa-check"></i>
              </div>
            </figure>
            <figure className="box-container">
              <img
                src={`${process.env.PUBLIC_URL}/assets/img_patient_90@3x.svg`}
                alt=""
              />
              <figcaption>Patient</figcaption>
              <div className="check-box">
                <i className="fal fa-check"></i>
              </div>
            </figure>
          </div>
          <div className="row-subtitle">
            <h3>Hello doctor!</h3>
            <h3>Please fill out the form below to get started</h3>
          </div>
        </div>

        {/* 帳號密碼列 */}
        <div className="row-account-input">
          <div className="row-email">
            <span className="title">Email</span>
            <i className="fal fa-envelope"></i>
            <input type="email" value="aaa@gmail.com" placeholder="Email" />
          </div>
          <div className="row-password">
            <span className="title">Password</span>
            <i className="fal fa-lock-alt"></i>
            <input type="password" placeholder="Password" />
            <a className="forgot-link" href="">
              Forgot?
            </a>
          </div>
        </div>

        {/* 登入按鈕列 */}
        <div className="row-account-login">
          <div className="col-singnup">
            <span>No account? </span>
            <a href="">Signup</a>
          </div>
          <div className="col-login">
            <button className="btn-login">Login</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
