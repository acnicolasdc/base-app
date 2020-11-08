import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

const MyEarning = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="MyEarnings" component={(props)=><MockPage {...props} pageName="MyEarnings"/>} />
      </Stack.Navigator>
  );
};

export default MyEarning;
