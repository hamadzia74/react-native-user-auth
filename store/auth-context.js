import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

// This is a context provider component that will wrap around the components that need access to the authentication context.
// Will responsible for managing the authentication state and providing the necessary functions to authenticate and logout users.
function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);

  const authenticate = (token) => {
    setAuthToken(token);
    AsyncStorage.setItem("token", token); // value must always be string or object to json
  };

  const logout = () => {
    setAuthToken(null);
    AsyncStorage.removeItem("token"); // remove the token from async storage
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
