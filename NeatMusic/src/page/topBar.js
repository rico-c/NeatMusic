import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class TopBar extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                position: 'absolute',
                top: 0,
                height: 40,
                width: 420,
                zIndex: 100,
            }}>
                <View style={{ marginLeft: 15, marginRight: 15 }}>
                    <Image source={require("../images/collect.png")} style={{ width: 20, height: 20 }} />
                    <Text style={{ fontSize: 10 }}>收藏</Text>
                </View>
                <View style={{ marginLeft: 15, marginRight: 15 }}>
                    <Image source={require("../images/me.png")} style={{ width: 20, height: 20 }} />
                    <Text style={{ fontSize: 10 }}>发现</Text>
                </View>
                <View style={{ marginLeft: 15, marginRight: 15 }}>
                    <Image source={require("../images/music.png")} style={{ width: 20, height: 20 }} />
                    <Text style={{ fontSize: 10 }}>播放</Text>
                </View>
            </View>
        );
    }
}

export default TopBar;
