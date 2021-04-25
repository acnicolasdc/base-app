import React, { useState,useLayoutEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const APP_NAME = "ORDERWAY";
const USER_KEY = '@user-session-base'
export const AuthorizationsContext = React.createContext({
  session: false,
  hasInventoryPermission: () => false,
  getCompanyName: () => APP_NAME,
  saveUserData: ()=> {},
  removeUserData: ()=> {}
});


const getData = async ( key="" ) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      return value;
    }
  } catch(e) {
    return undefined;
  }
}

const AuthorizationsProvider = ({ children }) => {
  const [ session, setSession ] = useState(false);

  useLayoutEffect(() => {
    const hasSession = getData(USER_KEY);
    if (hasSession && !session) {
        setSession(true);
    }
  }, [session]);



  const hasInventoryPermission = () => {
    return true;
  };

  const getCompanyName = () => APP_NAME;

  const saveUserData = async (value) => {
    try {
      await AsyncStorage.setItem(USER_KEY, value)
      setSession(true);
    } catch (e) {
      // saving error
    }
  }

  const removeUserData = async () => {
    try {
      await AsyncStorage.removeItem(USER_KEY)
      setSession(false);
    } catch (e) {
      // saving error
    }
  }

  return (
    <AuthorizationsContext.Provider
      value={{ hasInventoryPermission, getCompanyName, saveUserData, removeUserData, session }}
    >
      {children}
    </AuthorizationsContext.Provider>
  );
};

export default AuthorizationsProvider;
