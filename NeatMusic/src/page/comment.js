import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { pop, listDetail, classical, rock, hiphop, hotComment } from '../utils/api';
import store from '../redux/store';
import { connect } from 'react-redux';
import { changeSong, controlPlay, songId, songName } from '../redux/actions'

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ranking: [],
            order: 0,
            type: 'pop',
            songId: 0,
            showImg: {
                uri: 'https://facebook.github.io/react/logo-og.png'
            },
            comment: '',
            commentWriter: '',
        }
    }
    // 切歌
    change(order) {
        if (order == 'next') {
            this.setState({
                order: this.state.order !== this.state.ranking.length - 1 ? this.state.order + 1 : 0,
                showImg: Object.assign({}, this.state.showImg, { uri: this.state.ranking[this.state.order !== this.state.ranking.length - 1 ? this.state.order + 1 : 0].al.picUrl }),
                songId: this.state.ranking[this.state.order !== this.state.ranking.length - 1 ? this.state.order + 1 : 0].id
            }, () => {
                this.play(this.state.order == this.state.ranking.length - 1 ? this.state.order + 1 : 0);
                this.getComment();
            });
        } else if (order == 'last') {
            this.setState({
                order: this.state.order !== 0 ? this.state.order - 1 : this.state.ranking.length - 1,
                showImg: Object.assign({}, this.state.showImg, { uri: this.state.ranking[this.state.order !== 0 ? this.state.order - 1 : this.state.ranking.length - 1].al.picUrl }),
                songId: this.state.ranking[this.state.order !== 0 ? this.state.order - 1 : this.state.ranking.length - 1].id
            }, () => {
                this.play(this.state.order == 0 ? this.state.ranking.length - 1 : this.state.order - 1);
                this.getComment();
            })
        }
    }
    // 向player发送请求
    play() {
        store.dispatch(changeSong(this.state.ranking));
        store.dispatch(controlPlay(this.state.order));
        store.dispatch(songId(this.state.songId));
        store.dispatch(songName(this.state.ranking[this.state.order].name));
    }
    // 获取评论
    getComment() {
        fetch(hotComment + this.state.songId)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                this.setState({
                    comment: res.hotComments[0].content,
                    commentWriter: res.hotComments[0].user.nickname
                })
            })
            .catch((err) => {
                console.warn(err)
            })
    }
    // 获取播放列表
    getPlayList() {
        fetch(pop)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                fetch(listDetail + res.playlists[0].id)
                    .then((res) => {
                        return res.json()
                    })
                    .then((res) => {
                        this.setState(prevState => ({
                            ranking: [...prevState.ranking, ...res.playlist.tracks],
                            showImg: Object.assign({}, this.state.showImg, { uri: res.playlist.tracks[0].al.picUrl })
                        }));
                    })
            })
            .catch((err) => {
                console.warn(err)
            })
    }
    componentWillReceiveProps() {
        this.setState({
            songId: store.getState().songId,
        }, () => {
            this.getComment()
        })
    }
    componentDidMount() {
        this.getPlayList()
    }
    render() {
        return (
            <View style={styles.commentwrap}>
                <Image source={this.state.showImg} style={styles.Image} blurRadius={5} />
                <TouchableOpacity onPress={() => { this.change('last') }} style={{ position: 'absolute', top: 280, left: 20 }}>
                    <Image source={require('../images/arrowl.png')} style={styles.arrow} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.change('next') }} style={{ position: 'absolute', top: 280, right: 20 }}>
                    <Image source={require('../images/arrowr.png')} style={styles.arrow} />
                </TouchableOpacity>
                <View style={styles.Bg}>
                    <Text style={styles.type}>流行</Text>
                    <View style={styles.redBg}>
                        <View style={styles.comment}>
                            <Text style={styles.comment_content}> {this.state.comment ? this.state.comment : '在NeatMusic中发现有趣的评论'}</Text>
                            <Text style={styles.comment_info}>来自网易云音乐用户 {this.state.commentWriter ? this.state.commentWriter : 'RicoFishing'} 在 《{this.state.ranking.length >= 1 ? this.state.ranking[this.state.order].name : ''}》下的评论 </Text>
                            <View style={styles.redArrow}></View>
                            <View style={styles.whiteArrow}></View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        songList: store.songList,
        songOrder: store.songOrder,
        songName: store.songName
    };
};

const styles = StyleSheet.create({
    commentwrap: { position: 'relative' },
    type: { color: 'white', position: 'absolute', top: 30, backgroundColor: 'black', padding: 8 },
    Image: { width: 412, height: 617 },
    arrow: { width: 20, height: 20 },
    Bg: { width: 280, height: 617, position: "absolute", left: 75, top: 0, justifyContent: "center", alignItems: "center" },
    redBg: { backgroundColor: '#cc3300', width: 270, position: 'relative', bottom: 20 },
    comment: { backgroundColor: 'white', position: 'relative', width: 280, right: 16, top: 6, padding: 10, borderColor: '#cc3300', borderWidth: 4 },
    comment_content: { color: '#cc3300', fontSize: 16, fontWeight: 'bold', lineHeight: 22 },
    comment_info: { color: '#cc3300', fontSize: 12, marginTop: 10 },
    redArrow: { width: 0, height: 0, borderWidth: 10, borderLeftColor: '#cc3300', borderTopColor: '#cc3300', borderRightColor: 'transparent', borderBottomColor: 'transparent', position: 'absolute', bottom: -24, left: -4 },
    whiteArrow: { width: 0, height: 0, borderWidth: 10, borderLeftColor: '#ffffff', borderTopColor: '#ffffff', borderRightColor: 'transparent', borderBottomColor: 'transparent', position: 'absolute', bottom: -14, left: 0 }
})

export default connect(mapStateToProps)(Comment);
