import React, { Component } from 'react';
// import axios from 'axios';
import { View,Text } from 'react-native';
import BarItem from '../components/barItem';
import { songCate, ranking, singerRank } from '../utils/api';

class showBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking:''
    }
  }

  componentDidMount() {
    // axios.get(ranking,{
    //   params:{
    //     idx:1
    //   }
    // }).then((res)=>{
      
    // })
  }

  render() {
    return (
      <View style={{
        marginTop: 30,
        marginBottom: 50,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
        <Text>{}</Text>
        <BarItem ></BarItem>
      </View>
    );
  }
}

export default showBar;
