const FlightConnection = require('./FlightConnection');
const FlightStatus = require('./FlightStatus');
const FlightStatusId = require('./FlightStatusId');

const Flight = `
    type Flight {
        flightNo: ID!
        start: FlightConnection!
        end: FlightConnection!
		#status : FlightStatus!
		statusId : FlightStatusId!
		status: String!
    }
`;

module.exports = [Flight, ...FlightConnection, ...FlightStatus, FlightStatusId];
