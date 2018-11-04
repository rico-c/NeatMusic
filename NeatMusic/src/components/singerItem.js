import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { singerCate } from '../utils/api';

class singerItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			singerCate: [],
			showImg: {
				uri: 'https://facebook.github.io/react/logo-og.png'
			},
			singerOrder: 0
		}
	}
	changeSinger(order) {
		if (order == 'next') {
			this.setState({
				singerOrder: this.state.singerOrder !== 29 ? this.state.singerOrder + 1 : 0,
				showImg: Object.assign({}, this.state.showImg, { uri: this.state.singerCate[this.state.singerOrder !== 29 ? this.state.singerOrder + 1 : 0].picUrl })
			})
		} else if (order == 'last') {
			this.setState({
				singerOrder: this.state.singerOrder !== 0 ? this.state.singerOrder - 1 : 29,
				showImg: Object.assign({}, this.state.showImg, { uri: this.state.singerCate[this.state.singerOrder !== 0 ? this.state.singerOrder - 1 : 29].picUrl })
			})
		}
	}
	componentDidMount() {
		fetch(singerCate)
			.then((res) => {
				return res.json()
			})
			.then((res) => {
				this.setState(prevState => ({
					singerCate: [...prevState.singerCate, ...res.artists],
					showImg: Object.assign({}, this.state.showImg, { uri: res.artists[0].picUrl })
				}));
			})
			.catch((err) => {
				console.error(err)
			})
	}
	render() {
		return (
			<View >
				<Image source={this.state.showImg} style={styles.Image} />
				<Text style={styles.title}>热门歌手</Text>
				<Text style={styles.singer}>{this.state.singerCate[this.state.singerOrder] ? this.state.singerCate[this.state.singerOrder].name : ''}</Text>
				<TouchableOpacity onPress={() => { this.changeSinger('last') }} style={{ position: 'absolute', top: 100, left: 20 }}>
					<Image source={require('../images/arrowl.png')} style={styles.arrow} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { this.changeSinger('next') }} style={{ position: 'absolute', top: 100, right: 20 }}>
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
export default singerItem;
