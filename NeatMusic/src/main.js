import React, { Component } from 'react';
import { View } from 'react-native';
import Player from './page/player';
import TopBar from './page/topBar';
import Comment from './page/comment'
import { Provider } from 'react-redux';
import store from './redux/store'

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <TopBar />
          <Comment />
          <Player />
        </View>
      </Provider>
    );
  }
}

export default Main;
