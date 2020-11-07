import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const MyEarning = createStackNavigator(
  {
    MyEarning: { screen: null },
  },
  {
    initialRouteName: "MyEarning",
  }
);

export default MyEarning;
