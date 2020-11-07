import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const AvailableLoad = createStackNavigator(
  {
    AvailableLoads: { screen: () => <MockPage pageName='Available Loads'/> },
  },
  {
    initialRouteName: "AvailableLoads",
  }
);

export default AvailableLoad;
