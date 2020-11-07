import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const SettingsConfiguration = createStackNavigator(
  {
    SettingsConfigurations: { screen: null },
  },
  {
    initialRouteName: "SettingsConfigurations",
  }
);

export default SettingsConfiguration;
