import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

class Player extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>Player</Text>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../images/last.png')} style={styles.buttonl} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../images/start.png')} style={styles.button} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../images/next.png')} style={styles.buttonr} />
                </TouchableOpacity>
                <Video source={{ uri: "http://m10.music.126.net/20181106001634/236b0c174635a81739a5d4af6a702b92/ymusic/8a55/6052/91d9/0f319c5ca2f6425bd722767730b00e17.mp3" }}
                    style={styles.backgroundVideo}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: 420,
        backgroundColor: '#ffffff'
    },
    button: {
        position: 'absolute',
        width: 38,
        height: 38,
        right: 35,
        top: 3
    },
    buttonl: {
        position: 'absolute',
        width: 30,
        height: 30,
        right: 80,
        top: 7
    },
    buttonr: {
        position: 'absolute',
        width: 30,
        height: 30,
        right: 0,
        top: 7
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 0,
        height: 0
    }
})

export default Player;
