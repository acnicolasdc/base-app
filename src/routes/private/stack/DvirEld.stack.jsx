import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

const DvirEld = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="DvirAndEld" component={(props)=><MockPage {...props} pageName="DvirAndEld"/>} />
        <Stack.Screen name="Camera" component={(props)=><MockPage {...props} pageName="Camera"/>} />
      </Stack.Navigator>
  );
};

export default DvirEld;
