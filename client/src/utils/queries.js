import { gql } from '@apollo/client';

export const QUERY_GARDENS = gql`
  query garden {
    garden {
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