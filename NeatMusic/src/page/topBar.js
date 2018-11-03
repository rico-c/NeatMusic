import React, { Component } from 'react';
import { View,Text } from 'react-native';

class TopBar extends Component {
    render() {
        return (
            <View style={{
                flex:1,
                flexDirection: 'row',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#ffffff',
                position: 'absolute',
                top: 0,
                height: 30,
                width: 420,
            }}>
                <View >
                    <Text>收藏</Text>
                </View>
                <View >
                    <Text>发现</Text>
                </View>
                <View >
                    <Text>播放</Text>
                </View>
            </View>
        );
    }
}

export default TopBar;
