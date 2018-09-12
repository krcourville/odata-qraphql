const FlightStatusId = require('./FlightStatusId');

const FlightStatus = `
    type FlightStatus {
        flightNo: ID!,
		id: FlightStatusId!,
		name: String!
    }
`;

module.exports = [FlightStatus, FlightStatusId];
