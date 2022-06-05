import { gql } from '@apollo/client';

export const QUERY_GARDENS = gql`
  query gardens {
    garden {
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