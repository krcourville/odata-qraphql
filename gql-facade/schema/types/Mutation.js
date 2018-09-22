const FlightReservation = require('./FlightReservation');

const Mutation = `

	type Mutation {
		createFlightReservation(flightReservation: FlightReservation!): FlightReservation
	}
`;

module.exports = [Mutation, FlightReservation];
