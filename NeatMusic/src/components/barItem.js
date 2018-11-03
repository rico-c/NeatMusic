import React, { Component } from 'react';
import { View,Text,Image } from 'react-native';

class BarItem extends Component {
    render() {

        return (
            <View >
                <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} style={{width:205,height:205}}/>
            </View>
        );
    }
}

export default BarItem;
