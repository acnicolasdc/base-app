import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const Notification = createStackNavigator(
  {
    Notifications: { screen: () => <MockPage pageName='Notifications'/> },
  },
  {
    initialRouteName: "Notifications",
  }
);

export default Notification;
