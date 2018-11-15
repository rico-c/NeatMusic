import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Player from './page/player';
import TopBar from './page/topBar';
import Comment from './page/comment';
import Collect from './page/collect';
import Play from './page/lyrics';
import { Provider } from 'react-redux';
import store from './redux/store'
import { hidden } from 'ansi-colors';
import Tabs from './tab'

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
          <Tabs />
          <Player />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  hide: { display: 'none' },
  show: { width: 0, height: 0 }
})

export default Main;
