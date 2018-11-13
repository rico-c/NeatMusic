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
            singleLoop: false
        };
        this.whoosh = {};
    }
    componentWillReceiveProps() {
        console.warn('upplayer');
        let Id = store.getState().songId;
        fetch(getMusic + Id)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                this.setState(() => ({
                    uri: res.data[0].url
                }), () => {
                    // 第一次播放时还没有whoosh对象，需要判断
                    if (this.whoosh.release) { this.whoosh.release() };
                    this.whoosh = new Sound(this.state.uri, Sound.MAIN_BUNDLE, (error) => {
                        if (error) {
                            console.log('failed to load the sound', error);
                            return;
                        }
                        this.whoosh.setVolume(1);
                        this.whoosh.setNumberOfLoops(-1);
                        // 播放完成后的回调，当Loops为无限时不会触发
                        this.whoosh.play((success) => {
                            if (success) {
                                console.warn('successfully finished playing');
                            } else {
                                // console.warn('playback failed due to audio decoding errors');
                                this.whoosh.reset();
                            }
                        });
                        this.setState({ playing: true })
                    });
                });
            })
            .catch((err) => {
                console.error(err)
            })
    }
    componentWillUnmount() {
        this.whoosh.release();
    }
    pause() {
        this.whoosh.pause();
        this.setState({ playing: false })
    }
    play() {
        if (this.whoosh.play) {
            this.whoosh.play((success) => {
                if (success) {
                    console.warn('successfully finished playing');
                } else {
                    // console.warn('playback failed due to audio decoding errors');
                    this.whoosh.reset();
                }
            });
            this.setState({ playing: true })
        }
    }
    singleLoop() {
        // 设歌曲无限次播放
        if (this.whoosh.setNumberOfLoops) {
            this.whoosh.setNumberOfLoops(-1);
            this.setState({
                singleLoop: true
            })
        }
    }
    listLoop() {
        // 设歌曲只播放一次，使触发play方法中的播放结束后的播放下一首的回调函数
        if (this.whoosh.setNumberOfLoops) {
            this.whoosh.setNumberOfLoops(0);
            this.setState({
                singleLoop: false
            })
        }
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View>
                    <Text style={styles.songName}>{store.getState().songList.length > 0 ? store.getState().songList[store.getState().songOrder].name : '点击下一条评论'}</Text>
                    <Text style={styles.author}>{store.getState().songList.length > 0 ? store.getState().songList[store.getState().songOrder].ar[0].name : '开始播放歌曲'}</Text>
                </View>
                <View style={styles.btn}>
                    {this.state.singleLoop ? (
                        <TouchableOpacity style={styles.loop} onPress={() => { this.listLoop() }} >
                            <Image source={require('../images/singleLoop.png')} style={styles.loop} />
                        </TouchableOpacity>
                    ) : (
                            <TouchableOpacity style={styles.loop} onPress={() => { this.singleLoop() }} >
                                <Image source={require('../images/listLoop.png')} style={styles.loop} />
                            </TouchableOpacity>
                        )}
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
    btn: {
        flexDirection: 'row',
    },
    wrapper: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: 420,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    button: {
        position: 'relative',
        width: 38,
        height: 38,
        marginRight: 30,
        top: 3
    },
    loop: {
        position: 'relative',
        width: 30,
        height: 30,
        marginRight: 20,
        top: 5,
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
