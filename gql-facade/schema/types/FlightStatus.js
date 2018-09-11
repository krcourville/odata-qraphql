const FlightStatusId = require('./FlightStatusId');

const FlightStatus = `
    type FlightStatus {
        flightNo: ID!,
        statusId: FlightStatusId!
    }
`;

module.exports = [FlightStatus, FlightStatusId];