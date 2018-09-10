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
	}

	type Query {
		flights: [Flight!]!
	}
`);

const root = {
	flights: () => fetch('http://localhost:4000/flights/')
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
