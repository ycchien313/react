import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RowAccountType from './components/RowAccountType/';
import RowAccountInput from './components/RowAccountInput/';
import RowAccountLogin from './components/RowAccountLogin/';
import './styles/normalize.scss';
import './styles/style.scss';

const accountTypeData = [
  {
    id: 1,
    src: '/assets/img_doctor_90@3x.svg',
    name: 'Doctor',
  },
  {
    id: 2,
    src: '/assets/img_patient_90@3x.svg',
    name: 'Patient',
  },
  {
    id: 3,
    src: '/assets/img_patient_90@3x.svg',
    name: 'Patient',
  },
  {
    id: 4,
    src: '/assets/img_patient_90@3x.svg',
    name: 'Patient',
  },
  // {
  //   id: 5,
  //   src: '/assets/img_patient_90@3x.svg',
  //   name: 'Patient',
  // },
  // {
  //   id: 6,
  //   src: '/assets/img_patient_90@3x.svg',
  //   name: 'Patient',
  // },
];

function App() {
  const [currentAccountTypeIndex, setCurrentAccountTypeIndex] = useState(0);
  // ↓ id 暫不需要
  // const [currentAccountTypeId, setCurrentAccountTypeId] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMsg, setLoginMsg] = useState(null);

  return (
    <main className="container">
      <Router>
        <div className="page">
          {/* 帳戶類型列 */}
          <RowAccountType
            accountTypeData={accountTypeData}
            currentAccountTypeIndex={currentAccountTypeIndex}
            setCurrentAccountTypeIndex={setCurrentAccountTypeIndex}
            // ↓ id 暫不需要
            // currentAccountTypeId={currentAccountTypeId}
            // setCurrentAccountTypeId={setCurrentAccountTypeId}
          />

          {/* 帳號密碼列 */}
          <RowAccountInput
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            loginMsg={loginMsg}
          />

          {/* 登入按鈕列 */}
          <RowAccountLogin
            username={username}
            password={password}
            setLoginMsg={setLoginMsg}
          />
        </div>
      </Router>
    </main>
  );
}

export default App;
