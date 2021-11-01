import React, { useState, useEffect, createContext, useContext } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import position from './position';
// 編譯後，class name 會依照 webpack 的設定來命名，因此需要另外宣告一個變數(styles)使用
// import styles from './index.css';
import styles from './index.scss';
// import SayHello from './components/SayHello';
// import Counter from './components/Counter';

const TodoListContext = createContext();

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

const Task = (props) => {
  const { task } = props;
  return <div>{task}</div>;
};

Task.propTypes = { task: PropTypes.string };
Task.defaultProps = { task: '' };

const TodoList = () => {
  const todoList = useContext(TodoListContext);

  return todoList.map((task) => (
    <ul key={task}>
      <Task task={task} />
    </ul>
  ));
};

const TodoListPage = () => (
  <div>
    <div>其他內容之類</div>
    <TodoList />
  </div>
);

const CurrentTask = () => {
  const todoList = useContext(TodoListContext);
  return <div>{`下一件事要做：${todoList[0]}`}</div>;
};

const Main = () => {
  const names = ['Kevin', 'Vincent', 'Jay', 'Five', ''];
  const [hiddenCounter, setHiddenCounter] = useState(false);
  const [todoList] = useState(['first', 'second']);

  return (
    <>
      <h1 className={styles.main}>Hi JSXAAA！</h1>
      <h1>directory in: {position}</h1>

      {/* life cycle */}
      <button
        type="button"
        onClick={() => {
          setHiddenCounter(!hiddenCounter);
        }}
      >
        開啟、關閉計數器
      </button>
      {hiddenCounter ? null : <Counter />}

      {/* 使用 prop-types，names 在 component 內 render */}
      <SayHello names={names}>
        <OtherComponent />
      </SayHello>

      <SayHello />

      {/* {names.map((name) => (
        <SayHello key={name} name={name} />
      ))} */}

      {/* 使用 useContext，不需要再一層一層傳下去 */}
      <TodoListContext.Provider value={todoList}>
        <span>代辦事項數： {todoList.length}</span>
        <TodoList />

        <TodoListPage />
        <CurrentTask />
      </TodoListContext.Provider>
    </>
  );
};

ReactDom.render(<Main />, document.getElementById('root'));
