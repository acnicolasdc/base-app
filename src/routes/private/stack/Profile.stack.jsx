import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Profile = createStackNavigator(
  {
    Profile: { screen: null },
    UpdatePersonalInformation: { screen: null },
  },
  {
    initialRouteName: "Profile",
  }
);

export default Profile;