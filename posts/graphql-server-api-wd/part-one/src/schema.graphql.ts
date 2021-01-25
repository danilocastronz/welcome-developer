const { gql } = require('apollo-server');

const schema = gql`
  type Security {
    symbol: String
    securityName: String
  }
  type Query {
    securities: [Security] # returns an array of securities
  }
`;

module.exports = schema;