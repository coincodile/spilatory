const createExpoWebpackConfig = require("@expo/webpack-config");
module.exports = function(env, argv) {
	env.mode = "development";
	const config = createExpoWebpackConfig(env, argv);

	if (config.mode === 'development') {
		// TODO: load development configs 
		config.devServer.proxy = {
			'/**': {
				target: {
					host: 'coincodile.com',
					protocol: 'https',
					port: 443,
				},
				secure: false,
				changeOrigin: true,
				logLevel: 'info',
			},
		};
	}

	return config;
};


