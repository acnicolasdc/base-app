import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Settlement = createStackNavigator(
  {
    Settlements: { screen: null },
    SettlementsDetail: { screen: null },
    AddAdditionalFees: { screen: null },
  },
  {
    initialRouteName: "Settlements",
  }
);

export default Settlement;
