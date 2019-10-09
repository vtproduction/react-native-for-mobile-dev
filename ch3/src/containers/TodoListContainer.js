import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from "react-native"

const mapStateToProps = state => ({
	todos: state.todos
})

const mapDispatchToProps = dispatch => ({
	toggleTodo: id => dispatch(toggleTodo(id))
})

class TodoListContainer extends Component {
	

	constructor(props) {
		super(props)
	
		console.log('====================================');
		console.log(this.props);
		console.log('====================================');
	}

	render() {
		const {todos} = this.props
		console.log('re-render')
		return (
			<View style={{ padding: 20 }}>
        {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => null}>
                <Text style={{
                    fontSize: 24,
                    textDecorationLine: todo.completed ? 'line-through' : 'none'
                }}>{todo.text}</Text>
            </TouchableOpacity>
        )}
    	</View>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
