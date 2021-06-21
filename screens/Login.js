import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	View,
	Button
} from 'react-native';
import $account from '../services/Account';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
			password: ''
		};
		this.checkState();
	}

	checkState() {
	}

	async doLogin() {
		await $account.loginWithCredit({
			login: this.state.login,
			password: this.state.password
		});
		if (!account.isAnonymous()) {
			this.props.onLoginPress();
		}
	}

	render() {
		return (
			<ScrollView style={{ padding: 20 }}>
				<Text
					style={{ fontSize: 27 }}>Login</Text>
				<TextInput
					defaultValue={this.state.login}
					onChangeText={text => this.state.login = text}
					placeholder='Username' />
				<TextInput
					defaultValue={this.state.password}
					onChangeText={text => this.state.password = text}
					placeholder='Password' />
				<View style={{ margin: 7 }} />
				<Button
					onPress={() => this.doLogin()}
					title="Submit" />
			</ScrollView>
		)
	}
}

