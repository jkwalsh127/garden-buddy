import { gql } from '@apollo/client';

export const CREATE_GARDEN = gql`
  mutation createGarden($vegetable: String!, $variety: String, $startedAs: String, $sowDate: String, $plantDate: String, $firstHarvest: String, $lastHarvest: String, $notes: String) {
    createGarden(vegetable: $vegetable, variety: $variety, startedAs: $startedAs, sowDate: $sowDate, plantDate: $plantDate, firstHarvest: $firstHarvest, lastHarvest: $lastHarvest, notes: $notes) {
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
