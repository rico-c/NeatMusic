import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import store from '../redux/store';
import { connect } from 'react-redux';
import { getMusic } from '../utils/api'

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            order: 0,
            currentSong: {},
            paused: false
        }
    }
    componentWillReceiveProps() {

    }
    getSongInfo(Id) {
        fetch(getMusic + Id)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                return res.data[0].url
            })
            .catch((err) => {
                console.error(err)
            })
    }
    componentDidMount() {

    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.songName}>{store.getState().songList.length > 0 ? store.getState().songList[store.getState().songOrder].name : '无歌曲'}</Text>
                <Text style={styles.author}>{store.getState().songList.length > 0 ? store.getState().songList[store.getState().songOrder].ar[0].name : '无歌曲'}</Text>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../images/last.png')} style={styles.buttonl} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../images/start.png')} style={styles.button} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../images/next.png')} style={styles.buttonr} />
                </TouchableOpacity>
                <Video source={{ uri: store.getState().songList.length > 0 ? this.getSongInfo(store.getState().songList[store.getState().songOrder].id) : 'http://153.37.234.9/mp3.9ku.com/hot/2012/05-14/467165.mp3' }}
                    style={styles.backgroundVideo}
                    paused={this.state.paused}
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
    },
    songName: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 5
    },
    author: {
        marginLeft: 20
    }
})

export default connect(mapStateToProps)(Player);
