import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const ShipmentDetail = createStackNavigator(
  {
    ShipmentDetails: { screen: () => <MockPage pageName='Shipment Details'/> },
    SeaUpdate: { screen: () => <MockPage pageName='Sea Update'/> },
    ChasisUpdate: { screen: () => <MockPage pageName='Chasis Update'/> },
    GenerateSettlement: { screen: () => <MockPage pageName='Generate Settlement'/> },
  },
  {
    initialRouteName: "ShipmentDetails",
  }
);

export default ShipmentDetail;
