const { makeExecutableSchema } = require('graphql-tools');

const { SchemaDefinition } = require('./types');
const resolvers = require('./resolvers');
const typeDefs = [...SchemaDefinition];

module.exports = makeExecutableSchema({
	typeDefs,
	resolvers,
});
