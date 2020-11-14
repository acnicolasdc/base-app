import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '@pages/UnderConstruction';

const Stack = createStackNavigator();

export const routes = Object.freeze({
  SETTINGS_CONFIGURATIONS:'SettingsConfigurations',
});

const SettingsConfiguration = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={routes.SETTINGS_CONFIGURATIONS} component={(props)=><MockPage {...props} pageName={routes.SETTINGS_CONFIGURATIONS}/>} />
      </Stack.Navigator>
  );
};

export default SettingsConfiguration;
