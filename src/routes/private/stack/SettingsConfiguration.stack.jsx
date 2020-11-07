import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const SettingsConfiguration = createStackNavigator(
  {
    SettingsConfigurations: { screen: () => <MockPage pageName='Settings Configurations'/> },
  },
  {
    initialRouteName: "SettingsConfigurations",
  }
);

export default SettingsConfiguration;
