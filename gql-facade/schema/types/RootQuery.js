const Flight = require('./Flight');
const FlightStatus = require('./FlightStatus');

const RootQuery = `
    "Flight System Root Query"
    type RootQuery {
        "All flights"
        getFlights: [Flight!]!

        getFlightStatuses: [FlightStatus]!

        getFlightStatus(flightNo: String): FlightStatus!

    }
`;

module.exports = [RootQuery, ...Flight, ...FlightStatus];
