// actions/todoActions.js
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO'


export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (key) => ({
  type:DELETE_TODO,
    payload:key
});

export const toggleTodo = (updatedTodos) =>({
  type:UPDATE_TODO,
      payload:updatedTodos
})