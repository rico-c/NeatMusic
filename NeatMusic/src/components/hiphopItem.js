import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { hiphop, listDetail } from '../utils/api';

class hiphopItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ranking: [],
            showImg: {
                uri: 'https://facebook.github.io/react/logo-og.png'
            },
            order: 0
        }
    }
    change(order) {
        // console.warn(this.state.ranking.length)
        if (order == 'next') {
            this.setState({
                order: this.state.order !== 50 ? this.state.order + 1 : 0,
                showImg: Object.assign({}, this.state.showImg, { uri: this.state.ranking[this.state.order !== 50 ? this.state.order + 1 : 0].al.picUrl })
            })
        } else if (order == 'last') {
            this.setState({
                order: this.state.order !== 0 ? this.state.order - 1 : 50,
                showImg: Object.assign({}, this.state.showImg, { uri: this.state.ranking[this.state.order !== 0 ? this.state.order - 1 : 50].al.picUrl })
            })
        }
    }
    componentDidMount() {
        // 先请求怀旧总接口后取第一名再请求列表详情
        fetch(hiphop)
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
    render() {
        return (
            <View >
                <Image source={this.state.showImg} style={styles.Image} />
                <Text style={styles.title}>说唱</Text>
                <Text style={styles.singer}>{this.state.ranking[this.state.order] ? this.state.ranking[this.state.order].name : ''}</Text>
                <TouchableOpacity onPress={() => { this.change('last') }} style={{ position: 'absolute', top: 100, left: 20 }}>
                    <Image source={require('../images/arrowl.png')} style={styles.arrow} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.change('next') }} style={{ position: 'absolute', top: 100, right: 20 }}>
                    <Image source={require('../images/arrowr.png')} style={styles.arrow} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Image: { width: 205, height: 205 },
    title: { position: 'absolute', top: 20, width: 205, color: '#ffffff', textAlign: 'center', fontSize: 18, fontWeight: 'bold' },
    singer: { position: 'absolute', bottom: 20, width: 205, color: '#ffffff', textAlign: 'center', fontSize: 16 },
    arrow: { width: 20, height: 20 },
})

export default hiphopItem;
