module.exports = async (source, params, { dataSources }) => {
	const flightStatus = await dataSources
		.flightStatusApi
		.findOne({
			flightNo: source.flightNo
		});
	return {
		id: flightStatus.statusId,
		name: flightStatus.statusName
	};
};
