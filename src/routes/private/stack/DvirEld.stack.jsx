import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '@pages/UnderConstruction';

const Stack = createStackNavigator();

export const routes = Object.freeze({
  DVIR_AND_ELD: 'DvirAndEld',
  CAMERA:'Camera',
});

const DvirEld = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={routes.DVIR_AND_ELD} component={(props)=><MockPage {...props} pageName={routes.DVIR_AND_ELD}/>} />
        <Stack.Screen name={routes.CAMERA} component={(props)=><MockPage {...props} pageName={routes.CAMERA}/>} />
      </Stack.Navigator>
  );
};

export default DvirEld;
