import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { songCate, ranking, singerRank, singerCate } from '../utils/api';

class classicalItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singerCate: []
        }
    }
    componentDidMount() {
        fetch(singerCate)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                this.setState(prevState => ({
                    singerCate: [...prevState.singerCate, ...res.artists]
                }));
            })
            .catch((err) => {
                console.error(err)
            })
    }
    render() {
        let singerCateList = this.state.singerCate.map((Item) =>
            <Text key={Item.name}> {Item.name} </Text>
        )
        return (
            <View >
                {/* {singerCateList} */}
                <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} style={{ width: 205, height: 205 }} />
            </View>
        );
    }
}

export default classicalItem;
