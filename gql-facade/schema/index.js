const { makeExecutableSchema } = require('graphql-tools');

const Flight = require('./Flight');
const FlightStatus = require('./FlightStatus');

const Query = `
    "Flight System Root Query"
    type Query {
        "All flights"
        flights: [Flight!]!
        flightStatus: [FlightStatus]!
    }
`;

const SchemaDefinition = `
    schema {
        query: Query
    }
`;

// TODO: use Apollo fetching framework and put this elsewhere
const fetch = require('node-fetch');
const resolvers = {
	Query: {
		flights: () => fetch('http://localhost:4000/flights/')
			.then(res => res.json()),


		flightStatus: () => fetch('http://localhost:4001/flight-status')
			.then(res => res.json())
	}
};

module.exports = makeExecutableSchema({
    typeDefs: [SchemaDefinition, Query, ...Flight, ...FlightStatus],
    resolvers
});