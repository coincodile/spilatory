import React, { Component } from 'react';

import Login from './screens/Login';
import Game from './screens/Game';
import $account from './services/Account';


export default class ReactNativeStormpath extends Component {

	state = {
		isLoggedIn: false
	}

	constructor() {
		super();
		$account.load()
			.then(() => this.state.isLoggedIn = !$account.isAnonymous())
	}
	render() {
		if (this.state.isLoggedIn)
			return <Game
				onLogoutPress={() => this.setState({ isLoggedIn: false })} />;
		else
			return <Login
				onLoginPress={() => this.setState({ isLoggedIn: true })} />;
	}
}

