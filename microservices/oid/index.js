const Provider = require('oidc-provider');
const configuration = {

};
const clients = [{
	client_id: 'client-app',
	client_secret: 'secret',
	redirect_uris: [
		'http://localhost:4200/after-login'
	]
}];

const Port = 3000;
const oidc = new Provider(`http://localhost:${Port}`, configuration);

let server;
(async () => {
	await oidc.initialize({ clients });
	server = oidc.listen(Port, () => {
		console.log(`oidc-provider listening on port ${Port}, check http://localhost:3000/.well-known/openid-configuration`);
	});
})().catch((err) => {
	if (server && server.listening) server.close();
	console.error(err);
	process.exitCode = 1;
});
