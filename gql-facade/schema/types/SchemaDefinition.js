const RootQuery = require('./RootQuery');
const Mutation = require('./Mutation');

const SchemaDefinition = `
    schema {
		query: RootQuery
		mutation: Mutation
    }
`;

module.exports = [SchemaDefinition, ...RootQuery, ...Mutation];
