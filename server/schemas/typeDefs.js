const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Garden {
    vegetable: String
    variety: String
    startedAs: String
    sowDate: String
    plantDate: String
    firstHarvest: String
    lastHarvest: String
    notes: String
  }

  type Query {
    garden: [Garden]
  }
`;

module.exports = typeDefs;
