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
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
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

export const REMOVE_GARDEN = gql`
    mutation removeGarden ($vegetable: String!, $variety: String, $startedAs: String, $sowDate: String, $plantDate: String, $firstHarvest: String, $lastHarvest: String, $notes: String) {
        removeGarden(vegetable: $vegetable, variety: $variety, startedAs: $startedAs, sowDate: $sowDate, plantDate: $plantDate, firstHarvest: $firstHarvest, lastHarvest: $lastHarvest, notes: $notes){
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