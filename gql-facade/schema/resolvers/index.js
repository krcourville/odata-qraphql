const getFlights = require('./getFlights');
const getFlightStatus = require('./getFlightStatus');

const resolvers = {
	RootQuery: {
		getFlights
	},
	Flight: {
		status: getFlightStatus
	}
};

module.exports = resolvers;
