import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const Profile = createStackNavigator(
  {
    Profile: { screen: () => <MockPage pageName='Profile'/> },
    UpdatePersonalInformation: { screen: () => <MockPage pageName='Update Personal Information'/> },
  },
  {
    initialRouteName: "Profile",
  }
);

export default Profile;