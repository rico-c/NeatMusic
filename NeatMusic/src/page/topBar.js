import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class TopBar extends Component {
    constructor(props) {
        super(props)
    }
    // 处理props回调
    changeBar(name) {
        this.props.onChangeBar(name)
    }
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                height: 40,
                width: 420,
            }}>
                <TouchableOpacity style={{ marginLeft: 15, marginRight: 15 }} onPress={() => { this.changeBar('collect') }}>
                    <View>
                        <Image source={require("../images/collect.png")} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10 }}>收藏</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 15, marginRight: 15 }} onPress={() => { this.changeBar('find') }} >
                    <View>
                        <Image source={require("../images/music.png")} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10 }}>音乐</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 15, marginRight: 15 }} onPress={() => { this.changeBar('play') }}>
                    <View >
                        <Image source={require("../images/me.png")} style={{ width: 20, height: 20 }} />
                        <Text style={{ fontSize: 10 }}>歌词</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default TopBar;
