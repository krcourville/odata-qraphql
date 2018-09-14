const { ApolloServer } = require('apollo-server');

const dataSources = require('./dataSources');
const schema = require('./schema');

const port = 5000;

const server = new ApolloServer({
	dataSources: dataSources.get,
	schema,
	introspection: true
});

server
	.listen({ port })
	.then(({ url }) => {
		console.log(`GraphQL facade running @ ${url}`);
	});
