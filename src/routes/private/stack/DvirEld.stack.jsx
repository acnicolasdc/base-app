import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const DvirEld = createStackNavigator(
  {
    DvirEld: { screen: () => <MockPage pageName='DVIR ELD'/> },
    Camera: { screen: () => <MockPage pageName='Native Camera'/> },
  },
  {
    initialRouteName: "DvirEld",
  }
);

export default DvirEld;
