// utils/storage.j


import AsyncStorage from '@react-native-async-storage/async-storage';


const [todos,SetTodos] = useState('')
export const saveTodos = async (todos) => {
  try {
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
    
  } catch (error) {
    console.log('Error saving todos: ', error);
  }
};

export const getTodos = async () => {
  try {
    const todos = await AsyncStorage.getItem('todos');
    var data = JSON.parse(todos)
  } catch (error) {
    console.log('Error getting todos: ', error);
    return [];
  }
  
};

getTodos()
