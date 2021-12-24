/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import reducer from '../reducer/reducer';
import data from '../stays.json';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    stays: data,
    filteredStays: data,
    isModalOpen: false,
    adults: 0,
    children: 0,
    city: '',
    country: '',
    isLocationsOpen: true,
    isGuestsOpen: false
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        ...state,
        dispatch
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
