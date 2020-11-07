import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const DvirEld = createStackNavigator(
  {
    DvirEld: { screen: null },
    Camera: { screen: null },
  },
  {
    initialRouteName: "DvirEld",
  }
);

export default DvirEld;
