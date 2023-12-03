// reducers/index.js
import { combineReducers,createStore} from 'redux';

import todoReducer from './Reducers.js';

const rootReducer = combineReducers({
  todos: todoReducer,
});

const store = createStore(rootReducer)
export default store