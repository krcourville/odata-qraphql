var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}));
const Port = 5000;

app.listen(Port, () => console.log(
	`GraphQL facade running on ${Port}. GraphIQL running at: http://localhost:${Port}/graphql`
));
