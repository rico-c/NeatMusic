import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { lyric } from '../utils/api';
import store from '../redux/store';
import { connect } from 'react-redux';
import { changeSong, controlPlay, songId } from '../redux/actions'

class Lrc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lrc: ''
        }
    }
    componentWillReceiveProps() {
        let Id = store.getState().songId;
        fetch(lyric + Id)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                this.setState({ lrc: res.lrc.lyric })
            })
    }
    render() {
        return (
            <View style={styles.commentwrap}>
                {/* <Image source={require("../images/lrcbg.jpeg")} style={styles.Image} blurRadius={1} /> */}
                <ScrollView style={styles.scroll}>
                    <Text style={styles.lrc}>{this.state.lrc.replace(/\[[^\[^\]]*\]/g, '')}</Text>
                </ScrollView>
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
    commentwrap: { height: 617 },
    scroll: { height: 617, paddingLeft: 10, paddingRight: 10 },
    lrc: { fontSize: 18, lineHeight: 30, color: 'white', fontStyle: 'italic', backgroundColor: '#000000', marginTop: 10 },
    // Image: { width: 412, height: 617 },
})

export default connect(mapStateToProps)(Lrc);
