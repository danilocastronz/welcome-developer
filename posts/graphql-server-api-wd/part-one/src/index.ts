const { ApolloServer } = require('apollo-server');

// import resolvers
const resolvers = require('./resolvers.ts');

// import schema
const typeDefs = require('./schema.graphql.ts');

// instantiate the apollo server
const server = new ApolloServer({ typeDefs, resolvers });

// start the graphql server
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});