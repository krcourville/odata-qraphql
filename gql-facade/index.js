const { ApolloServer } = require('apollo-server');

const schema = require('./schema');

const server = new ApolloServer({ schema });
const port = 5000;
server
	.listen({ port })
	.then(({ url }) => {
		console.log(`GraphQL facade running @ ${url}`);
	});