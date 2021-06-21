

import React, { Component } from 'react';
import SimpleGamePad from './../components/SimpleGamePad.js';
import {
	ScrollView,
	Text,
	View,
	Image
} from 'react-native';

export default class Game extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				<View>
					<Image
						source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
						style={{ width: 80, height: 80 }} />
					<h1>Spilotory</h1>
					<Text>Welcome to spenlotory.</Text>
				</View>
				<SimpleGamePad />
			</ScrollView>
		)
	}
}