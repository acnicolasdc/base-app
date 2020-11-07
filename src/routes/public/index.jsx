import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const Public = createStackNavigator(
  {
    onBoarding: { screen: () => <MockPage pageName='onBoarding'/> },
    Login: { screen: () => <MockPage pageName='Login'/> },
    ForgotPassword: { screen: () => <MockPage pageName='ForgotPassword'/> },
    SingUp: { screen: () => <MockPage pageName='SingUp'/> },
    ResetPassword: { screen: () => <MockPage pageName='ResetPassword'/> },
  },
  {
    initialRouteName: "onBoarding",
  }
);

export default Public;
