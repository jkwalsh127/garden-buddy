import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($email: String!) {
  user(email: $email) {
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
  query getGardens {
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

export const QUERY_ME = gql`
  query me {
    me {
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
