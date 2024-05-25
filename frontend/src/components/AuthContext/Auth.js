import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null)

  const login = (newToken, newUser, newRole) => {
    setToken(newToken);
    setUser(newUser);
    setRole(newRole)
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', newUser);
    localStorage.setItem('role', newRole);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
  };

  const authContextValue = {
    token,
    user,
    role,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;