import Service from './Service';

const API_USER_ACCOUNT_CURRENT = 'https://coincodile.com/api/v2/user/accounts/current';
const API_USER_ACCOUNT_LOGIN = 'https://coincodile.com/api/v2/user/login'



function encodeObject(params) {
	var query = [];
	for (let key in params) {
		let val = encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
		query.push(val);
	}
	return query.join('&');
}

class Account extends Service {

	constructor() {
		super();
		this.isLoaded = false;
		this.load();
	}

	isAnonymous() {
		return !this.id || this.id == 0;
	}

	async load() {
		if (this.isLoaded) {
			Promise.resolve();
		}
		const response = await fetch(API_USER_ACCOUNT_CURRENT, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		});
		const accountData = await response.json();
		this.id = accountData.id;
		this.login = accountData.login;
	}

	async loginWithCredit(cridet) {
		if (!this.isAnonymous()) {
			Promise.reject({
				code: 1,
				message: 'logout first'
			});
		}
		const response = await fetch(API_USER_ACCOUNT_LOGIN, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: encodeObject(cridet)
		});
		const accountData = await response.json();
		this.id = accountData.id;
		this.login = accountData.login;
	}

}

const $account = new Account();
export default $account;

