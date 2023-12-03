import React, { useState ,useEffect} from 'react';
import { View,Button, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {addTodo,deleteTodo,toggleTodo} from '../Redux/action.js'

import {useDispatch,useSelector} from 'react-redux'

export default HomeScreen = () => {
  
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todos.todos)
  
  const [text, setText] = useState('');

const handleaddTodo = () => {
    if (text !== '') {
      dispatch(addTodo(text))
      setText('');
      saveTodos(todos)
    }
    
  };

//Async-Storage Section 


const saveTodos = async (items) => {
  
  try {
    await AsyncStorage.setItem('todos', JSON.stringify(items));
    
  } catch (error) {
    console.log('Error saving todos: ', error);
  }
};

const getTodos = async () => {
  try {
    const todos = await AsyncStorage.getItem('todos');
    dispatch({
      type:'Async-update',
      payload:JSON.parse(todos)
    })
  } catch (error) {
    console.log('Error getting todos: ', error);
    return [];
  }
};

//Async-Storage Section 

useEffect(()=>{
  getTodos()
  
},[])



const handleDeleteTodo = (key)=>{
  dispatch(deleteTodo(key))
  saveTodos(todos)
}


  const handleToggleTodo = (key) => {
    const updatedTodos = todos.map(todo =>
      todo.key === key ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(toggleTodo(updatedTodos));
  };


  const renderItem = ({ item }) => (
    <View style={styles.todoList}><TouchableOpacity onPress={() => handleToggleTodo(item.key)}>
      <Text style={[styles.todoItem, item.completed && styles.completed]}>
        {item.text}
      </Text>
    </TouchableOpacity>
    <Button title="DEL" color = "red" onPress={()=>handleDeleteTodo(item.key)}/>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a todo"
          onChangeText={text => setText(text)}
          value={text}
        />
        <TouchableOpacity onPress={handleaddTodo}>
          <Text style={styles.addButton}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  addButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 4,
  },
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width:300
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  todoList:{
    marginVertical:5,
    flexDirection:'row'
  }
});

