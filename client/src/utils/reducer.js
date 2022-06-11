import { UPDATE_GARDEN } from "./actions";
import { REMOVE_GARDEN } from "./actions";

export default function reducer(state, action) {
  switch (action.type) {

    case REMOVE_GARDEN: {
        return {
          ...state,
          gardens: [...state.gardens].filter(
            (garden) => garden.id !== action.payload
          ),
        };
      }

    case UPDATE_GARDEN: {
        // Find the index of the garden that has an id that matches the one in the payload
        const gardenIndex = state.gardens.findIndex(
          (garden) => garden.id === action.payload.id
        );
  
        // Variable to hold our garden object with the updated values from our action
        const updatedGarden = {
          ...state.gardens[gardenIndex],
          ...action.payload,
        };
  
        // Make a copy of our current gardens array
        const newGardensList = [...state.gardens];
  
        // Assign the updated garden to their existing position in the newGardenssList
        newGardensList[gardenIndex] = updatedGarden;
  
        // Return a copy of state with our new gardn list
        return {
          ...state,
          gardens: newGardensList,
        };
      }

    default:
      return state;
  }
};