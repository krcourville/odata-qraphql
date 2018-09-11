const { makeExecutableSchema } = require('graphql-tools');

const { SchemaDefinition } = require('./types');
const typeDefs = [...SchemaDefinition];

// TODO: use Apollo fetching framework and put this elsewhere
const resolvers = {
	RootQuery: {
        flights: (_source, _params, {dataSources}) => {
            return dataSources.flightsApi.getAll()
        },

        flightStatus: (_source, _params, {dataSources}) => {
            return dataSources.flightStatusApi.getAll();
        }
	}
};

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
});