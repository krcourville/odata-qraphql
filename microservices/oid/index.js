const express = require('express');
const Provider = require('oidc-provider');

const app = express();

const clients = [{
	client_id: 'client-app',
	grant_types: ['implicit'],
	response_types: ['id_token'],
	token_endpoint_auth_method: 'none',
	redirect_uris: [
		'https://testapp:4200/signin-oidc'
	]
}];

// http://localhost:3000/auth?client_id=client-app&redirect_uri=https://testapp:4200/signin-oidc&response_type=id_token&scope=openid&nonce=123&state=321

const findById = async (ctx, id) => {
	console.log('FIND_BY_ID', ctx, id);
	return {
		accountId: id,
		async claims() {
			return {
				sub: id
			};
		}
	};
}

const Port = 3000;

const oidc = new Provider(`http://localhost:${Port}`);
const oidcConfig = {
	clients,
	findById
};
oidc.initialize(oidcConfig).then(function () {
	app.use('/', oidc.callback);
	app.listen(Port, () => {
		console.log(`oidc-provider listening on port ${Port}, check http://localhost:${Port}/.well-known/openid-configuration`);

	});
});
