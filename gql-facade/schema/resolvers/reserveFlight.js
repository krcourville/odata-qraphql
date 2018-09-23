module.exports = (_source, { flightNo, userId }, { dataSources }) => {
	const { flightReservationsApi } = dataSources;
	return flightReservationsApi.create({
		flightNo,
		userId
	});
};
