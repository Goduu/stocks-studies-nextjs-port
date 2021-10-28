import { createContext, useContext } from 'react';

const AppContext = createContext();

export function StateContext({ children }) {
  let sharedState = {
    apiUrl: 'https://stocks-studies-java.herokuapp.com/api/',
    auth: {
      email: '',
      token: '',
      name: '',
      roles: [],
    }
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useStateContext() {
  return useContext(AppContext);
}
