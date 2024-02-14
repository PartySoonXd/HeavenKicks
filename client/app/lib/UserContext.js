import { createContext, useContext } from "react";
    
export const UserContext = createContext({
  user: undefined,
  isLoading: false,
  setUser: () => {},
});

export const useUserContext = () => useContext(UserContext);