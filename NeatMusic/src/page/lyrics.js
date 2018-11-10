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
    componentDidMount() {
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
                <ScrollView styles={styles.scroll}>
                    <Text>{this.state.lrc}</Text>
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
    scroll: { height: 617 }
})

export default connect(mapStateToProps)(Lrc);
