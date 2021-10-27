import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import position from './position';
// 編譯後，class name 會依照 webpack 的設定來命名，因此需要另外宣告一個變數(styles)使用
// import styles from './index.css';
import styles from './index.scss';
// import SayHello from './components/SayHello';
// import Counter from './components/Counter';

const OtherComponent = () => (
  <>
    <div>other component</div>
  </>
);

const SayHello = (props) => {
  const { names, children } = props;

  const isEmpty = (value) => value === '';

  // return names.map((name) => (
  //   <>
  //     <div
  //       className={!isEmpty(name) && styles.main}
  //       style={{ 'font-size': 28 }}
  //     >
  //       Hello {isEmpty(name) ? 'world' : name}
  //     </div>
  //     <div>{children}</div>
  //   </>
  // ));

  return (
    <>
      <div className={styles.main} style={{ fontSize: 28 }}>
        {names.map((name) => (
          <div key={name}>Hello {isEmpty(name) ? 'world' : name}</div>
        ))}
      </div>
      <div>{children}</div>
    </>
  );
};

/* 設定 component props 的型別 */
SayHello.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([PropTypes.node]),
};
/* 設定 component props 的預設內容 */
SayHello.defaultProps = {
  names: ['Default String'],
  children: <h1>無 component</h1>,
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('componentDidMount', 'render 後執行');

    return () => {
      console.log('component 移除後');
    };
  }, []);

  useEffect(() => {
    console.log(`state 改變後 ${count}`);

    return () => {
      console.log(`state 改變前 ${count}`);
    };
  }, [count]);

  return (
    <>
      <button type="button" onClick={() => setCount(count + 1)}>
        ++
      </button>
      <h1>{count}</h1>
    </>
  );
};

const Main = () => {
  const names = ['Kevin', 'Vincent', 'Jay', 'Five', ''];
  const [hiddenCounter, setHiddenCounter] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setHiddenCounter(!hiddenCounter);
        }}
      >
        開啟、關閉計數器
      </button>
      {hiddenCounter ? null : <Counter />}

      <h1 className={styles.main}>Hi JSXAAA！</h1>
      <h1>directory in: {position}</h1>

      <SayHello names={names}>
        <OtherComponent />
      </SayHello>

      <SayHello />

      {/* {names.map((name) => (
        <SayHello key={name} name={name} />
      ))} */}
    </>
  );
};

ReactDom.render(<Main />, document.getElementById('root'));
