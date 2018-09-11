const Date = require('./Date');

const FlightConnection = `
    type FlightConnection {
        airportCode: String!
        time: Date!
    }
`;

module.exports = [ FlightConnection, Date];