import React, { Component } from 'react';
import { View,Text } from 'react-native';

class Player extends Component {
    render() {
        return (
            <View style={{
                position: 'absolute',
                bottom: 0,
                height: 50,
                width:420,
                backgroundColor: '#ffffff'
            }}>
                <Text>Player</Text>
            </View>
        );
    }
}

export default Player;
