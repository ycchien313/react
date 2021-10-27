import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
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
  const { name, children } = props;

  return (
    <>
      <div>Hello {name}</div>
      <div>{children}</div>
    </>
  );
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
  const names = ['Kevin', 'Vincent', 'Jay', 'Five'];
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
      <div>Hello World</div>

      <SayHello name="Five">
        <OtherComponent />
      </SayHello>
      {names.map((name) => (
        <SayHello key={name} name={name} />
      ))}
    </>
  );
};

ReactDom.render(<Main />, document.getElementById('root'));
