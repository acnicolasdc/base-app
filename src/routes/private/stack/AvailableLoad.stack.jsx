import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

const AvailableLoad = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="AvailableLoads" component={(props)=><MockPage {...props} pageName="AvailableLoads"/>} />
      </Stack.Navigator>
  );
};

export default AvailableLoad;
