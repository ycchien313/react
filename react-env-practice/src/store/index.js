import { createStore } from 'redux';
// import { createStore, combineReducers } from 'redux';
import todoReducer from '../reducer/todolist';
// import otherReducer from '../reducer/other';

// 1個 reducer 的時候
const store = createStore(todoReducer);

// 如有多個 reducer，就得用 combineReducers 先將 reducer 組合，再將組合後結果送給 createStore 創建 store
// const rootReducer = combineReducers({ todoReducer, otherReducer });
// const store = createStore(rootReducer);

export default store;
