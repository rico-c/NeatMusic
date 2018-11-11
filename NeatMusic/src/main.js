import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
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
  constructor(props) {
    super(props);
    this.state = {
      // showBar: 'find'
    };
    // this.changeBar = this.changeBar.bind(this)
  }
  // changeBar(barName) {
  //   this.setState({
  //     showBar: barName
  //   })
  // }
  render() {
    // let main = null;
    // if (this.state.showBar === 'find') {
    //   main = <Comment />
    // } else if (this.state.showBar == 'collect') {
    //   main = <Collect />
    // } else if (this.state.showBar == 'play') {
    //   main = <Play />
    // }

    return (
      <Provider store={store}>
        <View style={{ height: 660, width: 412 }}>
          <Tabs />
          {/* <TopBar onChangeBar={this.changeBar} /> */}
          {/* {main} */}
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
