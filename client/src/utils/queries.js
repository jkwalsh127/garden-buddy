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

export const QUERY_USERS = gql`
{
  users{ 
    _id
    username
    email
    password
  }
}
`;
export const QUERY_GARDENS = gql`
{
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
`;