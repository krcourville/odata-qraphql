const FlightConnection = require('./FlightConnection');
const FlightStatus = require('./FlightStatus');

const Flight = `
    type Flight {
        flightNo: ID!
        start: FlightConnection!
        end: FlightConnection!
        status : FlightStatus!
    }
`;

module.exports = [Flight, ...FlightConnection, ...FlightStatus];