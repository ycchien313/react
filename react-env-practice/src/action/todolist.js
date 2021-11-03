/* 管理觸發 todoReducer 指令的檔案 */

/* 宣告與指令同名的常數，皆大寫 */
export const ADD_TODO = 'ADD_TODO';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: { todo },
})
