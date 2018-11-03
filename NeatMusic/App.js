import React, {Component} from 'react';
import { View } from 'react-native';
import Main from './src/main.js'

export default class App extends Component{
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Main />
      </View>
    );
  }
}
