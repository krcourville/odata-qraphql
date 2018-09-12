const getFlights = require('./getFlights');
const getFlightStatus = require('./getFlightStatus');

const resolvers = {
	RootQuery: {
		getFlights
	},

	Flight: {
		statusId: getFlightStatus,

		status: async (source, params, context) => {
			const flightStatusId = await getFlightStatus(source, params, context);
			const { cmsApi } = context.dataSources;
			const id = `FLIGHT_STATUS_${flightStatusId}`;
			const cmsMessage = await cmsApi.findOne({ id });
			return cmsMessage != null
				? cmsMessage.message
				: id;
		}
	}
};

module.exports = resolvers;