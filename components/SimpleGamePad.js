import React, { useState } from 'react';
import {
	Text,
	TextInput,
	View
} from 'react-native';


class SimpleGamePad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sum: 7,
			chanse: 'under',
			bet: 100,
			bonus: 2.01
		};
	}

	setSum(sum) {
		if (sum < 2 || sum > 12) {
			alert("Out of order sum");
			return;
		}
		this.setState({
			sum: sum
		});
	}

	setChanse(chanse) {
		switch (chanse) {
			case "under":
			case "over":
			case "equal":
				this.setState({
					chanse: chanse
				});
		}
	}

	setBonus(bonus) {
		this.setState({
			bonus: bonus
		});
	}

	setBet(bet) {
		this.setState({
			bet: bet
		});
	}

	applyRole() {
		// TODO:
	}

	render() {
		return (
			<View style={{ padding: 10 }}>
				<View>
					<Text>SUM:{this.state.sum}</Text>
					<Text>Bet:{this.state.chanse}</Text>
					<Text>Bet:{this.state.bet}</Text>
					<Text>Bonus:{this.state.bonus}</Text>
				</View>

				<hr />
				<TextInput
					placeholder="Sum"
					onChangeText={text => this.setSum(text)}
					defaultValue={this.state.sum} />

				<select
					value={this.state.chanse}
					onChange={(event) => this.setChanse(event.target.value)}>
					<option value="under">Under</option>
					<option value="equal">Equal</option>
					<option value="over">Over</option>
				</select>

				<button onClick={() => this.applyRole()}>Role</button>
			</View>
		);
	}
}
export default SimpleGamePad;
