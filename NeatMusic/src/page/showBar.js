import React, { Component } from 'react';
import { View,Text } from 'react-native';
import BarItem from '../components/barItem';
import { songCate, ranking, singerRank, singerCate } from '../utils/api';

class showBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singerCate:[]
    }
  }

  componentDidMount() {
    fetch(singerCate)
      .then((res)=>{
        this.setState(prevState => ({
          singerCate: [...prevState.singerCate,...JSON.parse(res._bodyInit).artists]
        }));
      })
      .catch((err)=>{
        console.error(err)
      })
  }

  render() {
    let singerCateList = this.state.singerCate.map((Item) => 
      <Text key={ Item.name }> { Item.name } </Text>
    )
    
    return (
      <View style={{
        marginTop: 30,
        marginBottom: 50,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
        { singerCateList }
        <BarItem ></BarItem>
      </View>
    );
  }
}

export default showBar;
