import React, { Component } from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
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

export class TodoList extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default TodoList

export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
