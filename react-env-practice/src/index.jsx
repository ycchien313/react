import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import React, { useState, useEffect, createContext, useContext } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
// useSelector 允許直接取得 redux store 中的狀態
import { Provider, useSelector, useDispatch } from 'react-redux';
import { addTodo } from './action/todolist'
import position from './position';
import store from './store';
// 編譯後，class name 會依照 webpack 的設定來命名，因此需要另外宣告一個變數(styles)使用
import styles from './index.scss';
// import SayHello from './components/SayHello';
// import Counter from './components/Counter';
import useGetUUID from './hooks/useGetUUID';

// const TodoListContext = createContext();

/* life cycle */
const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('componentDidMount', 'render 後執行');

    return () => {
      console.log('componentWillUnmount', 'component 移除後');
    };
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate', `state 改變後 ${count}`);

    return () => {
      console.log('componentDidUpdate', `state 改變前 ${count}`);
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
  // const todoList = useContext(TodoListContext);

  // react-redux 增加的 hooks，功能像 useContext
  const todoList = useSelector((state) => state.todoList);

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
  // const todoList = useContext(TodoListContext);
  const todoList = useSelector((state) => state.todoList);

  return <div>{`下一件事要做：${todoList[0]}`}</div>;
};

// const CounterWithUesRef = () => {
//   /* useRef hook */
//   const numberRef = useRef(0)

//   useEffect(() => {
//     // componentDidMount
//     const loop = setInterval(() => {
//       console.log(numberRef.current)
//       numberRef.current += 1;
//     }, 1000)

//     // componentWillUnmount
//     return () => {
//       clearInterval(loop)
//     }
//   }, [])

//   return (
//     <div>
//       <h1>使用 useRef</h1>
//       <h1>{`${numberRef.current} useRef 不會 rerender，請看 console`}</h1>
//     </div>
//   )
// }

/* 使用 useRef */
const UseRefPractice = () => {
  const inputRef = useRef(null);

  const handleClickFocusInput = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} />
      <button type="button" onClick={handleClickFocusInput}>聚焦</button>
    </div>
  )
}

/* 使用 useMemo */
const UseMemoPractice = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  // const secondNumberPlusRandom = secondNumber + Math.random();
  /* 使用 useMemo 監聽 secondNumber */
  /* 當 secondNumber 改變時，執行裡面程式 */
  const secondNumberPlusRandom = useMemo(() => secondNumber + Math.random(), [secondNumber])

  return (
    <div>
      <h1>useMemo</h1>
      {firstNumber}
      <button type="button" onClick={() => { setFirstNumber(firstNumber + 1) }}>點我</button>
      <hr />
      {secondNumber}
      <button type="button" onClick={() => { setSecondNumber(secondNumber + 1) }}>點我</button>
      <hr />
      {secondNumberPlusRandom}
    </div>
  )
}

/* 使用 useMemo */
const UseCallbackPractice = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  /* 使用 useCallback 監聽 secondNumber */
  /* 當 secondNumber 改變時，執行裡面程式 */
  const handleClickSecondNumberPlusRandom = useCallback(
    () => { console.log(firstNumber + secondNumber) },
    [secondNumber],
  )

  return (
    <div>
      <h1>useCallback</h1>
      {firstNumber}
      <button type="button" onClick={() => { setFirstNumber(firstNumber + 1) }}>點我</button>
      <hr />
      {secondNumber}
      <button type="button" onClick={() => { setSecondNumber(secondNumber + 1) }}>點我</button>
      <hr />
      <button type="button" onClick={handleClickSecondNumberPlusRandom}>點我</button>
    </div>
  )
}

const Main = () => {
  const names = ['Kevin', 'Vincent', 'Jay', 'Five', ''];
  const [hiddenCounter, setHiddenCounter] = useState(false);

  // const [todoList] = useState(['first', 'second']);
  /* useContext 須設定初始狀態於最外層，redux 則將初始狀態移到 reducer */
  const todoList = useSelector((state) => state.todoList);
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch();

  /* custom hook */
  const uuidString = useGetUUID()

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
      {/* <TodoListContext.Provider value={todoList}>
        <span>代辦事項數： {todoList.length}</span>
        <TodoList />

        <TodoListPage />
        <CurrentTask />
      </TodoListContext.Provider> */}

      {/* 使用 redux，原本初始狀態 todoList 已經移到 reducer/todoList.js */}
      <div>
        <span>代辦事項數： {todoList.length}</span>
        <div>
          <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} />
          <button
            type="button"
            onClick={() => {
              console.log('dispatch');
              // dispatch 請 store 執行 reducer
              dispatch(addTodo(newTodo))
            }}
          >新增事項
          </button>
        </div>
        <TodoList />
        <TodoListPage />
        <CurrentTask />
      </div>

      {/* 使用 custom hook */}
      <div>
        <h1>使用 custom hook，useGetUUID</h1>
        <div>狀態：{uuidString ? '有值' : '無值'}</div>
        <h2>UUID: {uuidString}</h2>
      </div>

      {/* 使用 useRef */}
      {/* <CounterWithUesRef /> */}
      <UseRefPractice />

      {/* 使用 useMemo */}
      <UseMemoPractice />

      {/* 使用 useCallback */}
      <UseCallbackPractice />
    </>
  );
};

ReactDom.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);
