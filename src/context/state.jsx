import { createContext, useContext } from 'react';

const AppContext = createContext();

export function StateContext({ children }) {
  let sharedState = {
    apiUrl: 'https://stocks-studies-java.herokuapp.com/api/'
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
