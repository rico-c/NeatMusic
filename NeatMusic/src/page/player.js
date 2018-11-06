import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import store from './redux/store';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            order: 0,
            currentSong: {}
        }
    }
    getSongInfo(Id) {
        fetch(getMusic + Id)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                this.setState(() => ({
                    currentSong: Object.assign({}, this.state.currentSong, { uri: res.data[0] })
                }));
            })
            .catch((err) => {
                console.error(err)
            })
    }
    // componentDidMount() {
    //     this.setState({ List: store.getState().songList })
    // }
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
                <Video source={{ uri: this.state.currentSong.url }}
                    style={styles.backgroundVideo}
                />
            </View>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        songList: store.songList,
        songOrder: store.songOrder
    };
};

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

export default connect(mapStateToProps)(Player);
