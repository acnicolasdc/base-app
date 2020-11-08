import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

const Profile = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="MyProfile" component={(props)=><MockPage {...props} pageName="MyProfile"/>} />
        <Stack.Screen name="UpdatePersonalInformation" component={(props)=><MockPage {...props} pageName="UpdatePersonalInformation"/>} />
      </Stack.Navigator>
  );
};

export default Profile;
