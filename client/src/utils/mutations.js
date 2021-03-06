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
mutation addUser($email: String!, $password: String!) {
  addUser(email: $email, password: $password) {
    token
    user {
      _id
      email
      password
    }
  }
}
`;

export const ADD_GARDEN = gql`
mutation addGarden($vegetable: String!, $variety: String, $startedAs: String, $sowDate: String, $plantDate: String, $firstHarvest: String, $lastHarvest: String, $notes: String) {
  addGarden(vegetable: $vegetable, variety: $variety, startedAs: $startedAs, sowDate: $sowDate, plantDate: $plantDate, firstHarvest: $firstHarvest, lastHarvest: $lastHarvest, notes: $notes) {
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

// export const REMOVE_GARDEN = gql`
//     mutation removeGarden ($vegetable: String!, $variety: String, $startedAs: String, $sowDate: String, $plantDate: String, $firstHarvest: String, $lastHarvest: String, $notes: String) {
//         removeGarden(vegetable: $vegetable, variety: $variety, startedAs: $startedAs, sowDate: $sowDate, plantDate: $plantDate, firstHarvest: $firstHarvest, lastHarvest: $lastHarvest, notes: $notes){
//             _id
//             vegetable
//             variety
//             startedAs
//             sowDate
//             plantDate
//             firstHarvest
//             lastHarvest
//             notes
//         }
//     }    
// `;