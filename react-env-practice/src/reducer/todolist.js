/* reducer: */
/* 1.用來保管 state */
/* 2.接收 action 指令時，對該 state 做的函數  */

// 初始資料用，交給 reducer 保管
const initState = { todoList: ['第一件事情', '第二件事情'] };

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// 必須 export，否則創建 store 的時候無法 import
export default todoReducer;
