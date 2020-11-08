import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

export const routes = Object.freeze({
  MY_PROFILE:'MyProfile',
  UPDATE_PERSONAL_INFORMATION:'UpdatePersonalInformation',
});

const Profile = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={routes.MY_PROFILE} component={(props)=><MockPage {...props} pageName={routes.MY_PROFILE}/>} />
        <Stack.Screen name={routes.UPDATE_PERSONAL_INFORMATION} component={(props)=><MockPage {...props} pageName={routes.UPDATE_PERSONAL_INFORMATION}/>} />
      </Stack.Navigator>
  );
};

export default Profile;
