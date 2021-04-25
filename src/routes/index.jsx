import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Private from "./private";
import Public from "./public";
import { AuthorizationsContext } from "@providers/Authorizations";

const Routes = () => {
  const { session } = useContext(AuthorizationsContext);
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {session ? <Private /> : <Public />}
    </NavigationContainer>
  );
};

export default Routes;
