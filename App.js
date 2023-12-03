import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import HomeScreen from './src/HomeScreen'
import {Provider} from 'react-redux'
import store from './Redux/store.js'
const Todolist = () => {
return (
  <Provider store={store}>
  <HomeScreen />
  </Provider>
  )
}

export default Todolist;
