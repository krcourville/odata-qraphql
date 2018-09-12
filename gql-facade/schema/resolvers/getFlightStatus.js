module.exports = async (source, params, { dataSources }) => {
	const flightStatus = await dataSources
		.flightStatusApi
		.findOne({
			flightNo: source.flightNo
		});
	return flightStatus.statusId;
};
