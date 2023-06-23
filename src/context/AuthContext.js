import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Perform login logic and set the authenticated user in state
    setUser(userData);
  };

  const signup = (userData) => {
    // Perform signup logic and set the authenticated user in state
    setUser(userData);
  };

  const logout = () => {
    // Perform logout logic and clear the authenticated user from state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
