// reducers/todoReducer.js
import { ADD_TODO, DELETE_TODO ,UPDATE_TODO} from './action.js';

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos,{ key: Date.now(),text: action.payload, completed: false }]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.key !== action.payload),
      };
      case UPDATE_TODO:
        return {
          ...state,
          todos: action.payload
        }
        case 'Async-update':
          return {
            ...state,
            todos : action.payload
          }
    default:
      return state;
  }
};

export default todoReducer;
