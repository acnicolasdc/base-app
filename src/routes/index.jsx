import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Private from "./private";
import Public from "./public";
const LOGIN = true;
const Routes = () => {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {LOGIN ? <Private /> : <Public />}
    </NavigationContainer>
  );
};

export default Routes;
