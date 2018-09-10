const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const fetch = require('node-fetch');

const schema = buildSchema(`
	scalar Date

	type FlightConnection {
		airportCode: String!
		time: Date!
	}

	type Flight {
		flightNo: ID!
		start: FlightConnection!
		end: FlightConnection!
		status : FlightStatus!
	}

	enum FlightStatusId {
		ON_TIME,
		DELAYED
	}

	type FlightStatus {
		flightNo: ID!,
		statusId: FlightStatusId!
	}

	"Flight System Root Query"
	type Query {
		"All flights"
		flights: [Flight!]!
		flightStatus: [FlightStatus]!
	}
`);

const root = {
	flights: () => fetch('http://localhost:4000/flights/')
		.then(res => res.json()),


	flightStatus: () => fetch('http://localhost:4001/flight-status')
		.then(res => res.json())
};

const app = express();
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));

const Port = 5000;

app.listen(Port, () => console.log(
	`GraphQL facade running on ${Port}. GraphIQL running at: http://localhost:${Port}/graphql`
));
