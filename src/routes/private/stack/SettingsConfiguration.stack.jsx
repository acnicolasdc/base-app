import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

const SettingsConfiguration = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="SettingsConfigurations" component={(props)=><MockPage {...props} pageName="SettingsConfigurations"/>} />
      </Stack.Navigator>
  );
};

export default SettingsConfiguration;
