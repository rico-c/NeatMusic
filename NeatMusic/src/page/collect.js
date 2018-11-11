import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { } from '../utils/api';
import store from '../redux/store';
import { connect } from 'react-redux';
import { changeSong, controlPlay, songId, songName } from '../redux/actions'

class Collect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collect: [],
            Id: Number,
            songName: '',
            showAdd: true
        };
    }
    componentWillReceiveProps() {
        let Id = store.getState().songId;
        let songName = store.getState().songName;
        this.setState({
            Id: Id,
            songName: songName
        })
    }
    componentDidMount() {
        const value = AsyncStorage.getItem('collect');
        if (value !== null) {
            this.setState({
                collect: [...this.state.collect, value]
            })
        }
    }
    add() {
        let newCollect = {};
        newCollect.Id = this.state.Id;
        newCollect.songName = this.state.songName;
        this.setState({
            collect: [...this.state.collect, newCollect]
        }, () => {
            AsyncStorage.setItem('collect', JSON.stringify(this.state.collect))
        })
    }
    hideAdd() {

    }
    render() {
        let collectList = this.state.collect.map(item =>
            <Text>{item.songName}</Text>
        )
        return (
            <View style={styles.commentwrap}>
                <View style={styles.collectList}>
                    {collectList}
                </View>
                <View style={styles.askToAdd}>
                    <Text style={styles.askText}>将当前歌曲添加到收藏列表？</Text>
                    <View style={styles.twoBtn}>
                        <TouchableOpacity style={styles.askText} onPress={() => { this.add() }}>
                            <Text style={styles.askText}>YES</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.askText} onPress={() => { this.hideAdd() }}>
                            <Text style={styles.askText}>NO</Text>
                        </TouchableOpacity>
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
        songId: store.songId,
        songName: store.songName
    };
};

const styles = StyleSheet.create({
    commentwrap: { width: 412, height: 617 },
    askToAdd: { width: 412, height: 50, position: 'absolute', bottom: 50, flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'black' },
    askText: { color: 'white', lineHeight: 40, marginLeft: 10 },
    twoBtn: { flexDirection: 'row', height: 50, width: 100 },
    collectList: { width: 412, height: 500 }
})

export default connect(mapStateToProps)(Collect);
