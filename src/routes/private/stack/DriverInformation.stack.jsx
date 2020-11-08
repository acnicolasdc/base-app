import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

const DriverInformation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="DriverInformations" component={(props)=><MockPage {...props} pageName="DriverInformations"/>} />
        <Stack.Screen name="OtherQualificationsSettings" component={(props)=><MockPage {...props} pageName="OtherQualificationsSettings"/>} />
        <Stack.Screen name="CameraScanner" component={(props)=><MockPage {...props} pageName="CameraScanner"/>} />
        <Stack.Screen name="UpdatePreferenceInformation" component={(props)=><MockPage {...props} pageName="UpdatePreferenceInformation"/>} />
        <Stack.Screen name="EndorsementSettings" component={(props)=><MockPage {...props} pageName="EndorsementSettings"/>} />
      </Stack.Navigator>
  );
};

export default DriverInformation;
