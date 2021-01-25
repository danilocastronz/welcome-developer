const securityData = require('../data/nasdaq.json');

const serverResolvers = {
    Query: {
      securities: () => securityData
    }
  };

module.exports = serverResolvers;