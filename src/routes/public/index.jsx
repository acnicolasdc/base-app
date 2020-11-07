import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Public = createStackNavigator(
  {
    onBoarding: { screen: null },
    Login: { screen: null },
    ForgotPassword: { screen: null },
    SingUp: { screen: null },
    ResetPassword: { screen: null },
  },
  {
    initialRouteName: "onBoarding",
  }
);

export default Public;
