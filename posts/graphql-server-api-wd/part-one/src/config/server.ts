const { ApolloServer, gql } = require('apollo-server');

const typeDefs = './src/schema.graphql';

// define the Apollo Server instance
export const server = new ApolloServer({ typeDefs: './src/schema.graphql', resolvers });