import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const ShipmentDetail = createStackNavigator(
  {
    ShipmentDetails: { screen: null },
    SeaUpdate: { screen: null },
    ChasisUpdate: { screen: null },
    GenerateSettlement: { screen: null },
  },
  {
    initialRouteName: "ShipmentDetails",
  }
);

export default ShipmentDetail;
