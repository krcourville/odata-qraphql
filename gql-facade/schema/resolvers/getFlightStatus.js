module.exports = (_source, _params, {dataSources}) => {
    return dataSources.flightStatusApi.findOne(_params);
};