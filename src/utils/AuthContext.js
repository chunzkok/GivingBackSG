import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    logged_in: false,
    id: null,
    name: null,
    avatar_url: null,
    telegram: null,
    phone: null,
  });
  const [authLoading, setAuthLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        authData,
        setAuthData,
        authLoading,
        setAuthLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
