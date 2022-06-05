const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    garden: [Garden]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createGarden(vegetable: String!, variety: String, startedAs: String, sowDate: String, plantDate: String, firstHarvest: String, lastHarvest: String, notes: String): Garden
  }
`;

module.exports = typeDefs;
