const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Garden {
    _id: ID!
    vegetable: String!
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

  type Mutation {
    createGarden(vegetable: String!, variety: String, startedAs: String, sowDate: String, plantDate: String, firstHarvest: String, lastHarvest: String, notes: String): Garden
  }
`;

module.exports = typeDefs;
