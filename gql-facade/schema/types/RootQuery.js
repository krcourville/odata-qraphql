const Flight = require('./Flight');
const FlightStatus = require('./FlightStatus');

const RootQuery = `
    "Flight System Root Query"
    type RootQuery {
        "All flights"
        flights: [Flight!]!
        flightStatus: [FlightStatus]!
    }
`;

module.exports = [RootQuery, ...Flight, ...FlightStatus];
