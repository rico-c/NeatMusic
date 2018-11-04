import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

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
    }
})

export default Player;
