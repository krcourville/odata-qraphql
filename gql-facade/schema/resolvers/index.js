const getFlights = require('./getFlights');
const getFlightStatus = require('./getFlightStatus');
const getFlightStatuses = require('./getFlightStatuses');

const resolvers = {
	RootQuery: {
        getFlights,
        getFlightStatuses,
        getFlightStatus,
	}
};

module.exports = resolvers;