const { ApolloServer, gql } = require('apollo-server');

// simple sample data
const messages = [{
    title: 'Welcome, Developers',
    content: 'Hello from our GraphQL API!'
}]

// define the schema type definition
const typeDefs = gql`
  # defines the data type to be consumed by the queries
  type Message {
    title: String
    content: String
  }

  # defines the Query special type object
  type Query {
    messages: [Message]
  }
`;

// create the resolvers
const resolvers = {
    Query: {
        messages: () => messages,
    },
};

// define the Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`GraphQL server running at ${url}`);
});