import { applyMiddleware, createStore } from 'redux';
// import { createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import todoReducer from '../reducer/todolist';
// import otherReducer from '../reducer/other';

console.log('store')

// 1個 reducer 的時候
// 創建中間件 logger(如有多個中間件，logger必須設在最後一個)
const store = createStore(todoReducer, applyMiddleware(logger));

// 如有多個 reducer，就得用 combineReducers 先將 reducer 組合，再將組合後結果送給 createStore 創建 store
// const rootReducer = combineReducers({ todoReducer, otherReducer });
// const store = createStore(rootReducer);

export default store;
