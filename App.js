import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image
} from 'react-native';

import SimpleGamePad from './components/SimpleGamePad.js';

export default function App() {
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
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
