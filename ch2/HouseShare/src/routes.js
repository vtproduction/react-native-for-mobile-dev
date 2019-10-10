import React from 'react';
import { StackNavigator} from 'react-navigation';

import TodoListContainer from './containers/TodoListContainer'
import DummyComponent from './containers/DummyComponent';
import HomeScreen from '../screens/HomeScreen';


const Screen1 = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    }
  }
);

const Screen2 = StackNavigator(
  {
    User: {
      screen: HomeScreen,
    }
  }
);

export default StackNavigator(
  {
    Home:{
      screen: Screen1
    },
    TodoDetail:{
      screen: Screen2
    }
  },{
    initialRouteName: 'Home'
  }
)