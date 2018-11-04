import React, { Component } from 'react';
import { View,Text } from 'react-native';
import SingerItem from '../components/singerItem';
import RankItem from '../components/rankItem';
import PopItem from '../components/popItem';
import HiphopItem from '../components/hiphopItem';
import ClassicalItem from '../components/classicalItem';
import RockItem from '../components/rockItem';


class showBar extends Component {
  render() {
    return (
      <View style={{
        marginTop: 30,
        marginBottom: 50,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
        <SingerItem ></SingerItem>
        <RankItem ></RankItem>
        <RockItem ></RockItem>
        <PopItem ></PopItem>
        <HiphopItem ></HiphopItem>
        <ClassicalItem ></ClassicalItem>
      </View>
    );
  }
}

export default showBar;
