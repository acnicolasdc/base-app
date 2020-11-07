import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Notification = createStackNavigator(
  {
    Notifications: { screen: null },
  },
  {
    initialRouteName: "Notifications",
  }
);

export default Notification;
