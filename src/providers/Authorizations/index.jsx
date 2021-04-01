import React from "react";

const APP_NAME = "ORDERWAY";

export const AuthorizationsContext = React.createContext({
  hasInventoryPermission: () => false,
  getCompanyName: () => APP_NAME,
});

const AuthorizationsProvider = ({ children }) => {
  const hasInventoryPermission = () => {
    return true;
  };

  const getCompanyName = () => APP_NAME;

  return (
    <AuthorizationsContext.Provider
      value={{ hasInventoryPermission, getCompanyName }}
    >
      {children}
    </AuthorizationsContext.Provider>
  );
};

export default AuthorizationsProvider;
