module.exports = (_source, _params, {dataSources}) => {
    return dataSources.flightsApi.getAll()
};