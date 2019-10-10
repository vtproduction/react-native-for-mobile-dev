import React from 'react';
import { StackNavigator} from 'react-navigation';
import Home from './containers/Home'
import TodoListContainer from './containers/TodoListContainer'
import DummyComponent from './containers/DummyComponent';

export default StackNavigator(
  {
    Home:{
      screen: DummyComponent
    },
    TodoDetail:{
      screen: DummyComponent
    }
  },{
    initialRouteName: 'Home'
  }
)