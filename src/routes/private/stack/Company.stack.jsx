import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const Company = createStackNavigator(
  {
    Companies: { screen: () => <MockPage pageName='Companies'/> },
    Organizations: { screen: () => <MockPage pageName='Organizations'/> },
    Request: { screen: () => <MockPage pageName='Request'/> },
  },
  {
    initialRouteName: "Companies",
  }
);

export default Company;
