import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const DriverInformation = createStackNavigator(
  {
    DriverInformation: { screen: null },
    OtherQualificationsSettings: { screen: null },
    CameraScanner: { screen: null },
    UpdatePreferenceInformation: { screen: null },
    EndorsementSettings: { screen: null },
  },
  {
    initialRouteName: "DriverInformation",
  }
);

export default DriverInformation;
