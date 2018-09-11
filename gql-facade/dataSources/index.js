const { RESTDataSource } = require('apollo-datasource-rest');

class FlightsAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:4000/flights/';
    }

    async getAll() {
        return this.get('');
    }
}

class FlightStatusAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:4001/flight-status';
    }

    async find({flightNo = null} = {}) {
        return this.get('', {
            flightNo
        });
    }

    async findOne(params) {
        const items = await this.find(params);
        return items[0];
    }
}

module.exports = {
    FlightsAPI,
    FlightStatusAPI,
    get: () => ({
        flightsApi: new FlightsAPI(),
        flightStatusApi: new FlightStatusAPI()
    })
}

// const resolvers = {
//     RootQuery : {
//         flights: 
//     }
// }

// const resolvers = {
// 	RootQuery: {
// 		flights: () => fetch('http://localhost:4000/flights/')
// 			.then(res => res.json()),


// 		flightStatus: () => fetch('http://localhost:4001/flight-status')
// 			.then(res => res.json())
// 	}
// };

