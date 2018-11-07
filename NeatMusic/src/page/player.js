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
    componentDidMount() {
    }
    render() {
        let vedio = null;
        let Id = store.getState().songId;
        // 怀疑是render异步数据问题，下次把获取mp3地址的操作步骤转义至 comment组件中进行
        fetch(getMusic + Id)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                if (store.getState().songList.length > 0) {
                    // console.warn('yes' + res.data[0].url);
                    vedio = <Video source={{ uri: res.data[0].url }}></Video>
                } else {
                    // console.warn('no');
                    vedio = <Video source={{ uri: 'http://m10.music.126.net/20181108011932/ae7850a9bfabb8c63502cc2eb315c27a/ymusic/010a/18ce/8053/950351f869e8d365dfbdbc8c901c337f.mp3' }}></Video>
                }
            })
            .catch((err) => {
                console.error(err)
            })

        return (
            <View style={styles.wrapper}>
                <Text style={styles.songName}>{store.getState().songList.length > 0 ? store.getState().songList[store.getState().songOrder].name : '无歌曲'}</Text>
                <Text style={styles.author}>{store.getState().songList.length > 0 ? store.getState().songList[store.getState().songOrder].ar[0].name : '无歌曲'}</Text>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('../images/start.png')} style={styles.button} />
                </TouchableOpacity>
                {vedio}
                {/* <Video source={{ uri: 'http://m10.music.126.net/20181108011932/ae7850a9bfabb8c63502cc2eb315c27a/ymusic/010a/18ce/8053/950351f869e8d365dfbdbc8c901c337f.mp3' }}></Video> */}
                {/* <Video
                    source={getSongInfo()} */}
                {/* // style={styles.backgroundVideo}
                // paused={this.state.paused} */}
                {/* /> */}
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
