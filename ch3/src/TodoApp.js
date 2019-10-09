import React, { Component } from "react";
import {
	View,
	Text,
	StyleSheet
} from "react-native";
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'
import TodoListContainer from "./containers/TodoListContainer";
class TodoApp extends Component {

	render() {
		return (
			<View style={styles.container}>
				<AddTodo />
				<TodoListContainer/>
			</View>
			);
		}
	}

export default TodoApp;
	
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40		
	}
});