import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/containers/Home'
import store from './src/store'
import { Provider } from 'react-redux'
import AppNavigator from './src/routes'

export default function App() {
  return (
    <AppNavigator />
  );
}

