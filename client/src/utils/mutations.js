import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
      password
    }
  }
}
`;

export const ADD_USER = gql`
mutation addUser($name: String!, $email: String!, $password: String!) {
  addUser(username: $name, email: $email, password: $password) {
    token
    user {
      _id
      name
      email
      password
    }
  }
}
`;

export const CREATE_GARDEN = gql`
mutation createGarden($vegetable: String!, $variety: String, $startedAs: String, $sowDate: String, $plantDate: String, $firstHarvest: String, $lastHarvest: String, $notes: String) {
  createGarden(vegetable: $vegetable, variety: $variety, startedAs: $startedAs, sowDate: $sowDate, plantDate: $plantDate, firstHarvest: $firstHarvest, lastHarvest: $lastHarvest, notes: $notes) {
    _id
    vegetable
    variety
    startedAs
    sowDate
    plantDate
    firstHarvest
    lastHarvest
    notes
  }
}
`;
