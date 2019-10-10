import React from 'react';
import {View} from 'react-native'
import AddTodo from "./AddTodo";
import TodoListContainer from "./TodoListContainer";
import store from '../store'
import { Provider } from 'react-redux'

export default function Home({
}){
  return (
    <Provider store={store}>
      <View>
        <AddTodo />
        <TodoListContainer />
      </View>
    </Provider>
    
  )
}