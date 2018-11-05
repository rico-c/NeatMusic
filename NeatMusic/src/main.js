import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import Player from './page/player';
import ShowBar from './page/showBar';
import TopBar from './page/topBar';
import { Provider } from 'react-redux';
import store from './redux/store';

class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <ScrollView>
            <ShowBar />
          </ScrollView>
          <TopBar />
          <Player />
        </View>
      </Provider>
    );
  }
}

export default Main;
