const FlightStatusId = require('./FlightStatusId');

const FlightStatus = `
    type FlightStatus {
        flightNo: ID!,
        id: FlightStatusId!
    }
`;

module.exports = [FlightStatus, FlightStatusId];
