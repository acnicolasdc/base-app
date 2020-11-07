import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const MyEarning = createStackNavigator(
  {
    MyEarning: { screen: () => <MockPage pageName='My Earning'/> },
  },
  {
    initialRouteName: "MyEarning",
  }
);

export default MyEarning;
