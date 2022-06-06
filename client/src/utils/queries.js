import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    gardens {
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
}
`;

export const QUERY_GARDENS = gql`
query gardens($_id: String) {
  gardens(_id: $_id) {
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