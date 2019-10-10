import React from 'react';

import {StyleSheet, View} from 'react-native'
import AddTodo from "./AddTodo";
import TodoListContainer from "./TodoListContainer";

export default function Home({
}){
  return (
    <View style={styles.container}>
      <AddTodo />
      <TodoListContainer />
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40	
  },
});
