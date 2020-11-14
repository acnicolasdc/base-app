import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '@pages/UnderConstruction';

const Stack = createStackNavigator();

export const routes = Object.freeze({
  DRIVER_INFORMATIONS: 'DriverInformations',
  OTHER_QUALIFICATIONS_SETTINGS:'OtherQualificationsSettings',
  CAMERA_SCANNER:'CameraScanner',
  UPDATE_PREFERENCE_INFORMATION:'UpdatePreferenceInformation',
  ENDORSEMENT_SETTINGS:'EndorsementSettings',
});

const DriverInformation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={routes.DRIVER_INFORMATIONS} component={(props)=><MockPage {...props} pageName={routes.DRIVER_INFORMATIONS}/>} />
        <Stack.Screen name={routes.OTHER_QUALIFICATIONS_SETTINGS} component={(props)=><MockPage {...props} pageName={routes.OTHER_QUALIFICATIONS_SETTINGS}/>} />
        <Stack.Screen name={routes.CAMERA_SCANNER} component={(props)=><MockPage {...props} pageName={routes.CAMERA_SCANNER}/>} />
        <Stack.Screen name={routes.UPDATE_PREFERENCE_INFORMATION} component={(props)=><MockPage {...props} pageName={routes.UPDATE_PREFERENCE_INFORMATION}/>} />
        <Stack.Screen name={routes.ENDORSEMENT_SETTINGS} component={(props)=><MockPage {...props} pageName={routes.ENDORSEMENT_SETTINGS}/>} />
      </Stack.Navigator>
  );
};

export default DriverInformation;
