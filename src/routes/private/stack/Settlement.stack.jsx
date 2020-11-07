import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const Settlement = createStackNavigator(
  {
    Settlements: { screen: () => <MockPage pageName='Settlements'/> },
    SettlementsDetail: { screen: () => <MockPage pageName='Settlements Detail'/> },
    AddAdditionalFees: { screen: () => <MockPage pageName='Add Additional Fees'/> },
  },
  {
    initialRouteName: "Settlements",
  }
);

export default Settlement;
