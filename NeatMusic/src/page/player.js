import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import store from '../redux/store';
import { connect } from 'react-redux';
import { getMusic } from '../utils/api';
import Sound from 'react-native-sound';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            order: 0,
            currentSong: {},
            playing: false,
            uri: '',
            playInBackground: true,
        };
        this.whoosh = {};
    }
    componentWillReceiveProps() {
        let Id = store.getState().songId;
        fetch(getMusic + Id)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                this.setState(() => ({
                    uri: res.data[0].url
                }), () => {
                    if (this.whoosh.release) { this.whoosh.release() };
                    this.whoosh = new Sound(this.state.uri, Sound.MAIN_BUNDLE, (error) => {
                        if (error) {
                            console.log('failed to load the sound', error);
                            return;
                        }
                        this.whoosh.setVolume(1);
                        this.whoosh.play();
                        this.setState({ playing: true })
                    });
                });
            })
            .catch((err) => {
                console.error(err)
            })
    }
    componentWillUnmount() {
        // this.whoosh.release();
    }
    pause() {
        this.whoosh.pause();
        this.setState({ playing: false })
    }
    play() {
        if (this.whoosh.play) {
            this.whoosh.play();
            this.setState({ playing: true })
        }
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.songName}>{store.getState().songList.length > 0 ? store.getState().songList[store.getState().songOrder].name : '点击下一条评论'}</Text>
                <Text style={styles.author}>{store.getState().songList.length > 0 ? store.getState().songList[store.getState().songOrder].ar[0].name : '开始播放歌曲'}</Text>
                {this.state.playing ? (
                    <TouchableOpacity style={styles.button} onPress={() => { this.pause() }} >
                        <Image source={require('../images/pause.png')} style={styles.button} />
                    </TouchableOpacity>
                ) : (
                        <TouchableOpacity style={styles.button} onPress={() => { this.play() }} >
                            <Image source={require('../images/start.png')} style={styles.button} />
                        </TouchableOpacity>
                    )}
            </View>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        songList: store.songList,
        songOrder: store.songOrder,
        songId: store.songId
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
        right: 20,
        top: 3
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
