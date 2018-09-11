const RootQuery = require('./RootQuery');

const SchemaDefinition = `
    schema {
        query: RootQuery
    }
`;

module.exports = [SchemaDefinition, ...RootQuery];
