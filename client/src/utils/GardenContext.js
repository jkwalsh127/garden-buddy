import React, { createContext, useContext } from 'react';
import { QUERY_GARDENS } from '../utils/queries';
import { useQuery } from '@apollo/client';


// Initialize new context for gardens
const GardenContext = createContext();

// We create a custom hook to provide immediate usage of the garden context value (gardens) in other components
export const useGardenContext = () => useContext(GardenContext);

// The provider is responsible for creating our state, updating the state, and persisting values to the children
export const GardenProvider = ({ children }) => {

    const { data } = useQuery(QUERY_GARDENS);
    const gardensList = data?.gardens || [];
    console.log(typeof gardensList);
    console.log(gardensList);   

    const gardens = Object.keys(gardensList).map(key => gardensList[key]);

    console.log(typeof gardens);
    console.log(gardens);

  // The value prop expects an initial state object
  return (
    <GardenContext.Provider value={{ gardens }}>
      {/* We render children in our component so that any descendent can access the value from the provider */}
      {children}
    </GardenContext.Provider>
  );
};
