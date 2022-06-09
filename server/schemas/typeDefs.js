const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    gardens: [Garden]!
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
    user(email: String): User
    gardens(_id: String): [Garden]
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    createGarden(vegetable: String!, variety: String, startedAs: String, sowDate: String, plantDate: String, firstHarvest: String, lastHarvest: String, notes: String): Garden
  }
`;
// updateGarden(userId: ID!, vegetable: String!, variety: String, startedAs: String, sowDate: String, plantDate: String, firstHarvest: String, lastHarvest: String, notes: String): Garden
// removeGarden: Garden
module.exports = typeDefs;
