import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { } from '../utils/api';
import store from '../redux/store';
import { connect } from 'react-redux';
import { changeSong, controlPlay, songId } from '../redux/actions'

class Collect extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.collect = []
    }
    componentDidMount() {
        this.collect = async () => {
            try {
                const value = await AsyncStorage.getItem('collect');
                if (value !== null) {
                    console.warn(value);
                }
            } catch (error) {
                console.warn(error)
            }
        }
    }
    render() {
        return (
            <View style={styles.commentwrap}>
                <Image source={this.state.showImg} style={styles.Image} blurRadius={5} />
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
    Image: { width: 412, height: 617 },
})

export default connect(mapStateToProps)(Collect);
