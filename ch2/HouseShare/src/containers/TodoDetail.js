import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native"


class TodoDetail extends Component {

  state = {
    todo: null
  }

  constructor(props) {
    super(props)
    this.setState({todo})
  }

  render() {
    const { todo } = this.state
    return (
      <View style={{ padding: 20 }}>
        <Text>{todo.text}</Text>
      </View>
    )
  }
}

TodoDetail.prototype = {
  todo: PropTypes.object.isRequired
}

export default connect()(TodoDetail);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
