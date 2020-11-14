import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '@pages/UnderConstruction';

const Stack = createStackNavigator();

export const routes = Object.freeze({
  AVAILABLE_LOADS: 'AvailableLoads'
});

const AvailableLoad = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={routes.AVAILABLE_LOADS} component={(props)=><MockPage {...props} pageName={routes.AVAILABLE_LOADS}/>} />
      </Stack.Navigator>
  );
};

export default AvailableLoad;
